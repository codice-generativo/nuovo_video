import React from "react";
import { SceneLayout } from "../components/SceneLayout";
import { WaterDropIcon } from "../components/visuals/WaterDropIcon";

export const Scene09_Acqua: React.FC = () => (
  <SceneLayout
    sectionNumber={9}
    title="Il calcio nell'acqua"
    subtitle="Durezza dell'acqua"
    body={`L'acqua di mare contiene ioni calcio. Nelle acque dolci la concentrazione dipende dalle rocce attraversate: insieme al magnesio contribuisce alla cosiddetta "durezza" dell'acqua.`}
    visual={<WaterDropIcon size={200} />}
    accentColor="#4488CC"
  />
);
