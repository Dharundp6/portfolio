import React from 'react';

const AnimatedWaves = ({ position = 'top', color = '#6366f1', opacity = 0.1 }) => {
  return (
    <div style={{
      position: 'absolute',
      width: '100%',
      [position]: 0,
      left: 0,
      overflow: 'hidden',
      lineHeight: 0,
      zIndex: 1,
      pointerEvents: 'none'
    }}>
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{
          width: '100%',
          height: '120px',
          transform: position === 'bottom' ? 'rotate(180deg)' : 'none'
        }}
      >
        <defs>
          <linearGradient id={`waveGradient-${position}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: color, stopOpacity: opacity }} />
            <stop offset="50%" style={{ stopColor: color, stopOpacity: opacity * 1.5 }} />
            <stop offset="100%" style={{ stopColor: color, stopOpacity: opacity }} />
          </linearGradient>
        </defs>

        {/* Wave 1 */}
        <path
          d="M0,40 C300,80 600,0 900,40 C1050,60 1200,20 1200,20 L1200,120 L0,120 Z"
          fill={`url(#waveGradient-${position})`}
          opacity="0.7"
        >
          <animate
            attributeName="d"
            values="M0,40 C300,80 600,0 900,40 C1050,60 1200,20 1200,20 L1200,120 L0,120 Z;
                    M0,20 C300,0 600,80 900,20 C1050,40 1200,60 1200,60 L1200,120 L0,120 Z;
                    M0,40 C300,80 600,0 900,40 C1050,60 1200,20 1200,20 L1200,120 L0,120 Z"
            dur="10s"
            repeatCount="indefinite"
          />
        </path>

        {/* Wave 2 */}
        <path
          d="M0,60 C300,20 600,100 900,60 C1050,40 1200,80 1200,80 L1200,120 L0,120 Z"
          fill={`url(#waveGradient-${position})`}
          opacity="0.5"
        >
          <animate
            attributeName="d"
            values="M0,60 C300,20 600,100 900,60 C1050,40 1200,80 1200,80 L1200,120 L0,120 Z;
                    M0,80 C300,100 600,20 900,80 C1050,60 1200,40 1200,40 L1200,120 L0,120 Z;
                    M0,60 C300,20 600,100 900,60 C1050,40 1200,80 1200,80 L1200,120 L0,120 Z"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>

        {/* Wave 3 */}
        <path
          d="M0,80 C300,100 600,60 900,80 C1050,90 1200,70 1200,70 L1200,120 L0,120 Z"
          fill={`url(#waveGradient-${position})`}
          opacity="0.3"
        >
          <animate
            attributeName="d"
            values="M0,80 C300,100 600,60 900,80 C1050,90 1200,70 1200,70 L1200,120 L0,120 Z;
                    M0,70 C300,60 600,100 900,70 C1050,80 1200,90 1200,90 L1200,120 L0,120 Z;
                    M0,80 C300,100 600,60 900,80 C1050,90 1200,70 1200,70 L1200,120 L0,120 Z"
            dur="12s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
};

export default AnimatedWaves;
