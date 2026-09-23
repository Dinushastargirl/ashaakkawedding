import React, { useState, useEffect, useRef } from 'react';

export const ScenicBackdrop: React.FC = () => {
  // Robust detection for mobile / phone / portrait
  const [isMobilePortrait, setIsMobilePortrait] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const isPortraitMedia = window.matchMedia('(orientation: portrait)').matches;
    const isSmallWidth = window.innerWidth <= 820;
    const isTouchMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    return isPortraitMedia || isSmallWidth || isTouchMobile;
  });

  const mobileVideoRef = useRef<HTMLVideoElement | null>(null);
  const desktopVideoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const checkOrientation = () => {
      const isPortraitMedia = window.matchMedia('(orientation: portrait)').matches;
      const isSmallWidth = window.innerWidth <= 820;
      const isTouchMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      setIsMobilePortrait(isPortraitMedia || isSmallWidth || isTouchMobile);
    };

    checkOrientation();
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);
    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  // Ensure videos play smoothly
  useEffect(() => {
    if (isMobilePortrait && mobileVideoRef.current) {
      mobileVideoRef.current.play().catch(() => {});
    } else if (!isMobilePortrait && desktopVideoRef.current) {
      desktopVideoRef.current.play().catch(() => {});
    }
  }, [isMobilePortrait]);

  return (
    <div 
      aria-hidden="true" 
      className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden select-none bg-[#F7F4EF]"
    >
      {/* 1. Mobile / Phone Portrait Inside Video: /inside/inside_vertical.mp4 */}
      <video
        ref={mobileVideoRef}
        src="/inside/inside_vertical.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
          isMobilePortrait ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        }`}
      />

      {/* 2. Desktop / Laptop Landscape Inside Video: /inside/inside_horizontal.mp4 */}
      <video
        ref={desktopVideoRef}
        src="/inside/inside_horizontal.mp4"
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
          !isMobilePortrait ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        }`}
      />
    </div>
  );
};
