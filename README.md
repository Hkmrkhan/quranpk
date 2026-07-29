# Noor Quran Academy 🌙

A serene, authentic online Quran Academy web application built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🌟 Features

- **Serene Green & Cream Aesthetics**: Elegant, tranquil UI designed with soft sage green (`#1E3E29`), cream (`#FAF6F0`), and warm gold accents (`#D4AF37`).
- **Scroll Animations**: Smooth Framer Motion reveal animations as you scroll across all pages.
- **Static Informational Pages**:
  - **Home (`/`)**: Hero banner, stats counter, program previews, why choose us, student testimonials, USD pricing, and enrollment CTAs.
  - **Courses (`/courses`)**: Searchable and filterable course catalog (Tajweed, Hifz, Kids, Arabic Language, Tafseer, Ijazah).
  - **Recitations (`/recitations`)**: Audio sanctuary with interactive demo player controls and recitation style guide.
  - **Resources (`/resources`)**: Downloadable study guides and FAQ knowledge base.
  - **Pricing (`/pricing`)**: USD tuition tiers ($29, $59, $99/mo), money-back guarantee, and full side-by-side feature matrix.
  - **Contact (`/contact`)**: Working SMTP contact form submitting to `/api/contact`.

## 🛠️ Getting Started

First, install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📧 SMTP Configuration

Create a `.env.local` file in the root directory:

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
CONTACT_EMAIL=your_email@gmail.com
```

## 📄 License

Created for Noor Quran Academy.
