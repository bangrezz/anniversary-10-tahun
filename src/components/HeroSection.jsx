import React from 'react';
import { siteConfig } from '../config/content';
import { SmallLilyIcon } from './LilyDecorations';
import { ChevronDown, Heart } from 'lucide-react';

export const HeroSection = ({ onOpenStory }) => {
  const { hero, meta } = siteConfig;

  return (
    <section 
      id="hero"
      aria-label="Bagian Pembuka"
      className="relative min-h-[92vh] flex flex-col items-center justify-center pt-10 pb-16 px-4 sm:px-6 lg:px-8 text-center z-10"
    >
      {/* Decorative Top Accent */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-light/40 border border-primary/30 text-typography-dark text-xs sm:text-sm font-medium tracking-wide mb-6 shadow-sm backdrop-blur-sm animate-pulse-soft">
        <SmallLilyIcon className="w-4 h-4 text-primary-dark" />
        <span>{meta.badgeSubtitle || "Sepuluh Tahun Bersama"}</span>
        {meta.anniversaryDate && (
          <>
            <span className="text-primary/60">•</span>
            <span>{meta.anniversaryDate}</span>
          </>
        )}
      </div>

      {/* Main Heading */}
      <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-typography-dark mb-4 max-w-4xl leading-[1.15]">
        {hero.title}
      </h1>

      {/* Companion Subtitle */}
      <p className="font-serif italic text-lg sm:text-2xl text-typography-muted max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
        “{hero.subtitle}”
      </p>

      {/* Hero Photo Centerpiece - Preserving exact 4:3 native ratio without face cropping */}
      <div className="relative w-full max-w-xl md:max-w-2xl mx-auto mb-10 group">
        {/* Soft Ambient Glow */}
        <div className="absolute -inset-3 bg-gradient-to-r from-primary/30 via-accent-pink/25 to-accent-blue/30 rounded-3xl blur-xl opacity-70 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none" />

        {/* Framing Container (Polaroid/Fine Paper Aesthetic) */}
        <div className="relative bg-white/90 p-3 sm:p-5 rounded-2xl shadow-photo border border-primary/30 backdrop-blur-sm transition-transform duration-500 hover:scale-[1.01]">
          {/* Subtle Top Photo Clip/Ribbon */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-primary-light/60 border border-primary/40 rounded-sm shadow-xs backdrop-blur-xs flex items-center justify-center">
            <span className="text-[10px] tracking-widest uppercase font-serif text-typography-muted">
              10th Anniversary
            </span>
          </div>

          <div className="overflow-hidden rounded-xl bg-bg-lavender">
            <picture>
              <source srcSet={hero.image.src} type="image/webp" />
              <img
                src={hero.image.fallback}
                alt={hero.image.alt}
                width={2880}
                height={2160}
                className="w-full h-auto object-contain block select-none"
                loading="eager"
                fetchPriority="high"
              />
            </picture>
          </div>

          {/* Caption underneath the photo */}
          {hero.image.caption && (
            <div className="pt-3 pb-1 text-center">
              <p className="font-handwriting text-xl sm:text-2xl text-typography-muted">
                {hero.image.caption}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Action Button: "Buka cerita kita" */}
      <div className="flex flex-col items-center">
        <button
          onClick={onOpenStory}
          className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-primary hover:bg-primary-dark text-white font-medium text-base shadow-soft hover:shadow-photo transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          aria-label="Buka cerita kita dan gulir ke bagian berikutnya"
        >
          <span>{hero.buttonText}</span>
          <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
        </button>
        <span className="mt-3 text-xs text-typography-light font-serif italic tracking-wide">
          Gulir ke bawah untuk melihat cerita kita
        </span>
      </div>
    </section>
  );
};
