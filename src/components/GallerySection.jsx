import React, { useState, useEffect, useCallback } from 'react';
import { siteConfig } from '../config/content';
import rawGalleryData from '../config/gallery-data.json';
const galleryData = rawGalleryData.map(item => ({
  ...item,
  src: import.meta.env.BASE_URL + item.src.replace(/^\//, ''),
  thumb: import.meta.env.BASE_URL + item.thumb.replace(/^\//, ''),
}));
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

export const GallerySection = () => {
  const { gallery } = siteConfig;
  const [activeCategory, setActiveCategory] = useState("Semua Momen");
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(null);

  // Filter photos
  const filteredPhotos = activeCategory === "Semua Momen" 
    ? galleryData 
    : galleryData.filter(item => item.category === activeCategory);

  // Lightbox navigation
  const openLightbox = (index) => {
    setSelectedPhotoIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setSelectedPhotoIndex(null);
    document.body.style.overflow = 'unset';
  }, []);

  const nextPhoto = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev + 1) % filteredPhotos.length);
  }, [selectedPhotoIndex, filteredPhotos.length]);

  const prevPhoto = useCallback(() => {
    if (selectedPhotoIndex === null) return;
    setSelectedPhotoIndex((prev) => (prev - 1 + filteredPhotos.length) % filteredPhotos.length);
  }, [selectedPhotoIndex, filteredPhotos.length]);

  // Keyboard navigation listener
  useEffect(() => {
    if (selectedPhotoIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextPhoto();
      if (e.key === 'ArrowLeft') prevPhoto();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, closeLightbox, nextPhoto, prevPhoto]);

  const currentPhoto = selectedPhotoIndex !== null ? filteredPhotos[selectedPhotoIndex] : null;

  return (
    <section 
      id="galeri"
      aria-label="Kenangan yang Kita Simpan"
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10"
    >
      <div className="text-center mb-10">
        <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-primary-dark/80 bg-primary-light/30 px-3.5 py-1 rounded-full border border-primary/20">
          {gallery.sectionTag}
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-typography-dark mt-3 mb-3">
          {gallery.title}
        </h2>
        <p className="text-sm sm:text-base text-typography-muted max-w-xl mx-auto leading-relaxed">
          {gallery.subtitle}
        </p>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-8">
          {gallery.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-primary text-white shadow-soft scale-105'
                  : 'bg-white/80 text-typography-muted border border-primary/20 hover:bg-primary-light/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Photobooth Album Grid (Masonry-like layout using columns) */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {filteredPhotos.map((photo, index) => {
          const isStrip = photo.type === 'strip';
          return (
            <div
              key={photo.id}
              data-gallery-item="true"
              onClick={() => openLightbox(index)}
              className="break-inside-avoid group bg-white/95 p-3.5 sm:p-4 rounded-2xl shadow-photo border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Photo Container preserving native aspect ratio without face cropping */}
              <div 
                className="relative overflow-hidden rounded-xl bg-bg-lavender w-full"
                style={{ aspectRatio: `${photo.width} / ${photo.height}` }}
              >
                <img
                  src={photo.thumb}
                  alt={photo.caption}
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-102"
                />

                {/* Subtle Hover Overlay */}
                <div className="absolute inset-0 bg-typography-dark/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-2 bg-white/90 backdrop-blur-xs rounded-full shadow-md text-typography-dark">
                    <ZoomIn className="w-4 h-4 text-primary" />
                  </div>
                </div>

                {/* Photostrip badge */}
                {isStrip && (
                  <span className="absolute top-2 left-2 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold bg-primary-dark/80 text-white backdrop-blur-xs">
                    Photostrip
                  </span>
                )}
              </div>

              {/* Caption beneath */}
              <div className="pt-2.5 px-1 flex items-center justify-between text-xs">
                <span className="font-serif text-sm text-typography-dark font-medium truncate">
                  {photo.caption}
                </span>
                <span className="text-[10px] text-typography-light font-sans ml-2 shrink-0">
                  {photo.category}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      {selectedPhotoIndex !== null && currentPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-typography-dark/90 backdrop-blur-md flex items-center justify-center p-2 sm:p-6 select-none"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={currentPhoto.caption}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 sm:p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors cursor-pointer z-50"
            aria-label="Tutup foto"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/10 hover:bg-white/25 text-white rounded-full transition-all cursor-pointer z-50"
            aria-label="Foto sebelumnya"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 bg-white/10 hover:bg-white/25 text-white rounded-full transition-all cursor-pointer z-50"
            aria-label="Foto selanjutnya"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Lightbox Content Container */}
          <div 
            className="relative flex flex-col items-center max-w-4xl max-h-[92vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Box */}
            <div className="relative max-h-[80vh] w-auto flex items-center justify-center overflow-hidden rounded-2xl bg-black/40 p-2 shadow-2xl">
              <img
                src={currentPhoto.src}
                alt={currentPhoto.caption}
                className="max-h-[76vh] w-auto max-w-full object-contain rounded-xl"
              />
            </div>

            {/* Footer Caption & Indicator */}
            <div className="mt-4 text-center text-white px-4">
              <p className="font-serif text-lg sm:text-xl font-medium tracking-wide">
                {currentPhoto.caption}
              </p>
              <p className="text-xs text-white/70 mt-1">
                {selectedPhotoIndex + 1} dari {filteredPhotos.length} momen
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
