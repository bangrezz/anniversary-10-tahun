import React from 'react';
import { siteConfig } from '../config/content';
import { LilyCorner, LilyDivider, SmallLilyIcon } from './LilyDecorations';

export const LetterSection = () => {
  const { letter, meta } = siteConfig;

  return (
    <section 
      id="surat"
      aria-label="Surat Untukmu"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto z-10"
    >
      <div className="text-center mb-12">
        <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-primary-dark/80 bg-primary-light/30 px-3.5 py-1 rounded-full border border-primary/20">
          {letter.sectionTag}
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-typography-dark mt-3 mb-2">
          {letter.title}
        </h2>
      </div>

      {/* Romantic Letter Paper Container */}
      <div className="relative bg-[#FFFDFB] rounded-3xl p-6 sm:p-12 md:p-16 shadow-photo border border-primary/30 paper-texture overflow-hidden">
        {/* Subtle Lily Corner Decorations */}
        <LilyCorner className="absolute top-4 left-4" />
        <LilyCorner className="absolute top-4 right-4 rotate-90" />
        <LilyCorner className="absolute bottom-4 left-4 -rotate-90" />
        <LilyCorner className="absolute bottom-4 right-4 rotate-180" />

        {/* Letter Content */}
        <div className="relative z-10 max-w-2xl mx-auto">
          {/* Greeting */}
          <div className="mb-6">
            <p className="font-serif italic text-xl sm:text-2xl text-typography-dark font-medium">
              {meta.partnerFullName
                ? `Untuk ${meta.partnerFullName} tersayang,`
                : meta.partnerName 
                  ? `Untuk ${meta.partnerName} tersayang,` 
                  : letter.dateGreeting}
            </p>
          </div>

          {/* Paragraphs */}
          <div className="space-y-5 text-sm sm:text-base md:text-lg text-typography-dark/90 leading-relaxed font-sans font-normal">
            {letter.paragraphs.map((paragraph, idx) => (
              <p key={idx} className="indent-4 sm:indent-8">
                {paragraph}
              </p>
            ))}
          </div>

          <LilyDivider className="my-8" />

          {/* Signoff */}
          <div className="pt-2 text-right">
            <p className="font-serif italic text-base sm:text-lg text-typography-muted">
              {letter.closing}
            </p>
            <p className="font-handwriting text-2xl sm:text-3xl text-primary-dark mt-1">
              {meta.yourFullName || meta.yourName || letter.signature}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
