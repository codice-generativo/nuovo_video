import React from "react";
import { SceneLayout } from "../components/SceneLayout";
import { CrystalIcon } from "../components/visuals/CrystalIcon";

export const Scene08_Minerali: React.FC = () => (
  <SceneLayout
    sectionNumber={8}
    title="Minerali del calcio"
    subtitle="Calcite, aragonite, gesso, dolomite…"
    body="È presente in moltissimi minerali: calcite e aragonite nelle rocce calcaree, gesso e anidrite, dolomite, feldspati, apatite e altri silicati."
    visual={<CrystalIcon size={200} />}
    accentColor="#B8D4E3"
  />
);
