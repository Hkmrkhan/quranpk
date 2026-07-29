import Link from "next/link";
import { GiBookAura } from "react-icons/gi";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import { FaQuran } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-sage-900 text-cream-100 relative overflow-hidden pt-16 pb-10 border-t border-sage-800">
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#D4AF37_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-sage-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/40 flex items-center justify-center">
                <GiBookAura className="w-6 h-6" />
              </div>
              <div>
                <span className="font-serif font-bold text-xl tracking-tight text-cream-50">
                  NOOR QURAN ACADEMY
                </span>
                <p className="text-[10px] tracking-widest uppercase text-gold-400 font-semibold">
                  Serene Online Learning
                </p>
              </div>
            </Link>
            <p className="text-sage-200/80 text-sm leading-relaxed max-w-sm">
              Empowering students worldwide with authentic Norani Qaida, Quranic education, precise Tajweed rules, and spiritual enrichment under certified native Arab scholars.
            </p>
            <div className="pt-2 flex items-center gap-2 text-gold-400 text-sm font-serif italic">
              <FaQuran className="text-gold-400" />
              <span>&ldquo;Read! In the Name of your Lord Who created&rdquo; (96:1)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-cream-50 font-semibold text-lg mb-4 border-b border-gold-500/30 pb-2 inline-block">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm text-sage-200/80">
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
                  Tuition & Plans ($10 - $50)
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
            <h4 className="font-serif text-cream-50 font-semibold text-lg mb-4 border-b border-gold-500/30 pb-2 inline-block">
              Academy Programs
            </h4>
            <ul className="space-y-2.5 text-sm text-sage-200/80">
              <li>Norani Qaida & Basic Quran ($10/mo)</li>
              <li>Quran Reading & Tajweed Rules ($20/mo)</li>
              <li>Complete Quran Hifz Program ($50/mo)</li>
              <li>1-on-1 Certified Scholars</li>
              <li>Female Tutors Available</li>
              <li>Official Ijazah Track</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-serif text-cream-50 font-semibold text-lg mb-4 border-b border-gold-500/30 pb-2 inline-block">
              Get in Touch
            </h4>
            <ul className="space-y-3 text-sm text-sage-200/80">
              <li className="flex items-center gap-3">
                <FiMail className="text-gold-400 w-4 h-4 flex-shrink-0" />
                <span>info@noorquranacademy.com</span>
              </li>
              <li className="flex items-center gap-3">
                <FiPhone className="text-gold-400 w-4 h-4 flex-shrink-0" />
                <span>+1 (800) 555-QURAN</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="text-gold-400 w-4 h-4 flex-shrink-0 mt-1" />
                <span>Global Online Campus • USA & International</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-sage-300/70">
          <p>© {new Date().getFullYear()} Noor Quran Academy. All rights reserved.</p>
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
