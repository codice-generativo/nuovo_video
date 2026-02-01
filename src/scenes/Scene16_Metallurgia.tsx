import React from "react";
import { SceneLayout } from "../components/SceneLayout";
import { MetallurgyIcon } from "../components/visuals/MetallurgyIcon";

export const Scene16_Metallurgia: React.FC = () => (
  <SceneLayout
    sectionNumber={16}
    title="Metallurgia"
    subtitle="Agente riducente e disossidante"
    body="Il calcio metallico aiuta a purificare acciaio, alluminio e metalli come zirconio, ittrio e alcune terre rare, ed entra nella composizione di diverse leghe."
    visual={<MetallurgyIcon size={200} />}
    accentColor="#FF6B00"
  />
);
