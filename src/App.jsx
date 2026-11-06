import React from 'react';
import { PetalsBackground } from './components/PetalsBackground';
import { HeroSection } from './components/HeroSection';
import { VideoSection } from './components/VideoSection';
import { BouquetSection } from './components/BouquetSection';
import { GallerySection } from './components/GallerySection';
import { LetterSection } from './components/LetterSection';
import { FutureSection } from './components/FutureSection';
import { Footer } from './components/Footer';
import { LilyDivider } from './components/LilyDecorations';
import { BackgroundMusic } from './components/BackgroundMusic';

export default function App() {
  const handleOpenStory = () => {
    window.dispatchEvent(new Event('anniversary:play-music'));
    const videoSection = document.getElementById('video-momen');
    if (videoSection) {
      videoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-bg-warm text-typography-dark selection:bg-primary-light selection:text-typography-dark overflow-x-hidden">
      {/* Floating Petals Ambient Animation */}
      <PetalsBackground />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HeroSection onOpenStory={handleOpenStory} />
        <LilyDivider />
        <VideoSection />
        <LilyDivider />
        <BouquetSection />
        <LilyDivider />
        <GallerySection />
        <LilyDivider />
        <LetterSection />
        <LilyDivider />
        <FutureSection />
      </main>

      <Footer />
      <BackgroundMusic />
    </div>
  );
}
