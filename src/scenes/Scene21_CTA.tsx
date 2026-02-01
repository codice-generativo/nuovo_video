import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";
import { SubscribeIcon } from "../components/visuals/SubscribeIcon";

export const Scene21_CTA: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const bgPulse = interpolate(
    frame % 60,
    [0, 30, 60],
    [0.8, 1, 0.8]
  );

  const titleScale = spring({
    frame,
    fps,
    from: 0.3,
    to: 1,
    config: { damping: 8, stiffness: 50 },
  });
  const titleOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const buttonScale = spring({
    frame: frame - 20,
    fps,
    from: 0,
    to: 1,
    config: { damping: 8, stiffness: 60 },
  });

  const buttonPulse = interpolate(
    (frame - 40) % 40,
    [0, 20, 40],
    [1, 1.08, 1]
  );

  const iconOpacity = interpolate(frame, [10, 25], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const arrowBounce = interpolate(
    frame % 30,
    [0, 15, 30],
    [0, 10, 0]
  );

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        background: `radial-gradient(ellipse at center, rgba(255,0,0,${0.15 * bgPulse}) 0%, #0a0a1e 70%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 60,
        boxSizing: "border-box",
        fontFamily: "Inter, Noto Sans, Segoe UI, Roboto, Arial, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Icon */}
      <div style={{ opacity: iconOpacity, marginBottom: 20 }}>
        <SubscribeIcon size={180} />
      </div>

      {/* Main CTA text */}
      <div
        style={{
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
          textAlign: "center",
          marginBottom: 30,
        }}
      >
        <h1
          style={{
            fontSize: 68,
            fontWeight: 900,
            color: "white",
            margin: 0,
            letterSpacing: "-0.02em",
            textShadow: "0 0 30px rgba(255,0,0,0.5)",
          }}
        >
          ISCRIVITI AL CANALE
        </h1>
      </div>

      {/* Subscribe button */}
      <div
        style={{
          transform: `scale(${buttonScale * buttonPulse})`,
        }}
      >
        <div
          style={{
            backgroundColor: "#FF0000",
            color: "white",
            fontSize: 32,
            fontWeight: 700,
            padding: "18px 60px",
            borderRadius: 8,
            letterSpacing: "0.05em",
            boxShadow: "0 4px 20px rgba(255,0,0,0.4)",
          }}
        >
          ISCRIVITI
        </div>
      </div>

      {/* Animated arrow */}
      <div
        style={{
          marginTop: 30,
          transform: `translateY(${arrowBounce}px)`,
          fontSize: 40,
          color: "#FF0000",
        }}
      >
        {"▼"}
      </div>

      {/* Thank you text */}
      <div
        style={{
          marginTop: 20,
          opacity: interpolate(frame, [40, 60], [0, 0.7], {
            extrapolateRight: "clamp",
            extrapolateLeft: "clamp",
          }),
        }}
      >
        <p
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.6)",
            margin: 0,
          }}
        >
          Grazie per aver guardato!
        </p>
      </div>
    </div>
  );
};
