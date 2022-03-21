import React from "react";
import { useApi } from "../../hooks/useApi";
import { BoxJogos } from "../boxJogos";
import { time } from "../../date";
import { Load } from "../load";

export function BoxFavoritos({ keys, key }) {
  const v = useApi(
    `https://app.sportdataapi.com/api/v1/soccer/matches/${keys.id_jogo}?apikey=${keys.apikey}`
  );
  return (
    <li key={key}>
      {v === undefined ? (
        <Load />
      ) : (
        <BoxJogos
          key={v.match_id}
          v={{
            id_jogo: v.match_id,
          }}
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
            casa:
              v.match_statistics === null ? "" : v.match_statistics[0].goals,
            fora:
              v.match_statistics === null ? "" : v.match_statistics[1].goals,
          }}
          hora={time(v.match_start)}
          minutos={v.minute}
        />
      )}
    </li>
  );
}
