import React, { useRef, useState, useEffect } from 'react';
import { siteConfig } from '../config/content';
import { Play, Pause, Volume2, VolumeX, Maximize, RotateCcw } from 'lucide-react';

export const VideoSection = () => {
  const { momentVideo } = siteConfig;
  const videoRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState('0:00');
  const [duration, setDuration] = useState('0:00');
  const [showControls, setShowControls] = useState(true);

  // Format seconds to M:SS
  const formatTime = (seconds) => {
    if (isNaN(seconds) || seconds === 0) return '0:00';
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Autoplay blocked or interrupted:", err);
      });
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const cur = videoRef.current.currentTime;
    const dur = videoRef.current.duration;
    setCurrentTime(formatTime(cur));
    if (dur && !isNaN(dur)) {
      setProgress((cur / dur) * 100);
      setDuration(formatTime(dur));
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    setDuration(formatTime(videoRef.current.duration));
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
    setProgress(100);
  };

  const handleSeek = (e) => {
    if (!videoRef.current) return;
    const seekPercentage = parseFloat(e.target.value);
    const seekTime = (seekPercentage / 100) * videoRef.current.duration;
    videoRef.current.currentTime = seekTime;
    setProgress(seekPercentage);
  };

  const handleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    } else if (videoRef.current.webkitEnterFullscreen) {
      // iOS Safari specific
      videoRef.current.webkitEnterFullscreen();
    }
  };

  return (
    <section 
      id="video-momen" 
      aria-label="Sepotong Momen Kita"
      className="relative py-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto z-10"
    >
      <div className="text-center mb-10">
        <span className="text-xs sm:text-sm font-medium tracking-widest uppercase text-primary-dark/80 bg-primary-light/30 px-3.5 py-1 rounded-full border border-primary/20">
          {momentVideo.sectionTag}
        </span>
        <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-typography-dark mt-3 mb-3">
          {momentVideo.title}
        </h2>
        <p className="text-sm sm:text-base text-typography-muted max-w-xl mx-auto leading-relaxed">
          {momentVideo.subtitle}
        </p>
      </div>

      {/* Video Container with Lavender Frame */}
      <div className="relative max-w-2xl mx-auto">
        <div className="p-3 sm:p-5 bg-white/95 rounded-3xl shadow-photo border-2 border-primary/40 backdrop-blur-sm">
          <div 
            className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-bg-lavender group"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => isPlaying && setShowControls(false)}
          >
            <video
              ref={videoRef}
              src={momentVideo.video.mp4Src}
              poster={momentVideo.video.poster}
              preload="metadata"
              muted={isMuted}
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleVideoEnded}
              onClick={togglePlay}
              className="w-full h-full object-cover cursor-pointer"
            >
              Browsermu tidak mendukung pemutaran video langsung.
            </video>

            {/* Big Center Play Button when paused */}
            {!isPlaying && (
              <button
                onClick={togglePlay}
                aria-label="Putar video"
                className="absolute inset-0 m-auto w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/90 text-white flex items-center justify-center shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs"
              >
                <Play className="w-8 h-8 sm:w-10 sm:h-10 fill-white translate-x-0.5" />
              </button>
            )}

            {/* Accessible Overlay Control Bar */}
            <div 
              className={`absolute bottom-0 inset-x-0 bg-gradient-to-t from-typography-dark/85 via-typography-dark/50 to-transparent p-3 sm:p-4 transition-opacity duration-300 ${
                showControls || !isPlaying ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Scrub Progress Bar */}
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                aria-label="Durasi video"
                className="w-full h-1.5 bg-white/30 rounded-lg appearance-none cursor-pointer accent-primary mb-2 focus:outline-none"
              />

              <div className="flex items-center justify-between text-white text-xs sm:text-sm">
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    onClick={togglePlay}
                    aria-label={isPlaying ? "Jeda video" : "Putar video"}
                    className="p-1.5 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                  >
                    {isPlaying ? (
                      <Pause className="w-4 h-4 fill-white" />
                    ) : (
                      <Play className="w-4 h-4 fill-white" />
                    )}
                  </button>

                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? "Bunyikan audio" : "Bisukan audio"}
                    className="p-1.5 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 text-white" />
                    ) : (
                      <Volume2 className="w-4 h-4 text-white" />
                    )}
                  </button>

                  <span className="font-mono text-[11px] sm:text-xs text-white/90">
                    {currentTime} / {duration}
                  </span>
                </div>

                <div className="flex items-center gap-1 sm:gap-2">
                  <button
                    onClick={handleFullscreen}
                    aria-label="Layar penuh"
                    className="p-1.5 hover:bg-white/20 rounded-full transition-colors cursor-pointer"
                  >
                    <Maximize className="w-4 h-4 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Caption underneath */}
          <div className="pt-3 pb-1 text-center">
            <p className="font-handwriting text-lg sm:text-xl text-typography-muted">
              {momentVideo.caption}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
