import React from "react";

export const GlobeIcon: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Globe */}
    <circle cx="100" cy="90" r="70" fill="#1a4a7a" />
    {/* Continents */}
    <ellipse cx="80" cy="65" rx="22" ry="18" fill="#2E8B57" opacity={0.7} />
    <ellipse cx="120" cy="85" rx="16" ry="20" fill="#2E8B57" opacity={0.7} />
    <ellipse cx="75" cy="108" rx="14" ry="10" fill="#2E8B57" opacity={0.7} />
    {/* Grid lines */}
    <ellipse cx="100" cy="90" rx="70" ry="30" stroke="white" strokeWidth="0.5" fill="none" opacity={0.2} />
    <ellipse cx="100" cy="90" rx="30" ry="70" stroke="white" strokeWidth="0.5" fill="none" opacity={0.2} />
    <line x1="30" y1="90" x2="170" y2="90" stroke="white" strokeWidth="0.5" opacity={0.2} />
    {/* Ca orbiting */}
    <circle cx="100" cy="90" r="85" stroke="#FFD700" strokeWidth="1.5" strokeDasharray="5 5" fill="none" opacity={0.4} />
    <circle cx="185" cy="90" r="12" fill="#FFD700" opacity={0.8} />
    <text x="185" y="95" textAnchor="middle" fontSize="11" fill="#1a1a2e" fontWeight="bold" fontFamily="Inter, Arial, sans-serif">Ca</text>
    {/* Stand */}
    <path d="M100 160 L100 175" stroke="#888" strokeWidth="3" />
    <ellipse cx="100" cy="180" rx="30" ry="6" fill="#666" />
  </svg>
);
