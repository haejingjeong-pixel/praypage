/* @ds-bundle: {"format":4,"namespace":"DesignSystem_d4e5a3","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"StepIndicator","sourcePath":"components/forms/StepIndicator.jsx"},{"name":"AssessmentPaper","sourcePath":"components/prescription/AssessmentPaper.jsx"},{"name":"Divider","sourcePath":"components/prescription/Divider.jsx"},{"name":"IntakeSheet","sourcePath":"components/prescription/IntakeSheet.jsx"},{"name":"MOODS","sourcePath":"components/prescription/MoodEnvelope.jsx"},{"name":"MoodEnvelope","sourcePath":"components/prescription/MoodEnvelope.jsx"},{"name":"PrescriptionCard","sourcePath":"components/prescription/PrescriptionCard.jsx"},{"name":"PrescriptionWord","sourcePath":"components/prescription/PrescriptionWord.jsx"},{"name":"RxField","sourcePath":"components/prescription/RxField.jsx"},{"name":"WoodShelf","sourcePath":"components/prescription/WoodShelf.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"f1c1a01bcfcc","components/brand/Wordmark.jsx":"ffac84e8995f","components/core/Icon.jsx":"810e3556184d","components/forms/Checkbox.jsx":"9d7345e82d79","components/forms/StepIndicator.jsx":"f0e100d788cf","components/prescription/AssessmentPaper.jsx":"a8da5fd58766","components/prescription/Divider.jsx":"3254f53877e4","components/prescription/IntakeSheet.jsx":"25c90730a4bb","components/prescription/MoodEnvelope.jsx":"15133bc19d38","components/prescription/PrescriptionCard.jsx":"bcaaf72df6b4","components/prescription/PrescriptionWord.jsx":"466a85af6e0f","components/prescription/RxField.jsx":"f0a1ebe4ad70","components/prescription/WoodShelf.jsx":"d79b56492176","doc-page.js":"371bab66f42d","mind-pharmacy/app.js":"0fcf9f28fef2","mind-pharmacy/audio.js":"e5d95a24d1ac","mind-pharmacy/data/assessment-data.js":"9df5807165d2","mind-pharmacy/data/rx-data.js":"042643421459","mind-pharmacy/data/rx-prescriptions.js":"e6ac5013ffc1","mind-pharmacy/data/stickers-data.js":"ae28fcc9bda3","ui_kits/soul-pharmacy/AssessmentScreen.jsx":"6b2e0c620cf2","ui_kits/soul-pharmacy/AssessmentScreen.standalone.jsx":"0cceea7d7fd8","ui_kits/soul-pharmacy/IntroScreen.jsx":"2c932eb1017c","ui_kits/soul-pharmacy/IntroSequence.jsx":"06123de2c6e8","ui_kits/soul-pharmacy/LogoMark.jsx":"84d231d44b7c","ui_kits/soul-pharmacy/MainScreen.jsx":"6cda3c5f783d","ui_kits/soul-pharmacy/MainScreen.standalone.jsx":"b7e4006dcdc5","ui_kits/soul-pharmacy/MainWide.jsx":"79999ebb08be","ui_kits/soul-pharmacy/MoodWallScreen.jsx":"6df1315b6ff8","ui_kits/soul-pharmacy/ResultScreen.jsx":"3b7f0dca4131","ui_kits/soul-pharmacy/StickerScreen.jsx":"8102f2243fc1","ui_kits/soul-pharmacy/animation/animations-v2.jsx":"33e9200b93f5","ui_kits/soul-pharmacy/animation/scenes.jsx":"06cfa3628e8d","ui_kits/soul-pharmacy/animation/tweaks-panel.jsx":"d259e3a86f73","ui_kits/soul-pharmacy/assessment-data.js":"64a1b8e09032","ui_kits/soul-pharmacy/audio-manager.js":"ab64dc7a0e92","ui_kits/soul-pharmacy/deck-stage.js":"f3d3d0a662c0","ui_kits/soul-pharmacy/image-slot.js":"0394ad34f685","ui_kits/soul-pharmacy/ios-frame.jsx":"d20b42e0fa28","ui_kits/soul-pharmacy/rx-data.js":"fe8015a60938","ui_kits/soul-pharmacy/rx-prescriptions.js":"6e074c387633","ui_kits/soul-pharmacy/stickers-data.js":"559799cbbe22"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DesignSystem_d4e5a3 = window.DesignSystem_d4e5a3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — 마음약국 action button.
 * Tones: "coral" (warm brand primary), "rx" (prescription blue, used on the
 * result screen's main CTA), "outline" (white card button), "ghost".
 */
function Button({
  children,
  tone = "coral",
  size = "md",
  icon = null,
  // React node rendered before the label (e.g. <Icon .../>)
  block = false,
  disabled = false,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "9px 16px",
      fontSize: 14,
      radius: "var(--radius-lg)",
      gap: 8
    },
    md: {
      padding: "14px 22px",
      fontSize: 16,
      radius: "var(--radius-lg)",
      gap: 10
    },
    lg: {
      padding: "17px 28px",
      fontSize: 17,
      radius: "var(--radius-lg)",
      gap: 10
    }
  }[size];
  const tones = {
    coral: {
      background: "var(--accent)",
      color: "var(--on-accent)",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-sm)"
    },
    rx: {
      background: "var(--rx-blue-500)",
      color: "#F7FAFF",
      border: "1px solid transparent",
      boxShadow: "var(--shadow-sm)"
    },
    outline: {
      background: "var(--surface-card)",
      color: "var(--rx-blue-500)",
      border: "1px solid var(--border-card)",
      boxShadow: "var(--shadow-sm)"
    },
    ghost: {
      background: "transparent",
      color: "var(--text-body)",
      border: "1px solid transparent",
      boxShadow: "none"
    }
  }[tone];
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: block ? "flex" : "inline-flex",
      width: block ? "100%" : "auto",
      alignItems: "center",
      justifyContent: "center",
      gap: sizes.gap,
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: sizes.fontSize,
      padding: sizes.padding,
      borderRadius: sizes.radius,
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "transform var(--dur-fast) var(--ease-soft), filter var(--dur-fast) var(--ease-soft)",
      ...tones,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = "scale(0.97)";
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = "scale(1)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = "scale(1)";
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
/**
 * Wordmark — the 마음약국 name lockup. The source provides no logo binary, so
 * the brand renders in type (var(--font-title)) beside a simple line mark drawn
 * directly from the mockups: a medical "cross" or a "heart". See readme.md → Brand.
 */
function Wordmark({
  name = "마음약국",
  tagline,
  mark = "cross",
  color = "var(--accent)",
  size = 22,
  style = {}
}) {
  const markSize = size * 1.1;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      ...style
    }
  }, mark !== "none" && /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      color
    }
  }, mark === "cross" ? /*#__PURE__*/React.createElement("svg", {
    width: markSize,
    height: markSize,
    viewBox: "0 0 26 26",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "1.4",
    y: "1.4",
    width: "23.2",
    height: "23.2",
    rx: "7",
    stroke: color,
    strokeWidth: "1.6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 7v12M7 13h12",
    stroke: color,
    strokeWidth: "2.6",
    strokeLinecap: "round"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: markSize,
    height: markSize,
    viewBox: "0 0 26 26",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 22S3.5 15.6 3.5 9.6A4.6 4.6 0 0 1 13 7a4.6 4.6 0 0 1 9.5 2.6C22.5 15.6 13 22 13 22z",
    stroke: color,
    strokeWidth: "1.7",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M13 9.5v5M10.6 12h4.8",
    stroke: color,
    strokeWidth: "1.7",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      flexDirection: "column",
      lineHeight: 1.05
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-title)",
      fontSize: size,
      color: "var(--text-strong)"
    }
  }, name), tagline && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: size * 0.5,
      color: "var(--text-muted)",
      marginTop: 3
    }
  }, tagline)));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useEffect,
  useRef
} = React;
/**
 * Icon — thin line-icon wrapper around Lucide (loaded from CDN).
 * The 마음약국 mockups use a single-weight line-icon set; Lucide is the
 * nearest CDN match (see readme.md → Iconography, substitution noted).
 *
 * Requires the Lucide UMD script on the page (cards + kits load it):
 *   <script src="https://unpkg.com/lucide@0.544.0/dist/umd/lucide.min.js"></script>
 */
function Icon({
  name,
  size = 22,
  stroke = 1.6,
  color = "currentColor",
  style = {},
  ...rest
}) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current && typeof window !== "undefined" && window.lucide) {
      window.lucide.createIcons({
        icons: window.lucide.icons,
        attrs: {
          "stroke-width": stroke
        },
        nameAttr: "data-lucide"
      });
    }
  });
  return /*#__PURE__*/React.createElement("span", _extends({
    ref: ref,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color,
      width: size,
      height: size,
      lineHeight: 0,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("i", {
    "data-lucide": name,
    style: {
      width: size,
      height: size
    }
  }));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Checkbox — square line checkbox with a Korean label, as used on the
 * 오늘의 마음 접수카드 (intake form). Warm ink, soft rounding.
 */
function Checkbox({
  label,
  checked = false,
  onChange,
  disabled = false,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--text-body)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 18,
      height: 18,
      flex: "0 0 auto",
      borderRadius: 5,
      border: `1.5px solid ${checked ? "var(--accent)" : "var(--ink-300)"}`,
      background: checked ? "var(--accent)" : "transparent",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all var(--dur-fast) var(--ease-soft)"
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2l2.2 2.3 4.8-5",
    stroke: "var(--on-accent)",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/StepIndicator.jsx
try { (() => {
/**
 * StepIndicator — numbered progress used across the 처방 flow (1·2·3·4).
 * The active/completed steps fill with prescription blue; upcoming are faint.
 */
function StepIndicator({
  total = 4,
  current = 1,
  tone = "rx",
  style = {}
}) {
  const fill = tone === "coral" ? "var(--accent)" : "var(--rx-blue-500)";
  const steps = Array.from({
    length: total
  }, (_, i) => i + 1);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      ...style
    }
  }, steps.map((n, i) => {
    const done = n <= current;
    const isCurrent = n === current;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: n
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: isCurrent ? 30 : 26,
        height: isCurrent ? 30 : 26,
        borderRadius: "50%",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-body)",
        fontWeight: 700,
        fontSize: 13,
        background: done ? fill : "transparent",
        color: done ? "#F7FAFF" : "var(--text-faint)",
        border: done ? "1px solid transparent" : "1.5px solid var(--ink-300)",
        transition: "all var(--dur-base) var(--ease-soft)"
      }
    }, n), i < steps.length - 1 && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 20,
        height: 2,
        borderRadius: 2,
        background: n < current ? fill : "var(--line-soft)"
      }
    }));
  }));
}
Object.assign(__ds_scope, { StepIndicator });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/StepIndicator.jsx", error: String((e && e.message) || e) }); }

// components/prescription/Divider.jsx
try { (() => {
/**
 * Divider — dotted rule used between fields inside the 처방전 card.
 */
function Divider({
  color = "var(--divider)",
  spacing = 14,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1.5px dotted ${color}`,
      margin: `${spacing}px 0`,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/prescription/Divider.jsx", error: String((e && e.message) || e) }); }

// components/prescription/AssessmentPaper.jsx
try { (() => {
function scallopPath(width, bumps = 9, amp = 8, baseY = 13) {
  const step = width / bumps;
  let d = `M0,${baseY} `;
  for (let i = 0; i < bumps; i++) {
    const x1 = i * step + step / 2,
      x2 = (i + 1) * step;
    d += `Q ${x1},${baseY - amp} ${x2},${baseY} `;
  }
  d += `L${width},4000 L0,4000 Z`;
  return d;
}

// Q1~Q4의 두 효과음 — 답변 선택(체크)과 "다음" 페이지 전환은 역할이 달라 서로 다른
// 사운드 파일을 쓴다. 각각 자기 자신의 Audio 요소를 재사용해 연속 클릭 시 소리가 겹쳐
// 쌓이지 않도록(재생 중이면 되감아 재시작) 하고, BGM(window.__bgm)과는 별개 채널이라
// 서로 방해하지 않는다.
let __clickSoundEl = null;
function playClickSound() {
  try {
    if (!__clickSoundEl) {
      __clickSoundEl = new Audio("assets/check_sound_check_only_3.mp3");
    }
    __clickSoundEl.currentTime = 0;
    const p = __clickSoundEl.play();
    if (p && p.catch) p.catch(() => {});
  } catch (e) { /* noop */ }
}

// 페이지(문항) 전환 효과음 — 원본이 다소 빠르게 느껴져 재생 속도를 90%로 낮췄다.
// preservesPitch를 켜서 피치가 과하게 낮아지지 않게 한다(대부분의 최신 브라우저는
// 기본값이 true지만 명시).
let __pageTurnSoundEl = null;
function playPageTurnSound() {
  try {
    if (!__pageTurnSoundEl) {
      __pageTurnSoundEl = new Audio("assets/page_sound.mp3");
      __pageTurnSoundEl.playbackRate = 0.9;
      __pageTurnSoundEl.preservesPitch = true;
      __pageTurnSoundEl.mozPreservesPitch = true;
      __pageTurnSoundEl.webkitPreservesPitch = true;
    }
    __pageTurnSoundEl.currentTime = 0;
    const p = __pageTurnSoundEl.play();
    if (p && p.catch) p.catch(() => {});
  } catch (e) { /* noop */ }
}

// "문진 완료" 버튼 전용 달칵 사운드 — 페이지 전환/체크 사운드와 다시 별개 채널.
let __submitSoundEl = null;
function playSubmitSound() {
  try {
    if (!__submitSoundEl) {
      __submitSoundEl = new Audio("assets/click_tight.mp3");
    }
    __submitSoundEl.currentTime = 0;
    const p = __submitSoundEl.play();
    if (p && p.catch) p.catch(() => {});
  } catch (e) { /* noop */ }
}

/**
 * AssessmentPaper — the paper "오늘의 마음 접수카드" that rises out of a mood
 * envelope. Soft scalloped top edge, fixed header, and a STEPPED questionnaire:
 * one question at a time with a "1 / N" progress marker, a 이전/다음 footer, and
 * a final 문진 완료 CTA. Stepping keeps each question calm and readable instead
 * of showing the whole survey at once. Set `pc` for the roomier desktop scale.
 */
function AssessmentPaper({
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
  style = {}
}) {
  const clip = `path("${scallopPath(width)}")`;
  const [step, setStep] = React.useState(0);
  const total = groups.length || 1;
  React.useEffect(() => {
    setStep(0);
  }, [groups]);
  const g = groups[step] || {
    number: "",
    question: "",
    options: []
  };
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
  const goPrev = () => { setStep((s) => Math.max(0, s - 1)); playPageTurnSound(); };
  const goNext = () => { if (!stepAnswered) return; setStep((s) => Math.min(total - 1, s + 1)); playPageTurnSound(); };
  // step 0은 접수카드가 봉투에서 올라온 뒤(≈rise 완료)에 애니메이션이 시작되도록 오프셋
  const o = step === 0 ? 2900 : 0;
  const stepAnswered = g.options.some((_, oi) => selections[`${step}-${oi}`]);
  const isLast = step >= total - 1;
  const [skip, setSkip] = React.useState(false); // 더블클릭하면 항목 즉시 표시
  React.useEffect(() => {
    setSkip(false);
  }, [step]);
  const skipAll = skip || skipProp;
  const pad = pc ? "58px 56px 0" : "56px 26px 0";
  const optCols = pc ? "1fr 1fr" : "1fr";
  const qSize = pc ? 20 : 16;
  const optSize = pc ? 15.5 : 14;
  return /*#__PURE__*/React.createElement("div", {
    onDoubleClick: () => setSkip(true),
    style: {
      position: "relative",
      width,
      background: "var(--cream)",
      clipPath: clip,
      WebkitClipPath: clip,
      boxShadow: "var(--shadow-rx)",
      fontFamily: "var(--font-body)",
      boxSizing: "border-box",
      ...(cardHeight ? {
        height: cardHeight,
        display: "flex",
        flexDirection: "column"
      } : {}),
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pad,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: pc ? 24 : 24,
    color: iconColor,
    stroke: 1.5
  }), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 600,
      fontSize: pc ? 23 : 22,
      color: "var(--ink-900)",
      margin: pc ? "6px 0 4px" : "10px 0 8px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: pc ? 13.5 : 12.5,
      lineHeight: 1.6,
      color: "var(--text-muted)",
      whiteSpace: "pre-line",
      margin: 0
    }
  }, subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      margin: pc ? "14px 0 2px" : "18px 0 2px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6
    }
  }, groups.map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: i === step ? 22 : 8,
      height: 8,
      borderRadius: 999,
      background: i === step ? iconColor : i < step ? "var(--ink-300)" : "var(--line-soft)",
      transition: "all 320ms cubic-bezier(0.22,1,0.32,1)"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: pc ? 13 : 12,
      color: "var(--text-muted)",
      letterSpacing: "0.04em"
    }
  }, step + 1, " / ", total)), /*#__PURE__*/React.createElement(__ds_scope.Divider, {
    spacing: pc ? 14 : 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pc ? "0 56px" : "0 26px",
      ...(cardHeight ? {
        flex: 1,
        minHeight: 0,
        overflowY: "auto"
      } : {
        minHeight: 168
      })
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: step,
    style: {
      animation: skipAll ? "none" : "rxstep 700ms cubic-bezier(0.22,1,0.32,1)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: pc ? 16 : 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: pc ? 12 : 11,
      letterSpacing: "0.16em",
      color: iconColor,
      marginBottom: 8,
      animation: skipAll ? "none" : "rxopt 1200ms cubic-bezier(0.22,1,0.32,1) both",
      animationDelay: skipAll ? undefined : `${o}ms`
    }
  }, "Q", g.number), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 600,
      fontSize: qSize,
      lineHeight: 1.5,
      color: "var(--ink-900)",
      letterSpacing: "-0.01em",
      animation: skipAll ? "none" : "rxopt 1200ms cubic-bezier(0.22,1,0.32,1) both",
      animationDelay: skipAll ? undefined : `${o + 300}ms`
    }
  }, g.question), g.hint && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: pc ? 13 : 12,
      color: "var(--text-muted)",
      marginTop: 8,
      lineHeight: 1.6,
      animation: skipAll ? "none" : "rxopt 1200ms cubic-bezier(0.22,1,0.32,1) both",
      animationDelay: skipAll ? undefined : `${o + 650}ms`
    }
  }, g.hint), selHint && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 5,
      fontFamily: "var(--font-body)",
      fontSize: pc ? 12 : 11,
      color: "var(--text-muted)",
      marginTop: 10,
      padding: "3px 10px",
      borderRadius: 999,
      background: "var(--paper-warm)",
      animation: skipAll ? "none" : "rxopt 1200ms cubic-bezier(0.22,1,0.32,1) both",
      animationDelay: skipAll ? undefined : `${o + 800}ms`
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: maxSel === 1 ? "circle-dot" : "list-checks",
    size: 13,
    color: "var(--text-muted)",
    stroke: 1.7
  }), selHint)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: optCols,
      gap: pc ? "10px 18px" : "11px 0"
    }
  }, g.options.map((opt, oi) => {
    const key = `${step}-${oi}`;
    return /*#__PURE__*/React.createElement("div", {
      key: key,
      style: {
        animation: skipAll ? "none" : `rxopt 1000ms cubic-bezier(0.22,1,0.32,1) both`,
        animationDelay: skipAll ? undefined : `${o + 1050 + oi * 430}ms`
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
      label: opt,
      checked: !!selections[key],
      onChange: v => handleToggle(oi, v),
      disabled: !selections[key] && selCount >= maxSel,
      style: {
        fontSize: optSize,
        padding: pc ? "4px 0" : "3px 0"
      }
    }));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: pc ? "16px 56px 26px" : "14px 26px 24px",
      marginTop: 6,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: goPrev,
    disabled: step === 0,
    "aria-label": "\uC774\uC804",
    style: {
      width: 42,
      height: 42,
      borderRadius: "50%",
      border: "1.5px solid var(--line-soft)",
      background: "var(--cream)",
      cursor: step === 0 ? "default" : "pointer",
      opacity: step === 0 ? 0.3 : 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 auto"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-left",
    size: 20,
    color: "var(--text-muted)",
    stroke: 1.8
  })), isLast ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    tone: "rx",
    size: "md",
    disabled: !stepAnswered,
    onClick: () => { playSubmitSound(); onSubmit && onSubmit(); },
    style: {
      minWidth: 150
    }
  }, ctaLabel) : /*#__PURE__*/React.createElement("button", {
    onClick: goNext,
    disabled: !stepAnswered,
    "aria-label": "\uB2E4\uC74C",
    style: {
      width: 42,
      height: 42,
      borderRadius: "50%",
      border: "none",
      background: stepAnswered ? "var(--rx-blue-500)" : "var(--line-soft)",
      cursor: stepAnswered ? "pointer" : "default",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flex: "0 0 auto",
      transition: "background 200ms ease"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 20,
    color: "#F7FAFF",
    stroke: 2
  }))));
}
Object.assign(__ds_scope, { AssessmentPaper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/prescription/AssessmentPaper.jsx", error: String((e && e.message) || e) }); }

// components/prescription/IntakeSheet.jsx
try { (() => {
/**
 * IntakeSheet — the cream paper "오늘의 마음 접수카드" form sheet: a centered
 * heart-crack mark, title, warm subtitle, and a body slot for numbered
 * question groups (use IntakeSheet.Group + Checkbox). Bottom edge is a soft
 * dotted tear line, echoing paper sliding from an envelope.
 */
function IntakeSheet({
  title = "오늘의 마음 접수카드",
  subtitle = "괜찮은 척하지 않아도 괜찮아요.\n가까운 것만 골라주세요.",
  width = 560,
  children,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      background: "var(--cream)",
      borderRadius: "18px 18px 20px 20px",
      boxShadow: "var(--shadow-lg)",
      padding: "34px 44px 30px",
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "heart-crack",
    size: 26,
    color: "var(--accent)",
    stroke: 1.6
  })), /*#__PURE__*/React.createElement("h2", {
    style: {
      textAlign: "center",
      fontFamily: "var(--font-title)",
      fontSize: 30,
      color: "var(--text-strong)",
      margin: "0 0 10px"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      lineHeight: 1.6,
      color: "var(--text-muted)",
      whiteSpace: "pre-line",
      margin: "0 0 4px"
    }
  }, subtitle), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1.5px solid var(--coral-100)",
      margin: "16px 0 20px"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 22
    }
  }, children));
}

/** A numbered question group inside the intake sheet. */
IntakeSheet.Group = function Group({
  number,
  question,
  children,
  columns = 1,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: style
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "baseline",
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 14,
      color: "var(--text-faint)"
    }
  }, number), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 15,
      color: "var(--text-strong)"
    }
  }, question)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gap: "12px 16px",
      paddingLeft: 24
    }
  }, children));
};
Object.assign(__ds_scope, { IntakeSheet });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/prescription/IntakeSheet.jsx", error: String((e && e.message) || e) }); }

// components/prescription/MoodEnvelope.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MOODS — the 8 마음 증상 of 마음약국, with their envelope color, thin line
 * icon, and mapped 처방 단어 (word that links out to 말씀광장 성경사전).
 */
const MOODS = {
  anxious: {
    label: "불안해요",
    icon: "waves",
    fill: "var(--mood-anxious-fill)",
    ink: "var(--mood-anxious-ink)",
    word: "믿음"
  },
  broken: {
    label: "마음이\n무너졌어요",
    icon: "heart-crack",
    fill: "var(--mood-broken-fill)",
    ink: "var(--mood-broken-ink)",
    word: "긍휼"
  },
  compare: {
    label: "비교돼요",
    icon: "user",
    fill: "var(--mood-compare-fill)",
    ink: "var(--mood-compare-ink)",
    word: "사랑"
  },
  waiting: {
    label: "기다리기\n힘들어요",
    icon: "hourglass",
    fill: "var(--mood-waiting-fill)",
    ink: "var(--mood-waiting-ink)",
    word: "인내"
  },
  forgive: {
    label: "용서가\n안 돼요",
    icon: "heart-handshake",
    fill: "var(--mood-forgive-fill)",
    ink: "var(--mood-forgive-ink)",
    word: "용서"
  },
  distant: {
    label: "하나님이\n멀게 느껴져요",
    icon: "church",
    fill: "var(--mood-distant-fill)",
    ink: "var(--mood-distant-ink)",
    word: "말씀"
  },
  calling: {
    label: "책임이\n버거워요",
    icon: "sprout",
    fill: "var(--mood-calling-fill)",
    ink: "var(--mood-calling-ink)",
    word: "책임"
  },
  thanks: {
    label: "감사가\n사라졌어요",
    icon: "sun",
    fill: "var(--mood-thanks-fill)",
    ink: "var(--mood-thanks-ink)",
    word: "감사"
  }
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
function MoodEnvelope({
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
  const m = mood && MOODS[mood] || {};
  const _label = label ?? m.label ?? "";
  const _icon = icon ?? m.icon ?? "circle";
  const _fill = fill ?? m.fill ?? "var(--mood-anxious-fill)";
  const _ink = ink ?? m.ink ?? "var(--text-strong)";
  const pocketH = selected ? 118 : 112; // ~68% of total visual height
  const peek = selected ? 54 : 48; // ~32% exposed above the pocket
  const cardH = peek + 42; // rest of the card is tucked behind the pocket
  const cornerY = 2,
    centerY = 11; // very shallow center dip — not a wave
  const clipPath = `path("M0,${cornerY} C ${width * 0.32},${centerY} ${width * 0.68},${centerY} ${width},${cornerY} L${width},${pocketH} L0,${pocketH} Z")`;
  return /*#__PURE__*/React.createElement("div", _extends({
    onClick: onClick,
    style: {
      position: "relative",
      width,
      cursor: onClick ? "pointer" : "default",
      paddingTop: hanging ? 9 : 0,
      transform: selected ? "translateY(-7px)" : "translateY(0)",
      transition: "transform 220ms var(--ease-soft)",
      filter: "drop-shadow(0 7px 9px rgba(70,58,45,0.12))",
      ...style
    }
  }, rest), hanging && /*#__PURE__*/React.createElement("span", {
    style: {
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
      zIndex: 4
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
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
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: _icon,
    size: 19,
    color: _ink,
    stroke: 1.3
  })), /*#__PURE__*/React.createElement("div", {
    style: {
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
      transition: "box-shadow 220ms var(--ease-soft)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 500,
      fontSize: 18,
      lineHeight: 1.35,
      textAlign: "center",
      color: "var(--ink-900)",
      whiteSpace: "pre-line"
    }
  }, _label)));
}
Object.assign(__ds_scope, { MOODS, MoodEnvelope });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/prescription/MoodEnvelope.jsx", error: String((e && e.message) || e) }); }

// components/prescription/PrescriptionCard.jsx
try { (() => {
/**
 * PrescriptionCard — the tall cream 말씀 처방전 result card with prescription-blue
 * linework: an arched cartouche header (마음약국 · cross · 말씀 처방전) inside a
 * rounded frame, a body slot for RxField rows, and a warm closing line.
 *
 * Designed at a share-friendly vertical ratio; drop RxField/Divider/PrescriptionWord
 * children into the body.
 */
function PrescriptionCard({
  brand = "마음약국",
  title = "말씀 처방전",
  footer = "당신의 하루가 말씀으로 회복되길 바랍니다.",
  width = 340,
  children,
  style = {}
}) {
  const RX = "var(--rx-ink)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width,
      background: "var(--surface-rx)",
      borderRadius: "var(--radius-xl)",
      boxShadow: "var(--shadow-rx)",
      padding: 22,
      fontFamily: "var(--font-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 14,
      border: `1.5px solid ${RX}`,
      borderRadius: 20,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: "8px 12px 6px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginTop: -2,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 190,
      background: "var(--surface-rx)",
      border: `1.5px solid ${RX}`,
      borderRadius: "110px 110px 22px 22px",
      padding: "18px 30px 16px",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: 11,
      letterSpacing: "0.3em",
      color: RX,
      marginBottom: 8,
      paddingLeft: "0.3em"
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M13 3v20M3 13h20",
    stroke: RX,
    strokeWidth: "3.4",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontSize: 26,
      lineHeight: 1.1,
      color: RX
    }
  }, title))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 4
    }
  }, children), footer && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1.5px dotted var(--divider)`,
      margin: "16px 0 12px"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      textAlign: "center",
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--text-muted)",
      margin: 0
    }
  }, footer, " ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--coral-300)"
    }
  }, "\u2661")))));
}
Object.assign(__ds_scope, { PrescriptionCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/prescription/PrescriptionCard.jsx", error: String((e && e.message) || e) }); }

// components/prescription/PrescriptionWord.jsx
try { (() => {
/**
 * PrescriptionWord — the 오늘의 처방 단어 block at the foot of the card,
 * centered on the card's vertical axis: a star+label row, then the large word.
 */
function PrescriptionWord({
  word = "믿음",
  label = "오늘의 처방 단어",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "star",
    size: 18,
    color: "var(--rx-ink)",
    stroke: 1.6
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 15,
      color: "var(--rx-ink)"
    }
  }, label)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-title)",
      fontSize: 32,
      lineHeight: 1,
      color: "var(--text-strong)"
    }
  }, word), /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "22",
    viewBox: "0 0 24 24",
    fill: "none",
    style: {
      marginBottom: 4
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 3l1.2 3.4L16 4.8l-1.1 3.3 3.3-.4-2.6 2.3 2.6 2.3-3.3-.4L16 15.2 13.2 13.6 12 17l-1.2-3.4L8 15.2l1.1-3.3-3.3.4 2.6-2.3L5.8 7.7l3.3.4L8 4.8l2.8 1.6z",
    fill: "var(--coral-200)",
    opacity: "0.9"
  }))));
}
Object.assign(__ds_scope, { PrescriptionWord });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/prescription/PrescriptionWord.jsx", error: String((e && e.message) || e) }); }

// components/prescription/RxField.jsx
try { (() => {
/**
 * RxField — one centered block inside the 말씀 처방전 card: an icon + bold
 * blue label centered on the card's vertical axis, with the value/verse
 * centered beneath. Use `verse` for the 오늘의 말씀 block (serif verse +
 * reference); otherwise pass plain `value` text.
 */
function RxField({
  icon,
  label,
  value,
  verse,
  reference,
  inline = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      marginBottom: verse || value && !inline ? 8 : 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18,
    color: "var(--rx-ink)",
    stroke: 1.6
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 15,
      color: "var(--rx-ink)",
      letterSpacing: "0.01em"
    }
  }, label), inline && value && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      color: "var(--text-body)"
    }
  }, value)), verse ? /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 260
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-verse)",
      fontSize: "var(--fs-verse)",
      lineHeight: "var(--lh-verse)",
      color: "var(--text-strong)",
      margin: 0,
      textAlign: "center"
    }
  }, verse), reference && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-muted)",
      margin: "6px 0 0",
      textAlign: "center"
    }
  }, reference)) : !inline && value && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)",
      textAlign: "center",
      maxWidth: 260
    }
  }, value));
}
Object.assign(__ds_scope, { RxField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/prescription/RxField.jsx", error: String((e && e.message) || e) }); }

// components/prescription/WoodShelf.jsx
try { (() => {
/**
 * WoodShelf — a thin, irregular-grain natural wood plank that a row of 4
 * MoodEnvelopes hang from via short brass rings. Pure CSS grain layered
 * from several offset stripe/gradient passes for an uneven, real-wood look.
 */
function WoodShelf({
  width = "100%",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height: 12,
      borderRadius: 2,
      backgroundImage: ["repeating-linear-gradient(89deg, rgba(60,40,20,0.10) 0px, transparent 2px, transparent 6px, rgba(60,40,20,0.06) 7px, transparent 11px)", "repeating-linear-gradient(91deg, rgba(255,235,205,0.12) 0px, transparent 3px, transparent 8px)", "linear-gradient(180deg, #C7A374 0%, #B08F5C 50%, #97754A 100%)"].join(","),
      boxShadow: "0 3px 6px rgba(70,58,45,0.16), inset 0 1px 0 rgba(255,255,255,0.2)",
      ...style
    }
  });
}
Object.assign(__ds_scope, { WoodShelf });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/prescription/WoodShelf.jsx", error: String((e && e.message) || e) }); }

// doc-page.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <doc-page> — paged-document shell for printable HTML.
 *
 * FIRST, decide how the document paginates — up front, before building:
 *
 * - FLOWING document (the default): write the whole document as one
 *   normal HTML flow inside <doc-page>; the browser's print engine
 *   splits it onto pages at export. Use for long-form documents with a
 *   single text flow: reports, memos, letters, essays.
 * - EXPLICIT pagination: a fixed set of pre-paginated pages, one
 *   <section class="page"> child per page. Use when the user asks for a
 *   specific page count, or the design implies one: a one-page resume, a
 *   two-sided flier, a poster, a certificate, a brochure — any richly
 *   laid-out document without a single text flow.
 * - If in doubt, ask the user as part of the build.
 *
 * PAGE SIZING — paper differs by country (letter vs A4), so the printed
 * sheet is not one fixed truth:
 * - FLOWING documents pin NO paper size: the print engine paginates
 *   onto the user's real paper, and the content reflows to it.
 * - EXPLICITLY PAGINATED documents print each page at a FIXED page box
 *   with overflow hidden — letter by default, size="a4" for a clearly
 *   metric user, the user's chosen paper when they export. Design each
 *   page to FILL that box, fitting letter and A4 alike without overlap.
 * - width/height pin an explicit fixed size, ONLY when the user gives
 *   one.
 * Never write your own @page rule or hard-code paper dimensions in the
 * content.
 *
 * Sizing modes (attributes):
 *   (none)                      — portrait: flowing docs use the user's
 *           paper; explicitly paginated pages use the named size box
 *           (letter unless size="a4")
 *   orientation="landscape"     — the same, landscape
 *   width / height              — explicit fixed size, ONLY when the user
 *           gives one (e.g. width="22in" height="30in" for a 22×30
 *           poster): the page IS the design's size, printed at true
 *           dimensions (or scaled onto the user's paper at print time).
 *           Any absolute CSS length: px/in/mm/cm/pt/pc.
 * The component announces the chosen mode to the host app at runtime (a
 * meta tag it injects), so the print path can inject the user's true
 * paper size.
 *
 * On screen the document renders on a desk background: a flowing
 * document as one tall scrolling sheet (Google Docs' pageless view);
 * explicitly paginated documents as one card per page.
 *
 * EXPLICIT pagination usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page>
 *     <section class="page" id="p1">…one page's design…</section>
 *     <section class="page" id="p2">…</section>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * How the page box works, concretely: each .page prints as ONE full-bleed
 * sheet at a FIXED physical size — letter by default (set size="a4" for
 * a clearly metric user), the user's chosen paper when they export —
 * with overflow hidden. Nothing scrolls and nothing reflows onto a next
 * sheet: content that misses the box is CLIPPED. Design each page to
 * FILL that page box, and to fit it — letter and A4 alike — without
 * overlap. Each page is a size container; don't size anything in
 * viewport units (they track the window, not the page), and never set
 * width or height on the .page section itself (the component sizes the
 * page box; an authored height like 100% is meaningless at print and is
 * overridden). The component owns the page box, the screen card chrome,
 * and the page breaks (never add your own break-before/after). Don't mix
 * .page sections with flowing content or header/footer slots in the same
 * document.
 *
 * FLOWING usage:
 *   <style>doc-page:not(:defined){visibility:hidden}</style>
 *   <doc-page margin="0.75in">
 *     <h1>Title</h1>
 *     <p>…body…</p>
 *   </doc-page>
 *   <script src="doc-page.js"></script>
 * There is no manual page-splitting — the browser's print engine
 * paginates at export. Standard break-hygiene rules (`break-inside:
 * avoid` on figures, code blocks, images and table rows; `orphans/
 * widows: 3`) are applied so paragraphs and groups split cleanly. On
 * screen and at print, headings default to `text-wrap: balance` and
 * body text to `text-wrap: pretty`; the defaults have zero specificity,
 * so any text-wrap you declare wins.
 *
 * Other attributes:
 *   size    — letter | a4 | legal (default letter). Flowing documents:
 *           preview proportion only — it does NOT pin their printed
 *           paper (the print dialog's paper governs); leave it alone
 *           there. Explicitly paginated documents: it sets the page box
 *           the cards and the pinned @page share (the export dialog's
 *           choice overrides both at print) — set size="a4" for a
 *           clearly metric user. Scaled-fit: names the sheet the fit is
 *           computed against, same a4-for-metric-users advice.
 *   content-width / content-height — the design's own fixed dimensions
 *           (CSS lengths), for scaling a fixed-size design ONTO the
 *           named sheet: content lays out at exactly this size, and the
 *           component scales it to fit that sheet's printable area
 *           (centered horizontally, top-aligned; the export dialog
 *           re-fits to the user's actual paper choice where available).
 *           Both must be set; they do not change the page box. For pages
 *           WITHOUT running header/footer slots.
 *   margin  — printable inset on every page of a FLOWING document
 *           (default 0.75in); margin="0" makes pages full-bleed.
 *           Explicitly paginated pages are always full-bleed.
 *
 * Running header/footer (flowing documents only): give an element
 * `slot="header"` or `slot="footer"` and it repeats on every printed
 * page via `position: fixed`. To keep body text from sliding under it,
 * the component prints inside a single-cell table whose <thead>/<tfoot>
 * are spacers sized to the header/footer height — browsers repeat
 * thead/tfoot on every page, so each sheet's content starts below the
 * header and ends above the footer. On screen the header/footer render
 * once at the top/bottom of the sheet.
 *
 * At print the component injects `@page { margin: 0 }` (which leaves
 * Chrome no margin box to draw its date/URL/page-count header in) and
 * moves the visual margin onto the sheet's own padding. It also marks
 * the document as owning its print CSS (a
 * `meta[name="omelette-owns-print"]` it injects at runtime), so the
 * PDF export never injects page-geometry CSS of its own on top.
 *
 * Print best practices for the content you author:
 * - Multi-column text: use CSS columns (`column-count` +
 *   `column-gap`), never side-by-side flex/grid columns — only real
 *   CSS columns flow and break across pages. `column-span: all` lets
 *   a heading span the columns; `hyphens: auto` (needs `lang` on
 *   the html element) keeps narrow columns readable.
 * - Page breaks in flowing documents: `break-before: page` on an
 *   element that must start a new page (a chapter, an appendix). Add
 *   your own kept-together blocks (callouts, stat tiles, cards) to a
 *   `break-inside: avoid` rule, and keep each one shorter than a page.
 * - Extend `orphans: 3; widows: 3` to any custom text blocks you add
 *   (p and li are covered by default).
 * - Give long tables a <thead> — browsers repeat it on every printed
 *   page.
 * - No `position: fixed`/`sticky` and no viewport units in content:
 *   fixed elements stamp every printed page (running headers/footers go
 *   in the component's slots) and `100vh` mis-sizes at print.
 *
 * Author content as static HTML so the user can click-to-edit any text
 * directly. Do not set width/padding/background on the document body —
 * the component owns the sheet box.
 */
/* END USAGE */

(() => {
  const PAPER = {
    letter: ['8.5in', '11in'],
    a4: ['210mm', '297mm'],
    legal: ['8.5in', '14in']
  };
  const CSS_LENGTH = /^\d+(\.\d+)?(px|in|mm|cm|pt|pc)$/;
  // Unitless "0" is a valid CSS length and the natural way to write
  // margin="0"; normalise it to 0px so max()/calc() (which reject a bare
  // number) keep working.
  const safeLen = (v, fb) => {
    v = (v || '').trim();
    return v === '0' ? '0px' : CSS_LENGTH.test(v) ? v : fb;
  };
  // WebKit (Safari and every iOS browser shell) never repeats a table's
  // thead/tfoot on printed pages (WebKit bug 17205), so the spacer-borne
  // vertical margins of a FLOWING document reach only the first page
  // there. Engine check, not browser check: vendor is 'Apple Computer,
  // Inc.' exactly for WebKit and 'Google Inc.' for Blink.
  const WK_PRINT = /apple/i.test(navigator.vendor || '');
  // CSS length → px number (CSS absolute units are exact: 1in = 96px).
  // Returns NaN for anything safeLen would reject — callers gate on it.
  const PX_PER = {
    px: 1,
    in: 96,
    mm: 96 / 25.4,
    cm: 96 / 2.54,
    pt: 96 / 72,
    pc: 16
  };
  const toPx = v => {
    const m = /^(\d+(?:\.\d+)?)(px|in|mm|cm|pt|pc)$/.exec((v || '').trim());
    return m ? parseFloat(m[1]) * PX_PER[m[2]] : NaN;
  };
  const stylesheet = `
    :host {
      position: relative;
      display: block;
      /* When the viewport is narrower than the page, grow to wrap the
       * sheet (plus this padding) instead of staying viewport-width, so
       * the desk background and right margin reach the sheet's far edge
       * in the horizontal scroll. */
      min-width: max-content;
      min-height: 100vh;
      background: #f5f5f4;
      padding: 48px 24px;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Arial, sans-serif;
      --doc-page-w: 8.5in;
      --doc-page-h: 11in;
      --doc-page-margin: 0.75in;
      --doc-hdr-h: 0px;
      --doc-ftr-h: 0px;
      --doc-hdr-pad: 0px;
      --doc-ftr-pad: 0px;
    }
    .sheet {
      width: var(--doc-page-w);
      margin: 0 auto;
      background: #fff;
      box-shadow: 0 2px 10px rgba(20, 20, 19, 0.12);
      border-radius: 7px;
      box-sizing: border-box;
      padding: var(--doc-page-margin);
    }
    .frame { width: 100%; border-collapse: collapse; }
    /* Scaled-fit mode (content-width/content-height): the inner .fit box
     * lays the content out at its authored fixed size and scales it onto
     * the printable area; .fit-box reserves the scaled footprint in flow
     * (transforms don't affect layout) and centers it. Without the mode,
     * both divs are unstyled block pass-throughs. */
    /* Explicit pagination: direct .page children are the pages. The sheet
     * becomes a transparent stack and each page carries the card look on
     * screen; at print each page is exactly one full-bleed sheet. The
     * ::slotted defaults are deliberately weak (document CSS wins), so
     * authored page styling can override any of this. */
    .sheet.paginated {
      background: transparent;
      box-shadow: none;
      border-radius: 0;
      padding: 0;
    }
    .paginated ::slotted(.page) {
      position: relative;
      display: block;
      width: 100%;
      aspect-ratio: var(--doc-page-ar);
      container-type: size;
      overflow: hidden;
      box-sizing: border-box;
      background: #fff;
      border-radius: 7px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
      print-color-adjust: exact;
      -webkit-print-color-adjust: exact;
      break-inside: avoid;
    }
    .paginated ::slotted(.page:not(:first-child)) { margin-top: 1rem; }
    @media print {
      .sheet.paginated { padding: 0; }
      /* The flowing-document vertical inset lives on the repeating
       * thead/tfoot spacers, not the sheet padding — they must go too,
       * or each full-sheet .page is pushed ~margin down and spills onto
       * a second sheet. Paginated pages are full-bleed by definition
       * (content owns its insets). */
      .sheet.paginated .hdr-space,
      .sheet.paginated .ftr-space { height: 0; }
      .paginated ::slotted(.page) {
        border-radius: 0 !important;
        box-shadow: none !important;
        margin: 0 !important;
        /* Physical page-box sizing, no viewport units: Safari resolves
         * 100vh against the window, not the page box, so a vh-sized card
         * paginates wrong there. --doc-page-w/h are the named size by
         * default and are overridden to the user's chosen paper by the
         * export path, so every card is exactly one sheet either way.
         * Width + height (same source values as @page size) rather than
         * width + aspect-ratio: the ratio is a 6-decimal rounding of the
         * same division, and a few millionths of overflow would spill a
         * blank sheet after every page. The screen-only aspect-ratio
         * (preview proportions) must not leak into print. cqh typography
         * tracks the same box.
         *
         * Every declaration is !important: per CSS Scoping, unimportant
         * shadow ::slotted rules LOSE to the document context, so a page
         * section's authored inline style would silently beat this print
         * geometry. A model-authored height:100% did exactly that — the
         * percentage resolves as auto in the all-auto print ancestry, the
         * base rule's size containment turns auto into ZERO, and
         * overflow:hidden then paints nothing: a blank PDF with perfect
         * page boxes. At print the component's geometry is the design's
         * whole contract, so it must win over any authored sizing. */
        aspect-ratio: auto !important;
        width: var(--doc-page-w) !important;
        height: var(--doc-page-h) !important;
        overflow: hidden !important;
      }
      .paginated ::slotted(.page:not(:first-child)) {
        break-before: page !important;
        margin-top: 0 !important;
      }
    }
    .fit-mode .fit-box {
      width: calc(var(--doc-fit-w) * var(--doc-fit-scale));
      height: calc(var(--doc-fit-h) * var(--doc-fit-scale));
      margin: 0 auto;
      break-inside: avoid;
    }
    .fit-mode .fit {
      width: var(--doc-fit-w);
      height: var(--doc-fit-h);
      transform: scale(var(--doc-fit-scale));
      transform-origin: top left;
    }
    .frame td, .frame th { padding: 0; text-align: left; font-weight: inherit; }
    .hdr-space { height: var(--doc-hdr-h); }
    .ftr-space { height: var(--doc-ftr-h); }
    ::slotted([slot="header"]),
    ::slotted([slot="footer"]) { display: block; box-sizing: border-box; }
    @media print {
      :host { background: none; padding: 0; min-width: 0; min-height: 0; }
      .sheet {
        width: auto; margin: 0; box-shadow: none; border-radius: 0;
        padding: 0 var(--doc-page-margin);
      }
      /* The thead/tfoot spacers repeat on every page, so they carry the
       * vertical page margin (which the sheet's own padding cannot, since
       * that padding is consumed once on the first/last page). The running
       * header/footer are fixed inside that band. */
      /* The 0.35in is breathing room between a running header/footer and
       * the body; without one the spacer is exactly the page margin, so a
       * margin="0" full-bleed document gets truly full-bleed pages. */
      .hdr-space { height: max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))); }
      .ftr-space { height: max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))); }
      /* WebKit flowing documents: @page carries the vertical margin (see
       * _syncPrintPageRule), so the spacers keep only whatever a running
       * header/footer needs BEYOND it — page 1 would otherwise double its
       * top inset. Paginated sheets already zero their spacers above. */
      .sheet.wk-print:not(.paginated) .hdr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-hdr-h) + var(--doc-hdr-pad))) - var(--doc-page-margin))); }
      .sheet.wk-print:not(.paginated) .ftr-space { height: max(0px, calc(max(var(--doc-page-margin), calc(var(--doc-ftr-h) + var(--doc-ftr-pad))) - var(--doc-page-margin))); }
      ::slotted([slot="header"]) {
        position: fixed; top: 0; left: 0; right: 0; margin: 0;
        padding: calc(var(--doc-page-margin) * 0.45) var(--doc-page-margin) 0;
      }
      ::slotted([slot="footer"]) {
        position: fixed; bottom: 0; left: 0; right: 0; margin: 0;
        padding: 0 var(--doc-page-margin) calc(var(--doc-page-margin) * 0.45);
      }
    }
  `;
  class DocPage extends HTMLElement {
    static get observedAttributes() {
      return ['size', 'width', 'height', 'margin', 'orientation', 'content-width', 'content-height'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._mo = typeof MutationObserver === 'function' ? new MutationObserver(() => this._scheduleMeasure()) : null;
    }

    /** The named paper's [w, h], swapped when orientation="landscape".
     *  Only the named size swaps — explicit width/height are exact values
     *  the author already oriented. */
    _paperSize() {
      const named = PAPER[(this.getAttribute('size') || '').toLowerCase()] || PAPER.letter;
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? [named[1], named[0]] : named;
    }
    get pageWidth() {
      return safeLen(this.getAttribute('width'), this._paperSize()[0]);
    }
    get pageHeight() {
      return safeLen(this.getAttribute('height'), this._paperSize()[1]);
    }
    get pageMargin() {
      return safeLen(this.getAttribute('margin'), '0.75in');
    }

    /** Scaled-fit mode's content box [w, h] as CSS lengths, or null when
     *  the mode is off (either attribute missing/invalid/zero — a partial
     *  declaration falls back to normal flow rather than guessing). */
    _contentFit() {
      const w = safeLen(this.getAttribute('content-width'), null);
      const h = safeLen(this.getAttribute('content-height'), null);
      if (!w || !h) return null;
      const wPx = toPx(w),
        hPx = toPx(h);
      return wPx > 0 && hPx > 0 ? [w, h, wPx, hPx] : null;
    }
    connectedCallback() {
      if (!this._sheet) this._render();
      this._syncSize();
      this._syncPrintPageRule();
      this._ensureTextWrapDefaults();
      this._ensureOwnsPrintMeta();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      if (this._mo) this._mo.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      this._onResize = () => this._scheduleMeasure();
      window.addEventListener('resize', this._onResize);
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => this._scheduleMeasure());
      }
      this._scheduleMeasure();
    }
    disconnectedCallback() {
      window.removeEventListener('resize', this._onResize);
      if (this._mo) this._mo.disconnect();
      if (this._raf) {
        cancelAnimationFrame(this._raf);
        this._raf = null;
      }
      // Drop the head rules when the last doc-page leaves, so a deleted
      // document's @page geometry and text-wrap defaults can't apply to
      // whatever replaces it.
      const survivor = document.querySelector('doc-page');
      if (!survivor) {
        ['doc-page-print', 'doc-page-text-wrap', 'doc-page-owns-print', 'doc-page-fixed-size', 'doc-page-print-sizing'].forEach(id => {
          const tag = document.getElementById(id);
          if (tag) tag.remove();
        });
        // A live deck-stage deferred its own print-sizing meta to ours —
        // hand the page-global meta over so the deck isn't left unmarked.
        const deck = document.querySelector('deck-stage');
        if (deck && typeof deck._ensurePrintSizingMeta === 'function') {
          deck._ensurePrintSizingMeta();
        }
      } else {
        // A departed owner hands each page-global meta to whatever
        // doc-page remains (or it's removed).
        if (typeof survivor._syncFixedSizeMeta === 'function') {
          survivor._syncFixedSizeMeta();
        }
        if (typeof survivor._syncPrintSizingMeta === 'function') {
          survivor._syncPrintSizingMeta();
        }
      }
    }
    attributeChangedCallback() {
      if (!this._sheet) return;
      this._syncSize();
      this._syncPrintPageRule();
      this._syncFixedSizeMeta();
      this._syncPrintSizingMeta();
      this._scheduleMeasure();
    }
    _render() {
      this._root.innerHTML = `
        <style>${stylesheet}</style>
        <style id="vars"></style>
        <div class="sheet" data-screen-label="Document">
          <table class="frame" role="presentation">
            <thead><tr><th><div class="hdr-space"><slot name="header"></slot></div></th></tr></thead>
            <tbody><tr><td class="body"><div class="fit-box"><div class="fit"><slot></slot></div></div></td></tr></tbody>
            <tfoot><tr><td><div class="ftr-space"><slot name="footer"></slot></div></td></tr></tfoot>
          </table>
        </div>`;
      this._sheet = this._root.querySelector('.sheet');
      this._vars = this._root.getElementById('vars');
    }

    /** Runtime sizing lives in a shadow <style> :host rule, never on the
     *  light-DOM host element, so serialize-persist can't write it back. */
    _syncSize(hdrH, ftrH) {
      // Scaled-fit mode: content at its authored size, scaled onto the
      // printable area (page minus margins on both axes). The factor is a
      // plain number var so calc(length * number) stays valid; 4 decimals
      // keeps the shadow style stable across re-measures. Upscaling is
      // allowed — print transforms are vector, so text and CSS stay crisp
      // (raster images soften, which the catalog bullet warns about).
      const fit = this._contentFit();
      let fitVars = '';
      if (fit) {
        const marginPx = toPx(this.pageMargin) || 0;
        const availW = toPx(this.pageWidth) - 2 * marginPx;
        const availH = toPx(this.pageHeight) - 2 * marginPx;
        const scale = Math.min(availW / fit[2], availH / fit[3]);
        if (scale > 0 && Number.isFinite(scale)) {
          fitVars = '--doc-fit-w:' + fit[0] + ';' + '--doc-fit-h:' + fit[1] + ';' + '--doc-fit-scale:' + scale.toFixed(4) + ';';
        }
      }
      this._sheet.classList.toggle('fit-mode', !!fitVars);
      // Numeric w/h ratio for the paginated page cards' aspect-ratio —
      // aspect-ratio takes a number, not a length ratio, so compute it
      // here (CSS length division isn't portable). 6 decimals keeps the
      // shadow style stable across re-syncs.
      const arW = toPx(this.pageWidth);
      const arH = toPx(this.pageHeight);
      const ar = arW > 0 && arH > 0 ? (arW / arH).toFixed(6) : '0.772727';
      this._vars.textContent = ':host{' + fitVars + '--doc-page-ar:' + ar + ';' + '--doc-page-w:' + this.pageWidth + ';' + '--doc-page-h:' + this.pageHeight + ';' + '--doc-page-margin:' + this.pageMargin + ';' + '--doc-hdr-h:' + (hdrH || 0) + 'px;' + '--doc-ftr-h:' + (ftrH || 0) + 'px;' + '--doc-hdr-pad:' + (hdrH ? '0.35in' : '0px') + ';' + '--doc-ftr-pad:' + (ftrH ? '0.35in' : '0px') + '}';
    }

    /** @page is a no-op inside shadow DOM, so the rule lives in <head>.
     *  Re-appended on every sync so it stays last in source order — the
     *  @page cascade is source-order per descriptor, so this rule wins
     *  over any other @page rule in the document.
     *
     *  The @page SIZE is pinned where the page box IS part of the design:
     *  explicit-fixed-size mode (width + height authored), scaled-fit
     *  mode (the named sheet the fit targets), and explicit pagination
     *  (the named size the cards share — so card and sheet agree on
     *  every print path, and the export path's chosen paper overrides
     *  BOTH with one later rule). For FLOWING documents no paper size is
     *  emitted at all — the true size comes from the user's preference,
     *  injected by the export path or chosen in the print dialog — so a
     *  flowing document never fights the paper it lands on.
     *  margin: 0 is emitted in every mode: it leaves Chrome no margin box
     *  to draw its date/URL/page-count header in, and the visual margin
     *  lives on the sheet's own padding. */
    _syncPrintPageRule() {
      const id = 'doc-page-print';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      document.head.appendChild(tag);
      // Three print-geometry regimes:
      // - true-size: the page IS the design — pin its exact size.
      // - scaled-fit (content-width/height): the fit factor is computed
      //   against the NAMED paper's printable area, so that paper must
      //   stay pinned or the scaled content overflows a smaller sheet
      //   (the export path re-fits and re-pins at print time on top).
      // - default modes: no paper size — but landscape still needs the
      //   paper-agnostic 'size: landscape' keyword, because the size
      //   descriptor is what carries orientation; without it a landscape
      //   document prints portrait whenever nothing injects a size.
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      // Explicit pagination pins the page box to the SAME values that
      // size the cards (the named size by default, the export path's
      // chosen paper when its later rule overrides both) — card and
      // sheet agree on every print path, and a mismatched real paper
      // shrinks-to-fit in the dialog instead of clipping a Letter card
      // on A4. Declared before the paginated read below so both derive
      // from one check.
      const paginatedNow = this.querySelector(':scope > .page') !== null;
      const sizeDescriptor = this._trueSizePx() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : this._contentFit() ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : paginatedNow ? 'size: ' + this.pageWidth + ' ' + this.pageHeight + '; ' : landscape ? 'size: landscape; ' : '';
      // WebKit never repeats the thead/tfoot spacers that carry a flowing
      // document's vertical page margins (see WK_PRINT above), so pages
      // after the first print edge-to-edge there. Carry the VERTICAL
      // margins on @page for WebKit instead, and the shadow print CSS
      // trims the first-page spacers by the same amount (.sheet.wk-print
      // rules). Horizontal inset stays on the sheet's own padding in
      // every engine. Blink keeps margin: 0 (a nonzero margin there
      // re-opens the box Chrome draws its header furniture in). One cost,
      // learned in testing: Safari's own date/URL headers are a USER
      // dialog setting ("Print headers and footers") that renders in the
      // margin area when room exists — margin: 0 only suppressed it by
      // leaving no room, and no CSS controls it. The export dialog's
      // Safari guide teaches turning the setting off for flowing
      // documents. Explicitly paginated and fixed-size documents keep
      // margin: 0 everywhere: their pages ARE the sheet.
      const wkFlowing = WK_PRINT && !paginatedNow && !this._trueSizePx() && !this._contentFit();
      const marginDescriptor = wkFlowing ? 'margin: ' + this.pageMargin + ' 0; ' : 'margin: 0; ';
      // Shadow-internal marker (never serialized), kept in lockstep with
      // the @page decision above: the print CSS trims the first-page
      // spacers ONLY while @page actually carries the margins — a
      // true-size or scaled-fit sheet keeps margin: 0 and must keep its
      // spacers too. Re-synced here so attribute changes and pagination
      // flips move both together.
      if (this._sheet) this._sheet.classList.toggle('wk-print', wkFlowing);
      tag.textContent = '@page { ' + sizeDescriptor + marginDescriptor + '} ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; height: auto !important; overflow: visible !important; } ' + 'h1,h2,h3,h4,h5,h6 { break-after: avoid; } ' + 'figure,pre,blockquote,img,svg,tr { break-inside: avoid; } ' + 'p,li { orphans: 3; widows: 3; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' + '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Typographic defaults for document text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins; document-level so the
     *  rules reach the slotted (light DOM) content — shadow styles can't.
     *  data-omelette-injected marks the tag for the host editor to strip
     *  at serialize, so it is never written back as authored source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('doc-page-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'doc-page-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }

    /** Declares that this document owns its print CSS. The instant-PDF
     *  export checks for the meta by NAME PRESENCE alone (content is
     *  ignored) and skips its automatic print-CSS injections, so the
     *  component's @page geometry is never overridden by a heuristic.
     *  data-omelette-injected keeps it out of serialized source. */
    _ensureOwnsPrintMeta() {
      if (document.getElementById('doc-page-owns-print')) return;
      const tag = document.createElement('meta');
      tag.id = 'doc-page-owns-print';
      tag.name = 'omelette-owns-print';
      tag.content = 'true';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** This page's valid true-size page box (explicit width AND height)
     *  as [w, h] px ints, or null when the mode is off. */
    _trueSizePx() {
      if (!safeLen(this.getAttribute('width'), null) || !safeLen(this.getAttribute('height'), null)) return null;
      const w = Math.round(toPx(this.pageWidth));
      const h = Math.round(toPx(this.pageHeight));
      return w > 0 && h > 0 ? [w, h] : null;
    }

    /** True-size pages (explicit width AND height) also declare the page
     *  box as the preview size: the in-app preview reads
     *  meta[name="omelette-fixed-size"] (content "W,H" in px ints) and
     *  scales the sheet into view — without it an 18in poster previews at
     *  true size with scrollbars. Never overrides an author-set meta
     *  (only the component's own id is managed). The meta is page-global
     *  while doc-page instances are not, so every sync recomputes the
     *  page-wide owner — the first connected true-size doc-page — and a
     *  non-true-size sibling's sync can never delete the owner's meta.
     *  Removed when no true-size page remains (the owner's disconnect
     *  re-syncs via any survivor) or when an author-set meta exists. */
    _syncFixedSizeMeta() {
      const id = 'doc-page-fixed-size';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-fixed-size"]:not([data-omelette-injected])');
      // The page-wide owner, not this instance: an upgraded true-size page
      // anywhere in the document keeps the meta alive and sized.
      let box = null;
      for (const el of document.querySelectorAll('doc-page')) {
        box = typeof el._trueSizePx === 'function' ? el._trueSizePx() : null;
        if (box) break;
      }
      if (!box || authored) {
        if (own) own.remove();
        return;
      }
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-fixed-size';
      tag.content = box[0] + ',' + box[1];
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }

    /** This page's print-sizing mode: 'fixed' when an explicit width AND
     *  height are authored (the page is the design's own size), else the
     *  default paper in the authored orientation. */
    _printSizingMode() {
      if (this._trueSizePx()) return 'fixed';
      const landscape = (this.getAttribute('orientation') || '').trim().toLowerCase() === 'landscape';
      return landscape ? 'default-landscape' : 'default-portrait';
    }

    /** Announces the print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] with content 'default-portrait',
     *  'default-landscape', or 'fixed' (fixed pages also carry the
     *  omelette-fixed-size meta with the page box in px). The export path
     *  probes it to decide what true paper size to inject at print time —
     *  in the default modes the component emits no paper size of its own.
     *  Same page-global ownership rules as the fixed-size meta above:
     *  first connected doc-page owns it, an authored meta is never
     *  overridden, removed when no doc-page remains. */
    _syncPrintSizingMeta() {
      const id = 'doc-page-print-sizing';
      const own = document.getElementById(id);
      const authored = document.querySelector('meta[name="omelette-print-sizing"]:not([data-omelette-injected])');
      // A fixed page wins outright (mirroring the fixed-size loop above,
      // so the two metas can never contradict each other in a mixed
      // multi-page document); otherwise the first page's mode holds.
      let mode = null;
      for (const el of document.querySelectorAll('doc-page')) {
        if (typeof el._printSizingMode !== 'function') continue;
        const m = el._printSizingMode();
        if (m === 'fixed') {
          mode = m;
          break;
        }
        if (mode === null) mode = m;
      }
      if (!mode || authored) {
        if (own) own.remove();
        return;
      }
      // A deck-stage that connected first injected its own meta and
      // defers to any existing one — take it over, or the document ends
      // up with two conflicting injected metas (a doc-page page is the
      // document; the deck re-ensures its meta if every doc-page leaves).
      const deckMeta = document.getElementById('deck-stage-print-sizing');
      if (deckMeta) deckMeta.remove();
      const tag = own || document.createElement('meta');
      tag.id = id;
      tag.name = 'omelette-print-sizing';
      tag.content = mode;
      tag.setAttribute('data-omelette-injected', '');
      if (!own) document.head.appendChild(tag);
    }
    _scheduleMeasure() {
      if (this._raf) return;
      this._raf = requestAnimationFrame(() => {
        this._raf = null;
        this._measure();
      });
    }

    /** Slot heights feed the print spacers (--doc-hdr-h / --doc-ftr-h), so
     *  they re-measure on content mutation, resize, and font load. The
     *  same pass detects explicit pagination (direct .page children) and
     *  toggles the sheet between the flowing-document card and the
     *  page-per-card stack — content edits can add or remove pages at any
     *  time, so this tracks the same mutations the measurement does. */
    _measure() {
      const hdr = this.querySelector(':scope > [slot="header"]');
      const ftr = this.querySelector(':scope > [slot="footer"]');
      const wasPaginated = this._sheet.classList.contains('paginated');
      this._sheet.classList.toggle('paginated', this.querySelector(':scope > .page') !== null);
      // The WebKit @page margin is flowing-only, so a pagination flip
      // must re-emit the rule (content edits can add or remove .page
      // sections at any time).
      if (this._sheet.classList.contains('paginated') !== wasPaginated) {
        this._syncPrintPageRule();
      }
      this._syncSize(hdr ? hdr.offsetHeight : 0, ftr ? ftr.offsetHeight : 0);
    }
  }
  if (!customElements.get('doc-page')) {
    customElements.define('doc-page', DocPage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "doc-page.js", error: String((e && e.message) || e) }); }

// mind-pharmacy/app.js
try { (() => {
// 마음약국 — vanilla app (classic script; top-level const/함수는 형제 스크립트와 전역 스코프 공유).
// 규칙: module 금지 · class 금지 · var 금지 · window 할당 금지 · IIFE 금지 · 고차함수(map/forEach) 금지 · async/await만.

const ASSET = "assets-web/";
const MOODS = [{
  key: "anxious",
  label: "불안해요"
}, {
  key: "broken",
  label: "마음이 무너졌어요"
}, {
  key: "compare",
  label: "비교돼요"
}, {
  key: "waiting",
  label: "기다리기 힘들어요"
}, {
  key: "forgive",
  label: "용서가 안 돼요"
}, {
  key: "distant",
  label: "하나님이 멀게 느껴져요"
}, {
  key: "calling",
  label: "책임이 버거워요"
}, {
  key: "thanks",
  label: "감사가 사라졌어요"
}];
const state = {
  screen: "intro",
  mood: null,
  moodLabel: "",
  step: 0,
  selections: {},
  prescription: null
};
const appEl = document.getElementById("app");
const escapeText = t => {
  const map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
  let out = "";
  for (const ch of String(t == null ? "" : t)) out += map[ch] || ch;
  return out;
};
const leafMarkup = () => '<img class="leaf leaf-tl" src="' + ASSET + 'leaf-tl-soft.png" alt="">' + '<img class="leaf leaf-br" src="' + ASSET + 'leaf-br-soft.png" alt="">';
const todayText = () => {
  const d = new Date();
  const mm = ("0" + (d.getMonth() + 1)).slice(-2);
  const dd = ("0" + d.getDate()).slice(-2);
  return d.getFullYear() + "." + mm + "." + dd;
};

// ---------- Intro ----------
const renderIntro = () => {
  appEl.innerHTML = leafMarkup() + '<section class="screen intro">' + '<img class="intro-logo" src="' + ASSET + 'logo-mark.webp" alt="마음약국">' + '<p class="intro-line show">괜찮은 척하지 않아도 괜찮아요.<br>지금 마음에 가까운 증상을 하나 골라주세요.</p>' + '<p class="intro-sub show">오늘의 마음에 맞는 말씀 한 알을 처방해 드릴게요.</p>' + '<button class="btn btn-primary intro-start" id="introStart">말씀 처방받기</button>' + '</section>';
  const start = document.getElementById("introStart");
  start.addEventListener("click", goEmotion);
  bgmPlay(1);
};
const goEmotion = () => {
  state.screen = "emotion";
  bgmPlay(2);
  renderEmotion();
};

// ---------- Emotion select ----------
const renderEmotion = () => {
  let cards = "";
  for (const m of MOODS) {
    cards += '<button class="env" data-mood="' + m.key + '" data-label="' + escapeText(m.label) + '">' + '<img class="env-img" src="' + ASSET + 'env-' + m.key + '.webp" alt="">' + '<span class="env-label">' + escapeText(m.label) + '</span>' + '</button>';
  }
  appEl.innerHTML = leafMarkup() + '<section class="screen emotion fade-in">' + '<p class="eyebrow">말씀 처방전</p>' + '<h1 class="screen-title">오늘 마음이 어디가 아픈가요?</h1>' + '<p class="screen-desc">내 마음에 가까운 증상을 하나 골라주세요.</p>' + '<div class="emotion-grid">' + cards + '</div>' + '<p class="emotion-foot">마음 카드를 하나 골라주세요.</p>' + '</section>';
  const grid = appEl.querySelector(".emotion-grid");
  grid.addEventListener("click", onEmotionClick);
};
const onEmotionClick = ev => {
  const btn = ev.target.closest(".env");
  if (!btn) return;
  state.mood = btn.getAttribute("data-mood");
  state.moodLabel = btn.getAttribute("data-label");
  state.step = 0;
  state.selections = {};
  state.prescription = null;
  state.screen = "assess";
  renderAssessment();
};

// ---------- Assessment ----------
const renderAssessment = () => {
  const data = getAssessment(state.mood);
  const groups = data.groups || [];
  const g = groups[state.step] || {};
  const total = groups.length;
  let opts = "";
  const list = g.options || [];
  for (let i = 0; i < list.length; i++) {
    const key = state.step + "-" + i;
    const on = state.selections[key] ? " sel" : "";
    opts += '<button class="opt' + on + '" data-key="' + key + '">' + '<span class="tick">✓</span>' + '<span>' + escapeText(list[i]) + '</span>' + '</button>';
  }
  const answered = hasAnswer(state.step);
  const isLast = state.step === total - 1;
  const nextLabel = isLast ? data.cta || "문진 완료" : "다음";
  appEl.innerHTML = leafMarkup() + '<section class="screen assess fade-in">' + '<div class="paper">' + '<p class="assess-progress">' + (state.step + 1) + " / " + total + '</p>' + '<h2 class="assess-q">' + escapeText(g.question) + '</h2>' + '<p class="assess-hint">' + escapeText(g.hint) + '</p>' + '<div class="opts">' + opts + '</div>' + '<div class="assess-nav">' + '<button class="btn btn-ghost" id="assessPrev">' + (state.step === 0 ? "그만두기" : "이전") + '</button>' + '<button class="btn btn-primary" id="assessNext"' + (answered ? "" : " disabled") + '>' + nextLabel + '</button>' + '</div>' + '</div>' + '</section>';
  appEl.querySelector(".opts").addEventListener("click", onOptionClick);
  document.getElementById("assessPrev").addEventListener("click", onAssessPrev);
  document.getElementById("assessNext").addEventListener("click", onAssessNext);
};
const hasAnswer = step => {
  for (const k in state.selections) {
    if (k.indexOf(step + "-") === 0 && state.selections[k]) return true;
  }
  return false;
};
const clearStep = step => {
  for (const k in state.selections) {
    if (k.indexOf(step + "-") === 0) state.selections[k] = false;
  }
};
const onOptionClick = ev => {
  const btn = ev.target.closest(".opt");
  if (!btn) return;
  const key = btn.getAttribute("data-key");
  clearStep(state.step); // Q별 단일 선택
  state.selections[key] = true;
  renderAssessment();
};
const onAssessPrev = () => {
  if (state.step === 0) {
    state.screen = "emotion";
    renderEmotion();
    return;
  }
  state.step -= 1;
  renderAssessment();
};
const onAssessNext = () => {
  const data = getAssessment(state.mood);
  const total = (data.groups || []).length;
  if (!hasAnswer(state.step)) return;
  if (state.step < total - 1) {
    state.step += 1;
    renderAssessment();
    return;
  }
  finishAssessment();
};
const finishAssessment = () => {
  state.prescription = resolvePrescription(state.mood, state.selections, state.prescription);
  state.screen = "result";
  renderResult();
};

// ---------- Prescription card (result + decorate 공용) ----------
const rxCardMarkup = rx => {
  const cell = (k, v) => '<div class="rx-cell"><p class="k">' + k + '</p><p class="v">' + escapeText(v || "-") + '</p></div>';
  const sec = (title, body) => body ? '<div class="rx-sec"><h4>' + title + '</h4><p>' + escapeText(body) + '</p></div>' : "";
  let verseBlock = "";
  if (rx.verse) {
    verseBlock = '<div class="rx-sec rx-verse"><h4>오늘 곁에 있어줄 말씀</h4>' + '<p class="verse">' + escapeText(rx.verse) + '</p>' + (rx.reference ? '<p class="ref">' + escapeText(rx.reference) + " · 개역한글</p>" : "") + '</div>';
  }
  return '<article class="rx" id="rxCard"><div class="rx-inner">' + '<header class="rx-head"><p class="rx-brand">마음약국</p><h3 class="rx-title">말씀 처방전</h3></header>' + '<div class="rx-grid">' + cell("처방일", todayText()) + cell("증상", rx.symptom) + cell("마음 강도", rx.intensity) + cell("처방 단어", rx.word) + '</div>' + sec("마음 소견", rx.opinion) + verseBlock + sec("복용법", rx.dose) + sec("주의사항", rx.caution) + sec("작은 실천", rx.practice) + '<div class="rx-word"><span class="lab">오늘의 처방 단어</span><p class="w">' + escapeText(rx.word) + '</p></div>' + '</div></article>';
};

// ---------- Result ----------
const renderResult = () => {
  const rx = state.prescription;
  if (!rx) {
    renderPending();
    return;
  }
  appEl.innerHTML = leafMarkup() + '<section class="screen result fade-in">' + '<p class="result-eyebrow">오늘의 말씀 처방전</p>' + rxCardMarkup(rx) + '<div class="result-actions">' + '<button class="btn btn-primary" id="rxDecorate">처방전 꾸미기</button>' + '<button class="btn btn-ghost" id="rxAgain">다시 처방받기</button>' + '</div>' + '</section>';
  document.getElementById("rxAgain").addEventListener("click", goEmotion);
  document.getElementById("rxDecorate").addEventListener("click", onDecorate);
};
const renderPending = () => {
  appEl.innerHTML = leafMarkup() + '<section class="screen result fade-in"><div class="pending">' + '<h3>이 감정의 처방전은 준비 중이에요</h3>' + '<p>선택하신 마음의 말씀 처방전을 곧 담아드릴게요.<br>다른 마음으로 먼저 처방받아 보실 수 있어요.</p>' + '<button class="btn btn-primary" id="pendBack">다른 마음 고르기</button>' + '</div></section>';
  document.getElementById("pendBack").addEventListener("click", goEmotion);
};

// ---------- Sticker decorate ----------
const STICKER_ROOT = "";
const decorateState = {
  stickers: [],
  selectedId: 0,
  seq: 0,
  pickerOpen: false,
  drag: null
};
const stickerCategories = () => STICKER_SET && STICKER_SET.categories || [];
const stickerFiles = catKey => STICKER_SET && STICKER_SET.files && STICKER_SET.files[catKey] || [];
const onDecorate = () => {
  decorateState.stickers = [];
  decorateState.selectedId = 0;
  decorateState.seq = 0;
  decorateState.pickerOpen = false;
  state.screen = "decorate";
  bgmPlay(3);
  renderDecorate();
};
const renderDecorate = () => {
  const rx = state.prescription;
  let items = "";
  const list = decorateState.stickers;
  for (let i = 0; i < list.length; i++) {
    const s = list[i];
    const on = s.id === decorateState.selectedId ? " sel" : "";
    items += '<div class="stk' + on + '" data-id="' + s.id + '" data-x="' + s.x + '" data-y="' + s.y + '" data-scale="' + s.scale + '" data-rot="' + s.rot + '">' + '<img class="stk-img" src="' + escapeText(s.src) + '" alt="" draggable="false">' + '<span class="stk-h stk-rot" data-role="rot">↻</span>' + '<span class="stk-h stk-size" data-role="size">⤢</span>' + '<button class="stk-h stk-del" data-role="del">✕</button>' + '</div>';
  }
  appEl.innerHTML = leafMarkup() + '<section class="screen decorate fade-in">' + '<p class="result-eyebrow">처방전 꾸미기</p>' + '<p class="decorate-hint">응원 스티커를 골라 처방전에 붙여보세요.</p>' + '<div class="decorate-stage">' + '<div class="rx-canvas" id="rxCanvas">' + rxCardMarkup(rx) + '<div class="stk-layer" id="stkLayer">' + items + '</div>' + '</div>' + '</div>' + '<div class="decorate-tools">' + '<button class="btn btn-primary" id="stkAdd">＋ 응원 스티커 붙이기</button>' + '</div>' + '<div class="result-actions">' + '<button class="btn btn-ghost" id="stkSave">이미지로 저장하기</button>' + '<button class="btn btn-primary" id="stkShare">소중한 사람에게 공유하기</button>' + '</div>' + '<div class="result-actions"><button class="btn btn-ghost" id="stkBack">처방전으로 돌아가기</button></div>' + (decorateState.pickerOpen ? stickerPickerMarkup() : "") + '</section>';
  positionStickers();
  document.getElementById("stkAdd").addEventListener("click", openPicker);
  document.getElementById("stkSave").addEventListener("click", onSave);
  document.getElementById("stkShare").addEventListener("click", onShare);
  document.getElementById("stkBack").addEventListener("click", renderResult);
  document.getElementById("rxCanvas").addEventListener("pointerdown", onCanvasPointerDown);
  const layer = document.getElementById("stkLayer");
  layer.addEventListener("pointerdown", onStickerPointerDown);
  if (decorateState.pickerOpen) bindPicker();
};
const positionStickers = () => {
  const nodes = appEl.querySelectorAll(".stk");
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    const x = n.getAttribute("data-x");
    const y = n.getAttribute("data-y");
    const sc = n.getAttribute("data-scale");
    const rot = n.getAttribute("data-rot");
    n.style.left = x + "%";
    n.style.top = y + "%";
    n.style.transform = "translate(-50%,-50%) rotate(" + rot + "deg) scale(" + sc + ")";
  }
};
const findSticker = id => {
  for (let i = 0; i < decorateState.stickers.length; i++) {
    if (decorateState.stickers[i].id === Number(id)) return decorateState.stickers[i];
  }
  return null;
};

// ----- Picker modal -----
const openPicker = () => {
  decorateState.pickerOpen = true;
  renderDecorate();
};
const closePicker = () => {
  decorateState.pickerOpen = false;
  renderDecorate();
};
const stickerPickerMarkup = () => {
  const cats = stickerCategories();
  const active = decorateState.pickerCat || cats[0] && cats[0].key || "normal";
  let tabs = "";
  for (let i = 0; i < cats.length; i++) {
    const on = cats[i].key === active ? " on" : "";
    tabs += '<button class="pick-tab' + on + '" data-cat="' + cats[i].key + '">' + escapeText(cats[i].label) + '</button>';
  }
  let grid = "";
  const files = stickerFiles(active);
  for (let i = 0; i < files.length; i++) {
    grid += '<button class="pick-item" data-src="' + escapeText(STICKER_ROOT + files[i]) + '"><img src="' + escapeText(STICKER_ROOT + files[i]) + '" alt="" loading="lazy"></button>';
  }
  return '<div class="pick-overlay" id="pickOverlay">' + '<div class="pick-modal" role="dialog" aria-label="스티커 선택">' + '<div class="pick-head"><span>스티커 선택</span><button class="pick-close" id="pickClose" aria-label="닫기">✕</button></div>' + '<div class="pick-tabs">' + tabs + '</div>' + '<div class="pick-grid">' + grid + '</div>' + '</div></div>';
};
const bindPicker = () => {
  document.getElementById("pickClose").addEventListener("click", closePicker);
  const overlay = document.getElementById("pickOverlay");
  overlay.addEventListener("pointerdown", onPickerBackdrop);
  const tabs = appEl.querySelectorAll(".pick-tab");
  for (let i = 0; i < tabs.length; i++) tabs[i].addEventListener("click", onPickerTab);
  const items = appEl.querySelectorAll(".pick-item");
  for (let i = 0; i < items.length; i++) items[i].addEventListener("click", onPickerPick);
};
const onPickerBackdrop = ev => {
  if (ev.target.id === "pickOverlay") closePicker();
};
const onPickerTab = ev => {
  decorateState.pickerCat = ev.currentTarget.getAttribute("data-cat");
  renderDecorate();
};
const onPickerPick = ev => {
  const src = ev.currentTarget.getAttribute("data-src");
  decorateState.seq += 1;
  const id = decorateState.seq;
  decorateState.stickers.push({
    id: id,
    src: src,
    x: 50,
    y: 52,
    scale: 1,
    rot: 0
  });
  decorateState.selectedId = id;
  decorateState.pickerOpen = false;
  renderDecorate();
};

// ----- Select / drag / resize / rotate -----
const onCanvasPointerDown = ev => {
  if (ev.target.closest(".stk")) return;
  decorateState.selectedId = 0;
  renderDecorate();
};
const onStickerPointerDown = ev => {
  const node = ev.target.closest(".stk");
  if (!node) return;
  ev.stopPropagation();
  const id = Number(node.getAttribute("data-id"));
  const s = findSticker(id);
  if (!s) return;
  decorateState.selectedId = id;
  const role = ev.target.getAttribute("data-role");
  if (role === "del") {
    removeSticker(id);
    return;
  }
  const canvas = document.getElementById("rxCanvas");
  const rect = canvas.getBoundingClientRect();
  decorateState.drag = {
    id: id,
    mode: role || "move",
    rect: rect,
    startX: ev.clientX,
    startY: ev.clientY,
    s0: {
      x: s.x,
      y: s.y,
      scale: s.scale,
      rot: s.rot
    }
  };
  window.addEventListener("pointermove", onStickerPointerMove);
  window.addEventListener("pointerup", onStickerPointerUp);
  if (!role) syncSelection();else renderDecorate();
};
const clamp = (v, lo, hi) => v < lo ? lo : v > hi ? hi : v;
const onStickerPointerMove = ev => {
  const d = decorateState.drag;
  if (!d) return;
  const s = findSticker(d.id);
  if (!s) return;
  const w = d.rect.width || 1;
  const h = d.rect.height || 1;
  if (d.mode === "move") {
    s.x = clamp(d.s0.x + (ev.clientX - d.startX) / w * 100, 4, 96);
    s.y = clamp(d.s0.y + (ev.clientY - d.startY) / h * 100, 4, 96);
  } else if (d.mode === "size") {
    const dist = Math.hypot(ev.clientX - d.startX, ev.clientY - d.startY);
    const dir = ev.clientX - d.startX >= 0 ? 1 : -1;
    s.scale = clamp(d.s0.scale + dir * dist / 140, 0.4, 3);
  } else if (d.mode === "rot") {
    const cx = d.rect.left + s.x / 100 * w;
    const cy = d.rect.top + s.y / 100 * h;
    const ang = Math.atan2(ev.clientY - cy, ev.clientX - cx) * 180 / Math.PI;
    s.rot = Math.round(ang + 90);
  }
  syncSelection();
};
const onStickerPointerUp = () => {
  decorateState.drag = null;
  window.removeEventListener("pointermove", onStickerPointerMove);
  window.removeEventListener("pointerup", onStickerPointerUp);
};

// 드래그 중엔 재렌더 없이 선택 스티커의 transform만 갱신(부드럽게).
const syncSelection = () => {
  const node = appEl.querySelector('.stk[data-id="' + decorateState.selectedId + '"]');
  const s = findSticker(decorateState.selectedId);
  if (!node || !s) return;
  node.style.left = s.x + "%";
  node.style.top = s.y + "%";
  node.style.transform = "translate(-50%,-50%) rotate(" + s.rot + "deg) scale(" + s.scale + ")";
  node.classList.add("sel");
};
const removeSticker = id => {
  const next = [];
  for (let i = 0; i < decorateState.stickers.length; i++) {
    if (decorateState.stickers[i].id !== Number(id)) next.push(decorateState.stickers[i]);
  }
  decorateState.stickers = next;
  decorateState.selectedId = 0;
  renderDecorate();
};

// ----- Save / Share (카드만 캡처) -----
const captureCard = async () => {
  decorateState.selectedId = 0;
  renderDecorate();
  const canvas = document.getElementById("rxCanvas");
  const out = await html2canvas(canvas, {
    backgroundColor: null,
    scale: 2,
    useCORS: true
  });
  return out;
};
const onSave = async () => {
  const canvas = await captureCard();
  const url = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = url;
  a.download = "마음약국-말씀처방전.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
const onShare = async () => {
  const canvas = await captureCard();
  const url = canvas.toDataURL("image/png");
  if (navigator.share) {
    const res = await fetch(url);
    const blob = await res.blob();
    const file = new File([blob], "마음약국-말씀처방전.png", {
      type: "image/png"
    });
    if (navigator.canShare && navigator.canShare({
      files: [file]
    })) {
      await navigator.share({
        files: [file],
        title: "마음약국 말씀 처방전"
      });
      return;
    }
  }
  const a = document.createElement("a");
  a.href = url;
  a.download = "마음약국-말씀처방전.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};
renderIntro();
})(); } catch (e) { __ds_ns.__errors.push({ path: "mind-pharmacy/app.js", error: String((e && e.message) || e) }); }

// mind-pharmacy/audio.js
try { (() => {
// audio.js — 마음약국 배경음악 (바닐라). 규칙: class/var/window할당/IIFE/new Promise 금지.
// 트랙 1=인트로, 2=감정선택·문진·처방전, 3=꾸미기·저장/공유. 크로스페이드·자연루프·제스처 언락.

const BGM_SRC = {
  1: "assets/bgm-1-web.mp3",
  2: "assets/bgm-2-web.mp3",
  3: "assets/bgm-3-web.mp3"
};
const BGM_TARGET = 0.62;
const BGM_FADE_MS = 3000;
const bgm = {
  els: {},
  fades: {},
  current: null,
  wanted: null,
  unlocked: false
};
const bgmMake = n => {
  if (bgm.els[n]) return bgm.els[n];
  const a = new Audio();
  a.src = BGM_SRC[n];
  a.loop = true;
  a.preload = "auto";
  a.volume = 0;
  bgm.els[n] = a;
  return a;
};
const bgmFade = (n, to, ms) => {
  const a = bgmMake(n);
  if (bgm.fades[n]) {
    window.clearInterval(bgm.fades[n]);
    bgm.fades[n] = null;
  }
  const from = a.volume;
  const steps = Math.max(1, Math.round(ms / 50));
  let i = 0;
  bgm.fades[n] = window.setInterval(() => {
    i += 1;
    const v = from + (to - from) * (i / steps);
    a.volume = v < 0 ? 0 : v > 1 ? 1 : v;
    if (i >= steps) {
      window.clearInterval(bgm.fades[n]);
      bgm.fades[n] = null;
      if (to === 0) {
        a.pause();
        a.currentTime = 0;
      }
    }
  }, 50);
};
const bgmPlay = n => {
  bgm.wanted = n;
  if (!bgm.unlocked) return;
  if (bgm.current === n) return;
  const prev = bgm.current;
  bgm.current = n;
  if (prev && bgm.els[prev]) bgmFade(prev, 0, BGM_FADE_MS);
  const a = bgmMake(n);
  const kick = a.play();
  if (kick && kick.catch) kick.catch(() => {});
  bgmFade(n, BGM_TARGET, BGM_FADE_MS);
};
const bgmUnlock = () => {
  if (bgm.unlocked) return;
  bgm.unlocked = true;
  if (bgm.wanted) {
    const w = bgm.wanted;
    bgm.current = null;
    bgmPlay(w);
  }
};
window.addEventListener("pointerdown", bgmUnlock, {
  once: false
});
window.addEventListener("keydown", bgmUnlock, {
  once: false
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "mind-pharmacy/audio.js", error: String((e && e.message) || e) }); }

// mind-pharmacy/data/assessment-data.js
try { (() => {
// assessment-data.js — 감정별 자가문진 문항 (실제 원문 연결).
// A/B 분류는 각 감정 Q1의 optionTypes(rx-prescriptions.js › classifyType). 미설정 감정은 default 임시 문항.
const ASSESSMENT_DATA = {
  "thanks": {
    "groups": [{
      "number": "01",
      "question": "지금 마음의 느낌은 어떤가요?",
      "hint": "감사해야 한다는 사실을 알고 있어도 마음이 바로 따라오지 않을 수 있어요. 지금의 마음에 가까운 것만 골라주세요.",
      "options": ["감사한 것을 찾기가 어려워요", "좋은 일이 있어도 마음에 잘 닿지 않아요", "서운함과 답답함이 먼저 올라와요", "오늘을 견디는 것만으로도 벅차요"],
      "optionTypes": ["A", "A", "B", "B"]
    }, {
      "number": "02",
      "question": "지금 나에게 가까운 말은?",
      "hint": "천천히 읽어보고, 오늘의 나와 가장 닮은 문장을 골라주세요.",
      "options": ["예전에는 감사했던 것도 이제 당연하게 느껴져요", "계속되는 돌봄보다 부족한 것만 보여요", "감사해야 한다는 말이 부담스럽게 느껴져요", "상황이 나아져야 감사할 수 있을 것 같아요", "감사하지 못하는 내가 믿음 없는 사람처럼 느껴져요", "하나님께 받은 사랑이 잘 느껴지지 않아요", "다른 사람과 비교할수록 내게 있는 것이 작게 느껴져요", "감사하고 싶지만 마음이 지쳐 반응할 힘이 없어요"]
    }, {
      "number": "03",
      "question": "오늘 내 마음에 필요한 것은?",
      "hint": "지금 내 마음에 가장 필요한 한 가지를 골라주세요.",
      "options": ["변하지 않는 하나님의 사랑", "감사하지 못하는 나를 책망하지 않는 시간", "지친 마음이 먼저 쉬어 갈 자리", "하나님께 솔직하게 말할 수 있는 마음", "이미 받은 것을 천천히 알아보는 시선", "다시 감사할 수 있는 작은 힘"]
    }],
    "cta": "문진 완료"
  },
  "calling": {
    "groups": [{
      "number": "01",
      "question": "지금 책임의 무게는 어떻게 느껴지나요?",
      "hint": "내가 책임감 있는 사람인지 평가하기보다, 지금 어떤 무게까지 혼자 들고 있는지 천천히 살펴보세요.",
      "options": ["조금 부담되지만 감당할 수 있어요", "해야 할 일이 계속 마음에 남아 있어요", "잠시 멈추어도 마음이 편하지 않아요", "지금은 혼자 감당하기 버거워요"],
      "optionTypes": ["A", "A", "B", "B"]
    }, {
      "number": "02",
      "question": "지금 나에게 가까운 말은 무엇인가요?",
      "hint": "천천히 읽어보고, 오늘의 나와 가장 닮은 문장을 골라주세요.",
      "options": ["내가 끝까지 챙겨야 마음이 놓여요", "실수하면 누군가에게 피해를 줄 것 같아요", "다른 사람에게 부탁하는 것이 어렵게 느껴져요", "책임에서 잠시 손을 떼는 것도 불안해요", "하나님께 맡기고 싶지만 결국 내가 다 해야 할 것 같아요", "아무것도 결정하거나 책임지고 싶지 않을 만큼 지쳤어요", "쉬고 있으면 해야 할 일을 외면하는 것 같아 마음이 불편해요", "내가 놓으면 모든 것이 무너질 것 같아요"]
    }, {
      "number": "03",
      "question": "오늘 내 마음에 필요한 것은 무엇인가요?",
      "hint": "지금 내 마음에 가장 필요한 한 가지를 골라주세요.",
      "options": ["모든 것을 혼자 하지 않아도 된다는 안도감", "내가 책임질 범위를 다시 나누는 지혜", "도움을 요청하고 함께 조율할 수 있는 용기", "필요한 책임을 정리한 뒤 멈출 수 있는 마음", "결과 전체를 하나님께 맡길 수 있는 믿음", "다시 움직일 힘이 생길 때까지 회복할 시간"]
    }],
    "cta": "문진 완료"
  },
  "forgive": {
    "groups": [{
      "number": "01",
      "question": "지금 마음의 느낌은 어떤가요?",
      "hint": "용서하지 못하는 마음을 서둘러 정리하지 않아도 괜찮아요. 지금 내 마음에 가까운 것을 골라주세요.",
      "options": ["조금 불편한 마음이 남아 있어요", "생각할수록 화가 나요", "억울함이 계속 마음에 걸려요", "지금은 그 사람을 떠올리는 것조차 버거워요"],
      "optionTypes": ["A", "A", "B", "B"]
    }, {
      "number": "02",
      "question": "지금 나에게 가까운 말은?",
      "hint": "천천히 읽어보고, 오늘의 나와 가장 닮은 문장을 골라주세요.",
      "options": ["용서해야 한다는 것은 알지만 마음이 따라주지 않아요", "그 일을 그냥 넘기면 잘못까지 괜찮다고 인정하는 것 같아요", "상대가 사과하지 않았는데 내가 먼저 용서하고 싶지 않아요", "다시 상처받을까 봐 마음을 놓을 수 없어요", "하나님께 맡기고 싶지만 억울함이 계속 올라와요", "지금은 용서보다 내 상처를 먼저 알아주셨으면 좋겠어요", "용서하면 다시 가까워져야 할 것 같아 두려워요", "미워하고 싶지 않은데 마음이 자꾸 그 일로 돌아가요"]
    }, {
      "number": "03",
      "question": "오늘 내 마음에 필요한 것은?",
      "hint": "지금 내 마음에 가장 필요한 한 가지를 골라주세요.",
      "options": ["하나님의 사랑을 다시 느끼는 시간", "내 상처를 알아주시는 위로", "억울함을 하나님께 맡길 수 있는 믿음", "상대와 나를 분리해 바라보는 지혜", "용서를 시작할 수 있는 작은 마음", "안전하게 쉬며 회복할 시간"]
    }],
    "cta": "문진 완료"
  },
  "distant": {
    "groups": [{
      "number": "01",
      "question": "지금 하나님과의 거리는 어떻게 느껴지나요?",
      "hint": "괜찮은 척하지 않아도 괜찮아요. 지금 마음에 가까운 것만 골라주세요.",
      "options": ["전보다 조금 멀어진 것 같아요", "기도해도 잘 닿지 않는 것 같아요", "하나님이 계신다는 사실이 잘 느껴지지 않아요", "지금은 하나님을 찾을 힘도 부족해요"],
      "optionTypes": ["A", "A", "B", "B"]
    }, {
      "number": "02",
      "question": "지금 나에게 가까운 말은 무엇인가요?",
      "hint": "천천히 읽어보고, 오늘의 나와 가장 닮은 문장을 골라주세요.",
      "options": ["예전처럼 하나님을 가까이 느끼고 싶어요", "기도하려 해도 무슨 말을 해야 할지 모르겠어요", "특별한 감동이 없어서 믿음이 약해진 것 같아요", "마음에 걸리는 일이 있어 하나님 앞에 가기 어려워요", "오랫동안 기다렸지만 아무 응답도 없는 것 같아요", "다른 사람은 하나님을 잘 느끼는 것 같은데 나만 멀어진 것 같아요", "말씀을 읽어도 마음에 잘 들어오지 않아요", "하나님께 솔직한 마음을 드러내도 괜찮을지 망설여져요"]
    }, {
      "number": "03",
      "question": "오늘 내 마음에 필요한 것은 무엇인가요?",
      "hint": "지금 내 마음에 가장 필요한 한 가지를 골라주세요.",
      "options": ["하나님이 여전히 나를 사랑하신다는 확신", "하나님이 나를 떠나지 않으셨다는 확인", "정죄하지 않고 다시 시작할 수 있는 마음", "아무 말 없이 하나님 앞에서 잠시 쉬는 시간", "다시 기도할 수 있는 작은 힘", "말씀을 통해 하나님의 마음을 다시 알아가는 시간"]
    }],
    "cta": "문진 완료"
  },
  "waiting": {
    "groups": [{
      "number": "01",
      "question": "지금 기다림은 어떻게 느껴지나요?",
      "hint": "기다리지 못해서 잘못된 것이 아니라, 간절한 마음으로 오래 붙들고 있느라 지쳤을 수 있어요. 지금 마음에 가까운 것을 골라주세요.",
      "options": ["조금 답답하게 느껴져요", "자꾸 결과를 확인하고 싶어요", "더 기다리면 늦을 것 같아요", "이제는 기다릴 힘이 거의 없어요"],
      "optionTypes": ["A", "A", "B", "B"]
    }, {
      "number": "02",
      "question": "지금 나에게 가까운 말은?",
      "hint": "천천히 읽어보고, 오늘의 나와 가장 닮은 문장을 골라주세요.",
      "options": ["내가 더 움직여야 할 것 같아요", "언제까지 기다려야 할지 몰라 불안해요", "아무 변화가 없으면 잘못된 것 같아요", "지금까지의 기다림이 맞는지 자꾸 의심돼요", "기도했는데도 답이 없는 것처럼 느껴져요", "하나님을 믿고 싶지만 마음이 자꾸 조급해져요", "기다리는 동안 중요한 것을 놓칠까 봐 걱정돼요", "하나님이 지금도 일하고 계신지 확인하고 싶어요"]
    }, {
      "number": "03",
      "question": "오늘 내 마음에 필요한 것은?",
      "hint": "지금 내 마음에 가장 필요한 한 가지를 골라주세요.",
      "options": ["기다릴 수 있는 믿음", "조급함을 내려놓는 평안", "오늘 해야 할 일을 분별하는 지혜", "하나님의 인도를 신뢰하는 마음", "지친 마음이 쉬어 갈 시간", "다시 소망할 수 있는 작은 힘"]
    }],
    "cta": "문진 완료"
  },
  "compare": {
    "groups": [{
      "number": "01",
      "question": "지금 마음의 느낌은 어떤가요?",
      "hint": "맞고 틀린 답은 없어요. 지금 이 순간의 느낌에 가장 가까운 것을 골라주세요.",
      "options": ["잠깐 마음이 작아졌어요", "자꾸 다른 사람이 신경 쓰여요", "내 모습이 부족하게 느껴져요", "지금은 나를 좋게 보기 어려워요"],
      "optionTypes": ["A", "A", "B", "B"]
    }, {
      "number": "02",
      "question": "지금 나에게 가까운 말은?",
      "hint": "천천히 읽어보고, 오늘의 나와 가장 닮은 문장을 골라주세요.",
      "options": ["다른 사람의 좋은 점이 먼저 보여요", "나만 뒤처진 것처럼 느껴져요", "잘하고 있어도 충분하지 않은 것 같아요", "다른 사람의 시선이 신경 쓰여요", "비교한 뒤에는 내 장점이 잘 보이지 않아요", "하나님이 주신 내 모습을 믿고 싶지만 흔들려요", "내 속도보다 다른 사람의 속도가 더 크게 보여요", "하나님이 나를 어떻게 바라보시는지 다시 붙잡고 싶어요"]
    }, {
      "number": "03",
      "question": "오늘 내 마음에 필요한 것은?",
      "hint": "지금 내 마음에 가장 필요한 한 가지를 골라주세요.",
      "options": ["비교를 잠시 멈추고 쉬는 시간", "내 장점을 다시 바라보는 시선", "지금도 잘하고 있다는 따뜻한 말", "나만의 걸음을 이어갈 작은 용기", "다른 사람의 속도와 내 속도를 나누어 보는 마음", "하나님이 바라보시는 나를 생각하는 시간"]
    }],
    "cta": "문진 완료"
  },
  "broken": {
    "groups": [{
      "number": "01",
      "question": "지금 마음의 강도는 어떤가요?",
      "hint": "맞고 틀린 답은 없어요. 지금 이 순간의 느낌에 가장 가까운 것을 골라주세요.",
      "options": ["조금 흔들렸어요", "마음이 내려앉았어요", "아무것도 하기 싫어요", "지금은 혼자 버거워요"],
      "optionTypes": ["A", "A", "B", "B"]
    }, {
      "number": "02",
      "question": "지금 상태에 가까운 말은?",
      "hint": "천천히 읽어보고, 오늘의 나와 가장 닮은 문장을 골라주세요.",
      "options": ["괜찮은 척하기 힘들어요", "기도하려 해도 말이 안 나와요", "누가 건드리면 울 것 같아요", "하나님께 기대고 싶은데 잘 안 돼요", "마음이 텅 빈 것 같아요", "누가 내 마음을 알아줬으면 좋겠어요", "아무 말도 하고 싶지 않아요", "지금의 마음을 하나님께 그대로 가져가고 싶어요"]
    }, {
      "number": "03",
      "question": "오늘 받고 싶은 처방은 무엇인가요?",
      "hint": "지금 내 마음에 가장 필요한 한 가지를 골라주세요.",
      "options": ["내 마음을 알아주는 위로", "지금도 괜찮다고 품어주는 말", "하나님 품에 머물며 쉬는 시간", "다시 일어설 수 있는 작은 힘", "오늘 하루를 견디도록 붙들어 주시는 힘", "마음껏 울어도 되는 안전한 자리"]
    }],
    "cta": "문진 완료"
  },
  "anxious": {
    "groups": [{
      "number": "01",
      "question": "지금 마음의 강도는 어떤가요?",
      "hint": "맞고 틀린 답은 없어요. 지금 이 순간의 느낌에 가장 가까운 것을 골라주세요.",
      "options": ["참을 만해요", "계속 신경 쓰여요", "마음이 꽉 찼어요", "지금은 버거워요"],
      "optionTypes": ["A", "A", "B", "B"]
    }, {
      "number": "02",
      "question": "지금 상태에 가까운 말은?",
      "hint": "천천히 읽어보고, 오늘의 나와 가장 닮은 문장을 골라주세요.",
      "options": ["앞으로가 자꾸 걱정돼요", "생각이 자꾸 이어져요", "자꾸 안 좋은 쪽으로 상상돼요", "마음이 쉽게 진정되지 않아요", "내가 붙잡고 있어야 안심돼요", "기도하려 해도 걱정이 먼저 올라와요", "하나님께 맡기고 싶지만 잘 안 돼요", "이 마음을 하나님께 그대로 가져가고 싶어요"]
    }, {
      "number": "03",
      "question": "오늘 받고 싶은 처방은 무엇인가요?",
      "hint": "지금 내 마음에 가장 필요한 한 가지를 골라주세요.",
      "options": ["마음을 가라앉히는 평안", "하나님을 신뢰할 수 있는 믿음", "지친 마음이 쉬어 갈 시간", "다시 움직일 수 있는 용기", "걱정을 하나님께 맡길 수 있는 마음", "생각을 가라앉히고 다시 숨 쉴 힘"]
    }],
    "cta": "문진 완료"
  },
  "default": {
    "groups": [{
      "number": "01",
      "question": "지금 마음의 강도는 어떤가요?",
      "hint": "맞고 틀린 답은 없어요. 지금 이 순간의 느낌에 가장 가까운 것을 하나 골라주세요.",
      "options": ["참을 만해요", "계속 신경 쓰여요", "마음이 꽉 찼어요", "지금은 버거워요"],
      "optionTypes": ["A", "A", "B", "B"]
    }, {
      "number": "02",
      "question": "지금 마음에 가장 가까운 말은 무엇인가요?",
      "hint": "천천히 읽어보고, 오늘의 나와 가장 닮은 문장을 골라주세요.",
      "options": ["괜찮은 척 중이에요", "말하면 울 것 같아요", "생각이 너무 많아요", "해야 할 건 아는데 마음이 안 따라와요", "열심히 했는데 안이 비어가는 느낌이에요", "사람의 반응에 마음이 흔들려요", "말은 못 했지만 하나님이 알아주셨으면 해요", "그냥 조용히 쉬고 싶어요"]
    }, {
      "number": "03",
      "question": "오늘 어떤 말씀을 처방받고 싶으세요?",
      "hint": "지금 내 마음에 가장 필요한 한 가지를 골라주세요. 그 마음에 맞춰 말씀을 담아드릴게요.",
      "options": ["평안", "위로", "믿음", "쉼", "용기", "사랑", "중심 회복", "다시 시작할 힘"]
    }],
    "cta": "문진 완료"
  }
};
const getAssessment = mood => ASSESSMENT_DATA[mood] || ASSESSMENT_DATA.default;
})(); } catch (e) { __ds_ns.__errors.push({ path: "mind-pharmacy/data/assessment-data.js", error: String((e && e.message) || e) }); }

// mind-pharmacy/data/rx-data.js
try { (() => {
// rx-data.js — ⚠ 초기 임시(PLACEHOLDER) 데이터. 사용자 확정 원문이 아님.
//   실제 확정 데이터는 rx-prescriptions.js(RX_PRESCRIPTIONS) / assessment-data.js.
//   pickPrescription이 아직 원문이 없는 항목(증상·마음강도·주의사항본문·작은실천·처방단어)을
//   여기서 임시로 채우며, merged._provisionalFields로 임시임을 표시한다.
//   감정별 원문이 줄글/시트로 전달되면 해당 항목을 실제 데이터로 교체할 것.
// opinion = 마음 소견(현재 상태 정리), intensity = 마음 강도.
const RX_DATA = {
  anxious: {
    symptom: "불안이 올라옴",
    intensity: "잔잔하지만 계속 차오름",
    opinion: "아직 오지 않은 일을 미리 짊어지느라 마음이 조금 지쳐 있는 상태예요. 걱정이 앞서 숨이 얕아졌을 수 있어요. 지금 필요한 건 모든 걸 해결하는 것이 아니라, 하나를 잠시 맡겨보는 연습입니다.",
    verse: "너희는 마음에 근심하지 말라 하나님을 믿으니 또 나를 믿으라",
    reference: "요한복음 14:1",
    dose: "숨을 고르고, 이 말씀을 천천히 3번 읽기",
    caution: "불안을 믿음 없음으로 정죄하지 말고, 하나님께 가져갈 신호로 보기",
    practice: "오늘 해결해야 할 일을 하나만 적고, 나머지는 잠시 내려놓기",
    word: "믿음"
  },
  broken: {
    symptom: "마음이 무너짐",
    intensity: "깊게 가라앉음",
    opinion: "마음이 크게 흔들리고, 스스로를 다그치느라 많이 지쳐 있는 상태예요. 무너진 것처럼 느껴지지만 아직 완전히 꺼지지 않았어요. 지금은 다시 세우기보다, 상한 마음을 그대로 안아줄 때입니다.",
    verse: "상한 갈대를 꺾지 아니하며 꺼져가는 등불을 끄지 아니하고",
    reference: "이사야 42:3",
    dose: "자기 전, 나를 몰아붙이는 말을 멈추고 천천히 읽기",
    caution: "말씀을 채찍처럼 받지 말고, 나를 살리는 초대로 받기",
    practice: "오늘 나에게 “아직 꺼지지 않았다”고 한 번 말해주기",
    word: "긍휼"
  },
  compare: {
    symptom: "자꾸 남과 비교됨",
    intensity: "은근하게 마음을 누름",
    opinion: "다른 사람과 나를 자꾸 견주며 마음이 작아져 있는 상태예요. 남의 속도가 크게 보여서 내 자리가 흐릿하게 느껴질 수 있어요. 지금은 견주기를 멈추고, 내게 맡겨진 몫을 다시 바라볼 때입니다.",
    verse: "각각 자기의 일을 살피라 그리하면 자랑할 것이 자기에게만 있고 남에게는 있지 아니하리니",
    reference: "갈라디아서 6:4",
    dose: "SNS를 잠시 닫고, 이 말씀을 천천히 읽기",
    caution: "비교를 죄로 정죄하지 말고, 내 자리를 확인하는 신호로 보기",
    practice: "오늘 내게 주어진 작은 것 하나에 감사하기",
    word: "사랑"
  },
  waiting: {
    symptom: "기다림이 버거움",
    intensity: "조급하게 일렁임",
    opinion: "기다림이 길어져 마음이 조급하고 지쳐 있는 상태예요. 아무 일도 일어나지 않는 것 같아 답답할 수 있어요. 하지만 지금의 기다림은 멈춤이 아니라, 약속을 향해 자라나는 시간입니다.",
    verse: "너희에게 인내가 필요함은 너희가 하나님의 뜻을 행한 후에 약속하신 것을 받기 위함이라",
    reference: "히브리서 10:36",
    dose: "조급함이 올라올 때, 이 말씀을 한 번 소리 내어 읽기",
    caution: "기다림을 실패로 여기지 말고, 자라는 시간으로 받기",
    practice: "결과를 재촉하지 말고, 오늘 할 수 있는 한 걸음만 걷기",
    word: "인내"
  },
  forgive: {
    symptom: "용서가 안 됨",
    intensity: "묵직하게 맺혀 있음",
    opinion: "풀리지 않은 마음 때문에 속이 무겁게 눌려 있는 상태예요. 용서하고 싶은데 마음이 따라주지 않아 힘들 수 있어요. 지금은 단번에 풀어내기보다, 조금씩 내려놓기를 시작할 때입니다.",
    verse: "서로 친절하게 하며 불쌍히 여기며 서로 용서하기를 하나님이 그리스도 안에서 너희를 용서하심과 같이 하라",
    reference: "에베소서 4:32",
    dose: "억지로 잊으려 말고, 이 말씀을 천천히 3번 읽기",
    caution: "용서를 감정의 완결로 여기지 말고, 매일의 선택으로 받기",
    practice: "오늘은 그 사람을 위해 한 문장만 기도해보기",
    word: "용서"
  },
  distant: {
    symptom: "하나님이 멀게 느껴짐",
    intensity: "고요하게 멀어짐",
    opinion: "하나님이 멀게 느껴져 마음이 외롭고 허전한 상태예요. 아무 응답도 없는 것 같아 마음이 가라앉을 수 있어요. 하지만 느낌의 거리와 실제 관계는 다르며, 지금 이 순간에도 곁에 계십니다.",
    verse: "주의 말씀은 내 발에 등이요 내 길에 빛이니이다",
    reference: "시편 119:105",
    dose: "조용한 곳에서, 이 말씀을 천천히 읽으며 숨 고르기",
    caution: "느낌의 거리감을 관계의 단절로 오해하지 않기",
    practice: "오늘 짧게라도 말씀 한 구절을 눈으로 지나가기",
    word: "말씀"
  },
  calling: {
    symptom: "책임이 버거움",
    intensity: "무겁게 짓눌림",
    opinion: "맡은 자리가 버겁게 느껴져 마음이 무거운 상태예요. 잘 해내야 한다는 부담이 어깨를 누르고 있을 수 있어요. 지금은 전부를 증명하기보다, 한 걸음만 함께 걷기를 시작할 때입니다.",
    verse: "내 멍에는 쉽고 내 짐은 가벼움이라",
    reference: "마태복음 11:30",
    dose: "오늘 맡은 일 전체가 아니라, 지금 할 수 있는 한 걸음만 보기",
    caution: "사명을 성과로 증명하려 하지 말고, 하나님과 함께 걷는 길로 받기",
    practice: "오늘 해야 할 일 중 가장 작은 순종 하나만 정하기",
    word: "맡김"
  },
  thanks: {
    symptom: "감사가 사라짐",
    intensity: "메마르게 잦아듦",
    opinion: "마음이 메마르고, 좋은 것이 잘 보이지 않는 상태예요. 감사가 사라진 자신을 탓하게 될 수도 있어요. 하지만 감사는 억지로 짜내는 게 아니라, 작은 것을 다시 발견하는 연습입니다.",
    verse: "범사에 감사하라 이것이 그리스도 예수 안에서 너희를 향하신 하나님의 뜻이니라",
    reference: "데살로니가전서 5:18",
    dose: "잠들기 전, 오늘 있었던 작은 일 하나를 떠올리며 읽기",
    caution: "감사를 억지 감정으로 만들지 말고, 발견하는 연습으로 받기",
    practice: "오늘 하루 중 감사한 것 딱 한 가지만 적어보기",
    word: "감사"
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "mind-pharmacy/data/rx-data.js", error: String((e && e.message) || e) }); }

// mind-pharmacy/data/rx-prescriptions.js
try { (() => {
// rx-prescriptions.js — 감정별 A/B 처방전 (스프레드시트 연결).
// 시트에 자가문진 + A/B 처방전이 모두 있는 감정만 등록한다.
// 각 처방전: { num, state(내부상태), verse(성경원문·없으면 ''), reference(말씀 성구),
//              cognitive(인지오류), opinion(소견서), dose(복용법) }
const RX_PRESCRIPTIONS = {
  "anxious": {
    "A": [{
      "num": "A.1",
      "state": "말씀을 붙잡고 다시 서고 싶은 상태",
      "reference": "잠언 16:3",
      "verse": "너의 행사를 여호와께 맡기라 그리하면 너의 경영하는 것이 이루리라.",
      "cognitive": "내가 모든 것을 붙잡고 버텨야 결과가 잘 나온다. 맡기는 것은 책임을 버리는 것이다.",
      "opinion": "당신의 불안은 약해서 생긴 마음이 아니라, 맡겨진 일을 진심으로 대하고 있기 때문에 올라온 긴장일 수 있어요.\n\n하지만 오늘 모든 것을 다 붙잡지 않아도 괜찮아요. 당신의 몫은 오늘 할 수 있는 한 걸음이고, 결과를 이끄시는 분은 하나님입니다.\n\n오늘은 더 세게 버티는 날이 아니라, 다시 하나님께 맡기는 날입니다.\n\n맡긴다는 것은 책임을 버리는 것이 아니라, 책임의 주인을 하나님께 돌려드리는 것입니다. 나는 오늘의 한 걸음을 드리고, 완성은 하나님께 맡깁니다.",
      "dose": "오늘 해야 할 모든 일을 한꺼번에 떠올리기보다, 이 질문 하나만 해보세요.\n“주님, 오늘 제가 할 수 있는 한 걸음은 무엇입니까?”",
      "caution": "하나님께 맡긴다는 것은 해야 할 일을 포기하는 것이 아닙니다. 내가 감당할 몫은 성실히 하되, 결과까지 혼자 책임지려 하지 않아도 괜찮습니다.",
      "practice": "지금 붙잡고 있는 일 하나를 떠올려 보세요. 내가 오늘 할 수 있는 일과 하나님께 맡겨야 할 일을 나누어 말한 뒤, 오늘 할 수 있는 것 하나만 해보세요."
    }, {
      "num": "A.2",
      "state": "계획과 방향이 불확실해서 흔들리는 상태",
      "reference": "잠언 16:9",
      "verse": "사람이 마음으로 자기의 길을 계획할지라도 그 걸음을 인도하는 자는 여호와시니라",
      "cognitive": "앞길이 다 보여야만 안심할 수 있다. 모든 길을 내가 통제하지 못하면 불안하다.",
      "opinion": "지금은 앞길이 다 보여야만 안심될 만큼 마음이 긴장되어 있을 수 있어요.\n하지만 하나님은 전체 지도를 한 번에 주시기보다, 오늘 걸을 만큼의 빛으로 인도하실 때가 있습니다.\n\n계획이 무의미한 것이 아니라, 계획보다 더 크신 하나님이 당신의 걸음을 붙들고 계시다는 말씀입니다.",
      "dose": "오늘 결정해야 할 모든 일을 한꺼번에 붙잡기보다, 이렇게 기도해보세요.\n“주님, 지금 제가 걸어야 할 다음 걸음을 보여주세요.”\n\n오늘은 모든 길을 통제하려는 자리에서, 하나님이 인도하시는 다음 걸음을 구하는 자리로 옮겨가는 날입니다.",
      "caution": "다음 걸음이 아직 보이지 않는다고 해서 길을 잘못 가고 있는 것은 아닙니다. 모든 길을 한꺼번에 알아야만 움직일 수 있는 것도 아닙니다.",
      "practice": "오늘 내가 분명히 할 수 있는 다음 행동 하나만 적어보세요. 그다음 일은 ‘지금은 몰라도 괜찮아’라고 말하며 잠시 내려놓아 보세요."
    }, {
      "num": "A.3",
      "state": "생각과 마음이 너무 많은 것을 동시에 들고 있어서, 걱정에 끌려가는 상태",
      "reference": "빌립보서 4:6-7",
      "verse": "아무 것도 염려하지 말고 오직 모든 일에 기도와 간구로 너희 구할 것을 감사함으로 하나님께 아뢰라 그리하면 모든 지각에 뛰어난 하나님의 평강이 그리스도 예수 안에서 너희 마음과 생각을 지키시리라",
      "cognitive": "걱정을 다 해결해야 마음이 놓인다. 내가 원하는 답을 얻어야만 이 불안이 끝난다.",
      "opinion": "걱정이 많다는 건 무너졌다는 뜻이 아니라,\n생각과 마음이 너무 많은 것을 동시에 들고 있다는 뜻일 수 있어요.\n\n오늘은 걱정을 붙잡고 결론을 내리는 날이 아니라,\n내가 무엇을 두려워하고 무엇을 너무 빨리 얻고 싶어 하는지\n하나님 앞에서 다시 바라보는 날입니다.",
      "dose": "오늘 가장 크게 떠오르는 걱정 하나를 짧게 적어보세요. 그리고 아래 순서대로 천천히 말해보세요.\n“하나님, 제가 지금 이 일을 붙잡고 조급해하고 있습니다. 제가 원하는 답에만 마음이 묶이지 않게 해주세요. 이 걱정 때문에 보지 못하고 있던 것을 보게 해주세요. 이미 주신 돌봄, 아직 남아 있는 길, 오늘 할 수 있는 작은 한 걸음을 보게 해주세요.”\n\n이 말씀은 걱정을 없애는 말이 아니라, 염려에 끌려가느라 좁아진 마음을 하나님 앞에서 다시 넓히는 말씀입니다.",
      "caution": "기도한 뒤에도 걱정이 바로 사라지지 않을 수 있습니다. 그렇다고 기도가 헛되거나 하나님께서 내 마음을 외면하신 것은 아닙니다.",
      "practice": "머릿속에서 가장 크게 떠오르는 걱정 하나만 골라보세요. 오늘은 그 한 가지를 하나님께 말씀드리고, 나머지는 내일 다시 생각해도 괜찮다고 스스로에게 말해보세요."
    }, {
      "num": "A.4",
      "state": "내가 붙잡고 있어야 안심되는 상태",
      "reference": "베드로전서 5:7",
      "verse": "너희 염려를 다 주께 맡겨 버리라 이는 저가 너희를 권고하심이니라",
      "cognitive": "내가 붙잡고 통제해야 안전하다. 손을 놓으면 일이 잘못될 것이다.",
      "opinion": "당신이 붙잡고 있는 것은 대충 넘길 수 없는 소중한 일일 수 있어요.\n불안할 때 사람이 무엇이든 붙잡고 싶어지는 건 자연스러운 마음입니다.\n\n다만 사람은 모든 것을 다 통제할 수 없기에,\n붙잡으려 할수록 마음이 더 긴장될 때가 있어요.\n\n오늘은 붙잡은 것을 억지로 버리는 날이 아니라,\n나보다 크신 하나님 앞에 올려드리는 연습을 하는 날입니다.",
      "dose": "손을 천천히 펴고, 이렇게 말해보세요.\n“주님, 제가 이것을 붙잡아야 안심된다고 느끼고 있습니다. 하지만 제가 다 붙잡을 수 없는 사람임을 압니다. 제가 붙잡은 이 마음을 주님 앞에 올려드립니다. 저보다 크신 돌봄 안에서 다시 맡기는 법을 배우게 해주세요.”\n\n하나님께 맡기는 것은 포기가 아니라, 내 손보다 크신 돌봄 안에 올려드리는 것입니다.",
      "caution": "손을 놓는다고 해서 무책임해지는 것은 아닙니다. 내가 다 붙잡을 수 없다는 사실을 인정하는 것도 믿음의 한 모습입니다.",
      "practice": "주먹을 천천히 펴고 30초만 그대로 있어 보세요. 그동안 ‘하나님, 제가 다 붙잡지 않아도 주께서 돌보고 계심을 믿고 싶습니다’라고 말해보세요."
    }, {
      "num": "A.5",
      "state": "두려움이 섞인 불안으로 생각과 마음이 흔들리는 상태",
      "reference": "이사야 41:10",
      "verse": "두려워 말라 내가 너와 함께 함이니라 놀라지 말라 나는 네 하나님이 됨이니라 내가 너를 굳세게 하리라 참으로 너를 도와 주리라 참으로 나의 의로운 오른손으로 너를 붙들리라",
      "cognitive": "두려움이 완전히 사라져야만 다시 설 수 있다. 이 두려움은 내가 감당할 수 없다.",
      "opinion": "지금 필요한 건 더 세게 버티는 힘이 아니라,\n다시 중심을 잡는 힘일 수 있어요.\n\n불안이 커지면 생각은 앞서가고,\n마음은 작아지고,\n두려움 때문에 내가 감당할 수 있을지 확신이 흐려질 수 있습니다.\n\n하지만 하나님은 당신을 멀리서 지켜보시는 분이 아니라,\n두려움 속에서도 당신의 생각과 마음을 붙드시는 분입니다.\n\n붙드신다는 것은 두려움을 없던 일로 만드는 것이 아니라,\n두려움 속에서도 생각과 마음이 하나님 안에서 다시 지켜지게 하신다는 뜻입니다.",
      "dose": "오늘 불안이 올라올 때, 천천히 말해보세요.\n“주님이 나를 붙드신다. 내 생각과 마음을 지키신다.”\n\n또는 조금 더 기도문처럼,\n“주님, 제가 지금 두렵습니다. 생각은 앞서가고 마음은 작아지고 있습니다. 저를 붙드시는 주님 안에서 제 생각과 마음이 다시 지켜지게 해주세요.”",
      "caution": "두려움이 남아 있다고 해서 이미 무너진 것은 아닙니다. 두려운 마음을 안고도 오늘을 지나고 있는 것 자체가 충분히 귀한 걸음입니다.",
      "practice": "두 발이 바닥에 닿아 있는 감각을 느끼며 천천히 세 번 숨을 쉬어보세요. 숨을 내쉴 때마다 ‘하나님이 지금도 나를 붙들고 계신다’고 마음속으로 말해보세요."
    }],
    "B": [{
      "num": "B.1",
      "state": "두려움이 크고, 기도할 말조차 잘 정리되지 않는 상태",
      "reference": "로마서 8:26",
      "verse": "이와 같이 성령도 우리 연약함을 도우시나니 우리가 마땅히 빌 바를 알지 못하나 오직 성령이 말할 수 없는 탄식으로 우리를 위하여 친히 간구하시느니라",
      "cognitive": "제대로 기도하지 못하면 하나님도 내 마음을 이해하실 수 없다. 불안한 나는 믿음 밖에 있다.",
      "opinion": "지금 불안하다는 건 믿음 밖에 있다는 뜻이 아니에요.\n마음이 너무 지치면, 무엇을 구해야 할지조차 흐려질 수 있습니다.\n\n말로 정리되지 않는 불안도,\n탄식처럼 남은 마음도 하나님 앞에 놓일 수 있어요.\n\n하나님은 분명한 말과 단정한 기도만 받으시는 분이 아니라,\n말이 되지 않는 마음까지 아시는 분입니다.\n\n오늘은 긴 기도를 완성하는 날이 아니라,\n그 마음 그대로 하나님께 아주 작게 기대어도 되는 날입니다.",
      "dose": "오늘은 긴 기도를 만들지 않아도 괜찮아요. 이 한 문장만 천천히 말해보세요.\n“하나님, 제가 무엇을 구해야 할지도 잘 모르겠습니다. 말이 잘 나오지 않지만, 이 마음 그대로 주님 앞에 있습니다. 제 안의 탄식까지 아시는 주님, 저를 도와주세요.”",
      "caution": "기도가 문장으로 잘 나오지 않아도 괜찮습니다. 하나님은 정리된 말뿐 아니라 말이 되지 않는 마음까지 아십니다.",
      "practice": "긴 기도를 하려 하지 말고, 지금 마음에 가장 가까운 말 한마디만 하나님께 드려보세요. ‘무서워요’, ‘모르겠어요’처럼 짧아도 괜찮습니다."
    }, {
      "num": "B.2",
      "state": "걱정을 붙잡느라 마음이 쉴 수 없는 상태",
      "reference": "마태복음 6:26-27",
      "verse": "공중의 새를 보라 심지도 않고 거두지도 않고 창고에 모아들이지도 아니하되 너희 하늘 아버지께서 기르시나니 너희는 이것들보다 귀하지 아니하냐 너희 중에 누가 염려함으로 그 키를 한 자라도 더할 수 있겠느냐",
      "cognitive": "내가 계속 걱정하고 대비해야 안전하다. 걱정을 놓으면 나쁜 일이 생길 것이다.",
      "opinion": "지금 걱정이 많다는 건 마음이 약해서가 아니에요.\n소중한 것이 있기 때문에 마음이 계속 애쓰는 것일 수 있습니다.\n\n사람은 불안할수록 더 많이 생각하고,\n더 많이 붙잡아야 안전하다고 느낄 수 있어요.\n\n하지만 하나님은 당신의 필요를 모르시는 분이 아닙니다.\n공중의 새를 먹이시고 들의 꽃을 입히시는 분이\n당신을 귀하게 여기신다고 말씀하십니다.\n\n그러니 오늘은 걱정을 억지로 끊어내는 날이 아니라,\n“내가 이 걱정을 붙잡아야만 안전한 걸까?”를\n하나님의 돌봄 안에서 조용히 다시 바라보는 날입니다.",
      "dose": "오늘 가장 오래 붙잡고 있는 걱정 하나를 떠올려보세요. 그리고 천천히 이렇게 말해보세요.\n“하나님, 제가 이 걱정을 붙잡고 있어야 안전하다고 느낍니다. 하지만 주님은 제 필요를 모르시는 분이 아님을 기억하고 싶습니다. 제가 귀한 존재라는 사실 안에서, 이 염려를 조금씩 주님 앞에 내려놓게 해주세요.”",
      "caution": "걱정을 잠시 내려놓는다고 해서 현실적인 준비까지 포기하는 것은 아닙니다. 쉬어가는 동안에도 하나님께서는 당신을 돌보고 계십니다.",
      "practice": "창밖의 나무나 곁에 있는 화분처럼 살아 있는 것 하나를 잠시 바라보세요. 그 생명을 돌보시는 하나님께서 나도 지나치지 않으신다는 사실을 떠올려 보세요."
    }, {
      "num": "B.3",
      "state": "내가 붙잡고 있어야 안심되는 상태",
      "reference": "시편 55:22",
      "verse": "네 짐을 여호와께 맡겨 버리라 너를 붙드시고 의인의 요동함을 영영히 허락지 아니하시리로다",
      "cognitive": "이 짐은 내가 혼자 끝까지 들고 있어야 한다. 놓으면 안전하지 않다.",
      "opinion": "당신이 붙잡고 있던 걱정은\n마음이 혼자 들고 있던 짐일 수 있어요.\n\n그 짐을 붙잡고 있었던 건\n믿음이 없어서가 아니라,\n어떻게든 감당해보려고 애써왔기 때문입니다.\n\n사람은 불안할수록\n놓지 않아야 안전하다고 느낄 때가 있어요.\n하지만 오래 들고 있을수록\n마음은 더 긴장되고 지칠 수 있습니다.\n\n오늘은 그 짐을 억지로 버리는 날이 아니라,\n“내가 이만큼 애써왔구나” 하고 알아차리는 날입니다.\n\n그리고 이제는 그 짐을\n혼자 끝까지 들고 있지 않아도 괜찮아요.\n나를 붙드시는 하나님께 조금씩 옮겨드릴 수 있습니다.",
      "dose": "오늘 가장 오래 붙잡고 있던 걱정 하나를 떠올려보세요. 그리고 그 걱정에 이렇게 이름 붙여보세요.\n“이건 내가 혼자 들고 있던 짐이었구나.”\n그다음 천천히 말해보세요.\n“하나님, 제가 이 걱정을 오래 들고 있었습니다. 그만큼 애써온 제 마음을 알아주세요. 제가 다 들 수 없는 이 짐을 주님께 조금씩 맡기는 법을 배우게 해주세요.”",
      "caution": "짐을 맡기는 것은 도망치는 일이 아닙니다. 너무 오래 혼자 버텨온 마음을 이제는 하나님께 보여드리는 일입니다.",
      "practice": "가장 무겁게 느껴지는 일을 한 문장으로 적어보세요. 다 적은 뒤 종이를 내려놓으며 ‘하나님, 이 짐을 혼자 들지 않게 해주세요’라고 말해보세요."
    }, {
      "num": "B.4",
      "state": "내일의 걱정까지 오늘 미리 짊어지고 있는 상태",
      "reference": "마태복음 6:34",
      "verse": "그러므로 내일 일을 위하여 염려하지 말라 내일 일은 내일 염려할 것이요 한 날 괴로움은 그 날에 족하니라",
      "cognitive": "내일 일을 오늘 미리 다 대비해야 한다. 지금 준비하지 못하면 감당할 수 없을 것이다.",
      "opinion": "당신이 내일을 걱정하는 건 이상한 일이 아니에요.\n앞으로 감당해야 할 일이 있고,\n지키고 싶은 것들이 있기 때문일 수 있습니다.\n\n불안은 아직 오지 않은 일을\n오늘의 마음 안으로 미리 끌고 들어옵니다.\n\n그래서 몸은 오늘에 있는데,\n마음은 내일의 문제까지 미리 살아내느라 지칠 수 있어요.\n\n하지만 오늘의 마음은\n내일의 짐까지 다 들도록 만들어지지 않았습니다.\n\n오늘은 내일을 외면하는 날이 아니라,\n내일의 짐을 내일의 자리로 돌려놓고\n오늘 하나님이 주시는 한 걸음을 보는 날입니다.",
      "dose": "오늘 가장 크게 걱정되는 내일의 일을 하나 떠올려보세요. 그리고 이렇게 이름 붙여보세요.\n“이건 오늘 다 살아낼 일이 아니라, 내일 하나님 앞에서 다시 만날 일이다.”\n그다음 천천히 말해보세요.\n“주님, 제가 내일의 일까지 오늘 미리 감당하려 했습니다. 그래서 제 마음이 너무 지쳤습니다. 내일의 짐은 내일 주님 앞에서 만나게 하시고, 오늘 제게 맡겨진 한 걸음만 보게 해주세요.”",
      "caution": "내일의 일을 오늘 다 해결하지 않아도 괜찮습니다. 오늘을 살아갈 힘을 남겨두는 것도 필요한 준비입니다.",
      "practice": "내일 걱정이 떠오르면 ‘이 일은 내일 다시 생각해도 괜찮아’라고 말해보세요. 잊을까 걱정된다면 노트 한쪽에 적어두고, 오늘 해야 할 일로 돌아오세요."
    }, {
      "num": "B.5",
      "state": "모든 가능성을 미리 계산해야 안심되는 상태",
      "reference": "시편 55:22",
      "verse": "네 짐을 여호와께 맡겨 버리라 너를 붙드시고 의인의 요동함을 영영히 허락지 아니하시리로다",
      "cognitive": "모든 경우의 수를 미리 계산해야 한다. 내가 대비하지 못한 일이 생기면 감당할 수 없을 것 같다.",
      "opinion": "모든 경우를 미리 계산하려는 마음은\n겁이 많아서가 아니라,\n무너지지 않으려는 마음의 애씀일 수 있어요.\n\n당신은 대충 넘기고 싶은 것이 아니라,\n잘 감당하고 싶어서 더 많이 생각해왔을 수 있습니다.\n\n하지만 모든 가능성을 끝까지 붙잡고 있으면\n마음은 점점 더 긴장되고,\n내가 다 책임져야 할 것처럼 무거워질 수 있어요.\n\n오늘은 책임을 버리는 날이 아니라,\n내가 들 수 있는 몫과\n하나님께 맡겨야 할 짐을 구별하는 날입니다.",
      "dose": "오늘 머릿속에서 계속 계산하고 있는 걱정 하나를 떠올려보세요. 그리고 천천히 말해보세요.\n“주님, 제가 모든 경우를 다 계산해야 안심된다고 느낍니다. 잘 감당하고 싶어서 여기까지 애써왔습니다. 하지만 제 마음이 이 무게를 다 들 수 없음을 압니다. 제가 감당할 몫과 주님께 맡길 짐을 구별하게 해주세요.”",
      "caution": "모든 가능성을 미리 계산하지 않아도 오늘 하루를 살아갈 수 있습니다. 아직 일어나지 않은 일을 미리 다 감당하려 하지 않아도 괜찮습니다.",
      "practice": "머릿속을 맴도는 ‘만약에’ 하나를 적어보세요. 그 옆에 ‘아직 일어나지 않은 일’이라고 적고, 잠시 눈을 감아 생각을 멈춰보세요."
    }]
  },
  "thanks": {
    "A": [{
      "num": "A.1",
      "state": "감사하지 못하면 하나님의 사랑에서 멀어질 것 같아요",
      "reference": "로마서 5:8",
      "verse": "우리가 아직 죄인 되었을 때에 그리스도께서 우리를 위하여 죽으심으로 하나님께서 우리에게 대한 자기의 사랑을 확증하셨느니라",
      "cognitive": "감사하는 모습을 충분히 보여야 하나님께서 나를 사랑하실 것이다.",
      "opinion": "하나님의 사랑은 당신의 감사가 충분해진 뒤에 시작되지 않았습니다. 하나님께서는 우리가 먼저 합당한 태도와 좋은 모습을 갖추었기 때문에 사랑하신 것이 아니라, 아직 온전하지 않았을 때 먼저 사랑을 보이셨습니다. 감사의 말을 찾지 못하는 지금도 그 사랑은 줄어들지 않습니다.\n\n하나님은 감사의 결과만 보시며 당신을 평가하시는 분이 아닙니다. 마음이 메말라 있는데도 하나님을 놓치고 싶지 않아 이 자리에 머무는 과정과, 감사하지 못하는 자신을 두고 고민하는 마음까지 보고 계십니다. 당신은 감사를 잘해야 사랑받는 사람이 아니라, 이미 하나님의 사랑을 받고 있는 사람입니다.",
      "dose": "오늘은 감사한 것을 억지로 찾아내기 전에 “하나님, 지금은 감사하다는 말이 잘 나오지 않습니다”라고 솔직히 말씀드려 보세요. 좋은 태도를 보여 드리려 마음을 포장하지 않아도 됩니다.\n\n그다음 “하나님의 사랑은 내가 감사하는 정도에 따라 달라지지 않는다”라는 문장을 천천히 읽어 보세요. 마지막으로 “하나님께서 지금도 나와 함께하시며, 이미 내 삶에 동행하고 계심을 받아들입니다”라고 고백해 보세요.",
      "caution": "감사의 말을 찾지 못한다고 해서 하나님의 사랑이 줄어드는 것은 아닙니다. 감사가 잘 나오지 않는 마음까지도 하나님께 솔직히 보여드릴 수 있습니다.",
      "practice": "억지로 감사한 일을 찾기 전에 ‘하나님, 지금은 감사가 잘 나오지 않아요’라고 솔직하게 말해보세요."
    }, {
      "num": "A.2",
      "state": "상황이 나아져야 감사할 수 있을 것 같아요",
      "reference": "하박국 3:17-18",
      "verse": "비록 무화과나무가 무성치 못하며 포도나무에 열매가 없으며 감람나무에 소출이 없으며 밭에 식물이 없으며 우리에 양이 없으며 외양간에 소가 없을찌라도 나는 여호와를 인하여 즐거워하며 나의 구원의 하나님을 인하여 기뻐하리로다",
      "cognitive": "내가 원하는 결과가 생겨야 하나님께 감사할 이유가 생긴다.",
      "opinion": "감사는 상황이 괜찮다고 스스로를 설득하는 말이 아닙니다. 하박국도 아무 어려움이 없었기 때문에 기뻐한 것이 아니라, 눈에 보이는 열매가 없는 현실을 그대로 인정하면서도 하나님이 여전히 자신의 구원이심을 바라보았습니다. 감사는 부족함을 부정하는 태도가 아니라, 부족함 속에서도 사라지지 않은 하나님을 알아보는 태도입니다.\n\n하나님은 당신에게 상황을 좋게 해석하여 무조건 감사하라고 요구하시는 분이 아닙니다. 결과가 보이지 않아 지친 시간에도 당신의 생명을 붙들고, 말씀을 주며, 다시 하나님을 바라볼 수 있도록 기다리고 계십니다. 원하는 결과가 아직 없더라도 하나님께서 당신을 사랑하며 함께 걸어오신 과정까지 없어진 것은 아닙니다.",
      "dose": "오늘은 현재의 어려움을 지우지 말고 한 문장으로 인정해 보세요. “아직 달라지지 않은 것이 있어서 속상합니다”, “기다리는 시간이 길어 지쳤습니다”처럼 지금의 마음을 그대로 하나님께 말씀드리면 됩니다.\n\n그 아래에 감사의 이유를 억지로 여러 개 적지 않아도 됩니다. “이 상황에서도 하나님께서 나를 버리지 않으셨다는 사실은 남아 있습니다”라고 고백해 보세요. 상황 자체를 감사하려 애쓰기보다, 상황보다 오래 함께하시는 하나님을 바라보는 시간입니다.",
      "caution": "상황이 달라지지 않았다고 해서 하나님께서 함께하지 않으시는 것은 아닙니다. 힘든 현실을 인정하면서도 하나님의 동행을 바라볼 수 있습니다.",
      "practice": "지금 힘든 일을 한 문장으로 적어보세요. 그 아래 ‘그래도 하나님은 나를 떠나지 않으셨다’라고 덧붙여 보세요."
    }, {
      "num": "A.3",
      "state": "감사하지 못하는 것은 믿음이 부족하다는 뜻 같아요",
      "reference": "시편 103:13-14",
      "verse": "아비가 자식을 불쌍히 여김 같이 여호와께서 자기를 경외하는 자를 불쌍히 여기시나니 이는 저가 우리의 체질을 아시며 우리가 진토임을 기억하심이로다",
      "cognitive": "믿음이 있다면 지치거나 서운해하지 않고 언제나 감사할 수 있어야 한다.",
      "opinion": "감사하지 못하는 순간이 있다고 해서 당신의 믿음 전체가 사라진 것은 아닙니다. 하나님은 사람이 언제나 같은 힘과 감정을 유지할 수 없는 존재임을 알고 계십니다. 우리의 체질을 아신다는 말씀은 하나님께서 연약함을 예상하지 못해 실망하시는 분이 아니라는 뜻입니다.\n\n하나님은 당신에게 완벽한 감정 상태를 요구한 뒤 사랑하시는 분이 아닙니다. 말씀을 따라 살고 싶지만 마음이 따라오지 않는 날과, 감사보다 피로가 먼저 올라오는 과정도 알고 계십니다. 하나님께서는 감사의 표현만 보시는 것이 아니라, 힘이 부족한 중에도 하나님께 돌아오려는 당신의 생명과 마음을 귀하게 여기십니다.",
      "dose": "오늘은 “왜 나는 감사하지 못할까”라고 자신을 판단하는 대신 “지금 내 마음은 무엇 때문에 지쳤을까”라고 물어보세요. 감사 부족을 바로잡기 전에 마음이 힘을 잃은 이유부터 하나님 앞에서 천천히 살펴보는 것입니다.\n\n답이 떠오르지 않아도 괜찮습니다. “하나님, 제 체질과 지금의 한계를 아시는 분이 저를 불쌍히 여겨 주세요”라고 짧게 말씀드려 보세요. 오늘은 감사의 양을 늘리기보다, 연약한 자신을 향한 하나님의 이해와 사랑을 받아들이는 것이 먼저입니다.",
      "caution": "지치거나 서운한 마음이 든다고 해서 믿음이 부족한 것은 아닙니다. 하나님은 지금의 마음과 형편을 모두 아십니다.",
      "practice": "감사하지 못하는 자신을 탓하는 대신 ‘하나님은 내 연약함을 아신다’는 말씀을 천천히 읽어보세요."
    }, {
      "num": "A.4",
      "state": "이미 받은 것들은 너무 익숙해서 잘 보이지 않아요",
      "reference": "시편 103:2-5",
      "verse": "내 영혼아 여호와를 송축하며 그 모든 은택을 잊지 말찌어다 저가 네 모든 죄악을 사하시며 네 모든 병을 고치시며 네 생명을 파멸에서 구속하시고 인자와 긍휼로 관을 씌우시며 좋은 것으로 네 소원을 만족케 하사 네 청춘으로 독수리 같이 새롭게 하시는도다",
      "cognitive": "익숙하게 반복되는 것은 특별한 은혜가 아니며 감사할 가치도 없다.",
      "opinion": "오랫동안 곁에 있던 것은 쉽게 배경처럼 느껴질 수 있습니다. 그러나 익숙하다는 이유로 그 가치가 작아지는 것은 아닙니다. 오늘도 생명이 이어지고, 다시 시작할 기회가 주어지고, 하나님께 돌아갈 수 있다는 사실은 반복되기 때문에 평범해진 것이 아니라 하나님의 돌보심이 계속되고 있다는 흔적입니다.\n\n하나님은 특별한 성취나 극적인 결과를 만들어 낸 사람만 기뻐하시는 분이 아닙니다. 하나님께서 생명을 주셨기 때문에 살아 있는 당신과, 그 생명으로 오늘을 지나며 하나님을 알아 가는 과정 자체를 사랑하십니다. 감사는 대단한 일을 찾아내는 능력이 아니라, 이미 오래 곁에 있었던 사랑을 다시 알아보는 데서 시작될 수 있습니다.",
      "dose": "오늘은 감사한 일을 여러 개 찾아내지 않아도 됩니다. 당연하게 지나쳤던 것 가운데 오늘도 내 곁에 있었던 것 하나만 천천히 바라보세요. 물을 마실 수 있었던 일, 쉴 자리가 있었던 일, 누군가의 짧은 연락처럼 작고 익숙한 것이어도 됩니다.\n\n아직 감사한 마음이 생기지 않아도 괜찮습니다. “이것도 오늘 내 곁에 있었구나” 하고 바라보며, 하나님께서 익숙한 하루 속에서도 나를 돌보고 계셨음을 천천히 마음에 담아 보세요.",
      "caution": "익숙해서 잘 보이지 않는 것도 여전히 매일 주어지는 은혜일 수 있습니다. 특별한 감정이 생기지 않아도 괜찮습니다.",
      "practice": "오늘 너무 익숙해서 지나쳤던 것 하나를 떠올려 보세요. 숨, 잠, 한 끼처럼 평범한 것의 이름을 조용히 불러보세요."
    }, {
      "num": "A.5",
      "state": "감사한다면 항상 밝고 기뻐야 할 것 같아요",
      "reference": "시편 13:5-6",
      "verse": "나는 오직 주의 인자하심을 의뢰하였사오니 내 마음은 주의 구원을 기뻐하리이다 내가 여호와를 찬송하리니 이는 나를 후대하심이로다",
      "cognitive": "슬픔이나 서운함이 남아 있다면 진실한 감사라고 할 수 없다.",
      "opinion": "성경의 감사는 슬픔이 모두 사라진 사람만 드리는 고백이 아닙니다. 시편 13편은 앞부분에서 하나님께 자신의 답답함과 기다림을 솔직히 말한 뒤, 하나님의 인자하심을 다시 의지합니다. 힘든 감정을 말하는 것과 하나님을 신뢰하는 것은 서로 반대되지 않습니다.\n\n하나님은 밝은 표정과 긍정적인 말만 사랑하시는 분이 아닙니다. 울면서도 하나님을 찾는 사람과, 서운함이 남아 있어도 관계를 끊지 않고 말씀을 붙드는 사람의 과정도 귀하게 보십니다. 감사는 아픔을 감추는 미소가 아니라, 아픔을 하나님께 말한 뒤에도 그분의 사랑을 완전히 놓지 않는 고백이 될 수 있습니다.",
      "dose": "오늘은 마음속에 함께 존재하는 두 가지를 모두 하나님께 말씀드려 보세요. 먼저 “저는 이것 때문에 속상합니다”라고 말하고, 이어서 “그래도 하나님의 사랑까지 없어진 것은 아니라는 사실을 붙들고 싶습니다”라고 말해 보세요.\n\n기뻐지려고 애쓰거나 감사한 표정을 만들 필요는 없습니다. 오늘의 감사는 힘든 마음을 숨기지 않은 채 하나님과의 관계 안에 머무는 것입니다. 하나님은 감사의 말을 잘하거나 좋은 모습을 보여서 당신을 사랑하시는 분이 아닙니다.",
      "caution": "슬픔이나 서운함이 남아 있어도 감사가 거짓이 되는 것은 아닙니다. 서로 다른 감정이 함께 있어도 괜찮습니다.",
      "practice": "밝은 마음을 억지로 만들지 말고 ‘지금은 슬프지만, 그래도 함께하신 주님을 기억하고 싶어요’라고 말해보세요."
    }],
    "B": [{
      "num": "B.1",
      "state": "좋은 것이 있어도 아무런 느낌이 들지 않아요",
      "reference": "예레미야애가 3:22-23",
      "verse": "여호와의 자비와 긍휼이 무궁하시므로 우리가 진멸되지 아니함이니이다 이것이 아침마다 새로우니 주의 성실이 크도소이다",
      "cognitive": "감사한 감정이 느껴지지 않으면 하나님의 돌보심도 내게 없는 것이다.",
      "opinion": "마음이 오래 지치면 좋은 것을 보아도 감정이 움직이지 않을 수 있습니다. 이것은 하나님께서 당신을 돌보지 않으신다는 증거가 아니라, 지금 마음이 먼저 쉬어야 한다는 신호일 수 있습니다. 감정이 무뎌졌다고 해서 하나님의 자비와 긍휼까지 멈춘 것은 아닙니다.\n\n하나님의 사랑은 당신이 그것을 선명하게 느끼는 날에만 존재하지 않습니다. 잠든 동안에도 아침을 주시고, 아무것도 해내지 못한 날에도 생명을 이어 가게 하며, 다시 하나님을 찾을 수 있도록 기다리십니다. 지금은 사랑을 느끼지 못하더라도 하나님께서는 살아 있는 당신과 오늘을 지나고 있는 그 과정 자체를 여전히 귀히 여기십니다.",
      "dose": "오늘은 감사한 감정을 만들려고 하지 말고 몸과 마음을 먼저 편안하게 해 주세요. 물을 조금 마시거나, 편한 자세로 앉거나, 잠시 눈과 손을 쉬게 하는 것처럼 지금 가능한 돌봄 하나를 선택하면 됩니다.\n\n그 행동을 하면서 “하나님, 지금은 아무 느낌이 없지만 오늘도 저를 지나치지 않으신다는 사실을 믿고 싶습니다”라고 말씀드려 보세요. 감사의 감정이 생기지 않아도 괜찮습니다. 오늘은 하나님의 돌보심을 느끼려 애쓰기보다, 그 돌보심 안에서 잠시 쉬어 가세요.",
      "caution": "감사한 감정이 느껴지지 않아도 하나님의 자비가 사라진 것은 아닙니다. 지금은 마음보다 몸을 먼저 쉬게 해도 괜찮습니다.",
      "practice": "감사를 찾으려 애쓰기보다 물 한 잔 마시기나 편한 자세로 눕기처럼 지금 가능한 돌봄 하나를 해보세요."
    }, {
      "num": "B.2",
      "state": "오늘을 견디는 것만으로도 힘들어요",
      "reference": "이사야 40:29",
      "verse": "피곤한 자에게는 능력을 주시며 무능한 자에게는 힘을 더하시나니",
      "cognitive": "감사할 힘조차 없으면 하나님 앞에서 아무것도 하고 있지 않은 것이다.",
      "opinion": "오늘을 견디는 데 모든 힘을 사용했다면 감사의 말을 만들 여유가 없을 수 있습니다. 하나님께서는 힘이 남아 있는 사람에게만 가까이 가시는 분이 아닙니다. 오히려 피곤하고 힘이 없는 사람에게 능력을 주신다고 말씀하십니다. 지금은 당신이 무언가를 더 드려야 하는 시간이 아니라, 하나님께 도움을 받아야 하는 시간일 수 있습니다.\n\n하나님은 당신이 많은 일을 해내거나 풍성한 감사를 표현했기 때문에 사랑하시는 것이 아닙니다. 생명을 주신 하나님께서는 그 생명이 지치고 힘들어할 때도 외면하지 않으십니다. 오늘 겨우 버틴 것처럼 느껴져도, 하나님은 그 하루를 가볍게 보지 않으시며 여기까지 살아온 과정을 소중히 여기십니다.",
      "dose": "오늘은 감사 제목을 적는 대신 지금 하지 않아도 되는 일 하나를 내려놓아 보세요. 답장을 조금 늦추거나, 완벽하게 정리하려는 일을 멈추거나, 가능한 만큼 누워 쉬어도 됩니다. 쉼은 믿음이 부족해서 포기하는 행동이 아니라, 자신의 한계를 인정하며 하나님께 도움받는 행동이 될 수 있습니다.\n\n쉬는 동안 길게 기도하지 않아도 됩니다. “하나님, 오늘은 감사할 힘보다 버틸 힘이 필요합니다”라고 한 문장만 말씀드려 보세요. 하나님은 감사의 말을 많이 하는 모습만 아니라, 도움을 구하며 하나님께 기대는 모습도 귀하게 받아 주십니다.",
      "caution": "감사할 힘이 없다고 해서 하나님 앞에서 아무것도 하지 않은 것은 아닙니다. 오늘을 견딘 것만으로도 충분히 애쓴 하루입니다.",
      "practice": "감사 제목을 적는 대신 오늘 하지 않아도 되는 일 하나를 내려놓아 보세요. 그 시간만큼은 몸과 마음을 쉬게 해주세요."
    }, {
      "num": "B.3",
      "state": "감사한 것을 적으라는 말조차 부담스러워요",
      "reference": "시편 23:1-3",
      "verse": "여호와는 나의 목자시니 내가 부족함이 없으리로다 그가 나를 푸른 풀밭에 누이시며 쉴 만한 물가로 인도하시는도다 내 영혼을 소생시키시고 자기 이름을 위하여 의의 길로 인도하시는도다",
      "cognitive": "회복하려면 힘들더라도 감사 훈련부터 성실하게 수행해야 한다.",
      "opinion": "지친 마음에는 감사하는 일조차 새로운 과제가 될 수 있습니다. 하지만 목자는 지친 양에게 먼저 더 멀리 걸으라고 요구하지 않습니다. 푸른 풀밭에 눕게 하고 쉴 만한 물가로 인도하며, 약해진 생명이 다시 힘을 얻도록 돌봅니다. 지금 당신에게도 감사의 수행보다 영혼이 소생되는 시간이 먼저 필요할 수 있습니다.\n\n하나님은 당신이 회복 과제를 잘 수행했기 때문에 사랑하시는 분이 아닙니다. 아무것도 적지 못하고, 말씀을 오래 읽지 못하고, 가만히 누워 있는 시간에도 하나님께서 주신 생명의 가치는 줄어들지 않습니다. 하나님은 멈추어 있는 것처럼 보이는 시간에도 당신을 돌보며 다시 살아갈 힘을 준비하십니다.",
      "dose": "오늘은 감사 목록을 쓰지 않아도 됩니다. 종이를 펴거나 휴대전화를 들 힘이 없다면 그대로 쉬세요. 가능하다면 주변의 소리와 온도, 숨의 움직임처럼 지금 자신이 있는 자리만 잠시 느껴 보세요.\n\n그리고 “하나님, 오늘은 감사할 것을 찾기보다 주께서 저를 쉬게 해 주셨으면 좋겠습니다”라고 말해 보세요. 아무 말도 하기 어렵다면 시편 23편을 읽거나 듣는 것만으로도 충분합니다. 오늘은 무엇을 남기려 하기보다 하나님의 돌봄 안에서 쉬어 가세요.",
      "caution": "회복은 감사 과제를 잘 해내는 데서만 시작되는 것이 아닙니다. 지금은 먼저 쉬고 하나님의 돌보심을 받는 시간이 필요할 수 있습니다.",
      "practice": "감사한 일을 찾지 말고 ‘여호와는 나의 목자시니’라는 한 구절을 천천히 읽어보세요. 그 말에 기대어 잠시 쉬어도 괜찮습니다."
    }, {
      "num": "B.4",
      "state": "힘든 일이 계속되니 하나님의 사랑도 잘 믿어지지 않아요",
      "reference": "로마서 8:38-39",
      "verse": "내가 확신하노니 사망이나 생명이나 천사들이나 권세자들이나 현재 일이나 장래 일이나 능력이나 높음이나 깊음이나 다른 아무 피조물이라도 우리를 우리 주 그리스도 예수 안에 있는 하나님의 사랑에서 끊을 수 없으리라",
      "cognitive": "힘든 일이 계속되는 것은 하나님의 사랑이 나에게서 멀어졌다는 뜻이다.",
      "opinion": "어려움이 길어지면 하나님께서 나를 잊으신 것처럼 느껴질 수 있습니다. 그러나 힘든 상황과 하나님의 사랑은 같은 것이 아닙니다. 현재의 어려움이 크다는 이유로 하나님의 사랑이 작아진 것도 아니며, 그 사랑에서 당신이 밀려난 것도 아닙니다.\n\n하나님은 좋은 결과를 만들어 냈기 때문에 당신을 사랑하시는 분이 아닙니다. 하나님께서 생명을 주셨고 그 생명이 하나님과 함께 살아가고 있기 때문에, 기쁜 날뿐 아니라 흔들리고 질문하는 과정까지 사랑하십니다. 상황을 이해하지 못하고 감사가 나오지 않는 오늘도 당신은 하나님의 사랑 안에 있습니다.",
      "dose": "오늘은 현재의 상황을 감사하려고 애쓰지 않아도 됩니다. 대신 자신을 가장 힘들게 하는 일을 한 문장으로 말한 뒤 “이 일도 나를 하나님의 사랑에서 끊지는 못합니다”라고 덧붙여 보세요.\n\n그 문장이 바로 믿어지지 않아도 괜찮습니다. 믿음은 언제나 강한 확신으로만 나타나지 않습니다. 믿기 어려운 중에도 말씀을 다시 바라보는 행동 자체가 하나님과의 관계 안에 머무는 과정입니다. 오늘은 감사의 감정보다 끊어지지 않는 사랑을 먼저 붙드세요.",
      "caution": "힘든 일이 계속된다고 해서 하나님의 사랑이 멀어진 것은 아닙니다. 상황이 어렵다고 하나님의 마음까지 달라지는 것은 아닙니다.",
      "practice": "오늘 힘들었던 일 하나를 적어보세요. 그 아래 ‘이 순간에도 하나님의 사랑은 나를 떠나지 않았다’라고 한 문장 덧붙여 보세요."
    }, {
      "num": "B.5",
      "state": "하나님께 무슨 말을 해야 할지도 모르겠어요",
      "reference": "로마서 8:26",
      "verse": "이와 같이 성령도 우리 연약함을 도우시나니 우리가 마땅히 빌 바를 알지 못하나 오직 성령이 말할 수 없는 탄식으로 우리를 위하여 친히 간구하시느니라",
      "cognitive": "감사나 기도의 말을 제대로 표현하지 못하면 하나님께 내 마음이 전달되지 않는다.",
      "opinion": "마음이 너무 지치면 감사뿐 아니라 기도의 말도 떠오르지 않을 수 있습니다. 하지만 하나님께서는 말이 잘 정리된 사람만 이해하시는 분이 아닙니다. 우리가 무엇을 구해야 할지 모를 때에도 성령께서 연약함을 도우신다는 말씀은, 침묵과 탄식 속에서도 하나님과의 관계가 끊어지지 않는다는 뜻입니다.\n\n하나님은 당신의 표현 능력 때문에 사랑하시는 것이 아닙니다. 감사의 문장을 잘 만들지 못해도, 기도를 끝까지 이어 가지 못해도, 하나님의 말씀으로 생기를 지닌 당신의 존재는 여전히 귀합니다. 하나님은 말로 설명하지 못하는 피로와 서운함까지 알고 계시며, 그 과정 속에서도 당신을 있는 그대로 사랑하십니다.",
      "dose": "오늘은 완성된 기도를 만들 필요가 없습니다. “하나님, 무슨 말을 해야 할지 모르겠습니다”라고 말한 뒤 잠시 멈추어도 됩니다. 그것조차 어렵다면 말씀을 읽고 가만히 있는 것으로 충분합니다.\n\n감사한 내용을 찾아 덧붙이지 않아도 됩니다. 말이 나오지 않는 자신을 책망하지 말고, 성령께서 연약함을 도우신다는 말씀에 잠시 기대어 보세요. 아무 말도 할 수 없는 순간에도 하나님께서 내 마음을 알고 계시며, 이미 나와 함께하고 계심을 받아들여 보세요.",
      "caution": "감사나 기도의 말을 잘 표현하지 못해도 하나님께서는 그 마음을 아십니다. 말이 없어도 하나님 앞에 머무를 수 있습니다.",
      "practice": "무슨 말을 해야 할지 모르겠다면 눈을 감고 ‘하나님, 저 여기 있어요’라고만 말해보세요. 그 뒤에는 조용히 있어도 괜찮습니다."
    }]
  },
  "calling": {
    "A": [{
      "num": "A.1",
      "state": "내가 놓으면 모든 일이 무너질 것 같은 상태",
      "reference": "시편 55:22",
      "verse": "네 짐을 여호와께 맡겨 버리라 너를 붙드시고 의인의 요동함을 영영히 허락지 아니하시리로다",
      "cognitive": "내가 계속 붙잡고 있어야 일이 유지된다. 내가 잠시 놓은 사이 문제가 생기면 모든 책임은 내게 있다.",
      "opinion": "당신이 일을 쉽게 놓지 못하는 것은 모든 것을 통제하고 싶어서만은 아닐 수 있습니다. 누군가가 곤란해지거나 일이 잘못되는 것을 막고 싶어서, 다른 사람보다 먼저 확인하고 더 오래 책임지려 했을 수 있습니다. 그 마음에는 무책임함이 아니라 잘 지키고 싶은 애씀과 사랑이 담겨 있습니다.\n\n하지만 맡은 책임을 감당하는 것과 모든 결과를 내가 붙잡는 것은 같은 일이 아닙니다. 하나님은 당신이 모든 무게를 버티고 있어야만 곁에 계시는 분이 아닙니다. 내가 잠시 손을 놓는다고 삶 전체가 하나님의 손 밖으로 떨어지는 것도 아닙니다.",
      "dose": "지금 마음에 남아 있는 책임을 세 영역으로 나누어 적어보세요. 오늘 내가 직접 해야 할 일, 다른 사람과 나누거나 조율할 일, 지금 내가 붙잡을 수 없는 일로 구분합니다.\n\n오늘은 내가 직접 해야 할 일에서 가장 작은 행동 하나만 선택하세요. 그 행동을 마친 뒤에는 “제가 지금 할 수 있는 부분은 여기까지 했습니다”라고 하나님께 아뢰세요. 책임을 외면하는 것이 아니라, 내 몫을 감당한 뒤 결과의 무게까지 혼자 들지 않는 연습입니다.",
      "caution": "하나님께 맡긴다는 것은 책임을 피하는 일이 아닙니다. 내가 할 몫은 하되 결과의 무게까지 혼자 지지 않아도 된다는 뜻입니다.",
      "practice": "지금 맡은 일을 ‘내가 할 일’, ‘함께 나눌 일’, ‘하나님께 맡길 일’로 나누어 적어보세요. 오늘은 내가 할 일 중 가장 작은 것 하나만 해보세요."
    }, {
      "num": "A.2",
      "state": "완벽하게 끝내야만 책임을 다한 것 같은 상태",
      "reference": "잠언 16:3",
      "verse": "너의 행사를 여호와께 맡기라 그리하면 너의 경영하는 것이 이루리라",
      "cognitive": "완벽하게 해내지 못하면 제대로 책임진 것이 아니다. 조금 부족한 결과는 실패와 같다.",
      "opinion": "당신은 대충 끝내고 싶은 사람이 아니라, 맡은 일을 믿을 만하게 마치고 싶은 사람일 수 있습니다. 그래서 이미 충분히 해낸 부분보다 아직 고치지 못한 부분에 마음이 오래 머물고, 작은 부족함도 크게 느껴졌을 수 있습니다.\n\n하지만 하나님의 사랑은 결과물이 완벽해진 뒤에 주어지는 평가가 아닙니다. 하나님은 완성된 결과만 보시는 것이 아니라, 두려움 속에서도 정직하게 감당하려 했던 과정과 이미 사용한 힘까지 알고 계십니다.",
      "dose": "오늘 해야 할 일 하나를 고르고, 시작하기 전에 “이 정도면 책임을 다했다고 볼 수 있는 기준”을 세 가지 이하로 정하세요. 실제 목적에 필요한 기준만 남겨보세요.\n\n정해 둔 기준을 충족했다면 더 고치고 싶은 마음이 올라와도 하나님께 그 일을 맡기고 멈추어 보세요. “하나님, 부족함이 남아 있지만 제가 할 수 있는 부분을 감당했습니다. 이 일을 주의 손에 맡깁니다”라고 기도해 보세요. 하나님께 사랑받기 위해 완벽함을 증명할 필요는 없습니다.",
      "caution": "완벽하지 않다고 해서 책임을 다하지 못한 것은 아닙니다. 이미 충분히 애쓰고 감당해온 부분도 함께 보아야 합니다.",
      "practice": "오늘 할 일 하나에 ‘여기까지 하면 충분하다’는 기준을 세 가지 정해보세요. 그 기준을 채웠다면 더 고치지 말고 멈춰보세요."
    }, {
      "num": "A.3",
      "state": "도움을 요청하면 무책임해 보일 것 같은 상태",
      "reference": "전도서 4:9-10",
      "verse": "두 사람이 한 사람보다 나음은 저희가 수고함으로 좋은 상을 얻을 것임이라 혹시 저희가 넘어지면 하나가 그 동무를 붙들어 일으키려니와 홀로 있어 넘어지고 붙들어 일으킬 자가 없는 자에게는 화가 있으리라",
      "cognitive": "책임을 맡은 사람은 혼자 해결해야 한다. 도움을 요청하면 능력이 부족하거나 일을 떠넘기는 사람처럼 보일 것이다.",
      "opinion": "혼자 감당해 온 것은 다른 사람을 믿지 못해서만은 아닐 수 있습니다. 부탁했다가 상대에게 부담을 줄까 걱정했고, 일이 잘못되면 결국 자신이 책임져야 한다고 생각했을 수 있습니다.\n\n그러나 책임을 나누는 것은 책임을 없애는 일이 아닙니다. 필요한 사람에게 상황을 알리고 함께 감당할 수 있도록 조율하는 것도 책임의 일부입니다. 하나님은 당신이 언제나 혼자 서 있어야만 성실하다고 여기시는 분이 아닙니다.",
      "dose": "오늘 맡은 일 가운데 일부만 함께할 수 있는 일을 찾아보세요. 자료 확인, 일정 조율, 의견 요청처럼 작고 구체적인 부분부터 시작해도 괜찮습니다. 부탁의 범위와 필요한 시간을 분명히 알려주세요.\n\n도움을 요청한 뒤에는 “하나님, 혼자 감당하는 것만이 책임이라고 여기지 않게 해 주세요. 사람의 손길을 통해 주시는 도움도 받아들이게 해 주세요”라고 기도해 보세요. 도움받는 순간에도 하나님께 사랑받는 관계는 줄어들지 않습니다.",
      "caution": "도움을 요청하는 것은 일을 떠넘기는 것이 아닙니다. 함께 감당할 방법을 찾는 것도 책임 있는 선택입니다.",
      "practice": "오늘 맡은 일 가운데 작은 부분 하나를 골라 믿을 수 있는 사람에게 구체적으로 도움을 요청해보세요."
    }, {
      "num": "A.4",
      "state": "실수하면 사랑과 신뢰를 잃을 것 같은 상태",
      "reference": "이사야 43:1",
      "verse": "야곱아 너를 창조하신 여호와께서 이제 말씀하시느니라 이스라엘아 너를 조성하신 자가 이제 말씀하시느니라 너는 두려워 말라 내가 너를 구속하였고 내가 너를 지명하여 불렀나니 너는 내 것이라",
      "cognitive": "실수하지 않아야 계속 신뢰받을 수 있다. 부족한 모습을 보이면 하나님과 사람 모두 나를 실망스럽게 볼 것이다.",
      "opinion": "실수를 두려워하는 마음 아래에는 단순히 성과를 높이고 싶은 욕심보다 관계를 잃고 싶지 않은 마음이 있을 수 있습니다. 맡은 일을 잘못하면 사람들이 자신을 신뢰하지 않게 될까 봐, 작은 오류도 자신의 가치에 대한 평가처럼 받아들였을 수 있습니다.\n\n하지만 하나님은 당신을 역할이나 성과로만 부르지 않고 이름으로 부르십니다. 실수는 인정하고 고쳐야 할 수 있지만, 실수가 곧 사랑받을 수 없는 사람이라는 증거는 아닙니다.",
      "dose": "실수가 걱정되는 일 하나를 정하고 실제로 필요한 확인 항목을 세 가지 이하로 적어보세요. 확인을 마쳤다면 같은 내용을 처음부터 반복해서 점검하지 않도록 해보세요.\n\n이미 실수가 생겼다면 무엇이 일어났는지, 지금 수정할 수 있는 것은 무엇인지, 누구에게 알려야 하는지를 정리하세요. 필요한 조치를 한 뒤에는 “하나님, 이 실수로 저의 모든 가치가 결정되지 않음을 믿게 해 주세요. 잘못을 바로잡되 주의 사랑에서 숨지 않게 해 주세요”라고 기도해 보세요.",
      "caution": "실수했다고 해서 사랑받을 수 없거나 신뢰를 모두 잃는 것은 아닙니다. 부족한 모습까지도 하나님께서는 이미 알고 계십니다.",
      "practice": "실수가 걱정되는 일 하나에 꼭 확인해야 할 것 세 가지만 적어보세요. 그것을 확인한 뒤에는 같은 부분을 반복해서 점검하지 말아보세요."
    }, {
      "num": "A.5",
      "state": "계획대로 되지 않으면 내가 잘못한 것 같은 상태",
      "reference": "잠언 16:9",
      "verse": "사람이 마음으로 자기의 길을 계획할지라도 그 걸음을 인도하는 자는 여호와시니라",
      "cognitive": "계획대로 되지 않은 것은 내가 충분히 준비하지 못했기 때문이다. 결과가 좋지 않으면 과정에서 했던 노력도 의미가 없다.",
      "opinion": "당신은 책임을 다하기 위해 미리 준비하고 가능한 변수를 줄이며 계획을 세워 왔을 수 있습니다. 그러나 예상하지 못한 변화가 생기면 단순한 일정 변경이 아니라 자신의 부족함처럼 느껴졌을 수 있습니다.\n\n하나님은 계획을 세우는 당신의 성실함을 알고 계십니다. 동시에 계획대로 흘러가지 않은 순간에도 당신을 실패한 사람으로 바라보지 않으십니다. 책임은 모든 결과를 원하는 방향으로 만드는 능력이 아니라, 달라진 상황 안에서 현재 할 수 있는 다음 걸음을 선택하는 태도일 수 있습니다.",
      "dose": "계획이 틀어진 일이 있다면 이미 바뀐 조건, 지금도 내가 선택할 수 있는 것, 다른 사람과 새롭게 조율해야 할 일을 구분해 보세요.\n\n그다음 결과 전체를 해결하려 하지 말고 다음 행동 한 가지만 정하세요. “하나님, 제 계획과 달라진 이 길에서도 제 걸음을 인도해 주세요. 결과만 보며 저를 판단하지 않고, 오늘 필요한 순종을 선택하게 해 주세요”라고 기도해 보세요.",
      "caution": "계획대로 되지 않았다고 해서 내가 실패한 것은 아닙니다. 상황이 달라져도 하나님께서 다음 걸음을 인도하실 수 있습니다.",
      "practice": "바뀐 상황에서 지금 할 수 있는 행동 하나만 정해보세요. 나머지 결과는 하나님께 맡긴다고 짧게 기도해보세요."
    }],
    "B": [{
      "num": "B.1",
      "state": "아무것도 더 책임지고 싶지 않을 만큼 지친 상태",
      "reference": "이사야 41:10",
      "verse": "두려워 말라 내가 너와 함께 함이니라 놀라지 말라 나는 네 하나님이 됨이니라 내가 너를 굳세게 하리라 참으로 너를 도와 주리라 참으로 나의 의로운 오른손으로 너를 붙들리라",
      "cognitive": "지금 힘을 내지 못하면 나는 무책임한 사람이다. 하나님도 내가 다시 움직이기만을 기다리고 계실 것이다.",
      "opinion": "아무것도 더 책임지고 싶지 않은 마음은 책임감이 부족해서 생긴 것이 아닐 수 있습니다. 오랫동안 맡은 일을 놓지 못하고 버텨 왔기 때문에, 이제는 작은 결정이나 연락도 큰 짐처럼 느껴질 만큼 힘이 소진된 것일 수 있습니다.\n\n하나님은 당신이 다시 유능해진 뒤에야 가까이하시는 분이 아닙니다. 아무것도 더 해낼 수 없는 지금도 당신을 놓지 않고 붙들고 계십니다. 지친 모습 때문에 하나님께 실망을 드렸다고 생각하며 마음을 숨기지 않아도 됩니다.",
      "dose": "오늘은 밀린 책임을 한꺼번에 정리하지 마세요. 먼저 물을 마시거나 간단히 먹고, 잠시 화면을 끄는 것처럼 몸의 부담을 낮추는 행동 하나를 선택하세요. 꼭 알려야 할 일이 있다면 현재 가능한 범위와 다시 연락할 시간을 전달하세요.\n\n“하나님, 저는 지금 아무것도 더 감당할 힘이 없습니다. 아무것도 해내지 못하는 지금도 저를 사랑하고 붙들고 계심을 믿게 해 주세요. 제게 다시 살아갈 힘과 오늘 필요한 지혜를 주세요.” 기도한 뒤 바로 힘이 생기지 않아도 기도를 잘못한 것이 아닙니다.",
      "caution": "지금 힘을 내지 못한다고 해서 무책임한 사람인 것은 아닙니다. 오래 감당해온 몸과 마음이 지친 것일 수 있습니다.",
      "practice": "밀린 일을 정리하려 하지 말고, 물을 마시거나 화면을 끄는 등 몸의 부담을 줄이는 일 하나를 먼저 해보세요."
    }, {
      "num": "B.2",
      "state": "기도할 말도 떠오르지 않을 만큼 책임에 눌린 상태",
      "reference": "로마서 8:26",
      "verse": "이와 같이 성령도 우리 연약함을 도우시나니 우리가 마땅히 빌바를 알지 못하나 오직 성령이 말할 수 없는 탄식으로 우리를 위하여 친히 간구하시느니라",
      "cognitive": "기도할 말을 제대로 준비하지 못하면 하나님께 나아갈 수 없다. 내 상태를 잘 설명해야 하나님도 내 마음을 이해하실 수 있다.",
      "opinion": "책임이 너무 오래 이어지면 무엇이 힘든지 설명하는 일조차 또 하나의 과제가 될 수 있습니다. 기도하려고 해도 생각이 정리되지 않고, 무슨 말을 해야 할지 몰라 한숨만 나오거나 아무 말도 하지 못할 수 있습니다.\n\n그러나 하나님은 잘 정리된 기도만 들으시는 분이 아닙니다. 말씀은 우리가 무엇을 기도해야 할지 알지 못할 때에도 성령께서 우리의 연약함을 도우신다고 말씀합니다. 말을 잘하지 못해도 하나님과의 관계가 멀어지는 것은 아닙니다.",
      "dose": "긴 기도를 만들지 말고 지금 가장 가까운 말 하나만 하나님께 아뢰어 보세요. “무거워요”, “지쳤어요”, “모르겠어요”, “도와주세요”라는 한마디만 드려도 됩니다.\n\n“하나님, 제가 무엇을 구해야 할지도 모르겠습니다. 말로 다 설명하지 못하는 제 마음을 아시고, 제가 하나님께 숨지 않도록 도와주세요.” 오늘은 기도를 잘 완성하는 것이 목표가 아닙니다. 말이 나오지 않는 모습까지 하나님께 가지고 나아가 보세요.",
      "caution": "기도할 말을 잘 준비하지 못해도 괜찮습니다. 하나님은 설명이 부족한 마음까지도 아시고 도우십니다.",
      "practice": "긴 기도 대신 ‘무거워요’ 또는 ‘지쳤어요’라고 한마디만 하나님께 드려보세요."
    }, {
      "num": "B.3",
      "state": "책임에서 잠시 손을 떼기 어려운 상태",
      "reference": "창세기 2:7",
      "verse": "여호와 하나님이 흙으로 사람을 지으시고 생기를 그 코에 불어 넣으시니 사람이 생령이 된지라",
      "cognitive": "책임을 맡은 이상 계속 움직여야 한다. 잠시 멈추면 하나님도 나를 무책임한 사람으로 보실 것이다.",
      "opinion": "책임이 버거운데도 손을 떼기 어려운 것은, 지금 멈추면 일이 밀리거나 누군가가 곤란해질 것 같기 때문일 수 있습니다. 그래서 이미 지쳤는데도 계속 버티거나, 잠시 멈춘 자신을 무책임한 사람처럼 판단할 수 있습니다.\n\n하나님은 당신이 계속 움직일 때만 사랑하시는 분이 아닙니다. 당신은 일을 시작하기 전부터 하나님께서 생기를 주어 살아 있게 하신 사람입니다. 당신의 가치는 오늘 얼마나 많은 일을 끝냈는지로 새롭게 정해지지 않습니다.",
      "dose": "오늘 반드시 해야 할 일, 다른 사람과 조율할 일, 이후로 옮겨도 되는 일을 구분하세요. 다른 사람에게 영향을 주는 일이 있다면 현재 상황과 다시 확인할 시간을 알린 뒤, 정한 시간만큼 책임에서 손을 떼어보세요.\n\n“하나님, 저는 멈추면 사랑받을 만한 사람이 아니게 될 것 같아 두렵습니다. 제가 감당해야 할 책임과 지나치게 붙잡고 있는 무게를 분별하게 해 주세요. 쉬고 있는 지금도 하나님께서 생명을 주신 귀한 사람임을 잊지 않게 해 주세요.”",
      "caution": "잠시 멈춘다고 해서 하나님에게서 멀어지거나 무책임해지는 것은 아닙니다. 쉬는 시간도 하나님께서 허락하신 삶의 일부입니다.",
      "practice": "오늘 하지 않아도 되는 일 하나를 골라 내일로 미뤄보세요. 정해둔 시간만큼은 그 일을 생각하지 않고 쉬어보세요."
    }, {
      "num": "B.4",
      "state": "내가 약해져서 모두에게 피해를 주는 것 같은 상태",
      "reference": "이사야 43:1-2",
      "verse": "야곱아 너를 창조하신 여호와께서 이제 말씀하시느니라 이스라엘아 너를 조성하신 자가 이제 말씀하시느니라 너는 두려워 말라 내가 너를 구속하였고 내가 너를 지명하여 불렀나니 너는 내 것이라 네가 물 가운데로 지날 때에 내가 함께할 것이라 강을 건널 때에 물이 너를 침몰치 못할 것이며 네가 불 가운데로 행할 때에 타지도 아니할 것이요 불꽃이 너를 사르지도 못하리니",
      "cognitive": "내가 제 역할을 하지 못하면 다른 사람에게 짐이 될 뿐이다. 도움을 받는 나는 하나님께도 부족하고 부담스러운 사람이다.",
      "opinion": "이전처럼 움직이지 못하면 다른 사람의 일이 늘어나는 것 같아 미안할 수 있습니다. 누군가가 자신의 몫을 대신 감당하는 모습을 보며, 공동체에 피해를 주는 사람이 된 것처럼 느낄 수도 있습니다.\n\n그러나 하나님은 당신을 역할이나 성과의 이름으로 부르지 않고 당신의 이름으로 부르십니다. 약해진 순간에도 당신과의 관계를 거두지 않으시며, 그 시간을 함께 지나가십니다. 하나님께 사랑받기 위해 계속 쓸모 있는 사람임을 증명할 필요는 없습니다.",
      "dose": "혼자 감당하기 어려운 일이 있다면 신뢰할 수 있는 사람에게 현재 상태와 필요한 도움을 구체적으로 알려보세요. 부탁할 범위와 자신이 다시 확인할 시점을 함께 전달하세요. 도움을 받은 뒤에는 곧바로 모든 몫을 되찾아오려 하지 않아도 됩니다.\n\n“하나님, 저는 도움을 받는 제 모습을 부끄럽게 여기고 있습니다. 하나님도 저를 부담스럽게 여기신다고 오해하지 않게 해 주세요. 약해진 지금도 제 이름을 부르시고 함께하심을 믿게 해 주세요.” 혼자 모든 일을 해내지 못하는 지금도 하나님께서 지으신 귀한 사람입니다.",
      "caution": "도움을 받는다고 해서 다른 사람에게 짐이 되는 것은 아닙니다. 지금의 당신도 하나님께 소중히 불리는 사람입니다.",
      "practice": "혼자 감당하기 어려운 일 하나를 믿을 수 있는 사람에게 구체적으로 알려보세요. 필요한 도움을 한 가지로 좁혀 요청하면 좋습니다."
    }, {
      "num": "B.5",
      "state": "계속 긴장하고 있어 멈추기 어려운 상태",
      "reference": "시편 127:1-2",
      "verse": "여호와께서 집을 세우지 아니하시면 세우는 자의 수고가 헛되며 여호와께서 성을 지키지 아니하시면 파숫군의 경성함이 허사로다 너희가 일찌기 일어나고 늦게 누우며 수고의 떡을 먹음이 헛되도다 그러므로 여호와께서 그 사랑하시는 자에게는 잠을 주시는도다",
      "cognitive": "내가 계속 생각하고 대비해야 문제가 생기지 않는다. 내가 붙잡는 것을 멈추면 하나님도 더 이상 도와주시지 않을 것이다.",
      "opinion": "해야 할 일을 계속 떠올리는 것은 앞으로 생길 문제를 막고 싶은 마음의 애씀일 수 있습니다. 몸을 멈춘 뒤에도 마음은 놓친 것이 없는지 살피며, 내가 붙잡고 있어야만 일이 무너지지 않을 것처럼 느껴질 수 있습니다.\n\n그러나 하나님은 결과가 좋아진 뒤에야 당신을 사랑하시는 분이 아닙니다. 당신에게 생명을 주셨고, 아직 결과를 알 수 없는 길을 걸어가는 동안에도 당신을 알고 계십니다. 하나님은 완성된 결과뿐 아니라, 두려움 속에서도 그분을 찾으며 오늘을 살아가는 당신의 과정과 함께하십니다.",
      "dose": "멈추기 전에 떠오르는 일을 한곳에 적고, 다시 확인할 시간과 가장 먼저 할 행동 하나를 정하세요. 다른 사람에게 알려야 할 일이 있다면 필요한 연락을 마친 뒤, 같은 문제를 계속 확인하지 않아도 됩니다.\n\n“하나님, 제가 할 수 있는 부분은 여기까지 했습니다. 제가 알지 못하는 앞날까지 붙잡으려 하지 않고, 어떤 상황에서도 하나님을 의지하며 필요한 책임을 감당하게 해 주세요.” 모든 상황을 이해해야만 안심하려 애쓰기보다, 알 수 없는 순간에도 하나님께 마음을 아뢰며 그 사랑 안에서 필요한 한 걸음을 구해 보세요.",
      "caution": "계속 붙잡고 있지 않아도 하나님께서 도움을 거두시는 것은 아닙니다. 내가 멈춘 동안에도 하나님은 일하고 계십니다.",
      "practice": "떠오르는 걱정을 한곳에 적고 ‘오늘은 여기까지 했습니다’라고 말해보세요. 그 뒤에는 같은 내용을 다시 확인하지 말고 잠시 쉬어보세요."
    }]
  },
  "distant": {
    "A": [{
      "num": "A.1",
      "state": "하나님께 가까이 가기 위해 더 열심히 해야 한다고 느껴지는 상태",
      "reference": "로마서 8:38-39",
      "verse": "내가 확신하노니 사망이나 생명이나 천사들이나 권세자들이나 현재 일이나 장래 일이나 능력이나 높음이나 깊음이나 다른 아무 피조물이라도 우리를 우리 주 그리스도 예수 안에 있는 하나님의 사랑에서 끊을 수 없으리라",
      "cognitive": "내가 하나님을 잘 느끼지 못하는 것은 믿음이 부족하기 때문이다. 다시 가까워지려면 기도와 말씀을 더 열심히 해야 한다.",
      "opinion": "하나님과 다시 가까워지고 싶어 애쓰는 마음에는 하나님을 소중히 여기는 진심이 남아 있습니다. 지금의 답답함은 하나님께 관심이 없어서 생긴 것이 아니라, 이전처럼 하나님을 느끼고 싶다는 마음이 있기 때문에 더 크게 느껴질 수 있습니다.\n\n그러나 하나님의 사랑은 내가 하나님을 얼마나 잘 느끼는지에 따라 가까워졌다가 멀어지는 사랑이 아닙니다. 감정이 무뎌진 날에도, 기도가 잘되지 않는 날에도 하나님과 나를 이어 주는 사랑은 끊어지지 않습니다. 지금은 하나님께 가까이 가기 위해 자신을 몰아붙이기보다, 하나님께서 먼저 나를 놓지 않고 계신다는 사실을 받아들이는 것이 필요합니다.",
      "dose": "오늘은 기도나 말씀의 분량을 늘리려고 하지 않아도 됩니다. 먼저 “하나님, 제가 지금 하나님을 잘 느끼지 못하지만 하나님의 사랑이 사라진 것은 아니라는 말씀을 믿고 싶습니다”라고 짧게 고백해 보세요.\n\n그다음 로마서 8장 38절~39절을 천천히 읽고, “아무것도 나를 하나님의 사랑에서 끊을 수 없다”는 한 문장만 마음에 남겨 보세요. 오늘의 목표는 하나님을 강하게 느끼는 것이 아니라, 느껴지지 않는 순간에도 하나님의 사랑은 변하지 않는다는 사실을 기억하는 것입니다.",
      "caution": "하나님과 가까워지기 위해 더 많은 기도와 말씀을 해내야 하는 것은 아닙니다. 이미 사랑받고 있다는 사실에서 다시 시작해도 괜찮습니다.",
      "practice": "무언가를 더 하려 애쓰기보다 잠시 앉아 ‘하나님, 지금 이 모습 그대로 주님 앞에 있습니다’라고 말해보세요."
    }, {
      "num": "A.2",
      "state": "예전보다 기도가 잘되지 않아 관계가 멀어졌다고 느끼는 상태",
      "reference": "시편 139:1-3",
      "verse": "여호와여 주께서 나를 감찰하시고 아셨나이다 주께서 나의 앉고 일어섬을 아시며 멀리서도 나의 생각을 통촉하시오며 나의 길과 눕는 것을 감찰하시며 나의 모든 행위를 익히 아시오니",
      "cognitive": "기도를 길게 하지 못하면 하나님과의 관계도 약해진다. 내가 하나님을 찾지 못하는 동안 하나님도 나를 멀리하실 것이다.",
      "opinion": "기도가 예전처럼 이어지지 않을 때 하나님과의 관계까지 끊어진 것처럼 느껴질 수 있습니다. 하고 싶은 말은 있지만 말이 나오지 않고, 기도를 시작해도 마음이 따라오지 않으면 스스로 믿음이 약해졌다고 판단하기 쉽습니다.\n\n하지만 하나님은 내가 설명하기 전에 이미 내 생각과 마음을 알고 계십니다. 기도는 하나님께 나의 상태를 완벽하게 보고해야만 이어지는 관계가 아닙니다. 아무 말도 정리되지 않는 지금도 하나님은 나의 앉고 일어섬과 생각을 알고 계십니다. 기도하지 못한 시간까지 포함하여 나를 알고 사랑하시는 하나님을 먼저 바라볼 필요가 있습니다.",
      "dose": "오늘은 긴 기도를 만들지 말고 지금의 상태를 한 문장으로만 말해 보세요. “하나님, 무슨 말을 해야 할지 모르겠습니다”, “하나님과 멀어진 것 같아 마음이 어렵습니다”처럼 꾸미지 않은 말이면 충분합니다.\n\n그 말을 한 뒤 해결책을 구하거나 감정을 바꾸려고 애쓰지 않아도 됩니다. 하나님께서 이미 내 마음을 알고 계신다는 말씀을 읽고, 오늘 표현하지 못한 마음까지 하나님께서 알고 계신다는 사실에 머물러 보세요.",
      "caution": "기도가 짧아졌다고 해서 하나님과의 관계까지 약해진 것은 아닙니다. 내가 말을 잇지 못하는 순간에도 하나님은 나를 알고 계십니다.",
      "practice": "오늘 하루 중 한 순간을 떠올리고 ‘하나님, 그때도 함께 계셨죠’라고 짧게 말해보세요."
    }, {
      "num": "A.3",
      "state": "특별한 감동이 없어 하나님께서 함께하시지 않는 것처럼 느끼는 상태",
      "reference": "히브리서 13:5",
      "verse": "돈을 사랑치 말고 있는 바를 족한 줄로 알라 그가 친히 말씀하시기를 내가 과연 너희를 버리지 아니하고 과연 너희를 떠나지 아니하리라 하셨느니라",
      "cognitive": "하나님께서 함께하신다면 반드시 마음에 특별한 감동이 있어야 한다. 아무 느낌이 없다면 하나님께서 나와 멀리 계신 것이다.",
      "opinion": "말씀을 읽어도 특별한 감동이 없고, 기도해도 마음이 움직이지 않으면 하나님께서 가까이 계시지 않는 것처럼 느껴질 수 있습니다. 예전에 경험했던 감정과 지금을 비교하면서 관계가 약해졌다고 생각할 수도 있습니다.\n\n하지만 하나님께서 함께하신다는 사실은 오늘 내가 무엇을 느꼈는지로 결정되지 않습니다. 하나님은 감정이 풍성한 날에만 머무시는 분이 아니라, 아무것도 느끼지 못하는 날에도 떠나지 않겠다고 약속하신 분입니다. 지금은 특별한 경험을 만들어 내려 하기보다, 하나님께서 나를 버리지 않으신다는 약속을 감정보다 먼저 붙드는 시간이 필요합니다.",
      "dose": "오늘은 하나님을 느끼기 위한 특별한 행동을 찾지 않아도 됩니다. 평소 생활을 이어 가면서 한 번씩 “하나님은 지금도 나를 버리지 않으셨다”라고 조용히 되새겨 보세요.\n\n마음의 변화가 바로 일어나지 않아도 괜찮습니다. 이 말씀은 내가 하나님의 가까움을 증명하라는 요구가 아니라, 하나님께서 먼저 떠나지 않겠다고 주신 약속입니다. 오늘은 그 약속을 확인하는 것만으로 충분합니다.",
      "caution": "특별한 감동이 없다고 해서 하나님께서 멀리 계신 것은 아닙니다. 느낌이 하나님의 동행을 증명하는 기준은 아닙니다.",
      "practice": "감정을 만들어내려 하지 말고, 오늘 주어진 빛이나 바람, 숨결 같은 평범한 것 하나를 잠시 느껴보세요."
    }, {
      "num": "A.4",
      "state": "죄책감 때문에 하나님 앞에 나아가기 어렵게 느껴지는 상태",
      "reference": "요한일서 4:10",
      "verse": "사랑은 여기 있으니 우리가 하나님을 사랑한 것이 아니요 오직 하나님이 우리를 사랑하사 우리 죄를 위하여 화목제로 그 아들을 보내셨음이니라",
      "cognitive": "내가 먼저 잘못을 바로잡아야 하나님께 다시 가까이 갈 수 있다. 지금의 나는 하나님께 사랑받기 어렵다.",
      "opinion": "마음에 걸리는 잘못이 있으면 하나님께 다가가는 것 자체가 부담스러워질 수 있습니다. 기도하려 할수록 죄책감이 먼저 떠오르고, 하나님께서 실망하셨을 것 같아 피하고 싶은 마음이 생길 수도 있습니다.\n\n그러나 하나님의 사랑은 내가 먼저 깨끗해진 뒤에 시작된 사랑이 아닙니다. 성경은 우리가 하나님을 먼저 사랑했기 때문이 아니라 하나님께서 먼저 우리를 사랑하셨다고 말합니다. 잘못을 가볍게 여기라는 뜻이 아니라, 회개조차 하나님의 사랑 밖에서 혼자 해결한 뒤 돌아오는 일이 아니라는 뜻입니다. 하나님은 잘못한 나를 밀어내기보다 다시 관계 안으로 부르십니다.",
      "dose": "오늘은 잘못을 길게 분석하거나 스스로를 꾸짖는 것부터 시작하지 마세요. 먼저 “하나님, 제가 잘해서 사랑받는 것이 아니라 하나님께서 먼저 사랑하셨다는 사실을 기억하게 해 주세요”라고 고백해 보세요.\n\n그다음 마음에 걸리는 일을 한 가지 말하고, 변명하지도 자신을 정죄하지도 않은 채 하나님께 맡겨 보세요. 오늘의 회개는 벌을 피하기 위한 행동이 아니라, 나를 먼저 사랑하신 하나님께 다시 마음을 여는 시간이 되어야 합니다.",
      "caution": "먼저 잘해낸 뒤에야 하나님께 나아갈 수 있는 것은 아닙니다. 하나님께서 먼저 사랑하셨기에 지금 모습 그대로 돌아갈 수 있습니다.",
      "practice": "죄책감을 다 정리하려 하지 말고 ‘하나님, 먼저 사랑하신 주님께 지금 이 모습으로 나아갑니다’라고 말해보세요."
    }, {
      "num": "A.5",
      "state": "하나님과 가까웠던 때로 빨리 돌아가야 한다는 조급함이 있는 상태",
      "reference": "빌립보서 1:6",
      "verse": "너희 속에 착한 일을 시작하신 이가 그리스도 예수의 날까지 이루실 줄을 우리가 확신하노라",
      "cognitive": "지금 당장 예전의 믿음을 회복하지 못하면 계속 멀어질 것이다. 내가 빨리 회복하지 않으면 하나님과의 관계를 잃을 수 있다.",
      "opinion": "예전에는 기도도 잘되고 말씀도 가까웠는데 지금은 그렇지 않다고 느껴지면 빨리 이전 상태로 돌아가야 한다는 조급함이 생길 수 있습니다. 그 조급함은 하나님을 놓치고 싶지 않은 마음에서 시작되지만, 오히려 지금의 나를 부족한 사람처럼 몰아세울 수 있습니다.\n\n하나님은 한 번에 완성된 믿음만 받으시는 분이 아닙니다. 내 안에서 믿음의 일을 시작하신 하나님께서 회복의 과정도 이어 가십니다. 지금의 느린 걸음 때문에 하나님께서 나를 포기하시는 것이 아닙니다. 내가 서둘러 관계를 복구하는 것이 아니라, 하나님께서 나를 사랑 안에서 계속 이끌고 계심을 신뢰할 필요가 있습니다.",
      "dose": "오늘은 예전에 했던 신앙생활의 분량을 그대로 되찾으려 하지 마세요. 부담 없이 할 수 있는 한 가지를 정해 보세요. 성경 한 절 읽기, 짧은 감사 한 가지 말하기, 예배 한 곡 듣기 정도면 충분합니다.\n\n작게 실천한 뒤에는 “이것밖에 못했다”고 평가하지 말고 “하나님께서 오늘도 나를 이끌고 계신다”고 받아들여 보세요. 회복은 내가 단숨에 만들어 내는 결과가 아니라 하나님의 사랑 안에서 천천히 이어지는 과정입니다.",
      "caution": "예전의 믿음으로 빨리 돌아가지 못해도 괜찮습니다. 하나님께서는 시작하신 일을 서두르지 않고 끝까지 이루어 가십니다.",
      "practice": "회복을 재촉하지 말고 짧은 말씀 한 줄만 읽어보세요. 오늘은 그 한 줄이면 충분합니다."
    }],
    "B": [{
      "num": "B.1",
      "state": "하나님을 찾을 힘조차 남지 않은 것처럼 느껴지는 상태",
      "reference": "이사야 46:3-4",
      "verse": "야곱 집이여 이스라엘 집의 남은 모든 자여 나를 들을지어다 배에서 남으로부터 내게 안겼고 태에서 남으로부터 내게 품기운 너희여 너희가 노년에 이르기까지 내가 그리하겠고 백발이 되기까지 내가 너희를 품을 것이라 내가 지었은즉 안을 것이요 품을 것이요 구하여 내리라",
      "cognitive": "내가 하나님을 찾지 못하면 하나님과의 관계도 멈춘다. 하나님께 가까이 가려면 나에게 먼저 힘이 있어야 한다.",
      "opinion": "마음이 많이 지치면 하나님을 찾고 싶다는 생각조차 부담이 될 수 있습니다. 기도나 말씀을 해야 한다는 말도 해야 할 일이 하나 더 생긴 것처럼 느껴지고, 그러지 못하는 자신 때문에 더 멀어진 기분이 들 수 있습니다.\n\n그러나 하나님과의 관계는 내가 힘을 내어 하나님께 도달해야만 이어지는 관계가 아닙니다. 하나님은 내가 힘이 있을 때만 붙들리는 분이 아니라, 힘이 없어 아무것도 하지 못할 때에도 나를 품으시는 분입니다. 오늘은 하나님께 나아가기 위해 애쓰기보다, 하나님께서 먼저 나를 안고 계신다는 사랑을 받아들이는 것이 필요합니다.",
      "dose": "오늘은 기도문을 쓰거나 말씀을 오래 읽지 않아도 됩니다. 이사야 46장 4절의 “내가 안을 것이요 품을 것이요”라는 말만 천천히 읽어 보세요.\n\n그 말씀을 이해하거나 감동받아야 한다는 부담도 내려놓으세요. 아무 반응이 없어도 괜찮습니다. 오늘은 내가 하나님을 붙잡는 날이 아니라, 하나님께서 지친 나를 놓지 않고 계신다는 사실을 듣는 날입니다.",
      "caution": "하나님을 찾을 힘이 없어도 관계가 끊어진 것은 아닙니다. 내가 힘을 내기 전에 먼저 안고 가시는 분이 하나님이십니다.",
      "practice": "무언가 하려고 애쓰지 말고 ‘하나님, 지금은 주님이 저를 안아주세요’라고 말한 뒤 잠시 기대어 쉬어보세요."
    }, {
      "num": "B.2",
      "state": "오랫동안 아무 응답도 없는 것처럼 느껴지는 상태",
      "reference": "이사야 49:15-16",
      "verse": "여인이 어찌 그 젖 먹는 자식을 잊겠으며 자기 태에서 난 아들을 긍휼히 여기지 않겠느냐 그들은 혹시 잊을지라도 나는 너를 잊지 아니할 것이라 내가 너를 내 손바닥에 새겼고 너의 성벽이 항상 내 앞에 있나니",
      "cognitive": "아무 응답이 없다는 것은 하나님께서 나를 잊으셨다는 뜻이다. 하나님께서 나를 사랑하신다면 지금쯤은 달라진 것이 있어야 한다.",
      "opinion": "오랫동안 기도했는데도 달라지는 것이 없으면 하나님께서 내 이야기를 듣지 않으시거나 나를 잊으신 것처럼 느껴질 수 있습니다. 기다림이 길어질수록 처음에 있던 믿음보다 실망과 지침이 더 커질 수 있습니다.\n\n하나님의 사랑은 응답의 속도로만 확인되는 사랑이 아닙니다. 하나님은 “나는 너를 잊지 아니할 것이라”고 말씀하시며, 나를 손바닥에 새겼다고 표현하십니다. 지금 상황이 해결되지 않았다는 사실과 하나님께서 나를 잊지 않으셨다는 사실은 동시에 존재할 수 있습니다. 오늘은 응답을 해석하기 전에, 내가 하나님의 기억과 사랑에서 지워지지 않았다는 사실을 먼저 받아들일 필요가 있습니다.",
      "dose": "오늘은 응답이 늦어지는 이유를 찾아내려고 하지 마세요. “하나님, 저는 잊힌 것처럼 느껴집니다”라고 솔직하게 말한 뒤, “그러나 하나님은 나를 잊지 않으신다고 말씀하셨습니다”라고 덧붙여 보세요.\n\n마음이 바로 동의하지 않아도 괜찮습니다. 믿음은 감정을 억지로 바꾸는 것이 아니라, 내 감정과 하나님의 약속을 함께 하나님 앞에 두는 일이기도 합니다. 오늘은 해결보다 잊히지 않았다는 사실을 받는 데 집중해 보세요.",
      "caution": "응답이 보이지 않는다고 해서 하나님께서 나를 잊으신 것은 아닙니다. 달라진 것이 없어 보여도 하나님의 사랑은 그대로입니다.",
      "practice": "‘주께서 나를 손바닥에 새기셨다’는 말씀을 떠올리며 ‘하나님, 잊힌 것처럼 느껴져요’라고 솔직히 말해보세요."
    }, {
      "num": "B.3",
      "state": "다른 사람은 하나님을 잘 느끼는 것 같은데 나만 멀어진 것처럼 느껴지는 상태",
      "reference": "시편 103:13-14",
      "verse": "아비가 자식을 불쌍히 여김 같이 여호와께서 자기를 경외하는 자를 불쌍히 여기시나니 이는 저가 우리의 체질을 아시며 우리가 진토임을 기억하심이로다",
      "cognitive": "다른 사람처럼 뜨겁게 믿지 못하면 하나님께 사랑받기 어렵다. 내 믿음이 약해진 것은 하나님과의 관계가 잘못되었다는 증거다.",
      "opinion": "다른 사람의 간증이나 기도하는 모습을 볼 때 나만 하나님과 멀어진 것처럼 느껴질 수 있습니다. 다른 사람은 분명한 확신과 감동을 말하는데 나는 아무것도 느껴지지 않으면, 내 믿음에 문제가 있다고 결론 내리기 쉽습니다.\n\n하지만 하나님은 모든 사람에게 같은 감정과 같은 속도를 요구하지 않으십니다. 하나님은 지금 나의 체질과 한계, 지친 정도를 알고 계십니다. 약한 나를 다른 사람과 비교하며 책망하시는 것이 아니라, 아버지가 자녀를 불쌍히 여기는 것처럼 바라보십니다. 내가 더 좋은 신앙 상태를 만들어 내야 사랑받는 것이 아니라, 지금의 나를 이미 알고 계시는 사랑 안에서 회복이 시작됩니다.",
      "dose": "오늘은 다른 사람의 신앙 상태와 나를 비교하게 만드는 콘텐츠나 이야기를 잠시 멀리해도 됩니다. 대신 “하나님은 지금 내 상태를 정확히 알고 계신다”는 문장을 적거나 읽어 보세요.\n\n그리고 내가 못하고 있는 것을 찾기보다 지금 힘든 이유를 한 가지 알아차려 보세요. “많이 지쳤다”, “오래 기다렸다”, “마음이 다쳤다” 정도면 충분합니다. 하나님은 그 이유까지 알고 나를 대하시는 분입니다.",
      "caution": "다른 사람처럼 뜨겁게 느끼지 못해도 하나님의 사랑은 달라지지 않습니다. 믿음의 온도가 사랑받는 정도를 정하지 않습니다.",
      "practice": "비교하는 마음이 올라오면 ‘하나님은 내 연약함을 아신다’고 한 번 말해보세요. 더 느끼려고 애쓰지 않아도 괜찮습니다."
    }, {
      "num": "B.4",
      "state": "상처와 실망 때문에 하나님께 마음을 열기 어려운 상태",
      "reference": "시편 34:18",
      "verse": "여호와는 마음이 상한 자에게 가까이 하시고 중심에 통회하는 자를 구원하시는도다",
      "cognitive": "하나님께 실망한 마음을 드러내면 믿음 없는 사람이 된다. 상처받은 상태에서는 하나님께 가까이 갈 수 없다.",
      "opinion": "기도했지만 원하는 결과를 얻지 못했거나, 믿었던 상황에서 상처를 입었다면 하나님께도 마음을 닫고 싶어질 수 있습니다. 하나님께 서운한 마음이 들면서도 그런 감정을 가져서는 안 된다고 생각해 더 멀리 숨게 될 수도 있습니다.\n\n그러나 하나님은 상한 마음을 정리한 뒤에만 가까이하시는 분이 아닙니다. 성경은 마음이 상한 자에게 하나님께서 가까이하신다고 말합니다. 하나님께 대한 실망과 질문까지 하나님께 숨기지 않아도 됩니다. 하나님은 바르게 정돈된 감정만 받으시는 것이 아니라, 아직 이해되지 않고 아픈 마음도 외면하지 않으십니다.",
      "dose": "오늘은 하나님께 좋은 말만 하려고 하지 마세요. “왜 이런 일이 있었는지 모르겠습니다”, “하나님께 서운한 마음이 있습니다”, “다시 믿는 것이 겁납니다”처럼 현재의 마음을 그대로 말해 보세요.\n\n말한 뒤 바로 믿음 있는 결론을 붙이지 않아도 됩니다. 오늘의 목표는 하나님께 대한 감정을 없애는 것이 아니라, 그 마음까지 하나님 앞에 숨기지 않는 것입니다. 상한 마음을 가지고 하나님께 가는 것 자체가 관계를 다시 여는 시작이 될 수 있습니다.",
      "caution": "하나님께 실망한 마음을 드러낸다고 해서 믿음이 없는 것은 아닙니다. 솔직한 마음을 꺼내는 것부터 관계가 다시 이어질 수 있습니다.",
      "practice": "상처와 실망을 숨기지 말고 ‘하나님, 솔직히 많이 서운했어요’라고 한 문장 말해보세요."
    }, {
      "num": "B.5",
      "state": "하나님보다 마음의 공허함과 지침이 더 크게 느껴지는 상태",
      "reference": "시편 73:23-26",
      "verse": "내가 항상 주와 함께하니 주께서 내 오른손을 붙드셨나이다 주의 교훈으로 나를 인도하시고 후에는 영광으로 나를 영접하시리니 하늘에서는 주 외에 누가 내게 있으리요 땅에서는 주 밖에 나의 사모할 자 없나이다 내 육체와 마음은 쇠잔하나 하나님은 내 마음의 반석이시요 영원한 분깃이시라",
      "cognitive": "마음이 비어 있고 하나님을 사모하는 감정도 없다면 하나님과의 관계는 끝난 것이다. 내가 하나님을 붙잡지 못하면 하나님도 나를 붙들지 않으실 것이다.",
      "opinion": "육체와 마음이 모두 지치면 하나님을 향한 마음마저 사라진 것처럼 느껴질 수 있습니다. 예배나 말씀을 생각해도 아무 반응이 없고, 하나님보다 공허함이 더 크게 느껴지면 관계가 끝난 것 같은 두려움이 생길 수 있습니다.\n\n그러나 시편 기자는 자신의 육체와 마음이 쇠잔한 상태에서도 하나님께서 오른손을 붙들고 계신다고 고백합니다. 내가 하나님을 강하게 사모하지 못하는 순간에도 하나님께서 나를 붙드시는 사랑은 사라지지 않습니다. 지금은 내 안에 믿음이 얼마나 남아 있는지를 확인하기보다, 쇠잔한 나를 하나님께서 먼저 붙들고 계신다는 사실을 받아들여야 합니다.",
      "dose": "오늘은 하나님을 향한 감정을 만들어 내려고 하지 않아도 됩니다. “내 육체와 마음은 쇠잔하나 하나님은 내 마음의 반석이시다”라는 말씀을 한 번 읽고, 지금의 지침을 그대로 인정해 보세요.\n\n그다음 오늘 나를 조금 덜 지치게 할 수 있는 행동 하나를 선택하세요. 물을 마시거나, 잠시 쉬거나, 해야 할 일을 하나 줄이는 것도 괜찮습니다. 하나님을 사랑하는 마음을 증명하기 위해 자신을 더 소진시키지 마세요. 지금 필요한 쉼도 하나님께서 나를 돌보시는 사랑 안에 있습니다.",
      "caution": "마음이 비어 있고 하나님을 사모하는 감정이 느껴지지 않아도 관계가 끝난 것은 아닙니다. 내가 붙잡지 못하는 순간에도 하나님께서 먼저 붙들고 계십니다.",
      "practice": "감정을 억지로 채우려 하지 말고 ‘하나님은 내 마음의 반석이시다’라는 구절을 천천히 읽어보세요. 그대로 잠시 쉬어도 괜찮습니다."
    }]
  },
  "forgive": {
    "A": [{
      "num": "A.1",
      "state": "용서하면 잘못을 괜찮다고 인정하는 것 같아요",
      "reference": "로마서 12:19",
      "verse": "내 사랑하는 자들아 너희가 친히 원수를 갚지 말고 진노하심에 맡기라 기록되었으되 원수 갚는 것이 내게 있으니 내가 갚으리라고 주께서 말씀하시니라",
      "cognitive": "내가 분노를 내려놓으면 상대의 잘못도 사라지고, 그 일이 괜찮았다고 인정하는 것이 된다",
      "opinion": "당신이 그 일을 계속 붙들고 있는 것은 미워하는 사람이어서가 아니라, 그 일이 분명히 잘못되었다는 사실을 잊고 싶지 않기 때문일 수 있어요. 아무도 그 잘못을 제대로 알아주지 않는 것 같으면, 내가 계속 기억하고 분노해야만 그 일이 잘못으로 남아 있을 것처럼 느껴질 수 있습니다.\n\n그러나 하나님은 당신에게 잘못을 괜찮다고 말하라고 요구하시기 전에, 그 일이 당신에게 얼마나 아팠는지를 알고 계십니다. 하나님께서는 상처받은 당신을 외면하지 않으시며, 상대의 잘못도 가볍게 넘기지 않으십니다. 용서는 잘못을 정당화하는 일이 아니라, 내가 떠안고 있던 최종 판단을 공의로우신 하나님께 돌려드리는 일입니다.",
      "dose": "오늘은 억지로 괜찮다고 말하지 마세요. 먼저 하나님께 그 일이 분명히 잘못되었고, 그 일로 인해 내가 여전히 아프다는 사실을 솔직히 말씀드려 보세요.\n\n상대가 책임져야 할 몫까지 내가 짊어지고 있지는 않은지도 돌아보세요. 상대의 책임은 하나님께 맡기고, 오늘은 상처받은 내 마음을 보호하고 회복하는 행동 한 가지를 선택해 보세요.",
      "caution": "용서는 상대의 잘못을 괜찮았다고 인정하는 일이 아닙니다. 그 잘못에 대한 최종 판단을 하나님께 맡기는 것입니다.",
      "practice": "억지로 화를 없애려 하지 말고 ‘그 일은 분명 잘못이었습니다. 판단은 하나님께 맡깁니다’라고 한 문장 말해보세요."
    }, {
      "num": "A.2",
      "state": "상대가 사과해야 용서할 수 있어요",
      "reference": "에베소서 4:32",
      "verse": "서로 인자하게 하며 불쌍히 여기며 서로 용서하기를 하나님이 그리스도 안에서 너희를 용서하심과 같이 하라",
      "cognitive": "상대가 먼저 자신의 잘못을 인정하고 충분히 사과해야만 내 마음도 자유로워질 수 있다",
      "opinion": "사과를 기다리는 마음에는 단순한 고집이 아니라, 내가 겪은 일이 사실이었다는 확인을 받고 싶은 간절함이 들어 있을 수 있어요. 상대가 자신의 잘못을 인정해야만 비로소 내 아픔도 인정받는 것처럼 느껴질 수 있습니다.\n\n그러나 당신의 상처가 사실이라는 것은 상대의 인정에만 달려 있지 않습니다. 하나님은 상대가 외면한 순간에도 당신이 겪은 일을 알고 계셨고, 당신을 향한 사랑을 거두지 않으셨습니다. 용서의 출발점은 상대의 올바른 반응이 아니라, 그리스도 안에서 내가 먼저 사랑받고 용서받은 사람이라는 사실입니다.",
      "dose": "상대가 사과하지 않아도 아무렇지 않다고 성급히 결론 내리지 마세요. 대신 상대의 사과 여부가 내 삶 전체를 계속 붙들게 하지는 않겠다고 하나님께 말씀드려 보세요.\n\n사과를 받지 못했다는 사실과 하나님의 사랑을 받지 못했다는 사실을 같은 것으로 여기지 않도록 해보세요. 상대가 인정하지 않아도 하나님은 내 아픔을 알고 계시며, 그 순간에도 나를 놓지 않으셨다는 사실을 먼저 붙들어 보세요.",
      "caution": "상대의 사과를 바라는 마음은 자연스럽습니다. 하지만 내 마음의 회복이 상대의 반응에만 달려 있어야 하는 것은 아닙니다.",
      "practice": "‘상대가 사과하지 않아도 제 마음을 하나님께 먼저 맡기고 싶습니다’라고 적어보세요. 지금 바로 용서가 되지 않아도 괜찮습니다."
    }, {
      "num": "A.3",
      "state": "용서하면 다시 가까워져야 할 것 같아요",
      "reference": "골로새서 3:13",
      "verse": "누가 뉘게 혐의가 있거든 서로 용납하여 피차 용서하되 주께서 너희를 용서하신 것과 같이 너희도 그리하고",
      "cognitive": "용서한다면 이전처럼 다시 가까워지고, 상대를 신뢰하며 관계까지 회복해야 한다",
      "opinion": "당신이 용서를 망설이는 것은 마음이 좁아서가 아니라, 용서한 뒤 다시 같은 상처를 받을까 두렵기 때문일 수 있어요. 반복해서 상처를 받았다면 용서하라는 말이 다시 참고 받아주라는 요구처럼 들릴 수 있습니다.\n\n그러나 하나님은 당신에게 무방비한 사람이 되라고 요구하지 않으십니다. 하나님의 사랑은 나를 함부로 내어주게 만드는 사랑이 아니라, 지혜롭게 자신을 지키면서도 미움에 붙잡히지 않도록 자유롭게 하는 사랑입니다. 용서는 마음속 보복을 내려놓는 것이며, 관계 회복과 신뢰는 상대의 책임 있는 변화가 확인될 때 천천히 결정할 수 있습니다.",
      "dose": "용서와 화해와 신뢰가 모두 같은 것은 아니라는 점을 기억해 보세요. 용서는 내가 하나님 앞에서 시작할 수 있지만, 화해에는 두 사람의 참여가 필요하고 신뢰는 반복되는 정직한 행동을 통해 다시 쌓여야 합니다.\n\n상대와 다시 가까워질 준비가 되지 않았다면 억지로 거리를 좁히지 않아도 됩니다. 나는 미움에 붙잡혀 살고 싶지는 않지만 같은 상처가 반복되도록 허용하지도 않겠다고 하나님께 말씀드려 보세요.",
      "caution": "용서한다고 해서 예전처럼 가까워지거나 다시 신뢰해야 하는 것은 아닙니다. 관계를 회복하는 일과 용서는 따로 생각할 수 있습니다.",
      "practice": "지금 내가 지켜야 할 거리나 선을 한 가지 적어보세요. ‘여기까지는 괜찮고, 이 이상은 어렵다’고 분명히 정해도 괜찮습니다."
    }, {
      "num": "A.4",
      "state": "아직 화가 나는 나는 믿음이 부족한 것 같아요",
      "reference": "요한일서 4:10-11",
      "verse": "사랑은 여기 있으니 우리가 하나님을 사랑한 것이 아니요 오직 하나님이 우리를 사랑하사 우리 죄를 위하여 화목제로 그 아들을 보내셨음이니라 사랑하는 자들아 하나님이 이같이 우리를 사랑하셨은즉 우리도 서로 사랑하는 것이 마땅하도다",
      "cognitive": "하나님을 믿는 사람이라면 상처를 받은 뒤에도 빨리 감정을 정리하고 바로 용서할 수 있어야 한다",
      "opinion": "용서가 늦어지는 자신을 보며 나는 왜 이것도 못할까 하고 책망하고 있을 수 있어요. 하지만 하나님은 당신이 감정을 완벽하게 정리하고 올바르게 행동한 뒤에야 사랑하시는 분이 아닙니다. 우리가 먼저 하나님을 잘 사랑해서 받아주신 것이 아니라, 하나님께서 먼저 우리를 사랑하셨습니다.\n\n그러므로 용서는 하나님의 사랑을 얻기 위해 통과해야 하는 시험이 아닙니다. 먼저 사랑받은 사람이 그 사랑 안에서 조금씩 배워가는 반응입니다. 아직 화가 난다는 사실이 믿음이 없다는 증거는 아니며, 숨기고 싶었던 분노까지 사랑하시는 하나님께 가지고 나아가는 것이 믿음의 시작일 수 있습니다.",
      "dose": "오늘은 용서하려는 노력보다 먼저 내가 하나님을 잘 사랑하기 전에 하나님께서 먼저 나를 사랑하셨다는 말씀을 마음에 두어보세요.\n\n하나님께 아직 화가 나지만 이 감정 때문에 하나님의 사랑에서 밀려난 것은 아니라는 사실을 믿고 싶다고 말씀드려 보세요. 오늘의 순종은 화를 당장 없애는 것이 아니라, 그 감정을 숨기지 않고 하나님께 가져가는 것입니다.",
      "caution": "아직 화가 남아 있다고 해서 믿음이 부족한 것은 아닙니다. 상처받은 마음에는 시간이 필요할 수 있습니다.",
      "practice": "감정을 빨리 정리하려 하지 말고, 지금 남아 있는 화와 서운함을 하나님께 그대로 말씀드려 보세요."
    }, {
      "num": "A.5",
      "state": "내가 먼저 용서하면 지는 것 같아요",
      "reference": "베드로전서 2:23",
      "verse": "욕을 받으시되 대신 욕하지 아니하시고 고난을 받으시되 위협하지 아니하시고 오직 공의로 심판하시는 자에게 부탁하시며",
      "cognitive": "상대에게 똑같이 돌려주거나 끝까지 분노를 붙들어야만 내가 약한 사람이 되지 않는다",
      "opinion": "상처를 받은 뒤 분노를 붙들고 있는 것은 다시는 무시당하지 않기 위한 마음의 방어일 수 있어요. 내가 먼저 손을 놓는 순간 상대가 이긴 것 같고, 아무 일도 없었던 것처럼 넘어갈까 두려울 수 있습니다.\n\n그러나 예수님께서 보복하지 않으신 것은 힘이 없으셨기 때문이 아닙니다. 자신을 사랑하시는 하나님과 공의로 판단하시는 하나님을 신뢰하셨기 때문에 상대의 방식으로 자신을 증명하지 않으셨습니다. 용서는 패배가 아니라, 상대의 행동이 더 이상 내 마음과 삶의 방향을 결정하지 못하도록 하나님께 주도권을 돌려드리는 선택입니다.",
      "dose": "상대에게 하고 싶었던 말과 행동을 하나님께 먼저 솔직히 말씀드리세요. 나도 똑같이 아프게 해주고 싶었다는 마음까지 숨기지 않아도 됩니다.\n\n그 후 이 사람의 행동이 오늘의 나를 결정하지 않게 해달라고 기도해 보세요. 상대를 향한 좋은 감정을 억지로 만들기보다, 오늘 내가 하지 않을 보복 한 가지를 선택하고 그 판단을 하나님께 맡겨보세요.",
      "caution": "먼저 용서하는 것이 지는 것은 아닙니다. 상대에게 되갚는 대신 공의로우신 하나님께 판단을 맡기는 선택입니다.",
      "practice": "상대에게 돌려주고 싶은 말이나 행동이 떠오르면, 그대로 하지 말고 한 문장으로 적어보세요. 그 뒤 ‘하나님, 이 마음을 주께 맡깁니다’라고 말해보세요."
    }],
    "B": [{
      "num": "B.1",
      "state": "지금은 용서하라는 말조차 버거워요",
      "reference": "시편 34:18",
      "verse": "여호와는 마음이 상한 자에게 가까이 하시고 중심에 통회하는 자를 구원하시는도다",
      "cognitive": "아직 용서할 힘이 없어도 지금 당장 용서를 결심해야 하며, 그렇지 못하면 하나님과도 멀어질 것이다",
      "opinion": "지금 당신에게 용서라는 말은 위로보다 또 하나의 숙제처럼 들릴 수 있어요. 마음이 이미 많이 지쳐 있는데 상대를 이해하고 품어야 한다는 말까지 들으면, 내 아픔은 중요하지 않은 것처럼 느껴질 수 있습니다.\n\n그러나 하나님은 용서를 잘 해낸 사람에게만 가까이하시는 분이 아닙니다. 마음이 상하고 무너져 아무것도 정리할 수 없는 사람에게 먼저 가까이 오시는 분입니다. 하나님은 용서를 완성한 뒤의 당신만 사랑하시는 것이 아니라, 아직 억울하고 분노하며 용서할 힘조차 없는 지금의 당신을 먼저 붙들고 계십니다.",
      "dose": "오늘은 상대를 용서하려고 애쓰지 않아도 됩니다. 말할 힘이 있다면 지금은 용서라는 말도 버거우니 내 상한 마음에 먼저 가까이 와달라고 하나님께 짧게 말씀드려 보세요.\n\n이 기도조차 힘들다면 가만히 있어도 괜찮습니다. 오늘은 용서를 결심하는 날이 아니라, 용서할 힘이 없는 지금도 하나님께서 나를 외면하지 않으신다는 사실을 받아들이는 날이어도 충분합니다.",
      "caution": "지금 용서할 힘이 없어도 괜찮습니다. 그 마음 때문에 하나님과 멀어지거나 사랑받지 못하는 것은 아닙니다.",
      "practice": "용서를 결심하려 애쓰기보다 ‘하나님, 지금은 제 상처를 먼저 봐주세요’라고 말해보세요. 그 말만으로도 충분합니다."
    }, {
      "num": "B.2",
      "state": "하나님도 내 상처보다 용서만 원하시는 것 같아요",
      "reference": "시편 147:3",
      "verse": "상심한 자를 고치시며 저희 상처를 싸매시는도다",
      "cognitive": "하나님은 내가 얼마나 아팠는지보다, 내가 상대를 빨리 용서하고 올바르게 행동하는 데에만 관심이 있으시다",
      "opinion": "용서에 관한 말씀을 들을 때마다 하나님마저 내 편이 아닌 것처럼 느껴질 수 있어요. 하나님도 나에게만 참고 양보하라고 하시는 것 같고, 정작 내가 입은 상처는 제대로 보지 않으시는 것처럼 느껴질 수 있습니다.\n\n하지만 하나님은 상처를 무시한 채 행동부터 고치시는 분이 아닙니다. 하나님은 상심한 사람을 고치시며 상처를 싸매시는 분입니다. 당신에게 용서를 말씀하시기 전에, 상처 입은 당신 곁으로 먼저 오시고 그 상처를 하나님의 사랑으로 돌보십니다.",
      "dose": "지금은 내 상처를 설명하거나 글로 적을 힘이 없어도 괜찮습니다. 무엇이 힘든지 정확히 말하지 못하더라도, 하나님은 그때 있었던 일과 지금의 마음을 이미 알고 계십니다.\n\n아무 말도 하기 어렵다면 마음속으로 하나님이 제 마음을 아시지요라고 한 번만 말씀드려도 됩니다. 그것조차 어렵다면 가만히 머물러도 괜찮습니다. 오늘은 용서의 결론을 내리거나 무엇을 해내는 날이 아니라, 상처 입은 나를 하나님께서 외면하지 않으신다는 사실만 받아들이는 날이어도 충분합니다.",
      "caution": "하나님은 당신이 얼마나 빨리 용서하는지만 보시는 분이 아닙니다. 먼저 상한 마음을 아시고 돌보시는 분입니다.",
      "practice": "무엇을 고쳐야 할지 생각하기 전에, 지금 가장 아픈 상처 하나를 하나님께 솔직히 말씀드려 보세요."
    }, {
      "num": "B.3",
      "state": "또 상처받을까 봐 마음을 놓을 수 없어요",
      "reference": "이사야 43:1-2",
      "verse": "야곱아 너를 창조하신 여호와께서 이제 말씀하시느니라 이스라엘아 너를 조성하신 자가 이제 말씀하시느니라 너는 두려워 말라 내가 너를 구속하였고 내가 너를 지명하여 불렀나니 너는 내 것이라 네가 물 가운데로 지날 때에 내가 함께할 것이라 강을 건널 때에 물이 너를 침몰치 못할 것이며 네가 불 가운데로 행할 때에 타지도 아니할 것이요 불꽃이 너를 사르지도 못하리니",
      "cognitive": "분노와 경계를 조금이라도 내려놓으면 나는 다시 무방비해지고, 이전과 같은 상처를 피할 수 없다",
      "opinion": "마음을 놓지 못하는 것은 상대를 계속 미워하고 싶어서가 아니라, 다시는 같은 일을 겪고 싶지 않기 때문일 수 있어요. 한 번 무너졌던 마음은 작은 징후에도 위험을 감지하며 스스로를 지키려고 합니다.\n\n하나님은 당신에게 경계 없는 관계로 돌아가라고 강요하지 않으십니다. 너는 내 것이라고 말씀하시며 위험을 혼자 통과하도록 버려두지 않으십니다. 하나님의 사랑 안에서 용서는 안전장치를 모두 없애는 일이 아니라, 필요한 경계를 세우면서도 두려움과 미움이 내 삶 전체를 지배하지 못하게 하는 과정입니다.",
      "dose": "상대와의 관계에서 지금 내게 필요한 안전거리를 생각해 보세요. 연락을 줄이거나, 혼자 만나지 않거나, 필요한 말만 나누는 것도 가능합니다. 안전거리를 두는 것은 상대를 벌주거나 무시하는 행동이 아니라, 같은 상처가 반복되지 않도록 내 마음을 지키는 선택일 수 있습니다.\n\n거리를 둔다고 해서 반드시 상대를 미워하는 것은 아닙니다. 상대를 함부로 대하지 않으면서도 내가 감당할 수 있는 범위까지만 관계를 허용할 수 있습니다. 이 사람을 미움으로 밀어내지 않으면서도 내 마음을 지킬 수 있는 지혜를 달라고 하나님께 기도해 보세요.",
      "caution": "나를 지키는 경계와 용서는 함께 갈 수 있습니다. 다시 상처받을 수 있는 자리에 무방비하게 머물 필요는 없습니다.",
      "practice": "지금 나를 지키기 위해 필요한 거리를 하나 정해보세요. 연락을 줄이거나 혼자 만나지 않는 것처럼 실제로 지킬 수 있는 선이면 좋습니다."
    }, {
      "num": "B.4",
      "state": "그 일을 생각하면 기도할 말도 나오지 않아요",
      "reference": "로마서 8:26",
      "verse": "이와 같이 성령도 우리 연약함을 도우시나니 우리가 마땅히 빌 바를 알지 못하나 오직 성령이 말할 수 없는 탄식으로 우리를 위하여 친히 간구하시느니라",
      "cognitive": "내 마음을 정확히 설명하거나 제대로 기도하지 못하면 하나님도 내 아픔을 이해하실 수 없다",
      "opinion": "상처가 너무 깊으면 무슨 말을 해야 할지 모르거나, 그 일을 떠올리는 순간 마음이 굳어질 수 있어요. 기도하려 해도 같은 생각만 반복되고, 하나님 앞에서도 아무 말이 나오지 않을 수 있습니다.\n\n그러나 하나님은 당신이 아픔을 잘 설명해야만 이해하시는 분이 아닙니다. 말로 꺼내지 못한 마음과 눈물조차 이미 알고 계십니다. 지금의 침묵도 믿음의 실패가 아니라, 하나님의 사랑과 돌봄이 필요한 마음의 상태일 수 있습니다.",
      "dose": "기도할 말이 나오지 않는다면 마음을 억지로 정리하거나 긴 기도를 만들지 않아도 됩니다. 말할 힘이 있다면 그 일을 떠올릴 때 드는 마음을 억울함, 두려움, 배신감, 분노, 슬픔 가운데 한 단어로만 하나님께 말씀드려 보세요.\n\n한 단어조차 떠오르지 않는다면 하나님께 아직 이 마음을 다 설명하지 못하지만, 그때 무슨 일이 있었고 내가 무엇 때문에 아픈지 하나님은 아신다고 말씀드려도 됩니다. 이 기도조차 어렵다면 아무 말 없이 머물러도 괜찮습니다. 하나님은 내가 설명한 만큼만 아시는 분이 아닙니다.",
      "caution": "마음을 정확히 설명하지 못해도 하나님께서는 말이 되지 않는 아픔까지 아십니다. 기도를 잘해야만 이해받는 것은 아닙니다.",
      "practice": "그 일을 떠올릴 때 나오는 한숨이나 한 단어를 그대로 하나님께 드려보세요. 문장으로 만들지 않아도 괜찮습니다."
    }, {
      "num": "B.5",
      "state": "이 상처 때문에 하나님의 사랑도 느껴지지 않아요",
      "reference": "로마서 8:38-39",
      "verse": "내가 확신하노니 사망이나 생명이나 천사들이나 권세자들이나 현재 일이나 장래 일이나 능력이나 높음이나 깊음이나 다른 아무 피조물이라도 우리를 우리 주 그리스도 예수 안에 있는 하나님의 사랑에서 끊을 수 없으리라",
      "cognitive": "사람에게 버림받거나 깊이 상처받은 나는 하나님의 사랑에서도 멀어졌으며, 하나님도 나를 지켜주지 않으셨다",
      "opinion": "믿었던 사람에게 상처를 받으면 그 사람과의 관계뿐 아니라 하나님과의 관계까지 흔들릴 수 있어요. 하나님이 나를 사랑하신다면 왜 이런 일이 일어났을까 하는 생각이 들고, 말씀을 읽어도 하나님의 사랑이 실제처럼 느껴지지 않을 수 있습니다.\n\n그러나 하나님의 사랑은 지금 내가 얼마나 따뜻하게 느끼는지에 따라 생겼다가 사라지는 사랑이 아닙니다. 어떤 사람의 행동도, 지금의 혼란과 분노도 그리스도 예수 안에 있는 하나님의 사랑에서 당신을 끊을 수 없습니다. 용서의 시작은 상대를 사랑하려고 애쓰는 것이 아니라, 상처 속에서도 내가 여전히 하나님의 사랑 안에 있다는 사실을 다시 붙드는 것입니다.",
      "dose": "오늘은 상대를 용서하려고 서두르기보다, 상처받은 지금도 하나님의 사랑이 나에게서 거두어지지 않았다는 말씀을 먼저 붙들어 보세요.\n\n말할 힘이 있다면 이 일로 많이 흔들렸고 지금도 사랑받는다는 사실이 잘 느껴지지 않지만, 이 상처와 상대가 한 행동도 나를 하나님의 사랑에서 끊을 수 없다는 말씀을 믿고 싶다고 하나님께 고백해 보세요. 오늘은 나는 상처받았지만 하나님의 사랑에서 버려진 사람은 아니다라는 문장만 마음에 두어도 괜찮습니다.",
      "caution": "깊이 상처받았다고 해서 하나님의 사랑에서 끊어진 것은 아닙니다. 사람에게 받은 상처가 하나님의 마음까지 바꾸지는 못합니다.",
      "practice": "로마서 8장 38–39절을 나에게 들려주듯 천천히 읽어보세요. 마음에 잘 들어오지 않아도 끝까지 읽는 것만으로 괜찮습니다."
    }]
  },
  "waiting": {
    "A": [{
      "num": "A.1",
      "state": "내가 움직이지 않으면 아무 일도 일어나지 않을 것 같아요",
      "reference": "잠언 16:9",
      "verse": "사람이 마음으로 자기의 길을 계획할지라도 그 걸음을 인도하는 자는 여호와시니라",
      "cognitive": "모든 과정을 내가 책임져야 한다는 생각",
      "opinion": "당신이 계속 움직이려는 것은 가만히 있지 못하는 성격 때문만은 아닐 수 있어요. 맡겨진 일을 잘 감당하고 싶고, 준비하지 못해 중요한 것을 놓치는 일이 생기지 않기를 바라는 마음일 수 있습니다. 책임감이 큰 사람일수록 기다리는 동안에도 무엇인가를 해야 안심되기 때문입니다.\n\n그러나 하나님은 모든 길을 혼자 만들어 온 사람만 사랑하시는 분이 아닙니다. 내가 모든 것을 통제하지 못하고 계획한 대로 움직이지 못하는 순간에도 하나님의 사랑은 줄어들지 않습니다. 하나님은 결과만 지켜보시는 분이 아니라 오늘의 걸음을 함께 인도하시는 분입니다. 기다림은 책임을 버리는 시간이 아니라, 내가 할 몫과 하나님의 인도하심을 구분하는 시간이 될 수 있습니다.",
      "dose": "오늘 해결해야 한다고 생각한 일을 모두 적은 뒤, 지금 실제로 할 수 있는 한 가지만 골라보세요. 필요한 연락이나 준비를 한 번 실행했다면, 아직 내 손에 오지 않은 다음 단계까지 미리 붙잡으려 하지 않아도 괜찮습니다.\n\n그 후 “하나님, 오늘 제가 걸어야 할 길은 보여주시고 제가 만들 수 없는 다음 걸음은 주께 맡깁니다”라고 기도해 보세요. 모든 결과를 책임지려 하기보다, 사랑으로 인도하시는 하나님과 오늘의 한 걸음을 걷는 연습을 해보세요.",
      "caution": "오늘 할 일을 해내는 것과 모든 결과를 내가 만들어내야 한다는 것은 다릅니다. 내가 할 수 없는 부분까지 책임지려 하지 않아도 괜찮습니다.",
      "practice": "오늘 실제로 할 수 있는 한 걸음만 적어보세요. 그다음 일은 ‘지금 내 힘으로 만들 수 없는 일’이라고 적고 잠시 내려놓아 보세요."
    }, {
      "num": "A.2",
      "state": "내가 생각한 때를 놓치면 모든 것이 잘못될 것 같아요",
      "reference": "이사야 30:18",
      "verse": "그러나 여호와께서 기다리시나니 이는 너희에게 은혜를 베풀려 하심이요 일어나시리니 이는 너희를 긍휼히 여기려 하심이라 대저 여호와는 공의의 하나님이심이라 무릇 그를 기다리는 자는 복이 있도다",
      "cognitive": "내가 정한 시기와 하나님의 때를 동일하게 여김",
      "opinion": "당신이 시간을 자꾸 확인하는 것은 단순히 성격이 급해서가 아닐 수 있어요. 기다렸던 일이 늦어질수록 하나님께서 나를 잊으신 것은 아닌지, 내가 잘못된 길에 서 있는 것은 아닌지 불안해졌을 수 있습니다. 그래서 마음속으로 정해 놓은 시기까지 아무 변화가 없으면 하나님의 인도와 사랑도 멀어진 것처럼 느껴질 수 있습니다.\n\n그러나 이 말씀에서 하나님은 멀리서 사람의 기다림을 지켜보기만 하시는 분이 아닙니다. 자기 백성에게 은혜와 긍휼을 베풀기 원하시는 분으로 나타나십니다. 내가 조급함 속에서 하나님을 제대로 바라보지 못하는 순간에도 하나님은 관계를 포기하지 않으십니다. 기다림은 사랑이 보류된 시간이 아니라, 하나님의 긍휼이 여전히 나를 향하고 있음을 배우는 시간이 될 수 있습니다.",
      "dose": "내가 마음속으로 정해 놓은 시기를 적어보세요. “이때까지는 반드시 되어야 해”, “이 정도 기다렸으면 답이 나와야 해”라는 기준이 있다면 숨기지 말고 그대로 적어도 괜찮습니다. 그것이 말씀에서 비롯된 기준인지, 늦어질까 두려운 마음이 만든 기한인지 구분해 보세요.\n\n이사야 30장 18절을 읽으며 “하나님은 지금도 제게 은혜를 베풀기 원하시고 저를 긍휼히 여기십니다”라고 고백해 보세요. 결과가 보이는지로 하나님의 사랑을 판단하지 말고, 기다리는 오늘에도 변함없이 나를 사랑하시는 하나님을 한 번 더 바라보세요.",
      "caution": "내가 정해둔 기한이 지났다고 해서 하나님의 은혜가 늦어진 것은 아닙니다. 결과가 보이지 않아도 하나님의 사랑은 변하지 않습니다.",
      "practice": "마음속으로 정해둔 ‘이때까지는 되어야 해’라는 기한을 적어보세요. 그 아래 ‘하나님, 제 시간표보다 주님의 인도를 믿고 싶습니다’라고 적어보세요."
    }, {
      "num": "A.3",
      "state": "결과가 보이지 않으면 믿음을 유지하기 어려워요",
      "reference": "로마서 8:24-25",
      "verse": "우리가 소망으로 구원을 얻었으매 보이는 소망이 소망이 아니니 보는 것을 누가 바라리요 만일 우리가 보지 못하는 것을 바라면 참음으로 기다릴찌니라",
      "cognitive": "보이는 변화만 하나님의 일하심으로 인정함",
      "opinion": "작은 변화라도 확인하고 싶은 것은 하나님을 전혀 믿지 않아서가 아닐 수 있어요. 오히려 하나님께서 내 기도를 들으셨다는 사실을 믿고 싶고, 그 사랑을 눈에 보이는 표지로 확인하고 싶은 마음일 수 있습니다. 아무것도 달라지지 않는 것처럼 보이면 “정말 나를 보고 계신 것이 맞을까?”라는 질문이 생길 수 있습니다.\n\n그러나 하나님의 사랑은 상황의 변화가 나타난 뒤에야 시작되는 것이 아닙니다. 아직 보이지 않는 시간에도 하나님은 우리와 함께하시며, 사랑 안에서 소망을 지키도록 붙들어 주십니다. 믿음은 아무 의심도 느끼지 않는 상태가 아니라, 보이지 않는 가운데서도 나를 사랑하시는 하나님께 마음을 다시 두는 선택입니다.",
      "dose": "오늘 결과를 확인하려고 반복한 행동이 있는지 살펴보세요. 같은 내용을 계속 확인하거나 앞으로 일어날 일을 반복해서 예상했다면, 그중 한 가지를 정해 잠시 멈추어 보세요.\n\n불안이 올라오면 로마서 8장 24–25절을 천천히 읽으세요. “아직 보이지 않아도 하나님의 사랑은 사라지지 않았습니다. 오늘은 주님 안에서 소망을 지키겠습니다”라고 고백하며, 결과를 확인하는 대신 말씀 안에 잠시 머물러 보세요.",
      "caution": "아직 변화가 보이지 않는다고 해서 하나님께서 일하지 않으시는 것은 아닙니다. 눈에 보이는 결과만으로 하나님의 사랑을 판단하지 않아도 됩니다.",
      "practice": "오늘 반복해서 확인하던 행동 하나를 잠시 멈춰보세요. 그 시간에는 로마서 8장 24–25절을 천천히 한 번 읽어보세요."
    }, {
      "num": "A.4",
      "state": "기다리는 동안에도 내가 잘하고 있는지 자꾸 의심돼요",
      "reference": "로마서 12:12",
      "verse": "소망 중에 즐거워하며 환난 중에 참으며 기도에 항상 힘쓰며",
      "cognitive": "변화가 보이지 않으면 과정도 잘못되었다고 판단함",
      "opinion": "기다리는 동안 마음이 자꾸 흔들리는 것은 하나님께 진실하지 않아서가 아닐 수 있어요. 오히려 하나님의 뜻에서 벗어나고 싶지 않고, 잘못된 길에서 시간을 보내고 싶지 않아서 지금의 선택과 과정을 반복해서 확인하는 것일 수 있습니다. 하지만 분명한 변화가 보이지 않을 때마다 지금까지의 모든 과정을 의심하면, 기다림은 하나님과 함께 걷는 시간이 아니라 끊임없이 자신을 검사하는 시간이 될 수 있습니다.\n\n하나님은 확신이 가득하고 흔들리지 않는 모습만 사랑하시는 분이 아닙니다. 내가 오늘의 길을 분명히 알지 못해도, 다시 기도하며 하나님을 향하려는 마음을 사랑으로 받아주십니다. 말씀은 완벽히 준비된 뒤 참으라고 하지 않고, 소망 가운데 하나님을 바라보며 환난 중에 견디고 기도를 이어가라고 합니다. 기다림의 가치는 결과가 얼마나 빨리 나타나는지가 아니라, 그 시간에도 사랑하시는 하나님과의 관계를 놓지 않는 데 있습니다.",
      "dose": "오늘은 “내가 제대로 기다리고 있는가?”라는 질문에 완벽한 답을 내리려 하지 마세요. 대신 지금까지 하나님 앞에서 지키고자 했던 마음과 과정을 돌아보세요. 기도한 것, 말씀을 붙든 것, 성급하게 결론 내리지 않은 것처럼 이미 이어오고 있는 과정이 있다면 가볍게 여기지 마세요.\n\n“하나님, 변화가 보이지 않는다고 지금까지의 모든 과정을 부정하지 않게 해주세요. 저를 사랑하시고 이끄시는 주님을 바라보며 오늘의 기도를 이어가겠습니다”라고 고백해 보세요. 오늘 필요한 것은 완벽한 준비를 마치는 일이 아니라, 준비되지 않은 마음까지 하나님께 다시 가져가는 것입니다.",
      "caution": "변화가 보이지 않아도 지금까지 드린 기도와 기다림이 사라지는 것은 아닙니다. 모든 과정을 잘못된 것으로 돌리지 않아도 괜찮습니다.",
      "practice": "‘내가 제대로 기다렸나’라는 판단은 잠시 멈추고, 지금까지 지켜온 마음이나 행동 한 가지를 적어보세요. 그것을 가볍게 여기지 말아보세요."
    }, {
      "num": "A.5",
      "state": "기다리는 동안 마음이 흔들리면 믿음이 부족한 것 같아요",
      "reference": "시편 27:13-14",
      "verse": "내가 산 자의 땅에 있음이여 여호와의 은혜 볼 것을 믿었도다 너는 여호와를 바랄찌어다 강하고 담대하며 여호와를 바랄찌어다",
      "cognitive": "흔들리는 감정과 믿음의 부재를 동일하게 여김",
      "opinion": "기다림 속에서 마음이 흔들리는 것은 하나님을 사랑하지 않거나 믿음이 전혀 없기 때문이 아닐 수 있어요. 오히려 하나님을 믿고 싶고 그분의 은혜를 보고 싶은 마음이 크기 때문에, 보이지 않는 시간이 더 아프게 느껴지는 것일 수 있습니다. 믿음이 있는 사람도 답답할 수 있고, 낙심할 수 있으며, 다시 기다릴 힘을 잃을 수 있습니다.\n\n하나님은 흔들리지 않는 모습을 보여야만 우리를 사랑하시는 분이 아닙니다. 시편의 기자도 두려움과 위협 속에서 하나님의 얼굴을 찾고, 버리지 말아 달라고 부르짖은 뒤 여호와를 기다리겠다고 고백했습니다. 믿음은 한 번도 흔들리지 않는 감정이 아니라, 흔들린 마음을 가지고도 나를 영접하시는 하나님께 다시 돌아가는 것입니다.",
      "dose": "오늘 마음이 흔들렸던 순간을 한 가지 떠올려 보세요. “왜 이것밖에 믿지 못하지?”라고 판단하기 전에, 그 순간 무엇이 가장 두렵고 서러웠는지를 하나님께 말씀드려 보세요. 감정을 숨기지 않는 것은 믿음에서 멀어지는 일이 아니라 하나님과의 관계 안으로 마음을 가져오는 일입니다.\n\n그 후 시편 27장 13–14절을 읽으며 “마음이 흔들려도 하나님께 다시 돌아가겠습니다. 아직 보이지 않지만 하나님의 은혜와 사랑을 기다리겠습니다”라고 고백해 보세요. 담대한 감정을 억지로 만들기보다, 하나님 곁을 떠나지 않는 작은 선택을 해보세요.",
      "caution": "마음이 흔들리는 것과 믿음이 없는 것은 같은 일이 아닙니다. 흔들리는 마음도 하나님께 그대로 가져갈 수 있습니다.",
      "practice": "오늘 마음이 흔들렸던 순간을 떠올려 보세요. 무엇이 가장 두려웠는지 하나님께 솔직하게 한 문장으로 말씀드려 보세요."
    }],
    "B": [{
      "num": "B.1",
      "state": "이제는 기다릴 힘이 거의 남지 않았어요",
      "reference": "이사야 40:29-31",
      "verse": "피곤한 자에게는 능력을 주시며 무능한 자에게는 힘을 더하시나니 소년이라도 피곤하며 곤비하며 장정이라도 넘어지며 자빠지되 오직 여호와를 앙망하는 자는 새 힘을 얻으리니 독수리의 날개치며 올라감 같을 것이요 달음박질하여도 곤비치 아니하겠고 걸어가도 피곤치 아니하리로다",
      "cognitive": "지친 상태에서도 계속 버텨야 한다는 생각",
      "opinion": "지금 기다림이 힘든 것은 인내심이 부족해서가 아니라, 이미 너무 오랫동안 마음에 힘을 주고 있었기 때문일 수 있어요. 기대했다가 실망하고 다시 믿어보려다가 또 흔들리는 일을 반복하면서 마음의 힘이 많이 줄어들었을 수 있습니다.\n\n하나님은 지친 사람에게 스스로 힘을 만들어 증명하라고 요구하시는 분이 아닙니다. 피곤한 자에게 능력을 주고 무능한 자에게 힘을 더하시는 분입니다. 지쳐서 제대로 기도하지 못하고 믿음이 약해진 순간에도 하나님의 사랑은 줄어들지 않습니다. 지금 필요한 것은 더 단단하게 버티는 것이 아니라, 사랑하시는 하나님께 기대어 힘을 공급받는 것입니다.",
      "dose": "오늘은 기다림을 잘해내려는 목표보다 몸과 마음을 쉬게 하는 일을 먼저 선택하세요. 식사하기, 물 마시기, 잠시 눕기, 천천히 걷기처럼 가장 기본적인 회복을 미루지 마세요. 쉬는 것을 믿음 없는 행동으로 판단하지 않아도 됩니다.\n\n기도도 길게 하지 않아도 괜찮습니다. “하나님, 기다릴 힘까지 제게 남아 있지 않습니다. 저를 사랑하시는 주께서 오늘 필요한 힘을 주세요”라고 말한 뒤 잠시 쉬세요. 내가 멈춘 동안에도 하나님은 나를 놓지 않으신다는 사실을 기억하세요.",
      "caution": "지금 쉬는 것은 믿음이 약해서가 아닙니다. 오래 기다리느라 지친 몸과 마음이 힘을 되찾는 데 필요한 시간입니다.",
      "practice": "기다림을 잘 견뎌야 한다는 생각은 잠시 내려놓으세요. 물 한 잔 마시기나 잠깐 눕기처럼 몸이 편해지는 일 하나를 먼저 해보세요."
    }, {
      "num": "B.2",
      "state": "하나님께서 내 기도를 잊으신 것 같아요",
      "reference": "시편 130:5-7",
      "verse": "나 곧 내 영혼이 여호와를 기다리며 내가 그 말씀을 바라는도다 파숫군이 아침을 기다림보다 내 영혼이 주를 더 기다리나니 참으로 파숫군의 아침을 기다림보다 더하도다 이스라엘아 여호와를 바랄찌어다 여호와께는 인자하심과 풍성한 구속이 있음이라",
      "cognitive": "하나님의 침묵을 사랑의 부재로 해석함",
      "opinion": "오래 기도했는데 상황이 그대로라면 하나님의 침묵이 거절처럼 느껴질 수 있어요. 무엇을 더 말해야 하는지 모르겠고, 다시 기대하는 일도 점점 두려워질 수 있습니다. 이 마음은 하나님께 관심이 없어서가 아니라, 하나님께 기대한 만큼 마음이 아프고 지친 상태일 수 있습니다.\n\n그러나 시편의 기자는 편안한 마음으로 기다린 것이 아닙니다. 깊은 곳에서 부르짖으며 파수꾼이 아침을 기다리는 것보다 더 간절하게 주를 기다렸습니다. 그가 기다릴 수 있었던 근거는 자신의 인내심이 아니라 하나님께 인자하심과 풍성한 구속이 있다는 사실이었습니다. 응답이 보이지 않는 순간에도 하나님의 사랑과 성품은 변하지 않습니다.",
      "dose": "기도가 나오지 않는 날에는 시편 130편 5–7절을 내 기도 대신 읽어도 괜찮습니다. 내 말이 부족해도 말씀을 붙들고 하나님 앞에 머무는 것 자체가 기도가 될 수 있습니다.\n\n오늘은 응답의 징후를 찾기보다 “아직 아침이 보이지 않지만 하나님의 인자하심은 사라지지 않았습니다”라고 고백해 보세요. 기다림을 끝내야만 쉴 수 있다고 생각하지 말고, 기다리는 중에도 사랑 안에서 잠시 쉬어가세요.",
      "caution": "응답이 보이지 않는 시간에도 하나님의 인자하심은 변하지 않습니다. 침묵이 곧 외면을 뜻하는 것은 아닙니다.",
      "practice": "기도가 잘 나오지 않는다면 시편 130편을 천천히 읽어보세요. 내 말 대신 말씀을 읽는 것만으로도 괜찮습니다."
    }, {
      "num": "B.3",
      "state": "아무 변화가 없어서 다시 소망하기가 두려워요",
      "reference": "예레미야애가 3:22-26",
      "verse": "여호와의 자비와 긍휼이 무궁하시므로 우리가 진멸되지 아니함이니이다 이것이 아침마다 새로우니 주의 성실이 크도소이다 내 심령에 이르기를 여호와는 나의 기업이시니 그러므로 내가 저를 바라리라 하도다 무릇 기다리는 자에게나 구하는 영혼에게 여호와께서 선을 베푸시는도다 사람이 여호와의 구원을 바라고 잠잠히 기다림이 좋도다",
      "cognitive": "현재의 상태가 앞으로도 계속될 것이라고 단정함",
      "opinion": "기대할 때마다 실망했다면 다시 소망하는 일조차 위험하게 느껴질 수 있어요. 괜히 기대했다가 더 아플 바에는 처음부터 아무것도 바라지 않는 편이 낫다고 생각할 수도 있습니다. 그것은 소망이 없는 사람이어서가 아니라, 마음이 더 상하지 않도록 스스로를 보호하는 방식일 수 있습니다.\n\n예레미야애가의 고백은 모든 상황이 좋아진 뒤에 나온 말이 아닙니다. 깊은 슬픔 속에서도 하나님의 자비와 긍휼이 끝나지 않았고, 그 성실하심이 아침마다 새롭다는 사실을 다시 기억한 고백입니다. 하나님은 내가 소망을 충분히 만들어야 사랑해 주시는 분이 아닙니다. 소망할 힘이 사라진 자리에서도 자비로 나를 붙드시는 분입니다.",
      "dose": "오늘은 큰 소망을 억지로 만들어내지 않아도 괜찮습니다. 대신 “앞으로도 절대 달라지지 않을 거야”라는 결론만 하루 동안 미뤄보세요. 아직 알 수 없는 미래를 가장 어두운 방향으로 확정하지 않는 것부터 시작해도 됩니다.\n\n“하나님, 제가 다시 기대하기에는 많이 지쳤습니다. 그래도 주의 자비와 사랑이 오늘도 새롭다는 말씀 앞에 머물겠습니다”라고 기도해 보세요. 내 확신의 크기보다 변하지 않는 하나님의 성실하심을 바라보세요.",
      "caution": "다시 기대하기 두려운 마음은 실망을 반복하지 않으려는 자연스러운 반응일 수 있습니다. 억지로 희망찬 마음을 만들지 않아도 괜찮습니다.",
      "practice": "‘앞으로도 안 될 거야’라는 결론만 오늘 하루 미뤄보세요. 아직 모르는 미래를 가장 나쁜 쪽으로 단정하지 않는 것부터 시작해보세요."
    }, {
      "num": "B.4",
      "state": "기다리는 동안 내 삶 전체가 멈춘 것 같아요",
      "reference": "시편 62:5-8",
      "verse": "나의 영혼아 잠잠히 하나님만 바라라 대저 나의 소망이 저로 좇아 나는도다 오직 저만 나의 반석이시요 나의 구원이시요 나의 산성이시니 내가 요동치 아니하리로다 나의 구원과 영광이 하나님께 있음이여 내 힘의 반석과 피난처도 하나님께 있도다 백성들아 시시로 저를 의지하고 그 앞에 마음을 토하라 하나님은 우리의 피난처시로다",
      "cognitive": "한 가지 기다림을 삶 전체의 상태로 확대함",
      "opinion": "중요한 한 가지를 오래 기다리다 보면 다른 모든 시간도 임시처럼 느껴질 수 있어요. 결과가 나온 다음에야 제대로 살 수 있을 것 같고, 지금의 일상은 그저 견뎌야 하는 대기실처럼 느껴질 수 있습니다. 그래서 쉬어도 쉬는 것 같지 않고, 하나님께 받은 오늘의 은혜도 충분히 바라보기 어려울 수 있습니다.\n\n그러나 기다리는 시간도 하나님의 사랑에서 제외된 시간이 아닙니다. 하나님은 결과가 도착한 뒤에만 함께하시는 분이 아니라, 아직 아무것도 결정되지 않은 오늘에도 반석과 피난처가 되어주십니다. 하나님은 정돈된 마음만 받으시는 분도 아닙니다. 말씀은 그 앞에 마음을 토하라고 합니다. 답답하고 혼란한 마음 그대로 하나님께 나아가도 사랑으로 받아주십니다.",
      "dose": "기다리는 일 외에 오늘 하나님께서 허락하신 것을 세 가지 적어보세요. 먹을 수 있는 한 끼, 연락할 수 있는 사람, 감당할 수 있는 작은 일처럼 평범한 것이어도 괜찮습니다. 이것은 힘든 일을 외면하려는 것이 아니라, 한 가지 기다림이 내 삶 전체를 삼키지 않도록 하는 연습입니다.\n\n기다리는 문제를 생각하고 기도하는 시간을 따로 정한 뒤, 나머지 시간에는 오늘의 일상으로 천천히 돌아오세요. 마음이 다시 그 문제에 붙잡히면 “하나님은 결과가 없는 오늘에도 나의 반석이며 피난처이십니다”라고 고백해 보세요.",
      "caution": "한 가지 일이 멈춘 것처럼 느껴져도 삶 전체가 멈춘 것은 아닙니다. 기다리는 오늘도 하나님께서 함께하시는 시간입니다.",
      "practice": "기다리는 일 말고 오늘 내 곁에 있는 평범한 것 세 가지를 적어보세요. 한 끼, 연락할 사람, 할 수 있는 작은 일 정도면 충분합니다."
    }, {
      "num": "B.5",
      "state": "오래 기다리다 보니 혼자 남겨진 것 같아요",
      "reference": "시편 73:23-26",
      "verse": "내가 항상 주와 함께하니 주께서 내 오른손을 붙드셨나이다 주의 교훈으로 나를 인도하시고 후에는 영광으로 나를 영접하시리니 하늘에서는 주 외에 누가 내게 있으리요 땅에서는 주 밖에 나의 사모할 자 없나이다 내 육체와 마음은 쇠잔하나 하나님은 내 마음의 반석이시요 영원한 분깃이시라",
      "cognitive": "하나님의 동행이 느껴지지 않으면 부재한다고 판단함",
      "opinion": "오래 기다리다 보면 처음에는 함께 마음을 나누어 주던 사람들도 자신의 일상으로 돌아가고, 나만 여전히 같은 자리에서 버티고 있는 것처럼 느껴질 수 있어요. 하나님께 말해도 상황이 변하지 않을 때는 그분마저 멀리 계신 것 같고, 누구도 내 기다림의 무게를 온전히 알지 못한다는 외로움이 깊어질 수 있습니다.\n\n그러나 시편의 기자는 자신의 마음이 쓰리고 육체와 마음이 쇠잔한 가운데서도, 하나님께서 오른손을 붙들고 계셨음을 발견했습니다. 하나님은 내가 충분히 잘 견딜 때에만 곁에 계시는 분이 아닙니다. 마음이 약해져 내가 하나님을 제대로 붙잡지 못하는 순간에도 먼저 손을 놓지 않으시는 분입니다. 기다림 속에서 가장 먼저 회복해야 할 것은 결과에 대한 확신보다, 내가 여전히 하나님의 사랑 안에 있다는 관계의 확신입니다.",
      "dose": "오늘은 기다리는 문제를 해결해 달라는 요청에 앞서 “하나님, 제가 혼자 남겨진 것처럼 느껴집니다”라고 현재의 마음부터 말씀드려 보세요. 하나님 앞에서 괜찮은 척하지 않아도 됩니다. 외로움과 서운함을 감추지 않고 가져가는 것이 관계를 다시 이어가는 기도가 될 수 있습니다.\n\n“주께서 내 오른손을 붙드셨나이다”라는 말씀을 천천히 반복해 보세요. 내 힘으로 하나님을 강하게 붙잡으려 하기보다, 하나님께서 먼저 나를 붙들고 계신 모습을 떠올려 보세요. 가능하다면 믿을 수 있는 사람에게도 해결책보다 잠시 함께 기도해 달라고 요청해 보세요.",
      "caution": "하나님이 곁에 계신다는 느낌이 들지 않는 순간에도, 하나님께서는 먼저 당신의 손을 놓지 않으십니다.",
      "practice": "‘주께서 내 오른손을 붙드셨나이다’라는 구절을 천천히 읽어보세요. 내가 하나님을 잘 붙잡고 있는지보다 하나님께서 나를 붙들고 계신 모습을 떠올려 보세요."
    }]
  },
  "broken": {
    "A": [{
      "num": "A.1",
      "state": "오래 버티느라 마음이 내려앉았지만, 완전히 놓지는 않은 상태",
      "reference": "이사야 40:31",
      "verse": "오직 여호와를 앙망하는 자는 새 힘을 얻으리니 독수리의 날개치며 올라감 같을 것이요 달음박질하여도 곤비치 아니하겠고 걸어가도 피곤치 아니하리로다",
      "cognitive": "나는 지쳤으니 이제 끝났다",
      "opinion": "지금의 지침은 믿음이 없어서가 아니라 오래 버틴 마음의 신호일 수 있어요. 하나님은 지친 사람을 몰아세우기보다 새 힘으로 붙드시는 분입니다. 이 말씀은 지친 사람이 스스로 힘을 짜내야 한다고 말하지 않고, 여호와를 앙망하는 자가 새 힘을 얻는다고 말합니다. 지금 마음이 내려앉은 것은 끝났다는 뜻이 아니라, 다시 하나님께 힘을 공급받아야 할 때가 왔다는 신호에 가까워요.",
      "dose": "오늘 해야 할 일을 전부 보지 말고, “지금 감당할 한 가지”만 정해보세요. 말씀을 한 번 읽고 숨을 고른 뒤 시작해요. 이사야 40:31을 조용히 읽으며 “나는 끝난 사람이 아니라 새 힘을 받을 사람이다”라고 마음에 다시 알려주세요. 바로 크게 일어나려 하지 않아도 괜찮아요. 지금은 나를 다그칠 시간이 아니라, “괜찮아, 많이 버텼어”라고 말해주어야 할 시간입니다. 따뜻한 물을 천천히 마시고, 몸의 힘을 조금 내려놓으며, 오늘은 나를 비난하지 않고 다시 안정시키는 작은 회복 행동 하나면 충분합니다.",
      "caution": "지쳤다는 것은 끝났다는 뜻이 아닙니다. 오래 버텨온 마음이 이제는 쉬고 싶다고 말하고 있는 것일 수 있습니다.",
      "practice": "새 힘을 내려고 애쓰기보다 잠시 앉아 어깨의 힘을 풀어보세요. 숨을 길게 내쉬며 ‘오늘은 여기까지 버텨도 괜찮아’라고 스스로에게 말해보세요."
    }, {
      "num": "A.2",
      "state": "마음이 무너진 것 같지만, 아직 하나님께 기대고 싶은 마음이 남아 있는 상태",
      "reference": "시편 126:5",
      "verse": "눈물을 흘리며 씨를 뿌리는 자는 기쁨으로 거두리로다",
      "cognitive": "마음이 무너지면 끝난 것이다",
      "opinion": "마음이 무너진 것 같다는 느낌은 약해서 생기는 것이 아니라, 그동안 혼자 견디던 무게가 너무 컸다는 신호일 수 있어요. 지금의 무너짐은 끝이라는 뜻이 아니라, 더 이상 혼자 버티지 않아도 된다는 마음의 알림에 가깝습니다. 시편 126:5는 눈물로 씨를 뿌리는 자가 기쁨으로 거둔다고 말합니다. 이 말씀은 아픈 마음이 곧 끝이라는 뜻이 아니라, 하나님 앞에 가져간 눈물과 무너짐도 다시 기쁨으로 거두어질 수 있음을 보여줍니다.",
      "dose": "감정이 올라올 때 억지로 괜찮은 척하지 말고, “하나님, 제 마음이 무너진 것 같아요”라고 그대로 말해보세요. 그 후 바로 해결하려고 애쓰기보다, 먼저 나를 탓하는 말을 멈춰보세요. “지금 무너진 것처럼 느껴지는 건 내가 약해서가 아니라, 혼자 버틴 시간이 길었기 때문이야”라고 마음을 다독이며 잠시 머물러도 괜찮습니다.",
      "caution": "눈물로 지나가는 시간이 아무 의미 없는 것은 아닙니다. 지금은 보이지 않아도 하나님께서 그 시간을 헛되게 두지 않으십니다.",
      "practice": "마음 한편에 아직 남아 있는 바람 하나를 짧게 적어보세요. 다 적은 뒤 ‘하나님, 이 마음을 주께 맡깁니다’라고 천천히 말해보세요."
    }, {
      "num": "A.3",
      "state": "혼자 감당해야 할 것 같아 마음이 무거운 상태",
      "reference": "시편 55:22",
      "verse": "네 짐을 여호와께 맡겨 버리라 너를 붙드시고 의인의 요동함을 영영히 허락지 아니하시리로다",
      "cognitive": "이 무게를 끝까지 나 혼자 견뎌야 한다",
      "opinion": "마음이 무너진 것 같을 때는 작은 일도 혼자 다 짊어진 것처럼 무겁게 느껴질 수 있어요. 그 마음은 약해서가 아니라, 오래 참고 버티느라 지친 마음의 신호일 수 있습니다. 시편 55:22는 짐을 여호와께 맡기라고 말하며, 하나님이 너를 붙드신다고 말씀합니다. 이 말씀은 지금의 무게를 혼자 견디지 않아도 된다는 위로에 가깝습니다.",
      "dose": "오늘은 문제를 다 해결하려고 바로 달려들기보다, 먼저 지금 마음이 얼마나 무거운지 하나님 앞에서 인정해보세요. “하나님, 제가 이 무게를 혼자 다 견디려 했습니다. 저를 붙들어주세요”라고 짧게 고백하며, 내가 모든 것을 혼자 감당해야 한다는 생각을 잠시 내려놓아도 괜찮습니다.",
      "caution": "힘든 마음을 누군가와 나눈다고 해서 약해지는 것은 아닙니다. 혼자 삼키지 않는 것만으로도 마음의 짐이 조금 가벼워질 수 있습니다.",
      "practice": "지금 가장 무겁게 느껴지는 일을 하나님께 한 문장으로 말씀드려 보세요. 말로 하기 어렵다면 그대로 적어도 괜찮습니다."
    }, {
      "num": "A.4",
      "state": "괜찮은 척은 힘들지만 말씀 앞에 서고 싶은 상태",
      "reference": "시편 34:18",
      "verse": "여호와는 마음이 상한 자에게 가까이 하시고 중심에 통회하는 자를 구원하시는도다",
      "cognitive": "나는 이렇게 약하면 안 된다",
      "opinion": "마음이 상한 상태는 숨겨야 할 결함이 아니에요. 성경은 하나님이 마음이 상한 자에게 가까이하신다고 말합니다. 하나님 앞에서는 괜찮은 척하지 않아도 됩니다. 이 말씀은 마음이 상한 사람을 멀리하지 않고, 하나님이 가까이하신다는 위로를 줍니다. 지금의 약함은 멀어질 이유가 아니라, 하나님이 더 가까이 오시는 자리입니다.",
      "dose": "오늘은 긴 기도보다 한 문장 기도로 충분해요. “하나님, 제 마음 가까이 와주세요.” 시편 34:18을 천천히 읽으며, 하나님이 마음이 상한 자에게 가까이하신다는 말씀 곁에 잠시 머물러보세요. 사람 앞에서는 약한 모습을 숨겨야 할 것 같고, 괜찮은 척해야 사랑받을 수 있을 것처럼 느껴질 때가 있습니다. 하지만 하나님은 우리의 약함을 약점이나 비웃음거리로 보지 않으십니다. 마음이 상한 자에게 가까이 오셔서, 약한 마음을 정죄하지 않으시고 사랑으로 품어주시는 분입니다.",
      "caution": "약한 모습을 감추지 않아도 괜찮습니다. 하나님은 괜찮은 척하는 모습보다 상한 마음 그대로를 더 가까이 품으십니다.",
      "practice": "오늘 한 번만큼은 괜찮은 척하지 않아도 됩니다. 지금 느끼는 감정을 한 단어로 적고, 그 마음을 하나님께 보여드려 보세요."
    }, {
      "num": "A.5",
      "state": "다시 일어나야 한다는 마음은 있지만 시작이 버거운 상태",
      "reference": "미가 7:8",
      "verse": "나의 대적이여 나로 인하여 기뻐하지 말지어다 나는 엎드러질찌라도 일어날 것이요 어두운데 앉을찌라도 여호와께서 나의 빛이 되실 것임이로다",
      "cognitive": "넘어졌으니 끝났다",
      "opinion": "넘어진 것이 끝은 아니에요. 말씀은 “엎드러질찌라도 일어날 것”이라고 말합니다. 다시 일어나는 힘은 내 의지에서만 나오지 않고, 하나님이 빛이 되어주실 때 생깁니다. 지금 당장 완전히 회복되지 않아도 괜찮아요. 하나님은 어둠 속에 앉은 사람에게도 빛이 되어주시는 분입니다.",
      "dose": "오늘의 목표를 “회복 완료”로 잡지 않아도 괜찮습니다. 미가 7:8을 읽으며 “나는 아직 끝난 사람이 아니다”라고 조용히 고백해보세요. 큰 결심을 하려고 애쓰기보다, 먼저 나를 실패한 사람처럼 몰아붙이는 말을 멈춰보세요. 잠시 앉아 “지금은 다시 일어나는 중이야”라고 마음에 말해주는 것부터 시작해도 충분합니다.",
      "caution": "당장 다시 일어서지 못해도 괜찮습니다. 지금 어둠 속에 앉아 있는 그 자리에도 하나님께서 함께 계십니다.",
      "practice": "무언가 크게 해내려 하지 말고, 물 한 잔 마시기나 창문 열기처럼 가장 작은 행동 하나만 해보세요. 그 한 가지로 오늘을 시작해도 충분합니다."
    }],
    "B": [{
      "num": "B.1",
      "state": "마음이 텅 비고 아무것도 하고 싶지 않은 상태",
      "reference": "시편 23:1-3",
      "verse": "여호와는 나의 목자시니 내가 부족함이 없으리로다 그가 나를 푸른 초장에 누이시며 쉴만한 물 가으로 인도하시는도다 내 영혼을 소생시키시고 자기 이름을 위하여 의의 길로 인도하시는도다",
      "cognitive": "나는 아무것도 못 하니 쓸모없다",
      "opinion": "지금 아무것도 하고 싶지 않은 마음은 게으름이라기보다, 오래도록 “무언가를 해내야만 괜찮다”는 압박 속에서 버티다 마음의 힘이 많이 소진된 상태일 수 있어요. 마음이 무너졌을 때는 작은 일도 숙제처럼 느껴지고, 쉬고 있어도 뒤처지는 것처럼 느껴질 수 있습니다. 시편 23:1-3은 여호와가 나의 목자이시기에 부족함이 없고, 그분이 나를 푸른 초장에 누이시며 쉴 만한 물가로 인도하시고, 내 영혼을 소생시키신다고 말합니다. 이 말씀은 하나님이 나를 성과로 대하지 않으시고, 지친 영혼을 누이시며 다시 살리시는 분임을 보여줍니다. 아무것도 하지 못하는 날에도, 하나님께 당신의 존재는 여전히 귀합니다.",
      "dose": "시편 23:1-3 말씀을 천천히 읽거나 들어보세요. 지금은 무언가를 증명하려고 애쓰지 않아도 괜찮아요. “여호와는 나의 목자시니”라는 말씀 곁에 잠시 머물러보세요. 아무것도 하지 못하는 날에도 하나님은 당신을 놓지 않으시고, 지친 마음을 누이시며 다시 살리시는 분입니다.",
      "caution": "아무것도 하지 못하는 날에도 당신의 가치는 줄어들지 않습니다. 쉬고 있는 모습까지도 하나님께는 소중합니다.",
      "practice": "편한 자세로 기대어 잠시 눈을 감아보세요. 목자가 지친 양을 조용히 쉬게 하는 모습을 떠올리며 그대로 쉬어도 괜찮습니다."
    }, {
      "num": "B.2",
      "state": "기도하려 해도 말이 나오지 않는 상태",
      "reference": "로마서 8:26",
      "verse": "이와 같이 성령도 우리 연약함을 도우시나니 우리가 마땅히 빌 바를 알지 못하나 오직 성령이 말할 수 없는 탄식으로 우리를 위하여 친히 간구하시느니라",
      "cognitive": "기도도 못 하면 하나님과 멀어진 것이다",
      "opinion": "말이 나오지 않는다고 하나님과 멀어진 것은 아니에요. 로마서 8:26은 우리가 마땅히 빌 바를 알지 못할 때에도 성령이 우리의 연약함을 도우신다고 말합니다. 기도가 문장으로 나오지 않는 날도 있습니다. 그럴 때 하나님은 정리된 말만 들으시는 분이 아니라, 말이 되기 전의 마음과 한숨까지 아시는 분입니다. 지금은 잘 기도하려 애쓰지 못해도 괜찮아요. 하나님 앞에 말없이 머물러 있어도, 그 마음은 하나님께 닿아 있습니다.",
      "dose": "로마서 8:26 말씀을 천천히 읽거나 들어보세요. 오늘은 기도문을 완성하려고 애쓰기보다, “성령도 우리 연약함을 도우시나니”라는 말씀 곁에 머물러보세요. “기도도 못 하면 하나님과 멀어진 거야”라고 자신을 책망하지 말고, “말이 안 나와도 하나님은 내 연약함을 아신다”라고 마음에 알려주세요. “하나님…” 한 단어만 마음속에 두고 있어도, 그 마음은 하나님 앞에 있습니다.",
      "caution": "기도의 말이 나오지 않아도 하나님과 멀어진 것은 아닙니다. 침묵 속에 있는 마음도 하나님께서는 이미 알고 계십니다.",
      "practice": "말을 만들어내려 하지 말고 천천히 숨만 쉬어보세요. 숨을 내쉴 때마다 마음속으로 ‘하나님’이라고 한 번 불러보세요."
    }, {
      "num": "B.3",
      "state": "괜찮은 척하기 힘들고 누가 알아줬으면 하는 상태",
      "reference": "이사야 41:10",
      "verse": "두려워 말라 내가 너와 함께 함이니라 놀라지 말라 나는 네 하나님이 됨이니라 내가 너를 굳세게 하리라 참으로 너를 도와 주리라 참으로 나의 의로운 오른손으로 너를 붙들리라",
      "cognitive": "나만 이렇게 약하다",
      "opinion": "지금 필요한 것은 두려움을 억지로 없애는 것이 아니라, 두려운 마음 가운데서도 하나님이 함께하신다는 사랑을 천천히 느끼는 것일 수 있어요. 이사야 41:10은 하나님이 “내가 너와 함께한다, 너를 도와주고 붙들겠다”고 말씀하시는 장면입니다. 누군가 알아줬으면 하는 마음은 약한 마음이 아니라, 너무 오래 혼자 견딘 마음의 신호일 수 있어요. 하나님은 두려워하는 마음을 밀어내지 않으시고, 사랑으로 함께하시며 지지하고 동행하시는 분입니다.",
      "dose": "이사야 41:10 말씀을 천천히 읽으며, ‘두려워하지 말라’를 혼나는 말이 아니라 하나님이 함께하시고 붙드신다는 사랑의 약속으로 받아들여보세요. “나만 약한 거야”라고 비난하는 마음이 올라오면, “아니야, 하나님이 나를 붙들겠다고 하셨다”라고 다시 말해보세요. 오늘은 혼자 버티려 하지 말고 믿을 만한 사람에게 “나 오늘 마음이 이런 것 같아”라고 짧게 알려도 괜찮습니다.",
      "caution": "누군가 내 힘듦을 알아주었으면 하는 마음은 부끄러운 것이 아닙니다. 혼자 버티지 않고 도움을 구해도 괜찮습니다.",
      "practice": "믿을 수 있는 사람 한 명에게 ‘오늘 조금 힘들었어’라고 짧게 보내보세요. 자세히 설명하지 않아도 괜찮습니다."
    }, {
      "num": "B.4",
      "state": "마음이 내려앉아 하나님께 기대고 싶은데 잘 안 되는 상태",
      "reference": "시편 42:5",
      "verse": "내 영혼아 네가 어찌하여 낙망하며 어찌하여 내 속에서 불안하여 하는고 너는 하나님을 바라라 그 얼굴의 도우심을 인하여 내가 오히려 찬송하리로다",
      "cognitive": "하나님께 기대지 못하는 나는 믿음이 부족하다",
      "opinion": "기대고 싶지만 잘 안 되는 마음도 하나님 앞에 가져갈 수 있어요. 시편 42:5는 낙망하고 불안한 영혼을 숨기지 않고 그대로 부릅니다. 하나님께 기대고 싶은데 잘 안 되는 날은, 믿음이 사라진 날이라기보다 마음의 힘이 많이 소진된 날일 수 있습니다. 이 말씀은 불안한 마음을 부정하지 않고, 그 마음을 하나님께 향하도록 조용히 이끌어줍니다.",
      "dose": "시편 42:5 말씀을 천천히 읽으며, “내 영혼아 네가 어찌하여 낙망하느냐” 한 구절 곁에 머물러보세요. 오늘은 억지로 마음을 끌어올리려 하지 않아도 됩니다. “하나님께 기대고 싶은데 잘 안 돼요”라고 말하는 것만으로도 충분해요. 스스로를 믿음 없는 사람처럼 판단하지 말고, 기대는 힘조차 하나님께 구하는 시간이 되어도 괜찮습니다.",
      "caution": "하나님께 기대고 싶은 마음이 잘 생기지 않는다고 해서 믿음이 사라진 것은 아닙니다. 지친 마음은 기대는 것조차 힘들 수 있습니다.",
      "practice": "시편 42편의 한 구절을 나에게 들려주듯 천천히 읽어보세요. 이해하려 애쓰기보다 그 말이 곁에 머물도록 잠시 쉬어보세요."
    }, {
      "num": "B.5",
      "state": "혼자 감당하기 버겁고 무너질 것 같은 상태",
      "reference": "고린도후서 12:9",
      "verse": "내게 이르시기를 내 은혜가 네게 족하도다 이는 내 능력이 약한데서 온전하여짐이라 하신지라 이러므로 도리어 크게 기뻐함으로 나의 여러 약한 것들에 대하여 자랑하리니 이는 그리스도의 능력으로 내게 머물게 하려 함이라",
      "cognitive": "약하면 버림받는다",
      "opinion": "약함은 하나님께 버림받는 이유가 아니에요. 고린도후서 12:9은 하나님의 능력이 약한 데서 온전하여진다고 말합니다. 무너질 것 같은 마음에게 가장 먼저 필요한 것은 더 강해지라는 말이 아니라, 지금 약해도 은혜가 머물 수 있다는 확신입니다. 하나님은 약함을 정죄하지 않으시고, 그 자리에 은혜를 덮으시는 분입니다.",
      "dose": "고린도후서 12:9 말씀을 천천히 읽으며, 약함을 숨기려 하지 말고 하나님께 그대로 보여드려보세요. “약하면 안 돼”라는 마음이 올라오면, “약해도 버림받지 않아. 하나님의 은혜는 약한 자리에도 머문다”라고 다시 말해주세요. 오늘은 큰 결심보다, “주님, 오늘은 제가 약합니다”라는 한 문장으로 하나님께 기대는 것부터 시작해도 충분합니다.",
      "caution": "약하다고 해서 버림받는 것은 아닙니다. 오히려 힘이 다한 자리에서 하나님의 은혜가 더 가까이 느껴질 수 있습니다.",
      "practice": "지금 감당하기 어려운 일 하나를 떠올리고 ‘하나님, 제 힘으로는 어렵습니다’라고 말씀드려 보세요. 그 말 한마디만으로도 충분합니다."
    }]
  },
  "compare": {
    "A": [{
      "num": "A.1",
      "state": "다른 사람이 앞서가는 모습을 보며 자신의 삶은 늦어지고 뒤처지는 것처럼 느끼는 상태",
      "reference": "전도서 3:11",
      "verse": "하나님이 모든 것을 지으시되 때를 따라 아름답게 하셨고 또 사람에게 영원을 사모하는 마음을 주셨느니라 그러나 하나님의 하시는 일의 시종을 사람으로 측량할 수 없게 하셨도다",
      "cognitive": "다른 사람이 먼저 이루었다면 나는 늦은 것이다. 지금 벌어진 차이가 앞으로의 결과까지 결정할 것이다.",
      "opinion": "당신의 조급함은 자신의 삶을 잘 감당하고 싶은 마음의 애씀에서 시작되었을 수 있어요. 하지만 다른 사람의 시간이 당신의 때를 결정하지는 않습니다. 하나님은 모든 사람을 같은 시간표로 평가하지 않으시며, 아직 드러난 결과가 적어도 당신의 삶은 하나님의 때 안에서 자라고 있습니다.",
      "dose": "오늘 다른 사람의 진행 상황보다 내 앞에 놓인 한 걸음에 시선을 두어보세요. “하나님, 다른 사람의 때가 아니라 제게 주신 오늘과 과정을 주님의 시선으로 바라보게 해주세요.”",
      "caution": "다른 사람의 속도가 내 삶의 기준이 될 필요는 없습니다. 먼저 이루었다고 해서 내가 늦었다는 뜻도 아닙니다.",
      "practice": "오늘 부러웠던 사람을 떠올린 뒤, 지금 내게 맡겨진 자리나 할 수 있는 일 한 가지를 적어보세요. 오늘은 그 한 가지에만 마음을 두어보세요."
    }, {
      "num": "A.2",
      "state": "다른 사람의 장점이 보일수록 자신의 부족한 부분이 더 크게 느껴지는 상태",
      "reference": "고린도전서 12:18",
      "verse": "그러나 이제 하나님이 그 원하시는 대로 지체를 각각 몸에 두셨으니",
      "cognitive": "상대의 가장 좋은 부분과 나의 부족한 부분을 비교한다. 나보다 잘하는 사람이 있다면 내게 주어진 것은 중요하지 않다.",
      "opinion": "다른 사람의 좋은 점을 발견하는 시선은 잘못된 것이 아닙니다. 다만 그 사람의 빛을 바라보는 동안 하나님께서 당신에게 주신 것까지 작게 보고 있을 수 있어요. 하나님은 모든 사람을 같은 모습으로 만들지 않으셨습니다. 다름은 부족함의 증거가 아니라 각 사람에게 주어진 자리와 생명의 모습입니다.",
      "dose": "부러웠던 사람의 장점 한 가지와 내 삶에서 이미 나타나고 있는 태도 한 가지를 함께 적어보세요. “하나님, 다른 사람에게 주신 것을 존중하면서도 제게 주신 것을 주님의 시선으로 발견하게 해주세요.”",
      "caution": "다른 사람의 가장 좋은 모습과 내 부족한 부분을 비교하면 마음이 더 작아질 수 있습니다. 내게 주어진 몫도 하나님 안에서 분명한 의미가 있습니다.",
      "practice": "내가 잘할 수 있거나 꾸준히 해온 일 한 가지를 적어보세요. ‘이것도 내게 주신 몫이다’라고 천천히 읽어보세요."
    }, {
      "num": "A.3",
      "state": "누군가 칭찬받고 주목받을 때 자신이 밀려나고 중요하지 않은 사람처럼 느껴지는 상태",
      "reference": "이사야 43:4",
      "verse": "네가 내 눈에 보배롭고 존귀하며 내가 너를 사랑하였은즉 내가 네 대신 사람들을 주며 백성들로 네 생명을 대신하리니",
      "cognitive": "다른 사람이 인정받으면 내 가치와 자리는 줄어든다. 사람들이 알아주지 않으면 내 수고는 의미가 없다.",
      "opinion": "인정받는 사람 앞에서 마음이 작아지는 것은 당신도 소중히 여김받고 싶었기 때문일 수 있어요. 그 바람 자체를 부끄러워하지 않아도 괜찮습니다. 다른 사람에게 향한 칭찬이 당신을 향한 사랑의 취소는 아닙니다. 하나님의 사랑은 경쟁해서 얻는 자리가 아니며, 보이지 않았던 당신의 마음과 수고도 알고 계십니다.",
      "dose": "오늘 사람들에게 드러나지 않았지만 성실하게 감당한 일 하나를 떠올려보세요. “하나님, 사람의 반응보다 저를 귀하게 여기시고 제 마음을 아시는 주님의 시선을 받아들이게 해주세요.”",
      "caution": "다른 사람이 인정받는다고 해서 내 가치나 자리가 줄어드는 것은 아닙니다. 하나님께서는 각 사람을 따로 바라보십니다.",
      "practice": "오늘 부러웠던 사람을 위해 짧게 축복해보세요. 그다음 ‘하나님, 저도 주님의 시선으로 바라봐 주세요’라고 자신을 위해 기도해보세요."
    }, {
      "num": "A.4",
      "state": "친구나 동료의 좋은 소식을 기뻐하고 싶지만 자신의 기다림과 비교되어 마음이 복잡해지는 상태",
      "reference": "시편 62:8",
      "verse": "백성들아 시시로 저를 의지하고 그 앞에 마음을 토하라 하나님은 우리의 피난처시로다",
      "cognitive": "비슷하게 시작했다면 비슷한 시기에 같은 결과를 얻어야 한다. 부럽거나 서운하면 나는 사랑이 부족한 사람이다.",
      "opinion": "가까운 사람의 좋은 소식이 아프게 느껴진 것은 당신에게도 오래 품어온 바람과 기다림이 있기 때문일 수 있어요. 기쁨과 서운함이 함께 있어도 자신을 판단하지 않아도 됩니다. 하나님은 정리된 마음만 받지 않으시며, 복잡한 감정 속에 담긴 기다림과 애씀을 먼저 바라보십니다.",
      "dose": "“이 소식 앞에서 마음이 아팠던 것은 나도 ______을 오래 기다리고 있었기 때문이다”라는 문장을 완성해보세요. 그 마음을 하나님께 가져가며, 판단보다 이해로 바라보시는 하나님의 시선을 받아들여보세요.",
      "caution": "부럽거나 서운한 마음이 든다고 해서 사랑이 부족한 사람인 것은 아닙니다. 복잡한 마음도 하나님께 솔직히 가져갈 수 있습니다.",
      "practice": "하나님께 ‘기쁘면서도 조금 부러웠어요’라고 그대로 말해보세요. 감정을 하나로 정리하려 하지 않아도 괜찮습니다."
    }, {
      "num": "A.5",
      "state": "SNS나 주변 사람의 소식을 반복해서 확인하며 자신의 위치와 가치를 점검하는 상태",
      "reference": "잠언 4:23",
      "verse": "무릇 지킬 만한 것보다 더욱 네 마음을 지키라 생명의 근원이 이에서 남이니라",
      "cognitive": "다른 사람의 상황을 계속 알아야 내가 잘하고 있는지 확인할 수 있다. 상대가 보여준 좋은 장면과 내 실제 삶 전체를 비교한다.",
      "opinion": "다른 사람의 소식을 계속 확인한 것은 내가 제대로 가고 있는지 안심하고 싶었기 때문일 수 있어요. 하지만 반복적인 비교는 기준을 분명하게 하기보다 더 많은 평가 기준을 만들기도 합니다. 마음을 지킨다는 것은 다른 사람을 외면하는 일이 아니라, 내 마음을 약하게 만드는 시선에서 잠시 벗어나 하나님께 중심을 돌리는 것입니다.",
      "dose": "비교가 시작되는 화면을 열기 전에 “나는 지금 무엇을 확인받고 싶은가?”라고 물어보세요. 그 답을 하나님께 말씀드리며, 다른 사람의 결과가 아닌 하나님의 시선으로 현재의 나를 바라보는 연습을 시작해보세요.",
      "caution": "다른 사람의 소식을 계속 확인한다고 해서 내 위치가 더 분명해지는 것은 아닙니다. 오히려 마음이 더 지칠 수 있습니다.",
      "practice": "비교하게 되는 화면을 한 시간만 닫아보세요. 그 시간에는 산책, 정리, 음악 듣기처럼 내 마음이 편안해지는 일을 하나 해보세요."
    }],
    "B": [{
      "num": "B.1",
      "state": "다른 사람의 성취를 보며 자신의 삶은 제자리이고, 지금까지 이룬 것이 아무것도 없는 것처럼 느끼는 상태",
      "reference": "시편 139:13-14",
      "verse": "주께서 내 장부를 지으시며 나의 모태에서 나를 조직하셨나이다 내가 주께 감사하옴은 나를 지으심이 심히 기묘하심이라 주의 행사가 기이함을 내 영혼이 잘 아나이다",
      "cognitive": "눈에 보이는 성과가 없으면 나도 가치 없는 사람이다. 완성하지 못했다면 견디고 지나온 시간도 의미가 없다.",
      "opinion": "당신은 아무것도 하지 않은 사람이 아니라, 자신의 삶을 잘 살아내기 위해 오래 애써온 사람일 수 있어요. 지금 지친 것은 자신의 가치를 계속 확인하고 증명하느라 마음의 힘을 많이 사용했기 때문일 수 있습니다. 하나님은 성과를 확인한 뒤 당신을 사랑하시는 분이 아닙니다. 당신은 무엇을 이루기 전부터 하나님의 형상대로 지음받고 알려진 존재입니다.",
      "dose": "말씀을 천천히 읽으며, 성과가 말하는 내가 아니라 하나님께서 지으시고 아시는 나를 바라보세요. “하나님, 저는 아무것도 증명하지 않아도 주님께서 지으신 소중한 존재임을 받아들이게 해주세요.”",
      "caution": "눈에 보이는 성과가 없다고 해서 당신의 가치까지 사라지는 것은 아닙니다. 하나님께서는 무엇을 이루기 전부터 당신을 귀하게 지으셨습니다.",
      "practice": "‘나는 심히 기묘하게 지어진 사람이다’라는 문장을 천천히 한 번 읽어보세요. 지금은 그 말을 믿으려 애쓰기보다 그냥 들려주기만 해도 괜찮습니다."
    }, {
      "num": "B.2",
      "state": "반복된 비교 끝에 자신의 외모와 성격, 능력뿐 아니라 존재 전체가 마음에 들지 않게 된 상태",
      "reference": "에베소서 2:10",
      "verse": "우리는 그의 만드신 바라 그리스도 예수 안에서 선한 일을 위하여 지으심을 받은 자니 이 일은 하나님이 전에 예비하사 우리로 그 가운데서 행하게 하려 하심이니라",
      "cognitive": "부족한 부분이 있으므로 나는 부족한 존재다. 다른 사람처럼 더 나아져야 사랑받을 수 있다.",
      "opinion": "당신은 자신을 미워하고 싶었던 것이 아니라, 더 괜찮은 사람이 되고 싶어 오래 자신을 살펴왔을 수 있어요. 하지만 비교가 반복되며 고치려던 시선이 존재 전체를 판단하는 시선으로 바뀌었을 수 있습니다. 하나님은 장점을 증명하라고 요구하지 않으십니다. 부족함과 상처가 남아 있는 지금도 당신을 자신의 작품으로 바라보십니다.",
      "dose": "자책이 올라올 때 비교가 붙인 평가와 하나님께서 바라보시는 나를 구분해보세요. “하나님, 비교가 붙인 이름보다 저를 주님의 작품으로 바라보시는 시선을 먼저 받아들이게 해주세요.”",
      "caution": "고치고 싶은 부분이 있다고 해서 존재 전체가 부족한 것은 아닙니다. 더 나아져야만 사랑받는 것도 아닙니다.",
      "practice": "자신을 탓하는 생각이 들면 ‘부족한 점이 있어도 나는 사랑받는 사람이다’라고 한 번 말해보세요. 억지로 확신하지 않아도 괜찮습니다."
    }, {
      "num": "B.3",
      "state": "다른 사람의 좋은 모습은 크게 보이고, 자신의 존재는 부족하고 보잘것없게 느껴지는 상태",
      "reference": "스바냐 3:17",
      "verse": "너의 하나님 여호와가 너의 가운데 계시니 그는 구원을 베푸실 전능자시라 그가 너로 인하여 기쁨을 이기지 못하여 하시며 너를 잠잠히 사랑하시며 너로 인하여 즐거이 부르며 기뻐하시리라",
      "cognitive": "다른 사람은 완전해 보이고 내게는 부족한 점만 있는 것 같다. 다른 사람들도 나를 부족하고 초라하게 바라볼 것이다.",
      "opinion": "당신은 사람들보다 부족해서 작아진 것이 아닙니다. 관계에서 밀려나지 않고 자신의 자리를 지키고 싶어 다른 사람의 반응을 오래 살펴왔을 수 있어요. 하나님은 사람들보다 나은 점을 찾아오라고 하지 않으십니다. 움츠러든 순간에도 당신을 사랑으로 바라보시며, 하나님의 형상을 지닌 존재로 받아주십니다.",
      "dose": "사람들의 평가를 추측하던 시선에서 잠시 벗어나 하나님께 시선을 돌려보세요. “하나님, 사람들의 시선 속에서 작아진 저를 주님께서 어떻게 바라보시는지 알게 해주세요.”",
      "caution": "다른 사람의 좋은 모습만 크게 보이는 것은 지친 마음 때문일 수 있습니다. 지금 보이는 비교가 내 존재의 전부를 말해주는 것은 아닙니다.",
      "practice": "잠시 눈을 감고 ‘하나님은 지금의 나도 기뻐하신다’는 말을 천천히 떠올려 보세요. 아무 감정이 생기지 않아도 괜찮습니다."
    }, {
      "num": "B.4",
      "state": "주변 사람들은 앞으로 나아가는데 자신만 멈추고 뒤처진 것처럼 느끼는 상태",
      "reference": "이사야 40:29",
      "verse": "피곤한 자에게는 능력을 주시며 무능한 자에게는 힘을 더하시나니",
      "cognitive": "앞으로 움직이지 못하는 시간은 모두 낭비된 시간이다. 지금 힘이 없으므로 앞으로도 계속 이 상태일 것이다.",
      "opinion": "당신은 멈춰 있고 싶었던 것이 아니라, 다른 사람들의 걸음을 따라가기 위해 오래 애써온 사람일 수 있어요. 지금 움직일 힘이 없는 것은 자신을 계속 일으켜 세우느라 마음이 소진되었기 때문일 수 있습니다. 하나님은 다시 달리는 모습을 보여야 사랑하시는 분이 아닙니다. 멈춘 순간에도 당신을 붙드시며 행동보다 먼저 지친 마음을 회복시키십니다.",
      "dose": "멈춤을 실패라고 바라보던 시선 대신, 지친 사람에게 힘을 주시는 하나님의 시선을 받아들여보세요. “하나님, 멈춰 있는 지금도 저를 놓지 않으시는 주님의 시선으로 저를 바라보게 해주세요.”",
      "caution": "지금 멈춘 것처럼 느껴지는 시간도 버려진 시간은 아닙니다. 힘이 없는 오늘에도 하나님께서는 당신을 지나치지 않으십니다.",
      "practice": "앞으로 나아가려는 마음을 잠시 내려놓고 ‘하나님, 오늘은 쉬어가겠습니다’라고 말해보세요. 그 후 몸이 편해지는 자세로 잠시 쉬어보세요."
    }, {
      "num": "B.5",
      "state": "다른 사람의 좋은 소식 앞에서 마음이 복잡해지고, 그런 감정을 느끼는 자신까지 부끄럽고 싫어진 상태",
      "reference": "히브리서 4:15-16",
      "verse": "우리에게 있는 대제사장은 우리 연약함을 체휼하지 아니하는 자가 아니요 모든 일에 우리와 한결같이 시험을 받은 자로되 죄는 없으시니라 그러므로 우리가 긍휼하심을 받고 때를 따라 돕는 은혜를 얻기 위하여 은혜의 보좌 앞에 담대히 나아갈 것이니라",
      "cognitive": "부럽고 서운한 감정이 생기면 나는 사랑이 부족한 사람이다. 믿음이 있다면 복잡한 마음을 느껴서는 안 된다.",
      "opinion": "다른 사람의 좋은 소식 앞에서 마음이 복잡해진 것은 당신에게도 오래 품어온 바람과 기다림이 있기 때문일 수 있어요. 기뻐해주고 싶은 마음과 내 상황이 아프게 느껴지는 마음이 함께 있어도 자신을 판단하지 않아도 괜찮습니다. 하나님은 정리된 감정만 받으시는 분이 아닙니다. 그 안에 담긴 기다림과 애씀을 먼저 바라보시며, 지금도 당신을 사랑 안에 품으십니다.",
      "dose": "“다른 사람의 소식을 들으며, 나도 ______을 오래 바라고 있었다는 것을 알게 되었습니다”라는 문장을 완성해보세요. 이어서 “하나님, 이 마음을 판단하기보다 그 안의 바람을 주님의 시선으로 바라보게 해주세요”라고 기도해보세요.",
      "caution": "부럽고 서운한 감정이 생긴다고 해서 믿음이 없는 것은 아닙니다. 하나님은 그런 마음까지 숨기지 않고 가져오기를 기다리십니다.",
      "practice": "감정을 판단하지 말고 ‘하나님, 저도 모르게 이런 마음이 들었어요’라고 솔직히 말해보세요. 그 뒤에는 아무 결론도 내리지 않아도 괜찮습니다."
    }]
  }
};

// 자가문진 1번 문항 선택값으로 A/B 자동 판정.
// 각 감정 Q1의 optionTypes(['A','B',...])만 사용 — 선택지 순번으로 A/B를 추정하지 않는다.
// optionTypes가 없는 감정 = A/B 분류값 미설정 → null 반환(임의 판정 금지). 원문 확정 시 지정.
const AB_CONFIRMED = {
  compare: true,
  forgive: true,
  distant: true,
  thanks: true,
  anxious: true,
  calling: true
};
const classifyType = (mood, selections) => {
  const sel = selections || {};
  const a = getAssessment(mood) || {};
  const q1 = a.groups && a.groups[0] || {};
  const types = q1.optionTypes || null;
  if (!types) {
    console.warn('[마음약국] ' + mood + ': A/B 분류값 미설정');
    return null;
  }
  const opts = q1.options || [];
  for (let i = 0; i < opts.length; i++) {
    if (sel['0-' + i]) return types[i] || null;
  }
  return null;
};
const pickPrescription = (mood, type) => {
  if (!type) return null;
  const set = RX_PRESCRIPTIONS[mood];
  if (!set || !set[type] || !set[type].length) return null;
  const arr = set[type];
  const chosen = arr[Math.floor(Math.random() * arr.length)];
  const base = RX_DATA && RX_DATA[mood] || {};
  const merged = {};
  for (const k in base) merged[k] = base[k];
  merged.opinion = chosen.opinion;
  merged.verse = chosen.verse || '';
  merged.reference = chosen.reference;
  merged.dose = chosen.dose;
  merged.cognitive = chosen.cognitive;
  merged.state = chosen.state;
  merged.caution = chosen.caution;
  merged.practice = chosen.practice;
  merged.rxType = type;
  merged.rxNum = chosen.num;
  return merged;
};
const resolvePrescription = (mood, selections, cached) => {
  if (cached) return cached;
  const type = classifyType(mood, selections);
  return pickPrescription(mood, type);
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "mind-pharmacy/data/rx-prescriptions.js", error: String((e && e.message) || e) }); }

// mind-pharmacy/data/stickers-data.js
try { (() => {
// stickers-data.js — 마음약국 스티커 세트 (감정별 다이컷 이미지, webp 512px).
const STICKER_SET = {
  categories: [{
    "key": "normal",
    "label": "공통 응원"
  }, {
    "key": "anxious",
    "label": "불안해요"
  }, {
    "key": "broken",
    "label": "마음이 무너졌어요"
  }, {
    "key": "compare",
    "label": "비교돼요"
  }, {
    "key": "waiting",
    "label": "기다리기 힘들어요"
  }, {
    "key": "forgive",
    "label": "용서가 안 돼요"
  }, {
    "key": "distant",
    "label": "하나님이 멀게 느껴져요"
  }, {
    "key": "calling",
    "label": "책임이 버거워요"
  }, {
    "key": "thanks",
    "label": "감사가 사라졌어요"
  }],
  files: {
    "normal": ["assets-web/stickers/normal/normal_1.webp", "assets-web/stickers/normal/normal_2.webp", "assets-web/stickers/normal/normal_3.webp", "assets-web/stickers/normal/normal_4.webp", "assets-web/stickers/normal/normal_5.webp", "assets-web/stickers/normal/normal_6.webp", "assets-web/stickers/normal/normal_7.webp", "assets-web/stickers/normal/normal_8.webp", "assets-web/stickers/normal/normal_9.webp", "assets-web/stickers/normal/normal_10.webp", "assets-web/stickers/normal/normal_11.webp", "assets-web/stickers/normal/normal_12.webp"],
    "anxious": ["assets-web/stickers/anxious/nervous_1.webp", "assets-web/stickers/anxious/nervous_2.webp", "assets-web/stickers/anxious/nervous_3.webp", "assets-web/stickers/anxious/nervous_4.webp", "assets-web/stickers/anxious/nervous_5.webp", "assets-web/stickers/anxious/nervous_6.webp", "assets-web/stickers/anxious/nervous_7.webp", "assets-web/stickers/anxious/nervous_8.webp", "assets-web/stickers/anxious/nervous_9.webp", "assets-web/stickers/anxious/nervous_10.webp", "assets-web/stickers/anxious/nervous_11.webp", "assets-web/stickers/anxious/nervous_12.webp", "assets-web/stickers/anxious/nervous2_1.webp", "assets-web/stickers/anxious/nervous2_2.webp", "assets-web/stickers/anxious/nervous2_3.webp", "assets-web/stickers/anxious/nervous2_4.webp", "assets-web/stickers/anxious/nervous2_5.webp", "assets-web/stickers/anxious/nervous2_6.webp", "assets-web/stickers/anxious/nervous2_7.webp", "assets-web/stickers/anxious/nervous2_8.webp", "assets-web/stickers/anxious/nervous2_9.webp", "assets-web/stickers/anxious/nervous2_10.webp", "assets-web/stickers/anxious/nervous2_11.webp", "assets-web/stickers/anxious/nervous2_12.webp"],
    "broken": ["assets-web/stickers/broken/brokenemotion_1.webp", "assets-web/stickers/broken/brokenemotion_2.webp", "assets-web/stickers/broken/brokenemotion_3.webp", "assets-web/stickers/broken/brokenemotion_4.webp", "assets-web/stickers/broken/brokenemotion_5.webp", "assets-web/stickers/broken/brokenemotion_6.webp", "assets-web/stickers/broken/brokenemotion_7.webp", "assets-web/stickers/broken/brokenemotion_8.webp", "assets-web/stickers/broken/brokenemotion_9.webp", "assets-web/stickers/broken/brokenemotion_10.webp", "assets-web/stickers/broken/brokenemotion_11.webp", "assets-web/stickers/broken/brokenemotion_12.webp", "assets-web/stickers/broken/brokenemotion2_1.webp", "assets-web/stickers/broken/brokenemotion2_2.webp", "assets-web/stickers/broken/brokenemotion2_3.webp", "assets-web/stickers/broken/brokenemotion2_4.webp", "assets-web/stickers/broken/brokenemotion2_5.webp", "assets-web/stickers/broken/brokenemotion2_6.webp", "assets-web/stickers/broken/brokenemotion2_7.webp", "assets-web/stickers/broken/brokenemotion2_8.webp", "assets-web/stickers/broken/brokenemotion2_9.webp", "assets-web/stickers/broken/brokenemotion2_10.webp", "assets-web/stickers/broken/brokenemotion2_11.webp", "assets-web/stickers/broken/brokenemotion2_12.webp"],
    "compare": ["assets-web/stickers/compare/compare2_1.webp", "assets-web/stickers/compare/compare2_2.webp", "assets-web/stickers/compare/compare2_3.webp", "assets-web/stickers/compare/compare2_4.webp", "assets-web/stickers/compare/compare2_5.webp", "assets-web/stickers/compare/compare2_6.webp", "assets-web/stickers/compare/compare2_7.webp", "assets-web/stickers/compare/compare2_8.webp", "assets-web/stickers/compare/compare2_9.webp", "assets-web/stickers/compare/compare2_10.webp", "assets-web/stickers/compare/compare2_11.webp", "assets-web/stickers/compare/compare2_12.webp"],
    "waiting": ["assets-web/stickers/waiting/wating_1.webp", "assets-web/stickers/waiting/wating_2.webp", "assets-web/stickers/waiting/wating_3.webp", "assets-web/stickers/waiting/wating_4.webp", "assets-web/stickers/waiting/wating_5.webp", "assets-web/stickers/waiting/wating_6.webp", "assets-web/stickers/waiting/wating_7.webp", "assets-web/stickers/waiting/wating_8.webp", "assets-web/stickers/waiting/wating_9.webp", "assets-web/stickers/waiting/wating_10.webp", "assets-web/stickers/waiting/wating_11.webp", "assets-web/stickers/waiting/wating_12.webp", "assets-web/stickers/waiting/wating2_1.webp", "assets-web/stickers/waiting/wating2_2.webp", "assets-web/stickers/waiting/wating2_3.webp", "assets-web/stickers/waiting/wating2_4.webp", "assets-web/stickers/waiting/wating2_5.webp", "assets-web/stickers/waiting/wating2_6.webp", "assets-web/stickers/waiting/wating2_7.webp", "assets-web/stickers/waiting/wating2_8.webp", "assets-web/stickers/waiting/wating2_9.webp", "assets-web/stickers/waiting/wating2_10.webp", "assets-web/stickers/waiting/wating2_11.webp", "assets-web/stickers/waiting/wating2_12.webp"],
    "forgive": ["assets-web/stickers/forgive/forfive_1.webp", "assets-web/stickers/forgive/forfive_2.webp", "assets-web/stickers/forgive/forfive_3.webp", "assets-web/stickers/forgive/forfive_4.webp", "assets-web/stickers/forgive/forfive_5.webp", "assets-web/stickers/forgive/forfive_6.webp", "assets-web/stickers/forgive/forfive_7.webp", "assets-web/stickers/forgive/forfive_8.webp", "assets-web/stickers/forgive/forfive_9.webp", "assets-web/stickers/forgive/forfive_10.webp", "assets-web/stickers/forgive/forfive_11.webp", "assets-web/stickers/forgive/forfive_12.webp", "assets-web/stickers/forgive/forgive2_1.webp", "assets-web/stickers/forgive/forgive2_2.webp", "assets-web/stickers/forgive/forgive2_3.webp", "assets-web/stickers/forgive/forgive2_4.webp", "assets-web/stickers/forgive/forgive2_5.webp", "assets-web/stickers/forgive/forgive2_6.webp", "assets-web/stickers/forgive/forgive2_7.webp", "assets-web/stickers/forgive/forgive2_8.webp", "assets-web/stickers/forgive/forgive2_9.webp", "assets-web/stickers/forgive/forgive2_10.webp", "assets-web/stickers/forgive/forgive2_11.webp", "assets-web/stickers/forgive/forgive2_12.webp"],
    "distant": ["assets-web/stickers/distant/godsofar_1.webp", "assets-web/stickers/distant/godsofar_2.webp", "assets-web/stickers/distant/godsofar_3.webp", "assets-web/stickers/distant/godsofar_4.webp", "assets-web/stickers/distant/godsofar_5.webp", "assets-web/stickers/distant/godsofar_6.webp", "assets-web/stickers/distant/godsofar_7.webp", "assets-web/stickers/distant/godsofar_8.webp", "assets-web/stickers/distant/godsofar_9.webp", "assets-web/stickers/distant/godsofar_10.webp", "assets-web/stickers/distant/godsofar_11.webp", "assets-web/stickers/distant/godsofar_12.webp", "assets-web/stickers/distant/godsofar2_1.webp", "assets-web/stickers/distant/godsofar2_2.webp", "assets-web/stickers/distant/godsofar2_3.webp", "assets-web/stickers/distant/godsofar2_4.webp", "assets-web/stickers/distant/godsofar2_5.webp", "assets-web/stickers/distant/godsofar2_6.webp", "assets-web/stickers/distant/godsofar2_7.webp", "assets-web/stickers/distant/godsofar2_8.webp", "assets-web/stickers/distant/godsofar2_9.webp", "assets-web/stickers/distant/godsofar2_10.webp", "assets-web/stickers/distant/godsofar2_11.webp", "assets-web/stickers/distant/godsofar2_12.webp"],
    "calling": ["assets-web/stickers/calling/reponsibility_1.webp", "assets-web/stickers/calling/reponsibility_2.webp", "assets-web/stickers/calling/reponsibility_3.webp", "assets-web/stickers/calling/reponsibility_4.webp", "assets-web/stickers/calling/reponsibility_5.webp", "assets-web/stickers/calling/reponsibility_6.webp", "assets-web/stickers/calling/reponsibility_7.webp", "assets-web/stickers/calling/reponsibility_8.webp", "assets-web/stickers/calling/reponsibility_9.webp", "assets-web/stickers/calling/reponsibility_10.webp", "assets-web/stickers/calling/reponsibility_11.webp", "assets-web/stickers/calling/reponsibility_12.webp", "assets-web/stickers/calling/reponsibility2_1.webp", "assets-web/stickers/calling/reponsibility2_2.webp", "assets-web/stickers/calling/reponsibility2_3.webp", "assets-web/stickers/calling/reponsibility2_4.webp", "assets-web/stickers/calling/reponsibility2_5.webp", "assets-web/stickers/calling/reponsibility2_6.webp", "assets-web/stickers/calling/reponsibility2_7.webp", "assets-web/stickers/calling/reponsibility2_8.webp", "assets-web/stickers/calling/reponsibility2_9.webp", "assets-web/stickers/calling/reponsibility2_10.webp", "assets-web/stickers/calling/reponsibility2_11.webp", "assets-web/stickers/calling/reponsibility2_12.webp"],
    "thanks": ["assets-web/stickers/thanks/nothanks_1.webp", "assets-web/stickers/thanks/nothanks_2.webp", "assets-web/stickers/thanks/nothanks_3.webp", "assets-web/stickers/thanks/nothanks_4.webp", "assets-web/stickers/thanks/nothanks_5.webp", "assets-web/stickers/thanks/nothanks_6.webp", "assets-web/stickers/thanks/nothanks_7.webp", "assets-web/stickers/thanks/nothanks_8.webp", "assets-web/stickers/thanks/nothanks_9.webp", "assets-web/stickers/thanks/nothanks_10.webp", "assets-web/stickers/thanks/nothanks_11.webp", "assets-web/stickers/thanks/nothanks_12.webp", "assets-web/stickers/thanks/nothanks2_1.webp", "assets-web/stickers/thanks/nothanks2_2.webp", "assets-web/stickers/thanks/nothanks2_3.webp", "assets-web/stickers/thanks/nothanks2_4.webp", "assets-web/stickers/thanks/nothanks2_5.webp", "assets-web/stickers/thanks/nothanks2_6.webp", "assets-web/stickers/thanks/nothanks2_7.webp", "assets-web/stickers/thanks/nothanks2_8.webp", "assets-web/stickers/thanks/nothanks2_9.webp", "assets-web/stickers/thanks/nothanks2_10.webp", "assets-web/stickers/thanks/nothanks2_11.webp", "assets-web/stickers/thanks/nothanks2_12.webp"]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "mind-pharmacy/data/stickers-data.js", error: String((e && e.message) || e) }); }

// ui_kits/soul-pharmacy/AssessmentScreen.jsx
try { (() => {
// AssessmentScreen — 감정 선택 후 전환 화면.
// 상태 머신: loading → envelope-enter → paper-rise → complete
//  · loading      : 로딩 오버레이만 표시(봉투/종이 애니메이션 정지)
//  · envelope-enter: 봉투(뒷면+앞면)가 fade-in + 살짝 상승하며 먼저 등장 (0.45s)
//  · paper-rise    : 봉투가 자리잡은 뒤, 접수카드 종이가 봉투 안에서 위로 상승 (1.1s)
//  · complete      : 최종 UI 활성화
// 3-레이어: (1) env-back  (2) 접수카드 종이(AssessmentPaper)  (3) env-front.
// 텍스트/아이콘은 이미지에 합성하지 않고 별도 HTML 레이어로 올린다.
function AssessmentScreen({
  mood,
  onBack,
  onSubmit
}) {
  const {
    MOODS,
    AssessmentPaper,
    Icon
  } = window.DesignSystem_d4e5a3;
  const m = MOODS[mood] || MOODS.anxious;
  const data = window.getAssessment(mood);
  const [selections, setSelections] = React.useState({});
  const [phase, setPhase] = React.useState("loading");
  const [skip, setSkip] = React.useState(false); // 화면 더블클릭 → 전체 즉시 표시
  React.useEffect(() => {
    setSkip(false);
  }, [mood]);

  // 봉투 표시 폭 W (반응형). PC는 별도 레이아웃(넓은 접수 영역).
  const [W, setW] = React.useState(340);
  const [pc, setPc] = React.useState(false);
  React.useEffect(() => {
    const pick = () => {
      const vw = window.innerWidth;
      const isPc = vw >= 900;
      setPc(isPc);
      setW(isPc ? Math.round(Math.min(760, Math.max(680, vw * 0.58)) / 0.78) : Math.max(268, Math.min(360, Math.round(vw * 0.86))));
    };
    pick();
    window.addEventListener("resize", pick);
    return () => window.removeEventListener("resize", pick);
  }, []);

  // 감정 변경/진입 시 상태 머신을 처음부터 순차 실행.
  // 메인에서 봉투가 중앙으로 날아온 직후이므로, 로딩은 짧게(연속감 유지) 후
  // 봉투 등장 → 종이 상승 순으로 이어진다.
  React.useEffect(() => {
    setPhase("loading");
    const t0 = setTimeout(() => setPhase("ready"), 1200); // 로딩 후 준비 화면
    const t1 = setTimeout(() => setPhase("intro"), 1200 + 2000); // 준비 화면 후 안내 화면
    const t2 = setTimeout(() => setPhase("envelope-enter"), 1200 + 2000 + 1900); // 안내가 사라진 뒤 봉투 등장
    const t3 = setTimeout(() => setPhase("paper-rise"), 1200 + 2000 + 1900 + 1250);
    const t4 = setTimeout(() => setPhase("complete"), 1200 + 2000 + 1900 + 1250 + 2400);
    return () => {
      clearTimeout(t0);
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [mood]);
  const toggle = (g, o, v) => setSelections(s => ({
    ...s,
    [`${g}-${o}`]: v
  }));
  const envelopeIn = skip || phase !== "loading" && phase !== "ready" && phase !== "intro";
  const risen = skip || phase === "paper-rise" || phase === "complete";

  // Q1 접수카드 종이가 등장하는 시점(paper-rise)부터 2번 배경음악으로 크로스페이드
  React.useEffect(() => {
    if (window.__bgm && risen) window.__bgm.play(2);
  }, [risen]);

  // ── 측정 기반 지오메트리 (envelope box = W×W, 원점 = box 하단) ──
  // 새 봉투 앞·뒷면은 동일 캔버스(1643×1371). 같은 봉투의 양면이므로 폭·위치를 완전히 일치시켜 정확히 겹친다.
  const RATIO = 1371 / 1643; // 앞·뒷면 공통 캔버스 비율
  const envW = W * 0.80; // 앞면·뒷면 동일 폭 (봉투 추가 축소)
  const envImgH = envW * RATIO; // 봉투 이미지 높이
  const frontW = envW;
  const backW = envW;
  const frontBottom = 0; // 앞·뒤 동일 위치
  const paperW = W * 0.78; // 접수지 더 크게 (메인)
  const paperPadBottom = Math.round(W * 0.07); // 종이 하단 빈 크림 영역(포켓 안으로 tuck)
  const footerPad = 26; // AssessmentPaper 푸터 하단 패딩
  // 앞면 상단이 버튼 바로 아래에 오도록 tuck 계산 → 빈 크림 꼬리를 포켓이 덮고, 버튼은 노출.
  // 종이 하단을 앞면 포켓 오목 곡선 아래로 tuck (곡선 중심 ≈ 아래에서 0.60H)
  const paperBottom = envImgH * 0.50; // 종이 하단을 봉투 포켓 안으로 더 깊이 tuck (빈 공간 제거)

  const envH = envImgH;
  // 접수지는 모든 문항에서 동일한 고정 높이 — 문항마다 선택지 수가 달라도
  // 무대 높이·봉투·감정명 위치가 움직이지 않도록 카드 높이를 고정한다.
  const paperH = pc ? 700 : 620;
  const stageH = paperBottom + paperH + 16;
  // 봉투 하단 꼬리는 감정 문구 조금 아래에서 끝나도록 트림(빈 공간 제거). 상단은 트림하지 않음.
  const clipH = stageH - envImgH * 0.30;
  return /*#__PURE__*/React.createElement("div", {
    onDoubleClick: () => setSkip(true),
    style: {
      position: "relative",
      minHeight: "100%",
      overflowX: "hidden",
      background: "radial-gradient(120% 70% at 50% 0%, #FBF7F0 0%, var(--bg-page) 60%, #EDE7DE 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes rxdot{0%,80%,100%{opacity:.25;transform:translateY(0)}40%{opacity:1;transform:translateY(-4px)}}@keyframes rxstep{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes rxopt{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}`), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 0,
      overflow: "hidden",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: pc ? "9%" : "7%",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: pc ? 30 : 14,
      filter: "blur(4px)",
      opacity: 0.5
    }
  }, ["anxious", "broken", "compare", "waiting", "forgive", "distant", "calling", "thanks"].map((k, i) => /*#__PURE__*/React.createElement("img", {
    key: k,
    src: `assets-web/env-front-${k}.webp`,
    alt: "",
    draggable: "false",
    style: {
      width: pc ? 150 : 68,
      height: "auto",
      transform: `translateY(${i % 2 ? 20 : 0}px)`,
      userSelect: "none"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(250,247,240,0.5) 0%, rgba(250,247,240,0.82) 52%, #F3EEE9 100%)"
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      position: "absolute",
      top: 16,
      left: 16,
      zIndex: 20,
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-muted)",
      display: "flex",
      alignItems: "center",
      gap: 4,
      fontFamily: "var(--font-body)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 19,
    color: "var(--text-muted)",
    stroke: 1.5
  }), " \uB4A4\uB85C"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      width: W,
      height: clipH,
      overflow: "hidden",
      margin: pc ? "8px auto 0" : "12px auto 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: W,
      height: stageH
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      bottom: 0,
      width: W,
      height: envH,
      opacity: envelopeIn ? 1 : 0,
      transform: `translateY(${envelopeIn ? "0px" : "16px"}) scale(${envelopeIn ? 1 : 1.06})`,
      transformOrigin: "center bottom",
      transition: "transform 1100ms cubic-bezier(0.22,1,0.32,1), opacity 1000ms ease-out"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `assets-web/env-back-${mood}.webp`,
    alt: "",
    draggable: "false",
    style: {
      position: "absolute",
      left: "50%",
      bottom: 0,
      transform: "translateX(-50%)",
      width: backW,
      height: "auto",
      zIndex: 1,
      userSelect: "none",
      filter: "drop-shadow(0 14px 22px rgba(120,92,64,0.16))",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      bottom: paperBottom,
      width: paperW,
      zIndex: 2,
      transform: `translateX(-50%) translateY(${risen ? "0px" : Math.round(W * 0.2) + "px"})`,
      opacity: risen ? 1 : 0,
      transition: "transform 2350ms cubic-bezier(0.22,1,0.32,1), opacity 1500ms ease-out"
    }
  }, /*#__PURE__*/React.createElement(AssessmentPaper, {
    icon: m.icon,
    iconColor: m.ink,
    title: "\uC624\uB298\uC758 \uB9C8\uC74C \uC811\uC218\uCE74\uB4DC",
    subtitle: `${m.label.replace("\n", " ")} · 지금 마음에 가까운 것`,
    groups: data.groups,
    selections: selections,
    onToggle: toggle,
    ctaLabel: data.cta,
    onSubmit: () => onSubmit && onSubmit(selections),
    width: paperW,
    pc: pc,
    cardHeight: paperH,
    skip: skip,
    style: {
      paddingBottom: paperPadBottom
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      bottom: frontBottom,
      width: frontW,
      zIndex: 3,
      transform: "translateX(-50%)",
      pointerEvents: "none",
      filter: "drop-shadow(0 6px 10px rgba(120,92,64,0.14))"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: `assets-web/env-front-${mood}.webp`,
    alt: "",
    draggable: "false",
    style: {
      display: "block",
      width: "100%",
      height: "auto",
      userSelect: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: "62%",
      transform: "translateY(-50%)",
      textAlign: "center",
      fontFamily: "var(--font-title)",
      fontWeight: 600,
      fontSize: Math.round(W * 0.046),
      lineHeight: 1.3,
      color: "var(--ink-900)",
      whiteSpace: "pre-line",
      letterSpacing: "-0.01em",
      textShadow: "0 1px 2px rgba(255,255,255,0.35)"
    }
  }, m.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 43,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 14,
      padding: "0 32px",
      background: "radial-gradient(120% 70% at 50% 42%, rgba(250,247,240,0.94) 0%, rgba(243,238,233,0.9) 70%)",
      opacity: phase === "ready" && !skip ? 1 : 0,
      pointerEvents: phase === "ready" && !skip ? "auto" : "none",
      transition: "opacity 900ms ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      letterSpacing: "0.24em",
      color: m.ink
    }
  }, "\uC624\uB298\uC758 \uB9C8\uC74C \uC811\uC218"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 600,
      fontSize: 26,
      lineHeight: 1.5,
      color: "var(--ink-900)",
      textAlign: "center",
      margin: 0
    }
  }, "\uC900\uBE44\uB418\uC168\uB098\uC694?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: 1.7,
      color: "var(--text-muted)",
      textAlign: "center",
      margin: 0
    }
  }, "\uC9C0\uAE08 \uB9C8\uC74C\uC744 \uCC9C\uCC9C\uD788 \uC811\uC218\uD574\uBCFC\uAC8C\uC694.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 42,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 14,
      padding: "0 32px",
      background: "radial-gradient(120% 70% at 50% 42%, rgba(250,247,240,0.92) 0%, rgba(243,238,233,0.86) 70%)",
      opacity: phase === "intro" && !skip ? 1 : 0,
      pointerEvents: phase === "intro" && !skip ? "auto" : "none",
      transition: "opacity 900ms ease"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      letterSpacing: "0.24em",
      color: m.ink
    }
  }, "\uC624\uB298\uC758 \uB9C8\uC74C \uC811\uC218"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 600,
      fontSize: 26,
      lineHeight: 1.5,
      color: "var(--ink-900)",
      textAlign: "center",
      margin: 0
    }
  }, "\uC9C0\uAE08 \uB9C8\uC74C\uC5D0 \uAC00\uAE4C\uC6B4 \uAC83\uB9CC", /*#__PURE__*/React.createElement("br", null), "\uCC9C\uCC9C\uD788 \uACE8\uB77C\uC8FC\uC138\uC694.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 40,
      background: "radial-gradient(120% 70% at 50% 40%, #FBF7F0 0%, var(--bg-page) 70%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 22,
      opacity: phase === "loading" && !skip ? 1 : 0,
      pointerEvents: phase === "loading" && !skip ? "auto" : "none",
      transition: "opacity 600ms ease-out"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      height: 54,
      borderRadius: "50%",
      background: m.fill,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 8px 20px rgba(120,92,64,0.16)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: m.icon,
    size: 26,
    color: m.ink,
    stroke: 1.5
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 600,
      fontSize: 18,
      color: "var(--ink-900)"
    }
  }, "\uB9D0\uC500 \uCC98\uBC29\uC804\uC744 \uC900\uBE44\uD558\uACE0 \uC788\uC5B4\uC694"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 7
    }
  }, phase === "loading" && [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: m.ink,
      animation: `rxdot 1.2s ${i * 0.16}s infinite ease-in-out`
    }
  })))));
}
window.AssessmentScreen = AssessmentScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soul-pharmacy/AssessmentScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/soul-pharmacy/AssessmentScreen.standalone.jsx
try { (() => {
// AssessmentScreen — 감정 선택 후 전환 화면.
// 상태 머신: loading → envelope-enter → paper-rise → complete
//  · loading      : 로딩 오버레이만 표시(봉투/종이 애니메이션 정지)
//  · envelope-enter: 봉투(뒷면+앞면)가 fade-in + 살짝 상승하며 먼저 등장 (0.45s)
//  · paper-rise    : 봉투가 자리잡은 뒤, 접수카드 종이가 봉투 안에서 위로 상승 (1.1s)
//  · complete      : 최종 UI 활성화
// 3-레이어: (1) env-back  (2) 접수카드 종이(AssessmentPaper)  (3) env-front.
// 텍스트/아이콘은 이미지에 합성하지 않고 별도 HTML 레이어로 올린다.
function AssessmentScreen({
  mood,
  onBack,
  onSubmit
}) {
  const {
    MOODS,
    AssessmentPaper,
    Icon
  } = window.DesignSystem_d4e5a3;
  const m = MOODS[mood] || MOODS.anxious;
  const data = window.getAssessment(mood);
  const [selections, setSelections] = React.useState({});
  const [phase, setPhase] = React.useState("loading");
  const [skip, setSkip] = React.useState(false); // 화면 더블클릭 → 전체 즉시 표시
  React.useEffect(() => {
    setSkip(false);
  }, [mood]);

  // 봉투 표시 폭 W (반응형). PC는 별도 레이아웃(넓은 접수 영역).
  const [W, setW] = React.useState(340);
  const [pc, setPc] = React.useState(false);
  React.useEffect(() => {
    const pick = () => {
      const vw = window.innerWidth;
      const isPc = vw >= 900;
      setPc(isPc);
      setW(isPc ? Math.round(Math.min(760, Math.max(680, vw * 0.58)) / 0.78) : Math.max(268, Math.min(360, Math.round(vw * 0.86))));
    };
    pick();
    window.addEventListener("resize", pick);
    return () => window.removeEventListener("resize", pick);
  }, []);

  // 감정 변경/진입 시 상태 머신을 처음부터 순차 실행.
  // 메인에서 봉투가 중앙으로 날아온 직후이므로, 로딩은 짧게(연속감 유지) 후
  // 봉투 등장 → 종이 상승 순으로 이어진다.
  React.useEffect(() => {
    setPhase("loading");
    const t1 = setTimeout(() => setPhase("envelope-enter"), 1600); // 차분한 로딩 (숨 고르기)
    const t2 = setTimeout(() => setPhase("paper-rise"), 1600 + 1250); // 봉투 안착 + 짧은 간격 후 종이 상승
    const t3 = setTimeout(() => setPhase("complete"), 1600 + 1250 + 2400); // 종이 상승 완료
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [mood]);
  const toggle = (g, o, v) => setSelections(s => ({
    ...s,
    [`${g}-${o}`]: v
  }));
  const envelopeIn = phase !== "loading";
  const risen = phase === "paper-rise" || phase === "complete";

  // ── 측정 기반 지오메트리 (envelope box = W×W, 원점 = box 하단) ──
  // 새 봉투 앞·뒷면은 동일 캔버스(1643×1371). 같은 봉투의 양면이므로 폭·위치를 완전히 일치시켜 정확히 겹친다.
  const RATIO = 1371 / 1643; // 앞·뒷면 공통 캔버스 비율
  const envW = W * 0.80; // 앞면·뒷면 동일 폭 (봉투 추가 축소)
  const envImgH = envW * RATIO; // 봉투 이미지 높이
  const frontW = envW;
  const backW = envW;
  const frontBottom = 0; // 앞·뒤 동일 위치
  const paperW = W * 0.78; // 접수지 더 크게 (메인)
  const paperPadBottom = Math.round(W * 0.07); // 종이 하단 빈 크림 영역(포켓 안으로 tuck)
  const footerPad = 26; // AssessmentPaper 푸터 하단 패딩
  // 앞면 상단이 버튼 바로 아래에 오도록 tuck 계산 → 빈 크림 꼬리를 포켓이 덮고, 버튼은 노출.
  // 종이 하단을 앞면 포켓 오목 곡선 아래로 tuck (곡선 중심 ≈ 아래에서 0.60H)
  const paperBottom = envImgH * 0.44;
  const envH = envImgH;
  const estPaperH = (pc ? 240 : 150) + (pc ? 260 : 200) + 20 + paperPadBottom;
  const stageH = paperBottom + estPaperH + 16;
  // 봉투 하단은 화면 밖으로 잘리게: 감정 문구가 보이는 지점 + 약간의 여백까지만 노출.
  // 문구 아래로 조금만 남기고 나머지 봉투 하단은 잘라, 그 지점에서 스크롤이 끝나게 한다.
  const frontTextFromBottom = envImgH * 0.30;
  const clipH = stageH - frontTextFromBottom + (pc ? 8 : 40);
  return /*#__PURE__*/React.createElement("div", {
    onDoubleClick: () => setSkip(true),
    style: {
      position: "relative",
      minHeight: "100%",
      overflowX: "hidden",
      background: "radial-gradient(120% 70% at 50% 0%, #FBF7F0 0%, var(--bg-page) 60%, #EDE7DE 100%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes rxdot{0%,80%,100%{opacity:.25;transform:translateY(0)}40%{opacity:1;transform:translateY(-4px)}}@keyframes rxstep{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes rxopt{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}`), /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 0,
      overflow: "hidden",
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: pc ? "9%" : "7%",
      left: "50%",
      transform: "translateX(-50%)",
      display: "flex",
      gap: pc ? 30 : 14,
      filter: "blur(7px)",
      opacity: 0.26
    }
  }, ["anxious", "broken", "compare", "waiting", "forgive", "distant", "calling", "thanks"].map((k, i) => /*#__PURE__*/React.createElement("img", {
    key: k,
    src: window.__resources["envFront_" + k],
    alt: "",
    draggable: "false",
    style: {
      width: pc ? 150 : 68,
      height: "auto",
      transform: `translateY(${i % 2 ? 20 : 0}px)`,
      userSelect: "none"
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(250,247,240,0.5) 0%, rgba(250,247,240,0.82) 52%, #F3EEE9 100%)"
    }
  })), /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      position: "absolute",
      top: 16,
      left: 16,
      zIndex: 20,
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-muted)",
      display: "flex",
      alignItems: "center",
      gap: 4,
      fontFamily: "var(--font-body)",
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 19,
    color: "var(--text-muted)",
    stroke: 1.5
  }), " \uB4A4\uB85C"), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: pc ? "4px 24px 0" : "30px 24px 4px",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      letterSpacing: "0.22em",
      color: m.ink,
      marginBottom: pc ? 4 : 8
    }
  }, "\uC624\uB298\uC758 \uB9C8\uC74C \uC811\uC218"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: pc ? 14 : 13,
      color: "var(--text-muted)",
      margin: 0
    }
  }, "\uC9C0\uAE08 \uB9C8\uC74C\uC5D0 \uAC00\uAE4C\uC6B4 \uAC83\uB9CC \uCC9C\uCC9C\uD788 \uACE8\uB77C\uC8FC\uC138\uC694.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      width: W,
      height: clipH,
      overflow: "hidden",
      margin: pc ? "-56px auto 0" : "0 auto 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: W,
      height: stageH
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      bottom: 0,
      width: W,
      height: envH,
      opacity: envelopeIn ? 1 : 0,
      transform: `translateY(${envelopeIn ? "0px" : "16px"}) scale(${envelopeIn ? 1 : 1.06})`,
      transformOrigin: "center bottom",
      transition: "transform 1100ms cubic-bezier(0.22,1,0.32,1), opacity 1000ms ease-out"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources["envBack_" + mood],
    alt: "",
    draggable: "false",
    style: {
      position: "absolute",
      left: "50%",
      bottom: 0,
      transform: "translateX(-50%)",
      width: backW,
      height: "auto",
      zIndex: 1,
      userSelect: "none",
      filter: "drop-shadow(0 14px 22px rgba(120,92,64,0.16))",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      bottom: paperBottom,
      width: paperW,
      zIndex: 2,
      transform: `translateX(-50%) translateY(${risen ? "0px" : Math.round(W * 0.2) + "px"})`,
      opacity: risen ? 1 : 0,
      transition: "transform 2350ms cubic-bezier(0.22,1,0.32,1), opacity 1500ms ease-out"
    }
  }, /*#__PURE__*/React.createElement(AssessmentPaper, {
    icon: m.icon,
    iconColor: m.ink,
    title: "\uC624\uB298\uC758 \uB9C8\uC74C \uC811\uC218\uCE74\uB4DC",
    subtitle: `${m.label.replace("\n", " ")} · 지금 마음에 가까운 것`,
    groups: data.groups,
    selections: selections,
    onToggle: toggle,
    ctaLabel: data.cta,
    onSubmit: () => onSubmit && onSubmit(selections),
    width: paperW,
    pc: pc,
    skip: skip,
    style: {
      paddingBottom: paperPadBottom
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "50%",
      bottom: frontBottom,
      width: frontW,
      zIndex: 3,
      transform: "translateX(-50%)",
      pointerEvents: "none",
      filter: "drop-shadow(0 6px 10px rgba(120,92,64,0.14))"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources["envFront_" + mood],
    alt: "",
    draggable: "false",
    style: {
      display: "block",
      width: "100%",
      height: "auto",
      userSelect: "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: "60%",
      transform: "translateY(-50%)",
      textAlign: "center",
      fontFamily: "var(--font-title)",
      fontWeight: 600,
      fontSize: Math.round(W * 0.062),
      lineHeight: 1.3,
      color: "var(--ink-900)",
      whiteSpace: "pre-line",
      letterSpacing: "-0.01em",
      textShadow: "0 1px 2px rgba(255,255,255,0.35)"
    }
  }, m.label))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 40,
      background: "radial-gradient(120% 70% at 50% 40%, #FBF7F0 0%, var(--bg-page) 70%)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      gap: 22,
      opacity: phase === "loading" ? 1 : 0,
      pointerEvents: phase === "loading" ? "auto" : "none",
      transition: "opacity 600ms ease-out"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      height: 54,
      borderRadius: "50%",
      background: m.fill,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 8px 20px rgba(120,92,64,0.16)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: m.icon,
    size: 26,
    color: m.ink,
    stroke: 1.5
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 600,
      fontSize: 18,
      color: "var(--ink-900)"
    }
  }, "\uB9D0\uC500 \uCC98\uBC29\uC804\uC744 \uC900\uBE44\uD558\uACE0 \uC788\uC5B4\uC694"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 7
    }
  }, phase === "loading" && [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: 8,
      height: 8,
      borderRadius: "50%",
      background: m.ink,
      animation: `rxdot 1.2s ${i * 0.16}s infinite ease-in-out`
    }
  })))));
}
window.AssessmentScreen = AssessmentScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soul-pharmacy/AssessmentScreen.standalone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/soul-pharmacy/IntroScreen.jsx
try { (() => {
// IntroScreen — 진입 화면: warm apothecary entry.
function IntroScreen({
  onStart
}) {
  const {
    Wordmark,
    Button,
    Icon
  } = window.DesignSystem_d4e5a3;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "56px 28px 40px",
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      minHeight: "100%",
      boxSizing: "border-box",
      justifyContent: "center",
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    name: "\uB9C8\uC74C\uC57D\uAD6D",
    mark: "cross",
    size: 22
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: 12,
      letterSpacing: "0.18em",
      color: "var(--text-muted)",
      marginBottom: 26
    }
  }, "\uC624\uB298\uC758 \uB9D0\uC500 \uCC98\uBC29\uC804"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 92,
      height: 92,
      borderRadius: "50%",
      background: "var(--coral-50)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 26,
      boxShadow: "var(--shadow-sm)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "cross",
    size: 40,
    color: "var(--accent)",
    stroke: 1.4
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-title)",
      fontSize: 28,
      lineHeight: 1.35,
      color: "var(--text-strong)",
      margin: "0 0 14px"
    }
  }, "\uC624\uB298 \uB9C8\uC74C\uC774", /*#__PURE__*/React.createElement("br", null), "\uC5B4\uB514\uAC00 \uC544\uD508\uAC00\uC694?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: 1.7,
      color: "var(--text-muted)",
      margin: "0 0 34px",
      maxWidth: 300
    }
  }, "\uB9D0\uB85C \uB2E4 \uC124\uBA85\uD558\uC9C0 \uC54A\uC544\uB3C4 \uAD1C\uCC2E\uC544\uC694.", /*#__PURE__*/React.createElement("br", null), "\uC9C0\uAE08 \uB9C8\uC74C\uC5D0 \uAC00\uAE4C\uC6B4 \uC99D\uC0C1\uC744 \uD558\uB098 \uACE8\uB77C\uC8FC\uC138\uC694."), /*#__PURE__*/React.createElement(Button, {
    tone: "coral",
    size: "lg",
    onClick: onStart,
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "pill",
      size: 19,
      color: "#FFF9F4"
    })
  }, "\uB9D0\uC500 \uCC98\uBC29\uBC1B\uAE30"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "auto",
      paddingTop: 30,
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-faint)"
    }
  }, "\uC624\uB298 \uB9C8\uC74C\uC774 \uC544\uD504\uB2E4\uBA74, \uB9D0\uC500 \uD55C \uC54C \uBC1B\uC544\uAC00\uC138\uC694."));
}
window.IntroScreen = IntroScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soul-pharmacy/IntroScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/soul-pharmacy/IntroSequence.jsx
try { (() => {
// IntroSequence — 체험 시작 전 3단계 안내 화면. 담백한 안내문 → 감정 선택으로 연결.
// 클릭(또는 다음 버튼)으로 진행, 하단 점 인디케이터, 부드러운 페이드 전환.
function IntroSequence({
  onDone
}) {
  const {
    Icon
  } = window.DesignSystem_d4e5a3;
  // 마음약국 마크 — 약병(십자) + 하트 + 잎사귀. 브랜드 톤으로 직접 드로잉.
  const OLIVE = "var(--mood-calling-ink)",
    CORAL = "var(--coral-300)",
    SAGE = "var(--mood-calling-fill)";
  const LogoMark = () => /*#__PURE__*/React.createElement("svg", {
    width: "116",
    height: "116",
    viewBox: "0 0 120 120",
    fill: "none",
    style: {
      display: "block",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("g", {
    stroke: OLIVE,
    strokeWidth: "2",
    strokeLinecap: "round",
    fill: "none",
    opacity: "0.9"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M86 86 C92 74 96 60 92 46"
  })), /*#__PURE__*/React.createElement("g", {
    fill: SAGE,
    opacity: "0.95"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M90 52 C96 48 104 49 107 45 C104 53 98 57 91 56 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M88 64 C94 61 101 62 105 58 C102 66 96 69 89 68 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M86 76 C91 74 98 75 101 71 C99 78 93 81 87 80 Z"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M33 74 C25 68 24 60 29 56 C33 53 38 55 39 59 C40 55 45 53 49 56 C54 60 52 68 44 74 C41 76 39 77 39 77 C39 77 36 76 33 74 Z",
    fill: CORAL,
    opacity: "0.85"
  }), /*#__PURE__*/React.createElement("g", {
    stroke: OLIVE,
    strokeWidth: "2.4",
    strokeLinejoin: "round",
    strokeLinecap: "round",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "46",
    y: "20",
    width: "28",
    height: "10",
    rx: "3"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M50 30 h20 a12 12 0 0 1 12 12 v38 a10 10 0 0 1 -10 10 h-24 a10 10 0 0 1 -10 -10 v-38 a12 12 0 0 1 12 -12 Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M60 48 v20 M50 58 h20",
    strokeWidth: "3.4"
  })));
  const SCREENS = [{
    logo: true,
    title: ["안녕하세요.", "오늘의 마음을 위한", "마음약국입니다."],
    sub: ["이곳은 현재의 마음을 살펴보고", "그 마음에 필요한 말씀을 만나보는 공간입니다."]
  }, {
    logo: true,
    title: ["지금부터 마음 카드 선택과", "세 가지 질문이 이어집니다."],
    sub: ["잘 생각해 낸 답보다", "지금 마음에 가까운 답을 골라 주세요."]
  }, {
    logo: true,
    title: ["먼저,", "오늘 내 마음에 가장 가까운", "마음 하나를 선택해 주세요."],
    sub: ["천천히 살펴본 뒤", "가장 마음이 머무는 카드를 선택해 주세요."]
  }];
  const [i, setI] = React.useState(0);
  const [fading, setFading] = React.useState(false);
  const last = i === SCREENS.length - 1;
  const go = next => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      if (next >= SCREENS.length) {
        onDone && onDone();
        return;
      }
      setI(next);
      setFading(false);
    }, 420);
  };
  const s = SCREENS[i];
  return /*#__PURE__*/React.createElement("div", {
    onClick: () => go(i + 1),
    style: {
      position: "relative",
      minHeight: "100vh",
      width: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "60px 28px",
      cursor: "pointer",
      background: "url('assets-web/leaf-tl-soft.png') top left / min(52vw,460px) auto no-repeat, url('assets-web/leaf-br-soft.png') bottom right / min(52vw,460px) auto no-repeat, #F2EBE6"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      textAlign: "center",
      maxWidth: 560,
      opacity: fading ? 0 : 1,
      transform: fading ? "translateY(10px)" : "translateY(0)",
      transition: "opacity 400ms var(--ease-soft), transform 400ms var(--ease-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 26,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10
    }
  }, s.logo ? /*#__PURE__*/React.createElement("img", {
    src: "assets-web/logo-mark.webp",
    alt: "\uB9C8\uC74C\uC57D\uAD6D",
    style: {
      width: 54,
      height: "auto",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 40,
    color: "var(--mood-compare-ink)",
    stroke: 1.4
  })), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 600,
      fontSize: 27,
      lineHeight: 1.55,
      color: "var(--ink-900)",
      margin: 0,
      letterSpacing: "-0.01em"
    }
  }, s.title.map((t, k) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      height: 1,
      background: "var(--line-soft)",
      margin: "26px auto"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14.5,
      lineHeight: 1.9,
      color: "var(--text-muted)",
      margin: 0
    }
  }, s.sub.map((t, k) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, t)))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      gap: 8,
      marginTop: 44
    }
  }, SCREENS.map((_, k) => /*#__PURE__*/React.createElement("span", {
    key: k,
    style: {
      width: k === i ? 20 : 8,
      height: 8,
      borderRadius: 999,
      background: k === i ? "var(--mood-compare-ink)" : "var(--ink-300)",
      transition: "all 320ms var(--ease-soft)"
    }
  }))), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      go(i + 1);
    },
    style: {
      position: "relative",
      marginTop: 26,
      padding: "12px 30px",
      borderRadius: "var(--radius-lg)",
      border: last ? "1px solid var(--mood-compare-ink)" : "none",
      background: "transparent",
      color: "var(--mood-compare-ink)",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 15,
      cursor: "pointer",
      boxShadow: last ? "var(--shadow-sm)" : "none",
      display: "inline-flex",
      alignItems: "center",
      gap: 8
    }
  }, last ? "시작하기" : "다음", !last && /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 17,
    color: "var(--mood-compare-ink)",
    stroke: 2
  })));
}
window.IntroSequence = IntroSequence;

// IntroLoading — 안내 → 감정 선택 사이. 봉투 이미지를 미리 불러와 화면 전환 시
// 이미지가 늦게 뜨는 게 안 보이도록 한다. 최소 노출 시간 + 프리로드 완료 후 진행.
function IntroLoading({
  onDone
}) {
  const MOODS = ["anxious", "broken", "compare", "waiting", "forgive", "distant", "calling", "thanks"];
  const [dots, setDots] = React.useState(1);
  const [shown, setShown] = React.useState(false);
  const [bye, setBye] = React.useState(false);
  React.useEffect(() => {
    const r = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(r);
  }, []);
  React.useEffect(() => {
    const t = setInterval(() => setDots(d => d % 3 + 1), 380);
    return () => clearInterval(t);
  }, []);
  React.useEffect(() => {
    let done = false;
    const finish = () => {
      if (!done) {
        done = true;
        setBye(true);
        setTimeout(() => onDone && onDone(), 460);
      }
    };
    const urls = ["assets-web/leaf-tl.webp", "assets-web/leaf-br.webp", "assets-web/wood-bar.webp"];
    for (const m of MOODS) urls.push("assets-web/env-" + m + ".webp");
    let loaded = 0;
    const check = () => {
      loaded++;
      if (loaded >= urls.length) setTimeout(finish, 200);
    };
    for (const u of urls) {
      const img = new Image();
      img.onload = check;
      img.onerror = check;
      img.src = u;
    }
    const min = setTimeout(() => {}, 0);
    const cap = setTimeout(finish, 2600); // 안전장치
    return () => {
      clearTimeout(min);
      clearTimeout(cap);
    };
  }, []);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: "100vh",
      width: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: 40,
      background: "url('assets-web/leaf-tl-soft.png') top left / min(52vw,460px) auto no-repeat, url('assets-web/leaf-br-soft.png') bottom right / min(52vw,460px) auto no-repeat, #F2EBE6",
      opacity: shown && !bye ? 1 : 0,
      transition: "opacity 440ms var(--ease-soft)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 46,
      height: 46,
      margin: "0 auto 22px",
      borderRadius: "50%",
      border: "3px solid var(--line-soft)",
      borderTopColor: "var(--mood-compare-ink)",
      animation: "introspin 900ms linear infinite"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 600,
      fontSize: 19,
      color: "var(--ink-900)",
      margin: 0
    }
  }, "\uB9C8\uC74C \uCE74\uB4DC\uB97C \uC900\uBE44\uD558\uACE0 \uC788\uC5B4\uC694", ".".repeat(dots)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-muted)",
      marginTop: 8
    }
  }, "\uC7A0\uC2DC\uB9CC \uAE30\uB2E4\uB824 \uC8FC\uC138\uC694.")), /*#__PURE__*/React.createElement("style", null, `@keyframes introspin{to{transform:rotate(360deg)}}`));
}
window.IntroLoading = IntroLoading;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soul-pharmacy/IntroSequence.jsx", error: String((e && e.message) || e) }); }

// ui_kits/soul-pharmacy/LogoMark.jsx
try { (() => {
// LogoMark — 마음약국 로고 (처방전 종이 + 라벤더 올리브 + 마음약국 워드마크 락업).
// 사용자 업로드 이미지. 가로형 락업이라 width 기준으로 크기 지정.
function LogoMark({
  width = 200,
  size,
  style = {}
}) {
  const w = size ? size * 3.3 : width; // size(정사각 관성) 호환: 폭으로 환산
  return /*#__PURE__*/React.createElement("img", {
    src: "assets-web/logo.webp",
    alt: "\uB9C8\uC74C\uC57D\uAD6D",
    style: {
      display: "block",
      width: w,
      height: "auto",
      margin: "0 auto",
      ...style
    }
  });
}
window.LogoMark = LogoMark;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soul-pharmacy/LogoMark.jsx", error: String((e && e.message) || e) }); }

// ui_kits/soul-pharmacy/MainScreen.jsx
try { (() => {
// MainScreen — 메인 화면 (PC-first 4×2). 봉투 PNG 에셋 사용, 증상명은 HTML 텍스트로 앞면 위에.
// 클릭 시 전환 연출: 선택한 봉투가 화면 중앙으로 이동+확대(selected-envelope-focus)하고,
// 기존 리스트/제목은 아래로 내려가며 사라진(list-exit) 뒤 onNext로 문진 화면으로 넘어간다.
function MainScreen({
  selected,
  onSelect,
  onNext
}) {
  const ENVELOPES = [{
    key: "anxious",
    img: "assets-web/env-anxious.webp",
    label: "불안해요"
  }, {
    key: "broken",
    img: "assets-web/env-broken.webp",
    label: "마음이\n무너졌어요"
  }, {
    key: "compare",
    img: "assets-web/env-compare.webp",
    label: "비교돼요"
  }, {
    key: "waiting",
    img: "assets-web/env-waiting.webp",
    label: "기다리기\n힘들어요"
  }, {
    key: "forgive",
    img: "assets-web/env-forgive.webp",
    label: "용서가\n안 돼요"
  }, {
    key: "distant",
    img: "assets-web/env-distant.webp",
    label: "하나님이\n멀게 느껴져요"
  }, {
    key: "calling",
    img: "assets-web/env-calling.webp",
    label: "책임이\n버거워요"
  }, {
    key: "thanks",
    img: "assets-web/env-thanks.webp",
    label: "감사가\n사라졌어요"
  }];
  const ENV_W = 168; // 봉투 표시 폭 (원본 271×315 비율 유지)

  const [perRow, setPerRow] = React.useState(typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches ? 2 : 4);
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setPerRow(mq.matches ? 2 : 4);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // 전환 상태: null → 클릭한 봉투 { key, rect } → 중앙 이동 활성(active)
  const [fly, setFly] = React.useState(null);
  const [flyActive, setFlyActive] = React.useState(false);
  const [exiting, setExiting] = React.useState(false);
  const locked = React.useRef(false);
  const handlePick = (e, ev) => {
    if (locked.current) return;
    locked.current = true;
    const rect = ev.currentTarget.getBoundingClientRect();
    onSelect(e.key);
    setFly({
      e,
      rect
    });
    setExiting(true); // 리스트/제목 퇴장
    requestAnimationFrame(() => requestAnimationFrame(() => setFlyActive(true))); // 다음 프레임에 중앙 이동
    setTimeout(() => onNext(e.key), 1600); // 문진 화면으로 전환 (중앙 이동 완료 후)
  };
  const rows = [];
  for (let i = 0; i < ENVELOPES.length; i += perRow) rows.push(ENVELOPES.slice(i, i + perRow));
  const Envelope = ({
    e
  }) => {
    const isSel = selected === e.key;
    const hidden = fly && fly.e.key === e.key; // 나는 복제본이 대신 날아가므로 원본 숨김
    return /*#__PURE__*/React.createElement("button", {
      onClick: ev => handlePick(e, ev),
      style: {
        position: "relative",
        width: "100%",
        maxWidth: ENV_W,
        border: "none",
        background: "transparent",
        padding: 0,
        cursor: "pointer",
        zIndex: 1,
        transform: isSel ? "translateY(-10px)" : "translateY(0)",
        transition: "transform 380ms cubic-bezier(0.16,1,0.3,1)",
        opacity: hidden ? 0 : 1,
        filter: isSel ? "drop-shadow(0 16px 22px rgba(120,92,64,0.22))" : "drop-shadow(0 7px 12px rgba(120,92,64,0.16))"
      },
      onMouseEnter: ev => {
        if (!isSel && !locked.current) ev.currentTarget.style.transform = "translateY(-4px)";
      },
      onMouseLeave: ev => {
        if (!isSel) ev.currentTarget.style.transform = "translateY(0)";
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: e.img,
      alt: e.label.replace("\n", " "),
      draggable: "false",
      style: {
        width: "100%",
        height: "auto",
        display: "block",
        userSelect: "none"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        top: "52%",
        bottom: "6%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-title)",
        fontWeight: 600,
        fontSize: 19,
        lineHeight: 1.3,
        color: "var(--ink-900)",
        textAlign: "center",
        whiteSpace: "pre-line",
        letterSpacing: "-0.01em",
        pointerEvents: "none"
      }
    }, e.label));
  };

  // 날아가는 복제본의 중앙 이동 변환 계산
  let flyTransform = "none";
  if (fly && flyActive && typeof window !== "undefined") {
    const cx = window.innerWidth / 2,
      cy = window.innerHeight / 2;
    const rc = fly.rect;
    const dx = cx - (rc.left + rc.width / 2);
    const dy = cy - (rc.top + rc.height / 2);
    flyTransform = `translate(${dx}px, ${dy}px) scale(1.5)`;
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: "100vh",
      ...(perRow === 4 ? {
        maxHeight: "100vh",
        overflow: "hidden"
      } : {}),
      boxSizing: "border-box",
      background: "url('assets-web/leaf-tl-soft.png') top left / min(52vw,460px) auto no-repeat, url('assets-web/leaf-br-soft.png') bottom right / min(52vw,460px) auto no-repeat, #F2EBE6",
      padding: "clamp(20px,3vh,44px) 32px clamp(24px,3.4vh,56px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: perRow === 4 ? "center" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transform: exiting ? "translateY(64px)" : "translateY(0)",
      opacity: exiting ? 0 : 1,
      transition: "transform 900ms cubic-bezier(0.37,0,0.28,1), opacity 850ms ease-out"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "clamp(16px,2.8vh,40px)",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      letterSpacing: "0.24em",
      color: "var(--mood-broken-ink)",
      marginBottom: "clamp(6px,1.3vh,16px)"
    }
  }, "\uB9D0\uC500 \uCC98\uBC29\uC804"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 600,
      fontSize: 34,
      lineHeight: 1.3,
      color: "var(--ink-900)",
      margin: "0 0 clamp(7px,1.1vh,14px)",
      letterSpacing: "-0.01em"
    }
  }, "\uC624\uB298 \uB9C8\uC74C\uC740 \uC5B4\uB5A4\uAC00\uC694?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: 1.65,
      color: "var(--text-muted)",
      margin: 0
    }
  }, "\uB0B4 \uB9C8\uC74C \uCE74\uB4DC\uB97C \uD558\uB098 \uACE0\uB974\uBA74, \uADF8 \uB9C8\uC74C\uC5D0 \uB9DE\uB294 \uB9D0\uC500 \uC57D\uBD09\uD22C\uAC00 \uBC1C\uAE09\uB429\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "clamp(14px,2.4vh,30px)",
      width: "100%",
      position: "relative",
      zIndex: 1,
      maxWidth: perRow === 2 ? ENV_W * 2 + 14 + 100 : ENV_W * 4 + 3 * 16 + 100
    }
  }, rows.map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "relative",
      paddingTop: 22
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "assets-web/wood-bar.webp",
    alt: "",
    draggable: "false",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "auto",
      zIndex: 0,
      userSelect: "none",
      filter: "drop-shadow(0 10px 12px rgba(120,92,64,0.22))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: perRow === 2 ? 14 : 16,
      position: "relative",
      zIndex: 1
    }
  }, row.map(e => /*#__PURE__*/React.createElement(Envelope, {
    key: e.key,
    e: e
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: "clamp(18px,3vh,48px)",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 600,
      fontSize: 19,
      color: "var(--ink-900)",
      marginBottom: 8
    }
  }, "\uB9C8\uC74C \uCE74\uB4DC\uB97C \uD558\uB098 \uACE8\uB77C\uC8FC\uC138\uC694"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13.5,
      color: "var(--text-muted)"
    }
  }, "\uC120\uD0DD\uD558\uBA74 \uCE74\uB4DC\uAC00 \uC0B4\uC9DD \uC62C\uB77C\uC624\uACE0, \uB9D0\uC500 \uCC98\uBC29\uC804\uC774 \uBC1C\uAE09\uB3FC\uC694."))), fly && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      zIndex: 999,
      pointerEvents: "none",
      left: fly.rect.left,
      top: fly.rect.top,
      width: fly.rect.width,
      transform: flyTransform,
      transformOrigin: "center center",
      transition: "transform 1050ms cubic-bezier(0.33,0,0.2,1)",
      filter: "drop-shadow(0 24px 34px rgba(120,92,64,0.28))"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: fly.e.img,
    alt: "",
    draggable: "false",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: "52%",
      bottom: "6%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-title)",
      fontWeight: 600,
      fontSize: 19,
      lineHeight: 1.3,
      color: "var(--ink-900)",
      textAlign: "center",
      whiteSpace: "pre-line",
      letterSpacing: "-0.01em"
    }
  }, fly.e.label)));
}
window.MainScreen = MainScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soul-pharmacy/MainScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/soul-pharmacy/MainScreen.standalone.jsx
try { (() => {
// MainScreen — 메인 화면 (PC-first 4×2). 봉투 PNG 에셋 사용, 증상명은 HTML 텍스트로 앞면 위에.
// 클릭 시 전환 연출: 선택한 봉투가 화면 중앙으로 이동+확대(selected-envelope-focus)하고,
// 기존 리스트/제목은 아래로 내려가며 사라진(list-exit) 뒤 onNext로 문진 화면으로 넘어간다.
function MainScreen({
  selected,
  onSelect,
  onNext
}) {
  const ENVELOPES = [{
    key: "anxious",
    img: window.__resources.env_anxious,
    label: "불안해요"
  }, {
    key: "broken",
    img: window.__resources.env_broken,
    label: "마음이\n무너졌어요"
  }, {
    key: "compare",
    img: window.__resources.env_compare,
    label: "비교돼요"
  }, {
    key: "waiting",
    img: window.__resources.env_waiting,
    label: "기다리기\n힘들어요"
  }, {
    key: "forgive",
    img: window.__resources.env_forgive,
    label: "용서가\n안 돼요"
  }, {
    key: "distant",
    img: window.__resources.env_distant,
    label: "하나님이\n멀게 느껴져요"
  }, {
    key: "calling",
    img: window.__resources.env_calling,
    label: "책임이\n버거워요"
  }, {
    key: "thanks",
    img: window.__resources.env_thanks,
    label: "감사가\n사라졌어요"
  }];
  const ENV_W = 168; // 봉투 표시 폭 (원본 271×315 비율 유지)

  const [perRow, setPerRow] = React.useState(typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches ? 2 : 4);
  React.useEffect(() => {
    const mq = window.matchMedia("(max-width: 640px)");
    const update = () => setPerRow(mq.matches ? 2 : 4);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // 전환 상태: null → 클릭한 봉투 { key, rect } → 중앙 이동 활성(active)
  const [fly, setFly] = React.useState(null);
  const [flyActive, setFlyActive] = React.useState(false);
  const [exiting, setExiting] = React.useState(false);
  const locked = React.useRef(false);
  const handlePick = (e, ev) => {
    if (locked.current) return;
    locked.current = true;
    const rect = ev.currentTarget.getBoundingClientRect();
    onSelect(e.key);
    setFly({
      e,
      rect
    });
    setExiting(true); // 리스트/제목 퇴장
    requestAnimationFrame(() => requestAnimationFrame(() => setFlyActive(true))); // 다음 프레임에 중앙 이동
    setTimeout(() => onNext(e.key), 1600); // 문진 화면으로 전환 (중앙 이동 완료 후)
  };
  const rows = [];
  for (let i = 0; i < ENVELOPES.length; i += perRow) rows.push(ENVELOPES.slice(i, i + perRow));
  const Envelope = ({
    e
  }) => {
    const isSel = selected === e.key;
    const hidden = fly && fly.e.key === e.key; // 나는 복제본이 대신 날아가므로 원본 숨김
    return /*#__PURE__*/React.createElement("button", {
      onClick: ev => handlePick(e, ev),
      style: {
        position: "relative",
        width: "100%",
        maxWidth: ENV_W,
        border: "none",
        background: "transparent",
        padding: 0,
        cursor: "pointer",
        zIndex: 1,
        transform: isSel ? "translateY(-10px)" : "translateY(0)",
        transition: "transform 380ms cubic-bezier(0.16,1,0.3,1)",
        opacity: hidden ? 0 : 1,
        filter: isSel ? "drop-shadow(0 16px 22px rgba(120,92,64,0.22))" : "drop-shadow(0 7px 12px rgba(120,92,64,0.16))"
      },
      onMouseEnter: ev => {
        if (!isSel && !locked.current) ev.currentTarget.style.transform = "translateY(-4px)";
      },
      onMouseLeave: ev => {
        if (!isSel) ev.currentTarget.style.transform = "translateY(0)";
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: e.img,
      alt: e.label.replace("\n", " "),
      draggable: "false",
      style: {
        width: "100%",
        height: "auto",
        display: "block",
        userSelect: "none"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        top: "52%",
        bottom: "6%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--font-title)",
        fontWeight: 600,
        fontSize: 19,
        lineHeight: 1.3,
        color: "var(--ink-900)",
        textAlign: "center",
        whiteSpace: "pre-line",
        letterSpacing: "-0.01em",
        pointerEvents: "none"
      }
    }, e.label));
  };

  // 날아가는 복제본의 중앙 이동 변환 계산
  let flyTransform = "none";
  if (fly && flyActive && typeof window !== "undefined") {
    const cx = window.innerWidth / 2,
      cy = window.innerHeight / 2;
    const rc = fly.rect;
    const dx = cx - (rc.left + rc.width / 2);
    const dy = cy - (rc.top + rc.height / 2);
    flyTransform = `translate(${dx}px, ${dy}px) scale(1.5)`;
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      minHeight: "100vh",
      ...(perRow === 4 ? {
        maxHeight: "100vh",
        overflow: "hidden"
      } : {}),
      boxSizing: "border-box",
      background: "url('assets-web/leaf-tl-soft.png') top left / min(52vw,460px) auto no-repeat, url('assets-web/leaf-br-soft.png') bottom right / min(52vw,460px) auto no-repeat, #F2EBE6",
      padding: "clamp(20px,3vh,44px) 32px clamp(24px,3.4vh,56px)",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: perRow === 4 ? "center" : "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      transform: exiting ? "translateY(64px)" : "translateY(0)",
      opacity: exiting ? 0 : 1,
      transition: "transform 900ms cubic-bezier(0.37,0,0.28,1), opacity 850ms ease-out"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: "clamp(16px,2.8vh,40px)",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      letterSpacing: "0.24em",
      color: "var(--mood-broken-ink)",
      marginBottom: "clamp(6px,1.3vh,16px)"
    }
  }, "\uB9D0\uC500 \uCC98\uBC29\uC804"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 600,
      fontSize: 34,
      lineHeight: 1.3,
      color: "var(--ink-900)",
      margin: "0 0 clamp(7px,1.1vh,14px)",
      letterSpacing: "-0.01em"
    }
  }, "\uC624\uB298 \uB9C8\uC74C\uC740 \uC5B4\uB5A4\uAC00\uC694?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 15,
      lineHeight: 1.65,
      color: "var(--text-muted)",
      margin: 0
    }
  }, "\uB0B4 \uB9C8\uC74C \uCE74\uB4DC\uB97C \uD558\uB098 \uACE0\uB974\uBA74, \uADF8 \uB9C8\uC74C\uC5D0 \uB9DE\uB294 \uB9D0\uC500 \uC57D\uBD09\uD22C\uAC00 \uBC1C\uAE09\uB429\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "clamp(14px,2.4vh,30px)",
      width: "100%",
      position: "relative",
      zIndex: 1,
      maxWidth: perRow === 2 ? ENV_W * 2 + 14 + 100 : ENV_W * 4 + 3 * 16 + 100
    }
  }, rows.map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "relative",
      paddingTop: 22
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.__resources.woodBar,
    alt: "",
    draggable: "false",
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "auto",
      zIndex: 0,
      userSelect: "none",
      filter: "drop-shadow(0 10px 12px rgba(120,92,64,0.22))"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: perRow === 2 ? 14 : 16,
      position: "relative",
      zIndex: 1
    }
  }, row.map(e => /*#__PURE__*/React.createElement(Envelope, {
    key: e.key,
    e: e
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginTop: "clamp(18px,3vh,48px)",
      position: "relative",
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 600,
      fontSize: 19,
      color: "var(--ink-900)",
      marginBottom: 8
    }
  }, "\uB9C8\uC74C \uCE74\uB4DC\uB97C \uD558\uB098 \uACE8\uB77C\uC8FC\uC138\uC694"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13.5,
      color: "var(--text-muted)"
    }
  }, "\uC120\uD0DD\uD558\uBA74 \uCE74\uB4DC\uAC00 \uC0B4\uC9DD \uC62C\uB77C\uC624\uACE0, \uB9D0\uC500 \uCC98\uBC29\uC804\uC774 \uBC1C\uAE09\uB3FC\uC694."))), fly && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      zIndex: 999,
      pointerEvents: "none",
      left: fly.rect.left,
      top: fly.rect.top,
      width: fly.rect.width,
      transform: flyTransform,
      transformOrigin: "center center",
      transition: "transform 1050ms cubic-bezier(0.33,0,0.2,1)",
      filter: "drop-shadow(0 24px 34px rgba(120,92,64,0.28))"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: fly.e.img,
    alt: "",
    draggable: "false",
    style: {
      width: "100%",
      height: "auto",
      display: "block"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      top: "52%",
      bottom: "6%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "var(--font-title)",
      fontWeight: 600,
      fontSize: 19,
      lineHeight: 1.3,
      color: "var(--ink-900)",
      textAlign: "center",
      whiteSpace: "pre-line",
      letterSpacing: "-0.01em"
    }
  }, fly.e.label)));
}
window.MainScreenSA = MainScreen;
window.MainScreen = MainScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soul-pharmacy/MainScreen.standalone.jsx", error: String((e && e.message) || e) }); }

// ui_kits/soul-pharmacy/MainWide.jsx
try { (() => {
// MainWide — 16:9 widescreen main screen matching the reference exactly:
// title block, 2 wood shelves × 4 envelopes (scaled up), footer CTA with leaf accents.
function MainWide({
  selected,
  onSelect
}) {
  const {
    MoodEnvelope,
    WoodShelf,
    MOODS,
    Icon
  } = window.DesignSystem_d4e5a3;
  const keys = Object.keys(MOODS);
  const rows = [keys.slice(0, 4), keys.slice(4, 8)];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1280,
      height: 720,
      background: "var(--bg-page)",
      boxSizing: "border-box",
      padding: "56px 60px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      letterSpacing: "0.2em",
      color: "var(--text-muted)",
      marginBottom: 8
    }
  }, "\xB7 \uB9D0\uC500 \uCC98\uBC29\uC804 \xB7"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 500,
      fontSize: 32,
      whiteSpace: "nowrap",
      color: "var(--ink-900)",
      margin: "0 0 10px"
    }
  }, "\uC624\uB298 \uB9C8\uC74C\uC774 \uC5B4\uB514\uAC00 \uC544\uD508\uAC00\uC694?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 14,
      color: "var(--text-muted)",
      margin: 0
    }
  }, "\uB0B4 \uB9C8\uC74C \uCE74\uB4DC\uB97C \uD558\uB098 \uACE0\uB974\uBA74, \uADF8 \uB9C8\uC74C\uC5D0 \uB9DE\uB294 \uB9D0\uC500 \uC57D\uBD09\uD22C\uAC00 \uBC1C\uAE09\uB429\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 40,
      width: 908
    }
  }, rows.map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement(WoodShelf, {
    width: 908
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 36
    }
  }, row.map(k => /*#__PURE__*/React.createElement(MoodEnvelope, {
    key: k,
    mood: k,
    width: 200,
    selected: selected === k,
    onClick: () => onSelect(k)
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sprout",
    size: 16,
    color: "var(--mood-calling-ink)",
    stroke: 1.4
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 600,
      fontSize: 20,
      color: "var(--ink-900)"
    }
  }, "\uB9C8\uC74C \uCE74\uB4DC\uB97C \uD558\uB098 \uACE8\uB77C\uC8FC\uC138\uC694"), /*#__PURE__*/React.createElement(Icon, {
    name: "sprout",
    size: 16,
    color: "var(--mood-calling-ink)",
    stroke: 1.4,
    style: {
      transform: "scaleX(-1)"
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--text-muted)",
      margin: "8px 0 0"
    }
  }, "\uC120\uD0DD\uD558\uBA74 \uCE74\uB4DC\uAC00 \uC0B4\uC9DD \uC62C\uB77C\uC624\uACE0, \uB9D0\uC500 \uCC98\uBC29\uC804\uC774 \uBC1C\uAE09\uB3FC\uC694."));
}
window.MainWide = MainWide;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soul-pharmacy/MainWide.jsx", error: String((e && e.message) || e) }); }

// ui_kits/soul-pharmacy/MoodWallScreen.jsx
try { (() => {
// MoodWallScreen — 증상 선택: quiet, serious 마음 접수대. Two wood shelves of
// 4 envelopes each, generous spacing, no cute/rounded motifs.
function MoodWallScreen({
  selected,
  onSelect,
  onIssue,
  onBack
}) {
  const {
    MoodEnvelope,
    WoodShelf,
    MOODS,
    Button,
    StepIndicator,
    Icon
  } = window.DesignSystem_d4e5a3;
  const keys = Object.keys(MOODS);
  const rows = [keys.slice(0, 4), keys.slice(4, 8)];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "26px 18px 30px",
      minHeight: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      background: "var(--bg-page)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "var(--text-muted)",
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 20,
    color: "var(--text-muted)",
    stroke: 1.4
  })), /*#__PURE__*/React.createElement(StepIndicator, {
    total: 4,
    current: 2
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      letterSpacing: "0.16em",
      color: "var(--text-muted)",
      marginBottom: 8
    }
  }, "\xB7 \uB9D0\uC500 \uCC98\uBC29\uC804 \xB7"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 600,
      fontSize: 22,
      lineHeight: 1.4,
      color: "var(--ink-900)",
      margin: "0 0 8px"
    }
  }, "\uC624\uB298 \uB9C8\uC74C\uC774", /*#__PURE__*/React.createElement("br", null), "\uC5B4\uB514\uAC00 \uC544\uD508\uAC00\uC694?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--text-muted)",
      margin: 0
    }
  }, "\uB0B4 \uB9C8\uC74C \uCE74\uB4DC\uB97C \uD558\uB098 \uACE0\uB974\uBA74, \uADF8 \uB9C8\uC74C\uC5D0 \uB9DE\uB294", /*#__PURE__*/React.createElement("br", null), "\uB9D0\uC500 \uC57D\uBD09\uD22C\uAC00 \uBC1C\uAE09\uB429\uB2C8\uB2E4.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, rows.map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement(WoodShelf, null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      marginTop: -2,
      padding: "0 2px"
    }
  }, row.map(k => /*#__PURE__*/React.createElement(MoodEnvelope, {
    key: k,
    mood: k,
    width: 78,
    selected: selected === k,
    onClick: () => onSelect(k)
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      margin: "24px 0 18px",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      color: "var(--ink-700)"
    }
  }, "\uB9C8\uC74C \uCE74\uB4DC\uB97C \uD558\uB098 \uACE8\uB77C\uC8FC\uC138\uC694"), /*#__PURE__*/React.createElement(Button, {
    tone: "coral",
    size: "lg",
    block: true,
    disabled: !selected,
    onClick: onIssue
  }, selected ? "처방전 발급하기" : "마음 카드를 하나 골라주세요"));
}
window.MoodWallScreen = MoodWallScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soul-pharmacy/MoodWallScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/soul-pharmacy/ResultScreen.jsx
try { (() => {
// ResultScreen — 결과 화면.
// 흐름: loading(차분한 준비 화면) → reveal(넓은 말씀 처방전 한 장 + 하단 액션).
// 시안: 좌우 2단 카드가 아니라, 미색 종이 처방전 한 장이 화면 중앙에 넓게 놓인다.
// 한 장의 인쇄물처럼 — 청색 인쇄선/텍스트, 흰 박스 분리 없이 선과 간격으로 위계 표현.
// 섹션 순서: 접수 정보 → 마음 소견 → 오늘 곁에 있어줄 말씀 → 복용법 → 주의사항 → 작은 실천.
function ResultScreen({
  mood,
  rx: rxProp,
  onAgain,
  onDecorate
}) {
  const {
    Button,
    Icon,
    MOODS
  } = window.DesignSystem_d4e5a3;
  const rx = rxProp || window.RX_DATA[mood] || window.RX_DATA.anxious;
  const m = MOODS[mood] || MOODS.anxious;
  const RX = "var(--rx-ink)";
  const [pc, setPc] = React.useState(false);
  React.useEffect(() => {
    const pick = () => setPc(window.innerWidth >= 860);
    pick();
    window.addEventListener("resize", pick);
    return () => window.removeEventListener("resize", pick);
  }, []);

  // loading → envelope(봉투에서 종이가 올라오는 장면) → reveal(종이만 남아 읽는 장면)
  const [phase, setPhase] = React.useState("loading");
  const [msg, setMsg] = React.useState(0);
  const [skipAnim, setSkipAnim] = React.useState(false); // 클릭하면 전체 즉시 표시
  React.useEffect(() => {
    setSkipAnim(false);
  }, [mood]);
  React.useEffect(() => {
    setPhase("loading");
    setMsg(0);
    const t1 = setTimeout(() => setMsg(1), 2200);
    const t2 = setTimeout(() => setPhase("envelope"), 4400);
    const t2b = setTimeout(() => setPhase("envExit"), 9600);
    const t3 = setTimeout(() => setPhase("reveal"), 10600);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t2b);
      clearTimeout(t3);
    };
  }, [mood]);

  // 말씀 처방전이 등장하는 시점부터 3번 배경음악으로 크로스페이드
  React.useEffect(() => {
    if (window.__bgm && (phase === "envelope" || phase === "reveal")) window.__bgm.play(3);
  }, [phase]);
  const messages = ["말씀 처방전을 준비하고 있습니다", "당신에게 필요한 말씀을 정리하고 있습니다"];

  // ── 로딩 화면 ──
  if (phase === "loading") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        minHeight: "100vh",
        width: "100%",
        boxSizing: "border-box",
        background: "radial-gradient(120% 70% at 50% 35%, #FBF7F0 0%, var(--bg-page) 62%, #EDE7DE 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 26,
        padding: 32
      }
    }, /*#__PURE__*/React.createElement("style", null, `@keyframes rxdot2{0%,80%,100%{opacity:.25;transform:translateY(0)}40%{opacity:1;transform:translateY(-4px)}}@keyframes rxpulse{0%,100%{transform:scale(1);opacity:.9}50%{transform:scale(1.06);opacity:1}}@keyframes rxstep{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}`), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 68,
        height: 68,
        borderRadius: "50%",
        background: m.fill,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 10px 26px rgba(120,92,64,0.18)",
        animation: "rxpulse 2.4s ease-in-out infinite"
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: m.icon,
      size: 30,
      color: m.ink,
      stroke: 1.5
    })), /*#__PURE__*/React.createElement("div", {
      key: msg,
      style: {
        fontFamily: "var(--font-title)",
        fontWeight: 600,
        fontSize: pc ? 22 : 18,
        color: "var(--ink-900)",
        textAlign: "center",
        animation: "rxstep 520ms ease-out",
        letterSpacing: "-0.01em"
      }
    }, messages[msg]), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 7
      }
    }, [0, 1, 2].map(i => /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        width: 8,
        height: 8,
        borderRadius: "50%",
        background: m.ink,
        animation: `rxdot2 1.2s ${i * 0.16}s infinite ease-in-out`
      }
    }))));
  }

  // ── 봉투 장면 (시안 1컷: 봉투에서 처방전 종이가 올라오는 순간) ──
  if (phase === "envelope" || phase === "envExit") {
    return /*#__PURE__*/React.createElement("div", {
      onClick: () => setPhase("reveal"),
      style: {
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        cursor: "pointer",
        background: "#F3E7D6",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        opacity: phase === "envExit" ? 0 : 1,
        transition: "opacity 1000ms ease",
        animation: "rxfade 900ms ease-out"
      }
    }, /*#__PURE__*/React.createElement("style", null, `@keyframes rxfade{from{opacity:0}to{opacity:1}}@keyframes rximg{from{opacity:0}to{opacity:1}}@keyframes rxup{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}`), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets-web/envelope-scene.png",
      alt: "",
      style: {
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        display: "block",
        opacity: 0,
        animation: "rximg 1600ms ease-out both"
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        left: "50%",
        top: "9%",
        transform: "translateX(-50%)",
        width: "86%",
        maxWidth: 720,
        textAlign: "center",
        pointerEvents: "none"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 600,
        fontSize: "clamp(14px,1.35vw,18px)",
        color: "#9B7B5E",
        letterSpacing: "0.2em",
        opacity: 0,
        animation: "rxup 1400ms 1300ms cubic-bezier(0.22,1,0.32,1) both"
      }
    }, "\uB9D0\uC500 \uCC98\uBC29\uC804"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-title)",
        fontWeight: 600,
        fontSize: "clamp(26px,3.1vw,42px)",
        color: "#5B4A3C",
        letterSpacing: "0.02em",
        marginTop: "0.5em",
        opacity: 0,
        animation: "rxup 1600ms 2100ms cubic-bezier(0.22,1,0.32,1) both"
      }
    }, "\uB2F9\uC2E0\uC744 \uC704\uD55C \uCC98\uBC29\uC804\uC774 \uC900\uBE44\uB418\uC5C8\uC5B4\uC694"), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 400,
        fontSize: "clamp(14px,1.5vw,20px)",
        lineHeight: 1.7,
        color: "#8C7565",
        marginTop: "0.55em",
        opacity: 0,
        animation: "rxup 1600ms 3100ms cubic-bezier(0.22,1,0.32,1) both"
      }
    }, "\uC9C0\uAE08 \uD558\uB098\uB2D8\uAED8\uC11C \uB2F9\uC2E0\uC758 \uB9C8\uC74C\uC5D0 \uB9DE\uB294 \uB9D0\uC500\uC744 \uAEBC\uB0B4\uACE0 \uC788\uC5B4\uC694."), /*#__PURE__*/React.createElement("div", {
      style: {
        marginTop: "1.7em",
        opacity: 0,
        animation: "rxup 1600ms 4100ms cubic-bezier(0.22,1,0.32,1) both"
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.7em"
      }
    }, /*#__PURE__*/React.createElement("img", {
      src: "assets-web/leaf-purple.png",
      alt: "",
      style: {
        width: "clamp(26px,2.4vw,36px)",
        height: "auto",
        transform: "scaleX(-1)"
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "'Noto Serif KR', serif",
        fontWeight: 500,
        fontSize: "clamp(16px,1.55vw,22px)",
        letterSpacing: "-0.02em",
        color: "#5B4A3C"
      }
    }, "\uB0B4\uAC00 \uB108\uC640 \uD568\uAED8 \uD568\uC774\uB77C"), /*#__PURE__*/React.createElement("img", {
      src: "assets-web/leaf-purple.png",
      alt: "",
      style: {
        width: "clamp(26px,2.4vw,36px)",
        height: "auto"
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: "var(--font-body)",
        fontWeight: 400,
        fontSize: "clamp(13px,1.2vw,17px)",
        color: "#8C7565",
        marginTop: "0.5em"
      }
    }, "\uC774\uC0AC\uC57C 41:10")))));
  }

  // ── 처방전 조각들 ──
  const sheetW = pc ? 660 : 380;
  const padX = pc ? 52 : 24;

  // 접수 정보 셀 (라벨 + 값)
  const InfoCell = ({
    label,
    children,
    accent
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 5,
      padding: "2px 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 11,
      letterSpacing: "0.14em",
      color: RX,
      opacity: 0.85
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: pc ? 16 : 15,
      fontWeight: accent ? 700 : 500,
      color: accent ? RX : "var(--ink-900)",
      lineHeight: 1.4
    }
  }, children));

  // 본문 섹션 (아이콘 + 청색 라벨 + 내용). 흰 박스 없이 얇은 선으로 구분.
  const Section = ({
    icon,
    label,
    note,
    children,
    tight
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      padding: tight ? "16px 0" : "18px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 17,
    color: RX,
    stroke: 1.7
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: "0.04em",
      color: RX
    }
  }, label), note && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      fontFamily: "var(--font-body)",
      fontSize: 11.5,
      color: "var(--text-muted)",
      letterSpacing: "0.06em"
    }
  }, note)), children);
  const hr = /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(120,104,78,0.18)"
    }
  });
  const BORD = "rgba(120,104,78,0.18)"; // 웜 종이 해어라인
  const LBL = "transparent";
  const TL = ({
    children
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: pc ? 13 : 12,
      color: "#5a7099",
      letterSpacing: "0.04em",
      paddingRight: 8,
      whiteSpace: "nowrap"
    }
  }, children);
  const TV = ({
    children,
    accent
  }) => /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: pc ? 15 : 13.5,
      fontWeight: accent ? 700 : 400,
      color: accent ? RX : "var(--ink-900)"
    }
  }, children);

  // 처방전 각 구획이 위에서부터 순차적으로 차분히 나타나는 연출 (문진지와 동일 감성)
  let _rt = 260,
    _gap = 780;
  const Reveal = ({
    children
  }) => {
    const delay = _rt;
    _rt += _gap;
    _gap += 420; // 섹션마다 간격을 키워 뒤로 갈수록 더 천천히 등장
    return /*#__PURE__*/React.createElement("div", {
      style: {
        animation: skipAnim ? "none" : "rxrise 1150ms cubic-bezier(0.22,1,0.32,1) both",
        animationDelay: skipAnim ? undefined : `${delay}ms`
      }
    }, children);
  };

  // 타이핑 연출 — 본문 문장이 한 글자씩 순차적으로 나타난다. 앞 문장이 끝난 뒤 다음 문장 시작.
  const CPS = 28;
  let _tt = 0;
  const typeStart = () => 0;
  // 타이핑 제거 — 텍스트는 섹션(Reveal)과 함께 통째로 페이드인.
  const Typewriter = ({
    text = "",
    style
  }) => /*#__PURE__*/React.createElement("span", {
    style: style
  }, text);
  const sheet = /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: sheetW,
      maxWidth: "100%",
      background: "linear-gradient(174deg,#FDFBF5 0%,#FAF6EC 100%)",
      border: "1px solid rgba(120,104,78,0.16)",
      borderRadius: 8,
      boxShadow: "0 1px 2px rgba(90,74,52,0.06), 0 18px 44px rgba(90,74,52,0.14)",
      boxSizing: "border-box",
      animation: "rxstep 950ms ease-out"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 10,
      border: "1px solid rgba(120,104,78,0.14)",
      borderRadius: 4,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: `${pc ? 42 : 28}px ${padX}px ${pc ? 34 : 26}px`
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      marginBottom: pc ? 14 : 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: pc ? 13 : 12,
      color: "var(--text-muted)",
      letterSpacing: "0.14em",
      marginBottom: pc ? 8 : 6
    }
  }, "\uC624\uB298\uC758 \uB9D0\uC500 \uCC98\uBC29\uC804"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 500,
      fontSize: pc ? 27 : 22,
      color: "#3f5a86",
      letterSpacing: "0.12em",
      paddingLeft: "0.12em"
    }
  }, "\uB9C8\uC74C\uC57D\uAD6D \uCC98\uBC29\uC804"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${BORD}`,
      width: "100%",
      marginTop: pc ? 16 : 12
    }
  }))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      margin: `${pc ? 4 : 2}px 0 0`
    }
  }, [["처방일", "2026.08.01", "증상", rx.symptom], ["마음 강도", rx.intensity, "처방 단어", rx.word]].map((row, ri) => /*#__PURE__*/React.createElement("div", {
    key: ri,
    style: {
      display: "grid",
      gridTemplateColumns: pc ? "auto 1fr auto 1fr" : "auto 1fr",
      columnGap: pc ? 14 : 12,
      rowGap: pc ? 0 : 7,
      alignItems: "baseline",
      padding: `${pc ? 11 : 9}px 2px`,
      borderTop: ri ? `1px solid ${BORD}` : "none"
    }
  }, /*#__PURE__*/React.createElement(TL, null, row[0]), /*#__PURE__*/React.createElement(TV, null, row[1]), /*#__PURE__*/React.createElement(TL, null, row[2]), /*#__PURE__*/React.createElement(TV, {
    accent: ri === 1
  }, row[3]))))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: pc ? 26 : 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: pc ? 12.5 : 11.5,
      color: "#5a7099",
      letterSpacing: "0.14em",
      textAlign: "center",
      marginBottom: pc ? 12 : 9
    }
  }, "\uCC98\uBC29 \uB9D0\uC500"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: `${pc ? 8 : 6}px ${pc ? 30 : 20}px ${pc ? 6 : 4}px`,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 2,
      fontFamily: "var(--font-verse)",
      fontSize: pc ? 24 : 19,
      color: "rgba(120,104,78,0.28)",
      lineHeight: 1
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-verse)",
      fontSize: pc ? 20 : 16,
      lineHeight: 1.75,
      color: "var(--ink-900)",
      margin: "0 auto",
      maxWidth: pc ? 640 : 440,
      textWrap: "balance"
    }
  }, rx.verse), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 0,
      bottom: pc ? 2 : 0,
      fontFamily: "var(--font-verse)",
      fontSize: pc ? 24 : 19,
      color: "rgba(120,104,78,0.28)",
      lineHeight: 1
    }
  }, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: pc ? 13 : 12,
      color: "#5a7099",
      letterSpacing: "0.04em",
      marginTop: pc ? 14 : 10
    }
  }, rx.reference)), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${BORD}`,
      marginTop: pc ? 16 : 12
    }
  }))), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: pc ? 22 : 18
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clipboard-list",
    size: pc ? 19 : 17,
    color: RX,
    stroke: 1.7
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: pc ? 15.5 : 14,
      color: RX
    }
  }, "\uB9C8\uC74C \uC18C\uACAC")), rx.state && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 600,
      fontSize: pc ? 15 : 14,
      lineHeight: 1.65,
      color: RX,
      margin: "0 0 12px"
    }
  }, rx.state), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: pc ? 15 : 14,
      lineHeight: pc ? 1.95 : 1.85,
      color: "var(--text-body)",
      margin: 0,
      textWrap: "pretty"
    }
  }, rx.opinion), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px dotted ${BORD}`,
      margin: `${pc ? 24 : 18}px 0 0`
    }
  }))), [["pill", "복용법", rx.dose], ["triangle-alert", "주의사항", rx.caution], ["sprout", "작은 실천", rx.practice]].map((sec, si) => sec[2] || si === 1 && rx.cognitive ? /*#__PURE__*/React.createElement(Reveal, {
    key: sec[1]
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: pc ? 20 : 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 9,
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: sec[0],
    size: pc ? 18 : 16,
    color: RX,
    stroke: 1.7
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: pc ? 15 : 13.5,
      color: RX
    }
  }, sec[1])), sec[2] && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: pc ? 14.5 : 13.5,
      lineHeight: 1.85,
      color: "var(--text-body)",
      margin: 0,
      textWrap: "pretty"
    }
  }, sec[2]), si === 1 && rx.cognitive && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: pc ? 13.5 : 13,
      lineHeight: 1.75,
      color: "var(--text-muted)",
      margin: "8px 0 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: RX,
      fontWeight: 600
    }
  }, "\uC774\uB7F0 \uC0DD\uAC01\uC5D0 \uC8FC\uC758 \xB7 "), rx.cognitive), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px dotted ${BORD}`,
      margin: `${pc ? 20 : 16}px 0 0`
    }
  }))) : null), /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      padding: `${pc ? 22 : 16}px 0 2px`
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: pc ? 14.5 : 13,
      color: "var(--text-muted)",
      margin: 0,
      lineHeight: 1.9
    }
  }, "\uC624\uB298 \uB2F9\uC2E0 \uACC1\uC5D0 \uBA38\uBB34\uB97C \uB2E8\uC5B4, ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      color: RX,
      fontSize: pc ? 17 : 15
    }
  }, rx.word), ".", /*#__PURE__*/React.createElement("br", null), "\uB2F9\uC2E0\uC758 \uD558\uB8E8\uAC00 \uB9D0\uC500\uC73C\uB85C \uD68C\uBCF5\uB418\uAE38 \uBC14\uB78D\uB2C8\uB2E4. ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--coral-300)"
    }
  }, "\u2661"))))));

  // 하단 액션 — 레퍼런스: 파란 그라데이션 공유 카드(히어로) + 저장/다시 소프트 카드 2단
  const shareCard = /*#__PURE__*/React.createElement("button", {
    onClick: onDecorate,
    style: {
      position: "relative",
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 14,
      padding: pc ? "18px 22px" : "15px 16px",
      borderRadius: 18,
      border: "none",
      cursor: "pointer",
      textAlign: "left",
      background: "linear-gradient(135deg, var(--rx-blue-300) 0%, var(--rx-blue-500) 100%)",
      boxShadow: "0 10px 24px rgba(62,99,166,0.26)",
      color: "#F7FAFF"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      flex: "0 0 auto",
      width: 44,
      height: 44,
      borderRadius: 13,
      background: "rgba(255,255,255,0.92)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "image",
    size: 21,
    color: "var(--rx-blue-500)",
    stroke: 1.6
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: -5,
      bottom: -5,
      width: 18,
      height: 18,
      borderRadius: "50%",
      background: "var(--coral-300)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 10,
    color: "#FFF9F4",
    stroke: 2.2
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      textAlign: "center",
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: pc ? 20 : 17
    }
  }, "\uC2A4\uD2F0\uCEE4 \uBD99\uC5EC \uACF5\uC720\uD558\uAE30"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 20,
    color: "#F7FAFF",
    stroke: 2
  }));
  const softCard = (icon, title, sub, onClick) => /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,
      padding: pc ? "16px 15px" : "14px 13px",
      borderRadius: 16,
      border: "1px solid var(--border-card)",
      background: "#fff",
      boxShadow: "0 4px 14px rgba(70,58,45,0.08)",
      cursor: "pointer",
      width: "100%"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    color: "var(--rx-ink)",
    stroke: 1.8
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 600,
      fontSize: pc ? 15.5 : 14.5,
      color: "var(--rx-ink)"
    }
  }, title));
  const paperBtn = (icon, label, onClick, w, accent) => /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      width: pc ? w : "auto",
      flex: pc ? "0 0 auto" : 1,
      height: 48,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      padding: "0 16px",
      borderRadius: 14,
      border: accent ? "1px solid rgba(126,116,190,0.55)" : "1px solid rgba(171,136,96,0.22)",
      cursor: "pointer",
      background: accent ? "linear-gradient(160deg,#b3aaea 0%,#8f86c9 60%,#847ac2 100%)" : "#F7EBDD",
      boxShadow: accent ? "0 3px 10px rgba(120,108,200,0.22), inset 0 2px 6px rgba(255,255,255,0.55), inset 0 -3px 8px rgba(90,78,150,0.28)" : "0 5px 14px rgba(97,68,42,0.09)",
      color: accent ? "#fff" : "#6A533F",
      animation: accent ? "rxGlow 2.6s ease-in-out infinite" : undefined
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 18,
    color: accent ? "#fff" : "#6A533F",
    stroke: 1.7
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      fontWeight: accent ? 600 : 500,
      fontSize: 16,
      color: accent ? "#fff" : "#6A533F",
      letterSpacing: "0.01em"
    }
  }, label));
  const actions = /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      maxWidth: "100%",
      boxSizing: "border-box",
      display: "flex",
      gap: 14,
      justifyContent: "center",
      animation: "rxstep 1050ms ease-out 260ms both"
    }
  }, paperBtn("rotate-cw", "다시하기", onAgain, 158), paperBtn("share-2", "스티커 붙여 공유하기", onDecorate, 235, true));
  return /*#__PURE__*/React.createElement("div", {
    onDoubleClick: () => setSkipAnim(true),
    style: {
      position: "relative",
      width: "100%",
      height: "100vh",
      overflow: "hidden",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "fixed",
      inset: 0,
      backgroundColor: "#F3E8DA",
      backgroundImage: "url(assets-web/decorate-bg.png)",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      zIndex: 0,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      width: "100%",
      height: "100vh",
      overflowY: "auto",
      overflowX: "hidden",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: pc ? "34px 28px 28px" : "22px 16px 24px"
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes rxstep{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes rxrise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}@keyframes rxGlow{0%,100%{box-shadow:0 3px 10px rgba(120,108,200,0.20),inset 0 2px 6px rgba(255,255,255,0.5),inset 0 -3px 8px rgba(90,78,150,0.26)}50%{box-shadow:0 4px 12px rgba(120,108,200,0.26),inset 0 2px 10px rgba(255,255,255,0.85),inset 0 -3px 8px rgba(90,78,150,0.3)}}`), sheet, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 28,
      flex: "0 0 auto"
    }
  }), actions, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "#8a6f4a",
      opacity: 0.55,
      textAlign: "center",
      margin: "14px 0 0",
      animation: "rxstep 1050ms ease-out 360ms both"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#E0917E",
      opacity: 1.4
    }
  }, "\u2665"), " \uC774 \uB9D0\uC500\uC740 \uB2F9\uC2E0\uC744 \uC704\uD574 \uC900\uBE44\uB418\uC5C8\uC5B4\uC694 ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "#E0917E",
      opacity: 1.4
    }
  }, "\u2665"))));
}
window.ResultScreen = ResultScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soul-pharmacy/ResultScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/soul-pharmacy/StickerScreen.jsx
try { (() => {
// StickerScreen — 처방전 공유 전 꾸미기: 이모지 스티커를 자유롭게 추가/이동, 스티커에
// 직접 달린 핸들로 크기·회전 조절 (롤링페이퍼 스타일 인라인 편집). 개수 제한 없음.
// PC: 좌우 2단(스티커 사이드 패널 + 넓은 처방전 한 장). 모바일: 상단 패널 + 하단 처방전 세로 구조.
// 스티커 세트는 window.STICKER_SET(stickers-data.js)에서 로드 — 감정별 다이컷 이미지.
const STICKER_SET = typeof window !== "undefined" && window.STICKER_SET || {
  categories: [],
  files: {}
};
const STICKER_CATEGORIES = STICKER_SET.categories;
const STICKER_FILES = STICKER_SET.files;

// 롤링페이퍼 기본 응원 메모 — 여러 사람이 남긴 흔적처럼 모양·색·각도가 제각각.
// 상단 정보표(y 20~34%)·처방 말씀(y 40~58%)을 가리지 않도록 여백/하단 위주 배치.
const NOTE_COLORS = {
  pink: ["#F6D7DA", "#9A5560"],
  cream: ["#F3E4BE", "#8A6E3A"],
  lav: ["#E0D6ED", "#6E5A94"],
  blue: ["#CFE0EF", "#3C5876"],
  olive: ["#DAE0B8", "#5E6A2E"],
  grid: ["#FBFAF6", "#55493D"],
  mint: ["#CFE7DA", "#3E7060"]
};
const DEFAULT_NOTES = [{
  t: "언제나 너를\n응원해! ♡",
  s: "heart",
  c: "pink",
  x: -3,
  y: 3,
  r: -8
}, {
  t: "하나님이\n함께 하세요 ♡",
  s: "note",
  c: "cream",
  x: 86,
  y: 1,
  r: 6
}, {
  t: "너는 사랑받기\n위해 태어난 사람",
  s: "note",
  c: "cream",
  x: -5,
  y: 35,
  r: -6
}, {
  t: "넌 할 수 있어!\n화이팅!!",
  s: "cloud",
  c: "lav",
  x: 85,
  y: 27,
  r: 5
}, {
  t: "조금 더 힘내!\n잘하고 있어 ♡",
  s: "speech",
  c: "pink",
  x: 84,
  y: 45,
  r: 4
}, {
  t: "기도할게요\n곁에서 응원해요",
  s: "cloud",
  c: "blue",
  x: -6,
  y: 60,
  r: -5
}, {
  t: "빛나는 하루\n되길!",
  s: "star",
  c: "pink",
  x: 22,
  y: 62,
  r: -6
}, {
  t: "오늘도 수고했어!\n토닥토닥 :)",
  s: "note",
  c: "cream",
  x: 40,
  y: 66,
  r: -3
}, {
  t: "하나님 안에서\n모든 순간이\n은혜가 되길 ♡",
  s: "grid",
  c: "grid",
  x: 78,
  y: 63,
  r: 6
}, {
  t: "포기하지 말고\n끝까지 가보자!",
  s: "note",
  c: "lav",
  x: -4,
  y: 78,
  r: -6
}, {
  t: "응원해!\n늘 함께할게 ☺",
  s: "circle",
  c: "olive",
  x: 4,
  y: 91,
  r: -4
}, {
  t: "너는 소중해! ☺",
  s: "heart",
  c: "blue",
  x: 82,
  y: 88,
  r: 7
}];
function StickerScreen({
  mood,
  rx: rxProp,
  initialStickers,
  onBack,
  onNext
}) {
  const {
    Button,
    Icon,
    MOODS
  } = window.DesignSystem_d4e5a3;
  const rx = rxProp || window.RX_DATA[mood] || window.RX_DATA.anxious;
  const moodLabel = (MOODS && MOODS[mood] && MOODS[mood].label || rx.symptom || "").replace(/\n/g, " ");
  const RX = "var(--rx-ink)";
  const oneLine = (rx.dose || rx.opinion || "").split(/(?<=[.!?])\s|\n/)[0];
  // 공유카드용: 성구 전문 대신 핵심 2~3줄만. 첫 문장(또는 ~58자)까지.
  const _v = (rx.verse || "").trim();
  const shortVerse = _v.length > 62 ? _v.slice(0, 58).trim() + "…" : _v;
  const rxDate = new Date().toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).replace(/\.$/, "").replace(/\s/g, "");
  // 기본 응원 스티커 — 카드가 비어 보이지 않도록 서로 다른 위치·각도로 미리 배치 (편집 가능)
  const SEED_STICKERS = [];
  const [stickers, setStickers] = React.useState(initialStickers && initialStickers.length ? initialStickers : SEED_STICKERS);
  const [activeId, setActiveId] = React.useState(null);
  const [mounted, setMounted] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [flow, setFlow] = React.useState("idle"); // idle | step1 | step2 | step3 | fadeout
  const [finalizing, setFinalizing] = React.useState(false);
  const [confirmType, setConfirmType] = React.useState(null); // null | save | share
  const [flowType, setFlowType] = React.useState("share"); // save | share
  const [showTip, setShowTip] = React.useState(false);
  const [hoverEmoji, setHoverEmoji] = React.useState(null);
  const [showPicker, setShowPicker] = React.useState(false);
  // 현재 감정 카테고리를 기본 노출 (없으면 일반)
  const _defaultCat = STICKER_FILES && STICKER_FILES[mood] ? mood : "normal";
  const [pickerCat, setPickerCat] = React.useState(_defaultCat);
  const [hintSeen, setHintSeen] = React.useState(false);
  const [invalidId, setInvalidId] = React.useState(null);
  const [extraH, setExtraH] = React.useState(0); // 사용자가 늘린 하단 꾸미기 공간 (단계)
  const EXTRA_STEP = 150,
    EXTRA_MAX = 5;
  const boardRef = React.useRef(null);
  const exportRef = React.useRef(null); // 캡처 대상: 처방전 카드 한 장만
  const dragRef = React.useRef(null);
  const [pc, setPc] = React.useState(false);
  const [wide, setWide] = React.useState(false);
  React.useEffect(() => {
    const pick = () => {
      setPc(window.innerWidth >= 860);
      setWide(window.innerWidth >= 1180);
    };
    pick();
    window.addEventListener("resize", pick);
    return () => window.removeEventListener("resize", pick);
  }, []);
  const sheetW = pc ? 720 : 380; // 처방전 폭 (가로 넓은 롤링페이퍼)
  const panelW = wide ? 400 : pc ? 300 : sheetW; // 스티커 사이드 패널 폭
  const padX = pc ? 44 : 24;
  const captureCard = async () => {
    if (!window.htmlToImage || !exportRef.current) return null;
    return await window.htmlToImage.toBlob(exportRef.current, {
      pixelRatio: 2.5,
      cacheBust: true,
      backgroundColor: "#FCFBF6",
      filter: node => !(node instanceof HTMLElement && node.dataset && node.dataset.exportIgnore === "true")
    });
  };
  const share = async () => {
    try {
      const blob = await captureCard();
      if (blob && navigator.canShare) {
        const file = new File([blob], "마음약국-처방전.png", {
          type: "image/png"
        });
        if (navigator.canShare({
          files: [file]
        })) {
          await navigator.share({
            files: [file],
            title: "마음약국 처방전"
          });
          return;
        }
      }
      const payload = btoa(unescape(encodeURIComponent(JSON.stringify({
        mood,
        stickers,
        rx
      }))));
      const url = window.location.origin + window.location.pathname + window.location.search + "#" + payload;
      if (navigator.clipboard && navigator.clipboard.writeText) await navigator.clipboard.writeText(url);
      window.location.hash = payload;
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (e) {
      /* 취소/실패해도 완료 연출은 finishCompletion이 담당 */
    }
  };
  const saveImage = async () => {
    try {
      const blob = await captureCard();
      if (blob) {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "마음약국-처방전.png";
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(a.href), 4000);
        return;
      }
      const payload = btoa(unescape(encodeURIComponent(JSON.stringify({
        mood,
        stickers,
        rx
      }))));
      window.location.hash = payload;
    } catch (e) {/* noop */}
  };
  const flowTimers = React.useRef([]);
  const openConfirm = type => {
    if (finalizing) return;
    setActiveId(null);
    setShowPicker(false);
    setFlowType(type);
    setConfirmType(type);
    setFinalizing(true);
  };
  const cancelConfirm = () => {
    setConfirmType(null);
    setFinalizing(false);
  };
  const runExport = () => {
    const type = confirmType;
    setConfirmType(null);
    flowTimers.current.forEach(clearTimeout);
    flowTimers.current = [setTimeout(() => {
      if (type === "save") saveImage();else share();
      setFlow("done");
    }, 550)];
  };
  const finishCompletion = () => {
    if (flow !== "done") return;
    setFlow("fadeout");
    setTimeout(() => onNext && onNext(), 700);
  };
  React.useEffect(() => {
    if (flow !== "done") return;
    const t = setTimeout(() => {
      setFlow("fadeout");
      setTimeout(() => onNext && onNext(), 700);
    }, 6500);
    return () => clearTimeout(t);
  }, [flow]);
  React.useEffect(() => () => flowTimers.current.forEach(clearTimeout), []);
  React.useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);
  const addSticker = src => {
    const id = Date.now() + Math.random();
    setStickers(list => {
      if (!list.length) {
        setShowTip(true);
        setTimeout(() => setShowTip(false), 4200);
      }
      const x = 30 + Math.random() * 40; // 기본 위치: 중앙 안전 영역
      const grown = list.length;
      const y = grown > 6 ? 55 + Math.random() * 30 : 30 + Math.random() * 45;
      const rotate = Math.round((Math.random() - 0.5) * 24);
      const scale = Math.max(0.55, 1 - list.length * 0.03);
      return [...list, {
        id,
        src,
        x,
        y,
        scale,
        rotate
      }];
    });
    setActiveId(id);
    setShowPicker(false);
  };
  const updateSticker = (id, patch) => {
    setStickers(list => list.map(s => s.id === id ? {
      ...s,
      ...patch
    } : s));
  };
  const removeSticker = id => {
    setStickers(list => list.filter(s => s.id !== id));
    if (activeId === id) setActiveId(null);
  };
  const startMove = (e, s) => {
    e.stopPropagation();
    setActiveId(s.id);
    const board = boardRef.current.getBoundingClientRect();
    const prot = [].slice.call(boardRef.current.querySelectorAll("[data-protect]")).map(el => {
      const r = el.getBoundingClientRect();
      return {
        l: r.left - 16,
        t: r.top - 13,
        rt: r.right + 16,
        b: r.bottom + 13
      };
    });
    dragRef.current = {
      mode: "move",
      id: s.id,
      boardRect: board,
      prot,
      lastValid: {
        x: s.x,
        y: s.y
      },
      invalid: false,
      mx: ((pc ? 40 : 34) * s.scale + 16) / 2 / board.width * 100,
      my: ((pc ? 40 : 34) * s.scale + 16) / 2 / board.height * 100
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endPointer);
  };
  const startResizeRotate = (e, s, mode) => {
    e.stopPropagation();
    e.preventDefault();
    const board = boardRef.current.getBoundingClientRect();
    const cx = board.left + s.x / 100 * board.width;
    const cy = board.top + s.y / 100 * board.height;
    dragRef.current = {
      mode,
      id: s.id,
      cx,
      cy,
      startScale: s.scale,
      startRotate: s.rotate,
      startDist: Math.hypot(e.clientX - cx, e.clientY - cy),
      startAngle: Math.atan2(e.clientY - cy, e.clientX - cx) * 180 / Math.PI
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endPointer);
  };
  const onPointerMove = e => {
    const d = dragRef.current;
    if (!d) return;
    if (d.mode === "move") {
      const x = (e.clientX - d.boardRect.left) / d.boardRect.width * 100;
      const y = (e.clientY - d.boardRect.top) / d.boardRect.height * 100;
      const nx = Math.max(d.mx, Math.min(100 - d.mx, x)),
        ny = Math.max(d.my, Math.min(100 - d.my, y));
      const over = d.prot.some(p => e.clientX > p.l && e.clientX < p.rt && e.clientY > p.t && e.clientY < p.b);
      d.invalid = over;
      if (!over) d.lastValid = {
        x: nx,
        y: ny
      };
      setInvalidId(over ? d.id : null);
      updateSticker(d.id, {
        x: nx,
        y: ny
      });
    } else if (d.mode === "resize") {
      const dist = Math.hypot(e.clientX - d.cx, e.clientY - d.cy);
      const scale = Math.max(0.4, Math.min(3.5, d.startScale * (dist / d.startDist)));
      updateSticker(d.id, {
        scale
      });
    } else if (d.mode === "rotate") {
      const angle = Math.atan2(e.clientY - d.cy, e.clientX - d.cx) * 180 / Math.PI;
      updateSticker(d.id, {
        rotate: Math.round(d.startRotate + (angle - d.startAngle))
      });
    }
  };
  const endPointer = () => {
    const d = dragRef.current;
    if (d && d.mode === "move" && d.invalid && d.lastValid) updateSticker(d.id, d.lastValid);
    setInvalidId(null);
    dragRef.current = null;
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", endPointer);
  };
  const INK = "#3f5a86"; // 인쇄 잉크 (톤다운 블루)
  const LINE = "rgba(120,104,78,0.22)"; // 종이 구분선 (웜 그레이)
  const PURPLE = "#6B5FCF"; // 메인 액션(저장·스티커 추가)
  // 표 셀 (라벨칸 + 값칸)
  const TLabel = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: pc ? 13 : 12,
      color: "#5a7099",
      letterSpacing: "0.04em",
      paddingRight: 8,
      whiteSpace: "nowrap"
    }
  }, children);
  const TVal = ({
    children,
    accent
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: pc ? 14.5 : 13,
      fontWeight: accent ? 700 : 400,
      color: accent ? INK : "var(--ink-900)"
    }
  }, children);
  // 섹션 제목 + 밑줄
  const SecTitle = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: pc ? 15 : 13.5,
      color: INK,
      marginBottom: 8
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1.5px solid ${INK}`
    }
  }));

  // 롤링페이퍼 응원 메모 한 장
  const NoteSticker = ({
    note
  }) => {
    const [bg, tint] = NOTE_COLORS[note.c];
    const scale = pc ? 1 : 0.82;
    const base = {
      position: "absolute",
      left: note.x + "%",
      top: note.y + "%",
      transform: `rotate(${note.r}deg) scale(${scale})`,
      transformOrigin: "center",
      fontFamily: "var(--font-label)",
      fontSize: 12.5,
      lineHeight: 1.45,
      color: tint,
      whiteSpace: "pre-line",
      textAlign: "center",
      padding: "12px 14px",
      background: bg,
      maxWidth: 132,
      boxShadow: "0 3px 8px rgba(60,60,70,0.12)",
      zIndex: 2
    };
    if (note.s === "circle") Object.assign(base, {
      borderRadius: "50%",
      width: 92,
      height: 92,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 8
    });else if (note.s === "cloud") Object.assign(base, {
      borderRadius: "46% 54% 55% 45% / 58% 56% 44% 42%"
    });else if (note.s === "heart") Object.assign(base, {
      clipPath: 'path("M60 108 C10 74 4 42 24 24 C40 10 56 18 60 30 C64 18 80 10 96 24 C116 42 110 74 60 108 Z")',
      width: 120,
      height: 112,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "18px 20px 34px",
      boxShadow: "none",
      filter: "drop-shadow(0 3px 6px rgba(60,60,70,0.14))"
    });else if (note.s === "star") Object.assign(base, {
      clipPath: "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)",
      width: 118,
      height: 112,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "30px 18px 14px",
      boxShadow: "none",
      filter: "drop-shadow(0 3px 6px rgba(60,60,70,0.14))"
    });else if (note.s === "speech") Object.assign(base, {
      borderRadius: 16
    });else if (note.s === "grid") Object.assign(base, {
      borderRadius: 3,
      backgroundImage: "linear-gradient(rgba(60,88,118,0.10) 1px,transparent 1px),linear-gradient(90deg,rgba(60,88,118,0.10) 1px,transparent 1px)",
      backgroundSize: "9px 9px"
    });else Object.assign(base, {
      borderRadius: 3
    }); // note
    return /*#__PURE__*/React.createElement("div", {
      style: base
    }, (note.s === "note" || note.s === "grid") && /*#__PURE__*/React.createElement("div", {
      style: {
        position: "absolute",
        top: -9,
        left: "50%",
        transform: "translateX(-50%) rotate(-4deg)",
        width: 34,
        height: 15,
        background: "rgba(150,170,190,0.4)",
        borderRadius: 2
      }
    }), note.t);
  };

  // ── 처방전 옆 세로 툴바 + 선택 모달 ──
  const catItems = STICKER_FILES && STICKER_FILES[pickerCat] || [];
  const openPicker = e => {
    e.stopPropagation();
    setShowPicker(true);
    setHintSeen(true);
  };
  const ToolBtn = ({
    icon,
    label,
    onClick,
    main
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 3
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    style: {
      width: 38,
      height: 38,
      borderRadius: "50%",
      border: main ? "none" : "1px solid rgba(120,104,78,0.16)",
      cursor: "pointer",
      background: main ? "#8f86c9" : "rgba(253,251,246,0.85)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: main ? "0 4px 12px rgba(120,104,78,0.18)" : "0 2px 7px rgba(90,74,52,0.08)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: 17,
    color: main ? "#fff" : "var(--text-body)",
    stroke: 1.7
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 10,
      lineHeight: 1.2,
      color: "var(--text-muted)",
      textAlign: "center",
      maxWidth: 52
    }
  }, label));
  const toolbar = /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: pc ? "column" : "row",
      alignItems: "center",
      justifyContent: "center",
      gap: pc ? 16 : 10,
      padding: pc ? "18px 14px" : "10px 12px",
      background: "rgba(255,255,255,0.75)",
      borderRadius: pc ? 26 : 18,
      boxShadow: "0 8px 24px rgba(70,58,45,0.12)",
      backdropFilter: "blur(6px)"
    }
  }, /*#__PURE__*/React.createElement(ToolBtn, {
    icon: "plus",
    label: "\uC751\uC6D0 \uC2A4\uD2F0\uCEE4 \uBD99\uC774\uAE30",
    onClick: openPicker,
    main: true
  }), /*#__PURE__*/React.createElement(ToolBtn, {
    icon: "chevrons-down",
    label: "\uACF5\uAC04 \uB298\uB9AC\uAE30",
    onClick: () => setExtraH(h => Math.min(EXTRA_MAX * EXTRA_STEP, h + EXTRA_STEP))
  }), /*#__PURE__*/React.createElement(ToolBtn, {
    icon: "chevrons-up",
    label: "\uACF5\uAC04 \uC904\uC774\uAE30",
    onClick: () => setExtraH(h => Math.max(0, h - EXTRA_STEP))
  }), /*#__PURE__*/React.createElement(ToolBtn, {
    icon: "rotate-ccw",
    label: "\uB418\uB3CC\uB9AC\uAE30",
    onClick: () => setStickers(l => l.slice(0, -1))
  }), /*#__PURE__*/React.createElement(ToolBtn, {
    icon: "scan",
    label: "\uC815\uB82C\uD558\uAE30",
    onClick: () => setActiveId(null)
  }), /*#__PURE__*/React.createElement(ToolBtn, {
    icon: "help-circle",
    label: "\uC0AC\uC6A9 \uC548\uB0B4",
    onClick: () => {
      setShowTip(true);
      setTimeout(() => setShowTip(false), 4200);
    }
  }));
  const pickerModal = showPicker && /*#__PURE__*/React.createElement("div", {
    onClick: () => setShowPicker(false),
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 70,
      background: "rgba(54,46,39,0.32)",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      padding: pc ? "0 0 0" : 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: pc ? "min(760px, 82vw)" : "100%",
      maxWidth: "100%",
      maxHeight: pc ? "82vh" : "auto",
      overflowY: pc ? "auto" : "visible",
      background: "var(--cream)",
      borderRadius: pc ? "18px" : "18px 18px 0 0",
      boxShadow: "0 -6px 30px rgba(54,46,39,0.2)",
      padding: pc ? 30 : 18,
      margin: pc ? "auto 0" : 0,
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: 18,
      color: "var(--ink-900)"
    }
  }, "\uC2A4\uD2F0\uCEE4 \uC120\uD0DD"), /*#__PURE__*/React.createElement("button", {
    onClick: () => setShowPicker(false),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 20,
    color: "var(--text-muted)"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 6,
      marginBottom: 14,
      flexWrap: "wrap"
    }
  }, STICKER_CATEGORIES.map(c => /*#__PURE__*/React.createElement("button", {
    key: c.key,
    onClick: () => setPickerCat(c.key),
    style: {
      padding: "7px 14px",
      borderRadius: 999,
      cursor: "pointer",
      fontFamily: "var(--font-body)",
      fontSize: 13,
      fontWeight: 600,
      border: "none",
      background: pickerCat === c.key ? "var(--accent)" : "rgba(120,92,64,0.08)",
      color: pickerCat === c.key ? "var(--on-accent)" : "var(--text-body)"
    }
  }, c.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: pc ? "repeat(4, minmax(120px, 1fr))" : "repeat(4, 1fr)",
      gap: pc ? 14 : 8,
      maxHeight: pc ? "56vh" : "46vh",
      overflowY: "auto"
    }
  }, catItems.map((src, i) => /*#__PURE__*/React.createElement("button", {
    key: src,
    onClick: () => addSticker(src),
    style: {
      aspectRatio: "1 / 1",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      border: "1px solid var(--line-soft)",
      background: "rgba(255,255,255,0.6)",
      borderRadius: 14,
      cursor: "pointer",
      padding: 6
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    loading: "lazy",
    draggable: false,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "contain"
    }
  })))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-muted)",
      textAlign: "center",
      margin: "14px 0 0"
    }
  }, "\uACE0\uB978 \uC2A4\uD2F0\uCEE4\uB294 \uCC98\uBC29\uC804\uC5D0 \uBD99\uACE0, \uB4DC\uB798\uADF8\xB7\uD68C\uC804\xB7\uD06C\uAE30 \uC870\uC808\uD560 \uC218 \uC788\uC5B4\uC694.")));

  // ── 처방전 (편집 보드) ──
  const board = /*#__PURE__*/React.createElement("div", {
    ref: boardRef,
    onPointerDown: e => {
      if (!e.target.closest("[data-sticker]")) setActiveId(null);
    },
    style: {
      position: "relative",
      width: sheetW,
      maxWidth: "100%",
      boxSizing: "border-box",
      opacity: mounted ? 1 : 0,
      transition: "opacity 950ms ease-out"
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: exportRef,
    style: {
      position: "relative",
      width: sheetW,
      maxWidth: "100%",
      background: "linear-gradient(174deg,#FDFBF5 0%,#FAF6EC 100%)",
      border: "1px solid rgba(120,104,78,0.16)",
      borderRadius: 8,
      boxShadow: "0 1px 2px rgba(90,74,52,0.06), 0 18px 44px rgba(90,74,52,0.14)",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 10,
      border: "1px solid rgba(120,104,78,0.14)",
      borderRadius: 4,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: `${pc ? 42 : 28}px ${pc ? 52 : 24}px ${pc ? 30 : 22}px`,
      minHeight: pc ? 560 : 560,
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-protect": true,
    style: {
      width: "100%",
      textAlign: "center",
      marginBottom: pc ? 14 : 11
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: pc ? 13 : 12,
      color: "var(--text-muted)",
      letterSpacing: "0.14em",
      marginBottom: pc ? 8 : 6
    }
  }, "\uC624\uB298\uC758 \uB9D0\uC500 \uCC98\uBC29\uC804"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 500,
      fontSize: pc ? 27 : 22,
      color: "#3f5a86",
      letterSpacing: "0.12em",
      paddingLeft: "0.12em"
    }
  }, "\uB9C8\uC74C\uC57D\uAD6D \uCC98\uBC29\uC804"), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: `1px solid ${LINE}`,
      width: "100%",
      marginTop: pc ? 16 : 12
    }
  })), /*#__PURE__*/React.createElement("div", {
    "data-protect": true,
    style: {
      width: "100%"
    }
  }, [["처방일", rxDate, "증상", rx.symptom || moodLabel], ["마음 강도", rx.intensity || "마음에 오래 머무는 중", "처방 단어", rx.word]].map((row, ri) => /*#__PURE__*/React.createElement("div", {
    key: ri,
    style: {
      display: "grid",
      gridTemplateColumns: pc ? "auto 1fr auto 1fr" : "auto 1fr",
      columnGap: pc ? 14 : 12,
      rowGap: pc ? 0 : 7,
      alignItems: "baseline",
      padding: `${pc ? 11 : 9}px 2px`,
      borderTop: ri ? `1px solid ${LINE}` : "none"
    }
  }, /*#__PURE__*/React.createElement(TLabel, null, row[0]), /*#__PURE__*/React.createElement(TVal, null, row[1]), /*#__PURE__*/React.createElement(TLabel, null, row[2]), /*#__PURE__*/React.createElement(TVal, {
    accent: ri === 1
  }, row[3])))), /*#__PURE__*/React.createElement("div", {
    "data-protect": true,
    style: {
      width: "100%",
      marginTop: pc ? 30 : 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: pc ? 12.5 : 11.5,
      color: "#5a7099",
      letterSpacing: "0.14em",
      textAlign: "center",
      marginBottom: pc ? 12 : 9
    }
  }, "\uCC98\uBC29 \uB9D0\uC500"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      padding: `${pc ? 8 : 6}px ${pc ? 30 : 20}px ${pc ? 6 : 4}px`,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 2,
      fontFamily: "var(--font-verse)",
      fontSize: pc ? 24 : 19,
      color: "rgba(120,104,78,0.28)",
      lineHeight: 1
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-verse)",
      fontSize: pc ? 20 : 16,
      lineHeight: 1.75,
      color: "var(--ink-900)",
      margin: "0 auto",
      maxWidth: pc ? 640 : 440,
      textWrap: "balance"
    }
  }, rx.verse), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 0,
      bottom: pc ? 2 : 0,
      fontFamily: "var(--font-verse)",
      fontSize: pc ? 24 : 19,
      color: "rgba(120,104,78,0.28)",
      lineHeight: 1
    }
  }, "\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: pc ? 13 : 12,
      color: "#5a7099",
      letterSpacing: "0.04em",
      marginTop: pc ? 14 : 10
    }
  }, rx.reference))), /*#__PURE__*/React.createElement("div", {
    "data-sticker-zone": true,
    style: {
      position: "relative",
      width: "100%",
      flex: "1 1 auto",
      minHeight: (pc ? 150 : 110) + extraH,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "min-height 320ms ease-out"
    }
  }, !finalizing && stickers.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 8,
      opacity: 0.7,
      pointerEvents: "none"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "hand-heart",
    size: pc ? 30 : 26,
    color: "var(--text-faint)",
    stroke: 1.5
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-label)",
      fontSize: pc ? 14 : 13,
      color: "var(--text-muted)"
    }
  }, "\uBE48 \uACF5\uAC04\uC5D0 \uC2A4\uD2F0\uCEE4\uB97C \uBD99\uC5EC \uCC98\uBC29\uC804\uC744 \uAFB8\uBA70\uBCF4\uC138\uC694."))), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      borderTop: `1px solid ${LINE}`
    }
  }), /*#__PURE__*/React.createElement("div", {
    "data-protect": true,
    style: {
      width: "100%",
      marginTop: pc ? 14 : 11
    }
  }, /*#__PURE__*/React.createElement(SecTitle, null, "\uBCF5\uC6A9 \uC548\uB0B4"), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      gap: 10,
      padding: `${pc ? 11 : 9}px 2px ${pc ? 16 : 12}px`,
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clipboard-list",
    size: pc ? 19 : 17,
    color: INK,
    stroke: 1.6
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: pc ? 13.5 : 12.5,
      lineHeight: 1.55,
      color: "var(--ink-900)",
      margin: 0,
      flex: 1
    }
  }, oneLine))), /*#__PURE__*/React.createElement("p", {
    "data-export-ignore": "true",
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "#8a6f4a",
      opacity: 0.55,
      textAlign: "center",
      margin: `${pc ? 16 : 12}px 0 0`
    }
  }, "\uB9C8\uC74C\uC57D\uAD6D \uCC98\uBC29\uC804\uC740 \uB2F9\uC2E0\uC758 \uB9C8\uC74C\uC744 \uC704\uD55C \uB9DE\uCDA4 \uCC98\uBC29\uC785\uB2C8\uB2E4."))), showTip && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 10,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 50,
      background: "rgba(62,71,60,0.92)",
      color: "#FBFDFF",
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      lineHeight: 1.5,
      padding: "10px 14px",
      borderRadius: 12,
      boxShadow: "var(--shadow-md)",
      textAlign: "center",
      pointerEvents: "none",
      whiteSpace: "nowrap"
    }
  }, "\uB4DC\uB798\uADF8\uD574\uC11C \uC774\uB3D9 \xB7 \uC190\uC7A1\uC774\uB85C \uD06C\uAE30\uC640 \uAC01\uB3C4 \uC870\uC808"), stickers.map(s => {
    const isActive = activeId === s.id;
    const px = (pc ? 40 : 34) * s.scale;
    const boxPad = 8;
    const box = px + boxPad * 2;
    return /*#__PURE__*/React.createElement("div", {
      key: s.id,
      "data-sticker": true,
      onClick: e => e.stopPropagation(),
      style: {
        position: "absolute",
        left: s.x + "%",
        top: s.y + "%",
        width: box,
        height: box,
        marginLeft: -box / 2,
        marginTop: -box / 2,
        transform: `rotate(${s.rotate}deg)`,
        transformOrigin: "center center",
        touchAction: "none",
        zIndex: activeId === s.id ? 20 : 5
      }
    }, /*#__PURE__*/React.createElement("span", {
      onPointerDown: e => startMove(e, s),
      style: {
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "grab",
        userSelect: "none",
        border: invalidId === s.id ? "2px solid var(--coral-600)" : isActive ? "2px dashed var(--rx-blue-500)" : "none",
        borderRadius: 12,
        boxSizing: "border-box"
      }
    }, s.src ? /*#__PURE__*/React.createElement("img", {
      src: s.src,
      alt: "",
      draggable: false,
      onDragStart: e => e.preventDefault(),
      style: {
        width: px,
        height: px,
        objectFit: "contain",
        pointerEvents: "none",
        userSelect: "none"
      }
    }) : /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: px,
        lineHeight: 1
      }
    }, s.emoji)), isActive && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
      onClick: e => {
        e.stopPropagation();
        removeSticker(s.id);
      },
      style: {
        position: "absolute",
        top: 0,
        left: 0,
        transform: "translate(-50%, -50%)",
        width: 22,
        height: 22,
        borderRadius: "50%",
        background: "var(--coral-600)",
        color: "#fff",
        fontSize: 13,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 3
      }
    }, "\xD7"), /*#__PURE__*/React.createElement("span", {
      onPointerDown: e => startResizeRotate(e, s, "rotate"),
      style: {
        position: "absolute",
        top: 0,
        left: "50%",
        transform: `translate(-50%, -140%) rotate(${-s.rotate}deg)`,
        width: 26,
        height: 26,
        borderRadius: "50%",
        background: "var(--rx-blue-500)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "grab",
        boxShadow: "var(--shadow-sm)",
        touchAction: "none",
        zIndex: 3
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "rotate-cw",
      size: 13,
      color: "#fff"
    })), /*#__PURE__*/React.createElement("span", {
      onPointerDown: e => startResizeRotate(e, s, "resize"),
      style: {
        position: "absolute",
        top: "100%",
        left: "100%",
        transform: "translate(-50%, -50%)",
        width: 22,
        height: 22,
        borderRadius: "50%",
        background: "var(--accent)",
        cursor: "nwse-resize",
        boxShadow: "var(--shadow-sm)",
        touchAction: "none",
        zIndex: 3
      }
    })));
  }));
  const actions = /*#__PURE__*/React.createElement("div", {
    style: {
      width: sheetW,
      maxWidth: "100%",
      marginTop: 20,
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "outline",
    size: "md",
    block: true,
    onClick: () => startCompletion("save"),
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 17
    })
  }, "\uC774\uBBF8\uC9C0\uB85C \uC800\uC7A5"), /*#__PURE__*/React.createElement(Button, {
    tone: "rx",
    size: "md",
    block: true,
    onClick: () => startCompletion("share"),
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: copied ? "check" : "link",
      size: 17,
      color: "#F7FAFF"
    })
  }, copied ? "링크 복사됨" : "공유 링크 만들기")), copied && /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12,
      color: "var(--text-muted)",
      textAlign: "center",
      margin: 0
    }
  }, "\uC774 \uB9C1\uD06C\uB97C \uBC1B\uC740 \uC0AC\uB78C\uB3C4 \uC2A4\uD2F0\uCEE4\uB97C \uC774\uC5B4 \uBD99\uC77C \uC218 \uC788\uC5B4\uC694."));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: "100%",
      height: "100vh",
      overflow: "hidden",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "fixed",
      inset: 0,
      backgroundColor: "#F3E8DA",
      backgroundImage: "url(assets-web/decorate-bg.png)",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      zIndex: 0,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 1,
      width: "100%",
      height: "100vh",
      overflowY: "auto",
      overflowX: "hidden",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: pc ? "26px 32px 40px" : "20px 16px 32px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: sheetW,
      maxWidth: "100%",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onBack,
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 22,
    color: "var(--text-muted)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 600,
      fontSize: pc ? 18 : 16,
      color: "var(--text-strong)"
    }
  }, "\uCC98\uBC29\uC804 \uAFB8\uBBF8\uAE30"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: pc ? "row" : "column",
      alignItems: pc ? "flex-start" : "center",
      justifyContent: "center",
      gap: pc ? 22 : 16,
      maxWidth: "100%"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      maxWidth: "100%"
    }
  }, board, !finalizing && flow === "idle" && !confirmType && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: pc ? "row" : "column-reverse",
      gap: pc ? 14 : 11,
      justifyContent: "center",
      marginTop: pc ? 22 : 18,
      width: sheetW,
      maxWidth: "100%",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => openConfirm("save"),
    style: {
      flex: pc ? 4 : "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      height: 50,
      padding: "0 20px",
      borderRadius: 14,
      border: "1px solid rgba(171,136,96,0.22)",
      cursor: "pointer",
      background: "#F7EBDD",
      boxShadow: "0 5px 14px rgba(97,68,42,0.09)",
      color: "#6A533F",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, sans-serif",
      fontWeight: 600,
      fontSize: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "download",
    size: 18,
    color: "#6A533F"
  }), " \uC774\uBBF8\uC9C0\uB85C \uC800\uC7A5\uD558\uAE30"), /*#__PURE__*/React.createElement("button", {
    onClick: () => openConfirm("share"),
    style: {
      flex: pc ? 6 : "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 8,
      height: 50,
      padding: "0 20px",
      borderRadius: 14,
      border: "1px solid rgba(126,116,190,0.55)",
      cursor: "pointer",
      background: "linear-gradient(160deg,#b3aaea 0%,#8f86c9 60%,#847ac2 100%)",
      boxShadow: "0 3px 10px rgba(120,108,200,0.22), inset 0 2px 6px rgba(255,255,255,0.55), inset 0 -3px 8px rgba(90,78,150,0.28)",
      color: "#fff",
      fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, sans-serif",
      fontWeight: 600,
      fontSize: 16,
      animation: "rxGlow 2.6s ease-in-out infinite"
    }
  }, /*#__PURE__*/React.createElement("style", null, `@keyframes rxGlow{0%,100%{box-shadow:0 3px 10px rgba(120,108,200,0.20),inset 0 2px 6px rgba(255,255,255,0.5),inset 0 -3px 8px rgba(90,78,150,0.26)}50%{box-shadow:0 4px 12px rgba(120,108,200,0.26),inset 0 2px 10px rgba(255,255,255,0.85),inset 0 -3px 8px rgba(90,78,150,0.3)}}`), /*#__PURE__*/React.createElement(Icon, {
    name: "share-2",
    size: 18,
    color: "#fff"
  }), " \uC18C\uC911\uD55C \uC0AC\uB78C\uC5D0\uAC8C \uACF5\uC720\uD558\uAE30")), finalizing && confirmType && flow === "idle" && /*#__PURE__*/React.createElement("div", {
    "data-export-ignore": "true",
    style: {
      width: sheetW,
      maxWidth: "100%",
      marginTop: pc ? 32 : 24,
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes exRevealUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: pc ? 20 : 17,
      color: "var(--ink-900)",
      margin: "0 0 6px",
      opacity: 0,
      animation: "exRevealUp 420ms ease-out 120ms both"
    }
  }, confirmType === "save" ? "이대로 저장해도 괜찮을까요?" : "이대로 보내도 괜찮을까요?"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 13.5,
      color: "var(--text-muted)",
      margin: "0 0 20px",
      opacity: 0,
      animation: "exRevealUp 420ms ease-out 280ms both"
    }
  }, confirmType === "save" ? "저장되는 모습을 확인해보세요. 언제든 돌아가 수정할 수 있어요." : "상대에게 전달될 모습을 확인해보세요. 언제든 돌아가 수정할 수 있어요."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      justifyContent: "center",
      maxWidth: 420,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: cancelConfirm,
    style: {
      flex: 1,
      padding: "15px",
      borderRadius: "var(--radius-lg)",
      border: "1px solid var(--line-soft)",
      cursor: "pointer",
      background: "#fff",
      color: "var(--text-body)",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 15,
      opacity: 0,
      animation: "exRevealUp 420ms ease-out 440ms both"
    }
  }, "\uC218\uC815\uD558\uAE30"), /*#__PURE__*/React.createElement("button", {
    onClick: runExport,
    style: {
      flex: 1.25,
      padding: "15px",
      borderRadius: "var(--radius-lg)",
      border: "none",
      cursor: "pointer",
      background: PURPLE,
      color: "#fff",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 15,
      boxShadow: "0 8px 20px rgba(107,95,207,0.26)",
      opacity: 0,
      animation: "exRevealUp 420ms ease-out 560ms both"
    }
  }, confirmType === "save" ? "이대로 저장하기" : "이대로 보내기")))), pc && !finalizing && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "sticky",
      top: 24,
      alignSelf: "flex-start"
    }
  }, toolbar)), !pc && !finalizing && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      right: 10,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 60,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 10,
      padding: "12px 8px",
      background: "rgba(255,255,255,0.82)",
      borderRadius: 22,
      boxShadow: "0 8px 24px rgba(70,58,45,0.16)",
      backdropFilter: "blur(6px)"
    }
  }, [{
    icon: "plus",
    onClick: openPicker,
    main: true
  }, {
    icon: "chevrons-down",
    onClick: () => setExtraH(h => Math.min(EXTRA_MAX * EXTRA_STEP, h + EXTRA_STEP))
  }, {
    icon: "chevrons-up",
    onClick: () => setExtraH(h => Math.max(0, h - EXTRA_STEP))
  }, {
    icon: "rotate-ccw",
    onClick: () => setStickers(l => l.slice(0, -1))
  }, {
    icon: "scan",
    onClick: () => setActiveId(null)
  }, {
    icon: "help-circle",
    onClick: () => {
      setShowTip(true);
      setTimeout(() => setShowTip(false), 4200);
    }
  }].map(b => /*#__PURE__*/React.createElement("button", {
    key: b.icon,
    onClick: b.onClick,
    style: {
      width: 46,
      height: 46,
      borderRadius: "50%",
      border: b.main ? "none" : "1px solid rgba(70,58,45,0.12)",
      cursor: "pointer",
      background: b.main ? PURPLE : "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: b.main ? "0 6px 16px rgba(107,95,207,0.32)" : "0 3px 10px rgba(70,58,45,0.10)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: b.icon,
    size: 20,
    color: b.main ? "#fff" : "var(--text-body)",
    stroke: 1.7
  })))), pickerModal, flow !== "idle" && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 99999,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: 32,
      backgroundColor: "#F3E8DA",
      backgroundImage: "url(assets-web/decorate-bg.png)",
      backgroundSize: "cover",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat"
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes revealUp{to{opacity:1;transform:translateY(0)}}"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 470,
      width: "100%",
      opacity: flow === "fadeout" ? 0 : 1,
      transition: "opacity 500ms ease"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: flowType === "save" ? "assets-web/icon-save.webp" : "assets-web/icon-share.webp",
    alt: "",
    style: {
      width: pc ? 104 : 88,
      height: pc ? 104 : 88,
      objectFit: "contain",
      display: "block",
      margin: "0 auto 16px",
      opacity: 0,
      transform: "translateY(12px)",
      animation: "revealUp 480ms ease-out 0ms forwards"
    }
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: "0.02em",
      color: "#8E86DE",
      margin: "0 0 14px",
      opacity: 0,
      transform: "translateY(12px)",
      animation: "revealUp 480ms ease-out 150ms forwards"
    }
  }, flowType === "save" ? "저장이 완료되었어요" : "공유가 완료되었어요"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-title)",
      fontWeight: 700,
      fontSize: pc ? 32 : 25,
      lineHeight: 1.35,
      color: "var(--ink-900)",
      margin: "0 0 18px",
      opacity: 0,
      transform: "translateY(12px)",
      animation: "revealUp 480ms ease-out 300ms forwards"
    }
  }, flowType === "save" ? /*#__PURE__*/React.createElement(React.Fragment, null, "\uC624\uB298\uC758 \uB9C8\uC74C\uC744", /*#__PURE__*/React.createElement("br", null), "\uC870\uC6A9\uD788 \uB2F4\uC544\uB450\uC5C8\uC5B4\uC694") : /*#__PURE__*/React.createElement(React.Fragment, null, "\uC751\uC6D0\uC758 \uB9C8\uC74C\uC744", /*#__PURE__*/React.createElement("br", null), "\uB530\uB73B\uD558\uAC8C \uC804\uD588\uC5B4\uC694")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: pc ? 16 : 14.5,
      lineHeight: 1.8,
      color: "var(--text-muted)",
      margin: "0 0 30px",
      opacity: 0,
      transform: "translateY(12px)",
      animation: "revealUp 480ms ease-out 500ms forwards"
    }
  }, flowType === "save" ? /*#__PURE__*/React.createElement(React.Fragment, null, "\uAFB8\uBA70\uC9C4 \uCC98\uBC29\uC804\uC774 \uB0B4 \uAE30\uAE30\uC5D0", /*#__PURE__*/React.createElement("br", null), "\uC548\uC804\uD558\uAC8C \uC800\uC7A5\uB418\uC5C8\uC5B4\uC694.", /*#__PURE__*/React.createElement("br", null), "\uB9C8\uC74C\uC774 \uD544\uC694\uD55C \uB0A0 \uB2E4\uC2DC \uB9CC\uB098\uBCF4\uC138\uC694.") : /*#__PURE__*/React.createElement(React.Fragment, null, "\uB2F9\uC2E0\uC774 \uAFB8\uBBFC \uCC98\uBC29\uC804\uC774", /*#__PURE__*/React.createElement("br", null), "\uC751\uC6D0\uC758 \uB9C8\uC74C\uACFC \uD568\uAED8 \uC798 \uC804\uB2EC\uB418\uC5C8\uC5B4\uC694.")), /*#__PURE__*/React.createElement("button", {
    onClick: finishCompletion,
    style: {
      display: "block",
      width: "100%",
      maxWidth: 420,
      margin: "0 auto",
      padding: "16px",
      borderRadius: 999,
      border: "none",
      cursor: "pointer",
      background: "linear-gradient(135deg,#ABA2ED,#8E86DE)",
      color: "#fff",
      fontFamily: "var(--font-body)",
      fontWeight: 700,
      fontSize: 16,
      boxShadow: "0 10px 24px rgba(107,95,207,0.28)",
      opacity: 0,
      transform: "translateY(12px)",
      animation: "revealUp 480ms ease-out 750ms forwards"
    }
  }, "\uBA54\uC778\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: 12.5,
      color: "var(--text-faint)",
      margin: "18px 0 0",
      opacity: 0,
      transform: "translateY(12px)",
      animation: "revealUp 480ms ease-out 900ms forwards"
    }
  }, "\uC7A0\uC2DC \uD6C4 \uBA54\uC778\uC73C\uB85C \uB3CC\uC544\uAC11\uB2C8\uB2E4")))));
}
window.StickerScreen = StickerScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soul-pharmacy/StickerScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/soul-pharmacy/animation/animations-v2.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// animations-v2.jsx — timeline animation engine with scene sequencing.
// Exports (on window): Stage, Sprite, TextSprite, ImageSprite, RectSprite,
//   VideoSprite, PlaybackBar, Easing, interpolate, animate, clamp,
//   useTime, useTimeline, useSprite, SceneStage, useScene.
//
// ALWAYS structure the piece as a scene sequence — even a single-scene
// piece is a one-entry list. Do NOT also load animations.jsx: v2 contains
// the whole engine (same globals; loading both means last-wins).
//   <x-import component-from-global-scope="MyPiece"
//             from="./animations-v2.jsx ./my-piece.jsx"></x-import>
//
// THE AUTHORING CONTRACT — this is what makes the host timeline's
// trim and speed gestures write back into YOUR file, so follow it
// exactly:
//   1. Declare the scene list as a JSON string literal in a plain inline
//      <script> of the main document (NOT type="text/babel", NOT a sibling
//      .jsx — only vanilla inline scripts are addressable for write-back):
//        <script>window.OM_SCENES = '[{"name":"Opening","dur":3},{"name":"Peak","dur":4.5}]';</script>
//   2. Pass the string through untouched: <SceneStage scenes={window.OM_SCENES} ...>
//   3. Map scene names to components via the children object.
//   IMPORTANT — the exportable-video contract: SceneStage/Stage OWNS it
//   (the data-om-exportable-video-with-duration-secs attribute, the
//   data-om-seek-to-time-frame listener, the svg/foreignObject wrapper,
//   and font inlining). NEVER put the exportable attribute on any other
//   element — wrapping the stage in a second "exportable root" makes the
//   host timeline and the video exporter bind to the wrong element, and
//   playback control / export silently break.
//   4. ALSO declare the playback setting the same way — this is what makes
//      the host timeline's Repeat control write back into your file:
//        <script>window.OM_PLAYBACK = '{"mode":"loop"}';</script>
//      and pass it through untouched: <SceneStage playback={window.OM_PLAYBACK} ...>
//      Values: '{"mode":"loop"}' (play forever, the default) or
//      '{"mode":"times","count":N}' (play N times, then hold the last
//      frame). Omitting it keeps loop behavior but leaves the host
//      control read-only for this document.
//
//   IMPORTANT — the exportable-video contract: SceneStage/Stage OWNS it
//   (the data-om-exportable-video-with-duration-secs attribute, the
//   data-om-seek-to-time-frame listener, the svg/foreignObject wrapper,
//   and font inlining). NEVER put the exportable attribute on any other
//   element — wrapping the stage in a second "exportable root" makes the
//   host timeline and the video exporter bind to the wrong element, and
//   playback control / export silently break.
//
//   <SceneStage width={1280} height={720} scenes={window.OM_SCENES}
//               bg="#0b0b0e">
//     {{ 'Opening': Opening, 'Peak': Peak }}
//   </SceneStage>
//
// SceneStage({width, height, scenes, bg, autoplay=true, loop=true,
//   transition='cut', children}) — wraps Stage. Scenes play in authored order; total
// duration is the sum of durs, kept in sync with the exportable attr
// automatically. The host timeline shows the scenes as blocks: dragging
// an edge retimes one scene, clicking a block opens rename/speed — and every
// edit lands in the JSON literal in source, then the composition reflows
// live (no reload) via the data-om-timeline-scenes-update event. (The
// time ruler above the blocks is a seek surface — click or drag scrubs;
// it never edits timing.)
//
// TIMING IS USER-EDITABLE (time-stretch): when the user changes a scene's
// length, the engine remaps your scene clock so the SAME choreography
// plays faster or slower — never cut off. That only works for motion
// driven by the scene clock, so inside a scene component ALWAYS animate
// from useScene()'s {localTime, progress} (never your own clock, never
// useTime directly).
//
// The same rule is what makes video export exact AND fast: the exporter
// seeks each frame with a synchronous commit and may serialize the stage
// the moment the seek event returns — anything painted from useEffect or
// your own requestAnimationFrame lags that commit and exports stale.
// Render everything visible from the scene clock's values and this is
// automatic. (Nested <VideoSprite> videos are handled by the exporter.)
//
// TRANSITIONS: scene boundaries are hard cuts by default
// (transition="cut") — exactly one scene is mounted at any time. Scene
// layers are keyed by scene index, so inactive scenes are fully unmounted
// (they do zero per-frame work) and a scene never leaks component state
// into a neighbor, even when two adjacent scenes use the same component.
//   transition="overlap" is opt-in and for OPAQUE scenes only: during
// playback the outgoing scene stays mounted beneath the incoming one for
// ~2 frames, frozen at the frame it had just rendered, so the moments
// where the incoming scene hasn't painted real content yet (an <img>
// still decoding, a <video> before its first frame) show the outgoing
// scene rather than a flash of stage background. It cannot fix content
// that paints WRONG — a video whose first frame paints black paints
// black over the underlay too. Only use it
// when every scene paints the full frame — a scene on a transparent stage
// background will show the previous scene through it (ghosting); keep
// "cut" for those. Paused seeks and video-export frame seeks
// (data-om-seek-to-time-frame) never overlap — a seeked frame always
// renders exactly one scene's state. Playback driven by the EDITOR's
// play bar counts as playback too: the host marks its play-loop seeks
// (detail.playing === true on the same seek event) and the engine reads
// the marked stream as continuous playback, so overlap may engage —
// including across the loop seam, matching self-driven playback — while
// unmarked seeks (scrubs, steps, export frames) keep the
// exactly-one-scene rule. A tick-sized forward step or drag
// WHILE PLAYING reads as playback and may briefly overlap (bounded, ~2
// frames). The loop wrap (last scene back to the first, when loop is on —
// the default) is a boundary like any other and overlaps too, so the
// frame-match contract below applies across the loop seam as well.
//
// THE FRAME-MATCH CONTRACT (this is what makes boundaries seamless, in
// BOTH modes): a scene's entry/exit effects must be 0 at progress 0 and
// at progress 1 — its first and last rendered frames are the settled
// composition, with entrances and exits choreographed strictly inside
// (0, 1). No entry-only squash/rotation/opacity: a scene whose frame at
// progress 0 is mid-squash, rotated, or transparent pops at every cut and
// ghosts under overlap.
//
// The provided sprites bake in entry/exit fades (entryDur/exitDur), so a
// sprite that spans a scene edge violates the contract by construction:
// set entryDur={0} on sprites alive at the scene's first frame and
// exitDur={0} on sprites alive at its last, or inset the sprite's span so
// its fades complete inside the scene. The flip side: a scene that exits
// to fully transparent shows NOTHING at its last frame, so "overlap"
// would hold an empty underlay — following the contract is what makes
// overlap worth turning on.
//
// Scene entries are independent component instances, even when two names
// map to the same component — state never carries across a boundary. For
// one continuous component spanning a retimable stretch (a <video> that
// must keep playing through), use a single scene entry with extra fields
// driving its phases, not two entries of the same component.
//
// Each scene entry may carry extra fields ({"name":"Peak","dur":4,
// "text":"ACME"}) — the active scene component receives the whole entry as
// `scene` plus {localTime, progress, dur, index, count}, and can call
// useScene() anywhere below. Scenes own their entrances/exits — ramp any
// effect up only AFTER progress 0 and settle it back to 0 BEFORE progress
// 1, per THE FRAME-MATCH CONTRACT above. The optional "nat" field is the engine's
// time-stretch anchor — the host timeline manages it; don't set it by
// hand.
/* END USAGE */

// ─────────────────────────────────────────────────────────────────────────────

// ── Easing functions (hand-rolled, Popmotion-style) ─────────────────────────
// All easings take t ∈ [0,1] and return eased t ∈ [0,1] (may overshoot for back/elastic).
const Easing = {
  linear: t => t,
  // Quad
  easeInQuad: t => t * t,
  easeOutQuad: t => t * (2 - t),
  easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
  // Cubic
  easeInCubic: t => t * t * t,
  easeOutCubic: t => --t * t * t + 1,
  easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
  // Quart
  easeInQuart: t => t * t * t * t,
  easeOutQuart: t => 1 - --t * t * t * t,
  easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,
  // Expo
  easeInExpo: t => t === 0 ? 0 : Math.pow(2, 10 * (t - 1)),
  easeOutExpo: t => t === 1 ? 1 : 1 - Math.pow(2, -10 * t),
  easeInOutExpo: t => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    if (t < 0.5) return 0.5 * Math.pow(2, 20 * t - 10);
    return 1 - 0.5 * Math.pow(2, -20 * t + 10);
  },
  // Sine
  easeInSine: t => 1 - Math.cos(t * Math.PI / 2),
  easeOutSine: t => Math.sin(t * Math.PI / 2),
  easeInOutSine: t => -(Math.cos(Math.PI * t) - 1) / 2,
  // Back (overshoot)
  easeOutBack: t => {
    const c1 = 1.70158,
      c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },
  easeInBack: t => {
    const c1 = 1.70158,
      c3 = c1 + 1;
    return c3 * t * t * t - c1 * t * t;
  },
  easeInOutBack: t => {
    const c1 = 1.70158,
      c2 = c1 * 1.525;
    return t < 0.5 ? Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2) / 2 : (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
  },
  // Elastic
  easeOutElastic: t => {
    const c4 = 2 * Math.PI / 3;
    if (t === 0) return 0;
    if (t === 1) return 1;
    return Math.pow(2, -10 * t) * Math.sin((t * 10 - 0.75) * c4) + 1;
  }
};

// ── Core interpolation helpers ──────────────────────────────────────────────

// Clamp a value to [min, max]
const clamp = (v, min, max) => Math.max(min, Math.min(max, v));

// interpolate([0, 0.5, 1], [0, 100, 50], ease?) -> fn(t)
// Popmotion-style: linearly maps t across input keyframes to output values,
// with optional easing per segment (single fn or array of fns).
function interpolate(input, output, ease = Easing.linear) {
  return t => {
    if (t <= input[0]) return output[0];
    if (t >= input[input.length - 1]) return output[output.length - 1];
    for (let i = 0; i < input.length - 1; i++) {
      if (t >= input[i] && t <= input[i + 1]) {
        const span = input[i + 1] - input[i];
        const local = span === 0 ? 0 : (t - input[i]) / span;
        const easeFn = Array.isArray(ease) ? ease[i] || Easing.linear : ease;
        const eased = easeFn(local);
        return output[i] + (output[i + 1] - output[i]) * eased;
      }
    }
    return output[output.length - 1];
  };
}

// animate({from, to, start, end, ease})(t) — simpler single-segment tween.
// Returns `from` before `start`, `to` after `end`.
function animate({
  from = 0,
  to = 1,
  start = 0,
  end = 1,
  ease = Easing.easeInOutCubic
}) {
  return t => {
    if (t <= start) return from;
    if (t >= end) return to;
    const local = (t - start) / (end - start);
    return from + (to - from) * ease(local);
  };
}

// ── Timeline context ────────────────────────────────────────────────────────

const TimelineContext = React.createContext({
  time: 0,
  duration: 10,
  playing: false
});
const useTime = () => React.useContext(TimelineContext).time;
const useTimeline = () => React.useContext(TimelineContext);

// ── Sprite ──────────────────────────────────────────────────────────────────
// Renders children only when the playhead is inside [start, end]. Provides
// a sub-context with `localTime` (seconds since start) and `progress` (0..1).
//
//   <Sprite start={2} end={5}>
//     {({ localTime, progress }) => <Thing x={progress * 100} />}
//   </Sprite>
//
// Or as a plain wrapper — children can call useSprite() themselves.

const SpriteContext = React.createContext({
  localTime: 0,
  progress: 0,
  duration: 0
});
const useSprite = () => React.useContext(SpriteContext);
function Sprite({
  start = 0,
  end = Infinity,
  children,
  keepMounted = false
}) {
  const {
    time
  } = useTimeline();
  const visible = time >= start && time <= end;
  if (!visible && !keepMounted) return null;
  const duration = end - start;
  const localTime = Math.max(0, time - start);
  const progress = duration > 0 && isFinite(duration) ? clamp(localTime / duration, 0, 1) : 0;
  const value = {
    localTime,
    progress,
    duration,
    visible
  };
  return /*#__PURE__*/React.createElement(SpriteContext.Provider, {
    value: value
  }, typeof children === 'function' ? children(value) : children);
}

// ── Sample sprite components ────────────────────────────────────────────────

// TextSprite: fades/slides text in on entry, holds, then fades out on exit.
// Props: text, x, y, size, color, font, entryDur, exitDur, align
function TextSprite({
  text,
  x = 0,
  y = 0,
  size = 48,
  color = '#111',
  font = 'Inter, system-ui, sans-serif',
  weight = 600,
  entryDur = 0.45,
  exitDur = 0.35,
  entryEase = Easing.easeOutBack,
  exitEase = Easing.easeInCubic,
  align = 'left',
  letterSpacing = '-0.01em'
}) {
  const {
    localTime,
    duration
  } = useSprite();
  const exitStart = Math.max(0, duration - exitDur);
  let opacity = 1;
  let ty = 0;
  if (localTime < entryDur) {
    const t = entryEase(clamp(localTime / entryDur, 0, 1));
    opacity = t;
    ty = (1 - t) * 16;
  } else if (localTime > exitStart) {
    const t = exitEase(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
    ty = -t * 8;
  }
  const translateX = align === 'center' ? '-50%' : align === 'right' ? '-100%' : '0';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: x,
      top: y,
      transform: `translate(${translateX}, ${ty}px)`,
      opacity,
      fontFamily: font,
      fontSize: size,
      fontWeight: weight,
      color,
      letterSpacing,
      whiteSpace: 'pre',
      lineHeight: 1.1,
      willChange: 'transform, opacity'
    }
  }, text);
}

// ImageSprite: scales + fades in; optional Ken Burns drift during hold.
function ImageSprite({
  src,
  x = 0,
  y = 0,
  width = 400,
  height = 300,
  entryDur = 0.6,
  exitDur = 0.4,
  kenBurns = false,
  kenBurnsScale = 1.08,
  radius = 12,
  fit = 'cover',
  placeholder = null // {label: string} for striped placeholder
}) {
  const {
    localTime,
    duration
  } = useSprite();
  const exitStart = Math.max(0, duration - exitDur);
  let opacity = 1;
  let scale = 1;
  if (localTime < entryDur) {
    const t = Easing.easeOutCubic(clamp(localTime / entryDur, 0, 1));
    opacity = t;
    scale = 0.96 + 0.04 * t;
  } else if (localTime > exitStart) {
    const t = Easing.easeInCubic(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
    scale = (kenBurns ? kenBurnsScale : 1) + 0.02 * t;
  } else if (kenBurns) {
    const holdSpan = exitStart - entryDur;
    const holdT = holdSpan > 0 ? (localTime - entryDur) / holdSpan : 0;
    scale = 1 + (kenBurnsScale - 1) * holdT;
  }
  const content = placeholder ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'repeating-linear-gradient(135deg, #e9e6df 0 10px, #dcd8cf 10px 20px)',
      color: '#6b6458',
      fontFamily: 'JetBrains Mono, ui-monospace, monospace',
      fontSize: 13,
      letterSpacing: '0.04em',
      textTransform: 'uppercase'
    }
  }, placeholder.label || 'image') : /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: fit,
      display: 'block'
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width,
      height,
      opacity,
      transform: `scale(${scale})`,
      transformOrigin: 'center',
      borderRadius: radius,
      overflow: 'hidden',
      willChange: 'transform, opacity'
    }
  }, content);
}

// RectSprite: simple rectangle that animates position/size/color via props.
// Useful demo primitive — takes a `render` fn for per-frame customization.
function RectSprite({
  x = 0,
  y = 0,
  width = 100,
  height = 100,
  color = '#111',
  radius = 8,
  entryDur = 0.4,
  exitDur = 0.3,
  render // optional: (ctx) => style overrides
}) {
  const spriteCtx = useSprite();
  const {
    localTime,
    duration
  } = spriteCtx;
  const exitStart = Math.max(0, duration - exitDur);
  let opacity = 1;
  let scale = 1;
  if (localTime < entryDur) {
    const t = Easing.easeOutBack(clamp(localTime / entryDur, 0, 1));
    opacity = clamp(localTime / entryDur, 0, 1);
    scale = 0.4 + 0.6 * t;
  } else if (localTime > exitStart) {
    const t = Easing.easeInQuad(clamp((localTime - exitStart) / exitDur, 0, 1));
    opacity = 1 - t;
    scale = 1 - 0.15 * t;
  }
  const overrides = render ? render(spriteCtx) : {};
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: x,
      top: y,
      width,
      height,
      background: color,
      borderRadius: radius,
      opacity,
      transform: `scale(${scale})`,
      transformOrigin: 'center',
      willChange: 'transform, opacity',
      ...overrides
    }
  });
}

// ── Font inlining ───────────────────────────────────────────────────────────
// Copy every @font-face rule from the page into a <style> inside the svg's
// foreignObject, with font URLs rewritten to data: URLs. Makes the svg
// self-describing so serializing it alone (video export fast path) still
// renders with the right fonts. Sets data-om-fonts-inlined on the svg when
// done so the exporter can wait for it.

function useInlineFontsInto(svgRef) {
  React.useEffect(() => {
    const svg = svgRef.current;
    const host = svg && svg.querySelector('foreignObject > div');
    if (!svg || !host) return;
    let cancelled = false;
    (async () => {
      const rules = [];
      for (const ss of document.styleSheets) {
        let cssRules;
        try {
          cssRules = ss.cssRules;
        } catch {
          // Cross-origin sheet without crossorigin attr (e.g. the standard
          // fonts.googleapis.com <link>) — fetch the CSS text directly and
          // regex-extract the @font-face blocks.
          if (ss.href) {
            try {
              const txt = await fetch(ss.href).then(r => {
                if (!r.ok) throw 0;
                return r.text();
              });
              for (const ff of txt.match(/@font-face\s*{[^}]*}/g) || []) rules.push({
                css: ff,
                base: ss.href
              });
            } catch {}
          }
          continue;
        }
        if (!cssRules) continue;
        for (const r of cssRules) {
          if (r.type === CSSRule.FONT_FACE_RULE) {
            rules.push({
              css: r.cssText,
              base: ss.href || location.href
            });
          }
        }
      }
      const toDataURL = url => fetch(url).then(r => {
        if (!r.ok) throw 0;
        return r.blob();
      }).then(b => new Promise(res => {
        const fr = new FileReader();
        fr.onload = () => res(fr.result);
        fr.onerror = () => res(url);
        fr.readAsDataURL(b);
      })).catch(() => url);
      const parts = await Promise.all(rules.map(async ({
        css,
        base
      }) => {
        const re = /url\((['"]?)([^'")]+)\1\)/g;
        let out = css,
          m;
        while (m = re.exec(css)) {
          const u = m[2];
          if (u.startsWith('data:')) continue;
          let abs;
          try {
            abs = new URL(u, base).href;
          } catch {
            continue;
          }
          out = out.split(m[0]).join(`url("${await toDataURL(abs)}")`);
        }
        return out;
      }));
      if (cancelled || !parts.length) {
        svg.setAttribute('data-om-fonts-inlined', 'true');
        return;
      }
      const style = document.createElement('style');
      style.textContent = parts.join('\n');
      host.insertBefore(style, host.firstChild);
      svg.setAttribute('data-om-fonts-inlined', 'true');
    })();
    return () => {
      cancelled = true;
    };
  }, []);
}
function Stage({
  width = 1280,
  height = 720,
  duration = 10,
  background = '#f6f4ef',
  fps = 60,
  loop = true,
  autoplay = true,
  // Parsed playback object ({mode:'loop'} | {mode:'times',count:N}) or
  // null. When present it overrides the legacy loop prop — SceneStage
  // passes the validated value from the OM_PLAYBACK authoring contract.
  playback = null,
  persistKey = 'animstage',
  children
}) {
  // Props arrive as strings when Stage is mounted via <x-import> (DC
  // projects) — coerce so style={{width}} gets a number React can px-ify.
  width = +width || 1280;
  height = +height || 720;
  duration = +duration || 10;
  fps = +fps || 60;
  if (typeof loop === 'string') loop = loop !== 'false';
  if (typeof autoplay === 'string') autoplay = autoplay !== 'false';
  const playTimes = playback && playback.mode === 'times' ? playback.count : null;
  const loopEff = playback ? playback.mode === 'loop' : loop;
  const [time, setTime] = React.useState(() => {
    try {
      const v = parseFloat(localStorage.getItem(persistKey + ':t') || '0');
      return isFinite(v) ? clamp(v, 0, duration) : 0;
    } catch {
      return 0;
    }
  });
  const [playing, setPlaying] = React.useState(autoplay);
  // The external-playback latch: true while the HOST play bar is driving
  // time forward as genuine continuous playback (its play-loop seeks
  // carry detail.playing === true). The engine's own clock stays paused
  // the whole time — exactly one clock ever drives — so this is a
  // separate bit, not a second meaning for `playing`. Set and cleared
  // in the seek handler below; decays via SS_EXT_PLAY_MS when the
  // marked stream stops without a parting unmarked seek.
  const [extPlay, setExtPlay] = React.useState(false);
  const extPlayTimerRef = React.useRef(null);
  const [hoverTime, setHoverTime] = React.useState(null);
  const [scale, setScale] = React.useState(1);
  const stageRef = React.useRef(null);
  const canvasRef = React.useRef(null);
  const rafRef = React.useRef(null);
  const lastTsRef = React.useRef(null);

  // Persist playhead
  React.useEffect(() => {
    try {
      localStorage.setItem(persistKey + ':t', String(time));
    } catch {}
  }, [time, persistKey]);

  // Auto-scale to fit viewport
  React.useEffect(() => {
    if (!stageRef.current) return;
    const el = stageRef.current;
    const measure = () => {
      const barH = 44; // playback bar height
      const s = Math.min(el.clientWidth / width, (el.clientHeight - barH) / height);
      setScale(Math.max(0.05, s));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener('resize', measure);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', measure);
    };
  }, [width, height]);

  // Passes completed since playback last started. Lives in a ref so the
  // per-frame wrap can count without re-running this effect; reset on
  // every (re)start so a fresh play (or a host restart) gets the full
  // run count again.
  const passesRef = React.useRef(0);

  // Animation loop
  React.useEffect(() => {
    if (!playing) {
      lastTsRef.current = null;
      return;
    }
    passesRef.current = 0;
    const step = ts => {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;
      setTime(t => {
        let next = t + dt;
        if (next >= duration) {
          if (playTimes !== null) {
            // Play N times then hold the last frame — the partial pass a
            // mid-timeline start produces counts as a pass, so the piece
            // never runs longer than N full durations.
            passesRef.current += 1;
            if (passesRef.current >= playTimes) {
              next = duration;
              setPlaying(false);
            } else {
              next = next % duration;
            }
          } else if (loopEff) {
            next = next % duration;
          } else {
            next = duration;
            setPlaying(false);
          }
        }
        return next;
      });
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastTsRef.current = null;
    };
  }, [playing, duration, loopEff, playTimes]);

  // Keyboard: space = play/pause, ← → = seek
  React.useEffect(() => {
    const onKey = e => {
      if (e.target && (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA')) return;
      if (e.code === 'Space') {
        e.preventDefault();
        setPlaying(p => !p);
      } else if (e.code === 'ArrowLeft') {
        setTime(t => clamp(t - (e.shiftKey ? 1 : 0.1), 0, duration));
      } else if (e.code === 'ArrowRight') {
        setTime(t => clamp(t + (e.shiftKey ? 1 : 0.1), 0, duration));
      } else if (e.key === '0' || e.code === 'Home') {
        setTime(0);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [duration]);

  // Video-export protocol + the editor's play bar: hosts dispatch this
  // event per frame; pause + sync the playhead so the frame shows exactly
  // that timestamp. The host play bar marks its play-loop seeks with
  // detail.playing === true — the mark latches extPlay (playback is
  // playback even when a host clock drives it), while ANY unmarked seek
  // (scrub, step, export frame, the transport's pause park) clears the
  // latch in the same commit it retimes, so a seeked frame still renders
  // exactly one scene's state. The engine's own clock pauses either way.
  React.useEffect(() => {
    const el = canvasRef.current;
    if (!el) return;
    // Sync-seek capability: a dispatcher that marks its seek with
    // detail.sync === true gets the commit applied via ReactDOM.flushSync,
    // so the stage DOM reflects the seeked frame the moment dispatchEvent
    // returns. The video exporter keys off the data-om-sync-seek
    // advertisement to drop its two-display-refresh settle (that wait only
    // exists to let React's async commit land — serialization needs the
    // committed DOM, not the paint). Feature-detected: a runtime without
    // ReactDOM.flushSync never advertises and every seek takes the async
    // path. Unmarked seeks (scrubs, the host play bar) stay async — a
    // forced sync render per pointermove would tax the editor for no one.
    const canSyncSeek = typeof ReactDOM !== 'undefined' && typeof ReactDOM.flushSync === 'function';
    const onSeek = e => {
      const apply = () => {
        setPlaying(false);
        const hostPlay = !!(e.detail && e.detail.playing === true);
        if (extPlayTimerRef.current) {
          clearTimeout(extPlayTimerRef.current);
          extPlayTimerRef.current = null;
        }
        if (hostPlay) {
          // Watchdog: the latch is only as alive as its seek stream. If the
          // host stops without a parting seek (tab jank, bar unmount), the
          // latch decays on its own — and the expiry setState is itself the
          // render that lets SceneSwitch drop an open window, so expiry can
          // never strand a frozen two-layer frame.
          extPlayTimerRef.current = setTimeout(() => {
            extPlayTimerRef.current = null;
            setExtPlay(false);
          }, SS_EXT_PLAY_MS);
        }
        setExtPlay(hostPlay);
        setTime(clamp(e.detail.time, 0, duration));
      };
      // flushSync is safe here: a native DOM listener runs outside React's
      // lifecycle, and the exporter's dispatchEvent is synchronous, so the
      // commit lands in the same JS task — the engine's own rAF loop can
      // never interleave between seek and serialize.
      if (canSyncSeek && e.detail && e.detail.sync === true) {
        ReactDOM.flushSync(apply);
      } else {
        apply();
      }
    };
    el.addEventListener('data-om-seek-to-time-frame', onSeek);
    if (canSyncSeek) el.setAttribute('data-om-sync-seek', 'true');
    return () => {
      el.removeEventListener('data-om-seek-to-time-frame', onSeek);
      el.removeAttribute('data-om-sync-seek');
      if (extPlayTimerRef.current) {
        clearTimeout(extPlayTimerRef.current);
        extPlayTimerRef.current = null;
      }
      // Drop the latch too: this cleanup runs on every duration change
      // (an agent edit can retime mid-host-play, no gesture involved) and
      // the new effect instance arms no watchdog — clearing only the
      // timer could strand extPlay true forever if the marked stream died
      // in the gap. Fail toward cut: the next marked seek re-latches.
      setExtPlay(false);
    };
  }, [duration]);

  // Inline @font-face rules into the svg's foreignObject so the svg is
  // self-describing — serializing it alone (for video export) then renders
  // with the right fonts. Sets data-om-fonts-inlined once done.
  useInlineFontsInto(canvasRef);
  const displayTime = hoverTime != null ? hoverTime : time;
  const ctxValue = React.useMemo(
  // extPlaying is ADDITIVE: "time is advancing under an external
  // driver's continuous playback". `playing` keeps meaning the
  // engine's OWN clock — the hidden PlaybackBar glyph (and through it
  // the host's clock-reporter/adoption channel) reads that — and
  // SceneSwitch is the one consumer that widens to either.
  () => ({
    time: displayTime,
    duration,
    playing,
    extPlaying: extPlay,
    setTime,
    setPlaying
  }), [displayTime, duration, playing, extPlay]);
  return (
    /*#__PURE__*/
    // data-om-starter: inert presence marker — Claude Design's starter-usage
    // probe reads it; it renders nothing. Keep it on this root element.
    React.createElement("div", {
      ref: stageRef,
      "data-om-starter": "animations-v2",
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#0a0a0a',
        fontFamily: 'Inter, system-ui, sans-serif'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        minHeight: 0
      }
    }, /*#__PURE__*/React.createElement("svg", {
      ref: canvasRef,
      width: width,
      height: height,
      "data-om-exportable-video-with-duration-secs": duration,
      style: {
        transform: `scale(${scale})`,
        transformOrigin: 'center',
        flexShrink: 0,
        boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        display: 'block'
      }
    }, /*#__PURE__*/React.createElement("foreignObject", {
      x: "0",
      y: "0",
      width: "100%",
      height: "100%"
    }, /*#__PURE__*/React.createElement("div", {
      xmlns: "http://www.w3.org/1999/xhtml",
      style: {
        width,
        height,
        background,
        position: 'relative',
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement(TimelineContext.Provider, {
      value: ctxValue
    }, children))))), /*#__PURE__*/React.createElement(PlaybackBar, {
      time: displayTime,
      actualTime: time,
      duration: duration,
      playing: playing,
      onPlayPause: () => setPlaying(p => !p),
      onReset: () => {
        setTime(0);
      },
      onSeek: t => setTime(t),
      onHover: t => setHoverTime(t)
    }))
  );
}

// ── Playback bar ────────────────────────────────────────────────────────────
// Play/pause, return-to-begin, scrub track, time display.
// Uses fixed-width time fields so layout doesn't thrash.

function PlaybackBar({
  time,
  duration,
  playing,
  onPlayPause,
  onReset,
  onSeek,
  onHover
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  const timeFromEvent = React.useCallback(e => {
    const rect = trackRef.current.getBoundingClientRect();
    const x = clamp((e.clientX - rect.left) / rect.width, 0, 1);
    return x * duration;
  }, [duration]);
  const onTrackMove = e => {
    if (!trackRef.current) return;
    const t = timeFromEvent(e);
    if (dragging) {
      onSeek(t);
    } else {
      onHover(t);
    }
  };
  const onTrackLeave = () => {
    if (!dragging) onHover(null);
  };
  const onTrackDown = e => {
    setDragging(true);
    const t = timeFromEvent(e);
    onSeek(t);
    onHover(null);
  };
  React.useEffect(() => {
    if (!dragging) return;
    const onUp = () => setDragging(false);
    const onMove = e => {
      if (!trackRef.current) return;
      const t = timeFromEvent(e);
      onSeek(t);
    };
    window.addEventListener('mouseup', onUp);
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('mousemove', onMove);
    };
  }, [dragging, timeFromEvent, onSeek]);
  const pct = duration > 0 ? time / duration * 100 : 0;
  const fmt = t => {
    const total = Math.max(0, t);
    const m = Math.floor(total / 60);
    const s = Math.floor(total % 60);
    const cs = Math.floor(total * 100 % 100);
    return `${String(m).padStart(1, '0')}:${String(s).padStart(2, '0')}.${String(cs).padStart(2, '0')}`;
  };
  const mono = 'JetBrains Mono, ui-monospace, SFMono-Regular, monospace';
  return /*#__PURE__*/React.createElement("div", {
    "data-omelette-chrome": true,
    style: {
      // Slimmed to visually match the host editor bar's basic row (the
      // single-scrubber look): transport first, tighter metrics, quieter
      // chrome. Shown only outside the app — the host bar suppresses this
      // whenever it is present.
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 12px',
      background: 'rgba(20,20,20,0.92)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      width: '100%',
      maxWidth: 680,
      alignSelf: 'center',
      borderRadius: 6,
      color: '#f6f4ef',
      fontFamily: 'Inter, system-ui, sans-serif',
      userSelect: 'none',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    onClick: onPlayPause,
    title: "Play/pause (space)"
  }, playing ? /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "3",
    y: "2",
    width: "3",
    height: "10",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "8",
    y: "2",
    width: "3",
    height: "10",
    fill: "currentColor"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 2l9 5-9 5V2z",
    fill: "currentColor"
  }))), /*#__PURE__*/React.createElement(IconButton, {
    onClick: onReset,
    title: "Return to start (0)"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3 2v10M12 2L5 7l7 5V2z",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinejoin: "round",
    strokeLinecap: "round"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 12,
      fontVariantNumeric: 'tabular-nums',
      width: 64,
      textAlign: 'right',
      color: '#f6f4ef'
    }
  }, fmt(time)), /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    onMouseMove: onTrackMove,
    onMouseLeave: onTrackLeave,
    onMouseDown: onTrackDown,
    style: {
      flex: 1,
      height: 22,
      position: 'relative',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 4,
      background: 'rgba(255,255,255,0.12)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      width: `${pct}%`,
      height: 4,
      background: 'oklch(72% 0.12 250)',
      borderRadius: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `${pct}%`,
      top: '50%',
      width: 12,
      height: 12,
      marginLeft: -6,
      marginTop: -6,
      background: '#fff',
      borderRadius: 6,
      boxShadow: '0 2px 4px rgba(0,0,0,0.4)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: mono,
      fontSize: 12,
      fontVariantNumeric: 'tabular-nums',
      width: 64,
      textAlign: 'left',
      color: 'rgba(246,244,239,0.55)'
    }
  }, fmt(duration)), typeof VideoEncoder !== 'undefined' && /*#__PURE__*/React.createElement(IconButton, {
    title: "Export video",
    onClick: () => window.parent.postMessage({
      type: 'omelette:request-video-export'
    }, '*')
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 14 14",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 2v7m0 0L4 6m3 3l3-3M2 12h10",
    stroke: "currentColor",
    strokeWidth: "1.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))));
}
function IconButton({
  children,
  onClick,
  title
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    title: title,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: 24,
      height: 24,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: hover ? 'rgba(255,255,255,0.12)' : 'rgba(255,255,255,0.04)',
      border: '1px solid rgba(255,255,255,0.1)',
      borderRadius: 5,
      color: '#f6f4ef',
      cursor: 'pointer',
      padding: 0,
      transition: 'background 120ms'
    }
  }, children);
}

// ── VideoSprite ─────────────────────────────────────────────────────────────
// Renders a <video> that loops within [start,end] of its source at `speed`,
// kept in sync with the Stage's playhead. Carries the
// data-om-exportable-video-play-* attrs so video export can mix its audio.
//
//   <VideoSprite src="clip.mp4" start={2} end={5} speed={1}
//     style={{ width: 640, height: 360 }} />

function VideoSprite({
  src,
  start = 0,
  end,
  speed = 1,
  style,
  ...rest
}) {
  start = +start || 0;
  speed = +speed || 1;
  if (end != null) end = +end || undefined;
  const t = useTime();
  const ref = React.useRef(null);
  const span = Math.max(0.001, (end ?? start + 1) - start);
  React.useEffect(() => {
    const v = ref.current;
    if (!v || v.readyState < 1) return;
    const target = start + t * speed % span;
    if (Math.abs(v.currentTime - target) > 0.05) v.currentTime = target;
  }, [t, start, span, speed]);
  return /*#__PURE__*/React.createElement("video", _extends({
    ref: ref,
    src: src,
    muted: true,
    playsInline: true,
    preload: "auto",
    "data-om-exportable-video-play-start": start,
    "data-om-exportable-video-play-end": end ?? start + span,
    "data-om-exportable-video-play-speed": speed,
    style: {
      display: 'block',
      objectFit: 'cover',
      ...style
    }
  }, rest));
}
Object.assign(window, {
  Easing,
  interpolate,
  animate,
  clamp,
  TimelineContext,
  useTime,
  useTimeline,
  Sprite,
  SpriteContext,
  useSprite,
  TextSprite,
  ImageSprite,
  RectSprite,
  VideoSprite,
  Stage,
  PlaybackBar
});

// ── Scene sequencing ─────────────────────────────────────────────────────
// Guest-side validation of a scene list (the engine's own inputs: the
// authored prop, and host-dispatched updates). Mirrors the host parser's
// shape rules and constants — keep in sync with parseTimelineScenes in
// apps/web/src/shared/timeline.ts (16KB raw cap, 50 entries, dur finite in
// (0, 300]); returns null on any violation.
function ssParse(raw) {
  if (typeof raw !== 'string' || !raw || raw.length > 16 * 1024) return null;
  var parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    return null;
  }
  if (!Array.isArray(parsed) || parsed.length === 0 || parsed.length > 50) return null;
  for (var i = 0; i < parsed.length; i++) {
    var s = parsed[i];
    if (typeof s !== 'object' || s === null) return null;
    if (typeof s.name !== 'string' || typeof s.dur !== 'number') return null;
    if (!isFinite(s.dur) || s.dur <= 0 || s.dur > 300) return null;
  }
  return parsed;
}

// Guest-side validation of the playback value — mirrors the host parser
// (shared/timeline.ts parseTimelinePlayback): {"mode":"loop"} or
// {"mode":"times","count":1..99}, strict all-or-nothing, null otherwise.
// Callers treat null as the loop default.
function ppParse(raw) {
  if (typeof raw !== 'string' || !raw || raw.length > 256) return null;
  var parsed;
  try {
    parsed = JSON.parse(raw);
  } catch (e) {
    return null;
  }
  if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) return null;
  var keys = Object.keys(parsed);
  if (parsed.mode === 'loop') return keys.length === 1 ? {
    mode: 'loop'
  } : null;
  if (parsed.mode === 'times') {
    if (keys.length !== 2) return null;
    var c = parsed.count;
    if (typeof c !== 'number' || c !== Math.floor(c) || c < 1 || c > 99) return null;
    return {
      mode: 'times',
      count: c
    };
  }
  return null;
}

// Stamps the playback attribute VERBATIM from the authored raw string (the
// host's write-back anchors on that exact value) and listens for the
// host's post-write update event. Same shape as SceneSync; only rendered
// when the document authors a playback literal — an absent contract means
// the attribute stays absent and the document plays its default.
function PlaybackSync(props) {
  var ref = React.useRef(null);
  var raw = props.raw;
  var onUpdate = props.onUpdate;
  React.useEffect(function () {
    var el = ref.current;
    if (!el) return;
    var root = el.closest('[data-om-exportable-video-with-duration-secs]');
    if (!root) return;
    root.setAttribute('data-om-timeline-playback', raw);
    var onEvent = function (e) {
      var next = e && e.detail;
      if (ppParse(next)) onUpdate(next);
    };
    root.addEventListener('data-om-timeline-playback-update', onEvent);
    return function () {
      root.removeEventListener('data-om-timeline-playback-update', onEvent);
      root.removeAttribute('data-om-timeline-playback');
    };
  }, [raw, onUpdate]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'none'
    }
  });
}
var SceneContext = React.createContext(null);
function useScene() {
  return React.useContext(SceneContext);
}

// Renders inside the Stage (so it can reach the exportable root via
// closest()): stamps the scenes attribute VERBATIM from the current raw
// string — the host's write-back anchors on that exact value — and listens
// for the host's post-write update event.
function SceneSync(props) {
  var ref = React.useRef(null);
  var raw = props.raw;
  var onUpdate = props.onUpdate;
  React.useEffect(function () {
    var el = ref.current;
    if (!el) return;
    var root = el.closest('[data-om-exportable-video-with-duration-secs]');
    if (!root) return;
    root.setAttribute('data-om-timeline-scenes', raw);
    var onEvent = function (e) {
      var next = e && e.detail;
      // Ignore anything that doesn't validate — a bad update must not tear
      // down a working composition.
      if (ssParse(next)) onUpdate(next);
    };
    root.addEventListener('data-om-timeline-scenes-update', onEvent);
    return function () {
      root.removeEventListener('data-om-timeline-scenes-update', onEvent);
      root.removeAttribute('data-om-timeline-scenes');
    };
  }, [raw, onUpdate]);
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    style: {
      display: 'none'
    }
  });
}

// ── Scene transitions ────────────────────────────────────────────────────
// A boundary tick only counts as "natural playback" when the playhead
// advanced by at most this many seconds. The guard keeps scrubs and long
// jumps (which move time arbitrarily) from reading as playback, and it is
// deliberately loose: half a second admits playback down to 2fps, because
// a false negative silently disables overlap on exactly the heavy scenes
// it serves, while a false positive (a slow forward drag while playing)
// costs two cosmetic frames.
var SS_MAX_TICK = 0.5;
// How many engine ticks the outgoing scene stays mounted under
// transition="overlap": the boundary commit plus one more frame.
var SS_OVERLAP_TICKS = 2;
// Wall-clock ceiling on a window, backstopping the tick budget: ticks are
// only spent by renders, and a pinned clock (the PlaybackBar's hover
// preview holds displayTime still even while playing) stops producing
// them — without this ceiling, both layers could persist for as long as
// the mouse rests on the scrub track. 500ms keeps the tick budget intact
// for playback down to ~4fps; the nudge effect in SceneSwitch guarantees
// a render arrives to enforce it even when the clock is pinned.
var SS_OVERLAP_MAX_MS = 500;
// How long a marked (detail.playing === true) host seek keeps the
// external-playback latch alive with no successor. The host play bar's
// seek pump is one-in-flight/latest-wins, so its inter-seek gap is tens
// of milliseconds in the worst case — 400ms is far above that, and it
// sits below SS_OVERLAP_MAX_MS so a stream that dies mid-window decays
// the latch (and with it the window) no later than the window's own
// wall-clock ceiling would have closed it.
var SS_EXT_PLAY_MS = 400;

// True only for a boundary crossed by what reads as natural forward
// playback: the engine advancing one tick from scene i into scene i+1, or
// wrapping last→first under loop. Export seeks can never pass — the
// export protocol pauses before it retimes, and arming requires playing —
// and neither can paused scrubs or arrow-steps, host scene-edit events
// (dt === 0), or long jumps. A forward drag or arrow-step WHILE PLAYING
// that lands just past a boundary does pass — it is indistinguishable
// from a playback tick by design — and costs a bounded, cosmetic
// two-frame window.
function ssNaturalAdvance(last, idx, t, count, total, playing, loopOn) {
  if (!playing || count < 2) return false;
  if (idx === last.idx + 1) {
    var dt = t - last.t;
    return dt > 0 && dt <= SS_MAX_TICK;
  }
  if (last.idx === count - 1 && idx === 0 && loopOn && t > 0) {
    // Without loop the engine never wraps (it clamps and pauses at the
    // end), so a wrap-shaped pair can only be a user gesture — a cut. And
    // the transport's reset gestures (return-to-start, Home, '0') land on
    // exactly t = 0 without pausing, while a genuine modulo wrap is almost
    // surely fractional — t > 0 rejects resets, and the cheap failure mode
    // is one skipped cosmetic overlap at the seam.
    var dtWrap = t + total - last.t;
    // Two layered defenses against a fake wrap after a mid-play trim
    // shrinks the total. When the wrap happens on the rAF loop's dt=0
    // re-priming tick (the engine path), t is exactly last.t % total, so
    // dtWrap is exactly 0 in IEEE arithmetic and the > 0 test rejects it.
    // When the clock is PINNED instead (the PlaybackBar hover preview sets
    // the displayed time directly, no re-priming tick), dtWrap can land
    // positive while t sits deep inside scene 0 — the t <= one-tick guard
    // is what rejects that path.
    return dtWrap > 0 && dtWrap <= SS_MAX_TICK && t <= SS_MAX_TICK;
  }
  return false;
}

// A scene's inner tree: the scene component under its two context
// providers. The nested TimelineContext.Provider exists in EVERY layer,
// not just frozen ones, for two reasons. Context propagation bypasses
// React's identical-element bailout, so a frozen layer needs a provider
// whose value has stopped changing — without one, Sprite/VideoSprite
// inside the frozen scene would keep reading the live clock through the
// outer provider, see time run past their spans, and blank out (or
// re-seek a video) mid-overlap. And the tree at a layer's keyed position
// must never change shape between roles: a current→previous type change
// would remount the subtree, the very thing the scene key exists to
// prevent. For the current layer the provider re-provides the live value
// unchanged, which is invisible to consumers.
function ssSceneInner(scenes, idx, wallTime, total, map, timelineValue) {
  var scene = scenes[idx];
  // TIME-STRETCH: when the entry carries "nat" (its natural/authored
  // duration — the host timeline stamps it on the first trim), the user's
  // dur edits retime the choreography rather than cutting it: localTime
  // runs 0..nat over dur wall-seconds, so compressing a scene plays the
  // SAME motion faster and stretching slows it. progress is unchanged
  // either way (localTime/nat === wallTime/dur). No nat → factor 1.
  var nat = typeof scene.nat === 'number' && isFinite(scene.nat) && scene.nat > 0 ? scene.nat : scene.dur;
  var stretch = scene.dur > 0 ? nat / scene.dur : 1;
  var localTime = wallTime * stretch;
  var ctx = {
    scene: scene,
    localTime: localTime,
    progress: nat > 0 ? localTime / nat : 0,
    dur: nat,
    index: idx,
    count: scenes.length,
    total: total
  };
  // Own-property lookup: a scene named "constructor" or "toString" must hit
  // the unmapped-scene diagnostic, not a prototype-chain member.
  var Comp = Object.prototype.hasOwnProperty.call(map, scene.name) ? map[scene.name] : null;
  return /*#__PURE__*/React.createElement(TimelineContext.Provider, {
    value: timelineValue
  }, /*#__PURE__*/React.createElement(SceneContext.Provider, {
    value: ctx
  }, Comp ? /*#__PURE__*/React.createElement(Comp, ctx) :
  /*#__PURE__*/
  // An unmapped name renders a quiet diagnostic instead of a dead
  // frame — the mismatch is an authoring bug worth seeing.
  React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'rgba(255,255,255,0.25)',
      font: '500 18px Inter, system-ui, sans-serif'
    }
  }, "unmapped scene: ", scene.name)));
}

// One scene layer: the positioned wrapper that gives a scene its stable
// keyed identity (the scene's index in the authored list) and its role
// styling. The SAME entry keeps its DOM when its role changes (current →
// previous under "overlap" — no unmount/remount, so CSS transitions and
// <video>/<canvas> state survive), while DIFFERENT entries never share
// DOM, even when two adjacent scenes map to the same component type.
// zIndex is set only while an overlap window is active (frozen beneath,
// current above); outside a window the wrapper adds no stacking context.
function ssSceneLayer(idx, z, frozen, inner) {
  return /*#__PURE__*/React.createElement("div", {
    key: idx,
    "data-om-scene-layer": idx,
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: z,
      pointerEvents: frozen ? 'none' : undefined
    }
  }, inner);
}

// The active-scene selector. Lives INSIDE Stage so useTime sees the
// timeline context. Renders the current scene's layer — plus, under
// transition="overlap" and only across a naturally-played boundary, the
// outgoing scene's layer beneath it for SS_OVERLAP_TICKS engine ticks.
// The outgoing scene is frozen EXACTLY as last rendered: its stored inner
// element is reused by reference, so the underlay is the frame that was
// just on screen (no synthesized end state), React bails out of the
// identical element (the inactive scene does zero per-frame work), and
// its clock — both contexts — stays pinned at the pre-boundary values.
// The scene's own internal state updates still render: the clock is
// frozen, the subtree isn't dead.
function SceneSwitch(props) {
  var scenes = props.scenes;
  var map = props.map || {};
  var overlapMode = props.transition === 'overlap';
  var timeline = useTimeline();
  var t = timeline.time;
  // Playback is playback whichever clock drives it: the engine's own rAF
  // loop (timeline.playing) or the host play bar's marked seek stream
  // (timeline.extPlaying). Nothing that must stay a cut sets either bit —
  // scrubs, steps, and export frames arrive without the playing mark (an
  // export seek may carry detail.sync, which changes WHEN the commit
  // happens, not what it commits), and clear extPlaying in the same
  // commit they retime — so the window invariant's "a paused render is a
  // SEEK frame" reading is unchanged.
  var playing = timeline.playing || timeline.extPlaying === true;
  var starts = [0];
  for (var i = 0; i < scenes.length; i++) starts.push(starts[i] + scenes[i].dur);
  var total = starts[starts.length - 1];
  // The playhead's scene; the t === total edge (export's last frame, a
  // scrub parked at the end) belongs to the last scene, not to nothing.
  var idx = scenes.length - 1;
  for (var j = 0; j < scenes.length; j++) {
    if (t < starts[j + 1]) {
      idx = j;
      break;
    }
  }
  var wallTime = Math.min(Math.max(t - starts[idx], 0), scenes[idx].dur);
  var inner = ssSceneInner(scenes, idx, wallTime, total, map, timeline);

  // Overlap bookkeeping. It lives in refs and mutates during render, which
  // is safe here because the mutating branches are gated on (t, idx)
  // differing from the previous render's values — a double-invoked render
  // re-runs them as a no-op. (A discarded concurrent render could advance
  // the refs for a frame that never commits; this engine drives time with
  // urgent setState from rAF, so renders aren't interleaved — and the
  // worst case is an overlap window skipped or cut short, never a wrong
  // seeked frame.)
  var lastRef = React.useRef(null); // {idx, t, inner} as of the previous render
  var overlayRef = React.useRef(null); // the active window; invariant below

  // THE OVERLAP WINDOW INVARIANT. A window may exist only while ALL hold:
  //   1. the transition mode is 'overlap';
  //   2. this render is playing — a paused render is a SEEK frame (the
  //      export protocol pauses in the same commit as it retimes), and a
  //      seeked frame must show exactly one scene's state;
  //   3. the current scene is still the one the window opened into
  //      (idx === toIdx);
  //   4. the scenes array is the same object the window opened under (a
  //      host scene edit mid-window invalidates the frozen layer);
  //   5. fewer than SS_OVERLAP_TICKS distinct engine ticks have rendered
  //      since the boundary.
  // The clause below drops the window the moment ANY of these fails, and
  // dropping is terminal: a new window takes a new natural boundary.
  if (overlapMode && lastRef.current) {
    var last = lastRef.current;
    if (last.idx !== idx) {
      // Boundary crossed since the previous render: open a window only for
      // a natural advance, freezing the outgoing scene's last-rendered
      // tree. Anything else (seek, jump, edit) is a cut and clears any
      // window already open.
      overlayRef.current = ssNaturalAdvance(last, idx, t, scenes.length, total, playing, props.loop === true) ? {
        fromIdx: last.idx,
        toIdx: idx,
        scenes: scenes,
        ticks: 0,
        bornAt: Date.now(),
        inner: last.inner
      } : null;
    } else if (overlayRef.current && last.t !== t) {
      overlayRef.current.ticks += 1;
    }
  }
  var ov = overlayRef.current;
  if (ov && (!overlapMode || !playing || idx !== ov.toIdx || scenes !== ov.scenes || ov.ticks >= SS_OVERLAP_TICKS || Date.now() - ov.bornAt > SS_OVERLAP_MAX_MS)) {
    overlayRef.current = ov = null;
  }
  lastRef.current = {
    idx: idx,
    t: t,
    inner: inner
  };

  // The nudge: while a window exists, guarantee a future render so the
  // checks above get a chance to run even if the clock pins (see
  // SS_OVERLAP_MAX_MS). On the normal path the window dies of its tick
  // budget first and the armed timeout is cleaned up without firing.
  var nudgeState = React.useState(0);
  var setNudge = nudgeState[1];
  React.useEffect(function () {
    if (!overlayRef.current) return undefined;
    var id = setTimeout(function () {
      setNudge(function (n) {
        return n + 1;
      });
    }, SS_OVERLAP_MAX_MS + 17);
    return function () {
      clearTimeout(id);
    };
  });
  if (!ov) return [ssSceneLayer(idx, undefined, false, inner)];
  return [ssSceneLayer(ov.fromIdx, 0, true, ov.inner), ssSceneLayer(idx, 1, false, inner)];
}
function SceneStage(props) {
  var width = +props.width || 1280;
  var height = +props.height || 720;
  var bg = props.bg || '#0b0b0e';
  var autoplay = props.autoplay == null ? true : String(props.autoplay) !== 'false';
  var loop = props.loop == null ? true : String(props.loop) !== 'false';
  // Anything other than the exact string 'overlap' means the default 'cut'
  // — a typo must degrade to today's behavior, never to a new one.
  var transition = props.transition === 'overlap' ? 'overlap' : 'cut';
  // The raw string is state: a host write (trim, speed, rename) arrives as
  // the scenes-update event and re-renders the whole composition from the
  // new value — durations AND the Stage duration — without a reload.
  var state = React.useState(props.scenes);
  var raw = state[0];
  var setRaw = state[1];
  var scenes = React.useMemo(function () {
    return ssParse(raw);
  }, [raw]);
  // Playback raw string is state for the same reason the scenes raw is:
  // a host write arrives as the update event and re-renders the engine
  // with the new mode, no reload. Invalid or absent degrades to the
  // legacy loop prop.
  var pstate = React.useState(props.playback);
  var praw = pstate[0];
  var setPraw = pstate[1];
  var pb = React.useMemo(function () {
    return ppParse(praw);
  }, [praw]);
  if (!scenes) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#0b0b0e',
        color: '#c96442',
        font: '500 16px Inter, system-ui, sans-serif',
        textAlign: 'center'
      }
    }, "animations-v2: the scenes prop isn't a valid JSON scene list", /*#__PURE__*/React.createElement("br", null), "(expected '[", '{', "\"name\":\"\u2026\",\"dur\":N", '}', ", \u2026]')");
  }
  var total = 0;
  for (var i = 0; i < scenes.length; i++) total += scenes[i].dur;
  total = Math.round(total * 1000) / 1000;
  // The loop-seam behavior (SceneSwitch's wrap overlap) follows the
  // EFFECTIVE mode: a run-N composition doesn't wrap on its final pass,
  // but its intermediate wraps cross the seam like any loop.
  var loopEff = pb ? pb.mode !== 'times' || pb.count > 1 : loop;
  var inner = /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(SceneSync, {
    raw: raw,
    onUpdate: setRaw
  }), typeof praw === 'string' && praw !== '' && /*#__PURE__*/React.createElement(PlaybackSync, {
    raw: praw,
    onUpdate: setPraw
  }), /*#__PURE__*/React.createElement(SceneSwitch, {
    scenes: scenes,
    map: props.children,
    transition: transition,
    loop: loopEff
  }));
  return /*#__PURE__*/React.createElement(Stage, {
    width: width,
    height: height,
    duration: total,
    background: bg,
    autoplay: autoplay,
    loop: loop,
    playback: pb
  }, inner);
}
Object.assign(window, {
  SceneStage,
  useScene
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soul-pharmacy/animation/animations-v2.jsx", error: String((e && e.message) || e) }); }

// ui_kits/soul-pharmacy/animation/scenes.jsx
try { (() => {
// scenes.jsx — 마음약국 · 말씀 처방전 인트로 영상 (9:16).
// 모든 모션은 useScene()의 progress/localTime에서 파생 (time-stretch 대응).
const {
  TextSprite,
  RectSprite,
  Easing,
  interpolate,
  useScene
} = window;
const OLIVE = "#5E7357",
  CORAL = "#DF7A5F",
  CORAL_SOFT = "#E9A184";
const PAPER = "#EFEEEB",
  CREAM = "#FBFAF8",
  INK = "#362E27",
  MUTED = "#8B7F70",
  RX = "#3E63A6";
const TITLE = "'Jua','Noto Sans KR',sans-serif";
const BODY = "'Pretendard','Noto Sans KR',sans-serif";
const VERSE = "'Gowun Batang','Noto Sans KR',serif";
const W = 720,
  H = 1280;

// 화면 전환이 매끈하도록: 각 씬은 배경 위에서 콘텐츠가 페이드 인(초반)·아웃(후반).
// → 모든 씬의 첫/마지막 프레임 = 배경만 (프레임 매치).
function veil(p, inEnd = 0.12, outStart = 0.9) {
  const i = interpolate(p, [0, inEnd], [0, 1], Easing.outCubic);
  const o = interpolate(p, [outStart, 1], [1, 0], Easing.inCubic);
  return Math.min(i, o);
}
const rise = (p, from = 26, inEnd = 0.14) => interpolate(p, [0, inEnd], [from, 0], Easing.outCubic);

// 약병 로고 (십자 + 하트)
function Bottle({
  size = 200,
  draw = 1,
  opacity = 1
}) {
  const dash = 520;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 128 128",
    fill: "none",
    style: {
      display: "block",
      opacity
    }
  }, /*#__PURE__*/React.createElement("g", {
    stroke: OLIVE,
    strokeWidth: "4",
    strokeLinejoin: "round",
    strokeLinecap: "round",
    fill: "none",
    strokeDasharray: dash,
    strokeDashoffset: (1 - draw) * dash
  }, /*#__PURE__*/React.createElement("rect", {
    x: "46",
    y: "18",
    width: "36",
    height: "16",
    rx: "6"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M52 34 v6 M76 34 v6"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "38",
    y: "40",
    width: "52",
    height: "70",
    rx: "18"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M64 62 v26 M51 75 h26",
    stroke: OLIVE,
    strokeWidth: "5.4",
    strokeLinecap: "round",
    style: {
      opacity: interpolate(draw, [0.6, 1], [0, 1])
    }
  }), /*#__PURE__*/React.createElement("path", {
    d: "M33 96 C25 90 24 81 30 77 C34 74 39 76 40 80 C41 76 46 74 50 77 C56 81 55 90 47 96 C43 99 40 100 40 100 C40 100 37 99 33 96 Z",
    fill: CORAL_SOFT,
    style: {
      opacity: interpolate(draw, [0.75, 1], [0, 1])
    }
  }));
}
const MOODS = [{
  k: "불안해요",
  c: "#B7D0C1"
}, {
  k: "무너졌어요",
  c: "#EFB6A3"
}, {
  k: "비교돼요",
  c: "#D0C2DE"
}, {
  k: "기다림",
  c: "#EAC983"
}, {
  k: "용서",
  c: "#EBB9BE"
}, {
  k: "멀게 느껴져요",
  c: "#B9CEE0"
}, {
  k: "버거워요",
  c: "#C3CB9E"
}, {
  k: "감사",
  c: "#E8CD86"
}];
const center = {
  position: "absolute",
  inset: 0,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center"
};

// ① Opening — 로고 드로잉 + 워드마크
function Opening() {
  const {
    progress: p
  } = useScene();
  const draw = interpolate(p, [0.05, 0.55], [0, 1], Easing.outCubic);
  const v = veil(p);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...center,
      opacity: v,
      transform: `translateY(${rise(p, 18)}px)`
    }
  }, /*#__PURE__*/React.createElement(Bottle, {
    size: 220,
    draw: draw
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: TITLE,
      fontSize: 68,
      color: INK,
      marginTop: 28,
      opacity: interpolate(p, [0.45, 0.7], [0, 1])
    }
  }, "\uB9C8\uC74C\uC57D\uAD6D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: BODY,
      fontSize: 26,
      letterSpacing: "0.32em",
      color: MUTED,
      marginTop: 14,
      paddingLeft: "0.32em",
      opacity: interpolate(p, [0.6, 0.82], [0, 1])
    }
  }, "\uC624\uB298\uC758 \uB9D0\uC500 \uCC98\uBC29\uC804"));
}

// ② Ask — 질문 + 봉투들이 순차 등장
function Ask() {
  const {
    progress: p
  } = useScene();
  const v = veil(p);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...center,
      opacity: v,
      padding: "0 60px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: TITLE,
      fontSize: 58,
      lineHeight: 1.4,
      color: INK,
      textAlign: "center",
      transform: `translateY(${rise(p, 24)}px)`
    }
  }, "\uC624\uB298 \uB9C8\uC74C\uC774", /*#__PURE__*/React.createElement("br", null), "\uC5B4\uB514\uAC00 \uC544\uD508\uAC00\uC694?"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: BODY,
      fontSize: 24,
      color: MUTED,
      marginTop: 20,
      opacity: interpolate(p, [0.2, 0.4], [0, 1])
    }
  }, "\uB9C8\uC74C\uC5D0 \uAC00\uAE4C\uC6B4 \uC99D\uC0C1\uC744 \uD558\uB098 \uACE8\uB77C\uC8FC\uC138\uC694"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18,
      marginTop: 54,
      width: "100%",
      maxWidth: 520
    }
  }, MOODS.map((m, i) => {
    const t0 = 0.3 + i * 0.055;
    const op = interpolate(p, [t0, t0 + 0.12], [0, 1], Easing.outCubic);
    const y = interpolate(p, [t0, t0 + 0.14], [22, 0], Easing.outCubic);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        background: m.c,
        borderRadius: 18,
        padding: "22px 18px",
        textAlign: "center",
        fontFamily: TITLE,
        fontSize: 26,
        color: INK,
        opacity: op,
        transform: `translateY(${y}px)`,
        boxShadow: "0 6px 16px rgba(70,58,45,0.08)"
      }
    }, m.k);
  })));
}

// ③ Select — '불안해요' 봉투가 중앙으로 확대
function Select() {
  const {
    progress: p
  } = useScene();
  const v = veil(p);
  const s = interpolate(p, [0.1, 0.6], [1, 1.7], Easing.inOutCubic);
  const lift = interpolate(p, [0.1, 0.6], [0, -20], Easing.inOutCubic);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...center,
      opacity: v
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#B7D0C1",
      borderRadius: 26,
      padding: "60px 70px",
      textAlign: "center",
      fontFamily: TITLE,
      fontSize: 40,
      color: INK,
      transform: `translateY(${lift}px) scale(${s})`,
      boxShadow: "0 20px 50px rgba(70,58,45,0.16)"
    }
  }, "\uBD88\uC548\uD574\uC694"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: BODY,
      fontSize: 24,
      color: MUTED,
      marginTop: 130,
      opacity: interpolate(p, [0.55, 0.8], [0, 1])
    }
  }, "\uC774 \uB9C8\uC74C\uC744 \uC811\uC218\uD560\uAC8C\uC694"));
}

// ④ Rise — 봉투에서 접수카드(종이)가 위로 올라옴
function Rise() {
  const {
    progress: p
  } = useScene();
  const v = veil(p);
  const y = interpolate(p, [0.12, 0.7], [140, -30], Easing.outCubic);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...center,
      opacity: v
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 380,
      height: 520
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 40,
      right: 40,
      top: 40,
      bottom: 150,
      background: CREAM,
      borderRadius: 14,
      boxShadow: "0 12px 30px rgba(70,58,45,0.14)",
      transform: `translateY(${y}px)`,
      padding: "34px 30px",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: TITLE,
      fontSize: 27,
      color: INK,
      textAlign: "center",
      whiteSpace: "nowrap"
    }
  }, "\uC624\uB298\uC758 \uB9C8\uC74C \uC811\uC218\uCE74\uB4DC"), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: "#EBD9CF",
      margin: "22px 0"
    }
  }), [0, 1, 2].map(i => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height: 14,
      background: "#F0E7DE",
      borderRadius: 7,
      margin: "16px 0",
      width: `${90 - i * 12}%`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      right: 0,
      bottom: 0,
      height: 300,
      background: "#B7D0C1",
      borderRadius: "10px 10px 26px 26px",
      clipPath: "polygon(0 0,50% 14%,100% 0,100% 100%,0 100%)",
      boxShadow: "0 16px 40px rgba(70,58,45,0.16)",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      paddingBottom: 40
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: TITLE,
      fontSize: 34,
      color: INK
    }
  }, "\uBD88\uC548\uD574\uC694"))));
}

// ⑤ Prescribe — 말씀 처방전 카드 공개
function Prescribe() {
  const {
    progress: p
  } = useScene();
  const v = veil(p);
  const sc = interpolate(p, [0.08, 0.4], [0.94, 1], Easing.outCubic);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...center,
      opacity: v
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 520,
      background: CREAM,
      borderRadius: 30,
      boxShadow: "0 22px 55px rgba(70,58,45,0.18)",
      padding: 30,
      transform: `scale(${sc})`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 16,
      border: `1.5px solid ${RX}`,
      borderRadius: 22,
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      textAlign: "center",
      padding: "20px 20px 8px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: BODY,
      fontSize: 18,
      letterSpacing: "0.34em",
      color: RX,
      paddingLeft: "0.34em"
    }
  }, "\uB9C8\uC74C\uC57D\uAD6D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: TITLE,
      fontSize: 46,
      color: RX,
      margin: "16px 0 26px"
    }
  }, "\uB9D0\uC500 \uCC98\uBC29\uC804"), /*#__PURE__*/React.createElement("div", {
    style: {
      opacity: interpolate(p, [0.35, 0.62], [0, 1]),
      transform: `translateY(${interpolate(p, [0.35, 0.62], [16, 0], Easing.outCubic)}px)`
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: BODY,
      fontWeight: 700,
      fontSize: 20,
      color: RX,
      marginBottom: 14
    }
  }, "\uC624\uB298\uC758 \uB9D0\uC500"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: VERSE,
      fontSize: 32,
      lineHeight: 1.7,
      color: INK
    }
  }, "\uB108\uD76C\uB294 \uB9C8\uC74C\uC5D0 \uADFC\uC2EC\uD558\uC9C0 \uB9D0\uB77C", /*#__PURE__*/React.createElement("br", null), "\uD558\uB098\uB2D8\uC744 \uBBFF\uC73C\uB2C8 \uB610 \uB098\uB97C \uBBFF\uC73C\uB77C"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: BODY,
      fontSize: 18,
      color: MUTED,
      marginTop: 16
    }
  }, "\uC694\uD55C\uBCF5\uC74C 14:1")))));
}

// ⑥ Word — 처방 단어 + 카피
function Word() {
  const {
    progress: p
  } = useScene();
  const v = veil(p);
  const sc = interpolate(p, [0.1, 0.5], [0.7, 1], Easing.outBack);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...center,
      opacity: v
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: BODY,
      fontSize: 24,
      color: MUTED,
      opacity: interpolate(p, [0.05, 0.3], [0, 1])
    }
  }, "\uC624\uB298\uC758 \uCC98\uBC29 \uB2E8\uC5B4"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: TITLE,
      fontSize: 130,
      color: CORAL,
      margin: "18px 0",
      transform: `scale(${sc})`
    }
  }, "\uBBFF\uC74C"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: TITLE,
      fontSize: 30,
      color: INK,
      textAlign: "center",
      lineHeight: 1.5,
      opacity: interpolate(p, [0.5, 0.75], [0, 1])
    }
  }, "\uC624\uB298 \uB9C8\uC74C\uC774 \uC544\uD508 \uACF3\uC5D0,", /*#__PURE__*/React.createElement("br", null), "\uB9D0\uC500 \uD55C \uC54C."));
}
window.MP_Opening = Opening;
window.MP_Ask = Ask;
window.MP_Select = Select;
window.MP_Rise = Rise;
window.MP_Prescribe = Prescribe;
window.MP_Word = Word;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soul-pharmacy/animation/scenes.jsx", error: String((e && e.message) || e) }); }

// ui_kits/soul-pharmacy/animation/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  // data-om-starter: inert presence marker — Claude Design's starter-usage
  // probe reads it. The closed panel renders nothing, so the marker rides
  // the <html> element as an attribute instead of a rendered node — zero
  // elements added, so page CSS (even structural selectors like
  // :nth-child) can never observe it. It records that the page WIRES a
  // tweaks panel, whether or not the panel is open. Keep this effect.
  React.useEffect(() => {
    document.documentElement.setAttribute('data-om-starter', 'tweaks-panel');
    return () => document.documentElement.removeAttribute('data-om-starter');
  }, []);
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soul-pharmacy/animation/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/soul-pharmacy/assessment-data.js
try { (() => {
// assessment-data.js — 감정별 자가문진 문항 (실제 원문 연결).
// A/B 분류는 각 감정 Q1의 optionTypes(rx-prescriptions.js › classifyType). 미설정 감정은 default 임시 문항.
window.ASSESSMENT_DATA = {
  "thanks": {
    "groups": [{
      "number": "01",
      "question": "지금 마음의 느낌은 어떤가요?",
      "hint": "감사해야 한다는 사실을 알고 있어도 마음이 바로 따라오지 않을 수 있어요. 지금의 마음에 가까운 것만 골라주세요.",
      "options": ["감사한 것을 찾기가 어려워요", "좋은 일이 있어도 마음에 잘 닿지 않아요", "서운함과 답답함이 먼저 올라와요", "오늘을 견디는 것만으로도 벅차요"],
      "optionTypes": ["A", "A", "B", "B"]
    }, {
      "number": "02",
      "question": "지금 나에게 가까운 말은?",
      "hint": "천천히 읽어보고, 오늘의 나와 가장 닮은 문장을 골라주세요.",
      "options": ["예전에는 감사했던 것도 이제 당연하게 느껴져요", "계속되는 돌봄보다 부족한 것만 보여요", "감사해야 한다는 말이 부담스럽게 느껴져요", "상황이 나아져야 감사할 수 있을 것 같아요"]
    }, {
      "number": "03",
      "question": "이 중에서도 마음에 더 가까운 말은?",
      "hint": "앞에서 고른 마음과 별개로, 지금 떠오르는 문장을 하나 더 골라주세요.",
      "options": ["감사하지 못하는 내가 믿음 없는 사람처럼 느껴져요", "하나님께 받은 사랑이 잘 느껴지지 않아요", "다른 사람과 비교할수록 내게 있는 것이 작게 느껴져요", "감사하고 싶지만 마음이 지쳐 반응할 힘이 없어요"]
    }, {
      "number": "04",
      "question": "오늘 내 마음에 필요한 것은?",
      "hint": "지금 내 마음에 가장 필요한 한 가지를 골라주세요.",
      "options": ["변하지 않는 하나님의 사랑", "감사하지 못하는 나를 책망하지 않는 시간", "지친 마음이 먼저 쉬어 갈 자리", "하나님께 솔직하게 말할 수 있는 마음", "이미 받은 것을 천천히 알아보는 시선", "다시 감사할 수 있는 작은 힘"]
    }],
    "cta": "문진 완료"
  },
  "calling": {
    "groups": [{
      "number": "01",
      "question": "지금 책임의 무게는 어떻게 느껴지나요?",
      "hint": "내가 책임감 있는 사람인지 평가하기보다, 지금 어떤 무게까지 혼자 들고 있는지 천천히 살펴보세요.",
      "options": ["조금 부담되지만 감당할 수 있어요", "해야 할 일이 계속 마음에 남아 있어요", "잠시 멈추어도 마음이 편하지 않아요", "지금은 혼자 감당하기 버거워요"],
      "optionTypes": ["A", "A", "B", "B"]
    }, {
      "number": "02",
      "question": "지금 나에게 가까운 말은 무엇인가요?",
      "hint": "천천히 읽어보고, 오늘의 나와 가장 닮은 문장을 골라주세요.",
      "options": ["내가 끝까지 챙겨야 마음이 놓여요", "실수하면 누군가에게 피해를 줄 것 같아요", "다른 사람에게 부탁하는 것이 어렵게 느껴져요", "책임에서 잠시 손을 떼는 것도 불안해요"]
    }, {
      "number": "03",
      "question": "이 중에서도 마음에 더 가까운 말은?",
      "hint": "앞에서 고른 마음과 별개로, 지금 떠오르는 문장을 하나 더 골라주세요.",
      "options": ["하나님께 맡기고 싶지만 결국 내가 다 해야 할 것 같아요", "아무것도 결정하거나 책임지고 싶지 않을 만큼 지쳤어요", "쉬고 있으면 해야 할 일을 외면하는 것 같아 마음이 불편해요", "내가 놓으면 모든 것이 무너질 것 같아요"]
    }, {
      "number": "04",
      "question": "오늘 내 마음에 필요한 것은 무엇인가요?",
      "hint": "지금 내 마음에 가장 필요한 한 가지를 골라주세요.",
      "options": ["모든 것을 혼자 하지 않아도 된다는 안도감", "내가 책임질 범위를 다시 나누는 지혜", "도움을 요청하고 함께 조율할 수 있는 용기", "필요한 책임을 정리한 뒤 멈출 수 있는 마음", "결과 전체를 하나님께 맡길 수 있는 믿음", "다시 움직일 힘이 생길 때까지 회복할 시간"]
    }],
    "cta": "문진 완료"
  },
  "forgive": {
    "groups": [{
      "number": "01",
      "question": "지금 마음의 느낌은 어떤가요?",
      "hint": "용서하지 못하는 마음을 서둘러 정리하지 않아도 괜찮아요. 지금 내 마음에 가까운 것을 골라주세요.",
      "options": ["조금 불편한 마음이 남아 있어요", "생각할수록 화가 나요", "억울함이 계속 마음에 걸려요", "지금은 그 사람을 떠올리는 것조차 버거워요"],
      "optionTypes": ["A", "A", "B", "B"]
    }, {
      "number": "02",
      "question": "지금 나에게 가까운 말은?",
      "hint": "천천히 읽어보고, 오늘의 나와 가장 닮은 문장을 골라주세요.",
      "options": ["용서해야 한다는 것은 알지만 마음이 따라주지 않아요", "그 일을 그냥 넘기면 잘못까지 괜찮다고 인정하는 것 같아요", "상대가 사과하지 않았는데 내가 먼저 용서하고 싶지 않아요", "다시 상처받을까 봐 마음을 놓을 수 없어요"]
    }, {
      "number": "03",
      "question": "이 중에서도 마음에 더 가까운 말은?",
      "hint": "앞에서 고른 마음과 별개로, 지금 떠오르는 문장을 하나 더 골라주세요.",
      "options": ["하나님께 맡기고 싶지만 억울함이 계속 올라와요", "지금은 용서보다 내 상처를 먼저 알아주셨으면 좋겠어요", "용서하면 다시 가까워져야 할 것 같아 두려워요", "미워하고 싶지 않은데 마음이 자꾸 그 일로 돌아가요"]
    }, {
      "number": "04",
      "question": "오늘 내 마음에 필요한 것은?",
      "hint": "지금 내 마음에 가장 필요한 한 가지를 골라주세요.",
      "options": ["하나님의 사랑을 다시 느끼는 시간", "내 상처를 알아주시는 위로", "억울함을 하나님께 맡길 수 있는 믿음", "상대와 나를 분리해 바라보는 지혜", "용서를 시작할 수 있는 작은 마음", "안전하게 쉬며 회복할 시간"]
    }],
    "cta": "문진 완료"
  },
  "distant": {
    "groups": [{
      "number": "01",
      "question": "지금 하나님과의 거리는 어떻게 느껴지나요?",
      "hint": "괜찮은 척하지 않아도 괜찮아요. 지금 마음에 가까운 것만 골라주세요.",
      "options": ["전보다 조금 멀어진 것 같아요", "기도해도 잘 닿지 않는 것 같아요", "하나님이 계신다는 사실이 잘 느껴지지 않아요", "지금은 하나님을 찾을 힘도 부족해요"],
      "optionTypes": ["A", "A", "B", "B"]
    }, {
      "number": "02",
      "question": "지금 나에게 가까운 말은 무엇인가요?",
      "hint": "천천히 읽어보고, 오늘의 나와 가장 닮은 문장을 골라주세요.",
      "options": ["예전처럼 하나님을 가까이 느끼고 싶어요", "기도하려 해도 무슨 말을 해야 할지 모르겠어요", "특별한 감동이 없어서 믿음이 약해진 것 같아요", "마음에 걸리는 일이 있어 하나님 앞에 가기 어려워요"]
    }, {
      "number": "03",
      "question": "이 중에서도 마음에 더 가까운 말은?",
      "hint": "앞에서 고른 마음과 별개로, 지금 떠오르는 문장을 하나 더 골라주세요.",
      "options": ["오랫동안 기다렸지만 아무 응답도 없는 것 같아요", "다른 사람은 하나님을 잘 느끼는 것 같은데 나만 멀어진 것 같아요", "말씀을 읽어도 마음에 잘 들어오지 않아요", "하나님께 솔직한 마음을 드러내도 괜찮을지 망설여져요"]
    }, {
      "number": "04",
      "question": "오늘 내 마음에 필요한 것은 무엇인가요?",
      "hint": "지금 내 마음에 가장 필요한 한 가지를 골라주세요.",
      "options": ["하나님이 여전히 나를 사랑하신다는 확신", "하나님이 나를 떠나지 않으셨다는 확인", "정죄하지 않고 다시 시작할 수 있는 마음", "아무 말 없이 하나님 앞에서 잠시 쉬는 시간", "다시 기도할 수 있는 작은 힘", "말씀을 통해 하나님의 마음을 다시 알아가는 시간"]
    }],
    "cta": "문진 완료"
  },
  "waiting": {
    "groups": [{
      "number": "01",
      "question": "지금 기다림은 어떻게 느껴지나요?",
      "hint": "기다리지 못해서 잘못된 것이 아니라, 간절한 마음으로 오래 붙들고 있느라 지쳤을 수 있어요. 지금 마음에 가까운 것을 골라주세요.",
      "options": ["조금 답답하게 느껴져요", "자꾸 결과를 확인하고 싶어요", "더 기다리면 늦을 것 같아요", "이제는 기다릴 힘이 거의 없어요"],
      "optionTypes": ["A", "A", "B", "B"]
    }, {
      "number": "02",
      "question": "지금 나에게 가까운 말은?",
      "hint": "천천히 읽어보고, 오늘의 나와 가장 닮은 문장을 골라주세요.",
      "options": ["내가 더 움직여야 할 것 같아요", "언제까지 기다려야 할지 몰라 불안해요", "아무 변화가 없으면 잘못된 것 같아요", "지금까지의 기다림이 맞는지 자꾸 의심돼요"]
    }, {
      "number": "03",
      "question": "이 중에서도 마음에 더 가까운 말은?",
      "hint": "앞에서 고른 마음과 별개로, 지금 떠오르는 문장을 하나 더 골라주세요.",
      "options": ["기도했는데도 답이 없는 것처럼 느껴져요", "하나님을 믿고 싶지만 마음이 자꾸 조급해져요", "기다리는 동안 중요한 것을 놓칠까 봐 걱정돼요", "하나님이 지금도 일하고 계신지 확인하고 싶어요"]
    }, {
      "number": "04",
      "question": "오늘 내 마음에 필요한 것은?",
      "hint": "지금 내 마음에 가장 필요한 한 가지를 골라주세요.",
      "options": ["기다릴 수 있는 믿음", "조급함을 내려놓는 평안", "오늘 해야 할 일을 분별하는 지혜", "하나님의 인도를 신뢰하는 마음", "지친 마음이 쉬어 갈 시간", "다시 소망할 수 있는 작은 힘"]
    }],
    "cta": "문진 완료"
  },
  "compare": {
    "groups": [{
      "number": "01",
      "question": "지금 마음의 느낌은 어떤가요?",
      "hint": "맞고 틀린 답은 없어요. 지금 이 순간의 느낌에 가장 가까운 것을 골라주세요.",
      "options": ["잠깐 마음이 작아졌어요", "자꾸 다른 사람이 신경 쓰여요", "내 모습이 부족하게 느껴져요", "지금은 나를 좋게 보기 어려워요"],
      "optionTypes": ["A", "A", "B", "B"]
    }, {
      "number": "02",
      "question": "지금 나에게 가까운 말은?",
      "hint": "천천히 읽어보고, 오늘의 나와 가장 닮은 문장을 골라주세요.",
      "options": ["다른 사람의 좋은 점이 먼저 보여요", "나만 뒤처진 것처럼 느껴져요", "잘하고 있어도 충분하지 않은 것 같아요", "다른 사람의 시선이 신경 쓰여요"]
    }, {
      "number": "03",
      "question": "이 중에서도 마음에 더 가까운 말은?",
      "hint": "앞에서 고른 마음과 별개로, 지금 떠오르는 문장을 하나 더 골라주세요.",
      "options": ["비교한 뒤에는 내 장점이 잘 보이지 않아요", "하나님이 주신 내 모습을 믿고 싶지만 흔들려요", "내 속도보다 다른 사람의 속도가 더 크게 보여요", "하나님이 나를 어떻게 바라보시는지 다시 붙잡고 싶어요"]
    }, {
      "number": "04",
      "question": "오늘 내 마음에 필요한 것은?",
      "hint": "지금 내 마음에 가장 필요한 한 가지를 골라주세요.",
      "options": ["비교를 잠시 멈추고 쉬는 시간", "내 장점을 다시 바라보는 시선", "지금도 잘하고 있다는 따뜻한 말", "나만의 걸음을 이어갈 작은 용기", "다른 사람의 속도와 내 속도를 나누어 보는 마음", "하나님이 바라보시는 나를 생각하는 시간"]
    }],
    "cta": "문진 완료"
  },
  "broken": {
    "groups": [{
      "number": "01",
      "question": "지금 마음의 강도는 어떤가요?",
      "hint": "맞고 틀린 답은 없어요. 지금 이 순간의 느낌에 가장 가까운 것을 골라주세요.",
      "options": ["조금 흔들렸어요", "마음이 내려앉았어요", "아무것도 하기 싫어요", "지금은 혼자 버거워요"],
      "optionTypes": ["A", "A", "B", "B"]
    }, {
      "number": "02",
      "question": "지금 상태에 가까운 말은?",
      "hint": "천천히 읽어보고, 오늘의 나와 가장 닮은 문장을 골라주세요.",
      "options": ["괜찮은 척하기 힘들어요", "기도하려 해도 말이 안 나와요", "누가 건드리면 울 것 같아요", "하나님께 기대고 싶은데 잘 안 돼요"]
    }, {
      "number": "03",
      "question": "이 중에서도 마음에 더 가까운 말은?",
      "hint": "앞에서 고른 마음과 별개로, 지금 떠오르는 문장을 하나 더 골라주세요.",
      "options": ["마음이 텅 빈 것 같아요", "누가 내 마음을 알아줬으면 좋겠어요", "아무 말도 하고 싶지 않아요", "지금의 마음을 하나님께 그대로 가져가고 싶어요"]
    }, {
      "number": "04",
      "question": "오늘 받고 싶은 처방은 무엇인가요?",
      "hint": "지금 내 마음에 가장 필요한 한 가지를 골라주세요.",
      "options": ["내 마음을 알아주는 위로", "지금도 괜찮다고 품어주는 말", "하나님 품에 머물며 쉬는 시간", "다시 일어설 수 있는 작은 힘", "오늘 하루를 견디도록 붙들어 주시는 힘", "마음껏 울어도 되는 안전한 자리"]
    }],
    "cta": "문진 완료"
  },
  "anxious": {
    "groups": [{
      "number": "01",
      "question": "지금 마음의 강도는 어떤가요?",
      "hint": "맞고 틀린 답은 없어요. 지금 이 순간의 느낌에 가장 가까운 것을 골라주세요.",
      "options": ["참을 만해요", "계속 신경 쓰여요", "마음이 꽉 찼어요", "지금은 버거워요"],
      "optionTypes": ["A", "A", "B", "B"]
    }, {
      "number": "02",
      "question": "지금 상태에 가까운 말은?",
      "hint": "천천히 읽어보고, 오늘의 나와 가장 닮은 문장을 골라주세요.",
      "options": ["앞으로가 자꾸 걱정돼요", "생각이 자꾸 이어져요", "자꾸 안 좋은 쪽으로 상상돼요", "마음이 쉽게 진정되지 않아요"]
    }, {
      "number": "03",
      "question": "이 중에서도 마음에 더 가까운 말은?",
      "hint": "앞에서 고른 마음과 별개로, 지금 떠오르는 문장을 하나 더 골라주세요.",
      "options": ["내가 붙잡고 있어야 안심돼요", "기도하려 해도 걱정이 먼저 올라와요", "하나님께 맡기고 싶지만 잘 안 돼요", "이 마음을 하나님께 그대로 가져가고 싶어요"]
    }, {
      "number": "04",
      "question": "오늘 받고 싶은 처방은 무엇인가요?",
      "hint": "지금 내 마음에 가장 필요한 한 가지를 골라주세요.",
      "options": ["마음을 가라앉히는 평안", "하나님을 신뢰할 수 있는 믿음", "지친 마음이 쉬어 갈 시간", "다시 움직일 수 있는 용기", "걱정을 하나님께 맡길 수 있는 마음", "생각을 가라앉히고 다시 숨 쉴 힘"]
    }],
    "cta": "문진 완료"
  },
  "default": {
    "groups": [{
      "number": "01",
      "question": "지금 마음의 강도는 어떤가요?",
      "hint": "맞고 틀린 답은 없어요. 지금 이 순간의 느낌에 가장 가까운 것을 하나 골라주세요.",
      "options": ["참을 만해요", "계속 신경 쓰여요", "마음이 꽉 찼어요", "지금은 버거워요"],
      "optionTypes": ["A", "A", "B", "B"]
    }, {
      "number": "02",
      "question": "지금 마음에 가장 가까운 말은 무엇인가요?",
      "hint": "천천히 읽어보고, 오늘의 나와 가장 닮은 문장을 골라주세요.",
      "options": ["괜찮은 척 중이에요", "말하면 울 것 같아요", "생각이 너무 많아요", "해야 할 건 아는데 마음이 안 따라와요"]
    }, {
      "number": "03",
      "question": "이 중에서도 마음에 더 가까운 말은?",
      "hint": "앞에서 고른 마음과 별개로, 지금 떠오르는 문장을 하나 더 골라주세요.",
      "options": ["열심히 했는데 안이 비어가는 느낌이에요", "사람의 반응에 마음이 흔들려요", "말은 못 했지만 하나님이 알아주셨으면 해요", "그냥 조용히 쉬고 싶어요"]
    }, {
      "number": "04",
      "question": "오늘 어떤 말씀을 처방받고 싶으세요?",
      "hint": "지금 내 마음에 가장 필요한 한 가지를 골라주세요. 그 마음에 맞춰 말씀을 담아드릴게요.",
      "options": ["평안", "위로", "믿음", "쉼", "용기", "사랑", "중심 회복", "다시 시작할 힘"]
    }],
    "cta": "문진 완료"
  }
};
window.getAssessment = function (mood) {
  return window.ASSESSMENT_DATA[mood] || window.ASSESSMENT_DATA.default;
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soul-pharmacy/assessment-data.js", error: String((e && e.message) || e) }); }

// ui_kits/soul-pharmacy/audio-manager.js
try { (() => {
// audio-manager.js — 마음약국 배경음악 매니저 (전역 window.__bgm 싱글턴)
// - 화면별 트랙: 1=인트로 안내, 2=감정선택·문진·처방전, 3=저장/공유 확인·완료
// - 크로스페이드(기본 3s), 같은 트랙이면 이어서 재생(재시작 없음), 자연 루프
// - 지연 로딩: 요청된 트랙 + 다음 트랙만 미리 불러옴
// - 자동재생 제한 대응: 첫 사용자 제스처(클릭/터치/키) 이후 재생 시작
(function () {
  if (window.__bgm) return;
  var SRC = {
    1: "assets/bgm-1-web.mp3",
    2: "assets/bgm-2-web.mp3",
    3: "assets/bgm-3-web.mp3"
  };
  var TARGET = 0.62; // 최대 볼륨
  var FADE_MS = 3000; // 크로스페이드 시간
  var els = {}; // 트랙별 Audio 요소 캐시
  var fades = {}; // 트랙별 진행중 fade 타이머
  var current = null; // 현재(또는 목표) 트랙 번호
  var unlocked = false;
  var pending = null; // 잠금 해제 전 예약된 트랙

  function make(n) {
    if (els[n]) return els[n];
    var a = new Audio();
    a.src = SRC[n];
    a.loop = true;
    a.preload = "auto";
    a.volume = 0;
    els[n] = a;
    return a;
  }
  function fadeTo(n, target, ms, onEnd) {
    var a = els[n];
    if (!a) return;
    if (fades[n]) {
      clearInterval(fades[n]);
      fades[n] = null;
    }
    var from = a.volume;
    var start = performance.now();
    if (ms <= 0) {
      a.volume = target;
      if (onEnd) onEnd();
      return;
    }
    fades[n] = setInterval(function () {
      var t = Math.min(1, (performance.now() - start) / ms);
      var v = from + (target - from) * t;
      a.volume = v < 0 ? 0 : v > 1 ? 1 : v;
      if (t >= 1) {
        clearInterval(fades[n]);
        fades[n] = null;
        if (onEnd) onEnd();
      }
    }, 60);
  }
  function startTrack(n, ms) {
    var a = make(n);
    var p = a.play();
    if (p && p.catch) p.catch(function () {}); // 자동재생 거부는 조용히 무시
    fadeTo(n, TARGET, ms);
  }
  function play(n, opts) {
    n = Number(n);
    if (!SRC[n]) return;
    opts = opts || {};
    var ms = opts.ms != null ? opts.ms : FADE_MS;
    if (!unlocked) {
      pending = n;
      return;
    } // 제스처 대기중
    if (current === n) {
      // 같은 트랙: 이어서 재생만 보장
      var a = els[n];
      if (a && a.paused) {
        startTrack(n, ms);
      } else if (a) {
        fadeTo(n, TARGET, ms);
      }
      current = n;
      return;
    }
    var prev = current;
    current = n;
    startTrack(n, ms);
    if (prev != null && els[prev]) {
      // 이전 트랙 페이드아웃 후 일시정지(위치 보존)
      fadeTo(prev, 0, ms, function () {
        try {
          els[prev].pause();
        } catch (e) {}
      });
    }
    // 다음에 올 법한 트랙 살짝 미리 로드 (2 다음 3)
    var nxt = n === 1 ? 2 : n === 2 ? 3 : null;
    if (nxt && !els[nxt]) {
      var pre = make(nxt);
      pre.load();
    }
  }
  function unlock() {
    if (unlocked) return;
    unlocked = true;
    if (pending != null) {
      var n = pending;
      pending = null;
      play(n, {
        ms: 1200
      });
    }
  }
  ["pointerdown", "touchstart", "keydown"].forEach(function (ev) {
    window.addEventListener(ev, unlock, {
      once: false,
      passive: true
    });
  });
  window.__bgm = {
    play: play,
    unlock: unlock,
    get current() {
      return current;
    }
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soul-pharmacy/audio-manager.js", error: String((e && e.message) || e) }); }

// ui_kits/soul-pharmacy/deck-stage.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* ═══ THIS PROJECT USES DESIGN COMPONENTS (.dc.html) ═══
 * Reference this stage from your <x-dc> template as an import — NEVER as a
 * raw <deck-stage> tag plus a <script src> (that hides the whole deck until
 * the stream finishes):
 *
 *   <x-import component-from-global-scope="deck-stage" from="./deck-stage.js"
 *             width="1920" height="1080" hint-size="100%,100%">
 *     <section data-label="Title" style="...">…</section>
 *     <section data-label="Agenda" style="...">…</section>
 *   </x-import>
 *
 * Slides are inline-styled <section> siblings; do not add a stylesheet or a
 * deck-stage:not(:defined) rule. The plain-HTML "Usage" block in the comment
 * below does NOT apply to .dc.html templates.
 */
/* BEGIN USAGE */
/**
 * <deck-stage> — reusable web component for HTML decks.
 *
 * Handles:
 *  (a) speaker notes — reads <script type="application/json" id="speaker-notes">
 *      and posts {slideIndexChanged: N} to the parent window on nav.
 *  (b) keyboard navigation — ←/→ and ↑/↓, PgUp/PgDn, Space, Home/End,
 *      number keys.
 *      On touch devices, tapping the left/right half of the stage goes
 *      prev/next — taps on links, buttons and other interactive slide
 *      content are left alone.
 *  (c) press R to reset to slide 0 (with a tasteful keyboard hint).
 *  (d) bottom-center overlay showing slide count + hints, fades out on
 *      idle; hovering or focusing its controls pins it visible until the
 *      pointer/focus leaves. While presenting it is pointer-summoned only:
 *      mouse movement (or hover/focus) shows it, slide changes never do.
 *  (e) auto-scaling — inner canvas is a fixed design size (default 1920×1080)
 *      scaled with `transform: scale()` to fit the viewport, letterboxed.
 *      Set the `noscale` attribute to render at authored size (1:1) — the
 *      PPTX exporter sets this so its DOM capture sees unscaled geometry.
 *  (f) print — `@media print` lays every slide out as its own page at the
 *      design size, so the browser's Print → Save as PDF produces a clean
 *      one-page-per-slide PDF with no extra setup.
 *  (g) thumbnail rail — resizable left-hand column of per-slide thumbnails
 *      (static clones). Click to navigate — the clicked slide becomes the
 *      selected (highlighted) slide; shift-click selects a range and
 *      cmd/ctrl-click toggles slides in and out of the selection
 *      (Escape collapses it back to the current slide); ↑/↓ with a
 *      thumbnail focused to step between slides; Delete/Backspace with a
 *      thumbnail focused to delete the selection (one confirm dialog,
 *      one undoable operation); drag to reorder (dragging collapses a
 *      multi-selection); right-click for
 *      Skip / Move up / Move down / Duplicate / Delete — over a
 *      multi-selection the menu offers "Delete N slides". Drag the rail's right edge to resize;
 *      width persists to
 *      localStorage. Skipped slides carry `data-deck-skip`, are dimmed in
 *      the rail, omitted from prev/next navigation, and hidden at print.
 *      They also carry no rail number and are excluded from the overlay's
 *      slide count: the remaining slides are numbered contiguously
 *      (Keynote-style), and a skipped CURRENT slide (reachable by rail
 *      click or deep link, never by prev/next) shows '–' as its position.
 *      The rail is suppressed in presenting mode, in the host's Preview
 *      mode (ViewerMode='none'), on `noscale`, on narrow viewports
 *      (≤640px), and via the `no-rail` attribute. Rail mutations dispatch
 *      a `dc-op` CustomEvent on the element (see docs/dc-ops.md) and do
 *      NOT touch the DOM: the host applies the op and re-renders;
 *      structural rail input is locked until the host posts
 *      {__dc_op_ack: true, applied}.
 *  (h) typographic defaults — a zero-specificity stylesheet injected into
 *      the document gives headings `text-wrap: balance` and body text
 *      (p, li, blockquote, figcaption) `text-wrap: pretty`, so slides
 *      avoid widowed/orphaned words by default. Any text-wrap declaration
 *      you author on those elements wins over these defaults.
 *
 * Slides are HIDDEN, not unmounted. Non-active slides stay in the DOM with
 * `visibility: hidden` + `opacity: 0`, so their state (videos, iframes,
 * form inputs, React trees) is preserved across navigation.
 *
 * Lifecycle event — the component dispatches a `slidechange` CustomEvent on
 * itself whenever the active slide changes (including the initial mount).
 * The event bubbles and composes out of shadow DOM, so you can listen on
 * the <deck-stage> element or on document:
 *
 *   document.querySelector('deck-stage').addEventListener('slidechange', (e) => {
 *     e.detail.index         // new 0-based index
 *     e.detail.previousIndex // previous index, or -1 on init
 *     e.detail.total         // total slide count
 *     e.detail.slide         // the new active slide element
 *     e.detail.previousSlide // the prior slide element, or null on init
 *     e.detail.reason        // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
 *   });
 *
 * Persistence: none at the deck level. The host app keeps the current slide
 * in its own URL (?slide=) and re-delivers it via location.hash on load, so a
 * bare load with no hash always starts at slide 1.
 *
 * Usage:
 *   <style>deck-stage:not(:defined){visibility:hidden}</style>
 *   <deck-stage width="1920" height="1080">
 *     <section data-label="Title">...</section>
 *     <section data-label="Agenda">...</section>
 *   </deck-stage>
 *   <script src="deck-stage.js"></script>
 *
 * The :not(:defined) rule prevents a flash of the first slide at its
 * authored styles before this script runs and attaches the shadow root.
 *
 * Slides are the direct element children of <deck-stage>. Each slide is
 * automatically tagged with:
 *   - data-screen-label="NN Label"   (1-indexed, for comment flow)
 *   - data-om-validate="no_overflowing_text,no_overlapping_text,slide_sized_text"
 *
 * Speaker notes stay in sync because the component posts {slideIndexChanged: N}
 * to the parent — just include the #speaker-notes script tag if asked for notes.
 *
 * Authoring guidance:
 *   - Write slide bodies as static HTML inside <deck-stage>, with sizing via
 *     CSS custom properties in a <style> block rather than JS constants.
 *     Static slide markup is what lets the user click a heading in edit mode
 *     and retype it directly; a slide rendered through <script type="text/babel">,
 *     React, or a loop over a JS array has to round-trip every tweak through a
 *     chat message instead. Reach for script-generated slides only when the
 *     content genuinely needs interactive behaviour static HTML can't express.
 *   - Do NOT set position/inset/width/height on the slide <section> elements —
 *     the component absolutely positions every slotted child for you.
 *   - Entrance animations: make the visible end-state the base style and
 *     animate *from* hidden, so print and reduced-motion show content.
 *     Gate the animation on [data-deck-active] and the motion query, e.g.
 *     `@media (prefers-reduced-motion:no-preference){ [data-deck-active] .x{animation:fade-in .5s both} }`.
 *     Avoid infinite decorative loops on slide content.
 */
/* END USAGE */

(() => {
  const DESIGN_W_DEFAULT = 1920;
  const DESIGN_H_DEFAULT = 1080;
  const OVERLAY_HIDE_MS = 1800;
  const VALIDATE_ATTR = 'no_overflowing_text,no_overlapping_text,slide_sized_text';
  const FINE_POINTER_MQ = matchMedia('(hover: hover) and (pointer: fine)');
  const NARROW_MQ = matchMedia('(max-width: 640px)');
  // Slide-authored controls that should keep a tap instead of it navigating.
  const INTERACTIVE_SEL = 'a[href], button, input, select, textarea, summary, label, video[controls], audio[controls], [role="button"], [onclick], [tabindex]:not([tabindex^="-"]), [contenteditable]:not([contenteditable="false" i])';
  const pad2 = n => String(n).padStart(2, '0');

  // Label precedence: data-label → data-screen-label (number stripped) → first heading → "Slide".
  const getSlideLabel = el => {
    const explicit = el.getAttribute('data-label');
    if (explicit) return explicit;
    const existing = el.getAttribute('data-screen-label');
    if (existing) return existing.replace(/^\s*\d+\s*/, '').trim() || existing;
    const h = el.querySelector('h1, h2, h3, [data-title]');
    const t = h && (h.textContent || '').trim().slice(0, 40);
    if (t) return t;
    return 'Slide';
  };
  const stylesheet = `
    :host {
      position: fixed;
      inset: 0;
      display: block;
      background: #000;
      color: #fff;
      font-family: -apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;
    }
    /* connectedCallback holds this until document.fonts.ready (capped 2s) so
     * the first visible paint has the deck's real typography + final rail
     * layout. opacity (not visibility) so the active slide can't un-hide
     * itself via the ::slotted([data-deck-active]) visibility:visible rule.
     * Only the stage/rail hide — the black :host background stays, so the
     * iframe doesn't flash the page's default white. */
    :host([data-fonts-pending]) .stage,
    :host([data-fonts-pending]) .rail { opacity: 0; pointer-events: none; }

    .stage {
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .canvas {
      position: relative;
      transform-origin: center center;
      flex-shrink: 0;
      background: #fff;
      will-change: transform;
      /* Slide edge on the black stage. Dark decks override the canvas
       * fill toward the stage's own black, leaving nothing to mark where
       * the slide ends — the faint white ring keeps the boundary legible
       * there while disappearing into the white of light decks. A
       * box-shadow, not outline/border: it follows any canvas rounding
       * and adds no layout size. */
      box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 0.12);
    }

    /* Slides live in light DOM (via <slot>) so authored CSS still applies.
       We absolutely position each slotted child to stack them. */
    ::slotted(*) {
      position: absolute !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      box-sizing: border-box !important;
      overflow: hidden;
      opacity: 0;
      pointer-events: none;
      visibility: hidden;
    }
    ::slotted([data-deck-active]) {
      opacity: 1;
      pointer-events: auto;
      visibility: visible;
    }

    .overlay {
      position: fixed;
      left: 50%;
      bottom: 22px;
      transform: translate(-50%, 6px) scale(0.92);
      filter: blur(6px);
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px;
      background: #000;
      color: #fff;
      border-radius: 999px;
      font-size: 12px;
      font-feature-settings: "tnum" 1;
      letter-spacing: 0.01em;
      opacity: 0;
      pointer-events: none;
      transition: opacity 260ms ease, transform 260ms cubic-bezier(.2,.8,.2,1), filter 260ms ease;
      transform-origin: center bottom;
      z-index: 2147483000;
      user-select: none;
    }
    .overlay[data-visible] {
      opacity: 1;
      pointer-events: auto;
      transform: translate(-50%, 0) scale(1);
      filter: blur(0);
    }

    .btn {
      appearance: none;
      -webkit-appearance: none;
      background: transparent;
      border: 0;
      margin: 0;
      padding: 0;
      color: inherit;
      font: inherit;
      cursor: default;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      height: 28px;
      min-width: 28px;
      border-radius: 999px;
      color: rgba(255,255,255,0.72);
      transition: background 140ms ease, color 140ms ease;
      -webkit-tap-highlight-color: transparent;
    }
    .btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
    .btn:active { background: rgba(255,255,255,0.18); }
    .btn:focus { outline: none; }
    .btn:focus-visible { outline: none; }
    .btn::-moz-focus-inner { border: 0; }
    .btn svg { width: 14px; height: 14px; display: block; }
    .btn.reset {
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.02em;
      padding: 0 10px 0 12px;
      gap: 6px;
      color: rgba(255,255,255,0.72);
    }
    .btn.reset .kbd {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-width: 16px;
      height: 16px;
      padding: 0 4px;
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 10px;
      line-height: 1;
      color: rgba(255,255,255,0.88);
      background: rgba(255,255,255,0.12);
      border-radius: 4px;
    }

    .count {
      font-variant-numeric: tabular-nums;
      color: #fff;
      font-weight: 500;
      padding: 0 8px;
      min-width: 42px;
      text-align: center;
      font-size: 12px;
    }
    .count .sep { color: rgba(255,255,255,0.45); margin: 0 3px; font-weight: 400; }
    .count .total { color: rgba(255,255,255,0.55); }

    .divider {
      width: 1px;
      height: 14px;
      background: rgba(255,255,255,0.18);
      margin: 0 2px;
    }

    /* ── Thumbnail rail ──────────────────────────────────────────────────
       Fixed column on the left; each thumbnail is a static deep-clone of
       the light-DOM slide scaled into a 16:9 (or design-aspect) frame. The
       stage re-fits around it (see _fit); hidden during present / noscale
       / print so capture geometry and fullscreen output are unchanged. */
    .rail {
      position: fixed;
      left: 0;
      top: 0;
      bottom: 0;
      width: var(--deck-rail-w, 188px);
      background: #141414;
      border-right: 1px solid rgba(255,255,255,0.08);
      overflow-y: auto;
      overflow-x: hidden;
      padding: 12px 10px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      gap: 12px;
      z-index: 2147482500;
      scrollbar-width: thin;
      scrollbar-color: rgba(255,255,255,0.18) transparent;
    }
    .rail::-webkit-scrollbar { width: 8px; }
    .rail::-webkit-scrollbar-track { background: transparent; margin: 2px; }
    .rail::-webkit-scrollbar-thumb {
      background: rgba(255,255,255,0.18);
      border-radius: 4px;
      border: 2px solid transparent;
      background-clip: content-box;
    }
    .rail::-webkit-scrollbar-thumb:hover {
      background: rgba(255,255,255,0.28);
      border: 2px solid transparent;
      background-clip: content-box;
    }
    :host([no-rail]) .rail,
    :host([noscale]) .rail { display: none; }
    .rail[data-presenting] { display: none; }
    @media (max-width: 640px) {
      .rail, .rail-resize { display: none; }
    }
    /* User-driven show/hide (the TweaksPanel toggle) slides instead of
       popping. Transitions are gated on :host([data-rail-anim]) — set only
       for the 200ms around the toggle — so window-resize and rail-width
       drag (which also call _fit) don't lag behind the cursor. */
    .rail[data-user-hidden] { transform: translateX(-100%); }
    :host([data-rail-anim]) .rail { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .stage { transition: left 200ms cubic-bezier(.3,.7,.4,1); }
    :host([data-rail-anim]) .canvas { transition: transform 200ms cubic-bezier(.3,.7,.4,1); }
    /* transition shorthand replaces rather than merges — repeat the base
       .overlay opacity/transform/filter transitions so visibility changes
       during the 200ms toggle window still fade instead of popping. */
    :host([data-rail-anim]) .overlay {
      transition: margin-left 200ms cubic-bezier(.3,.7,.4,1),
                  opacity 260ms ease,
                  transform 260ms cubic-bezier(.2,.8,.2,1),
                  filter 260ms ease;
    }

    .thumb {
      position: relative;
      display: flex;
      align-items: flex-start;
      gap: 8px;
      cursor: pointer;
      user-select: none;
    }
    .thumb .num {
      width: 16px;
      flex-shrink: 0;
      font-size: 11px;
      font-weight: 500;
      text-align: right;
      color: rgba(255,255,255,0.55);
      padding-top: 2px;
      font-variant-numeric: tabular-nums;
    }
    .thumb .frame {
      position: relative;
      flex: 1;
      min-width: 0;
      aspect-ratio: var(--deck-aspect);
      background: #fff;
      border-radius: 4px;
      outline: 2px solid transparent;
      outline-offset: 0;
      overflow: hidden;
      transition: outline-color 120ms ease;
    }
    .thumb:hover .frame { outline-color: rgba(255,255,255,0.25); }
    .thumb { outline: none; }
    .thumb:focus-visible .frame { outline-color: rgba(255,255,255,0.5); }
    .thumb[data-selected] .num { color: #fff; }
    .thumb[data-selected] .frame {
      outline-color: rgba(217,119,87,0.65);
      box-shadow: 0 0 0 4px rgba(217,119,87,0.18);
    }
    .thumb[data-current] .num { color: #fff; }
    .thumb[data-current] .frame {
      outline-color: #D97757;
      box-shadow: 0 0 0 4px rgba(217,119,87,0.25);
    }
    /* While dragging, the thumb itself is the drag visual (the native drag
       image is suppressed in dragstart so the snapshot can't wander off the
       rail horizontally): elevate it rather than dim it, and let hit-testing
       ignore it so dragover reaches the sibling thumb under the pointer
       instead of the moving element itself. */
    .thumb[data-dragging] { opacity: 0.9; z-index: 30; pointer-events: none; }
    .thumb[data-dragging] .frame {
      outline-color: rgba(255,255,255,0.5);
      box-shadow: 0 6px 24px rgba(0,0,0,0.5);
    }
    .thumb::before {
      content: '';
      position: absolute;
      left: 24px;
      right: 0;
      height: 3px;
      border-radius: 2px;
      background: #D97757;
      opacity: 0;
      pointer-events: none;
    }
    .thumb[data-drop="before"]::before { top: -8px; opacity: 1; }
    .thumb[data-drop="after"]::before { bottom: -8px; opacity: 1; }
    .thumb[data-skip] .frame { opacity: 0.35; }
    .thumb[data-skip] .frame::after {
      content: 'Skipped';
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      background: rgba(0,0,0,0.45);
      color: #fff;
      font-size: 10px;
      font-weight: 500;
      letter-spacing: 0.04em;
    }

    .ctxmenu {
      position: fixed;
      min-width: 150px;
      padding: 4px;
      background: #242424;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 7px;
      box-shadow: 0 8px 24px rgba(0,0,0,0.45);
      z-index: 2147483100;
      display: none;
      font-size: 12px;
    }
    .ctxmenu[data-open] { display: block; }
    .ctxmenu button {
      display: block;
      width: 100%;
      appearance: none;
      border: 0;
      background: transparent;
      color: #e8e8e8;
      font: inherit;
      text-align: left;
      padding: 6px 10px;
      border-radius: 4px;
      cursor: pointer;
    }
    .ctxmenu button:hover:not(:disabled) { background: rgba(255,255,255,0.08); }
    .ctxmenu button:disabled { opacity: 0.35; cursor: default; }
    .ctxmenu hr {
      border: 0;
      border-top: 1px solid rgba(255,255,255,0.1);
      margin: 4px 2px;
    }

    .rail-resize {
      position: fixed;
      left: calc(var(--deck-rail-w, 188px) - 3px);
      top: 0;
      bottom: 0;
      width: 6px;
      cursor: col-resize;
      z-index: 2147482600;
      touch-action: none;
    }
    .rail-resize:hover,
    .rail-resize[data-dragging] { background: rgba(255,255,255,0.12); }
    :host([no-rail]) .rail-resize,
    :host([noscale]) .rail-resize,
    .rail[data-presenting] + .rail-resize,
    .rail[data-user-hidden] + .rail-resize { display: none; }

    /* Delete-confirm popup — matches the SPA's ConfirmDialog layout
       (title + message body, depressed footer with Cancel / Delete). */
    .confirm-backdrop {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.45);
      z-index: 2147483200;
      display: none;
      align-items: center;
      justify-content: center;
    }
    .confirm-backdrop[data-open] { display: flex; }
    .confirm {
      width: 320px;
      max-width: calc(100vw - 32px);
      background: #2a2a2a;
      color: #e8e8e8;
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 12px 32px rgba(0,0,0,0.5);
      overflow: hidden;
      font-family: inherit;
      animation: deck-confirm-in 0.18s ease;
    }
    @keyframes deck-confirm-in {
      from { opacity: 0; transform: scale(0.96); }
      to { opacity: 1; transform: scale(1); }
    }
    .confirm .body { padding: 20px 20px 16px; }
    .confirm .title { font-size: 14px; font-weight: 600; margin-bottom: 4px; }
    .confirm .msg { font-size: 13px; line-height: 1.5; color: rgba(255,255,255,0.65); }
    .confirm .footer {
      padding: 14px 20px;
      background: #1f1f1f;
      border-top: 1px solid rgba(255,255,255,0.08);
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    .confirm button {
      appearance: none;
      font: inherit;
      font-size: 13px;
      font-weight: 500;
      padding: 8px 16px;
      border-radius: 8px;
      cursor: pointer;
    }
    .confirm .cancel {
      background: transparent;
      border: 0;
      color: rgba(255,255,255,0.8);
    }
    .confirm .cancel:hover { background: rgba(255,255,255,0.08); }
    .confirm .danger {
      background: #c96442;
      border: 1px solid rgba(0,0,0,0.15);
      color: #fff;
      box-shadow: 0 1px 3px rgba(166,50,68,0.3), 0 2px 6px rgba(166,50,68,0.18);
    }
    .confirm .danger:hover { background: #b5563a; }

    /* ── Print: one page per slide, no chrome ────────────────────────────
       The screen layout stacks every slide at inset:0 inside a scaled
       canvas; for print we want them in document flow at the authored
       design size so the browser paginates one slide per sheet. The
       @page size is set from the width/height attributes via the inline
       <style id="deck-stage-print-page"> that _syncPrintPageRule appends
       to the document (the @page at-rule has no effect inside shadow DOM). */
    @media print {
      :host {
        position: static;
        inset: auto;
        background: none;
        overflow: visible;
        color: inherit;
      }
      .stage { position: static; display: block; }
      .canvas {
        transform: none !important;
        width: auto !important;
        height: auto !important;
        background: none;
        will-change: auto;
      }
      ::slotted(*) {
        position: relative !important;
        inset: auto !important;
        width: var(--deck-design-w) !important;
        height: var(--deck-design-h) !important;
        box-sizing: border-box !important;
        /* Size containment: slotted content that overflows the design box
         * (an image-slot's aspect-ratio-derived width, say) must not count
         * toward Chromium's print document width — without this, an
         * abs-positioned child past the page edge shrinks the whole PDF
         * to fit (~75%). Containment is safe here because the definite
         * width/height above size the slide regardless of content.
         * (Absorbed from PR #2619 with its owner's agreement.) */
        contain: size !important;
        opacity: 1 !important;
        visibility: visible !important;
        pointer-events: auto;
        break-after: page;
        page-break-after: always;
        break-inside: avoid;
        overflow: hidden;
      }
      /* :last-child alone isn't enough once data-deck-skip hides the
         trailing slide(s) — the last *visible* slide still carries
         break-after:page and prints a blank sheet. _markLastVisible()
         maintains data-deck-last-visible on the last non-skipped slide. */
      ::slotted(*:last-child),
      ::slotted([data-deck-last-visible]) {
        break-after: auto;
        page-break-after: auto;
      }
      ::slotted([data-deck-skip]) { display: none !important; }
      .overlay, .rail, .rail-resize, .ctxmenu, .confirm-backdrop { display: none !important; }
    }
  `;
  class DeckStage extends HTMLElement {
    static get observedAttributes() {
      return ['width', 'height', 'noscale', 'no-rail'];
    }
    constructor() {
      super();
      this._root = this.attachShadow({
        mode: 'open'
      });
      this._index = 0;
      this._slides = [];
      // Explicit multi-selection (slide elements). Empty means the
      // selection is implicitly the current slide, so Delete always has
      // a well-defined target while the rail has focus.
      this._selected = new Set();
      this._selAnchor = null;
      this._notes = [];
      this._hideTimer = null;
      this._mouseIdleTimer = null;
      this._menuIndex = -1;
      // Overlay pinning: while the pointer is over the controls toolbar or
      // a control has keyboard focus, the idle-hide timeout must not
      // dismiss it (a pointer parked ON the controls doesn't generate
      // mousemove, so without the pin the toolbar vanishes under the
      // user's cursor after OVERLAY_HIDE_MS). Read by _flashOverlay's
      // hide timeout; cleared by mouseleave/focusout, which resume the
      // normal idle fade.
      this._overlayHover = false;
      this._overlayFocus = false;
      // Capability marker for the host's injected guest bundle. Copies
      // WITHOUT _navArrowsUpDown are frozen per-project builds that
      // predate native ArrowUp/ArrowDown slide nav — the bundle translates
      // Up/Down to Right/Left for those (installDeckArrowKeyTranslator in
      // apps/web/src/guest/edit-mode.ts) and must stand down here or every
      // press would advance twice. A marker, not a version number, so a
      // future capability can add its own independent probe.
      this._navArrowsUpDown = true;
      // Same contract for rail Delete/Backspace: copies WITHOUT
      // _railDeleteKey predate the thumbs' own Delete/Backspace binding,
      // and the bundle opens the delete confirm for them
      // (installDeckRailDeleteFallback in apps/web/src/guest/edit-mode.ts).
      // Current builds consume the key at the thumb (stopPropagation), so
      // the marker is belt-and-braces — it keeps the fallback standing
      // down even if a future build lets the key bubble past the thumb.
      this._railDeleteKey = true;
      // Same contract for skip-aware numbering: copies WITHOUT
      // _railSkipNumbers number every thumb 1..N and count skipped slides
      // in the overlay total — the bundle rewrites both for those
      // (installDeckSkipNumberingFallback in apps/web/src/guest/edit-mode.ts).
      // Here the component renumbers natively, so the fallback stands down.
      this._railSkipNumbers = true;
      this._onKey = this._onKey.bind(this);
      this._onResize = this._onResize.bind(this);
      this._onSlotChange = this._onSlotChange.bind(this);
      this._onMouseMove = this._onMouseMove.bind(this);
      this._onTap = this._onTap.bind(this);
      this._onMessage = this._onMessage.bind(this);
      // Capture-phase close so a click anywhere dismisses the menu, but
      // ignore clicks that land inside the menu itself — otherwise the
      // capture handler runs before the menu's own (bubble) handler and
      // clears _menuIndex out from under it.
      this._onDocClick = e => {
        if (this._menu && e.composedPath && e.composedPath().includes(this._menu)) return;
        this._closeMenu();
      };
    }
    get designWidth() {
      return parseInt(this.getAttribute('width'), 10) || DESIGN_W_DEFAULT;
    }
    get designHeight() {
      return parseInt(this.getAttribute('height'), 10) || DESIGN_H_DEFAULT;
    }
    connectedCallback() {
      // Presenter-view popup loads deckUrl?_snthumb=...#N for its prev/cur/
      // next thumbnails — the rail has no business rendering inside those
      // (wrong scale, and it offsets the stage so the thumb shows a gutter).
      if (/[?&]_snthumb=/.test(location.search)) this.setAttribute('no-rail', '');
      this._render();
      this._loadNotes();
      this._syncPrintPageRule();
      this._ensurePrintSizingMeta();
      this._ensureTextWrapDefaults();
      window.addEventListener('keydown', this._onKey);
      window.addEventListener('resize', this._onResize);
      window.addEventListener('mousemove', this._onMouseMove, {
        passive: true
      });
      window.addEventListener('message', this._onMessage);
      window.addEventListener('click', this._onDocClick, true);
      this.addEventListener('click', this._onTap);
      // Print lays every slide out as its own page, so [data-deck-active]-
      // gated entrance styles need the attribute on every slide (not just
      // the current one) or their content prints at the hidden base style.
      // The transient freeze style lands BEFORE the attributes so any
      // attribute-keyed transition fires at 0s (changing transition-
      // duration after a transition has started doesn't affect it).
      this._onBeforePrint = () => {
        this._syncPrintPageRule();
        // Self-heal: a departed doc-page may have removed the page-global
        // print-sizing meta this deck deferred to at connect time.
        this._ensurePrintSizingMeta();
        if (this._freezeStyle) this._freezeStyle.remove();
        this._freezeStyle = document.createElement('style');
        this._freezeStyle.textContent = '*,*::before,*::after{transition-duration:0s !important}';
        document.head.appendChild(this._freezeStyle);
        this._slides.forEach(s => s.setAttribute('data-deck-active', ''));
      };
      this._onAfterPrint = () => {
        this._applyIndex({
          showOverlay: false,
          broadcast: false
        });
        if (this._freezeStyle) {
          this._freezeStyle.remove();
          this._freezeStyle = null;
        }
      };
      window.addEventListener('beforeprint', this._onBeforePrint);
      window.addEventListener('afterprint', this._onAfterPrint);
      // Initial collection + layout happens via slotchange, which fires on mount.
      this._enableRail();
      // Hold the stage hidden until webfonts are ready so the first visible
      // paint has the deck's real typography — the :not(:defined) guard in
      // the page HTML only covers custom-element upgrade, not font load.
      // Capped so a 404'd font URL can't blank the deck indefinitely.
      this.setAttribute('data-fonts-pending', '');
      const reveal = () => this.removeAttribute('data-fonts-pending');
      // Unconditional cap — rAF can be suspended in a hidden iframe, which
      // would strand the one inside the rAF callback.
      setTimeout(reveal, 2000);
      // rAF first: fonts.ready is a pre-resolved promise until layout has
      // resolved the slotted text's font-family and pushed a FontFace into
      // 'loading'. Reading it here in connectedCallback (parse-time) would
      // settle the race in a microtask before any font fetch starts.
      requestAnimationFrame(() => {
        Promise.race([document.fonts ? document.fonts.ready : Promise.resolve(), new Promise(r => setTimeout(r, 2000))]).then(reveal, reveal);
      });
    }
    _enableRail() {
      // Idempotent — older host builds still post __omelette_rail_enabled.
      // no-rail guard keeps the observers/stylesheet walk off the cheap path
      // for presenter-popup thumbnail iframes (three per view — cur/prev/next).
      if (this._railEnabled || this.hasAttribute('no-rail')) return;
      this._railEnabled = true;
      // Per-viewer preference — restored alongside rail width. Default on;
      // only a stored '0' (from the TweaksPanel toggle) hides it.
      this._railVisible = true;
      try {
        if (localStorage.getItem('deck-stage.railVisible') === '0') this._railVisible = false;
      } catch (e) {}
      // Live thumbnail updates: watch the light-DOM slides for content
      // edits and re-clone just the affected thumb(s), debounced. Ignore
      // the data-deck-* / data-screen-label / data-om-validate attributes
      // this component itself writes so nav doesn't trigger spurious
      // refreshes — except data-deck-skip, which now arrives from the host
      // re-render and is what updates the rail badge, print bookkeeping,
      // and deckSkipped re-broadcast. Also ignore data-dc-tpl /
      // data-om-slide-id — host-reserved bookkeeping stamps (the host's
      // ATTR_RESERVED guard bounds them the same way) that structural
      // edits renumber/re-mint on slides whose content didn't change;
      // re-cloning on that churn is what made a slide move flash its
      // thumbnails.
      const OWN_ATTRS = /^data-(deck-(?!skip$)|screen-label$|om-(validate|slide-id)$|dc-tpl$)/;
      this._liveDirty = new Set();
      this._liveObserver = new MutationObserver(records => {
        for (const r of records) {
          if (r.type === 'attributes' && OWN_ATTRS.test(r.attributeName || '')) continue;
          let n = r.target;
          while (n && n.parentElement !== this) n = n.parentElement;
          // Skip/unskip is handled below without re-cloning (the badge sits
          // on the thumb wrapper, not the clone) — don't mark the slide
          // dirty for an attr change whose only visible effect is the badge.
          if (n && this._slideSet && this._slideSet.has(n) && !(r.type === 'attributes' && r.attributeName === 'data-deck-skip')) {
            this._liveDirty.add(n);
          }
          // Host-driven skip toggle: sync the rail badge + print + presenter
          // skipped-list the way _toggleSkip used to do locally.
          if (r.type === 'attributes' && r.attributeName === 'data-deck-skip' && n && this._slideSet && this._slideSet.has(n)) {
            const i = this._slides.indexOf(n);
            if (this._thumbs && this._thumbs[i]) {
              if (n.hasAttribute('data-deck-skip')) this._thumbs[i].thumb.setAttribute('data-skip', '');else this._thumbs[i].thumb.removeAttribute('data-skip');
            }
            this._markLastVisible();
            this._renumberRail();
            this._syncCount();
            try {
              window.postMessage({
                slideIndexChanged: this._index,
                deckTotal: this._slides.length,
                deckSkipped: this._skippedIndices()
              }, '*');
            } catch (e) {}
          }
        }
        if (this._liveDirty.size && !this._liveTimer) {
          this._liveTimer = setTimeout(() => {
            this._liveTimer = null;
            this._liveDirty.forEach(s => this._refreshThumb(s));
            this._liveDirty.clear();
          }, 200);
        }
      });
      this._liveObserver.observe(this, {
        subtree: true,
        childList: true,
        characterData: true,
        attributes: true
      });
      // Lazy thumbnail materialization — clone the slide only when its
      // frame scrolls into (or near) the rail viewport. rootMargin gives
      // ~4 thumbs of pre-load so fast scrolling doesn't flash blanks.
      this._railObserver = new IntersectionObserver(entries => {
        entries.forEach(e => {
          if (e.isIntersecting && e.target.__deckThumb) {
            this._materialize(e.target.__deckThumb);
          }
        });
      }, {
        root: this._rail,
        rootMargin: '400px 0px'
      });
      // Tweaks typically change CSS vars / attrs OUTSIDE <deck-stage>
      // (on <html>, <body>, a wrapper div, or a <style> tag), which
      // _liveObserver can't see. Re-snapshot author CSS (constructable
      // sheet is shared by reference, so one replaceSync updates every
      // thumb shadow root) and re-sync each thumb host's attrs + custom
      // properties. In-slide DOM mutations are _liveObserver's job.
      // Debounced so slider drags don't thrash.
      this._onTweakChange = () => {
        clearTimeout(this._tweakTimer);
        this._tweakTimer = setTimeout(() => {
          this._snapshotAuthorCss();
          // One getComputedStyle for the whole batch — each
          // getPropertyValue read below reuses the same computed style
          // as long as nothing invalidates layout between thumbs.
          const cs = getComputedStyle(this);
          (this._thumbs || []).forEach(t => {
            if (t.host) this._syncThumbHostAttrs(t.host, cs);
          });
        }, 120);
      };
      window.addEventListener('tweakchange', this._onTweakChange);
      // Stylesheets that finish loading AFTER the snapshot below never
      // reach the thumbs on their own: a still-pending <link> contributes
      // nothing to document.styleSheets, and nothing re-reads it on load,
      // so the live slides restyle while every clone keeps the stale
      // sheet. dc-runtime's helmet mounts design-system <link>s at render
      // time, so a deck-stage that connects first snapshots before that
      // CSS exists. Funnel late arrivals into the same debounced resync:
      // hook load/error on every current <link>, and watch <head> for
      // links and styles mounted or rewritten later. Deliberately not
      // rAF- or fonts.ready-driven — rAF is throttled/suspended in hidden
      // iframes (thumbnail/presenter contexts), and a font-file load
      // doesn't change cssRules, so it needs no resync.
      this._hookedLinks = [];
      this._hookSheetLoad = el => {
        if (!el.matches || !el.matches('link[rel~="stylesheet" i]')) return;
        if (this._hookedLinks.indexOf(el) !== -1) return;
        this._hookedLinks.push(el);
        el.addEventListener('load', this._onTweakChange);
        el.addEventListener('error', this._onTweakChange);
      };
      document.querySelectorAll('link[rel~="stylesheet" i]').forEach(this._hookSheetLoad);
      this._headObserver = new MutationObserver(records => {
        let resync = false;
        for (const r of records) {
          if (r.type === 'characterData') {
            // Only <style> text is CSS — a ticking <title> shouldn't
            // wake the resync forever.
            const p = r.target.parentNode;
            if (p && p.nodeName === 'STYLE') resync = true;
            continue;
          }
          if (r.type === 'attributes') {
            // A late rel/href rewrite turns an inert <link> into a
            // stylesheet (hook it; its load fires even on cache hits);
            // a media/disabled flip changes effective rules with no
            // event. Resync only if this link is or ever was a
            // stylesheet — favicon/preload/canonical href churn isn't
            // a resync.
            if (r.target.nodeName === 'LINK') {
              this._hookSheetLoad(r.target);
              if (this._hookedLinks.indexOf(r.target) !== -1) resync = true;
            } else if (r.target.nodeName === 'STYLE') resync = true;
            continue;
          }
          // childList: only links and styles carry CSS. A new <link> has
          // no rules until it loads — hook it rather than resync now; a
          // <style> mount/unmount or text-node swap takes effect
          // immediately. _freezeStyle (our beforeprint helper) is skipped
          // on add only — no removal-side guard: _onAfterPrint nulls the
          // ref before the observer fires, so that check would be dead;
          // the one debounced no-op resync per print is harmless.
          if (r.target.nodeName === 'STYLE') resync = true;
          for (const n of r.addedNodes) {
            if (n.nodeName === 'LINK') this._hookSheetLoad(n);else if (n.nodeName === 'STYLE' && n !== this._freezeStyle) resync = true;
          }
          for (const n of r.removedNodes) {
            if (n.nodeName === 'LINK') {
              const hi = this._hookedLinks.indexOf(n);
              if (hi !== -1) {
                this._hookedLinks.splice(hi, 1);
                n.removeEventListener('load', this._onTweakChange);
                n.removeEventListener('error', this._onTweakChange);
                resync = true;
              }
            } else if (n.nodeName === 'STYLE') resync = true;
          }
        }
        if (resync) this._onTweakChange();
      });
      this._headObserver.observe(document.head, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: ['rel', 'href', 'media', 'disabled']
      });
      this._snapshotAuthorCss();
      // Re-snapshot once any still-loading stylesheet settles — it throws on
      // .cssRules above and silently contributes '' → unstyled thumbs on a
      // cold mount. {once:true}; routed through the debounced handler.
      document.querySelectorAll('link[rel~="stylesheet"]').forEach(l => {
        try {
          if (l.sheet && l.sheet.cssRules) return;
        } catch (e) {}
        l.addEventListener('load', this._onTweakChange, {
          once: true
        });
        l.addEventListener('error', this._onTweakChange, {
          once: true
        });
      });
      if (document.fonts) document.fonts.ready.then(this._onTweakChange, this._onTweakChange);
      // Build the rail now that it's enabled — slotchange already fired,
      // so _renderRail's early-return skipped the initial build.
      this._syncRailHidden();
      this._renderRail();
      this._fit();
    }

    /** Snapshot document stylesheets into a constructable sheet that each
     *  thumbnail's nested shadow root adopts — so author CSS styles the
     *  cloned slide content without touching this component's chrome.
     *  Cross-origin sheets throw on .cssRules — skip them. Re-callable:
     *  the existing constructable sheet is reused via replaceSync so every
     *  already-adopted shadow root picks up the fresh CSS without re-adopt. */
    _snapshotAuthorCss() {
      // :root in an adopted sheet inside a shadow root matches nothing
      // (only the document root qualifies), so author rules like
      // `:root[data-voice="modern"] .serif` never reach the clones.
      // Rewrite :root → :host and mirror <html>'s data-*/class/lang onto
      // each thumb host (see _syncThumbHostAttrs) so the same selectors
      // match inside the thumbnail's shadow tree.
      const authorCss = Array.from(document.styleSheets).map(sh => {
        try {
          return Array.from(sh.cssRules).map(r => r.cssText).join('\n');
        } catch (e) {
          return '';
        }
      }).join('\n')
      // The shadow host is featureless outside the functional :host(...)
      // form, so any compound on :root — [attr], .class, #id, :pseudo —
      // must become :host(<compound>) not :host<compound>. Same for the
      // html type selector (Tailwind class-strategy dark mode emits
      // html.dark; Pico uses html[data-theme]), which has nothing to
      // match inside the thumb's shadow tree.
      .replace(/:root((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)/g, ':host($1)').replace(/:root\b/g, ':host').replace(/(^|[\s,>~+(}])html((?:\[[^\]]*\]|[.#][-\w]+|:[-\w]+(?:\([^)]*\))?)+)(?![-\w])/g, '$1:host($2)').replace(/(^|[\s,>~+(}])html(?![-\w])/g, '$1:host');
      // Every custom property the author references. _syncThumbHostAttrs
      // mirrors each one's *computed* value at <deck-stage> onto the
      // thumb host so the live value wins over the :host default above
      // regardless of which ancestor the tweak wrote to (<html>, <body>,
      // a wrapper div, or the deck-stage element itself all inherit
      // down to getComputedStyle(this)).
      this._authorVars = new Set(authorCss.match(/--[\w-]+/g) || []);
      try {
        if (!this._adoptedSheet) this._adoptedSheet = new CSSStyleSheet();
        this._adoptedSheet.replaceSync(authorCss);
      } catch (e) {
        this._adoptedSheet = null;
        this._authorCss = authorCss;
      }
    }
    _syncThumbHostAttrs(host, cs) {
      const de = document.documentElement;
      // setAttribute overwrites but can't delete — an attr removed from
      // <html> (toggleAttribute off, classList emptied) would linger on
      // the host and :host([data-*]) / :host(.foo) rules would keep
      // matching. Remove stale mirrored attrs first; iterate backward
      // because removeAttribute mutates the live NamedNodeMap.
      for (let i = host.attributes.length - 1; i >= 0; i--) {
        const n = host.attributes[i].name;
        if ((n.startsWith('data-') || n === 'class' || n === 'lang') && !de.hasAttribute(n)) {
          host.removeAttribute(n);
        }
      }
      for (const a of de.attributes) {
        if (a.name.startsWith('data-') || a.name === 'class' || a.name === 'lang') {
          host.setAttribute(a.name, a.value);
        }
      }
      // The :root→:host rewrite in _snapshotAuthorCss pins each custom
      // property to its stylesheet default on the thumb host, shadowing
      // the live value that would otherwise inherit. Tweaks can write the
      // live value on any ancestor — <html>, <body>, a wrapper div, the
      // deck-stage element — so read it as the *computed* value at
      // <deck-stage> (which sees the whole inheritance chain) rather than
      // trying to guess which element the author wrote to. Inline on the
      // host beats the :host{} rule. remove-stale covers vars dropped
      // from the stylesheet between snapshots.
      const vars = this._authorVars || new Set();
      for (let i = host.style.length - 1; i >= 0; i--) {
        const p = host.style[i];
        if (p.startsWith('--') && !vars.has(p)) host.style.removeProperty(p);
      }
      const live = cs || getComputedStyle(this);
      vars.forEach(p => {
        const v = live.getPropertyValue(p);
        if (v) host.style.setProperty(p, v.trim());else host.style.removeProperty(p);
      });
    }
    disconnectedCallback() {
      // A disconnect mid-drag never gets a dragend, so the document-level
      // drag tracker must be torn down here like every other global hook.
      this._stopDragTrack();
      window.removeEventListener('keydown', this._onKey);
      window.removeEventListener('resize', this._onResize);
      window.removeEventListener('mousemove', this._onMouseMove);
      window.removeEventListener('message', this._onMessage);
      window.removeEventListener('click', this._onDocClick, true);
      window.removeEventListener('beforeprint', this._onBeforePrint);
      window.removeEventListener('afterprint', this._onAfterPrint);
      if (this._freezeStyle) {
        this._freezeStyle.remove();
        this._freezeStyle = null;
      }
      this.removeEventListener('click', this._onTap);
      if (this._hideTimer) clearTimeout(this._hideTimer);
      if (this._mouseIdleTimer) clearTimeout(this._mouseIdleTimer);
      if (this._liveTimer) clearTimeout(this._liveTimer);
      if (this._tweakTimer) clearTimeout(this._tweakTimer);
      if (this._railAnimTimer) clearTimeout(this._railAnimTimer);
      if (this._scaleRaf) cancelAnimationFrame(this._scaleRaf);
      if (this._liveObserver) this._liveObserver.disconnect();
      if (this._railObserver) this._railObserver.disconnect();
      if (this._headObserver) this._headObserver.disconnect();
      (this._hookedLinks || []).forEach(l => {
        l.removeEventListener('load', this._onTweakChange);
        l.removeEventListener('error', this._onTweakChange);
      });
      this._hookedLinks = [];
      if (this._onTweakChange) window.removeEventListener('tweakchange', this._onTweakChange);
      // Drop the text-wrap defaults when the last deck-stage leaves, so a
      // deleted deck's typography can't restyle whatever replaces it.
      // (#deck-stage-print-page keeps its existing keep-forever lifecycle.)
      if (!document.querySelector('deck-stage')) {
        const tw = document.getElementById('deck-stage-text-wrap');
        if (tw) tw.remove();
        const ps = document.getElementById('deck-stage-print-sizing');
        if (ps) ps.remove();
      }
    }
    attributeChangedCallback() {
      if (this._canvas) {
        this._canvas.style.width = this.designWidth + 'px';
        this._canvas.style.height = this.designHeight + 'px';
        this._canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
        this._canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
        if (this._rail) {
          this._rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
        }
        this._fit();
        this._scaleThumbs();
        this._syncPrintPageRule();
      }
    }
    _render() {
      const style = document.createElement('style');
      style.textContent = stylesheet;
      const stage = document.createElement('div');
      stage.className = 'stage';
      const canvas = document.createElement('div');
      canvas.className = 'canvas';
      canvas.style.width = this.designWidth + 'px';
      canvas.style.height = this.designHeight + 'px';
      canvas.style.setProperty('--deck-design-w', this.designWidth + 'px');
      canvas.style.setProperty('--deck-design-h', this.designHeight + 'px');
      const slot = document.createElement('slot');
      slot.addEventListener('slotchange', this._onSlotChange);
      canvas.appendChild(slot);
      stage.appendChild(canvas);

      // Overlay: compact, solid black, with clickable controls.
      const overlay = document.createElement('div');
      overlay.className = 'overlay export-hidden';
      overlay.setAttribute('role', 'toolbar');
      overlay.setAttribute('aria-label', 'Deck controls');
      overlay.setAttribute('data-omelette-chrome', '');
      overlay.innerHTML = `
        <button class="btn prev" type="button" aria-label="Previous slide" title="Previous (←)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M10 3L5 8l5 5"/></svg>
        </button>
        <span class="count" aria-live="polite"><span class="current">1</span><span class="sep">/</span><span class="total">1</span></span>
        <button class="btn next" type="button" aria-label="Next slide" title="Next (→)">
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 3l5 5-5 5"/></svg>
        </button>
        <span class="divider"></span>
        <button class="btn reset" type="button" aria-label="Reset to first slide" title="Reset (R)">Reset<span class="kbd">R</span></button>
      `;
      overlay.querySelector('.prev').addEventListener('click', () => this._advance(-1, 'click'));
      overlay.querySelector('.next').addEventListener('click', () => this._advance(1, 'click'));
      overlay.querySelector('.reset').addEventListener('click', () => this._go(0, 'click'));

      // Pin the controls while the user is interacting with them —
      // hovering, or keyboard focus on a control. The hidden overlay is
      // pointer-events:none, so these only ever engage while it's already
      // visible. 'pointer' source: these are user-interaction paths, so
      // they may show/refresh the overlay even while presenting (see
      // _flashOverlay).
      overlay.addEventListener('mouseenter', () => {
        this._overlayHover = true;
        this._flashOverlay('pointer');
      });
      overlay.addEventListener('mouseleave', () => {
        const hadPin = this._overlayHover;
        this._overlayHover = false;
        // Resume the idle fade — never summon. Without the guard, a
        // mouseleave that fires because the overlay was force-hidden
        // (presenting entry flips it to pointer-events:none under the
        // cursor) would pop the controls right back up.
        if (hadPin || overlay.hasAttribute('data-visible')) this._flashOverlay('pointer');
      });
      overlay.addEventListener('focusin', e => {
        // Keyboard-origin focus only (:focus-visible): a mouse click also
        // focuses the clicked button, and pinning on that would hold the
        // controls open indefinitely after a single click — the hover pin
        // already covers the mouse case. Engines without :focus-visible
        // fall back to pinning on any focus (the safe direction).
        var kb = true;
        try {
          var t = e.target;
          kb = !(t && t.matches && !t.matches(':focus-visible'));
        } catch (err) {
          kb = true;
        }
        if (!kb) return;
        this._overlayFocus = true;
        this._flashOverlay('pointer');
      });
      overlay.addEventListener('focusout', e => {
        // Only unpin when focus truly left the toolbar — tabbing between
        // its buttons stays pinned. relatedTarget is null when focus
        // leaves the document entirely; treat that as leaving.
        if (e.relatedTarget && overlay.contains(e.relatedTarget)) return;
        const hadPin = this._overlayFocus;
        this._overlayFocus = false;
        // Resume-the-fade only (see mouseleave): a click-focused button
        // losing focus to a later stage click must not summon the
        // controls mid-presentation.
        if (hadPin || overlay.hasAttribute('data-visible')) this._flashOverlay('pointer');
      });

      // Thumbnail rail + context menu. Thumbnails are populated in
      // _renderRail() after _collectSlides().
      const rail = document.createElement('div');
      rail.className = 'rail export-hidden';
      rail.setAttribute('data-omelette-chrome', '');
      // Edit mode hooks wheel to pan the canvas; this opts the rail's own
      // scrollview out so thumbnails stay scrollable while editing.
      rail.setAttribute('data-dc-wheel-passthru', '');
      rail.style.setProperty('--deck-aspect', this.designWidth + '/' + this.designHeight);
      // Edge auto-scroll while dragging a thumb near the rail's top/bottom
      // so off-screen drop targets are reachable. Native dragover fires
      // continuously while the pointer is stationary, so a per-event nudge
      // (ramped by edge proximity) is enough — no rAF loop needed.
      rail.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        const r = rail.getBoundingClientRect();
        const EDGE = 40;
        const dt = e.clientY - r.top;
        const db = r.bottom - e.clientY;
        if (dt < EDGE) rail.scrollTop -= Math.ceil((EDGE - dt) / 3);else if (db < EDGE) rail.scrollTop += Math.ceil((EDGE - db) / 3);
      });
      const menu = document.createElement('div');
      menu.className = 'ctxmenu export-hidden';
      menu.setAttribute('data-omelette-chrome', '');
      menu.innerHTML = `
        <button type="button" data-act="skip">Skip slide</button>
        <button type="button" data-act="up">Move up</button>
        <button type="button" data-act="down">Move down</button>
        <button type="button" data-act="duplicate">Duplicate slide</button>
        <hr>
        <button type="button" data-act="delete">Delete slide</button>
      `;
      menu.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        const i = this._menuIndex;
        const list = this._menuIndices;
        this._closeMenu();
        if (act === 'skip') this._toggleSkip(i);else if (act === 'up') this._moveSlide(i, i - 1);else if (act === 'down') this._moveSlide(i, i + 1);else if (act === 'duplicate') this._duplicateSlide(i);else if (act === 'delete') this._openConfirm(list && list.length ? list : [i]);
      });
      menu.addEventListener('contextmenu', e => e.preventDefault());

      // Rail resize handle — drag to set --deck-rail-w, persisted to
      // localStorage so the width survives reloads.
      const resize = document.createElement('div');
      resize.className = 'rail-resize export-hidden';
      resize.setAttribute('data-omelette-chrome', '');
      resize.addEventListener('pointerdown', e => {
        e.preventDefault();
        resize.setPointerCapture(e.pointerId);
        resize.setAttribute('data-dragging', '');
        const move = ev => this._setRailWidth(ev.clientX);
        const up = () => {
          resize.removeEventListener('pointermove', move);
          resize.removeEventListener('pointerup', up);
          resize.removeEventListener('pointercancel', up);
          resize.removeAttribute('data-dragging');
          try {
            localStorage.setItem('deck-stage.railWidth', String(this._railPx));
          } catch (err) {}
        };
        resize.addEventListener('pointermove', move);
        resize.addEventListener('pointerup', up);
        resize.addEventListener('pointercancel', up);
      });

      // Delete-confirm dialog — mirrors the SPA's ConfirmDialog layout.
      const confirm = document.createElement('div');
      confirm.className = 'confirm-backdrop export-hidden';
      confirm.setAttribute('data-omelette-chrome', '');
      confirm.innerHTML = `
        <div class="confirm" role="dialog" aria-modal="true">
          <div class="body">
            <div class="title">Delete slide?</div>
            <div class="msg">This slide will be removed from the deck.</div>
          </div>
          <div class="footer">
            <button type="button" class="cancel">Cancel</button>
            <button type="button" class="danger">Delete</button>
          </div>
        </div>
      `;
      confirm.addEventListener('click', e => {
        if (e.target === confirm) {
          this._closeConfirm();
          this._focusCurrentThumb();
        }
      });
      confirm.querySelector('.cancel').addEventListener('click', () => {
        this._closeConfirm();
        this._focusCurrentThumb();
      });
      confirm.querySelector('.danger').addEventListener('click', () => {
        // Re-resolve at click time — the elements are the user's actual
        // selection; their indices may have shifted since confirm-open.
        const list = (this._confirmEls || []).map(el => this._slides.indexOf(el)).filter(i => i >= 0);
        this._closeConfirm();
        this._deleteSlides(list);
        this._focusCurrentThumb();
      });
      this._root.append(style, rail, resize, stage, overlay, menu, confirm);
      this._canvas = canvas;
      this._stage = stage;
      this._slot = slot;
      this._overlay = overlay;
      this._rail = rail;
      this._resize = resize;
      this._menu = menu;
      this._confirm = confirm;
      this._countEl = overlay.querySelector('.current');
      this._totalEl = overlay.querySelector('.total');

      // Restore persisted rail width.
      let rw = 188;
      try {
        const s = localStorage.getItem('deck-stage.railWidth');
        if (s) rw = parseInt(s, 10) || rw;
      } catch (err) {}
      this._setRailWidth(rw);
      this._syncRailHidden();
    }
    _setRailWidth(px) {
      const w = Math.max(120, Math.min(360, Math.round(px)));
      this._railPx = w;
      this.style.setProperty('--deck-rail-w', w + 'px');
      this._fit();
      // _scaleThumbs forces a sync layout (frame.offsetWidth) then writes
      // N transforms. During a resize drag this runs per-pointermove;
      // coalesce to one per frame.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }

    /** @page must live in the document stylesheet — it's a no-op inside
     *  shadow DOM. (Re-)append so any author @page landing later in
     *  source order can't reintroduce a margin and push each slide onto
     *  two sheets; called again from beforeprint. */
    _syncPrintPageRule() {
      const id = 'deck-stage-print-page';
      let tag = document.getElementById(id);
      if (!tag) {
        tag = document.createElement('style');
        tag.id = id;
      }
      (document.body || document.head).appendChild(tag);
      tag.textContent = '@page { size: ' + this.designWidth + 'px ' + this.designHeight + 'px; margin: 0; } ' + '@media print { html, body { margin: 0 !important; padding: 0 !important; background: none !important; overflow: visible !important; height: auto !important; } ' + '* { -webkit-print-color-adjust: exact; print-color-adjust: exact; ' + 'backdrop-filter: none !important; -webkit-backdrop-filter: none !important; } ' +
      // Jump authored animations/transitions to their end state so print
      // never captures mid-entrance — pairs with the beforeprint handler
      // in connectedCallback that sets data-deck-active on every slide.
      '*, *::before, *::after { animation-delay: -99s !important; animation-duration: .001s !important; ' + 'animation-iteration-count: 1 !important; animation-fill-mode: both !important; ' + 'animation-play-state: running !important; transition-duration: 0s !important; } }';
    }

    /** Announces the deck's print-sizing mode to the host app:
     *  meta[name="omelette-print-sizing"] content "default-landscape" — a
     *  deck prints one slide per page on the user's paper size, landscape.
     *  The export path probes the meta to decide what true paper size to
     *  inject at print time (the @page px rule above stays as the
     *  standalone-print fallback; an injected later rule overrides it).
     *  Never overrides an authored meta or another component's; removed
     *  when the last deck-stage leaves. data-omelette-injected keeps it
     *  out of serialized source. */
    _ensurePrintSizingMeta() {
      if (document.querySelector('meta[name="omelette-print-sizing"]')) return;
      const tag = document.createElement('meta');
      tag.id = 'deck-stage-print-sizing';
      tag.name = 'omelette-print-sizing';
      tag.content = 'default-landscape';
      tag.setAttribute('data-omelette-injected', '');
      document.head.appendChild(tag);
    }

    /** Typographic defaults for slide text: balance headings, avoid
     *  widowed/orphaned words in body copy (browsers without text-wrap
     *  support drop the declarations). Zero-specificity via :where() so
     *  any text-wrap authored on those elements wins. Lives in the document,
     *  not the shadow root, for two reasons: document rules reach the
     *  slotted (light DOM) slides, and _snapshotAuthorCss copies document
     *  stylesheets into each thumbnail's shadow root, so the thumbs wrap
     *  the same way — a deck-stage-scoped selector would match nothing
     *  there. data-omelette-injected marks the tag for the host editor
     *  to strip at serialize, so it is never written back as authored
     *  source. */
    _ensureTextWrapDefaults() {
      if (document.getElementById('deck-stage-text-wrap')) return;
      const tag = document.createElement('style');
      tag.id = 'deck-stage-text-wrap';
      tag.setAttribute('data-omelette-injected', '');
      tag.textContent = ':where(h1,h2,h3,h4,h5,h6){text-wrap:balance}' + ':where(p,li,blockquote,figcaption){text-wrap:pretty}';
      document.head.appendChild(tag);
    }
    _onSlotChange() {
      // Self-mutate path already reconciled synchronously and emitted
      // slidechange; skip the async slotchange it caused.
      if (this._squelchSlotChange) {
        this._squelchSlotChange = false;
        return;
      }
      // Primary lock-clear is the host's __deck_rail_ack; this clears on a
      // dropped ack so the rail can't stay dead.
      this._railLock = false;
      this._collectSlides();
      this._restoreIndex();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'init'
      });
      this._fit();
      // The deck just changed under any open rail surface — an open
      // confirm or menu is a question about the OLD deck (its labels and
      // counts may now lie), so close them rather than let a stale
      // answer fire. The element-held selection re-resolves, but the
      // user should re-read what they're deleting.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        this._closeConfirm();
        // The dialog held focus (danger button); hand it back to the rail.
        this._focusCurrentThumb(true);
      }
      if (this._menu && this._menu.hasAttribute('data-open')) this._closeMenu();
      // Editor-mode deletes rebuild the rail through here; a confirmed
      // delete that started from the keyboard still owes focus to the
      // (new) current thumb.
      if (this._pendingRailRefocus) this._focusCurrentThumb(true);
    }
    _collectSlides() {
      const assigned = this._slot.assignedElements({
        flatten: true
      });
      this._slides = assigned.filter(el => {
        // Skip template/style/script nodes even if someone slots them.
        const tag = el.tagName;
        return tag !== 'TEMPLATE' && tag !== 'SCRIPT' && tag !== 'STYLE';
      });
      this._slideSet = new Set(this._slides);
      // Selection is element-keyed: drop entries whose slide is gone
      // (deleted, or replaced wholesale by a host re-render).
      if (this._selected && this._selected.size) {
        this._selected.forEach(s => {
          if (!this._slideSet.has(s)) this._selected.delete(s);
        });
      }
      if (this._selAnchor && !this._slideSet.has(this._selAnchor)) this._selAnchor = null;
      this._slides.forEach((slide, i) => {
        const n = i + 1;
        slide.setAttribute('data-screen-label', `${pad2(n)} ${getSlideLabel(slide)}`);

        // Validation attribute for comment flow / auto-checks.
        if (!slide.hasAttribute('data-om-validate')) {
          slide.setAttribute('data-om-validate', VALIDATE_ATTR);
        }
        slide.setAttribute('data-deck-slide', String(i));
      });
      if (this._index >= this._slides.length) this._index = Math.max(0, this._slides.length - 1);
      this._markLastVisible();
      this._syncCount();
      this._renderRail();
    }

    /** Tag the last non-skipped slide so print CSS can drop its
     *  break-after (see the @media print comment above — :last-child
     *  alone matches a hidden skipped slide). */
    _markLastVisible() {
      let last = null;
      this._slides.forEach(s => {
        s.removeAttribute('data-deck-last-visible');
        if (!s.hasAttribute('data-deck-skip')) last = s;
      });
      if (last) last.setAttribute('data-deck-last-visible', '');
    }
    _loadNotes() {
      // Per-slide data-speaker-notes is authoritative when present (attrs
      // travel with the element on reorder/dup/delete); a slide without
      // the attr falls through to the legacy #speaker-notes JSON array
      // PER SLIDE so a single attr on a JSON-authored deck doesn't blank
      // the rest.
      const tag = document.getElementById('speaker-notes');
      let json = null;
      if (tag) try {
        const p = JSON.parse(tag.textContent || '[]');
        if (Array.isArray(p)) json = p;
      } catch (e) {
        console.warn('[deck-stage] Failed to parse #speaker-notes JSON:', e);
      }
      this._notes = this._slides.map((s, i) => {
        const a = s.getAttribute('data-speaker-notes');
        return a !== null ? a : json && typeof json[i] === 'string' ? json[i] : '';
      });
    }
    _restoreIndex() {
      // The host's ?slide= param is delivered as a #<int> hash (1-indexed) on
      // the iframe src. No hash → slide 1; the deck itself keeps no position
      // state across loads.
      const h = (location.hash || '').match(/^#(\d+)$/);
      if (h) {
        const n = parseInt(h[1], 10) - 1;
        if (n >= 0 && n < this._slides.length) this._index = n;
      }
    }
    _applyIndex({
      showOverlay = true,
      broadcast = true,
      reason = 'init'
    } = {}) {
      if (!this._slides.length) return;
      const prev = this._prevIndex == null ? -1 : this._prevIndex;
      const curr = this._index;
      // Keep the iframe's own hash in sync so an in-iframe location.reload()
      // (reload banner path in viewer-handle.ts) lands on the current slide,
      // not the stale deep-link hash from initial load.
      try {
        history.replaceState(null, '', '#' + (curr + 1));
      } catch (e) {}
      this._slides.forEach((s, i) => {
        if (i === curr) s.setAttribute('data-deck-active', '');else s.removeAttribute('data-deck-active');
      });
      this._syncCount();
      // Follow-scroll on every navigation (init deep-link, keyboard, click,
      // tap, external goTo) — the only time we *don't* want the rail to
      // track current is after a rail-internal mutation, where _renderRail
      // has already restored the user's scroll position and yanking back to
      // current would undo it.
      this._syncRail(reason !== 'mutation');
      if (broadcast) {
        // (1) Legacy: host-window postMessage for speaker-notes renderers.
        try {
          window.postMessage({
            slideIndexChanged: curr,
            deckTotal: this._slides.length,
            deckSkipped: this._skippedIndices()
          }, '*');
        } catch (e) {}

        // (2) In-page CustomEvent on the <deck-stage> element itself.
        //     Bubbles and composes out of shadow DOM so slide code can listen:
        //       document.querySelector('deck-stage').addEventListener('slidechange', e => {
        //         e.detail.index, e.detail.previousIndex, e.detail.total, e.detail.slide, e.detail.reason
        //       });
        const detail = {
          index: curr,
          previousIndex: prev,
          total: this._slides.length,
          slide: this._slides[curr] || null,
          previousSlide: prev >= 0 ? this._slides[prev] || null : null,
          reason: reason // 'init' | 'keyboard' | 'click' | 'tap' | 'api'
        };
        this.dispatchEvent(new CustomEvent('slidechange', {
          detail,
          bubbles: true,
          composed: true
        }));
      }
      this._prevIndex = curr;
      if (showOverlay) this._flashOverlay();
    }
    _flashOverlay(source) {
      // Host posts __omelette_presenting while in fullscreen/tab
      // presentation mode. While presenting, the overlay is
      // pointer-summoned only: it appears on mouse movement and while the
      // user hovers/focuses the controls (source 'pointer'), but never
      // flashes on slide changes or nav-key presses (the default 'auto'
      // source) — a keyboard-driven advance must not blink chrome at the
      // audience. Outside presenting, both sources flash as before.
      if (!this._overlay) return;
      if (this._presenting && source !== 'pointer') return;
      this._overlay.setAttribute('data-visible', '');
      if (this._hideTimer) clearTimeout(this._hideTimer);
      this._hideTimer = setTimeout(() => {
        // Pinned by hover or focus on the controls — keep them up. The
        // matching mouseleave/focusout re-flashes, so the idle fade
        // resumes from that moment.
        if (this._overlayHover || this._overlayFocus) return;
        this._overlay.removeAttribute('data-visible');
      }, OVERLAY_HIDE_MS);
    }
    _railWidth() {
      // State-based, no offsetWidth: the first _fit() can run before the
      // rail has had layout on some load paths, and a 0 there paints the
      // slide full-width for one frame before the post-slotchange _fit()
      // corrects it.
      if (!this._railEnabled || !this._railVisible || this.hasAttribute('no-rail') || this.hasAttribute('noscale') || this._presenting || this._previewMode || NARROW_MQ.matches) return 0;
      return this._railPx || 0;
    }
    _fit() {
      if (!this._canvas) return;
      const stage = this._canvas.parentElement;
      // PPTX export sets noscale so the DOM capture sees authored-size
      // geometry — the scaled canvas is in shadow DOM, so the exporter's
      // resetTransformSelector can't reach .canvas.style.transform directly.
      if (this.hasAttribute('noscale')) {
        this._canvas.style.transform = 'none';
        if (stage) stage.style.left = '0';
        if (this._overlay) this._overlay.style.marginLeft = '0';
        return;
      }
      const rw = this._railWidth();
      if (stage) stage.style.left = rw + 'px';
      // Overlay is centred on the viewport via left:50% + translate(-50%);
      // marginLeft shifts the centre by rw/2 so it lands in the middle of
      // the [rw, innerWidth] stage region.
      if (this._overlay) this._overlay.style.marginLeft = rw / 2 + 'px';
      const vw = window.innerWidth - rw;
      const vh = window.innerHeight;
      const s = Math.min(vw / this.designWidth, vh / this.designHeight);
      this._canvas.style.transform = `scale(${s})`;
    }
    _onResize() {
      this._fit();
      // Crossing the narrow-viewport breakpoint reveals the rail — rerun the
      // thumbnail scale the same way _setRailWidth does.
      if (!this._scaleRaf) {
        this._scaleRaf = requestAnimationFrame(() => {
          this._scaleRaf = null;
          this._scaleThumbs();
        });
      }
    }
    _onMouseMove() {
      // Keep overlay visible while mouse moves; hide after idle. 'pointer'
      // source: mouse movement summons the controls even while presenting.
      this._flashOverlay('pointer');
    }
    _onMessage(e) {
      const d = e.data;
      if (d && typeof d.__omelette_presenting === 'boolean') {
        // Unchanged value → idempotent re-delivery (the guest bundle
        // re-posts when a deck mounts mid-presentation, and host + bundle
        // can both deliver at entry). Skip the resets: re-running the
        // entry work on every delivery would dismiss the pointer-summoned
        // overlay under a hovering cursor and close menus on every slide
        // change. Mirrors the preview_mode branch's unchanged-value guard
        // below.
        if (d.__omelette_presenting !== !!this._presenting) {
          this._presenting = d.__omelette_presenting;
          // A presenting transition invalidates interaction pins: carried
          // across the flip, a stale pin would hold the first summoned
          // overlay open with no pointer anywhere near it. Hide on BOTH
          // transitions: entry cleans the audience's screen, and on exit a
          // pin-skipped hide timeout may have left data-visible set with
          // no timer armed — without this, the footer would linger in the
          // editor until the next mousemove. The next interaction
          // re-summons it either way.
          this._overlayHover = false;
          this._overlayFocus = false;
          if (this._overlay) {
            this._overlay.removeAttribute('data-visible');
            if (this._hideTimer) clearTimeout(this._hideTimer);
          }
          this._syncRailHidden();
          this._closeMenu();
          this._closeConfirm();
          this._fit();
          this._scaleThumbs();
        }
      }
      // Host's Preview segment (ViewerMode='none'): the rail's drag-reorder /
      // right-click skip-delete affordances are editing chrome, so hide it
      // while the user is just looking at the deck. Same hard-hide path as
      // presenting; independent of the user's _railVisible preference so
      // returning to Edit restores whatever they had.
      if (d && typeof d.__omelette_preview_mode === 'boolean') {
        if (d.__omelette_preview_mode === this._previewMode) return;
        this._previewMode = d.__omelette_preview_mode;
        this._syncRailHidden();
        this._closeMenu();
        this._closeConfirm();
        this._fit();
        this._scaleThumbs();
      }
      // Host has processed a dc-op; rail input is safe again. Not tied to
      // slotchange — setAttr and refusal don't fire one. On refusal,
      // revert the optimistic _index/hash adjustment so the next nav
      // starts from what's actually on screen.
      if (d && d.__dc_op_ack) {
        this._railLock = false;
        if (d.applied === false && this._indexBeforeEmit != null) {
          this._index = this._indexBeforeEmit;
          try {
            history.replaceState(null, '', '#' + (this._index + 1));
          } catch (e) {}
        }
        this._indexBeforeEmit = null;
        // A refused op never re-renders, so slotchange won't restore the
        // keyboard flow's focus — do it here. (Applied ops refocus in
        // _onSlotChange, after the rail has been rebuilt.)
        if (d.applied === false && this._pendingRailRefocus) {
          this._focusCurrentThumb(true);
        }
      }
      // Per-viewer show/hide, driven by the TweaksPanel's auto-injected
      // "Thumbnail rail" toggle (or any author script). Independent of
      // whether the Tweaks panel itself is open — closing the panel
      // doesn't change rail visibility. Persists alongside rail width.
      if (d && d.type === '__deck_rail_visible' && typeof d.on === 'boolean') {
        if (d.on === this._railVisible) return;
        this._railVisible = d.on;
        try {
          localStorage.setItem('deck-stage.railVisible', d.on ? '1' : '0');
        } catch (e) {}
        // Arm the transition, commit it, then flip state — otherwise the
        // browser coalesces both writes and nothing animates on show.
        this.setAttribute('data-rail-anim', '');
        void (this._rail && this._rail.offsetHeight);
        this._syncRailHidden();
        this._fit();
        this._scaleThumbs();
        clearTimeout(this._railAnimTimer);
        this._railAnimTimer = setTimeout(() => this.removeAttribute('data-rail-anim'), 220);
      }
      if (d && d.type === '__omelette_rail_enabled') this._enableRail();
    }
    _syncRailHidden() {
      if (!this._rail) return;
      // data-presenting is the hard hide (display:none) for flag-off,
      // presentation mode, and the host's Preview segment — instant, no
      // transition. data-user-hidden is the soft hide (translateX(-100%))
      // for the viewer's rail toggle, so show/hide slides under
      // :host([data-rail-anim]).
      const hard = !this._railEnabled || this._presenting || this._previewMode;
      if (hard) this._rail.setAttribute('data-presenting', '');else this._rail.removeAttribute('data-presenting');
      if (!this._railVisible) this._rail.setAttribute('data-user-hidden', '');else this._rail.removeAttribute('data-user-hidden');
      // translateX hide leaves thumbs (tabIndex=0) in the tab order —
      // inert keeps them unfocusable while the rail is off-screen.
      this._rail.inert = hard || !this._railVisible;
    }
    _onTap(e) {
      // Touch-only — keyboard + the overlay toolbar cover nav on desktop.
      if (FINE_POINTER_MQ.matches) return;
      // Only taps that land on the stage (slide content or letterbox); the
      // overlay / rail / menus are siblings with their own click handlers.
      const path = e.composedPath();
      if (!this._stage || !path.includes(this._stage)) return;
      // Let interactive slide content keep the tap. composedPath (not
      // e.target.closest) so we see through open shadow roots — a <button>
      // inside a slide-authored custom element retargets e.target to the
      // host but still appears in the composed path.
      if (e.defaultPrevented) return;
      for (const n of path) {
        if (n === this._stage) break;
        if (n.matches && n.matches(INTERACTIVE_SEL)) return;
      }
      e.preventDefault();
      const rw = this._railWidth();
      const mid = rw + (window.innerWidth - rw) / 2;
      this._advance(e.clientX < mid ? -1 : 1, 'tap');
    }
    _onKey(e) {
      // Ignore when the user is typing. composedPath()[0], not e.target: a
      // window-level keydown retargets e.target to the shadow host, which
      // would miss an <input> or contenteditable inside a web component on
      // a slide (same reason _onTap uses composedPath).
      const t = e.composedPath ? e.composedPath()[0] : e.target;
      if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
      // Confirm dialog swallows nav keys while open; Escape cancels. Enter
      // is left to the focused button's native activation so Tab→Cancel
      // →Enter activates Cancel, not the window-level confirm path.
      if (this._confirm && this._confirm.hasAttribute('data-open')) {
        if (e.key === 'Escape') {
          this._closeConfirm();
          this._focusCurrentThumb();
          e.preventDefault();
        }
        return;
      }
      if (e.key === 'Escape' && this._menu && this._menu.hasAttribute('data-open')) {
        this._closeMenu();
        e.preventDefault();
        return;
      }
      if (e.key === 'Escape' && this._selected.size) {
        // Collapse the multi-selection back to the current slide (the
        // implicit selection), not to nothing.
        this._clearSelection();
        e.preventDefault();
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const key = e.key;
      let handled = true;
      if (key === 'ArrowRight' || key === 'PageDown' || key === ' ' || key === 'Spacebar') {
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowLeft' || key === 'PageUp') {
        this._advance(-1, 'keyboard');
      } else if (key === 'ArrowDown' && !e.defaultPrevented) {
        // ↓/↑ page slides like →/← (Keynote/PowerPoint parity). Window
        // level only: rail thumbs keep their own ↑/↓ walk (their handler
        // stops propagation before this one), and the typing guard above
        // already covers inputs and contenteditable slide content.
        // Deliberate tradeoff: like Space/PageDown before them, these are
        // scroll keys — slide content that wants keyboard scrolling claims
        // them with preventDefault, which this branch honors (checked here
        // and not for the long-standing keys above, so ←/→/Space behavior
        // is unchanged and ↑/↓ behave identically on frozen copies, whose
        // translator in the guest bundle applies the same guard).
        this._advance(1, 'keyboard');
      } else if (key === 'ArrowUp' && !e.defaultPrevented) {
        this._advance(-1, 'keyboard');
      } else if (key === 'Home') {
        this._go(0, 'keyboard');
      } else if (key === 'End') {
        this._go(this._slides.length - 1, 'keyboard');
      } else if (key === 'r' || key === 'R') {
        this._go(0, 'keyboard');
      } else if (/^[0-9]$/.test(key)) {
        // 1..9 jump to that slide; 0 jumps to 10.
        const n = key === '0' ? 9 : parseInt(key, 10) - 1;
        if (n < this._slides.length) this._go(n, 'keyboard');
      } else {
        handled = false;
      }
      if (handled) {
        e.preventDefault();
        this._flashOverlay();
      }
    }
    _go(i, reason = 'api') {
      // User-initiated navigation collapses a multi-selection down to
      // the (implicit) current slide, like Keynote's arrow keys. 'click'
      // handles its own selection; programmatic reasons leave it alone.
      if (reason === 'keyboard' || reason === 'tap') this._clearSelection();
      if (!this._slides.length) return;
      const clamped = Math.max(0, Math.min(this._slides.length - 1, i));
      if (clamped === this._index) {
        this._flashOverlay();
        return;
      }
      this._index = clamped;
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason
      });
    }

    /** Step forward/back skipping any slide marked data-deck-skip. Falls
     *  back to _go's clamp-at-ends behaviour (flash overlay) when there's
     *  nothing further in that direction. */
    _advance(dir, reason) {
      if (!this._slides.length) return;
      let i = this._index + dir;
      while (i >= 0 && i < this._slides.length && this._slides[i].hasAttribute('data-deck-skip')) {
        i += dir;
      }
      if (i < 0 || i >= this._slides.length) {
        this._flashOverlay();
        return;
      }
      this._go(i, reason);
    }

    // ── Thumbnail rail ────────────────────────────────────────────────────
    //
    // Thumbs are keyed by slide element and reused across _renderRail()
    // calls, so a reorder/delete is an O(changed) DOM shuffle instead of an
    // O(N) teardown-and-re-clone. Each thumb starts as a lightweight shell
    // (num + empty frame); the clone is materialized lazily by an
    // IntersectionObserver when the frame scrolls into (or near) view, so
    // only visible-ish slides pay the clone + image-decode cost.

    _renderRail() {
      if (!this._rail || !this._railEnabled) {
        this._thumbs = [];
        return;
      }
      // FLIP: record each *materialized* thumb's top before the reconcile.
      // Off-screen (non-materialized) thumbs don't need the animation and
      // skipping their getBoundingClientRect saves a forced layout per
      // off-screen thumb on large decks.
      const prevTops = new Map();
      (this._thumbs || []).forEach(({
        thumb,
        slide,
        host
      }) => {
        if (host) prevTops.set(slide, thumb.getBoundingClientRect().top);
      });
      const st = this._rail.scrollTop;

      // Reconcile: reuse thumbs that already exist for a slide, create
      // shells for new slides, drop thumbs for removed slides.
      const bySlide = new Map();
      (this._thumbs || []).forEach(t => bySlide.set(t.slide, t));
      const next = [];
      this._slides.forEach(slide => {
        let t = bySlide.get(slide);
        if (t) bySlide.delete(slide);else t = this._makeThumb(slide);
        next.push(t);
      });
      // Orphans — slides removed since last render.
      bySlide.forEach(t => {
        if (this._railObserver) this._railObserver.unobserve(t.frame);
        t.thumb.remove();
      });
      // Put thumbs into document order to match _slides. insertBefore on
      // an already-correctly-placed node is a no-op, so this is cheap
      // when nothing moved.
      next.forEach((t, i) => {
        const want = t.thumb;
        const at = this._rail.children[i];
        if (at !== want) this._rail.insertBefore(want, at || null);
        t.i = i;
        if (t.slide.hasAttribute('data-deck-skip')) t.thumb.setAttribute('data-skip', '');else t.thumb.removeAttribute('data-skip');
        if (this._selected.has(t.slide)) t.thumb.setAttribute('data-selected', '');else t.thumb.removeAttribute('data-selected');
      });
      this._thumbs = next;
      this._renumberRail();
      this._rail.scrollTop = st;
      if (prevTops.size) {
        const moved = [];
        this._thumbs.forEach(({
          thumb,
          slide
        }) => {
          // The live-dragged thumb is positioned by the drag tracker; a
          // FLIP transform+transition here would clobber it mid-drag.
          if (thumb === this._dragThumb) return;
          const old = prevTops.get(slide);
          if (old == null) return;
          const dy = old - thumb.getBoundingClientRect().top;
          if (Math.abs(dy) < 1) return;
          thumb.style.transition = 'none';
          thumb.style.transform = `translateY(${dy}px)`;
          moved.push(thumb);
        });
        if (moved.length) {
          // Commit the inverted positions before flipping the transition
          // on — otherwise the browser coalesces both style writes and
          // nothing animates.
          void this._rail.offsetHeight;
          moved.forEach(t => {
            t.style.transition = 'transform 180ms cubic-bezier(.2,.7,.3,1)';
            t.style.transform = '';
          });
          setTimeout(() => moved.forEach(t => {
            t.style.transition = '';
          }), 220);
        }
      }
      requestAnimationFrame(() => this._scaleThumbs());
      this._syncRail(false);
    }

    /** Create a lightweight thumb shell for one slide. The clone is
     *  materialized later by the IntersectionObserver. Event handlers
     *  look up the thumb's *current* index (via _thumbs.indexOf) so the
     *  same element can be reused across reorders. */
    _makeThumb(slide) {
      const thumb = document.createElement('div');
      thumb.className = 'thumb';
      thumb.tabIndex = 0;
      const num = document.createElement('div');
      num.className = 'num';
      const frame = document.createElement('div');
      frame.className = 'frame';
      thumb.append(num, frame);
      const entry = {
        thumb,
        num,
        frame,
        slide,
        clone: null,
        host: null,
        i: -1
      };
      // entry.i is refreshed on every _renderRail reconcile pass, so
      // handlers read the thumb's current position without an O(N) scan.
      const idx = () => entry.i;
      thumb.addEventListener('click', e => {
        const i = idx();
        const slide = this._slides[i];
        // WebKit doesn't focus a plain element on click — focus
        // explicitly so Delete/Backspace works right after selecting a
        // slide by mouse. preventScroll: _syncRail owns the rail's
        // scroll position.
        thumb.focus({
          preventScroll: true
        });
        if (e.shiftKey || e.metaKey || e.ctrlKey) {
          // Multi-select gestures adjust the selection without
          // navigating (Keynote/Figma convention).
          e.preventDefault();
          if (e.shiftKey) {
            // Range from the anchor (last plain/cmd-clicked slide;
            // falls back to the current slide) to here, replacing any
            // previous range.
            let a = this._selAnchor ? this._slides.indexOf(this._selAnchor) : -1;
            if (a < 0) {
              a = this._index;
              this._selAnchor = this._slides[a] || null;
            }
            this._selected.clear();
            for (let j = Math.min(a, i); j <= Math.max(a, i); j++) {
              this._selected.add(this._slides[j]);
            }
          } else if (slide) {
            // Toggle. An empty explicit selection implicitly holds the
            // current slide — materialize it first so cmd-clicking a
            // second slide selects both.
            if (!this._selected.size && i !== this._index && this._slides[this._index]) {
              this._selected.add(this._slides[this._index]);
            }
            if (this._selected.has(slide)) this._selected.delete(slide);else {
              this._selected.add(slide);
              this._selAnchor = slide;
            }
          }
          this._syncSelection();
          return;
        }
        this._clearSelection();
        this._selAnchor = slide || null;
        this._go(i, 'click');
      });
      // ↑/↓ step through the rail when a thumb has focus. _go clamps at the
      // ends and _applyIndex→_syncRail scrolls the new current thumb into
      // view; we move focus to it (preventScroll — _syncRail already
      // scrolled) so a held key walks the whole list. stopPropagation keeps
      // this out of the window-level _onKey nav handler.
      thumb.addEventListener('keydown', e => {
        // Delete/Backspace with the rail focused deletes this thumb's
        // slide through the same confirm dialog as the menu item.
        // Listening on the thumb (never window-level) is what keeps
        // typing in the notes panel / slide inputs from ever landing
        // here; the target check is belt-and-braces for anything
        // focusable that ends up inside a thumb.
        if ((e.key === 'Delete' || e.key === 'Backspace') && !e.metaKey && !e.ctrlKey && !e.altKey) {
          const t = e.target;
          if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
          e.preventDefault();
          e.stopPropagation();
          // Same refusals as the menu item: never every slide, never
          // while a prior structural op is waiting on its ack. The
          // whole-deck refusal is announced (the menu greys its item
          // out; a silently dead key reads as breakage). The rail-lock
          // refusal stays silent: it lasts one ack round-trip and
          // matches the existing single-delete behavior.
          if (this._railLock) return;
          // Explicit selection wins; otherwise the focused thumb (which
          // plain click and ↑/↓ keep equal to the current slide).
          const sel = this._selected.size ? this._selectionIndices() : [idx()];
          if (sel.length >= this._slides.length) {
            this._showNotice(sel.length === 1 ? 'The last slide can’t be deleted.' : 'At least one slide has to stay — the whole deck can’t be deleted.');
            return;
          }
          this._openConfirm(sel);
          return;
        }
        if (e.key !== 'ArrowUp' && e.key !== 'ArrowDown') return;
        if (e.metaKey || e.ctrlKey || e.altKey) return;
        e.preventDefault();
        e.stopPropagation();
        this._go(idx() + (e.key === 'ArrowDown' ? 1 : -1), 'keyboard');
        const cur = this._thumbs && this._thumbs[this._index];
        if (cur) cur.thumb.focus({
          preventScroll: true
        });
      });
      thumb.addEventListener('contextmenu', e => {
        e.preventDefault();
        this._openMenu(idx(), e.clientX, e.clientY);
      });
      thumb.draggable = true;
      thumb.addEventListener('dragstart', e => {
        // v1: dragging moves ONE slide, so a multi-selection would lie
        // about what's about to move — collapse it. (Group drag would
        // instead keep it and emit a batched move.)
        this._clearSelection();
        this._dragFrom = idx();
        // Deferred to the next frame: the [data-dragging] rule sets
        // pointer-events:none on the drag SOURCE, and applying that
        // synchronously inside dragstart makes Chromium (and WebKit) cancel
        // the drag — dragstart then an immediate dragend, no dragover or
        // drop, so thumbnails could not be reordered by dragging at all.
        // One frame is invisible and lands before the first dragover needs
        // the source to be hit-test-transparent. Guarded twice so the
        // attribute can never strand on a thumb that is no longer being
        // dragged (pointer-events:none would leave it unclickable for the
        // session): the pending frame is cancelled in dragend
        // (_cancelDragAttr), and the callback itself re-checks that THIS
        // thumb is still the live drag source (a new drag on another thumb
        // re-points the drag state). Deliberately NOT cancelled in
        // _stopDragTrack — _startDragTrack calls it at the start of every
        // drag, which would kill the mark this dragstart just scheduled
        // (see _cancelDragAttr).
        this._dragAttrRaf = requestAnimationFrame(() => {
          this._dragAttrRaf = null;
          if (this._dragFrom != null && this._dragThumb === thumb) {
            thumb.setAttribute('data-dragging', '');
          }
        });
        e.dataTransfer.effectAllowed = 'move';
        try {
          e.dataTransfer.setData('text/plain', String(this._dragFrom));
        } catch (err) {}
        // Constrain the drag visual to the rail's vertical axis. The
        // browser's default drag image is a free-floating snapshot that
        // follows the OS cursor in BOTH axes and the DnD API offers no way
        // to constrain it — so swap it for a transparent stand-in and move
        // the thumb itself along Y instead (_startDragTrack). The drop
        // logic below always read only clientY; this makes the visual
        // match it.
        try {
          e.dataTransfer.setDragImage(this._dragBlank(), 0, 0);
        } catch (err) {}
        this._startDragTrack(thumb, e.clientY);
      });
      thumb.addEventListener('dragend', () => {
        this._cancelDragAttr();
        thumb.removeAttribute('data-dragging');
        this._stopDragTrack();
        this._clearDrop();
        this._dragFrom = null;
      });
      thumb.addEventListener('dragover', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
        const r = thumb.getBoundingClientRect();
        this._setDrop(idx(), e.clientY < r.top + r.height / 2 ? 'before' : 'after');
      });
      thumb.addEventListener('drop', e => {
        if (this._dragFrom == null) return;
        e.preventDefault();
        const i = idx();
        const r = thumb.getBoundingClientRect();
        let to = e.clientY >= r.top + r.height / 2 ? i + 1 : i;
        if (this._dragFrom < to) to--;
        const from = this._dragFrom;
        this._clearDrop();
        this._dragFrom = null;
        if (to !== from) this._moveSlide(from, to);
      });
      if (this._railObserver) this._railObserver.observe(frame);
      frame.__deckThumb = entry;
      return entry;
    }

    /** Lazily build the clone for a thumb that has scrolled into view. */
    _materialize(entry) {
      if (entry.host) return;
      const dw = this.designWidth,
        dh = this.designHeight;
      let clone = entry.slide.cloneNode(true);
      // The clone participates in the document's flat tree, so the
      // templates' position-based CSS page counters (.slide
      // { counter-increment: page }) would count every materialized
      // thumb before the real slides — folios print offset by the
      // thumb count (slide 2 reading "7" on a five-slide deck).
      // Neutralize the counter on the clone and drop its folio pill:
      // a thumbnail's own page number is unreadable at thumb scale
      // anyway, and the real slides' numbers stay truthful.
      clone.style.counterIncrement = 'none';
      clone.querySelectorAll('.page-foot').forEach(pf => pf.remove());
      // Canvas bitmaps don't clone — swap each cloned canvas for an <img>
      // of the live pixels. Best-effort: tainted canvases throw (left
      // as-is); zero-size are skipped; WebGL without preserveDrawingBuffer
      // reads back blank and the thumb gets a blank img (same as before).
      const liveCanvases = entry.slide.querySelectorAll('canvas');
      const cloneCanvases = clone.querySelectorAll('canvas');
      cloneCanvases.forEach((cv, i) => {
        const live = liveCanvases[i];
        if (!live || !live.width || !live.height) return;
        try {
          const img = document.createElement('img');
          img.src = live.toDataURL();
          img.alt = '';
          img.style.cssText = cv.style.cssText;
          img.className = cv.className;
          img.width = live.width;
          img.height = live.height;
          // Author CSS that sized the <canvas> via tag selector won't match
          // the <img> — pin the live canvas's laid-out box on the snapshot.
          if (live.clientWidth) {
            img.style.width = live.clientWidth + 'px';
            img.style.height = live.clientHeight + 'px';
          }
          cv.replaceWith(img);
        } catch (e) {}
      });
      // Neuter heavy media; replace <video> with its poster so the box
      // keeps a visual. <iframe>/<audio> become empty placeholders.
      // Parity with _inertify: transient top-layer UI never belongs in a
      // static thumb.
      clone.querySelectorAll('[popover], dialog').forEach(el => el.remove());
      clone.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      clone.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      // Images: defer decode and let the browser pick the smallest
      // srcset candidate for the ~140px thumb. Same-URL clones reuse the
      // slide's decoded bitmap (URL-keyed cache), so the remaining cost
      // is paint/composite — lazy+async keeps that off the main thread.
      clone.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Custom elements inside the slide would have their
      // connectedCallback fire when the clone is appended. Replace them
      // with inert boxes (_neuter) so a component-heavy deck doesn't run
      // N copies of each component's mount logic in the rail. Children
      // are preserved so layout-wrapper elements (<my-column><h2>…</h2>)
      // still show their authored content, and a shadow tree cloned along
      // via attachShadow({clonable:true}) (e.g. <image-slot>) moves onto
      // the box so the thumb shows the component's rendered content. The
      // querySelectorAll NodeList is static, so nested custom elements in
      // the moved subtree are still visited on later iterations.
      // querySelectorAll('*') returns descendants only — a custom-element
      // slide root (<my-slide>…</my-slide>) would slip through and upgrade
      // on append. Swap the root first.
      if (clone.tagName.includes('-')) clone = this._neuter(clone);
      clone.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(this._neuter(el));
      });
      // Strip ids only now: a defined custom element upgrades synchronously
      // during cloneNode and re-renders on attribute callbacks, so removing
      // 'id' any earlier resets components (e.g. <image-slot> falls back to
      // its author src). Post-neuter, only inert boxes and plain elements
      // remain, where the strip is just the usual duplicate-id hygiene.
      clone.removeAttribute('id');
      clone.removeAttribute('data-deck-active');
      clone.querySelectorAll('[id]').forEach(el => el.removeAttribute('id'));
      clone.style.cssText += ';position:absolute;top:0;left:0;transform-origin:0 0;' + 'pointer-events:none;width:' + dw + 'px;height:' + dh + 'px;' + 'box-sizing:border-box;overflow:hidden;visibility:visible;opacity:1;';
      const host = document.createElement('div');
      host.style.cssText = 'position:absolute;inset:0;';
      // Clones are display-only: inert removes anything focusable inside
      // them from the tab order, so the rail's Delete/Backspace handler
      // can never see a (retargeted) key press from cloned content.
      host.inert = true;
      this._syncThumbHostAttrs(host);
      const sr = host.attachShadow({
        mode: 'open'
      });
      if (this._adoptedSheet) sr.adoptedStyleSheets = [this._adoptedSheet];else {
        const st = document.createElement('style');
        st.textContent = this._authorCss || '';
        sr.appendChild(st);
      }
      sr.appendChild(clone);
      entry.frame.appendChild(host);
      entry.host = host;
      entry.clone = clone;
      if (this._thumbScale) clone.style.transform = 'scale(' + this._thumbScale + ')';
      // Once materialized the IO callback is a no-op early-return —
      // unobserve so scroll doesn't keep firing it.
      if (this._railObserver) this._railObserver.unobserve(entry.frame);
    }

    /** Replace a cloned custom element with an inert box (see the comment
     *  in _materialize). A shadow tree cloned along via {clonable:true}
     *  moves onto the box, so the thumb shows the component's real content
     *  with zero component logic; :host rules in the moved <style> match
     *  the box, and the preserved data-* attrs keep :host([data-…])
     *  selectors working. */
    _neuter(el) {
      // Adopt the shadow only when the cloned root carries renderable
      // content. A constructor-attach / connectedCallback-render component
      // clones into an empty (or style-only) slotless root — adopting that
      // would hide the light children the box is about to receive and drop
      // the placeholder chrome. Such components fall back to the plain box.
      let sr = el.shadowRoot;
      if (sr) {
        let renderable = false;
        for (let n = sr.firstElementChild; n; n = n.nextElementSibling) {
          const t = n.tagName;
          if (t !== 'STYLE' && t !== 'LINK') {
            renderable = true;
            break;
          }
        }
        if (!renderable) sr = null;
      }
      const box = document.createElement('div');
      box.style.cssText = (el.getAttribute('style') || '') + (sr ? '' : ';background:rgba(0,0,0,0.06);border:1px dashed rgba(0,0,0,0.15);');
      box.className = el.className;
      // Preserve theming/i18n hooks so [data-*] / :lang() / [dir]
      // descendant selectors still match the neutered root — but not
      // pointer-interaction transients (a mid-reframe/mid-drag re-clone
      // would render the interaction chrome statically in the thumb).
      for (const a of el.attributes) {
        const n = a.name;
        if (n === 'data-reframe' || n === 'data-panning' || n === 'data-over') continue;
        if (n.startsWith('data-') || n.startsWith('aria-') || n === 'lang' || n === 'dir' || n === 'role' || n === 'title') {
          box.setAttribute(n, a.value);
        }
      }
      while (el.firstChild) box.appendChild(el.firstChild);
      if (sr) this._adoptShadow(box, sr);
      return box;
    }

    /** Move a cloned shadow tree onto a neutered thumbnail box: attach an
     *  open root on the box, carry adoptedStyleSheets, move the children,
     *  then make the content inert. */
    _adoptShadow(box, sr) {
      let root;
      try {
        root = box.attachShadow({
          mode: 'open'
        });
      } catch (e) {
        return;
      }
      // Engine-cloned shadow roots never carry adoptedStyleSheets, but a
      // defined component's clone is upgrade-rebuilt (constructor runs
      // during cloneNode), so sheets it adopts there are present and
      // shared by reference — carry them.
      if (sr.adoptedStyleSheets && sr.adoptedStyleSheets.length) {
        try {
          root.adoptedStyleSheets = Array.prototype.slice.call(sr.adoptedStyleSheets);
        } catch (e) {}
      }
      // Clone rather than move: moving preserves listeners an upgraded
      // clone's constructor attached inside its shadow; cloning sheds
      // them, keeping thumbs free of component logic categorically.
      for (let n = sr.firstChild; n; n = n.nextSibling) {
        root.appendChild(n.cloneNode(true));
      }
      this._inertify(root);
    }

    /** Strip anything executable from copied shadow content and apply the
     *  same custom-element/media/img policy as the light-DOM clone.
     *  (Canvases inside copied shadow content stay blank — there is no
     *  live↔clone pairing across shadow boundaries to snapshot from.) */
    _inertify(root) {
      root.querySelectorAll('script').forEach(s => s.remove());
      // Transient top-layer UI can never belong in a static thumb. (A
      // cloned [popover] is display:none anyway — open state doesn't
      // clone — this just makes it categorical.)
      root.querySelectorAll('[popover], dialog').forEach(el => el.remove());
      // Same heavy-media policy as the light-DOM clone above.
      root.querySelectorAll('iframe, audio, object, embed').forEach(el => {
        el.removeAttribute('src');
        el.removeAttribute('srcdoc');
        el.removeAttribute('data');
        el.innerHTML = '';
      });
      root.querySelectorAll('video').forEach(el => {
        if (!el.poster) {
          el.removeAttribute('src');
          el.innerHTML = '';
          return;
        }
        const img = document.createElement('img');
        img.src = el.poster;
        img.alt = '';
        img.style.cssText = el.style.cssText + ';object-fit:cover;width:100%;height:100%;';
        img.className = el.className;
        el.replaceWith(img);
      });
      root.querySelectorAll('*').forEach(el => {
        for (let i = el.attributes.length - 1; i >= 0; i--) {
          if (/^on/i.test(el.attributes[i].name)) {
            el.removeAttribute(el.attributes[i].name);
          }
        }
      });
      root.querySelectorAll('img').forEach(el => {
        el.loading = 'lazy';
        el.decoding = 'async';
        if (el.srcset) el.sizes = (this._railPx || 188) + 'px';
      });
      // Nested custom elements inside copied shadow content would upgrade
      // on append — same treatment as the light DOM. querySelectorAll is
      // static, so boxes created mid-walk don't re-enter this loop.
      root.querySelectorAll('*').forEach(el => {
        if (el.tagName.includes('-')) el.replaceWith(this._neuter(el));
      });
    }

    /** Re-clone a single thumb (live-update path). No-op if the thumb
     *  hasn't been materialized yet — it'll pick up current content when
     *  it scrolls into view. */
    _refreshThumb(slide) {
      const entry = (this._thumbs || []).find(t => t.slide === slide);
      if (!entry || !entry.host) return;
      entry.host.remove();
      entry.host = entry.clone = null;
      this._materialize(entry);
    }
    _scaleThumbs() {
      if (!this._thumbs || !this._thumbs.length) return;
      // Every frame is the same width; if it reads 0 the rail is
      // display:none (noscale / no-rail / presenting / print) — leave the
      // clones as-is and re-run when the rail is revealed.
      const fw = this._thumbs[0].frame.offsetWidth;
      if (!fw) return;
      this._thumbScale = fw / this.designWidth;
      this._thumbs.forEach(({
        clone
      }) => {
        if (clone) clone.style.transform = 'scale(' + this._thumbScale + ')';
      });
    }
    _setDrop(i, where) {
      // dragover fires at pointer-event rate; touch only the previous
      // and new target rather than sweeping all N thumbs.
      const t = this._thumbs && this._thumbs[i];
      if (this._dropOn && this._dropOn !== t) {
        this._dropOn.thumb.removeAttribute('data-drop');
      }
      if (t) t.thumb.setAttribute('data-drop', where);
      this._dropOn = t || null;
    }
    _clearDrop() {
      if (this._dropOn) this._dropOn.thumb.removeAttribute('data-drop');
      this._dropOn = null;
    }

    /** 1×1 transparent stand-in for setDragImage. Kept attached (offscreen
     *  in the shadow root) because some engines ignore a drag image that
     *  isn't in a rendered tree. Created lazily, reused for every drag. */
    _dragBlank() {
      if (!this._dragBlankEl) {
        const c = document.createElement('canvas');
        c.width = 1;
        c.height = 1;
        c.style.cssText = 'position:fixed;left:-9999px;top:0;width:1px;height:1px;';
        this._root.appendChild(c);
        this._dragBlankEl = c;
      }
      return this._dragBlankEl;
    }

    /** Vertical-only drag tracking: translate the dragged thumb along Y to
     *  follow the pointer, clamped to the rail, ignoring X entirely. A
     *  document-level capture listener is used because native dragover
     *  fires wherever the pointer is — so the thumb keeps tracking even
     *  while the pointer wanders over the stage — and it is removed the
     *  moment the drag ends. getBoundingClientRect already reflects the
     *  current transform, so the layout position is recovered by
     *  subtracting the translation applied so far (rail auto-scroll moves
     *  the layout position mid-drag; see the rail dragover handler). */
    _startDragTrack(thumb, startY) {
      // A lost dragend (the dragged thumb removed mid-drag by a remote
      // edit's re-render — browsers fire no dragend on a disconnected
      // source) would otherwise leave the previous listener installed
      // forever once this overwrite lands.
      this._stopDragTrack();
      this._dragThumb = thumb;
      // The FLIP reorder animation drives transform through a transition;
      // the live drag must not inherit one, or the thumb rubber-bands.
      // Killed BEFORE the grab-offset read: mid-FLIP the rect includes the
      // interpolated transform, which would bake a constant offset into
      // the whole drag.
      thumb.style.transition = 'none';
      this._dragGrab = startY - thumb.getBoundingClientRect().top;
      this._dragTy = 0;
      this._onDragTrack = e => {
        const t = this._dragThumb;
        if (!t) return;
        const rail = this._rail.getBoundingClientRect();
        const r = t.getBoundingClientRect();
        // A transformed ancestor (author wraps the deck in a CSS scale;
        // canvas-mode pan/zoom) scales viewport deltas: translateY(N)
        // moves the rect by s·N. Measure s from the thumb itself (rect is
        // scaled, offsetHeight is layout px) so the feedback loop stays
        // exact instead of oscillating at s ≥ 2. offsetHeight is 0 only
        // when unrendered — nothing to track then, treat as unscaled.
        const s = t.offsetHeight ? r.height / t.offsetHeight : 1;
        const layoutTop = r.top - s * this._dragTy;
        let want = e.clientY - this._dragGrab;
        want = Math.max(rail.top, Math.min(want, rail.bottom - r.height));
        this._dragTy = (want - layoutTop) / s;
        t.style.transform = 'translateY(' + this._dragTy + 'px)';
      };
      document.addEventListener('dragover', this._onDragTrack, true);
    }

    /** Cancel the thumb's deferred data-dragging mark if its frame has not
     *  fired yet — see the dragstart deferral. Called from dragend only:
     *  _stopDragTrack is the wrong home for it, because _startDragTrack
     *  defensively calls _stopDragTrack at the START of every drag (its
     *  lost-dragend reset), so a cancel there kills the mark the same
     *  dragstart just scheduled. The strand that matters — pointer-
     *  events:none left on a CONNECTED thumb that is no longer being
     *  dragged — is closed two ways: dragend cancels the pending frame
     *  here, and the frame callback re-checks that THIS thumb is still the
     *  live drag source (_dragFrom and _dragThumb, both cleared/re-pointed
     *  by dragend or by a new drag). The remaining lost-dragend case — the
     *  source slide removed mid-drag, so no dragend fires — ends with that
     *  thumb discarded by the rail reconcile (thumbs are keyed by slide
     *  element and a removed slide's thumb is not reused), so a mark landing
     *  on it is on a discarded node. The risk this defer adds over the old
     *  synchronous set is therefore the narrow rAF-after-dragend window,
     *  which the dragend cancel covers. */
    _cancelDragAttr() {
      if (this._dragAttrRaf != null) {
        cancelAnimationFrame(this._dragAttrRaf);
        this._dragAttrRaf = null;
      }
    }
    _stopDragTrack() {
      if (this._onDragTrack) {
        document.removeEventListener('dragover', this._onDragTrack, true);
        this._onDragTrack = null;
      }
      const t = this._dragThumb;
      if (t) {
        t.style.transform = '';
        t.style.transition = '';
      }
      this._dragThumb = null;
      this._dragTy = 0;
    }
    _syncRail(follow) {
      if (!this._thumbs) return;
      this._thumbs.forEach(({
        thumb
      }, i) => {
        if (i === this._index) {
          thumb.setAttribute('data-current', '');
          if (follow && typeof thumb.scrollIntoView === 'function') {
            thumb.scrollIntoView({
              block: 'nearest'
            });
          }
        } else {
          thumb.removeAttribute('data-current');
        }
      });
    }
    _openMenu(i, x, y) {
      if (!this._menu) return;
      this._menuIndex = i;
      const slide = this._slides[i];
      // Right-clicking a thumb OUTSIDE the selection collapses the
      // selection to that thumb (platform convention) — the menu then
      // always targets exactly what's highlighted.
      if (this._selected.size && slide && !this._selected.has(slide)) {
        this._selected.clear();
        this._selected.add(slide);
        this._selAnchor = slide;
        this._syncSelection();
      }
      const sel = this._selectionIndices();
      const bulk = sel.length > 1;
      this._menuIndices = bulk ? sel : [i];
      // Bulk mode offers only the one batched op that exists (delete);
      // the single-slide items address one index and stay hidden.
      this._menu.querySelectorAll('[data-act="skip"], [data-act="up"], [data-act="down"], [data-act="duplicate"], hr').forEach(el => {
        el.style.display = bulk ? 'none' : '';
      });
      const skip = slide && slide.hasAttribute('data-deck-skip');
      this._menu.querySelector('[data-act="skip"]').textContent = skip ? 'Unskip slide' : 'Skip slide';
      this._menu.querySelector('[data-act="up"]').disabled = i <= 0;
      this._menu.querySelector('[data-act="down"]').disabled = i >= this._slides.length - 1;
      const del = this._menu.querySelector('[data-act="delete"]');
      del.textContent = bulk ? 'Delete ' + sel.length + ' slides' : 'Delete slide';
      del.disabled = bulk ? sel.length >= this._slides.length : this._slides.length <= 1;
      // Place, then clamp to viewport after it's measurable.
      this._menu.style.left = x + 'px';
      this._menu.style.top = y + 'px';
      this._menu.setAttribute('data-open', '');
      const r = this._menu.getBoundingClientRect();
      const nx = Math.min(x, window.innerWidth - r.width - 4);
      const ny = Math.min(y, window.innerHeight - r.height - 4);
      this._menu.style.left = Math.max(4, nx) + 'px';
      this._menu.style.top = Math.max(4, ny) + 'px';
    }
    _closeMenu() {
      if (this._menu) this._menu.removeAttribute('data-open');
      this._menuIndex = -1;
      this._menuIndices = null;
    }
    _openConfirm(sel) {
      if (!this._confirm) return;
      const list = Array.isArray(sel) ? sel : [sel];
      // Hold the slide ELEMENTS: the deck can re-render while the dialog
      // is open (collaborator/agent edit), and a frozen index list would
      // then address the wrong slides — a same-count reorder even passes
      // the host's witness guard. Elements re-resolve at danger-click.
      this._confirmEls = list.map(i => this._slides[i]).filter(Boolean);
      // Title uses the rail's skip-aware label, so the confirm names the
      // number the user right-clicked (a raw index would disagree with the
      // rail whenever a skipped slide precedes the target).
      const lbl = list.length === 1 ? this._slideLabel(list[0]) : '';
      this._confirm.querySelector('.title').textContent = list.length === 1 ? lbl ? 'Delete slide ' + lbl + '?' : 'Delete skipped slide?' : 'Delete ' + list.length + ' slides?';
      this._confirm.querySelector('.msg').textContent = list.length === 1 ? 'This slide will be removed from the deck.' : 'These slides will be removed from the deck.';
      this._confirm.setAttribute('data-open', '');
      const btn = this._confirm.querySelector('.danger');
      if (btn && btn.focus) btn.focus();
    }
    _closeConfirm() {
      if (this._confirm) this._confirm.removeAttribute('data-open');
      this._confirmEls = null;
    }

    /** Return focus to the current slide's thumb so the keyboard flow
     *  (Delete → Enter → Delete …) survives the confirm dialog closing.
     *  Without 'force', skipped while a structural op is in flight
     *  (_railLock): _index is then an optimistic post-op value that
     *  doesn't address the pre-op thumb list — _pendingRailRefocus stays
     *  armed and the ack/slotchange paths call back with force once the
     *  rail reflects the op. Skipped (and disarmed) while the rail is
     *  inert (hidden / presenting). */
    _focusCurrentThumb(force) {
      if (!force && this._railLock) return;
      this._pendingRailRefocus = false;
      // Never yank focus from content the user reached meanwhile (e.g.
      // an input inside a slide during the ack round-trip) — only
      // reclaim it from the rail's own surfaces, or from nowhere.
      const ae = this._root && this._root.activeElement;
      const ours = !ae || this._rail && this._rail.contains(ae) || this._confirm && this._confirm.contains(ae) || this._menu && this._menu.contains(ae);
      const lightAe = document.activeElement;
      const lightOk = !lightAe || lightAe === document.body || lightAe === this;
      if (!ours || !lightOk) return;
      const cur = this._thumbs && this._thumbs[this._index];
      if (cur && this._rail && !this._rail.inert) cur.thumb.focus({
        preventScroll: true
      });
    }

    /** Selection as sorted slide indices. An empty explicit selection
     *  means the current slide (the rail's implicit selection). */
    _selectionIndices() {
      const out = [];
      this._slides.forEach((s, i) => {
        if (this._selected.has(s)) out.push(i);
      });
      if (!out.length && this._slides[this._index]) out.push(this._index);
      return out;
    }
    _clearSelection() {
      // Re-anchor before the early return: a plain click followed by
      // arrow/tap navigation leaves _selected empty but the anchor
      // pointing at the old slide, and a later shift-click would range
      // from there instead of the current slide.
      this._selAnchor = null;
      if (!this._selected.size) return;
      this._selected.clear();
      this._syncSelection();
    }
    _syncSelection() {
      (this._thumbs || []).forEach(t => {
        if (this._selected.has(t.slide)) t.thumb.setAttribute('data-selected', '');else t.thumb.removeAttribute('data-selected');
      });
    }

    /** Rail mutations. When a dc-runtime is present (`window.__dcUpdate`)
     *  the host owns the light DOM — handlers emit a dc-op only and the
     *  host applies it (to the editor's model or to the source file) and
     *  re-renders via dc-runtime; slotchange catches the rail up.
     *  Structural ops lock rail input until the host acks so a rapid second
     *  click can't address a stale index; setAttr/removeAttr respect the
     *  lock but don't set it (indices unchanged; the host serializes).
     *  `newIndex` is written to location.hash so slotchange's
     *  _restoreIndex lands on the right slide.
     *
     *  With NO dc-runtime (a raw .html deck), there's no re-render path,
     *  so handlers self-mutate locally for an instant update and emit
     *  `emitOnly: false`; the host persists to disk without
     *  re-rendering over the already-mutated DOM.
     *
     *  See docs/dc-ops.md for the contract. */
    /** True when the page's DC runtime reports a live template stream for
     *  any component here (newer support.js bundles only — older bundles
     *  lack the signal and the HOST-side gate covers those decks). Rail
     *  mutations are refused for the duration: a mid-stream op addresses
     *  slide indices the stream is rewriting underneath the click. */
    _streamActive() {
      try {
        return !!window.__dcUpdate && typeof window.__dcStreaming === 'function' && window.__dcStreaming();
      } catch (e) {
        return false;
      }
    }

    /** Transient in-stage notice for a refused mid-stream rail op. */
    _showStreamNotice() {
      this._showNotice('Claude is still updating this deck — try again when it finishes.');
    }

    /** Transient bottom-center toast for a refused rail gesture. */
    _showNotice(text) {
      if (!this._root) return;
      let n = this._streamNotice;
      if (!n) {
        n = document.createElement('div');
        n.className = 'export-hidden';
        n.setAttribute('data-omelette-chrome', '');
        n.setAttribute('role', 'status');
        n.style.cssText = 'position:fixed;left:50%;bottom:24px;transform:translateX(-50%);' + 'background:rgba(22,22,22,.94);color:#fff;' + 'font:500 13px/1.4 system-ui,sans-serif;padding:8px 14px;' + 'border-radius:8px;z-index:2147483646;pointer-events:none;' + 'opacity:0;transition:opacity .15s ease';
        this._root.append(n);
        this._streamNotice = n;
      }
      n.textContent = text;
      n.style.opacity = '1';
      if (this._streamNoticeTimer) clearTimeout(this._streamNoticeTimer);
      this._streamNoticeTimer = setTimeout(() => {
        n.style.opacity = '0';
      }, 2600);
    }
    _emitDcOp(op, slide, lock, newIndex) {
      // Mid-stream guard: refuse the gesture outright — no lock, no
      // optimistic index change, no emit, no self-mutation (returning
      // true short-circuits every caller). The host applies the same
      // gate for decks whose committed support.js predates the signal.
      if (this._streamActive()) {
        this._showStreamNotice();
        return true;
      }
      // Slide index (template/script/style filtered — same as
      // _collectSlides). deck-stage is a filtered-index dc-op emitter;
      // the host resolves against findDeckStage().slideTids. Callers
      // already pass `to` as a slide index.
      op.at = this._slides.indexOf(slide);
      op.witness = {
        childCount: this._slides.length
      };
      // dc-runtime wraps an <x-import>-mounted component in a
      // <div class="sc-host-x" data-dc-tpl="N"> host — the stamp is on the
      // WRAPPER, not this element. closest() finds it (or this element's
      // own stamp when directly templated).
      const host = this.closest('[data-dc-tpl]');
      const tid = host && host.getAttribute('data-dc-tpl');
      op.mount = {
        tid: tid !== null ? parseInt(tid, 10) : null,
        tag: 'deck-stage'
      };
      op.emitOnly = !!window.__dcUpdate;
      if (op.emitOnly) {
        if (lock) this._railLock = true;
        if (newIndex != null && newIndex !== this._index) {
          this._indexBeforeEmit = this._index;
          this._index = newIndex;
          try {
            history.replaceState(null, '', '#' + (newIndex + 1));
          } catch (e) {}
        }
      }
      this.dispatchEvent(new CustomEvent('dc-op', {
        detail: op,
        bubbles: true,
        composed: true
      }));
      return op.emitOnly;
    }

    /** Delete a set of slides (pre-op indices). One slide delegates to
     *  _deleteSlide — the plain 'remove' op — so single deletes keep
     *  working against hosts that predate 'removeMany'. A bulk delete is
     *  ONE op: one host write, one undo snapshot, and indices that all
     *  address the same pre-op deck (N acked single ops would each need
     *  a fresh witness). */
    _deleteSlides(list) {
      if (this._railLock || !list) return;
      const indices = [...new Set(list)].filter(i => this._slides[i]).sort((a, b) => a - b);
      if (!indices.length || indices.length >= this._slides.length) return;
      if (indices.length === 1) {
        this._deleteSlide(indices[0]);
        return;
      }
      // Mirrors _duplicateSlide: check the stream gate before doing any
      // work (_emitDcOp re-checks).
      if (this._streamActive()) {
        this._showStreamNotice();
        return;
      }
      const els = indices.map(i => this._slides[i]);
      const del = new Set(indices);
      const cur = this._index;
      // New current index in post-op space: shift the kept slide left by
      // the deletions below it; if the current slide itself is deleted,
      // land on the nearest survivor (after, else before).
      const below = n => indices.reduce((k, x) => k + (x < n ? 1 : 0), 0);
      let ni;
      if (!del.has(cur)) {
        ni = cur - below(cur);
      } else {
        let s = -1;
        for (let j = cur + 1; j < this._slides.length; j++) {
          if (!del.has(j)) {
            s = j;
            break;
          }
        }
        if (s === -1) {
          for (let j = cur - 1; j >= 0; j--) {
            if (!del.has(j)) {
              s = j;
              break;
            }
          }
        }
        ni = s < 0 ? 0 : s - below(s);
      }
      // Emit-path deletes can't refocus until the host re-renders; arm
      // the flag at emit time (never on a refused/no-op path) so
      // ack/slotchange can finish the keyboard flow's focus hand-back.
      // The local path clears it via the caller's _focusCurrentThumb().
      this._pendingRailRefocus = true;
      if (this._emitDcOp({
        op: 'removeMany',
        indices
      }, els[0], true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      els.forEach(el => el.remove());
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _deleteSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide || this._slides.length <= 1) return;
      const cur = this._index;
      const ni = i < cur || i === cur && i === this._slides.length - 1 ? cur - 1 : cur;
      this._pendingRailRefocus = true;
      if (this._emitDcOp({
        op: 'remove'
      }, slide, true, ni)) return;
      this._index = ni;
      this._squelchSlotChange = true;
      slide.remove();
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }
    _duplicateSlide(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      // Mint ids + copy component state BEFORE emitting, so the op can
      // carry the id map — but never mint for an op the stream gate is
      // about to refuse (_emitDcOp re-checks; this avoids orphaned keys).
      if (this._streamActive()) {
        this._showStreamNotice();
        return;
      }
      const copy = slide.cloneNode(true);
      copy.removeAttribute('id');
      const ids = this._remintDuplicateIds(copy);
      const op = {
        op: 'duplicate'
      };
      if (ids) op.ids = ids;
      if (this._emitDcOp(op, slide, true, i + 1)) return;
      this._index = i + 1;
      this._squelchSlotChange = true;
      this.insertBefore(copy, slide.nextSibling);
      this._collectSlides();
      this._applyIndex({
        showOverlay: true,
        broadcast: true,
        reason: 'mutation'
      });
    }

    /** Duplicate id policy. Plain ids are stripped — two live slides must
     *  not share one id. But a component that KEYS persistent state by id
     *  (image-slot's sidecar photo) would silently lose that state with
     *  its id. Such a component opts out of the strip by exposing a
     *  static cloneSlot(fromId, isFree) that copies its stored state
     *  under a fresh id of its choosing and returns that id. The old→new
     *  map is returned (or null) and rides the dc-op so the host writes
     *  the SAME ids into source — without that, the copy's state would
     *  revert on reload (docs/dc-ops.md). */
    _remintDuplicateIds(copy) {
      const ids = {};
      let found = false;
      const used = new Set();
      const idOk = /^[A-Za-z][\w-]{0,63}$/;
      const isFree = id => idOk.test(id) && !used.has(id) && !document.getElementById(id);
      copy.querySelectorAll('[id]').forEach(el => {
        const tag = el.tagName.toLowerCase();
        const cls = tag.indexOf('-') >= 0 && customElements.get(tag);
        let next = null;
        if (el.id && cls && typeof cls.cloneSlot === 'function') {
          try {
            next = cls.cloneSlot(el.id, isFree);
          } catch (e) {}
        }
        // Re-checked here so a misbehaving static can't smuggle a dupe
        // or an unsafe value into the document / the emitted op.
        if (typeof next === 'string' && isFree(next)) {
          ids[el.id] = next;
          used.add(next);
          el.id = next;
          found = true;
        } else {
          el.removeAttribute('id');
        }
      });
      return found ? ids : null;
    }
    _toggleSkip(i) {
      if (this._railLock) return;
      const slide = this._slides[i];
      if (!slide) return;
      const on = !slide.hasAttribute('data-deck-skip');
      if (this._emitDcOp(on ? {
        op: 'setAttr',
        attr: 'data-deck-skip',
        value: ''
      } : {
        op: 'removeAttr',
        attr: 'data-deck-skip'
      }, slide, false)) return;
      if (on) slide.setAttribute('data-deck-skip', '');else slide.removeAttribute('data-deck-skip');
    }
    _skippedIndices() {
      const out = [];
      for (let i = 0; i < this._slides.length; i++) {
        if (this._slides[i].hasAttribute('data-deck-skip')) out.push(i);
      }
      return out;
    }

    /** Rail numbering, skip-aware: a skipped slide shows no number and the
     *  rest stay contiguous (1..visible), so the labels match the positions
     *  the overlay counter reports. Cheap (text writes are diffed), safe to
     *  call after any reconcile or skip toggle. */
    _renumberRail() {
      let v = 0;
      (this._thumbs || []).forEach(t => {
        const label = t.slide.hasAttribute('data-deck-skip') ? '' : String(++v);
        if (t.num.textContent !== label) t.num.textContent = label;
      });
    }

    /** Skip-aware label for slide i — the same numbering _renumberRail
     *  paints: '' for a skipped slide, else its 1-based position among
     *  non-skipped slides. Display surfaces (e.g. the delete confirm)
     *  use this so they never name a number the rail doesn't show. */
    _slideLabel(i) {
      const s = this._slides[i];
      if (!s || s.hasAttribute('data-deck-skip')) return '';
      let v = 0;
      for (let k = 0; k <= i; k++) {
        if (!this._slides[k].hasAttribute('data-deck-skip')) v++;
      }
      return String(v);
    }

    /** Overlay counter, skip-aware: position among non-skipped slides over
     *  the non-skipped total. A skipped CURRENT slide (reachable by rail
     *  click or deep link, never by _advance) shows '–' — its number is
     *  gone from the rail, so any digit here would lie. */
    _syncCount() {
      if (!this._countEl || !this._totalEl) return;
      // Empty deck: keep the overlay's initial "1 / 1" (it has nothing to
      // count and isn't visible without slides) — the guest fallback for
      // frozen copies leaves empty decks alone for the same rendering.
      if (!this._slides.length) {
        this._countEl.textContent = '1';
        this._totalEl.textContent = '1';
        return;
      }
      let pos = 0,
        total = 0;
      this._slides.forEach((s, i) => {
        if (!s.hasAttribute('data-deck-skip')) {
          total++;
          if (i <= this._index) pos = total;
        }
      });
      const cur = this._slides[this._index];
      const curSkipped = !cur || cur.hasAttribute('data-deck-skip');
      this._countEl.textContent = curSkipped ? '–' : String(pos);
      this._totalEl.textContent = String(total);
    }
    _moveSlide(i, j) {
      if (this._railLock || j < 0 || j >= this._slides.length || j === i) return;
      const cur = this._index;
      const ni = cur === i ? j : i < cur && j >= cur ? cur - 1 : i > cur && j <= cur ? cur + 1 : cur;
      const slide = this._slides[i];
      if (this._emitDcOp({
        op: 'move',
        to: j
      }, slide, true, ni)) return;
      const ref = j < i ? this._slides[j] : this._slides[j].nextSibling;
      this._index = ni;
      this._squelchSlotChange = true;
      this.insertBefore(slide, ref);
      this._collectSlides();
      this._applyIndex({
        showOverlay: false,
        broadcast: true,
        reason: 'mutation'
      });
    }

    // Public API ------------------------------------------------------------

    /** Current slide index (0-based). */
    get index() {
      return this._index;
    }
    /** Total slide count. */
    get length() {
      return this._slides.length;
    }
    /** Programmatically navigate. */
    goTo(i) {
      this._go(i, 'api');
    }
    next() {
      this._advance(1, 'api');
    }
    prev() {
      this._advance(-1, 'api');
    }
    reset() {
      this._go(0, 'api');
    }
  }
  if (!customElements.get('deck-stage')) {
    customElements.define('deck-stage', DeckStage);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soul-pharmacy/deck-stage.js", error: String((e && e.message) || e) }); }

// ui_kits/soul-pharmacy/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever a design needs an image.
 * You control the slot's shape; it sizes to its container by default. When the search_stock_photos tool
 * is available, prefill the slot by default — write the photo's URL into
 * src (with credit/credit-href); the user can still fill or replace it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The sidecar is a SIBLING of the HTML file that uses this component: the
 * read is a document-relative fetch, and the host resolves the bridge's
 * sidecar writes into the previewed file's directory to match (same
 * contract as design_canvas.jsx). Pages in the same directory share one
 * sidecar; keep slot ids distinct across them.
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          Initial framing baseline: cover | contain.   (default 'cover')
 *                cover starts the image filling the frame (overflow cropped);
 *                contain starts it fully visible (letterboxed). Either way the
 *                user can always pan/scale from there — double-click, or the
 *                Edit control, enters reframe mode (drag to move, scroll or
 *                corner-handles to scale; Escape / click-out commits). The
 *                crop persists alongside the image in the sidecar.
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. Prefill it with a real
 *                photo via search_stock_photos when that tool is available
 *                (set credit/credit-href from the result). A user drop
 *                overrides it; clearing the drop reveals src again.
 *   credit       Attribution text shown as a small overlay at the
 *                bottom-left of the filled slot. REQUIRED whenever src
 *                points at any Unsplash host (images.unsplash.com,
 *                plus.unsplash.com, …): an Unsplash src with no credit
 *                renders an error tile INSTEAD of the photo (Unsplash
 *                terms forbid showing their photos unattributed). Use the
 *                exact form 'Photo by {photographer name} on Unsplash' —
 *                the overlay then links the name to credit-href and
 *                'Unsplash' to the Unsplash homepage, and links back to
 *                unsplash.com automatically get the required utm referral
 *                params appended at render time. The credit belongs to
 *                the src image, so it only shows while src is what's
 *                displayed — a user-dropped image hides it.
 *   credit-href  Link for the photographer's name in the credit overlay
 *                (their Unsplash profile URL from the stock-photo search
 *                results). http(s) URLs only — anything else renders the
 *                name as plain text.
 *
 * Sizing: the slot fills its container by default (width/height 100%).
 * Put it in a sized wrapper — absolutely positioned, a grid cell, a fixed
 * frame — and it takes exactly that box. When the parent's height is
 * indefinite (ordinary flow), it falls back to full width at a 3:2 aspect
 * ratio instead of collapsing. In a shrink-to-fit parent (a float,
 * width:max-content, an unsized absolute wrapper), percentages have
 * nothing to resolve against — size the slot or its wrapper explicitly
 * there. For a fixed-size slot, set
 * width/height on the element itself (inline style), which overrides the
 * default. When
 * layering content above a slot (full-bleed layouts), make the overlay
 * click-through — pointer-events: none on scrims/text plates, re-enabled
 * on interactive children — so the slot's hover controls stay reachable.
 * Keep the slot's bottom-left corner visually clear as well: the credit
 * overlay renders there, and a dark fade or text plate covering it hides
 * the attribution Unsplash's terms require — end the fade above that
 * corner, or keep it nearly transparent where the credit sits.
 *
 * Usage:
 *   <div style="position:relative;width:100%;height:100%">      <!-- full-bleed: -->
 *     <image-slot id="bg" shape="rect"></image-slot>            <!-- fills the wrapper -->
 *   </div>
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';

  // Unsplash terms require visible attribution wherever their photos
  // display, and every link back to unsplash.com must carry utm referral
  // params. Two render-time rules enforce that here:
  //  - an Unsplash-src slot with NO credit attribute renders an error
  //    tile INSTEAD of the photo (an uncredited Unsplash photo on screen
  //    is itself the terms violation, so it never renders bare);
  //  - rendered credit links pointing at unsplash.com get the referral
  //    params appended when absent (credit-href values live in page
  //    content that can't be edited after the fact).
  // Keep the utm_source value in sync with UTM_SOURCE in
  // platform/web-agent/unsplash.ts — this file is a project-local
  // artifact and cannot import it (equality is pinned by tests).
  const UNSPLASH_HOMEPAGE_HREF = 'https://unsplash.com/?utm_source=claude_design&utm_medium=referral';
  // Host rule mirrors the hotlink validator that admits Unsplash srcs into
  // pages in the first place (cdn$ in unsplash.ts: apex or any subdomain)
  // — Unsplash+ results serve from plus.unsplash.com, not just images.*,
  // and an admitted-but-uncredited photo must error whatever unsplash
  // host it rides on.
  // Trailing-dot FQDNs (images.unsplash.com.) are the same host to the
  // browser but would miss the regex — strip one dot so the check fails
  // CLOSED (unrecognized-but-real Unsplash srcs must error, not render).
  const isUnsplashHost = u => {
    try {
      return /(^|\.)unsplash\.com$/.test(new URL(u, document.baseURI).hostname.replace(/\.$/, ''));
    } catch {
      return false;
    }
  };
  // Render-time referral normalization for links back to Unsplash:
  // appends utm_source/utm_medium when absent, preserves every existing
  // query param, never overwrites an existing utm_source, and passes
  // non-Unsplash URLs through untouched. Input is an ABSOLUTE validated
  // http(s) URL (the credit render funnel resolves + validates first).
  const withReferral = href => {
    try {
      const u = new URL(href);
      if (!/(^|\.)unsplash\.com$/.test(u.hostname.replace(/\.$/, ''))) {
        return href;
      }
      if (!u.searchParams.has('utm_source')) {
        u.searchParams.set('utm_source', 'claude_design');
      }
      if (!u.searchParams.has('utm_medium')) {
        u.searchParams.set('utm_medium', 'referral');
      }
      return u.toString();
    } catch (e) {
      return href;
    }
  };
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  // Unload-time flush: save()'s serialization defers a mid-RTT re-fire to a
  // .then that never runs in an unloading document, silently dropping a
  // pagehide commit. Post the current slots immediately instead — content
  // is a superset snapshot of any in-flight save's, the write is a
  // whole-file last-writer-wins replace, and postMessage FIFO delivers it
  // to the host after the in-flight one, so a backend-side reorder at
  // worst reproduces the dropped-commit outcome this flush improves on.
  // Guarded on the initial sidecar read: pre-hydration slots can miss
  // other slots' persisted entries, and flushing it would clobber them —
  // that narrow case stays best-effort (the in-memory merge in load()
  // cannot happen in an unloading document anyway).
  function flushNow() {
    if (!loaded) return;
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    try {
      Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {});
    } catch (e) {}
  }
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet =
  // Fill the container by default: slots are usually placed inside a
  // sized wrapper (a hero frame, a grid cell, an inset:0 layer) and are
  // expected to take that box — a fixed intrinsic size would render as
  // a small tile in the corner of a full-bleed wrapper instead.
  // aspect-ratio is the companion fallback that keeps a bare slot
  // visible when the parent's height is indefinite: height:100%
  // resolves to auto there, and the ratio then derives height from
  // width instead of letting the slot collapse to zero height.
  // Explicit width/height on the element override all of this.
  ':host{display:block;position:relative;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);' + '  width:100%;height:100%;aspect-ratio:3/2}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  // popover=manual promotes the spill to the top layer on reframe, so it is
  // not clipped by any overflow:hidden / clip-path / scroll-container
  // ancestor (a plain z-index can't escape overflow clipping). UA popover
  // defaults (inset:0;margin:auto) are reset; _applyView sets viewport px.
  '.spill{position:fixed;margin:0;inset:auto;border:0;padding:0;background:transparent;' + '  overflow:visible;transform:translate(-50%,-50%);z-index:1;cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls overlay INSIDE the frame, pinned to the top-right corner, so
  // a full-bleed slot in an overflow:hidden container still shows them
  // (the old below-mask placement got clipped). Credit sits bottom-left,
  // so top-right avoids collision. The blurred pill background keeps them
  // legible over the image.
  // The UA [popover] base rule styles the element in EVERY state (only
  // display:none is gated on :not(:popover-open), and the display:flex
  // below overrides that) — so the UA resets live HERE, like .spill's,
  // or the ordinary hover-state strip renders as a bordered Canvas box
  // centered by margin:auto. inset:auto precedes top/right (shorthand).
  '.ctl{position:absolute;inset:auto;top:8px;right:8px;margin:0;border:0;padding:0;' + '  background:transparent;overflow:visible;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' +
  // While reframing, the spill owns the top layer and would swallow every
  // click on the in-frame controls. Promoting .ctl into the top layer
  // ABOVE the spill (shown after it — later popovers stack higher) keeps
  // Edit-as-toggle and Replace clickable mid-reframe. _applyView pins it
  // to the frame's top-right in viewport px (translateX(-100%)
  // right-aligns against the computed left edge); inset:auto clears the
  // base rule's top/right so the inline left/top position it alone.
  '.ctl:popover-open{position:fixed;inset:auto;transform:translateX(-100%)}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}' +
  // Replacement in flight: after a src swap the browser keeps painting
  // the PREVIOUS image until the new one decodes, so a Replace would
  // flash the old photo and then pop. Hide the stale frame (visibility,
  // not display — _applyView geometry still applies) and spin until the
  // new image reports in (load/error clears data-swapping).
  ':host([data-swapping]) .frame img{visibility:hidden}' + '.loading{position:absolute;inset:0;display:none;align-items:center;' + '  justify-content:center;pointer-events:none}' + ':host([data-swapping]) .loading{display:flex}' + '.loading::after{content:"";width:22px;height:22px;border-radius:50%;' + '  border:2px solid rgba(0,0,0,.12);border-top-color:rgba(0,0,0,.45);' + '  animation:om-slot-spin .7s linear infinite}' + '@keyframes om-slot-spin{to{transform:rotate(360deg)}}' +
  // Reduced motion: the static two-tone ring still reads as "working".
  '@media (prefers-reduced-motion:reduce){.loading::after{animation:none}}' + '.credit{position:absolute;left:6px;bottom:6px;max-width:calc(100% - 12px);display:none;' + '  padding:3px 7px;border-radius:5px;background:rgba(0,0,0,.55);color:#fff;' + '  font:10px/1.2 system-ui,-apple-system,sans-serif;text-decoration:none;' + '  white-space:nowrap;overflow:hidden;text-overflow:ellipsis;backdrop-filter:blur(6px)}' +
  // The credit is a SPAN holding one or two <a>s (Unsplash's prescribed
  // form links the photographer AND Unsplash) — anchors style inline so
  // the overlay reads as one line of text.
  '.credit a{color:inherit;text-decoration:none}' + '.credit a:hover,.credit a:focus-visible{text-decoration:underline}' + ':host([data-filled][data-credit]) .credit{display:block}' +
  // Exports must ship JUST the image — no hover controls, no credit chip
  // (the host marks <html data-om-exporting> for the capture window; the
  // page-level hide script can't reach shadow DOM, this rule can).
  ':host-context([data-om-exporting]) .ctl,' + ':host-context([data-om-exporting]) .credit{display:none !important}' +
  // No export-window mask rules here on purpose: the export capture
  // releases the replacement mask by REMOVING data-swapping (the
  // shadow-root pass in pages/export/shared.ts HIDE_EXPORT_CHROME_SCRIPT)
  // — attribute removal works in every engine (:host-context is
  // Chromium-only), is scoped by construction to slots actually
  // mid-swap, and hides the spinner through the same gate. A masked img
  // would otherwise be silently dropped from PPTX decks (the capture
  // walk skips visibility:hidden imgs).
  // Attribution error tile: REPLACES the photo when an Unsplash src has
  // no credit attribute — rendering the photo uncredited is the terms
  // violation, so the photo must not appear at all.
  // Calm and neutral on purpose (review feedback): the tile informs the
  // user; the fix instructions are machine-facing (usage docblock, tool
  // description, and the turn-end scan's bounce copy name the attributes
  // for the agent).
  '.attr-error{position:absolute;inset:0;display:none;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  background:#f2f1ef;color:#6e6c66;user-select:none;' + '  font:13px/1.45 system-ui,-apple-system,sans-serif}' + '.attr-error svg{opacity:.55}' + '.attr-error .cap{max-width:92%;font-weight:500;letter-spacing:.01em}' + ':host([data-attribution-error]) .attr-error{display:flex}' + ':host([data-attribution-error]) .ring{display:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  const warnIcon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/>' + '<path d="M12 9v4"/><path d="M12 17h.01"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'placeholder', 'src', 'id', 'credit', 'credit-href'];
    }

    /** Duplicate-slide hook (called by deck-stage, see its
     *  _remintDuplicateIds): copy this id's stored image, if any, under a
     *  freshly minted key and return that key — so a duplicated slide's
     *  slot keeps its dropped photo instead of reverting to the
     *  placeholder. 'isFree' is the caller's uniqueness check (document
     *  ids); candidates must ALSO be unused in the sidecar, which can
     *  hold keys from other pages sharing the project root. (An EMPTY
     *  slot on another page leaves no sidecar entry, so its id is not
     *  detectable here — a minted key can collide with it and that slot
     *  would show this photo. Same blast radius as two pages reusing an
     *  id by hand, which the shared sidecar already permits.) Returns null
     *  when no id could be minted (caller strips the id, today's
     *  behavior). */
    static cloneSlot(fromId, isFree) {
      if (typeof fromId !== 'string' || !fromId) return null;
      // Pre-hydration the store can't veto candidates or source the copy
      // — degrade to the strip (today's behavior) rather than mint
      // against keys we can't see yet. Any rendered (= droppable) slot
      // means load() has already settled.
      if (!loaded) return null;
      const stem = fromId.replace(/-\d+$/, '') || fromId;
      for (let n = 2; n < 100; n++) {
        const toId = stem + '-' + n;
        if (toId === fromId) continue;
        if (slots[toId] !== undefined) {
          // Reuse a key holding this exact value (bytes AND crop) if no
          // live element here owns it — a duplicate op the host refused
          // after minting leaves such a key behind, and reusing keeps
          // refused retries from accumulating one orphaned copy per
          // attempt. Full equality (not just bytes) so a byte-identical
          // key another PAGE owns with its own crop is stepped past, not
          // adopted or rewritten. (Entries without .u never match.)
          const prev = getSlot(toId);
          const cur = getSlot(fromId);
          if (!(prev && cur && prev.u && prev.u === cur.u && prev.s === cur.s && prev.x === cur.x && prev.y === cur.y && (typeof isFree !== 'function' || isFree(toId)))) continue;
          return toId;
        }
        if (typeof isFree === 'function' && !isFree(toId)) continue;
        const v = getSlot(fromId);
        if (v) setSlot(toId, Object.assign({}, v));
        return toId;
      }
      return null;
    }
    constructor() {
      super();
      // clonable: rail thumbnails deep-clone slides and carry this shadow
      // along; reuse an already-cloned root so upgrade-after-clone works.
      // (Deliberately NOT serializable — a getHTML consumer would embed
      // multi-MB sidecar data-URLs into serialized page HTML.)
      const root = this.shadowRoot || this.attachShadow({
        mode: 'open',
        clonable: true
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="attr-error" part="attribution-error">' + warnIcon + '    <div class="cap">This photo needs attribution</div></div>' + '  <div class="loading" part="loading"></div>' + '  <div class="ring" part="ring"></div>' + '</div>' +
      // Outside .frame, like .spill/.ctl — the frame's overflow:hidden +
      // border-radius/clip-path would cut the credit off on circle/pill/mask.
      // A SPAN, not an <a>: the prescribed Unsplash credit holds two links
      // (photographer + Unsplash), built per-render in _render().
      '<span class="credit" part="credit"></span>' + '<div class="spill" popover="manual" data-dc-edit-transparent>' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' +
      // data-dc-edit-transparent: the DC editor's edit-mode picker lets
      // clicks through for chrome marked with it (EDIT_TRANSPARENT_SEL)
      // — without it, Replace/Edit clicks in Edit mode are swallowed by
      // element selection and the controls look dead.
      '<div class="ctl" popover="manual" data-dc-edit-transparent><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="edit" title="Reframe image">Edit</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ctl = root.querySelector('.ctl');
      this._credit = root.querySelector('.credit');
      this._attrError = root.querySelector('.attr-error');
      // Credit clicks open the link, not browse/reframe.
      this._credit.addEventListener('click', e => e.stopPropagation());
      this._credit.addEventListener('dblclick', e => e.stopPropagation());
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      // Encode-in-flight marker (the owning _ingest generation): while set,
      // the same-src "nothing in flight" clear in _render must not fire —
      // the stored value still points at the OLD image until the encode
      // lands, so that clear would unmask the stale image mid-replace.
      this._swapGen = 0;
      // Render-owned swap in flight: set when _render assigns a new src,
      // cleared only by the img's own load/error (or the empty branch).
      // img.complete CANNOT stand in for this — setting src only QUEUES
      // the current-request swap (a microtask), so synchronously after an
      // assignment, complete still reports the OLD settled request. The
      // pick path does exactly that: the host sets src, credit, and
      // credit-href back-to-back in one task, and renders #2/#3 would
      // read the stale complete === true and drop the mask one render
      // after it was set.
      this._loadPending = false;
      // See _render's empty branch: a transient attribution-error wipe of a
      // showing image must make the follow-up render a replacement (spinner),
      // not a first fill (blank frame).
      this._hidShowing = false;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (!act) return;
        // The hidden controls are opacity-0 but still tabbable — without
        // this gate a keyboard user could drive them on a read-only share
        // link (mirrors the dblclick handler's editable gate).
        if (!this.hasAttribute('data-editable')) return;
        if (act === 'replace') {
          this._exitReframe(true);
          // Host-owned picker (Unsplash modal; it also offers local import).
          this.dispatchEvent(new CustomEvent('image-slot:pick', {
            bubbles: true,
            composed: true,
            detail: {
              id: this.id || null
            }
          }));
        }
        if (act === 'edit') {
          if (!this._reframes()) return;
          if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      // load/error also release the replacement-in-flight mask (via the
      // single discipline in _releaseMask): the swap is only revealed once
      // the new image can actually paint (on error the frame shows its
      // background, same as a fresh slot with a broken src).
      this._img.addEventListener('load', () => {
        this._loadPending = false;
        this._releaseMask(true);
        this._applyView();
      });
      this._img.addEventListener('error', () => {
        this._loadPending = false;
        this._releaseMask(true);
      });
      // Gated only on editable — any filled slot can be repositioned/scaled,
      // regardless of fit. Share links (no writeFile) stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
          const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // The host may inject window.omelette.writeFile AFTER the first render;
      // re-render on hover so the editable-gated controls reliably appear.
      this.addEventListener('pointerenter', this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('pointerenter', this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      // commit=false: a disconnect is not a user intent — committing here
      // would persist whatever half-finished drag a React remount or DOM
      // splice happened to interrupt. Deliberate exits commit on their own
      // paths (Escape/click-out/toggle), and unloads commit via pagehide.
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._signalReframe(true);
      // Best-effort commit when the document unloads mid-reframe (a host
      // navigation racing the enter signal, a manual reload, tab close):
      // the sidecar write rides the host bridge, which outlives this
      // document, so the crop survives even though the mode dies with the
      // DOM. Held on the instance so _exitReframe detaches exactly what
      // was attached.
      this._pagehide = () => {
        this._exitReframe(true);
        flushNow();
      };
      window.addEventListener('pagehide', this._pagehide);
      // Promote spill to the top layer, then keep it pinned over the frame:
      // scroll/resize cover the common cases, and a per-frame rect check
      // catches layout shifts that fire neither (an image above finishing
      // load, streamed DOM pushing the slot down, an ancestor transform
      // change) so the overlay can't detach from the frame.
      try {
        this._spill.showPopover();
      } catch {}
      // After the spill, so the controls stack above it in the top layer.
      try {
        this._ctl.showPopover();
      } catch {}
      this._reposition = () => {
        if (this.hasAttribute('data-reframe')) this._applyView();
      };
      window.addEventListener('scroll', this._reposition, true);
      window.addEventListener('resize', this._reposition);
      this._lastRect = '';
      this._watch = () => {
        if (!this.hasAttribute('data-reframe')) return;
        const r = this.getBoundingClientRect();
        const key = r.left + ',' + r.top + ',' + r.width + ',' + r.height;
        if (key !== this._lastRect) {
          this._lastRect = key;
          this._applyView();
        }
        this._watchId = requestAnimationFrame(this._watch);
      };
      this._watchId = requestAnimationFrame(this._watch);
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (this._reposition) {
        window.removeEventListener('scroll', this._reposition, true);
        window.removeEventListener('resize', this._reposition);
        this._reposition = null;
      }
      if (this._watchId) {
        cancelAnimationFrame(this._watchId);
        this._watchId = 0;
      }
      if (this._pagehide) {
        window.removeEventListener('pagehide', this._pagehide);
        this._pagehide = null;
      }
      try {
        this._spill.hidePopover();
      } catch {}
      try {
        this._ctl.hidePopover();
      } catch {}
      this._ctl.style.left = '';
      this._ctl.style.top = '';
      if (commit) this._commitView();
      this._signalReframe(false);
    }

    // Reframe state lives only in this DOM until commit, invisible to the
    // host's dirty signals — announce enter/exit so the host can hold
    // auto-reloads for exactly the gesture (the guest bundle forwards
    // image-slot:reframe to the host as imageSlotReframe). Dispatched on
    // the element (composed, so it escapes shadow roots) while connected;
    // a disconnected exit (disconnectedCallback) falls back to document so
    // the host still hears it.
    _signalReframe(active) {
      const target = this.isConnected ? this : document;
      target.dispatchEvent(new CustomEvent('image-slot:reframe', {
        bubbles: true,
        composed: true,
        detail: {
          active: active,
          id: this.id || null
        }
      }));
    }

    // Public: host's "Import from computer" calls this to run local browse.
    openFilePicker() {
      this._exitReframe(true);
      this._input.click();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      // Replacing a shown image: surface the swap through the encode too,
      // not just the decode — otherwise the old photo sits there with no
      // feedback while the canvas re-encode runs. An empty slot keeps its
      // placeholder (no spinner) until the encode lands, as before.
      // _swapGen guards the mask against re-renders DURING the encode
      // (pointerenter, ResizeObserver, another slot's store write): the
      // stored value still resolves to the old image there, so _render's
      // same-src clear would otherwise unmask it mid-replace.
      if (this.hasAttribute('data-filled')) {
        this.setAttribute('data-swapping', '');
        this._swapGen = gen;
      }
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        // Clear BEFORE setSlot: its synchronous re-render must see no
        // pending encode, so a byte-identical re-upload (same data URL, no
        // load event coming) still clears the mask via the complete branch.
        this._swapGen = 0;
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._swapGen = 0;
        // Reveal the kept old image — unless another replacement (a
        // remote pick's src swap) is still in flight, in which case the
        // mask stays until THAT image settles (its load/error releases).
        this._releaseMask();
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is available on any filled slot — the user can
    // always reposition/scale. `fit` only sets the initial baseline (see
    // _geom): contain starts fully-visible, cover starts frame-filling.
    _reframes() {
      return this.hasAttribute('data-filled');
    }

    // The single release discipline for the replacement-in-flight mask
    // (data-swapping). The mask comes off only when BOTH hold:
    //  - no encode is pending (_swapGen) — mid-encode the stored value
    //    still resolves to the old image, so any reveal paints it;
    //  - the frame img has settled on its current src — an unsettled src
    //    means some replacement is still in flight (e.g. a remote pick),
    //    whoever started it, and revealing would paint the previous
    //    frame. The load/error listeners pass settled=true (the event IS
    //    the settlement signal, per spec complete is true by then);
    //    other callers rely on the complete flag (covers loaded AND
    //    failed).
    // Every release path funnels through here EXCEPT _render's empty
    // branch (the img is being cleared — nothing will ever settle).
    _releaseMask(settled) {
      if (!this._swapGen && !this._loadPending && (settled || this._img.complete)) {
        this.removeAttribute('data-swapping');
      }
    }

    // Baseline geometry, shared by clamp/apply/resize. `base` is the scale at
    // view-scale s=1: cover = fill the frame (overflow on the looser axis),
    // contain = fit fully inside (letterboxed). Zooming a contain image past
    // s where it overflows naturally becomes a crop. Null until the img has
    // loaded (naturalWidth is 0 before that) or when the slot has no layout
    // box — ResizeObserver fires with a 0×0 rect under display:none, and
    // clamping against a degenerate 1×1 frame would silently pull the stored
    // pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
      const base = contain ? Math.min(fw / iw, fh / ih) : Math.max(fw / iw, fh / ih);
      return {
        iw,
        ih,
        fw,
        fh,
        base
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      // Top-layer controls: pin to the frame's top-right in viewport px
      // (the same 8px inset as the in-frame layout; unscaled — top-layer UI
      // reads as chrome, not page content). BEFORE the geometry branch:
      // placement needs only the frame rect, and a not-yet-loaded or broken
      // src must not leave the promoted strip floating unpositioned. Gated
      // on the popover actually being open: without the Popover API,
      // showPopover() threw (swallowed in _enterReframe), .ctl stays in
      // its in-frame absolute layout, and viewport-px coordinates would
      // shove it off-frame — and matches(':popover-open') itself throws
      // there (unknown pseudo-class), hence the try/catch.
      if (this.hasAttribute('data-reframe')) {
        let onTop = false;
        try {
          onTop = this._ctl.matches(':popover-open');
        } catch {}
        if (onTop) {
          const r = this.getBoundingClientRect();
          this._ctl.style.left = r.right - 8 + 'px';
          this._ctl.style.top = r.top + 8 + 'px';
        }
      }
      if (!g) {
        // Dimensions not known yet (before img load) — centered fit so there
        // is no flash of an unpositioned image before the geometry lands.
        const contain = (this.getAttribute('fit') || 'cover').toLowerCase() === 'contain';
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = contain ? 'contain' : 'cover';
        return;
      }
      // Baseline (cover-fill or contain-fit) × view scale. Width/height and
      // left/top are all frame-% — depends only on the frame aspect ratio, so
      // a responsive resize keeps the same crop. The spill layer mirrors the
      // same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      if (this.hasAttribute('data-reframe')) {
        // Top-layer spill: position in viewport px over the frame. The top
        // layer escapes ancestor transforms entirely, so EVERY term must be
        // in viewport units: getBoundingClientRect gives the frame's scaled
        // origin AND size, and the rect/layout ratio rescales the ghost —
        // sizing from layout px alone renders it 1/scale too large under a
        // scaled deck slide. Inner ghost + handles stay box-relative.
        const r = this.getBoundingClientRect();
        const sx = g.fw ? r.width / g.fw : 1;
        const sy = g.fh ? r.height / g.fh : 1;
        this._spill.style.width = g.iw * k * sx + 'px';
        this._spill.style.height = g.ih * k * sy + 'px';
        this._spill.style.left = r.left + (50 + this._view.x) / 100 * r.width + 'px';
        this._spill.style.top = r.top + (50 + this._view.y) / 100 * r.height + 'px';
      }
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      // An Unsplash src with no credit attribute must NOT render — showing
      // the photo uncredited is the Unsplash-terms violation itself. The
      // error tile replaces the photo until the credit is written. A
      // user-dropped image is the user's own content and always renders.
      // Trimmed: credit is agent/user-editable content, and a whitespace-
      // only value must count as missing — otherwise it would suppress the
      // error tile AND render an empty credit box (no text, no links),
      // exactly the unattributed state this gate exists to prevent.
      const credit = (this.getAttribute('credit') || '').trim();
      const attrError = !!(!credit && !this._userUrl && srcAttr && isUnsplashHost(srcAttr));
      this.toggleAttribute('data-attribution-error', attrError);
      if (url && !attrError) {
        const prev = this._img.getAttribute('src');
        if (prev !== url) {
          // Replacing an already-shown image: mark the swap BEFORE setting
          // src so the stale frame is never revealed (see the data-swapping
          // stylesheet rules). First fill (prev empty) keeps the existing
          // placeholder-until-load behavior — no spinner. _hidShowing
          // covers the pick path's transient attribution-error wipe: prev
          // is gone, but an image WAS showing, so this is a replacement.
          if (prev || this._hidShowing) this.setAttribute('data-swapping', '');
          // Mark the swap BEFORE assigning src: complete keeps reporting
          // the old settled request until the browser's
          // update-the-image-data microtask runs, so same-task re-renders
          // (the pick path's credit/credit-href setAttributes) need this
          // flag, not complete, to know a load is in flight.
          this._loadPending = true;
          this._img.src = url;
          this._ghost.src = url;
        } else {
          // Same-src re-render — release if settled, so an ingest-set
          // spinner can't stick after a byte-identical re-upload (same
          // data URL, no further load event ever fires).
          this._releaseMask();
        }
        this._hidShowing = false;
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this.removeAttribute('data-swapping');
        // The src is being removed — no load/error will ever fire for it.
        this._loadPending = false;
        // A transient attribution-error wipe of a showing image happens on
        // the pick path: the host sets src one setAttribute before credit,
        // so render N hides the old image (attrError) and render N+1
        // restores a URL. Remember the wipe so that restore renders as a
        // replacement (spinner), not a first fill (blank frame).
        this._hidShowing = attrError && !!this._img.getAttribute('src');
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        // The error tile owns the blocked-photo state; .empty stays for
        // the genuinely-empty slot.
        this._empty.style.display = attrError ? 'none' : 'flex';
        this.removeAttribute('data-filled');
      }

      // Credit belongs to the author src, so a user drop hides it.
      // textContent + the http(s)-only funnel keep external strings inert.
      const showCredit = !!(url && credit && !this._userUrl && !attrError);
      this._credit.textContent = '';
      if (showCredit) {
        // Validate once (resolved against the document, http(s) only),
        // then append the terms-required utm referral params to links
        // that point back at unsplash.com.
        let href = '';
        const rawHref = this.getAttribute('credit-href') || '';
        if (rawHref) {
          try {
            const u = new URL(rawHref, document.baseURI);
            if (u.protocol === 'http:' || u.protocol === 'https:') {
              href = withReferral(u.href);
            }
          } catch {}
        }
        const mkLink = (text, linkHref) => {
          const a = document.createElement('a');
          a.setAttribute('target', '_blank');
          a.setAttribute('rel', 'noopener noreferrer');
          a.setAttribute('href', linkHref);
          a.textContent = text;
          return a;
        };
        // Unsplash's prescribed credit is TWO links — the photographer's
        // name to their profile (credit-href) and 'Unsplash' to the
        // homepage. Render that split whenever the text has the canonical
        // shape; other text keeps the legacy single-link rendering.
        const m = /^Photo by (.+) on Unsplash$/.exec(credit);
        if (m) {
          this._credit.appendChild(document.createTextNode('Photo by '));
          this._credit.appendChild(href ? mkLink(m[1], href) : document.createTextNode(m[1]));
          this._credit.appendChild(document.createTextNode(' on '));
          this._credit.appendChild(mkLink('Unsplash', UNSPLASH_HOMEPAGE_HREF));
        } else if (href) {
          this._credit.appendChild(mkLink(credit, href));
        } else {
          this._credit.textContent = credit;
        }
      }
      this.toggleAttribute('data-credit', showCredit);
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soul-pharmacy/image-slot.js", error: String((e && e.message) || e) }); }

// ui_kits/soul-pharmacy/ios-frame.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
// Copied omelette starter. Re-running copy_starter_component with this kind overwrites this file with the latest version (page content is unaffected).

/* BEGIN USAGE */
// iOS.jsx — Simplified iOS 26 (Liquid Glass) device frame
// Based on the iOS 26 UI Kit + Figma status bar spec. No assets, no deps.
// Exports (to window): IOSDevice, IOSStatusBar, IOSNavBar, IOSGlassPill, IOSList, IOSListRow, IOSKeyboard
//
// Usage — wrap your screen content in <IOSDevice> to get the bezel, status bar
// and home indicator (props: title, dark, keyboard):
//
//   <IOSDevice title="Settings">
//     ...your screen content...
//   </IOSDevice>
//   <IOSDevice dark title="Search" keyboard>…</IOSDevice>
/* END USAGE */

// ─────────────────────────────────────────────────────────────
// Status bar
// ─────────────────────────────────────────────────────────────
function IOSStatusBar({
  dark = false,
  time = '9:41'
}) {
  const c = dark ? '#fff' : '#000';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 154,
      alignItems: 'center',
      justifyContent: 'center',
      padding: '21px 24px 19px',
      boxSizing: 'border-box',
      position: 'relative',
      zIndex: 20,
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 1.5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: '-apple-system, "SF Pro", system-ui',
      fontWeight: 590,
      fontSize: 17,
      lineHeight: '22px',
      color: c
    }
  }, time)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      height: 22,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 7,
      paddingTop: 1,
      paddingRight: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "12",
    viewBox: "0 0 19 12"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "7.5",
    width: "3.2",
    height: "4.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.8",
    y: "5",
    width: "3.2",
    height: "7",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9.6",
    y: "2.5",
    width: "3.2",
    height: "9.5",
    rx: "0.7",
    fill: c
  }), /*#__PURE__*/React.createElement("rect", {
    x: "14.4",
    y: "0",
    width: "3.2",
    height: "12",
    rx: "0.7",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "12",
    viewBox: "0 0 17 12"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8.5 3.2C10.8 3.2 12.9 4.1 14.4 5.6L15.5 4.5C13.7 2.7 11.2 1.5 8.5 1.5C5.8 1.5 3.3 2.7 1.5 4.5L2.6 5.6C4.1 4.1 6.2 3.2 8.5 3.2Z",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M8.5 6.8C9.9 6.8 11.1 7.3 12 8.2L13.1 7.1C11.8 5.9 10.2 5.1 8.5 5.1C6.8 5.1 5.2 5.9 3.9 7.1L5 8.2C5.9 7.3 7.1 6.8 8.5 6.8Z",
    fill: c
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "8.5",
    cy: "10.5",
    r: "1.5",
    fill: c
  })), /*#__PURE__*/React.createElement("svg", {
    width: "27",
    height: "13",
    viewBox: "0 0 27 13"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "23",
    height: "12",
    rx: "3.5",
    stroke: c,
    strokeOpacity: "0.35",
    fill: "none"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "9",
    rx: "2",
    fill: c
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25 4.5V8.5C25.8 8.2 26.5 7.2 26.5 6.5C26.5 5.8 25.8 4.8 25 4.5Z",
    fill: c,
    fillOpacity: "0.4"
  }))));
}

// ─────────────────────────────────────────────────────────────
// Liquid glass pill — blur + tint + shine
// ─────────────────────────────────────────────────────────────
function IOSGlassPill({
  children,
  dark = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      minWidth: 44,
      borderRadius: 9999,
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: dark ? '0 2px 6px rgba(0,0,0,0.35), 0 6px 16px rgba(0,0,0,0.2)' : '0 1px 3px rgba(0,0,0,0.07), 0 3px 10px rgba(0,0,0,0.06)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.28)' : 'rgba(255,255,255,0.5)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 9999,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15), inset -1px -1px 1px rgba(255,255,255,0.08)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: '0 4px'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Navigation bar — glass pills + large title
// ─────────────────────────────────────────────────────────────
function IOSNavBar({
  title = 'Title',
  dark = false,
  trailingIcon = true
}) {
  const muted = dark ? 'rgba(255,255,255,0.6)' : '#404040';
  const text = dark ? '#fff' : '#000';
  const pillIcon = content => /*#__PURE__*/React.createElement(IOSGlassPill, {
    dark: dark
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, content));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      paddingTop: 62,
      paddingBottom: 10,
      position: 'relative',
      zIndex: 5
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px'
    }
  }, pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "20",
    viewBox: "0 0 12 20",
    fill: "none",
    style: {
      marginLeft: -1
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M10 2L2 10l8 8",
    stroke: muted,
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), trailingIcon && pillIcon(/*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "6",
    viewBox: "0 0 22 6"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "3",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "3",
    r: "2.5",
    fill: muted
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "19",
    cy: "3",
    r: "2.5",
    fill: muted
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 16px',
      fontFamily: '-apple-system, system-ui',
      fontSize: 34,
      fontWeight: 700,
      lineHeight: '41px',
      color: text,
      letterSpacing: 0.4
    }
  }, title));
}

// ─────────────────────────────────────────────────────────────
// Grouped list (inset card, r:26) + row (52px)
// ─────────────────────────────────────────────────────────────
function IOSListRow({
  title,
  detail,
  icon,
  chevron = true,
  isLast = false,
  dark = false
}) {
  const text = dark ? '#fff' : '#000';
  const sec = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const ter = dark ? 'rgba(235,235,245,0.3)' : 'rgba(60,60,67,0.3)';
  const sep = dark ? 'rgba(84,84,88,0.65)' : 'rgba(60,60,67,0.12)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      minHeight: 52,
      padding: '0 16px',
      position: 'relative',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      letterSpacing: -0.43
    }
  }, icon && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 30,
      height: 30,
      borderRadius: 7,
      background: icon,
      marginRight: 12,
      flexShrink: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      color: text
    }
  }, title), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      color: sec,
      marginRight: 6
    }
  }, detail), chevron && /*#__PURE__*/React.createElement("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    style: {
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M1 1l6 6-6 6",
    stroke: ter,
    strokeWidth: "2",
    fill: "none",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  })), !isLast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: icon ? 58 : 16,
      height: 0.5,
      background: sep
    }
  }));
}
function IOSList({
  header,
  children,
  dark = false
}) {
  const hc = dark ? 'rgba(235,235,245,0.6)' : 'rgba(60,60,67,0.6)';
  const bg = dark ? '#1C1C1E' : '#fff';
  return /*#__PURE__*/React.createElement("div", null, header && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: '-apple-system, system-ui',
      fontSize: 13,
      color: hc,
      textTransform: 'uppercase',
      padding: '8px 36px 6px',
      letterSpacing: -0.08
    }
  }, header), /*#__PURE__*/React.createElement("div", {
    style: {
      background: bg,
      borderRadius: 26,
      margin: '0 16px',
      overflow: 'hidden'
    }
  }, children));
}

// ─────────────────────────────────────────────────────────────
// Device frame
// ─────────────────────────────────────────────────────────────
function IOSDevice({
  children,
  width = 402,
  height = 874,
  dark = false,
  title,
  keyboard = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      borderRadius: 48,
      overflow: 'hidden',
      position: 'relative',
      background: dark ? '#000' : '#F2F2F7',
      boxShadow: '0 40px 80px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.12)',
      fontFamily: '-apple-system, system-ui, sans-serif',
      WebkitFontSmoothing: 'antialiased'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 11,
      left: '50%',
      transform: 'translateX(-50%)',
      width: 126,
      height: 37,
      borderRadius: 24,
      background: '#000',
      zIndex: 50
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 10
    }
  }, /*#__PURE__*/React.createElement(IOSStatusBar, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }
  }, title !== undefined && /*#__PURE__*/React.createElement(IOSNavBar, {
    title: title,
    dark: dark
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflow: 'auto',
      paddingTop: title !== undefined ? 0 : 54
    }
  }, children), keyboard && /*#__PURE__*/React.createElement(IOSKeyboard, {
    dark: dark
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 60,
      height: 34,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-end',
      paddingBottom: 8,
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 139,
      height: 5,
      borderRadius: 100,
      background: dark ? 'rgba(255,255,255,0.7)' : 'rgba(0,0,0,0.25)'
    }
  })));
}

// ─────────────────────────────────────────────────────────────
// Keyboard — iOS 26 liquid glass
// ─────────────────────────────────────────────────────────────
function IOSKeyboard({
  dark = false
}) {
  const glyph = dark ? 'rgba(255,255,255,0.7)' : '#595959';
  const sugg = dark ? 'rgba(255,255,255,0.6)' : '#333';
  const keyBg = dark ? 'rgba(255,255,255,0.22)' : 'rgba(255,255,255,0.85)';

  // special-key icons
  const icons = {
    shift: /*#__PURE__*/React.createElement("svg", {
      width: "19",
      height: "17",
      viewBox: "0 0 19 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M9.5 1L1 9.5h4.5V16h8V9.5H18L9.5 1z",
      fill: glyph
    })),
    del: /*#__PURE__*/React.createElement("svg", {
      width: "23",
      height: "17",
      viewBox: "0 0 23 17"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M7 1h13a2 2 0 012 2v11a2 2 0 01-2 2H7l-6-7.5L7 1z",
      fill: "none",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinejoin: "round"
    }), /*#__PURE__*/React.createElement("path", {
      d: "M10 5l7 7M17 5l-7 7",
      stroke: glyph,
      strokeWidth: "1.6",
      strokeLinecap: "round"
    })),
    ret: /*#__PURE__*/React.createElement("svg", {
      width: "20",
      height: "14",
      viewBox: "0 0 20 14"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M18 1v6H4m0 0l4-4M4 7l4 4",
      fill: "none",
      stroke: "#fff",
      strokeWidth: "1.8",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }))
  };
  const key = (content, {
    w,
    flex,
    ret,
    fs = 25,
    k
  } = {}) => /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      height: 42,
      borderRadius: 8.5,
      flex: flex ? 1 : undefined,
      width: w,
      minWidth: 0,
      background: ret ? '#08f' : keyBg,
      boxShadow: '0 1px 0 rgba(0,0,0,0.075)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, "SF Compact", system-ui',
      fontSize: fs,
      fontWeight: 458,
      color: ret ? '#fff' : glyph
    }
  }, content);
  const row = (keys, pad = 0) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      justifyContent: 'center',
      padding: `0 ${pad}px`
    }
  }, keys.map(l => key(l, {
    flex: true,
    k: l
  })));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 15,
      borderRadius: 27,
      overflow: 'hidden',
      padding: '11px 0 2px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      boxShadow: dark ? '0 -2px 20px rgba(0,0,0,0.09)' : '0 -1px 6px rgba(0,0,0,0.018), 0 -3px 20px rgba(0,0,0,0.012)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      backdropFilter: 'blur(12px) saturate(180%)',
      WebkitBackdropFilter: 'blur(12px) saturate(180%)',
      background: dark ? 'rgba(120,120,128,0.14)' : 'rgba(255,255,255,0.25)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: 27,
      boxShadow: dark ? 'inset 1.5px 1.5px 1px rgba(255,255,255,0.15)' : 'inset 1.5px 1.5px 1px rgba(255,255,255,0.7), inset -1px -1px 1px rgba(255,255,255,0.4)',
      border: dark ? '0.5px solid rgba(255,255,255,0.15)' : '0.5px solid rgba(0,0,0,0.06)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'center',
      padding: '8px 22px 13px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, ['"The"', 'the', 'to'].map((w, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, i > 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      width: 1,
      height: 25,
      background: '#ccc',
      opacity: 0.3
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center',
      fontFamily: '-apple-system, system-ui',
      fontSize: 17,
      color: sugg,
      letterSpacing: -0.43,
      lineHeight: '22px'
    }
  }, w)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 13,
      padding: '0 6.5px',
      width: '100%',
      boxSizing: 'border-box',
      position: 'relative'
    }
  }, row(['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p']), row(['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'], 20), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14.25,
      alignItems: 'center'
    }
  }, key(icons.shift, {
    w: 45,
    k: 'shift'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6.5,
      flex: 1
    }
  }, ['z', 'x', 'c', 'v', 'b', 'n', 'm'].map(l => key(l, {
    flex: true,
    k: l
  }))), key(icons.del, {
    w: 45,
    k: 'del'
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, key('ABC', {
    w: 92.25,
    fs: 18,
    k: 'abc'
  }), key('', {
    flex: true,
    k: 'space'
  }), key(icons.ret, {
    w: 92.25,
    ret: true,
    k: 'ret'
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 56,
      width: '100%',
      position: 'relative'
    }
  }));
}
Object.assign(window, {
  IOSDevice,
  IOSStatusBar,
  IOSNavBar,
  IOSGlassPill,
  IOSList,
  IOSListRow,
  IOSKeyboard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soul-pharmacy/ios-frame.jsx", error: String((e && e.message) || e) }); }

// ui_kits/soul-pharmacy/rx-data.js
try { (() => {
// rx-data.js — ⚠ 초기 임시(PLACEHOLDER) 데이터. 사용자 확정 원문이 아님.
//   실제 확정 데이터는 rx-prescriptions.js(RX_PRESCRIPTIONS) / assessment-data.js.
//   pickPrescription이 아직 원문이 없는 항목(증상·마음강도·주의사항본문·작은실천·처방단어)을
//   여기서 임시로 채우며, merged._provisionalFields로 임시임을 표시한다.
//   감정별 원문이 줄글/시트로 전달되면 해당 항목을 실제 데이터로 교체할 것.
// opinion = 마음 소견(현재 상태 정리), intensity = 마음 강도.
window.RX_DATA = {
  anxious: {
    symptom: "불안이 올라옴",
    intensity: "잔잔하지만 계속 차오름",
    opinion: "아직 오지 않은 일을 미리 짊어지느라 마음이 조금 지쳐 있는 상태예요. 걱정이 앞서 숨이 얕아졌을 수 있어요. 지금 필요한 건 모든 걸 해결하는 것이 아니라, 하나를 잠시 맡겨보는 연습입니다.",
    verse: "너희는 마음에 근심하지 말라 하나님을 믿으니 또 나를 믿으라",
    reference: "요한복음 14:1",
    dose: "숨을 고르고, 이 말씀을 천천히 3번 읽기",
    caution: "불안을 믿음 없음으로 정죄하지 말고, 하나님께 가져갈 신호로 보기",
    practice: "오늘 해결해야 할 일을 하나만 적고, 나머지는 잠시 내려놓기",
    word: "믿음"
  },
  broken: {
    symptom: "마음이 무너짐",
    intensity: "깊게 가라앉음",
    opinion: "마음이 크게 흔들리고, 스스로를 다그치느라 많이 지쳐 있는 상태예요. 무너진 것처럼 느껴지지만 아직 완전히 꺼지지 않았어요. 지금은 다시 세우기보다, 상한 마음을 그대로 안아줄 때입니다.",
    verse: "상한 갈대를 꺾지 아니하며 꺼져가는 등불을 끄지 아니하고",
    reference: "이사야 42:3",
    dose: "자기 전, 나를 몰아붙이는 말을 멈추고 천천히 읽기",
    caution: "말씀을 채찍처럼 받지 말고, 나를 살리는 초대로 받기",
    practice: "오늘 나에게 “아직 꺼지지 않았다”고 한 번 말해주기",
    word: "긍휼"
  },
  compare: {
    symptom: "자꾸 남과 비교됨",
    intensity: "은근하게 마음을 누름",
    opinion: "다른 사람과 나를 자꾸 견주며 마음이 작아져 있는 상태예요. 남의 속도가 크게 보여서 내 자리가 흐릿하게 느껴질 수 있어요. 지금은 견주기를 멈추고, 내게 맡겨진 몫을 다시 바라볼 때입니다.",
    verse: "각각 자기의 일을 살피라 그리하면 자랑할 것이 자기에게만 있고 남에게는 있지 아니하리니",
    reference: "갈라디아서 6:4",
    dose: "SNS를 잠시 닫고, 이 말씀을 천천히 읽기",
    caution: "비교를 죄로 정죄하지 말고, 내 자리를 확인하는 신호로 보기",
    practice: "오늘 내게 주어진 작은 것 하나에 감사하기",
    word: "사랑"
  },
  waiting: {
    symptom: "기다림이 버거움",
    intensity: "조급하게 일렁임",
    opinion: "기다림이 길어져 마음이 조급하고 지쳐 있는 상태예요. 아무 일도 일어나지 않는 것 같아 답답할 수 있어요. 하지만 지금의 기다림은 멈춤이 아니라, 약속을 향해 자라나는 시간입니다.",
    verse: "너희에게 인내가 필요함은 너희가 하나님의 뜻을 행한 후에 약속하신 것을 받기 위함이라",
    reference: "히브리서 10:36",
    dose: "조급함이 올라올 때, 이 말씀을 한 번 소리 내어 읽기",
    caution: "기다림을 실패로 여기지 말고, 자라는 시간으로 받기",
    practice: "결과를 재촉하지 말고, 오늘 할 수 있는 한 걸음만 걷기",
    word: "인내"
  },
  forgive: {
    symptom: "용서가 안 됨",
    intensity: "묵직하게 맺혀 있음",
    opinion: "풀리지 않은 마음 때문에 속이 무겁게 눌려 있는 상태예요. 용서하고 싶은데 마음이 따라주지 않아 힘들 수 있어요. 지금은 단번에 풀어내기보다, 조금씩 내려놓기를 시작할 때입니다.",
    verse: "서로 친절하게 하며 불쌍히 여기며 서로 용서하기를 하나님이 그리스도 안에서 너희를 용서하심과 같이 하라",
    reference: "에베소서 4:32",
    dose: "억지로 잊으려 말고, 이 말씀을 천천히 3번 읽기",
    caution: "용서를 감정의 완결로 여기지 말고, 매일의 선택으로 받기",
    practice: "오늘은 그 사람을 위해 한 문장만 기도해보기",
    word: "용서"
  },
  distant: {
    symptom: "하나님이 멀게 느껴짐",
    intensity: "고요하게 멀어짐",
    opinion: "하나님이 멀게 느껴져 마음이 외롭고 허전한 상태예요. 아무 응답도 없는 것 같아 마음이 가라앉을 수 있어요. 하지만 느낌의 거리와 실제 관계는 다르며, 지금 이 순간에도 곁에 계십니다.",
    verse: "주의 말씀은 내 발에 등이요 내 길에 빛이니이다",
    reference: "시편 119:105",
    dose: "조용한 곳에서, 이 말씀을 천천히 읽으며 숨 고르기",
    caution: "느낌의 거리감을 관계의 단절로 오해하지 않기",
    practice: "오늘 짧게라도 말씀 한 구절을 눈으로 지나가기",
    word: "말씀"
  },
  calling: {
    symptom: "책임이 버거움",
    intensity: "무겁게 짓눌림",
    opinion: "맡은 자리가 버겁게 느껴져 마음이 무거운 상태예요. 잘 해내야 한다는 부담이 어깨를 누르고 있을 수 있어요. 지금은 전부를 증명하기보다, 한 걸음만 함께 걷기를 시작할 때입니다.",
    verse: "내 멍에는 쉽고 내 짐은 가벼움이라",
    reference: "마태복음 11:30",
    dose: "오늘 맡은 일 전체가 아니라, 지금 할 수 있는 한 걸음만 보기",
    caution: "사명을 성과로 증명하려 하지 말고, 하나님과 함께 걷는 길로 받기",
    practice: "오늘 해야 할 일 중 가장 작은 순종 하나만 정하기",
    word: "맡김"
  },
  thanks: {
    symptom: "감사가 사라짐",
    intensity: "메마르게 잦아듦",
    opinion: "마음이 메마르고, 좋은 것이 잘 보이지 않는 상태예요. 감사가 사라진 자신을 탓하게 될 수도 있어요. 하지만 감사는 억지로 짜내는 게 아니라, 작은 것을 다시 발견하는 연습입니다.",
    verse: "범사에 감사하라 이것이 그리스도 예수 안에서 너희를 향하신 하나님의 뜻이니라",
    reference: "데살로니가전서 5:18",
    dose: "잠들기 전, 오늘 있었던 작은 일 하나를 떠올리며 읽기",
    caution: "감사를 억지 감정으로 만들지 말고, 발견하는 연습으로 받기",
    practice: "오늘 하루 중 감사한 것 딱 한 가지만 적어보기",
    word: "감사"
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soul-pharmacy/rx-data.js", error: String((e && e.message) || e) }); }

// ui_kits/soul-pharmacy/rx-prescriptions.js
try { (() => {
// rx-prescriptions.js — 감정별 A/B 처방전 (스프레드시트 연결).
// 시트에 자가문진 + A/B 처방전이 모두 있는 감정만 등록한다.
// 각 처방전: { num, state(내부상태), verse(성경원문·없으면 ''), reference(말씀 성구),
//              cognitive(인지오류), opinion(소견서), dose(복용법) }
window.RX_PRESCRIPTIONS = {
  "anxious": {
    "A": [{
      "num": "A.1",
      "state": "말씀을 붙잡고 다시 서고 싶은 상태",
      "reference": "잠언 16:3",
      "verse": "너의 행사를 여호와께 맡기라 그리하면 너의 경영하는 것이 이루리라.",
      "cognitive": "내가 모든 것을 붙잡고 버텨야 결과가 잘 나온다. 맡기는 것은 책임을 버리는 것이다.",
      "opinion": "당신의 불안은 약해서 생긴 마음이 아니라, 맡겨진 일을 진심으로 대하고 있기 때문에 올라온 긴장일 수 있어요.\n\n하지만 오늘 모든 것을 다 붙잡지 않아도 괜찮아요. 당신의 몫은 오늘 할 수 있는 한 걸음이고, 결과를 이끄시는 분은 하나님입니다.\n\n오늘은 더 세게 버티는 날이 아니라, 다시 하나님께 맡기는 날입니다.\n\n맡긴다는 것은 책임을 버리는 것이 아니라, 책임의 주인을 하나님께 돌려드리는 것입니다. 나는 오늘의 한 걸음을 드리고, 완성은 하나님께 맡깁니다.",
      "dose": "오늘 해야 할 모든 일을 한꺼번에 떠올리기보다, 이 질문 하나만 해보세요.\n“주님, 오늘 제가 할 수 있는 한 걸음은 무엇입니까?”",
      "caution": "하나님께 맡긴다는 것은 해야 할 일을 포기하는 것이 아닙니다. 내가 감당할 몫은 성실히 하되, 결과까지 혼자 책임지려 하지 않아도 괜찮습니다.",
      "practice": "지금 붙잡고 있는 일 하나를 떠올려 보세요. 내가 오늘 할 수 있는 일과 하나님께 맡겨야 할 일을 나누어 말한 뒤, 오늘 할 수 있는 것 하나만 해보세요."
    }, {
      "num": "A.2",
      "state": "계획과 방향이 불확실해서 흔들리는 상태",
      "reference": "잠언 16:9",
      "verse": "사람이 마음으로 자기의 길을 계획할지라도 그 걸음을 인도하는 자는 여호와시니라",
      "cognitive": "앞길이 다 보여야만 안심할 수 있다. 모든 길을 내가 통제하지 못하면 불안하다.",
      "opinion": "지금은 앞길이 다 보여야만 안심될 만큼 마음이 긴장되어 있을 수 있어요.\n하지만 하나님은 전체 지도를 한 번에 주시기보다, 오늘 걸을 만큼의 빛으로 인도하실 때가 있습니다.\n\n계획이 무의미한 것이 아니라, 계획보다 더 크신 하나님이 당신의 걸음을 붙들고 계시다는 말씀입니다.",
      "dose": "오늘 결정해야 할 모든 일을 한꺼번에 붙잡기보다, 이렇게 기도해보세요.\n“주님, 지금 제가 걸어야 할 다음 걸음을 보여주세요.”\n\n오늘은 모든 길을 통제하려는 자리에서, 하나님이 인도하시는 다음 걸음을 구하는 자리로 옮겨가는 날입니다.",
      "caution": "다음 걸음이 아직 보이지 않는다고 해서 길을 잘못 가고 있는 것은 아닙니다. 모든 길을 한꺼번에 알아야만 움직일 수 있는 것도 아닙니다.",
      "practice": "오늘 내가 분명히 할 수 있는 다음 행동 하나만 적어보세요. 그다음 일은 ‘지금은 몰라도 괜찮아’라고 말하며 잠시 내려놓아 보세요."
    }, {
      "num": "A.3",
      "state": "생각과 마음이 너무 많은 것을 동시에 들고 있어서, 걱정에 끌려가는 상태",
      "reference": "빌립보서 4:6-7",
      "verse": "아무 것도 염려하지 말고 오직 모든 일에 기도와 간구로 너희 구할 것을 감사함으로 하나님께 아뢰라 그리하면 모든 지각에 뛰어난 하나님의 평강이 그리스도 예수 안에서 너희 마음과 생각을 지키시리라",
      "cognitive": "걱정을 다 해결해야 마음이 놓인다. 내가 원하는 답을 얻어야만 이 불안이 끝난다.",
      "opinion": "걱정이 많다는 건 무너졌다는 뜻이 아니라,\n생각과 마음이 너무 많은 것을 동시에 들고 있다는 뜻일 수 있어요.\n\n오늘은 걱정을 붙잡고 결론을 내리는 날이 아니라,\n내가 무엇을 두려워하고 무엇을 너무 빨리 얻고 싶어 하는지\n하나님 앞에서 다시 바라보는 날입니다.",
      "dose": "오늘 가장 크게 떠오르는 걱정 하나를 짧게 적어보세요. 그리고 아래 순서대로 천천히 말해보세요.\n“하나님, 제가 지금 이 일을 붙잡고 조급해하고 있습니다. 제가 원하는 답에만 마음이 묶이지 않게 해주세요. 이 걱정 때문에 보지 못하고 있던 것을 보게 해주세요. 이미 주신 돌봄, 아직 남아 있는 길, 오늘 할 수 있는 작은 한 걸음을 보게 해주세요.”\n\n이 말씀은 걱정을 없애는 말이 아니라, 염려에 끌려가느라 좁아진 마음을 하나님 앞에서 다시 넓히는 말씀입니다.",
      "caution": "기도한 뒤에도 걱정이 바로 사라지지 않을 수 있습니다. 그렇다고 기도가 헛되거나 하나님께서 내 마음을 외면하신 것은 아닙니다.",
      "practice": "머릿속에서 가장 크게 떠오르는 걱정 하나만 골라보세요. 오늘은 그 한 가지를 하나님께 말씀드리고, 나머지는 내일 다시 생각해도 괜찮다고 스스로에게 말해보세요."
    }, {
      "num": "A.4",
      "state": "내가 붙잡고 있어야 안심되는 상태",
      "reference": "베드로전서 5:7",
      "verse": "너희 염려를 다 주께 맡겨 버리라 이는 저가 너희를 권고하심이니라",
      "cognitive": "내가 붙잡고 통제해야 안전하다. 손을 놓으면 일이 잘못될 것이다.",
      "opinion": "당신이 붙잡고 있는 것은 대충 넘길 수 없는 소중한 일일 수 있어요.\n불안할 때 사람이 무엇이든 붙잡고 싶어지는 건 자연스러운 마음입니다.\n\n다만 사람은 모든 것을 다 통제할 수 없기에,\n붙잡으려 할수록 마음이 더 긴장될 때가 있어요.\n\n오늘은 붙잡은 것을 억지로 버리는 날이 아니라,\n나보다 크신 하나님 앞에 올려드리는 연습을 하는 날입니다.",
      "dose": "손을 천천히 펴고, 이렇게 말해보세요.\n“주님, 제가 이것을 붙잡아야 안심된다고 느끼고 있습니다. 하지만 제가 다 붙잡을 수 없는 사람임을 압니다. 제가 붙잡은 이 마음을 주님 앞에 올려드립니다. 저보다 크신 돌봄 안에서 다시 맡기는 법을 배우게 해주세요.”\n\n하나님께 맡기는 것은 포기가 아니라, 내 손보다 크신 돌봄 안에 올려드리는 것입니다.",
      "caution": "손을 놓는다고 해서 무책임해지는 것은 아닙니다. 내가 다 붙잡을 수 없다는 사실을 인정하는 것도 믿음의 한 모습입니다.",
      "practice": "주먹을 천천히 펴고 30초만 그대로 있어 보세요. 그동안 ‘하나님, 제가 다 붙잡지 않아도 주께서 돌보고 계심을 믿고 싶습니다’라고 말해보세요."
    }, {
      "num": "A.5",
      "state": "두려움이 섞인 불안으로 생각과 마음이 흔들리는 상태",
      "reference": "이사야 41:10",
      "verse": "두려워 말라 내가 너와 함께 함이니라 놀라지 말라 나는 네 하나님이 됨이니라 내가 너를 굳세게 하리라 참으로 너를 도와 주리라 참으로 나의 의로운 오른손으로 너를 붙들리라",
      "cognitive": "두려움이 완전히 사라져야만 다시 설 수 있다. 이 두려움은 내가 감당할 수 없다.",
      "opinion": "지금 필요한 건 더 세게 버티는 힘이 아니라,\n다시 중심을 잡는 힘일 수 있어요.\n\n불안이 커지면 생각은 앞서가고,\n마음은 작아지고,\n두려움 때문에 내가 감당할 수 있을지 확신이 흐려질 수 있습니다.\n\n하지만 하나님은 당신을 멀리서 지켜보시는 분이 아니라,\n두려움 속에서도 당신의 생각과 마음을 붙드시는 분입니다.\n\n붙드신다는 것은 두려움을 없던 일로 만드는 것이 아니라,\n두려움 속에서도 생각과 마음이 하나님 안에서 다시 지켜지게 하신다는 뜻입니다.",
      "dose": "오늘 불안이 올라올 때, 천천히 말해보세요.\n“주님이 나를 붙드신다. 내 생각과 마음을 지키신다.”\n\n또는 조금 더 기도문처럼,\n“주님, 제가 지금 두렵습니다. 생각은 앞서가고 마음은 작아지고 있습니다. 저를 붙드시는 주님 안에서 제 생각과 마음이 다시 지켜지게 해주세요.”",
      "caution": "두려움이 남아 있다고 해서 이미 무너진 것은 아닙니다. 두려운 마음을 안고도 오늘을 지나고 있는 것 자체가 충분히 귀한 걸음입니다.",
      "practice": "두 발이 바닥에 닿아 있는 감각을 느끼며 천천히 세 번 숨을 쉬어보세요. 숨을 내쉴 때마다 ‘하나님이 지금도 나를 붙들고 계신다’고 마음속으로 말해보세요."
    }],
    "B": [{
      "num": "B.1",
      "state": "두려움이 크고, 기도할 말조차 잘 정리되지 않는 상태",
      "reference": "로마서 8:26",
      "verse": "이와 같이 성령도 우리 연약함을 도우시나니 우리가 마땅히 빌 바를 알지 못하나 오직 성령이 말할 수 없는 탄식으로 우리를 위하여 친히 간구하시느니라",
      "cognitive": "제대로 기도하지 못하면 하나님도 내 마음을 이해하실 수 없다. 불안한 나는 믿음 밖에 있다.",
      "opinion": "지금 불안하다는 건 믿음 밖에 있다는 뜻이 아니에요.\n마음이 너무 지치면, 무엇을 구해야 할지조차 흐려질 수 있습니다.\n\n말로 정리되지 않는 불안도,\n탄식처럼 남은 마음도 하나님 앞에 놓일 수 있어요.\n\n하나님은 분명한 말과 단정한 기도만 받으시는 분이 아니라,\n말이 되지 않는 마음까지 아시는 분입니다.\n\n오늘은 긴 기도를 완성하는 날이 아니라,\n그 마음 그대로 하나님께 아주 작게 기대어도 되는 날입니다.",
      "dose": "오늘은 긴 기도를 만들지 않아도 괜찮아요. 이 한 문장만 천천히 말해보세요.\n“하나님, 제가 무엇을 구해야 할지도 잘 모르겠습니다. 말이 잘 나오지 않지만, 이 마음 그대로 주님 앞에 있습니다. 제 안의 탄식까지 아시는 주님, 저를 도와주세요.”",
      "caution": "기도가 문장으로 잘 나오지 않아도 괜찮습니다. 하나님은 정리된 말뿐 아니라 말이 되지 않는 마음까지 아십니다.",
      "practice": "긴 기도를 하려 하지 말고, 지금 마음에 가장 가까운 말 한마디만 하나님께 드려보세요. ‘무서워요’, ‘모르겠어요’처럼 짧아도 괜찮습니다."
    }, {
      "num": "B.2",
      "state": "걱정을 붙잡느라 마음이 쉴 수 없는 상태",
      "reference": "마태복음 6:26-27",
      "verse": "공중의 새를 보라 심지도 않고 거두지도 않고 창고에 모아들이지도 아니하되 너희 하늘 아버지께서 기르시나니 너희는 이것들보다 귀하지 아니하냐 너희 중에 누가 염려함으로 그 키를 한 자라도 더할 수 있겠느냐",
      "cognitive": "내가 계속 걱정하고 대비해야 안전하다. 걱정을 놓으면 나쁜 일이 생길 것이다.",
      "opinion": "지금 걱정이 많다는 건 마음이 약해서가 아니에요.\n소중한 것이 있기 때문에 마음이 계속 애쓰는 것일 수 있습니다.\n\n사람은 불안할수록 더 많이 생각하고,\n더 많이 붙잡아야 안전하다고 느낄 수 있어요.\n\n하지만 하나님은 당신의 필요를 모르시는 분이 아닙니다.\n공중의 새를 먹이시고 들의 꽃을 입히시는 분이\n당신을 귀하게 여기신다고 말씀하십니다.\n\n그러니 오늘은 걱정을 억지로 끊어내는 날이 아니라,\n“내가 이 걱정을 붙잡아야만 안전한 걸까?”를\n하나님의 돌봄 안에서 조용히 다시 바라보는 날입니다.",
      "dose": "오늘 가장 오래 붙잡고 있는 걱정 하나를 떠올려보세요. 그리고 천천히 이렇게 말해보세요.\n“하나님, 제가 이 걱정을 붙잡고 있어야 안전하다고 느낍니다. 하지만 주님은 제 필요를 모르시는 분이 아님을 기억하고 싶습니다. 제가 귀한 존재라는 사실 안에서, 이 염려를 조금씩 주님 앞에 내려놓게 해주세요.”",
      "caution": "걱정을 잠시 내려놓는다고 해서 현실적인 준비까지 포기하는 것은 아닙니다. 쉬어가는 동안에도 하나님께서는 당신을 돌보고 계십니다.",
      "practice": "창밖의 나무나 곁에 있는 화분처럼 살아 있는 것 하나를 잠시 바라보세요. 그 생명을 돌보시는 하나님께서 나도 지나치지 않으신다는 사실을 떠올려 보세요."
    }, {
      "num": "B.3",
      "state": "내가 붙잡고 있어야 안심되는 상태",
      "reference": "시편 55:22",
      "verse": "네 짐을 여호와께 맡겨 버리라 너를 붙드시고 의인의 요동함을 영영히 허락지 아니하시리로다",
      "cognitive": "이 짐은 내가 혼자 끝까지 들고 있어야 한다. 놓으면 안전하지 않다.",
      "opinion": "당신이 붙잡고 있던 걱정은\n마음이 혼자 들고 있던 짐일 수 있어요.\n\n그 짐을 붙잡고 있었던 건\n믿음이 없어서가 아니라,\n어떻게든 감당해보려고 애써왔기 때문입니다.\n\n사람은 불안할수록\n놓지 않아야 안전하다고 느낄 때가 있어요.\n하지만 오래 들고 있을수록\n마음은 더 긴장되고 지칠 수 있습니다.\n\n오늘은 그 짐을 억지로 버리는 날이 아니라,\n“내가 이만큼 애써왔구나” 하고 알아차리는 날입니다.\n\n그리고 이제는 그 짐을\n혼자 끝까지 들고 있지 않아도 괜찮아요.\n나를 붙드시는 하나님께 조금씩 옮겨드릴 수 있습니다.",
      "dose": "오늘 가장 오래 붙잡고 있던 걱정 하나를 떠올려보세요. 그리고 그 걱정에 이렇게 이름 붙여보세요.\n“이건 내가 혼자 들고 있던 짐이었구나.”\n그다음 천천히 말해보세요.\n“하나님, 제가 이 걱정을 오래 들고 있었습니다. 그만큼 애써온 제 마음을 알아주세요. 제가 다 들 수 없는 이 짐을 주님께 조금씩 맡기는 법을 배우게 해주세요.”",
      "caution": "짐을 맡기는 것은 도망치는 일이 아닙니다. 너무 오래 혼자 버텨온 마음을 이제는 하나님께 보여드리는 일입니다.",
      "practice": "가장 무겁게 느껴지는 일을 한 문장으로 적어보세요. 다 적은 뒤 종이를 내려놓으며 ‘하나님, 이 짐을 혼자 들지 않게 해주세요’라고 말해보세요."
    }, {
      "num": "B.4",
      "state": "내일의 걱정까지 오늘 미리 짊어지고 있는 상태",
      "reference": "마태복음 6:34",
      "verse": "그러므로 내일 일을 위하여 염려하지 말라 내일 일은 내일 염려할 것이요 한 날 괴로움은 그 날에 족하니라",
      "cognitive": "내일 일을 오늘 미리 다 대비해야 한다. 지금 준비하지 못하면 감당할 수 없을 것이다.",
      "opinion": "당신이 내일을 걱정하는 건 이상한 일이 아니에요.\n앞으로 감당해야 할 일이 있고,\n지키고 싶은 것들이 있기 때문일 수 있습니다.\n\n불안은 아직 오지 않은 일을\n오늘의 마음 안으로 미리 끌고 들어옵니다.\n\n그래서 몸은 오늘에 있는데,\n마음은 내일의 문제까지 미리 살아내느라 지칠 수 있어요.\n\n하지만 오늘의 마음은\n내일의 짐까지 다 들도록 만들어지지 않았습니다.\n\n오늘은 내일을 외면하는 날이 아니라,\n내일의 짐을 내일의 자리로 돌려놓고\n오늘 하나님이 주시는 한 걸음을 보는 날입니다.",
      "dose": "오늘 가장 크게 걱정되는 내일의 일을 하나 떠올려보세요. 그리고 이렇게 이름 붙여보세요.\n“이건 오늘 다 살아낼 일이 아니라, 내일 하나님 앞에서 다시 만날 일이다.”\n그다음 천천히 말해보세요.\n“주님, 제가 내일의 일까지 오늘 미리 감당하려 했습니다. 그래서 제 마음이 너무 지쳤습니다. 내일의 짐은 내일 주님 앞에서 만나게 하시고, 오늘 제게 맡겨진 한 걸음만 보게 해주세요.”",
      "caution": "내일의 일을 오늘 다 해결하지 않아도 괜찮습니다. 오늘을 살아갈 힘을 남겨두는 것도 필요한 준비입니다.",
      "practice": "내일 걱정이 떠오르면 ‘이 일은 내일 다시 생각해도 괜찮아’라고 말해보세요. 잊을까 걱정된다면 노트 한쪽에 적어두고, 오늘 해야 할 일로 돌아오세요."
    }, {
      "num": "B.5",
      "state": "모든 가능성을 미리 계산해야 안심되는 상태",
      "reference": "시편 55:22",
      "verse": "네 짐을 여호와께 맡겨 버리라 너를 붙드시고 의인의 요동함을 영영히 허락지 아니하시리로다",
      "cognitive": "모든 경우의 수를 미리 계산해야 한다. 내가 대비하지 못한 일이 생기면 감당할 수 없을 것 같다.",
      "opinion": "모든 경우를 미리 계산하려는 마음은\n겁이 많아서가 아니라,\n무너지지 않으려는 마음의 애씀일 수 있어요.\n\n당신은 대충 넘기고 싶은 것이 아니라,\n잘 감당하고 싶어서 더 많이 생각해왔을 수 있습니다.\n\n하지만 모든 가능성을 끝까지 붙잡고 있으면\n마음은 점점 더 긴장되고,\n내가 다 책임져야 할 것처럼 무거워질 수 있어요.\n\n오늘은 책임을 버리는 날이 아니라,\n내가 들 수 있는 몫과\n하나님께 맡겨야 할 짐을 구별하는 날입니다.",
      "dose": "오늘 머릿속에서 계속 계산하고 있는 걱정 하나를 떠올려보세요. 그리고 천천히 말해보세요.\n“주님, 제가 모든 경우를 다 계산해야 안심된다고 느낍니다. 잘 감당하고 싶어서 여기까지 애써왔습니다. 하지만 제 마음이 이 무게를 다 들 수 없음을 압니다. 제가 감당할 몫과 주님께 맡길 짐을 구별하게 해주세요.”",
      "caution": "모든 가능성을 미리 계산하지 않아도 오늘 하루를 살아갈 수 있습니다. 아직 일어나지 않은 일을 미리 다 감당하려 하지 않아도 괜찮습니다.",
      "practice": "머릿속을 맴도는 ‘만약에’ 하나를 적어보세요. 그 옆에 ‘아직 일어나지 않은 일’이라고 적고, 잠시 눈을 감아 생각을 멈춰보세요."
    }]
  },
  "thanks": {
    "A": [{
      "num": "A.1",
      "state": "감사하지 못하면 하나님의 사랑에서 멀어질 것 같아요",
      "reference": "로마서 5:8",
      "verse": "우리가 아직 죄인 되었을 때에 그리스도께서 우리를 위하여 죽으심으로 하나님께서 우리에게 대한 자기의 사랑을 확증하셨느니라",
      "cognitive": "감사하는 모습을 충분히 보여야 하나님께서 나를 사랑하실 것이다.",
      "opinion": "하나님의 사랑은 당신의 감사가 충분해진 뒤에 시작되지 않았습니다. 하나님께서는 우리가 먼저 합당한 태도와 좋은 모습을 갖추었기 때문에 사랑하신 것이 아니라, 아직 온전하지 않았을 때 먼저 사랑을 보이셨습니다. 감사의 말을 찾지 못하는 지금도 그 사랑은 줄어들지 않습니다.\n\n하나님은 감사의 결과만 보시며 당신을 평가하시는 분이 아닙니다. 마음이 메말라 있는데도 하나님을 놓치고 싶지 않아 이 자리에 머무는 과정과, 감사하지 못하는 자신을 두고 고민하는 마음까지 보고 계십니다. 당신은 감사를 잘해야 사랑받는 사람이 아니라, 이미 하나님의 사랑을 받고 있는 사람입니다.",
      "dose": "오늘은 감사한 것을 억지로 찾아내기 전에 “하나님, 지금은 감사하다는 말이 잘 나오지 않습니다”라고 솔직히 말씀드려 보세요. 좋은 태도를 보여 드리려 마음을 포장하지 않아도 됩니다.\n\n그다음 “하나님의 사랑은 내가 감사하는 정도에 따라 달라지지 않는다”라는 문장을 천천히 읽어 보세요. 마지막으로 “하나님께서 지금도 나와 함께하시며, 이미 내 삶에 동행하고 계심을 받아들입니다”라고 고백해 보세요.",
      "caution": "감사의 말을 찾지 못한다고 해서 하나님의 사랑이 줄어드는 것은 아닙니다. 감사가 잘 나오지 않는 마음까지도 하나님께 솔직히 보여드릴 수 있습니다.",
      "practice": "억지로 감사한 일을 찾기 전에 ‘하나님, 지금은 감사가 잘 나오지 않아요’라고 솔직하게 말해보세요."
    }, {
      "num": "A.2",
      "state": "상황이 나아져야 감사할 수 있을 것 같아요",
      "reference": "하박국 3:17-18",
      "verse": "비록 무화과나무가 무성치 못하며 포도나무에 열매가 없으며 감람나무에 소출이 없으며 밭에 식물이 없으며 우리에 양이 없으며 외양간에 소가 없을찌라도 나는 여호와를 인하여 즐거워하며 나의 구원의 하나님을 인하여 기뻐하리로다",
      "cognitive": "내가 원하는 결과가 생겨야 하나님께 감사할 이유가 생긴다.",
      "opinion": "감사는 상황이 괜찮다고 스스로를 설득하는 말이 아닙니다. 하박국도 아무 어려움이 없었기 때문에 기뻐한 것이 아니라, 눈에 보이는 열매가 없는 현실을 그대로 인정하면서도 하나님이 여전히 자신의 구원이심을 바라보았습니다. 감사는 부족함을 부정하는 태도가 아니라, 부족함 속에서도 사라지지 않은 하나님을 알아보는 태도입니다.\n\n하나님은 당신에게 상황을 좋게 해석하여 무조건 감사하라고 요구하시는 분이 아닙니다. 결과가 보이지 않아 지친 시간에도 당신의 생명을 붙들고, 말씀을 주며, 다시 하나님을 바라볼 수 있도록 기다리고 계십니다. 원하는 결과가 아직 없더라도 하나님께서 당신을 사랑하며 함께 걸어오신 과정까지 없어진 것은 아닙니다.",
      "dose": "오늘은 현재의 어려움을 지우지 말고 한 문장으로 인정해 보세요. “아직 달라지지 않은 것이 있어서 속상합니다”, “기다리는 시간이 길어 지쳤습니다”처럼 지금의 마음을 그대로 하나님께 말씀드리면 됩니다.\n\n그 아래에 감사의 이유를 억지로 여러 개 적지 않아도 됩니다. “이 상황에서도 하나님께서 나를 버리지 않으셨다는 사실은 남아 있습니다”라고 고백해 보세요. 상황 자체를 감사하려 애쓰기보다, 상황보다 오래 함께하시는 하나님을 바라보는 시간입니다.",
      "caution": "상황이 달라지지 않았다고 해서 하나님께서 함께하지 않으시는 것은 아닙니다. 힘든 현실을 인정하면서도 하나님의 동행을 바라볼 수 있습니다.",
      "practice": "지금 힘든 일을 한 문장으로 적어보세요. 그 아래 ‘그래도 하나님은 나를 떠나지 않으셨다’라고 덧붙여 보세요."
    }, {
      "num": "A.3",
      "state": "감사하지 못하는 것은 믿음이 부족하다는 뜻 같아요",
      "reference": "시편 103:13-14",
      "verse": "아비가 자식을 불쌍히 여김 같이 여호와께서 자기를 경외하는 자를 불쌍히 여기시나니 이는 저가 우리의 체질을 아시며 우리가 진토임을 기억하심이로다",
      "cognitive": "믿음이 있다면 지치거나 서운해하지 않고 언제나 감사할 수 있어야 한다.",
      "opinion": "감사하지 못하는 순간이 있다고 해서 당신의 믿음 전체가 사라진 것은 아닙니다. 하나님은 사람이 언제나 같은 힘과 감정을 유지할 수 없는 존재임을 알고 계십니다. 우리의 체질을 아신다는 말씀은 하나님께서 연약함을 예상하지 못해 실망하시는 분이 아니라는 뜻입니다.\n\n하나님은 당신에게 완벽한 감정 상태를 요구한 뒤 사랑하시는 분이 아닙니다. 말씀을 따라 살고 싶지만 마음이 따라오지 않는 날과, 감사보다 피로가 먼저 올라오는 과정도 알고 계십니다. 하나님께서는 감사의 표현만 보시는 것이 아니라, 힘이 부족한 중에도 하나님께 돌아오려는 당신의 생명과 마음을 귀하게 여기십니다.",
      "dose": "오늘은 “왜 나는 감사하지 못할까”라고 자신을 판단하는 대신 “지금 내 마음은 무엇 때문에 지쳤을까”라고 물어보세요. 감사 부족을 바로잡기 전에 마음이 힘을 잃은 이유부터 하나님 앞에서 천천히 살펴보는 것입니다.\n\n답이 떠오르지 않아도 괜찮습니다. “하나님, 제 체질과 지금의 한계를 아시는 분이 저를 불쌍히 여겨 주세요”라고 짧게 말씀드려 보세요. 오늘은 감사의 양을 늘리기보다, 연약한 자신을 향한 하나님의 이해와 사랑을 받아들이는 것이 먼저입니다.",
      "caution": "지치거나 서운한 마음이 든다고 해서 믿음이 부족한 것은 아닙니다. 하나님은 지금의 마음과 형편을 모두 아십니다.",
      "practice": "감사하지 못하는 자신을 탓하는 대신 ‘하나님은 내 연약함을 아신다’는 말씀을 천천히 읽어보세요."
    }, {
      "num": "A.4",
      "state": "이미 받은 것들은 너무 익숙해서 잘 보이지 않아요",
      "reference": "시편 103:2-5",
      "verse": "내 영혼아 여호와를 송축하며 그 모든 은택을 잊지 말찌어다 저가 네 모든 죄악을 사하시며 네 모든 병을 고치시며 네 생명을 파멸에서 구속하시고 인자와 긍휼로 관을 씌우시며 좋은 것으로 네 소원을 만족케 하사 네 청춘으로 독수리 같이 새롭게 하시는도다",
      "cognitive": "익숙하게 반복되는 것은 특별한 은혜가 아니며 감사할 가치도 없다.",
      "opinion": "오랫동안 곁에 있던 것은 쉽게 배경처럼 느껴질 수 있습니다. 그러나 익숙하다는 이유로 그 가치가 작아지는 것은 아닙니다. 오늘도 생명이 이어지고, 다시 시작할 기회가 주어지고, 하나님께 돌아갈 수 있다는 사실은 반복되기 때문에 평범해진 것이 아니라 하나님의 돌보심이 계속되고 있다는 흔적입니다.\n\n하나님은 특별한 성취나 극적인 결과를 만들어 낸 사람만 기뻐하시는 분이 아닙니다. 하나님께서 생명을 주셨기 때문에 살아 있는 당신과, 그 생명으로 오늘을 지나며 하나님을 알아 가는 과정 자체를 사랑하십니다. 감사는 대단한 일을 찾아내는 능력이 아니라, 이미 오래 곁에 있었던 사랑을 다시 알아보는 데서 시작될 수 있습니다.",
      "dose": "오늘은 감사한 일을 여러 개 찾아내지 않아도 됩니다. 당연하게 지나쳤던 것 가운데 오늘도 내 곁에 있었던 것 하나만 천천히 바라보세요. 물을 마실 수 있었던 일, 쉴 자리가 있었던 일, 누군가의 짧은 연락처럼 작고 익숙한 것이어도 됩니다.\n\n아직 감사한 마음이 생기지 않아도 괜찮습니다. “이것도 오늘 내 곁에 있었구나” 하고 바라보며, 하나님께서 익숙한 하루 속에서도 나를 돌보고 계셨음을 천천히 마음에 담아 보세요.",
      "caution": "익숙해서 잘 보이지 않는 것도 여전히 매일 주어지는 은혜일 수 있습니다. 특별한 감정이 생기지 않아도 괜찮습니다.",
      "practice": "오늘 너무 익숙해서 지나쳤던 것 하나를 떠올려 보세요. 숨, 잠, 한 끼처럼 평범한 것의 이름을 조용히 불러보세요."
    }, {
      "num": "A.5",
      "state": "감사한다면 항상 밝고 기뻐야 할 것 같아요",
      "reference": "시편 13:5-6",
      "verse": "나는 오직 주의 인자하심을 의뢰하였사오니 내 마음은 주의 구원을 기뻐하리이다 내가 여호와를 찬송하리니 이는 나를 후대하심이로다",
      "cognitive": "슬픔이나 서운함이 남아 있다면 진실한 감사라고 할 수 없다.",
      "opinion": "성경의 감사는 슬픔이 모두 사라진 사람만 드리는 고백이 아닙니다. 시편 13편은 앞부분에서 하나님께 자신의 답답함과 기다림을 솔직히 말한 뒤, 하나님의 인자하심을 다시 의지합니다. 힘든 감정을 말하는 것과 하나님을 신뢰하는 것은 서로 반대되지 않습니다.\n\n하나님은 밝은 표정과 긍정적인 말만 사랑하시는 분이 아닙니다. 울면서도 하나님을 찾는 사람과, 서운함이 남아 있어도 관계를 끊지 않고 말씀을 붙드는 사람의 과정도 귀하게 보십니다. 감사는 아픔을 감추는 미소가 아니라, 아픔을 하나님께 말한 뒤에도 그분의 사랑을 완전히 놓지 않는 고백이 될 수 있습니다.",
      "dose": "오늘은 마음속에 함께 존재하는 두 가지를 모두 하나님께 말씀드려 보세요. 먼저 “저는 이것 때문에 속상합니다”라고 말하고, 이어서 “그래도 하나님의 사랑까지 없어진 것은 아니라는 사실을 붙들고 싶습니다”라고 말해 보세요.\n\n기뻐지려고 애쓰거나 감사한 표정을 만들 필요는 없습니다. 오늘의 감사는 힘든 마음을 숨기지 않은 채 하나님과의 관계 안에 머무는 것입니다. 하나님은 감사의 말을 잘하거나 좋은 모습을 보여서 당신을 사랑하시는 분이 아닙니다.",
      "caution": "슬픔이나 서운함이 남아 있어도 감사가 거짓이 되는 것은 아닙니다. 서로 다른 감정이 함께 있어도 괜찮습니다.",
      "practice": "밝은 마음을 억지로 만들지 말고 ‘지금은 슬프지만, 그래도 함께하신 주님을 기억하고 싶어요’라고 말해보세요."
    }],
    "B": [{
      "num": "B.1",
      "state": "좋은 것이 있어도 아무런 느낌이 들지 않아요",
      "reference": "예레미야애가 3:22-23",
      "verse": "여호와의 자비와 긍휼이 무궁하시므로 우리가 진멸되지 아니함이니이다 이것이 아침마다 새로우니 주의 성실이 크도소이다",
      "cognitive": "감사한 감정이 느껴지지 않으면 하나님의 돌보심도 내게 없는 것이다.",
      "opinion": "마음이 오래 지치면 좋은 것을 보아도 감정이 움직이지 않을 수 있습니다. 이것은 하나님께서 당신을 돌보지 않으신다는 증거가 아니라, 지금 마음이 먼저 쉬어야 한다는 신호일 수 있습니다. 감정이 무뎌졌다고 해서 하나님의 자비와 긍휼까지 멈춘 것은 아닙니다.\n\n하나님의 사랑은 당신이 그것을 선명하게 느끼는 날에만 존재하지 않습니다. 잠든 동안에도 아침을 주시고, 아무것도 해내지 못한 날에도 생명을 이어 가게 하며, 다시 하나님을 찾을 수 있도록 기다리십니다. 지금은 사랑을 느끼지 못하더라도 하나님께서는 살아 있는 당신과 오늘을 지나고 있는 그 과정 자체를 여전히 귀히 여기십니다.",
      "dose": "오늘은 감사한 감정을 만들려고 하지 말고 몸과 마음을 먼저 편안하게 해 주세요. 물을 조금 마시거나, 편한 자세로 앉거나, 잠시 눈과 손을 쉬게 하는 것처럼 지금 가능한 돌봄 하나를 선택하면 됩니다.\n\n그 행동을 하면서 “하나님, 지금은 아무 느낌이 없지만 오늘도 저를 지나치지 않으신다는 사실을 믿고 싶습니다”라고 말씀드려 보세요. 감사의 감정이 생기지 않아도 괜찮습니다. 오늘은 하나님의 돌보심을 느끼려 애쓰기보다, 그 돌보심 안에서 잠시 쉬어 가세요.",
      "caution": "감사한 감정이 느껴지지 않아도 하나님의 자비가 사라진 것은 아닙니다. 지금은 마음보다 몸을 먼저 쉬게 해도 괜찮습니다.",
      "practice": "감사를 찾으려 애쓰기보다 물 한 잔 마시기나 편한 자세로 눕기처럼 지금 가능한 돌봄 하나를 해보세요."
    }, {
      "num": "B.2",
      "state": "오늘을 견디는 것만으로도 힘들어요",
      "reference": "이사야 40:29",
      "verse": "피곤한 자에게는 능력을 주시며 무능한 자에게는 힘을 더하시나니",
      "cognitive": "감사할 힘조차 없으면 하나님 앞에서 아무것도 하고 있지 않은 것이다.",
      "opinion": "오늘을 견디는 데 모든 힘을 사용했다면 감사의 말을 만들 여유가 없을 수 있습니다. 하나님께서는 힘이 남아 있는 사람에게만 가까이 가시는 분이 아닙니다. 오히려 피곤하고 힘이 없는 사람에게 능력을 주신다고 말씀하십니다. 지금은 당신이 무언가를 더 드려야 하는 시간이 아니라, 하나님께 도움을 받아야 하는 시간일 수 있습니다.\n\n하나님은 당신이 많은 일을 해내거나 풍성한 감사를 표현했기 때문에 사랑하시는 것이 아닙니다. 생명을 주신 하나님께서는 그 생명이 지치고 힘들어할 때도 외면하지 않으십니다. 오늘 겨우 버틴 것처럼 느껴져도, 하나님은 그 하루를 가볍게 보지 않으시며 여기까지 살아온 과정을 소중히 여기십니다.",
      "dose": "오늘은 감사 제목을 적는 대신 지금 하지 않아도 되는 일 하나를 내려놓아 보세요. 답장을 조금 늦추거나, 완벽하게 정리하려는 일을 멈추거나, 가능한 만큼 누워 쉬어도 됩니다. 쉼은 믿음이 부족해서 포기하는 행동이 아니라, 자신의 한계를 인정하며 하나님께 도움받는 행동이 될 수 있습니다.\n\n쉬는 동안 길게 기도하지 않아도 됩니다. “하나님, 오늘은 감사할 힘보다 버틸 힘이 필요합니다”라고 한 문장만 말씀드려 보세요. 하나님은 감사의 말을 많이 하는 모습만 아니라, 도움을 구하며 하나님께 기대는 모습도 귀하게 받아 주십니다.",
      "caution": "감사할 힘이 없다고 해서 하나님 앞에서 아무것도 하지 않은 것은 아닙니다. 오늘을 견딘 것만으로도 충분히 애쓴 하루입니다.",
      "practice": "감사 제목을 적는 대신 오늘 하지 않아도 되는 일 하나를 내려놓아 보세요. 그 시간만큼은 몸과 마음을 쉬게 해주세요."
    }, {
      "num": "B.3",
      "state": "감사한 것을 적으라는 말조차 부담스러워요",
      "reference": "시편 23:1-3",
      "verse": "여호와는 나의 목자시니 내가 부족함이 없으리로다 그가 나를 푸른 풀밭에 누이시며 쉴 만한 물가로 인도하시는도다 내 영혼을 소생시키시고 자기 이름을 위하여 의의 길로 인도하시는도다",
      "cognitive": "회복하려면 힘들더라도 감사 훈련부터 성실하게 수행해야 한다.",
      "opinion": "지친 마음에는 감사하는 일조차 새로운 과제가 될 수 있습니다. 하지만 목자는 지친 양에게 먼저 더 멀리 걸으라고 요구하지 않습니다. 푸른 풀밭에 눕게 하고 쉴 만한 물가로 인도하며, 약해진 생명이 다시 힘을 얻도록 돌봅니다. 지금 당신에게도 감사의 수행보다 영혼이 소생되는 시간이 먼저 필요할 수 있습니다.\n\n하나님은 당신이 회복 과제를 잘 수행했기 때문에 사랑하시는 분이 아닙니다. 아무것도 적지 못하고, 말씀을 오래 읽지 못하고, 가만히 누워 있는 시간에도 하나님께서 주신 생명의 가치는 줄어들지 않습니다. 하나님은 멈추어 있는 것처럼 보이는 시간에도 당신을 돌보며 다시 살아갈 힘을 준비하십니다.",
      "dose": "오늘은 감사 목록을 쓰지 않아도 됩니다. 종이를 펴거나 휴대전화를 들 힘이 없다면 그대로 쉬세요. 가능하다면 주변의 소리와 온도, 숨의 움직임처럼 지금 자신이 있는 자리만 잠시 느껴 보세요.\n\n그리고 “하나님, 오늘은 감사할 것을 찾기보다 주께서 저를 쉬게 해 주셨으면 좋겠습니다”라고 말해 보세요. 아무 말도 하기 어렵다면 시편 23편을 읽거나 듣는 것만으로도 충분합니다. 오늘은 무엇을 남기려 하기보다 하나님의 돌봄 안에서 쉬어 가세요.",
      "caution": "회복은 감사 과제를 잘 해내는 데서만 시작되는 것이 아닙니다. 지금은 먼저 쉬고 하나님의 돌보심을 받는 시간이 필요할 수 있습니다.",
      "practice": "감사한 일을 찾지 말고 ‘여호와는 나의 목자시니’라는 한 구절을 천천히 읽어보세요. 그 말에 기대어 잠시 쉬어도 괜찮습니다."
    }, {
      "num": "B.4",
      "state": "힘든 일이 계속되니 하나님의 사랑도 잘 믿어지지 않아요",
      "reference": "로마서 8:38-39",
      "verse": "내가 확신하노니 사망이나 생명이나 천사들이나 권세자들이나 현재 일이나 장래 일이나 능력이나 높음이나 깊음이나 다른 아무 피조물이라도 우리를 우리 주 그리스도 예수 안에 있는 하나님의 사랑에서 끊을 수 없으리라",
      "cognitive": "힘든 일이 계속되는 것은 하나님의 사랑이 나에게서 멀어졌다는 뜻이다.",
      "opinion": "어려움이 길어지면 하나님께서 나를 잊으신 것처럼 느껴질 수 있습니다. 그러나 힘든 상황과 하나님의 사랑은 같은 것이 아닙니다. 현재의 어려움이 크다는 이유로 하나님의 사랑이 작아진 것도 아니며, 그 사랑에서 당신이 밀려난 것도 아닙니다.\n\n하나님은 좋은 결과를 만들어 냈기 때문에 당신을 사랑하시는 분이 아닙니다. 하나님께서 생명을 주셨고 그 생명이 하나님과 함께 살아가고 있기 때문에, 기쁜 날뿐 아니라 흔들리고 질문하는 과정까지 사랑하십니다. 상황을 이해하지 못하고 감사가 나오지 않는 오늘도 당신은 하나님의 사랑 안에 있습니다.",
      "dose": "오늘은 현재의 상황을 감사하려고 애쓰지 않아도 됩니다. 대신 자신을 가장 힘들게 하는 일을 한 문장으로 말한 뒤 “이 일도 나를 하나님의 사랑에서 끊지는 못합니다”라고 덧붙여 보세요.\n\n그 문장이 바로 믿어지지 않아도 괜찮습니다. 믿음은 언제나 강한 확신으로만 나타나지 않습니다. 믿기 어려운 중에도 말씀을 다시 바라보는 행동 자체가 하나님과의 관계 안에 머무는 과정입니다. 오늘은 감사의 감정보다 끊어지지 않는 사랑을 먼저 붙드세요.",
      "caution": "힘든 일이 계속된다고 해서 하나님의 사랑이 멀어진 것은 아닙니다. 상황이 어렵다고 하나님의 마음까지 달라지는 것은 아닙니다.",
      "practice": "오늘 힘들었던 일 하나를 적어보세요. 그 아래 ‘이 순간에도 하나님의 사랑은 나를 떠나지 않았다’라고 한 문장 덧붙여 보세요."
    }, {
      "num": "B.5",
      "state": "하나님께 무슨 말을 해야 할지도 모르겠어요",
      "reference": "로마서 8:26",
      "verse": "이와 같이 성령도 우리 연약함을 도우시나니 우리가 마땅히 빌 바를 알지 못하나 오직 성령이 말할 수 없는 탄식으로 우리를 위하여 친히 간구하시느니라",
      "cognitive": "감사나 기도의 말을 제대로 표현하지 못하면 하나님께 내 마음이 전달되지 않는다.",
      "opinion": "마음이 너무 지치면 감사뿐 아니라 기도의 말도 떠오르지 않을 수 있습니다. 하지만 하나님께서는 말이 잘 정리된 사람만 이해하시는 분이 아닙니다. 우리가 무엇을 구해야 할지 모를 때에도 성령께서 연약함을 도우신다는 말씀은, 침묵과 탄식 속에서도 하나님과의 관계가 끊어지지 않는다는 뜻입니다.\n\n하나님은 당신의 표현 능력 때문에 사랑하시는 것이 아닙니다. 감사의 문장을 잘 만들지 못해도, 기도를 끝까지 이어 가지 못해도, 하나님의 말씀으로 생기를 지닌 당신의 존재는 여전히 귀합니다. 하나님은 말로 설명하지 못하는 피로와 서운함까지 알고 계시며, 그 과정 속에서도 당신을 있는 그대로 사랑하십니다.",
      "dose": "오늘은 완성된 기도를 만들 필요가 없습니다. “하나님, 무슨 말을 해야 할지 모르겠습니다”라고 말한 뒤 잠시 멈추어도 됩니다. 그것조차 어렵다면 말씀을 읽고 가만히 있는 것으로 충분합니다.\n\n감사한 내용을 찾아 덧붙이지 않아도 됩니다. 말이 나오지 않는 자신을 책망하지 말고, 성령께서 연약함을 도우신다는 말씀에 잠시 기대어 보세요. 아무 말도 할 수 없는 순간에도 하나님께서 내 마음을 알고 계시며, 이미 나와 함께하고 계심을 받아들여 보세요.",
      "caution": "감사나 기도의 말을 잘 표현하지 못해도 하나님께서는 그 마음을 아십니다. 말이 없어도 하나님 앞에 머무를 수 있습니다.",
      "practice": "무슨 말을 해야 할지 모르겠다면 눈을 감고 ‘하나님, 저 여기 있어요’라고만 말해보세요. 그 뒤에는 조용히 있어도 괜찮습니다."
    }]
  },
  "calling": {
    "A": [{
      "num": "A.1",
      "state": "내가 놓으면 모든 일이 무너질 것 같은 상태",
      "reference": "시편 55:22",
      "verse": "네 짐을 여호와께 맡겨 버리라 너를 붙드시고 의인의 요동함을 영영히 허락지 아니하시리로다",
      "cognitive": "내가 계속 붙잡고 있어야 일이 유지된다. 내가 잠시 놓은 사이 문제가 생기면 모든 책임은 내게 있다.",
      "opinion": "당신이 일을 쉽게 놓지 못하는 것은 모든 것을 통제하고 싶어서만은 아닐 수 있습니다. 누군가가 곤란해지거나 일이 잘못되는 것을 막고 싶어서, 다른 사람보다 먼저 확인하고 더 오래 책임지려 했을 수 있습니다. 그 마음에는 무책임함이 아니라 잘 지키고 싶은 애씀과 사랑이 담겨 있습니다.\n\n하지만 맡은 책임을 감당하는 것과 모든 결과를 내가 붙잡는 것은 같은 일이 아닙니다. 하나님은 당신이 모든 무게를 버티고 있어야만 곁에 계시는 분이 아닙니다. 내가 잠시 손을 놓는다고 삶 전체가 하나님의 손 밖으로 떨어지는 것도 아닙니다.",
      "dose": "지금 마음에 남아 있는 책임을 세 영역으로 나누어 적어보세요. 오늘 내가 직접 해야 할 일, 다른 사람과 나누거나 조율할 일, 지금 내가 붙잡을 수 없는 일로 구분합니다.\n\n오늘은 내가 직접 해야 할 일에서 가장 작은 행동 하나만 선택하세요. 그 행동을 마친 뒤에는 “제가 지금 할 수 있는 부분은 여기까지 했습니다”라고 하나님께 아뢰세요. 책임을 외면하는 것이 아니라, 내 몫을 감당한 뒤 결과의 무게까지 혼자 들지 않는 연습입니다.",
      "caution": "하나님께 맡긴다는 것은 책임을 피하는 일이 아닙니다. 내가 할 몫은 하되 결과의 무게까지 혼자 지지 않아도 된다는 뜻입니다.",
      "practice": "지금 맡은 일을 ‘내가 할 일’, ‘함께 나눌 일’, ‘하나님께 맡길 일’로 나누어 적어보세요. 오늘은 내가 할 일 중 가장 작은 것 하나만 해보세요."
    }, {
      "num": "A.2",
      "state": "완벽하게 끝내야만 책임을 다한 것 같은 상태",
      "reference": "잠언 16:3",
      "verse": "너의 행사를 여호와께 맡기라 그리하면 너의 경영하는 것이 이루리라",
      "cognitive": "완벽하게 해내지 못하면 제대로 책임진 것이 아니다. 조금 부족한 결과는 실패와 같다.",
      "opinion": "당신은 대충 끝내고 싶은 사람이 아니라, 맡은 일을 믿을 만하게 마치고 싶은 사람일 수 있습니다. 그래서 이미 충분히 해낸 부분보다 아직 고치지 못한 부분에 마음이 오래 머물고, 작은 부족함도 크게 느껴졌을 수 있습니다.\n\n하지만 하나님의 사랑은 결과물이 완벽해진 뒤에 주어지는 평가가 아닙니다. 하나님은 완성된 결과만 보시는 것이 아니라, 두려움 속에서도 정직하게 감당하려 했던 과정과 이미 사용한 힘까지 알고 계십니다.",
      "dose": "오늘 해야 할 일 하나를 고르고, 시작하기 전에 “이 정도면 책임을 다했다고 볼 수 있는 기준”을 세 가지 이하로 정하세요. 실제 목적에 필요한 기준만 남겨보세요.\n\n정해 둔 기준을 충족했다면 더 고치고 싶은 마음이 올라와도 하나님께 그 일을 맡기고 멈추어 보세요. “하나님, 부족함이 남아 있지만 제가 할 수 있는 부분을 감당했습니다. 이 일을 주의 손에 맡깁니다”라고 기도해 보세요. 하나님께 사랑받기 위해 완벽함을 증명할 필요는 없습니다.",
      "caution": "완벽하지 않다고 해서 책임을 다하지 못한 것은 아닙니다. 이미 충분히 애쓰고 감당해온 부분도 함께 보아야 합니다.",
      "practice": "오늘 할 일 하나에 ‘여기까지 하면 충분하다’는 기준을 세 가지 정해보세요. 그 기준을 채웠다면 더 고치지 말고 멈춰보세요."
    }, {
      "num": "A.3",
      "state": "도움을 요청하면 무책임해 보일 것 같은 상태",
      "reference": "전도서 4:9-10",
      "verse": "두 사람이 한 사람보다 나음은 저희가 수고함으로 좋은 상을 얻을 것임이라 혹시 저희가 넘어지면 하나가 그 동무를 붙들어 일으키려니와 홀로 있어 넘어지고 붙들어 일으킬 자가 없는 자에게는 화가 있으리라",
      "cognitive": "책임을 맡은 사람은 혼자 해결해야 한다. 도움을 요청하면 능력이 부족하거나 일을 떠넘기는 사람처럼 보일 것이다.",
      "opinion": "혼자 감당해 온 것은 다른 사람을 믿지 못해서만은 아닐 수 있습니다. 부탁했다가 상대에게 부담을 줄까 걱정했고, 일이 잘못되면 결국 자신이 책임져야 한다고 생각했을 수 있습니다.\n\n그러나 책임을 나누는 것은 책임을 없애는 일이 아닙니다. 필요한 사람에게 상황을 알리고 함께 감당할 수 있도록 조율하는 것도 책임의 일부입니다. 하나님은 당신이 언제나 혼자 서 있어야만 성실하다고 여기시는 분이 아닙니다.",
      "dose": "오늘 맡은 일 가운데 일부만 함께할 수 있는 일을 찾아보세요. 자료 확인, 일정 조율, 의견 요청처럼 작고 구체적인 부분부터 시작해도 괜찮습니다. 부탁의 범위와 필요한 시간을 분명히 알려주세요.\n\n도움을 요청한 뒤에는 “하나님, 혼자 감당하는 것만이 책임이라고 여기지 않게 해 주세요. 사람의 손길을 통해 주시는 도움도 받아들이게 해 주세요”라고 기도해 보세요. 도움받는 순간에도 하나님께 사랑받는 관계는 줄어들지 않습니다.",
      "caution": "도움을 요청하는 것은 일을 떠넘기는 것이 아닙니다. 함께 감당할 방법을 찾는 것도 책임 있는 선택입니다.",
      "practice": "오늘 맡은 일 가운데 작은 부분 하나를 골라 믿을 수 있는 사람에게 구체적으로 도움을 요청해보세요."
    }, {
      "num": "A.4",
      "state": "실수하면 사랑과 신뢰를 잃을 것 같은 상태",
      "reference": "이사야 43:1",
      "verse": "야곱아 너를 창조하신 여호와께서 이제 말씀하시느니라 이스라엘아 너를 조성하신 자가 이제 말씀하시느니라 너는 두려워 말라 내가 너를 구속하였고 내가 너를 지명하여 불렀나니 너는 내 것이라",
      "cognitive": "실수하지 않아야 계속 신뢰받을 수 있다. 부족한 모습을 보이면 하나님과 사람 모두 나를 실망스럽게 볼 것이다.",
      "opinion": "실수를 두려워하는 마음 아래에는 단순히 성과를 높이고 싶은 욕심보다 관계를 잃고 싶지 않은 마음이 있을 수 있습니다. 맡은 일을 잘못하면 사람들이 자신을 신뢰하지 않게 될까 봐, 작은 오류도 자신의 가치에 대한 평가처럼 받아들였을 수 있습니다.\n\n하지만 하나님은 당신을 역할이나 성과로만 부르지 않고 이름으로 부르십니다. 실수는 인정하고 고쳐야 할 수 있지만, 실수가 곧 사랑받을 수 없는 사람이라는 증거는 아닙니다.",
      "dose": "실수가 걱정되는 일 하나를 정하고 실제로 필요한 확인 항목을 세 가지 이하로 적어보세요. 확인을 마쳤다면 같은 내용을 처음부터 반복해서 점검하지 않도록 해보세요.\n\n이미 실수가 생겼다면 무엇이 일어났는지, 지금 수정할 수 있는 것은 무엇인지, 누구에게 알려야 하는지를 정리하세요. 필요한 조치를 한 뒤에는 “하나님, 이 실수로 저의 모든 가치가 결정되지 않음을 믿게 해 주세요. 잘못을 바로잡되 주의 사랑에서 숨지 않게 해 주세요”라고 기도해 보세요.",
      "caution": "실수했다고 해서 사랑받을 수 없거나 신뢰를 모두 잃는 것은 아닙니다. 부족한 모습까지도 하나님께서는 이미 알고 계십니다.",
      "practice": "실수가 걱정되는 일 하나에 꼭 확인해야 할 것 세 가지만 적어보세요. 그것을 확인한 뒤에는 같은 부분을 반복해서 점검하지 말아보세요."
    }, {
      "num": "A.5",
      "state": "계획대로 되지 않으면 내가 잘못한 것 같은 상태",
      "reference": "잠언 16:9",
      "verse": "사람이 마음으로 자기의 길을 계획할지라도 그 걸음을 인도하는 자는 여호와시니라",
      "cognitive": "계획대로 되지 않은 것은 내가 충분히 준비하지 못했기 때문이다. 결과가 좋지 않으면 과정에서 했던 노력도 의미가 없다.",
      "opinion": "당신은 책임을 다하기 위해 미리 준비하고 가능한 변수를 줄이며 계획을 세워 왔을 수 있습니다. 그러나 예상하지 못한 변화가 생기면 단순한 일정 변경이 아니라 자신의 부족함처럼 느껴졌을 수 있습니다.\n\n하나님은 계획을 세우는 당신의 성실함을 알고 계십니다. 동시에 계획대로 흘러가지 않은 순간에도 당신을 실패한 사람으로 바라보지 않으십니다. 책임은 모든 결과를 원하는 방향으로 만드는 능력이 아니라, 달라진 상황 안에서 현재 할 수 있는 다음 걸음을 선택하는 태도일 수 있습니다.",
      "dose": "계획이 틀어진 일이 있다면 이미 바뀐 조건, 지금도 내가 선택할 수 있는 것, 다른 사람과 새롭게 조율해야 할 일을 구분해 보세요.\n\n그다음 결과 전체를 해결하려 하지 말고 다음 행동 한 가지만 정하세요. “하나님, 제 계획과 달라진 이 길에서도 제 걸음을 인도해 주세요. 결과만 보며 저를 판단하지 않고, 오늘 필요한 순종을 선택하게 해 주세요”라고 기도해 보세요.",
      "caution": "계획대로 되지 않았다고 해서 내가 실패한 것은 아닙니다. 상황이 달라져도 하나님께서 다음 걸음을 인도하실 수 있습니다.",
      "practice": "바뀐 상황에서 지금 할 수 있는 행동 하나만 정해보세요. 나머지 결과는 하나님께 맡긴다고 짧게 기도해보세요."
    }],
    "B": [{
      "num": "B.1",
      "state": "아무것도 더 책임지고 싶지 않을 만큼 지친 상태",
      "reference": "이사야 41:10",
      "verse": "두려워 말라 내가 너와 함께 함이니라 놀라지 말라 나는 네 하나님이 됨이니라 내가 너를 굳세게 하리라 참으로 너를 도와 주리라 참으로 나의 의로운 오른손으로 너를 붙들리라",
      "cognitive": "지금 힘을 내지 못하면 나는 무책임한 사람이다. 하나님도 내가 다시 움직이기만을 기다리고 계실 것이다.",
      "opinion": "아무것도 더 책임지고 싶지 않은 마음은 책임감이 부족해서 생긴 것이 아닐 수 있습니다. 오랫동안 맡은 일을 놓지 못하고 버텨 왔기 때문에, 이제는 작은 결정이나 연락도 큰 짐처럼 느껴질 만큼 힘이 소진된 것일 수 있습니다.\n\n하나님은 당신이 다시 유능해진 뒤에야 가까이하시는 분이 아닙니다. 아무것도 더 해낼 수 없는 지금도 당신을 놓지 않고 붙들고 계십니다. 지친 모습 때문에 하나님께 실망을 드렸다고 생각하며 마음을 숨기지 않아도 됩니다.",
      "dose": "오늘은 밀린 책임을 한꺼번에 정리하지 마세요. 먼저 물을 마시거나 간단히 먹고, 잠시 화면을 끄는 것처럼 몸의 부담을 낮추는 행동 하나를 선택하세요. 꼭 알려야 할 일이 있다면 현재 가능한 범위와 다시 연락할 시간을 전달하세요.\n\n“하나님, 저는 지금 아무것도 더 감당할 힘이 없습니다. 아무것도 해내지 못하는 지금도 저를 사랑하고 붙들고 계심을 믿게 해 주세요. 제게 다시 살아갈 힘과 오늘 필요한 지혜를 주세요.” 기도한 뒤 바로 힘이 생기지 않아도 기도를 잘못한 것이 아닙니다.",
      "caution": "지금 힘을 내지 못한다고 해서 무책임한 사람인 것은 아닙니다. 오래 감당해온 몸과 마음이 지친 것일 수 있습니다.",
      "practice": "밀린 일을 정리하려 하지 말고, 물을 마시거나 화면을 끄는 등 몸의 부담을 줄이는 일 하나를 먼저 해보세요."
    }, {
      "num": "B.2",
      "state": "기도할 말도 떠오르지 않을 만큼 책임에 눌린 상태",
      "reference": "로마서 8:26",
      "verse": "이와 같이 성령도 우리 연약함을 도우시나니 우리가 마땅히 빌바를 알지 못하나 오직 성령이 말할 수 없는 탄식으로 우리를 위하여 친히 간구하시느니라",
      "cognitive": "기도할 말을 제대로 준비하지 못하면 하나님께 나아갈 수 없다. 내 상태를 잘 설명해야 하나님도 내 마음을 이해하실 수 있다.",
      "opinion": "책임이 너무 오래 이어지면 무엇이 힘든지 설명하는 일조차 또 하나의 과제가 될 수 있습니다. 기도하려고 해도 생각이 정리되지 않고, 무슨 말을 해야 할지 몰라 한숨만 나오거나 아무 말도 하지 못할 수 있습니다.\n\n그러나 하나님은 잘 정리된 기도만 들으시는 분이 아닙니다. 말씀은 우리가 무엇을 기도해야 할지 알지 못할 때에도 성령께서 우리의 연약함을 도우신다고 말씀합니다. 말을 잘하지 못해도 하나님과의 관계가 멀어지는 것은 아닙니다.",
      "dose": "긴 기도를 만들지 말고 지금 가장 가까운 말 하나만 하나님께 아뢰어 보세요. “무거워요”, “지쳤어요”, “모르겠어요”, “도와주세요”라는 한마디만 드려도 됩니다.\n\n“하나님, 제가 무엇을 구해야 할지도 모르겠습니다. 말로 다 설명하지 못하는 제 마음을 아시고, 제가 하나님께 숨지 않도록 도와주세요.” 오늘은 기도를 잘 완성하는 것이 목표가 아닙니다. 말이 나오지 않는 모습까지 하나님께 가지고 나아가 보세요.",
      "caution": "기도할 말을 잘 준비하지 못해도 괜찮습니다. 하나님은 설명이 부족한 마음까지도 아시고 도우십니다.",
      "practice": "긴 기도 대신 ‘무거워요’ 또는 ‘지쳤어요’라고 한마디만 하나님께 드려보세요."
    }, {
      "num": "B.3",
      "state": "책임에서 잠시 손을 떼기 어려운 상태",
      "reference": "창세기 2:7",
      "verse": "여호와 하나님이 흙으로 사람을 지으시고 생기를 그 코에 불어 넣으시니 사람이 생령이 된지라",
      "cognitive": "책임을 맡은 이상 계속 움직여야 한다. 잠시 멈추면 하나님도 나를 무책임한 사람으로 보실 것이다.",
      "opinion": "책임이 버거운데도 손을 떼기 어려운 것은, 지금 멈추면 일이 밀리거나 누군가가 곤란해질 것 같기 때문일 수 있습니다. 그래서 이미 지쳤는데도 계속 버티거나, 잠시 멈춘 자신을 무책임한 사람처럼 판단할 수 있습니다.\n\n하나님은 당신이 계속 움직일 때만 사랑하시는 분이 아닙니다. 당신은 일을 시작하기 전부터 하나님께서 생기를 주어 살아 있게 하신 사람입니다. 당신의 가치는 오늘 얼마나 많은 일을 끝냈는지로 새롭게 정해지지 않습니다.",
      "dose": "오늘 반드시 해야 할 일, 다른 사람과 조율할 일, 이후로 옮겨도 되는 일을 구분하세요. 다른 사람에게 영향을 주는 일이 있다면 현재 상황과 다시 확인할 시간을 알린 뒤, 정한 시간만큼 책임에서 손을 떼어보세요.\n\n“하나님, 저는 멈추면 사랑받을 만한 사람이 아니게 될 것 같아 두렵습니다. 제가 감당해야 할 책임과 지나치게 붙잡고 있는 무게를 분별하게 해 주세요. 쉬고 있는 지금도 하나님께서 생명을 주신 귀한 사람임을 잊지 않게 해 주세요.”",
      "caution": "잠시 멈춘다고 해서 하나님에게서 멀어지거나 무책임해지는 것은 아닙니다. 쉬는 시간도 하나님께서 허락하신 삶의 일부입니다.",
      "practice": "오늘 하지 않아도 되는 일 하나를 골라 내일로 미뤄보세요. 정해둔 시간만큼은 그 일을 생각하지 않고 쉬어보세요."
    }, {
      "num": "B.4",
      "state": "내가 약해져서 모두에게 피해를 주는 것 같은 상태",
      "reference": "이사야 43:1-2",
      "verse": "야곱아 너를 창조하신 여호와께서 이제 말씀하시느니라 이스라엘아 너를 조성하신 자가 이제 말씀하시느니라 너는 두려워 말라 내가 너를 구속하였고 내가 너를 지명하여 불렀나니 너는 내 것이라 네가 물 가운데로 지날 때에 내가 함께할 것이라 강을 건널 때에 물이 너를 침몰치 못할 것이며 네가 불 가운데로 행할 때에 타지도 아니할 것이요 불꽃이 너를 사르지도 못하리니",
      "cognitive": "내가 제 역할을 하지 못하면 다른 사람에게 짐이 될 뿐이다. 도움을 받는 나는 하나님께도 부족하고 부담스러운 사람이다.",
      "opinion": "이전처럼 움직이지 못하면 다른 사람의 일이 늘어나는 것 같아 미안할 수 있습니다. 누군가가 자신의 몫을 대신 감당하는 모습을 보며, 공동체에 피해를 주는 사람이 된 것처럼 느낄 수도 있습니다.\n\n그러나 하나님은 당신을 역할이나 성과의 이름으로 부르지 않고 당신의 이름으로 부르십니다. 약해진 순간에도 당신과의 관계를 거두지 않으시며, 그 시간을 함께 지나가십니다. 하나님께 사랑받기 위해 계속 쓸모 있는 사람임을 증명할 필요는 없습니다.",
      "dose": "혼자 감당하기 어려운 일이 있다면 신뢰할 수 있는 사람에게 현재 상태와 필요한 도움을 구체적으로 알려보세요. 부탁할 범위와 자신이 다시 확인할 시점을 함께 전달하세요. 도움을 받은 뒤에는 곧바로 모든 몫을 되찾아오려 하지 않아도 됩니다.\n\n“하나님, 저는 도움을 받는 제 모습을 부끄럽게 여기고 있습니다. 하나님도 저를 부담스럽게 여기신다고 오해하지 않게 해 주세요. 약해진 지금도 제 이름을 부르시고 함께하심을 믿게 해 주세요.” 혼자 모든 일을 해내지 못하는 지금도 하나님께서 지으신 귀한 사람입니다.",
      "caution": "도움을 받는다고 해서 다른 사람에게 짐이 되는 것은 아닙니다. 지금의 당신도 하나님께 소중히 불리는 사람입니다.",
      "practice": "혼자 감당하기 어려운 일 하나를 믿을 수 있는 사람에게 구체적으로 알려보세요. 필요한 도움을 한 가지로 좁혀 요청하면 좋습니다."
    }, {
      "num": "B.5",
      "state": "계속 긴장하고 있어 멈추기 어려운 상태",
      "reference": "시편 127:1-2",
      "verse": "여호와께서 집을 세우지 아니하시면 세우는 자의 수고가 헛되며 여호와께서 성을 지키지 아니하시면 파숫군의 경성함이 허사로다 너희가 일찌기 일어나고 늦게 누우며 수고의 떡을 먹음이 헛되도다 그러므로 여호와께서 그 사랑하시는 자에게는 잠을 주시는도다",
      "cognitive": "내가 계속 생각하고 대비해야 문제가 생기지 않는다. 내가 붙잡는 것을 멈추면 하나님도 더 이상 도와주시지 않을 것이다.",
      "opinion": "해야 할 일을 계속 떠올리는 것은 앞으로 생길 문제를 막고 싶은 마음의 애씀일 수 있습니다. 몸을 멈춘 뒤에도 마음은 놓친 것이 없는지 살피며, 내가 붙잡고 있어야만 일이 무너지지 않을 것처럼 느껴질 수 있습니다.\n\n그러나 하나님은 결과가 좋아진 뒤에야 당신을 사랑하시는 분이 아닙니다. 당신에게 생명을 주셨고, 아직 결과를 알 수 없는 길을 걸어가는 동안에도 당신을 알고 계십니다. 하나님은 완성된 결과뿐 아니라, 두려움 속에서도 그분을 찾으며 오늘을 살아가는 당신의 과정과 함께하십니다.",
      "dose": "멈추기 전에 떠오르는 일을 한곳에 적고, 다시 확인할 시간과 가장 먼저 할 행동 하나를 정하세요. 다른 사람에게 알려야 할 일이 있다면 필요한 연락을 마친 뒤, 같은 문제를 계속 확인하지 않아도 됩니다.\n\n“하나님, 제가 할 수 있는 부분은 여기까지 했습니다. 제가 알지 못하는 앞날까지 붙잡으려 하지 않고, 어떤 상황에서도 하나님을 의지하며 필요한 책임을 감당하게 해 주세요.” 모든 상황을 이해해야만 안심하려 애쓰기보다, 알 수 없는 순간에도 하나님께 마음을 아뢰며 그 사랑 안에서 필요한 한 걸음을 구해 보세요.",
      "caution": "계속 붙잡고 있지 않아도 하나님께서 도움을 거두시는 것은 아닙니다. 내가 멈춘 동안에도 하나님은 일하고 계십니다.",
      "practice": "떠오르는 걱정을 한곳에 적고 ‘오늘은 여기까지 했습니다’라고 말해보세요. 그 뒤에는 같은 내용을 다시 확인하지 말고 잠시 쉬어보세요."
    }]
  },
  "distant": {
    "A": [{
      "num": "A.1",
      "state": "하나님께 가까이 가기 위해 더 열심히 해야 한다고 느껴지는 상태",
      "reference": "로마서 8:38-39",
      "verse": "내가 확신하노니 사망이나 생명이나 천사들이나 권세자들이나 현재 일이나 장래 일이나 능력이나 높음이나 깊음이나 다른 아무 피조물이라도 우리를 우리 주 그리스도 예수 안에 있는 하나님의 사랑에서 끊을 수 없으리라",
      "cognitive": "내가 하나님을 잘 느끼지 못하는 것은 믿음이 부족하기 때문이다. 다시 가까워지려면 기도와 말씀을 더 열심히 해야 한다.",
      "opinion": "하나님과 다시 가까워지고 싶어 애쓰는 마음에는 하나님을 소중히 여기는 진심이 남아 있습니다. 지금의 답답함은 하나님께 관심이 없어서 생긴 것이 아니라, 이전처럼 하나님을 느끼고 싶다는 마음이 있기 때문에 더 크게 느껴질 수 있습니다.\n\n그러나 하나님의 사랑은 내가 하나님을 얼마나 잘 느끼는지에 따라 가까워졌다가 멀어지는 사랑이 아닙니다. 감정이 무뎌진 날에도, 기도가 잘되지 않는 날에도 하나님과 나를 이어 주는 사랑은 끊어지지 않습니다. 지금은 하나님께 가까이 가기 위해 자신을 몰아붙이기보다, 하나님께서 먼저 나를 놓지 않고 계신다는 사실을 받아들이는 것이 필요합니다.",
      "dose": "오늘은 기도나 말씀의 분량을 늘리려고 하지 않아도 됩니다. 먼저 “하나님, 제가 지금 하나님을 잘 느끼지 못하지만 하나님의 사랑이 사라진 것은 아니라는 말씀을 믿고 싶습니다”라고 짧게 고백해 보세요.\n\n그다음 로마서 8장 38절~39절을 천천히 읽고, “아무것도 나를 하나님의 사랑에서 끊을 수 없다”는 한 문장만 마음에 남겨 보세요. 오늘의 목표는 하나님을 강하게 느끼는 것이 아니라, 느껴지지 않는 순간에도 하나님의 사랑은 변하지 않는다는 사실을 기억하는 것입니다.",
      "caution": "하나님과 가까워지기 위해 더 많은 기도와 말씀을 해내야 하는 것은 아닙니다. 이미 사랑받고 있다는 사실에서 다시 시작해도 괜찮습니다.",
      "practice": "무언가를 더 하려 애쓰기보다 잠시 앉아 ‘하나님, 지금 이 모습 그대로 주님 앞에 있습니다’라고 말해보세요."
    }, {
      "num": "A.2",
      "state": "예전보다 기도가 잘되지 않아 관계가 멀어졌다고 느끼는 상태",
      "reference": "시편 139:1-3",
      "verse": "여호와여 주께서 나를 감찰하시고 아셨나이다 주께서 나의 앉고 일어섬을 아시며 멀리서도 나의 생각을 통촉하시오며 나의 길과 눕는 것을 감찰하시며 나의 모든 행위를 익히 아시오니",
      "cognitive": "기도를 길게 하지 못하면 하나님과의 관계도 약해진다. 내가 하나님을 찾지 못하는 동안 하나님도 나를 멀리하실 것이다.",
      "opinion": "기도가 예전처럼 이어지지 않을 때 하나님과의 관계까지 끊어진 것처럼 느껴질 수 있습니다. 하고 싶은 말은 있지만 말이 나오지 않고, 기도를 시작해도 마음이 따라오지 않으면 스스로 믿음이 약해졌다고 판단하기 쉽습니다.\n\n하지만 하나님은 내가 설명하기 전에 이미 내 생각과 마음을 알고 계십니다. 기도는 하나님께 나의 상태를 완벽하게 보고해야만 이어지는 관계가 아닙니다. 아무 말도 정리되지 않는 지금도 하나님은 나의 앉고 일어섬과 생각을 알고 계십니다. 기도하지 못한 시간까지 포함하여 나를 알고 사랑하시는 하나님을 먼저 바라볼 필요가 있습니다.",
      "dose": "오늘은 긴 기도를 만들지 말고 지금의 상태를 한 문장으로만 말해 보세요. “하나님, 무슨 말을 해야 할지 모르겠습니다”, “하나님과 멀어진 것 같아 마음이 어렵습니다”처럼 꾸미지 않은 말이면 충분합니다.\n\n그 말을 한 뒤 해결책을 구하거나 감정을 바꾸려고 애쓰지 않아도 됩니다. 하나님께서 이미 내 마음을 알고 계신다는 말씀을 읽고, 오늘 표현하지 못한 마음까지 하나님께서 알고 계신다는 사실에 머물러 보세요.",
      "caution": "기도가 짧아졌다고 해서 하나님과의 관계까지 약해진 것은 아닙니다. 내가 말을 잇지 못하는 순간에도 하나님은 나를 알고 계십니다.",
      "practice": "오늘 하루 중 한 순간을 떠올리고 ‘하나님, 그때도 함께 계셨죠’라고 짧게 말해보세요."
    }, {
      "num": "A.3",
      "state": "특별한 감동이 없어 하나님께서 함께하시지 않는 것처럼 느끼는 상태",
      "reference": "히브리서 13:5",
      "verse": "돈을 사랑치 말고 있는 바를 족한 줄로 알라 그가 친히 말씀하시기를 내가 과연 너희를 버리지 아니하고 과연 너희를 떠나지 아니하리라 하셨느니라",
      "cognitive": "하나님께서 함께하신다면 반드시 마음에 특별한 감동이 있어야 한다. 아무 느낌이 없다면 하나님께서 나와 멀리 계신 것이다.",
      "opinion": "말씀을 읽어도 특별한 감동이 없고, 기도해도 마음이 움직이지 않으면 하나님께서 가까이 계시지 않는 것처럼 느껴질 수 있습니다. 예전에 경험했던 감정과 지금을 비교하면서 관계가 약해졌다고 생각할 수도 있습니다.\n\n하지만 하나님께서 함께하신다는 사실은 오늘 내가 무엇을 느꼈는지로 결정되지 않습니다. 하나님은 감정이 풍성한 날에만 머무시는 분이 아니라, 아무것도 느끼지 못하는 날에도 떠나지 않겠다고 약속하신 분입니다. 지금은 특별한 경험을 만들어 내려 하기보다, 하나님께서 나를 버리지 않으신다는 약속을 감정보다 먼저 붙드는 시간이 필요합니다.",
      "dose": "오늘은 하나님을 느끼기 위한 특별한 행동을 찾지 않아도 됩니다. 평소 생활을 이어 가면서 한 번씩 “하나님은 지금도 나를 버리지 않으셨다”라고 조용히 되새겨 보세요.\n\n마음의 변화가 바로 일어나지 않아도 괜찮습니다. 이 말씀은 내가 하나님의 가까움을 증명하라는 요구가 아니라, 하나님께서 먼저 떠나지 않겠다고 주신 약속입니다. 오늘은 그 약속을 확인하는 것만으로 충분합니다.",
      "caution": "특별한 감동이 없다고 해서 하나님께서 멀리 계신 것은 아닙니다. 느낌이 하나님의 동행을 증명하는 기준은 아닙니다.",
      "practice": "감정을 만들어내려 하지 말고, 오늘 주어진 빛이나 바람, 숨결 같은 평범한 것 하나를 잠시 느껴보세요."
    }, {
      "num": "A.4",
      "state": "죄책감 때문에 하나님 앞에 나아가기 어렵게 느껴지는 상태",
      "reference": "요한일서 4:10",
      "verse": "사랑은 여기 있으니 우리가 하나님을 사랑한 것이 아니요 오직 하나님이 우리를 사랑하사 우리 죄를 위하여 화목제로 그 아들을 보내셨음이니라",
      "cognitive": "내가 먼저 잘못을 바로잡아야 하나님께 다시 가까이 갈 수 있다. 지금의 나는 하나님께 사랑받기 어렵다.",
      "opinion": "마음에 걸리는 잘못이 있으면 하나님께 다가가는 것 자체가 부담스러워질 수 있습니다. 기도하려 할수록 죄책감이 먼저 떠오르고, 하나님께서 실망하셨을 것 같아 피하고 싶은 마음이 생길 수도 있습니다.\n\n그러나 하나님의 사랑은 내가 먼저 깨끗해진 뒤에 시작된 사랑이 아닙니다. 성경은 우리가 하나님을 먼저 사랑했기 때문이 아니라 하나님께서 먼저 우리를 사랑하셨다고 말합니다. 잘못을 가볍게 여기라는 뜻이 아니라, 회개조차 하나님의 사랑 밖에서 혼자 해결한 뒤 돌아오는 일이 아니라는 뜻입니다. 하나님은 잘못한 나를 밀어내기보다 다시 관계 안으로 부르십니다.",
      "dose": "오늘은 잘못을 길게 분석하거나 스스로를 꾸짖는 것부터 시작하지 마세요. 먼저 “하나님, 제가 잘해서 사랑받는 것이 아니라 하나님께서 먼저 사랑하셨다는 사실을 기억하게 해 주세요”라고 고백해 보세요.\n\n그다음 마음에 걸리는 일을 한 가지 말하고, 변명하지도 자신을 정죄하지도 않은 채 하나님께 맡겨 보세요. 오늘의 회개는 벌을 피하기 위한 행동이 아니라, 나를 먼저 사랑하신 하나님께 다시 마음을 여는 시간이 되어야 합니다.",
      "caution": "먼저 잘해낸 뒤에야 하나님께 나아갈 수 있는 것은 아닙니다. 하나님께서 먼저 사랑하셨기에 지금 모습 그대로 돌아갈 수 있습니다.",
      "practice": "죄책감을 다 정리하려 하지 말고 ‘하나님, 먼저 사랑하신 주님께 지금 이 모습으로 나아갑니다’라고 말해보세요."
    }, {
      "num": "A.5",
      "state": "하나님과 가까웠던 때로 빨리 돌아가야 한다는 조급함이 있는 상태",
      "reference": "빌립보서 1:6",
      "verse": "너희 속에 착한 일을 시작하신 이가 그리스도 예수의 날까지 이루실 줄을 우리가 확신하노라",
      "cognitive": "지금 당장 예전의 믿음을 회복하지 못하면 계속 멀어질 것이다. 내가 빨리 회복하지 않으면 하나님과의 관계를 잃을 수 있다.",
      "opinion": "예전에는 기도도 잘되고 말씀도 가까웠는데 지금은 그렇지 않다고 느껴지면 빨리 이전 상태로 돌아가야 한다는 조급함이 생길 수 있습니다. 그 조급함은 하나님을 놓치고 싶지 않은 마음에서 시작되지만, 오히려 지금의 나를 부족한 사람처럼 몰아세울 수 있습니다.\n\n하나님은 한 번에 완성된 믿음만 받으시는 분이 아닙니다. 내 안에서 믿음의 일을 시작하신 하나님께서 회복의 과정도 이어 가십니다. 지금의 느린 걸음 때문에 하나님께서 나를 포기하시는 것이 아닙니다. 내가 서둘러 관계를 복구하는 것이 아니라, 하나님께서 나를 사랑 안에서 계속 이끌고 계심을 신뢰할 필요가 있습니다.",
      "dose": "오늘은 예전에 했던 신앙생활의 분량을 그대로 되찾으려 하지 마세요. 부담 없이 할 수 있는 한 가지를 정해 보세요. 성경 한 절 읽기, 짧은 감사 한 가지 말하기, 예배 한 곡 듣기 정도면 충분합니다.\n\n작게 실천한 뒤에는 “이것밖에 못했다”고 평가하지 말고 “하나님께서 오늘도 나를 이끌고 계신다”고 받아들여 보세요. 회복은 내가 단숨에 만들어 내는 결과가 아니라 하나님의 사랑 안에서 천천히 이어지는 과정입니다.",
      "caution": "예전의 믿음으로 빨리 돌아가지 못해도 괜찮습니다. 하나님께서는 시작하신 일을 서두르지 않고 끝까지 이루어 가십니다.",
      "practice": "회복을 재촉하지 말고 짧은 말씀 한 줄만 읽어보세요. 오늘은 그 한 줄이면 충분합니다."
    }],
    "B": [{
      "num": "B.1",
      "state": "하나님을 찾을 힘조차 남지 않은 것처럼 느껴지는 상태",
      "reference": "이사야 46:3-4",
      "verse": "야곱 집이여 이스라엘 집의 남은 모든 자여 나를 들을지어다 배에서 남으로부터 내게 안겼고 태에서 남으로부터 내게 품기운 너희여 너희가 노년에 이르기까지 내가 그리하겠고 백발이 되기까지 내가 너희를 품을 것이라 내가 지었은즉 안을 것이요 품을 것이요 구하여 내리라",
      "cognitive": "내가 하나님을 찾지 못하면 하나님과의 관계도 멈춘다. 하나님께 가까이 가려면 나에게 먼저 힘이 있어야 한다.",
      "opinion": "마음이 많이 지치면 하나님을 찾고 싶다는 생각조차 부담이 될 수 있습니다. 기도나 말씀을 해야 한다는 말도 해야 할 일이 하나 더 생긴 것처럼 느껴지고, 그러지 못하는 자신 때문에 더 멀어진 기분이 들 수 있습니다.\n\n그러나 하나님과의 관계는 내가 힘을 내어 하나님께 도달해야만 이어지는 관계가 아닙니다. 하나님은 내가 힘이 있을 때만 붙들리는 분이 아니라, 힘이 없어 아무것도 하지 못할 때에도 나를 품으시는 분입니다. 오늘은 하나님께 나아가기 위해 애쓰기보다, 하나님께서 먼저 나를 안고 계신다는 사랑을 받아들이는 것이 필요합니다.",
      "dose": "오늘은 기도문을 쓰거나 말씀을 오래 읽지 않아도 됩니다. 이사야 46장 4절의 “내가 안을 것이요 품을 것이요”라는 말만 천천히 읽어 보세요.\n\n그 말씀을 이해하거나 감동받아야 한다는 부담도 내려놓으세요. 아무 반응이 없어도 괜찮습니다. 오늘은 내가 하나님을 붙잡는 날이 아니라, 하나님께서 지친 나를 놓지 않고 계신다는 사실을 듣는 날입니다.",
      "caution": "하나님을 찾을 힘이 없어도 관계가 끊어진 것은 아닙니다. 내가 힘을 내기 전에 먼저 안고 가시는 분이 하나님이십니다.",
      "practice": "무언가 하려고 애쓰지 말고 ‘하나님, 지금은 주님이 저를 안아주세요’라고 말한 뒤 잠시 기대어 쉬어보세요."
    }, {
      "num": "B.2",
      "state": "오랫동안 아무 응답도 없는 것처럼 느껴지는 상태",
      "reference": "이사야 49:15-16",
      "verse": "여인이 어찌 그 젖 먹는 자식을 잊겠으며 자기 태에서 난 아들을 긍휼히 여기지 않겠느냐 그들은 혹시 잊을지라도 나는 너를 잊지 아니할 것이라 내가 너를 내 손바닥에 새겼고 너의 성벽이 항상 내 앞에 있나니",
      "cognitive": "아무 응답이 없다는 것은 하나님께서 나를 잊으셨다는 뜻이다. 하나님께서 나를 사랑하신다면 지금쯤은 달라진 것이 있어야 한다.",
      "opinion": "오랫동안 기도했는데도 달라지는 것이 없으면 하나님께서 내 이야기를 듣지 않으시거나 나를 잊으신 것처럼 느껴질 수 있습니다. 기다림이 길어질수록 처음에 있던 믿음보다 실망과 지침이 더 커질 수 있습니다.\n\n하나님의 사랑은 응답의 속도로만 확인되는 사랑이 아닙니다. 하나님은 “나는 너를 잊지 아니할 것이라”고 말씀하시며, 나를 손바닥에 새겼다고 표현하십니다. 지금 상황이 해결되지 않았다는 사실과 하나님께서 나를 잊지 않으셨다는 사실은 동시에 존재할 수 있습니다. 오늘은 응답을 해석하기 전에, 내가 하나님의 기억과 사랑에서 지워지지 않았다는 사실을 먼저 받아들일 필요가 있습니다.",
      "dose": "오늘은 응답이 늦어지는 이유를 찾아내려고 하지 마세요. “하나님, 저는 잊힌 것처럼 느껴집니다”라고 솔직하게 말한 뒤, “그러나 하나님은 나를 잊지 않으신다고 말씀하셨습니다”라고 덧붙여 보세요.\n\n마음이 바로 동의하지 않아도 괜찮습니다. 믿음은 감정을 억지로 바꾸는 것이 아니라, 내 감정과 하나님의 약속을 함께 하나님 앞에 두는 일이기도 합니다. 오늘은 해결보다 잊히지 않았다는 사실을 받는 데 집중해 보세요.",
      "caution": "응답이 보이지 않는다고 해서 하나님께서 나를 잊으신 것은 아닙니다. 달라진 것이 없어 보여도 하나님의 사랑은 그대로입니다.",
      "practice": "‘주께서 나를 손바닥에 새기셨다’는 말씀을 떠올리며 ‘하나님, 잊힌 것처럼 느껴져요’라고 솔직히 말해보세요."
    }, {
      "num": "B.3",
      "state": "다른 사람은 하나님을 잘 느끼는 것 같은데 나만 멀어진 것처럼 느껴지는 상태",
      "reference": "시편 103:13-14",
      "verse": "아비가 자식을 불쌍히 여김 같이 여호와께서 자기를 경외하는 자를 불쌍히 여기시나니 이는 저가 우리의 체질을 아시며 우리가 진토임을 기억하심이로다",
      "cognitive": "다른 사람처럼 뜨겁게 믿지 못하면 하나님께 사랑받기 어렵다. 내 믿음이 약해진 것은 하나님과의 관계가 잘못되었다는 증거다.",
      "opinion": "다른 사람의 간증이나 기도하는 모습을 볼 때 나만 하나님과 멀어진 것처럼 느껴질 수 있습니다. 다른 사람은 분명한 확신과 감동을 말하는데 나는 아무것도 느껴지지 않으면, 내 믿음에 문제가 있다고 결론 내리기 쉽습니다.\n\n하지만 하나님은 모든 사람에게 같은 감정과 같은 속도를 요구하지 않으십니다. 하나님은 지금 나의 체질과 한계, 지친 정도를 알고 계십니다. 약한 나를 다른 사람과 비교하며 책망하시는 것이 아니라, 아버지가 자녀를 불쌍히 여기는 것처럼 바라보십니다. 내가 더 좋은 신앙 상태를 만들어 내야 사랑받는 것이 아니라, 지금의 나를 이미 알고 계시는 사랑 안에서 회복이 시작됩니다.",
      "dose": "오늘은 다른 사람의 신앙 상태와 나를 비교하게 만드는 콘텐츠나 이야기를 잠시 멀리해도 됩니다. 대신 “하나님은 지금 내 상태를 정확히 알고 계신다”는 문장을 적거나 읽어 보세요.\n\n그리고 내가 못하고 있는 것을 찾기보다 지금 힘든 이유를 한 가지 알아차려 보세요. “많이 지쳤다”, “오래 기다렸다”, “마음이 다쳤다” 정도면 충분합니다. 하나님은 그 이유까지 알고 나를 대하시는 분입니다.",
      "caution": "다른 사람처럼 뜨겁게 느끼지 못해도 하나님의 사랑은 달라지지 않습니다. 믿음의 온도가 사랑받는 정도를 정하지 않습니다.",
      "practice": "비교하는 마음이 올라오면 ‘하나님은 내 연약함을 아신다’고 한 번 말해보세요. 더 느끼려고 애쓰지 않아도 괜찮습니다."
    }, {
      "num": "B.4",
      "state": "상처와 실망 때문에 하나님께 마음을 열기 어려운 상태",
      "reference": "시편 34:18",
      "verse": "여호와는 마음이 상한 자에게 가까이 하시고 중심에 통회하는 자를 구원하시는도다",
      "cognitive": "하나님께 실망한 마음을 드러내면 믿음 없는 사람이 된다. 상처받은 상태에서는 하나님께 가까이 갈 수 없다.",
      "opinion": "기도했지만 원하는 결과를 얻지 못했거나, 믿었던 상황에서 상처를 입었다면 하나님께도 마음을 닫고 싶어질 수 있습니다. 하나님께 서운한 마음이 들면서도 그런 감정을 가져서는 안 된다고 생각해 더 멀리 숨게 될 수도 있습니다.\n\n그러나 하나님은 상한 마음을 정리한 뒤에만 가까이하시는 분이 아닙니다. 성경은 마음이 상한 자에게 하나님께서 가까이하신다고 말합니다. 하나님께 대한 실망과 질문까지 하나님께 숨기지 않아도 됩니다. 하나님은 바르게 정돈된 감정만 받으시는 것이 아니라, 아직 이해되지 않고 아픈 마음도 외면하지 않으십니다.",
      "dose": "오늘은 하나님께 좋은 말만 하려고 하지 마세요. “왜 이런 일이 있었는지 모르겠습니다”, “하나님께 서운한 마음이 있습니다”, “다시 믿는 것이 겁납니다”처럼 현재의 마음을 그대로 말해 보세요.\n\n말한 뒤 바로 믿음 있는 결론을 붙이지 않아도 됩니다. 오늘의 목표는 하나님께 대한 감정을 없애는 것이 아니라, 그 마음까지 하나님 앞에 숨기지 않는 것입니다. 상한 마음을 가지고 하나님께 가는 것 자체가 관계를 다시 여는 시작이 될 수 있습니다.",
      "caution": "하나님께 실망한 마음을 드러낸다고 해서 믿음이 없는 것은 아닙니다. 솔직한 마음을 꺼내는 것부터 관계가 다시 이어질 수 있습니다.",
      "practice": "상처와 실망을 숨기지 말고 ‘하나님, 솔직히 많이 서운했어요’라고 한 문장 말해보세요."
    }, {
      "num": "B.5",
      "state": "하나님보다 마음의 공허함과 지침이 더 크게 느껴지는 상태",
      "reference": "시편 73:23-26",
      "verse": "내가 항상 주와 함께하니 주께서 내 오른손을 붙드셨나이다 주의 교훈으로 나를 인도하시고 후에는 영광으로 나를 영접하시리니 하늘에서는 주 외에 누가 내게 있으리요 땅에서는 주 밖에 나의 사모할 자 없나이다 내 육체와 마음은 쇠잔하나 하나님은 내 마음의 반석이시요 영원한 분깃이시라",
      "cognitive": "마음이 비어 있고 하나님을 사모하는 감정도 없다면 하나님과의 관계는 끝난 것이다. 내가 하나님을 붙잡지 못하면 하나님도 나를 붙들지 않으실 것이다.",
      "opinion": "육체와 마음이 모두 지치면 하나님을 향한 마음마저 사라진 것처럼 느껴질 수 있습니다. 예배나 말씀을 생각해도 아무 반응이 없고, 하나님보다 공허함이 더 크게 느껴지면 관계가 끝난 것 같은 두려움이 생길 수 있습니다.\n\n그러나 시편 기자는 자신의 육체와 마음이 쇠잔한 상태에서도 하나님께서 오른손을 붙들고 계신다고 고백합니다. 내가 하나님을 강하게 사모하지 못하는 순간에도 하나님께서 나를 붙드시는 사랑은 사라지지 않습니다. 지금은 내 안에 믿음이 얼마나 남아 있는지를 확인하기보다, 쇠잔한 나를 하나님께서 먼저 붙들고 계신다는 사실을 받아들여야 합니다.",
      "dose": "오늘은 하나님을 향한 감정을 만들어 내려고 하지 않아도 됩니다. “내 육체와 마음은 쇠잔하나 하나님은 내 마음의 반석이시다”라는 말씀을 한 번 읽고, 지금의 지침을 그대로 인정해 보세요.\n\n그다음 오늘 나를 조금 덜 지치게 할 수 있는 행동 하나를 선택하세요. 물을 마시거나, 잠시 쉬거나, 해야 할 일을 하나 줄이는 것도 괜찮습니다. 하나님을 사랑하는 마음을 증명하기 위해 자신을 더 소진시키지 마세요. 지금 필요한 쉼도 하나님께서 나를 돌보시는 사랑 안에 있습니다.",
      "caution": "마음이 비어 있고 하나님을 사모하는 감정이 느껴지지 않아도 관계가 끝난 것은 아닙니다. 내가 붙잡지 못하는 순간에도 하나님께서 먼저 붙들고 계십니다.",
      "practice": "감정을 억지로 채우려 하지 말고 ‘하나님은 내 마음의 반석이시다’라는 구절을 천천히 읽어보세요. 그대로 잠시 쉬어도 괜찮습니다."
    }]
  },
  "forgive": {
    "A": [{
      "num": "A.1",
      "state": "용서하면 잘못을 괜찮다고 인정하는 것 같아요",
      "reference": "로마서 12:19",
      "verse": "내 사랑하는 자들아 너희가 친히 원수를 갚지 말고 진노하심에 맡기라 기록되었으되 원수 갚는 것이 내게 있으니 내가 갚으리라고 주께서 말씀하시니라",
      "cognitive": "내가 분노를 내려놓으면 상대의 잘못도 사라지고, 그 일이 괜찮았다고 인정하는 것이 된다",
      "opinion": "당신이 그 일을 계속 붙들고 있는 것은 미워하는 사람이어서가 아니라, 그 일이 분명히 잘못되었다는 사실을 잊고 싶지 않기 때문일 수 있어요. 아무도 그 잘못을 제대로 알아주지 않는 것 같으면, 내가 계속 기억하고 분노해야만 그 일이 잘못으로 남아 있을 것처럼 느껴질 수 있습니다.\n\n그러나 하나님은 당신에게 잘못을 괜찮다고 말하라고 요구하시기 전에, 그 일이 당신에게 얼마나 아팠는지를 알고 계십니다. 하나님께서는 상처받은 당신을 외면하지 않으시며, 상대의 잘못도 가볍게 넘기지 않으십니다. 용서는 잘못을 정당화하는 일이 아니라, 내가 떠안고 있던 최종 판단을 공의로우신 하나님께 돌려드리는 일입니다.",
      "dose": "오늘은 억지로 괜찮다고 말하지 마세요. 먼저 하나님께 그 일이 분명히 잘못되었고, 그 일로 인해 내가 여전히 아프다는 사실을 솔직히 말씀드려 보세요.\n\n상대가 책임져야 할 몫까지 내가 짊어지고 있지는 않은지도 돌아보세요. 상대의 책임은 하나님께 맡기고, 오늘은 상처받은 내 마음을 보호하고 회복하는 행동 한 가지를 선택해 보세요.",
      "caution": "용서는 상대의 잘못을 괜찮았다고 인정하는 일이 아닙니다. 그 잘못에 대한 최종 판단을 하나님께 맡기는 것입니다.",
      "practice": "억지로 화를 없애려 하지 말고 ‘그 일은 분명 잘못이었습니다. 판단은 하나님께 맡깁니다’라고 한 문장 말해보세요."
    }, {
      "num": "A.2",
      "state": "상대가 사과해야 용서할 수 있어요",
      "reference": "에베소서 4:32",
      "verse": "서로 인자하게 하며 불쌍히 여기며 서로 용서하기를 하나님이 그리스도 안에서 너희를 용서하심과 같이 하라",
      "cognitive": "상대가 먼저 자신의 잘못을 인정하고 충분히 사과해야만 내 마음도 자유로워질 수 있다",
      "opinion": "사과를 기다리는 마음에는 단순한 고집이 아니라, 내가 겪은 일이 사실이었다는 확인을 받고 싶은 간절함이 들어 있을 수 있어요. 상대가 자신의 잘못을 인정해야만 비로소 내 아픔도 인정받는 것처럼 느껴질 수 있습니다.\n\n그러나 당신의 상처가 사실이라는 것은 상대의 인정에만 달려 있지 않습니다. 하나님은 상대가 외면한 순간에도 당신이 겪은 일을 알고 계셨고, 당신을 향한 사랑을 거두지 않으셨습니다. 용서의 출발점은 상대의 올바른 반응이 아니라, 그리스도 안에서 내가 먼저 사랑받고 용서받은 사람이라는 사실입니다.",
      "dose": "상대가 사과하지 않아도 아무렇지 않다고 성급히 결론 내리지 마세요. 대신 상대의 사과 여부가 내 삶 전체를 계속 붙들게 하지는 않겠다고 하나님께 말씀드려 보세요.\n\n사과를 받지 못했다는 사실과 하나님의 사랑을 받지 못했다는 사실을 같은 것으로 여기지 않도록 해보세요. 상대가 인정하지 않아도 하나님은 내 아픔을 알고 계시며, 그 순간에도 나를 놓지 않으셨다는 사실을 먼저 붙들어 보세요.",
      "caution": "상대의 사과를 바라는 마음은 자연스럽습니다. 하지만 내 마음의 회복이 상대의 반응에만 달려 있어야 하는 것은 아닙니다.",
      "practice": "‘상대가 사과하지 않아도 제 마음을 하나님께 먼저 맡기고 싶습니다’라고 적어보세요. 지금 바로 용서가 되지 않아도 괜찮습니다."
    }, {
      "num": "A.3",
      "state": "용서하면 다시 가까워져야 할 것 같아요",
      "reference": "골로새서 3:13",
      "verse": "누가 뉘게 혐의가 있거든 서로 용납하여 피차 용서하되 주께서 너희를 용서하신 것과 같이 너희도 그리하고",
      "cognitive": "용서한다면 이전처럼 다시 가까워지고, 상대를 신뢰하며 관계까지 회복해야 한다",
      "opinion": "당신이 용서를 망설이는 것은 마음이 좁아서가 아니라, 용서한 뒤 다시 같은 상처를 받을까 두렵기 때문일 수 있어요. 반복해서 상처를 받았다면 용서하라는 말이 다시 참고 받아주라는 요구처럼 들릴 수 있습니다.\n\n그러나 하나님은 당신에게 무방비한 사람이 되라고 요구하지 않으십니다. 하나님의 사랑은 나를 함부로 내어주게 만드는 사랑이 아니라, 지혜롭게 자신을 지키면서도 미움에 붙잡히지 않도록 자유롭게 하는 사랑입니다. 용서는 마음속 보복을 내려놓는 것이며, 관계 회복과 신뢰는 상대의 책임 있는 변화가 확인될 때 천천히 결정할 수 있습니다.",
      "dose": "용서와 화해와 신뢰가 모두 같은 것은 아니라는 점을 기억해 보세요. 용서는 내가 하나님 앞에서 시작할 수 있지만, 화해에는 두 사람의 참여가 필요하고 신뢰는 반복되는 정직한 행동을 통해 다시 쌓여야 합니다.\n\n상대와 다시 가까워질 준비가 되지 않았다면 억지로 거리를 좁히지 않아도 됩니다. 나는 미움에 붙잡혀 살고 싶지는 않지만 같은 상처가 반복되도록 허용하지도 않겠다고 하나님께 말씀드려 보세요.",
      "caution": "용서한다고 해서 예전처럼 가까워지거나 다시 신뢰해야 하는 것은 아닙니다. 관계를 회복하는 일과 용서는 따로 생각할 수 있습니다.",
      "practice": "지금 내가 지켜야 할 거리나 선을 한 가지 적어보세요. ‘여기까지는 괜찮고, 이 이상은 어렵다’고 분명히 정해도 괜찮습니다."
    }, {
      "num": "A.4",
      "state": "아직 화가 나는 나는 믿음이 부족한 것 같아요",
      "reference": "요한일서 4:10-11",
      "verse": "사랑은 여기 있으니 우리가 하나님을 사랑한 것이 아니요 오직 하나님이 우리를 사랑하사 우리 죄를 위하여 화목제로 그 아들을 보내셨음이니라 사랑하는 자들아 하나님이 이같이 우리를 사랑하셨은즉 우리도 서로 사랑하는 것이 마땅하도다",
      "cognitive": "하나님을 믿는 사람이라면 상처를 받은 뒤에도 빨리 감정을 정리하고 바로 용서할 수 있어야 한다",
      "opinion": "용서가 늦어지는 자신을 보며 나는 왜 이것도 못할까 하고 책망하고 있을 수 있어요. 하지만 하나님은 당신이 감정을 완벽하게 정리하고 올바르게 행동한 뒤에야 사랑하시는 분이 아닙니다. 우리가 먼저 하나님을 잘 사랑해서 받아주신 것이 아니라, 하나님께서 먼저 우리를 사랑하셨습니다.\n\n그러므로 용서는 하나님의 사랑을 얻기 위해 통과해야 하는 시험이 아닙니다. 먼저 사랑받은 사람이 그 사랑 안에서 조금씩 배워가는 반응입니다. 아직 화가 난다는 사실이 믿음이 없다는 증거는 아니며, 숨기고 싶었던 분노까지 사랑하시는 하나님께 가지고 나아가는 것이 믿음의 시작일 수 있습니다.",
      "dose": "오늘은 용서하려는 노력보다 먼저 내가 하나님을 잘 사랑하기 전에 하나님께서 먼저 나를 사랑하셨다는 말씀을 마음에 두어보세요.\n\n하나님께 아직 화가 나지만 이 감정 때문에 하나님의 사랑에서 밀려난 것은 아니라는 사실을 믿고 싶다고 말씀드려 보세요. 오늘의 순종은 화를 당장 없애는 것이 아니라, 그 감정을 숨기지 않고 하나님께 가져가는 것입니다.",
      "caution": "아직 화가 남아 있다고 해서 믿음이 부족한 것은 아닙니다. 상처받은 마음에는 시간이 필요할 수 있습니다.",
      "practice": "감정을 빨리 정리하려 하지 말고, 지금 남아 있는 화와 서운함을 하나님께 그대로 말씀드려 보세요."
    }, {
      "num": "A.5",
      "state": "내가 먼저 용서하면 지는 것 같아요",
      "reference": "베드로전서 2:23",
      "verse": "욕을 받으시되 대신 욕하지 아니하시고 고난을 받으시되 위협하지 아니하시고 오직 공의로 심판하시는 자에게 부탁하시며",
      "cognitive": "상대에게 똑같이 돌려주거나 끝까지 분노를 붙들어야만 내가 약한 사람이 되지 않는다",
      "opinion": "상처를 받은 뒤 분노를 붙들고 있는 것은 다시는 무시당하지 않기 위한 마음의 방어일 수 있어요. 내가 먼저 손을 놓는 순간 상대가 이긴 것 같고, 아무 일도 없었던 것처럼 넘어갈까 두려울 수 있습니다.\n\n그러나 예수님께서 보복하지 않으신 것은 힘이 없으셨기 때문이 아닙니다. 자신을 사랑하시는 하나님과 공의로 판단하시는 하나님을 신뢰하셨기 때문에 상대의 방식으로 자신을 증명하지 않으셨습니다. 용서는 패배가 아니라, 상대의 행동이 더 이상 내 마음과 삶의 방향을 결정하지 못하도록 하나님께 주도권을 돌려드리는 선택입니다.",
      "dose": "상대에게 하고 싶었던 말과 행동을 하나님께 먼저 솔직히 말씀드리세요. 나도 똑같이 아프게 해주고 싶었다는 마음까지 숨기지 않아도 됩니다.\n\n그 후 이 사람의 행동이 오늘의 나를 결정하지 않게 해달라고 기도해 보세요. 상대를 향한 좋은 감정을 억지로 만들기보다, 오늘 내가 하지 않을 보복 한 가지를 선택하고 그 판단을 하나님께 맡겨보세요.",
      "caution": "먼저 용서하는 것이 지는 것은 아닙니다. 상대에게 되갚는 대신 공의로우신 하나님께 판단을 맡기는 선택입니다.",
      "practice": "상대에게 돌려주고 싶은 말이나 행동이 떠오르면, 그대로 하지 말고 한 문장으로 적어보세요. 그 뒤 ‘하나님, 이 마음을 주께 맡깁니다’라고 말해보세요."
    }],
    "B": [{
      "num": "B.1",
      "state": "지금은 용서하라는 말조차 버거워요",
      "reference": "시편 34:18",
      "verse": "여호와는 마음이 상한 자에게 가까이 하시고 중심에 통회하는 자를 구원하시는도다",
      "cognitive": "아직 용서할 힘이 없어도 지금 당장 용서를 결심해야 하며, 그렇지 못하면 하나님과도 멀어질 것이다",
      "opinion": "지금 당신에게 용서라는 말은 위로보다 또 하나의 숙제처럼 들릴 수 있어요. 마음이 이미 많이 지쳐 있는데 상대를 이해하고 품어야 한다는 말까지 들으면, 내 아픔은 중요하지 않은 것처럼 느껴질 수 있습니다.\n\n그러나 하나님은 용서를 잘 해낸 사람에게만 가까이하시는 분이 아닙니다. 마음이 상하고 무너져 아무것도 정리할 수 없는 사람에게 먼저 가까이 오시는 분입니다. 하나님은 용서를 완성한 뒤의 당신만 사랑하시는 것이 아니라, 아직 억울하고 분노하며 용서할 힘조차 없는 지금의 당신을 먼저 붙들고 계십니다.",
      "dose": "오늘은 상대를 용서하려고 애쓰지 않아도 됩니다. 말할 힘이 있다면 지금은 용서라는 말도 버거우니 내 상한 마음에 먼저 가까이 와달라고 하나님께 짧게 말씀드려 보세요.\n\n이 기도조차 힘들다면 가만히 있어도 괜찮습니다. 오늘은 용서를 결심하는 날이 아니라, 용서할 힘이 없는 지금도 하나님께서 나를 외면하지 않으신다는 사실을 받아들이는 날이어도 충분합니다.",
      "caution": "지금 용서할 힘이 없어도 괜찮습니다. 그 마음 때문에 하나님과 멀어지거나 사랑받지 못하는 것은 아닙니다.",
      "practice": "용서를 결심하려 애쓰기보다 ‘하나님, 지금은 제 상처를 먼저 봐주세요’라고 말해보세요. 그 말만으로도 충분합니다."
    }, {
      "num": "B.2",
      "state": "하나님도 내 상처보다 용서만 원하시는 것 같아요",
      "reference": "시편 147:3",
      "verse": "상심한 자를 고치시며 저희 상처를 싸매시는도다",
      "cognitive": "하나님은 내가 얼마나 아팠는지보다, 내가 상대를 빨리 용서하고 올바르게 행동하는 데에만 관심이 있으시다",
      "opinion": "용서에 관한 말씀을 들을 때마다 하나님마저 내 편이 아닌 것처럼 느껴질 수 있어요. 하나님도 나에게만 참고 양보하라고 하시는 것 같고, 정작 내가 입은 상처는 제대로 보지 않으시는 것처럼 느껴질 수 있습니다.\n\n하지만 하나님은 상처를 무시한 채 행동부터 고치시는 분이 아닙니다. 하나님은 상심한 사람을 고치시며 상처를 싸매시는 분입니다. 당신에게 용서를 말씀하시기 전에, 상처 입은 당신 곁으로 먼저 오시고 그 상처를 하나님의 사랑으로 돌보십니다.",
      "dose": "지금은 내 상처를 설명하거나 글로 적을 힘이 없어도 괜찮습니다. 무엇이 힘든지 정확히 말하지 못하더라도, 하나님은 그때 있었던 일과 지금의 마음을 이미 알고 계십니다.\n\n아무 말도 하기 어렵다면 마음속으로 하나님이 제 마음을 아시지요라고 한 번만 말씀드려도 됩니다. 그것조차 어렵다면 가만히 머물러도 괜찮습니다. 오늘은 용서의 결론을 내리거나 무엇을 해내는 날이 아니라, 상처 입은 나를 하나님께서 외면하지 않으신다는 사실만 받아들이는 날이어도 충분합니다.",
      "caution": "하나님은 당신이 얼마나 빨리 용서하는지만 보시는 분이 아닙니다. 먼저 상한 마음을 아시고 돌보시는 분입니다.",
      "practice": "무엇을 고쳐야 할지 생각하기 전에, 지금 가장 아픈 상처 하나를 하나님께 솔직히 말씀드려 보세요."
    }, {
      "num": "B.3",
      "state": "또 상처받을까 봐 마음을 놓을 수 없어요",
      "reference": "이사야 43:1-2",
      "verse": "야곱아 너를 창조하신 여호와께서 이제 말씀하시느니라 이스라엘아 너를 조성하신 자가 이제 말씀하시느니라 너는 두려워 말라 내가 너를 구속하였고 내가 너를 지명하여 불렀나니 너는 내 것이라 네가 물 가운데로 지날 때에 내가 함께할 것이라 강을 건널 때에 물이 너를 침몰치 못할 것이며 네가 불 가운데로 행할 때에 타지도 아니할 것이요 불꽃이 너를 사르지도 못하리니",
      "cognitive": "분노와 경계를 조금이라도 내려놓으면 나는 다시 무방비해지고, 이전과 같은 상처를 피할 수 없다",
      "opinion": "마음을 놓지 못하는 것은 상대를 계속 미워하고 싶어서가 아니라, 다시는 같은 일을 겪고 싶지 않기 때문일 수 있어요. 한 번 무너졌던 마음은 작은 징후에도 위험을 감지하며 스스로를 지키려고 합니다.\n\n하나님은 당신에게 경계 없는 관계로 돌아가라고 강요하지 않으십니다. 너는 내 것이라고 말씀하시며 위험을 혼자 통과하도록 버려두지 않으십니다. 하나님의 사랑 안에서 용서는 안전장치를 모두 없애는 일이 아니라, 필요한 경계를 세우면서도 두려움과 미움이 내 삶 전체를 지배하지 못하게 하는 과정입니다.",
      "dose": "상대와의 관계에서 지금 내게 필요한 안전거리를 생각해 보세요. 연락을 줄이거나, 혼자 만나지 않거나, 필요한 말만 나누는 것도 가능합니다. 안전거리를 두는 것은 상대를 벌주거나 무시하는 행동이 아니라, 같은 상처가 반복되지 않도록 내 마음을 지키는 선택일 수 있습니다.\n\n거리를 둔다고 해서 반드시 상대를 미워하는 것은 아닙니다. 상대를 함부로 대하지 않으면서도 내가 감당할 수 있는 범위까지만 관계를 허용할 수 있습니다. 이 사람을 미움으로 밀어내지 않으면서도 내 마음을 지킬 수 있는 지혜를 달라고 하나님께 기도해 보세요.",
      "caution": "나를 지키는 경계와 용서는 함께 갈 수 있습니다. 다시 상처받을 수 있는 자리에 무방비하게 머물 필요는 없습니다.",
      "practice": "지금 나를 지키기 위해 필요한 거리를 하나 정해보세요. 연락을 줄이거나 혼자 만나지 않는 것처럼 실제로 지킬 수 있는 선이면 좋습니다."
    }, {
      "num": "B.4",
      "state": "그 일을 생각하면 기도할 말도 나오지 않아요",
      "reference": "로마서 8:26",
      "verse": "이와 같이 성령도 우리 연약함을 도우시나니 우리가 마땅히 빌 바를 알지 못하나 오직 성령이 말할 수 없는 탄식으로 우리를 위하여 친히 간구하시느니라",
      "cognitive": "내 마음을 정확히 설명하거나 제대로 기도하지 못하면 하나님도 내 아픔을 이해하실 수 없다",
      "opinion": "상처가 너무 깊으면 무슨 말을 해야 할지 모르거나, 그 일을 떠올리는 순간 마음이 굳어질 수 있어요. 기도하려 해도 같은 생각만 반복되고, 하나님 앞에서도 아무 말이 나오지 않을 수 있습니다.\n\n그러나 하나님은 당신이 아픔을 잘 설명해야만 이해하시는 분이 아닙니다. 말로 꺼내지 못한 마음과 눈물조차 이미 알고 계십니다. 지금의 침묵도 믿음의 실패가 아니라, 하나님의 사랑과 돌봄이 필요한 마음의 상태일 수 있습니다.",
      "dose": "기도할 말이 나오지 않는다면 마음을 억지로 정리하거나 긴 기도를 만들지 않아도 됩니다. 말할 힘이 있다면 그 일을 떠올릴 때 드는 마음을 억울함, 두려움, 배신감, 분노, 슬픔 가운데 한 단어로만 하나님께 말씀드려 보세요.\n\n한 단어조차 떠오르지 않는다면 하나님께 아직 이 마음을 다 설명하지 못하지만, 그때 무슨 일이 있었고 내가 무엇 때문에 아픈지 하나님은 아신다고 말씀드려도 됩니다. 이 기도조차 어렵다면 아무 말 없이 머물러도 괜찮습니다. 하나님은 내가 설명한 만큼만 아시는 분이 아닙니다.",
      "caution": "마음을 정확히 설명하지 못해도 하나님께서는 말이 되지 않는 아픔까지 아십니다. 기도를 잘해야만 이해받는 것은 아닙니다.",
      "practice": "그 일을 떠올릴 때 나오는 한숨이나 한 단어를 그대로 하나님께 드려보세요. 문장으로 만들지 않아도 괜찮습니다."
    }, {
      "num": "B.5",
      "state": "이 상처 때문에 하나님의 사랑도 느껴지지 않아요",
      "reference": "로마서 8:38-39",
      "verse": "내가 확신하노니 사망이나 생명이나 천사들이나 권세자들이나 현재 일이나 장래 일이나 능력이나 높음이나 깊음이나 다른 아무 피조물이라도 우리를 우리 주 그리스도 예수 안에 있는 하나님의 사랑에서 끊을 수 없으리라",
      "cognitive": "사람에게 버림받거나 깊이 상처받은 나는 하나님의 사랑에서도 멀어졌으며, 하나님도 나를 지켜주지 않으셨다",
      "opinion": "믿었던 사람에게 상처를 받으면 그 사람과의 관계뿐 아니라 하나님과의 관계까지 흔들릴 수 있어요. 하나님이 나를 사랑하신다면 왜 이런 일이 일어났을까 하는 생각이 들고, 말씀을 읽어도 하나님의 사랑이 실제처럼 느껴지지 않을 수 있습니다.\n\n그러나 하나님의 사랑은 지금 내가 얼마나 따뜻하게 느끼는지에 따라 생겼다가 사라지는 사랑이 아닙니다. 어떤 사람의 행동도, 지금의 혼란과 분노도 그리스도 예수 안에 있는 하나님의 사랑에서 당신을 끊을 수 없습니다. 용서의 시작은 상대를 사랑하려고 애쓰는 것이 아니라, 상처 속에서도 내가 여전히 하나님의 사랑 안에 있다는 사실을 다시 붙드는 것입니다.",
      "dose": "오늘은 상대를 용서하려고 서두르기보다, 상처받은 지금도 하나님의 사랑이 나에게서 거두어지지 않았다는 말씀을 먼저 붙들어 보세요.\n\n말할 힘이 있다면 이 일로 많이 흔들렸고 지금도 사랑받는다는 사실이 잘 느껴지지 않지만, 이 상처와 상대가 한 행동도 나를 하나님의 사랑에서 끊을 수 없다는 말씀을 믿고 싶다고 하나님께 고백해 보세요. 오늘은 나는 상처받았지만 하나님의 사랑에서 버려진 사람은 아니다라는 문장만 마음에 두어도 괜찮습니다.",
      "caution": "깊이 상처받았다고 해서 하나님의 사랑에서 끊어진 것은 아닙니다. 사람에게 받은 상처가 하나님의 마음까지 바꾸지는 못합니다.",
      "practice": "로마서 8장 38–39절을 나에게 들려주듯 천천히 읽어보세요. 마음에 잘 들어오지 않아도 끝까지 읽는 것만으로 괜찮습니다."
    }]
  },
  "waiting": {
    "A": [{
      "num": "A.1",
      "state": "내가 움직이지 않으면 아무 일도 일어나지 않을 것 같아요",
      "reference": "잠언 16:9",
      "verse": "사람이 마음으로 자기의 길을 계획할지라도 그 걸음을 인도하는 자는 여호와시니라",
      "cognitive": "모든 과정을 내가 책임져야 한다는 생각",
      "opinion": "당신이 계속 움직이려는 것은 가만히 있지 못하는 성격 때문만은 아닐 수 있어요. 맡겨진 일을 잘 감당하고 싶고, 준비하지 못해 중요한 것을 놓치는 일이 생기지 않기를 바라는 마음일 수 있습니다. 책임감이 큰 사람일수록 기다리는 동안에도 무엇인가를 해야 안심되기 때문입니다.\n\n그러나 하나님은 모든 길을 혼자 만들어 온 사람만 사랑하시는 분이 아닙니다. 내가 모든 것을 통제하지 못하고 계획한 대로 움직이지 못하는 순간에도 하나님의 사랑은 줄어들지 않습니다. 하나님은 결과만 지켜보시는 분이 아니라 오늘의 걸음을 함께 인도하시는 분입니다. 기다림은 책임을 버리는 시간이 아니라, 내가 할 몫과 하나님의 인도하심을 구분하는 시간이 될 수 있습니다.",
      "dose": "오늘 해결해야 한다고 생각한 일을 모두 적은 뒤, 지금 실제로 할 수 있는 한 가지만 골라보세요. 필요한 연락이나 준비를 한 번 실행했다면, 아직 내 손에 오지 않은 다음 단계까지 미리 붙잡으려 하지 않아도 괜찮습니다.\n\n그 후 “하나님, 오늘 제가 걸어야 할 길은 보여주시고 제가 만들 수 없는 다음 걸음은 주께 맡깁니다”라고 기도해 보세요. 모든 결과를 책임지려 하기보다, 사랑으로 인도하시는 하나님과 오늘의 한 걸음을 걷는 연습을 해보세요.",
      "caution": "오늘 할 일을 해내는 것과 모든 결과를 내가 만들어내야 한다는 것은 다릅니다. 내가 할 수 없는 부분까지 책임지려 하지 않아도 괜찮습니다.",
      "practice": "오늘 실제로 할 수 있는 한 걸음만 적어보세요. 그다음 일은 ‘지금 내 힘으로 만들 수 없는 일’이라고 적고 잠시 내려놓아 보세요."
    }, {
      "num": "A.2",
      "state": "내가 생각한 때를 놓치면 모든 것이 잘못될 것 같아요",
      "reference": "이사야 30:18",
      "verse": "그러나 여호와께서 기다리시나니 이는 너희에게 은혜를 베풀려 하심이요 일어나시리니 이는 너희를 긍휼히 여기려 하심이라 대저 여호와는 공의의 하나님이심이라 무릇 그를 기다리는 자는 복이 있도다",
      "cognitive": "내가 정한 시기와 하나님의 때를 동일하게 여김",
      "opinion": "당신이 시간을 자꾸 확인하는 것은 단순히 성격이 급해서가 아닐 수 있어요. 기다렸던 일이 늦어질수록 하나님께서 나를 잊으신 것은 아닌지, 내가 잘못된 길에 서 있는 것은 아닌지 불안해졌을 수 있습니다. 그래서 마음속으로 정해 놓은 시기까지 아무 변화가 없으면 하나님의 인도와 사랑도 멀어진 것처럼 느껴질 수 있습니다.\n\n그러나 이 말씀에서 하나님은 멀리서 사람의 기다림을 지켜보기만 하시는 분이 아닙니다. 자기 백성에게 은혜와 긍휼을 베풀기 원하시는 분으로 나타나십니다. 내가 조급함 속에서 하나님을 제대로 바라보지 못하는 순간에도 하나님은 관계를 포기하지 않으십니다. 기다림은 사랑이 보류된 시간이 아니라, 하나님의 긍휼이 여전히 나를 향하고 있음을 배우는 시간이 될 수 있습니다.",
      "dose": "내가 마음속으로 정해 놓은 시기를 적어보세요. “이때까지는 반드시 되어야 해”, “이 정도 기다렸으면 답이 나와야 해”라는 기준이 있다면 숨기지 말고 그대로 적어도 괜찮습니다. 그것이 말씀에서 비롯된 기준인지, 늦어질까 두려운 마음이 만든 기한인지 구분해 보세요.\n\n이사야 30장 18절을 읽으며 “하나님은 지금도 제게 은혜를 베풀기 원하시고 저를 긍휼히 여기십니다”라고 고백해 보세요. 결과가 보이는지로 하나님의 사랑을 판단하지 말고, 기다리는 오늘에도 변함없이 나를 사랑하시는 하나님을 한 번 더 바라보세요.",
      "caution": "내가 정해둔 기한이 지났다고 해서 하나님의 은혜가 늦어진 것은 아닙니다. 결과가 보이지 않아도 하나님의 사랑은 변하지 않습니다.",
      "practice": "마음속으로 정해둔 ‘이때까지는 되어야 해’라는 기한을 적어보세요. 그 아래 ‘하나님, 제 시간표보다 주님의 인도를 믿고 싶습니다’라고 적어보세요."
    }, {
      "num": "A.3",
      "state": "결과가 보이지 않으면 믿음을 유지하기 어려워요",
      "reference": "로마서 8:24-25",
      "verse": "우리가 소망으로 구원을 얻었으매 보이는 소망이 소망이 아니니 보는 것을 누가 바라리요 만일 우리가 보지 못하는 것을 바라면 참음으로 기다릴찌니라",
      "cognitive": "보이는 변화만 하나님의 일하심으로 인정함",
      "opinion": "작은 변화라도 확인하고 싶은 것은 하나님을 전혀 믿지 않아서가 아닐 수 있어요. 오히려 하나님께서 내 기도를 들으셨다는 사실을 믿고 싶고, 그 사랑을 눈에 보이는 표지로 확인하고 싶은 마음일 수 있습니다. 아무것도 달라지지 않는 것처럼 보이면 “정말 나를 보고 계신 것이 맞을까?”라는 질문이 생길 수 있습니다.\n\n그러나 하나님의 사랑은 상황의 변화가 나타난 뒤에야 시작되는 것이 아닙니다. 아직 보이지 않는 시간에도 하나님은 우리와 함께하시며, 사랑 안에서 소망을 지키도록 붙들어 주십니다. 믿음은 아무 의심도 느끼지 않는 상태가 아니라, 보이지 않는 가운데서도 나를 사랑하시는 하나님께 마음을 다시 두는 선택입니다.",
      "dose": "오늘 결과를 확인하려고 반복한 행동이 있는지 살펴보세요. 같은 내용을 계속 확인하거나 앞으로 일어날 일을 반복해서 예상했다면, 그중 한 가지를 정해 잠시 멈추어 보세요.\n\n불안이 올라오면 로마서 8장 24–25절을 천천히 읽으세요. “아직 보이지 않아도 하나님의 사랑은 사라지지 않았습니다. 오늘은 주님 안에서 소망을 지키겠습니다”라고 고백하며, 결과를 확인하는 대신 말씀 안에 잠시 머물러 보세요.",
      "caution": "아직 변화가 보이지 않는다고 해서 하나님께서 일하지 않으시는 것은 아닙니다. 눈에 보이는 결과만으로 하나님의 사랑을 판단하지 않아도 됩니다.",
      "practice": "오늘 반복해서 확인하던 행동 하나를 잠시 멈춰보세요. 그 시간에는 로마서 8장 24–25절을 천천히 한 번 읽어보세요."
    }, {
      "num": "A.4",
      "state": "기다리는 동안에도 내가 잘하고 있는지 자꾸 의심돼요",
      "reference": "로마서 12:12",
      "verse": "소망 중에 즐거워하며 환난 중에 참으며 기도에 항상 힘쓰며",
      "cognitive": "변화가 보이지 않으면 과정도 잘못되었다고 판단함",
      "opinion": "기다리는 동안 마음이 자꾸 흔들리는 것은 하나님께 진실하지 않아서가 아닐 수 있어요. 오히려 하나님의 뜻에서 벗어나고 싶지 않고, 잘못된 길에서 시간을 보내고 싶지 않아서 지금의 선택과 과정을 반복해서 확인하는 것일 수 있습니다. 하지만 분명한 변화가 보이지 않을 때마다 지금까지의 모든 과정을 의심하면, 기다림은 하나님과 함께 걷는 시간이 아니라 끊임없이 자신을 검사하는 시간이 될 수 있습니다.\n\n하나님은 확신이 가득하고 흔들리지 않는 모습만 사랑하시는 분이 아닙니다. 내가 오늘의 길을 분명히 알지 못해도, 다시 기도하며 하나님을 향하려는 마음을 사랑으로 받아주십니다. 말씀은 완벽히 준비된 뒤 참으라고 하지 않고, 소망 가운데 하나님을 바라보며 환난 중에 견디고 기도를 이어가라고 합니다. 기다림의 가치는 결과가 얼마나 빨리 나타나는지가 아니라, 그 시간에도 사랑하시는 하나님과의 관계를 놓지 않는 데 있습니다.",
      "dose": "오늘은 “내가 제대로 기다리고 있는가?”라는 질문에 완벽한 답을 내리려 하지 마세요. 대신 지금까지 하나님 앞에서 지키고자 했던 마음과 과정을 돌아보세요. 기도한 것, 말씀을 붙든 것, 성급하게 결론 내리지 않은 것처럼 이미 이어오고 있는 과정이 있다면 가볍게 여기지 마세요.\n\n“하나님, 변화가 보이지 않는다고 지금까지의 모든 과정을 부정하지 않게 해주세요. 저를 사랑하시고 이끄시는 주님을 바라보며 오늘의 기도를 이어가겠습니다”라고 고백해 보세요. 오늘 필요한 것은 완벽한 준비를 마치는 일이 아니라, 준비되지 않은 마음까지 하나님께 다시 가져가는 것입니다.",
      "caution": "변화가 보이지 않아도 지금까지 드린 기도와 기다림이 사라지는 것은 아닙니다. 모든 과정을 잘못된 것으로 돌리지 않아도 괜찮습니다.",
      "practice": "‘내가 제대로 기다렸나’라는 판단은 잠시 멈추고, 지금까지 지켜온 마음이나 행동 한 가지를 적어보세요. 그것을 가볍게 여기지 말아보세요."
    }, {
      "num": "A.5",
      "state": "기다리는 동안 마음이 흔들리면 믿음이 부족한 것 같아요",
      "reference": "시편 27:13-14",
      "verse": "내가 산 자의 땅에 있음이여 여호와의 은혜 볼 것을 믿었도다 너는 여호와를 바랄찌어다 강하고 담대하며 여호와를 바랄찌어다",
      "cognitive": "흔들리는 감정과 믿음의 부재를 동일하게 여김",
      "opinion": "기다림 속에서 마음이 흔들리는 것은 하나님을 사랑하지 않거나 믿음이 전혀 없기 때문이 아닐 수 있어요. 오히려 하나님을 믿고 싶고 그분의 은혜를 보고 싶은 마음이 크기 때문에, 보이지 않는 시간이 더 아프게 느껴지는 것일 수 있습니다. 믿음이 있는 사람도 답답할 수 있고, 낙심할 수 있으며, 다시 기다릴 힘을 잃을 수 있습니다.\n\n하나님은 흔들리지 않는 모습을 보여야만 우리를 사랑하시는 분이 아닙니다. 시편의 기자도 두려움과 위협 속에서 하나님의 얼굴을 찾고, 버리지 말아 달라고 부르짖은 뒤 여호와를 기다리겠다고 고백했습니다. 믿음은 한 번도 흔들리지 않는 감정이 아니라, 흔들린 마음을 가지고도 나를 영접하시는 하나님께 다시 돌아가는 것입니다.",
      "dose": "오늘 마음이 흔들렸던 순간을 한 가지 떠올려 보세요. “왜 이것밖에 믿지 못하지?”라고 판단하기 전에, 그 순간 무엇이 가장 두렵고 서러웠는지를 하나님께 말씀드려 보세요. 감정을 숨기지 않는 것은 믿음에서 멀어지는 일이 아니라 하나님과의 관계 안으로 마음을 가져오는 일입니다.\n\n그 후 시편 27장 13–14절을 읽으며 “마음이 흔들려도 하나님께 다시 돌아가겠습니다. 아직 보이지 않지만 하나님의 은혜와 사랑을 기다리겠습니다”라고 고백해 보세요. 담대한 감정을 억지로 만들기보다, 하나님 곁을 떠나지 않는 작은 선택을 해보세요.",
      "caution": "마음이 흔들리는 것과 믿음이 없는 것은 같은 일이 아닙니다. 흔들리는 마음도 하나님께 그대로 가져갈 수 있습니다.",
      "practice": "오늘 마음이 흔들렸던 순간을 떠올려 보세요. 무엇이 가장 두려웠는지 하나님께 솔직하게 한 문장으로 말씀드려 보세요."
    }],
    "B": [{
      "num": "B.1",
      "state": "이제는 기다릴 힘이 거의 남지 않았어요",
      "reference": "이사야 40:29-31",
      "verse": "피곤한 자에게는 능력을 주시며 무능한 자에게는 힘을 더하시나니 소년이라도 피곤하며 곤비하며 장정이라도 넘어지며 자빠지되 오직 여호와를 앙망하는 자는 새 힘을 얻으리니 독수리의 날개치며 올라감 같을 것이요 달음박질하여도 곤비치 아니하겠고 걸어가도 피곤치 아니하리로다",
      "cognitive": "지친 상태에서도 계속 버텨야 한다는 생각",
      "opinion": "지금 기다림이 힘든 것은 인내심이 부족해서가 아니라, 이미 너무 오랫동안 마음에 힘을 주고 있었기 때문일 수 있어요. 기대했다가 실망하고 다시 믿어보려다가 또 흔들리는 일을 반복하면서 마음의 힘이 많이 줄어들었을 수 있습니다.\n\n하나님은 지친 사람에게 스스로 힘을 만들어 증명하라고 요구하시는 분이 아닙니다. 피곤한 자에게 능력을 주고 무능한 자에게 힘을 더하시는 분입니다. 지쳐서 제대로 기도하지 못하고 믿음이 약해진 순간에도 하나님의 사랑은 줄어들지 않습니다. 지금 필요한 것은 더 단단하게 버티는 것이 아니라, 사랑하시는 하나님께 기대어 힘을 공급받는 것입니다.",
      "dose": "오늘은 기다림을 잘해내려는 목표보다 몸과 마음을 쉬게 하는 일을 먼저 선택하세요. 식사하기, 물 마시기, 잠시 눕기, 천천히 걷기처럼 가장 기본적인 회복을 미루지 마세요. 쉬는 것을 믿음 없는 행동으로 판단하지 않아도 됩니다.\n\n기도도 길게 하지 않아도 괜찮습니다. “하나님, 기다릴 힘까지 제게 남아 있지 않습니다. 저를 사랑하시는 주께서 오늘 필요한 힘을 주세요”라고 말한 뒤 잠시 쉬세요. 내가 멈춘 동안에도 하나님은 나를 놓지 않으신다는 사실을 기억하세요.",
      "caution": "지금 쉬는 것은 믿음이 약해서가 아닙니다. 오래 기다리느라 지친 몸과 마음이 힘을 되찾는 데 필요한 시간입니다.",
      "practice": "기다림을 잘 견뎌야 한다는 생각은 잠시 내려놓으세요. 물 한 잔 마시기나 잠깐 눕기처럼 몸이 편해지는 일 하나를 먼저 해보세요."
    }, {
      "num": "B.2",
      "state": "하나님께서 내 기도를 잊으신 것 같아요",
      "reference": "시편 130:5-7",
      "verse": "나 곧 내 영혼이 여호와를 기다리며 내가 그 말씀을 바라는도다 파숫군이 아침을 기다림보다 내 영혼이 주를 더 기다리나니 참으로 파숫군의 아침을 기다림보다 더하도다 이스라엘아 여호와를 바랄찌어다 여호와께는 인자하심과 풍성한 구속이 있음이라",
      "cognitive": "하나님의 침묵을 사랑의 부재로 해석함",
      "opinion": "오래 기도했는데 상황이 그대로라면 하나님의 침묵이 거절처럼 느껴질 수 있어요. 무엇을 더 말해야 하는지 모르겠고, 다시 기대하는 일도 점점 두려워질 수 있습니다. 이 마음은 하나님께 관심이 없어서가 아니라, 하나님께 기대한 만큼 마음이 아프고 지친 상태일 수 있습니다.\n\n그러나 시편의 기자는 편안한 마음으로 기다린 것이 아닙니다. 깊은 곳에서 부르짖으며 파수꾼이 아침을 기다리는 것보다 더 간절하게 주를 기다렸습니다. 그가 기다릴 수 있었던 근거는 자신의 인내심이 아니라 하나님께 인자하심과 풍성한 구속이 있다는 사실이었습니다. 응답이 보이지 않는 순간에도 하나님의 사랑과 성품은 변하지 않습니다.",
      "dose": "기도가 나오지 않는 날에는 시편 130편 5–7절을 내 기도 대신 읽어도 괜찮습니다. 내 말이 부족해도 말씀을 붙들고 하나님 앞에 머무는 것 자체가 기도가 될 수 있습니다.\n\n오늘은 응답의 징후를 찾기보다 “아직 아침이 보이지 않지만 하나님의 인자하심은 사라지지 않았습니다”라고 고백해 보세요. 기다림을 끝내야만 쉴 수 있다고 생각하지 말고, 기다리는 중에도 사랑 안에서 잠시 쉬어가세요.",
      "caution": "응답이 보이지 않는 시간에도 하나님의 인자하심은 변하지 않습니다. 침묵이 곧 외면을 뜻하는 것은 아닙니다.",
      "practice": "기도가 잘 나오지 않는다면 시편 130편을 천천히 읽어보세요. 내 말 대신 말씀을 읽는 것만으로도 괜찮습니다."
    }, {
      "num": "B.3",
      "state": "아무 변화가 없어서 다시 소망하기가 두려워요",
      "reference": "예레미야애가 3:22-26",
      "verse": "여호와의 자비와 긍휼이 무궁하시므로 우리가 진멸되지 아니함이니이다 이것이 아침마다 새로우니 주의 성실이 크도소이다 내 심령에 이르기를 여호와는 나의 기업이시니 그러므로 내가 저를 바라리라 하도다 무릇 기다리는 자에게나 구하는 영혼에게 여호와께서 선을 베푸시는도다 사람이 여호와의 구원을 바라고 잠잠히 기다림이 좋도다",
      "cognitive": "현재의 상태가 앞으로도 계속될 것이라고 단정함",
      "opinion": "기대할 때마다 실망했다면 다시 소망하는 일조차 위험하게 느껴질 수 있어요. 괜히 기대했다가 더 아플 바에는 처음부터 아무것도 바라지 않는 편이 낫다고 생각할 수도 있습니다. 그것은 소망이 없는 사람이어서가 아니라, 마음이 더 상하지 않도록 스스로를 보호하는 방식일 수 있습니다.\n\n예레미야애가의 고백은 모든 상황이 좋아진 뒤에 나온 말이 아닙니다. 깊은 슬픔 속에서도 하나님의 자비와 긍휼이 끝나지 않았고, 그 성실하심이 아침마다 새롭다는 사실을 다시 기억한 고백입니다. 하나님은 내가 소망을 충분히 만들어야 사랑해 주시는 분이 아닙니다. 소망할 힘이 사라진 자리에서도 자비로 나를 붙드시는 분입니다.",
      "dose": "오늘은 큰 소망을 억지로 만들어내지 않아도 괜찮습니다. 대신 “앞으로도 절대 달라지지 않을 거야”라는 결론만 하루 동안 미뤄보세요. 아직 알 수 없는 미래를 가장 어두운 방향으로 확정하지 않는 것부터 시작해도 됩니다.\n\n“하나님, 제가 다시 기대하기에는 많이 지쳤습니다. 그래도 주의 자비와 사랑이 오늘도 새롭다는 말씀 앞에 머물겠습니다”라고 기도해 보세요. 내 확신의 크기보다 변하지 않는 하나님의 성실하심을 바라보세요.",
      "caution": "다시 기대하기 두려운 마음은 실망을 반복하지 않으려는 자연스러운 반응일 수 있습니다. 억지로 희망찬 마음을 만들지 않아도 괜찮습니다.",
      "practice": "‘앞으로도 안 될 거야’라는 결론만 오늘 하루 미뤄보세요. 아직 모르는 미래를 가장 나쁜 쪽으로 단정하지 않는 것부터 시작해보세요."
    }, {
      "num": "B.4",
      "state": "기다리는 동안 내 삶 전체가 멈춘 것 같아요",
      "reference": "시편 62:5-8",
      "verse": "나의 영혼아 잠잠히 하나님만 바라라 대저 나의 소망이 저로 좇아 나는도다 오직 저만 나의 반석이시요 나의 구원이시요 나의 산성이시니 내가 요동치 아니하리로다 나의 구원과 영광이 하나님께 있음이여 내 힘의 반석과 피난처도 하나님께 있도다 백성들아 시시로 저를 의지하고 그 앞에 마음을 토하라 하나님은 우리의 피난처시로다",
      "cognitive": "한 가지 기다림을 삶 전체의 상태로 확대함",
      "opinion": "중요한 한 가지를 오래 기다리다 보면 다른 모든 시간도 임시처럼 느껴질 수 있어요. 결과가 나온 다음에야 제대로 살 수 있을 것 같고, 지금의 일상은 그저 견뎌야 하는 대기실처럼 느껴질 수 있습니다. 그래서 쉬어도 쉬는 것 같지 않고, 하나님께 받은 오늘의 은혜도 충분히 바라보기 어려울 수 있습니다.\n\n그러나 기다리는 시간도 하나님의 사랑에서 제외된 시간이 아닙니다. 하나님은 결과가 도착한 뒤에만 함께하시는 분이 아니라, 아직 아무것도 결정되지 않은 오늘에도 반석과 피난처가 되어주십니다. 하나님은 정돈된 마음만 받으시는 분도 아닙니다. 말씀은 그 앞에 마음을 토하라고 합니다. 답답하고 혼란한 마음 그대로 하나님께 나아가도 사랑으로 받아주십니다.",
      "dose": "기다리는 일 외에 오늘 하나님께서 허락하신 것을 세 가지 적어보세요. 먹을 수 있는 한 끼, 연락할 수 있는 사람, 감당할 수 있는 작은 일처럼 평범한 것이어도 괜찮습니다. 이것은 힘든 일을 외면하려는 것이 아니라, 한 가지 기다림이 내 삶 전체를 삼키지 않도록 하는 연습입니다.\n\n기다리는 문제를 생각하고 기도하는 시간을 따로 정한 뒤, 나머지 시간에는 오늘의 일상으로 천천히 돌아오세요. 마음이 다시 그 문제에 붙잡히면 “하나님은 결과가 없는 오늘에도 나의 반석이며 피난처이십니다”라고 고백해 보세요.",
      "caution": "한 가지 일이 멈춘 것처럼 느껴져도 삶 전체가 멈춘 것은 아닙니다. 기다리는 오늘도 하나님께서 함께하시는 시간입니다.",
      "practice": "기다리는 일 말고 오늘 내 곁에 있는 평범한 것 세 가지를 적어보세요. 한 끼, 연락할 사람, 할 수 있는 작은 일 정도면 충분합니다."
    }, {
      "num": "B.5",
      "state": "오래 기다리다 보니 혼자 남겨진 것 같아요",
      "reference": "시편 73:23-26",
      "verse": "내가 항상 주와 함께하니 주께서 내 오른손을 붙드셨나이다 주의 교훈으로 나를 인도하시고 후에는 영광으로 나를 영접하시리니 하늘에서는 주 외에 누가 내게 있으리요 땅에서는 주 밖에 나의 사모할 자 없나이다 내 육체와 마음은 쇠잔하나 하나님은 내 마음의 반석이시요 영원한 분깃이시라",
      "cognitive": "하나님의 동행이 느껴지지 않으면 부재한다고 판단함",
      "opinion": "오래 기다리다 보면 처음에는 함께 마음을 나누어 주던 사람들도 자신의 일상으로 돌아가고, 나만 여전히 같은 자리에서 버티고 있는 것처럼 느껴질 수 있어요. 하나님께 말해도 상황이 변하지 않을 때는 그분마저 멀리 계신 것 같고, 누구도 내 기다림의 무게를 온전히 알지 못한다는 외로움이 깊어질 수 있습니다.\n\n그러나 시편의 기자는 자신의 마음이 쓰리고 육체와 마음이 쇠잔한 가운데서도, 하나님께서 오른손을 붙들고 계셨음을 발견했습니다. 하나님은 내가 충분히 잘 견딜 때에만 곁에 계시는 분이 아닙니다. 마음이 약해져 내가 하나님을 제대로 붙잡지 못하는 순간에도 먼저 손을 놓지 않으시는 분입니다. 기다림 속에서 가장 먼저 회복해야 할 것은 결과에 대한 확신보다, 내가 여전히 하나님의 사랑 안에 있다는 관계의 확신입니다.",
      "dose": "오늘은 기다리는 문제를 해결해 달라는 요청에 앞서 “하나님, 제가 혼자 남겨진 것처럼 느껴집니다”라고 현재의 마음부터 말씀드려 보세요. 하나님 앞에서 괜찮은 척하지 않아도 됩니다. 외로움과 서운함을 감추지 않고 가져가는 것이 관계를 다시 이어가는 기도가 될 수 있습니다.\n\n“주께서 내 오른손을 붙드셨나이다”라는 말씀을 천천히 반복해 보세요. 내 힘으로 하나님을 강하게 붙잡으려 하기보다, 하나님께서 먼저 나를 붙들고 계신 모습을 떠올려 보세요. 가능하다면 믿을 수 있는 사람에게도 해결책보다 잠시 함께 기도해 달라고 요청해 보세요.",
      "caution": "하나님이 곁에 계신다는 느낌이 들지 않는 순간에도, 하나님께서는 먼저 당신의 손을 놓지 않으십니다.",
      "practice": "‘주께서 내 오른손을 붙드셨나이다’라는 구절을 천천히 읽어보세요. 내가 하나님을 잘 붙잡고 있는지보다 하나님께서 나를 붙들고 계신 모습을 떠올려 보세요."
    }]
  },
  "broken": {
    "A": [{
      "num": "A.1",
      "state": "오래 버티느라 마음이 내려앉았지만, 완전히 놓지는 않은 상태",
      "reference": "이사야 40:31",
      "verse": "오직 여호와를 앙망하는 자는 새 힘을 얻으리니 독수리의 날개치며 올라감 같을 것이요 달음박질하여도 곤비치 아니하겠고 걸어가도 피곤치 아니하리로다",
      "cognitive": "나는 지쳤으니 이제 끝났다",
      "opinion": "지금의 지침은 믿음이 없어서가 아니라 오래 버틴 마음의 신호일 수 있어요. 하나님은 지친 사람을 몰아세우기보다 새 힘으로 붙드시는 분입니다. 이 말씀은 지친 사람이 스스로 힘을 짜내야 한다고 말하지 않고, 여호와를 앙망하는 자가 새 힘을 얻는다고 말합니다. 지금 마음이 내려앉은 것은 끝났다는 뜻이 아니라, 다시 하나님께 힘을 공급받아야 할 때가 왔다는 신호에 가까워요.",
      "dose": "오늘 해야 할 일을 전부 보지 말고, “지금 감당할 한 가지”만 정해보세요. 말씀을 한 번 읽고 숨을 고른 뒤 시작해요. 이사야 40:31을 조용히 읽으며 “나는 끝난 사람이 아니라 새 힘을 받을 사람이다”라고 마음에 다시 알려주세요. 바로 크게 일어나려 하지 않아도 괜찮아요. 지금은 나를 다그칠 시간이 아니라, “괜찮아, 많이 버텼어”라고 말해주어야 할 시간입니다. 따뜻한 물을 천천히 마시고, 몸의 힘을 조금 내려놓으며, 오늘은 나를 비난하지 않고 다시 안정시키는 작은 회복 행동 하나면 충분합니다.",
      "caution": "지쳤다는 것은 끝났다는 뜻이 아닙니다. 오래 버텨온 마음이 이제는 쉬고 싶다고 말하고 있는 것일 수 있습니다.",
      "practice": "새 힘을 내려고 애쓰기보다 잠시 앉아 어깨의 힘을 풀어보세요. 숨을 길게 내쉬며 ‘오늘은 여기까지 버텨도 괜찮아’라고 스스로에게 말해보세요."
    }, {
      "num": "A.2",
      "state": "마음이 무너진 것 같지만, 아직 하나님께 기대고 싶은 마음이 남아 있는 상태",
      "reference": "시편 126:5",
      "verse": "눈물을 흘리며 씨를 뿌리는 자는 기쁨으로 거두리로다",
      "cognitive": "마음이 무너지면 끝난 것이다",
      "opinion": "마음이 무너진 것 같다는 느낌은 약해서 생기는 것이 아니라, 그동안 혼자 견디던 무게가 너무 컸다는 신호일 수 있어요. 지금의 무너짐은 끝이라는 뜻이 아니라, 더 이상 혼자 버티지 않아도 된다는 마음의 알림에 가깝습니다. 시편 126:5는 눈물로 씨를 뿌리는 자가 기쁨으로 거둔다고 말합니다. 이 말씀은 아픈 마음이 곧 끝이라는 뜻이 아니라, 하나님 앞에 가져간 눈물과 무너짐도 다시 기쁨으로 거두어질 수 있음을 보여줍니다.",
      "dose": "감정이 올라올 때 억지로 괜찮은 척하지 말고, “하나님, 제 마음이 무너진 것 같아요”라고 그대로 말해보세요. 그 후 바로 해결하려고 애쓰기보다, 먼저 나를 탓하는 말을 멈춰보세요. “지금 무너진 것처럼 느껴지는 건 내가 약해서가 아니라, 혼자 버틴 시간이 길었기 때문이야”라고 마음을 다독이며 잠시 머물러도 괜찮습니다.",
      "caution": "눈물로 지나가는 시간이 아무 의미 없는 것은 아닙니다. 지금은 보이지 않아도 하나님께서 그 시간을 헛되게 두지 않으십니다.",
      "practice": "마음 한편에 아직 남아 있는 바람 하나를 짧게 적어보세요. 다 적은 뒤 ‘하나님, 이 마음을 주께 맡깁니다’라고 천천히 말해보세요."
    }, {
      "num": "A.3",
      "state": "혼자 감당해야 할 것 같아 마음이 무거운 상태",
      "reference": "시편 55:22",
      "verse": "네 짐을 여호와께 맡겨 버리라 너를 붙드시고 의인의 요동함을 영영히 허락지 아니하시리로다",
      "cognitive": "이 무게를 끝까지 나 혼자 견뎌야 한다",
      "opinion": "마음이 무너진 것 같을 때는 작은 일도 혼자 다 짊어진 것처럼 무겁게 느껴질 수 있어요. 그 마음은 약해서가 아니라, 오래 참고 버티느라 지친 마음의 신호일 수 있습니다. 시편 55:22는 짐을 여호와께 맡기라고 말하며, 하나님이 너를 붙드신다고 말씀합니다. 이 말씀은 지금의 무게를 혼자 견디지 않아도 된다는 위로에 가깝습니다.",
      "dose": "오늘은 문제를 다 해결하려고 바로 달려들기보다, 먼저 지금 마음이 얼마나 무거운지 하나님 앞에서 인정해보세요. “하나님, 제가 이 무게를 혼자 다 견디려 했습니다. 저를 붙들어주세요”라고 짧게 고백하며, 내가 모든 것을 혼자 감당해야 한다는 생각을 잠시 내려놓아도 괜찮습니다.",
      "caution": "힘든 마음을 누군가와 나눈다고 해서 약해지는 것은 아닙니다. 혼자 삼키지 않는 것만으로도 마음의 짐이 조금 가벼워질 수 있습니다.",
      "practice": "지금 가장 무겁게 느껴지는 일을 하나님께 한 문장으로 말씀드려 보세요. 말로 하기 어렵다면 그대로 적어도 괜찮습니다."
    }, {
      "num": "A.4",
      "state": "괜찮은 척은 힘들지만 말씀 앞에 서고 싶은 상태",
      "reference": "시편 34:18",
      "verse": "여호와는 마음이 상한 자에게 가까이 하시고 중심에 통회하는 자를 구원하시는도다",
      "cognitive": "나는 이렇게 약하면 안 된다",
      "opinion": "마음이 상한 상태는 숨겨야 할 결함이 아니에요. 성경은 하나님이 마음이 상한 자에게 가까이하신다고 말합니다. 하나님 앞에서는 괜찮은 척하지 않아도 됩니다. 이 말씀은 마음이 상한 사람을 멀리하지 않고, 하나님이 가까이하신다는 위로를 줍니다. 지금의 약함은 멀어질 이유가 아니라, 하나님이 더 가까이 오시는 자리입니다.",
      "dose": "오늘은 긴 기도보다 한 문장 기도로 충분해요. “하나님, 제 마음 가까이 와주세요.” 시편 34:18을 천천히 읽으며, 하나님이 마음이 상한 자에게 가까이하신다는 말씀 곁에 잠시 머물러보세요. 사람 앞에서는 약한 모습을 숨겨야 할 것 같고, 괜찮은 척해야 사랑받을 수 있을 것처럼 느껴질 때가 있습니다. 하지만 하나님은 우리의 약함을 약점이나 비웃음거리로 보지 않으십니다. 마음이 상한 자에게 가까이 오셔서, 약한 마음을 정죄하지 않으시고 사랑으로 품어주시는 분입니다.",
      "caution": "약한 모습을 감추지 않아도 괜찮습니다. 하나님은 괜찮은 척하는 모습보다 상한 마음 그대로를 더 가까이 품으십니다.",
      "practice": "오늘 한 번만큼은 괜찮은 척하지 않아도 됩니다. 지금 느끼는 감정을 한 단어로 적고, 그 마음을 하나님께 보여드려 보세요."
    }, {
      "num": "A.5",
      "state": "다시 일어나야 한다는 마음은 있지만 시작이 버거운 상태",
      "reference": "미가 7:8",
      "verse": "나의 대적이여 나로 인하여 기뻐하지 말지어다 나는 엎드러질찌라도 일어날 것이요 어두운데 앉을찌라도 여호와께서 나의 빛이 되실 것임이로다",
      "cognitive": "넘어졌으니 끝났다",
      "opinion": "넘어진 것이 끝은 아니에요. 말씀은 “엎드러질찌라도 일어날 것”이라고 말합니다. 다시 일어나는 힘은 내 의지에서만 나오지 않고, 하나님이 빛이 되어주실 때 생깁니다. 지금 당장 완전히 회복되지 않아도 괜찮아요. 하나님은 어둠 속에 앉은 사람에게도 빛이 되어주시는 분입니다.",
      "dose": "오늘의 목표를 “회복 완료”로 잡지 않아도 괜찮습니다. 미가 7:8을 읽으며 “나는 아직 끝난 사람이 아니다”라고 조용히 고백해보세요. 큰 결심을 하려고 애쓰기보다, 먼저 나를 실패한 사람처럼 몰아붙이는 말을 멈춰보세요. 잠시 앉아 “지금은 다시 일어나는 중이야”라고 마음에 말해주는 것부터 시작해도 충분합니다.",
      "caution": "당장 다시 일어서지 못해도 괜찮습니다. 지금 어둠 속에 앉아 있는 그 자리에도 하나님께서 함께 계십니다.",
      "practice": "무언가 크게 해내려 하지 말고, 물 한 잔 마시기나 창문 열기처럼 가장 작은 행동 하나만 해보세요. 그 한 가지로 오늘을 시작해도 충분합니다."
    }],
    "B": [{
      "num": "B.1",
      "state": "마음이 텅 비고 아무것도 하고 싶지 않은 상태",
      "reference": "시편 23:1-3",
      "verse": "여호와는 나의 목자시니 내가 부족함이 없으리로다 그가 나를 푸른 초장에 누이시며 쉴만한 물 가으로 인도하시는도다 내 영혼을 소생시키시고 자기 이름을 위하여 의의 길로 인도하시는도다",
      "cognitive": "나는 아무것도 못 하니 쓸모없다",
      "opinion": "지금 아무것도 하고 싶지 않은 마음은 게으름이라기보다, 오래도록 “무언가를 해내야만 괜찮다”는 압박 속에서 버티다 마음의 힘이 많이 소진된 상태일 수 있어요. 마음이 무너졌을 때는 작은 일도 숙제처럼 느껴지고, 쉬고 있어도 뒤처지는 것처럼 느껴질 수 있습니다. 시편 23:1-3은 여호와가 나의 목자이시기에 부족함이 없고, 그분이 나를 푸른 초장에 누이시며 쉴 만한 물가로 인도하시고, 내 영혼을 소생시키신다고 말합니다. 이 말씀은 하나님이 나를 성과로 대하지 않으시고, 지친 영혼을 누이시며 다시 살리시는 분임을 보여줍니다. 아무것도 하지 못하는 날에도, 하나님께 당신의 존재는 여전히 귀합니다.",
      "dose": "시편 23:1-3 말씀을 천천히 읽거나 들어보세요. 지금은 무언가를 증명하려고 애쓰지 않아도 괜찮아요. “여호와는 나의 목자시니”라는 말씀 곁에 잠시 머물러보세요. 아무것도 하지 못하는 날에도 하나님은 당신을 놓지 않으시고, 지친 마음을 누이시며 다시 살리시는 분입니다.",
      "caution": "아무것도 하지 못하는 날에도 당신의 가치는 줄어들지 않습니다. 쉬고 있는 모습까지도 하나님께는 소중합니다.",
      "practice": "편한 자세로 기대어 잠시 눈을 감아보세요. 목자가 지친 양을 조용히 쉬게 하는 모습을 떠올리며 그대로 쉬어도 괜찮습니다."
    }, {
      "num": "B.2",
      "state": "기도하려 해도 말이 나오지 않는 상태",
      "reference": "로마서 8:26",
      "verse": "이와 같이 성령도 우리 연약함을 도우시나니 우리가 마땅히 빌 바를 알지 못하나 오직 성령이 말할 수 없는 탄식으로 우리를 위하여 친히 간구하시느니라",
      "cognitive": "기도도 못 하면 하나님과 멀어진 것이다",
      "opinion": "말이 나오지 않는다고 하나님과 멀어진 것은 아니에요. 로마서 8:26은 우리가 마땅히 빌 바를 알지 못할 때에도 성령이 우리의 연약함을 도우신다고 말합니다. 기도가 문장으로 나오지 않는 날도 있습니다. 그럴 때 하나님은 정리된 말만 들으시는 분이 아니라, 말이 되기 전의 마음과 한숨까지 아시는 분입니다. 지금은 잘 기도하려 애쓰지 못해도 괜찮아요. 하나님 앞에 말없이 머물러 있어도, 그 마음은 하나님께 닿아 있습니다.",
      "dose": "로마서 8:26 말씀을 천천히 읽거나 들어보세요. 오늘은 기도문을 완성하려고 애쓰기보다, “성령도 우리 연약함을 도우시나니”라는 말씀 곁에 머물러보세요. “기도도 못 하면 하나님과 멀어진 거야”라고 자신을 책망하지 말고, “말이 안 나와도 하나님은 내 연약함을 아신다”라고 마음에 알려주세요. “하나님…” 한 단어만 마음속에 두고 있어도, 그 마음은 하나님 앞에 있습니다.",
      "caution": "기도의 말이 나오지 않아도 하나님과 멀어진 것은 아닙니다. 침묵 속에 있는 마음도 하나님께서는 이미 알고 계십니다.",
      "practice": "말을 만들어내려 하지 말고 천천히 숨만 쉬어보세요. 숨을 내쉴 때마다 마음속으로 ‘하나님’이라고 한 번 불러보세요."
    }, {
      "num": "B.3",
      "state": "괜찮은 척하기 힘들고 누가 알아줬으면 하는 상태",
      "reference": "이사야 41:10",
      "verse": "두려워 말라 내가 너와 함께 함이니라 놀라지 말라 나는 네 하나님이 됨이니라 내가 너를 굳세게 하리라 참으로 너를 도와 주리라 참으로 나의 의로운 오른손으로 너를 붙들리라",
      "cognitive": "나만 이렇게 약하다",
      "opinion": "지금 필요한 것은 두려움을 억지로 없애는 것이 아니라, 두려운 마음 가운데서도 하나님이 함께하신다는 사랑을 천천히 느끼는 것일 수 있어요. 이사야 41:10은 하나님이 “내가 너와 함께한다, 너를 도와주고 붙들겠다”고 말씀하시는 장면입니다. 누군가 알아줬으면 하는 마음은 약한 마음이 아니라, 너무 오래 혼자 견딘 마음의 신호일 수 있어요. 하나님은 두려워하는 마음을 밀어내지 않으시고, 사랑으로 함께하시며 지지하고 동행하시는 분입니다.",
      "dose": "이사야 41:10 말씀을 천천히 읽으며, ‘두려워하지 말라’를 혼나는 말이 아니라 하나님이 함께하시고 붙드신다는 사랑의 약속으로 받아들여보세요. “나만 약한 거야”라고 비난하는 마음이 올라오면, “아니야, 하나님이 나를 붙들겠다고 하셨다”라고 다시 말해보세요. 오늘은 혼자 버티려 하지 말고 믿을 만한 사람에게 “나 오늘 마음이 이런 것 같아”라고 짧게 알려도 괜찮습니다.",
      "caution": "누군가 내 힘듦을 알아주었으면 하는 마음은 부끄러운 것이 아닙니다. 혼자 버티지 않고 도움을 구해도 괜찮습니다.",
      "practice": "믿을 수 있는 사람 한 명에게 ‘오늘 조금 힘들었어’라고 짧게 보내보세요. 자세히 설명하지 않아도 괜찮습니다."
    }, {
      "num": "B.4",
      "state": "마음이 내려앉아 하나님께 기대고 싶은데 잘 안 되는 상태",
      "reference": "시편 42:5",
      "verse": "내 영혼아 네가 어찌하여 낙망하며 어찌하여 내 속에서 불안하여 하는고 너는 하나님을 바라라 그 얼굴의 도우심을 인하여 내가 오히려 찬송하리로다",
      "cognitive": "하나님께 기대지 못하는 나는 믿음이 부족하다",
      "opinion": "기대고 싶지만 잘 안 되는 마음도 하나님 앞에 가져갈 수 있어요. 시편 42:5는 낙망하고 불안한 영혼을 숨기지 않고 그대로 부릅니다. 하나님께 기대고 싶은데 잘 안 되는 날은, 믿음이 사라진 날이라기보다 마음의 힘이 많이 소진된 날일 수 있습니다. 이 말씀은 불안한 마음을 부정하지 않고, 그 마음을 하나님께 향하도록 조용히 이끌어줍니다.",
      "dose": "시편 42:5 말씀을 천천히 읽으며, “내 영혼아 네가 어찌하여 낙망하느냐” 한 구절 곁에 머물러보세요. 오늘은 억지로 마음을 끌어올리려 하지 않아도 됩니다. “하나님께 기대고 싶은데 잘 안 돼요”라고 말하는 것만으로도 충분해요. 스스로를 믿음 없는 사람처럼 판단하지 말고, 기대는 힘조차 하나님께 구하는 시간이 되어도 괜찮습니다.",
      "caution": "하나님께 기대고 싶은 마음이 잘 생기지 않는다고 해서 믿음이 사라진 것은 아닙니다. 지친 마음은 기대는 것조차 힘들 수 있습니다.",
      "practice": "시편 42편의 한 구절을 나에게 들려주듯 천천히 읽어보세요. 이해하려 애쓰기보다 그 말이 곁에 머물도록 잠시 쉬어보세요."
    }, {
      "num": "B.5",
      "state": "혼자 감당하기 버겁고 무너질 것 같은 상태",
      "reference": "고린도후서 12:9",
      "verse": "내게 이르시기를 내 은혜가 네게 족하도다 이는 내 능력이 약한데서 온전하여짐이라 하신지라 이러므로 도리어 크게 기뻐함으로 나의 여러 약한 것들에 대하여 자랑하리니 이는 그리스도의 능력으로 내게 머물게 하려 함이라",
      "cognitive": "약하면 버림받는다",
      "opinion": "약함은 하나님께 버림받는 이유가 아니에요. 고린도후서 12:9은 하나님의 능력이 약한 데서 온전하여진다고 말합니다. 무너질 것 같은 마음에게 가장 먼저 필요한 것은 더 강해지라는 말이 아니라, 지금 약해도 은혜가 머물 수 있다는 확신입니다. 하나님은 약함을 정죄하지 않으시고, 그 자리에 은혜를 덮으시는 분입니다.",
      "dose": "고린도후서 12:9 말씀을 천천히 읽으며, 약함을 숨기려 하지 말고 하나님께 그대로 보여드려보세요. “약하면 안 돼”라는 마음이 올라오면, “약해도 버림받지 않아. 하나님의 은혜는 약한 자리에도 머문다”라고 다시 말해주세요. 오늘은 큰 결심보다, “주님, 오늘은 제가 약합니다”라는 한 문장으로 하나님께 기대는 것부터 시작해도 충분합니다.",
      "caution": "약하다고 해서 버림받는 것은 아닙니다. 오히려 힘이 다한 자리에서 하나님의 은혜가 더 가까이 느껴질 수 있습니다.",
      "practice": "지금 감당하기 어려운 일 하나를 떠올리고 ‘하나님, 제 힘으로는 어렵습니다’라고 말씀드려 보세요. 그 말 한마디만으로도 충분합니다."
    }]
  },
  "compare": {
    "A": [{
      "num": "A.1",
      "state": "다른 사람이 앞서가는 모습을 보며 자신의 삶은 늦어지고 뒤처지는 것처럼 느끼는 상태",
      "reference": "전도서 3:11",
      "verse": "하나님이 모든 것을 지으시되 때를 따라 아름답게 하셨고 또 사람에게 영원을 사모하는 마음을 주셨느니라 그러나 하나님의 하시는 일의 시종을 사람으로 측량할 수 없게 하셨도다",
      "cognitive": "다른 사람이 먼저 이루었다면 나는 늦은 것이다. 지금 벌어진 차이가 앞으로의 결과까지 결정할 것이다.",
      "opinion": "당신의 조급함은 자신의 삶을 잘 감당하고 싶은 마음의 애씀에서 시작되었을 수 있어요. 하지만 다른 사람의 시간이 당신의 때를 결정하지는 않습니다. 하나님은 모든 사람을 같은 시간표로 평가하지 않으시며, 아직 드러난 결과가 적어도 당신의 삶은 하나님의 때 안에서 자라고 있습니다.",
      "dose": "오늘 다른 사람의 진행 상황보다 내 앞에 놓인 한 걸음에 시선을 두어보세요. “하나님, 다른 사람의 때가 아니라 제게 주신 오늘과 과정을 주님의 시선으로 바라보게 해주세요.”",
      "caution": "다른 사람의 속도가 내 삶의 기준이 될 필요는 없습니다. 먼저 이루었다고 해서 내가 늦었다는 뜻도 아닙니다.",
      "practice": "오늘 부러웠던 사람을 떠올린 뒤, 지금 내게 맡겨진 자리나 할 수 있는 일 한 가지를 적어보세요. 오늘은 그 한 가지에만 마음을 두어보세요."
    }, {
      "num": "A.2",
      "state": "다른 사람의 장점이 보일수록 자신의 부족한 부분이 더 크게 느껴지는 상태",
      "reference": "고린도전서 12:18",
      "verse": "그러나 이제 하나님이 그 원하시는 대로 지체를 각각 몸에 두셨으니",
      "cognitive": "상대의 가장 좋은 부분과 나의 부족한 부분을 비교한다. 나보다 잘하는 사람이 있다면 내게 주어진 것은 중요하지 않다.",
      "opinion": "다른 사람의 좋은 점을 발견하는 시선은 잘못된 것이 아닙니다. 다만 그 사람의 빛을 바라보는 동안 하나님께서 당신에게 주신 것까지 작게 보고 있을 수 있어요. 하나님은 모든 사람을 같은 모습으로 만들지 않으셨습니다. 다름은 부족함의 증거가 아니라 각 사람에게 주어진 자리와 생명의 모습입니다.",
      "dose": "부러웠던 사람의 장점 한 가지와 내 삶에서 이미 나타나고 있는 태도 한 가지를 함께 적어보세요. “하나님, 다른 사람에게 주신 것을 존중하면서도 제게 주신 것을 주님의 시선으로 발견하게 해주세요.”",
      "caution": "다른 사람의 가장 좋은 모습과 내 부족한 부분을 비교하면 마음이 더 작아질 수 있습니다. 내게 주어진 몫도 하나님 안에서 분명한 의미가 있습니다.",
      "practice": "내가 잘할 수 있거나 꾸준히 해온 일 한 가지를 적어보세요. ‘이것도 내게 주신 몫이다’라고 천천히 읽어보세요."
    }, {
      "num": "A.3",
      "state": "누군가 칭찬받고 주목받을 때 자신이 밀려나고 중요하지 않은 사람처럼 느껴지는 상태",
      "reference": "이사야 43:4",
      "verse": "네가 내 눈에 보배롭고 존귀하며 내가 너를 사랑하였은즉 내가 네 대신 사람들을 주며 백성들로 네 생명을 대신하리니",
      "cognitive": "다른 사람이 인정받으면 내 가치와 자리는 줄어든다. 사람들이 알아주지 않으면 내 수고는 의미가 없다.",
      "opinion": "인정받는 사람 앞에서 마음이 작아지는 것은 당신도 소중히 여김받고 싶었기 때문일 수 있어요. 그 바람 자체를 부끄러워하지 않아도 괜찮습니다. 다른 사람에게 향한 칭찬이 당신을 향한 사랑의 취소는 아닙니다. 하나님의 사랑은 경쟁해서 얻는 자리가 아니며, 보이지 않았던 당신의 마음과 수고도 알고 계십니다.",
      "dose": "오늘 사람들에게 드러나지 않았지만 성실하게 감당한 일 하나를 떠올려보세요. “하나님, 사람의 반응보다 저를 귀하게 여기시고 제 마음을 아시는 주님의 시선을 받아들이게 해주세요.”",
      "caution": "다른 사람이 인정받는다고 해서 내 가치나 자리가 줄어드는 것은 아닙니다. 하나님께서는 각 사람을 따로 바라보십니다.",
      "practice": "오늘 부러웠던 사람을 위해 짧게 축복해보세요. 그다음 ‘하나님, 저도 주님의 시선으로 바라봐 주세요’라고 자신을 위해 기도해보세요."
    }, {
      "num": "A.4",
      "state": "친구나 동료의 좋은 소식을 기뻐하고 싶지만 자신의 기다림과 비교되어 마음이 복잡해지는 상태",
      "reference": "시편 62:8",
      "verse": "백성들아 시시로 저를 의지하고 그 앞에 마음을 토하라 하나님은 우리의 피난처시로다",
      "cognitive": "비슷하게 시작했다면 비슷한 시기에 같은 결과를 얻어야 한다. 부럽거나 서운하면 나는 사랑이 부족한 사람이다.",
      "opinion": "가까운 사람의 좋은 소식이 아프게 느껴진 것은 당신에게도 오래 품어온 바람과 기다림이 있기 때문일 수 있어요. 기쁨과 서운함이 함께 있어도 자신을 판단하지 않아도 됩니다. 하나님은 정리된 마음만 받지 않으시며, 복잡한 감정 속에 담긴 기다림과 애씀을 먼저 바라보십니다.",
      "dose": "“이 소식 앞에서 마음이 아팠던 것은 나도 ______을 오래 기다리고 있었기 때문이다”라는 문장을 완성해보세요. 그 마음을 하나님께 가져가며, 판단보다 이해로 바라보시는 하나님의 시선을 받아들여보세요.",
      "caution": "부럽거나 서운한 마음이 든다고 해서 사랑이 부족한 사람인 것은 아닙니다. 복잡한 마음도 하나님께 솔직히 가져갈 수 있습니다.",
      "practice": "하나님께 ‘기쁘면서도 조금 부러웠어요’라고 그대로 말해보세요. 감정을 하나로 정리하려 하지 않아도 괜찮습니다."
    }, {
      "num": "A.5",
      "state": "SNS나 주변 사람의 소식을 반복해서 확인하며 자신의 위치와 가치를 점검하는 상태",
      "reference": "잠언 4:23",
      "verse": "무릇 지킬 만한 것보다 더욱 네 마음을 지키라 생명의 근원이 이에서 남이니라",
      "cognitive": "다른 사람의 상황을 계속 알아야 내가 잘하고 있는지 확인할 수 있다. 상대가 보여준 좋은 장면과 내 실제 삶 전체를 비교한다.",
      "opinion": "다른 사람의 소식을 계속 확인한 것은 내가 제대로 가고 있는지 안심하고 싶었기 때문일 수 있어요. 하지만 반복적인 비교는 기준을 분명하게 하기보다 더 많은 평가 기준을 만들기도 합니다. 마음을 지킨다는 것은 다른 사람을 외면하는 일이 아니라, 내 마음을 약하게 만드는 시선에서 잠시 벗어나 하나님께 중심을 돌리는 것입니다.",
      "dose": "비교가 시작되는 화면을 열기 전에 “나는 지금 무엇을 확인받고 싶은가?”라고 물어보세요. 그 답을 하나님께 말씀드리며, 다른 사람의 결과가 아닌 하나님의 시선으로 현재의 나를 바라보는 연습을 시작해보세요.",
      "caution": "다른 사람의 소식을 계속 확인한다고 해서 내 위치가 더 분명해지는 것은 아닙니다. 오히려 마음이 더 지칠 수 있습니다.",
      "practice": "비교하게 되는 화면을 한 시간만 닫아보세요. 그 시간에는 산책, 정리, 음악 듣기처럼 내 마음이 편안해지는 일을 하나 해보세요."
    }],
    "B": [{
      "num": "B.1",
      "state": "다른 사람의 성취를 보며 자신의 삶은 제자리이고, 지금까지 이룬 것이 아무것도 없는 것처럼 느끼는 상태",
      "reference": "시편 139:13-14",
      "verse": "주께서 내 장부를 지으시며 나의 모태에서 나를 조직하셨나이다 내가 주께 감사하옴은 나를 지으심이 심히 기묘하심이라 주의 행사가 기이함을 내 영혼이 잘 아나이다",
      "cognitive": "눈에 보이는 성과가 없으면 나도 가치 없는 사람이다. 완성하지 못했다면 견디고 지나온 시간도 의미가 없다.",
      "opinion": "당신은 아무것도 하지 않은 사람이 아니라, 자신의 삶을 잘 살아내기 위해 오래 애써온 사람일 수 있어요. 지금 지친 것은 자신의 가치를 계속 확인하고 증명하느라 마음의 힘을 많이 사용했기 때문일 수 있습니다. 하나님은 성과를 확인한 뒤 당신을 사랑하시는 분이 아닙니다. 당신은 무엇을 이루기 전부터 하나님의 형상대로 지음받고 알려진 존재입니다.",
      "dose": "말씀을 천천히 읽으며, 성과가 말하는 내가 아니라 하나님께서 지으시고 아시는 나를 바라보세요. “하나님, 저는 아무것도 증명하지 않아도 주님께서 지으신 소중한 존재임을 받아들이게 해주세요.”",
      "caution": "눈에 보이는 성과가 없다고 해서 당신의 가치까지 사라지는 것은 아닙니다. 하나님께서는 무엇을 이루기 전부터 당신을 귀하게 지으셨습니다.",
      "practice": "‘나는 심히 기묘하게 지어진 사람이다’라는 문장을 천천히 한 번 읽어보세요. 지금은 그 말을 믿으려 애쓰기보다 그냥 들려주기만 해도 괜찮습니다."
    }, {
      "num": "B.2",
      "state": "반복된 비교 끝에 자신의 외모와 성격, 능력뿐 아니라 존재 전체가 마음에 들지 않게 된 상태",
      "reference": "에베소서 2:10",
      "verse": "우리는 그의 만드신 바라 그리스도 예수 안에서 선한 일을 위하여 지으심을 받은 자니 이 일은 하나님이 전에 예비하사 우리로 그 가운데서 행하게 하려 하심이니라",
      "cognitive": "부족한 부분이 있으므로 나는 부족한 존재다. 다른 사람처럼 더 나아져야 사랑받을 수 있다.",
      "opinion": "당신은 자신을 미워하고 싶었던 것이 아니라, 더 괜찮은 사람이 되고 싶어 오래 자신을 살펴왔을 수 있어요. 하지만 비교가 반복되며 고치려던 시선이 존재 전체를 판단하는 시선으로 바뀌었을 수 있습니다. 하나님은 장점을 증명하라고 요구하지 않으십니다. 부족함과 상처가 남아 있는 지금도 당신을 자신의 작품으로 바라보십니다.",
      "dose": "자책이 올라올 때 비교가 붙인 평가와 하나님께서 바라보시는 나를 구분해보세요. “하나님, 비교가 붙인 이름보다 저를 주님의 작품으로 바라보시는 시선을 먼저 받아들이게 해주세요.”",
      "caution": "고치고 싶은 부분이 있다고 해서 존재 전체가 부족한 것은 아닙니다. 더 나아져야만 사랑받는 것도 아닙니다.",
      "practice": "자신을 탓하는 생각이 들면 ‘부족한 점이 있어도 나는 사랑받는 사람이다’라고 한 번 말해보세요. 억지로 확신하지 않아도 괜찮습니다."
    }, {
      "num": "B.3",
      "state": "다른 사람의 좋은 모습은 크게 보이고, 자신의 존재는 부족하고 보잘것없게 느껴지는 상태",
      "reference": "스바냐 3:17",
      "verse": "너의 하나님 여호와가 너의 가운데 계시니 그는 구원을 베푸실 전능자시라 그가 너로 인하여 기쁨을 이기지 못하여 하시며 너를 잠잠히 사랑하시며 너로 인하여 즐거이 부르며 기뻐하시리라",
      "cognitive": "다른 사람은 완전해 보이고 내게는 부족한 점만 있는 것 같다. 다른 사람들도 나를 부족하고 초라하게 바라볼 것이다.",
      "opinion": "당신은 사람들보다 부족해서 작아진 것이 아닙니다. 관계에서 밀려나지 않고 자신의 자리를 지키고 싶어 다른 사람의 반응을 오래 살펴왔을 수 있어요. 하나님은 사람들보다 나은 점을 찾아오라고 하지 않으십니다. 움츠러든 순간에도 당신을 사랑으로 바라보시며, 하나님의 형상을 지닌 존재로 받아주십니다.",
      "dose": "사람들의 평가를 추측하던 시선에서 잠시 벗어나 하나님께 시선을 돌려보세요. “하나님, 사람들의 시선 속에서 작아진 저를 주님께서 어떻게 바라보시는지 알게 해주세요.”",
      "caution": "다른 사람의 좋은 모습만 크게 보이는 것은 지친 마음 때문일 수 있습니다. 지금 보이는 비교가 내 존재의 전부를 말해주는 것은 아닙니다.",
      "practice": "잠시 눈을 감고 ‘하나님은 지금의 나도 기뻐하신다’는 말을 천천히 떠올려 보세요. 아무 감정이 생기지 않아도 괜찮습니다."
    }, {
      "num": "B.4",
      "state": "주변 사람들은 앞으로 나아가는데 자신만 멈추고 뒤처진 것처럼 느끼는 상태",
      "reference": "이사야 40:29",
      "verse": "피곤한 자에게는 능력을 주시며 무능한 자에게는 힘을 더하시나니",
      "cognitive": "앞으로 움직이지 못하는 시간은 모두 낭비된 시간이다. 지금 힘이 없으므로 앞으로도 계속 이 상태일 것이다.",
      "opinion": "당신은 멈춰 있고 싶었던 것이 아니라, 다른 사람들의 걸음을 따라가기 위해 오래 애써온 사람일 수 있어요. 지금 움직일 힘이 없는 것은 자신을 계속 일으켜 세우느라 마음이 소진되었기 때문일 수 있습니다. 하나님은 다시 달리는 모습을 보여야 사랑하시는 분이 아닙니다. 멈춘 순간에도 당신을 붙드시며 행동보다 먼저 지친 마음을 회복시키십니다.",
      "dose": "멈춤을 실패라고 바라보던 시선 대신, 지친 사람에게 힘을 주시는 하나님의 시선을 받아들여보세요. “하나님, 멈춰 있는 지금도 저를 놓지 않으시는 주님의 시선으로 저를 바라보게 해주세요.”",
      "caution": "지금 멈춘 것처럼 느껴지는 시간도 버려진 시간은 아닙니다. 힘이 없는 오늘에도 하나님께서는 당신을 지나치지 않으십니다.",
      "practice": "앞으로 나아가려는 마음을 잠시 내려놓고 ‘하나님, 오늘은 쉬어가겠습니다’라고 말해보세요. 그 후 몸이 편해지는 자세로 잠시 쉬어보세요."
    }, {
      "num": "B.5",
      "state": "다른 사람의 좋은 소식 앞에서 마음이 복잡해지고, 그런 감정을 느끼는 자신까지 부끄럽고 싫어진 상태",
      "reference": "히브리서 4:15-16",
      "verse": "우리에게 있는 대제사장은 우리 연약함을 체휼하지 아니하는 자가 아니요 모든 일에 우리와 한결같이 시험을 받은 자로되 죄는 없으시니라 그러므로 우리가 긍휼하심을 받고 때를 따라 돕는 은혜를 얻기 위하여 은혜의 보좌 앞에 담대히 나아갈 것이니라",
      "cognitive": "부럽고 서운한 감정이 생기면 나는 사랑이 부족한 사람이다. 믿음이 있다면 복잡한 마음을 느껴서는 안 된다.",
      "opinion": "다른 사람의 좋은 소식 앞에서 마음이 복잡해진 것은 당신에게도 오래 품어온 바람과 기다림이 있기 때문일 수 있어요. 기뻐해주고 싶은 마음과 내 상황이 아프게 느껴지는 마음이 함께 있어도 자신을 판단하지 않아도 괜찮습니다. 하나님은 정리된 감정만 받으시는 분이 아닙니다. 그 안에 담긴 기다림과 애씀을 먼저 바라보시며, 지금도 당신을 사랑 안에 품으십니다.",
      "dose": "“다른 사람의 소식을 들으며, 나도 ______을 오래 바라고 있었다는 것을 알게 되었습니다”라는 문장을 완성해보세요. 이어서 “하나님, 이 마음을 판단하기보다 그 안의 바람을 주님의 시선으로 바라보게 해주세요”라고 기도해보세요.",
      "caution": "부럽고 서운한 감정이 생긴다고 해서 믿음이 없는 것은 아닙니다. 하나님은 그런 마음까지 숨기지 않고 가져오기를 기다리십니다.",
      "practice": "감정을 판단하지 말고 ‘하나님, 저도 모르게 이런 마음이 들었어요’라고 솔직히 말해보세요. 그 뒤에는 아무 결론도 내리지 않아도 괜찮습니다."
    }]
  }
};

// 자가문진 1번 문항 선택값으로 A/B 자동 판정.
// 각 감정 Q1의 optionTypes(['A','B',...])만 사용 — 선택지 순번으로 A/B를 추정하지 않는다.
// optionTypes가 없는 감정 = A/B 분류값 미설정 → null 반환(임의 판정 금지). 원문 확정 시 지정.
window.AB_CONFIRMED = {
  compare: true,
  forgive: true,
  distant: true,
  thanks: true,
  anxious: true,
  calling: true
}; // optionTypes 확정 감정. 나머지는 원문 전달 시 추가.
window.classifyType = function (mood, selections) {
  selections = selections || {};
  var a = window.getAssessment && window.getAssessment(mood) || {};
  var q1 = a.groups && a.groups[0] || {};
  var types = q1.optionTypes || null;
  if (!types) {
    console.warn("[마음약국] " + mood + ": A/B 분류값(optionTypes) 미설정 — 원문 확정 필요. 임의 판정하지 않음.");
    return null;
  }
  var opts = q1.options || [];
  for (var i = 0; i < opts.length; i++) {
    if (selections["0-" + i]) return types[i] || null;
  }
  return null;
};

// 감정 + 판정 타입에 맞는 처방전 1개를 랜덤 선택해 base 처방전과 병합.
// ⚠ base(RX_DATA)의 증상·마음강도·주의사항본문·작은실천·처방단어는 초기 임시 데이터 —
//    원문 확정 전까지 임시임을 표시하기 위해 merged._provisionalFields로 표기한다.
// type이 null(분류 미설정)이면 임의로 A/B를 고르지 않고 null 반환.
window.pickPrescription = function (mood, type) {
  if (!type) return null; // A/B 분류값 미설정 — 임의 판정 금지
  var set = window.RX_PRESCRIPTIONS[mood];
  if (!set || !set[type] || !set[type].length) return null;
  var arr = set[type];
  var chosen = arr[Math.floor(Math.random() * arr.length)];
  var base = window.RX_DATA && window.RX_DATA[mood] || {};
  var merged = {};
  for (var k in base) merged[k] = base[k];
  merged.opinion = chosen.opinion;
  merged.verse = chosen.verse || "";
  merged.reference = chosen.reference;
  merged.dose = chosen.dose;
  merged.cognitive = chosen.cognitive;
  merged.state = chosen.state;
  merged.caution = chosen.caution;
  merged.practice = chosen.practice;
  merged.rxType = type;
  merged.rxNum = chosen.num;
  // 초기 임시 데이터에서 온 항목(원문 미확정) 명시
  merged._provisionalFields = ["symptom", "intensity", "word"];
  return merged;
};

// 감정+타입 흐름 동안 한 번 뽑은 처방전을 유지(같은 흐름에서 안 바뀌게).
window.resolvePrescription = function (mood, selections, cached) {
  if (cached) return cached;
  var type = window.classifyType(mood, selections);
  return window.pickPrescription(mood, type);
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soul-pharmacy/rx-prescriptions.js", error: String((e && e.message) || e) }); }

// ui_kits/soul-pharmacy/stickers-data.js
try { (() => {
// stickers-data.js — 마음약국 스티커 세트 (감정별 다이컷 이미지, webp 512px).
window.STICKER_SET = {
  categories: [{
    "key": "normal",
    "label": "공통 응원"
  }, {
    "key": "anxious",
    "label": "불안해요"
  }, {
    "key": "broken",
    "label": "마음이 무너졌어요"
  }, {
    "key": "compare",
    "label": "비교돼요"
  }, {
    "key": "waiting",
    "label": "기다리기 힘들어요"
  }, {
    "key": "forgive",
    "label": "용서가 안 돼요"
  }, {
    "key": "distant",
    "label": "하나님이 멀게 느껴져요"
  }, {
    "key": "calling",
    "label": "책임이 버거워요"
  }, {
    "key": "thanks",
    "label": "감사가 사라졌어요"
  }],
  files: {
    "normal": ["assets-web/stickers/normal/normal_1.webp", "assets-web/stickers/normal/normal_2.webp", "assets-web/stickers/normal/normal_3.webp", "assets-web/stickers/normal/normal_4.webp", "assets-web/stickers/normal/normal_5.webp", "assets-web/stickers/normal/normal_6.webp", "assets-web/stickers/normal/normal_7.webp", "assets-web/stickers/normal/normal_8.webp", "assets-web/stickers/normal/normal_9.webp", "assets-web/stickers/normal/normal_10.webp", "assets-web/stickers/normal/normal_11.webp", "assets-web/stickers/normal/normal_12.webp"],
    "anxious": ["assets-web/stickers/anxious/nervous_1.webp", "assets-web/stickers/anxious/nervous_2.webp", "assets-web/stickers/anxious/nervous_3.webp", "assets-web/stickers/anxious/nervous_4.webp", "assets-web/stickers/anxious/nervous_5.webp", "assets-web/stickers/anxious/nervous_6.webp", "assets-web/stickers/anxious/nervous_7.webp", "assets-web/stickers/anxious/nervous_8.webp", "assets-web/stickers/anxious/nervous_9.webp", "assets-web/stickers/anxious/nervous_10.webp", "assets-web/stickers/anxious/nervous_11.webp", "assets-web/stickers/anxious/nervous_12.webp", "assets-web/stickers/anxious/nervous2_1.webp", "assets-web/stickers/anxious/nervous2_2.webp", "assets-web/stickers/anxious/nervous2_3.webp", "assets-web/stickers/anxious/nervous2_4.webp", "assets-web/stickers/anxious/nervous2_5.webp", "assets-web/stickers/anxious/nervous2_6.webp", "assets-web/stickers/anxious/nervous2_7.webp", "assets-web/stickers/anxious/nervous2_8.webp", "assets-web/stickers/anxious/nervous2_9.webp", "assets-web/stickers/anxious/nervous2_10.webp", "assets-web/stickers/anxious/nervous2_11.webp", "assets-web/stickers/anxious/nervous2_12.webp"],
    "broken": ["assets-web/stickers/broken/brokenemotion_1.webp", "assets-web/stickers/broken/brokenemotion_2.webp", "assets-web/stickers/broken/brokenemotion_3.webp", "assets-web/stickers/broken/brokenemotion_4.webp", "assets-web/stickers/broken/brokenemotion_5.webp", "assets-web/stickers/broken/brokenemotion_6.webp", "assets-web/stickers/broken/brokenemotion_7.webp", "assets-web/stickers/broken/brokenemotion_8.webp", "assets-web/stickers/broken/brokenemotion_9.webp", "assets-web/stickers/broken/brokenemotion_10.webp", "assets-web/stickers/broken/brokenemotion_11.webp", "assets-web/stickers/broken/brokenemotion_12.webp", "assets-web/stickers/broken/brokenemotion2_1.webp", "assets-web/stickers/broken/brokenemotion2_2.webp", "assets-web/stickers/broken/brokenemotion2_3.webp", "assets-web/stickers/broken/brokenemotion2_4.webp", "assets-web/stickers/broken/brokenemotion2_5.webp", "assets-web/stickers/broken/brokenemotion2_6.webp", "assets-web/stickers/broken/brokenemotion2_7.webp", "assets-web/stickers/broken/brokenemotion2_8.webp", "assets-web/stickers/broken/brokenemotion2_9.webp", "assets-web/stickers/broken/brokenemotion2_10.webp", "assets-web/stickers/broken/brokenemotion2_11.webp", "assets-web/stickers/broken/brokenemotion2_12.webp"],
    "compare": ["assets-web/stickers/compare/compare2_1.webp", "assets-web/stickers/compare/compare2_2.webp", "assets-web/stickers/compare/compare2_3.webp", "assets-web/stickers/compare/compare2_4.webp", "assets-web/stickers/compare/compare2_5.webp", "assets-web/stickers/compare/compare2_6.webp", "assets-web/stickers/compare/compare2_7.webp", "assets-web/stickers/compare/compare2_8.webp", "assets-web/stickers/compare/compare2_9.webp", "assets-web/stickers/compare/compare2_10.webp", "assets-web/stickers/compare/compare2_11.webp", "assets-web/stickers/compare/compare2_12.webp"],
    "waiting": ["assets-web/stickers/waiting/wating_1.webp", "assets-web/stickers/waiting/wating_2.webp", "assets-web/stickers/waiting/wating_3.webp", "assets-web/stickers/waiting/wating_4.webp", "assets-web/stickers/waiting/wating_5.webp", "assets-web/stickers/waiting/wating_6.webp", "assets-web/stickers/waiting/wating_7.webp", "assets-web/stickers/waiting/wating_8.webp", "assets-web/stickers/waiting/wating_9.webp", "assets-web/stickers/waiting/wating_10.webp", "assets-web/stickers/waiting/wating_11.webp", "assets-web/stickers/waiting/wating_12.webp", "assets-web/stickers/waiting/wating2_1.webp", "assets-web/stickers/waiting/wating2_2.webp", "assets-web/stickers/waiting/wating2_3.webp", "assets-web/stickers/waiting/wating2_4.webp", "assets-web/stickers/waiting/wating2_5.webp", "assets-web/stickers/waiting/wating2_6.webp", "assets-web/stickers/waiting/wating2_7.webp", "assets-web/stickers/waiting/wating2_8.webp", "assets-web/stickers/waiting/wating2_9.webp", "assets-web/stickers/waiting/wating2_10.webp", "assets-web/stickers/waiting/wating2_11.webp", "assets-web/stickers/waiting/wating2_12.webp"],
    "forgive": ["assets-web/stickers/forgive/forfive_1.webp", "assets-web/stickers/forgive/forfive_2.webp", "assets-web/stickers/forgive/forfive_3.webp", "assets-web/stickers/forgive/forfive_4.webp", "assets-web/stickers/forgive/forfive_5.webp", "assets-web/stickers/forgive/forfive_6.webp", "assets-web/stickers/forgive/forfive_7.webp", "assets-web/stickers/forgive/forfive_8.webp", "assets-web/stickers/forgive/forfive_9.webp", "assets-web/stickers/forgive/forfive_10.webp", "assets-web/stickers/forgive/forfive_11.webp", "assets-web/stickers/forgive/forfive_12.webp", "assets-web/stickers/forgive/forgive2_1.webp", "assets-web/stickers/forgive/forgive2_2.webp", "assets-web/stickers/forgive/forgive2_3.webp", "assets-web/stickers/forgive/forgive2_4.webp", "assets-web/stickers/forgive/forgive2_5.webp", "assets-web/stickers/forgive/forgive2_6.webp", "assets-web/stickers/forgive/forgive2_7.webp", "assets-web/stickers/forgive/forgive2_8.webp", "assets-web/stickers/forgive/forgive2_9.webp", "assets-web/stickers/forgive/forgive2_10.webp", "assets-web/stickers/forgive/forgive2_11.webp", "assets-web/stickers/forgive/forgive2_12.webp"],
    "distant": ["assets-web/stickers/distant/godsofar_1.webp", "assets-web/stickers/distant/godsofar_2.webp", "assets-web/stickers/distant/godsofar_3.webp", "assets-web/stickers/distant/godsofar_4.webp", "assets-web/stickers/distant/godsofar_5.webp", "assets-web/stickers/distant/godsofar_6.webp", "assets-web/stickers/distant/godsofar_7.webp", "assets-web/stickers/distant/godsofar_8.webp", "assets-web/stickers/distant/godsofar_9.webp", "assets-web/stickers/distant/godsofar_10.webp", "assets-web/stickers/distant/godsofar_11.webp", "assets-web/stickers/distant/godsofar_12.webp", "assets-web/stickers/distant/godsofar2_1.webp", "assets-web/stickers/distant/godsofar2_2.webp", "assets-web/stickers/distant/godsofar2_3.webp", "assets-web/stickers/distant/godsofar2_4.webp", "assets-web/stickers/distant/godsofar2_5.webp", "assets-web/stickers/distant/godsofar2_6.webp", "assets-web/stickers/distant/godsofar2_7.webp", "assets-web/stickers/distant/godsofar2_8.webp", "assets-web/stickers/distant/godsofar2_9.webp", "assets-web/stickers/distant/godsofar2_10.webp", "assets-web/stickers/distant/godsofar2_11.webp", "assets-web/stickers/distant/godsofar2_12.webp"],
    "calling": ["assets-web/stickers/calling/reponsibility_1.webp", "assets-web/stickers/calling/reponsibility_2.webp", "assets-web/stickers/calling/reponsibility_3.webp", "assets-web/stickers/calling/reponsibility_4.webp", "assets-web/stickers/calling/reponsibility_5.webp", "assets-web/stickers/calling/reponsibility_6.webp", "assets-web/stickers/calling/reponsibility_7.webp", "assets-web/stickers/calling/reponsibility_8.webp", "assets-web/stickers/calling/reponsibility_9.webp", "assets-web/stickers/calling/reponsibility_10.webp", "assets-web/stickers/calling/reponsibility_11.webp", "assets-web/stickers/calling/reponsibility_12.webp", "assets-web/stickers/calling/reponsibility2_1.webp", "assets-web/stickers/calling/reponsibility2_2.webp", "assets-web/stickers/calling/reponsibility2_3.webp", "assets-web/stickers/calling/reponsibility2_4.webp", "assets-web/stickers/calling/reponsibility2_5.webp", "assets-web/stickers/calling/reponsibility2_6.webp", "assets-web/stickers/calling/reponsibility2_7.webp", "assets-web/stickers/calling/reponsibility2_8.webp", "assets-web/stickers/calling/reponsibility2_9.webp", "assets-web/stickers/calling/reponsibility2_10.webp", "assets-web/stickers/calling/reponsibility2_11.webp", "assets-web/stickers/calling/reponsibility2_12.webp"],
    "thanks": ["assets-web/stickers/thanks/nothanks_1.webp", "assets-web/stickers/thanks/nothanks_2.webp", "assets-web/stickers/thanks/nothanks_3.webp", "assets-web/stickers/thanks/nothanks_4.webp", "assets-web/stickers/thanks/nothanks_5.webp", "assets-web/stickers/thanks/nothanks_6.webp", "assets-web/stickers/thanks/nothanks_7.webp", "assets-web/stickers/thanks/nothanks_8.webp", "assets-web/stickers/thanks/nothanks_9.webp", "assets-web/stickers/thanks/nothanks_10.webp", "assets-web/stickers/thanks/nothanks_11.webp", "assets-web/stickers/thanks/nothanks_12.webp", "assets-web/stickers/thanks/nothanks2_1.webp", "assets-web/stickers/thanks/nothanks2_2.webp", "assets-web/stickers/thanks/nothanks2_3.webp", "assets-web/stickers/thanks/nothanks2_4.webp", "assets-web/stickers/thanks/nothanks2_5.webp", "assets-web/stickers/thanks/nothanks2_6.webp", "assets-web/stickers/thanks/nothanks2_7.webp", "assets-web/stickers/thanks/nothanks2_8.webp", "assets-web/stickers/thanks/nothanks2_9.webp", "assets-web/stickers/thanks/nothanks2_10.webp", "assets-web/stickers/thanks/nothanks2_11.webp", "assets-web/stickers/thanks/nothanks2_12.webp"]
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/soul-pharmacy/stickers-data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.StepIndicator = __ds_scope.StepIndicator;

__ds_ns.AssessmentPaper = __ds_scope.AssessmentPaper;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.IntakeSheet = __ds_scope.IntakeSheet;

__ds_ns.MOODS = __ds_scope.MOODS;

__ds_ns.MoodEnvelope = __ds_scope.MoodEnvelope;

__ds_ns.PrescriptionCard = __ds_scope.PrescriptionCard;

__ds_ns.PrescriptionWord = __ds_scope.PrescriptionWord;

__ds_ns.RxField = __ds_scope.RxField;

__ds_ns.WoodShelf = __ds_scope.WoodShelf;

})();
