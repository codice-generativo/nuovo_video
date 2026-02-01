import React from "react";
import { SceneLayout } from "../components/SceneLayout";
import { ScrollIcon } from "../components/visuals/ScrollIcon";

export const Scene03_Etimologia: React.FC = () => (
  <SceneLayout
    sectionNumber={3}
    title="L'origine del nome"
    subtitle="Dal latino calx, calcis"
    body={`Il nome "calcio" deriva dal latino calx, calcis, che significa pietra calcarea, cioè la calce usata fin dall'antichità nelle malte per costruzioni.`}
    visual={<ScrollIcon size={200} />}
    accentColor="#D4A574"
  />
);
