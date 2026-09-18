import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#221f1c",
          color: "#f8f4ec",
          fontSize: 16,
          fontWeight: 700,
          letterSpacing: 1,
        }}
      >
        CL
      </div>
    ),
    { ...size }
  );
}
