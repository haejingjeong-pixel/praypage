// IntroSequence — 체험 시작 전 3단계 안내 화면. 담백한 안내문 → 감정 선택으로 연결.
// 클릭(또는 다음 버튼)으로 진행, 하단 점 인디케이터, 부드러운 페이드 전환.
function IntroSequence({ onDone }) {
  const { Icon } = window.DesignSystem_d4e5a3;
  // 마음약국 마크 — 약병(십자) + 하트 + 잎사귀. 브랜드 톤으로 직접 드로잉.
  const OLIVE = "var(--mood-calling-ink)", CORAL = "var(--coral-300)", SAGE = "var(--mood-calling-fill)";
  const LogoMark = () => (
    <svg width="116" height="116" viewBox="0 0 120 120" fill="none" style={{ display: "block", margin: "0 auto" }}>
      {/* leaf sprig */}
      <g stroke={OLIVE} strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.9">
        <path d="M86 86 C92 74 96 60 92 46" />
      </g>
      <g fill={SAGE} opacity="0.95">
        <path d="M90 52 C96 48 104 49 107 45 C104 53 98 57 91 56 Z" />
        <path d="M88 64 C94 61 101 62 105 58 C102 66 96 69 89 68 Z" />
        <path d="M86 76 C91 74 98 75 101 71 C99 78 93 81 87 80 Z" />
      </g>
      {/* heart */}
      <path d="M33 74 C25 68 24 60 29 56 C33 53 38 55 39 59 C40 55 45 53 49 56 C54 60 52 68 44 74 C41 76 39 77 39 77 C39 77 36 76 33 74 Z" fill={CORAL} opacity="0.85" />
      {/* bottle */}
      <g stroke={OLIVE} strokeWidth="2.4" strokeLinejoin="round" strokeLinecap="round" fill="none">
        <rect x="46" y="20" width="28" height="10" rx="3" />
        <path d="M50 30 h20 a12 12 0 0 1 12 12 v38 a10 10 0 0 1 -10 10 h-24 a10 10 0 0 1 -10 -10 v-38 a12 12 0 0 1 12 -12 Z" />
        <path d="M60 48 v20 M50 58 h20" strokeWidth="3.4" />
      </g>
    </svg>
  );
  const SCREENS = [
    {
      logo: true,
      title: ["안녕하세요.", "오늘의 마음을 위한", "마음약국입니다."],
      sub: ["이곳은 현재의 마음을 살펴보고", "그 마음에 필요한 말씀을 만나보는 공간입니다."],
    },
    {
      logo: true,
      title: ["지금부터 마음 카드 선택과", "세 가지 질문이 이어집니다."],
      sub: ["잘 생각해 낸 답보다", "지금 마음에 가까운 답을 골라 주세요."],
    },
    {
      logo: true,
      title: ["먼저,", "오늘 내 마음에 가장 가까운", "감정 하나를 선택해 주세요."],
      sub: ["천천히 살펴본 뒤", "가장 마음이 머무는 카드를 선택해 주세요."],
    },
  ];
  const [i, setI] = React.useState(0);
  const [fading, setFading] = React.useState(false);
  const last = i === SCREENS.length - 1;

  const go = (next) => {
    if (fading) return;
    setFading(true);
    setTimeout(() => {
      if (next >= SCREENS.length) { onDone && onDone(); return; }
      setI(next);
      setFading(false);
    }, 420);
  };

  const s = SCREENS[i];
  return (
    <div
      onClick={() => go(i + 1)}
      style={{
        position: "relative", minHeight: "100vh", width: "100%", boxSizing: "border-box",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        padding: "60px 28px", cursor: "pointer",
        background: "url('assets-web/leaf-tl-soft.png') top left / min(52vw,460px) auto no-repeat, url('assets-web/leaf-br-soft.png') bottom right / min(52vw,460px) auto no-repeat, #F2EBE6",
      }}
    >
      <div style={{
        position: "relative", textAlign: "center", maxWidth: 560,
        opacity: fading ? 0 : 1, transform: fading ? "translateY(10px)" : "translateY(0)",
        transition: "opacity 400ms var(--ease-soft), transform 400ms var(--ease-soft)",
      }}>
        <div style={{ marginBottom: 26, display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          {s.logo
            ? <img src="assets-web/logo-mark.webp" alt="마음약국" style={{ width: 54, height: "auto", display: "block" }} />
            : <Icon name={s.icon} size={40} color="var(--mood-compare-ink)" stroke={1.4} />}
        </div>
        <h1 style={{ fontFamily: "var(--font-title)", fontWeight: 600, fontSize: 27, lineHeight: 1.55, color: "var(--ink-900)", margin: 0, letterSpacing: "-0.01em" }}>
          {s.title.map((t, k) => <div key={k}>{t}</div>)}
        </h1>
        <div style={{ width: 40, height: 1, background: "var(--line-soft)", margin: "26px auto" }} />
        <p style={{ fontFamily: "var(--font-body)", fontSize: 14.5, lineHeight: 1.9, color: "var(--text-muted)", margin: 0 }}>
          {s.sub.map((t, k) => <div key={k}>{t}</div>)}
        </p>
      </div>

      {/* dots */}
      <div style={{ position: "relative", display: "flex", gap: 8, marginTop: 44 }}>
        {SCREENS.map((_, k) => (
          <span key={k} style={{
            width: k === i ? 20 : 8, height: 8, borderRadius: 999,
            background: k === i ? "var(--mood-compare-ink)" : "var(--ink-300)",
            transition: "all 320ms var(--ease-soft)",
          }} />
        ))}
      </div>

      {/* next hint */}
      <button
        onClick={(e) => { e.stopPropagation(); go(i + 1); }}
        style={{
          position: "relative", marginTop: 26, padding: "12px 30px", borderRadius: "var(--radius-lg)",
          border: last ? "1px solid var(--mood-compare-ink)" : "none", background: "transparent",
          color: "var(--mood-compare-ink)",
          fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, cursor: "pointer",
          boxShadow: last ? "var(--shadow-sm)" : "none",
          display: "inline-flex", alignItems: "center", gap: 8,
        }}
      >
        {last ? "시작하기" : "다음"}
        {!last && <Icon name="chevron-right" size={17} color="var(--mood-compare-ink)" stroke={2} />}
      </button>
    </div>
  );
}
window.IntroSequence = IntroSequence;

// IntroLoading — 안내 → 감정 선택 사이. 봉투 이미지를 미리 불러와 화면 전환 시
// 이미지가 늦게 뜨는 게 안 보이도록 한다. 최소 노출 시간 + 프리로드 완료 후 진행.
function IntroLoading({ onDone }) {
  const MOODS = ["anxious", "broken", "compare", "waiting", "forgive", "distant", "calling", "thanks"];
  const [dots, setDots] = React.useState(1);
  const [shown, setShown] = React.useState(false);
  const [bye, setBye] = React.useState(false);
  React.useEffect(() => { const r = requestAnimationFrame(() => setShown(true)); return () => cancelAnimationFrame(r); }, []);
  React.useEffect(() => {
    const t = setInterval(() => setDots((d) => (d % 3) + 1), 380);
    return () => clearInterval(t);
  }, []);
  React.useEffect(() => {
    let done = false;
    const finish = () => { if (!done) { done = true; setBye(true); setTimeout(() => onDone && onDone(), 460); } };
    const urls = ["assets-web/leaf-tl.webp", "assets-web/leaf-br.webp", "assets-web/wood-bar.webp"];
    for (const m of MOODS) urls.push("assets-web/env-" + m + ".webp");
    let loaded = 0;
    const check = () => { loaded++; if (loaded >= urls.length) setTimeout(finish, 200); };
    for (const u of urls) { const img = new Image(); img.onload = check; img.onerror = check; img.src = u; }
    const min = setTimeout(() => {}, 0);
    const cap = setTimeout(finish, 2600); // 안전장치
    return () => { clearTimeout(min); clearTimeout(cap); };
  }, []);

  return (
    <div style={{
      position: "relative", minHeight: "100vh", width: "100%", boxSizing: "border-box",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      padding: 40, background: "url('assets-web/leaf-tl-soft.png') top left / min(52vw,460px) auto no-repeat, url('assets-web/leaf-br-soft.png') bottom right / min(52vw,460px) auto no-repeat, #F2EBE6",
      opacity: shown && !bye ? 1 : 0, transition: "opacity 440ms var(--ease-soft)",
    }}>
      <div style={{ position: "relative", textAlign: "center" }}>
        <div style={{
          width: 46, height: 46, margin: "0 auto 22px", borderRadius: "50%",
          border: "3px solid var(--line-soft)", borderTopColor: "var(--mood-compare-ink)",
          animation: "introspin 900ms linear infinite",
        }} />
        <p style={{ fontFamily: "var(--font-title)", fontWeight: 600, fontSize: 19, color: "var(--ink-900)", margin: 0 }}>
          마음 카드를 준비하고 있어요{".".repeat(dots)}
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-muted)", marginTop: 8 }}>
          잠시만 기다려 주세요.
        </p>
      </div>
      <style>{`@keyframes introspin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );
}
window.IntroLoading = IntroLoading;
