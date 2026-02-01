import React from "react";
import { SceneLayout } from "../components/SceneLayout";
import { MoleculeIcon } from "../components/visuals/MoleculeIcon";

export const Scene06_Composti: React.FC = () => (
  <SceneLayout
    sectionNumber={6}
    title="Composti principali"
    subtitle="Quasi mai libero in natura"
    body="In natura lo incontriamo quasi sempre combinato in composti: carbonato di calcio, solfato, fosfato, silicato e molti altri sali."
    visual={<MoleculeIcon size={220} />}
    accentColor="#4488FF"
  />
);
