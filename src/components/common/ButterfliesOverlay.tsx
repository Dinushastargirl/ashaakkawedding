import React from 'react';

interface ButterfliesOverlayProps {
  count?: number;
  className?: string;
  theme?: 'intro' | 'inside';
}

export const ButterfliesOverlay: React.FC<ButterfliesOverlayProps> = ({
  count = 8,
  className = '',
  theme = 'inside',
}) => {
  // Rich suite of natural butterflies using supplied flapping GIF assets from /butterfly/
  const butterflyConfigs = [
    {
      id: 'bf-1',
      src: '/butterfly/b1.gif',
      size: 48,
      duration: '22s',
      delay: '0s',
      pathClass: 'butterfly-path-1',
      glow: theme === 'intro' ? 'drop-shadow(0 0 10px rgba(212,175,55,0.7))' : 'drop-shadow(0 3px 8px rgba(82,23,130,0.3))',
    },
    {
      id: 'bf-2',
      src: '/butterfly/b2.gif',
      size: 54,
      duration: '26s',
      delay: '3s',
      pathClass: 'butterfly-path-2',
      glow: theme === 'intro' ? 'drop-shadow(0 0 12px rgba(229,197,120,0.75))' : 'drop-shadow(0 4px 10px rgba(157,78,221,0.35))',
    },
    {
      id: 'bf-3',
      src: '/butterfly/b3.gif',
      size: 42,
      duration: '20s',
      delay: '6s',
      pathClass: 'butterfly-path-3',
      glow: theme === 'intro' ? 'drop-shadow(0 0 10px rgba(212,175,55,0.6))' : 'drop-shadow(0 3px 8px rgba(82,23,130,0.25))',
    },
    {
      id: 'bf-4',
      src: '/butterfly/b6.gif',
      size: 46,
      duration: '24s',
      delay: '9s',
      pathClass: 'butterfly-path-4',
      glow: theme === 'intro' ? 'drop-shadow(0 0 10px rgba(212,175,55,0.65))' : 'drop-shadow(0 3px 8px rgba(157,78,221,0.3))',
    },
    {
      id: 'bf-5',
      src: '/butterfly/b4.gif',
      size: 38,
      duration: '19s',
      delay: '12s',
      pathClass: 'butterfly-path-5',
      glow: theme === 'intro' ? 'drop-shadow(0 0 8px rgba(212,175,55,0.6))' : 'drop-shadow(0 3px 6px rgba(82,23,130,0.3))',
    },
    {
      id: 'bf-6',
      src: '/butterfly/b1.gif',
      size: 44,
      duration: '25s',
      delay: '15s',
      pathClass: 'butterfly-path-6',
      glow: theme === 'intro' ? 'drop-shadow(0 0 10px rgba(212,175,55,0.65))' : 'drop-shadow(0 3px 8px rgba(157,78,221,0.3))',
    },
    {
      id: 'bf-7',
      src: '/butterfly/b2.gif',
      size: 50,
      duration: '28s',
      delay: '18s',
      pathClass: 'butterfly-path-7',
      glow: theme === 'intro' ? 'drop-shadow(0 0 12px rgba(229,197,120,0.7))' : 'drop-shadow(0 4px 10px rgba(82,23,130,0.3))',
    },
    {
      id: 'bf-8',
      src: '/butterfly/b3.gif',
      size: 36,
      duration: '21s',
      delay: '21s',
      pathClass: 'butterfly-path-8',
      glow: theme === 'intro' ? 'drop-shadow(0 0 8px rgba(212,175,55,0.6))' : 'drop-shadow(0 3px 6px rgba(157,78,221,0.25))',
    },
  ].slice(0, count);

  return (
    <div aria-hidden="true" className={`pointer-events-none fixed inset-0 z-20 overflow-hidden select-none ${className}`}>
      <style>{`
        /* Path 1: Floating from bottom-left toward upper-right */
        @keyframes butterflyFlight1 {
          0% {
            transform: translate(-10vw, 85vh) scale(0.75) rotate(15deg);
            opacity: 0;
          }
          8% {
            opacity: 0.92;
          }
          25% {
            transform: translate(24vw, 64vh) scale(0.9) rotate(-6deg);
          }
          50% {
            transform: translate(48vw, 42vh) scale(1.05) rotate(16deg);
          }
          75% {
            transform: translate(74vw, 24vh) scale(0.92) rotate(-8deg);
          }
          92% {
            opacity: 0.92;
          }
          100% {
            transform: translate(110vw, 8vh) scale(0.8) rotate(10deg);
            opacity: 0;
          }
        }

        /* Path 2: Meandering from top-right down across to mid-left */
        @keyframes butterflyFlight2 {
          0% {
            transform: translate(105vw, 18vh) scale(0.75) rotate(-18deg);
            opacity: 0;
          }
          10% {
            opacity: 0.88;
          }
          32% {
            transform: translate(76vw, 38vh) scale(0.95) rotate(12deg);
          }
          56% {
            transform: translate(46vw, 54vh) scale(1.02) rotate(-14deg);
          }
          80% {
            transform: translate(22vw, 66vh) scale(0.9) rotate(8deg);
          }
          92% {
            opacity: 0.88;
          }
          100% {
            transform: translate(-10vw, 80vh) scale(0.75) rotate(-10deg);
            opacity: 0;
          }
        }

        /* Path 3: Gentle upper arc hovering near the letterbox frame */
        @keyframes butterflyFlight3 {
          0% {
            transform: translate(-8vw, 26vh) scale(0.8) rotate(12deg);
            opacity: 0;
          }
          12% {
            opacity: 0.88;
          }
          38% {
            transform: translate(30vw, 16vh) scale(0.95) rotate(-10deg);
          }
          64% {
            transform: translate(65vw, 28vh) scale(1) rotate(15deg);
          }
          86% {
            opacity: 0.88;
          }
          100% {
            transform: translate(108vw, 15vh) scale(0.85) rotate(-6deg);
            opacity: 0;
          }
        }

        /* Path 4: Soft lower viewport glide */
        @keyframes butterflyFlight4 {
          0% {
            transform: translate(108vw, 76vh) scale(0.75) rotate(-14deg);
            opacity: 0;
          }
          10% {
            opacity: 0.88;
          }
          36% {
            transform: translate(68vw, 64vh) scale(0.92) rotate(10deg);
          }
          66% {
            transform: translate(36vw, 74vh) scale(0.98) rotate(-10deg);
          }
          88% {
            opacity: 0.88;
          }
          100% {
            transform: translate(-12vw, 56vh) scale(0.75) rotate(8deg);
            opacity: 0;
          }
        }

        /* Path 5: Rising vertically on right margin */
        @keyframes butterflyFlight5 {
          0% {
            transform: translate(88vw, 105vh) scale(0.7) rotate(-8deg);
            opacity: 0;
          }
          10% {
            opacity: 0.85;
          }
          35% {
            transform: translate(82vw, 70vh) scale(0.9) rotate(12deg);
          }
          65% {
            transform: translate(89vw, 38vh) scale(0.95) rotate(-10deg);
          }
          90% {
            opacity: 0.85;
          }
          100% {
            transform: translate(84vw, -8vh) scale(0.7) rotate(6deg);
            opacity: 0;
          }
        }

        /* Path 6: Rising vertically on left margin */
        @keyframes butterflyFlight6 {
          0% {
            transform: translate(10vw, 105vh) scale(0.75) rotate(10deg);
            opacity: 0;
          }
          10% {
            opacity: 0.88;
          }
          40% {
            transform: translate(16vw, 68vh) scale(0.92) rotate(-12deg);
          }
          70% {
            transform: translate(8vw, 34vh) scale(0.98) rotate(14deg);
          }
          90% {
            opacity: 0.88;
          }
          100% {
            transform: translate(14vw, -8vh) scale(0.75) rotate(-8deg);
            opacity: 0;
          }
        }

        /* Path 7: Center-screen diagonal crossing */
        @keyframes butterflyFlight7 {
          0% {
            transform: translate(-10vw, 45vh) scale(0.7) rotate(16deg);
            opacity: 0;
          }
          12% {
            opacity: 0.86;
          }
          40% {
            transform: translate(38vw, 36vh) scale(0.92) rotate(-8deg);
          }
          68% {
            transform: translate(68vw, 50vh) scale(1) rotate(12deg);
          }
          88% {
            opacity: 0.86;
          }
          100% {
            transform: translate(110vw, 62vh) scale(0.8) rotate(-10deg);
            opacity: 0;
          }
        }

        /* Path 8: Gentle wave across upper-middle */
        @keyframes butterflyFlight8 {
          0% {
            transform: translate(108vw, 32vh) scale(0.7) rotate(-12deg);
            opacity: 0;
          }
          10% {
            opacity: 0.85;
          }
          38% {
            transform: translate(66vw, 24vh) scale(0.88) rotate(10deg);
          }
          70% {
            transform: translate(32vw, 36vh) scale(0.92) rotate(-14deg);
          }
          90% {
            opacity: 0.85;
          }
          100% {
            transform: translate(-10vw, 22vh) scale(0.75) rotate(8deg);
            opacity: 0;
          }
        }

        .butterfly-path-1 { animation: butterflyFlight1 22s cubic-bezier(0.42, 0, 0.58, 1) infinite; }
        .butterfly-path-2 { animation: butterflyFlight2 26s cubic-bezier(0.42, 0, 0.58, 1) infinite; }
        .butterfly-path-3 { animation: butterflyFlight3 20s cubic-bezier(0.42, 0, 0.58, 1) infinite; }
        .butterfly-path-4 { animation: butterflyFlight4 24s cubic-bezier(0.42, 0, 0.58, 1) infinite; }
        .butterfly-path-5 { animation: butterflyFlight5 19s cubic-bezier(0.42, 0, 0.58, 1) infinite; }
        .butterfly-path-6 { animation: butterflyFlight6 25s cubic-bezier(0.42, 0, 0.58, 1) infinite; }
        .butterfly-path-7 { animation: butterflyFlight7 28s cubic-bezier(0.42, 0, 0.58, 1) infinite; }
        .butterfly-path-8 { animation: butterflyFlight8 21s cubic-bezier(0.42, 0, 0.58, 1) infinite; }

        /* Delicate Fluttering Bob */
        @keyframes butterflyBob {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(3deg);
          }
        }

        .butterfly-bob {
          animation: butterflyBob 2.6s ease-in-out infinite;
        }
      `}</style>

      {butterflyConfigs.map((b) => (
        <div
          key={b.id}
          className={`absolute top-0 left-0 ${b.pathClass}`}
          style={{
            animationDelay: b.delay,
            animationDuration: b.duration,
          }}
        >
          <div className="butterfly-bob">
            <img
              src={b.src}
              alt=""
              width={b.size}
              height={b.size}
              style={{
                width: `${b.size}px`,
                height: `${b.size}px`,
                objectFit: 'contain',
                filter: b.glow,
                pointerEvents: 'none',
              }}
              loading="eager"
            />
          </div>
        </div>
      ))}
    </div>
  );
};
