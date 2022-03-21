import React from "react";
import style from "./style.module.css";
import { MdKeyboardBackspace } from "react-icons/md";
import { ContextTheme } from "../../contexts/contextTheme"
import Link from "next/link"

export function BackPage() {
  const { theme } = React.useContext(ContextTheme)
  return (
    <header className={`${style.container} ${style.[theme]}`}>
      <Link href="/">
         <a>
          <MdKeyboardBackspace />
         </a>
      </Link>
    </header>
  );
}
