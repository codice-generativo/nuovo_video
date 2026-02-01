import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { AtomIcon } from "../components/visuals/AtomIcon";

export const Scene01_Intro: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const titleScale = spring({
    frame: frame - 10,
    fps,
    from: 0.7,
    to: 1,
    config: { damping: 10, stiffness: 60 },
  });
  const subtitleOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const atomOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const atomRotation = interpolate(frame, [0, 170], [0, 360]);

  const exitOpacity = interpolate(frame, [150, 170], [1, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: "radial-gradient(ellipse at center, #1a1a3e 0%, #0a0a1e 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 60,
        boxSizing: "border-box",
        fontFamily: "Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif",
        opacity: exitOpacity,
        overflow: "hidden",
      }}
    >
      {/* Animated atom */}
      <div
        style={{
          opacity: atomOpacity,
          transform: `rotate(${atomRotation}deg)`,
          marginBottom: 30,
        }}
      >
        <AtomIcon size={220} color="#FFD700" />
      </div>

      {/* Title */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: 72,
            fontWeight: 900,
            color: "white",
            margin: 0,
            letterSpacing: "-0.03em",
            lineHeight: 1.1,
          }}
        >
          IL CALCIO
        </h1>
        <div
          style={{
            fontSize: 36,
            color: "#FFD700",
            fontWeight: 600,
            marginTop: 10,
          }}
        >
          Elemento Chimico · Ca · Z = 20
        </div>
      </div>

      {/* Subtitle */}
      <div
        style={{
          opacity: subtitleOpacity,
          marginTop: 30,
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontSize: 26,
            color: "rgba(255,255,255,0.7)",
            margin: 0,
            maxWidth: 900,
            lineHeight: 1.5,
          }}
        >
          Metallo alcalino-terroso della tavola periodica
        </p>
      </div>
    </div>
  );
};
