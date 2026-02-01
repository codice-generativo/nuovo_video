import React from "react";

export const BoneIcon: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Bone shape */}
    <path
      d="M55 55 C40 40 30 50 35 65 C25 70 25 85 38 88 L80 120 L120 80 L88 38 C85 25 70 25 65 35 C50 30 40 40 55 55Z"
      fill="#F5E6D3"
      stroke="#D4C4B0"
      strokeWidth="2"
    />
    <path
      d="M145 145 C160 160 170 150 165 135 C175 130 175 115 162 112 L120 80 L80 120 L112 162 C115 175 130 175 135 165 C150 170 160 160 145 145Z"
      fill="#F5E6D3"
      stroke="#D4C4B0"
      strokeWidth="2"
    />
    {/* Tooth */}
    <path
      d="M155 25 C150 20 145 22 143 28 C140 22 135 20 130 25 C125 35 135 50 143 60 C150 50 160 35 155 25Z"
      fill="white"
      stroke="#ddd"
      strokeWidth="1.5"
    />
    {/* Coral hint */}
    <path
      d="M25 140 L30 120 L35 135 L40 115 L45 140"
      stroke="#FF6B6B"
      strokeWidth="2.5"
      fill="none"
      strokeLinecap="round"
    />
    {/* Ca label */}
    <text x="100" y="185" textAnchor="middle" fontSize="12" fill="#FFD700" fontWeight="bold" fontFamily="Inter, Arial, sans-serif">
      Fosfato di calcio · Idrossiapatite
    </text>
  </svg>
);
