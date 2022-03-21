import React from "react";
import style from "./style.module.css"
import { useContext } from "react"
import { ContextTheme } from "../../contexts/contextTheme"

export function Anuncio() {
  const { theme } = useContext(ContextTheme)
  return <div className={`${style.container} ${style.[theme]}`}></div>;
}
