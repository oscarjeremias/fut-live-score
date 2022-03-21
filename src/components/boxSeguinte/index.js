import React from "react";
import { timeJogo } from "../../date";
import style from "./style.module.css";
import { MdArrowForwardIos } from "react-icons/md";

export function BoxSeguinte({ setUpdate, update }) {
  const dateHoje = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  return (
    <div
      onClick={() => {
        const date = new Date(new Date(update).getTime() + 24 * 60 * 60 * 1000);
        if (date.getDate() > dateHoje.getDate()) {
          return "";
        } else {
          setUpdate(timeJogo(date));
        }
      }}
      className={style.click}
    >
      <MdArrowForwardIos />
    </div>
  );
}
