"use client";

import React from "react";

export default function AnimatedAvatar({ size = 320 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 400 400"
      className="drop-shadow-[0_10px_30px_rgba(99,102,241,0.3)]"
    >
      {/* Background Circle */}
      <circle cx="200" cy="200" r="180" fill="url(#avatarGradient)">
        <animate
          attributeName="r"
          values="180;185;180"
          dur="4s"
          repeatCount="indefinite"
        />
      </circle>

      {/* Gradient Definitions */}
      <defs>
        <linearGradient id="avatarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#3b82f6", stopOpacity: 0.2 }} />
          <stop offset="50%" style={{ stopColor: "#8b5cf6", stopOpacity: 0.3 }} />
          <stop offset="100%" style={{ stopColor: "#ec4899", stopOpacity: 0.2 }} />
        </linearGradient>

        <linearGradient id="skinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#fcd9b8" }} />
          <stop offset="100%" style={{ stopColor: "#f4c7a3" }} />
        </linearGradient>

        <linearGradient id="hairGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#2c1810" }} />
          <stop offset="100%" style={{ stopColor: "#1a0f08" }} />
        </linearGradient>

        <linearGradient id="shirtGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#6366f1" }} />
          <stop offset="100%" style={{ stopColor: "#4f46e5" }} />
        </linearGradient>
      </defs>

      {/* Neck */}
      <rect x="170" y="280" width="60" height="40" rx="15" fill="url(#skinGradient)" />

      {/* Shirt */}
      <path
        d="M 140 310 Q 140 305 145 302 L 170 290 L 200 285 L 230 290 L 255 302 Q 260 305 260 310 L 260 360 Q 260 370 250 370 L 150 370 Q 140 370 140 360 Z"
        fill="url(#shirtGradient)"
      />

      {/* Collar */}
      <path d="M 170 290 L 180 295 L 180 310 L 170 305 Z" fill="#4f46e5" opacity="0.8" />
      <path d="M 230 290 L 220 295 L 220 310 L 230 305 Z" fill="#4f46e5" opacity="0.8" />

      {/* Face */}
      <ellipse cx="200" cy="220" rx="70" ry="80" fill="url(#skinGradient)" />

      {/* Ears */}
      <ellipse cx="130" cy="220" rx="15" ry="20" fill="url(#skinGradient)" />
      <ellipse cx="270" cy="220" rx="15" ry="20" fill="url(#skinGradient)" />
      <ellipse cx="132" cy="220" rx="8" ry="12" fill="#f4c7a3" />
      <ellipse cx="268" cy="220" rx="8" ry="12" fill="#f4c7a3" />

      {/* Hair */}
      <path
        d="M 130 180 Q 130 130 200 120 Q 270 130 270 180 L 270 200 Q 265 195 260 200 Q 255 190 250 195 Q 245 185 240 192 Q 235 180 230 190 Q 225 175 220 185 Q 215 170 210 180 Q 205 165 200 175 Q 195 165 190 180 Q 185 170 180 185 Q 175 175 170 190 Q 165 180 160 192 Q 155 185 150 195 Q 145 190 140 200 Q 135 195 130 200 Z"
        fill="url(#hairGradient)"
      >
        <animate
          attributeName="d"
          values="M 130 180 Q 130 130 200 120 Q 270 130 270 180 L 270 200 Q 265 195 260 200 Q 255 190 250 195 Q 245 185 240 192 Q 235 180 230 190 Q 225 175 220 185 Q 215 170 210 180 Q 205 165 200 175 Q 195 165 190 180 Q 185 170 180 185 Q 175 175 170 190 Q 165 180 160 192 Q 155 185 150 195 Q 145 190 140 200 Q 135 195 130 200 Z;M 130 180 Q 130 125 200 115 Q 270 125 270 180 L 270 202 Q 265 197 260 202 Q 255 192 250 197 Q 245 187 240 194 Q 235 182 230 192 Q 225 177 220 187 Q 215 172 210 182 Q 205 167 200 177 Q 195 167 190 182 Q 185 172 180 187 Q 175 177 170 192 Q 165 182 160 194 Q 155 187 150 197 Q 145 192 140 202 Q 135 197 130 202 Z;M 130 180 Q 130 130 200 120 Q 270 130 270 180 L 270 200 Q 265 195 260 200 Q 255 190 250 195 Q 245 185 240 192 Q 235 180 230 190 Q 225 175 220 185 Q 215 170 210 180 Q 205 165 200 175 Q 195 165 190 180 Q 185 170 180 185 Q 175 175 170 190 Q 165 180 160 192 Q 155 185 150 195 Q 145 190 140 200 Q 135 195 130 200 Z"
          dur="3s"
          repeatCount="indefinite"
        />
      </path>

      {/* Eyes */}
      <g>
        {/* Left Eye */}
        <ellipse cx="175" cy="210" rx="12" ry="15" fill="white" />
        <circle cx="177" cy="212" r="8" fill="#2c1810">
          <animate
            attributeName="cy"
            values="212;213;212"
            dur="5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="179" cy="210" r="3" fill="white" />

        {/* Right Eye */}
        <ellipse cx="225" cy="210" rx="12" ry="15" fill="white" />
        <circle cx="227" cy="212" r="8" fill="#2c1810">
          <animate
            attributeName="cy"
            values="212;213;212"
            dur="5s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="229" cy="210" r="3" fill="white" />

        {/* Eyebrows */}
        <path
          d="M 160 195 Q 170 190 185 192"
          stroke="#2c1810"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 215 192 Q 230 190 240 195"
          stroke="#2c1810"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
      </g>

      {/* Nose */}
      <path d="M 200 220 L 195 235 Q 200 238 205 235 Z" fill="#f4c7a3" opacity="0.6" />

      {/* Smile */}
      <path
        d="M 180 250 Q 200 260 220 250"
        stroke="#d97f6b"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
      >
        <animate
          attributeName="d"
          values="M 180 250 Q 200 260 220 250;M 180 250 Q 200 262 220 250;M 180 250 Q 200 260 220 250"
          dur="4s"
          repeatCount="indefinite"
        />
      </path>

      {/* Glasses */}
      <g opacity="0.9">
        <rect x="160" y="200" width="30" height="25" rx="5" fill="none" stroke="#4f46e5" strokeWidth="3" />
        <rect x="210" y="200" width="30" height="25" rx="5" fill="none" stroke="#4f46e5" strokeWidth="3" />
        <line x1="190" y2="212" x2="210" y1="212" stroke="#4f46e5" strokeWidth="3" />
      </g>

      {/* Floating Code Symbols */}
      <text x="280" y="180" fill="#6366f1" fontSize="24" opacity="0.7" fontFamily="monospace">
        &lt;/&gt;
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0;0 -10;0 0"
          dur="3s"
          repeatCount="indefinite"
        />
        <animate attributeName="opacity" values="0.7;1;0.7" dur="3s" repeatCount="indefinite" />
      </text>

      <text x="100" y="260" fill="#8b5cf6" fontSize="20" opacity="0.6" fontFamily="monospace">
        AI
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0;0 -8;0 0"
          dur="4s"
          repeatCount="indefinite"
        />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="4s" repeatCount="indefinite" />
      </text>

      <text x="280" y="270" fill="#10b981" fontSize="18" opacity="0.6" fontFamily="monospace">
        ML
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0 0;0 -6;0 0"
          dur="3.5s"
          repeatCount="indefinite"
        />
        <animate attributeName="opacity" values="0.6;1;0.6" dur="3.5s" repeatCount="indefinite" />
      </text>
    </svg>
  );
}
