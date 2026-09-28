import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { SectionHeader } from './common/SectionHeader';
import { PurpleFloralDivider } from './common/PurpleFloralDivider';
import { PurpleFloralCorner } from './common/PurpleFloralCorner';
import { Heart } from 'lucide-react';

export const LoveStorySection: React.FC = () => {
  return (
    <section id="story" className="relative mx-auto max-w-4xl scroll-mt-20 px-5 py-14 sm:px-8 sm:py-20">
      {/* Section Header */}
      <SectionHeader
        preTitle="A Love Story"
        title="Two Hearts, One Celebration"
        dividerWidth="w-[230px]"
      />

      {/* Main Couple Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9 }}
        className="relative mx-auto max-w-2xl rounded-[24px] px-7 py-10 text-center sm:px-12 sm:py-14 velvet-card"
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

        {/* Inner Inset Border */}
        <span aria-hidden="true" className="pointer-events-none absolute inset-2 rounded-[20px] border border-[#C3A45C]/40" />

        {/* Top Circular Medallion Badge */}
        <span 
          className="mb-4 inline-grid h-16 w-16 place-items-center rounded-full"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #521782, #230738)',
            border: '1px solid rgba(176, 138, 63, 0.75)',
            boxShadow: '0 0 0 4px rgba(251, 245, 234, 0.9), 0 0 0 5px rgba(176, 138, 63, 0.4), 0 10px 20px -10px rgba(35, 7, 56, 0.35)',
          }}
        >
          <Heart className="h-7 w-7 text-[#D4AF37] fill-[#D4AF37]/30" />
        </span>

        {/* Couple Tag */}
        <div className="mt-1 flex flex-col items-center gap-1.5">
          <p className="font-sans text-[0.62rem] uppercase tracking-[0.38em] font-semibold text-[#521782]">
            The Newlyweds
          </p>
          <h3 className="font-couple italic font-semibold text-[clamp(1.7rem,4.8vw,2.4rem)] leading-[1.35] text-purple-foil">
            {weddingConfig.couple.groom} <span className="font-script text-[0.85em] text-[#521782] mx-1">&amp;</span> {weddingConfig.couple.bride}
          </h3>
          <div className="mt-1">
            <PurpleFloralDivider width="w-[140px]" />
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-[50ch] font-body text-[1.1rem] text-[#4A154B] leading-[1.9]">
          {weddingConfig.loveStory.quote}
        </p>

        <p className="mx-auto mt-2 max-w-[46ch] font-body italic text-[0.98rem] text-[#7A4B7E]">
          {weddingConfig.loveStory.subtext}
        </p>
      </motion.div>
    </section>
  );
};
