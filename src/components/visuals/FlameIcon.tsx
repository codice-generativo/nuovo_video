import React from "react";

export const FlameIcon: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Outer flame */}
    <path
      d="M100 20 C70 70 40 110 55 150 C65 175 85 185 100 185 C115 185 135 175 145 150 C160 110 130 70 100 20Z"
      fill="#FF8C00"
      opacity={0.8}
    />
    {/* Inner flame */}
    <path
      d="M100 60 C85 90 65 120 75 150 C80 165 90 172 100 172 C110 172 120 165 125 150 C135 120 115 90 100 60Z"
      fill="#FFD700"
      opacity={0.9}
    />
    {/* Core */}
    <path
      d="M100 100 C93 115 85 135 90 155 C93 163 97 167 100 167 C103 167 107 163 110 155 C115 135 107 115 100 100Z"
      fill="#FFFACD"
      opacity={0.9}
    />
    {/* Label */}
    <text
      x="100"
      y="198"
      textAnchor="middle"
      fontSize="11"
      fill="#FFD700"
      fontFamily="Inter, Arial, sans-serif"
    >
      Giallo-arancione
    </text>
  </svg>
);
