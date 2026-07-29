import { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { FiBookmark } from "react-icons/fi";

export const metadata: Metadata = {
  title: "99 Names of Allah (Asma-ul-Husna) | Meanings & Virtues",
  description:
    "Learn the 99 Beautiful Names of Allah (Asma ul Husna) with Arabic text, transliteration, English meanings, and spiritual benefits.",
  alternates: {
    canonical: "https://quranpk.vercel.app/99-names-of-allah",
  },
};

const names = [
  { num: 1, arabic: "الرَّحْمَٰنُ", name: "Ar-Rahman", meaning: "The Most or Entirely Merciful" },
  { num: 2, arabic: "الرَّحِيمُ", name: "Ar-Raheem", meaning: "The Bestower of Mercy" },
  { num: 3, arabic: "الْمَلِكُ", name: "Al-Malik", meaning: "The King and Owner of All" },
  { num: 4, arabic: "الْقُدُّوسُ", name: "Al-Quddus", meaning: "The Absolutely Pure" },
  { num: 5, arabic: "السَّلَامُ", name: "As-Salam", meaning: "The Perfection and Giver of Peace" },
  { num: 6, arabic: "الْمُؤْمِنُ", name: "Al-Mu'min", meaning: "The Giver of Security" },
  { num: 7, arabic: "الْمُهَيْمِنُ", name: "Al-Muhaymin", meaning: "The Guardian, The Witness" },
  { num: 8, arabic: "الْعَزِيزُ", name: "Al-Aziz", meaning: "The All-Mighty" },
  { num: 9, arabic: "الْجَبَّارُ", name: "Al-Jabbar", meaning: "The Compeller, The Restorer" },
  { num: 10, arabic: "الْمُتَكَبِّرُ", name: "Al-Mutakabbir", meaning: "The Supreme, The Majestic" },
  { num: 11, arabic: "الْخَالِقُ", name: "Al-Khaliq", meaning: "The Creator" },
  { num: 12, arabic: "الْبَارِئُ", name: "Al-Bari", meaning: "The Evolver, The Maker" },
];

export default function NamesOfAllahPage() {
  return (
    <div className="pt-28 pb-20 space-y-16">
      <section className="bg-sage-900 text-cream-50 py-16 text-center space-y-4">
        <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase bg-gold-500/20 text-gold-400 border border-gold-500/30">
          Divine Attributes
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold">
          99 Names of Allah (Asma ul Husna)
        </h1>
        <p className="text-sage-200 text-base max-w-2xl mx-auto font-medium">
          &ldquo;And to Allah belong the best names, so invoke Him by them.&rdquo; (Surah Al-A'raf 7:180)
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          badge="Asma ul Husna"
          title="The Most Beautiful Names"
          subtitle="Explore the names of Allah Almighty with Arabic script, transliteration, and English meanings."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {names.map((item, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.05}>
              <div className="bg-cream-50 rounded-2xl p-6 border border-sage-300 shadow-xs space-y-3 text-center">
                <span className="w-8 h-8 rounded-full bg-sage-100 text-sage-900 font-extrabold text-xs inline-flex items-center justify-center border border-sage-300">
                  #{item.num}
                </span>
                <p className="font-serif font-arabic text-3xl font-bold text-sage-800">
                  {item.arabic}
                </p>
                <h3 className="font-serif font-bold text-lg text-sage-900">{item.name}</h3>
                <p className="text-xs text-sage-700 font-semibold">{item.meaning}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal direction="zoom">
          <div className="bg-sage-900 text-cream-50 p-8 rounded-3xl text-center space-y-4 border border-sage-800">
            <h3 className="font-serif font-bold text-2xl text-cream-50">
              Start Learning The Quran & Tajweed 1-on-1 Today
            </h3>
            <p className="text-sage-200 text-sm max-w-lg mx-auto font-medium">
              Flexible scheduling starting at $10/mo with certified scholars.
            </p>
            <Link
              href="/#contact-section"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold-400 text-sage-900 font-extrabold text-sm hover:bg-gold-300 transition-colors shadow-md"
            >
              <FiBookmark />
              <span>Reserve Seat Now</span>
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
