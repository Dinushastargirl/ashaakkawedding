import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { getAssetUrl } from '../utils/assetHelper';
import { audioManager } from '../utils/audioManager';
import { CrossOrnament } from './common/CrossOrnament';
import { GoldDivider } from './common/GoldDivider';
import { ButterfliesOverlay } from './common/ButterfliesOverlay';
import { Sparkles } from 'lucide-react';

interface CinematicVideoOpeningProps {
  onEnterInvitation: () => void;
}

export const CinematicVideoOpening: React.FC<CinematicVideoOpeningProps> = ({ onEnterInvitation }) => {
  // State: 'cover' (initial Tap To Enter screen) -> 'playing' (intro video with music) -> calls onEnterInvitation
  const [stage, setStage] = useState<'cover' | 'playing'>('cover');
  const [videoEnded, setVideoEnded] = useState(false);

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

  // When user clicks "Tap To Enter": start song and play intro video
  const handleStartIntro = () => {
    // 1. Start real wedding song (intro audio.mp3)
    audioManager.start();

    // 2. Switch stage to playing video
    setStage('playing');

    // 3. Play intro video immediately
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.muted = true; // Video itself is muted so the high-quality intro audio.mp3 plays clearly without interference
      videoRef.current.defaultMuted = true;
      videoRef.current.playsInline = true;
      videoRef.current.play().catch(() => {});
    }
  };

  // When the intro video ends -> Transition directly to inside wedding invitation!
  const handleVideoEnded = () => {
    setVideoEnded(true);
    // Smooth cinematic dissolve directly into invitation
    setTimeout(() => {
      onEnterInvitation();
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#150323] select-none">
      {/* 1. Background Intro Video (Preloading in background, plays once entered) */}
      <div className="relative h-full w-full overflow-hidden">
        <video
          ref={videoRef}
          src={videoSrc}
          preload="auto"
          playsInline
          muted
          onEnded={handleVideoEnded}
          className={`h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            stage === 'playing' && !videoEnded ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
          }`}
        />

        {/* Soft Vignette Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#150323]/50 via-transparent to-[#150323]/40" />

        {/* Deep Royal Purple Dissolve Layer at video end */}
        <div 
          className={`pointer-events-none absolute inset-0 bg-[#150323] transition-opacity duration-700 ease-in-out ${
            videoEnded ? 'opacity-100' : 'opacity-0'
          }`} 
        />
      </div>

      {/* Floating Natural Butterflies during intro */}
      <ButterfliesOverlay count={4} theme="intro" />

      {/* 2. Initial Luxury Screen: Names, Date, and "TAP TO ENTER" button */}
      <AnimatePresence>
        {stage === 'cover' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 z-40 flex items-center justify-center px-4 py-8 bg-[#150323]"
          >
            {/* Subtle radial ambient warmth */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,23,130,0.55)_0%,rgba(35,7,56,0.95)_70%,#150323_100%)] pointer-events-none" />

            {/* Centered Luxury Velvet Invitation Cover Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="relative mx-auto w-full max-w-md overflow-hidden rounded-[24px] border border-[#D4AF37]/70 bg-gradient-to-b from-[#2E0A4A]/95 via-[#230738]/95 to-[#170428] p-8 sm:p-12 text-center shadow-[0_25px_80px_rgba(0,0,0,0.85),0_0_50px_rgba(212,175,55,0.25)]"
            >
              {/* Double Gold Inset Borders */}
              <div className="pointer-events-none absolute inset-2.5 rounded-[18px] border border-[#D4AF37]/40" />
              
              {/* Ornate Gold Corners */}
              <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-[#D4AF37]" />
              <span className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-[#D4AF37]" />
              <span className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-[#D4AF37]" />
              <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-[#D4AF37]" />

              {/* Faith Cross Finial */}
              <div className="mb-4 flex justify-center">
                <CrossOrnament size={34} />
              </div>

              {/* AN INVITATION */}
              <p className="font-sans text-[0.72rem] sm:text-[0.78rem] uppercase tracking-[0.45em] text-[#E5C578] font-semibold">
                An Invitation
              </p>

              {/* Names: Joshua & Asha */}
              <h2 className="mt-3 font-serif italic text-4xl sm:text-5xl tracking-wide text-gold-gradient leading-tight">
                {weddingConfig.couple.groom} &amp; {weddingConfig.couple.bride}
              </h2>

              <div className="my-4 flex justify-center">
                <GoldDivider width="w-36 sm:w-48" />
              </div>

              {/* Date: October 17, 2026 */}
              <p className="font-serif text-lg sm:text-xl text-[#FAF7F2] tracking-widest font-normal">
                {weddingConfig.date.shortDate}
              </p>

              <p className="mx-auto mt-4 max-w-[30ch] font-body italic text-sm sm:text-base text-[#DFCBF7]/90 leading-relaxed">
                Together with their families, joyfully invite you to celebrate their holy matrimony under God.
              </p>

              {/* TAP TO ENTER button: Starts music & plays intro video */}
              <div className="mt-8">
                <button
                  onClick={handleStartIntro}
                  className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full border border-[#D4AF37] bg-gradient-to-r from-[#230738] via-[#4E144A] to-[#230738] px-9 py-4 font-sans text-xs uppercase tracking-[0.28em] text-[#FAF7F2] font-semibold shadow-[0_10px_30px_rgba(0,0,0,0.6)] transition-all duration-300 hover:scale-[1.03] hover:border-[#E5C578] hover:shadow-[0_15px_35px_rgba(212,175,55,0.4)] active:scale-[0.98] cursor-pointer"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                  
                  <Sparkles className="h-3.5 w-3.5 text-[#E5C578] animate-pulse" />
                  <span>Tap To Enter</span>
                  <Sparkles className="h-3.5 w-3.5 text-[#E5C578] animate-pulse" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
