import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { SectionHeader } from './common/SectionHeader';
import { CalendarPlus, Heart } from 'lucide-react';

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
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Joshua & Asha//Christian Wedding Invitation//EN',
      'BEGIN:VEVENT',
      'SUMMARY:Joshua & Asha - Holy Wedding Ceremony',
      'DESCRIPTION:Christian Wedding Ceremony & Reception for Joshua & Asha.',
      'DTSTART:20261017T120000Z',
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
    <section id="countdown" className="relative scroll-mt-20 overflow-hidden px-5 py-16 sm:py-20">
      <div className="relative mx-auto max-w-2xl text-center">
        {/* Section Header */}
        <SectionHeader
          preTitle="Counting Down"
          title="Counting the Days"
          subtitle="Until we welcome you to celebrate with us"
          dividerWidth="w-[180px]"
        />

        {timeLeft.hasPassed ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-10 rounded-[24px] velvet-card p-8 sm:p-12 text-[#230738] shadow-xl"
          >
            <Heart className="mx-auto h-10 w-10 text-[#521782] fill-[#521782]/30 mb-3 animate-pulse" />
            <h3 className="font-serif italic text-2xl sm:text-4xl text-purple-foil">
              The day we prayed for has arrived. ❤️
            </h3>
            <p className="mt-2 font-body text-lg text-[#521782]">
              Joshua &amp; Asha are now united as one under God.
            </p>
          </motion.div>
        ) : (
          /* Exact Velvet Homecoming 4-grid countdown */
          <div className="mt-8 grid grid-cols-4 gap-2.5 sm:gap-4">
            {[
              { label: 'Days', value: timeLeft.days },
              { label: 'Hours', value: timeLeft.hours },
              { label: 'Minutes', value: timeLeft.minutes },
              { label: 'Seconds', value: timeLeft.seconds },
            ].map((unit) => (
              <div
                key={unit.label}
                className="relative flex flex-col items-center justify-center gap-1 sm:gap-2 rounded-2xl px-1 py-5 sm:py-8 velvet-card"
              >
                {/* 4 Corner Brackets */}
                <span aria-hidden="true" className="pointer-events-none">
                  <span className="absolute top-[6px] left-[6px] w-[10px] h-[10px] border-t border-l border-[#B08A3F]/70 rounded-tl-[3px]" />
                  <span className="absolute top-[6px] right-[6px] w-[10px] h-[10px] border-t border-r border-[#B08A3F]/70 rounded-tr-[3px]" />
                  <span className="absolute bottom-[6px] left-[6px] w-[10px] h-[10px] border-b border-l border-[#B08A3F]/70 rounded-bl-[3px]" />
                  <span className="absolute bottom-[6px] right-[6px] w-[10px] h-[10px] border-b border-r border-[#B08A3F]/70 rounded-br-[3px]" />
                </span>

                {/* Big number */}
                <span className="tabular-nums leading-none font-serif font-semibold text-[clamp(1.5rem,6.6vw,3.2rem)] text-[#230738]">
                  {String(unit.value).padStart(2, '0')}
                </span>

                {/* Label */}
                <span className="text-[0.52rem] uppercase tracking-[0.18em] sm:text-[0.66rem] sm:tracking-[0.28em] font-sans font-semibold text-[#8C6D2A]">
                  {unit.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Save The Date Button */}
        <div className="mt-10">
          <button
            onClick={handleAddToCalendar}
            className="inline-flex items-center gap-2.5 rounded-full border border-[#B08A3F] bg-white/80 px-6 py-2.5 font-sans text-xs uppercase tracking-[0.25em] text-[#230738] font-semibold shadow-sm hover:bg-[#FAF7F2] hover:border-[#8C6D2A] transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <CalendarPlus className="h-4 w-4 text-[#8C6D2A]" />
            <span>Save The Date (iCal / Google)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
