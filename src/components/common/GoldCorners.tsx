import React from 'react';

interface GoldCornersProps {
  inset?: string;
  size?: number;
  color?: string;
}

export const GoldCorners: React.FC<GoldCornersProps> = ({ 
  inset = '10px', 
  size = 24, 
  color = '#C5A059' 
}) => {
  return (
    <div className="pointer-events-none absolute inset-0 z-10" aria-hidden="true">
      {/* Top Left Corner */}
      <span
        style={{
          position: 'absolute',
          width: `${size}px`,
          height: `${size}px`,
          top: inset,
          left: inset,
          borderTop: `1.5px solid ${color}`,
          borderLeft: `1.5px solid ${color}`,
          borderTopLeftRadius: '2px',
        }}
      />
      {/* Top Right Corner */}
      <span
        style={{
          position: 'absolute',
          width: `${size}px`,
          height: `${size}px`,
          top: inset,
          right: inset,
          borderTop: `1.5px solid ${color}`,
          borderRight: `1.5px solid ${color}`,
          borderTopRightRadius: '2px',
        }}
      />
      {/* Bottom Left Corner */}
      <span
        style={{
          position: 'absolute',
          width: `${size}px`,
          height: `${size}px`,
          bottom: inset,
          left: inset,
          borderBottom: `1.5px solid ${color}`,
          borderLeft: `1.5px solid ${color}`,
          borderBottomLeftRadius: '2px',
        }}
      />
      {/* Bottom Right Corner */}
      <span
        style={{
          position: 'absolute',
          width: `${size}px`,
          height: `${size}px`,
          bottom: inset,
          right: inset,
          borderBottom: `1.5px solid ${color}`,
          borderRight: `1.5px solid ${color}`,
          borderBottomRightRadius: '2px',
        }}
      />
    </div>
  );
};
