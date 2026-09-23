import React from 'react';
import { getAssetUrl } from '../../utils/assetHelper';

interface ButterfliesOverlayProps {
  count?: number;
  className?: string;
  theme?: 'intro' | 'inside';
}

export const ButterfliesOverlay: React.FC<ButterfliesOverlayProps> = ({
  count = 5,
  className = '',
  theme = 'inside',
}) => {
  // 5 natural butterflies with staggered, balanced, off-screen entry points
  const butterflyConfigs = [
    {
      id: 'bf-1',
      src: getAssetUrl('butterfly/b1.gif'),
      size: 46,
      duration: '22s',
      delay: '0s',
      pathClass: 'butterfly-path-1',
      glow: theme === 'intro' ? 'drop-shadow(0 0 10px rgba(212,175,55,0.7))' : 'drop-shadow(0 3px 8px rgba(82,23,130,0.3))',
    },
    {
      id: 'bf-2',
      src: getAssetUrl('butterfly/b2.gif'),
      size: 52,
      duration: '26s',
      delay: '4s',
      pathClass: 'butterfly-path-2',
      glow: theme === 'intro' ? 'drop-shadow(0 0 12px rgba(229,197,120,0.75))' : 'drop-shadow(0 4px 10px rgba(157,78,221,0.35))',
    },
    {
      id: 'bf-3',
      src: getAssetUrl('butterfly/b3.gif'),
      size: 40,
      duration: '20s',
      delay: '8s',
      pathClass: 'butterfly-path-3',
      glow: theme === 'intro' ? 'drop-shadow(0 0 10px rgba(212,175,55,0.6))' : 'drop-shadow(0 3px 8px rgba(82,23,130,0.25))',
    },
    {
      id: 'bf-4',
      src: getAssetUrl('butterfly/b6.gif'),
      size: 44,
      duration: '24s',
      delay: '13s',
      pathClass: 'butterfly-path-4',
      glow: theme === 'intro' ? 'drop-shadow(0 0 10px rgba(212,175,55,0.65))' : 'drop-shadow(0 3px 8px rgba(157,78,221,0.3))',
    },
    {
      id: 'bf-5',
      src: getAssetUrl('butterfly/b1.gif'),
      size: 38,
      duration: '21s',
      delay: '17s',
      pathClass: 'butterfly-path-5',
      glow: theme === 'intro' ? 'drop-shadow(0 0 8px rgba(212,175,55,0.6))' : 'drop-shadow(0 3px 6px rgba(82,23,130,0.25))',
    },
  ].slice(0, count);

  return (
    <div aria-hidden="true" className={`pointer-events-none fixed inset-0 z-20 overflow-hidden select-none ${className}`}>
      <style>{`
        /* Path 1: Starts completely off-screen at bottom-left, ascends diagonally to top-right */
        @keyframes bfFlight1 {
          0% {
            transform: translate(-15vw, 85vh) scale(0.75) rotate(15deg);
            opacity: 0;
          }
          10% {
            opacity: 0.9;
          }
          30% {
            transform: translate(25vw, 62vh) scale(0.92) rotate(-8deg);
          }
          55% {
            transform: translate(52vw, 40vh) scale(1.04) rotate(16deg);
          }
          80% {
            transform: translate(78vw, 22vh) scale(0.92) rotate(-6deg);
          }
          90% {
            opacity: 0.9;
          }
          100% {
            transform: translate(115vw, 6vh) scale(0.78) rotate(12deg);
            opacity: 0;
          }
        }

        /* Path 2: Starts completely off-screen at top-right, glides across to mid-left */
        @keyframes bfFlight2 {
          0% {
            transform: translate(115vw, 15vh) scale(0.75) rotate(-18deg);
            opacity: 0;
          }
          10% {
            opacity: 0.88;
          }
          35% {
            transform: translate(75vw, 36vh) scale(0.95) rotate(10deg);
          }
          60% {
            transform: translate(45vw, 52vh) scale(1.02) rotate(-14deg);
          }
          85% {
            transform: translate(18vw, 68vh) scale(0.88) rotate(8deg);
          }
          92% {
            opacity: 0.88;
          }
          100% {
            transform: translate(-15vw, 80vh) scale(0.75) rotate(-10deg);
            opacity: 0;
          }
        }

        /* Path 3: Mid-left offscreen entrance, gentle wave across center */
        @keyframes bfFlight3 {
          0% {
            transform: translate(-15vw, 42vh) scale(0.75) rotate(12deg);
            opacity: 0;
          }
          12% {
            opacity: 0.88;
          }
          40% {
            transform: translate(32vw, 30vh) scale(0.94) rotate(-10deg);
          }
          70% {
            transform: translate(68vw, 44vh) scale(1.02) rotate(14deg);
          }
          88% {
            opacity: 0.88;
          }
          100% {
            transform: translate(115vw, 32vh) scale(0.8) rotate(-6deg);
            opacity: 0;
          }
        }

        /* Path 4: Lower viewport glide from right to left */
        @keyframes bfFlight4 {
          0% {
            transform: translate(115vw, 75vh) scale(0.75) rotate(-14deg);
            opacity: 0;
          }
          12% {
            opacity: 0.88;
          }
          40% {
            transform: translate(68vw, 62vh) scale(0.92) rotate(10deg);
          }
          70% {
            transform: translate(32vw, 72vh) scale(0.98) rotate(-12deg);
          }
          88% {
            opacity: 0.88;
          }
          100% {
            transform: translate(-15vw, 58vh) scale(0.75) rotate(8deg);
            opacity: 0;
          }
        }

        /* Path 5: Rising softly along right-side margin */
        @keyframes bfFlight5 {
          0% {
            transform: translate(85vw, 110vh) scale(0.7) rotate(-8deg);
            opacity: 0;
          }
          12% {
            opacity: 0.85;
          }
          40% {
            transform: translate(78vw, 68vh) scale(0.9) rotate(12deg);
          }
          70% {
            transform: translate(86vw, 34vh) scale(0.95) rotate(-10deg);
          }
          88% {
            opacity: 0.85;
          }
          100% {
            transform: translate(80vw, -12vh) scale(0.7) rotate(6deg);
            opacity: 0;
          }
        }

        .butterfly-path-1 {
          animation: bfFlight1 22s cubic-bezier(0.42, 0, 0.58, 1) both infinite;
        }
        .butterfly-path-2 {
          animation: bfFlight2 26s cubic-bezier(0.42, 0, 0.58, 1) both infinite;
        }
        .butterfly-path-3 {
          animation: bfFlight3 20s cubic-bezier(0.42, 0, 0.58, 1) both infinite;
        }
        .butterfly-path-4 {
          animation: bfFlight4 24s cubic-bezier(0.42, 0, 0.58, 1) both infinite;
        }
        .butterfly-path-5 {
          animation: bfFlight5 21s cubic-bezier(0.42, 0, 0.58, 1) both infinite;
        }

        /* Subtle fluttering bob */
        @keyframes bfBob {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-5px) rotate(3deg);
          }
        }

        .butterfly-bob {
          animation: bfBob 2.6s ease-in-out infinite;
        }
      `}</style>

      {butterflyConfigs.map((b) => (
        <div
          key={b.id}
          className={`absolute ${b.pathClass}`}
          style={{
            top: 0,
            left: 0,
            opacity: 0, // Starts 100% invisible so it can NEVER be stuck in top-left
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
