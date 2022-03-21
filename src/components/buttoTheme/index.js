import React from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { ContextTheme } from "../../contexts/contextTheme";
import style from "./style.module.css"

export function ButtonTheme() {
  const { theme, setTheme } = React.useContext(ContextTheme);
  return (
    <div className={style.div}>
      <button className={`${style.container} ${style.[theme]}`}
        onClick={() => {
          const verificar = theme === "dark" ? "light" : "dark";
          setTheme(verificar);
          localStorage.setItem("theme", verificar)
        }}
      >
        {theme === "dark" ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
      </button>
    </div>
  );
}
