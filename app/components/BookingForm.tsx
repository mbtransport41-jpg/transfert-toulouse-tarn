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
  message: '',
};

const SERVICE_ID = 'service_qq5eacp';
const TEMPLATE_ID = 'template_72td9cf';
const PUBLIC_KEY = 'Ei0v13zei0qINODgj';

export default function BookingForm() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<FormValues>(initialForm);
  const [status, setStatus] = useState<Status>({ type: 'idle', message: '' });
const tarifs: Record<string, number> = {
  "Aéroport Toulouse-Blagnac|Castres": 119,
  "Gare Toulouse-Matabiau|Castres": 109,

  "Aéroport Toulouse-Blagnac|Albi": 129,
  "Gare Toulouse-Matabiau|Albi": 119,

  "Aéroport Toulouse-Blagnac|Mazamet": 129,
  "Gare Toulouse-Matabiau|Mazamet": 119,

  "Aéroport Toulouse-Blagnac|Lavaur": 109,
  "Gare Toulouse-Matabiau|Lavaur": 99,

  "Aéroport Toulouse-Blagnac|Revel": 109,
  "Gare Toulouse-Matabiau|Revel": 99,
};

const prix =
  tarifs[`${formData.pickup}|${formData.destination}`] ?? 0;
  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  useEffect(() => {
    const destinationFromUrl = searchParams.get('destination');
    if (!destinationFromUrl) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      destination: destinationFromUrl,
    }));
  }, [searchParams]);

const handleStripePayment = async () => {
  const response = await fetch("/api/create-checkout-session", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prix,
    }),
  });

  const data = await response.json();

if (data.url) {
  window.location.href = data.url;
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

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          name: formData.name,
          email: formData.email,
          reply_to: formData.email,
          phone: formData.phone,
          pickup: formData.pickup,
          departure: formData.pickup,
          destination: formData.destination,
          arrival: formData.destination,
          date: formData.date,
          travel_date: formData.date,
          passengers: formData.passengers,
          message: formData.message,
          user_message: formData.message,
        },
        PUBLIC_KEY
      );

      setStatus({
        type: 'success',
        message: 'Demande envoyée avec succès. Nous vous recontacterons très vite.',
      });
      setFormData(initialForm);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        type: 'error',
        message: 'Une erreur est survenue. Veuillez nous contacter directement par téléphone.',
      });
    }
  };

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
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
  <option value="Aéroport Toulouse-Blagnac">
    ✈️ Aéroport Toulouse-Blagnac
  </option>
  <option value="Gare Toulouse-Matabiau">
    🚆 Gare Toulouse-Matabiau
  </option>
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
  <option value="Castres">Castres</option>
  <option value="Albi">Albi</option>
  <option value="Mazamet">Mazamet</option>
  <option value="Lavaur">Lavaur</option>
  <option value="Revel">Revel</option>
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

<button 
type="button"
onClick={handleStripePayment} 
className="inline-flex items-center 
justify-center rounded-full bg-green-600
px-6 py-3 text-white font-semibold
hover:bg-green-700 mb-4 w-full">
  
{prix > 0 && (
  <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 text-center">
    <p className="text-sm text-slate-600">Tarif du transfert</p>
    <p className="text-3xl font-bold text-amber-600">
      {prix} €
    </p>
  </div>
)}
    Payer maintenant
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
