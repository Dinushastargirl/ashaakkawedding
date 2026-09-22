import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { GoldDivider } from './common/GoldDivider';
import { CrossOrnament } from './common/CrossOrnament';
import { Calendar, Clock, MapPin, CalendarPlus, Church, Wine } from 'lucide-react';

export const FramedWeddingDetailsCard: React.FC = () => {
  const handleGoogleCalendar = () => {
    // 17th October 2026 at 5:30 PM local (+05:30) = 12:00 UTC
    // Ends approx 10:30 PM local (+05:30) = 17:00 UTC
    const startTime = '20261017T120000Z';
    const endTime = '20261017T170000Z';
    const title = encodeURIComponent('Joshua & Asha — Christian Wedding Service & Reception');
    const details = encodeURIComponent('Holy Matrimony & Reception celebration for Joshua and Asha.\nCeremony: 5:30 PM\nDinner & Reception: 7:30 PM\nVenue details coming soon.');
    const location = encodeURIComponent('Venue details coming soon');
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startTime}/${endTime}&details=${details}&location=${location}`;
    window.open(googleCalendarUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="wedding-details" className="relative py-20 px-4 sm:px-8 overflow-hidden bg-[#FAF7F2]">
      {/* Background radial shimmer */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 bg-radial-gradient from-[#EFE6FB]/50 via-transparent to-transparent opacity-80" 
      />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
          className="relative rounded-[30px] border-2 border-[#C5A059]/75 bg-gradient-to-b from-[#FFFDF9] via-[#FAF6EE] to-[#F5ECE0] p-8 sm:p-14 text-center shadow-[0_25px_60px_-15px_rgba(35,7,56,0.18),0_0_40px_rgba(212,175,55,0.2)]"
        >
          {/* Inner Inset Border */}
          <div className="pointer-events-none absolute inset-3 rounded-[24px] border border-[#C5A059]/40" />
          <div className="pointer-events-none absolute inset-4 rounded-[20px] border border-[#C5A059]/20" />

          {/* Ornate Gold Corners */}
          <span className="pointer-events-none absolute left-3.5 top-3.5 h-6 w-6 border-l-2 border-t-2 border-[#D4AF37]" />
          <span className="pointer-events-none absolute right-3.5 top-3.5 h-6 w-6 border-r-2 border-t-2 border-[#D4AF37]" />
          <span className="pointer-events-none absolute bottom-3.5 left-3.5 h-6 w-6 border-b-2 border-l-2 border-[#D4AF37]" />
          <span className="pointer-events-none absolute bottom-3.5 right-3.5 h-6 w-6 border-b-2 border-r-2 border-[#D4AF37]" />

          {/* Faith Finial */}
          <div className="mb-3 flex justify-center">
            <CrossOrnament size={32} />
          </div>

          <p className="font-sans text-[0.68rem] uppercase tracking-[0.45em] text-[#8C6D2A] font-semibold">
            Wedding Invitation Card
          </p>

          <h2 className="mt-2 font-serif italic text-3xl sm:text-4xl text-purple-gradient leading-tight">
            Joshua &amp; Asha
          </h2>

          <div className="my-3.5 flex justify-center">
            <GoldDivider width="w-40 sm:w-56" />
          </div>

          <p className="mx-auto max-w-[38ch] font-body italic text-base sm:text-lg text-[#5C4566] leading-relaxed">
            Together with their parents, cordially invite you to celebrate the covenant of their Holy Matrimony.
          </p>

          {/* Two Event Highlights Grid */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-5 text-left max-w-xl mx-auto">
            
            {/* Christian Wedding Service */}
            <div className="rounded-[20px] border border-[#C5A059]/50 bg-white/80 p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#521782] mb-2">
                <Church className="h-4 w-4 text-[#8C6D2A]" />
                <span className="font-sans text-[0.68rem] uppercase tracking-[0.25em] font-semibold text-[#8C6D2A]">
                  Holy Matrimony
                </span>
              </div>
              <h3 className="font-serif italic text-xl text-[#230738] leading-snug">
                Christian Wedding Service
              </h3>
              <div className="mt-2.5 flex items-center gap-2 text-[#521782]">
                <Clock className="h-4 w-4" />
                <span className="font-sans text-base font-semibold tracking-wider">
                  5:30 PM
                </span>
              </div>
            </div>

            {/* Dinner & Reception */}
            <div className="rounded-[20px] border border-[#C5A059]/50 bg-white/80 p-5 shadow-sm">
              <div className="flex items-center gap-2 text-[#521782] mb-2">
                <Wine className="h-4 w-4 text-[#8C6D2A]" />
                <span className="font-sans text-[0.68rem] uppercase tracking-[0.25em] font-semibold text-[#8C6D2A]">
                  Evening Banquet
                </span>
              </div>
              <h3 className="font-serif italic text-xl text-[#230738] leading-snug">
                Dinner &amp; Reception
              </h3>
              <div className="mt-2.5 flex items-center gap-2 text-[#521782]">
                <Clock className="h-4 w-4" />
                <span className="font-sans text-base font-semibold tracking-wider">
                  7:30 PM
                </span>
              </div>
            </div>

          </div>

          {/* Date and Venue Callout */}
          <div className="mt-7 space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A059]/60 bg-white/90 px-5 py-2 shadow-sm">
              <Calendar className="h-4 w-4 text-[#8C6D2A]" />
              <span className="font-serif text-lg text-[#230738] font-medium tracking-wide">
                Date: {weddingConfig.date.shortDate}
              </span>
            </div>

            <div className="flex items-center justify-center gap-2 text-[#5C4566] text-sm">
              <MapPin className="h-4 w-4 text-[#8C6D2A]" />
              <span className="font-serif italic text-base">
                Venue: Venue details coming soon
              </span>
            </div>
          </div>

          {/* Add to Google Calendar Action Button */}
          <div className="mt-8">
            <button
              onClick={handleGoogleCalendar}
              className="group relative inline-flex items-center justify-center gap-2.5 rounded-full border border-[#B08A3F] bg-gradient-to-r from-[#230738] via-[#4E144A] to-[#230738] px-7 py-3 font-sans text-xs uppercase tracking-[0.22em] text-[#FAF7F2] font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <CalendarPlus className="h-4 w-4 text-[#E5C578] transition-transform group-hover:scale-110" />
              <span>Add to Google Calendar</span>
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
};
