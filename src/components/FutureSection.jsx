import React, { useState } from 'react';
import { siteConfig } from '../config/content';
import { Sparkles, Heart, ChevronDown } from 'lucide-react';
import { SmallLilyIcon, LilyDivider } from './LilyDecorations';

export const FutureSection = () => {
  const { future } = siteConfig;
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <section 
      id="masa-depan"
      aria-label="Untuk Tahun-Tahun Berikutnya"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center z-10"
    >
      <div className="mb-10">
        <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-primary-dark/80 bg-primary-light/30 px-3.5 py-1 rounded-full border border-primary/20">
          {future.sectionTag}
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-typography-dark mt-3 mb-4">
          {future.title}
        </h2>
        <p className="text-base sm:text-lg text-typography-muted max-w-2xl mx-auto leading-relaxed">
          {future.message}
        </p>
      </div>

      {/* Main Closing Quote Banner */}
      <div className="relative my-12 p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-primary-light/30 via-bg-lavender/50 to-accent-pinkLight/40 border border-primary/30 shadow-soft">
        <div className="max-w-xl mx-auto">
          <SmallLilyIcon className="w-8 h-8 text-primary mx-auto mb-4 opacity-80" />
          <blockquote className="font-serif italic text-2xl sm:text-4xl text-typography-dark font-medium leading-snug">
            “{future.closingQuote}”
          </blockquote>
          <div className="w-12 h-0.5 bg-primary/40 mx-auto mt-6" />
        </div>
      </div>

      {/* Interactive Element: "Satu pesan lagi" */}
      <div className="mt-8 flex flex-col items-center">
        {!isRevealed ? (
          <button
            onClick={() => setIsRevealed(true)}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-bg-lavender text-typography-dark border border-primary/40 hover:border-primary shadow-soft hover:shadow-photo transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base font-medium"
            aria-expanded={isRevealed}
            aria-controls="pesan-rahasia"
          >
            <Sparkles className="w-4 h-4 text-primary transition-transform group-hover:rotate-12" />
            <span>{future.secretMessage.buttonText}</span>
          </button>
        ) : (
          <div
            id="pesan-rahasia"
            className="w-full max-w-xl p-6 sm:p-8 bg-white/95 rounded-3xl shadow-photo border border-primary/40 text-center transition-all duration-500 animate-pulse-soft"
          >
            <div className="w-10 h-10 rounded-full bg-primary-light/40 flex items-center justify-center mx-auto mb-3 text-primary-dark">
              <Heart className="w-5 h-5 fill-primary text-primary" />
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-semibold text-typography-dark mb-3">
              {future.secretMessage.revealedTitle}
            </h3>
            <p className="text-sm sm:text-base text-typography-muted leading-relaxed font-sans mb-4">
              {future.secretMessage.revealedText}
            </p>
            <p className="font-handwriting text-xl sm:text-2xl text-primary-dark">
              ~ {future.secretMessage.heartNote} ~
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
