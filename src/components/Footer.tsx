import Link from "next/link";
import { FiMapPin, FiClock, FiCheckCircle } from "react-icons/fi";
import { FaQuran } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-cream-50 relative overflow-hidden pt-16 pb-10 border-t border-sage-800">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-sage-800">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-gold-400 flex-shrink-0 bg-sage-950 p-0.5 shadow-md">
                <img
                  src="/logo.png"
                  alt="Huzaifa's Online Quran Classes Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-serif font-extrabold text-xl tracking-tight text-cream-50">
                  HUZAIFA'S
                </span>
                <p className="text-[10px] tracking-widest uppercase text-gold-400 font-extrabold">
                  ONLINE QURAN CLASSES
                </p>
              </div>
            </Link>
            <p className="text-cream-100 text-sm leading-relaxed max-w-sm font-medium">
              Empowering students worldwide with authentic Norani Qaida, Quranic education, precise Tajweed rules, and spiritual enrichment under certified native scholars.
            </p>
            <div className="pt-2 flex items-center gap-2 text-gold-400 text-sm font-serif italic font-bold">
              <FaQuran className="text-gold-400" />
              <span>&ldquo;Read! In the Name of your Lord Who created&rdquo; (96:1)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-cream-50 font-bold text-lg mb-4 border-b border-gold-500/30 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-cream-100">
              <li>
                <a href="/#courses-section" className="hover:text-gold-400 transition-colors">
                  Academy Programs
                </a>
              </li>
              <li>
                <a href="/#recitations-section" className="hover:text-gold-400 transition-colors">
                  Audio Recitations
                </a>
              </li>
              <li>
                <a href="/#resources-section" className="hover:text-gold-400 transition-colors">
                  Free Study Resources
                </a>
              </li>
              <li>
                <a href="/#pricing-section" className="hover:text-gold-400 transition-colors">
                  Tuition Plans ($10 - $50)
                </a>
              </li>
              <li>
                <a href="/#contact-section" className="hover:text-gold-400 transition-colors">
                  Schedule Free Trial
                </a>
              </li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-serif text-cream-50 font-bold text-lg mb-4 border-b border-gold-500/30 pb-2 inline-block">
              Academy Programs
            </h4>
            <ul className="space-y-2.5 text-sm font-medium text-cream-100">
              <li>Norani Qaida & Basic Quran ($10/mo)</li>
              <li>Quran Reading & Tajweed Rules ($20/mo)</li>
              <li>Complete Quran Hifz Program ($50/mo)</li>
              <li>1-on-1 Certified Tutors</li>
              <li>Female Tutors Available</li>
              <li>Official Ijazah Track</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-cream-50 font-bold text-lg mb-4 border-b border-gold-500/30 pb-2 inline-block">
              Academy Info
            </h4>
            <ul className="space-y-3 text-sm font-medium text-cream-100">
              <li className="flex items-start gap-3">
                <FiMapPin className="text-gold-400 w-4 h-4 flex-shrink-0 mt-1" />
                <span>Global Online Campus • Worldwide</span>
              </li>
              <li className="flex items-center gap-3">
                <FiClock className="text-gold-400 w-4 h-4 flex-shrink-0" />
                <span>24/7 Flexible Timings</span>
              </li>
              <li className="flex items-center gap-3">
                <FiCheckCircle className="text-gold-400 w-4 h-4 flex-shrink-0" />
                <span>1-on-1 Private Virtual Classroom</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-semibold text-cream-100/80">
          <p>© {new Date().getFullYear()} Huzaifa's Online Quran Classes. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/#contact-section" className="hover:text-gold-400 transition-colors">
              Privacy Policy
            </a>
            <a href="/#contact-section" className="hover:text-gold-400 transition-colors">
              Terms of Service
            </a>
            <a href="/#contact-section" className="hover:text-gold-400 transition-colors">
              Support
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
