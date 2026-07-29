"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";
import { FiPlay, FiPause, FiVolume2, FiDownload, FiMusic, FiBookOpen } from "react-icons/fi";
import { FaQuran } from "react-icons/fa";

interface RecitationTrack {
  id: string;
  surahName: string;
  surahArabic: string;
  surahNumber: number;
  reciter: string;
  style: string;
  duration: string;
}

const tracks: RecitationTrack[] = [
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
  {
    id: "5",
    surahName: "Surah Al-Mulk (The Sovereignty)",
    surahArabic: "سورة الملك",
    surahNumber: 67,
    reciter: "Sheikh Saad Al-Ghamdi",
    style: "Hafs 'an 'Asim",
    duration: "08:40",
  },
  {
    id: "6",
    surahName: "Surah An-Naba (The Tidings)",
    surahArabic: "سورة النبأ",
    surahNumber: 78,
    reciter: "Sheikh Abu Bakr Al-Shatri",
    style: "Hafs 'an 'Asim",
    duration: "06:15",
  },
];

export default function RecitationsPage() {
  const [playingId, setPlayingId] = useState<string | null>("1");

  const togglePlay = (id: string) => {
    if (playingId === id) {
      setPlayingId(null);
    } else {
      setPlayingId(id);
    }
  };

  const currentTrack = tracks.find((t) => t.id === playingId) || tracks[0];

  return (
    <div className="pt-28 pb-20 space-y-16">
      {/* Header Banner */}
      <section className="bg-sage-900 text-cream-100 py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-4">
          <ScrollReveal direction="down">
            <span className="inline-block px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-500/20 text-gold-400 border border-gold-500/30">
              Audio Sanctuary
            </span>
          </ScrollReveal>
          <ScrollReveal direction="up">
            <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight">
              Inspiring Quran Recitations
            </h1>
            <p className="text-sage-200/80 text-base max-w-2xl mx-auto font-sans mt-2">
              Listen to serene recitations from world-renowned master Qaris to refine your Tajweed ear and nourish your soul.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Interactive Sticky Demo Player Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-sage-800 to-sage-900 rounded-3xl p-6 sm:p-8 text-cream-100 shadow-2xl border border-sage-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 w-full md:w-auto">
            <div className="w-14 h-14 rounded-2xl bg-gold-500/20 border border-gold-400/40 text-gold-400 flex items-center justify-center text-2xl flex-shrink-0">
              <FaQuran />
            </div>
            <div>
              <span className="text-xs text-gold-400 font-semibold tracking-wider uppercase block">
                {playingId ? "Currently Playing" : "Select a Surah"}
              </span>
              <h3 className="font-serif font-bold text-lg text-cream-50">
                {currentTrack.surahName}
              </h3>
              <p className="text-xs text-sage-200/80">
                {currentTrack.reciter} • {currentTrack.style}
              </p>
            </div>
          </div>

          {/* Sound wave visualizer simulation */}
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
              onClick={() => togglePlay(currentTrack.id)}
              className="w-12 h-12 rounded-full bg-gold-400 text-sage-900 flex items-center justify-center text-xl font-bold shadow-md hover:bg-gold-300 transition-transform active:scale-95"
            >
              {playingId === currentTrack.id ? <FiPause /> : <FiPlay className="ml-0.5" />}
            </button>
            <span className="text-xs text-sage-300 font-mono">{currentTrack.duration}</span>
          </div>
        </div>
      </section>

      {/* Recitation Playlist Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Selected Surahs"
          title="Featured Recitation Playlist"
          subtitle="Click to play demo recitations. Notice the melodic precision (Targheeb) and proper Tajweed articulation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tracks.map((track, idx) => {
            const isSelected = playingId === track.id;
            return (
              <ScrollReveal key={track.id} direction="up" delay={idx * 0.08}>
                <div
                  className={`p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between gap-4 ${
                    isSelected
                      ? "bg-cream-50 border-gold-400/90 shadow-md ring-1 ring-gold-400/40"
                      : "bg-cream-50/70 hover:bg-cream-50 border-sage-200/80 shadow-xs"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => togglePlay(track.id)}
                      className={`w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                        isSelected
                          ? "bg-sage-700 text-gold-400 shadow-md"
                          : "bg-sage-100 text-sage-800 hover:bg-sage-200"
                      }`}
                    >
                      {isSelected ? <FiPause /> : <FiPlay className="ml-0.5" />}
                    </button>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-gold-600 bg-gold-400/10 px-2 py-0.5 rounded">
                          #{track.surahNumber}
                        </span>
                        <h4 className="font-serif font-bold text-sage-900 text-base">
                          {track.surahName}
                        </h4>
                      </div>
                      <p className="text-xs text-sage-600 mt-1">
                        {track.reciter} • <span className="italic">{track.style}</span>
                      </p>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="font-serif font-arabic text-lg text-sage-700 block">
                      {track.surahArabic}
                    </span>
                    <span className="text-xs text-sage-600 font-mono mt-0.5 block">
                      {track.duration}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* Reciter Masters Section */}
      <section className="bg-sage-50/80 py-16 border-y border-sage-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            badge="Master Styles"
            title="The Four Recognized Styles of Recitation"
            subtitle="Learn the difference between Tartil, Tajweed, Mujawwad, and Hadr during your personalized classes."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-cream-50 p-6 rounded-2xl border border-sage-200/80 space-y-3">
              <span className="text-xs font-bold text-gold-600 bg-gold-400/10 px-2.5 py-1 rounded-md inline-block">
                Tartil (ترتيل)
              </span>
              <h4 className="font-serif font-bold text-sage-900">Slow & Reflective</h4>
              <p className="text-xs text-sage-700/80 leading-relaxed">
                Measured, contemplative recitation focused on deep meditation of the Quranic meanings.
              </p>
            </div>

            <div className="bg-cream-50 p-6 rounded-2xl border border-sage-200/80 space-y-3">
              <span className="text-xs font-bold text-gold-600 bg-gold-400/10 px-2.5 py-1 rounded-md inline-block">
                Murattal (مرتل)
              </span>
              <h4 className="font-serif font-bold text-sage-900">Standard Educational</h4>
              <p className="text-xs text-sage-700/80 leading-relaxed">
                Clear, moderate speed designed for memorization and learning proper Tajweed rules.
              </p>
            </div>

            <div className="bg-cream-50 p-6 rounded-2xl border border-sage-200/80 space-y-3">
              <span className="text-xs font-bold text-gold-600 bg-gold-400/10 px-2.5 py-1 rounded-md inline-block">
                Mujawwad (مجود)
              </span>
              <h4 className="font-serif font-bold text-sage-900">Melodic & Expressive</h4>
              <p className="text-xs text-sage-700/80 leading-relaxed">
                Artistic, resonant recitation utilizing vocal maqamat while preserving strict Tajweed limits.
              </p>
            </div>

            <div className="bg-cream-50 p-6 rounded-2xl border border-sage-200/80 space-y-3">
              <span className="text-xs font-bold text-gold-600 bg-gold-400/10 px-2.5 py-1 rounded-md inline-block">
                Hadr (حدر)
              </span>
              <h4 className="font-serif font-bold text-sage-900">Swift Revision</h4>
              <p className="text-xs text-sage-700/80 leading-relaxed">
                Rapid yet accurate recitation used primarily by Hafiz students during daily revision.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
