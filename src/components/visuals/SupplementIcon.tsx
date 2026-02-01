import React from "react";

export const SupplementIcon: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Pill bottle */}
    <rect x="65" y="50" width="70" height="100" rx="8" fill="#4488CC" opacity={0.8} />
    <rect x="72" y="35" width="56" height="20" rx="5" fill="#336699" />
    {/* Label */}
    <rect x="72" y="75" width="56" height="35" rx="3" fill="white" opacity={0.9} />
    <text x="100" y="90" textAnchor="middle" fontSize="10" fill="#336699" fontWeight="bold" fontFamily="Inter, Arial, sans-serif">CALCIO</text>
    <text x="100" y="103" textAnchor="middle" fontSize="8" fill="#666" fontFamily="Inter, Arial, sans-serif">CaCO₃</text>
    {/* Pills */}
    <ellipse cx="45" cy="170" rx="14" ry="8" fill="#FF6B6B" />
    <ellipse cx="45" cy="170" rx="14" ry="8" fill="white" opacity={0.5} clipPath="inset(0 50% 0 0)" />
    <ellipse cx="100" cy="175" rx="12" ry="7" fill="#FFD700" />
    <ellipse cx="155" cy="170" rx="14" ry="8" fill="#44CC44" />
    <ellipse cx="155" cy="170" rx="14" ry="8" fill="white" opacity={0.5} clipPath="inset(0 50% 0 0)" />
    {/* Vitamin D sun */}
    <circle cx="160" cy="55" r="18" fill="#FFD700" opacity={0.6} />
    <text x="160" y="52" textAnchor="middle" fontSize="8" fill="#1a1a2e" fontFamily="Inter, Arial, sans-serif">Vit</text>
    <text x="160" y="63" textAnchor="middle" fontSize="12" fill="#1a1a2e" fontWeight="bold" fontFamily="Inter, Arial, sans-serif">D</text>
    {/* Rays */}
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <line
        key={angle}
        x1={160 + 22 * Math.cos((angle * Math.PI) / 180)}
        y1={55 + 22 * Math.sin((angle * Math.PI) / 180)}
        x2={160 + 28 * Math.cos((angle * Math.PI) / 180)}
        y2={55 + 28 * Math.sin((angle * Math.PI) / 180)}
        stroke="#FFD700"
        strokeWidth="1.5"
        opacity={0.5}
      />
    ))}
  </svg>
);
