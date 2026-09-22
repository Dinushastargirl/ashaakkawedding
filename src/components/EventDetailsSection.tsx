import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { GoldDivider } from './common/GoldDivider';
import { CrossOrnament } from './common/CrossOrnament';
import { Clock, MapPin, X, Wine, Church } from 'lucide-react';

export const EventDetailsSection: React.FC = () => {
  const [modalVenue, setModalVenue] = useState<{ title: string; time: string; placeholder: string } | null>(null);

  const { ceremony, reception } = weddingConfig.events;

  return (
    <section id="details" className="relative py-20 px-4 sm:px-8 overflow-hidden bg-[#FAF7F2]">
      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Section Title */}
        <div className="text-center mb-14">
          <p className="font-sans text-[0.68rem] uppercase tracking-[0.42em] text-[#8C6D2A] font-semibold">
            Holy Celebration
          </p>
          <h2 className="mt-2 font-serif italic text-3xl sm:text-5xl text-purple-gradient leading-tight">
            Ceremony &amp; Reception
          </h2>
          <div className="my-4 flex justify-center">
            <GoldDivider width="w-44 sm:w-56" />
          </div>
          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#521782] font-semibold">
            17th October 2026 • Two Sacred Chapters
          </p>
        </div>

        {/* Two Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Chapter I: Christian Wedding Service */}
          <motion.div
            id="ceremony"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative overflow-hidden rounded-[26px] border border-[#C5A059]/60 bg-white p-6 sm:p-9 shadow-[0_20px_50px_-15px_rgba(35,7,56,0.14)] flex flex-col justify-between"
          >
            {/* Top decorative badge */}
            <div className="flex items-center justify-between border-b border-[#E8DCF5] pb-4">
              <span className="font-sans text-[0.68rem] uppercase tracking-[0.3em] text-[#8C6D2A] font-semibold">
                Chapter I
              </span>
              <div className="flex items-center gap-1.5 text-[#521782]">
                <Church className="h-4 w-4 text-[#8C6D2A]" />
                <span className="font-sans text-xs font-semibold tracking-wider">Sanctuary Service</span>
              </div>
            </div>

            {/* Chapel Image Header */}
            <div className="relative mt-5 overflow-hidden rounded-[18px] aspect-[16/9] border border-[#C5A059]/40 group">
              <img
                src={weddingConfig.photos.chapel}
                alt="Christian Wedding Chapel Atmosphere"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#230738]/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                <CrossOrnament size={20} />
                <span className="font-serif italic text-base sm:text-lg">Sacred Nuptial Vows</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="mt-6 text-center">
              <h3 className="font-serif italic text-2xl sm:text-3xl text-[#230738]">
                {ceremony.title}
              </h3>
              
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#EFE6FB] px-4 py-1 border border-[#D4BEE4]">
                <Clock className="h-3.5 w-3.5 text-[#521782]" />
                <span className="font-sans text-xs sm:text-sm font-semibold text-[#3C1061] tracking-wider">
                  {ceremony.time}
                </span>
              </div>

              <p className="mt-4 font-body text-base text-[#5C4566] leading-relaxed">
                {ceremony.description}
              </p>

              {/* Venue Callout */}
              <div className="mt-5 rounded-[14px] border border-dashed border-[#C5A059]/70 bg-[#FAF7F2] p-3 text-center">
                <p className="font-sans text-[0.65rem] uppercase tracking-widest text-[#8C6D2A] font-semibold">
                  Location
                </p>
                <p className="font-serif italic text-base text-[#230738] mt-0.5">
                  {ceremony.venuePlaceholder}
                </p>
              </div>
            </div>

            {/* View Location Action */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setModalVenue({ title: ceremony.title, time: ceremony.time, placeholder: ceremony.venuePlaceholder })}
                className="inline-flex items-center gap-2 rounded-full border border-[#B08A3F] bg-gradient-to-r from-[#230738] to-[#4E144A] px-6 py-2.5 font-sans text-xs uppercase tracking-[0.25em] text-[#FAF7F2] font-semibold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <MapPin className="h-3.5 w-3.5 text-[#E5C578]" />
                <span>View Location</span>
              </button>
            </div>
          </motion.div>

          {/* Chapter II: Dinner & Reception */}
          <motion.div
            id="reception"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="relative overflow-hidden rounded-[26px] border border-[#C5A059]/60 bg-white p-6 sm:p-9 shadow-[0_20px_50px_-15px_rgba(35,7,56,0.14)] flex flex-col justify-between"
          >
            {/* Top decorative badge */}
            <div className="flex items-center justify-between border-b border-[#E8DCF5] pb-4">
              <span className="font-sans text-[0.68rem] uppercase tracking-[0.3em] text-[#8C6D2A] font-semibold">
                Chapter II
              </span>
              <div className="flex items-center gap-1.5 text-[#521782]">
                <Wine className="h-4 w-4 text-[#8C6D2A]" />
                <span className="font-sans text-xs font-semibold tracking-wider">Grand Banquet</span>
              </div>
            </div>

            {/* Floral Banquet Image Header */}
            <div className="relative mt-5 overflow-hidden rounded-[18px] aspect-[16/9] border border-[#C5A059]/40 group">
              <img
                src={weddingConfig.photos.flowers}
                alt="Purple Wedding Floral Banquet Atmosphere"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#230738]/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 flex items-center gap-2 text-white">
                <Wine className="h-4 w-4 text-[#E5C578]" />
                <span className="font-serif italic text-base sm:text-lg">Fellowship &amp; Feast</span>
              </div>
            </div>

            {/* Content Details */}
            <div className="mt-6 text-center">
              <h3 className="font-serif italic text-2xl sm:text-3xl text-[#230738]">
                {reception.title}
              </h3>
              
              <div className="mt-3 inline-flex items-center gap-2 rounded-full bg-[#EFE6FB] px-4 py-1 border border-[#D4BEE4]">
                <Clock className="h-3.5 w-3.5 text-[#521782]" />
                <span className="font-sans text-xs sm:text-sm font-semibold text-[#3C1061] tracking-wider">
                  {reception.time}
                </span>
              </div>

              <p className="mt-4 font-body text-base text-[#5C4566] leading-relaxed">
                {reception.description}
              </p>

              {/* Venue Callout */}
              <div className="mt-5 rounded-[14px] border border-dashed border-[#C5A059]/70 bg-[#FAF7F2] p-3 text-center">
                <p className="font-sans text-[0.65rem] uppercase tracking-widest text-[#8C6D2A] font-semibold">
                  Location
                </p>
                <p className="font-serif italic text-base text-[#230738] mt-0.5">
                  {reception.venuePlaceholder}
                </p>
              </div>
            </div>

            {/* View Location Action */}
            <div className="mt-6 text-center">
              <button
                onClick={() => setModalVenue({ title: reception.title, time: reception.time, placeholder: reception.venuePlaceholder })}
                className="inline-flex items-center gap-2 rounded-full border border-[#B08A3F] bg-gradient-to-r from-[#230738] to-[#4E144A] px-6 py-2.5 font-sans text-xs uppercase tracking-[0.25em] text-[#FAF7F2] font-semibold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <MapPin className="h-3.5 w-3.5 text-[#E5C578]" />
                <span>View Location</span>
              </button>
            </div>
          </motion.div>

        </div>

        {/* Location Information Modal */}
        <AnimatePresence>
          {modalVenue && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="relative w-full max-w-md rounded-[24px] border border-[#C5A059] bg-[#FAF7F2] p-6 sm:p-8 text-center shadow-2xl"
              >
                <button
                  onClick={() => setModalVenue(null)}
                  className="absolute right-4 top-4 rounded-full p-1.5 text-[#8C6D2A] hover:bg-[#EFE6FB] transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="h-5 w-5" />
                </button>

                <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#EFE6FB] border border-[#D4BEE4]">
                  <MapPin className="h-6 w-6 text-[#521782]" />
                </div>

                <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-[#8C6D2A] font-semibold">
                  Location Information
                </p>

                <h4 className="mt-1 font-serif italic text-2xl text-[#230738]">
                  {modalVenue.title}
                </h4>

                <p className="mt-1 font-sans text-xs text-[#521782] font-medium tracking-wider">
                  Time: {modalVenue.time}
                </p>

                <div className="mt-4 rounded-xl border border-[#C5A059]/40 bg-white p-4">
                  <p className="font-serif italic text-lg text-[#3C1061]">
                    "{modalVenue.placeholder}"
                  </p>
                  <p className="mt-2 font-sans text-xs text-[#6B5074] leading-relaxed">
                    Formal church and reception venue address will be shared here closer to the date.
                  </p>
                </div>

                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() => setModalVenue(null)}
                    className="rounded-full bg-[#230738] px-6 py-2 font-sans text-xs uppercase tracking-widest text-[#FAF7F2] hover:bg-[#4E144A] transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
