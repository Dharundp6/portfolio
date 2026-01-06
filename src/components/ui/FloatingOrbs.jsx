import React from 'react';

const FloatingOrbs = () => {
  const orbs = [
    {
      size: 400,
      color: 'rgba(99, 102, 241, 0.15)',
      top: '10%',
      left: '10%',
      duration: '25s',
      delay: '0s'
    },
    {
      size: 350,
      color: 'rgba(139, 92, 246, 0.12)',
      top: '60%',
      right: '10%',
      duration: '30s',
      delay: '5s'
    },
    {
      size: 300,
      color: 'rgba(59, 130, 246, 0.1)',
      bottom: '15%',
      left: '50%',
      duration: '28s',
      delay: '10s'
    },
    {
      size: 250,
      color: 'rgba(16, 185, 129, 0.08)',
      top: '30%',
      right: '30%',
      duration: '35s',
      delay: '3s'
    }
  ];

  const orbStyle = (orb) => ({
    position: 'absolute',
    width: `${orb.size}px`,
    height: `${orb.size}px`,
    background: `radial-gradient(circle, ${orb.color} 0%, transparent 70%)`,
    borderRadius: '50%',
    filter: 'blur(60px)',
    top: orb.top,
    left: orb.left,
    right: orb.right,
    bottom: orb.bottom,
    animation: `floatOrb ${orb.duration} ease-in-out infinite`,
    animationDelay: orb.delay,
    pointerEvents: 'none'
  });

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      zIndex: 0,
      pointerEvents: 'none'
    }}>
      {orbs.map((orb, index) => (
        <div key={index} style={orbStyle(orb)} />
      ))}
    </div>
  );
};

export default FloatingOrbs;
