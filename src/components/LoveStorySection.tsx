import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { GoldDivider } from './common/GoldDivider';
import { Heart } from 'lucide-react';

export const LoveStorySection: React.FC = () => {
  return (
    <section id="story" className="relative py-20 px-4 sm:px-8 overflow-hidden bg-[#FAF7F2]">
      {/* Background floral tint */}
      <div 
        className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 opacity-10 bg-contain bg-no-repeat bg-right"
        style={{ backgroundImage: `url('/flowers.jpg')` }}
      />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
        >
          {/* Subtle gold badge */}
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-[#C5A059]/40 bg-[#FAF7F2] px-4 py-1 shadow-sm mb-3">
            <Heart className="h-3 w-3 text-[#B08A3F] fill-[#D4AF37]/30" />
            <span className="font-sans text-[0.68rem] uppercase tracking-[0.35em] text-[#8C6D2A] font-semibold">
              Our Sacred Covenant
            </span>
          </div>

          {/* Heading: TWO LIVES • ONE PROMISE • ONE GOD */}
          <h2 className="font-serif italic text-3xl sm:text-5xl text-purple-gradient leading-tight">
            Two Lives • One Promise • One God
          </h2>

          <div className="my-4 flex justify-center">
            <GoldDivider width="w-44 sm:w-56" />
          </div>

          {/* Couple Message */}
          <div className="mx-auto max-w-2xl mt-4 px-4">
            <p className="font-serif italic text-xl sm:text-2xl text-[#3C1061] leading-relaxed">
              {weddingConfig.loveStory.quote}
            </p>
            <p className="mt-3 font-body text-base sm:text-lg text-[#5C4566] leading-relaxed">
              {weddingConfig.loveStory.subtext}
            </p>
          </div>
        </motion.div>

        {/* Dual Visual Showcase: Rings & Couple Photo */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-3xl mx-auto">
          {/* Couple Portrait Card */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative overflow-hidden rounded-[24px] border border-[#C5A059]/60 p-2.5 bg-white shadow-[0_15px_40px_-10px_rgba(35,7,56,0.18)] group"
          >
            <div className="overflow-hidden rounded-[18px] aspect-[4/4.6]">
              <img
                src={weddingConfig.photos.coupleEditorial}
                alt="Joshua & Asha looking at each other"
                className="h-full w-full object-cover object-[center_28%] transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="p-3 text-center">
              <p className="font-serif italic text-lg text-[#230738]">Joshua &amp; Asha</p>
              <p className="font-sans text-[0.62rem] uppercase tracking-[0.25em] text-[#8C6D2A]">Forever Blessed</p>
            </div>
          </motion.div>

          {/* Sacred Rings & Floral Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative overflow-hidden rounded-[24px] border border-[#C5A059]/60 p-2.5 bg-white shadow-[0_15px_40px_-10px_rgba(35,7,56,0.18)] group"
          >
            <div className="overflow-hidden rounded-[18px] aspect-[4/4.6]">
              <img
                src={weddingConfig.photos.rings}
                alt="Holy Wedding Rings on royal purple velvet with candles"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </div>
            <div className="p-3 text-center">
              <p className="font-serif italic text-lg text-[#230738]">Sacred Wedding Bands</p>
              <p className="font-sans text-[0.62rem] uppercase tracking-[0.25em] text-[#8C6D2A]">A Token of Endless Love</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
