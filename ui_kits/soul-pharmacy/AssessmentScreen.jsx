// AssessmentScreen — 감정 선택 후 전환 화면.
// 상태 머신: loading → envelope-enter → paper-rise → complete
//  · loading      : 로딩 오버레이만 표시(봉투/종이 애니메이션 정지)
//  · envelope-enter: 봉투(뒷면+앞면)가 fade-in + 살짝 상승하며 먼저 등장 (0.45s)
//  · paper-rise    : 봉투가 자리잡은 뒤, 접수카드 종이가 봉투 안에서 위로 상승 (1.1s)
//  · complete      : 최종 UI 활성화
// 3-레이어: (1) env-back  (2) 접수카드 종이(AssessmentPaper)  (3) env-front.
// 텍스트/아이콘은 이미지에 합성하지 않고 별도 HTML 레이어로 올린다.
function AssessmentScreen({ mood, onBack, onSubmit }) {
  const { MOODS, AssessmentPaper, Icon } = window.DesignSystem_d4e5a3;
  const m = MOODS[mood] || MOODS.anxious;
  const data = window.getAssessment(mood);
  const [selections, setSelections] = React.useState({});
  const [phase, setPhase] = React.useState("loading");
  const [skip, setSkip] = React.useState(false); // 화면 더블클릭 → 전체 즉시 표시
  React.useEffect(() => { setSkip(false); }, [mood]);

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
    const t0 = setTimeout(() => setPhase("ready"), 1200);                        // 로딩 후 준비 화면
    const t1 = setTimeout(() => setPhase("intro"), 1200 + 2000);                 // 준비 화면 후 안내 화면
    const t2 = setTimeout(() => setPhase("envelope-enter"), 1200 + 2000 + 1900); // 안내가 사라진 뒤 봉투 등장
    const t3 = setTimeout(() => setPhase("paper-rise"), 1200 + 2000 + 1900 + 1250);
    const t4 = setTimeout(() => setPhase("complete"), 1200 + 2000 + 1900 + 1250 + 2400);
    return () => { clearTimeout(t0); clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [mood]);

  const toggle = (g, o, v) => setSelections((s) => ({ ...s, [`${g}-${o}`]: v }));

  const envelopeIn = skip || (phase !== "loading" && phase !== "ready" && phase !== "intro");
  const risen = skip || phase === "paper-rise" || phase === "complete";

  // Q1 접수카드 종이가 등장하는 시점(paper-rise)부터 2번 배경음악으로 크로스페이드
  React.useEffect(() => { if (window.__bgm && risen) window.__bgm.play(2); }, [risen]);

  // ── 측정 기반 지오메트리 (envelope box = W×W, 원점 = box 하단) ──
  // 새 봉투 앞·뒷면은 동일 캔버스(1643×1371). 같은 봉투의 양면이므로 폭·위치를 완전히 일치시켜 정확히 겹친다.
  const RATIO = 1371 / 1643;              // 앞·뒷면 공통 캔버스 비율
  const envW = W * 0.80;                  // 앞면·뒷면 동일 폭 (봉투 추가 축소)
  const envImgH = envW * RATIO;           // 봉투 이미지 높이
  const frontW = envW;
  const backW = envW;
  const frontBottom = 0;                  // 앞·뒤 동일 위치
  const paperW = W * 0.78;                // 접수지 더 크게 (메인)
  const paperPadBottom = Math.round(W * 0.07); // 종이 하단 빈 크림 영역(포켓 안으로 tuck)
  const footerPad = 26;                    // AssessmentPaper 푸터 하단 패딩
  // 앞면 상단이 버튼 바로 아래에 오도록 tuck 계산 → 빈 크림 꼬리를 포켓이 덮고, 버튼은 노출.
  // 종이 하단을 앞면 포켓 오목 곡선 아래로 tuck (곡선 중심 ≈ 아래에서 0.60H)
  const paperBottom = envImgH * 0.50; // 종이 하단을 봉투 포켓 안으로 더 깊이 tuck (빈 공간 제거)

  const envH = envImgH;
  // 접수지는 모든 문항에서 동일한 고정 높이 — 문항마다 선택지 수가 달라도
  // 무대 높이·봉투·감정명 위치가 움직이지 않도록 카드 높이를 고정한다.
  const paperH = pc ? 700 : 620;
  const stageH = paperBottom + paperH + 16;
  // 봉투 하단 꼬리는 감정 문구 조금 아래에서 끝나도록 트림(빈 공간 제거). 상단은 트림하지 않음.
  // +16px 여유: 트림 비율(30%)만 쓰면 2줄짜리 감정명(마음이 무너졌어요 등 8개 중 6개)의
  // 하단이 모바일 -1~3px, PC -5~7px씩 항상 살짝 잘렸다. 봉투 이미지/트림 비율은 그대로 두고
  // 텍스트가 잘리지 않을 만큼만 클립 높이에 여유를 더한다(트림 비중 대비 미미해서 빈 꼬리
  // 가리기 의도에는 영향 없음).
  const clipH = stageH - envImgH * 0.30 + 16;

  return (
    <div onDoubleClick={() => setSkip(true)} style={{ position: "relative", minHeight: "100%", overflowX: "hidden", background: "radial-gradient(120% 70% at 50% 0%, #FBF7F0 0%, var(--bg-page) 60%, #EDE7DE 100%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <style>{`@keyframes rxdot{0%,80%,100%{opacity:.25;transform:translateY(0)}40%{opacity:1;transform:translateY(-4px)}}@keyframes rxstep{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes rxopt{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}`}</style>

      {/* 배경: 이전 단계의 감정 봉투들이 흐릿하게 남아 공간과 이어짐 */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 0, overflow: "hidden", pointerEvents: "none" }}>
        <div style={{ position: "absolute", top: pc ? "9%" : "7%", left: "50%", transform: "translateX(-50%)", display: "flex", gap: pc ? 30 : 14, filter: "blur(4px)", opacity: 0.5 }}>
          {["anxious", "broken", "compare", "waiting", "forgive", "distant", "calling", "thanks"].map((k, i) => (
            <img key={k} src={`assets-web/env-front-${k}.webp`} alt="" draggable="false" style={{ width: pc ? 150 : 68, height: "auto", transform: `translateY(${i % 2 ? 20 : 0}px)`, userSelect: "none" }} />
          ))}
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(250,247,240,0.5) 0%, rgba(250,247,240,0.82) 52%, #F3EEE9 100%)" }} />
      </div>

      <button onClick={onBack} style={{ position: "absolute", top: 16, left: 16, zIndex: 20, background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", display: "flex", alignItems: "center", gap: 4, fontFamily: "var(--font-body)", fontSize: 13 }}>
        <Icon name="chevron-left" size={19} color="var(--text-muted)" stroke={1.5} /> 뒤로
      </button>


      {/* 3-레이어 무대 — 봉투 하단은 clip으로 잘라 머문구 지점에서 끝난다 */}
      <div style={{ position: "relative", zIndex: 1, width: W, height: clipH, overflow: "hidden", margin: pc ? "8px auto 0" : "12px auto 0" }}>
      <div style={{ position: "relative", width: W, height: stageH }}>
        {/* envelope box (하단 정렬) — 봉투 등장 애니메이션 단위 */}
        <div style={{
          position: "absolute", left: 0, bottom: 0, width: W, height: envH,
          opacity: envelopeIn ? 1 : 0,
          transform: `translateY(${envelopeIn ? "0px" : "16px"}) scale(${envelopeIn ? 1 : 1.06})`,
          transformOrigin: "center bottom",
          transition: "transform 1100ms cubic-bezier(0.22,1,0.32,1), opacity 1000ms ease-out",
        }}>

          {/* (1) 봉투 뒷면 */}
          <img
            src={`assets-web/env-back-${mood}.webp`}
            alt=""
            draggable="false"
            style={{ position: "absolute", left: "50%", bottom: 0, transform: "translateX(-50%)", width: backW, height: "auto", zIndex: 1, userSelect: "none", filter: "drop-shadow(0 14px 22px rgba(120,92,64,0.16))", pointerEvents: "none" }}
          />

          {/* (2) 접수카드 종이 — 뒷면과 앞면 사이에서 상승 */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              bottom: paperBottom,
              width: paperW,
              zIndex: 2,
              transform: `translateX(-50%) translateY(${risen ? "0px" : Math.round(W * 0.2) + "px"})`,
              opacity: risen ? 1 : 0,
              transition: "transform 2350ms cubic-bezier(0.22,1,0.32,1), opacity 1500ms ease-out",
            }}
          >
            <AssessmentPaper
              icon={m.icon}
              iconColor={m.ink}
              title="오늘의 마음 접수카드"
              subtitle={`${m.label.replace("\n", " ")} · 지금 마음에 가까운 것`}
              groups={data.groups}
              selections={selections}
              onToggle={toggle}
              ctaLabel={data.cta}
              onSubmit={() => onSubmit && onSubmit(selections)}
              width={paperW}
              pc={pc}
              cardHeight={paperH}
              skip={skip}
              style={{ paddingBottom: paperPadBottom }}
            />
          </div>

          {/* (3) 봉투 앞면 + 감정명 (이미지 위 HTML 텍스트) */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              bottom: frontBottom,
              width: frontW,
              zIndex: 3,
              transform: "translateX(-50%)",
              pointerEvents: "none",
              filter: "drop-shadow(0 6px 10px rgba(120,92,64,0.14))",
            }}
          >
            <img src={`assets-web/env-front-${mood}.webp`} alt="" draggable="false" style={{ display: "block", width: "100%", height: "auto", userSelect: "none" }} />
            <span
              style={{
                position: "absolute", left: 0, right: 0, top: "62%", transform: "translateY(-50%)",
                textAlign: "center", fontFamily: "var(--font-title)", fontWeight: 600,
                fontSize: Math.round(W * 0.046), lineHeight: 1.3, color: "var(--ink-900)",
                whiteSpace: "pre-line", letterSpacing: "-0.01em",
                textShadow: "0 1px 2px rgba(255,255,255,0.35)",
              }}
            >
              {m.label}
            </span>
          </div>
        </div>
      </div>
      </div>

      {/* 준비 화면 — 접수 안내 직전 "준비되셨나요?" */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 43,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, padding: "0 32px",
        background: "radial-gradient(120% 70% at 50% 42%, rgba(250,247,240,0.94) 0%, rgba(243,238,233,0.9) 70%)",
        opacity: phase === "ready" && !skip ? 1 : 0,
        pointerEvents: phase === "ready" && !skip ? "auto" : "none",
        transition: "opacity 900ms ease",
      }}>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13, letterSpacing: "0.24em", color: m.ink }}>오늘의 마음 접수</div>
        <p style={{ fontFamily: "var(--font-title)", fontWeight: 600, fontSize: 26, lineHeight: 1.5, color: "var(--ink-900)", textAlign: "center", margin: 0 }}>
          준비되셨나요?
        </p>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, color: "var(--text-muted)", textAlign: "center", margin: 0 }}>
          지금 마음을 천천히 접수해볼게요.
        </p>
      </div>

      {/* 안내 화면 — 문단지 등장 직전 잠긐 나타났다 사라진다 */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 42,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 14, padding: "0 32px",
        background: "radial-gradient(120% 70% at 50% 42%, rgba(250,247,240,0.92) 0%, rgba(243,238,233,0.86) 70%)",
        opacity: phase === "intro" && !skip ? 1 : 0,
        pointerEvents: phase === "intro" && !skip ? "auto" : "none",
        transition: "opacity 900ms ease",
      }}>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13, letterSpacing: "0.24em", color: m.ink }}>오늘의 마음 접수</div>
        <p style={{ fontFamily: "var(--font-title)", fontWeight: 600, fontSize: 26, lineHeight: 1.5, color: "var(--ink-900)", textAlign: "center", margin: 0 }}>
          지금 마음에 가까운 것만<br/>천천히 골라주세요.
        </p>
      </div>

      {/* 로딩 오버레이 — 준비 완료 전까지 UI/애니메이션을 가린다 */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 40,
        background: "radial-gradient(120% 70% at 50% 40%, #FBF7F0 0%, var(--bg-page) 70%)",
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 22,
        opacity: phase === "loading" && !skip ? 1 : 0,
        pointerEvents: phase === "loading" && !skip ? "auto" : "none",
        transition: "opacity 600ms ease-out",
      }}>
        <div style={{ width: 54, height: 54, borderRadius: "50%", background: m.fill, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 8px 20px rgba(120,92,64,0.16)" }}>
          <Icon name={m.icon} size={26} color={m.ink} stroke={1.5} />
        </div>
        <div style={{ fontFamily: "var(--font-title)", fontWeight: 600, fontSize: 18, color: "var(--ink-900)" }}>
          말씀 처방전을 준비하고 있어요
        </div>
        <div style={{ display: "flex", gap: 7 }}>
          {phase === "loading" && [0, 1, 2].map((i) => (
            <span key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: m.ink, animation: `rxdot 1.2s ${i * 0.16}s infinite ease-in-out` }} />
          ))}
        </div>
      </div>
    </div>
  );
}
window.AssessmentScreen = AssessmentScreen;
