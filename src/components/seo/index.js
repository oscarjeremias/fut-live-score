import React from "react";
import { NextSeo } from "next-seo";
import foto from "../../assets/foto.jpeg";

export function Seo() {
  return (
    <NextSeo
      title="FUT live score"
      description="Melhor site para ver os teus resultados dos jogos."
      canonical="https://fut-live-score.vercel.app/"
      openGraph={{
        url: "https://fut-live-score.vercel.app/",
        title: "FUT live score",
        description: "Melhor site para ver os teus resultados dos jogos.",
        images: [
          {
            url: foto.src,
            width: 800,
            height: 600,
            alt: "Og Image Alt",
            type: "image/jpeg",
          },
          {
            url: foto.src,
            width: 900,
            height: 800,
            alt: "Og Image Alt Second",
            type: "image/jpeg",
          },
          { url: foto.src },
          { url: foto.src },
        ],
        site_name: "FUT live score",
      }}
      twitter={{
        handle: "@oscarjeremias3",
        site: "https://fut-live-score.vercel.app/",
        cardType: "summary_large_image",
      }}
    />
  );
}
