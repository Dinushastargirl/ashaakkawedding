import React from 'react';
import { getAssetUrl } from '../../utils/assetHelper';

interface ButterfliesOverlayProps {
  count?: number;
  className?: string;
  theme?: 'intro' | 'inside';
}

export const ButterfliesOverlay: React.FC<ButterfliesOverlayProps> = ({
  count = 20,
  className = '',
  theme = 'inside',
}) => {
  // Scene 1 (Intro video): Butterflies positioned near the lush evening floral borders with natural, graceful flight loops
  const introButterflies = [
    {
      id: 'intro-bf-1',
      base: 'b1',
      size: 54,
      style: { top: '14%', left: '8%' },
      animation: 'flightLoop1 9s ease-in-out infinite',
      delay: '0s',
    },
    {
      id: 'intro-bf-2',
      base: 'b2',
      size: 56,
      style: { top: '18%', right: '10%' },
      animation: 'flightLoop2 10.5s ease-in-out infinite',
      delay: '0.8s',
    },
    {
      id: 'intro-bf-3',
      base: 'b3',
      size: 50,
      style: { bottom: '18%', left: '9%' },
      animation: 'flightLoop3 8.5s ease-in-out infinite',
      delay: '1.4s',
    },
    {
      id: 'intro-bf-4',
      base: 'b4',
      size: 44,
      style: { bottom: '16%', right: '11%' },
      animation: 'flightLoop4 9.5s ease-in-out infinite',
      delay: '2.0s',
    },
  ];

  // Scene 2 (Inside invitation): Butterflies placed along the outer dark purple floral borders, never covering the central text
  const insideButterflies = [
    {
      id: 'inside-bf-1',
      base: 'b1',
      size: 52,
      style: { top: '10vh', left: 'max(2vw, calc(50% - 460px))' },
      animation: 'flightLoop1 10s ease-in-out infinite',
      delay: '0s',
    },
    {
      id: 'inside-bf-2',
      base: 'b2',
      size: 56,
      style: { top: '14vh', right: 'max(2vw, calc(50% - 450px))' },
      animation: 'flightLoop2 11s ease-in-out infinite',
      delay: '1.0s',
    },
    {
      id: 'inside-bf-3',
      base: 'b3',
      size: 48,
      style: { top: '46vh', left: 'max(2vw, calc(50% - 480px))' },
      animation: 'flightLoop3 9s ease-in-out infinite',
      delay: '1.8s',
    },
    {
      id: 'inside-bf-4',
      base: 'b4',
      size: 42,
      style: { top: '65vh', right: 'max(2vw, calc(50% - 470px))' },
      animation: 'flightLoop4 8.5s ease-in-out infinite',
      delay: '2.5s',
    },
    {
      id: 'inside-bf-5',
      base: 'b5',
      size: 50,
      style: { top: '82vh', left: 'max(2vw, calc(50% - 460px))' },
      animation: 'flightLoop1 11.5s ease-in-out infinite',
      delay: '1.2s',
    },
  ];

  const rawItems = theme === 'intro' ? introButterflies : insideButterflies;
  const items = rawItems.slice(0, count);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-20 overflow-hidden select-none ${className}`}
    >
      <style>{`
        /* Natural local flight loops: butterflies fly and meander smoothly around their floral area */
        @keyframes flightLoop1 {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); }
          25% { transform: translate3d(32px, -24px, 0) rotate(5deg); }
          50% { transform: translate3d(55px, 8px, 0) rotate(-3deg); }
          75% { transform: translate3d(18px, 26px, 0) rotate(3deg); }
          100% { transform: translate3d(0, 0, 0) rotate(0deg); }
        }

        @keyframes flightLoop2 {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); }
          25% { transform: translate3d(-28px, 18px, 0) rotate(-5deg); }
          50% { transform: translate3d(-50px, -18px, 0) rotate(4deg); }
          75% { transform: translate3d(-18px, -30px, 0) rotate(-3deg); }
          100% { transform: translate3d(0, 0, 0) rotate(0deg); }
        }

        @keyframes flightLoop3 {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); }
          30% { transform: translate3d(24px, -30px, 0) rotate(4.5deg); }
          60% { transform: translate3d(-14px, -12px, 0) rotate(-5deg); }
          85% { transform: translate3d(10px, 14px, 0) rotate(2deg); }
          100% { transform: translate3d(0, 0, 0) rotate(0deg); }
        }

        @keyframes flightLoop4 {
          0% { transform: translate3d(0, 0, 0) rotate(0deg); }
          30% { transform: translate3d(-18px, -22px, 0) rotate(-4deg); }
          60% { transform: translate3d(22px, -8px, 0) rotate(4deg); }
          85% { transform: translate3d(-8px, 18px, 0) rotate(-2deg); }
          100% { transform: translate3d(0, 0, 0) rotate(0deg); }
        }
      `}</style>

      {items.map((b) => (
        <div
          key={b.id}
          className="absolute pointer-events-none"
          style={{
            ...b.style,
            animation: b.animation,
            animationDelay: b.delay,
            willChange: 'transform',
          }}
        >
          {/* Use original GIF directly so native frame disposal works without frame ghosting or box shapes */}
          <img
            src={getAssetUrl(`butterfly/${b.base}.gif`)}
            alt=""
            width={b.size}
            height={b.size}
            style={{
              width: `${b.size}px`,
              height: `${b.size}px`,
              objectFit: 'contain',
              background: 'transparent',
              imageRendering: 'auto',
              pointerEvents: 'none',
              display: 'block',
            }}
            loading="eager"
            decoding="async"
          />
        </div>
      ))}
    </div>
  );
};
