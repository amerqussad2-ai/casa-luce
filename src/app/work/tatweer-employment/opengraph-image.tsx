import { ImageResponse } from "next/og";
import { ogPalette } from "@/lib/og-palette";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Tatweer Employment — Bilingual Recruitment Web Application";

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
        <div style={{ display: "flex", fontSize: 68, fontWeight: 700, color: ogPalette.ink }}>
          Tatweer Employment
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 20,
            fontSize: 32,
            fontWeight: 600,
            color: ogPalette.ink,
          }}
        >
          Bilingual Recruitment Web Application
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 16,
            fontSize: 26,
            color: ogPalette.mutedGraphite,
          }}
        >
          React · TypeScript · Supabase · PostgreSQL
        </div>
        <div
          style={{
            display: "flex",
            marginTop: 28,
            fontSize: 24,
            fontWeight: 700,
            color: ogPalette.mutedCobalt,
          }}
        >
          Deployed
        </div>
      </div>
    ),
    { ...size }
  );
}
