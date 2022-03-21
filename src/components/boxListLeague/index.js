import React from "react";
import { Load } from "../load";
import { useApi } from "../../hooks/useApi";
import { ligas } from "../../config";
import { keys } from "../../keys";
import style from "./style.module.css";
import { BoxLeague } from "../boxLeague";
import { hoje } from "../../date";

export function BoxListLeague() {
  const data = useApi(
    `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${keys[0].key}&season_id=${ligas[0].temporada}`
  );
  const data1 = useApi(`
  https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${keys[0].key}&season_id=${ligas[1].temporada}`);
  const data2 = useApi(
    `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${keys[1].key}&season_id=${ligas[2].temporada}`
  );
  const data3 = useApi(
    `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${keys[1].key}&season_id=${ligas[3].temporada}&date_from=${hoje}`
  );
  const data4 = useApi(
    `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${keys[2].key}&season_id=${ligas[4].temporada}&date_from=${hoje}`
  );
  const data5 = useApi(
    `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${keys[2].key}&season_id=${ligas[5].temporada}&date_from=${hoje}`
  );
  const data6 = useApi(
    `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${keys[3].key}&season_id=${ligas[6].temporada}&date_from=${hoje}`
  );
  const data7 = useApi(
    `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${keys[3].key}&season_id=${ligas[7].temporada}&date_from=${hoje}`
  );
  const data8 = useApi(
    `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${keys[4].key}&season_id=${ligas[8].temporada}&date_from=${hoje}`
  );
  return (
    <div className={style.container}>
      <ul>
        {data === undefined ||
        data1 === undefined ||
        data2 === undefined ||
        data3 === undefined ||
        data4 === undefined ||
        data5 === undefined ||
        data6 === undefined ||
        data7 === undefined ||
        data8 === undefined ? (
          <Load />
        ) : (
          <>
            <BoxLeague
              link={`/jogos/${ligas[0].temporada}`}
              name={ligas[0].name}
              live={
                data.filter((v) => {
                  return v.status_code === 1;
                }).length
              }
              jogos={
                data.filter((v) => {
                  return v.match_start.slice(0, 10) === hoje;
                }).length
              }
            />
            <BoxLeague
              link={`/jogos/${ligas[1].temporada}`}
              name={ligas[1].name}
              live={
                data1.filter((v) => {
                  return v.status_code === 1;
                }).length
              }
              jogos={
                data1.filter((v) => {
                  return v.match_start.slice(0, 10) === hoje;
                }).length
              }
            />
            <BoxLeague
              link={`/jogos/${ligas[2].temporada}`}
              name={ligas[2].name}
              live={
                data2.filter((v) => {
                  return v.status_code === 1;
                }).length
              }
              jogos={
                data2.filter((v) => {
                  return v.match_start.slice(0, 10) === hoje;
                }).length
              }
            />
            <BoxLeague
              link={`/jogos/${ligas[3].temporada}`}
              name={ligas[3].name}
              live={
                data3.filter((v) => {
                  return v.status_code === 1;
                }).length
              }
              jogos={
                data3.filter((v) => {
                  return v.match_start.slice(0, 10) === hoje;
                }).length
              }
            />
            <BoxLeague
              link={`/jogos/${ligas[4].temporada}`}
              name={ligas[4].name}
              live={
                data4.filter((v) => {
                  return v.status_code === 1;
                }).length
              }
              jogos={
                data4.filter((v) => {
                  return v.match_start.slice(0, 10) === hoje;
                }).length
              }
            />
            <BoxLeague
              link={`/jogos/${ligas[5].temporada}`}
              name={ligas[5].name}
              live={
                data5.filter((v) => {
                  return v.status_code === 1;
                }).length
              }
              jogos={
                data5.filter((v) => {
                  return v.match_start.slice(0, 10) === hoje;
                }).length
              }
            />
            <BoxLeague
              link={`/jogos/${ligas[6].temporada}`}
              name={ligas[6].name}
              live={
                data6.filter((v) => {
                  return v.status_code === 1;
                }).length
              }
              jogos={
                data6.filter((v) => {
                  return v.match_start.slice(0, 10) === hoje;
                }).length
              }
            />
            <BoxLeague
              link={`/jogos/${ligas[7].temporada}`}
              name={ligas[7].name}
              live={
                data7.filter((v) => {
                  return v.status_code === 1;
                }).length
              }
              jogos={
                data7.filter((v) => {
                  return v.match_start.slice(0, 10) === hoje;
                }).length
              }
            />
            <BoxLeague
              link={`/jogos/${ligas[8].temporada}`}
              name={ligas[8].name}
              live={
                data8.filter((v) => {
                  return v.status_code === 1;
                }).length
              }
              jogos={
                data8.filter((v) => {
                  return v.match_start.slice(0, 10) === hoje;
                }).length
              }
            />
          </>
        )}
      </ul>
    </div>
  );
}
