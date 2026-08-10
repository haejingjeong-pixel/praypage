import React from "react";

/**
 * Numbered step progress for the 처방 flow (1·2·3·4).
 */
export interface StepIndicatorProps {
  /** Total steps. Default 4. */
  total?: number;
  /** Current (1-based) step. Default 1. */
  current?: number;
  /** Fill tone. Default "rx" (prescription blue). */
  tone?: "rx" | "coral";
  style?: React.CSSProperties;
}

export function StepIndicator(props: StepIndicatorProps): JSX.Element;
