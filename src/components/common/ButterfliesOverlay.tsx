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
  // Tastefully placed butterflies in fixed, elegant positions (they stay in place instead of flying everywhere)
  // Clean, high-quality rendering with pure transparent background (no box or pixelation)
  const introButterflies = [
    {
      id: 'intro-bf-1',
      base: 'b1',
      size: 54,
      style: { top: '12%', right: '8%' },
      animation: 'bfStayHover1 4.6s ease-in-out infinite',
      delay: '0s',
    },
    {
      id: 'intro-bf-2',
      base: 'b2',
      size: 56,
      style: { top: '22%', left: '7%' },
      animation: 'bfStayHover2 5.2s ease-in-out infinite',
      delay: '0.8s',
    },
    {
      id: 'intro-bf-3',
      base: 'b3',
      size: 50,
      style: { bottom: '15%', right: '9%' },
      animation: 'bfStayHover3 4.8s ease-in-out infinite',
      delay: '1.4s',
    },
  ];

  const insideButterflies = [
    {
      id: 'inside-bf-1',
      base: 'b1',
      size: 52,
      style: { top: '14vh', left: 'max(4vw, calc(50% - 380px))' },
      animation: 'bfStayHover1 4.4s ease-in-out infinite',
      delay: '0s',
    },
    {
      id: 'inside-bf-2',
      base: 'b2',
      size: 56,
      style: { top: '18vh', right: 'max(4vw, calc(50% - 370px))' },
      animation: 'bfStayHover2 5.0s ease-in-out infinite',
      delay: '0.9s',
    },
    {
      id: 'inside-bf-3',
      base: 'b3',
      size: 48,
      style: { top: '48vh', left: 'max(3vw, calc(50% - 410px))' },
      animation: 'bfStayHover3 4.8s ease-in-out infinite',
      delay: '1.6s',
    },
    {
      id: 'inside-bf-4',
      base: 'b4',
      size: 42,
      style: { top: '68vh', right: 'max(3vw, calc(50% - 400px))' },
      animation: 'bfStayHover1 4.2s ease-in-out infinite',
      delay: '2.1s',
    },
    {
      id: 'inside-bf-5',
      base: 'b5',
      size: 50,
      style: { top: '84vh', left: 'max(4vw, calc(50% - 390px))' },
      animation: 'bfStayHover2 5.4s ease-in-out infinite',
      delay: '1.1s',
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
        /* Gentle in-place organic hovering motions (stay in few places with natural flutter) */
        @keyframes bfStayHover1 {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(3px, -9px, 0) rotate(2.5deg);
          }
        }

        @keyframes bfStayHover2 {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(-4px, -8px, 0) rotate(-2deg);
          }
        }

        @keyframes bfStayHover3 {
          0%, 100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }
          50% {
            transform: translate3d(2px, -10px, 0) rotate(1.8deg);
          }
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
          {/* Render clean original GIF without lossy halos or background boxes */}
          <picture>
            <source srcSet={getAssetUrl(`butterfly/${b.base}.webp`)} type="image/webp" />
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
              }}
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>
      ))}
    </div>
  );
};
