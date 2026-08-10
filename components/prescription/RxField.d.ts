import React from "react";

/** One labeled row inside the 처방전 card (icon + blue label + value or verse). */
export interface RxFieldProps {
  /** Lucide icon name (calendar, user, heart-pulse, book-open, pill, triangle-alert, sprout…). */
  icon: string;
  /** Bold blue field label (처방일, 환자명, 오늘의 말씀…). */
  label: React.ReactNode;
  /** Plain value text. Ignored when `verse` is set. */
  value?: React.ReactNode;
  /** Verse body — rendered in the warm serif (for 오늘의 말씀). */
  verse?: React.ReactNode;
  /** Scripture reference under the verse. */
  reference?: React.ReactNode;
  /** Put label and value on one baseline (for short fields like 처방일). */
  inline?: boolean;
  style?: React.CSSProperties;
}

export function RxField(props: RxFieldProps): JSX.Element;
