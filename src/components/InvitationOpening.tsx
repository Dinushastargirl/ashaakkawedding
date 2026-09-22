import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { GoldDivider } from './common/GoldDivider';
import { CrossOrnament } from './common/CrossOrnament';
import { audioManager } from '../utils/audioManager';
import { Sparkles, MailOpen } from 'lucide-react';

interface InvitationOpeningProps {
  onOpen: () => void;
}

export const InvitationOpening: React.FC<InvitationOpeningProps> = ({ onOpen }) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenClick = () => {
    setIsOpening(true);
    // Start ambient music gently on user interaction
    audioManager.start();
    // Allow smooth animation to finish
    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-[#150323] px-4 py-8 select-none"
    >
      {/* Deep Royal Purple & Velvet Atmosphere Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-luminosity scale-105 filter blur-sm"
        style={{ backgroundImage: `url('/flowers.jpg')` }}
      />
      
      {/* Radial purple gradient spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(82,23,130,0.5)_0%,rgba(35,7,56,0.92)_55%,#12021e_100%)]" />

      {/* Floating ambient dust / gold shimmer particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.span
            key={i}
            initial={{ 
              opacity: 0.2, 
              y: '100vh', 
              x: `${(i * 8.5) + 3}%` 
            }}
            animate={{ 
              opacity: [0.1, 0.7, 0.1], 
              y: '-10vh' 
            }}
            transition={{
              duration: 12 + (i % 6) * 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.8,
            }}
            className="absolute h-1.5 w-1.5 rounded-full bg-[#fae69e] shadow-[0_0_8px_#fae69e]"
          />
        ))}
      </div>

      {/* Physical Luxury Invitation Card Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ 
          opacity: 1, 
          scale: isOpening ? 1.08 : 1, 
          y: 0,
          rotateX: isOpening ? 20 : 0
        }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="relative mx-auto w-full max-w-lg overflow-hidden rounded-[24px] border border-[#C5A059]/60 bg-[#FAF7F2] p-8 sm:p-12 text-center shadow-[0_25px_80px_rgba(0,0,0,0.7),0_0_50px_rgba(197,160,89,0.3)]"
      >
        {/* Double Gold Filigree Borders */}
        <div className="pointer-events-none absolute inset-2.5 rounded-[18px] border border-[#C5A059]/40" />
        <div className="pointer-events-none absolute inset-4 rounded-[14px] border border-[#C5A059]/20" />

        {/* Decorative Gold Corner Finials */}
        <span className="pointer-events-none absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-[#D4AF37]" />
        <span className="pointer-events-none absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-[#D4AF37]" />
        <span className="pointer-events-none absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-[#D4AF37]" />
        <span className="pointer-events-none absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-[#D4AF37]" />

        {/* Subtle Christian Cross Header */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-3 flex justify-center"
        >
          <CrossOrnament size={28} />
        </motion.div>

        {/* Monogram Seal & Pre-title */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-sans text-[0.68rem] uppercase tracking-[0.45em] text-[#8C6D2A] font-semibold"
        >
          The Holy Matrimony Of
        </motion.p>

        {/* Names: JOSHUA & ASHA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="my-3 flex flex-col items-center"
        >
          <h1 className="font-serif italic font-medium text-4xl sm:text-5xl tracking-wide text-purple-gradient leading-tight">
            {weddingConfig.couple.groom}
          </h1>
          <span className="font-script text-3xl sm:text-4xl text-[#C5A059] my-0.5 leading-none select-none">
            &amp;
          </span>
          <h1 className="font-serif italic font-medium text-4xl sm:text-5xl tracking-wide text-purple-gradient leading-tight">
            {weddingConfig.couple.bride}
          </h1>
        </motion.div>

        {/* Center Ornament Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="my-2 flex justify-center"
        >
          <GoldDivider width="w-44" />
        </motion.div>

        {/* Date Display */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-2 space-y-1"
        >
          <p className="font-serif text-xl sm:text-2xl text-[#3C1061] tracking-wider font-semibold">
            October 17, 2026
          </p>
          <p className="font-sans text-[0.72rem] tracking-[0.25em] uppercase text-[#6D23A6] font-semibold">
            Wedding Ceremony • 5:30 PM
          </p>
        </motion.div>

        {/* Warm Invitation Callout */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.95, duration: 0.8 }}
          className="mx-auto mt-4 max-w-[34ch] font-body italic text-[1.05rem] leading-relaxed text-[#5C4566]"
        >
          Together with their families, they joyfully invite you to celebrate their wedding and witness their sacred vows before God.
        </motion.p>

        {/* Interactive Open Invitation Action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-7"
        >
          <button
            onClick={handleOpenClick}
            disabled={isOpening}
            className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-[#230738] via-[#4E144A] to-[#230738] px-8 py-3.5 text-xs uppercase tracking-[0.28em] text-[#FAF7F2] font-semibold shadow-[0_10px_25px_rgba(35,7,56,0.4)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_15px_35px_rgba(197,160,89,0.5)] active:scale-[0.98] border border-[#D4AF37]/70"
          >
            {/* Shimmer overlay */}
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
            
            <MailOpen className="h-4 w-4 text-[#D4AF37] transition-transform duration-300 group-hover:scale-110" />
            <span>{isOpening ? 'Opening Invitation...' : 'Open Invitation'}</span>
            <Sparkles className="h-3.5 w-3.5 text-[#E5C578] animate-pulse" />
          </button>

          <p className="mt-2.5 font-sans text-[0.62rem] tracking-widest text-[#8C6D2A] uppercase">
            Tap to open with romantic music
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
