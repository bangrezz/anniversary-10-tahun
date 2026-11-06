import React from 'react';
import { SmallLilyIcon } from './LilyDecorations';
import { siteConfig } from '../config/content';

export const Footer = () => {
  const { meta } = siteConfig;

  return (
    <footer className="relative py-12 px-4 border-t border-primary/20 text-center z-10">
      <div className="flex flex-col items-center justify-center gap-2 max-w-md mx-auto">
        <SmallLilyIcon className="w-5 h-5 text-primary opacity-70" />
        <p className="font-serif italic text-base sm:text-lg text-typography-muted">
          {meta.coupleTitle ? `${meta.coupleTitle} — Sepuluh Tahun, Tetap Mekar.` : "Sepuluh Tahun, Tetap Mekar."}
        </p>
        <p className="text-xs text-typography-light">
          Dirajut dengan penuh cinta untuk merayakan setiap detik kebersamaan kita.
        </p>
      </div>
    </footer>
  );
};

