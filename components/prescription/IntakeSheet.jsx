import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * IntakeSheet — the cream paper "오늘의 마음 접수카드" form sheet: a centered
 * heart-crack mark, title, warm subtitle, and a body slot for numbered
 * question groups (use IntakeSheet.Group + Checkbox). Bottom edge is a soft
 * dotted tear line, echoing paper sliding from an envelope.
 */
export function IntakeSheet({
  title = "오늘의 마음 접수카드",
  subtitle = "괜찮은 척하지 않아도 괜찮아요.\n가까운 것만 골라주세요.",
  width = 560,
  children,
  style = {},
}) {
  return (
    <div
      style={{
        width,
        background: "var(--cream)",
        borderRadius: "18px 18px 20px 20px",
        boxShadow: "var(--shadow-lg)",
        padding: "34px 44px 30px",
        fontFamily: "var(--font-body)",
        ...style,
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 8 }}>
        <Icon name="heart-crack" size={26} color="var(--accent)" stroke={1.6} />
      </div>
      <h2 style={{ textAlign: "center", fontFamily: "var(--font-title)", fontSize: 30, color: "var(--text-strong)", margin: "0 0 10px" }}>
        {title}
      </h2>
      <p style={{ textAlign: "center", fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6, color: "var(--text-muted)", whiteSpace: "pre-line", margin: "0 0 4px" }}>
        {subtitle}
      </p>
      <div style={{ borderTop: "1.5px solid var(--coral-100)", margin: "16px 0 20px" }} />
      <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>{children}</div>
    </div>
  );
}

/** A numbered question group inside the intake sheet. */
IntakeSheet.Group = function Group({ number, question, children, columns = 1, style = {} }) {
  return (
    <div style={style}>
      <div style={{ display: "flex", gap: 10, alignItems: "baseline", marginBottom: 12 }}>
        <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14, color: "var(--text-faint)" }}>
          {number}
        </span>
        <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, color: "var(--text-strong)" }}>
          {question}
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: `repeat(${columns}, 1fr)`, gap: "12px 16px", paddingLeft: 24 }}>
        {children}
      </div>
    </div>
  );
};
