'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import emailjs from '@emailjs/browser';

type FormValues = {
  name: string;
  email: string;
  phone: string;
  pickup: string;
  destination: string;
  date: string;
  passengers: string;
  bags: string;
  trip_type: string;
  message: string;
};

type Status = {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
};

const initialForm: FormValues = {
  name: '',
  email: '',
  phone: '',
  pickup: '',
  destination: '',
  date: '',
  passengers: '',
  bags: '',
  trip_type: '',
  message: '',
};

const SERVICE_ID = 'service_qq5eacp';
const TEMPLATE_ID = 'template_72td9cf';
const PUBLIC_KEY = 'Ei0v13zei0qINODgj';

const baseTarifs: Array<[string, string, number]> = [
  ['Aéroport Toulouse-Blagnac', 'Castres', 119],
  ['Gare Toulouse-Matabiau', 'Castres', 109],
  ['Aéroport Toulouse-Blagnac', 'Albi', 129],
  ['Gare Toulouse-Matabiau', 'Albi', 119],
  ['Aéroport Toulouse-Blagnac', 'Mazamet', 129],
  ['Gare Toulouse-Matabiau', 'Mazamet', 119],
  ['Aéroport Toulouse-Blagnac', 'Lavaur', 109],
  ['Gare Toulouse-Matabiau', 'Lavaur', 99],
  ['Aéroport Toulouse-Blagnac', 'Revel', 109],
  ['Gare Toulouse-Matabiau', 'Revel', 99],
  ['Aéroport Toulouse-Blagnac', 'Sorèze', 120],
  ['Gare Toulouse-Matabiau', 'Sorèze', 114],
  ['Aéroport Toulouse-Blagnac', 'Saint-Ferréol', 119],
  ['Gare Toulouse-Matabiau', 'Saint-Ferréol', 109],
  ['Aéroport Toulouse-Blagnac', 'Carcassonne', 156],
  ['Gare Toulouse-Matabiau', 'Carcassonne', 132],
  ['Aéroport Toulouse-Blagnac', 'Castelnaudary', 109],
  ['Gare Toulouse-Matabiau', 'Castelnaudary', 99],
  ['Aéroport Toulouse-Blagnac', 'Montauban', 99],
  ['Gare Toulouse-Matabiau', 'Montauban', 89],
  ['Aéroport Toulouse-Blagnac', 'Moissac', 109],
  ['Gare Toulouse-Matabiau', 'Moissac', 99],
  ['Aéroport Toulouse-Blagnac', 'Castelsarrasin', 109],
  ['Gare Toulouse-Matabiau', 'Castelsarrasin', 99],
];

const tarifs: Record<string, number> = baseTarifs.reduce<Record<string, number>>((acc, [pickup, destination, price]) => {
  acc[`${pickup}|${destination}`] = price;
  acc[`${destination}|${pickup}`] = price;
  return acc;
}, {});

const locations = [
  'Aéroport Toulouse-Blagnac',
  'Gare Toulouse-Matabiau',
  'Castres',
  'Albi',
  'Mazamet',
  'Lavaur',
  'Revel',
  'Sorèze',
  'Saint-Ferréol',
  'Carcassonne',
  'Castelnaudary',
  'Montauban',
  'Moissac',
  'Castelsarrasin',
];

export default function BookingForm() {
  const searchParams = useSearchParams();
  const pickupParam = searchParams.get('pickup');
  const destinationParam = searchParams.get('destination');
  const [formData, setFormData] = useState<FormValues>(() => ({
    ...initialForm,
    pickup: pickupParam ?? '',
    destination: destinationParam ?? '',
  }));
  const [status, setStatus] = useState<Status>({ type: 'idle', message: '' });

  useEffect(() => {
    if (!pickupParam && !destinationParam) return;

    setFormData((prev) => ({
      ...prev,
      pickup: pickupParam ?? prev.pickup,
      destination: destinationParam ?? prev.destination,
    }));
  }, [pickupParam, destinationParam]);

  const prix = tarifs[`${formData.pickup}|${formData.destination}`] ?? 0;

  const handleStripePayment = async () => {
  if (!formData.email) {
    setStatus({ type: 'error', message: 'Veuillez renseigner votre adresse e-mail avant de payer.' });
    return;
  }

  if (prix <= 0) {
    setStatus({ type: 'error', message: 'Veuillez sélectionner un trajet valide avant de payer.' });
    return;
  }

  setStatus({ type: 'loading', message: 'Redirection vers Stripe en cours...' });

  try {
    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prix,
        email: formData.email,
      }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data?.error || 'Impossible de créer la session de paiement Stripe.');
    }

    if (!data?.url) {
      throw new Error('URL Stripe Checkout manquante.');
    }

    window.location.assign(data.url);
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erreur inconnue pendant le paiement.';
    setStatus({ type: 'error', message });
  }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus({ type: 'loading', message: 'Envoi de votre demande en cours...' });

    const requestDateTime = new Date().toLocaleString('fr-FR', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
      timeZone: 'Europe/Paris',
    });

    const estimatedPrice = prix > 0 ? `${prix} EUR` : 'Non calcule';

    try {
      const response = await fetch('/api/booking-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          estimated_price: estimatedPrice,
          request_datetime: requestDateTime,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data?.error || 'Impossible d\'envoyer la demande de transfert.');
      }

      if (data?.sentBy === 'client') {
        const serviceId = data?.serviceId || SERVICE_ID;
        const templateId = data?.templateId || TEMPLATE_ID;
        const publicKey = data?.publicKey || PUBLIC_KEY;
        const templateParams = data?.templateParams || {
          ...formData,
          estimated_price: estimatedPrice,
          request_datetime: requestDateTime,
        };

        await emailjs.send(serviceId, templateId, templateParams, publicKey);
      }

      setStatus({
        type: 'success',
        message: 'Demande envoyée avec succès. Nous vous recontacterons très vite.',
      });
      setFormData(initialForm);
    } catch (error) {
      console.error('Booking request error:', error);
      const message = error instanceof Error
        ? error.message
        : 'Une erreur est survenue. Veuillez nous contacter directement par téléphone.';
      setStatus({
        type: 'error',
        message,
      });
    }
  };

  return (
    <section id="booking" className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-600">Réservation</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">Demandez un transfert</h2>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Remplissez ce formulaire pour recevoir une estimation rapide et un accompagnement personnalisé.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
              Nom et prénom
            </label>
            <input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              placeholder="Jean Dupont"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
              Adresse e-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              placeholder="vous@exemple.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
              Téléphone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
              placeholder="06 12 34 56 78"
            />
          </div>

          <div>
            <label htmlFor="passengers" className="mb-2 block text-sm font-medium text-slate-700">
              Nombre de voyageurs
            </label>
            <select
              id="passengers"
              name="passengers"
              value={formData.passengers}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
            >
              <option value="">Choisir</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5+">5 et plus</option>
            </select>
          </div>

          <div>
            <label htmlFor="pickup" className="mb-2 block text-sm font-medium text-slate-700">
              Adresse de prise en charge
            </label>
            <select
  id="pickup"
  name="pickup"
  value={formData.pickup}
  onChange={handleChange}
  required
  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
>
  <option value="">Choisir un départ</option>
  {locations.map((location) => (
    <option key={location} value={location}>
      {location}
    </option>
  ))}
</select>
          </div>

          <div>
            <label htmlFor="destination" className="mb-2 block text-sm font-medium text-slate-700">
              Destination
            </label>
           <select
  id="destination"
  name="destination"
  value={formData.destination}
  onChange={handleChange}
  required
  className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
>
  <option value="">Choisir une destination</option>
  {locations.map((location) => (
    <option key={location} value={location}>
      {location}
    </option>
  ))}
</select>
          </div>

          <div>
            <label htmlFor="date" className="mb-2 block text-sm font-medium text-slate-700">
              Date et heure souhaitées
            </label>
            <input
              id="date"
              name="date"
              type="datetime-local"
              value={formData.date}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
            />
          </div>

          <div>
            <label htmlFor="bags" className="mb-2 block text-sm font-medium text-slate-700">
              Nombre de bagages
            </label>
            <select
              id="bags"
              name="bags"
              value={formData.bags}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
            >
              <option value="">Choisir</option>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4+">4 et plus</option>
            </select>
          </div>

          <div>
            <label htmlFor="trip_type" className="mb-2 block text-sm font-medium text-slate-700">
              Type de trajet
            </label>
            <select
              id="trip_type"
              name="trip_type"
              value={formData.trip_type}
              onChange={handleChange}
              required
              className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
            >
              <option value="">Choisir</option>
              <option value="Aller simple">Aller simple</option>
              <option value="Aller-retour">Aller-retour</option>
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
            Informations complémentaires
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-amber-500 focus:ring-2 focus:ring-amber-100"
            placeholder="Votre vol, votre horaire, bagages, animaux, ou toute précision utile..."
          />
        </div>

        {status.message ? (
          <div
            className={`rounded-2xl border px-4 py-3 text-sm ${
              status.type === 'success'
                ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                : status.type === 'error'
                  ? 'border-rose-200 bg-rose-50 text-rose-700'
                  : 'border-sky-200 bg-sky-50 text-sky-700'
            }`}
          >
            {status.message}
          </div>
        ) : null}

        {prix > 0 && (
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-center">
            <p className="text-sm text-slate-600">Tarif du transfert</p>
            <p className="text-3xl font-bold text-amber-600">{prix} €</p>
          </div>
        )}

        <button
          type="button"
          onClick={handleStripePayment}
          disabled={status.type === 'loading'}
          className="mb-4 inline-flex w-full items-center justify-center rounded-full bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 disabled:cursor-not-allowed disabled:bg-green-400"
        >
          {status.type === 'loading' ? 'Redirection en cours...' : 'Payer en ligne'}
        </button>

        <button
          type="submit"
          disabled={status.type === 'loading'}
          className="inline-flex items-center justify-center rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-amber-700 disabled:cursor-not-allowed disabled:bg-amber-400"
        >
          {status.type === 'loading' ? 'Envoi en cours...' : 'Envoyer la demande'}
        </button>
      </form>
    </section>
  );
}
