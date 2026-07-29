"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { GiBookAura } from "react-icons/gi";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/#courses-section" },
  { name: "Recitations", href: "/#recitations-section" },
  { name: "Resources", href: "/#resources-section" },
  { name: "Pricing", href: "/#pricing-section" },
  { name: "Contact", href: "/#contact-section" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-cream-100/90 backdrop-blur-md shadow-sm border-b border-sage-200/40 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-full bg-sage-700 flex items-center justify-center text-gold-400 shadow-md group-hover:scale-105 transition-transform duration-300">
            <GiBookAura className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-xl tracking-tight text-sage-900 group-hover:text-sage-700 transition-colors">
              NOOR QURAN
            </span>
            <span className="text-[10px] tracking-widest uppercase font-semibold text-gold-600 -mt-1">
              ACADEMY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            return (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-medium transition-colors text-sage-900/80 hover:text-sage-700"
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="/#contact-section"
            className="px-5 py-2.5 rounded-full bg-sage-700 text-cream-50 text-sm font-semibold hover:bg-sage-800 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-sage-600"
          >
            Free Trial
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-sage-800 p-2 rounded-lg hover:bg-sage-100 transition-colors"
        >
          {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-50 border-b border-sage-200 px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-medium py-2 text-sage-900/80 hover:text-sage-800"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="/#contact-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3 rounded-full bg-sage-700 text-cream-50 font-semibold shadow-md"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
