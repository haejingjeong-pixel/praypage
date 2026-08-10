import React from "react";

/**
 * Horizontal wood rail that MoodEnvelopes hang from (pure CSS, no image asset).
 */
export interface WoodShelfProps {
  width?: number | string;
  style?: React.CSSProperties;
}

export function WoodShelf(props: WoodShelfProps): JSX.Element;
