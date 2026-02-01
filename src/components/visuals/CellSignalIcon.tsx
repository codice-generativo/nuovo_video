import React from "react";

export const CellSignalIcon: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Cell membrane */}
    <ellipse cx="100" cy="100" rx="80" ry="65" fill="#2a1a4a" stroke="#8844CC" strokeWidth="2" />
    {/* Nucleus */}
    <circle cx="100" cy="100" r="25" fill="#44228a" stroke="#AA66FF" strokeWidth="1.5" />
    {/* Ca²⁺ ions floating */}
    <circle cx="60" cy="70" r="10" fill="#FFD700" opacity={0.8} />
    <text x="60" y="74" textAnchor="middle" fontSize="8" fill="#1a1a2e" fontWeight="bold" fontFamily="Inter, Arial, sans-serif">Ca²⁺</text>
    <circle cx="140" cy="80" r="10" fill="#FFD700" opacity={0.8} />
    <text x="140" y="84" textAnchor="middle" fontSize="8" fill="#1a1a2e" fontWeight="bold" fontFamily="Inter, Arial, sans-serif">Ca²⁺</text>
    <circle cx="80" cy="130" r="10" fill="#FFD700" opacity={0.8} />
    <text x="80" y="134" textAnchor="middle" fontSize="8" fill="#1a1a2e" fontWeight="bold" fontFamily="Inter, Arial, sans-serif">Ca²⁺</text>
    {/* Signal waves */}
    <path d="M65 68 Q80 50 95 75" stroke="#FFD700" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
    <path d="M135 78 Q115 60 105 80" stroke="#FFD700" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
    <path d="M85 128 Q95 110 100 120" stroke="#FFD700" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
    {/* Label */}
    <text x="100" y="185" textAnchor="middle" fontSize="11" fill="#AA66FF" fontFamily="Inter, Arial, sans-serif">
      Messaggero chimico
    </text>
  </svg>
);
