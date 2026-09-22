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
    <footer className="relative py-24 px-4 sm:px-8 overflow-hidden bg-[#150323] text-[#FAF7F2] text-center">
      {/* Background with animated purple florals and candlelit vignette */}
      <div 
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30 mix-blend-screen scale-105 filter blur-sm"
        style={{ backgroundImage: `url('/flowers.jpg')` }}
      />
      {/* Radial overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,23,130,0.6)_0%,#150323_80%)]" />

      {/* Floating subtle embers */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="absolute h-1 w-1 rounded-full bg-[#fae69e] shadow-[0_0_8px_#fae69e] animate-pulse"
            style={{
              top: `${15 + (i * 11)}%`,
              left: `${10 + (i * 12)}%`,
              opacity: 0.3 + (i % 3) * 0.2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="rounded-[32px] border border-[#D4AF37]/40 bg-gradient-to-b from-[#2E0A4A]/80 via-[#230738]/90 to-[#150323] p-10 sm:p-16 shadow-[0_25px_80px_rgba(0,0,0,0.8),0_0_50px_rgba(212,175,55,0.15)]"
        >
          {/* Faith Cross Ornament */}
          <div className="mb-4 flex justify-center">
            <CrossOrnament size={36} />
          </div>

          <p className="font-sans text-[0.68rem] uppercase tracking-[0.45em] text-[#E5C578] font-semibold">
            Holy Union Before God
          </p>

          {/* Names */}
          <h2 className="mt-3 font-serif italic text-3xl sm:text-5xl text-gold-gradient leading-tight tracking-wider">
            {weddingConfig.couple.groom} &amp; {weddingConfig.couple.bride}
          </h2>

          <p className="mt-2 font-serif text-xl sm:text-2xl text-[#EFE6FB] tracking-widest font-light">
            {weddingConfig.date.shortDate}
          </p>

          <div className="my-6 flex justify-center">
            <GoldDivider width="w-44 sm:w-60" />
          </div>

          {/* Closing Bible Verse */}
          <blockquote className="font-serif italic text-xl sm:text-2xl text-[#FAF7F2] max-w-[28ch] mx-auto leading-relaxed">
            “What God has joined together, let no one separate.”
          </blockquote>

          <p className="mt-2 font-sans text-xs uppercase tracking-[0.3em] text-[#DFCBF7]/80 font-semibold">
            Matthew 19:6
          </p>

          <div className="mt-8 flex items-center justify-center gap-2 text-[#E5C578]">
            <Heart className="h-4 w-4 fill-[#E5C578]/40" />
            <span className="font-body italic text-base text-[#DFCBF7]">
              With joy, love, and gratitude from Joshua, Asha, and their families.
            </span>
          </div>

          {/* Back to top action */}
          <div className="mt-10">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/60 bg-white/5 px-5 py-2 font-sans text-[0.68rem] uppercase tracking-[0.25em] text-[#E5C578] hover:bg-white/10 hover:border-[#D4AF37] transition-all"
            >
              <ChevronUp className="h-3.5 w-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </motion.div>

        {/* Minimal Copyright */}
        <p className="mt-8 font-sans text-[0.62rem] uppercase tracking-widest text-[#8C6D2A]">
          Joshua &amp; Asha • Holy Matrimony Invitation • October 17
        </p>
      </div>
    </footer>
  );
};
