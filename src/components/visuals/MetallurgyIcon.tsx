import React from "react";

export const MetallurgyIcon: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Crucible/furnace */}
    <path
      d="M60 70 L60 150 C60 165 80 175 100 175 C120 175 140 165 140 150 L140 70Z"
      fill="#555"
      stroke="#888"
      strokeWidth="2"
    />
    {/* Molten metal */}
    <ellipse cx="100" cy="130" rx="35" ry="12" fill="#FF6B00" opacity={0.8} />
    <ellipse cx="100" cy="125" rx="30" ry="8" fill="#FFD700" opacity={0.7} />
    {/* Sparks */}
    <circle cx="80" cy="90" r="3" fill="#FFD700" opacity={0.8} />
    <circle cx="120" cy="85" r="2" fill="#FF8C00" opacity={0.7} />
    <circle cx="95" cy="80" r="2.5" fill="#FFD700" opacity={0.9} />
    <circle cx="110" cy="75" r="2" fill="#FF6B00" opacity={0.6} />
    <circle cx="85" cy="70" r="1.5" fill="#FFD700" opacity={0.5} />
    {/* Flames below */}
    <path d="M75 175 C75 175 70 190 80 190 C85 190 80 180 80 175" fill="#FF4400" opacity={0.6} />
    <path d="M95 175 C95 175 90 195 100 195 C105 195 100 180 100 175" fill="#FF6600" opacity={0.7} />
    <path d="M115 175 C115 175 110 190 120 190 C125 190 120 180 120 175" fill="#FF4400" opacity={0.6} />
    {/* Steel bars */}
    <rect x="155" y="80" width="10" height="80" rx="2" fill="#A0A0A0" />
    <rect x="170" y="90" width="10" height="70" rx="2" fill="#B0B0B0" />
    {/* Label */}
    <text x="165" y="70" textAnchor="middle" fontSize="10" fill="#aaa" fontFamily="Inter, Arial, sans-serif">
      Acciaio
    </text>
  </svg>
);
