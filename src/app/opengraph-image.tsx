import { ImageResponse } from "next/og";

export const alt = "Casa Luce — Italian Kitchen, Dubai Marina";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
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
          backgroundColor: "#221f1c",
          backgroundImage:
            "radial-gradient(circle at 14% 12%, rgba(92,100,64,0.35), transparent 55%), radial-gradient(circle at 86% 88%, rgba(189,91,58,0.32), transparent 55%)",
        }}
      >
        <div
          style={{
            fontSize: 92,
            fontWeight: 600,
            letterSpacing: 16,
            color: "#f8f4ec",
          }}
        >
          CASA LUCE
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: "#c9795d",
          }}
        >
          Italian Kitchen · Dubai Marina
        </div>
      </div>
    ),
    { ...size }
  );
}
