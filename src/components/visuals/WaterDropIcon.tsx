import React from "react";

export const WaterDropIcon: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Water drop shape */}
    <path
      d="M100 20 C100 20 55 90 55 130 C55 160 75 180 100 180 C125 180 145 160 145 130 C145 90 100 20 100 20Z"
      fill="#4488CC"
      opacity={0.7}
    />
    {/* Inner highlight */}
    <path
      d="M100 50 C100 50 75 100 75 125 C75 145 85 155 100 155 C115 155 125 145 125 125 C125 100 100 50 100 50Z"
      fill="#66AAEE"
      opacity={0.5}
    />
    {/* Shine */}
    <ellipse cx="85" cy="110" rx="8" ry="12" fill="white" opacity={0.3} />
    {/* Ca²⁺ ions */}
    <circle cx="90" cy="130" r="8" fill="#FFD700" opacity={0.7} />
    <text x="90" y="134" textAnchor="middle" fontSize="8" fill="#1a1a2e" fontWeight="bold" fontFamily="Inter, Arial, sans-serif">Ca²⁺</text>
    <circle cx="115" cy="120" r="8" fill="#FFD700" opacity={0.7} />
    <text x="115" y="124" textAnchor="middle" fontSize="8" fill="#1a1a2e" fontWeight="bold" fontFamily="Inter, Arial, sans-serif">Ca²⁺</text>
  </svg>
);
