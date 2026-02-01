import React from "react";
import { SceneLayout } from "../components/SceneLayout";
import { IndustryIcon } from "../components/visuals/IndustryIcon";

export const Scene17_Industria: React.FC = () => (
  <SceneLayout
    sectionNumber={17}
    title="Usi industriali"
    subtitle="Cloruro di calcio e altro"
    body="Il cloruro di calcio si usa come essiccante per togliere l'umidità, nei fertilizzanti, nei mangimi e in vari processi industriali."
    visual={<IndustryIcon size={200} />}
    accentColor="#888"
  />
);
