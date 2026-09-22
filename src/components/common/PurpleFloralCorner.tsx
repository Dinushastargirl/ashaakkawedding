import React from 'react';

interface PurpleFloralCornerProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  className?: string;
  size?: number;
}

export const PurpleFloralCorner: React.FC<PurpleFloralCornerProps> = ({
  position = 'top-left',
  className = '',
  size = 110,
}) => {
  // Determine transforms based on corner position
  let transform = '';
  let positionClass = '';

  switch (position) {
    case 'top-left':
      positionClass = '-top-4 -left-4 sm:-top-6 sm:-left-6';
      transform = 'none';
      break;
    case 'top-right':
      positionClass = '-top-4 -right-4 sm:-top-6 sm:-right-6';
      transform = 'scaleX(-1)';
      break;
    case 'bottom-left':
      positionClass = '-bottom-4 -left-4 sm:-bottom-6 sm:-left-6';
      transform = 'scaleY(-1)';
      break;
    case 'bottom-right':
      positionClass = '-bottom-4 -right-4 sm:-bottom-6 sm:-right-6';
      transform = 'scale(-1, -1)';
      break;
  }

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute z-20 select-none ${positionClass} ${className}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform,
      }}
    >
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full drop-shadow-[0_4px_12px_rgba(35,7,56,0.25)]"
      >
        <defs>
          <radialGradient id={`cornerPurple_${position}`} cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#9D4EDD" />
            <stop offset="50%" stopColor="#521782" />
            <stop offset="100%" stopColor="#230738" />
          </radialGradient>

          <radialGradient id={`cornerLilac_${position}`} cx="35%" cy="35%" r="60%">
            <stop offset="0%" stopColor="#F5EDFF" />
            <stop offset="40%" stopColor="#C77DFF" />
            <stop offset="100%" stopColor="#7B2CBF" />
          </radialGradient>

          <linearGradient id={`cornerGold_${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9E8A2" />
            <stop offset="60%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#8C6D2A" />
          </linearGradient>

          <linearGradient id={`cornerGreen_${position}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#94B090" />
            <stop offset="100%" stopColor="#4A6546" />
          </linearGradient>
        </defs>

        {/* Golden Stem Framework */}
        <path
          d="M 12 12 Q 35 15 55 35 Q 75 55 95 62"
          stroke={`url(#cornerGold_${position})`}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.9"
        />
        <path
          d="M 12 12 Q 15 35 35 55 Q 55 75 62 95"
          stroke={`url(#cornerGold_${position})`}
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          opacity="0.9"
        />

        {/* Eucalyptus Leaves */}
        <ellipse cx="68" cy="42" rx="11" ry="6" transform="rotate(-15 68 42)" fill={`url(#cornerGreen_${position})`} />
        <ellipse cx="86" cy="54" rx="9" ry="5.5" transform="rotate(20 86 54)" fill={`url(#cornerGold_${position})`} opacity="0.9" />
        <ellipse cx="42" cy="68" rx="6" ry="11" transform="rotate(-15 42 68)" fill={`url(#cornerGreen_${position})`} />
        <ellipse cx="54" cy="86" rx="5.5" ry="9" transform="rotate(20 54 86)" fill={`url(#cornerGold_${position})`} opacity="0.9" />

        {/* Lavender Sprigs radiating outward */}
        <g opacity="0.95">
          <ellipse cx="80" cy="22" rx="3" ry="5.5" transform="rotate(40 80 22)" fill={`url(#cornerLilac_${position})`} />
          <ellipse cx="72" cy="18" rx="3.5" ry="6" transform="rotate(25 72 18)" fill="#521782" />
          <ellipse cx="62" cy="14" rx="3" ry="5" transform="rotate(10 62 14)" fill={`url(#cornerLilac_${position})`} />

          <ellipse cx="22" cy="80" rx="5.5" ry="3" transform="rotate(40 22 80)" fill={`url(#cornerLilac_${position})`} />
          <ellipse cx="18" cy="72" rx="6" ry="3.5" transform="rotate(25 18 72)" fill="#521782" />
          <ellipse cx="14" cy="62" rx="5" ry="3" transform="rotate(10 14 62)" fill={`url(#cornerLilac_${position})`} />
        </g>

        {/* Outer Lavender Rose */}
        <g transform="translate(48, 28)">
          <circle cx="0" cy="0" r="14" fill={`url(#cornerLilac_${position})`} />
          <path d="M -10 -4 C -12 8, -4 14, 6 12 C 14 10, 14 -2, 8 -8 C 2 -12, -6 -10, -10 -4 Z" fill="#521782" opacity="0.6" />
          <circle cx="0" cy="0" r="4" fill="#E0AAFF" />
          <circle cx="1" cy="-1" r="1.5" fill="#F9E8A2" />
        </g>

        {/* Main Corner Royal Purple Rose Blossom */}
        <g transform="translate(32, 32)">
          {/* Outer Petal Silhouette */}
          <circle cx="0" cy="0" r="22" fill={`url(#cornerPurple_${position})`} />
          
          {/* Layered Petal Folds */}
          <path d="M -16 -6 C -20 8, -8 20, 6 18 C 18 16, 20 2, 16 -12 C 12 -20, -2 -22, -12 -14 Z" fill="#6A1B9A" />
          <path d="M -12 4 C -15 14, -2 20, 8 16 C 16 12, 16 -2, 8 -10 C 0 -16, -10 -12, -12 4 Z" fill={`url(#cornerLilac_${position})`} opacity="0.8" />
          <path d="M -8 -4 C -10 4, -2 12, 6 8 C 12 6, 10 -4, 4 -8 C -2 -12, -6 -10, -8 -4 Z" fill="#30084A" />
          
          {/* Center Swirl */}
          <circle cx="0" cy="0" r="3.5" fill="#C77DFF" />
          <circle cx="-1" cy="-1" r="1.5" fill="#D4AF37" />
        </g>

        {/* Golden Stardust accent */}
        <circle cx="28" cy="12" r="1.5" fill="#F9E8A2" />
        <circle cx="12" cy="28" r="1.5" fill="#F9E8A2" />
        <circle cx="58" cy="58" r="2" fill="#D4AF37" />
        <circle cx="45" cy="5" r="1" fill="#D4AF37" />
        <circle cx="5" cy="45" r="1" fill="#D4AF37" />
      </svg>
    </div>
  );
};
