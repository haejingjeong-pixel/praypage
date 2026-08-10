// scenes.jsx — 마음약국 · 말씀 처방전 인트로 영상 (9:16).
// 모든 모션은 useScene()의 progress/localTime에서 파생 (time-stretch 대응).
const { TextSprite, RectSprite, Easing, interpolate, useScene } = window;

const OLIVE = "#5E7357", CORAL = "#DF7A5F", CORAL_SOFT = "#E9A184";
const PAPER = "#EFEEEB", CREAM = "#FBFAF8", INK = "#362E27", MUTED = "#8B7F70", RX = "#3E63A6";
const TITLE = "'Jua','Noto Sans KR',sans-serif";
const BODY = "'Pretendard','Noto Sans KR',sans-serif";
const VERSE = "'Gowun Batang','Noto Sans KR',serif";
const W = 720, H = 1280;

// 화면 전환이 매끈하도록: 각 씬은 배경 위에서 콘텐츠가 페이드 인(초반)·아웃(후반).
// → 모든 씬의 첫/마지막 프레임 = 배경만 (프레임 매치).
function veil(p, inEnd = 0.12, outStart = 0.9) {
  const i = interpolate(p, [0, inEnd], [0, 1], Easing.outCubic);
  const o = interpolate(p, [outStart, 1], [1, 0], Easing.inCubic);
  return Math.min(i, o);
}
const rise = (p, from = 26, inEnd = 0.14) => interpolate(p, [0, inEnd], [from, 0], Easing.outCubic);

// 약병 로고 (십자 + 하트)
function Bottle({ size = 200, draw = 1, opacity = 1 }) {
  const dash = 520;
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none" style={{ display: "block", opacity }}>
      <g stroke={OLIVE} strokeWidth="4" strokeLinejoin="round" strokeLinecap="round" fill="none"
         strokeDasharray={dash} strokeDashoffset={(1 - draw) * dash}>
        <rect x="46" y="18" width="36" height="16" rx="6" />
        <path d="M52 34 v6 M76 34 v6" />
        <rect x="38" y="40" width="52" height="70" rx="18" />
      </g>
      <path d="M64 62 v26 M51 75 h26" stroke={OLIVE} strokeWidth="5.4" strokeLinecap="round" style={{ opacity: interpolate(draw, [0.6, 1], [0, 1]) }} />
      <path d="M33 96 C25 90 24 81 30 77 C34 74 39 76 40 80 C41 76 46 74 50 77 C56 81 55 90 47 96 C43 99 40 100 40 100 C40 100 37 99 33 96 Z"
            fill={CORAL_SOFT} style={{ opacity: interpolate(draw, [0.75, 1], [0, 1]) }} />
    </svg>
  );
}

const MOODS = [
  { k: "불안해요", c: "#B7D0C1" }, { k: "무너졌어요", c: "#EFB6A3" },
  { k: "비교돼요", c: "#D0C2DE" }, { k: "기다림", c: "#EAC983" },
  { k: "용서", c: "#EBB9BE" }, { k: "멀게 느껴져요", c: "#B9CEE0" },
  { k: "버거워요", c: "#C3CB9E" }, { k: "감사", c: "#E8CD86" },
];

const center = { position: "absolute", inset: 0, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" };

// ① Opening — 로고 드로잉 + 워드마크
function Opening() {
  const { progress: p } = useScene();
  const draw = interpolate(p, [0.05, 0.55], [0, 1], Easing.outCubic);
  const v = veil(p);
  return (
    <div style={{ ...center, opacity: v, transform: `translateY(${rise(p, 18)}px)` }}>
      <Bottle size={220} draw={draw} />
      <div style={{ fontFamily: TITLE, fontSize: 68, color: INK, marginTop: 28, opacity: interpolate(p, [0.45, 0.7], [0, 1]) }}>마음약국</div>
      <div style={{ fontFamily: BODY, fontSize: 26, letterSpacing: "0.32em", color: MUTED, marginTop: 14, paddingLeft: "0.32em", opacity: interpolate(p, [0.6, 0.82], [0, 1]) }}>오늘의 말씀 처방전</div>
    </div>
  );
}

// ② Ask — 질문 + 봉투들이 순차 등장
function Ask() {
  const { progress: p } = useScene();
  const v = veil(p);
  return (
    <div style={{ ...center, opacity: v, padding: "0 60px" }}>
      <div style={{ fontFamily: TITLE, fontSize: 58, lineHeight: 1.4, color: INK, textAlign: "center", transform: `translateY(${rise(p, 24)}px)` }}>오늘 마음이<br />어디가 아픈가요?</div>
      <div style={{ fontFamily: BODY, fontSize: 24, color: MUTED, marginTop: 20, opacity: interpolate(p, [0.2, 0.4], [0, 1]) }}>마음에 가까운 증상을 하나 골라주세요</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginTop: 54, width: "100%", maxWidth: 520 }}>
        {MOODS.map((m, i) => {
          const t0 = 0.3 + i * 0.055;
          const op = interpolate(p, [t0, t0 + 0.12], [0, 1], Easing.outCubic);
          const y = interpolate(p, [t0, t0 + 0.14], [22, 0], Easing.outCubic);
          return (
            <div key={i} style={{ background: m.c, borderRadius: 18, padding: "22px 18px", textAlign: "center", fontFamily: TITLE, fontSize: 26, color: INK, opacity: op, transform: `translateY(${y}px)`, boxShadow: "0 6px 16px rgba(70,58,45,0.08)" }}>{m.k}</div>
          );
        })}
      </div>
    </div>
  );
}

// ③ Select — '불안해요' 봉투가 중앙으로 확대
function Select() {
  const { progress: p } = useScene();
  const v = veil(p);
  const s = interpolate(p, [0.1, 0.6], [1, 1.7], Easing.inOutCubic);
  const lift = interpolate(p, [0.1, 0.6], [0, -20], Easing.inOutCubic);
  return (
    <div style={{ ...center, opacity: v }}>
      <div style={{ background: "#B7D0C1", borderRadius: 26, padding: "60px 70px", textAlign: "center", fontFamily: TITLE, fontSize: 40, color: INK, transform: `translateY(${lift}px) scale(${s})`, boxShadow: "0 20px 50px rgba(70,58,45,0.16)" }}>불안해요</div>
      <div style={{ fontFamily: BODY, fontSize: 24, color: MUTED, marginTop: 130, opacity: interpolate(p, [0.55, 0.8], [0, 1]) }}>이 마음을 접수할게요</div>
    </div>
  );
}

// ④ Rise — 봉투에서 접수카드(종이)가 위로 올라옴
function Rise() {
  const { progress: p } = useScene();
  const v = veil(p);
  const y = interpolate(p, [0.12, 0.7], [140, -30], Easing.outCubic);
  return (
    <div style={{ ...center, opacity: v }}>
      <div style={{ position: "relative", width: 380, height: 520 }}>
        {/* 종이 */}
        <div style={{ position: "absolute", left: 40, right: 40, top: 40, bottom: 150, background: CREAM, borderRadius: 14, boxShadow: "0 12px 30px rgba(70,58,45,0.14)", transform: `translateY(${y}px)`, padding: "34px 30px", boxSizing: "border-box" }}>
          <div style={{ fontFamily: TITLE, fontSize: 27, color: INK, textAlign: "center", whiteSpace: "nowrap" }}>오늘의 마음 접수카드</div>
          <div style={{ height: 1, background: "#EBD9CF", margin: "22px 0" }} />
          {[0, 1, 2].map((i) => <div key={i} style={{ height: 14, background: "#F0E7DE", borderRadius: 7, margin: "16px 0", width: `${90 - i * 12}%` }} />)}
        </div>
        {/* 봉투 앞면 */}
        <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 300, background: "#B7D0C1", borderRadius: "10px 10px 26px 26px", clipPath: "polygon(0 0,50% 14%,100% 0,100% 100%,0 100%)", boxShadow: "0 16px 40px rgba(70,58,45,0.16)", display: "flex", alignItems: "flex-end", justifyContent: "center", paddingBottom: 40 }}>
          <span style={{ fontFamily: TITLE, fontSize: 34, color: INK }}>불안해요</span>
        </div>
      </div>
    </div>
  );
}

// ⑤ Prescribe — 말씀 처방전 카드 공개
function Prescribe() {
  const { progress: p } = useScene();
  const v = veil(p);
  const sc = interpolate(p, [0.08, 0.4], [0.94, 1], Easing.outCubic);
  return (
    <div style={{ ...center, opacity: v }}>
      <div style={{ position: "relative", width: 520, background: CREAM, borderRadius: 30, boxShadow: "0 22px 55px rgba(70,58,45,0.18)", padding: 30, transform: `scale(${sc})` }}>
        <div style={{ position: "absolute", inset: 16, border: `1.5px solid ${RX}`, borderRadius: 22, pointerEvents: "none" }} />
        <div style={{ position: "relative", textAlign: "center", padding: "20px 20px 8px" }}>
          <div style={{ fontFamily: BODY, fontSize: 18, letterSpacing: "0.34em", color: RX, paddingLeft: "0.34em" }}>마음약국</div>
          <div style={{ fontFamily: TITLE, fontSize: 46, color: RX, margin: "16px 0 26px" }}>말씀 처방전</div>
          <div style={{ opacity: interpolate(p, [0.35, 0.62], [0, 1]), transform: `translateY(${interpolate(p, [0.35, 0.62], [16, 0], Easing.outCubic)}px)` }}>
            <div style={{ fontFamily: BODY, fontWeight: 700, fontSize: 20, color: RX, marginBottom: 14 }}>오늘의 말씀</div>
            <div style={{ fontFamily: VERSE, fontSize: 32, lineHeight: 1.7, color: INK }}>너희는 마음에 근심하지 말라<br />하나님을 믿으니 또 나를 믿으라</div>
            <div style={{ fontFamily: BODY, fontSize: 18, color: MUTED, marginTop: 16 }}>요한복음 14:1</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ⑥ Word — 처방 단어 + 카피
function Word() {
  const { progress: p } = useScene();
  const v = veil(p);
  const sc = interpolate(p, [0.1, 0.5], [0.7, 1], Easing.outBack);
  return (
    <div style={{ ...center, opacity: v }}>
      <div style={{ fontFamily: BODY, fontSize: 24, color: MUTED, opacity: interpolate(p, [0.05, 0.3], [0, 1]) }}>오늘의 처방 단어</div>
      <div style={{ fontFamily: TITLE, fontSize: 130, color: CORAL, margin: "18px 0", transform: `scale(${sc})` }}>믿음</div>
      <div style={{ fontFamily: TITLE, fontSize: 30, color: INK, textAlign: "center", lineHeight: 1.5, opacity: interpolate(p, [0.5, 0.75], [0, 1]) }}>오늘 마음이 아픈 곳에,<br />말씀 한 알.</div>
    </div>
  );
}

window.MP_Opening = Opening;
window.MP_Ask = Ask;
window.MP_Select = Select;
window.MP_Rise = Rise;
window.MP_Prescribe = Prescribe;
window.MP_Word = Word;
