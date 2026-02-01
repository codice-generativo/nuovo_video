import React from "react";
import { SceneLayout } from "../components/SceneLayout";
import { PyramidIcon } from "../components/visuals/PyramidIcon";

export const Scene15_Piramide: React.FC = () => (
  <SceneLayout
    sectionNumber={15}
    title="La Grande Piramide di Giza"
    subtitle="Rivestimento in calcare"
    body="Il rivestimento esterno della Grande Piramide di Giza è fatto di calcare, un minerale di calcio usato dall'antichità per le grandi opere architettoniche."
    visual={<PyramidIcon size={220} />}
    accentColor="#D4A574"
  />
);
