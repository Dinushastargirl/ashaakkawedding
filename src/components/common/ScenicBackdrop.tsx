import React, { useState, useEffect, useRef } from 'react';
import { getAssetUrl } from '../../utils/assetHelper';

interface ScenicBackdropProps {
  active?: boolean;
}

export const ScenicBackdrop: React.FC<ScenicBackdropProps> = ({ active = true }) => {
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

  const mobileSrc = getAssetUrl('inside/inside_vertical.mp4');
  const desktopSrc = getAssetUrl('inside/inside_horizontal.mp4');
  const mobilePoster = getAssetUrl('inside/inside_vertical_poster.jpg');
  const desktopPoster = getAssetUrl('inside/inside_horizontal_poster.jpg');

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

  // Ensure videos play smoothly with mobile browser autoplay workarounds
  useEffect(() => {
    const playCurrentVideo = () => {
      const target = isMobilePortrait ? mobileVideoRef.current : desktopVideoRef.current;
      if (target) {
        target.muted = true;
        target.defaultMuted = true;
        target.playsInline = true;
        target.setAttribute('playsinline', '');
        target.setAttribute('webkit-playsinline', '');
        const p = target.play();
        if (p !== undefined) {
          p.catch(() => {});
        }
      }
    };

    playCurrentVideo();

    // Fallback: resume play on first user interaction if browser blocked autoplay
    const handleFirstInteraction = () => {
      playCurrentVideo();
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };

    window.addEventListener('touchstart', handleFirstInteraction, { passive: true });
    window.addEventListener('click', handleFirstInteraction, { passive: true });
    window.addEventListener('scroll', handleFirstInteraction, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleFirstInteraction);
      window.removeEventListener('click', handleFirstInteraction);
      window.removeEventListener('scroll', handleFirstInteraction);
    };
  }, [isMobilePortrait]);

  // When active becomes true (user enters inside invitation), ensure fresh start from 0.0s
  useEffect(() => {
    if (active) {
      const target = isMobilePortrait ? mobileVideoRef.current : desktopVideoRef.current;
      if (target) {
        try {
          target.currentTime = 0;
          const p = target.play();
          if (p !== undefined) p.catch(() => {});
        } catch {
          // Ignore any abort error
        }
      }
    }
  }, [active, isMobilePortrait]);

  return (
    <div 
      aria-hidden="true" 
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none"
    >
      {/* 0. Instant Poster Image so phone screen NEVER shows black while video buffers */}
      <img
        src={isMobilePortrait ? mobilePoster : desktopPoster}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        loading="eager"
      />

      {/* 1. Mobile / Phone Portrait Inside Video: inside_vertical.mp4 */}
      <video
        ref={mobileVideoRef}
        src={mobileSrc}
        poster={mobilePoster}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
          isMobilePortrait ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        }`}
      />

      {/* 2. Desktop / Laptop Landscape Inside Video: inside_horizontal.mp4 */}
      <video
        ref={desktopVideoRef}
        src={desktopSrc}
        poster={desktopPoster}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
          !isMobilePortrait ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
        }`}
      />
    </div>
  );
};
