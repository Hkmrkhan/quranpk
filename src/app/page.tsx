import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import CourseCard, { CourseProps } from "@/components/CourseCard";
import PricingCard, { PricingPlan } from "@/components/PricingCard";
import ScrollReveal from "@/components/ScrollReveal";
import {
  GiBookAura,
  GiTeacher,
  GiRibbonMedal,
  GiFlexibleStar,
  GiClockwork,
  GiHeartKey,
} from "react-icons/gi";
import { FiCheckCircle, FiArrowRight, FiPlayCircle, FiUsers, FiGlobe, FiAward } from "react-icons/fi";
import { FaQuran, FaStar } from "react-icons/fa";

const sampleCourses: CourseProps[] = [
  {
    id: "tajweed-basics",
    title: "Quran Reading & Tajweed Rules",
    arabicTitle: "تلاوة القرآن وأحكام التجويد",
    category: "Tajweed & Recitation",
    description:
      "Master the correct pronunciation of Arabic letters and essential Tajweed rules with expert 1-on-1 guidance.",
    level: "All Levels",
    duration: "30 Min / Session",
    schedule: "2 to 4 Days / Week",
    priceUSD: 59,
    featured: true,
  },
  {
    id: "hifz-program",
    title: "Complete Quran Hifz Program",
    arabicTitle: "حفظ القرآن الكريم",
    category: "Memorization",
    description:
      "A structured, step-by-step memorization track with systematic daily revision under Hafiz scholars.",
    level: "Intermediate",
    duration: "45 Min / Session",
    schedule: "3 to 5 Days / Week",
    priceUSD: 99,
    featured: false,
  },
  {
    id: "quran-kids",
    title: "Fun Quran & Arabic for Kids",
    arabicTitle: "تعليم القرآن للأطفال",
    category: "Children Program",
    description:
      "Interactive, engaging Quran reading and Islamic manners designed specifically for young minds aged 5-14.",
    level: "Beginner",
    duration: "30 Min / Session",
    schedule: "2 to 3 Days / Week",
    priceUSD: 49,
    featured: false,
  },
];

const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Plan",
    priceUSD: 29,
    billingPeriod: "month",
    description: "Ideal for beginners starting their Quranic journey.",
    features: [
      "2 Classes per Week (8/mo)",
      "30-Minute 1-on-1 Sessions",
      "Certified Native Arab Tutor",
      "Flexible Class Rescheduling",
      "Monthly Progress Reports",
    ],
    ctaText: "Start Starter Plan",
  },
  {
    id: "standard",
    name: "Standard Plan",
    priceUSD: 59,
    billingPeriod: "month",
    description: "Our most popular track for steady progression and Tajweed fluency.",
    features: [
      "3 Classes per Week (12/mo)",
      "30 to 45 Min Sessions",
      "Choice of Male or Female Tutor",
      "Tajweed & Recitation Assessment",
      "Free Learning Materials & PDFs",
      "24/7 Student Portal Access",
    ],
    popular: true,
    ctaText: "Get Standard Plan",
  },
  {
    id: "intensive",
    name: "Intensive Hifz",
    priceUSD: 99,
    billingPeriod: "month",
    description: "Comprehensive daily memorization and Ijazah preparation.",
    features: [
      "5 Classes per Week (20/mo)",
      "45-Minute Intensive Sessions",
      "Senior Al-Azhar Certified Scholar",
      "Dedicated Revision Schedule",
      "Official Ijazah Certification Track",
      "Priority WhatsApp Tutor Access",
    ],
    ctaText: "Join Intensive Track",
  },
];

const whyChooseUs = [
  {
    icon: GiTeacher,
    title: "Al-Azhar Certified Tutors",
    description:
      "Learn from verified native Arabic scholars with Sanad (chain of transmission) connecting back to the Prophet (PBUH).",
  },
  {
    icon: GiFlexibleStar,
    title: "1-on-1 Personalized Pace",
    description:
      "Individual focus customized to your learning speed, schedule, and age group for maximum retention.",
  },
  {
    icon: GiClockwork,
    title: "24/7 Flexible Timings",
    description:
      "Schedule classes around your work, school, or timezone. Reschedule with ease via our student portal.",
  },
  {
    icon: GiHeartKey,
    title: "Female Tutors Available",
    description:
      "Dedicated, highly qualified female Quran teachers available for sisters and young children.",
  },
  {
    icon: GiRibbonMedal,
    title: "Authentic Ijazah Program",
    description:
      "Earn a recognized Sanad certificate upon completing full recitation or memorization with Tajweed.",
  },
  {
    icon: GiBookAura,
    title: "Interactive Digital Portal",
    description:
      "Access high-quality mushaf view, lesson recordings, homework, and monthly progress evaluations.",
  },
];

export default function Home() {
  return (
    <div className="space-y-24 pb-16 overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 bg-islamic-pattern">
        {/* Soft Decorative Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sage-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <ScrollReveal direction="down" delay={0.1}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-sage-100 text-sage-800 border border-sage-300/60 shadow-xs">
                  <FaQuran className="text-gold-500" />
                  Serene & Authentic Online Learning
                </span>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-sage-900 leading-tight tracking-tight">
                  Illuminate Your Heart With The{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-700 via-sage-600 to-gold-600">
                    Noble Quran
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3}>
                <p className="font-serif font-arabic text-2xl sm:text-3xl text-sage-700 font-semibold my-2">
                  بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                </p>
                <p className="text-sage-800/80 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-sans leading-relaxed">
                  Join thousands of students worldwide learning Quran reading, Tajweed mastery, and Hifz with certified native Arab tutors in a tranquil, 1-on-1 online environment.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  <Link
                    href="/contact"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-sage-700 text-cream-50 font-bold text-base hover:bg-sage-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 border border-sage-600"
                  >
                    <span>Book Your Free Trial</span>
                    <FiArrowRight className="w-5 h-5 text-gold-400" />
                  </Link>

                  <Link
                    href="/courses"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-cream-50 text-sage-900 font-semibold text-base hover:bg-sage-100/60 transition-all duration-300 shadow-sm border border-sage-200 flex items-center justify-center gap-2"
                  >
                    <span>Explore Courses</span>
                  </Link>
                </div>
              </ScrollReveal>

              {/* Quick Trust Badges */}
              <ScrollReveal direction="up" delay={0.5}>
                <div className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-xs text-sage-700">
                  <div className="flex items-center gap-1.5">
                    <FiCheckCircle className="text-gold-600 w-4 h-4" />
                    <span>No Credit Card Required</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FiCheckCircle className="text-gold-600 w-4 h-4" />
                    <span>Cancel Anytime</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <FiCheckCircle className="text-gold-600 w-4 h-4" />
                    <span>Male & Female Scholars</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Card / Visual */}
            <div className="lg:col-span-5">
              <ScrollReveal direction="left" delay={0.3}>
                <div className="relative mx-auto max-w-md">
                  {/* Decorative Frame */}
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-gold-400/30 to-sage-400/30 blur-xl opacity-70" />
                  <div className="relative rounded-3xl bg-cream-50 p-8 shadow-2xl border border-sage-200/80 space-y-6">
                    <div className="text-center space-y-2 border-b border-sage-200/60 pb-6">
                      <div className="w-16 h-16 mx-auto rounded-full bg-sage-100 text-gold-600 flex items-center justify-center text-3xl shadow-inner border border-sage-200">
                        <FaQuran />
                      </div>
                      <h3 className="font-serif font-bold text-2xl text-sage-900">
                        Start 3-Day Free Trial
                      </h3>
                      <p className="text-xs text-sage-600">
                        Experience our interactive 1-on-1 virtual classroom with no obligation.
                      </p>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between p-3 rounded-xl bg-sage-50/70 border border-sage-200/50">
                        <span className="font-medium text-sage-800">1. Free Assessment</span>
                        <span className="text-xs text-gold-600 font-bold">15 Mins</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-xl bg-sage-50/70 border border-sage-200/50">
                        <span className="font-medium text-sage-800">2. Personalized Plan</span>
                        <span className="text-xs text-gold-600 font-bold">Custom</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-xl bg-sage-50/70 border border-sage-200/50">
                        <span className="font-medium text-sage-800">3. Match Tutors</span>
                        <span className="text-xs text-gold-600 font-bold">1-on-1</span>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="block w-full text-center py-3.5 rounded-full bg-gold-400 text-sage-900 font-bold text-sm hover:bg-gold-300 transition-colors shadow-md"
                    >
                      Schedule Trial Session Now
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="bg-sage-900 rounded-3xl p-8 sm:p-12 text-cream-100 shadow-xl border border-sage-800 relative overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
              <div className="space-y-1">
                <p className="font-serif text-3xl sm:text-4xl font-extrabold text-gold-400">
                  5,000+
                </p>
                <p className="text-xs sm:text-sm text-sage-200/80 font-medium">Active Students</p>
              </div>
              <div className="space-y-1">
                <p className="font-serif text-3xl sm:text-4xl font-extrabold text-gold-400">
                  120+
                </p>
                <p className="text-xs sm:text-sm text-sage-200/80 font-medium">Certified Native Scholars</p>
              </div>
              <div className="space-y-1">
                <p className="font-serif text-3xl sm:text-4xl font-extrabold text-gold-400">
                  45+
                </p>
                <p className="text-xs sm:text-sm text-sage-200/80 font-medium">Countries Reached</p>
              </div>
              <div className="space-y-1">
                <p className="font-serif text-3xl sm:text-4xl font-extrabold text-gold-400">
                  99.4%
                </p>
                <p className="text-xs sm:text-sm text-sage-200/80 font-medium">Student Satisfaction</p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* FEATURED COURSES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Structured Learning Tracks"
          title="Our Featured Quranic Courses"
          subtitle="Designed for all age groups and skill levels, from beginners learning Arabic letters to advanced students seeking Ijazah certification."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleCourses.map((course, idx) => (
            <ScrollReveal key={course.id} direction="up" delay={idx * 0.15}>
              <CourseCard course={course} />
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 text-sage-800 hover:text-sage-600 font-bold text-sm underline decoration-gold-400 underline-offset-8 transition-all"
          >
            <span>View All Academy Programs</span>
            <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="bg-sage-50/80 py-20 border-y border-sage-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Excellence in Education"
            title="Why Students Choose Noor Quran Academy"
            subtitle="We combine traditional Al-Azhar methodology with modern virtual tools to deliver an inspiring, spiritual learning environment."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                  <div className="bg-cream-50 rounded-2xl p-8 border border-sage-200/70 shadow-xs hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-sage-100 text-sage-700 flex items-center justify-center text-2xl mb-6 group-hover:bg-sage-700 group-hover:text-gold-400 transition-colors">
                      <Icon />
                    </div>
                    <h3 className="font-serif font-bold text-xl text-sage-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sage-700/80 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRICING SECTION (USD) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Affordable Monthly Plans"
          title="Transparent Tuition Pricing (USD)"
          subtitle="Choose the plan that fits your schedule. No long-term contracts, cancel or pause anytime with our 100% money-back guarantee."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center pt-4">
          {pricingPlans.map((plan, idx) => (
            <ScrollReveal key={plan.id} direction="up" delay={idx * 0.15}>
              <PricingCard plan={plan} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Student Stories"
          title="Words From Our Blessed Community"
          subtitle="Read how our dedicated 1-on-1 scholars have helped adults and children connect deeply with the Holy Quran."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="bg-cream-50 p-8 rounded-2xl border border-sage-200/80 shadow-xs space-y-4">
              <div className="flex text-gold-500 gap-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sage-800 text-sm leading-relaxed italic">
                &ldquo;My 8-year-old son started from zero Arabic. In just 4 months with Sheikh Mahmoud, he can now read Surah Al-Baqarah with beautiful Tajweed! Truly a blessing.&rdquo;
              </p>
              <div className="pt-4 border-t border-sage-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sage-900 text-sm">Fatima Al-Mansoor</h4>
                  <p className="text-xs text-sage-600">Parent • United Kingdom</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-sage-100 rounded-full text-sage-800">
                  Kids Track
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-cream-50 p-8 rounded-2xl border border-sage-200/80 shadow-xs space-y-4">
              <div className="flex text-gold-500 gap-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sage-800 text-sm leading-relaxed italic">
                &ldquo;As a working professional in New York, finding a tutor who fits my late evening schedule was impossible until I found Noor Quran Academy. 100% recommended!&rdquo;
              </p>
              <div className="pt-4 border-t border-sage-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sage-900 text-sm">Tariq H. Johnson</h4>
                  <p className="text-xs text-sage-600">Adult Student • USA</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-sage-100 rounded-full text-sage-800">
                  Tajweed Master
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="bg-cream-50 p-8 rounded-2xl border border-sage-200/80 shadow-xs space-y-4">
              <div className="flex text-gold-500 gap-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sage-800 text-sm leading-relaxed italic">
                &ldquo;Ustadha Maryam has been so patient with me. I completed my first Juz memorization and earned my preliminary Tajweed certificate. Extremely grateful!&rdquo;
              </p>
              <div className="pt-4 border-t border-sage-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sage-900 text-sm">Aisha K. Siddiqui</h4>
                  <p className="text-xs text-sage-600">Sister Student • Canada</p>
                </div>
                <span className="text-xs font-semibold px-2.5 py-1 bg-sage-100 rounded-full text-sage-800">
                  Hifz Program
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FINAL CTA BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal direction="up">
          <div className="bg-gradient-to-r from-sage-900 via-sage-800 to-sage-900 rounded-3xl p-10 sm:p-16 text-center text-cream-50 shadow-2xl relative overflow-hidden border border-sage-700">
            <div className="max-w-2xl mx-auto space-y-6 relative z-10">
              <span className="inline-block text-gold-400 font-serif font-arabic text-2xl">
                وَقُل رَّبِّ زِدْنِي عِلْمًا
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-tight">
                Begin Your Journey With The Quran Today
              </h2>
              <p className="text-sage-200/80 text-sm sm:text-base leading-relaxed">
                Take the first step towards fluent recitation and spiritual clarity. Book your free 1-on-1 evaluation session with our master tutors.
              </p>
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gold-400 text-sage-900 font-bold text-base hover:bg-gold-300 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span>Claim Your Free Trial Session</span>
                  <FiArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
