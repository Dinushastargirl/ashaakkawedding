import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { SectionHeader } from './common/SectionHeader';
import { X, ChevronLeft, ChevronRight, Maximize2, Heart } from 'lucide-react';

export const PhotoExperienceSection: React.FC = () => {
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null);

  const photos = weddingConfig.gallery || [];

  // Lightbox keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedPhotoIndex === null) return;
      if (e.key === 'Escape') setSelectedPhotoIndex(null);
      if (e.key === 'ArrowRight') setSelectedPhotoIndex((prev) => (prev! + 1) % photos.length);
      if (e.key === 'ArrowLeft') setSelectedPhotoIndex((prev) => (prev! - 1 + photos.length) % photos.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedPhotoIndex, photos.length]);

  return (
    <section id="gallery" className="relative mx-auto max-w-5xl scroll-mt-20 px-4 py-16 sm:px-8 sm:py-24">
      {/* Section Header */}
      <SectionHeader
        preTitle="Reels From Our Story"
        title="Captured Moments"
        subtitle="Cherished pre-shoot memories of our sacred journey together"
        dividerWidth="w-[240px]"
      />

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mt-10">
        {photos.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            onClick={() => setSelectedPhotoIndex(index)}
            className="group relative cursor-pointer overflow-hidden rounded-[24px] bg-gradient-to-b from-[#FFFDF9]/95 via-[#FAF6EE]/90 to-[#F6ECDC]/95 p-3 border border-[#B08A3F]/70 shadow-[0_15px_35px_rgba(35,7,56,0.14)] hover:shadow-[0_25px_50px_rgba(82,23,130,0.25)] hover:border-[#D4AF37] transition-all duration-500 hover:-translate-y-1.5"
          >
            {/* Ornate corner brackets */}
            <span aria-hidden="true" className="pointer-events-none">
              <span className="absolute top-[10px] left-[10px] w-4 h-4 border-t-2 border-l-2 border-[#B08A3F] rounded-tl-[3px] z-10 group-hover:border-[#D4AF37] transition-colors" />
              <span className="absolute top-[10px] right-[10px] w-4 h-4 border-t-2 border-r-2 border-[#B08A3F] rounded-tr-[3px] z-10 group-hover:border-[#D4AF37] transition-colors" />
              <span className="absolute bottom-[10px] left-[10px] w-4 h-4 border-b-2 border-l-2 border-[#B08A3F] rounded-bl-[3px] z-10 group-hover:border-[#D4AF37] transition-colors" />
              <span className="absolute bottom-[10px] right-[10px] w-4 h-4 border-b-2 border-r-2 border-[#B08A3F] rounded-br-[3px] z-10 group-hover:border-[#D4AF37] transition-colors" />
            </span>

            {/* Image Container */}
            <div className="relative overflow-hidden rounded-[18px] aspect-[4/3] sm:aspect-[4/3.2] bg-[#230738]/10">
              <img
                src={item.url}
                alt={item.title}
                className="h-full w-full object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-108"
                loading="lazy"
              />

              {/* Gradient Vignette */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#230738]/80 via-[#230738]/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity duration-300" />

              {/* Hover Expand Icon */}
              <div className="absolute top-4 right-4 h-9 w-9 rounded-full bg-[#150323]/70 backdrop-blur-md border border-[#D4AF37]/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 shadow-md">
                <Maximize2 className="h-4 w-4 text-[#E5C578]" />
              </div>

              {/* Bottom Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-left">
                <span className="font-sans text-[0.62rem] uppercase tracking-[0.25em] text-[#E5C578] font-bold">
                  {item.subtitle}
                </span>
                <h3 className="font-serif italic text-xl text-[#FAF7F2] font-medium leading-snug drop-shadow-md">
                  {item.title}
                </h3>
              </div>
            </div>

            {/* Description Subtext Below Image */}
            <div className="px-2 pt-3 pb-1 flex items-center justify-between">
              <p className="font-body italic text-xs text-[#6A4773]">
                {item.caption}
              </p>
              <Heart className="h-3.5 w-3.5 text-[#B08A3F]/70 group-hover:text-[#521782] group-hover:fill-[#521782] transition-colors shrink-0 ml-2" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedPhotoIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setSelectedPhotoIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-[#150323]/95 backdrop-blur-lg select-none"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedPhotoIndex(null)}
              className="absolute top-5 right-5 sm:top-8 sm:right-8 z-50 h-11 w-11 rounded-full bg-[#230738]/80 border border-[#D4AF37]/60 text-[#FAF7F2] hover:text-[#E5C578] hover:border-[#E5C578] flex items-center justify-center transition-all cursor-pointer shadow-lg"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhotoIndex((prev) => (prev! - 1 + photos.length) % photos.length);
              }}
              className="absolute left-3 sm:left-8 top-1/2 -translate-y-1/2 z-50 h-12 w-12 rounded-full bg-[#230738]/80 border border-[#D4AF37]/60 text-[#FAF7F2] hover:text-[#E5C578] hover:border-[#E5C578] flex items-center justify-center transition-all cursor-pointer shadow-lg"
              aria-label="Previous"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedPhotoIndex((prev) => (prev! + 1) % photos.length);
              }}
              className="absolute right-3 sm:right-8 top-1/2 -translate-y-1/2 z-50 h-12 w-12 rounded-full bg-[#230738]/80 border border-[#D4AF37]/60 text-[#FAF7F2] hover:text-[#E5C578] hover:border-[#E5C578] flex items-center justify-center transition-all cursor-pointer shadow-lg"
              aria-label="Next"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Modal Content Box */}
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-[24px] border border-[#D4AF37]/70 bg-gradient-to-b from-[#230738] via-[#1B052D] to-[#150323] p-3 sm:p-5 shadow-[0_25px_80px_rgba(0,0,0,0.85)] flex flex-col items-center"
            >
              {/* Photo Display */}
              <div className="relative max-h-[72vh] w-full overflow-hidden rounded-[16px]">
                <img
                  src={photos[selectedPhotoIndex].url}
                  alt={photos[selectedPhotoIndex].title}
                  className="max-h-[72vh] w-auto mx-auto object-contain rounded-[14px]"
                />
              </div>

              {/* Caption & Counter */}
              <div className="w-full mt-4 text-center px-4">
                <p className="font-sans text-[0.68rem] uppercase tracking-[0.3em] text-[#E5C578] font-bold">
                  {selectedPhotoIndex + 1} of {photos.length} • {photos[selectedPhotoIndex].subtitle}
                </p>
                <h4 className="font-serif italic text-2xl text-gold-gradient mt-1 font-medium">
                  {photos[selectedPhotoIndex].title}
                </h4>
                <p className="font-body italic text-sm text-[#DFCBF7]/90 mt-1 max-w-[50ch] mx-auto">
                  {photos[selectedPhotoIndex].caption}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
