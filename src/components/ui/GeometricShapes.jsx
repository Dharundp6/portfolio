import React from 'react';

const GeometricShapes = () => {
  const shapes = [
    {
      type: 'circle',
      size: 80,
      color: '#6366f1',
      position: { top: '10%', right: '5%' },
      duration: '15s',
      delay: '0s'
    },
    {
      type: 'triangle',
      size: 60,
      color: '#8b5cf6',
      position: { top: '60%', left: '3%' },
      duration: '18s',
      delay: '2s'
    },
    {
      type: 'square',
      size: 70,
      color: '#10b981',
      position: { bottom: '20%', right: '8%' },
      duration: '20s',
      delay: '1s'
    },
    {
      type: 'hexagon',
      size: 65,
      color: '#06b6d4',
      position: { top: '30%', left: '5%' },
      duration: '16s',
      delay: '3s'
    }
  ];

  const renderShape = (shape) => {
    switch (shape.type) {
      case 'circle':
        return (
          <svg width={shape.size} height={shape.size} viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke={shape.color}
              strokeWidth="3"
              opacity="0.3"
            >
              <animate
                attributeName="r"
                values="40;45;40"
                dur="4s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-opacity"
                values="0.3;0.6;0.3"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
        );

      case 'triangle':
        return (
          <svg width={shape.size} height={shape.size} viewBox="0 0 100 100">
            <polygon
              points="50,10 90,90 10,90"
              fill="none"
              stroke={shape.color}
              strokeWidth="3"
              opacity="0.3"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="20s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-opacity"
                values="0.3;0.6;0.3"
                dur="3s"
                repeatCount="indefinite"
              />
            </polygon>
          </svg>
        );

      case 'square':
        return (
          <svg width={shape.size} height={shape.size} viewBox="0 0 100 100">
            <rect
              x="20"
              y="20"
              width="60"
              height="60"
              fill="none"
              stroke={shape.color}
              strokeWidth="3"
              opacity="0.3"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="25s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-opacity"
                values="0.3;0.6;0.3"
                dur="3.5s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
        );

      case 'hexagon':
        return (
          <svg width={shape.size} height={shape.size} viewBox="0 0 100 100">
            <polygon
              points="50,5 90,27 90,73 50,95 10,73 10,27"
              fill="none"
              stroke={shape.color}
              strokeWidth="3"
              opacity="0.3"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                from="0 50 50"
                to="360 50 50"
                dur="30s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="stroke-opacity"
                values="0.3;0.6;0.3"
                dur="4s"
                repeatCount="indefinite"
              />
            </polygon>
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <div style={{
      position: 'fixed',
      width: '100%',
      height: '100%',
      top: 0,
      left: 0,
      pointerEvents: 'none',
      zIndex: 0,
      overflow: 'hidden'
    }}>
      {shapes.map((shape, index) => (
        <div
          key={index}
          style={{
            position: 'absolute',
            ...shape.position,
            animation: `floatShape ${shape.duration} ease-in-out infinite`,
            animationDelay: shape.delay
          }}
        >
          {renderShape(shape)}
        </div>
      ))}

      <style jsx="true">{`
        @keyframes floatShape {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(20px, -30px) scale(1.1);
          }
          50% {
            transform: translate(-15px, 15px) scale(0.9);
          }
          75% {
            transform: translate(25px, 20px) scale(1.05);
          }
        }
      `}</style>
    </div>
  );
};

export default GeometricShapes;
