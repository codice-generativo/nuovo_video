import React from "react";
import {
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
} from "remotion";

interface SceneLayoutProps {
  title: string;
  subtitle?: string;
  body: string;
  visual: React.ReactNode;
  bgColor?: string;
  accentColor?: string;
  sectionNumber?: number;
}

export const SceneLayout: React.FC<SceneLayoutProps> = ({
  title,
  subtitle,
  body,
  visual,
  bgColor = "#0f0f23",
  accentColor = "#FFD700",
  sectionNumber,
}) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Entrance animations
  const titleOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateRight: "clamp",
  });
  const titleY = spring({
    frame,
    fps,
    from: -30,
    to: 0,
    config: { damping: 12, stiffness: 80 },
  });

  const visualScale = spring({
    frame: frame - 5,
    fps,
    from: 0.5,
    to: 1,
    config: { damping: 10, stiffness: 60 },
  });
  const visualOpacity = interpolate(frame, [5, 20], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const bodyOpacity = interpolate(frame, [15, 30], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const bodyY = spring({
    frame: frame - 15,
    fps,
    from: 20,
    to: 0,
    config: { damping: 12, stiffness: 80 },
  });

  // Exit animation (fade out in last 10 frames)
  const exitOpacity = interpolate(frame, [150, 170], [1, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: bgColor,
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
      {/* Section number indicator */}
      {sectionNumber !== undefined && (
        <div
          style={{
            position: "absolute",
            top: 30,
            left: 40,
            display: "flex",
            alignItems: "center",
            gap: 8,
            opacity: titleOpacity * 0.5,
          }}
        >
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: "50%",
              backgroundColor: accentColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 13,
              fontWeight: "bold",
              color: "#1a1a2e",
            }}
          >
            {sectionNumber}
          </div>
          <div
            style={{
              width: 60,
              height: 3,
              backgroundColor: accentColor,
              borderRadius: 2,
              opacity: 0.4,
            }}
          />
        </div>
      )}

      {/* Progress bar */}
      {sectionNumber !== undefined && (
        <div
          style={{
            position: "absolute",
            bottom: 20,
            left: 60,
            right: 60,
            height: 3,
            backgroundColor: "rgba(255,255,255,0.1)",
            borderRadius: 2,
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${(sectionNumber / 20) * 100}%`,
              backgroundColor: accentColor,
              borderRadius: 2,
              opacity: 0.5,
            }}
          />
        </div>
      )}

      {/* Title area */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 8,
          marginBottom: 20,
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
        }}
      >
        <h1
          style={{
            fontSize: 48,
            fontWeight: 800,
            color: "white",
            margin: 0,
            textAlign: "center",
            maxWidth: 1400,
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            style={{
              fontSize: 24,
              color: accentColor,
              margin: 0,
              fontWeight: 500,
              textAlign: "center",
              maxWidth: 1200,
            }}
          >
            {subtitle}
          </p>
        )}
      </div>

      {/* Visual */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
          marginBottom: 20,
          opacity: visualOpacity,
          transform: `scale(${visualScale})`,
        }}
      >
        {visual}
      </div>

      {/* Body text */}
      <div
        style={{
          maxWidth: 1200,
          opacity: bodyOpacity,
          transform: `translateY(${bodyY}px)`,
        }}
      >
        <p
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.85)",
            margin: 0,
            textAlign: "center",
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          {body}
        </p>
      </div>
    </div>
  );
};
