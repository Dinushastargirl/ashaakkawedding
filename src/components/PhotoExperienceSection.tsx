import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { GoldDivider } from './common/GoldDivider';
import { Camera } from 'lucide-react';

export const PhotoExperienceSection: React.FC = () => {
  const galleryItems = [
    {
      src: weddingConfig.photos.coupleHero,
      title: "Joshua & Asha",
      subtitle: "The Authentic Couple • United in Grace",
      aspect: "aspect-[4/5]",
      colSpan: "sm:col-span-2 lg:col-span-2",
      isCouple: true,
    },
    {
      src: weddingConfig.photos.rings,
      title: "Sacred Bands",
      subtitle: "Tokens of an Everlasting Promise",
      aspect: "aspect-[4/3] sm:aspect-[4/5]",
      colSpan: "sm:col-span-1 lg:col-span-1",
      isCouple: false,
    },
    {
      src: weddingConfig.photos.chapel,
      title: "The Sanctuary",
      subtitle: "Candlelit Altar & Sacred Presence",
      aspect: "aspect-[16/10]",
      colSpan: "sm:col-span-1 lg:col-span-1",
      isCouple: false,
    },
    {
      src: weddingConfig.photos.flowers,
      title: "Royal Plum & Lavender",
      subtitle: "Celebratory Florals & Evening Warmth",
      aspect: "aspect-[16/10]",
      colSpan: "sm:col-span-2 lg:col-span-2",
      isCouple: false,
    },
  ];

  return (
    <section id="gallery" className="relative py-20 px-4 sm:px-8 overflow-hidden bg-[#230738] text-[#FAF7F2]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(82,23,130,0.5)_0%,rgba(35,7,56,0.98)_60%,#150323_100%)]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/50 bg-white/10 px-4 py-1 backdrop-blur-sm shadow-sm mb-3">
            <Camera className="h-3.5 w-3.5 text-[#E5C578]" />
            <span className="font-sans text-[0.68rem] uppercase tracking-[0.35em] text-[#E5C578] font-semibold">
              Editorial Gallery
            </span>
          </div>

          <h2 className="font-serif italic text-3xl sm:text-5xl text-gold-gradient leading-tight">
            Memories &amp; Moments
          </h2>

          <div className="my-4 flex justify-center">
            <GoldDivider width="w-40 sm:w-52" />
          </div>

          <p className="mx-auto max-w-[40ch] font-body italic text-base sm:text-lg text-[#DFCBF7]/90 leading-relaxed">
            A visual reflection of our love, faith, and the sacred beauty of our wedding celebration.
          </p>
        </motion.div>

        {/* Editorial Photo Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 items-start">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: idx * 0.15 }}
              className={`relative overflow-hidden rounded-[24px] border border-[#D4AF37]/50 p-2 bg-[#2E0A4A]/70 backdrop-blur-md shadow-[0_20px_45px_-10px_rgba(0,0,0,0.6)] group ${item.colSpan}`}
            >
              {/* Gold Corner Finials */}
              <span className="pointer-events-none absolute left-3 top-3 h-4 w-4 border-l-2 border-t-2 border-[#D4AF37] z-20" />
              <span className="pointer-events-none absolute right-3 top-3 h-4 w-4 border-r-2 border-t-2 border-[#D4AF37] z-20" />
              <span className="pointer-events-none absolute bottom-3 left-3 h-4 w-4 border-b-2 border-l-2 border-[#D4AF37] z-20" />
              <span className="pointer-events-none absolute bottom-3 right-3 h-4 w-4 border-b-2 border-r-2 border-[#D4AF37] z-20" />

              <div className={`relative overflow-hidden rounded-[18px] ${item.aspect}`}>
                <img
                  src={item.src}
                  alt={item.title}
                  className={`h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105 ${
                    item.isCouple ? 'object-[center_28%]' : 'object-center'
                  }`}
                  loading="lazy"
                />

                {/* Subtle vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#150323]/80 via-transparent to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-75" />

                {/* Caption overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-left">
                  <p className="font-serif italic text-xl sm:text-2xl text-[#FAF7F2] drop-shadow-md">
                    {item.title}
                  </p>
                  <p className="font-sans text-[0.68rem] uppercase tracking-[0.25em] text-[#E5C578] drop-shadow-md">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
