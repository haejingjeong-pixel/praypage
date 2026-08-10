import React from "react";

/**
 * Divider — dotted rule used between fields inside the 처방전 card.
 */
export function Divider({ color = "var(--divider)", spacing = 14, style = {} }) {
  return (
    <div
      style={{
        borderTop: `1.5px dotted ${color}`,
        margin: `${spacing}px 0`,
        ...style,
      }}
    />
  );
}
