import React from "react";

export const PeriodicTableIcon: React.FC<{ size?: number }> = ({
  size = 200,
}) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Grid of element cells */}
    {[0, 1, 2, 3].map((row) =>
      [0, 1, 2, 3, 4].map((col) => (
        <rect
          key={`${row}-${col}`}
          x={20 + col * 34}
          y={20 + row * 40}
          width="30"
          height="36"
          rx="3"
          fill={row === 1 && col === 1 ? "#FFD700" : "#2a2a4a"}
          stroke={row === 1 && col === 1 ? "#FFD700" : "#444"}
          strokeWidth={row === 1 && col === 1 ? 2 : 1}
          opacity={row === 1 && col === 1 ? 1 : 0.4}
        />
      ))
    )}
    {/* Highlighted Ca cell */}
    <text
      x={37 + 34}
      y={33 + 40}
      textAnchor="middle"
      fontSize="9"
      fill="#1a1a2e"
      fontWeight="bold"
      fontFamily="Inter, Arial, sans-serif"
    >
      20
    </text>
    <text
      x={37 + 34}
      y={47 + 40}
      textAnchor="middle"
      fontSize="14"
      fill="#1a1a2e"
      fontWeight="bold"
      fontFamily="Inter, Arial, sans-serif"
    >
      Ca
    </text>
    {/* Labels */}
    <text
      x="100"
      y="190"
      textAnchor="middle"
      fontSize="13"
      fill="#aaa"
      fontFamily="Inter, Arial, sans-serif"
    >
      Gruppo 2 · Periodo 4 · Blocco s
    </text>
  </svg>
);
