import { ImageResponse } from "next/og";
import { ogPalette } from "@/lib/og-palette";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Amer Kussad — Front-End Developer";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: ogPalette.warmIvory,
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            width: 64,
            height: 4,
            backgroundColor: ogPalette.mutedCobalt,
            marginBottom: 32,
          }}
        />
        <div style={{ display: "flex", fontSize: 76, fontWeight: 700, color: ogPalette.ink }}>
          Amer Kussad
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 36,
            fontWeight: 600,
            color: ogPalette.ink,
          }}
        >
          Front-End Developer
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 12,
            fontSize: 28,
            color: ogPalette.mutedGraphite,
          }}
        >
          React · Next.js · TypeScript
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontSize: 22,
            color: ogPalette.mutedGraphite,
          }}
        >
          Ras Al Khaimah, UAE
        </div>
      </div>
    ),
    { ...size }
  );
}
