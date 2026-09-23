import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { getAssetUrl } from '../utils/assetHelper';
import { audioManager } from '../utils/audioManager';
import { ButterfliesOverlay } from './common/ButterfliesOverlay';

interface CinematicVideoOpeningProps {
  onEnterInvitation: () => void;
}

export const CinematicVideoOpening: React.FC<CinematicVideoOpeningProps> = ({ onEnterInvitation }) => {
  // isStarted = false: Shows video paused at frame 0 with Joshua & Asha, Date & TAP TO ENTER directly on video (Image 2)
  // isStarted = true: Overlay fades out, song plays, video plays to completion
  const [isStarted, setIsStarted] = useState(false);

  // Responsive media switching: mobile/portrait -> vertical; desktop/landscape -> horizontal
  const [isMobilePortrait, setIsMobilePortrait] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const isPortraitMedia = window.matchMedia('(orientation: portrait)').matches;
    const isSmallWidth = window.innerWidth <= 820;
    const isTouchMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    return isPortraitMedia || isSmallWidth || isTouchMobile;
  });

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      const isPortraitMedia = window.matchMedia('(orientation: portrait)').matches;
      const isSmallWidth = window.innerWidth <= 820;
      const isTouchMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
      setIsMobilePortrait(isPortraitMedia || isSmallWidth || isTouchMobile);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  const videoSrc = isMobilePortrait
    ? getAssetUrl('intro/intro_vertical.mp4')
    : getAssetUrl('intro/intro_horizontal.mp4');

  // Preload and seek to first frame so the video image is visible immediately as the background
  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = true;
      v.defaultMuted = true;
      v.playsInline = true;
      v.currentTime = 0.01;
    }
  }, [videoSrc]);

  // When TAP TO ENTER is clicked:
  const handleTapToEnter = () => {
    setIsStarted(true);

    // 1. Play real wedding song
    audioManager.start();

    // 2. Play intro video
    const v = videoRef.current;
    if (v) {
      v.currentTime = 0;
      v.muted = true; // Audio is handled by audioManager with the user's high quality mp3
      v.defaultMuted = true;
      v.playsInline = true;
      const p = v.play();
      if (p !== undefined) {
        p.catch(() => {});
      }
    }
  };

  // When video ends -> transition DIRECTLY into inside invitation with zero gap!
  const handleVideoEnded = () => {
    onEnterInvitation();
  };

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="fixed inset-0 z-50 overflow-hidden bg-black select-none pointer-events-auto"
    >
      {/* 1. Full-screen Intro Video as the actual background */}
      <video
        ref={videoRef}
        key={videoSrc}
        src={videoSrc}
        preload="auto"
        playsInline
        muted
        onEnded={handleVideoEnded}
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Subtle top & bottom gradient vignettes so text is clear without hiding the video */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/50" />

      {/* Floating natural butterflies */}
      <ButterfliesOverlay count={10} theme="intro" />

      {/* 2. Exact Image 2 Overlay: AN INVITATION at top, Joshua & Asha + Date + TAP TO ENTER at bottom */}
      <AnimatePresence>
        {!isStarted && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6 } }}
            className="absolute inset-0 z-30 flex flex-col justify-between items-center px-4 py-8 pointer-events-none"
          >
            {/* Top: AN INVITATION */}
            <div className="pt-4 text-center">
              <p className="font-sans text-[0.68rem] sm:text-[0.74rem] uppercase tracking-[0.45em] text-[#E5C578] font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                An Invitation
              </p>
            </div>

            {/* Bottom-Center: Joshua & Asha, 17th October 2026, TAP TO ENTER */}
            <div className="pb-8 sm:pb-12 text-center pointer-events-auto flex flex-col items-center">
              {/* Couple Names */}
              <h1 className="font-serif italic font-medium text-4xl sm:text-6xl text-[#FAF0D7] tracking-wide drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]">
                <span>{weddingConfig.couple.groom}</span>{' '}
                <span className="font-script text-[0.8em] text-[#E5C578] not-italic px-1 drop-shadow-md">
                  &amp;
                </span>{' '}
                <span>{weddingConfig.couple.bride}</span>
              </h1>

              {/* Date */}
              <p className="font-serif italic text-base sm:text-xl text-[#E5C578] tracking-widest mt-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)] font-medium">
                17<sup className="text-[0.6em]">th</sup> October 2026
              </p>

              {/* TAP TO ENTER button */}
              <div className="mt-5">
                <button
                  onClick={handleTapToEnter}
                  className="rounded-full px-8 py-2.5 sm:px-10 sm:py-3 bg-gradient-to-r from-[#B08A3F] via-[#D4B25E] to-[#B08A3F] text-[#230738] font-sans font-bold text-xs uppercase tracking-[0.25em] shadow-[0_6px_25px_rgba(0,0,0,0.7)] border border-[#FFF2BE] hover:scale-105 active:scale-95 transition-all duration-300 cursor-pointer"
                >
                  Tap To Enter
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
