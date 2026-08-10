import React from "react";

/**
 * PrescriptionCard — the tall cream 말씀 처방전 result card with prescription-blue
 * linework: an arched cartouche header (마음약국 · cross · 말씀 처방전) inside a
 * rounded frame, a body slot for RxField rows, and a warm closing line.
 *
 * Designed at a share-friendly vertical ratio; drop RxField/Divider/PrescriptionWord
 * children into the body.
 */
export function PrescriptionCard({
  brand = "마음약국",
  title = "말씀 처방전",
  footer = "당신의 하루가 말씀으로 회복되길 바랍니다.",
  width = 340,
  children,
  style = {},
}) {
  const RX = "var(--rx-ink)";
  return (
    <div
      style={{
        position: "relative",
        width,
        background: "var(--surface-rx)",
        borderRadius: "var(--radius-xl)",
        boxShadow: "var(--shadow-rx)",
        padding: 22,
        fontFamily: "var(--font-body)",
        ...style,
      }}
    >
      {/* rounded blue frame */}
      <div
        style={{
          position: "absolute",
          inset: 14,
          border: `1.5px solid ${RX}`,
          borderRadius: 20,
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", padding: "8px 12px 6px" }}>
        {/* arched cartouche header */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: -2, marginBottom: 22 }}>
          <div
            style={{
              minWidth: 190,
              background: "var(--surface-rx)",
              border: `1.5px solid ${RX}`,
              borderRadius: "110px 110px 22px 22px",
              padding: "18px 30px 16px",
              textAlign: "center",
            }}
          >
            <div style={{ fontFamily: "var(--font-label)", fontSize: 11, letterSpacing: "0.3em", color: RX, marginBottom: 8, paddingLeft: "0.3em" }}>
              {brand}
            </div>
            <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}>
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
                <path d="M13 3v20M3 13h20" stroke={RX} strokeWidth="3.4" strokeLinecap="round" />
              </svg>
            </div>
            <div style={{ fontFamily: "var(--font-title)", fontSize: 26, lineHeight: 1.1, color: RX }}>
              {title}
            </div>
          </div>
        </div>

        {/* fields */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4 }}>{children}</div>

        {/* footer */}
        {footer && (
          <>
            <div style={{ borderTop: `1.5px dotted var(--divider)`, margin: "16px 0 12px" }} />
            <p style={{ textAlign: "center", fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--text-muted)", margin: 0 }}>
              {footer} <span style={{ color: "var(--coral-300)" }}>♡</span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}
