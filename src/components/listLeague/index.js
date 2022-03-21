import React from "react";
import style from "./style.module.css";
import Link from "next/link";
import { ContextTheme } from "../../contexts/contextTheme";
import { useContext } from "react";
import { ligas } from "../../config";

export function ListLeague() {
  const { theme } = useContext(ContextTheme)
  return (
    <div>
      <div 
        className={style.title}>Ligas</div>
      <ul className={style.ul}>
        {ligas.map((v, i) => {
          return v.name === "Champions League" || v.name === "League Europa" || v.name === "Conference League"  ? "" : (
            <li key={i}>
              <Link href={`/classificacao/${v.temporada}`}>
                <a className={style.[theme]}>
                  <img src={v.foto} width="30px" alt="foto da liga"/>
                  <div>{v.name}</div>
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className={style.title}>Sobre</div>
    </div>
  );
}
