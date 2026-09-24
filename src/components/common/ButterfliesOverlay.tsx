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
  // 20 natural butterflies cleanly referencing canonical cached assets (b1, b2, b3, b4, b6)
  // WebP is used natively with GIF fallback for high efficiency and smooth flight
  const butterflyConfigs = [
    { id: 'bf-1', base: 'b1', size: 46, duration: '22s', delay: '0s', pathClass: 'butterfly-path-1', glow: theme === 'intro' ? 'drop-shadow(0 0 10px rgba(212,175,55,0.7))' : 'drop-shadow(0 3px 8px rgba(82,23,130,0.3))' },
    { id: 'bf-2', base: 'b2', size: 52, duration: '26s', delay: '1.5s', pathClass: 'butterfly-path-2', glow: theme === 'intro' ? 'drop-shadow(0 0 12px rgba(229,197,120,0.75))' : 'drop-shadow(0 4px 10px rgba(157,78,221,0.35))' },
    { id: 'bf-3', base: 'b3', size: 40, duration: '20s', delay: '3s', pathClass: 'butterfly-path-3', glow: theme === 'intro' ? 'drop-shadow(0 0 10px rgba(212,175,55,0.6))' : 'drop-shadow(0 3px 8px rgba(82,23,130,0.25))' },
    { id: 'bf-4', base: 'b6', size: 44, duration: '24s', delay: '4.8s', pathClass: 'butterfly-path-4', glow: theme === 'intro' ? 'drop-shadow(0 0 10px rgba(212,175,55,0.65))' : 'drop-shadow(0 3px 8px rgba(157,78,221,0.3))' },
    { id: 'bf-5', base: 'b4', size: 36, duration: '21s', delay: '6.5s', pathClass: 'butterfly-path-5', glow: theme === 'intro' ? 'drop-shadow(0 0 8px rgba(212,175,55,0.6))' : 'drop-shadow(0 3px 6px rgba(82,23,130,0.25))' },
    { id: 'bf-6', base: 'b1', size: 42, duration: '25s', delay: '8s', pathClass: 'butterfly-path-6', glow: theme === 'intro' ? 'drop-shadow(0 0 10px rgba(212,175,55,0.65))' : 'drop-shadow(0 3px 8px rgba(157,78,221,0.3))' },
    { id: 'bf-7', base: 'b2', size: 48, duration: '28s', delay: '9.8s', pathClass: 'butterfly-path-7', glow: theme === 'intro' ? 'drop-shadow(0 0 12px rgba(229,197,120,0.7))' : 'drop-shadow(0 4px 10px rgba(82,23,130,0.3))' },
    { id: 'bf-8', base: 'b3', size: 38, duration: '22s', delay: '11.5s', pathClass: 'butterfly-path-8', glow: theme === 'intro' ? 'drop-shadow(0 0 8px rgba(212,175,55,0.6))' : 'drop-shadow(0 3px 6px rgba(157,78,221,0.25))' },
    { id: 'bf-9', base: 'b6', size: 45, duration: '23s', delay: '13s', pathClass: 'butterfly-path-9', glow: theme === 'intro' ? 'drop-shadow(0 0 10px rgba(212,175,55,0.65))' : 'drop-shadow(0 3px 8px rgba(82,23,130,0.3))' },
    { id: 'bf-10', base: 'b1', size: 50, duration: '27s', delay: '14.5s', pathClass: 'butterfly-path-10', glow: theme === 'intro' ? 'drop-shadow(0 0 12px rgba(229,197,120,0.75))' : 'drop-shadow(0 4px 10px rgba(157,78,221,0.35))' },
    { id: 'bf-11', base: 'b4', size: 40, duration: '21s', delay: '16s', pathClass: 'butterfly-path-11', glow: theme === 'intro' ? 'drop-shadow(0 0 10px rgba(212,175,55,0.6))' : 'drop-shadow(0 3px 8px rgba(82,23,130,0.25))' },
    { id: 'bf-12', base: 'b3', size: 36, duration: '24s', delay: '17.5s', pathClass: 'butterfly-path-12', glow: theme === 'intro' ? 'drop-shadow(0 0 8px rgba(212,175,55,0.6))' : 'drop-shadow(0 3px 6px rgba(157,78,221,0.25))' },
    { id: 'bf-13', base: 'b2', size: 45, duration: '23s', delay: '19s', pathClass: 'butterfly-path-13', glow: theme === 'intro' ? 'drop-shadow(0 0 11px rgba(229,197,120,0.7))' : 'drop-shadow(0 3px 8px rgba(82,23,130,0.3))' },
    { id: 'bf-14', base: 'b6', size: 42, duration: '25s', delay: '20.5s', pathClass: 'butterfly-path-14', glow: theme === 'intro' ? 'drop-shadow(0 0 10px rgba(212,175,55,0.65))' : 'drop-shadow(0 3px 8px rgba(157,78,221,0.3))' },
    { id: 'bf-15', base: 'b1', size: 48, duration: '26s', delay: '22s', pathClass: 'butterfly-path-15', glow: theme === 'intro' ? 'drop-shadow(0 0 12px rgba(229,197,120,0.7))' : 'drop-shadow(0 4px 10px rgba(82,23,130,0.35))' },
    { id: 'bf-16', base: 'b3', size: 38, duration: '22s', delay: '23.5s', pathClass: 'butterfly-path-16', glow: theme === 'intro' ? 'drop-shadow(0 0 9px rgba(212,175,55,0.6))' : 'drop-shadow(0 3px 7px rgba(157,78,221,0.25))' },
    { id: 'bf-17', base: 'b2', size: 44, duration: '24s', delay: '25s', pathClass: 'butterfly-path-1', glow: theme === 'intro' ? 'drop-shadow(0 0 10px rgba(212,175,55,0.65))' : 'drop-shadow(0 3px 8px rgba(82,23,130,0.3))' },
    { id: 'bf-18', base: 'b6', size: 46, duration: '27s', delay: '26.5s', pathClass: 'butterfly-path-3', glow: theme === 'intro' ? 'drop-shadow(0 0 11px rgba(229,197,120,0.7))' : 'drop-shadow(0 3px 8px rgba(157,78,221,0.3))' },
    { id: 'bf-19', base: 'b4', size: 35, duration: '21s', delay: '28s', pathClass: 'butterfly-path-7', glow: theme === 'intro' ? 'drop-shadow(0 0 8px rgba(212,175,55,0.6))' : 'drop-shadow(0 3px 6px rgba(82,23,130,0.25))' },
    { id: 'bf-20', base: 'b1', size: 47, duration: '25s', delay: '29.5s', pathClass: 'butterfly-path-10', glow: theme === 'intro' ? 'drop-shadow(0 0 12px rgba(229,197,120,0.75))' : 'drop-shadow(0 4px 10px rgba(157,78,221,0.35))' },
  ].slice(0, count);

  return (
    <div aria-hidden="true" className={`pointer-events-none fixed inset-0 z-20 overflow-hidden select-none ${className}`}>
      <style>{`
        /* Path 1: Ascends from bottom-left to top-right */
        @keyframes bfFlight1 {
          0% { transform: translate(-15vw, 85vh) scale(0.75) rotate(15deg); opacity: 0; }
          10% { opacity: 0.92; }
          30% { transform: translate(25vw, 62vh) scale(0.92) rotate(-8deg); }
          55% { transform: translate(52vw, 40vh) scale(1.04) rotate(16deg); }
          80% { transform: translate(78vw, 22vh) scale(0.92) rotate(-6deg); }
          90% { opacity: 0.92; }
          100% { transform: translate(115vw, 6vh) scale(0.78) rotate(12deg); opacity: 0; }
        }

        /* Path 2: Glides from top-right to mid-left */
        @keyframes bfFlight2 {
          0% { transform: translate(115vw, 15vh) scale(0.75) rotate(-18deg); opacity: 0; }
          10% { opacity: 0.88; }
          35% { transform: translate(75vw, 36vh) scale(0.95) rotate(10deg); }
          60% { transform: translate(45vw, 52vh) scale(1.02) rotate(-14deg); }
          85% { transform: translate(18vw, 68vh) scale(0.88) rotate(8deg); }
          92% { opacity: 0.88; }
          100% { transform: translate(-15vw, 80vh) scale(0.75) rotate(-10deg); opacity: 0; }
        }

        /* Path 3: Mid-left sine wave across center */
        @keyframes bfFlight3 {
          0% { transform: translate(-15vw, 42vh) scale(0.75) rotate(12deg); opacity: 0; }
          12% { opacity: 0.88; }
          40% { transform: translate(32vw, 30vh) scale(0.94) rotate(-10deg); }
          70% { transform: translate(68vw, 44vh) scale(1.02) rotate(14deg); }
          88% { opacity: 0.88; }
          100% { transform: translate(115vw, 32vh) scale(0.8) rotate(-6deg); opacity: 0; }
        }

        /* Path 4: Lower viewport glide from right to left */
        @keyframes bfFlight4 {
          0% { transform: translate(115vw, 75vh) scale(0.75) rotate(-14deg); opacity: 0; }
          12% { opacity: 0.88; }
          40% { transform: translate(68vw, 62vh) scale(0.92) rotate(10deg); }
          70% { transform: translate(32vw, 72vh) scale(0.98) rotate(-12deg); }
          88% { opacity: 0.88; }
          100% { transform: translate(-15vw, 58vh) scale(0.75) rotate(8deg); opacity: 0; }
        }

        /* Path 5: Rising softly along right margin */
        @keyframes bfFlight5 {
          0% { transform: translate(86vw, 110vh) scale(0.7) rotate(-8deg); opacity: 0; }
          12% { opacity: 0.85; }
          40% { transform: translate(80vw, 68vh) scale(0.9) rotate(12deg); }
          70% { transform: translate(88vw, 34vh) scale(0.95) rotate(-10deg); }
          88% { opacity: 0.85; }
          100% { transform: translate(82vw, -12vh) scale(0.7) rotate(6deg); opacity: 0; }
        }

        /* Path 6: Rising softly along left margin */
        @keyframes bfFlight6 {
          0% { transform: translate(12vw, 110vh) scale(0.75) rotate(10deg); opacity: 0; }
          12% { opacity: 0.88; }
          40% { transform: translate(18vw, 70vh) scale(0.92) rotate(-12deg); }
          70% { transform: translate(10vw, 36vh) scale(0.98) rotate(14deg); }
          88% { opacity: 0.88; }
          100% { transform: translate(16vw, -12vh) scale(0.75) rotate(-8deg); opacity: 0; }
        }

        /* Path 7: Upper third wave from left to right */
        @keyframes bfFlight7 {
          0% { transform: translate(-15vw, 20vh) scale(0.72) rotate(14deg); opacity: 0; }
          12% { opacity: 0.86; }
          42% { transform: translate(40vw, 12vh) scale(0.92) rotate(-8deg); }
          72% { transform: translate(74vw, 22vh) scale(1) rotate(12deg); }
          88% { opacity: 0.86; }
          100% { transform: translate(115vw, 14vh) scale(0.8) rotate(-6deg); opacity: 0; }
        }

        /* Path 8: Bottom-center ascending toward upper-right */
        @keyframes bfFlight8 {
          0% { transform: translate(45vw, 110vh) scale(0.7) rotate(12deg); opacity: 0; }
          10% { opacity: 0.85; }
          40% { transform: translate(60vw, 65vh) scale(0.9) rotate(-10deg); }
          75% { transform: translate(82vw, 30vh) scale(0.96) rotate(14deg); }
          90% { opacity: 0.85; }
          100% { transform: translate(108vw, -10vh) scale(0.75) rotate(6deg); opacity: 0; }
        }

        /* Path 9: Top-center drifting down-left */
        @keyframes bfFlight9 {
          0% { transform: translate(55vw, -12vh) scale(0.7) rotate(-12deg); opacity: 0; }
          10% { opacity: 0.85; }
          40% { transform: translate(38vw, 38vh) scale(0.92) rotate(12deg); }
          75% { transform: translate(20vw, 72vh) scale(0.96) rotate(-10deg); }
          90% { opacity: 0.85; }
          100% { transform: translate(-15vw, 98vh) scale(0.75) rotate(8deg); opacity: 0; }
        }

        /* Path 10: Lower-right to upper-left long cross */
        @keyframes bfFlight10 {
          0% { transform: translate(115vw, 90vh) scale(0.72) rotate(-16deg); opacity: 0; }
          12% { opacity: 0.88; }
          40% { transform: translate(70vw, 58vh) scale(0.95) rotate(14deg); }
          70% { transform: translate(35vw, 32vh) scale(1) rotate(-12deg); }
          88% { opacity: 0.88; }
          100% { transform: translate(-15vw, 16vh) scale(0.75) rotate(10deg); opacity: 0; }
        }

        /* Path 11: Mid-height left sweeping wave */
        @keyframes bfFlight11 {
          0% { transform: translate(-15vw, 55vh) scale(0.75) rotate(10deg); opacity: 0; }
          10% { opacity: 0.88; }
          45% { transform: translate(45vw, 48vh) scale(0.96) rotate(-14deg); }
          78% { transform: translate(82vw, 56vh) scale(0.92) rotate(12deg); }
          90% { opacity: 0.88; }
          100% { transform: translate(115vw, 46vh) scale(0.75) rotate(-6deg); opacity: 0; }
        }

        /* Path 12: Upper sweeping wave from right to left */
        @keyframes bfFlight12 {
          0% { transform: translate(115vw, 25vh) scale(0.7) rotate(-12deg); opacity: 0; }
          10% { opacity: 0.85; }
          42% { transform: translate(65vw, 18vh) scale(0.9) rotate(10deg); }
          75% { transform: translate(25vw, 28vh) scale(0.95) rotate(-14deg); }
          90% { opacity: 0.85; }
          100% { transform: translate(-15vw, 18vh) scale(0.75) rotate(8deg); opacity: 0; }
        }

        /* Path 13: Lower-center soaring gently to upper-center */
        @keyframes bfFlight13 {
          0% { transform: translate(30vw, 112vh) scale(0.72) rotate(8deg); opacity: 0; }
          12% { opacity: 0.86; }
          45% { transform: translate(52vw, 62vh) scale(0.94) rotate(-10deg); }
          75% { transform: translate(42vw, 28vh) scale(1) rotate(12deg); }
          90% { opacity: 0.86; }
          100% { transform: translate(68vw, -12vh) scale(0.75) rotate(6deg); opacity: 0; }
        }

        /* Path 14: Mid-right gliding down toward lower-left */
        @keyframes bfFlight14 {
          0% { transform: translate(115vw, 50vh) scale(0.74) rotate(-12deg); opacity: 0; }
          10% { opacity: 0.88; }
          45% { transform: translate(62vw, 68vh) scale(0.96) rotate(10deg); }
          80% { transform: translate(24vw, 78vh) scale(0.92) rotate(-8deg); }
          92% { opacity: 0.88; }
          100% { transform: translate(-15vw, 85vh) scale(0.76) rotate(-12deg); opacity: 0; }
        }

        /* Path 15: Top-left sweeping down to lower-right */
        @keyframes bfFlight15 {
          0% { transform: translate(-15vw, 8vh) scale(0.7) rotate(15deg); opacity: 0; }
          10% { opacity: 0.85; }
          45% { transform: translate(48vw, 32vh) scale(0.95) rotate(-10deg); }
          80% { transform: translate(84vw, 52vh) scale(0.98) rotate(12deg); }
          90% { opacity: 0.85; }
          100% { transform: translate(115vw, 65vh) scale(0.75) rotate(10deg); opacity: 0; }
        }

        /* Path 16: Bottom-right sweeping high to mid-left */
        @keyframes bfFlight16 {
          0% { transform: translate(90vw, 112vh) scale(0.7) rotate(-14deg); opacity: 0; }
          12% { opacity: 0.88; }
          42% { transform: translate(60vw, 60vh) scale(0.94) rotate(12deg); }
          75% { transform: translate(25vw, 42vh) scale(1) rotate(-10deg); }
          90% { opacity: 0.88; }
          100% { transform: translate(-15vw, 35vh) scale(0.75) rotate(-6deg); opacity: 0; }
        }

        .butterfly-path-1 { animation: bfFlight1 22s cubic-bezier(0.42, 0, 0.58, 1) both infinite; }
        .butterfly-path-2 { animation: bfFlight2 26s cubic-bezier(0.42, 0, 0.58, 1) both infinite; }
        .butterfly-path-3 { animation: bfFlight3 20s cubic-bezier(0.42, 0, 0.58, 1) both infinite; }
        .butterfly-path-4 { animation: bfFlight4 24s cubic-bezier(0.42, 0, 0.58, 1) both infinite; }
        .butterfly-path-5 { animation: bfFlight5 21s cubic-bezier(0.42, 0, 0.58, 1) both infinite; }
        .butterfly-path-6 { animation: bfFlight6 25s cubic-bezier(0.42, 0, 0.58, 1) both infinite; }
        .butterfly-path-7 { animation: bfFlight7 28s cubic-bezier(0.42, 0, 0.58, 1) both infinite; }
        .butterfly-path-8 { animation: bfFlight8 22s cubic-bezier(0.42, 0, 0.58, 1) both infinite; }
        .butterfly-path-9 { animation: bfFlight9 23s cubic-bezier(0.42, 0, 0.58, 1) both infinite; }
        .butterfly-path-10 { animation: bfFlight10 27s cubic-bezier(0.42, 0, 0.58, 1) both infinite; }
        .butterfly-path-11 { animation: bfFlight11 21s cubic-bezier(0.42, 0, 0.58, 1) both infinite; }
        .butterfly-path-12 { animation: bfFlight12 24s cubic-bezier(0.42, 0, 0.58, 1) both infinite; }
        .butterfly-path-13 { animation: bfFlight13 23s cubic-bezier(0.42, 0, 0.58, 1) both infinite; }
        .butterfly-path-14 { animation: bfFlight14 25s cubic-bezier(0.42, 0, 0.58, 1) both infinite; }
        .butterfly-path-15 { animation: bfFlight15 26s cubic-bezier(0.42, 0, 0.58, 1) both infinite; }
        .butterfly-path-16 { animation: bfFlight16 22s cubic-bezier(0.42, 0, 0.58, 1) both infinite; }

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
                  filter: b.glow,
                  pointerEvents: 'none',
                }}
                loading="eager"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      ))}
    </div>
  );
};
