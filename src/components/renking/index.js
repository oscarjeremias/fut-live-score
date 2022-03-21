import React from "react";
import { useApi } from "../../hooks/useApi";
import { ContextTheme } from "../../contexts/contextTheme"
import style from "./style.module.css"
import { useRouter } from "next/router"
import { keys } from "../../keys"

export function Renking({
  position,
  points,
  games_played,
  goals_scored,
  goals_against,
  team,
  status,
  key
}) {
 const rota = useRouter()
  const { id } = rota.query
  const verificar = keys.find(el => {
    return el.temporadas[0] === id || el.temporadas[1] === id
  })
  const data = useApi(`https://app.sportdataapi.com/api/v1/soccer/teams/${team}?apikey=${verificar.key}`)

  const { theme } = React.useContext(ContextTheme)

  const verificar1 = status === "Champions League" ? "azul" : status === "UEFA Europa League" ? "amarelo" : status === "Relegation" ? "vermelho" : ""
  return (
    <tr className={`${style.teans} ${style.[theme]}`} key={key}>
      <td className={style.team}>
        <div className={style.[verificar1]}>{position}</div>
        <div>
          <img src={data === undefined ? "" : data.logo} width="15px" alt="fota da equipa"/>
          <div className={style.name}>{data === undefined ? "" : data.name}</div>
        </div>
      </td>
      <td>{games_played}</td>
      <td>
        {goals_scored}:{goals_against}
      </td>
      <td>{points}</td>
    </tr>
  );
}
