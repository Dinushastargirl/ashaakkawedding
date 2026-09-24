import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { PurpleFloralDivider } from './common/PurpleFloralDivider';
import { CrossOrnament } from './common/CrossOrnament';
import { ChevronDown, Clock, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative flex min-h-[100svh] scroll-mt-20 flex-col items-center justify-center overflow-hidden px-4 py-16 sm:py-24">
      {/* 
        Velvet Homecoming Style Letterbox Frame directly over the inside background video.
        Completely transparent center with double gold borders, corner L-brackets, and diamond pins.
      */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative z-[2] mx-auto flex w-[min(94vw,640px)] flex-col items-center justify-center gap-4 sm:gap-5 px-6 sm:px-12 py-14 sm:py-18 text-center rounded-[4px] bg-transparent"
      >
        {/* Outer Gold Border with Inset Shadow */}
        <span 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0 border-2 border-[#B08A3F]/85 shadow-[inset_0_0_40px_-14px_rgba(176,138,63,0.4)]" 
        />
        
        {/* Inner Gold Border */}
        <span 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-2 sm:inset-3 border border-[#B08A3F]/55" 
        />

        {/* 4 Corner Gold Filigree Brackets */}
        <span aria-hidden="true" className="pointer-events-none">
          <span className="absolute top-[7px] left-[7px] w-[30px] h-[30px] border-t border-l border-[#B08A3F] rounded-tl-[3px]" />
          <span className="absolute top-[7px] right-[7px] w-[30px] h-[30px] border-t border-r border-[#B08A3F] rounded-tr-[3px]" />
          <span className="absolute bottom-[7px] left-[7px] w-[30px] h-[30px] border-b border-l border-[#B08A3F] rounded-bl-[3px]" />
          <span className="absolute bottom-[7px] right-[7px] w-[30px] h-[30px] border-b border-r border-[#B08A3F] rounded-br-[3px]" />
        </span>

        {/* Diamond Pins at Top & Bottom Center */}
        <span 
          aria-hidden="true" 
          className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#B08A3F] shadow-[0_0_8px_rgba(176,138,63,0.6)]" 
        />
        <span 
          aria-hidden="true" 
          className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rotate-45 bg-[#B08A3F] shadow-[0_0_8px_rgba(176,138,63,0.6)]" 
        />

        {/* Faith Cross Finial */}
        <div className="flex justify-center -mb-1">
          <CrossOrnament size={34} />
        </div>

        {/* Pre-title */}
        <p className="font-sans text-[0.66rem] uppercase tracking-[0.42em] font-bold text-[#8C6D2A]">
          The Holy Matrimony &amp; Reception of
        </p>

        {/* Gold Filigree Divider 1 */}
        <PurpleFloralDivider width="w-[140px] sm:w-[180px]" />

        {/* Couple Names: Joshua & Asha with Foil Sheen */}
        <h1 className="flex flex-col items-center font-couple italic font-semibold text-[clamp(2.8rem,10vw,4.8rem)] leading-[1.12] tracking-[0.04em]">
          <span className="text-purple-foil">{weddingConfig.couple.groom}</span>
          <span className="my-1 font-script not-italic text-[0.7em] text-[#521782] leading-none select-none">
            &amp;
          </span>
          <span className="text-purple-foil">{weddingConfig.couple.bride}</span>
        </h1>

        {/* Gold Filigree Divider 2 */}
        <PurpleFloralDivider width="w-[140px] sm:w-[180px]" />

        {/* Subtitle */}
        <p className="max-w-[36ch] font-body italic text-[0.98rem] sm:text-[1.05rem] leading-relaxed text-[#5C3B5E]">
          A Sacred Celebration of Love, Faith, and Covenant Under God
        </p>

        {/* Date: October 17, 2026 */}
        <div className="mt-1 flex flex-col items-center">
          <p className="font-serif italic font-medium text-[clamp(1.5rem,5.5vw,2.2rem)] leading-[1.3] text-purple-foil tracking-wide">
            October 17, 2026
          </p>
        </div>

        {/* Wedding & Reception Times */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 py-2 px-6">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[#8C6D2A]" />
            <span className="font-sans text-xs uppercase tracking-[0.24em] font-bold text-[#350854]">
              Wedding: <span className="text-[#521782]">5:30 PM</span>
            </span>
          </div>

          <span className="hidden sm:inline text-[#B08A3F]">•</span>

          <div className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#8C6D2A]" />
            <span className="font-sans text-xs uppercase tracking-[0.24em] font-bold text-[#350854]">
              Followed by Reception: <span className="text-[#521782]">7:30 PM</span>
            </span>
          </div>
        </div>

        {/* Venue placeholder */}
        <p className="mt-1 font-sans text-[0.72rem] uppercase tracking-[0.24em] font-semibold text-[#8C6D2A]">
          Venue details coming soon
        </p>

        {/* Scroll indicator */}
        <a
          href="#story"
          className="mt-4 inline-flex flex-col items-center text-[#8C6D2A] hover:text-[#521782] transition-colors group cursor-pointer"
        >
          <span className="font-sans text-[0.62rem] tracking-[0.3em] uppercase mb-1">
            Scroll To Read Our Story
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce text-[#B08A3F]" />
        </a>
      </motion.div>
    </section>
  );
};
