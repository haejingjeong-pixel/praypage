import React from "react";

/**
 * Wordmark — the 마음약국 name lockup. The source provides no logo binary, so
 * the brand renders in type (var(--font-title)) beside a simple line mark drawn
 * directly from the mockups: a medical "cross" or a "heart". See readme.md → Brand.
 */
export function Wordmark({
  name = "마음약국",
  tagline,
  mark = "cross",
  color = "var(--accent)",
  size = 22,
  style = {},
}) {
  const markSize = size * 1.1;
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 10, ...style }}>
      {mark !== "none" && (
        <span style={{ display: "inline-flex", color }}>
          {mark === "cross" ? (
            <svg width={markSize} height={markSize} viewBox="0 0 26 26" fill="none">
              <rect x="1.4" y="1.4" width="23.2" height="23.2" rx="7" stroke={color} strokeWidth="1.6" />
              <path d="M13 7v12M7 13h12" stroke={color} strokeWidth="2.6" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width={markSize} height={markSize} viewBox="0 0 26 26" fill="none">
              <path d="M13 22S3.5 15.6 3.5 9.6A4.6 4.6 0 0 1 13 7a4.6 4.6 0 0 1 9.5 2.6C22.5 15.6 13 22 13 22z" stroke={color} strokeWidth="1.7" strokeLinejoin="round" />
              <path d="M13 9.5v5M10.6 12h4.8" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          )}
        </span>
      )}
      <span style={{ display: "inline-flex", flexDirection: "column", lineHeight: 1.05 }}>
        <span style={{ fontFamily: "var(--font-title)", fontSize: size, color: "var(--text-strong)" }}>{name}</span>
        {tagline && (
          <span style={{ fontFamily: "var(--font-body)", fontSize: size * 0.5, color: "var(--text-muted)", marginTop: 3 }}>{tagline}</span>
        )}
      </span>
    </div>
  );
}
