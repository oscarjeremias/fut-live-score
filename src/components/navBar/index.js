import React from "react";
import style from "./style.module.css";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  MdSportsSoccer,
  MdOutlineSmartDisplay,
  MdOutlineStarBorderPurple500,
  MdOutlineEmojiEvents,
} from "react-icons/md";
import { ContextTheme } from "../../contexts/contextTheme";
import { useContext } from "react";

export function NavBar({ liveLength }) {
  const { theme } = useContext(ContextTheme)
  const { route } = useRouter();
  return (
    <nav className={style.navBar}>
      <ul>
        {route === "/" ? (
          <li className={style.page}>
            <Link href="/">
              <a className={style.[theme]}>
                <MdSportsSoccer />
              </a>
            </Link>
          </li>
        ) : (
          <li>
            <Link href="/">
              <a className={style.[theme]}>
                <MdSportsSoccer />
              </a>
            </Link>
          </li>
        )}
        {route === "/live" ? (
          <>
          <li className={`${style.page} item`}>
            <Link href="/live">
              <a className={`${style.[theme]}`}>
                <MdOutlineSmartDisplay />
              </a>
            </Link>
          </li>
            <style jsx>{`
            .jsem {
            margin-top: -8px
            }
          .item::before {
              content: "${liveLength === undefined ? 0 : liveLength }";
              background: red;
              width: 10px;
              border-radius: 50%;
              font-size: 0.5rem;
              position: relative;
              left: 8px;
              top: 8px;
            }`}</style>
          </>
        ) : (
          <>
          <li>
            <Link href="/live">
              <a className={`${style.[theme]} item1`}>
                <MdOutlineSmartDisplay />
              </a>
            </Link>
          </li>
            <style jsx>{`
           .item1::after {
             content: "${liveLength === undefined ? 0 : liveLength}";
             background: red;
             width: 2.5px;
             border-radius: 50%;
             font-size: 0.5rem;
             padding: 0.5px 3px;
             position: relative;
             left: -6px;
             top: -18px;
            }`}</style>
          </>
        )}
        {route === "/favoritos" ? (
          <li className={style.page}>
            <Link href="/favoritos">
              <a className={style.[theme]}>
                <MdOutlineStarBorderPurple500 />
              </a>
            </Link>
          </li>
        ) : (
          <li>
            <Link href="/favoritos">
              <a className={style.[theme]}>
                <MdOutlineStarBorderPurple500 />
              </a>
            </Link>
          </li>
        )}
        {route === "/classificacoes" ? (
          <li className={style.page}>
            <Link href="/classificacao">
              <a className={style.[theme]}>
                <MdOutlineEmojiEvents />
              </a>
            </Link>
          </li>
        ) : (
          <li>
            <Link href="/classificacoes">
              <a className={style.[theme]}>
                <MdOutlineEmojiEvents />
              </a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
