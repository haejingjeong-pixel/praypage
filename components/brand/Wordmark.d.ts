import React from "react";

/**
 * The 마음약국 name lockup (typographic — no logo binary in source).
 */
export interface WordmarkProps {
  name?: string;
  /** Optional smaller line under the name. */
  tagline?: string;
  /** Line mark drawn from the mockups. Default "cross". */
  mark?: "cross" | "heart" | "none";
  /** Mark color. Default warm coral. */
  color?: string;
  /** Name font-size in px. Default 22. */
  size?: number;
  style?: React.CSSProperties;
}

export function Wordmark(props: WordmarkProps): JSX.Element;
