import React, { useMemo } from 'react';

/**
 * PetalsBackground
 * Kelopak bunga lily & mawar lembut melayang perlahan di latar belakang.
 * Menggunakan pointer-events-none agar tidak menghalangi sentuhan/klik pengguna di HP maupun desktop.
 */
export const PetalsBackground = () => {
  // Generate random static positions so they don't re-render jitter
  const petals = useMemo(() => {
    const colors = [
      '#C8AFE3', // lavender
      '#E9BFD2', // soft pink
      '#A9D9EE', // soft blue
      '#F4EEFA', // light lavender
    ];

    return Array.from({ length: 18 }).map((_, i) => ({
      id: i,
      left: `${(i * 5.8 + Math.random() * 4) % 96}%`,
      animationDuration: `${12 + (i % 8) * 2.5}s`,
      animationDelay: `${(i * 1.3) % 10}s`,
      size: 14 + (i % 5) * 4,
      color: colors[i % colors.length],
      opacity: 0.35 + (i % 4) * 0.12,
      rotation: (i * 37) % 360,
    }));
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    >
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute top-[-40px]"
          style={{
            left: petal.left,
            animation: `fallDrift ${petal.animationDuration} linear infinite`,
            animationDelay: petal.animationDelay,
            opacity: petal.opacity,
            transform: `rotate(${petal.rotation}deg)`,
          }}
        >
          {/* Subtle curved petal SVG */}
          <svg
            width={petal.size}
            height={petal.size * 1.5}
            viewBox="0 0 24 36"
            fill={petal.color}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 0C18 9 24 18 20 28C16 38 8 38 4 28C0 18 6 9 12 0Z"
              opacity="0.8"
            />
            {/* Center petal vein */}
            <path
              d="M12 6C12 15 12 25 12 32"
              stroke="#FFFFFF"
              strokeWidth="0.75"
              strokeLinecap="round"
              opacity="0.5"
            />
          </svg>
        </div>
      ))}
    </div>
  );
};
