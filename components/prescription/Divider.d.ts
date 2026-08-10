import React from "react";

/** Dotted rule between fields in the 처방전 card. */
export interface DividerProps {
  color?: string;
  /** Vertical margin in px. Default 14. */
  spacing?: number;
  style?: React.CSSProperties;
}

export function Divider(props: DividerProps): JSX.Element;
