import React from "react";

export const IsotopeIcon: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Isotope diagram - nucleus representations */}
    {/* Ca-40 */}
    <circle cx="70" cy="80" r="35" fill="#FFD700" opacity={0.3} stroke="#FFD700" strokeWidth="2" />
    <circle cx="70" cy="80" r="18" fill="#FFD700" opacity={0.7} />
    <text x="70" y="75" textAnchor="middle" fontSize="10" fill="#1a1a2e" fontWeight="bold" fontFamily="Inter, Arial, sans-serif">⁴⁰</text>
    <text x="70" y="90" textAnchor="middle" fontSize="14" fill="#1a1a2e" fontWeight="bold" fontFamily="Inter, Arial, sans-serif">Ca</text>
    <text x="70" y="130" textAnchor="middle" fontSize="11" fill="#ccc" fontFamily="Inter, Arial, sans-serif">96,94%</text>
    {/* Ca-48 */}
    <circle cx="140" cy="80" r="40" fill="#FF6B6B" opacity={0.3} stroke="#FF6B6B" strokeWidth="2" />
    <circle cx="140" cy="80" r="20" fill="#FF6B6B" opacity={0.7} />
    <text x="140" y="75" textAnchor="middle" fontSize="10" fill="white" fontWeight="bold" fontFamily="Inter, Arial, sans-serif">⁴⁸</text>
    <text x="140" y="90" textAnchor="middle" fontSize="14" fill="white" fontWeight="bold" fontFamily="Inter, Arial, sans-serif">Ca</text>
    <text x="140" y="130" textAnchor="middle" fontSize="11" fill="#ccc" fontFamily="Inter, Arial, sans-serif">0,187%</text>
    {/* Label */}
    <text x="100" y="170" textAnchor="middle" fontSize="12" fill="#aaa" fontFamily="Inter, Arial, sans-serif">6 isotopi naturali stabili</text>
  </svg>
);
