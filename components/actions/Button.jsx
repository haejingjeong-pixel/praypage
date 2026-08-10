import React from "react";

/**
 * Button — 마음약국 action button.
 * Tones: "coral" (warm brand primary), "rx" (prescription blue, used on the
 * result screen's main CTA), "outline" (white card button), "ghost".
 */
export function Button({
  children,
  tone = "coral",
  size = "md",
  icon = null,        // React node rendered before the label (e.g. <Icon .../>)
  block = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: "9px 16px",  fontSize: 14, radius: "var(--radius-lg)", gap: 8 },
    md: { padding: "14px 22px", fontSize: 16, radius: "var(--radius-lg)", gap: 10 },
    lg: { padding: "17px 28px", fontSize: 17, radius: "var(--radius-lg)", gap: 10 },
  }[size];

  const tones = {
    coral: {
      background: "var(--accent)",
      color: "var(--on-accent)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-sm)",
    },
    rx: {
      background: "var(--rx-blue-500)",
      color: "#F7FAFF",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-sm)",
    },
    outline: {
      background: "var(--surface-card)",
      color: "var(--rx-blue-500)",
      border: "1px solid var(--border-card)",
      boxShadow: "var(--shadow-sm)",
    },
    ghost: {
      background: "transparent",
      color: "var(--text-body)",
      border: "1px solid transparent",
      boxShadow: "none",
    },
  }[tone];

  return (
    <button
      disabled={disabled}
      style={{
        display: block ? "flex" : "inline-flex",
        width: block ? "100%" : "auto",
        alignItems: "center",
        justifyContent: "center",
        gap: sizes.gap,
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: sizes.fontSize,
        padding: sizes.padding,
        borderRadius: sizes.radius,
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        transition: "transform var(--dur-fast) var(--ease-soft), filter var(--dur-fast) var(--ease-soft)",
        ...tones,
        ...style,
      }}
      onMouseDown={(e) => { if (!disabled) e.currentTarget.style.transform = "scale(0.97)"; }}
      onMouseUp={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
      {...rest}
    >
      {icon}
      {children}
    </button>
  );
}
