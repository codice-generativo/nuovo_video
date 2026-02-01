import React from "react";
import { SceneLayout } from "../components/SceneLayout";
import { BoneIcon } from "../components/visuals/BoneIcon";

export const Scene11_OssaDenti: React.FC = () => (
  <SceneLayout
    sectionNumber={11}
    title="Ossa, denti, gusci e coralli"
    subtitle="Fosfato di calcio e idrossiapatite"
    body="Negli esseri viventi il calcio è ovunque. Nei gusci, nei coralli, nei nostri denti e nelle nostre ossa si trova sotto forma di sali solidi, soprattutto fosfato di calcio simile all'idrossiapatite."
    visual={<BoneIcon size={200} />}
    accentColor="#F5E6D3"
  />
);
