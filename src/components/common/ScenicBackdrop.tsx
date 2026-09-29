import React, { useState, useEffect, useRef } from 'react';
import { getAssetUrl } from '../../utils/assetHelper';
import { mediaPreloader } from '../../utils/mediaPreloader';

interface ScenicBackdropProps {
  active?: boolean;
  shouldPreload?: boolean;
}

export const ScenicBackdrop: React.FC<ScenicBackdropProps> = ({ active = true, shouldPreload = false }) => {
  // Robust detection for mobile / phone / portrait
  const [isMobilePortrait, setIsMobilePortrait] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const isPortraitMedia = window.matchMedia('(orientation: portrait)').matches;
    const isSmallWidth = window.innerWidth <= 820;
    const isTouchMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    return isPortraitMedia || isSmallWidth || isTouchMobile;
  });

  const videoRef = useRef<HTMLVideoElement | null>(null);

  const videoSrc = isMobilePortrait
    ? getAssetUrl('inside/inside_vertical.mp4')
    : getAssetUrl('inside/inside_horizontal.mp4');

  const posterWebp = isMobilePortrait
    ? getAssetUrl('inside/inside_vertical_poster.webp')
    : getAssetUrl('inside/inside_horizontal_poster.webp');

  const posterJpg = isMobilePortrait
    ? getAssetUrl('inside/inside_vertical_poster.jpg')
    : getAssetUrl('inside/inside_horizontal_poster.jpg');

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

  // When shouldPreload or active becomes true, ensure video element loads and prepares
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;

    if (shouldPreload || active) {
      if (v.preload !== 'auto') {
        v.preload = 'auto';
      }
      if (v.readyState < 2) {
        v.load();
      }
    }
  }, [shouldPreload, active, videoSrc]);

  // When active becomes true (user enters inside invitation), smoothly play
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;

    if (active) {
      const playPromise = v.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {});
      }

      // Fallback: resume play on first user interaction if browser blocked autoplay
      const handleFirstInteraction = () => {
        if (v && v.paused) {
          const p = v.play();
          if (p !== undefined) p.catch(() => {});
        }
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
    } else {
      // Pause if not active to save battery and GPU cycles
      if (!v.paused) {
        v.pause();
      }
    }
  }, [active, videoSrc]);

  const handleCanPlay = () => {
    mediaPreloader.markScene2VideoReady();
  };

  const isAllowedToLoad = shouldPreload || active;

  return (
    <div 
      aria-hidden="true" 
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden select-none bg-[#0c0214]"
    >
      {/* 0. Instant Poster Image with Picture WebP & fallback so screen NEVER shows black while video buffers */}
      <picture className="absolute inset-0 h-full w-full">
        <source srcSet={posterWebp} type="image/webp" />
        <img
          src={posterJpg}
          alt=""
          className="h-full w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      </picture>

      {/* 1. Video only loads data when shouldPreload or active is true */}
      {isAllowedToLoad && (
        <video
          ref={videoRef}
          key={videoSrc}
          src={videoSrc}
          poster={posterJpg}
          loop
          muted
          playsInline
          webkit-playsinline="true"
          preload="auto"
          onCanPlay={handleCanPlay}
          onLoadedData={handleCanPlay}
          className={`absolute inset-0 h-full w-full object-cover z-10 transition-opacity duration-700 ease-in-out ${
            active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}
    </div>
  );
};

