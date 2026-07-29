"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import CourseCard, { CourseProps } from "@/components/CourseCard";
import PricingCard, { PricingPlan } from "@/components/PricingCard";
import ReserveSeatModal from "@/components/ReserveSeatModal";
import ScrollReveal from "@/components/ScrollReveal";
import {
  GiBookAura,
  GiTeacher,
  GiRibbonMedal,
  GiFlexibleStar,
  GiClockwork,
  GiHeartKey,
} from "react-icons/gi";
import {
  FiCheckCircle,
  FiArrowRight,
  FiPlay,
  FiPause,
  FiDownload,
  FiHelpCircle,
  FiSend,
  FiAlertCircle,
  FiShield,
  FiMail,
  FiPhone,
  FiMapPin,
  FiCheck,
  FiX,
  FiBookmark,
} from "react-icons/fi";
import { FaQuran, FaStar, FaWhatsapp } from "react-icons/fa";

// Exactly 3 Programs
const sampleCourses: CourseProps[] = [
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
    id: "tajweed-basics",
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
    id: "hifz-program",
    title: "Complete Quran Hifz Program",
    arabicTitle: "حفظ القرآن الكريم",
    category: "Memorization",
    description:
      "A structured, step-by-step memorization track with systematic daily revision under certified Hafiz scholars.",
    level: "Intermediate",
    duration: "45 Min / Session",
    schedule: "3 to 5 Days / Week",
    priceUSD: 50,
    featured: true,
  },
];

// Recitation Audio Playlist
const tracks = [
  {
    id: "1",
    surahName: "Surah Al-Fatiha (The Opening)",
    surahArabic: "سورة الفاتحة",
    surahNumber: 1,
    reciter: "Sheikh Mishary Rashid Al-Afasy",
    style: "Hafs 'an 'Asim",
    duration: "01:45",
  },
  {
    id: "2",
    surahName: "Surah Al-Kahf (The Cave)",
    surahArabic: "سورة الكهف",
    surahNumber: 18,
    reciter: "Sheikh Abdul Rahman Al-Sudais",
    style: "Hafs 'an 'Asim",
    duration: "28:12",
  },
  {
    id: "3",
    surahName: "Surah Ar-Rahman (The Beneficent)",
    surahArabic: "سورة الرحمن",
    surahNumber: 55,
    reciter: "Sheikh Mohamed Siddiq Al-Minshawi",
    style: "Mujawwad Style",
    duration: "14:30",
  },
  {
    id: "4",
    surahName: "Surah Yasin (Ya-Sin)",
    surahArabic: "سورة يس",
    surahNumber: 36,
    reciter: "Sheikh Mahmoud Khalil Al-Hussary",
    style: "Murattal Teaching Style",
    duration: "18:05",
  },
];

// Downloadable Resources
const downloadableResources = [
  {
    title: "Norani Qaida Foundation Chart",
    category: "Norani Qaida",
    fileSize: "2.1 MB",
    format: "PDF Document",
    description:
      "Complete Norani Qaida beginner charts with joint letter recognitions and short vowels (Fatha, Kasra, Damma).",
  },
  {
    title: "Essential Tajweed Rules Quick Reference Chart",
    category: "Tajweed Guide",
    fileSize: "2.4 MB",
    format: "PDF Document",
    description:
      "A color-coded visual summary of Noon Sakinah, Meem Sakinah, Mudood (elongations), and Makharij.",
  },
  {
    title: "Daily Quranic Memorization (Hifz) Logbook",
    category: "Study Tool",
    fileSize: "3.1 MB",
    format: "Printable PDF",
    description:
      "A 30-day structured tracker for recording daily Sabaq, Sabqi, and Manzil revisions.",
  },
];

// Pricing Plans ($10, $20, $50)
const pricingPlans: PricingPlan[] = [
  {
    id: "starter",
    name: "Starter Plan",
    priceUSD: 10,
    billingPeriod: "month",
    description: "Ideal for kids & beginners starting Norani Qaida & foundation reading.",
    features: [
      "2 Classes per Week (8/mo)",
      "30-Minute 1-on-1 Sessions",
      "Norani Qaida & Foundation Track",
      "Certified Native Arab Tutor",
      "Flexible Class Rescheduling",
      "Monthly Progress Reports",
    ],
    ctaText: "Reserve Starter Seat ($10)",
  },
  {
    id: "standard",
    name: "Standard Plan",
    priceUSD: 20,
    billingPeriod: "month",
    description: "Our most popular track for steady Tajweed progression & fluent recitation.",
    features: [
      "3 Classes per Week (12/mo)",
      "30 to 45 Min Sessions",
      "Choice of Male or Female Tutor",
      "Tajweed & Recitation Assessment",
      "Free Learning Materials & PDFs",
      "24/7 Student Portal Access",
    ],
    popular: true,
    ctaText: "Reserve Standard Seat ($20)",
  },
  {
    id: "intensive",
    name: "Intensive Hifz",
    priceUSD: 50,
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
    ctaText: "Reserve Intensive Seat ($50)",
  },
];

// Comparison Matrix
const comparisonMatrix = [
  { feature: "Monthly Tuition Fee", starter: "$10 / mo", standard: "$20 / mo", intensive: "$50 / mo" },
  { feature: "Classes per Month", starter: "8 Classes", standard: "12 Classes", intensive: "20 Classes" },
  { feature: "Session Duration", starter: "30 Mins", standard: "30 - 45 Mins", intensive: "45 - 60 Mins" },
  { feature: "Norani Qaida Included", starter: true, standard: true, intensive: true },
  { feature: "Tutor Type", starter: "Certified Tutor", standard: "Native Scholar", intensive: "Senior Al-Azhar Scholar" },
  { feature: "1-on-1 Private Classroom", starter: true, standard: true, intensive: true },
  { feature: "Free PDF Worksheets", starter: true, standard: true, intensive: true },
  { feature: "Ijazah Sanad Track", starter: false, standard: "Add-on", intensive: true },
];

// Why Choose Us Cards
const whyChooseUs = [
  {
    icon: GiTeacher,
    title: "Al-Azhar Certified Tutors",
    description:
      "Learn from verified native scholars with Sanad (chain of transmission) connecting back to the Prophet (PBUH).",
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
      "Schedule classes around your work, school, or timezone. Reschedule with ease anytime.",
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

// FAQ List
const faqs = [
  {
    q: "How do the 1-on-1 online classes work?",
    a: "Classes are held live via our virtual classroom portal or Zoom/Skype. You connect 1-on-1 with your personal tutor who shares Norani Qaida or digital Mushaf screens and corrects your pronunciation in real time.",
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
    a: "You can easily reschedule any class up to 4 hours prior to the session start time through our portal without any extra charge.",
  },
];

export default function Home() {
  const [playingId, setPlayingId] = useState<string | null>("1");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState("Norani Qaida & Basic Quran for Kids ($10/mo)");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Norani Qaida & Basic Quran for Kids",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const currentTrack = tracks.find((t) => t.id === playingId) || tracks[0];

  const openModal = (courseName?: string) => {
    if (courseName) setSelectedCourse(courseName);
    setIsModalOpen(true);
  };

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setResponseMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setResponseMsg(data.message || "Thank you! We will confirm your seat within 24 hours.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "Norani Qaida & Basic Quran for Kids",
          message: "",
        });
      } else {
        setStatus("error");
        setResponseMsg(data.error || "Failed to submit request.");
      }
    } catch (err) {
      setStatus("error");
      setResponseMsg("An error occurred. Please check your network connection.");
    }
  };

  return (
    <div className="space-y-24 pb-16 overflow-hidden">
      {/* Reserve Seat Popup Modal */}
      <ReserveSeatModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        defaultCourse={selectedCourse}
      />

      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center pt-28 pb-16 bg-islamic-pattern">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sage-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <ScrollReveal direction="down" delay={0.1}>
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-sage-100 text-sage-900 border border-sage-300 shadow-xs">
                  <FaQuran className="text-gold-600" />
                  Serene & Authentic Online Learning
                </span>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.2}>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-extrabold text-sage-900 leading-tight tracking-tight">
                  Illuminate Your Heart With The{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sage-800 via-sage-700 to-gold-600">
                    Noble Quran
                  </span>
                </h1>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.3}>
                <p className="font-serif font-arabic text-2xl sm:text-3xl text-sage-900 font-bold my-2">
                  بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
                </p>
                <p className="text-sage-900 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
                  Join thousands of students worldwide learning Norani Qaida, Quran reading, Tajweed mastery, and Hifz with certified native Arab tutors in a tranquil, 1-on-1 online environment.
                </p>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.4}>
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
                  <button
                    onClick={() => openModal()}
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-sage-700 text-cream-50 font-extrabold text-base hover:bg-sage-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2 border border-sage-600"
                  >
                    <FiBookmark className="w-5 h-5 text-gold-400" />
                    <span>Reserve Seat Now</span>
                  </button>

                  <a
                    href="#courses-section"
                    className="w-full sm:w-auto px-8 py-4 rounded-full bg-cream-50 text-sage-900 font-extrabold text-base hover:bg-sage-100 transition-all duration-300 shadow-sm border border-sage-300 flex items-center justify-center gap-2"
                  >
                    <span>Explore Programs</span>
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal direction="up" delay={0.5}>
                <div className="pt-6 flex items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm font-bold text-sage-900">
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
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-gold-400/30 to-sage-400/30 blur-xl opacity-70" />
                  <div className="relative rounded-3xl bg-cream-50 p-8 shadow-2xl border border-sage-300 space-y-6">
                    <div className="text-center space-y-2 border-b border-sage-200 pb-6">
                      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-gold-400 shadow-lg relative bg-sage-950">
                        <img
                          src="/logo.jpg"
                          alt="Huzaifa's Online Quran Classes Seal"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-serif font-bold text-2xl text-sage-900">
                        Reserve Your Seat
                      </h3>
                      <p className="text-xs sm:text-sm text-sage-900 font-medium">
                        View Meezan Bank details & submit your reservation form.
                      </p>
                    </div>

                    <div className="space-y-3 text-sm">
                      <div className="flex items-center justify-between p-3 rounded-xl bg-sage-50 border border-sage-200">
                        <span className="font-bold text-sage-900">1. Select Program</span>
                        <span className="text-xs text-gold-600 font-extrabold">$10 / $20 / $50</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-xl bg-sage-50 border border-sage-200">
                        <span className="font-bold text-sage-900">2. Meezan Bank Details</span>
                        <span className="text-xs text-gold-600 font-extrabold">Instant Copy</span>
                      </div>
                      <div className="flex items-center justify-between p-3 rounded-xl bg-sage-50 border border-sage-200">
                        <span className="font-bold text-sage-900">3. Confirmation</span>
                        <span className="text-xs text-gold-600 font-extrabold">Within 24 Hours</span>
                      </div>
                    </div>

                    <button
                      onClick={() => openModal()}
                      className="w-full text-center py-3.5 rounded-full bg-gold-400 text-sage-900 font-extrabold text-sm hover:bg-gold-300 transition-colors shadow-md flex items-center justify-center gap-2"
                    >
                      <FiBookmark />
                      <span>Reserve Seat Now</span>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <ScrollReveal direction="up">
          <div className="bg-sage-900 rounded-3xl p-8 sm:p-12 text-cream-50 shadow-xl border border-sage-800 relative overflow-hidden">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
              <div className="space-y-1">
                <p className="font-serif text-3xl sm:text-4xl font-extrabold text-gold-400">
                  5,000+
                </p>
                <p className="text-xs sm:text-sm text-cream-50 font-bold">Active Students</p>
              </div>
              <div className="space-y-1">
                <p className="font-serif text-3xl sm:text-4xl font-extrabold text-gold-400">
                  120+
                </p>
                <p className="text-xs sm:text-sm text-cream-50 font-bold">Certified Native Scholars</p>
              </div>
              <div className="space-y-1">
                <p className="font-serif text-3xl sm:text-4xl font-extrabold text-gold-400">
                  45+
                </p>
                <p className="text-xs sm:text-sm text-cream-50 font-bold">Countries Reached</p>
              </div>
              <div className="space-y-1">
                <p className="font-serif text-3xl sm:text-4xl font-extrabold text-gold-400">
                  99.4%
                </p>
                <p className="text-xs sm:text-sm text-cream-50 font-bold">Student Satisfaction</p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Section Action Button */}
        <div className="text-center">
          <button
            onClick={() => openModal()}
            className="px-8 py-3.5 rounded-full bg-sage-700 text-cream-50 font-extrabold text-sm hover:bg-sage-800 transition-all shadow-md inline-flex items-center gap-2"
          >
            <FiBookmark className="text-gold-400" />
            <span>Reserve Seat Now</span>
          </button>
        </div>
      </section>

      {/* 3. COURSES SHOWCASE SECTION */}
      <section id="courses-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28 space-y-10">
        <SectionHeading
          badge="Structured Learning Tracks"
          title="Our Academy Programs"
          subtitle="Taught by certified native Arabic scholars tailored to your age, goal, and schedule."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sampleCourses.map((course, idx) => (
            <ScrollReveal key={course.id} direction="up" delay={idx * 0.1}>
              <CourseCard course={course} />
            </ScrollReveal>
          ))}
        </div>

        {/* Section Action Button */}
        <div className="text-center pt-4">
          <button
            onClick={() => openModal()}
            className="px-8 py-3.5 rounded-full bg-sage-700 text-cream-50 font-extrabold text-sm hover:bg-sage-800 transition-all shadow-md inline-flex items-center gap-2"
          >
            <FiBookmark className="text-gold-400" />
            <span>Reserve Program Seat</span>
          </button>
        </div>
      </section>

      {/* 4. WHY CHOOSE US SECTION */}
      <section className="bg-sage-50 py-20 border-y border-sage-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            badge="Excellence in Education"
            title="Why Students Choose Huzaifa's Online Quran Classes"
            subtitle="We combine traditional Al-Azhar methodology with modern virtual tools to deliver an inspiring, spiritual learning environment."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                  <div className="bg-cream-50 rounded-2xl p-8 border border-sage-300 shadow-xs hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-sage-100 text-sage-800 flex items-center justify-center text-2xl mb-6 group-hover:bg-sage-700 group-hover:text-gold-400 transition-colors">
                      <Icon />
                    </div>
                    <h3 className="font-serif font-bold text-xl text-sage-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sage-900 font-medium text-sm sm:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Section Action Button */}
          <div className="text-center pt-4">
            <button
              onClick={() => openModal()}
              className="px-8 py-3.5 rounded-full bg-sage-700 text-cream-50 font-extrabold text-sm hover:bg-sage-800 transition-all shadow-md inline-flex items-center gap-2"
            >
              <FiBookmark className="text-gold-400" />
              <span>Reserve Seat Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* 5. AUDIO RECITATIONS SANCTUARY SECTION */}
      <section id="recitations-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28 space-y-10">
        <SectionHeading
          badge="Audio Sanctuary"
          title="Inspiring Quran Recitations"
          subtitle="Listen to serene recitations from world-renowned master Qaris to refine your Tajweed ear and nourish your soul."
        />

        {/* Sticky Player Card */}
        <div className="bg-gradient-to-r from-sage-800 to-sage-900 rounded-3xl p-6 sm:p-8 text-cream-50 shadow-2xl border border-sage-700 flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="w-14 h-14 rounded-2xl bg-gold-500/20 border border-gold-400/40 text-gold-400 flex items-center justify-center text-2xl flex-shrink-0">
              <FaQuran />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-extrabold tracking-wider uppercase block">
                {playingId ? "Currently Playing" : "Select a Surah"}
              </span>
              <h3 className="font-serif font-bold text-lg sm:text-xl text-cream-50">
                {currentTrack.surahName}
              </h3>
              <p className="text-xs sm:text-sm text-sage-100 font-medium">
                {currentTrack.reciter} • {currentTrack.style}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1 h-8">
            {[40, 70, 30, 90, 50, 80, 40, 100, 60, 30, 80, 50].map((h, i) => (
              <div
                key={i}
                className={`w-1 bg-gold-400 rounded-full transition-all duration-300 ${
                  playingId ? "animate-pulse" : "opacity-40"
                }`}
                style={{ height: playingId ? `${h}%` : "20%" }}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setPlayingId(playingId ? null : currentTrack.id)}
              className="w-12 h-12 rounded-full bg-gold-400 text-sage-900 flex items-center justify-center text-xl font-extrabold shadow-md hover:bg-gold-300 transition-transform active:scale-95"
            >
              {playingId ? <FiPause /> : <FiPlay className="ml-0.5" />}
            </button>
            <span className="text-xs text-gold-300 font-mono font-bold">{currentTrack.duration}</span>
          </div>
        </div>

        {/* Surah Track List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracks.map((track, idx) => {
            const isSelected = playingId === track.id;
            return (
              <ScrollReveal key={track.id} direction="up" delay={idx * 0.08}>
                <div
                  className={`p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                    isSelected
                      ? "bg-cream-50 border-gold-500 shadow-md ring-1 ring-gold-400/40"
                      : "bg-cream-50 hover:bg-cream-100 border-sage-300 shadow-xs"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setPlayingId(isSelected ? null : track.id)}
                      className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-sage-700 text-gold-400 shadow-md"
                          : "bg-sage-100 text-sage-900 hover:bg-sage-200"
                      }`}
                    >
                      {isSelected ? <FiPause /> : <FiPlay className="ml-0.5" />}
                    </button>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold text-gold-600 bg-gold-400/15 px-2 py-0.5 rounded">
                          #{track.surahNumber}
                        </span>
                        <h4 className="font-serif font-bold text-sage-900 text-base">
                          {track.surahName}
                        </h4>
                      </div>
                      <p className="text-xs sm:text-sm text-sage-900 font-medium mt-1">
                        {track.reciter} • <span className="italic">{track.style}</span>
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-serif font-arabic text-lg font-bold text-sage-800 block">
                      {track.surahArabic}
                    </span>
                    <span className="text-xs text-sage-900 font-mono font-bold mt-0.5 block">
                      {track.duration}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Section Action Button */}
        <div className="text-center pt-4">
          <button
            onClick={() => openModal()}
            className="px-8 py-3.5 rounded-full bg-sage-700 text-cream-50 font-extrabold text-sm hover:bg-sage-800 transition-all shadow-md inline-flex items-center gap-2"
          >
            <FiBookmark className="text-gold-400" />
            <span>Reserve Seat Now</span>
          </button>
        </div>
      </section>

      {/* 6. FREE RESOURCES SECTION */}
      <section id="resources-section" className="bg-sage-50 py-20 border-y border-sage-200 scroll-mt-28 space-y-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
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
                        {res.fileSize}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-lg text-sage-900 mb-2">
                      {res.title}
                    </h3>
                    <p className="text-sage-900 font-medium text-sm leading-relaxed mb-6">
                      {res.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-sage-200 flex items-center justify-between">
                    <span className="text-xs text-gold-600 font-bold flex items-center gap-1">
                      <FiCheckCircle /> Free PDF
                    </span>
                    <button
                      onClick={() => alert(`Downloading sample guide: ${res.title}`)}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-sage-700 text-cream-50 text-xs font-bold hover:bg-sage-800 transition-colors shadow-xs"
                    >
                      <FiDownload className="w-3.5 h-3.5" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Section Action Button */}
          <div className="text-center pt-4">
            <button
              onClick={() => openModal()}
              className="px-8 py-3.5 rounded-full bg-sage-700 text-cream-50 font-extrabold text-sm hover:bg-sage-800 transition-all shadow-md inline-flex items-center gap-2"
            >
              <FiBookmark className="text-gold-400" />
              <span>Reserve Seat Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* 7. PRICING SECTION (EXACTLY $10, $20, $50 USD) */}
      <section id="pricing-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28 space-y-12">
        <SectionHeading
          badge="Affordable Monthly Plans"
          title="Transparent Tuition Pricing ($10, $20, $50)"
          subtitle="Choose the plan that fits your schedule. No setup fees, cancel or pause anytime with our 100% money-back guarantee."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center pt-4">
          {pricingPlans.map((plan, idx) => (
            <ScrollReveal key={plan.id} direction="up" delay={idx * 0.15}>
              <PricingCard plan={plan} />
            </ScrollReveal>
          ))}
        </div>

        {/* Guarantee Banner */}
        <ScrollReveal direction="up">
          <div className="bg-cream-50 p-8 rounded-3xl border border-gold-500 shadow-md flex flex-col md:flex-row items-center gap-6 text-center md:text-left max-w-4xl mx-auto">
            <div className="w-16 h-16 rounded-full bg-gold-400/20 text-gold-600 border border-gold-400/40 flex items-center justify-center text-3xl flex-shrink-0">
              <FiShield />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif font-bold text-xl text-sage-900">
                100% Satisfaction & Money-Back Guarantee
              </h3>
              <p className="text-sage-900 font-medium text-sm leading-relaxed">
                If within your first 7 days of paid enrollment you are not completely satisfied with your tutor or course progression, we will refund your tuition in full with no questions asked.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Feature Matrix */}
        <ScrollReveal direction="up">
          <div className="bg-cream-50 rounded-3xl border border-sage-300 shadow-xs overflow-hidden max-w-5xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-sage-900 text-cream-50 font-serif border-b border-sage-800">
                    <th className="p-5 font-extrabold text-base">Plan Feature</th>
                    <th className="p-5 text-center font-extrabold">Starter ($10/mo)</th>
                    <th className="p-5 text-center font-extrabold text-gold-400">Standard ($20/mo)</th>
                    <th className="p-5 text-center font-extrabold">Intensive ($50/mo)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-sage-200 text-sage-900 font-semibold">
                  {comparisonMatrix.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-cream-50" : "bg-cream-100"}>
                      <td className="p-5 font-bold">{row.feature}</td>
                      <td className="p-5 text-center font-extrabold text-sage-900">
                        {typeof row.starter === "boolean" ? (
                          row.starter ? <FiCheck className="mx-auto text-sage-700 w-5 h-5" /> : <FiX className="mx-auto text-sage-400 w-4 h-4" />
                        ) : (
                          <span className="text-xs font-bold">{row.starter}</span>
                        )}
                      </td>
                      <td className="p-5 text-center font-extrabold text-sage-900 bg-gold-400/10">
                        {typeof row.standard === "boolean" ? (
                          row.standard ? <FiCheck className="mx-auto text-gold-600 w-5 h-5" /> : <FiX className="mx-auto text-sage-400 w-4 h-4" />
                        ) : (
                          <span className="text-xs font-extrabold text-sage-900">{row.standard}</span>
                        )}
                      </td>
                      <td className="p-5 text-center font-extrabold text-sage-900">
                        {typeof row.intensive === "boolean" ? (
                          row.intensive ? <FiCheck className="mx-auto text-sage-700 w-5 h-5" /> : <FiX className="mx-auto text-sage-400 w-4 h-4" />
                        ) : (
                          <span className="text-xs font-bold">{row.intensive}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* Section Action Button */}
        <div className="text-center pt-4">
          <button
            onClick={() => openModal()}
            className="px-8 py-3.5 rounded-full bg-sage-700 text-cream-50 font-extrabold text-sm hover:bg-sage-800 transition-all shadow-md inline-flex items-center gap-2"
          >
            <FiBookmark className="text-gold-400" />
            <span>Reserve Seat Now</span>
          </button>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          badge="Student Stories"
          title="Words From Our Blessed Community"
          subtitle="Read how our dedicated 1-on-1 scholars have helped adults and children connect deeply with the Holy Quran."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="bg-cream-50 p-8 rounded-2xl border border-sage-300 shadow-xs space-y-4">
              <div className="flex text-gold-500 gap-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sage-900 font-medium text-sm leading-relaxed italic">
                &ldquo;My 8-year-old son started from zero Arabic with Norani Qaida. In just 3 months with Sheikh Mahmoud, he reads basic Surahs beautifully!&rdquo;
              </p>
              <div className="pt-4 border-t border-sage-200 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sage-900 text-sm">Fatima Al-Mansoor</h4>
                  <p className="text-xs font-semibold text-sage-800">Parent • United Kingdom</p>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 bg-sage-100 rounded-full text-sage-900">
                  Norani Qaida
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="bg-cream-50 p-8 rounded-2xl border border-sage-300 shadow-xs space-y-4">
              <div className="flex text-gold-500 gap-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sage-900 font-medium text-sm leading-relaxed italic">
                &ldquo;As a working professional in New York, finding a tutor who fits my late evening schedule was impossible until I found Noor Quran Academy. 100% recommended!&rdquo;
              </p>
              <div className="pt-4 border-t border-sage-200 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sage-900 text-sm">Tariq H. Johnson</h4>
                  <p className="text-xs font-semibold text-sage-800">Adult Student • USA</p>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 bg-sage-100 rounded-full text-sage-900">
                  Tajweed Master
                </span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div className="bg-cream-50 p-8 rounded-2xl border border-sage-300 shadow-xs space-y-4">
              <div className="flex text-gold-500 gap-1 text-sm">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-sage-900 font-medium text-sm leading-relaxed italic">
                &ldquo;Ustadha Maryam has been so patient with me. I completed my first Juz memorization and earned my preliminary Tajweed certificate. Extremely grateful!&rdquo;
              </p>
              <div className="pt-4 border-t border-sage-200 flex items-center justify-between">
                <div>
                  <h4 className="font-serif font-bold text-sage-900 text-sm">Aisha K. Siddiqui</h4>
                  <p className="text-xs font-semibold text-sage-800">Sister Student • Canada</p>
                </div>
                <span className="text-xs font-bold px-2.5 py-1 bg-sage-100 rounded-full text-sage-900">
                  Hifz Program
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 9. FAQ ACCORDION SECTION */}
      <section className="bg-sage-50 py-16 border-y border-sage-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
          <SectionHeading
            badge="Got Questions?"
            title="Frequently Asked Questions"
            subtitle="Everything you need to know about our virtual classroom, certified scholars, and scheduling flexibility."
          />

          <div className="space-y-4">
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

          {/* Section Action Button */}
          <div className="text-center pt-4">
            <button
              onClick={() => openModal()}
              className="px-8 py-3.5 rounded-full bg-sage-700 text-cream-50 font-extrabold text-sm hover:bg-sage-800 transition-all shadow-md inline-flex items-center gap-2"
            >
              <FiBookmark className="text-gold-400" />
              <span>Reserve Seat Now</span>
            </button>
          </div>
        </div>
      </section>

      {/* 10. INTERACTIVE CONTACT & TRIAL FORM SECTION */}
      <section id="contact-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <SectionHeading
          badge="Start Learning Today"
          title="Schedule Your Free 3-Day Trial"
          subtitle="Fill out the form below to connect live with a master tutor. No credit card required, cancel anytime."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Column */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up">
              <div className="bg-cream-50 p-8 sm:p-10 rounded-3xl border border-sage-300 shadow-md">
                <h3 className="font-serif text-2xl font-bold text-sage-900 mb-2">
                  Send Trial Inquiry
                </h3>
                <p className="text-sm font-semibold text-sage-800 mb-6">
                  Our academic advisor will reach out within 24 hours to confirm your trial slot.
                </p>

                {status === "success" && (
                  <div className="mb-6 p-4 rounded-xl bg-sage-100 border border-sage-300 text-sage-900 text-sm flex items-start gap-3">
                    <FiCheckCircle className="text-sage-700 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-extrabold text-base">Request Sent Successfully!</p>
                      <p className="text-xs font-bold mt-1 text-sage-900">{responseMsg}</p>
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-900 text-sm flex items-start gap-3">
                    <FiAlertCircle className="text-red-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-extrabold">Submission Error</p>
                      <p className="text-xs font-semibold mt-1 text-red-800">{responseMsg}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-sage-900 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleFormChange}
                        placeholder="e.g. Zakariya Ahmad"
                        className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sage-300 text-sm font-semibold text-sage-900 placeholder:text-sage-700 focus:outline-none focus:ring-2 focus:ring-sage-700"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-sage-900 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleFormChange}
                        placeholder="zakariya@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sage-300 text-sm font-semibold text-sage-900 placeholder:text-sage-700 focus:outline-none focus:ring-2 focus:ring-sage-700"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-sage-900 mb-1.5">
                        WhatsApp / Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sage-300 text-sm font-semibold text-sage-900 placeholder:text-sage-700 focus:outline-none focus:ring-2 focus:ring-sage-700"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-sage-900 mb-1.5">
                        Interested Program
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sage-300 text-sm font-extrabold text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-700"
                      >
                        <option value="Norani Qaida & Basic Quran for Kids ($10/mo)">
                          Norani Qaida & Basic Quran for Kids ($10/mo)
                        </option>
                        <option value="Quran Reading & Tajweed Rules ($20/mo)">
                          Quran Reading & Tajweed Rules ($20/mo)
                        </option>
                        <option value="Full Quran Hifz Program ($50/mo)">
                          Full Quran Hifz Program ($50/mo)
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-sage-900 mb-1.5">
                      Your Message or Preferred Timezone *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleFormChange}
                      placeholder="Please let us know your preferred study days, age of student, or any specific goals..."
                      className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sage-300 text-sm font-semibold text-sage-900 placeholder:text-sage-700 focus:outline-none focus:ring-2 focus:ring-sage-700"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 rounded-full bg-sage-700 text-cream-50 font-extrabold text-sm sm:text-base hover:bg-sage-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 border border-sage-600 disabled:opacity-50"
                  >
                    <FiSend className="w-4 h-4 text-gold-400" />
                    <span>{status === "loading" ? "Submitting..." : "Submit Trial Request"}</span>
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Details Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="left" delay={0.2}>
              <div className="bg-sage-900 text-cream-50 p-8 rounded-3xl shadow-xl border border-sage-800 space-y-6">
                <h3 className="font-serif font-bold text-2xl border-b border-sage-800 pb-4 text-cream-50">
                  Direct Academy Channels
                </h3>

                <div className="space-y-5 text-sm sm:text-base font-semibold">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 border border-gold-500/40 flex items-center justify-center flex-shrink-0 mt-1">
                      <FiMail />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-cream-50">Email Support</h4>
                      <p className="text-xs sm:text-sm text-cream-100 mt-0.5">info@noorquranacademy.com</p>
                      <p className="text-xs text-gold-400 font-bold mt-1">Replies within 4-6 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 border border-gold-500/40 flex items-center justify-center flex-shrink-0 mt-1">
                      <FaWhatsapp />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-cream-50">Instant WhatsApp Chat</h4>
                      <p className="text-xs sm:text-sm text-cream-100 mt-0.5">+1 (800) 555-7872</p>
                      <p className="text-xs text-gold-400 font-bold mt-1">Available 24/7 for quick Q&A</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 border border-gold-500/40 flex items-center justify-center flex-shrink-0 mt-1">
                      <FiPhone />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-cream-50">Toll-Free Phone</h4>
                      <p className="text-xs sm:text-sm text-cream-100 mt-0.5">+1 (800) 555-QURAN</p>
                      <p className="text-xs text-gold-400 font-bold mt-1">Mon - Fri • 9am - 6pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 border border-gold-500/40 flex items-center justify-center flex-shrink-0 mt-1">
                      <FiMapPin />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-cream-50">Global Online Campus</h4>
                      <p className="text-xs sm:text-sm text-cream-100 mt-0.5">
                        Students across USA, UK, Canada, Australia, Europe & UAE.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.3}>
              <div className="bg-cream-50 p-6 rounded-3xl border border-sage-300 shadow-xs text-center space-y-2">
                <p className="font-serif font-arabic text-xl font-bold text-sage-900">
                  خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
                </p>
                <p className="text-xs sm:text-sm font-serif font-bold text-sage-900 italic">
                  &ldquo;The best among you are those who learn the Quran and teach it.&rdquo; (Sahih Al-Bukhari)
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
