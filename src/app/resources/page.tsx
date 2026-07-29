"use client";

import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { FiDownload, FiCheckCircle, FiHelpCircle } from "react-icons/fi";

interface ResourceItem {
  title: string;
  category: string;
  fileSize: string;
  format: string;
  downloadUrl: string;
  fileName: string;
  description: string;
}

const downloadableResources: ResourceItem[] = [
  {
    title: "Norani Qaida Foundation Chart",
    category: "Norani Qaida",
    fileSize: "2.1 MB",
    format: "PDF Document",
    downloadUrl: "/resources/norani-qaida-foundation.pdf",
    fileName: "Norani_Qaida_Foundation_Chart.pdf",
    description:
      "Complete Norani Qaida beginner charts with joint letter recognitions and short vowels (Fatha, Kasra, Damma).",
  },
  {
    title: "Essential Tajweed Rules Quick Reference Chart",
    category: "Tajweed Guide",
    fileSize: "2.4 MB",
    format: "PDF Document",
    downloadUrl: "/resources/essential-tajweed-rules.pdf",
    fileName: "Essential_Tajweed_Rules_Guide.pdf",
    description:
      "A color-coded visual summary of Noon Sakinah, Meem Sakinah, Mudood (elongations), and Makharij (points of articulation).",
  },
  {
    title: "Daily Quranic Memorization (Hifz) Logbook",
    category: "Study Tool",
    fileSize: "3.1 MB",
    format: "Printable PDF",
    downloadUrl: "/resources/daily-hifz-logbook.pdf",
    fileName: "Daily_Quranic_Hifz_Logbook.pdf",
    description:
      "A 30-day structured tracker for recording daily Sabaq (new lesson), Sabqi (recent revision), and Manzil (old revision).",
  },
];

const faqs = [
  {
    q: "How do the 1-on-1 online classes work?",
    a: "Classes are held via our secure web portal or Zoom/Skype. You connect live with your personal tutor who shares screens, highlights text in digital Mushaf, and corrects your recitation in real time.",
  },
  {
    q: "Can I choose my preferred class schedule?",
    a: "Yes! We operate 24 hours a day, 7 days a week. You can select exact days and time slots that fit your local timezone.",
  },
  {
    q: "Are female Quran teachers available for sisters and children?",
    a: "Absoluty. We have a dedicated team of highly qualified female Ustadhas from Al-Azhar University available for sisters and kids.",
  },
  {
    q: "What if I miss a class due to an emergency?",
    a: "You can easily reschedule any class up to 4 hours prior to the session start time through our student portal without any extra charge.",
  },
];

export default function ResourcesPage() {
  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Header */}
      <section className="bg-sage-900 text-cream-100 py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <ScrollReveal direction="down">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-500/20 text-gold-400 border border-gold-500/30">
              Knowledge Repository
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up">
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight">
              Free Learning Resources
            </h1>
            <p className="text-sage-200/80 text-base max-w-2xl mx-auto font-sans mt-2">
              Download complimentary Tajweed charts, Arabic alphabet guides, and daily Quranic trackers to support your studies.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Downloadable Guides */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Free PDF Downloads"
          title="Printable Study Worksheets & Charts"
          subtitle="Curated by our academic department to aid home practice between your live 1-on-1 tutoring sessions."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {downloadableResources.map((res, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
              <div className="bg-cream-50 rounded-2xl p-8 border border-sage-300 shadow-xs hover:shadow-md transition-all flex flex-col justify-between h-full">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="px-3 py-1 rounded-md text-xs font-extrabold uppercase tracking-wider bg-sage-100 text-sage-900 border border-sage-300">
                      {res.category}
                    </span>
                    <span className="text-xs font-bold text-sage-900 font-mono">
                      {res.format} • {res.fileSize}
                    </span>
                  </div>
                  <h3 className="font-serif font-bold text-xl text-sage-900 mb-2">
                    {res.title}
                  </h3>
                  <p className="text-sage-900 font-medium text-sm leading-relaxed mb-6">
                    {res.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-sage-200 flex items-center justify-between">
                  <span className="text-xs text-gold-600 font-bold flex items-center gap-1">
                    <FiCheckCircle /> Free Access
                  </span>
                  <a
                    href={res.downloadUrl}
                    download={res.fileName}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-700 text-cream-50 text-xs font-bold hover:bg-sage-800 transition-colors shadow-xs"
                  >
                    <FiDownload className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* FAQ Knowledge Base Section */}
      <section className="bg-sage-50 py-16 border-y border-sage-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-10">
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Common Student Inquiries"
            subtitle="Everything you need to know about our virtual classroom, tutors, and learning methodology."
          />

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                <div className="bg-cream-50 p-6 rounded-2xl border border-sage-300 shadow-xs space-y-2">
                  <h4 className="font-serif font-bold text-lg text-sage-900 flex items-center gap-2">
                    <FiHelpCircle className="text-gold-600 flex-shrink-0" />
                    {faq.q}
                  </h4>
                  <p className="text-sage-900 font-medium text-sm sm:text-base leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="bg-sage-900 text-cream-50 p-10 rounded-3xl space-y-4 shadow-xl border border-sage-800">
          <h3 className="font-serif font-bold text-2xl">Ready to Start Learning?</h3>
          <p className="text-sage-200/80 text-sm max-w-lg mx-auto">
            Try a 30-minute private trial class with no commitment required. Experience how serene learning can be.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact-section"
              className="inline-block px-8 py-3.5 rounded-full bg-gold-400 text-sage-900 font-bold text-sm hover:bg-gold-300 transition-colors shadow-md"
            >
              Book Free Trial Session
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
