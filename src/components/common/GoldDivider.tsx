import React from 'react';

interface GoldDividerProps {
  className?: string;
  width?: string;
}

export const GoldDivider: React.FC<GoldDividerProps> = ({ className = '', width = 'w-40 sm:w-56' }) => {
  return (
    <div className={`inline-flex items-center justify-center gap-2 ${width} ${className}`} aria-hidden="true">
      {/* Outer tiny diamond */}
      <span className="h-1 w-1 shrink-0 rotate-45 bg-[#B08A3F]" />
      
      {/* Left gradient line */}
      <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-[#D4AF37]/90 shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
      
      {/* Left accent diamond */}
      <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.7)]" />
      
      {/* Center Royal Medallion with Purple Jewel */}
      <span className="relative grid h-4 w-4 shrink-0 rotate-45 place-items-center border border-[#D4AF37] bg-[#230738] shadow-[0_0_12px_rgba(212,175,55,0.6)]">
        <span className="h-1.5 w-1.5 rounded-full bg-[#9c27b0] shadow-[0_0_6px_rgba(156,39,176,0.9)]" />
      </span>
      
      {/* Right accent diamond */}
      <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-[#D4AF37] shadow-[0_0_8px_rgba(212,175,55,0.7)]" />
      
      {/* Right gradient line */}
      <span className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-[#D4AF37]/90 shadow-[0_0_8px_rgba(212,175,55,0.5)]" />
      
      {/* Outer tiny diamond */}
      <span className="h-1 w-1 shrink-0 rotate-45 bg-[#B08A3F]" />
    </div>
  );
};
