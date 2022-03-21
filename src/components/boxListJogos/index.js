import React from "react";
import style from "./style.module.css";
import { useApi1 } from "../../hooks/useApi";
import { useRouter } from "next/router";
import { BoxJogos } from "../boxJogos";
import { timeJogo } from "../../date";
import { time } from "../../date";
import { keys } from "../../keys";
import { Load } from "../load";
import { ligas } from "../../config";
import { BoxAnterior } from "../boxAnterior";
import { BoxSeguinte } from "../boxSeguinte";

export function BoxListJogos() {
  const date = new Date();
  const route = useRouter();
  const { id } = route.query;
  const verificar = keys.find((v) => {
    return v.temporadas[0] === id || v.temporadas[1] === id;
  });
  const dateGame = timeJogo(date);

  const [update, setUpadate] = React.useState(dateGame);
  const data = useApi1(
    `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${verificar.key}&season_id=${id}`
  );

  return (
    <div className={style.container}>
      <div className={style.dia}>
        <BoxAnterior setUpdate={setUpadate} update={update} />
        <BoxSeguinte setUpdate={setUpadate} update={update} />
      </div>
      <div className={style.text}>
        {ligas
          .filter((v) => {
            return v.temporada === id;
          })
          .map((v) => {
            return <div key={v.temporada}>{v.name}</div>;
          })}
      </div>
      <ul>
        {data === undefined ? (
          <Load />
        ) : (
          data.data
            .filter((v) => {
              return v.match_start.slice(0, 10) === update;
            })
            .map((v) => {
              return v === undefined ? (
                <div>Hoje não tem nenhum jogo</div>
              ) : (
                <BoxJogos
                  v={{
                    key: data.query.apikey,
                    id_jogo: v.match_id,
                  }}
                  key={v.match_id}
                  equipas={{
                    casa: v.home_team.name,
                    fora: v.away_team.name,
                  }}
                  fotos={{
                    casa: v.home_team.logo,
                    fora: v.away_team.logo,
                  }}
                  status={v.status_code}
                  result={{
                    casa: v.stats.home_score,
                    fora: v.stats.away_score,
                  }}
                  hora={time(v.match_start)}
                  minutos={v.minute}
                />
              );
            })
        )}
      </ul>
    </div>
  );
}
