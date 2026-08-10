import React from "react";

/**
 * Square line checkbox with a Korean label — from the 오늘의 마음 접수카드.
 */
export interface CheckboxProps {
  /** Label text beside the box. */
  label: React.ReactNode;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  disabled?: boolean;
  style?: React.CSSProperties;
}

export function Checkbox(props: CheckboxProps): JSX.Element;
