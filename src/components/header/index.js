import React from "react";
import style from "./style.module.css";
import { ContextTheme } from "../../contexts/contextTheme";
import { Logo } from "../logo"
import { Menu } from "../menu"
import { NavBar } from "../navBar"
import { MenuActive } from "../menuActive"
import { useContext } from "react";
export function Header({ liveLength }) {
  const { theme } = useContext(ContextTheme);
  return (
  <>
  <MenuActive />
  <header 
  className={`${style.container} ${style.[theme]}`}>
      <div>
        <Logo />
        <Menu />
      </div>
      <div>
        <NavBar liveLength={liveLength} />
      </div>
  </header>
  </>
  );
}
