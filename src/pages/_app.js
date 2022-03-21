import "../styles/globals.css";
import { ContextTheme } from "../contexts/contextTheme";
import { ContextMenu } from "../contexts/contextMenu";
import { useState, useEffect } from "react";
import { Seo } from "../components/seo";

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState("dark");
  const [active, setActive] = useState("");

  useEffect(() => {
    const getTheme = localStorage.getItem("theme");
    const verifiacar = getTheme === null ? theme : getTheme;
    setTheme(verifiacar);
  }, [theme]);
  return (
    <ContextTheme.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <ContextMenu.Provider
        value={{
          active,
          setActive,
        }}
      >
        <Seo />
        <Component {...pageProps} />
      </ContextMenu.Provider>
    </ContextTheme.Provider>
  );
}

export default MyApp;
