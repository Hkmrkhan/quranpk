import ScrollReveal from "./ScrollReveal";
import { FaStar } from "react-icons/fa";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  centered = true,
}: SectionHeadingProps) {
  return (
    <ScrollReveal direction="up" className={`mb-12 ${centered ? "text-center" : ""}`}>
      {badge && (
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-sage-100 text-sage-800 border border-sage-200/60 mb-3 shadow-xs">
          <FaStar className="w-2.5 h-2.5 text-gold-500" />
          {badge}
        </span>
      )}
      <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-sage-900 tracking-tight leading-tight">
        {title}
      </h2>
      <div className={`flex items-center gap-3 my-4 ${centered ? "justify-center" : ""}`}>
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
        <FaStar className="text-gold-500 w-3 h-3" />
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent via-gold-400 to-transparent" />
      </div>
      {subtitle && (
        <p className="text-sage-700/80 text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
