import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { SectionHeader } from './common/SectionHeader';
import { X, ZoomIn } from 'lucide-react';

export const PhotoExperienceSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      src: weddingConfig.photos.coupleHero,
      title: "Joshua & Asha",
      subtitle: "The Happy Couple",
      span: "row-span-2 col-span-2 sm:col-span-2",
      aspect: "h-full w-full object-cover object-[center_28%]",
    },
    {
      src: weddingConfig.photos.rings,
      title: "Holy Vows & Rings",
      subtitle: "Sacred Covenant",
      span: "row-span-1 col-span-1",
      aspect: "h-full w-full object-cover",
    },
    {
      src: weddingConfig.photos.chapel,
      title: "The Sanctuary",
      subtitle: "Altar & Candlelight",
      span: "row-span-1 col-span-1",
      aspect: "h-full w-full object-cover",
    },
    {
      src: weddingConfig.photos.flowers,
      title: "Royal Florals",
      subtitle: "Plum & Lavender",
      span: "row-span-1 col-span-2 sm:col-span-2",
      aspect: "h-full w-full object-cover",
    },
  ];

  return (
    <section id="gallery" className="relative mx-auto max-w-6xl scroll-mt-20 px-5 py-14 sm:px-8 sm:py-20">
      {/* Section Header */}
      <SectionHeader
        preTitle="Reels From Our Story"
        title="Captured Moments"
        subtitle="Cherished memories leading to our holy matrimony"
        dividerWidth="w-[230px]"
      />

      {/* Velvet Homecoming Masonry Grid */}
      <div className="grid auto-rows-[160px] grid-cols-2 gap-3 sm:auto-rows-[210px] sm:gap-4 lg:grid-cols-4">
        {galleryItems.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            onClick={() => setSelectedImage(item.src)}
            className={`group relative overflow-hidden rounded-[18px] cursor-pointer ${item.span}`}
            style={{
              border: '1px solid rgba(176, 138, 63, 0.55)',
              boxShadow: '0 10px 25px -10px rgba(50, 10, 80, 0.2)',
            }}
          >
            <img
              src={item.src}
              alt={item.title}
              className={`${item.aspect} transition-transform duration-700 ease-out group-hover:scale-105`}
              loading="lazy"
            />

            {/* Gradient Overlay & Hover Tag */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#230738]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-[#FAF7F2]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-serif italic text-lg sm:text-xl text-[#FAF7F2]">
                    {item.title}
                  </p>
                  <p className="font-sans text-[0.62rem] uppercase tracking-[0.25em] text-[#E5C578]">
                    {item.subtitle}
                  </p>
                </div>
                <ZoomIn className="h-4 w-4 text-[#E5C578]" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md cursor-pointer"
          >
            <div className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-[20px] border border-[#B08A3F] p-2 bg-[#230738]" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 rounded-full bg-black/60 p-2 text-white hover:bg-black/80 transition-colors cursor-pointer"
              >
                <X className="h-5 w-5" />
              </button>
              <img
                src={selectedImage}
                alt="Selected preview"
                className="max-h-[85vh] w-auto rounded-[14px] object-contain"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
