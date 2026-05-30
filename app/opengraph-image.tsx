import { ImageResponse } from "next/og";

export const alt = "Biertracker — Echtzeit-Biertracking für Legenden";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          padding: "72px",
          backgroundColor: "#0A0A0C",
          backgroundImage:
            "radial-gradient(circle at 18% 0%, rgba(245,166,35,0.28), transparent 45%), radial-gradient(circle at 90% 100%, rgba(0,229,255,0.18), transparent 45%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand row */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "64px",
              height: "64px",
              borderRadius: "16px",
              backgroundImage: "linear-gradient(135deg, #FFC25C, #D98B0E)",
              color: "#0A0A0C",
              fontSize: "38px",
              fontWeight: 800,
            }}
          >
            B
          </div>
          <div
            style={{
              display: "flex",
              marginLeft: "22px",
              fontSize: "34px",
              fontWeight: 700,
              color: "#F8F9FA",
              letterSpacing: "-0.02em",
            }}
          >
            Biertracker
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: "82px",
              fontWeight: 800,
              color: "#F8F9FA",
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
            }}
          >
            Wer trinkt das Festival leer?
          </div>
          <div
            style={{
              display: "flex",
              marginTop: "16px",
              fontSize: "40px",
              fontWeight: 700,
              color: "#F5A623",
              letterSpacing: "-0.02em",
            }}
          >
            Echtzeit-Biertracking für Legenden.
          </div>
        </div>

        {/* Footer chips */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {["iOS & Android", "Big Screen Leaderboard", "Läuft auf Raspberry Pi"].map(
            (label) => (
              <div
                key={label}
                style={{
                  display: "flex",
                  marginRight: "16px",
                  padding: "12px 22px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  color: "#94A3B8",
                  fontSize: "24px",
                }}
              >
                {label}
              </div>
            )
          )}
        </div>
      </div>
    ),
    { ...size }
  );
}
