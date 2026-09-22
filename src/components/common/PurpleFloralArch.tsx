import React from 'react';

interface PurpleFloralArchProps {
  className?: string;
  width?: number | string;
}

export const PurpleFloralArch: React.FC<PurpleFloralArchProps> = ({ 
  className = "w-full max-w-[540px]", 
  width = "100%" 
}) => {
  return (
    <div className={`relative mx-auto select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 600 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width, height: 'auto', overflow: 'visible' }}
      >
        <defs>
          {/* Deep Royal Purple Petal Gradient */}
          <radialGradient id="rosePurpleDark" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#8A2BE2" />
            <stop offset="45%" stopColor="#521782" />
            <stop offset="85%" stopColor="#30084A" />
            <stop offset="100%" stopColor="#1E0330" />
          </radialGradient>

          {/* Velvet Lilac / Lavender Petal Gradient */}
          <radialGradient id="roseLilacLight" cx="45%" cy="35%" r="55%">
            <stop offset="0%" stopColor="#F1E3FF" />
            <stop offset="35%" stopColor="#C77DFF" />
            <stop offset="75%" stopColor="#7B2CBF" />
            <stop offset="100%" stopColor="#4A154B" />
          </radialGradient>

          {/* Magenta Violet Accent */}
          <linearGradient id="violetAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E0AAFF" />
            <stop offset="50%" stopColor="#9D4EDD" />
            <stop offset="100%" stopColor="#521782" />
          </linearGradient>

          {/* Brushed Gold Leaf Gradient */}
          <linearGradient id="goldLeafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F9E8A2" />
            <stop offset="40%" stopColor="#D4AF37" />
            <stop offset="80%" stopColor="#8C6D2A" />
            <stop offset="100%" stopColor="#5C4215" />
          </linearGradient>

          {/* Sage Green & Gold Eucalyptus Gradient */}
          <linearGradient id="sageEucalyptus" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9AB096" />
            <stop offset="50%" stopColor="#5C7558" />
            <stop offset="100%" stopColor="#384936" />
          </linearGradient>

          {/* Glow Filter */}
          <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- Central Curving Botanical Vine Garlands --- */}
        <path
          d="M 50 140 C 140 60, 240 50, 300 50 C 360 50, 460 60, 550 140"
          stroke="url(#goldLeafGrad)"
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
          opacity="0.85"
        />
        <path
          d="M 90 135 C 180 75, 250 65, 300 65 C 350 65, 420 75, 510 135"
          stroke="url(#sageEucalyptus)"
          strokeWidth="1.8"
          fill="none"
          strokeLinecap="round"
          opacity="0.75"
        />

        {/* --- Eucalyptus & Golden Foliage Left Side --- */}
        <g id="foliage-left">
          <ellipse cx="140" cy="100" rx="14" ry="8" transform="rotate(-30 140 100)" fill="url(#sageEucalyptus)" opacity="0.9" />
          <ellipse cx="165" cy="88" rx="12" ry="7" transform="rotate(-15 165 88)" fill="url(#goldLeafGrad)" opacity="0.85" />
          <ellipse cx="185" cy="80" rx="10" ry="6" transform="rotate(10 185 80)" fill="url(#sageEucalyptus)" opacity="0.9" />
          <ellipse cx="80" cy="130" rx="15" ry="9" transform="rotate(-45 80 130)" fill="url(#sageEucalyptus)" opacity="0.8" />
          <ellipse cx="105" cy="115" rx="13" ry="8" transform="rotate(-35 105 115)" fill="url(#goldLeafGrad)" opacity="0.9" />
          <circle cx="65" cy="138" r="3" fill="#D4AF37" />
          <circle cx="85" cy="122" r="2.5" fill="#F9E8A2" />
          <circle cx="105" cy="112" r="3" fill="#D4AF37" />
        </g>

        {/* --- Eucalyptus & Golden Foliage Right Side (Mirrored) --- */}
        <g id="foliage-right">
          <ellipse cx="520" cy="130" rx="15" ry="9" transform="rotate(45 520 130)" fill="url(#sageEucalyptus)" opacity="0.8" />
          <ellipse cx="495" cy="115" rx="13" ry="8" transform="rotate(35 495 115)" fill="url(#goldLeafGrad)" opacity="0.9" />
          <ellipse cx="460" cy="100" rx="14" ry="8" transform="rotate(30 460 100)" fill="url(#sageEucalyptus)" opacity="0.9" />
          <ellipse cx="435" cy="88" rx="12" ry="7" transform="rotate(15 435 88)" fill="url(#goldLeafGrad)" opacity="0.85" />
          <ellipse cx="415" cy="80" rx="10" ry="6" transform="rotate(-10 415 80)" fill="url(#sageEucalyptus)" opacity="0.9" />
          <circle cx="535" cy="138" r="3" fill="#D4AF37" />
          <circle cx="515" cy="122" r="2.5" fill="#F9E8A2" />
          <circle cx="495" cy="112" r="3" fill="#D4AF37" />
        </g>

        {/* --- Cascading Lavender Sprigs Left --- */}
        <g id="lavender-left">
          <path d="M 170 85 C 160 110, 150 130, 140 150" stroke="#5C7558" strokeWidth="1.5" fill="none" />
          <ellipse cx="140" cy="148" rx="4" ry="7" transform="rotate(-20 140 148)" fill="url(#violetAccent)" />
          <ellipse cx="144" cy="140" rx="4" ry="6" transform="rotate(25 144 140)" fill="#7B2CBF" />
          <ellipse cx="148" cy="132" rx="4.5" ry="6.5" transform="rotate(-15 148 132)" fill="url(#roseLilacLight)" />
          <ellipse cx="153" cy="122" rx="4" ry="6" transform="rotate(20 153 122)" fill="#9D4EDD" />
          <ellipse cx="158" cy="112" rx="4" ry="6" transform="rotate(-10 158 112)" fill="url(#rosePurpleDark)" />
          <ellipse cx="164" cy="100" rx="3.5" ry="5.5" transform="rotate(15 164 100)" fill="url(#violetAccent)" />
        </g>

        {/* --- Cascading Lavender Sprigs Right --- */}
        <g id="lavender-right">
          <path d="M 430 85 C 440 110, 450 130, 460 150" stroke="#5C7558" strokeWidth="1.5" fill="none" />
          <ellipse cx="460" cy="148" rx="4" ry="7" transform="rotate(20 460 148)" fill="url(#violetAccent)" />
          <ellipse cx="456" cy="140" rx="4" ry="6" transform="rotate(-25 456 140)" fill="#7B2CBF" />
          <ellipse cx="452" cy="132" rx="4.5" ry="6.5" transform="rotate(15 452 132)" fill="url(#roseLilacLight)" />
          <ellipse cx="447" cy="122" rx="4" ry="6" transform="rotate(-20 447 122)" fill="#9D4EDD" />
          <ellipse cx="442" cy="112" rx="4" ry="6" transform="rotate(10 442 112)" fill="url(#rosePurpleDark)" />
          <ellipse cx="436" cy="100" rx="3.5" ry="5.5" transform="rotate(-15 436 100)" fill="url(#violetAccent)" />
        </g>

        {/* --- Left Secondary Rose (Soft Lilac Blossom) --- */}
        <g id="rose-secondary-left" transform="translate(210, 68)">
          <circle cx="0" cy="0" r="28" fill="url(#roseLilacLight)" opacity="0.95" />
          <path d="M -24 -6 C -28 14, -10 26, 6 24 C 22 22, 28 6, 24 -10 C 20 -26, -4 -28, -20 -16 Z" fill="url(#rosePurpleDark)" opacity="0.4" />
          <path d="M -18 4 C -22 18, -6 25, 8 20 C 20 15, 22 0, 15 -12 C 8 -24, -10 -20, -18 4 Z" fill="url(#roseLilacLight)" />
          <path d="M -10 -8 C -14 2, -4 14, 6 10 C 14 6, 12 -6, 4 -10 C -4 -14, -8 -12, -10 -8 Z" fill="#521782" />
          <path d="M -4 -4 C -6 2, 0 8, 4 6 C 8 4, 6 -2, 2 -4 Z" fill="#E0AAFF" />
          <circle cx="0" cy="0" r="3" fill="#D4AF37" />
        </g>

        {/* --- Right Secondary Rose (Soft Lilac Blossom) --- */}
        <g id="rose-secondary-right" transform="translate(390, 68)">
          <circle cx="0" cy="0" r="28" fill="url(#roseLilacLight)" opacity="0.95" />
          <path d="M 24 -6 C 28 14, 10 26, -6 24 C -22 22, -28 6, -24 -10 C -20 -26, 4 -28, 20 -16 Z" fill="url(#rosePurpleDark)" opacity="0.4" />
          <path d="M 18 4 C 22 18, 6 25, -8 20 C -20 15, -22 0, -15 -12 C -8 -24, 10 -20, 18 4 Z" fill="url(#roseLilacLight)" />
          <path d="M 10 -8 C 14 2, 4 14, -6 10 C -14 6, -12 -6, -4 -10 C 4 -14, 8 -12, 10 -8 Z" fill="#521782" />
          <path d="M 4 -4 C 6 2, 0 8, -4 6 C -8 4, -6 -2, -2 -4 Z" fill="#E0AAFF" />
          <circle cx="0" cy="0" r="3" fill="#D4AF37" />
        </g>

        {/* --- Hydrangea Florets Left & Right Accents --- */}
        <g id="hydrangeas">
          <circle cx="255" cy="52" r="8" fill="url(#violetAccent)" opacity="0.9" />
          <circle cx="245" cy="62" r="7.5" fill="url(#roseLilacLight)" opacity="0.9" />
          <circle cx="265" cy="64" r="7" fill="#7B2CBF" opacity="0.85" />
          <circle cx="255" cy="52" r="2" fill="#F9E8A2" />
          
          <circle cx="345" cy="52" r="8" fill="url(#violetAccent)" opacity="0.9" />
          <circle cx="355" cy="62" r="7.5" fill="url(#roseLilacLight)" opacity="0.9" />
          <circle cx="335" cy="64" r="7" fill="#7B2CBF" opacity="0.85" />
          <circle cx="345" cy="52" r="2" fill="#F9E8A2" />
        </g>

        {/* --- GRAND CENTRAL ROYAL PURPLE ENGLISH ROSE --- */}
        <g id="central-royal-rose" transform="translate(300, 48)">
          <circle cx="0" cy="0" r="42" fill="#230738" opacity="0.25" filter="url(#goldGlow)" />
          
          {/* Deep Velvet Outer Guard Petals */}
          <path d="M 0 -38 C 22 -38, 38 -20, 38 0 C 38 20, 20 38, 0 38 C -20 38, -38 20, -38 0 C -38 -20, -20 -38, 0 -38 Z" fill="url(#rosePurpleDark)" />
          
          {/* Sculpted organic folds */}
          <path d="M -30 -10 C -36 12, -18 32, 4 32 C 24 32, 34 16, 32 -6 C 30 -24, 8 -34, -14 -28 C -26 -24, -28 -18, -30 -10 Z" fill="#521782" />
          <path d="M 28 -8 C 34 14, 16 30, -6 30 C -22 30, -30 14, -26 -4 C -22 -20, 0 -30, 18 -26 C 26 -22, 26 -14, 28 -8 Z" fill="#6A1B9A" opacity="0.9" />

          {/* Velvet Lilac highlights */}
          <path d="M -18 -18 C -26 -6, -24 16, -10 24 C 6 30, 22 22, 22 8 C 22 -8, 12 -22, -6 -22 C -12 -22, -16 -20, -18 -18 Z" fill="url(#roseLilacLight)" />
          <path d="M 16 -16 C 24 -4, 20 18, 6 22 C -8 26, -20 16, -18 2 C -16 -12, -4 -22, 10 -20 C 14 -20, 15 -18, 16 -16 Z" fill="#8E24AA" opacity="0.95" />

          {/* Core Petal Cup */}
          <path d="M -12 -10 C -16 2, -8 14, 4 12 C 14 10, 16 -2, 8 -10 C 2 -16, -8 -16, -12 -10 Z" fill="#38006B" />
          <path d="M 10 -6 C 14 4, 6 12, -2 12 C -10 12, -12 2, -6 -6 C 0 -12, 6 -12, 10 -6 Z" fill="url(#violetAccent)" />

          {/* Rose Center Golden Stamen Specks */}
          <circle cx="-2" cy="-1" r="3.5" fill="#D4AF37" />
          <circle cx="3" cy="2" r="2.5" fill="#F9E8A2" />
          <circle cx="-4" cy="3" r="2" fill="#D4AF37" />
          <circle cx="2" cy="-4" r="2" fill="#F9E8A2" />
        </g>

        {/* --- Gold Dust & Shimmering Spores --- */}
        <g id="gold-spores" filter="url(#goldGlow)">
          <circle cx="280" cy="18" r="1.5" fill="#F9E8A2" opacity="0.9" />
          <circle cx="320" cy="16" r="2" fill="#D4AF37" opacity="0.9" />
          <circle cx="230" cy="35" r="1.5" fill="#F9E8A2" opacity="0.8" />
          <circle cx="370" cy="35" r="1.8" fill="#D4AF37" opacity="0.8" />
          <circle cx="180" cy="65" r="1.5" fill="#F9E8A2" opacity="0.75" />
          <circle cx="420" cy="65" r="1.5" fill="#D4AF37" opacity="0.75" />
        </g>
      </svg>
    </div>
  );
};
