import React from 'react';

export const FloatingPetals: React.FC = () => {
  const petals = [
    { left: '6%', size: 9, delay: '0s', dur: '12s' },
    { left: '14%', size: 5, delay: '3s', dur: '14s' },
    { left: '23%', size: 7, delay: '1.5s', dur: '11s' },
    { left: '32%', size: 10, delay: '4s', dur: '15s' },
    { left: '41%', size: 6, delay: '2s', dur: '13s' },
    { left: '50%', size: 5, delay: '5s', dur: '16s' },
    { left: '59%', size: 9, delay: '0.8s', dur: '12s' },
    { left: '68%', size: 7, delay: '3.5s', dur: '14s' },
    { left: '77%', size: 11, delay: '2.2s', dur: '15s' },
    { left: '86%', size: 5, delay: '4.5s', dur: '13s' },
    { left: '94%', size: 7, delay: '1s', dur: '12s' },
  ];

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden z-[1]">
      <style>{`
        @keyframes floatUpPetal {
          0% {
            opacity: 0;
            transform: translateY(100vh) rotate(0deg) scale(0.8);
          }
          15% {
            opacity: 0.65;
          }
          85% {
            opacity: 0.65;
          }
          100% {
            opacity: 0;
            transform: translateY(-10vh) rotate(360deg) scale(1.1);
          }
        }
      `}</style>
      {petals.map((p, i) => (
        <span
          key={i}
          className="absolute"
          style={{
            left: p.left,
            bottom: 0,
            width: `${p.size}px`,
            height: `${p.size}px`,
            borderRadius: '52% 0 52% 52%',
            background: 'radial-gradient(circle at 35% 35%, rgba(244, 226, 217, 0.95), rgba(82, 23, 130, 0.45) 65%, rgba(35, 7, 56, 0) 100%)',
            boxShadow: '0 0 8px rgba(176, 138, 63, 0.4)',
            filter: 'blur(0.3px)',
            animation: `floatUpPetal ${p.dur} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
};
