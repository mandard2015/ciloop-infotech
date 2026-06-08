# Ciloop Infotech Website

This is a production-oriented Next.js (App Router) website scaffold built for an IT services and software development company.

## Features

- Next.js App Router with React Server Components
- TypeScript strict typing
- Tailwind CSS v4 styling
- Framer Motion animations
- React Hook Form + Zod validation
- REST API route for contact submissions
- SEO-friendly page metadata
- Responsive layout for desktop, tablet, and mobile
- Accessible semantic HTML with focus-visible states

## Run locally

```bash
cd "e:\MANDAR\IT firm\ciloop-infotech"
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deployment

Deploy the `ciloop-infotech` folder to Vercel. The `public/robots.txt` and `public/sitemap.xml` files are included.

## Project structure

- `app/` — application routes and pages
- `components/` — reusable UI and layout components
- `lib/` — shared configuration and helpers
- `public/` — static assets and SEO files

## Notes

The contact form is currently connected to a serverless API route at `/api/contact` with validation via Zod. You can extend it later for Neon PostgreSQL, CRM integration, or email delivery.
