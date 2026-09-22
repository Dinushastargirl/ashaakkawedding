import React from 'react';
import { motion } from 'framer-motion';
import { GoldDivider } from './common/GoldDivider';
import { Church, Wine, Clock, Sparkles } from 'lucide-react';

export const TimelineSection: React.FC = () => {
  const steps = [
    {
      time: "5:30 PM",
      title: "The Wedding Ceremony",
      description: "Sacred vows, scripture readings, exchange of rings, and Holy Matrimony blessings.",
      icon: Church,
      badge: "Holy Matrimony"
    },
    {
      time: "7:30 PM",
      title: "Followed By Reception",
      description: "Celebratory welcome of the newlyweds, grand feast, toasts, and evening celebration.",
      icon: Wine,
      badge: "Evening Celebration"
    }
  ];

  return (
    <section id="timeline" className="relative py-20 px-4 sm:px-8 overflow-hidden bg-[#FAF7F2]">
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C5A059]/40 bg-white px-4 py-1 shadow-sm mb-3">
            <Sparkles className="h-3 w-3 text-[#B08A3F]" />
            <span className="font-sans text-[0.68rem] uppercase tracking-[0.35em] text-[#8C6D2A] font-semibold">
              The Flow Of Our Day
            </span>
          </div>

          <h2 className="font-serif italic text-3xl sm:text-5xl text-purple-gradient leading-tight">
            Wedding Timeline
          </h2>

          <div className="my-4 flex justify-center">
            <GoldDivider width="w-40 sm:w-52" />
          </div>

          <p className="font-sans text-xs uppercase tracking-[0.25em] text-[#521782] font-semibold">
            October 17 • A Day To Remember
          </p>
        </motion.div>

        {/* Timeline Path */}
        <div className="relative mt-14 max-w-xl mx-auto">
          {/* Vertical connecting gold line */}
          <div 
            aria-hidden="true" 
            className="absolute left-1/2 top-4 bottom-4 -translate-x-1/2 w-[2px] bg-gradient-to-b from-[#D4AF37] via-[#B08A3F] to-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.4)]"
          />

          <div className="space-y-12 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="relative flex flex-col items-center"
                >
                  {/* Center Node / Badge with Icon */}
                  <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#D4AF37] bg-[#230738] text-[#FAF7F2] shadow-[0_0_20px_rgba(212,175,55,0.5)]">
                    <Icon className="h-6 w-6 text-[#E5C578]" />
                  </div>

                  {/* Card below or side */}
                  <div className="mt-5 w-full max-w-md rounded-[22px] border border-[#C5A059]/60 bg-white p-6 shadow-[0_15px_35px_-10px_rgba(35,7,56,0.12)]">
                    {/* Time Pill */}
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-[#EFE6FB] px-3.5 py-1 border border-[#D4BEE4] mb-2">
                      <Clock className="h-3.5 w-3.5 text-[#521782]" />
                      <span className="font-sans text-xs sm:text-sm font-semibold text-[#3C1061] tracking-wider">
                        {step.time}
                      </span>
                    </div>

                    <h3 className="font-serif italic text-2xl text-[#230738]">
                      {step.title}
                    </h3>

                    <p className="mt-2 font-body text-base text-[#5C4566] leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
