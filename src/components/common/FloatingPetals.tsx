import React from 'react';

export const FloatingPetals: React.FC = () => {
  const petals = [
    { left: '4%', size: 14, delay: '0s', dur: '13s', type: 'rose-purple', sway: '18px' },
    { left: '12%', size: 9, delay: '2.5s', dur: '16s', type: 'lavender', sway: '-14px' },
    { left: '20%', size: 16, delay: '1s', dur: '12s', type: 'rose-lilac', sway: '22px' },
    { left: '28%', size: 8, delay: '4s', dur: '17s', type: 'gold-spore', sway: '-10px' },
    { left: '38%', size: 15, delay: '0.5s', dur: '14s', type: 'rose-purple', sway: '16px' },
    { left: '48%', size: 12, delay: '3.2s', dur: '15s', type: 'rose-lilac', sway: '-20px' },
    { left: '58%', size: 17, delay: '1.8s', dur: '13s', type: 'rose-purple', sway: '18px' },
    { left: '68%', size: 10, delay: '4.5s', dur: '16s', type: 'lavender', sway: '-15px' },
    { left: '78%', size: 15, delay: '2.2s', dur: '14s', type: 'rose-lilac', sway: '20px' },
    { left: '88%', size: 9, delay: '3.8s', dur: '15s', type: 'gold-spore', sway: '-12px' },
    { left: '95%', size: 13, delay: '1.2s', dur: '13s', type: 'rose-purple', sway: '16px' },
  ];

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden z-[1]">
      <style>{`
        @keyframes floatUpPetal {
          0% {
            opacity: 0;
            transform: translateY(105vh) translateX(0) rotate(0deg) scale(0.7);
          }
          15% {
            opacity: 0.85;
          }
          50% {
            transform: translateY(50vh) translateX(var(--sway)) rotate(180deg) scale(1);
          }
          85% {
            opacity: 0.85;
          }
          100% {
            opacity: 0;
            transform: translateY(-10vh) translateX(calc(var(--sway) * -1)) rotate(360deg) scale(0.9);
          }
        }
      `}</style>
      {petals.map((p, i) => {
        let background = 'radial-gradient(circle at 35% 30%, #9D4EDD, #521782 70%, #230738)';
        let borderRadius = '65% 15% 65% 45%';

        if (p.type === 'rose-lilac') {
          background = 'radial-gradient(circle at 35% 30%, #F5EDFF, #C77DFF 60%, #7B2CBF)';
          borderRadius = '45% 65% 15% 65%';
        } else if (p.type === 'lavender') {
          background = 'linear-gradient(135deg, #E0AAFF, #9D4EDD 70%, #521782)';
          borderRadius = '50% 50% 50% 10%';
        } else if (p.type === 'gold-spore') {
          background = 'radial-gradient(circle, #FFF7D6 20%, #D4AF37 70%, #8C6D2A)';
          borderRadius = '50%';
        }

        return (
          <span
            key={i}
            className="absolute"
            style={{
              left: p.left,
              bottom: 0,
              width: `${p.size}px`,
              height: `${p.size * 1.25}px`,
              borderRadius,
              background,
              boxShadow: p.type === 'gold-spore' ? '0 0 8px rgba(212,175,55,0.7)' : '0 2px 8px rgba(35,7,56,0.3)',
              filter: 'blur(0.25px)',
              ['--sway' as any]: p.sway,
              animation: `floatUpPetal ${p.dur} ease-in-out infinite`,
              animationDelay: p.delay,
            }}
          />
        );
      })}
    </div>
  );
};
