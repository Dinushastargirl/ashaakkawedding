import React from 'react';

interface PurpleFloralDividerProps {
  className?: string;
  width?: string;
}

export const PurpleFloralDivider: React.FC<PurpleFloralDividerProps> = ({
  className = '',
  width = 'w-48 sm:w-64',
}) => {
  return (
    <div className={`relative mx-auto flex items-center justify-center select-none pointer-events-none my-3 ${width} ${className}`}>
      {/* Left Golden Vine with Leaves */}
      <div className="flex-1 flex items-center">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#B08A3F] to-[#D4AF37]" />
        {/* Tiny Leaf Accent */}
        <span 
          className="inline-block w-2.5 h-1.5 rounded-full -ml-1 rotate-[35deg]"
          style={{ background: 'linear-gradient(135deg, #D4AF37, #8C6D2A)' }} 
        />
      </div>

      {/* Center Purple Rose Floret Badge */}
      <div className="mx-2 flex items-center gap-1.5 shrink-0">
        <span className="h-1.5 w-1.5 rotate-45 bg-[#D4AF37]" />
        <span 
          className="relative grid h-6 w-6 place-items-center rounded-full shadow-[0_0_8px_rgba(157,78,221,0.5)]"
          style={{
            background: 'radial-gradient(circle at 35% 35%, #9D4EDD, #521782 70%, #230738 100%)',
            border: '1px solid #D4AF37'
          }}
        >
          {/* Inner Golden Stamen */}
          <span className="h-1.5 w-1.5 rounded-full bg-[#F9E8A2]" />
        </span>
        <span className="h-1.5 w-1.5 rotate-45 bg-[#D4AF37]" />
      </div>

      {/* Right Golden Vine with Leaves */}
      <div className="flex-1 flex items-center">
        <span 
          className="inline-block w-2.5 h-1.5 rounded-full -mr-1 -rotate-[35deg]"
          style={{ background: 'linear-gradient(135deg, #8C6D2A, #D4AF37)' }} 
        />
        <div className="h-[1px] w-full bg-gradient-to-l from-transparent via-[#B08A3F] to-[#D4AF37]" />
      </div>
    </div>
  );
};
