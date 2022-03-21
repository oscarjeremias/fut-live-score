import React from "react";
import style from "./style.module.css";
import { BoxFavoritos } from "../boxFavoritos";

export function ListFavoritos() {
  const [data, setData] = React.useState([]);
  React.useEffect(() => {
    const local = JSON.parse(localStorage.getItem("favoritos"));
    setData(local);
  }, [data]);
  return (
    <div className={style.container}>
      {data === null || data.length === 0 ? (
        <div className={style.sms}>Nenhum jogo adicionado as favoritos</div>
      ) : (
        <ul>
          {data.map((el) => {
            return (
              <BoxFavoritos
                key={el.id_jogo}
                keys={{
                  apikey: el.key,
                  id_jogo: el.id_jogo,
                }}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
}
