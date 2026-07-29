"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import CourseCard, { CourseProps } from "@/components/CourseCard";
import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { FiSearch, FiFilter } from "react-icons/fi";

const allCourses: CourseProps[] = [
  {
    id: "norani-qaida-kids",
    title: "Norani Qaida & Basic Quran for Kids",
    arabicTitle: "القاعدة النورانية للأطفال",
    category: "Children Program",
    description:
      "Interactive Norani Qaida foundation, basic letter pronunciation, and essential Islamic manners designed specifically for young learners.",
    level: "Beginner",
    duration: "30 Min / Session",
    schedule: "2 to 3 Days / Week",
    priceUSD: 10,
    featured: false,
  },
  {
    id: "quran-reading-tajweed",
    title: "Quran Reading & Tajweed Rules",
    arabicTitle: "تلاوة القرآن وأحكام التجويد",
    category: "Tajweed & Recitation",
    description:
      "Master the correct pronunciation of Arabic letters, makharij, and essential Tajweed rules with expert 1-on-1 guidance.",
    level: "All Levels",
    duration: "30 Min / Session",
    schedule: "2 to 4 Days / Week",
    priceUSD: 20,
    featured: true,
  },
  {
    id: "hifz-memorization",
    title: "Complete Quran Hifz Program",
    arabicTitle: "حفظ القرآن الكريم",
    category: "Memorization",
    description:
      "Systematic memorization with daily new verses, revision of past Juz, and Tajweed perfection under Hafiz scholars.",
    level: "Intermediate",
    duration: "45 Min / Session",
    schedule: "3 to 5 Days / Week",
    priceUSD: 50,
    featured: true,
  },
];

export default function CoursesPage() {
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

      {/* Courses Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {allCourses.map((course, idx) => (
            <ScrollReveal key={course.id} direction="up" delay={idx * 0.1}>
              <CourseCard course={course} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-sage-100/70 border border-sage-200 rounded-3xl p-8 sm:p-12 text-center space-y-4">
          <h3 className="font-serif font-bold text-2xl text-sage-900">
            Not sure which program is right for you?
          </h3>
          <p className="text-sage-700/80 text-sm max-w-xl mx-auto">
            Book a complimentary 15-minute evaluation session with one of our senior tutors. We will test your current reading level and build a tailored study plan.
          </p>
          <div className="pt-2">
            <Link
              href="/#contact-section"
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
