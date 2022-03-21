import React from "react";
import { BoxLeague } from "../boxLeague";
import { ligas } from "../../config";
import style from "./style.module.css";

export function BoxListLeagueC() {
  return (
    <div className={style.container}>
      <ul>
        {ligas.map((v) => {
          return v.name === "Conference League" ||
            v.name === "League Europa" ||
            v.name === "Champions League" ? (
            ""
          ) : (
            <BoxLeague
              name={v.name}
              link={`classificacao/${v.temporada}`}
              live={""}
              jogos={""}
            />
          );
        })}
      </ul>
    </div>
  );
}
