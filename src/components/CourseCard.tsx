import Link from "next/link";
import { FiClock, FiBookOpen } from "react-icons/fi";

export interface CourseProps {
  id: string;
  title: string;
  arabicTitle?: string;
  category: string;
  description: string;
  level: string;
  duration: string;
  schedule: string;
  priceUSD: number;
  featured?: boolean;
  icon?: string;
}

export default function CourseCard({ course }: { course: CourseProps }) {
  return (
    <div
      className={`group relative bg-cream-50 rounded-2xl p-6 sm:p-8 border transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between ${
        course.featured
          ? "border-gold-500 shadow-md ring-1 ring-gold-400/40"
          : "border-sage-300 hover:border-sage-500 shadow-xs"
      }`}
    >
      {course.featured && (
        <span className="absolute -top-3.5 right-6 px-3.5 py-0.5 rounded-full bg-gold-400 text-sage-900 font-extrabold text-xs uppercase tracking-wider shadow-sm">
          Popular Program
        </span>
      )}

      <div>
        {/* Header Badges */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <span className="inline-block px-3 py-1 rounded-md text-xs font-extrabold uppercase tracking-wider bg-sage-100 text-sage-900 border border-sage-300">
            {course.category}
          </span>
          <span className="text-xs font-bold text-sage-900 bg-cream-200 px-3 py-1 rounded-full border border-sage-200">
            {course.level}
          </span>
        </div>

        {/* Title */}
        <div className="mb-3">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-sage-900 group-hover:text-sage-700 transition-colors">
            {course.title}
          </h3>
          {course.arabicTitle && (
            <p className="font-serif font-arabic text-right text-xl font-bold text-sage-800 mt-1">
              {course.arabicTitle}
            </p>
          )}
        </div>

        {/* Description - Crisp High Contrast */}
        <p className="text-sage-900 font-medium text-sm sm:text-base leading-relaxed mb-6">
          {course.description}
        </p>

        {/* Meta Info */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-sage-200 text-xs sm:text-sm font-semibold text-sage-900 mb-6">
          <div className="flex items-center gap-2">
            <FiClock className="text-gold-600 w-4 h-4 flex-shrink-0" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiBookOpen className="text-gold-600 w-4 h-4 flex-shrink-0" />
            <span>{course.schedule}</span>
          </div>
        </div>
      </div>

      {/* Footer / Price & Button */}
      <div className="flex items-center justify-between pt-4 border-t border-sage-200">
        <div>
          <span className="text-xs font-bold text-sage-800 uppercase tracking-wider block">Tuition</span>
          <span className="font-serif font-extrabold text-3xl text-sage-900">
            ${course.priceUSD}
            <span className="text-xs font-bold text-sage-800">/mo</span>
          </span>
        </div>
        <a
          href="/#contact-section"
          className="px-5 py-2.5 rounded-full bg-sage-700 text-cream-50 text-xs sm:text-sm font-bold hover:bg-sage-800 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          Enroll Now
        </a>
      </div>
    </div>
  );
}
