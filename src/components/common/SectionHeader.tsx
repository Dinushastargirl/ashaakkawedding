import React from 'react';
import { PurpleFloralDivider } from './PurpleFloralDivider';

interface SectionHeaderProps {
  preTitle?: string;
  title: string;
  subtitle?: string;
  dividerWidth?: string;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  preTitle,
  title,
  subtitle,
  dividerWidth = 'w-[200px] sm:w-[260px]',
  className = '',
}) => {
  return (
    <div className={`mb-10 text-center sm:mb-14 ${className}`}>
      {/* 5-Diamond Ornament */}
      <span className="mb-3 inline-flex items-center justify-center gap-2.5" aria-hidden="true">
        <span className="h-[3px] w-[3px] rotate-45 bg-[#B08A3F]/70" />
        <span className="h-1.5 w-1.5 rotate-45 bg-[#B08A3F] shadow-[0_0_8px_rgba(176,138,63,0.7)]" />
        <span className="h-2.5 w-2.5 rotate-45 border border-[#D4AF37] bg-[#521782]/90 shadow-[0_0_12px_rgba(82,23,130,0.7)]" />
        <span className="h-1.5 w-1.5 rotate-45 bg-[#B08A3F] shadow-[0_0_8px_rgba(176,138,63,0.7)]" />
        <span className="h-[3px] w-[3px] rotate-45 bg-[#B08A3F]/70" />
      </span>

      {preTitle && (
        <p className="mb-2 font-sans text-[0.66rem] sm:text-[0.7rem] uppercase tracking-[0.42em] sm:tracking-[0.46em] font-bold text-[#8C6D2A]">
          {preTitle}
        </p>
      )}

      <h2 className="mx-auto w-fit font-serif italic font-normal text-[clamp(2rem,6vw,3.2rem)] leading-tight text-purple-foil tracking-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mx-auto mt-2 max-w-[48ch] font-body italic text-[1.05rem] sm:text-[1.12rem] text-[#6B466F] leading-relaxed">
          {subtitle}
        </p>
      )}

      <div className="mt-3 flex justify-center">
        <PurpleFloralDivider width={dividerWidth} />
      </div>
    </div>
  );
};
