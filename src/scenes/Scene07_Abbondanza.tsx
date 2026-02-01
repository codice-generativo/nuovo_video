import React from "react";
import { SceneLayout } from "../components/SceneLayout";
import { EarthCrustIcon } from "../components/visuals/EarthCrustIcon";

export const Scene07_Abbondanza: React.FC = () => (
  <SceneLayout
    sectionNumber={7}
    title="Abbondanza nella crosta terrestre"
    subtitle="5° elemento più abbondante"
    body="Il calcio è il quinto elemento più abbondante nella crosta terrestre e il terzo metallo per abbondanza, con circa il 4% in massa."
    visual={<EarthCrustIcon size={200} />}
    accentColor="#2E8B57"
  />
);
