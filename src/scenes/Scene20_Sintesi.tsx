import React from "react";
import { SceneLayout } from "../components/SceneLayout";
import { GlobeIcon } from "../components/visuals/GlobeIcon";

export const Scene20_Sintesi: React.FC = () => (
  <SceneLayout
    sectionNumber={20}
    title="In sintesi"
    subtitle="Un elemento chiave della vita sulla Terra"
    body="Il calcio è la base delle rocce che ci circondano, la struttura delle nostre ossa e dei nostri denti, un fine regolatore dei segnali nelle cellule e un elemento chiave per l'industria e per ciò che mangiamo ogni giorno."
    visual={<GlobeIcon size={200} />}
    accentColor="#FFD700"
  />
);
