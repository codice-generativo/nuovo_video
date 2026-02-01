import React from "react";
import { SceneLayout } from "../components/SceneLayout";
import { FlameIcon } from "../components/visuals/FlameIcon";

export const Scene05_Reattivita: React.FC = () => (
  <SceneLayout
    sectionNumber={5}
    title="Reattività e saggio alla fiamma"
    subtitle="Colore giallo-arancione"
    body="Nel saggio alla fiamma il calcio dà un caratteristico colore giallo-arancione. Si ossida rapidamente all'aria e reagisce con l'acqua liberando idrogeno."
    visual={<FlameIcon size={200} />}
    accentColor="#FF8C00"
  />
);
