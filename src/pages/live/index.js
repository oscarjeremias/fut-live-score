import React from "react";
import { LayoutHome } from "../../components/layoutHome";
import { Header } from "../../components/header";
import { Main } from "../../components/main";
import { Anuncio } from "../../components/anuncio";
import { keys } from "../../keys";
import { hoje } from "../../date";

export default function Live(props) {
  return (
    <LayoutHome>
      <Header liveLength={props.liveLength} />
      <Main data={props} />
      <Anuncio />
    </LayoutHome>
  );
}

export async function getStaticProps() {
  const res = await fetch(
    `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${keys[0].key}&season_id=${keys[0].temporadas[0]}`
  );

  const res1 = await fetch(
    `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${keys[0].key}&season_id=${keys[0].temporadas[1]}`
  );

  const res2 = await fetch(
    `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${keys[1].key}&season_id=${keys[1].temporadas[0]}`
  );

  const res3 = await fetch(
    `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${keys[1].key}&season_id=${keys[1].temporadas[1]}&date_from=${hoje}`
  );

  const res4 = await fetch(
    `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${keys[2].key}&season_id=${keys[2].temporadas[0]}&date_from=${hoje}`
  );

  const res5 = await fetch(
    `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${keys[2].key}&season_id=${keys[2].temporadas[1]}&date_from=${hoje}`
  );

  const res6 = await fetch(
    `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${keys[3].key}&season_id=${keys[3].temporadas[0]}&date_from=${hoje}`
  );

  const res7 = await fetch(
    `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${keys[3].key}&season_id=${keys[3].temporadas[1]}&date_from=${hoje}`
  );

  const res8 = await fetch(
    `https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${keys[4].key}&season_id=${keys[4].temporadas[0]}&date_from=${hoje}`
  );
  const jsonData = await res.json();

  const jsonData1 = await res1.json();

  const jsonData2 = await res2.json();

  const jsonData3 = await res3.json();

  const jsonData4 = await res4.json();

  const jsonData5 = await res5.json();

  const jsonData6 = await res6.json();

  const jsonData7 = await res7.json();

  const jsonData8 = await res8.json();

  const data = jsonData.data.filter((el) => {
    return el.status_code === 1;
  });
  const data1 = jsonData1.data.filter((el) => {
    return el.status_code === 1;
  });
  const data2 = jsonData2.data.filter((el) => {
    return el.status_code === 1;
  });
  const data3 = jsonData3.data.filter((el) => {
    return el.status_code === 1;
  });
  const data4 = jsonData4.data.filter((el) => {
    return el.status_code === 1;
  });
  const data5 = jsonData5.data.filter((el) => {
    return el.status_code === 1;
  });
  const data6 = jsonData6.data.filter((el) => {
    return el.status_code === 1;
  });
  const data7 = jsonData7.data.filter((el) => {
    return el.status_code === 1;
  });
  const data8 = jsonData8.data.filter((el) => {
    return el.status_code === 1;
  });

  const liveLength =
    data.length +
    data1.length +
    data2.length +
    data3.length +
    data4.length +
    data5.length +
    data6.length +
    data7.length +
    data8.length;
  return {
    props: {
      data,
      data1,
      data2,
      data3,
      data4,
      data5,
      data6,
      data7,
      data8,
      liveLength,
    },
    revalidate: 1000,
  };
}
