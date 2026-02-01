import React from "react";

export const CrystalIcon: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Crystal 1 - Calcite */}
    <polygon
      points="60,40 90,20 110,40 100,80 70,80"
      fill="#B8D4E3"
      stroke="#8AB4D0"
      strokeWidth="1.5"
      opacity={0.8}
    />
    {/* Crystal 2 - Aragonite */}
    <polygon
      points="120,30 150,25 160,55 145,80 120,75"
      fill="#E8D4B8"
      stroke="#D0B48A"
      strokeWidth="1.5"
      opacity={0.8}
    />
    {/* Crystal 3 - Gypsum */}
    <polygon
      points="30,100 55,90 65,120 50,150 30,140"
      fill="#F0E8DC"
      stroke="#D8CCBC"
      strokeWidth="1.5"
      opacity={0.8}
    />
    {/* Crystal 4 - Dolomite */}
    <polygon
      points="90,100 120,90 135,115 125,145 95,140"
      fill="#C8B8A0"
      stroke="#A89878"
      strokeWidth="1.5"
      opacity={0.8}
    />
    {/* Crystal 5 - Apatite */}
    <polygon
      points="150,95 175,100 180,130 165,155 145,145"
      fill="#A0D8A0"
      stroke="#78B878"
      strokeWidth="1.5"
      opacity={0.8}
    />
    {/* Labels */}
    <text x="80" y="175" textAnchor="middle" fontSize="10" fill="#aaa" fontFamily="Inter, Arial, sans-serif">Calcite</text>
    <text x="140" y="175" textAnchor="middle" fontSize="10" fill="#aaa" fontFamily="Inter, Arial, sans-serif">Dolomite</text>
  </svg>
);
