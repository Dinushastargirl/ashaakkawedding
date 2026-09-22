import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { SectionHeader } from './common/SectionHeader';
import { GoldDivider } from './common/GoldDivider';
import { Clock, MapPin, X, Wine, Church, CalendarDays, CalendarPlus } from 'lucide-react';

export const EventDetailsSection: React.FC = () => {
  const [modalVenue, setModalVenue] = useState<{ title: string; time: string; placeholder: string } | null>(null);

  const { ceremony, reception } = weddingConfig.events;

  const handleGoogleCalendar = () => {
    const startTime = '20261017T120000Z';
    const endTime = '20261017T170000Z';
    const title = encodeURIComponent('Joshua & Asha — Christian Wedding Service & Reception');
    const details = encodeURIComponent('Holy Matrimony & Reception celebration for Joshua and Asha.\nCeremony: 5:30 PM\nDinner & Reception: 7:30 PM\nVenue details coming soon.');
    const location = encodeURIComponent('Venue details coming soon');
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="details" className="relative mx-auto max-w-5xl scroll-mt-20 px-5 py-14 sm:px-8 sm:py-20">
      {/* Section Header */}
      <SectionHeader
        preTitle="Join Us"
        title="Ceremony & Reception"
        subtitle="Two Sacred Chapters • One Blessed Day"
        dividerWidth="w-[230px]"
      />

      {/* Velvet Homecoming Event Cards Stack */}
      <div className="mx-auto flex max-w-2xl flex-col gap-8">
        
        {/* Card 1: Christian Wedding Ceremony */}
        <motion.div
          id="ceremony"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="relative w-full rounded-[28px] px-6 py-10 text-center sm:px-12 sm:py-14 velvet-card"
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
            className="relative mx-auto grid h-16 w-16 place-items-center rounded-full"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #521782, #230738)',
              border: '1px solid rgba(176, 138, 63, 0.75)',
              boxShadow: '0 0 0 4px rgba(251, 245, 234, 0.9), 0 0 0 5px rgba(176, 138, 63, 0.4), 0 8px 18px -10px rgba(35, 7, 56, 0.4)',
            }}
          >
            <Church className="h-8 w-8 text-[#D4AF37]" />
          </span>

          <h3 className="relative mt-4 font-serif italic text-2xl sm:text-3xl text-purple-foil tracking-[0.02em]">
            {ceremony.title}
          </h3>

          <div className="mt-3 flex justify-center">
            <GoldDivider width="w-[120px]" />
          </div>

          <p className="mt-3 font-body text-base text-[#5C4566]">
            {ceremony.description}
          </p>

          {/* Details list */}
          <div className="relative mx-auto mt-6 flex max-w-xs flex-col gap-3 text-left">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-4 w-4 shrink-0 text-[#8C6D2A]" />
              <span className="font-body text-[1.02rem] text-[#4A154B]">{weddingConfig.date.shortDate}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-[#8C6D2A]" />
              <span className="font-body text-[1.02rem] text-[#4A154B]">{ceremony.time} onwards</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-[#8C6D2A]" />
              <span className="font-body text-[1.02rem] text-[#4A154B]">{ceremony.venuePlaceholder}</span>
            </div>
          </div>

          {/* View Location Action */}
          <div className="mt-7">
            <button
              onClick={() => setModalVenue({ title: ceremony.title, time: ceremony.time, placeholder: ceremony.venuePlaceholder })}
              className="inline-flex items-center gap-2 rounded-full border border-[#B08A3F] bg-gradient-to-r from-[#230738] to-[#4E144A] px-6 py-2.5 font-sans text-xs uppercase tracking-[0.25em] text-[#FAF7F2] font-semibold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <MapPin className="h-3.5 w-3.5 text-[#E5C578]" />
              <span>View Location</span>
            </button>
          </div>
        </motion.div>

        {/* Card 2: Dinner & Reception */}
        <motion.div
          id="reception"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="relative w-full rounded-[28px] px-6 py-10 text-center sm:px-12 sm:py-14 velvet-card"
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
            className="relative mx-auto grid h-16 w-16 place-items-center rounded-full"
            style={{
              background: 'radial-gradient(circle at 35% 30%, #521782, #230738)',
              border: '1px solid rgba(176, 138, 63, 0.75)',
              boxShadow: '0 0 0 4px rgba(251, 245, 234, 0.9), 0 0 0 5px rgba(176, 138, 63, 0.4), 0 8px 18px -10px rgba(35, 7, 56, 0.4)',
            }}
          >
            <Wine className="h-8 w-8 text-[#D4AF37]" />
          </span>

          <h3 className="relative mt-4 font-serif italic text-2xl sm:text-3xl text-purple-foil tracking-[0.02em]">
            {reception.title}
          </h3>

          <div className="mt-3 flex justify-center">
            <GoldDivider width="w-[120px]" />
          </div>

          <p className="mt-3 font-body text-base text-[#5C4566]">
            {reception.description}
          </p>

          {/* Details list */}
          <div className="relative mx-auto mt-6 flex max-w-xs flex-col gap-3 text-left">
            <div className="flex items-center gap-3">
              <CalendarDays className="h-4 w-4 shrink-0 text-[#8C6D2A]" />
              <span className="font-body text-[1.02rem] text-[#4A154B]">{weddingConfig.date.shortDate}</span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-4 w-4 shrink-0 text-[#8C6D2A]" />
              <span className="font-body text-[1.02rem] text-[#4A154B]">{reception.time} onwards</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="h-4 w-4 shrink-0 text-[#8C6D2A]" />
              <span className="font-body text-[1.02rem] text-[#4A154B]">{reception.venuePlaceholder}</span>
            </div>
          </div>

          {/* View Location Action */}
          <div className="mt-7">
            <button
              onClick={() => setModalVenue({ title: reception.title, time: reception.time, placeholder: reception.venuePlaceholder })}
              className="inline-flex items-center gap-2 rounded-full border border-[#B08A3F] bg-gradient-to-r from-[#230738] to-[#4E144A] px-6 py-2.5 font-sans text-xs uppercase tracking-[0.25em] text-[#FAF7F2] font-semibold shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
            >
              <MapPin className="h-3.5 w-3.5 text-[#E5C578]" />
              <span>View Location</span>
            </button>
          </div>
        </motion.div>

        {/* Save The Date Accordion (Velvet Homecoming style) */}
        <div className="mx-auto mt-4 w-full max-w-md">
          <div className="rounded-2xl overflow-hidden velvet-card">
            <button
              type="button"
              onClick={handleGoogleCalendar}
              className="w-full flex items-center text-left transition-colors hover:bg-white/40 focus:outline-none gap-4 px-5 py-4 cursor-pointer"
            >
              <span 
                className="shrink-0 rounded-full flex items-center justify-center w-10 h-10 shadow-sm"
                style={{ background: 'linear-gradient(135deg, #521782, #230738)' }}
              >
                <CalendarPlus className="h-5 w-5 text-[#D4AF37]" />
              </span>
              <span className="flex-1 min-w-0">
                <span className="block leading-tight text-lg font-serif italic text-[#230738]">
                  Save the Date
                </span>
                <span className="block text-xs mt-0.5 text-[#7A4B7E]">
                  Add ceremony &amp; reception to your calendar
                </span>
              </span>
            </button>
          </div>
        </div>

      </div>

      {/* Location Modal */}
      <AnimatePresence>
        {modalVenue && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-md rounded-[24px] border border-[#B08A3F] bg-[#FAF7F2] p-6 sm:p-8 text-center shadow-2xl"
            >
              <button
                onClick={() => setModalVenue(null)}
                className="absolute right-4 top-4 rounded-full p-1.5 text-[#8C6D2A] hover:bg-[#EFE6FB] transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div 
                className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full shadow-md"
                style={{ background: 'linear-gradient(135deg, #521782, #230738)' }}
              >
                <MapPin className="h-7 w-7 text-[#D4AF37]" />
              </div>

              <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-[#8C6D2A] font-semibold">
                Venue Information
              </p>

              <h4 className="mt-1 font-serif italic text-2xl text-purple-foil">
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
                  Formal church and reception hall address with direct Google Maps directions will be provided here.
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
    </section>
  );
};
