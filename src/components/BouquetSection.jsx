import React, { useState } from 'react';
import { siteConfig } from '../config/content';
import { ZoomIn, X, Heart } from 'lucide-react';

export const BouquetSection = () => {
  const { bouquets } = siteConfig;
  const [selectedBouquet, setSelectedBouquet] = useState(null);

  return (
    <section 
      id="dua-buket"
      aria-label="Dua Buket Satu Cerita"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto z-10"
    >
      <div className="text-center mb-12">
        <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-primary-dark/80 bg-primary-light/30 px-3.5 py-1 rounded-full border border-primary/20">
          {bouquets.sectionTag}
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-typography-dark mt-3 mb-3">
          {bouquets.title}
        </h2>
        <p className="text-sm sm:text-base text-typography-muted max-w-2xl mx-auto leading-relaxed">
          {bouquets.subtitle}
        </p>
      </div>

      {/* Bouquet Grid: 2 columns on desktop, stacked on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {bouquets.items.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedBouquet(item)}
            className={`group flex flex-col bg-white/90 rounded-3xl p-4 sm:p-6 border transition-all duration-300 hover:-translate-y-1 cursor-pointer ${item.borderClass}`}
          >
            {/* Header Badge & Label */}
            <div className="flex items-center justify-between mb-4">
              <span className={`px-3.5 py-1 rounded-full text-xs sm:text-sm font-serif font-medium border ${item.pillBg}`}>
                {item.label}
              </span>
              <span className="text-xs text-typography-light flex items-center gap-1">
                <ZoomIn className="w-3.5 h-3.5" />
                <span>Ketuk untuk perbesar</span>
              </span>
            </div>

            {/* Photo Container */}
            <div 
              className="relative overflow-hidden rounded-2xl bg-bg-lavender aspect-[3/4] sm:aspect-[4/5] flex-1 group/img"
              title="Klik untuk melihat foto lebih besar dan membaca kartu"
            >
              <picture>
                <source srcSet={item.src} type="image/webp" />
                <img
                  src={item.fallback}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                />
              </picture>

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-typography-dark/20 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
                <div className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-typography-dark text-xs sm:text-sm font-medium shadow-md flex items-center gap-1.5">
                  <ZoomIn className="w-4 h-4 text-primary" />
                  <span>Lihat Detail & Kartu</span>
                </div>
              </div>
            </div>

            {/* Description & Card Reading Hint */}
            <div className="mt-4 text-center">
              <p className="text-sm text-typography-muted leading-relaxed">
                {item.description}
              </p>
              <p className="font-handwriting text-base sm:text-lg text-primary-dark mt-1">
                {item.hintText}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal for Reading the Card on the Bouquet */}
      {selectedBouquet && (
        <div 
          className="fixed inset-0 z-50 bg-typography-dark/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 transition-all duration-300"
          onClick={() => setSelectedBouquet(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedBouquet.label}
        >
          <div 
            className="relative bg-white rounded-3xl p-3 sm:p-5 max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-modal border border-primary/30 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setSelectedBouquet(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 bg-bg-lavender text-typography-dark hover:bg-primary-light rounded-full transition-colors cursor-pointer z-10"
              aria-label="Tutup tampilan buket"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-3">
              <span className={`inline-block px-3.5 py-1 rounded-full text-xs sm:text-sm font-serif font-medium border ${selectedBouquet.pillBg}`}>
                {selectedBouquet.label}
              </span>
            </div>

            {/* High-res Image View */}
            <div className="w-full rounded-2xl overflow-hidden bg-bg-warm mb-3 max-h-[70vh] flex items-center justify-center">
              <img
                src={selectedBouquet.fallback}
                alt={selectedBouquet.alt}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>

            {/* Modal Caption */}
            <p className="text-xs sm:text-sm text-typography-muted text-center max-w-md">
              {selectedBouquet.description}
            </p>
            <p className="text-[11px] text-typography-light italic mt-1">
              *Teks dan kartu pada foto dipertahankan asli tanpa rekayasa.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};
