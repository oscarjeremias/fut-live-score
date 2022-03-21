import React from "react";
import style from "./style.module.css";
import { ContextTheme } from "../../contexts/contextTheme";
import { Favoritos } from "../favoritos"

export function BoxJogos({ key,equipas, fotos, status,result, hora, minutos,v}) {

  const { theme } = React.useContext(ContextTheme)

  return (
        <li key={key}>
            <div className={`${style.container} ${style.[theme]}`}>
          <div className={style.box}>
            <div className={style.favorito}>
              <Favoritos v={v}  />
            </div>
            <div>
              <div className={style.boxP}>
                <img src={fotos.casa} width="20px" alt="foto da equipa"/>
                <div>{equipas.casa}</div>
                <div>{status === 1 || status === 3 || status === 11 || status === 12 || status === 13 || status === 14 ? `"${result.casa}"` : ""}</div>
              </div>
              <div className={style.boxP}>
                <img src={fotos.fora} width="20px" alt="foto da equipa"/>
                <div>{equipas.fora}</div>
                <div>{status === 1 || status === 3 || status === 11 || status === 12 || status === 13 || status === 14 ? `"${result.fora}"` : ""}</div>
              </div>
            </div>
          </div>
              <div>{status === 1 || status === 11 || status === 12 || status === 14 ? minutos + "'" : status === 0 ? hora  : status === 13 ? "Penalidates" : status === 5 ? "Cancelado" : status === 3 ? "Terminado" : status === 4 ?  "Adiado" : ""}</div>
          </div>
        </li>
  );
}
