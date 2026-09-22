import React from 'react';

interface CrossOrnamentProps {
  className?: string;
  size?: number;
}

export const CrossOrnament: React.FC<CrossOrnamentProps> = ({ className = '', size = 36 }) => {
  return (
    <div className={`relative inline-flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size * 1.3}
        viewBox="0 0 40 52"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#D4AF37] filter drop-shadow-[0_0_8px_rgba(212,175,55,0.6)]"
      >
        {/* Subtle glow halo ring */}
        <circle cx="20" cy="18" r="10" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 2" opacity="0.6" />
        
        {/* Vertical Beam */}
        <path
          d="M19 2H21V50H19V2Z"
          fill="url(#goldCrossGradient)"
        />
        {/* Horizontal Crossbar */}
        <path
          d="M7 17H33V19H7V17Z"
          fill="url(#goldCrossGradient)"
        />
        
        {/* Center decorative diamond */}
        <rect x="17" y="15" width="6" height="6" transform="rotate(45 20 18)" fill="#FAF7F2" stroke="#B08A3F" strokeWidth="0.8" />
        <circle cx="20" cy="18" r="1.2" fill="#521782" />

        {/* Serifs / Ends decorative finials */}
        {/* Top */}
        <path d="M17 3H23V1.5H17V3Z" fill="#D4AF37" />
        {/* Bottom */}
        <path d="M16 50.5H24V52H16V50.5Z" fill="#D4AF37" />
        {/* Left */}
        <path d="M7 15H8.5V21H7V15Z" fill="#D4AF37" />
        {/* Right */}
        <path d="M31.5 15H33V21H31.5V15Z" fill="#D4AF37" />

        <defs>
          <linearGradient id="goldCrossGradient" x1="7" y1="2" x2="33" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#D4AF37" />
            <stop offset="0.5" stopColor="#FFF1B8" />
            <stop offset="1" stopColor="#B08A3F" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
