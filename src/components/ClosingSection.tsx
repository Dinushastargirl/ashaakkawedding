import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { GoldDivider } from './common/GoldDivider';
import { CrossOrnament } from './common/CrossOrnament';
import { ChevronUp, Heart } from 'lucide-react';

export const ClosingSection: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative py-20 px-4 sm:px-8 overflow-hidden text-center">
      <div className="relative z-10 mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative rounded-[28px] px-8 sm:px-14 py-12 sm:py-16 velvet-card"
        >
          {/* 4 Corner Gold Brackets */}
          <span aria-hidden="true" className="pointer-events-none">
            <span className="absolute top-[13px] left-[13px] w-[18px] h-[18px] border-t border-l border-[#C3A45C] rounded-tl-[3px]" />
            <span className="absolute top-[13px] right-[13px] w-[18px] h-[18px] border-t border-r border-[#C3A45C] rounded-tr-[3px]" />
            <span className="absolute bottom-[13px] left-[13px] w-[18px] h-[18px] border-b border-l border-[#C3A45C] rounded-bl-[3px]" />
            <span className="absolute bottom-[13px] right-[13px] w-[18px] h-[18px] border-b border-r border-[#C3A45C] rounded-br-[3px]" />
          </span>

          {/* Faith Cross Ornament */}
          <div className="mb-4 flex justify-center">
            <CrossOrnament size={36} />
          </div>

          <p className="font-sans text-[0.66rem] uppercase tracking-[0.45em] text-[#8C6D2A] font-bold">
            United In Holy Covenant
          </p>

          {/* Names */}
          <h2 className="mt-3 font-serif italic text-3xl sm:text-5xl text-purple-foil leading-tight tracking-wider">
            {weddingConfig.couple.groom} <span className="font-script text-[0.8em] text-[#521782]">&amp;</span> {weddingConfig.couple.bride}
          </h2>

          <p className="mt-2 font-serif text-lg sm:text-xl text-[#4A154B] tracking-widest font-normal">
            {weddingConfig.date.shortDate}
          </p>

          <div className="my-6 flex justify-center">
            <GoldDivider width="w-44 sm:w-60" />
          </div>

          {/* Closing Scripture */}
          <blockquote className="font-serif italic text-xl sm:text-2xl text-[#230738] max-w-[28ch] mx-auto leading-relaxed">
            “What therefore God has joined together, let not man separate.”
          </blockquote>

          <p className="mt-2 font-sans text-xs uppercase tracking-[0.3em] text-[#8C6D2A] font-semibold">
            Matthew 19:6
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 text-[#521782]">
            <Heart className="h-4 w-4 fill-[#521782]/30 text-[#8C6D2A]" />
            <span className="font-body italic text-base text-[#4A154B]">
              With joy, love, and gratitude from Joshua, Asha, and their families.
            </span>
          </div>

          {/* Back to top action */}
          <div className="mt-10">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 rounded-full border border-[#B08A3F] bg-white/70 px-5 py-2 font-sans text-[0.68rem] uppercase tracking-[0.25em] text-[#230738] hover:bg-white hover:border-[#8C6D2A] transition-all cursor-pointer"
            >
              <ChevronUp className="h-3.5 w-3.5 text-[#8C6D2A]" />
              <span>Back to Top</span>
            </button>
          </div>
        </motion.div>

        {/* Minimal Copyright */}
        <p className="mt-8 font-sans text-[0.62rem] uppercase tracking-widest text-[#8C6D2A]/80">
          Joshua &amp; Asha • Holy Matrimony Invitation • 17th October 2026
        </p>
      </div>
    </footer>
  );
};
