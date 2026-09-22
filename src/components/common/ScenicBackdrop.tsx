import React from 'react';

export const ScenicBackdrop: React.FC = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden select-none">
      {/* 1. Underlying Floral Motion Video from assets: inside.mp4 */}
      <video
        src="/inside.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-35 sm:opacity-40"
      />

      {/* 2. Scenic Radial Vignette: Royal Purple Shadows at edges, warm radiant glow at center */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 85% 65% at 50% 35%, rgba(251, 245, 234, 0.82) 0%, rgba(251, 245, 234, 0.90) 50%, rgba(240, 226, 255, 0.85) 75%, rgba(35, 7, 56, 0.65) 100%),
            radial-gradient(circle at 15% 15%, rgba(157, 78, 221, 0.25) 0%, transparent 50%),
            radial-gradient(circle at 85% 15%, rgba(157, 78, 221, 0.25) 0%, transparent 50%),
            radial-gradient(circle at 50% 90%, rgba(82, 23, 130, 0.35) 0%, transparent 60%)
          `
        }}
      />

      {/* 3. Scenic Botanical Canopy Hanging from Top Edge */}
      <div className="absolute top-0 left-0 right-0 h-28 sm:h-40 overflow-hidden opacity-90">
        <svg
          viewBox="0 0 1200 160"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="topCanopyPurple" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#350854" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#6A1B9A" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#9D4EDD" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="wisteriaPetal" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#C77DFF" />
              <stop offset="60%" stopColor="#7B2CBF" />
              <stop offset="100%" stopColor="#3A085A" />
            </linearGradient>
            <linearGradient id="canopyGold" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B08A3F" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#F9E8A2" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#B08A3F" stopOpacity="0.6" />
            </linearGradient>
          </defs>

          {/* Background foliage wash */}
          <path d="M0 0 L1200 0 L1200 45 Q 900 70 600 45 Q 300 70 0 45 Z" fill="url(#topCanopyPurple)" />

          {/* Delicate Top Gold Vine Filament */}
          <path d="M0 15 Q 300 35 600 20 Q 900 35 1200 15" stroke="url(#canopyGold)" strokeWidth="1.2" fill="none" />

          {/* Cascading Wisteria Clusters Left */}
          <g opacity="0.85">
            <ellipse cx="60" cy="40" rx="7" ry="12" fill="url(#wisteriaPetal)" />
            <ellipse cx="60" cy="56" rx="5" ry="10" fill="url(#wisteriaPetal)" />
            <ellipse cx="60" cy="68" rx="3.5" ry="7" fill="#C77DFF" />
            <ellipse cx="120" cy="35" rx="8" ry="14" fill="url(#wisteriaPetal)" />
            <ellipse cx="120" cy="52" rx="6" ry="11" fill="url(#wisteriaPetal)" />
            <ellipse cx="120" cy="66" rx="4" ry="8" fill="#E0AAFF" />
            <ellipse cx="180" cy="30" rx="6" ry="11" fill="url(#wisteriaPetal)" />
            <ellipse cx="180" cy="44" rx="4.5" ry="9" fill="#9D4EDD" />
          </g>

          {/* Cascading Wisteria Clusters Right */}
          <g opacity="0.85">
            <ellipse cx="1140" cy="40" rx="7" ry="12" fill="url(#wisteriaPetal)" />
            <ellipse cx="1140" cy="56" rx="5" ry="10" fill="url(#wisteriaPetal)" />
            <ellipse cx="1140" cy="68" rx="3.5" ry="7" fill="#C77DFF" />
            <ellipse cx="1080" cy="35" rx="8" ry="14" fill="url(#wisteriaPetal)" />
            <ellipse cx="1080" cy="52" rx="6" ry="11" fill="url(#wisteriaPetal)" />
            <ellipse cx="1080" cy="66" rx="4" ry="8" fill="#E0AAFF" />
            <ellipse cx="1020" cy="30" rx="6" ry="11" fill="url(#wisteriaPetal)" />
            <ellipse cx="1020" cy="44" rx="4.5" ry="9" fill="#9D4EDD" />
          </g>

          {/* Gentle Center Drapes */}
          <ellipse cx="560" cy="28" rx="6" ry="10" fill="url(#wisteriaPetal)" opacity="0.75" />
          <ellipse cx="560" cy="40" rx="4" ry="7" fill="#C77DFF" opacity="0.75" />
          <ellipse cx="640" cy="28" rx="6" ry="10" fill="url(#wisteriaPetal)" opacity="0.75" />
          <ellipse cx="640" cy="40" rx="4" ry="7" fill="#C77DFF" opacity="0.75" />
        </svg>
      </div>

      {/* 4. Glowing Ambient Bokeh Orbs / Candlelight Particles */}
      <div className="absolute inset-0">
        <span 
          className="absolute top-[12%] left-[10%] w-44 h-44 rounded-full filter blur-[40px] opacity-40 animate-pulse"
          style={{ background: 'radial-gradient(circle, rgba(157,78,221,0.5), transparent 70%)', animationDuration: '6s' }}
        />
        <span 
          className="absolute top-[35%] right-[8%] w-56 h-56 rounded-full filter blur-[50px] opacity-35 animate-pulse"
          style={{ background: 'radial-gradient(circle, rgba(212,175,55,0.4), transparent 70%)', animationDuration: '8s', animationDelay: '2s' }}
        />
        <span 
          className="absolute top-[65%] left-[6%] w-60 h-60 rounded-full filter blur-[55px] opacity-30 animate-pulse"
          style={{ background: 'radial-gradient(circle, rgba(82,23,130,0.45), transparent 70%)', animationDuration: '7s', animationDelay: '1s' }}
        />
        <span 
          className="absolute top-[85%] right-[12%] w-52 h-52 rounded-full filter blur-[45px] opacity-35 animate-pulse"
          style={{ background: 'radial-gradient(circle, rgba(157,78,221,0.4), transparent 70%)', animationDuration: '9s', animationDelay: '3s' }}
        />
      </div>
    </div>
  );
};
