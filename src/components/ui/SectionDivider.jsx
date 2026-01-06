import React from 'react';

const SectionDivider = ({ variant = 'wave', color = '#6366f1' }) => {
  if (variant === 'wave') {
    return (
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden', lineHeight: 0 }}>
        <svg viewBox="0 0 1200 60" preserveAspectRatio="none" style={{ width: '100%', height: '60px' }}>
          <path
            d="M0,30 Q300,0 600,30 T1200,30 L1200,60 L0,60 Z"
            fill={color}
            opacity="0.1"
          >
            <animate
              attributeName="d"
              values="M0,30 Q300,0 600,30 T1200,30 L1200,60 L0,60 Z;
                      M0,30 Q300,60 600,30 T1200,30 L1200,60 L0,60 Z;
                      M0,30 Q300,0 600,30 T1200,30 L1200,60 L0,60 Z"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div style={{ textAlign: 'center', padding: '40px 0' }}>
        <svg width="150" height="20" viewBox="0 0 150 20">
          {[0, 1, 2, 3, 4].map((i) => (
            <circle
              key={i}
              cx={30 * i + 15}
              cy="10"
              r="4"
              fill={color}
              opacity="0.4"
            >
              <animate
                attributeName="r"
                values="4;6;4"
                dur="2s"
                begin={`${i * 0.2}s`}
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.4;0.8;0.4"
                dur="2s"
                begin={`${i * 0.2}s`}
                repeatCount="indefinite"
              />
            </circle>
          ))}
        </svg>
      </div>
    );
  }

  return null;
};

export default SectionDivider;
