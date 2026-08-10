import React from "react";

/**
 * Checkbox — square line checkbox with a Korean label, as used on the
 * 오늘의 마음 접수카드 (intake form). Warm ink, soft rounding.
 */
export function Checkbox({ label, checked = false, onChange, disabled = false, style = {}, ...rest }) {
  return (
    <label
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        fontFamily: "var(--font-body)",
        fontSize: "var(--fs-body-sm)",
        color: "var(--text-body)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.5 : 1,
        ...style,
      }}
      {...rest}
    >
      <span
        onClick={() => !disabled && onChange && onChange(!checked)}
        style={{
          width: 18,
          height: 18,
          flex: "0 0 auto",
          borderRadius: 5,
          border: `1.5px solid ${checked ? "var(--accent)" : "var(--ink-300)"}`,
          background: checked ? "var(--accent)" : "transparent",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all var(--dur-fast) var(--ease-soft)",
        }}
      >
        {checked && (
          <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6.2l2.2 2.3 4.8-5" stroke="var(--on-accent)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </span>
      {label}
    </label>
  );
}
