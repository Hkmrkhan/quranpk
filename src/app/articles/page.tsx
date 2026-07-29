import { Metadata } from "next";
import Link from "next/link";
import { articlesList } from "@/data/articles";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { FiClock, FiArrowRight, FiBookOpen } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Islamic Articles & Tajweed Guides | Huzaifa's Quran Classes",
  description:
    "Read insightful Islamic articles, Tajweed learning guides, and Quranic reflections written by Al-Azhar certified scholars.",
  alternates: {
    canonical: "https://quranpk.vercel.app/articles",
  },
};

export default function ArticlesHubPage() {
  return (
    <div className="pt-28 pb-20 space-y-16">
      <section className="bg-sage-900 text-cream-50 py-16 text-center space-y-4">
        <span className="px-3.5 py-1 rounded-full text-xs font-extrabold uppercase bg-gold-500/20 text-gold-400 border border-gold-500/30">
          Islamic Articles & Guides
        </span>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold">
          Tajweed & Quranic Knowledge Hub
        </h1>
        <p className="text-sage-200 text-base max-w-2xl mx-auto font-medium">
          Comprehensive guides and reflections curated by our academic department to aid your spiritual growth.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          badge="Featured Articles"
          title="Educational Guides & Reflections"
          subtitle="Click on any guide to read full step-by-step instructions and Hadith references."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articlesList.map((art, idx) => (
            <ScrollReveal key={art.slug} direction="up" delay={idx * 0.1}>
              <Link
                href={`/articles/${art.slug}`}
                className="group bg-cream-50 rounded-3xl p-8 border border-sage-300 shadow-xs hover:shadow-xl hover:border-gold-500 transition-all duration-300 flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="px-3 py-1 rounded-md text-xs font-extrabold bg-sage-100 text-sage-900 border border-sage-300">
                      {art.category}
                    </span>
                    <span className="text-xs text-sage-700 font-bold flex items-center gap-1">
                      <FiClock /> {art.readTime}
                    </span>
                  </div>

                  <h2 className="font-serif text-xl font-bold text-sage-900 group-hover:text-sage-700 transition-colors mb-3">
                    {art.title}
                  </h2>

                  <p className="text-sage-900 font-medium text-sm leading-relaxed mb-6 line-clamp-3">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-sage-200 flex items-center justify-between text-xs font-bold text-sage-900">
                  <span>By {art.author}</span>
                  <span className="inline-flex items-center gap-1 text-gold-600 group-hover:translate-x-1 transition-transform">
                    Read Article <FiArrowRight />
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
