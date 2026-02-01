import React from "react";
import { SceneLayout } from "../components/SceneLayout";
import { BuildingIcon } from "../components/visuals/BuildingIcon";

export const Scene14_Costruzioni: React.FC = () => (
  <SceneLayout
    sectionNumber={14}
    title="Il calcio nelle costruzioni"
    subtitle="Calcare, cemento, calce, gesso"
    body="Nella vita quotidiana incontriamo il calcio ovunque. Nelle costruzioni è protagonista sotto forma di calcare, cemento, calce, gesso e cartongesso."
    visual={<BuildingIcon size={200} />}
    accentColor="#8B7355"
  />
);
