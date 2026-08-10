import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * PrescriptionWord — the 오늘의 처방 단어 block at the foot of the card,
 * centered on the card's vertical axis: a star+label row, then the large word.
 */
export function PrescriptionWord({ word = "믿음", label = "오늘의 처방 단어", style = {} }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", ...style }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, marginBottom: 8 }}>
        <Icon name="star" size={18} color="var(--rx-ink)" stroke={1.6} />
        <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, color: "var(--rx-ink)" }}>
          {label}
        </span>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "center", gap: 8 }}>
        <span style={{ fontFamily: "var(--font-title)", fontSize: 32, lineHeight: 1, color: "var(--text-strong)" }}>
          {word}
        </span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" style={{ marginBottom: 4 }}>
          <path d="M12 3l1.2 3.4L16 4.8l-1.1 3.3 3.3-.4-2.6 2.3 2.6 2.3-3.3-.4L16 15.2 13.2 13.6 12 17l-1.2-3.4L8 15.2l1.1-3.3-3.3.4 2.6-2.3L5.8 7.7l3.3.4L8 4.8l2.8 1.6z" fill="var(--coral-200)" opacity="0.9" />
        </svg>
      </div>
    </div>
  );
}
