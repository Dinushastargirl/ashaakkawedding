import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { GoldDivider } from './common/GoldDivider';
import { CrossOrnament } from './common/CrossOrnament';

export const BibleVerseSection: React.FC = () => {
  return (
    <section id="verse" className="relative py-20 px-4 sm:px-8 overflow-hidden bg-[#230738] text-[#FAF7F2]">
      {/* Background with warm candlelight chapel & flowers subtle texture */}
      <div 
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-20 mix-blend-screen filter blur-[2px]"
        style={{ backgroundImage: `url('/ceremony_chapel.jpg')` }}
      />
      {/* Radial purple gradient vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,23,130,0.6)_0%,rgba(35,7,56,0.95)_70%,#150323_100%)]" />

      {/* Floating gold glitter specks */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="absolute top-10 left-1/4 h-1 w-1 rounded-full bg-[#fae69e] shadow-[0_0_6px_#fae69e] animate-pulse" />
        <span className="absolute bottom-12 right-1/4 h-1.5 w-1.5 rounded-full bg-[#fae69e] shadow-[0_0_8px_#fae69e] animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          className="relative rounded-[28px] border border-[#D4AF37]/50 bg-gradient-to-b from-[#2E0A4A]/80 to-[#1D052F]/90 p-8 sm:p-14 text-center backdrop-blur-md shadow-[0_20px_60px_-15px_rgba(0,0,0,0.6),0_0_40px_rgba(212,175,55,0.18)]"
        >
          {/* Ornate Gold Corners */}
          <span className="pointer-events-none absolute left-3 top-3 h-6 w-6 border-l-2 border-t-2 border-[#D4AF37]" />
          <span className="pointer-events-none absolute right-3 top-3 h-6 w-6 border-r-2 border-t-2 border-[#D4AF37]" />
          <span className="pointer-events-none absolute bottom-3 left-3 h-6 w-6 border-b-2 border-l-2 border-[#D4AF37]" />
          <span className="pointer-events-none absolute bottom-3 right-3 h-6 w-6 border-b-2 border-r-2 border-[#D4AF37]" />
          <span className="pointer-events-none absolute inset-2.5 rounded-[22px] border border-[#D4AF37]/20" />

          {/* Cross Icon with glow */}
          <div className="mb-4 flex justify-center">
            <CrossOrnament size={36} />
          </div>

          <p className="font-sans text-[0.68rem] uppercase tracking-[0.4em] text-[#E5C578] font-semibold">
            Holy Scripture
          </p>

          <h2 className="mt-3 font-serif italic text-2xl sm:text-4xl text-[#FAF7F2] font-normal leading-relaxed tracking-wide text-gold-gradient max-w-[28ch] mx-auto">
            {weddingConfig.scripture.verse}
          </h2>

          <div className="my-5 flex justify-center">
            <GoldDivider width="w-36 sm:w-48" />
          </div>

          <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.3em] text-[#DFCBF7] font-semibold">
            {weddingConfig.scripture.citation}
          </p>

          <p className="mx-auto mt-4 max-w-[42ch] font-body italic text-base sm:text-lg text-[#DFCBF7]/80 leading-relaxed">
            Centered upon faith, Christ is the foundation of our covenant, our joy, and our future together.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
