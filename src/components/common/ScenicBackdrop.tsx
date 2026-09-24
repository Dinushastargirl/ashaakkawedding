import React, { useState, useEffect, useRef } from 'react';
import { getAssetUrl } from '../../utils/assetHelper';
import { mediaPreloader } from '../../utils/mediaPreloader';

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

  // Ensure video plays smoothly with mobile browser autoplay workarounds
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;

    const playCurrentVideo = () => {
      if (videoRef.current) {
        const p = videoRef.current.play();
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
  }, [videoSrc]);

  // When active becomes true (user enters inside invitation), ensure fresh start
  useEffect(() => {
    if (active && videoRef.current) {
      try {
        videoRef.current.currentTime = 0;
        const p = videoRef.current.play();
        if (p !== undefined) p.catch(() => {});
      } catch {
        // Ignore any abort error
      }
    }
  }, [active]);

  const handleCanPlay = () => {
    mediaPreloader.markScene2VideoReady();
  };

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
          loading="eager"
          decoding="async"
        />
      </picture>

      {/* 1. Only load the active orientation video (saves 2-4MB on mobile devices) */}
      <video
        ref={videoRef}
        key={videoSrc}
        src={videoSrc}
        poster={posterJpg}
        autoPlay
        loop
        muted
        playsInline
        webkit-playsinline="true"
        preload="auto"
        onCanPlay={handleCanPlay}
        onLoadedData={handleCanPlay}
        className="absolute inset-0 h-full w-full object-cover opacity-100 z-10 transition-opacity duration-700 ease-in-out"
      />
    </div>
  );
};

