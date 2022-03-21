import React from "react";
import style from "./style.module.css";
import { ContextTheme } from "../../contexts/contextTheme";
import Head from "next/head";
import favicon from "../../assets/favicon.ico";

export function LayoutPage({ children }) {
  const { theme } = React.useContext(ContextTheme);
  return (
    <div className={`${style.container} ${style.[theme]}`}>
      <Head>
        <link rel="icon" href={favicon.src} />
      </Head>

      {children}
    </div>
  );
}
