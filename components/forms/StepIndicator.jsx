import React from "react";

/**
 * StepIndicator — numbered progress used across the 처방 flow (1·2·3·4).
 * The active/completed steps fill with prescription blue; upcoming are faint.
 */
export function StepIndicator({ total = 4, current = 1, tone = "rx", style = {} }) {
  const fill = tone === "coral" ? "var(--accent)" : "var(--rx-blue-500)";
  const steps = Array.from({ length: total }, (_, i) => i + 1);
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, ...style }}>
      {steps.map((n, i) => {
        const done = n <= current;
        const isCurrent = n === current;
        return (
          <React.Fragment key={n}>
            <span
              style={{
                width: isCurrent ? 30 : 26,
                height: isCurrent ? 30 : 26,
                borderRadius: "50%",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontFamily: "var(--font-body)",
                fontWeight: 700,
                fontSize: 13,
                background: done ? fill : "transparent",
                color: done ? "#F7FAFF" : "var(--text-faint)",
                border: done ? "1px solid transparent" : "1.5px solid var(--ink-300)",
                transition: "all var(--dur-base) var(--ease-soft)",
              }}
            >
              {n}
            </span>
            {i < steps.length - 1 && (
              <span style={{ width: 20, height: 2, borderRadius: 2, background: n < current ? fill : "var(--line-soft)" }} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
