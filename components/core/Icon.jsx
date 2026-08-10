import React, { useEffect, useRef } from "react";

/**
 * Icon — thin line-icon wrapper around Lucide (loaded from CDN).
 * The 마음약국 mockups use a single-weight line-icon set; Lucide is the
 * nearest CDN match (see readme.md → Iconography, substitution noted).
 *
 * Requires the Lucide UMD script on the page (cards + kits load it):
 *   <script src="https://unpkg.com/lucide@0.544.0/dist/umd/lucide.min.js"></script>
 */
export function Icon({ name, size = 22, stroke = 1.6, color = "currentColor", style = {}, ...rest }) {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current && typeof window !== "undefined" && window.lucide) {
      window.lucide.createIcons({
        icons: window.lucide.icons,
        attrs: { "stroke-width": stroke },
        nameAttr: "data-lucide",
      });
    }
  });

  return (
    <span
      ref={ref}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        color,
        width: size,
        height: size,
        lineHeight: 0,
        ...style,
      }}
      {...rest}
    >
      <i
        data-lucide={name}
        style={{ width: size, height: size }}
      ></i>
    </span>
  );
}
