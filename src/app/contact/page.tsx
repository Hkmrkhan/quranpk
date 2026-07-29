"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "Quran Reading & Tajweed Rules",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
        setResponseMsg(data.message || "Thank you! Your trial request has been submitted.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          course: "Quran Reading & Tajweed Rules",
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
    <div className="pt-28 pb-20 space-y-16">
      {/* Header */}
      <section className="bg-sage-900 text-cream-100 py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <ScrollReveal direction="down">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-500/20 text-gold-400 border border-gold-500/30">
              Free Trial & Support
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up">
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight">
              Get In Touch With Us
            </h1>
            <p className="text-sage-200/80 text-base max-w-2xl mx-auto font-sans mt-2">
              Have questions about our curriculum or want to book your 3-day free trial? Fill out the form below or send us an email.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up">
              <div className="bg-cream-50 p-8 sm:p-10 rounded-3xl border border-sage-200/80 shadow-md">
                <h3 className="font-serif text-2xl font-bold text-sage-900 mb-2">
                  Schedule Free Trial / Send Inquiry
                </h3>
                <p className="text-xs text-sage-600 mb-6">
                  Our academic advisor will reach out within 24 hours to confirm your trial slot.
                </p>

                {status === "success" && (
                  <div className="mb-6 p-4 rounded-xl bg-sage-100 border border-sage-300 text-sage-800 text-sm flex items-start gap-3">
                    <FiCheckCircle className="text-sage-700 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Request Sent Successfully!</p>
                      <p className="text-xs mt-1 text-sage-700">{responseMsg}</p>
                    </div>
                  </div>
                )}

                {status === "error" && (
                  <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-800 text-sm flex items-start gap-3">
                    <FiAlertCircle className="text-red-600 w-5 h-5 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold">Submission Error</p>
                      <p className="text-xs mt-1 text-red-700">{responseMsg}</p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-sage-800 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Zakariya Ahmad"
                        className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sage-200 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-sage-800 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="zakariya@example.com"
                        className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sage-200 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-sage-800 mb-1.5">
                        WhatsApp / Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sage-200 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-sage-800 mb-1.5">
                        Interested Course
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sage-200 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-600"
                      >
                        <option value="Quran Reading & Tajweed Rules">
                          Quran Reading & Tajweed Rules
                        </option>
                        <option value="Full Quran Hifz Program">
                          Full Quran Hifz Program
                        </option>
                        <option value="Fun Quran & Arabic for Kids">
                          Fun Quran & Arabic for Kids
                        </option>
                        <option value="Classical Quranic Arabic">
                          Classical Quranic Arabic
                        </option>
                        <option value="Tafseer & Quranic Reflection">
                          Tafseer & Quranic Reflection
                        </option>
                        <option value="Ijazah Sanad Certification">
                          Ijazah Sanad Certification
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-sage-800 mb-1.5">
                      Your Message or Preferred Timezone *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please let us know your preferred study days, age of student, or any specific goals..."
                      className="w-full px-4 py-3 rounded-xl bg-cream-100 border border-sage-200 text-sm text-sage-900 focus:outline-none focus:ring-2 focus:ring-sage-600"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-4 rounded-full bg-sage-700 text-cream-50 font-bold text-sm hover:bg-sage-800 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 border border-sage-600 disabled:opacity-50"
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
              <div className="bg-sage-900 text-cream-100 p-8 rounded-3xl shadow-xl border border-sage-800 space-y-6">
                <h3 className="font-serif font-bold text-2xl border-b border-sage-800 pb-4 text-cream-50">
                  Direct Academy Channels
                </h3>

                <div className="space-y-5 text-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 border border-gold-500/40 flex items-center justify-center flex-shrink-0 mt-1">
                      <FiMail />
                    </div>
                    <div>
                      <h4 className="font-bold text-cream-50">Email Support</h4>
                      <p className="text-xs text-sage-200/80 mt-0.5">info@noorquranacademy.com</p>
                      <p className="text-[11px] text-gold-400/80 mt-1">Replies within 4-6 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 border border-gold-500/40 flex items-center justify-center flex-shrink-0 mt-1">
                      <FaWhatsapp />
                    </div>
                    <div>
                      <h4 className="font-bold text-cream-50">Instant WhatsApp Chat</h4>
                      <p className="text-xs text-sage-200/80 mt-0.5">+1 (800) 555-7872</p>
                      <p className="text-[11px] text-gold-400/80 mt-1">Available 24/7 for quick Q&A</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 border border-gold-500/40 flex items-center justify-center flex-shrink-0 mt-1">
                      <FiPhone />
                    </div>
                    <div>
                      <h4 className="font-bold text-cream-50">Toll-Free Phone</h4>
                      <p className="text-xs text-sage-200/80 mt-0.5">+1 (800) 555-QURAN</p>
                      <p className="text-[11px] text-gold-400/80 mt-1">Mon - Fri • 9am - 6pm EST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 border border-gold-500/40 flex items-center justify-center flex-shrink-0 mt-1">
                      <FiMapPin />
                    </div>
                    <div>
                      <h4 className="font-bold text-cream-50">Global Online Campus</h4>
                      <p className="text-xs text-sage-200/80 mt-0.5">
                        Students across USA, UK, Canada, Australia, Europe & UAE.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Quote Card */}
            <ScrollReveal direction="left" delay={0.3}>
              <div className="bg-cream-50 p-6 rounded-3xl border border-sage-200/80 shadow-xs text-center space-y-2">
                <p className="font-serif font-arabic text-xl text-sage-800">
                  خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ
                </p>
                <p className="text-xs font-serif text-sage-700 italic">
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
