import React from "react";
import { SceneLayout } from "../components/SceneLayout";
import { PeriodicTableIcon } from "../components/visuals/PeriodicTableIcon";

export const Scene02_TavolaPeriodica: React.FC = () => (
  <SceneLayout
    sectionNumber={2}
    title="Posizione nella Tavola Periodica"
    subtitle="Numero atomico 20"
    body="Il calcio appartiene al gruppo 2, quarto periodo, blocco s. È un metallo alcalino-terroso, con configurazione elettronica che termina in 4s²."
    visual={<PeriodicTableIcon size={220} />}
    accentColor="#FFD700"
  />
);
