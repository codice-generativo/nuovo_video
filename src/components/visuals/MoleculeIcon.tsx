import React from "react";

export const MoleculeIcon: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Central Ca atom */}
    <circle cx="100" cy="100" r="22" fill="#FFD700" />
    <text
      x="100"
      y="106"
      textAnchor="middle"
      fontSize="14"
      fontWeight="bold"
      fill="#1a1a2e"
      fontFamily="Inter, Arial, sans-serif"
    >
      Ca
    </text>
    {/* Bonds */}
    <line x1="122" y1="100" x2="155" y2="70" stroke="#888" strokeWidth="2" />
    <line x1="122" y1="100" x2="155" y2="130" stroke="#888" strokeWidth="2" />
    <line x1="78" y1="100" x2="45" y2="70" stroke="#888" strokeWidth="2" />
    <line x1="78" y1="100" x2="45" y2="130" stroke="#888" strokeWidth="2" />
    {/* Surrounding atoms */}
    <circle cx="160" cy="65" r="14" fill="#FF4444" opacity={0.8} />
    <text x="160" y="70" textAnchor="middle" fontSize="11" fill="white" fontFamily="Inter, Arial, sans-serif">CO₃</text>
    <circle cx="160" cy="135" r="14" fill="#4488FF" opacity={0.8} />
    <text x="160" y="140" textAnchor="middle" fontSize="11" fill="white" fontFamily="Inter, Arial, sans-serif">SO₄</text>
    <circle cx="40" cy="65" r="14" fill="#44CC44" opacity={0.8} />
    <text x="40" y="70" textAnchor="middle" fontSize="11" fill="white" fontFamily="Inter, Arial, sans-serif">PO₄</text>
    <circle cx="40" cy="135" r="14" fill="#CC44CC" opacity={0.8} />
    <text x="40" y="140" textAnchor="middle" fontSize="10" fill="white" fontFamily="Inter, Arial, sans-serif">SiO₄</text>
  </svg>
);
