import React from "react";
import style from "./style.module.css";
import { BoxListLeague } from "../boxListLeague/";
import { BoxListLeagueC } from "../boxListLeagueC";
import { BoxListJogos } from "../boxListJogos";
import { ListFavoritos } from "../listFavoritos";
import { BoxClassificacao } from "../boxClassificacao";
import { useRouter } from "next/router";
import { BoxListLive } from "../boxListLive";

export function Main({ data }) {
  const route = useRouter();
  const rota = route.route;
  const reg1 = /\/jogos\/.+/;
  const reg2 = /\/classificacao\/.+/;
  const regJogos = reg1.test(rota);
  const regClassificacao = reg2.test(rota);
  if (rota === "/") {
    return (
      <main className={style.container}>
        <BoxListLeague />
      </main>
    );
  } else if (rota === "/favoritos") {
    return (
      <main className={style.container}>
        <ListFavoritos />
      </main>
    );
  } else if (rota === "/classificacoes") {
    return (
      <main className={style.container}>
        <BoxListLeagueC />
      </main>
    );
  } else if (regJogos === true) {
    return (
      <main className={`${style.container} ${style.page}`}>
        <BoxListJogos />
      </main>
    );
  } else if (regClassificacao === true) {
    return (
      <main className={`${style.container} ${style.page}`}>
        <BoxClassificacao />
      </main>
    );
  } else if (rota === "/live") {
    return (
      <main className={style.container}>
        <BoxListLive dataF={data} />
      </main>
    );
  } else {
    return "";
  }
}
