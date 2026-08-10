import React from "react";
import { Icon } from "../core/Icon.jsx";
import { Divider } from "./Divider.jsx";
import { Checkbox } from "../forms/Checkbox.jsx";
import { Button } from "../actions/Button.jsx";

function scallopPath(width, bumps = 9, amp = 8, baseY = 13) {
  const step = width / bumps;
  let d = `M0,${baseY} `;
  for (let i = 0; i < bumps; i++) {
    const x1 = i * step + step / 2, x2 = (i + 1) * step;
    d += `Q ${x1},${baseY - amp} ${x2},${baseY} `;
  }
  d += `L${width},4000 L0,4000 Z`;
  return d;
}

/**
 * AssessmentPaper — the paper "오늘의 마음 접수카드" that rises out of a mood
 * envelope. Soft scalloped top edge, fixed header, and a STEPPED questionnaire:
 * one question at a time with a "1 / N" progress marker, a 이전/다음 footer, and
 * a final 문진 완료 CTA. Stepping keeps each question calm and readable instead
 * of showing the whole survey at once. Set `pc` for the roomier desktop scale.
 */
export function AssessmentPaper({
  icon = "heart-crack",
  iconColor = "var(--accent)",
  title = "오늘의 마음 접수카드",
  subtitle = "괜찮은 척하지 않아도 괜찮아요.\n가까운 것만 골라주세요.",
  groups = [],
  selections = {},
  onToggle,
  ctaLabel = "문진 완료",
  onSubmit,
  width = 340,
  pc = false,
  cardHeight = null,
  skip: skipProp = false,
  style = {},
}) {
  const clip = `path("${scallopPath(width)}")`;
  const [step, setStep] = React.useState(0);
  const total = groups.length || 1;
  React.useEffect(() => { setStep(0); }, [groups]);

  const g = groups[step] || { number: "", question: "", options: [] };
  // 선택 규칙: Q1(step 0) 단일 선택(A/B 판정), Q2(step 1) 최대 3개, Q3(step 2) 최대 2개, 나머지 제한 없음.
  const maxSel = step === 0 ? 1 : step === 1 ? 3 : step === 2 ? 2 : Infinity;
  const selCount = g.options.filter((_, k) => selections[`${step}-${k}`]).length;
  const selHint = maxSel === 1 ? "하나만 선택할 수 있어요" : maxSel === Infinity ? null : `최대 ${maxSel}개까지 선택할 수 있어요 (${selCount}/${maxSel})`;
  const handleToggle = (oi, v) => {
    if (!onToggle) return;
    if (v && maxSel === 1) {
      for (let k = 0; k < g.options.length; k++) if (k !== oi && selections[`${step}-${k}`]) onToggle(step, k, false);
      onToggle(step, oi, true);
    } else if (v && selCount >= maxSel) {
      return; // 상한 도달 — 무시
    } else {
      onToggle(step, oi, v);
    }
  };
  // step 0은 접수카드가 봉투에서 올라온 뒤(≈rise 완료)에 애니메이션이 시작되도록 오프셋
  const o = step === 0 ? 2900 : 0;
  const stepAnswered = g.options.some((_, oi) => selections[`${step}-${oi}`]);
  const isLast = step >= total - 1;
  const [skip, setSkip] = React.useState(false); // 더블클릭하면 항목 즉시 표시
  React.useEffect(() => { setSkip(false); }, [step]);
  const skipAll = skip || skipProp;

  const pad = pc ? "58px 56px 0" : "56px 26px 0";
  const optCols = pc ? "1fr 1fr" : "1fr";
  const qSize = pc ? 20 : 16;
  const optSize = pc ? 15.5 : 14;

  return (
    <div
      onDoubleClick={() => setSkip(true)}
      style={{
        position: "relative",
        width,
        background: "var(--cream)",
        clipPath: clip,
        WebkitClipPath: clip,
        boxShadow: "var(--shadow-rx)",
        fontFamily: "var(--font-body)",
        boxSizing: "border-box",
        ...(cardHeight ? { height: cardHeight, display: "flex", flexDirection: "column" } : {}),
        ...style,
      }}
    >
      {/* header */}
      <div style={{ padding: pad, textAlign: "center" }}>
        <Icon name={icon} size={pc ? 24 : 24} color={iconColor} stroke={1.5} />
        <h2 style={{ fontFamily: "var(--font-title)", fontWeight: 600, fontSize: pc ? 23 : 22, color: "var(--ink-900)", margin: pc ? "6px 0 4px" : "10px 0 8px" }}>{title}</h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: pc ? 13.5 : 12.5, lineHeight: 1.6, color: "var(--text-muted)", whiteSpace: "pre-line", margin: 0 }}>{subtitle}</p>

        {/* progress: dots + 1 / N */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, margin: pc ? "14px 0 2px" : "18px 0 2px" }}>
          <div style={{ display: "flex", gap: 6 }}>
            {groups.map((_, i) => (
              <span key={i} style={{ width: i === step ? 22 : 8, height: 8, borderRadius: 999, background: i === step ? iconColor : (i < step ? "var(--ink-300)" : "var(--line-soft)"), transition: "all 320ms cubic-bezier(0.22,1,0.32,1)" }} />
            ))}
          </div>
          <span style={{ fontFamily: "var(--font-body)", fontSize: pc ? 13 : 12, color: "var(--text-muted)", letterSpacing: "0.04em" }}>{step + 1} / {total}</span>
        </div>
        <Divider spacing={pc ? 14 : 16} />
      </div>

      {/* one question at a time */}
      <div style={{ padding: pc ? "0 56px" : "0 26px", ...(cardHeight ? { flex: 1, minHeight: 0, overflowY: "auto" } : { minHeight: 168 }) }}>
        <div key={step} style={{ animation: skipAll ? "none" : "rxstep 700ms cubic-bezier(0.22,1,0.32,1)" }}>
          <div style={{ marginBottom: pc ? 16 : 16 }}>
            <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: pc ? 12 : 11, letterSpacing: "0.16em", color: iconColor, marginBottom: 8, animation: skipAll ? "none" : "rxopt 1200ms cubic-bezier(0.22,1,0.32,1) both", animationDelay: skipAll ? undefined : `${o}ms` }}>Q{g.number}</div>
            <div style={{ fontFamily: "var(--font-title)", fontWeight: 600, fontSize: qSize, lineHeight: 1.5, color: "var(--ink-900)", letterSpacing: "-0.01em", animation: skipAll ? "none" : "rxopt 1200ms cubic-bezier(0.22,1,0.32,1) both", animationDelay: skipAll ? undefined : `${o + 300}ms` }}>{g.question}</div>
            {g.hint && <div style={{ fontFamily: "var(--font-body)", fontSize: pc ? 13 : 12, color: "var(--text-muted)", marginTop: 8, lineHeight: 1.6, animation: skipAll ? "none" : "rxopt 1200ms cubic-bezier(0.22,1,0.32,1) both", animationDelay: skipAll ? undefined : `${o + 650}ms` }}>{g.hint}</div>}
            {selHint && <div style={{ display: "inline-flex", alignItems: "center", gap: 5, fontFamily: "var(--font-body)", fontSize: pc ? 12 : 11, color: "var(--text-muted)", marginTop: 10, padding: "3px 10px", borderRadius: 999, background: "var(--paper-warm)", animation: skipAll ? "none" : "rxopt 1200ms cubic-bezier(0.22,1,0.32,1) both", animationDelay: skipAll ? undefined : `${o + 800}ms` }}><Icon name={maxSel === 1 ? "circle-dot" : "list-checks"} size={13} color="var(--text-muted)" stroke={1.7} />{selHint}</div>}
          </div>
          <div style={{ display: "grid", gridTemplateColumns: optCols, gap: pc ? "10px 18px" : "11px 0" }}>
            {g.options.map((opt, oi) => {
              const key = `${step}-${oi}`;
              return (
                <div key={key} style={{ animation: skipAll ? "none" : `rxopt 1000ms cubic-bezier(0.22,1,0.32,1) both`, animationDelay: skipAll ? undefined : `${o + 1050 + oi * 430}ms` }}>
                  <Checkbox
                    label={opt}
                    checked={!!selections[key]}
                    onChange={(v) => handleToggle(oi, v)}
                    disabled={!selections[key] && selCount >= maxSel}
                    style={{ fontSize: optSize, padding: pc ? "4px 0" : "3px 0" }}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* footer nav — 중앙 정렬 화살표 (봉투에 가리지 않도록 컴팩트하게) */}
      <div style={{ padding: pc ? "16px 56px 26px" : "14px 26px 24px", marginTop: 6, display: "flex", alignItems: "center", justifyContent: "center", gap: 18 }}>
        <button
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          aria-label="이전"
          style={{ width: 42, height: 42, borderRadius: "50%", border: "1.5px solid var(--line-soft)", background: "var(--cream)", cursor: step === 0 ? "default" : "pointer", opacity: step === 0 ? 0.3 : 1, display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" }}
        >
          <Icon name="chevron-left" size={20} color="var(--text-muted)" stroke={1.8} />
        </button>
        {isLast ? (
          <Button tone="rx" size="md" disabled={!stepAnswered} onClick={onSubmit} style={{ minWidth: 150 }}>{ctaLabel}</Button>
        ) : (
          <button
            onClick={() => stepAnswered && setStep((s) => Math.min(total - 1, s + 1))}
            disabled={!stepAnswered}
            aria-label="다음"
            style={{ width: 42, height: 42, borderRadius: "50%", border: "none", background: stepAnswered ? "var(--rx-blue-500)" : "var(--line-soft)", cursor: stepAnswered ? "pointer" : "default", display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto", transition: "background 200ms ease" }}
          >
            <Icon name="chevron-right" size={20} color="#F7FAFF" stroke={2} />
          </button>
        )}
      </div>
    </div>
  );
}
