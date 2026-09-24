import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? "Cody Cooper";

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
          backgroundColor: "#e7e5e4",
          color: "#1c1917",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 30, color: "#78716c" }}>codycooper.io</div>
        <div style={{ fontSize: 62, fontWeight: 800, marginTop: 24 }}>
          {title}
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
