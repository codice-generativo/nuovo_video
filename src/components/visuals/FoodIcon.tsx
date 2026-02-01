import React from "react";

export const FoodIcon: React.FC<{ size?: number }> = ({ size = 200 }) => (
  <svg width={size} height={size} viewBox="0 0 200 200" fill="none">
    {/* Milk bottle */}
    <rect x="25" y="70" width="35" height="60" rx="5" fill="white" opacity={0.9} />
    <rect x="30" y="55" width="25" height="20" rx="3" fill="white" opacity={0.9} />
    <rect x="28" y="68" width="30" height="5" fill="#4488CC" />
    {/* Cheese wedge */}
    <polygon points="80,90 130,90 130,130 80,130" fill="#FFD700" opacity={0.8} />
    <polygon points="80,90 105,70 130,90" fill="#FFEA00" opacity={0.8} />
    <circle cx="95" cy="108" r="4" fill="#E8C400" />
    <circle cx="115" cy="115" r="3" fill="#E8C400" />
    <circle cx="105" cy="100" r="2.5" fill="#E8C400" />
    {/* Yogurt cup */}
    <path d="M145 85 L140 130 L180 130 L175 85Z" fill="#FF9999" opacity={0.8} />
    <ellipse cx="160" cy="85" rx="18" ry="6" fill="#FF7777" />
    {/* Broccoli / green vegetables */}
    <circle cx="50" cy="160" r="12" fill="#2E8B57" />
    <circle cx="65" cy="155" r="10" fill="#3CB371" />
    <circle cx="55" cy="150" r="8" fill="#2E8B57" />
    <rect x="55" y="165" width="4" height="15" fill="#228B22" />
    {/* Fish */}
    <ellipse cx="120" cy="165" rx="25" ry="10" fill="#87CEEB" opacity={0.7} />
    <polygon points="145,165 160,155 160,175" fill="#87CEEB" opacity={0.7} />
    <circle cx="108" cy="163" r="2" fill="#333" />
    {/* Legumes */}
    <ellipse cx="170" cy="165" rx="6" ry="4" fill="#8B6914" />
    <ellipse cx="182" cy="162" rx="5" ry="3.5" fill="#A0822D" />
    <ellipse cx="176" cy="170" rx="5.5" ry="3.5" fill="#8B6914" />
  </svg>
);
