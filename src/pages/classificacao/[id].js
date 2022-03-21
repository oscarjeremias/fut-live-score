import React from "react";
import { LayoutPage } from "../../components/layoutPage";
import { BackPage } from "../../components/backPage";
import { Main } from "../../components/main";
import { Anuncio } from "../../components/anuncio";
import { ligas } from "../../config";

export default function Classificacao() {
  return (
    <LayoutPage>
      <BackPage />
      <Main />
      <Anuncio />
    </LayoutPage>
  );
}

export function getStaticPaths() {
  const rotas = ligas.map((v) => {
    return { params: { id: v.temporada } };
  });
  return {
    paths: rotas,
    fallback: false,
  };
}

export function getStaticProps(content) {
  const liga = content.params.id;
  return {
    props: {
      liga,
    },
  };
}
