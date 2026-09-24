import { ImageResponse } from "@vercel/og";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OgImage() {
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
        <div style={{ fontSize: 76, fontWeight: 800 }}>Cody Cooper</div>
        <div style={{ fontSize: 36, marginTop: 28, color: "#57534e" }}>
          Author of Talking To Your Boss. Writing Default: No.
        </div>
        <div style={{ fontSize: 30, marginTop: 16, color: "#78716c" }}>
          Every yes spends something.
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
