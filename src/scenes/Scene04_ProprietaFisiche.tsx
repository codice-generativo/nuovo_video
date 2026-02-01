import React from "react";
import { SceneLayout } from "../components/SceneLayout";
import { MetalCubeIcon } from "../components/visuals/MetalCubeIcon";

export const Scene04_ProprietaFisiche: React.FC = () => (
  <SceneLayout
    sectionNumber={4}
    title="Proprietà fisiche"
    subtitle="Metallo bianco-argenteo"
    body="Il calcio è un metallo relativamente morbido, bianco-argenteo. Si ossida rapidamente all'aria e reagisce con l'acqua liberando idrogeno."
    visual={<MetalCubeIcon size={200} />}
    accentColor="#C0C0C0"
  />
);
