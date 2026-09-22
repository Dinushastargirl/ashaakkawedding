import React from 'react';

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
  // Butterfly configuration
  const butterflies = [
    { id: 1, left: '8%', top: '22%', size: 36, delay: '0s', dur: '18s', wingColor: '#C77DFF', wingColor2: '#521782', goldAccent: '#F9E8A2', scale: 0.9 },
    { id: 2, left: '85%', top: '15%', size: 42, delay: '2s', dur: '22s', wingColor: '#E0AAFF', wingColor2: '#7B2CBF', goldAccent: '#D4AF37', scale: 1.1 },
    { id: 3, left: '18%', top: '65%', size: 32, delay: '4s', dur: '16s', wingColor: '#D4AF37', wingColor2: '#521782', goldAccent: '#FFF', scale: 0.8 },
    { id: 4, left: '78%', top: '72%', size: 38, delay: '1s', dur: '20s', wingColor: '#C77DFF', wingColor2: '#3A085A', goldAccent: '#F9E8A2', scale: 1 },
    { id: 5, left: '48%', top: '40%', size: 28, delay: '5s', dur: '19s', wingColor: '#E0AAFF', wingColor2: '#9D4EDD', goldAccent: '#D4AF37', scale: 0.75 },
  ].slice(0, count);

  return (
    <div aria-hidden="true" className={`pointer-events-none fixed inset-0 z-20 overflow-hidden select-none ${className}`}>
      <style>{`
        @keyframes flapLeftWing {
          0%, 100% {
            transform: rotateY(0deg) rotateZ(-5deg);
          }
          50% {
            transform: rotateY(70deg) rotateZ(10deg);
          }
        }
        @keyframes flapRightWing {
          0%, 100% {
            transform: rotateY(0deg) rotateZ(5deg);
          }
          50% {
            transform: rotateY(-70deg) rotateZ(-10deg);
          }
        }
        @keyframes butterflyFlight1 {
          0% {
            transform: translate(0, 0) rotate(10deg);
            opacity: 0;
          }
          10% {
            opacity: 0.85;
          }
          25% {
            transform: translate(40px, -60px) rotate(-15deg);
          }
          50% {
            transform: translate(90px, -20px) rotate(20deg);
          }
          75% {
            transform: translate(140px, -90px) rotate(-10deg);
          }
          90% {
            opacity: 0.85;
          }
          100% {
            transform: translate(180px, -150px) rotate(25deg);
            opacity: 0;
          }
        }
        @keyframes butterflyFlight2 {
          0% {
            transform: translate(0, 0) rotate(-15deg);
            opacity: 0;
          }
          10% {
            opacity: 0.9;
          }
          30% {
            transform: translate(-50px, 40px) rotate(15deg);
          }
          60% {
            transform: translate(-100px, -50px) rotate(-20deg);
          }
          85% {
            opacity: 0.9;
          }
          100% {
            transform: translate(-160px, -120px) rotate(10deg);
            opacity: 0;
          }
        }
      `}</style>

      {butterflies.map((b, idx) => (
        <div
          key={b.id}
          className="absolute"
          style={{
            left: b.left,
            top: b.top,
            animation: `${idx % 2 === 0 ? 'butterflyFlight1' : 'butterflyFlight2'} ${b.dur} ease-in-out infinite`,
            animationDelay: b.delay,
            filter: theme === 'intro' ? 'drop-shadow(0 0 10px rgba(212,175,55,0.7))' : 'drop-shadow(0 3px 8px rgba(35,7,56,0.35))',
          }}
        >
          {/* 3D Flapping Butterfly */}
          <div
            style={{
              width: `${b.size}px`,
              height: `${b.size * 0.8}px`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              perspective: '600px',
              transform: `scale(${b.scale})`,
            }}
          >
            {/* Left Wing */}
            <svg
              viewBox="0 0 50 60"
              style={{
                width: '50%',
                height: '100%',
                transformOrigin: 'right center',
                animation: 'flapLeftWing 0.35s ease-in-out infinite',
              }}
            >
              <defs>
                <linearGradient id={`wingL_${b.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={b.wingColor} />
                  <stop offset="70%" stopColor={b.wingColor2} />
                  <stop offset="100%" stopColor="#230738" />
                </linearGradient>
              </defs>
              {/* Forewing */}
              <path
                d="M 50 30 C 40 10, 10 5, 5 20 C 0 35, 25 45, 50 35 Z"
                fill={`url(#wingL_${b.id})`}
                opacity="0.9"
              />
              {/* Hindwing */}
              <path
                d="M 50 35 C 35 40, 15 48, 20 58 C 28 65, 45 52, 50 38 Z"
                fill={b.wingColor2}
                opacity="0.85"
              />
              {/* Gold Dust Accent on Wing */}
              <circle cx="20" cy="22" r="3" fill={b.goldAccent} opacity="0.9" />
              <circle cx="32" cy="18" r="2" fill="#FFF" opacity="0.8" />
              <circle cx="28" cy="48" r="2.5" fill={b.goldAccent} opacity="0.9" />
            </svg>

            {/* Butterfly Body */}
            <div
              style={{
                width: '3px',
                height: '65%',
                background: 'linear-gradient(180deg, #D4AF37, #230738)',
                borderRadius: '3px',
                zIndex: 2,
                position: 'relative',
              }}
            />

            {/* Right Wing */}
            <svg
              viewBox="0 0 50 60"
              style={{
                width: '50%',
                height: '100%',
                transformOrigin: 'left center',
                animation: 'flapRightWing 0.35s ease-in-out infinite',
              }}
            >
              <defs>
                <linearGradient id={`wingR_${b.id}`} x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor={b.wingColor} />
                  <stop offset="70%" stopColor={b.wingColor2} />
                  <stop offset="100%" stopColor="#230738" />
                </linearGradient>
              </defs>
              {/* Forewing */}
              <path
                d="M 0 30 C 10 10, 40 5, 45 20 C 50 35, 25 45, 0 35 Z"
                fill={`url(#wingR_${b.id})`}
                opacity="0.9"
              />
              {/* Hindwing */}
              <path
                d="M 0 35 C 15 40, 35 48, 30 58 C 22 65, 5 52, 0 38 Z"
                fill={b.wingColor2}
                opacity="0.85"
              />
              {/* Gold Dust Accent on Wing */}
              <circle cx="30" cy="22" r="3" fill={b.goldAccent} opacity="0.9" />
              <circle cx="18" cy="18" r="2" fill="#FFF" opacity="0.8" />
              <circle cx="22" cy="48" r="2.5" fill={b.goldAccent} opacity="0.9" />
            </svg>
          </div>
        </div>
      ))}
    </div>
  );
};
