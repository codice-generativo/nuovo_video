import React from "react";
import { SceneLayout } from "../components/SceneLayout";
import { PlantIcon } from "../components/visuals/PlantIcon";

export const Scene13_Piante: React.FC = () => (
  <SceneLayout
    sectionNumber={13}
    title="Il calcio nelle piante"
    subtitle="Crescita e pareti cellulari"
    body="Nelle piante il calcio è essenziale per la crescita, la stabilità delle pareti cellulari e numerosi segnali che controllano sviluppo e risposta agli stress."
    visual={<PlantIcon size={200} />}
    accentColor="#3CB371"
  />
);
