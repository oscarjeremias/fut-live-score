import React from "react";
import { ContextTheme } from "../../contexts/contextTheme"
import style from "./style.module.css";

export function Load() {
  const { theme } = React.useContext(ContextTheme)

  return <div className={`${style.container} ${style.[theme]}`}>
    <div className={style.box}>
      <div></div>
    </div>
    </div>;
}
