This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Configuration EmailJS pour le formulaire de reservation

Le formulaire Demandez un transfert envoie les variables suivantes a `emailjs.send()`:

- `full_name`
- `customer_email`
- `customer_phone`
- `passengers_count`
- `pickup_address`
- `destination_address`
- `desired_datetime`
- `bags_count`
- `trip_type`
- `customer_message`
- `estimated_price`
- `request_datetime`

Des variables de compatibilite (`from_name`, `reply_to`, etc.) sont aussi transmises, mais le template principal doit utiliser la liste ci-dessus.

### Template texte recommande (EmailJS)

Utilisez ce contenu dans le template `template_72td9cf`:

```txt
Nouvelle demande de transfert

Nom et prenom: {{full_name}}
E-mail: {{customer_email}}
Telephone: {{customer_phone}}
Nombre de voyageurs: {{passengers_count}}
Adresse de prise en charge: {{pickup_address}}
Destination: {{destination_address}}
Date et heure souhaitees: {{desired_datetime}}
Nombre de bagages: {{bags_count}}
Type de trajet: {{trip_type}}
Message du client: {{customer_message}}
Prix estime: {{estimated_price}}
Date et heure de la demande: {{request_datetime}}
```

### Objet recommande

```txt
Nouvelle demande de transfert - {{full_name}}
```
