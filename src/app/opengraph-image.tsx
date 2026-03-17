import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Documind — Gere Contratos Profissionais com IA em Segundos";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a78bfa 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.2)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "48px",
              fontWeight: 700,
              color: "#fff",
              marginRight: "20px",
            }}
          >
            D
          </div>
          <div style={{ fontSize: "52px", fontWeight: 700, color: "#fff" }}>
            Documind
          </div>
        </div>
        <div
          style={{
            fontSize: "32px",
            color: "rgba(255,255,255,0.9)",
            textAlign: "center",
            maxWidth: "800px",
            lineHeight: 1.4,
          }}
        >
          Gere Contratos e Documentos Profissionais com IA em Segundos
        </div>
        <div
          style={{
            marginTop: "40px",
            padding: "16px 40px",
            borderRadius: "12px",
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.3)",
            fontSize: "20px",
            color: "#fff",
          }}
        >
          documind.com.br
        </div>
      </div>
    ),
    { ...size }
  );
}
