import React from "react";
import { Icon } from "../core/Icon.jsx";

/**
 * MOODS — the 8 마음 증상 of 마음약국, with their envelope color, thin line
 * icon, and mapped 처방 단어 (word that links out to 말씀광장 성경사전).
 */
export const MOODS = {
  anxious: { label: "불안해요",            icon: "waves",           fill: "var(--mood-anxious-fill)", ink: "var(--mood-anxious-ink)", word: "믿음" },
  broken:  { label: "마음이\n무너졌어요",   icon: "heart-crack",     fill: "var(--mood-broken-fill)",  ink: "var(--mood-broken-ink)",  word: "긍휼" },
  compare: { label: "비교돼요",            icon: "user",            fill: "var(--mood-compare-fill)", ink: "var(--mood-compare-ink)", word: "사랑" },
  waiting: { label: "기다리기\n힘들어요",   icon: "hourglass",       fill: "var(--mood-waiting-fill)", ink: "var(--mood-waiting-ink)", word: "인내" },
  forgive: { label: "용서가\n안 돼요",      icon: "heart-handshake", fill: "var(--mood-forgive-fill)", ink: "var(--mood-forgive-ink)", word: "용서" },
  distant: { label: "하나님이\n멀게 느껴져요", icon: "church",        fill: "var(--mood-distant-fill)", ink: "var(--mood-distant-ink)", word: "말씀" },
  calling: { label: "책임이\n버거워요", icon: "sprout",          fill: "var(--mood-calling-fill)", ink: "var(--mood-calling-ink)", word: "책임" },
  thanks:  { label: "감사가\n사라졌어요",   icon: "sun",             fill: "var(--mood-thanks-fill)",  ink: "var(--mood-thanks-ink)",  word: "감사" },
};

/**
 * MoodEnvelope — rebuilt from the reference measurements. A short brass ring
 * sits flush against the wood shelf (no hanging line/gap); directly below it,
 * a wide paper pocket (65–70% of the card's total height) covers the lower
 * body of a cream card tucked in BEHIND it — the card only peeks ~30–35%
 * above the pocket, and a thin sliver of its colored border shows at the two
 * top corners where the pocket's shallow center-dip opening sits just below
 * the card edge. Wide/short aspect (not square), paper-fold shadow at the
 * seam, subtle grain — a real paper envelope, not a hanging tag.
 */
export function MoodEnvelope({
  mood,
  label,
  icon,
  fill,
  ink,
  hanging = true,
  selected = false,
  onClick,
  width = 200,
  style = {},
  ...rest
}) {
  const m = (mood && MOODS[mood]) || {};
  const _label = label ?? m.label ?? "";
  const _icon = icon ?? m.icon ?? "circle";
  const _fill = fill ?? m.fill ?? "var(--mood-anxious-fill)";
  const _ink = ink ?? m.ink ?? "var(--text-strong)";

  const pocketH = selected ? 118 : 112; // ~68% of total visual height
  const peek = selected ? 54 : 48;      // ~32% exposed above the pocket
  const cardH = peek + 42;              // rest of the card is tucked behind the pocket
  const cornerY = 2, centerY = 11;      // very shallow center dip — not a wave
  const clipPath = `path("M0,${cornerY} C ${width * 0.32},${centerY} ${width * 0.68},${centerY} ${width},${cornerY} L${width},${pocketH} L0,${pocketH} Z")`;

  return (
    <div
      onClick={onClick}
      style={{
        position: "relative",
        width,
        cursor: onClick ? "pointer" : "default",
        paddingTop: hanging ? 9 : 0,
        transform: selected ? "translateY(-7px)" : "translateY(0)",
        transition: "transform 220ms var(--ease-soft)",
        filter: "drop-shadow(0 7px 9px rgba(70,58,45,0.12))",
        ...style,
      }}
      {...rest}
    >
      {/* short brass ring, flush against the shelf directly above */}
      {hanging && (
        <span
          style={{
            position: "absolute",
            top: -5,
            left: "50%",
            transform: "translateX(-50%)",
            width: 13,
            height: 13,
            borderRadius: "50%",
            border: "2.5px solid #A9814F",
            background: "linear-gradient(135deg,#E2C58A,#8F6934)",
            boxShadow: "0 1px 1px rgba(0,0,0,0.22)",
            zIndex: 4,
          }}
        />
      )}

      {/* cream card, tucked mostly behind the pocket — only the top peeks out */}
      <div
        style={{
          position: "relative",
          marginTop: 5,
          height: cardH,
          background: "var(--cream)",
          border: `1.5px solid ${_fill}`,
          borderBottom: "none",
          borderRadius: "5px 5px 0 0",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          paddingTop: 11,
          boxSizing: "border-box",
          transition: "height 220ms var(--ease-soft)",
          zIndex: 1,
        }}
      >
        <Icon name={_icon} size={19} color={_ink} stroke={1.3} />
      </div>

      {/* wide paper pocket — flat rectangle, shallow center-dip mouth, fold shadow at the seam */}
      <div
        style={{
          position: "relative",
          marginTop: -(cardH - peek),
          height: pocketH,
          background: _fill,
          backgroundImage: "var(--paper-noise)",
          clipPath,
          WebkitClipPath: clipPath,
          boxShadow: `${selected ? "var(--shadow-lg)" : "var(--shadow-md)"}, inset 0 7px 7px -6px rgba(40,28,16,0.22)`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: 0,
          zIndex: 2,
          transition: "box-shadow 220ms var(--ease-soft)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-title)",
            fontWeight: 500,
            fontSize: 18,
            lineHeight: 1.35,
            textAlign: "center",
            color: "var(--ink-900)",
            whiteSpace: "pre-line",
          }}
        >
          {_label}
        </span>
      </div>
    </div>
  );
}
