import React from 'react';

// Animated Brain Icon (ML/AI)
export const BrainIcon = ({ size = 60, color = '#6366f1' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <defs>
      <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: color, stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
      </linearGradient>
    </defs>

    {/* Brain outline */}
    <path
      d="M 30 40 Q 25 25 35 20 Q 45 15 50 20 Q 55 15 65 20 Q 75 25 70 40 Q 75 50 70 60 Q 75 70 65 75 Q 55 80 50 75 Q 45 80 35 75 Q 25 70 30 60 Q 25 50 30 40"
      fill="url(#brainGrad)"
      opacity="0.3"
    >
      <animate
        attributeName="opacity"
        values="0.3;0.6;0.3"
        dur="3s"
        repeatCount="indefinite"
      />
    </path>

    {/* Neural connections */}
    <g stroke={color} strokeWidth="2" fill="none" opacity="0.8">
      <line x1="35" y1="35" x2="45" y2="45">
        <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite" />
      </line>
      <line x1="55" y1="45" x2="65" y2="35">
        <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="2.5s" repeatCount="indefinite" />
      </line>
      <line x1="40" y1="55" x2="60" y2="55">
        <animate attributeName="stroke-opacity" values="0.3;1;0.3" dur="3s" repeatCount="indefinite" />
      </line>
    </g>

    {/* Neural nodes */}
    <g fill={color}>
      <circle cx="35" cy="35" r="3">
        <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="65" cy="35" r="3">
        <animate attributeName="r" values="3;5;3" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="50" cy="50" r="4">
        <animate attributeName="r" values="4;6;4" dur="3s" repeatCount="indefinite" />
      </circle>
    </g>
  </svg>
);

// Animated Rocket Icon (Production/Deploy)
export const RocketIcon = ({ size = 60, color = '#10b981' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <defs>
      <linearGradient id="rocketGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: color }} />
        <stop offset="100%" style={{ stopColor: '#06b6d4' }} />
      </linearGradient>
    </defs>

    {/* Rocket body */}
    <g>
      <path
        d="M 45 60 L 45 30 Q 50 15 55 30 L 55 60 L 52 70 L 48 70 Z"
        fill="url(#rocketGrad)"
      >
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0;0 -5;0 0"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </path>

      {/* Window */}
      <circle cx="50" cy="35" r="5" fill="#3b82f6">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0;0 -5;0 0"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Fins */}
      <path d="M 45 55 L 35 65 L 45 65 Z" fill={color} opacity="0.8">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0;0 -5;0 0"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </path>
      <path d="M 55 55 L 65 65 L 55 65 Z" fill={color} opacity="0.8">
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0;0 -5;0 0"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </path>
    </g>

    {/* Flame */}
    <g opacity="0.9">
      <path d="M 48 70 L 45 80 L 50 75 L 55 80 L 52 70 Z" fill="#f59e0b">
        <animate
          attributeName="opacity"
          values="0.9;0.5;0.9"
          dur="0.3s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0;0 -5;0 0"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </path>
      <path d="M 46 78 L 50 85 L 54 78 Z" fill="#ef4444">
        <animate
          attributeName="opacity"
          values="0.7;0.3;0.7"
          dur="0.2s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0;0 -5;0 0"
          dur="1.5s"
          repeatCount="indefinite"
        />
      </path>
    </g>
  </svg>
);

// Animated Eye Icon (Computer Vision)
export const EyeIcon = ({ size = 60, color = '#ec4899' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <defs>
      <radialGradient id="eyeGrad">
        <stop offset="0%" style={{ stopColor: color }} />
        <stop offset="100%" style={{ stopColor: '#8b5cf6' }} />
      </radialGradient>
    </defs>

    {/* Eye outline */}
    <ellipse cx="50" cy="50" rx="35" ry="20" fill="none" stroke={color} strokeWidth="3">
      <animate
        attributeName="ry"
        values="20;22;20"
        dur="4s"
        repeatCount="indefinite"
      />
    </ellipse>

    {/* Iris */}
    <circle cx="50" cy="50" r="12" fill="url(#eyeGrad)">
      <animate
        attributeName="r"
        values="12;13;12"
        dur="3s"
        repeatCount="indefinite"
      />
    </circle>

    {/* Pupil */}
    <circle cx="50" cy="50" r="6" fill="#1a0f08">
      <animate
        attributeName="r"
        values="6;7;6"
        dur="2s"
        repeatCount="indefinite"
      />
    </circle>

    {/* Highlight */}
    <circle cx="48" cy="47" r="3" fill="white" opacity="0.8" />

    {/* Scan lines */}
    <g stroke={color} strokeWidth="1" opacity="0.4">
      <line x1="20" y1="45" x2="80" y2="45">
        <animate
          attributeName="y1"
          values="40;60;40"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="y2"
          values="40;60;40"
          dur="3s"
          repeatCount="indefinite"
        />
      </line>
    </g>
  </svg>
);

// Animated Code Icon (Development)
export const CodeIcon = ({ size = 60, color = '#3b82f6' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <defs>
      <linearGradient id="codeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" style={{ stopColor: color }} />
        <stop offset="100%" style={{ stopColor: '#8b5cf6' }} />
      </linearGradient>
    </defs>

    {/* Code brackets */}
    <path
      d="M 30 30 L 20 50 L 30 70"
      stroke="url(#codeGrad)"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    >
      <animate
        attributeName="stroke-opacity"
        values="0.5;1;0.5"
        dur="2s"
        repeatCount="indefinite"
      />
    </path>

    <path
      d="M 70 30 L 80 50 L 70 70"
      stroke="url(#codeGrad)"
      strokeWidth="4"
      fill="none"
      strokeLinecap="round"
    >
      <animate
        attributeName="stroke-opacity"
        values="0.5;1;0.5"
        dur="2s"
        begin="0.5s"
        repeatCount="indefinite"
      />
    </path>

    {/* Slash */}
    <line
      x1="55"
      y1="30"
      x2="45"
      y2="70"
      stroke={color}
      strokeWidth="4"
      strokeLinecap="round"
    >
      <animate
        attributeName="stroke-opacity"
        values="0.5;1;0.5"
        dur="2s"
        begin="1s"
        repeatCount="indefinite"
      />
    </line>

    {/* Floating dots */}
    <g fill={color}>
      <circle cx="35" cy="45" r="2">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="2s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="40" cy="50" r="2">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="2s"
          begin="0.3s"
          repeatCount="indefinite"
        />
      </circle>
      <circle cx="35" cy="55" r="2">
        <animate
          attributeName="opacity"
          values="0;1;0"
          dur="2s"
          begin="0.6s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
);

// Animated Database Icon (Data)
export const DatabaseIcon = ({ size = 60, color = '#06b6d4' }) => (
  <svg width={size} height={size} viewBox="0 0 100 100">
    <defs>
      <linearGradient id="dbGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" style={{ stopColor: color }} />
        <stop offset="100%" style={{ stopColor: '#3b82f6' }} />
      </linearGradient>
    </defs>

    {/* Database cylinder */}
    <g fill="url(#dbGrad)" opacity="0.8">
      {/* Top ellipse */}
      <ellipse cx="50" cy="30" rx="25" ry="8">
        <animate
          attributeName="ry"
          values="8;10;8"
          dur="3s"
          repeatCount="indefinite"
        />
      </ellipse>

      {/* Middle section */}
      <rect x="25" y="30" width="50" height="30" />

      {/* Middle line */}
      <ellipse cx="50" cy="45" rx="25" ry="8">
        <animate
          attributeName="opacity"
          values="0.6;1;0.6"
          dur="2s"
          repeatCount="indefinite"
        />
      </ellipse>

      {/* Bottom ellipse */}
      <ellipse cx="50" cy="60" rx="25" ry="8" />
    </g>

    {/* Data flow */}
    <g stroke={color} strokeWidth="2" fill="none">
      <path d="M 50 65 L 50 75">
        <animate
          attributeName="stroke-dasharray"
          values="0,10;10,0"
          dur="1s"
          repeatCount="indefinite"
        />
      </path>
    </g>
  </svg>
);

export default {
  BrainIcon,
  RocketIcon,
  EyeIcon,
  CodeIcon,
  DatabaseIcon
};
