import React from "react";
import { SceneLayout } from "../components/SceneLayout";
import { IsotopeIcon } from "../components/visuals/IsotopeIcon";

export const Scene10_Isotopi: React.FC = () => (
  <SceneLayout
    sectionNumber={10}
    title="Isotopi del calcio"
    subtitle="Ca-40 e Ca-48"
    body="Il calcio presenta sei isotopi naturali stabili, tra cui il Ca-40 e il Ca-48, particolarmente importanti in geochimica e negli studi sul metabolismo."
    visual={<IsotopeIcon size={220} />}
    accentColor="#FF6B6B"
  />
);
