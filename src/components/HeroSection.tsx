import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { PurpleFloralArch } from './common/PurpleFloralArch';
import { PurpleFloralCorner } from './common/PurpleFloralCorner';
import { PurpleFloralDivider } from './common/PurpleFloralDivider';
import { CrossOrnament } from './common/CrossOrnament';
import { ChevronDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative flex min-h-[100svh] scroll-mt-20 flex-col items-center justify-center overflow-hidden px-4 py-16 sm:py-24">
      {/* Background scenic ambient radiance */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(75%_65%_at_50%_45%,rgba(251,245,234,0.7),rgba(251,245,234,0.95)_60%,transparent_100%)]" 
      />

      {/* 1. Regal Purple Floral Crown / Arch crowning the invitation */}
      <motion.div
        initial={{ opacity: 0, y: -25, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-[3] -mb-6 sm:-mb-10 w-full max-w-[540px] px-4"
      >
        <PurpleFloralArch />
      </motion.div>

      {/* 2. Main Velvet Homecoming Ornate Letterbox Frame with Purple Flower Corners */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.985 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative z-[2] mx-auto flex w-[min(94vw,660px)] flex-col items-center justify-center gap-4 sm:gap-5 px-6 sm:px-10 py-12 sm:py-16 text-center rounded-[12px] bg-gradient-to-b from-[#FFFDF9]/95 via-[#FAF6EE]/92 to-[#F6ECDC]/95 backdrop-blur-md shadow-[0_30px_70px_rgba(35,7,56,0.18),0_0_60px_rgba(157,78,221,0.2),0_0_30px_rgba(212,175,55,0.25)]"
      >
        {/* 4 Corners with Blooming Purple Rose & Lavender Bouquets */}
        <PurpleFloralCorner position="top-left" size={105} />
        <PurpleFloralCorner position="top-right" size={105} />
        <PurpleFloralCorner position="bottom-left" size={105} />
        <PurpleFloralCorner position="bottom-right" size={105} />

        {/* Outer Gold Border with Inset Shadow */}
        <span 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-0 border-2 border-[#B08A3F]/85 shadow-[inset_0_0_40px_-14px_rgba(176,138,63,0.4)] rounded-[12px]" 
        />
        
        {/* Inner Gold Border */}
        <span 
          aria-hidden="true" 
          className="pointer-events-none absolute inset-2 sm:inset-3 border border-[#B08A3F]/55 rounded-[8px]" 
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
          className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#B08A3F] shadow-[0_0_8px_rgba(176,138,63,0.5)]" 
        />
        <span 
          aria-hidden="true" 
          className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 translate-y-1/2 rotate-45 bg-[#B08A3F] shadow-[0_0_8px_rgba(176,138,63,0.5)]" 
        />

        {/* Cross Icon */}
        <div className="flex justify-center -mb-1">
          <CrossOrnament size={32} />
        </div>

        {/* Pre-title */}
        <p className="font-sans text-[0.66rem] uppercase tracking-[0.42em] font-bold text-[#8C6D2A]">
          The Holy Matrimony &amp; Reception of
        </p>

        {/* Purple Floral Divider 1 */}
        <PurpleFloralDivider width="w-[180px] sm:w-[220px]" />

        {/* Couple Names */}
        <h1 className="flex flex-col items-center font-serif italic font-medium text-[clamp(2.3rem,8.5vw,4.1rem)] leading-[1.14] text-purple-foil tracking-[0.04em]">
          <span>{weddingConfig.couple.groom}</span>
          <span className="my-0.5 font-script not-italic text-[0.72em] text-[#521782] leading-none select-none">
            &amp;
          </span>
          <span>{weddingConfig.couple.bride}</span>
        </h1>

        {/* Purple Floral Divider 2 */}
        <PurpleFloralDivider width="w-[180px] sm:w-[220px]" />

        {/* Subtitle */}
        <p className="max-w-[36ch] font-body italic text-[0.98rem] sm:text-[1.05rem] leading-relaxed text-[#7A4B7E]">
          A Sacred Celebration of Love, Faith, and Covenant Under God
        </p>

        {/* Authentic Couple Photograph */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative my-2 w-full max-w-[380px]"
        >
          <div className="relative overflow-hidden rounded-[20px] p-2 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] border border-[#B08A3F]/70 shadow-[0_15px_35px_-10px_rgba(35,7,56,0.25)]">
            {/* Inner corner brackets */}
            <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t border-[#B08A3F]" />
            <span className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r border-t border-[#B08A3F]" />
            <span className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b border-l border-[#B08A3F]" />
            <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b border-r border-[#B08A3F]" />

            <div className="relative overflow-hidden rounded-[16px] aspect-[4/4.8]">
              <img
                src={weddingConfig.photos.coupleHero}
                alt="Joshua & Asha"
                className="h-full w-full object-cover object-[center_28%] transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#230738]/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-0 right-0 text-center text-[#FAF7F2]">
                <p className="font-script text-2xl text-[#E5C578]">Joshua &amp; Asha</p>
                <p className="font-sans text-[0.6rem] uppercase tracking-[0.25em] text-[#FAF7F2]/90">Together in Christ</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Date with 17th superscript */}
        <p className="font-serif italic font-medium text-[clamp(1.3rem,5vw,1.9rem)] leading-[1.3] text-purple-foil">
          17<sup className="text-[0.62em]">th</sup> October 2026
        </p>

        {/* Time */}
        <p className="font-sans text-[0.7rem] uppercase tracking-[0.32em] font-bold text-[#521782]">
          5:30 PM &amp; 7:30 PM
        </p>

        {/* Location Placeholder */}
        <p className="font-sans text-[0.72rem] uppercase tracking-[0.22em] font-semibold text-[#8C6D2A]">
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
