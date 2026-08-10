import React from "react";

/** One numbered question group in an AssessmentPaper. */
export interface AssessmentGroup {
  number: string;
  question: string;
  options: string[];
}

/**
 * The paper 오늘의 마음 접수카드 that rises from a mood envelope — scalloped
 * torn top edge, fixed header, internally-scrolling checkbox questionnaire,
 * footer CTA. Data-driven: swap `groups` per mood without touching layout.
 */
export interface AssessmentPaperProps {
  /** Lucide icon name shown at the top (usually the mood's icon). */
  icon?: string;
  iconColor?: string;
  title?: string;
  /** Supports \n for two lines. */
  subtitle?: string;
  groups: AssessmentGroup[];
  /** Map of "groupIndex-optionIndex" -> checked. */
  selections?: Record<string, boolean>;
  onToggle?: (groupIndex: number, optionIndex: number, checked: boolean) => void;
  ctaLabel?: string;
  onSubmit?: () => void;
  width?: number;
  /** Max px height of the scrolling question area. Default 300. */
  scrollHeight?: number;
  style?: React.CSSProperties;
}

export function AssessmentPaper(props: AssessmentPaperProps): JSX.Element;
