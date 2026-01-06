import React from 'react';
import { BrainIcon, RocketIcon, EyeIcon, CodeIcon, DatabaseIcon } from './TechIllustrations';

const FloatingTechIcons = () => {
  const icons = [
    {
      Component: BrainIcon,
      position: { top: '15%', left: '10%' },
      size: 60,
      color: '#6366f1',
      delay: '0s',
      duration: '6s'
    },
    {
      Component: RocketIcon,
      position: { top: '25%', right: '15%' },
      size: 55,
      color: '#10b981',
      delay: '1s',
      duration: '7s'
    },
    {
      Component: EyeIcon,
      position: { bottom: '30%', left: '8%' },
      size: 50,
      color: '#ec4899',
      delay: '2s',
      duration: '8s'
    },
    {
      Component: CodeIcon,
      position: { bottom: '20%', right: '12%' },
      size: 55,
      color: '#3b82f6',
      delay: '1.5s',
      duration: '6.5s'
    },
    {
      Component: DatabaseIcon,
      position: { top: '50%', right: '8%' },
      size: 50,
      color: '#06b6d4',
      delay: '0.5s',
      duration: '7.5s'
    }
  ];

  return (
    <div style={{
      position: 'absolute',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      overflow: 'hidden',
      zIndex: 5
    }}>
      {icons.map((icon, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            ...icon.position,
            opacity: 0.6,
            animation: `floatTech ${icon.duration} ease-in-out infinite`,
            animationDelay: icon.delay,
            filter: 'drop-shadow(0 4px 12px rgba(99, 102, 241, 0.3))'
          }}
        >
          <icon.Component size={icon.size} color={icon.color} />
        </div>
      ))}

      <style jsx="true">{`
        @keyframes floatTech {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(5deg);
          }
          50% {
            transform: translateY(-10px) rotate(-3deg);
          }
          75% {
            transform: translateY(-20px) rotate(2deg);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingTechIcons;
