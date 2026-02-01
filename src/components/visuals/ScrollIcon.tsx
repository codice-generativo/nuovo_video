import React from "react";

export const ScrollIcon: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Scroll body */}
    <rect x="50" y="30" width="100" height="130" rx="5" fill="#D4A574" opacity={0.9} />
    {/* Top curl */}
    <ellipse cx="50" cy="35" rx="12" ry="18" fill="#C4955A" />
    <ellipse cx="150" cy="35" rx="12" ry="18" fill="#C4955A" />
    {/* Bottom curl */}
    <ellipse cx="50" cy="155" rx="12" ry="18" fill="#C4955A" />
    <ellipse cx="150" cy="155" rx="12" ry="18" fill="#C4955A" />
    {/* Text lines */}
    <line x1="70" y1="60" x2="130" y2="60" stroke="#5C3D1E" strokeWidth="2" opacity={0.6} />
    <line x1="70" y1="75" x2="130" y2="75" stroke="#5C3D1E" strokeWidth="2" opacity={0.6} />
    <line x1="70" y1="90" x2="120" y2="90" stroke="#5C3D1E" strokeWidth="2" opacity={0.6} />
    {/* Latin text */}
    <text
      x="100"
      y="120"
      textAnchor="middle"
      fontSize="16"
      fontStyle="italic"
      fill="#5C3D1E"
      fontFamily="Georgia, Times New Roman, serif"
    >
      calx, calcis
    </text>
    <text
      x="100"
      y="145"
      textAnchor="middle"
      fontSize="11"
      fill="#7C5D3E"
      fontFamily="Inter, Arial, sans-serif"
    >
      pietra calcarea
    </text>
  </svg>
);
