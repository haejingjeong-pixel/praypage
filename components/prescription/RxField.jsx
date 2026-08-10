import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * RxField — one centered block inside the 말씀 처방전 card: an icon + bold
 * blue label centered on the card's vertical axis, with the value/verse
 * centered beneath. Use `verse` for the 오늘의 말씀 block (serif verse +
 * reference); otherwise pass plain `value` text.
 */
export function RxField({ icon, label, value, verse, reference, inline = false, style = {} }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", ...style }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: verse || (value && !inline) ? 8 : 4 }}>
        <Icon name={icon} size={18} color="var(--rx-ink)" stroke={1.6} />
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontWeight: 700,
            fontSize: 15,
            color: "var(--rx-ink)",
            letterSpacing: "0.01em",
          }}
        >
          {label}
        </span>
        {inline && value && (
          <span style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-body)" }}>
            {value}
          </span>
        )}
      </div>
      {verse ? (
        <div style={{ maxWidth: 260 }}>
          <p style={{ fontFamily: "var(--font-verse)", fontSize: "var(--fs-verse)", lineHeight: "var(--lh-verse)", color: "var(--text-strong)", margin: 0, textAlign: "center" }}>
            {verse}
          </p>
          {reference && (
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-muted)", margin: "6px 0 0", textAlign: "center" }}>
              {reference}
            </p>
          )}
        </div>
      ) : (
        !inline && value && (
          <span style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: "var(--lh-body)", color: "var(--text-body)", textAlign: "center", maxWidth: 260 }}>
            {value}
          </span>
        )
      )}
    </div>
  );
}
