import React from "react";
import { SceneLayout } from "../components/SceneLayout";
import { CellSignalIcon } from "../components/visuals/CellSignalIcon";

export const Scene12_Messaggero: React.FC = () => (
  <SceneLayout
    sectionNumber={12}
    title="Messaggero chimico"
    subtitle="Lo ione Ca²⁺ nelle cellule"
    body={`Nei liquidi biologici il calcio circola disciolto come ione Ca²⁺ e funziona da "messaggero" chimico. Regola la contrazione dei muscoli, la trasmissione nervosa e la coagulazione del sangue.`}
    visual={<CellSignalIcon size={220} />}
    accentColor="#AA66FF"
  />
);
