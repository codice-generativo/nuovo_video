import React from "react";

export const EarthCrustIcon: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Earth circle */}
    <circle cx="100" cy="100" r="80" fill="#1a4a7a" />
    {/* Continents */}
    <ellipse cx="85" cy="75" rx="25" ry="20" fill="#2E8B57" opacity={0.7} />
    <ellipse cx="125" cy="95" rx="18" ry="22" fill="#2E8B57" opacity={0.7} />
    <ellipse cx="80" cy="120" rx="15" ry="12" fill="#2E8B57" opacity={0.7} />
    {/* Crust layer indicator */}
    <path
      d="M20 100 A80 80 0 0 1 180 100"
      stroke="#FFD700"
      strokeWidth="4"
      strokeDasharray="8 4"
      fill="none"
      opacity={0.8}
    />
    {/* Percentage label */}
    <rect x="60" y="155" width="80" height="30" rx="10" fill="#FFD700" opacity={0.9} />
    <text
      x="100"
      y="175"
      textAnchor="middle"
      fontSize="16"
      fontWeight="bold"
      fill="#1a1a2e"
      fontFamily="Inter, Arial, sans-serif"
    >
      ~4% Ca
    </text>
  </svg>
);
