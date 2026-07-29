import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getSurahBySlug, surahsList } from "@/data/surahs";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { FaQuran, FaStar } from "react-icons/fa";
import {
  FiClock,
  FiBookOpen,
  FiArrowLeft,
  FiArrowRight,
  FiCheckCircle,
  FiHelpCircle,
  FiBookmark,
  FiPlay,
  FiHeadphones,
} from "react-icons/fi";
import SurahAudioPlayer from "@/components/SurahAudioPlayer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const surah = getSurahBySlug(resolvedParams.slug);

  if (!surah) {
    return {
      title: "Surah Not Found | Huzaifa's Online Quran Classes",
    };
  }

  const title = `${surah.nameEnglish} (${surah.meaning}) - Read & Listen Online | Huzaifa's Quran Classes`;
  const description = `${surah.shortDescription} Read ${surah.nameEnglish} online with audio recitation, Tajweed notes, background history, and virtues. Learn Tajweed 1-on-1 with certified native scholars.`;

  return {
    title,
    description,
    keywords: [
      surah.nameEnglish,
      `${surah.nameEnglish} Online`,
      `Read ${surah.nameEnglish}`,
      `Listen ${surah.nameEnglish} Audio`,
      `Benefits of ${surah.nameEnglish}`,
      `Tajweed for ${surah.nameEnglish}`,
      "Online Quran Tutor USA UK Canada Australia",
    ],
    openGraph: {
      title,
      description,
      url: `https://quranpk.vercel.app/surah/${surah.slug}`,
      siteName: "Huzaifa's Online Quran Classes",
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://quranpk.vercel.app/surah/${surah.slug}`,
    },
  };
}

export async function generateStaticParams() {
  return surahsList.map((surah) => ({
    slug: surah.slug,
  }));
}

export default async function SurahDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const surah = getSurahBySlug(resolvedParams.slug);

  if (!surah) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `https://quranpk.vercel.app/surah/${surah.slug}`,
        "url": `https://quranpk.vercel.app/surah/${surah.slug}`,
        "name": `${surah.nameEnglish} (${surah.meaning})`,
        "description": surah.shortDescription,
        "isPartOf": {
          "@type": "WebSite",
          "name": "Huzaifa's Online Quran Classes",
          "url": "https://quranpk.vercel.app"
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://quranpk.vercel.app"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Surah Directory",
            "item": "https://quranpk.vercel.app/surah"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": surah.nameEnglish,
            "item": `https://quranpk.vercel.app/surah/${surah.slug}`
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": surah.faqs.map((faq) => ({
          "@type": "Question",
          "name": faq.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.a
          }
        }))
      }
    ]
  };

  return (
    <div className="pt-28 pb-20 space-y-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Header Banner */}
      <section className="bg-sage-900 text-cream-50 py-16 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center space-y-4 relative z-10">
          <div className="flex items-center justify-center gap-2">
            <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-gold-500/20 text-gold-400 border border-gold-500/30">
              Surah #{surah.number} • {surah.revelationType} Revelation
            </span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold tracking-tight">
            {surah.nameEnglish}
          </h1>

          <p className="font-serif font-arabic text-3xl sm:text-4xl text-gold-400 my-2">
            {surah.nameArabic}
          </p>

          <p className="text-sage-200 text-base sm:text-lg max-w-2xl mx-auto font-medium">
            Meaning: &ldquo;{surah.meaning}&rdquo; • {surah.numberOfAyahs} Verses • Juz {surah.juzNumber}
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-12">
        {/* Audio Player Card Component */}
        {surah.audioUrl && (
          <ScrollReveal direction="zoom">
            <SurahAudioPlayer
              surahName={surah.nameEnglish}
              arabicName={surah.nameArabic}
              audioUrl={surah.audioUrl}
              reciter={surah.reciter || "Sheikh Mishary Rashid Al-Afasy"}
            />
          </ScrollReveal>
        )}

        {/* 1. About Surah Section */}
        <ScrollReveal direction="up">
          <div className="bg-cream-50 rounded-3xl p-8 border border-sage-300 shadow-xs space-y-4">
            <div className="flex items-center gap-2 border-b border-sage-200 pb-3">
              <FaQuran className="text-gold-600 text-xl" />
              <h2 className="font-serif font-bold text-2xl text-sage-900">
                Overview & Meaning of {surah.nameEnglish}
              </h2>
            </div>
            <p className="text-sage-900 font-medium text-base sm:text-lg leading-relaxed">
              {surah.about}
            </p>
          </div>
        </ScrollReveal>

        {/* 2. Historical Background & Context */}
        <ScrollReveal direction="up" delay={0.1}>
          <div className="bg-cream-50 rounded-3xl p-8 border border-sage-300 shadow-xs space-y-4">
            <h2 className="font-serif font-bold text-2xl text-sage-900 border-b border-sage-200 pb-3">
              Historical Context & Revelation Background
            </h2>
            <p className="text-sage-900 font-medium text-base leading-relaxed">
              {surah.background}
            </p>
          </div>
        </ScrollReveal>

        {/* 3. Key Themes */}
        {surah.keyThemes.length > 0 && (
          <ScrollReveal direction="up" delay={0.15}>
            <div className="bg-sage-900 text-cream-50 rounded-3xl p-8 border border-sage-800 shadow-md space-y-4">
              <h2 className="font-serif font-bold text-2xl text-gold-400 border-b border-sage-800 pb-3">
                Key Spiritual Themes in {surah.nameEnglish}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {surah.keyThemes.map((theme, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm sm:text-base font-semibold">
                    <FiCheckCircle className="text-gold-400 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <span>{theme}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        )}

        {/* 4. Virtues & Spiritual Benefits */}
        {surah.benefits.length > 0 && (
          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-cream-50 rounded-3xl p-8 border border-sage-300 shadow-xs space-y-4">
              <h2 className="font-serif font-bold text-2xl text-sage-900 border-b border-sage-200 pb-3">
                Virtues & Blessings of Reciting {surah.nameEnglish}
              </h2>
              <div className="space-y-3">
                {surah.benefits.map((benefit, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-sage-50 border border-sage-200 flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-gold-400 text-sage-900 font-extrabold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <p className="text-sage-900 font-semibold text-sm sm:text-base leading-relaxed">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* 5. FAQs */}
        {surah.faqs.length > 0 && (
          <ScrollReveal direction="up" delay={0.25}>
            <div className="bg-sage-50 rounded-3xl p-8 border border-sage-300 space-y-6">
              <h2 className="font-serif font-bold text-2xl text-sage-900 border-b border-sage-300 pb-3 flex items-center gap-2">
                <FiHelpCircle className="text-gold-600" />
                Frequently Asked Questions About {surah.nameEnglish}
              </h2>
              <div className="space-y-4">
                {surah.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-cream-50 p-5 rounded-2xl border border-sage-200 space-y-1.5">
                    <h3 className="font-serif font-bold text-lg text-sage-900">
                      {faq.q}
                    </h3>
                    <p className="text-sage-900 font-medium text-sm sm:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* 1-on-1 Tutoring CTA Card */}
        <ScrollReveal direction="zoom">
          <div className="bg-gradient-to-r from-sage-900 to-sage-800 text-cream-50 p-8 sm:p-10 rounded-3xl border border-gold-500/40 shadow-xl text-center space-y-4">
            <span className="inline-block px-4 py-1 rounded-full text-xs font-extrabold uppercase tracking-widest bg-gold-400 text-sage-900">
              Master Tajweed & Recitation
            </span>
            <h3 className="font-serif font-bold text-2xl sm:text-3xl text-cream-50">
              Learn To Recite {surah.nameEnglish} With Perfect Tajweed
            </h3>
            <p className="text-sage-200 text-sm sm:text-base max-w-xl mx-auto font-medium">
              Join certified native Arab tutors from Al-Azhar University. 1-on-1 personalized lessons starting at $10/mo with Meezan Bank billing.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact-section"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gold-400 text-sage-900 font-extrabold text-sm sm:text-base hover:bg-gold-300 transition-colors shadow-md"
              >
                <FiBookmark className="w-4 h-4" />
                <span>Reserve Seat Now</span>
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Internal Linking Navigation */}
        <div className="pt-6 border-t border-sage-300 flex items-center justify-between gap-4 font-bold text-sm sm:text-base">
          {surah.prevSlug ? (
            <Link
              href={`/surah/${surah.prevSlug}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-50 text-sage-900 border border-sage-300 hover:bg-sage-100 transition-colors"
            >
              <FiArrowLeft />
              <span>Previous Surah</span>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href="/surah"
            className="text-sage-800 hover:text-sage-900 underline text-xs sm:text-sm font-bold"
          >
            All 114 Surahs
          </Link>

          {surah.nextSlug ? (
            <Link
              href={`/surah/${surah.nextSlug}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-50 text-sage-900 border border-sage-300 hover:bg-sage-100 transition-colors"
            >
              <span>Next Surah</span>
              <FiArrowRight />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
