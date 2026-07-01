import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AurumFlux",
    short_name: "AurumFlux",
    description:
      "Unlocking oceanic wealth with a new approach to dissolved gold extraction.",
    start_url: "/",
    display: "standalone",
    background_color: "#1F242B",
    theme_color: "#284155",
    icons: [
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
