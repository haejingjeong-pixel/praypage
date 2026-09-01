import React from "react";
import { Icon } from "../core/Icon.jsx";
import { Divider } from "./Divider.jsx";
import { Checkbox } from "../forms/Checkbox.jsx";
import { Button } from "../actions/Button.jsx";

// window.__soundSettings(audio-manager.js)의 효과음 ON/OFF를 따른다 — 이 파일의 세 사운드
// 함수는 window.__sfx를 거치지 않는 독립 채널이라 각자 재생 직전에 직접 확인해야 한다.
function __sfxOn() { return !window.__soundSettings || window.__soundSettings.get().sfx; }

// Q1~Q4의 두 효과음 — 답변 선택(체크)과 "다음" 페이지 전환은 역할이 달라 서로 다른
// 사운드 파일을 쓴다. 각각 자기 자신의 Audio 요소를 재사용해 연속 클릭 시 소리가 겹쳐
// 쌓이지 않도록(재생 중이면 되감아 재시작) 하고, BGM(window.__bgm)과는 별개 채널이라
// 서로 방해하지 않는다.
// 체크 사운드는 재생 볼륨을 기본(1.0) 대비 약 2배로 키워야 해서 <audio>의 volume 속성
// (최대 1.0)만으로는 부족하다 — Web Audio API로 GainNode(2배 증폭) 뒤에 리미터
// (DynamicsCompressorNode)를 걸어 찢어짐/클리핑 없이 안전하게 증폭한다. 이 그래프는 체크
// 사운드 전용이며, 다른 효과음(다음 버튼·문진완료·마음카드)의 볼륨에는 영향을 주지 않는다.
let __clickSoundEl = null;
function playClickSound() {
  if (!__sfxOn()) return;
  try {
    if (!__clickSoundEl) {
      __clickSoundEl = new Audio("assets/check_sound_check_only_3.mp3");
      try {
        const Ctx = window.AudioContext || window.webkitAudioContext;
        const ctx = new Ctx();
        const source = ctx.createMediaElementSource(__clickSoundEl);
        const gain = ctx.createGain();
        gain.gain.value = 2; // 체크 사운드만 약 2배 증폭
        const limiter = ctx.createDynamicsCompressor(); // 증폭 후 찢어짐 방지용 리미터
        limiter.threshold.value = -6;
        limiter.knee.value = 0;
        limiter.ratio.value = 20;
        limiter.attack.value = 0.001;
        limiter.release.value = 0.1;
        source.connect(gain).connect(limiter).connect(ctx.destination);
        __clickSoundEl.__audioCtx = ctx;
      } catch (err) { /* Web Audio 사용 불가 환경 — 기본 볼륨으로 재생 */ }
    }
    if (__clickSoundEl.__audioCtx && __clickSoundEl.__audioCtx.state === "suspended") {
      __clickSoundEl.__audioCtx.resume();
    }
    __clickSoundEl.currentTime = 0;
    const p = __clickSoundEl.play();
    if (p && p.catch) p.catch(() => {});
  } catch (e) { /* noop */ }
}

// 페이지(문항) 전환 효과음 — 원본이 다소 빠르게 느껴져 재생 속도를 90%로 낮췄다.
// preservesPitch를 켜서 피치가 과하게 낮아지지 않게 한다(대부분의 최신 브라우저는
// 기본값이 true지만 명시). "다음" 클릭 직후 체감 지연을 없애기 위해 Audio 요소를 첫 클릭
// 때 만들지 않고 모듈 로드 시점에 미리 만들어 preload="auto"로 디코딩까지 끝내둔다 —
// 그래야 실제 클릭 시 fetch/디코딩 대기 없이 곧바로 재생된다.
let __pageTurnSoundEl = new Audio("assets/page_sound.mp3");
__pageTurnSoundEl.preload = "auto";
__pageTurnSoundEl.playbackRate = 0.9;
__pageTurnSoundEl.preservesPitch = true;
__pageTurnSoundEl.mozPreservesPitch = true;
__pageTurnSoundEl.webkitPreservesPitch = true;
__pageTurnSoundEl.load();
function playPageTurnSound() {
  if (!__sfxOn()) return;
  try {
    __pageTurnSoundEl.currentTime = 0;
    const p = __pageTurnSoundEl.play();
    if (p && p.catch) p.catch(() => {});
  } catch (e) { /* noop */ }
}

// "문진 완료" 버튼 전용 달칵 사운드 — 페이지 전환/체크 사운드와 다시 별개 채널.
// 원본이 다소 느리게 느껴져 재생 속도를 130%로 높였다(preservesPitch로 피치 왜곡 방지).
let __submitSoundEl = null;
function playSubmitSound() {
  if (!__sfxOn()) return;
  try {
    if (!__submitSoundEl) {
      __submitSoundEl = new Audio("assets/click_tight.mp3");
      __submitSoundEl.playbackRate = 1.3;
      __submitSoundEl.preservesPitch = true;
      __submitSoundEl.mozPreservesPitch = true;
      __submitSoundEl.webkitPreservesPitch = true;
    }
    __submitSoundEl.currentTime = 0;
    const p = __submitSoundEl.play();
    if (p && p.catch) p.catch(() => {});
  } catch (e) { /* noop */ }
}

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
      playClickSound();
    } else if (v && selCount >= maxSel) {
      return; // 상한 도달 — 무시
    } else {
      onToggle(step, oi, v);
      if (v) playClickSound();
    }
  };
  // 페이지(문항) 전환 시에만 재생 — 답변 체크 사운드와는 별개로, "다음/이전"으로 화면이
  // 넘어가는 순간에만 트리거된다.
  // 클릭 직후 체감 지연을 줄이려고 사운드를 state 갱신보다 먼저 트리거한다(순서만 바뀜,
  // 동작은 동일 — setStep은 어차피 비동기 리렌더라 오디오가 먼저 나가는 게 더 즉각적으로 느껴진다).
  const goPrev = () => { playPageTurnSound(); setStep((s) => Math.max(0, s - 1)); };
  const goNext = () => { if (!stepAnswered) return; playPageTurnSound(); setStep((s) => Math.min(total - 1, s + 1)); };
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
          onClick={goPrev}
          disabled={step === 0}
          aria-label="이전"
          style={{ width: 42, height: 42, borderRadius: "50%", border: "1.5px solid var(--line-soft)", background: "var(--cream)", cursor: step === 0 ? "default" : "pointer", opacity: step === 0 ? 0.3 : 1, display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 auto" }}
        >
          <Icon name="chevron-left" size={20} color="var(--text-muted)" stroke={1.8} />
        </button>
        {isLast ? (
          <Button tone="rx" size="md" disabled={!stepAnswered} onClick={() => { playSubmitSound(); onSubmit && onSubmit(); }} style={{ minWidth: 150 }}>{ctaLabel}</Button>
        ) : (
          <button
            onClick={goNext}
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
