import React from "react";
import Link from "next/link";
import style from "./style.module.css";
import { ContextTheme } from "../../contexts/contextTheme";

export function BoxLeague({ link, name, live, jogos }) {
  const { theme } = React.useContext(ContextTheme);
  return (
    <li className={`${style.container} ${style.[theme]}`}>
      <Link href={link}>
        <a>
          <div>{name}</div>
          <div>
            <div>{live}</div>
            <div>{jogos}</div>
          </div>
        </a>
      </Link>
    </li>
  );
}
