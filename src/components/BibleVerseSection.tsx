import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { SectionHeader } from './common/SectionHeader';
import { CrossOrnament } from './common/CrossOrnament';

export const BibleVerseSection: React.FC = () => {
  return (
    <section id="verse" className="relative scroll-mt-20 px-5 py-14 sm:px-8 sm:py-20">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Section Header */}
        <SectionHeader
          preTitle="Holy Scripture"
          title="United Under God"
          dividerWidth="w-[200px]"
        />

        {/* Velvet Card */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto max-w-2xl rounded-[28px] px-7 py-10 text-center sm:px-12 sm:py-14 velvet-card"
        >
          {/* 4 Corner Gold Brackets */}
          <span aria-hidden="true" className="pointer-events-none">
            <span className="absolute top-[13px] left-[13px] w-[18px] h-[18px] border-t border-l border-[#C3A45C] rounded-tl-[3px]" />
            <span className="absolute top-[13px] right-[13px] w-[18px] h-[18px] border-t border-r border-[#C3A45C] rounded-tr-[3px]" />
            <span className="absolute bottom-[13px] left-[13px] w-[18px] h-[18px] border-b border-l border-[#C3A45C] rounded-bl-[3px]" />
            <span className="absolute bottom-[13px] right-[13px] w-[18px] h-[18px] border-b border-r border-[#C3A45C] rounded-br-[3px]" />
          </span>

          {/* Top Medallion Circle */}
          <span 
            className="mb-4 inline-grid h-16 w-16 place-items-center rounded-full"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #521782, #230738)',
              border: '1px solid rgba(176, 138, 63, 0.75)',
              boxShadow: '0 0 0 4px rgba(251, 245, 234, 0.9), 0 0 0 5px rgba(176, 138, 63, 0.4), 0 8px 18px -10px rgba(35, 7, 56, 0.4)',
            }}
          >
            <CrossOrnament size={32} />
          </span>

          <blockquote className="mt-3 font-serif italic text-2xl sm:text-3.5xl text-purple-foil leading-relaxed max-w-[26ch] mx-auto">
            {weddingConfig.scripture.verse}
          </blockquote>

          <p className="mt-4 font-sans text-xs uppercase tracking-[0.32em] font-bold text-[#8C6D2A]">
            {weddingConfig.scripture.citation}
          </p>

          <p className="mx-auto mt-4 max-w-[42ch] font-body text-base text-[#5C4566] leading-relaxed">
            Centered upon faith, Christ is the foundation of our covenant, our joy, and our eternal love.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
