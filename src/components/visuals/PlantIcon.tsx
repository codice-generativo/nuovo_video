import React from "react";

export const PlantIcon: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Stem */}
    <path d="M100 180 L100 80" stroke="#2E8B57" strokeWidth="4" strokeLinecap="round" />
    {/* Leaves */}
    <path
      d="M100 120 C80 100 60 90 50 80 C55 100 70 115 100 120Z"
      fill="#3CB371"
      opacity={0.8}
    />
    <path
      d="M100 100 C120 80 140 70 155 60 C145 80 130 95 100 100Z"
      fill="#2E8B57"
      opacity={0.8}
    />
    <path
      d="M100 80 C85 60 70 45 55 35 C65 55 80 70 100 80Z"
      fill="#3CB371"
      opacity={0.9}
    />
    {/* Leaf veins */}
    <path d="M100 120 L70 95" stroke="#228B22" strokeWidth="1" opacity={0.5} />
    <path d="M100 100 L135 72" stroke="#228B22" strokeWidth="1" opacity={0.5} />
    <path d="M100 80 L70 52" stroke="#228B22" strokeWidth="1" opacity={0.5} />
    {/* Roots */}
    <path d="M100 180 C90 190 85 195 80 200" stroke="#8B6914" strokeWidth="2" />
    <path d="M100 180 C110 190 115 195 120 200" stroke="#8B6914" strokeWidth="2" />
    <path d="M100 180 L100 200" stroke="#8B6914" strokeWidth="2" />
    {/* Ca dots in soil */}
    <circle cx="85" cy="195" r="3" fill="#FFD700" opacity={0.6} />
    <circle cx="115" cy="192" r="3" fill="#FFD700" opacity={0.6} />
    <circle cx="100" cy="198" r="3" fill="#FFD700" opacity={0.6} />
  </svg>
);
