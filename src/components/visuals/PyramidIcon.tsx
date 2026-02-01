import React from "react";

export const PyramidIcon: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Sky gradient */}
    <rect x="0" y="0" width="200" height="140" fill="#1a1a3e" opacity={0.3} />
    {/* Sand */}
    <rect x="0" y="140" width="200" height="60" fill="#D4A574" opacity={0.4} />
    {/* Pyramid - left face */}
    <polygon points="100,25 20,160 100,160" fill="#C4955A" />
    {/* Pyramid - right face */}
    <polygon points="100,25 180,160 100,160" fill="#D4A574" />
    {/* Limestone layers */}
    <line x1="60" y1="92" x2="140" y2="92" stroke="#E8D4B8" strokeWidth="0.8" opacity={0.6} />
    <line x1="45" y1="120" x2="155" y2="120" stroke="#E8D4B8" strokeWidth="0.8" opacity={0.6} />
    <line x1="32" y1="145" x2="168" y2="145" stroke="#E8D4B8" strokeWidth="0.8" opacity={0.6} />
    {/* Sun */}
    <circle cx="160" cy="40" r="18" fill="#FFD700" opacity={0.7} />
    {/* Stars */}
    <circle cx="30" cy="30" r="1.5" fill="white" opacity={0.5} />
    <circle cx="55" cy="50" r="1" fill="white" opacity={0.4} />
    <circle cx="140" cy="20" r="1" fill="white" opacity={0.4} />
    {/* CaCO₃ label */}
    <text
      x="100"
      y="185"
      textAnchor="middle"
      fontSize="12"
      fill="#FFD700"
      fontFamily="Inter, Arial, sans-serif"
    >
      Calcare · CaCO₃
    </text>
  </svg>
);
