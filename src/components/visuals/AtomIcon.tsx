import React from "react";

export const AtomIcon: React.FC<{ size?: number; color?: string }> = ({
  size = 200,
  color = "#FFD700",
}) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Nucleus */}
    <circle cx="100" cy="100" r="20" fill={color} opacity={0.9} />
    <text
      x="100"
      y="107"
      textAnchor="middle"
      fontSize="16"
      fontWeight="bold"
      fill="#1a1a2e"
      fontFamily="Inter, Arial, sans-serif"
    >
      Ca
    </text>
    {/* Electron orbits */}
    <ellipse
      cx="100"
      cy="100"
      rx="70"
      ry="30"
      stroke={color}
      strokeWidth="1.5"
      opacity={0.5}
      transform="rotate(0 100 100)"
    />
    <ellipse
      cx="100"
      cy="100"
      rx="70"
      ry="30"
      stroke={color}
      strokeWidth="1.5"
      opacity={0.5}
      transform="rotate(60 100 100)"
    />
    <ellipse
      cx="100"
      cy="100"
      rx="70"
      ry="30"
      stroke={color}
      strokeWidth="1.5"
      opacity={0.5}
      transform="rotate(120 100 100)"
    />
    {/* Electrons */}
    <circle cx="170" cy="100" r="5" fill="#00BFFF" />
    <circle cx="65" cy="60" r="5" fill="#00BFFF" />
    <circle cx="135" cy="140" r="5" fill="#00BFFF" />
  </svg>
);
