import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeader } from './common/SectionHeader';
import { PurpleFloralCorner } from './common/PurpleFloralCorner';
import { Camera, Sparkles, Heart } from 'lucide-react';

export const PhotoExperienceSection: React.FC = () => {
  return (
    <section id="gallery" className="relative mx-auto max-w-4xl scroll-mt-20 px-5 py-14 sm:px-8 sm:py-20">
      {/* Section Header */}
      <SectionHeader
        preTitle="Reels From Our Story"
        title="Captured Moments"
        subtitle="Cherished memories of our journey together"
        dividerWidth="w-[230px]"
      />

      {/* Elegant Empty Gallery Velvet Card Placeholder */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative mx-auto max-w-2xl rounded-[28px] px-8 py-14 sm:px-14 sm:py-18 text-center velvet-card border border-[#B08A3F]/70 shadow-[0_20px_50px_rgba(35,7,56,0.15)]"
      >
        {/* Purple Floral Corners */}
        <PurpleFloralCorner position="top-left" size={85} />
        <PurpleFloralCorner position="top-right" size={85} />
        <PurpleFloralCorner position="bottom-left" size={85} />
        <PurpleFloralCorner position="bottom-right" size={85} />

        {/* 4 Corner Brackets */}
        <span aria-hidden="true" className="pointer-events-none">
          <span className="absolute top-[13px] left-[13px] w-[18px] h-[18px] border-t border-l border-[#C3A45C] rounded-tl-[3px]" />
          <span className="absolute top-[13px] right-[13px] w-[18px] h-[18px] border-t border-r border-[#C3A45C] rounded-tr-[3px]" />
          <span className="absolute bottom-[13px] left-[13px] w-[18px] h-[18px] border-b border-l border-[#C3A45C] rounded-bl-[3px]" />
          <span className="absolute bottom-[13px] right-[13px] w-[18px] h-[18px] border-b border-r border-[#C3A45C] rounded-br-[3px]" />
        </span>

        {/* Medallion Icon */}
        <div 
          className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full shadow-lg"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #521782, #230738)',
            border: '1px solid rgba(176, 138, 63, 0.75)',
            boxShadow: '0 0 0 4px rgba(251, 245, 234, 0.9), 0 0 0 5px rgba(176, 138, 63, 0.4)',
          }}
        >
          <Camera className="h-7 w-7 text-[#D4AF37]" />
        </div>

        <h3 className="font-serif italic font-medium text-2xl sm:text-3xl text-purple-foil tracking-[0.02em]">
          Moments to Cherish
        </h3>

        <p className="mx-auto mt-3 max-w-[42ch] font-body text-base sm:text-lg text-[#5C4566] leading-relaxed">
          Our wedding photography and celebration gallery will be unveiled here soon.
        </p>

        <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-white/70 px-5 py-2 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-[#B08A3F]" />
          <span className="font-sans text-xs uppercase tracking-[0.22em] text-[#521782] font-semibold">
            Gallery Coming Soon
          </span>
          <Heart className="h-3.5 w-3.5 text-[#B08A3F]" />
        </div>
      </motion.div>
    </section>
  );
};
