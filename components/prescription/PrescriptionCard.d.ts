import React from "react";

/**
 * The tall 말씀 처방전 result card with prescription-blue linework.
 */
export interface PrescriptionCardProps {
  /** Brand line in the cartouche. Default "마음약국". */
  brand?: string;
  /** Big title. Default "말씀 처방전". */
  title?: string;
  /** Closing line under the fields. Pass "" to hide. */
  footer?: string;
  width?: number;
  /** RxField / Divider / PrescriptionWord rows. */
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export function PrescriptionCard(props: PrescriptionCardProps): JSX.Element;
