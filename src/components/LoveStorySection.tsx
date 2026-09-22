import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../data/weddingConfig';
import { SectionHeader } from './common/SectionHeader';
import { GoldDivider } from './common/GoldDivider';
import { Heart, Sparkles } from 'lucide-react';

export const LoveStorySection: React.FC = () => {
  const milestones = [
    {
      year: "2021",
      title: "The Beginning",
      description: "A blessed introduction through family and friends that gently opened the door to an extraordinary friendship.",
    },
    {
      year: "2023",
      title: "Growing in Faith",
      description: "Shared prayers, deep conversations, and unconditional support deepened our love rooted in Christ.",
    },
    {
      year: "2025",
      title: "The Sacred Promise",
      description: "With joyful hearts and heartfelt prayers, we committed our lives to one another and to God's purpose.",
    },
    {
      year: "2026",
      title: "Forever Begins",
      description: "Surrounded by our beloved families and friends, we enter the holy covenant of marriage on 17th October 2026.",
    },
  ];

  return (
    <section id="story" className="relative mx-auto max-w-4xl scroll-mt-20 px-5 py-14 sm:px-8 sm:py-20">
      {/* Section Header */}
      <SectionHeader
        preTitle="A Love Story"
        title="Two Hearts, One Celebration"
        dividerWidth="w-[230px]"
      />

      {/* Main Couple Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.9 }}
        className="relative mx-auto max-w-2xl rounded-[24px] px-7 py-10 text-center sm:px-12 sm:py-14 velvet-card"
      >
        {/* 4 Corner Brackets */}
        <span aria-hidden="true" className="pointer-events-none">
          <span className="absolute top-[13px] left-[13px] w-[18px] h-[18px] border-t border-l border-[#C3A45C] rounded-tl-[3px]" />
          <span className="absolute top-[13px] right-[13px] w-[18px] h-[18px] border-t border-r border-[#C3A45C] rounded-tr-[3px]" />
          <span className="absolute bottom-[13px] left-[13px] w-[18px] h-[18px] border-b border-l border-[#C3A45C] rounded-bl-[3px]" />
          <span className="absolute bottom-[13px] right-[13px] w-[18px] h-[18px] border-b border-r border-[#C3A45C] rounded-br-[3px]" />
        </span>

        {/* Inner Inset Border */}
        <span aria-hidden="true" className="pointer-events-none absolute inset-2 rounded-[20px] border border-[#C3A45C]/40" />

        {/* Top Circular Medallion Badge */}
        <span 
          className="mb-4 inline-grid h-16 w-16 place-items-center rounded-full"
          style={{
            background: 'radial-gradient(circle at 35% 30%, #521782, #230738)',
            border: '1px solid rgba(176, 138, 63, 0.75)',
            boxShadow: '0 0 0 4px rgba(251, 245, 234, 0.9), 0 0 0 5px rgba(176, 138, 63, 0.4), 0 10px 20px -10px rgba(35, 7, 56, 0.35)',
          }}
        >
          <Heart className="h-7 w-7 text-[#D4AF37] fill-[#D4AF37]/30" />
        </span>

        {/* Couple Tag */}
        <div className="mt-1 flex flex-col items-center gap-1.5">
          <p className="font-sans text-[0.62rem] uppercase tracking-[0.38em] font-semibold text-[#521782]">
            The Newlyweds
          </p>
          <h3 className="font-serif italic font-medium text-[clamp(1.5rem,4.4vw,2.2rem)] leading-[1.35] text-purple-foil">
            Joshua <span className="font-script text-[0.8em] text-[#521782] mx-1">&amp;</span> Asha
          </h3>
          <div className="mt-1">
            <GoldDivider width="w-[120px]" />
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-[50ch] font-body text-[1.1rem] text-[#4A154B] leading-[1.9]">
          {weddingConfig.loveStory.quote}
        </p>

        <p className="mx-auto mt-2 max-w-[46ch] font-body italic text-[0.98rem] text-[#7A4B7E]">
          {weddingConfig.loveStory.subtext}
        </p>
      </motion.div>

      {/* Vertical Milestone Spine Timeline (Velvet Homecoming style) */}
      <div className="relative mx-auto mt-12 max-w-2xl pl-[4.25rem] sm:mt-16 sm:pl-28">
        {/* Continuous Spine Line */}
        <span 
          aria-hidden="true" 
          className="pointer-events-none absolute bottom-3 left-[1.6rem] top-3 w-px sm:left-[3.1rem]" 
          style={{
            background: 'linear-gradient(180deg, transparent, rgba(176, 138, 63, 0.7) 12%, rgba(176, 138, 63, 0.7) 88%, transparent)'
          }}
        />

        <div className="flex flex-col gap-8 sm:gap-10">
          {milestones.map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.12 }}
              className="relative"
            >
              {/* Year Circular Node on Left */}
              <span 
                aria-hidden="true" 
                className="absolute top-1 grid h-[3.2rem] w-[3.2rem] -translate-x-[calc(100%+1.1rem)] place-items-center rounded-full text-center leading-none sm:h-16 sm:w-16 sm:-translate-x-[calc(100%+1.4rem)] z-10"
                style={{
                  background: 'radial-gradient(circle at 35% 30%, #521782, #230738)',
                  border: '1px solid rgba(176, 138, 63, 0.75)',
                  boxShadow: '0 0 0 4px rgba(251, 245, 234, 0.9), 0 0 0 5px rgba(176, 138, 63, 0.4), 0 10px 20px -10px rgba(35, 7, 56, 0.35)',
                }}
              >
                <span className="font-serif font-bold text-[#F5E6C7] text-sm sm:text-base">
                  {item.year}
                </span>
              </span>

              {/* Milestone Card */}
              <div className="relative rounded-[20px] px-6 py-6 text-left sm:px-8 sm:py-7 velvet-card">
                {/* 4 Corner brackets */}
                <span aria-hidden="true" className="pointer-events-none">
                  <span className="absolute top-[10px] left-[10px] w-[13px] h-[13px] border-t border-l border-[#C3A45C]/70 rounded-tl-[3px]" />
                  <span className="absolute top-[10px] right-[10px] w-[13px] h-[13px] border-t border-r border-[#C3A45C]/70 rounded-tr-[3px]" />
                  <span className="absolute bottom-[10px] left-[10px] w-[13px] h-[13px] border-b border-l border-[#C3A45C]/70 rounded-bl-[3px]" />
                  <span className="absolute bottom-[10px] right-[10px] w-[13px] h-[13px] border-b border-r border-[#C3A45C]/70 rounded-br-[3px]" />
                </span>

                <h4 className="font-serif italic font-medium text-[#230738] text-[clamp(1.15rem,3.6vw,1.45rem)] tracking-[0.01em]">
                  {item.title}
                </h4>

                <div 
                  className="my-2.5 h-px w-16" 
                  style={{ background: 'linear-gradient(90deg, rgba(176, 138, 63, 0.75), transparent)' }} 
                />

                <p className="font-body text-[1.05rem] text-[#4A154B] leading-[1.8]">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* Final Callout: And so, forever begins */}
          <div className="relative flex items-center gap-3 pt-2">
            <span 
              className="grid h-12 w-12 sm:h-14 sm:w-14 -translate-x-[calc(100%+1.1rem)] sm:-translate-x-[calc(100%+1.4rem)] place-items-center rounded-full"
              style={{
                background: 'radial-gradient(circle at 35% 30%, #521782, #230738)',
                border: '1px solid rgba(176, 138, 63, 0.75)',
                boxShadow: '0 0 0 4px rgba(251, 245, 234, 0.9), 0 0 0 5px rgba(176, 138, 63, 0.4)',
              }}
            >
              <Sparkles className="h-5 w-5 text-[#E5C578]" />
            </span>
            <p className="font-script text-3xl sm:text-4xl text-[#230738] leading-none">
              And so, forever begins.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
