import React from "react";

/**
 * Icon — thin line-icon wrapper around Lucide (CDN). Nearest-match icon set
 * for the 마음약국 single-weight line glyphs.
 */
export interface IconProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Lucide icon name, kebab-case (e.g. "heart-crack", "book-open"). */
  name: string;
  /** Pixel size of the square glyph. Default 22. */
  size?: number;
  /** Stroke width. Default 1.6 (thin, matches brand). */
  stroke?: number;
  /** Glyph color. Default "currentColor". */
  color?: string;
}

export function Icon(props: IconProps): JSX.Element;
