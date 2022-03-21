import React from "react";
import { BoxJogos } from "../boxJogos";
import { time } from "../../date";
import style from "./style.module.css";

export function BoxListLive({ dataF }) {
  const [live, setLive] = React.useState(0);
  let liveLength = 0;
  return (
    <div>
      <div className={style.container}>
        {live === 0 ? (
          <div className={style.text}>Nenhum jogo ao vivo</div>
        ) : (
          ""
        )}
        <ul>
          {dataF.data.map((v, i) => {
            liveLength = i + 1;
            setLive(liveLength);
            return (
              <BoxJogos
                v={v}
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
          })}
        </ul>
        <ul>
          {dataF.data1.map((v, i) => {
            liveLength = i + 1;
            setLive(liveLength);
            return (
              <BoxJogos
                v={v}
                key={v.match_id}
                equipas={{
                  casa: v.home_team.name,
                  fora: v.away_team.name,
                }}
                fotos={{ casa: v.home_team.logo, fora: v.away_team.logo }}
                status={v.status_code}
                result={{
                  casa: v.stats.home_score,
                  fora: v.stats.away_score,
                }}
                hora={time(v.match_start)}
                minutos={v.minute}
              />
            );
          })}
        </ul>
        <ul>
          {dataF.data2.map((v, i) => {
            liveLength = i + 1;
            setLive(liveLength);
            return (
              <BoxJogos
                v={v}
                key={v.match_id}
                equipas={{
                  casa: v.home_team.name,
                  fora: v.away_team.name,
                }}
                fotos={{ casa: v.home_team.logo, fora: v.away_team.logo }}
                status={v.status_code}
                result={{
                  casa: v.stats.home_score,
                  fora: v.stats.away_score,
                }}
                hora={time(v.match_start)}
                minutos={v.minute}
              />
            );
          })}
        </ul>
        <ul>
          {dataF.data3.map((v, i) => {
            liveLength = i + 1;
            setLive(liveLength);
            return (
              <BoxJogos
                v={v}
                key={v.match_id}
                equipas={{
                  casa: v.home_team.name,
                  fora: v.away_team.name,
                }}
                fotos={{ casa: v.home_team.logo, fora: v.away_team.logo }}
                status={v.status_code}
                result={{
                  casa: v.stats.home_score,
                  fora: v.stats.away_score,
                }}
                hora={time(v.match_start)}
                minutos={v.minute}
              />
            );
          })}
        </ul>
        <ul>
          {dataF.data4.map((v, i) => {
            liveLength = i + 1;
            setLive(liveLength);
            return (
              <BoxJogos
                v={v}
                key={v.match_id}
                equipas={{
                  casa: v.home_team.name,
                  fora: v.away_team.name,
                }}
                fotos={{ casa: v.home_team.logo, fora: v.away_team.logo }}
                status={v.status_code}
                result={{
                  casa: v.stats.home_score,
                  fora: v.stats.away_score,
                }}
                hora={time(v.match_start)}
                minutos={v.minute}
              />
            );
          })}
        </ul>
        <ul>
          {dataF.data5.map((v, i) => {
            liveLength = i + 1;
            setLive(liveLength);
            return (
              <BoxJogos
                v={v}
                key={v.match_id}
                equipas={{
                  casa: v.home_team.name,
                  fora: v.away_team.name,
                }}
                fotos={{ casa: v.home_team.logo, fora: v.away_team.logo }}
                status={v.status_code}
                result={{
                  casa: v.stats.home_score,
                  fora: v.stats.away_score,
                }}
                hora={time(v.match_start)}
                minutos={v.minute}
              />
            );
          })}
        </ul>
        <ul>
          {dataF.data6.map((v, i) => {
            liveLength = i + 1;
            setLive(liveLength);
            return (
              <BoxJogos
                v={v}
                key={v.match_id}
                equipas={{
                  casa: v.home_team.name,
                  fora: v.away_team.name,
                }}
                fotos={{ casa: v.home_team.logo, fora: v.away_team.logo }}
                status={v.status_code}
                result={{
                  casa: v.stats.home_score,
                  fora: v.stats.away_score,
                }}
                hora={time(v.match_start)}
                minutos={v.minute}
              />
            );
          })}
        </ul>
        <ul>
          {dataF.data7.map((v, i) => {
            liveLength = i + 1;
            setLive(liveLength);
            return (
              <BoxJogos
                v={v}
                key={v.match_id}
                equipas={{
                  casa: v.home_team.name,
                  fora: v.away_team.name,
                }}
                fotos={{ casa: v.home_team.logo, fora: v.away_team.logo }}
                status={v.status_code}
                result={{
                  casa: v.stats.home_score,
                  fora: v.stats.away_score,
                }}
                hora={time(v.match_start)}
                minutos={v.minute}
              />
            );
          })}
        </ul>
        <ul>
          {dataF.data8.map((v, i) => {
            liveLength = i + 1;
            setLive(liveLength);
            return (
              <BoxJogos
                v={v}
                key={v.match_id}
                equipas={{
                  casa: v.home_team.name,
                  fora: v.away_team.name,
                }}
                fotos={{ casa: v.home_team.logo, fora: v.away_team.logo }}
                status={v.status_code}
                result={{
                  casa: v.stats.home_score,
                  fora: v.stats.away_score,
                }}
                hora={time(v.match_start)}
                minutos={v.minute}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
