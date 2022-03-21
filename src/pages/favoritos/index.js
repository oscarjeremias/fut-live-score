import React from "react";
import { LayoutHome } from "../../components/layoutHome";
import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { Anuncio } from "../../components/anuncio";
export default function Favoritos() {
  return (
    <LayoutHome>
      <Header />
      <Main />
      <Anuncio />
    </LayoutHome>
  );
}
