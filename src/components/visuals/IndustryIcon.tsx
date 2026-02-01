import React from "react";

export const IndustryIcon: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Factory building */}
    <rect x="30" y="90" width="60" height="90" fill="#555" />
    <rect x="100" y="70" width="70" height="110" fill="#666" />
    {/* Chimney */}
    <rect x="45" y="40" width="15" height="50" fill="#777" />
    <rect x="130" y="30" width="15" height="40" fill="#777" />
    {/* Smoke */}
    <circle cx="52" cy="30" r="8" fill="#999" opacity={0.3} />
    <circle cx="48" cy="18" r="6" fill="#999" opacity={0.2} />
    <circle cx="138" cy="20" r="8" fill="#999" opacity={0.3} />
    <circle cx="142" cy="10" r="6" fill="#999" opacity={0.2} />
    {/* Windows */}
    <rect x="42" y="100" width="15" height="15" fill="#FFD700" opacity={0.4} rx="1" />
    <rect x="65" y="100" width="15" height="15" fill="#FFD700" opacity={0.4} rx="1" />
    <rect x="112" y="80" width="15" height="15" fill="#FFD700" opacity={0.4} rx="1" />
    <rect x="140" y="80" width="15" height="15" fill="#FFD700" opacity={0.4} rx="1" />
    {/* CaCl₂ barrel */}
    <ellipse cx="135" cy="145" rx="20" ry="8" fill="#8B6914" />
    <rect x="115" y="145" width="40" height="25" fill="#A0822D" />
    <ellipse cx="135" cy="170" rx="20" ry="8" fill="#8B6914" />
    <text x="135" y="162" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="Inter, Arial, sans-serif">CaCl₂</text>
    {/* Ground */}
    <rect x="20" y="180" width="160" height="8" fill="#444" />
  </svg>
);
