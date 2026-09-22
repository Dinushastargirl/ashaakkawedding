import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { GoldDivider } from './common/GoldDivider';
import { CalendarPlus, Clock, Heart } from 'lucide-react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  hasPassed: boolean;
}

export const CountdownSection: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => calculateTimeLeft());

  function calculateTimeLeft(): TimeLeft {
    const targetDate = new Date(weddingConfig.date.isoDateTime).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, hasPassed: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / 1000 / 60) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds, hasPassed: false };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAddToCalendar = () => {
    // Generate .ics calendar download
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Joshua & Asha//Christian Wedding Invitation//EN',
      'BEGIN:VEVENT',
      'SUMMARY:Joshua & Asha - Holy Wedding Ceremony',
      'DESCRIPTION:Christian Wedding Ceremony & Reception for Joshua & Asha.',
      'DTSTART:20261017T120000Z', // 5:30 PM local (+05:30) = 12:00 UTC
      'DTEND:20261017T180000Z',
      'LOCATION:Venue details coming soon',
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR',
    ].join('\r\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Joshua-Asha-Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="countdown" className="relative py-20 px-4 sm:px-8 overflow-hidden bg-[#FAF7F2]">
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A059]/40 bg-white/70 px-4 py-1 shadow-sm mb-3">
            <Clock className="h-3 w-3 text-[#B08A3F]" />
            <span className="font-sans text-[0.68rem] uppercase tracking-[0.35em] text-[#8C6D2A] font-semibold">
              Counting Down To Forever
            </span>
          </div>

          <h2 className="font-serif italic text-3xl sm:text-5xl text-purple-gradient leading-tight">
            The Holy Wedding Day
          </h2>

          <div className="my-4 flex justify-center">
            <GoldDivider width="w-40 sm:w-52" />
          </div>

          <p className="font-sans text-xs sm:text-sm uppercase tracking-[0.25em] text-[#521782] font-semibold">
            {weddingConfig.date.shortDate} • 5:30 PM
          </p>
        </motion.div>

        {/* Countdown Units */}
        {timeLeft.hasPassed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-10 rounded-[24px] border border-[#D4AF37]/60 bg-gradient-to-r from-[#230738] to-[#4E144A] p-8 sm:p-12 text-[#FAF7F2] shadow-xl"
          >
            <Heart className="mx-auto h-10 w-10 text-[#D4AF37] fill-[#D4AF37]/30 mb-3 animate-pulse" />
            <h3 className="font-serif italic text-2xl sm:text-4xl text-[#FAF7F2]">
              The day we prayed for has arrived. ❤️
            </h3>
            <p className="mt-2 font-body text-lg text-[#EFE6FB]">
              Joshua &amp; Asha are now united as one under God.
            </p>
          </motion.div>
        ) : (
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto">
            {[
              { label: 'DAYS', value: timeLeft.days },
              { label: 'HOURS', value: timeLeft.hours },
              { label: 'MINUTES', value: timeLeft.minutes },
              { label: 'SECONDS', value: timeLeft.seconds },
            ].map((unit) => (
              <motion.div
                key={unit.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-[20px] border border-[#C5A059]/60 bg-white/90 p-5 sm:p-7 shadow-[0_15px_35px_-10px_rgba(35,7,56,0.12)] group hover:border-[#B08A3F] transition-all"
              >
                {/* Gold corner ornaments */}
                <span className="pointer-events-none absolute left-2 top-2 h-3.5 w-3.5 border-l border-t border-[#D4AF37]" />
                <span className="pointer-events-none absolute right-2 top-2 h-3.5 w-3.5 border-r border-t border-[#D4AF37]" />
                <span className="pointer-events-none absolute bottom-2 left-2 h-3.5 w-3.5 border-b border-l border-[#D4AF37]" />
                <span className="pointer-events-none absolute bottom-2 right-2 h-3.5 w-3.5 border-b border-r border-[#D4AF37]" />

                <div className="font-serif text-3xl sm:text-5xl font-semibold text-[#230738] tracking-tight">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="mt-1 font-sans text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.3em] text-[#8C6D2A] font-semibold">
                  {unit.label}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Add to Calendar Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10"
        >
          <button
            onClick={handleAddToCalendar}
            className="inline-flex items-center gap-2.5 rounded-full border border-[#C5A059] bg-white/80 px-6 py-2.5 font-sans text-xs uppercase tracking-[0.25em] text-[#230738] font-semibold shadow-sm hover:bg-[#FAF7F2] hover:border-[#8C6D2A] transition-all duration-300 active:scale-95"
          >
            <CalendarPlus className="h-4 w-4 text-[#8C6D2A]" />
            <span>Save The Date (Calendar)</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
