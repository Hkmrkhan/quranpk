import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Amiri } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const serifFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const arabicFont = Amiri({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B2413",
};

export const metadata: Metadata = {
  title: "Online Quran Classes USA, UK, Canada & Australia | Huzaifa's Online Quran Academy",
  description:
    "Top-rated 1-on-1 Online Quran Classes for kids & adults in USA, UK, Canada, Australia & UAE. Certified Al-Azhar tutors for Norani Qaida, Tajweed rules & Hifz memorization. Flexible schedules starting at $10/mo.",
  keywords: [
    "Online Quran Classes USA",
    "Online Quran Tutor UK",
    "Quran Teacher Canada",
    "Learn Tajweed Australia",
    "Norani Qaida for Kids USA",
    "Female Quran Tutor UK",
    "Quran Memorization Hifz USA",
    "1-on-1 Quran Lessons London",
    "Online Quran Academy New York",
    "Quran Teacher Sydney",
    "Huzaifa's Online Quran Classes",
    "Huzaifa Quran Academy",
  ],
  authors: [{ name: "Huzaifa Khan" }],
  creator: "Huzaifa Khan",
  publisher: "Huzaifa's Online Quran Classes",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Online Quran Classes USA, UK, Canada & Australia | Huzaifa's Online Quran Academy",
    description:
      "Empowering kids and adults worldwide in USA, UK, Canada, Australia & UAE with authentic Norani Qaida, Tajweed rules, and Quran memorization under certified native Arab scholars. Starts at $10/mo.",
    url: "https://quranpk.vercel.app",
    siteName: "Huzaifa's Online Quran Classes",
    locale: "en_US",
    alternateLocale: ["en_GB", "en_CA", "en_AU", "en_AE"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Quran Classes USA, UK, Canada & Australia",
    description:
      "Learn Norani Qaida, Tajweed, and Hifz online in USA, UK, Canada, Australia & UAE with certified native Arab tutors.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://quranpk.vercel.app",
  },
};

// International Educational Organization JSON-LD Schema for Google SEO
const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "EducationalOrganization",
      "@id": "https://quranpk.vercel.app/#organization",
      "name": "Huzaifa's Online Quran Classes",
      "url": "https://quranpk.vercel.app",
      "logo": "https://quranpk.vercel.app/logo.png",
      "description":
        "International online Quran academy offering 1-on-1 Norani Qaida, Tajweed rules, and Hifz memorization for kids and adults across USA, UK, Canada, Australia & UAE.",
      "areaServed": [
        "United States",
        "United Kingdom",
        "Canada",
        "Australia",
        "United Arab Emirates",
        "Europe"
      ],
      "sameAs": ["https://github.com/Hkmrkhan/quranpk"],
      "offers": [
        {
          "@type": "Offer",
          "name": "Norani Qaida & Basic Quran for Kids",
          "price": "10.00",
          "priceCurrency": "USD",
        },
        {
          "@type": "Offer",
          "name": "Quran Reading & Tajweed Rules",
          "price": "20.00",
          "priceCurrency": "USD",
        },
        {
          "@type": "Offer",
          "name": "Complete Quran Hifz Program",
          "price": "50.00",
          "priceCurrency": "USD",
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sansFont.variable} ${serifFont.variable} ${arabicFont.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased selection:bg-sage-200 selection:text-sage-900 bg-cream-100 text-sage-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
