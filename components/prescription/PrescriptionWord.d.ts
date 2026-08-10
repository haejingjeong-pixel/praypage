import React from "react";

/** The 오늘의 처방 단어 block (star + label + big word) that links to 말씀광장. */
export interface PrescriptionWordProps {
  /** The prescribed word (믿음, 긍휼, 사명…). */
  word?: string;
  /** Small label above it. Default "오늘의 처방 단어". */
  label?: string;
  style?: React.CSSProperties;
}

export function PrescriptionWord(props: PrescriptionWordProps): JSX.Element;
