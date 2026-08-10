import React from "react";

/**
 * The 오늘의 마음 접수카드 paper form sheet.
 */
export interface IntakeSheetProps {
  title?: string;
  /** Warm subtitle (supports \n). */
  subtitle?: string;
  width?: number;
  /** IntakeSheet.Group blocks. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export interface IntakeGroupProps {
  /** Two-digit question number, e.g. "01". */
  number: string;
  question: React.ReactNode;
  /** Checkbox columns. Default 1. */
  columns?: number;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

interface IntakeSheetComponent {
  (props: IntakeSheetProps): JSX.Element;
  Group: (props: IntakeGroupProps) => JSX.Element;
}

export const IntakeSheet: IntakeSheetComponent;
