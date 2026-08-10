import React from "react";

/**
 * WoodShelf — a thin, irregular-grain natural wood plank that a row of 4
 * MoodEnvelopes hang from via short brass rings. Pure CSS grain layered
 * from several offset stripe/gradient passes for an uneven, real-wood look.
 */
export function WoodShelf({ width = "100%", style = {} }) {
  return (
    <div
      style={{
        width,
        height: 12,
        borderRadius: 2,
        backgroundImage: [
          "repeating-linear-gradient(89deg, rgba(60,40,20,0.10) 0px, transparent 2px, transparent 6px, rgba(60,40,20,0.06) 7px, transparent 11px)",
          "repeating-linear-gradient(91deg, rgba(255,235,205,0.12) 0px, transparent 3px, transparent 8px)",
          "linear-gradient(180deg, #C7A374 0%, #B08F5C 50%, #97754A 100%)",
        ].join(","),
        boxShadow: "0 3px 6px rgba(70,58,45,0.16), inset 0 1px 0 rgba(255,255,255,0.2)",
        ...style,
      }}
    />
  );
}
