import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { CrossOrnament } from './common/CrossOrnament';
import { GoldDivider } from './common/GoldDivider';
import { ButterfliesOverlay } from './common/ButterfliesOverlay';
import { Volume2, Sparkles, Music } from 'lucide-react';

interface CinematicVideoOpeningProps {
  onEnterInvitation: () => void;
}

export const CinematicVideoOpening: React.FC<CinematicVideoOpeningProps> = ({ onEnterInvitation }) => {
  const [isMuted, setIsMuted] = useState(true);
  const [isEnded, setIsEnded] = useState(false);
  const [showCover, setShowCover] = useState(false);
  
  // Responsive media switching: mobile/portrait -> vertical; desktop/landscape -> horizontal
  const [isPortrait, setIsPortrait] = useState<boolean>(() => {
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
      setIsPortrait(isPortraitMedia || isSmallWidth || isTouchMobile);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  const videoSrc = isPortrait ? '/intro/intro_vertical.mp4' : '/intro/intro_horizontal.mp4';

  // Ensure autoplay on mount and source switch
  useEffect(() => {
    const v = videoRef.current;
    if (v) {
      v.muted = isMuted;
      v.play().catch(() => {});
    }
  }, [videoSrc]);

  // Sound toggle
  const toggleSound = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const v = videoRef.current;
    if (v) {
      const newMuted = !isMuted;
      v.muted = newMuted;
      setIsMuted(newMuted);
      if (v.paused) {
        v.play().catch(() => {});
      }
    }
  };

  // Video finished -> Slow cinematic fade to deep purple and reveal cover
  const handleVideoEnded = () => {
    setIsEnded(true);
    setTimeout(() => {
      setShowCover(true);
    }, 1000);
  };

  // Skip directly to invitation cover
  const handleSkip = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) videoRef.current.pause();
    setIsEnded(true);
    setShowCover(true);
  };

  return (
    <div 
      onClick={() => isMuted && toggleSound()}
      className="fixed inset-0 z-50 overflow-hidden bg-[#150323] select-none cursor-pointer"
    >
      {/* Ethereal Floating Butterflies from supplied assets */}
      <ButterfliesOverlay count={3} theme="intro" />

      {/* 1. Full Screen Responsive Intro Video (Switching automatically) */}
      <div className="relative h-full w-full overflow-hidden">
        <video
          key={videoSrc}
          ref={videoRef}
          src={videoSrc}
          preload="auto"
          playsInline
          autoPlay
          muted={isMuted}
          onEnded={handleVideoEnded}
          className={`h-full w-full object-cover transition-opacity duration-1000 ease-in-out ${
            isEnded ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
          }`}
        />

        {/* Soft Vignette Overlay */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#150323]/60 via-transparent to-[#150323]/50" />

        {/* Deep Royal Purple Fade Layer */}
        <div 
          className={`pointer-events-none absolute inset-0 bg-[#150323] transition-opacity duration-1000 ease-in-out ${
            isEnded ? 'opacity-100' : 'opacity-0'
          }`} 
        />
      </div>

      {/* 2. Audio Control & Tap for Sound Banner (while video is playing) */}
      {!isEnded && (
        <div className="absolute top-4 sm:top-6 left-0 right-0 z-30 flex items-center justify-between px-5 sm:px-8">
          {/* Couple brand tag */}
          <div className="flex items-center gap-2 text-[#E5C578]/95 font-serif italic text-sm sm:text-base font-medium drop-shadow-md">
            <span>{weddingConfig.couple.groom} &amp; {weddingConfig.couple.bride}</span>
          </div>

          <div className="flex items-center gap-3">
            {/* Audio Toggle Button */}
            <button
              onClick={toggleSound}
              className={`group flex items-center gap-2.5 rounded-full border px-4 py-2 text-xs font-sans uppercase tracking-[0.2em] backdrop-blur-md shadow-xl transition-all active:scale-95 cursor-pointer ${
                isMuted
                  ? 'border-[#D4AF37] bg-[#230738]/90 text-[#E5C578] shadow-[0_0_20px_rgba(212,175,55,0.4)] animate-pulse'
                  : 'border-[#C5A059]/50 bg-[#150323]/80 text-[#FAF7F2] hover:bg-[#230738]'
              }`}
              aria-label={isMuted ? "Turn Sound On" : "Turn Sound Off"}
            >
              {isMuted ? (
                <>
                  <Music className="h-4 w-4 text-[#E5C578] animate-bounce" />
                  <span className="font-semibold text-xs text-[#E5C578]">
                    Tap For Song 🔊
                  </span>
                </>
              ) : (
                <>
                  <Volume2 className="h-4 w-4 text-[#E5C578] animate-pulse" />
                  <span className="font-semibold text-xs text-[#FAF7F2]">
                    Sound On
                  </span>
                  <span className="flex items-end gap-0.5 h-3">
                    <span className="w-0.5 h-2 bg-[#E5C578] animate-pulse" />
                    <span className="w-0.5 h-3 bg-[#E5C578] animate-pulse delay-75" />
                    <span className="w-0.5 h-1.5 bg-[#E5C578] animate-pulse delay-150" />
                  </span>
                </>
              )}
            </button>

            {/* Skip Option */}
            <button
              onClick={handleSkip}
              className="font-sans text-[0.62rem] uppercase tracking-[0.25em] text-[#DFCBF7]/80 hover:text-[#FAF7F2] transition-colors py-1 px-2.5 cursor-pointer"
            >
              Skip
            </button>
          </div>
        </div>
      )}

      {/* Floating prompt for mobile to unmute */}
      {!isEnded && isMuted && (
        <div className="pointer-events-none absolute bottom-8 left-0 right-0 z-30 flex justify-center px-4">
          <div className="rounded-full bg-[#150323]/85 border border-[#D4AF37]/60 px-5 py-2 backdrop-blur-md text-center shadow-lg">
            <p className="font-sans text-[0.68rem] uppercase tracking-[0.25em] text-[#E5C578] font-semibold flex items-center gap-2">
              <Sparkles className="h-3.5 w-3.5" />
              <span>Tap screen to play wedding song</span>
              <Sparkles className="h-3.5 w-3.5" />
            </p>
          </div>
        </div>
      )}

      {/* 3. Luxury Invitation Cover & "TAP TO ENTER" */}
      <AnimatePresence>
        {showCover && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="absolute inset-0 z-40 flex items-center justify-center px-4 py-8 bg-[#150323]"
          >
            {/* Soft floral background texture */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen scale-105 filter blur-sm pointer-events-none"
              style={{ backgroundImage: `url('/flowers.jpg')` }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,23,130,0.6)_0%,rgba(35,7,56,0.96)_70%,#150323_100%)] pointer-events-none" />

            {/* Centered Luxury Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.15 }}
              className="relative mx-auto w-full max-w-md overflow-hidden rounded-[28px] border border-[#D4AF37]/60 bg-gradient-to-b from-[#2E0A4A]/95 via-[#230738]/95 to-[#170428] p-8 sm:p-12 text-center shadow-[0_25px_80px_rgba(0,0,0,0.85),0_0_50px_rgba(212,175,55,0.2)]"
            >
              {/* Double Gold Inset Borders */}
              <div className="pointer-events-none absolute inset-2.5 rounded-[22px] border border-[#D4AF37]/35" />
              
              {/* Ornate Gold Corners */}
              <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-[#D4AF37]" />
              <span className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-[#D4AF37]" />
              <span className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-[#D4AF37]" />
              <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-[#D4AF37]" />

              {/* Faith Finial */}
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

              {/* Date: 17th October 2026 */}
              <p className="font-serif text-lg sm:text-xl text-[#FAF7F2] tracking-widest font-normal">
                {weddingConfig.date.shortDate}
              </p>

              <p className="mx-auto mt-4 max-w-[30ch] font-body italic text-sm sm:text-base text-[#DFCBF7]/90 leading-relaxed">
                Together with their families, joyfully invite you to celebrate their holy matrimony under God.
              </p>

              {/* Refined Button: TAP TO ENTER */}
              <div className="mt-8">
                <button
                  onClick={onEnterInvitation}
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
