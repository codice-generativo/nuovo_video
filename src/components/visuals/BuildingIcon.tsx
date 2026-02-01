import React from "react";

export const BuildingIcon: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Building */}
    <rect x="55" y="50" width="90" height="130" fill="#8B7355" />
    {/* Roof */}
    <polygon points="45,50 100,15 155,50" fill="#A0522D" />
    {/* Windows */}
    {[0, 1, 2].map((row) =>
      [0, 1].map((col) => (
        <rect
          key={`w-${row}-${col}`}
          x={70 + col * 40}
          y={60 + row * 35}
          width="20"
          height="25"
          fill="#FFD700"
          opacity={0.5}
          rx="2"
        />
      ))
    )}
    {/* Door */}
    <rect x="87" y="150" width="26" height="30" fill="#5C3D1E" rx="3" />
    {/* Bricks texture */}
    <line x1="55" y1="80" x2="145" y2="80" stroke="#7A6245" strokeWidth="0.5" />
    <line x1="55" y1="115" x2="145" y2="115" stroke="#7A6245" strokeWidth="0.5" />
    <line x1="55" y1="150" x2="145" y2="150" stroke="#7A6245" strokeWidth="0.5" />
    {/* Ground */}
    <rect x="30" y="180" width="140" height="10" fill="#666" rx="2" />
  </svg>
);
