import React from "react";

export type MoodKey =
  | "anxious" | "broken" | "compare" | "waiting"
  | "forgive" | "distant" | "calling" | "thanks";

export interface MoodDef {
  label: string;
  icon: string;
  fill: string;
  ink: string;
  word: string;
}

/** The 8 마음 증상 with envelope color, icon, and mapped 처방 단어. */
export const MOODS: Record<MoodKey, MoodDef>;

/**
 * Quiet flat-paper envelope hanging from a shelf rail, from the 마음 접수대.
 * @startingPoint section="Prescription" subtitle="Mood-selector envelope" viewport="700x230"
 */
export interface MoodEnvelopeProps extends React.HTMLAttributes<HTMLDivElement> {
  /** One of the 8 mood keys — sets color, icon and label automatically. */
  mood?: MoodKey;
  /** Override label (supports \n for two lines). */
  label?: string;
  /** Override Lucide icon name. */
  icon?: string;
  /** Override envelope fill / icon-ink CSS values. */
  fill?: string;
  ink?: string;
  /** Show the brass hanging ring on top. Default true. */
  hanging?: boolean;
  /** Selected (lifted) state. Default false. */
  selected?: boolean;
  onClick?: () => void;
  width?: number;
}

export function MoodEnvelope(props: MoodEnvelopeProps): JSX.Element;
