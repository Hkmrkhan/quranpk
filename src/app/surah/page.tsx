import { Metadata } from "next";
import Link from "next/link";
import { surahsList } from "@/data/surahs";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { FaQuran } from "react-icons/fa";
import { FiBookOpen, FiClock, FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "All 114 Surahs of the Holy Quran | Read & Listen Online",
  description:
    "Explore all 114 Surahs of the Holy Quran with Arabic text, meanings, background history, spiritual benefits, and audio recitations. Learn Tajweed 1-on-1 with certified native scholars.",
  alternates: {
    canonical: "https://quranpk.vercel.app/surah",
  },
};

export default function SurahsDirectoryPage() {
  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Header Banner */}
      <section className="bg-sage-900 text-cream-50 py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-4 relative z-10">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-gold-500/20 text-gold-400 border border-gold-500/30">
            Quranic Knowledge Hub
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight">
            Surah Directory & Tajweed Guide
          </h1>
          <p className="text-sage-200 text-base max-w-2xl mx-auto font-medium">
            Explore individual Surah chapters with comprehensive historical background, spiritual virtues, recitations, and Tajweed notes.
          </p>
        </div>
      </section>

      {/* Surahs Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Complete Quranic Index"
          title="Featured Surah Chapters"
          subtitle="Click on any Surah to read its background, virtues, FAQs, and listen to high-quality audio recitation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {surahsList.map((surah, idx) => (
            <ScrollReveal key={surah.slug} direction="up" delay={idx * 0.08}>
              <Link
                href={`/surah/${surah.slug}`}
                className="group bg-cream-50 rounded-2xl p-6 border border-sage-300 shadow-xs hover:shadow-xl hover:border-gold-500 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="w-8 h-8 rounded-full bg-sage-100 text-sage-900 font-extrabold text-xs flex items-center justify-center border border-sage-300">
                      #{surah.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-extrabold uppercase bg-gold-400/20 text-gold-600 border border-gold-400/40">
                      {surah.revelationType}
                    </span>
                  </div>

                  <div className="flex items-baseline justify-between mb-2">
                    <h2 className="font-serif text-xl font-bold text-sage-900 group-hover:text-sage-700 transition-colors">
                      {surah.nameEnglish}
                    </h2>
                    <span className="font-serif font-arabic text-xl font-bold text-sage-800">
                      {surah.nameArabic}
                    </span>
                  </div>

                  <p className="text-xs text-sage-700 font-bold uppercase tracking-wider mb-3">
                    Meaning: &ldquo;{surah.meaning}&rdquo;
                  </p>

                  <p className="text-sage-900 font-medium text-sm leading-relaxed mb-6 line-clamp-3">
                    {surah.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-sage-200 flex items-center justify-between text-xs font-bold text-sage-800">
                  <span>{surah.numberOfAyahs} Verses</span>
                  <span className="inline-flex items-center gap-1 text-sage-900 group-hover:text-gold-600 transition-colors">
                    Read & Listen <FiArrowRight />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
