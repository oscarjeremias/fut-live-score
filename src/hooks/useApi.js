import React from "react";

export function useApi(url) {
  const [data, setData] = React.useState();
  React.useEffect(async () => {
    try {
      const res = await fetch(url);
      const dataBase = await res.json();
      setData(dataBase.data);
    } catch (erro) {
      console.log("erro");
    }
  }, []);
  return data;
}

export function useApi1(url) {
  const [data, setData] = React.useState();
  React.useEffect(async () => {
    try {
      const res = await fetch(url);
      const dataBase = await res.json();
      setData(dataBase);
    } catch (erro) {
      console.log("erro");
    }
  }, []);
  return data;
}
