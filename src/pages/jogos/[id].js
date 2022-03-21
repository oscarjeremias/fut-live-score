import React from "react";
import { ligas } from "../../config";
import { LayoutPage } from "../../components/layoutPage";
import { BackPage } from "../../components/backPage";
import { Main } from "../../components/main";
import { Anuncio } from "../../components/anuncio";

export default function Jogo({ liga }) {
  return (
    <>
      <LayoutPage>
        <BackPage />
        <Main />
        <Anuncio />
      </LayoutPage>
    </>
  );
}

export function getStaticPaths() {
  const routes = ligas.map((v) => {
    return { params: { id: v.temporada } };
  });
  return {
    paths: routes,
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
