import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Clipboard Shuttle - Sync clipboard across devices";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #ecfeff 0%, #a5f3fc 50%, #06b6d4 100%)",
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 160, marginBottom: 24 }}>📋</div>
        <div
          style={{
            fontSize: 88,
            fontWeight: 800,
            color: "#164e63",
            letterSpacing: "-0.02em",
            marginBottom: 16,
          }}
        >
          Clipboard Shuttle
        </div>
        <div
          style={{
            fontSize: 40,
            color: "#155e75",
            maxWidth: 900,
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          Sync clipboard across phones and computers with a code
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 40,
            fontSize: 28,
            color: "#155e75",
            opacity: 0.7,
          }}
        >
          clipboard.shuttlelab.org
        </div>
      </div>
    ),
    { ...size }
  );
}
