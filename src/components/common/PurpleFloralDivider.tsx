import React from 'react';

interface PurpleFloralDividerProps {
  className?: string;
  width?: string;
}

export const PurpleFloralDivider: React.FC<PurpleFloralDividerProps> = ({
  className = '',
  width = 'w-[140px] sm:w-[180px]',
}) => {
  return (
    <div className={`relative mx-auto flex items-center justify-center select-none pointer-events-none my-2 ${width} ${className}`}>
      {/* Velvet Homecoming Geometric Gold Filigree with Royal Purple Jewel Center */}
      <span className="inline-flex w-full items-center justify-center gap-2" aria-hidden="true">
        {/* Left gold diamond point */}
        <span className="h-1 w-1 shrink-0 rotate-45 bg-[#B08A3F]" />
        
        {/* Left gold gradient rule with ambient glow */}
        <span 
          className="h-px flex-1" 
          style={{
            background: 'linear-gradient(90deg, transparent, rgba(212, 178, 94, 0.95))',
            boxShadow: '0 0 8px rgba(176, 138, 63, 0.5)'
          }}
        />
        
        {/* Left gold accent diamond */}
        <span 
          className="h-1.5 w-1.5 shrink-0 rotate-45 bg-[#D4B25E]" 
          style={{ boxShadow: '0 0 10px rgba(212, 178, 94, 0.8)' }}
        />
        
        {/* Center Royal Purple Diamond Medallion */}
        <span 
          className="relative grid h-3.5 w-3.5 shrink-0 rotate-45 place-items-center" 
          style={{
            border: '1px solid #D4B25E',
            background: 'rgba(53, 8, 84, 0.85)',
            boxShadow: '0 0 14px rgba(176, 138, 63, 0.55)'
          }}
        >
          {/* Inner Purple Jewel */}
          <span 
            className="h-1.5 w-1.5 rounded-full" 
            style={{
              background: '#9D4EDD',
              boxShadow: '0 0 8px rgba(157, 78, 221, 0.95)'
            }}
          />
        </span>
        
        {/* Right gold accent diamond */}
        <span 
          className="h-1.5 w-1.5 shrink-0 rotate-45 bg-[#D4B25E]" 
          style={{ boxShadow: '0 0 10px rgba(212, 178, 94, 0.8)' }}
        />
        
        {/* Right gold gradient rule */}
        <span 
          className="h-px flex-1" 
          style={{
            background: 'linear-gradient(90deg, rgba(212, 178, 94, 0.95), transparent)',
            boxShadow: '0 0 8px rgba(176, 138, 63, 0.5)'
          }}
        />
        
        {/* Right gold diamond point */}
        <span className="h-1 w-1 shrink-0 rotate-45 bg-[#B08A3F]" />
      </span>
    </div>
  );
};
