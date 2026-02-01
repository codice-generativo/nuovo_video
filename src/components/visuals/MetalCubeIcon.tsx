import React from "react";

export const MetalCubeIcon: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* 3D metallic cube */}
    {/* Front face */}
    <polygon points="60,80 140,80 140,160 60,160" fill="#C0C0C0" />
    {/* Top face */}
    <polygon points="60,80 100,50 180,50 140,80" fill="#E8E8E8" />
    {/* Right face */}
    <polygon points="140,80 180,50 180,130 140,160" fill="#A0A0A0" />
    {/* Shine lines */}
    <line x1="80" y1="90" x2="80" y2="150" stroke="white" strokeWidth="1" opacity={0.3} />
    <line x1="90" y1="85" x2="90" y2="155" stroke="white" strokeWidth="1" opacity={0.2} />
    {/* Label */}
    <text
      x="100"
      y="130"
      textAnchor="middle"
      fontSize="22"
      fontWeight="bold"
      fill="#333"
      fontFamily="Inter, Arial, sans-serif"
    >
      Ca
    </text>
    {/* Sparkles */}
    <circle cx="75" cy="65" r="3" fill="white" opacity={0.7} />
    <circle cx="160" cy="45" r="2" fill="white" opacity={0.5} />
  </svg>
);
