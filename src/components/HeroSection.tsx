import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { GoldDivider } from './common/GoldDivider';
import { CrossOrnament } from './common/CrossOrnament';
import { ChevronDown, Calendar, Clock } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4 pt-16 pb-14 sm:py-24">
      {/* Ambient background wash */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-radial-gradient from-[#EFE6FB]/40 via-[#FAF7F2] to-[#FAF7F2] opacity-80" 
      />

      {/* Floating subtle bokeh dots */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-8 h-64 w-64 rounded-full bg-[#D4BEE4]/25 blur-3xl" />
        <div className="absolute bottom-1/4 right-8 h-72 w-72 rounded-full bg-[#E5C578]/20 blur-3xl" />
      </div>

      {/* Main Luxury Frame */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative z-10 mx-auto flex w-[min(94vw,660px)] flex-col items-center text-center"
      >
        {/* Sacred Cross */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-3"
        >
          <CrossOrnament size={34} />
        </motion.div>

        {/* Names Header: Joshua & Asha */}
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 1 }}
          className="flex flex-col items-center font-serif italic text-[clamp(2.5rem,8.5vw,4.4rem)] leading-none text-purple-gradient"
        >
          <span>{weddingConfig.couple.groom}</span>
          <span className="my-1 font-script text-[0.72em] not-italic text-[#C5A059] leading-tight select-none">
            &amp;
          </span>
          <span>{weddingConfig.couple.bride}</span>
        </motion.h1>

        {/* Tagline: Christian Holy Matrimony & Reception */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-3 font-sans text-xs sm:text-sm uppercase tracking-[0.32em] text-[#521782] font-semibold"
        >
          {weddingConfig.couple.subheading}
        </motion.p>

        {/* Date: 17th October 2026 */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-1.5 font-serif text-lg sm:text-xl text-[#8C6D2A] tracking-widest font-normal"
        >
          {weddingConfig.date.shortDate}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="my-4 flex justify-center"
        >
          <GoldDivider width="w-48 sm:w-64" />
        </motion.div>

        {/* Cinematic Photograph Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative mt-2 w-full max-w-[440px] px-2 sm:px-0"
        >
          {/* Double Gold Filigree Framing */}
          <div className="relative overflow-hidden rounded-[26px] p-2 bg-gradient-to-b from-[#FAF7F2] via-[#F3EBE0] to-[#FAF7F2] border border-[#C5A059]/70 shadow-[0_20px_50px_-15px_rgba(35,7,56,0.35),0_0_30px_rgba(197,160,89,0.25)]">
            
            {/* Corner Filigree Markers */}
            <span className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-[#D4AF37] z-20" />
            <span className="pointer-events-none absolute right-3 top-3 h-6 w-6 border-r-2 border-t-2 border-[#D4AF37] z-20" />
            <span className="pointer-events-none absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-[#D4AF37] z-20" />
            <span className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-[#D4AF37] z-20" />

            {/* Inner image frame */}
            <div className="relative overflow-hidden rounded-[20px] aspect-[4/4.8] sm:aspect-[4/4.5] group">
              <img
                src={weddingConfig.photos.coupleHero}
                alt="Joshua & Asha"
                className="h-full w-full object-cover object-[center_28%] transition-transform duration-1000 ease-out group-hover:scale-105"
                loading="eager"
              />
              
              {/* Soft romantic purple & warm ivory vignette overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#230738]/60 via-transparent to-black/10" />
              <div className="pointer-events-none absolute inset-0 border border-white/20 rounded-[20px]" />

              {/* In-photo subtle name badge at bottom */}
              <div className="absolute bottom-4 left-0 right-0 text-center text-[#FAF7F2] drop-shadow-md">
                <p className="font-script text-2xl sm:text-3xl text-[#E5C578] tracking-wide">
                  Joshua &amp; Asha
                </p>
                <p className="font-sans text-[0.62rem] uppercase tracking-[0.3em] text-[#FAF7F2]/90">
                  Together Forever Under God
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Date & Time pill badges */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 font-serif"
        >
          <div className="flex items-center gap-2 rounded-full border border-[#C5A059]/50 bg-white/80 px-4 py-1.5 backdrop-blur-sm shadow-sm">
            <Calendar className="h-3.5 w-3.5 text-[#8C6D2A]" />
            <span className="text-sm sm:text-base font-semibold text-[#230738] tracking-wide">
              {weddingConfig.date.shortDate}
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-[#C5A059]/50 bg-white/80 px-4 py-1.5 backdrop-blur-sm shadow-sm">
            <Clock className="h-3.5 w-3.5 text-[#8C6D2A]" />
            <span className="text-sm sm:text-base font-semibold text-[#230738] tracking-wide">
              Ceremony 5:30 PM • Reception 7:30 PM
            </span>
          </div>
        </motion.div>

        {/* Scroll down prompt */}
        <motion.a
          href="#wedding-details"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-8 inline-flex flex-col items-center text-[#8C6D2A] hover:text-[#521782] transition-colors group cursor-pointer"
        >
          <span className="font-sans text-[0.65rem] tracking-[0.3em] uppercase mb-1">
            Scroll For Wedding Details
          </span>
          <ChevronDown className="h-4 w-4 animate-bounce text-[#B08A3F]" />
        </motion.a>
      </motion.div>
    </section>
  );
};
