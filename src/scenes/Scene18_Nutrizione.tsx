import React from "react";
import { SceneLayout } from "../components/SceneLayout";
import { FoodIcon } from "../components/visuals/FoodIcon";

export const Scene18_Nutrizione: React.FC = () => (
  <SceneLayout
    sectionNumber={18}
    title="Fonti alimentari del calcio"
    subtitle="Latte, formaggi, verdure, legumi"
    body="Il calcio arriva soprattutto da latte, yogurt, formaggi, ma anche da verdure a foglia verde, legumi, alcuni pesci con la lisca e alimenti arricchiti."
    visual={<FoodIcon size={220} />}
    accentColor="#FFD700"
  />
);
