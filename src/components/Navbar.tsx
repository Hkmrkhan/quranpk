"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HiMenuAlt3, HiX } from "react-icons/hi";

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
          ? "bg-cream-100/95 backdrop-blur-md shadow-sm border-b border-sage-200/60 py-2.5"
          : "bg-transparent py-3 sm:py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-gold-400 shadow-md group-hover:scale-105 transition-transform duration-300 flex-shrink-0 bg-sage-950 p-0.5">
            <img
              src="/logo.png"
              alt="Huzaifa's Online Quran Classes Logo"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-extrabold text-base sm:text-lg lg:text-xl tracking-tight text-sage-900 leading-tight group-hover:text-sage-700 transition-colors">
              HUZAIFA'S
            </span>
            <span className="text-[9px] sm:text-[10px] tracking-widest uppercase font-extrabold text-gold-600 -mt-0.5">
              ONLINE QURAN CLASSES
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => {
            return (
              <a
                key={link.name}
                href={link.href}
                className="relative text-sm font-bold transition-colors text-sage-900 hover:text-sage-700"
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
            className="px-5 py-2.5 rounded-full bg-sage-700 text-cream-50 text-xs sm:text-sm font-extrabold hover:bg-sage-800 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5 border border-sage-600"
          >
            Free Trial
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-sage-900 p-2 rounded-lg hover:bg-sage-100 transition-colors"
        >
          {mobileMenuOpen ? <HiX className="w-6 h-6" /> : <HiMenuAlt3 className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-cream-50 border-b border-sage-300 px-6 py-6 space-y-4 shadow-2xl animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-extrabold py-2 text-sage-900 hover:text-sage-700 border-b border-sage-200/50"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="/#contact-section"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-3.5 rounded-full bg-sage-700 text-cream-50 font-extrabold text-sm shadow-md"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
