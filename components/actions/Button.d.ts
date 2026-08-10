import React from "react";

/**
 * 마음약국 action button.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual tone. "coral" = warm brand primary, "rx" = prescription blue CTA, "outline" = white card button, "ghost". Default "coral". */
  tone?: "coral" | "rx" | "outline" | "ghost";
  /** Size. Default "md". */
  size?: "sm" | "md" | "lg";
  /** Optional node rendered before the label (typically an <Icon/>). */
  icon?: React.ReactNode;
  /** Full-width. Default false. */
  block?: boolean;
  disabled?: boolean;
}

export function Button(props: ButtonProps): JSX.Element;
