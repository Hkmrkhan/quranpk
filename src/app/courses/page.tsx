"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import CourseCard, { CourseProps } from "@/components/CourseCard";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { FiSearch, FiFilter } from "react-icons/fi";

const allCourses: CourseProps[] = [
  {
    id: "quran-reading-tajweed",
    title: "Quran Reading & Tajweed Rules",
    arabicTitle: "تلاوة القرآن وأحكام التجويد",
    category: "Tajweed & Recitation",
    description:
      "Master the correct pronunciation of Arabic letters, makharij, and essential Tajweed rules with expert 1-on-1 guidance.",
    level: "Beginner to Advanced",
    duration: "30 Min / Session",
    schedule: "2 to 4 Days / Week",
    priceUSD: 59,
    featured: true,
  },
  {
    id: "hifz-memorization",
    title: "Full Quran Hifz Program",
    arabicTitle: "حفظ القرآن الكريم",
    category: "Memorization",
    description:
      "Systematic memorization with daily new verses, revision of past Juz, and Tajweed perfection under Hafiz scholars.",
    level: "Intermediate",
    duration: "45 Min / Session",
    schedule: "3 to 5 Days / Week",
    priceUSD: 99,
    featured: true,
  },
  {
    id: "quran-for-kids",
    title: "Fun Quran & Arabic for Kids",
    arabicTitle: "تعليم القرآن للأطفال",
    category: "Children Program",
    description:
      "Engaging Quran reading, short Surah memorization, and Islamic manners designed specifically for children aged 5-14.",
    level: "Beginner",
    duration: "30 Min / Session",
    schedule: "2 to 3 Days / Week",
    priceUSD: 49,
  },
  {
    id: "classical-arabic",
    title: "Classical Quranic Arabic",
    arabicTitle: "اللغة العربية وقواعدها",
    category: "Arabic Language",
    description:
      "Understand the language of the Quran directly. Covers grammar (Nahw), morphology (Sarf), and vocabulary.",
    level: "Intermediate",
    duration: "45 Min / Session",
    schedule: "2 to 3 Days / Week",
    priceUSD: 69,
  },
  {
    id: "tafseer-studies",
    title: "Tafseer & Quranic Studies",
    arabicTitle: "تفسير القرآن الكريم",
    category: "Tafseer & Reflection",
    description:
      "Deepen your understanding of Surah contexts, historical revelations, and practical life guidance from authentic classical commentaries.",
    level: "All Levels",
    duration: "40 Min / Session",
    schedule: "2 Days / Week",
    priceUSD: 55,
  },
  {
    id: "ijazah-certification",
    title: "Ijazah Sanad Certification",
    arabicTitle: "الإجازة بالسند المتصل",
    category: "Memorization",
    description:
      "Exclusive track for memorizers and advanced reciters to earn an official Sanad connected directly to the Prophet Muhammad (PBUH).",
    level: "Advanced",
    duration: "60 Min / Session",
    schedule: "3 to 4 Days / Week",
    priceUSD: 119,
  },
];

const categories = [
  "All Courses",
  "Tajweed & Recitation",
  "Memorization",
  "Children Program",
  "Arabic Language",
  "Tafseer & Reflection",
];

export default function CoursesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Courses");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = allCourses.filter((course) => {
    const matchesCategory =
      selectedCategory === "All Courses" || course.category === selectedCategory;
    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Page Header */}
      <section className="bg-sage-900 text-cream-100 py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <ScrollReveal direction="down">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-500/20 text-gold-400 border border-gold-500/30">
              Structured Islamic Curriculum
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up">
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight">
              Our Academy Programs
            </h1>
            <p className="text-sage-200/80 text-base max-w-2xl mx-auto font-sans mt-2">
              Explore our range of 1-on-1 online Quran courses taught by certified native Arabic scholars tailored to your age, goal, and schedule.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-cream-50 p-6 rounded-2xl border border-sage-200/80 shadow-xs">
          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sage-600 w-4 h-4" />
            <input
              type="text"
              placeholder="Search course title..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-cream-100 border border-sage-200 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-600"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            <FiFilter className="text-gold-600 w-4 h-4 flex-shrink-0 hidden lg:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? "bg-sage-700 text-cream-50 shadow-sm"
                    : "bg-sage-100/70 text-sage-800 hover:bg-sage-200/60"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, idx) => (
              <ScrollReveal key={course.id} direction="up" delay={idx * 0.1}>
                <CourseCard course={course} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-cream-50 rounded-2xl border border-sage-200">
            <p className="text-sage-700 font-medium">No courses found matching your criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory("All Courses");
                setSearchQuery("");
              }}
              className="mt-4 text-xs font-bold text-sage-800 underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </section>

      {/* CTA Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-sage-100/70 border border-sage-200 rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h3 className="font-serif font-bold text-2xl text-sage-900">
            Not sure which course is right for you?
          </h3>
          <p className="text-sage-700/80 text-sm max-w-xl mx-auto">
            Book a complimentary 15-minute evaluation session with one of our senior tutors. We will test your current reading level and build a tailored study plan.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-block px-7 py-3 rounded-full bg-sage-700 text-cream-50 font-semibold text-sm hover:bg-sage-800 transition-colors shadow-md"
            >
              Book Free Assessment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
