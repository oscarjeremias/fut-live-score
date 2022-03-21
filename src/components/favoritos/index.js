import React from "react";
import style from "./style.module.css"
import { MdOutlineStarBorderPurple500, MdStarRate } from "react-icons/md";

const favoritos = [];

export function Favoritos(props) {
  const [active, setActive] = React.useState("");
  const [click,setClick] = React.useState("")
  const addFavoritos = () => {
    const verficar = active === "" ? "active" : "";
    localStorage.setItem("activeFavoritos", verficar);
    setActive(verficar);
    const favoritosLocalStorage = JSON.parse(localStorage.getItem("favoritos"));

    if (favoritosLocalStorage === null) {
      favoritos.push(props.v);
      localStorage.setItem("favoritos", JSON.stringify(favoritos));
    } else {
      const filterAdd = favoritosLocalStorage.find((el) => {
        return el.id_jogo === props.v.id_jogo;
      });
      if (filterAdd === undefined) {
        favoritosLocalStorage.push(props.v);
        localStorage.setItem(
          "favoritos",
          JSON.stringify(favoritosLocalStorage)
        );
      } else {
        const filterRemove = favoritosLocalStorage.filter((el) => {
          return el.id_jogo !== props.v.id_jogo;
        });
        localStorage.setItem("favoritos", JSON.stringify(filterRemove));
       setClick("click")
      }
    }
  };
  return (
    <div
      onClick={() => {
        addFavoritos();
      }}
      className={style.[click]}
    >
      {active === "active" ? <MdStarRate /> : <MdOutlineStarBorderPurple500 />}
    </div>
  );
}
