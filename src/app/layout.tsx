import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display, Amiri } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const serifFont = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const arabicFont = Amiri({
  variable: "--font-arabic",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Noor Quran Academy | Serene Online Quran Learning",
  description: "Learn Quran reading, Tajweed, Hifz, and Arabic online with certified tutors. 1-on-1 personalized sessions in a peaceful learning environment.",
  keywords: ["Quran Academy", "Online Quran Classes", "Tajweed", "Quran Memorization", "Learn Quran", "Arabic Lessons"],
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
      <body className="min-h-screen flex flex-col antialiased selection:bg-sage-200 selection:text-sage-900 bg-cream-100 text-sage-900">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
