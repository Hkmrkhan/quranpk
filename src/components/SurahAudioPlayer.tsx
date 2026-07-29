"use client";

import { useState, useRef } from "react";
import { FiPlay, FiPause, FiVolume2, FiVolumeX, FiHeadphones } from "react-icons/fi";
import { FaQuran } from "react-icons/fa";

interface SurahAudioPlayerProps {
  surahName: string;
  arabicName: string;
  audioUrl: string;
  reciter: string;
}

export default function SurahAudioPlayer({
  surahName,
  arabicName,
  audioUrl,
  reciter,
}: SurahAudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="bg-gradient-to-r from-sage-800 to-sage-900 rounded-3xl p-6 sm:p-8 text-cream-50 shadow-xl border border-sage-700 flex flex-col md:flex-row items-center justify-between gap-6">
      <audio
        ref={audioRef}
        src={audioUrl}
        onEnded={() => setIsPlaying(false)}
        preload="none"
      />

      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="w-14 h-14 rounded-2xl bg-gold-500/20 border border-gold-400/40 text-gold-400 flex items-center justify-center text-2xl flex-shrink-0">
          <FaQuran className={isPlaying ? "animate-pulse" : ""} />
        </div>
        <div>
          <span className="text-xs text-gold-400 font-extrabold tracking-wider uppercase block">
            {isPlaying ? "Now Playing Recitation" : "Listen Audio Recitation"}
          </span>
          <h3 className="font-serif font-bold text-lg sm:text-xl text-cream-50 flex items-center gap-2">
            <span>{surahName}</span>
            <span className="font-arabic font-normal text-gold-300 text-lg">({arabicName})</span>
          </h3>
          <p className="text-xs sm:text-sm text-sage-200 font-medium">
            Recited by {reciter}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button
          onClick={toggleMute}
          className="p-3 rounded-full bg-sage-800/80 text-cream-100 hover:text-gold-400 transition-colors text-lg"
          title={isMuted ? "Unmute" : "Mute"}
        >
          {isMuted ? <FiVolumeX /> : <FiVolume2 />}
        </button>

        <button
          onClick={togglePlay}
          className="px-6 py-3 rounded-full bg-gold-400 text-sage-900 font-extrabold text-sm sm:text-base hover:bg-gold-300 transition-all shadow-md flex items-center gap-2"
        >
          {isPlaying ? (
            <>
              <FiPause className="w-5 h-5" />
              <span>Pause Audio</span>
            </>
          ) : (
            <>
              <FiPlay className="w-5 h-5 ml-0.5" />
              <span>Listen Recitation</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
