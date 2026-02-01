import React from "react";

export const SubscribeIcon: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Play button / YouTube style */}
    <rect x="30" y="50" width="140" height="100" rx="15" fill="#FF0000" opacity={0.9} />
    {/* Play triangle */}
    <polygon points="85,75 85,125 125,100" fill="white" />
    {/* Bell icon */}
    <path
      d="M100 15 C90 15 82 23 82 33 L82 40 C75 45 70 52 70 60 L70 70 L65 75 L65 80 L135 80 L135 75 L130 70 L130 60 C130 52 125 45 118 40 L118 33 C118 23 110 15 100 15Z"
      fill="#FFD700"
      opacity={0.8}
    />
    {/* Bell clapper */}
    <circle cx="100" cy="85" r="5" fill="#FFD700" opacity={0.8} />
    {/* Notification dot */}
    <circle cx="125" cy="25" r="8" fill="#FF0000" />
    <text x="125" y="29" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="Inter, Arial, sans-serif">1</text>
    {/* Subscribe text hint */}
    <text
      x="100"
      y="180"
      textAnchor="middle"
      fontSize="14"
      fontWeight="bold"
      fill="#FF0000"
      fontFamily="Inter, Arial, sans-serif"
    >
      ▼ ISCRIVITI ▼
    </text>
  </svg>
);
