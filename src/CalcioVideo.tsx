import React from "react";
import { Audio, Sequence, staticFile, Loop } from "remotion";

import { Scene01_Intro } from "./scenes/Scene01_Intro";
import { Scene02_TavolaPeriodica } from "./scenes/Scene02_TavolaPeriodica";
import { Scene03_Etimologia } from "./scenes/Scene03_Etimologia";
import { Scene04_ProprietaFisiche } from "./scenes/Scene04_ProprietaFisiche";
import { Scene05_Reattivita } from "./scenes/Scene05_Reattivita";
import { Scene06_Composti } from "./scenes/Scene06_Composti";
import { Scene07_Abbondanza } from "./scenes/Scene07_Abbondanza";
import { Scene08_Minerali } from "./scenes/Scene08_Minerali";
import { Scene09_Acqua } from "./scenes/Scene09_Acqua";
import { Scene10_Isotopi } from "./scenes/Scene10_Isotopi";
import { Scene11_OssaDenti } from "./scenes/Scene11_OssaDenti";
import { Scene12_Messaggero } from "./scenes/Scene12_Messaggero";
import { Scene13_Piante } from "./scenes/Scene13_Piante";
import { Scene14_Costruzioni } from "./scenes/Scene14_Costruzioni";
import { Scene15_Piramide } from "./scenes/Scene15_Piramide";
import { Scene16_Metallurgia } from "./scenes/Scene16_Metallurgia";
import { Scene17_Industria } from "./scenes/Scene17_Industria";
import { Scene18_Nutrizione } from "./scenes/Scene18_Nutrizione";
import { Scene19_Integratori } from "./scenes/Scene19_Integratori";
import { Scene20_Sintesi } from "./scenes/Scene20_Sintesi";
import { Scene21_CTA } from "./scenes/Scene21_CTA";

/*
 * Timeline:
 *  20 content scenes × 171 frames = 3420 frames
 *  1 CTA scene × 180 frames = 180 frames
 *  Total = 3600 frames = 120 seconds @ 30fps
 */

const SCENE_DURATION = 171; // ~5.7 seconds each
const CTA_DURATION = 180; // 6 seconds

const scenes = [
  Scene01_Intro,
  Scene02_TavolaPeriodica,
  Scene03_Etimologia,
  Scene04_ProprietaFisiche,
  Scene05_Reattivita,
  Scene06_Composti,
  Scene07_Abbondanza,
  Scene08_Minerali,
  Scene09_Acqua,
  Scene10_Isotopi,
  Scene11_OssaDenti,
  Scene12_Messaggero,
  Scene13_Piante,
  Scene14_Costruzioni,
  Scene15_Piramide,
  Scene16_Metallurgia,
  Scene17_Industria,
  Scene18_Nutrizione,
  Scene19_Integratori,
  Scene20_Sintesi,
];

export const CalcioVideo: React.FC = () => {
  const TOTAL_DURATION = 3600;
  // Soundtrack loop duration (assume a standard length; loop covers full video)
  const SOUNDTRACK_LOOP_DURATION = TOTAL_DURATION;

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#0f0f23",
      }}
    >
      {/* === AUDIO === */}

      {/* Voce narrante – volume pieno */}
      <Audio
        src={staticFile("audio/Script_Voce_Calcio.mp3")}
        volume={0.95}
        startFrom={0}
      />

      {/* Musica di sottofondo – volume basso, loop per tutta la durata */}
      <Loop durationInFrames={SOUNDTRACK_LOOP_DURATION}>
        <Audio
          src={staticFile("audio/soundtrack.mp3")}
          volume={0.18}
        />
      </Loop>

      {/* === SCENE === */}

      {/* 20 content scenes */}
      {scenes.map((SceneComponent, index) => (
        <Sequence
          key={index}
          from={index * SCENE_DURATION}
          durationInFrames={SCENE_DURATION}
          name={`Scena ${index + 1}`}
        >
          <SceneComponent />
        </Sequence>
      ))}

      {/* CTA finale */}
      <Sequence
        from={scenes.length * SCENE_DURATION}
        durationInFrames={CTA_DURATION}
        name="CTA - Iscriviti al canale"
      >
        <Scene21_CTA />
      </Sequence>
    </div>
  );
};
