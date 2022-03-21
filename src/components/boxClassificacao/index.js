import React from "react";
import style from "./style.module.css";
import { ContextTheme } from "../../contexts/contextTheme";
import { useApi } from "../../hooks/useApi";
import { keys } from "../../keys";
import { useRouter } from "next/router";
import { Load } from "../load";
import { Renking } from "../renking";
import { ligas } from "../../config"

export function BoxClassificacao() {
  const rota = useRouter();
  const { id } = rota.query;

  const verificar = keys.find((k) => {
    return k.temporadas[0] === id || k.temporadas[1] === id;
  });
  const data = useApi(
    `https://app.sportdataapi.com/api/v1/soccer/standings?apikey=${verificar.key}&season_id=${id}`
  );
  const { theme } = React.useContext(ContextTheme);
  const liga = ligas.find(el => {
    return el.temporada === id
  })
  return (
    <div className={style.container}>
      <div className={style.liga}>{liga.name}</div>
      <table>
        <tr className={`${style.infoData} ${style.[theme]}`}>
          <th>Team</th>
          <th>J</th>
          <th>G</th>
          <th>PTS</th>
        </tr>
        {data === undefined ? (
          <Load />
        ) : (
          data.standings.map((el) => {
            return (
              <Renking
                key={el.team_id}
                position={el.position}
                points={el.points}
                games_played={el.overall.games_played}
                goals_scored={el.overall.goals_scored}
                goals_against={el.overall.goals_against}
                team={el.team_id}
                status={el.result}
              />
            );
          })
        )}
      </table>
    </div>
  );
}
