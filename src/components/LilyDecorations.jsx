import React from 'react';

/**
 * LilyDivider
 * Garis pembatas halus dengan ilustrasi bunga lily mekar di bagian tengah.
 */
export const LilyDivider = ({ className = "" }) => (
  <div className={`flex items-center justify-center my-12 opacity-80 ${className}`}>
    <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-r from-transparent via-primary/50 to-primary" />
    <div className="mx-4 text-primary">
      <svg width="28" height="28" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Center stem & pistil */}
        <path d="M20 36V22" stroke="#8B6BAF" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M20 22C18 16 16 12 14 8" stroke="#8B6BAF" strokeWidth="1" strokeLinecap="round" />
        <path d="M20 22C22 16 24 12 26 8" stroke="#8B6BAF" strokeWidth="1" strokeLinecap="round" />
        <circle cx="14" cy="8" r="1.5" fill="#C8AFE3" />
        <circle cx="26" cy="8" r="1.5" fill="#C8AFE3" />
        <circle cx="20" cy="6" r="1.5" fill="#E9BFD2" />
        <path d="M20 22V6" stroke="#8B6BAF" strokeWidth="1" strokeLinecap="round" />
        {/* Lily Petals */}
        <path d="M20 25C15 22 9 15 11 9C13 4 18 12 20 20" stroke="#C8AFE3" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M20 25C25 22 31 15 29 9C27 4 22 12 20 20" stroke="#C8AFE3" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M20 25C18 18 17 9 20 4C23 9 22 18 20 25" stroke="#C8AFE3" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M20 26C13 25 7 28 6 31C8 33 14 29 20 26" stroke="#E9BFD2" strokeWidth="1.1" strokeLinecap="round" />
        <path d="M20 26C27 25 33 28 34 31C32 33 26 29 20 26" stroke="#E9BFD2" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    </div>
    <div className="h-[1px] w-16 sm:w-28 bg-gradient-to-l from-transparent via-primary/50 to-primary" />
  </div>
);

/**
 * LilyCorner
 * Hiasan sudut kertas surat / bingkai.
 */
export const LilyCorner = ({ className = "" }) => (
  <svg 
    width="54" 
    height="54" 
    viewBox="0 0 60 60" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    className={`opacity-60 ${className}`}
  >
    <path d="M5 5V35" stroke="#C8AFE3" strokeWidth="1" strokeLinecap="round" />
    <path d="M5 5H35" stroke="#C8AFE3" strokeWidth="1" strokeLinecap="round" />
    <circle cx="5" cy="5" r="2.5" fill="#8B6BAF" />
    {/* Delicate leaf flourish */}
    <path d="M8 8C14 14 20 24 22 35" stroke="#E9BFD2" strokeWidth="0.8" strokeLinecap="round" />
    <path d="M8 8C14 14 24 20 35 22" stroke="#E9BFD2" strokeWidth="0.8" strokeLinecap="round" />
    <path d="M12 12C18 18 22 20 26 18C28 16 26 12 18 12" stroke="#C8AFE3" strokeWidth="0.75" />
  </svg>
);

/**
 * SmallLilyIcon
 * Ikon kecil bunga lily untuk badge atau heading.
 */
export const SmallLilyIcon = ({ className = "w-4 h-4 text-primary" }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="1.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 22v-8" />
    <path d="M12 14c-2.5-3-5-4-8-3 1 3 3 5 8 5" />
    <path d="M12 14c2.5-3 5-4 8-3-1 3-3 5-8 5" />
    <path d="M12 14c-1-4-1-8 0-11 1 3 1 7 0 11" />
  </svg>
);
