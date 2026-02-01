import React from "react";
import { SceneLayout } from "../components/SceneLayout";
import { SupplementIcon } from "../components/visuals/SupplementIcon";

export const Scene19_Integratori: React.FC = () => (
  <SceneLayout
    sectionNumber={19}
    title="Integratori e assorbimento"
    subtitle="Vitamina D e pH gastrico"
    body="Lo troviamo in integratori sotto forma di carbonato o citrato di calcio e in alcuni antiacidi. L'assorbimento dipende dal pH dello stomaco, dalla vitamina D e varia molto con l'età."
    visual={<SupplementIcon size={200} />}
    accentColor="#4488CC"
  />
);
