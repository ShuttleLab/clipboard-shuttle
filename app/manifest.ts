import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "剪贴板穿梭机 | Clipboard Shuttle",
    short_name: "Clipboard Shuttle",
    description: "Sync clipboard across phones and computers with a code",
    start_url: "/",
    display: "standalone",
    background_color: "#ecfeff",
    theme_color: "#06b6d4",
    orientation: "any",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
