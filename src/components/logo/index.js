import React from "react";
import { useContext } from "react";

import { ContextTheme } from "../../contexts/contextTheme";
import logoDark from "../../assets/logos/logo-dark.png";
import logoLight from "../../assets/logos/logo-light.png";
import style from "./style.module.css";

export function Logo() {
  const { theme } = useContext(ContextTheme);

  return (
    <div className={style.container}>
      {theme === "dark" ? (
        <img src={logoDark.src} width="150px" height="45px" alt="logo" />
      ) : (
        <img src={logoLight.src} width="150px" height="45px" alt="logo" />
      )}
    </div>
  );
}
