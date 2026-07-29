import { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { FaQuran } from "react-icons/fa";
import { FiBookmark, FiCheckCircle } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Essential Prophetic Duas & Daily Athkar | Arabic & English Translation",
  description:
    "Discover essential Quranic and Prophetic Duas for morning, evening, sleep, trial relief, and seeking forgiveness with Arabic text, transliteration, and English meanings.",
  alternates: {
    canonical: "https://quranpk.vercel.app/dua",
  },
};

const duas = [
  {
    title: "Dua for Guidance & Firmness of Heart",
    arabic: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ",
    transliteration: "Ya Muqallibal-qulubi thabbit qalbi 'ala dinik.",
    translation: "O Turner of the hearts, keep my heart firm upon Your religion.",
    source: "Sunan At-Tirmidhi",
    category: "Faith & Steadfastness",
  },
  {
    title: "Dua for Knowledge & Understanding",
    arabic: "رَّبِّ زِدْنِي عِلْمًا",
    transliteration: "Rabbi zidni 'ilma.",
    translation: "My Lord, increase me in knowledge.",
    source: "Surah Taha (20:114)",
    category: "Quranic Supplication",
  },
  {
    title: "Dua in Distress & Difficulty (Dua of Yunus)",
    arabic: "لَّا إِلَٰهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ",
    transliteration: "La ilaha illa anta subhanaka inni kuntu minaz-zalimin.",
    translation: "There is no deity except You; exalted are You. Indeed, I have been of the wrongdoers.",
    source: "Surah Al-Anbiya (21:87)",
    category: "Relief from Hardship",
  },
  {
    title: "Dua for Good in This World & Hereafter",
    arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ",
    transliteration: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar.",
    translation: "Our Lord, give us in this world that which is good and in the Hereafter that which is good and protect us from the punishment of the Fire.",
    source: "Surah Al-Baqarah (2:201)",
    category: "Comprehensive Dua",
  },
];

export default function DuasPage() {
  return (
    <div className="pt-28 pb-20 space-y-16">
      <section className="bg-sage-900 text-cream-50 py-16 text-center space-y-4">
        <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase bg-gold-500/20 text-gold-400 border border-gold-500/30">
          Islamic Supplications
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold">
          Essential Prophetic Duas & Daily Athkar
        </h1>
        <p className="text-sage-200 text-base max-w-2xl mx-auto">
          Authentic Quranic and Sunnah supplications for peace of mind, spiritual protection, and daily remembrance.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
        <SectionHeading
          badge="Daily Supplications"
          title="Powerful Duas from Quran & Sunnah"
          subtitle="Recite these authentic supplications with understanding and sincerity."
        />

        <div className="space-y-6">
          {duas.map((dua, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
              <div className="bg-cream-50 rounded-3xl p-8 border border-sage-300 shadow-xs space-y-4">
                <div className="flex items-center justify-between border-b border-sage-200 pb-3">
                  <span className="px-3 py-1 rounded-md text-xs font-extrabold bg-sage-100 text-sage-900 border border-sage-300">
                    {dua.category}
                  </span>
                  <span className="text-xs text-gold-600 font-bold">{dua.source}</span>
                </div>
                <h3 className="font-serif font-bold text-xl text-sage-900">{dua.title}</h3>
                <p className="font-serif font-arabic text-right text-2xl font-bold text-sage-800 my-3 leading-loose">
                  {dua.arabic}
                </p>
                <p className="text-xs sm:text-sm font-semibold text-gold-600 italic">
                  &ldquo;{dua.transliteration}&rdquo;
                </p>
                <p className="text-sage-900 font-medium text-sm sm:text-base leading-relaxed pt-2 border-t border-sage-200">
                  {dua.translation}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal direction="zoom">
          <div className="bg-sage-900 text-cream-50 p-8 rounded-3xl text-center space-y-4 border border-sage-800">
            <h3 className="font-serif font-bold text-2xl text-cream-50">
              Want To Learn Quranic Arabic & Duas With Understanding?
            </h3>
            <p className="text-sage-200 text-sm max-w-lg mx-auto">
              Join our 1-on-1 online classes with Al-Azhar certified tutors starting at $10/mo.
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
