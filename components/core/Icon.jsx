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

  // lucide.createIcons()가 <i data-lucide>를 실제 <svg>로 "바꿔치기"(outerHTML 교체)하기
  // 때문에, React가 그 <i> 자리를 계속 같은 노드로 알고 있으면(선언적으로 렌더링) name이
  // 바뀌어도 리액트가 업데이트를 이미 lucide가 치워버린 낡은 노드에 적용해 화면엔 반영되지
  // 않는 버그가 생긴다(사운드 on/off 아이콘이 상태가 바뀌어도 안 바뀌던 원인). 그래서 <i>를
  // React가 선언적으로 그리지 않고, effect 안에서 매번 직접 innerHTML로 새로 심어 lucide에게
  // 완전히 넘긴다 — name/stroke가 바뀔 때마다 새 <i>를 만들어 createIcons가 다시 변환한다.
  useEffect(() => {
    if (ref.current && typeof window !== "undefined" && window.lucide) {
      ref.current.innerHTML = `<i data-lucide="${name}" style="width:${size}px;height:${size}px"></i>`;
      window.lucide.createIcons({
        icons: window.lucide.icons,
        attrs: { "stroke-width": stroke },
        nameAttr: "data-lucide",
      });
    }
  }, [name, size, stroke]);

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
    />
  );
}
