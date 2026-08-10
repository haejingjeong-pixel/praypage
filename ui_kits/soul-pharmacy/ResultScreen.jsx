// ResultScreen — 결과 화면.
// 흐름: loading(차분한 준비 화면) → reveal(넓은 말씀 처방전 한 장 + 하단 액션).
// 시안: 좌우 2단 카드가 아니라, 미색 종이 처방전 한 장이 화면 중앙에 넓게 놓인다.
// 한 장의 인쇄물처럼 — 청색 인쇄선/텍스트, 흰 박스 분리 없이 선과 간격으로 위계 표현.
// 섹션 순서: 접수 정보 → 마음 소견 → 오늘 곁에 있어줄 말씀 → 복용법 → 주의사항 → 작은 실천.
function ResultScreen({ mood, rx: rxProp, onAgain, onDecorate }) {
  const { Button, Icon, MOODS } = window.DesignSystem_d4e5a3;
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

  // loading → reveal
  const [phase, setPhase] = React.useState("loading");
  const [msg, setMsg] = React.useState(0);
  const [skipAnim, setSkipAnim] = React.useState(false); // 클릭하면 전체 즉시 표시
  React.useEffect(() => { setSkipAnim(false); }, [mood]);
  React.useEffect(() => {
    setPhase("loading"); setMsg(0);
    const t1 = setTimeout(() => setMsg(1), 2200);
    const t2 = setTimeout(() => setPhase("reveal"), 4400);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [mood]);

  // 말씀 처방전이 등장하는 시점(reveal)부터 3번 배경음악으로 크로스페이드
  React.useEffect(() => { if (window.__bgm && phase === "reveal") window.__bgm.play(3); }, [phase]);

  const messages = ["말씀 처방전을 준비하고 있습니다", "당신에게 필요한 말씀을 정리하고 있습니다"];

  // ── 로딩 화면 ──
  if (phase === "loading") {
    return (
      <div style={{ minHeight: "100vh", width: "100%", boxSizing: "border-box", background: "radial-gradient(120% 70% at 50% 35%, #FBF7F0 0%, var(--bg-page) 62%, #EDE7DE 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 26, padding: 32 }}>
        <style>{`@keyframes rxdot2{0%,80%,100%{opacity:.25;transform:translateY(0)}40%{opacity:1;transform:translateY(-4px)}}@keyframes rxpulse{0%,100%{transform:scale(1);opacity:.9}50%{transform:scale(1.06);opacity:1}}@keyframes rxstep{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}`}</style>
        <div style={{ width: 68, height: 68, borderRadius: "50%", background: m.fill, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 26px rgba(120,92,64,0.18)", animation: "rxpulse 2.4s ease-in-out infinite" }}>
          <Icon name={m.icon} size={30} color={m.ink} stroke={1.5} />
        </div>
        <div key={msg} style={{ fontFamily: "var(--font-title)", fontWeight: 600, fontSize: pc ? 22 : 18, color: "var(--ink-900)", textAlign: "center", animation: "rxstep 520ms ease-out", letterSpacing: "-0.01em" }}>
          {messages[msg]}
        </div>
        <div style={{ display: "flex", gap: 7 }}>
          {[0, 1, 2].map((i) => (
            <span key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: m.ink, animation: `rxdot2 1.2s ${i * 0.16}s infinite ease-in-out` }} />
          ))}
        </div>
      </div>
    );
  }

  // ── 처방전 조각들 ──
  const sheetW = pc ? 660 : 380;
  const padX = pc ? 52 : 24;

  // 접수 정보 셀 (라벨 + 값)
  const InfoCell = ({ label, children, accent }) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 5, padding: "2px 0" }}>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 11, letterSpacing: "0.14em", color: RX, opacity: 0.85 }}>{label}</span>
      <span style={{ fontFamily: "var(--font-body)", fontSize: pc ? 16 : 15, fontWeight: accent ? 700 : 500, color: accent ? RX : "var(--ink-900)", lineHeight: 1.4 }}>{children}</span>
    </div>
  );

  // 본문 섹션 (아이콘 + 청색 라벨 + 내용). 흰 박스 없이 얇은 선으로 구분.
  const Section = ({ icon, label, note, children, tight }) => (
    <div style={{ padding: tight ? "16px 0" : "18px 0" }}>
      <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 10 }}>
        <Icon name={icon} size={17} color={RX} stroke={1.7} />
        <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14, letterSpacing: "0.04em", color: RX }}>{label}</span>
        {note && <span style={{ marginLeft: "auto", fontFamily: "var(--font-body)", fontSize: 11.5, color: "var(--text-muted)", letterSpacing: "0.06em" }}>{note}</span>}
      </div>
      {children}
    </div>
  );

  const hr = <div style={{ borderTop: "1px solid rgba(62,99,166,0.22)" }} />;
  const BORD = "rgba(62,99,166,0.38)";  // 연한 파란 테두리
  const LBL = "rgba(62,99,166,0.06)";   // 라벨칸 배경
  const TL = ({ children }) => (<span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: pc ? 14 : 12.5, color: RX, letterSpacing: "0.02em" }}>{children}</span>);
  const TV = ({ children, accent }) => (<span style={{ fontFamily: "var(--font-body)", fontSize: pc ? 15 : 13.5, fontWeight: accent ? 700 : 400, color: accent ? RX : "var(--ink-900)" }}>{children}</span>);

  // 처방전 각 구획이 위에서부터 순차적으로 차분히 나타나는 연출 (문진지와 동일 감성)
  let _rt = 400, _gap = 1200;
  const Reveal = ({ children }) => {
    const delay = _rt; _rt += _gap; _gap += 700; // 섹션마다 간격을 키워 뒤로 갈수록 더 천천히 등장
    return <div style={{ animation: skipAnim ? "none" : "rxrise 1800ms cubic-bezier(0.22,1,0.32,1) both", animationDelay: skipAnim ? undefined : `${delay}ms` }}>{children}</div>;
  };

  // 타이핑 연출 — 본문 문장이 한 글자씩 순차적으로 나타난다. 앞 문장이 끝난 뒤 다음 문장 시작.
  const CPS = 28;
  let _tt = 0;
  const typeStart = () => 0;
  // 타이핑 제거 — 텍스트는 섹션(Reveal)과 함께 통째로 페이드인.
  const Typewriter = ({ text = "", style }) => <span style={style}>{text}</span>;

  const sheet = (
    <div style={{ position: "relative", width: sheetW, maxWidth: "100%", background: "#FCFBF6", border: `1.5px solid ${BORD}`, borderRadius: 24, boxShadow: "0 12px 40px rgba(70,58,45,0.12)", boxSizing: "border-box", animation: "rxstep 950ms ease-out" }}>
      <div style={{ position: "absolute", inset: 8, border: `1px solid ${BORD}`, borderRadius: 18, pointerEvents: "none" }} />

      <div style={{ position: "relative", padding: `${pc ? 42 : 28}px ${padX}px ${pc ? 34 : 26}px` }}>
        {/* 마스트헤드 — 차분한 문서 헤더 */}
        <Reveal><div style={{ textAlign: "center", marginBottom: pc ? 14 : 11 }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: pc ? 13 : 12, color: "var(--text-muted)", letterSpacing: "0.14em", marginBottom: pc ? 8 : 6 }}>오늘의 말씀 처방전</div>
          <div style={{ fontFamily: "var(--font-title)", fontWeight: 500, fontSize: pc ? 31 : 24, color: RX, letterSpacing: "0.06em", paddingLeft: "0.06em" }}>마음약국 처방전</div>
          <div style={{ borderTop: `1px solid ${BORD}`, width: "100%", marginTop: pc ? 16 : 12 }} />
        </div></Reveal>

        {/* 접수 정보 표 */}
        <Reveal><div style={{ border: `1px solid ${BORD}`, borderRadius: 2, overflow: "hidden", margin: `${pc ? 4 : 2}px 0 0` }}>
          {[["처방일", "2026.08.01", "증상", rx.symptom], ["마음 강도", rx.intensity, "처방 단어", rx.word]].map((row, ri) => (
            <div key={ri} style={{ display: "grid", gridTemplateColumns: pc ? "108px 1fr 108px 1fr" : "66px 1fr 70px 1fr", borderTop: ri ? `1px solid ${BORD}` : "none" }}>
              <div style={{ padding: pc ? "14px 16px" : "10px 10px", background: LBL, borderRight: `1px solid ${BORD}` }}><TL>{row[0]}</TL></div>
              <div style={{ padding: pc ? "14px 16px" : "10px 10px", borderRight: `1px solid ${BORD}`, display: "flex", alignItems: "center" }}><TV>{row[1]}</TV></div>
              <div style={{ padding: pc ? "14px 16px" : "10px 10px", background: LBL, borderRight: `1px solid ${BORD}` }}><TL>{row[2]}</TL></div>
              <div style={{ padding: pc ? "14px 16px" : "10px 10px", display: "flex", alignItems: "center" }}><TV accent={ri === 1}>{row[3]}</TV></div>
            </div>
          ))}
        </div></Reveal>

        {/* 처방 말씀 */}
        <Reveal><div style={{ marginTop: pc ? 26 : 20 }}>
          <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: pc ? 15 : 13.5, color: RX, marginBottom: pc ? 6 : 4 }}>처방 말씀</div>
          <div style={{ position: "relative", padding: `${pc ? 12 : 10}px ${pc ? 30 : 20}px ${pc ? 6 : 4}px`, textAlign: "center" }}>
            <span style={{ position: "absolute", left: 0, top: 2, fontFamily: "var(--font-verse)", fontSize: pc ? 34 : 26, color: BORD, lineHeight: 1 }}>“</span>
            <p style={{ fontFamily: "var(--font-verse)", fontSize: pc ? 20 : 16, lineHeight: 1.75, color: "var(--ink-900)", margin: "0 auto", maxWidth: pc ? 640 : 440, textWrap: "balance" }}>{rx.verse}</p>
            <span style={{ position: "absolute", right: 0, bottom: pc ? 2 : 0, fontFamily: "var(--font-verse)", fontSize: pc ? 34 : 26, color: BORD, lineHeight: 1 }}>”</span>
            <div style={{ fontFamily: "var(--font-body)", fontSize: pc ? 13.5 : 12.5, color: RX, letterSpacing: "0.02em", marginTop: pc ? 12 : 9 }}>{rx.reference}</div>
          </div>
          <div style={{ borderTop: `1px solid ${BORD}`, marginTop: pc ? 16 : 12 }} />
        </div></Reveal>

        {/* 마음 소견 */}
        <Reveal><div style={{ marginTop: pc ? 22 : 18 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 12 }}>
            <Icon name="clipboard-list" size={pc ? 19 : 17} color={RX} stroke={1.7} />
            <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: pc ? 15.5 : 14, color: RX }}>마음 소견</span>
          </div>
          {rx.state && <p style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: pc ? 15 : 14, lineHeight: 1.65, color: RX, margin: "0 0 12px" }}>{rx.state}</p>}
          <p style={{ fontFamily: "var(--font-body)", fontSize: pc ? 15 : 14, lineHeight: pc ? 1.95 : 1.85, color: "var(--text-body)", margin: 0, textWrap: "pretty" }}>{rx.opinion}</p>
          <div style={{ borderTop: `1px dotted ${BORD}`, margin: `${pc ? 24 : 18}px 0 0` }} />
        </div></Reveal>

        {/* 복용법 · 주의사항 · 작은 실천 — 기존 80종 데이터 바인딩 유지 */}
        {[["pill", "복용법", rx.dose], ["triangle-alert", "주의사항", rx.caution], ["sprout", "작은 실천", rx.practice]].map((sec, si) => (sec[2] || (si === 1 && rx.cognitive)) ? (
          <Reveal key={sec[1]}><div style={{ marginTop: pc ? 20 : 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 9, marginBottom: 10 }}>
              <Icon name={sec[0]} size={pc ? 18 : 16} color={RX} stroke={1.7} />
              <span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: pc ? 15 : 13.5, color: RX }}>{sec[1]}</span>
            </div>
            {sec[2] && <p style={{ fontFamily: "var(--font-body)", fontSize: pc ? 14.5 : 13.5, lineHeight: 1.85, color: "var(--text-body)", margin: 0, textWrap: "pretty" }}>{sec[2]}</p>}
            {si === 1 && rx.cognitive && <p style={{ fontFamily: "var(--font-body)", fontSize: pc ? 13.5 : 13, lineHeight: 1.75, color: "var(--text-muted)", margin: "8px 0 0" }}><span style={{ color: RX, fontWeight: 600 }}>이런 생각에 주의 · </span>{rx.cognitive}</p>}
            <div style={{ borderTop: `1px dotted ${BORD}`, margin: `${pc ? 20 : 16}px 0 0` }} />
          </div></Reveal>
        ) : null)}

        {/* 마무리 */}
        <Reveal><div style={{ textAlign: "center", padding: `${pc ? 22 : 16}px 0 2px` }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: pc ? 14.5 : 13, color: "var(--text-muted)", margin: 0, lineHeight: 1.9 }}>
            오늘 당신 곁에 머무를 단어, <span style={{ fontFamily: "var(--font-title)", fontWeight: 700, color: RX, fontSize: pc ? 17 : 15 }}>{rx.word}</span>.<br />
            당신의 하루가 말씀으로 회복되길 바랍니다. <span style={{ color: "var(--coral-300)" }}>♡</span>
          </p>
        </div></Reveal>
      </div>
    </div>
  );

  // 하단 액션 — 레퍼런스: 파란 그라데이션 공유 카드(히어로) + 저장/다시 소프트 카드 2단
  const shareCard = (
    <button onClick={onDecorate} style={{ position: "relative", width: "100%", display: "flex", alignItems: "center", gap: 14, padding: pc ? "18px 22px" : "15px 16px", borderRadius: 18, border: "none", cursor: "pointer", textAlign: "left", background: "linear-gradient(135deg, var(--rx-blue-300) 0%, var(--rx-blue-500) 100%)", boxShadow: "0 10px 24px rgba(62,99,166,0.26)", color: "#F7FAFF" }}>
      <span style={{ position: "relative", flex: "0 0 auto", width: 44, height: 44, borderRadius: 13, background: "rgba(255,255,255,0.92)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Icon name="image" size={21} color="var(--rx-blue-500)" stroke={1.6} />
        <span style={{ position: "absolute", right: -5, bottom: -5, width: 18, height: 18, borderRadius: "50%", background: "var(--coral-300)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Icon name="heart" size={10} color="#FFF9F4" stroke={2.2} />
        </span>
      </span>
      <span style={{ flex: 1, textAlign: "center", fontFamily: "var(--font-title)", fontWeight: 700, fontSize: pc ? 20 : 17 }}>스티커 붙여 공유하기</span>
      <Icon name="chevron-right" size={20} color="#F7FAFF" stroke={2} />
    </button>
  );
  const softCard = (icon, title, sub, onClick) => (
    <button onClick={onClick} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: pc ? "16px 15px" : "14px 13px", borderRadius: 16, border: "1px solid var(--border-card)", background: "#fff", boxShadow: "0 4px 14px rgba(70,58,45,0.08)", cursor: "pointer", width: "100%" }}>
      <Icon name={icon} size={18} color="var(--rx-ink)" stroke={1.8} />
      <span style={{ fontFamily: "var(--font-title)", fontWeight: 600, fontSize: pc ? 15.5 : 14.5, color: "var(--rx-ink)" }}>{title}</span>
    </button>
  );
  const actions = (
    <div style={{ width: sheetW, maxWidth: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", gap: 12, animation: "rxstep 1050ms ease-out 260ms both" }}>
      {shareCard}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        {softCard("download", "이미지로 저장", "처방전을 저장해보세요", undefined)}
        {softCard("rotate-cw", "다시 처방받기", "처음부터 다시 시작해요", onAgain)}
      </div>
      <button onClick={() => {}} style={{ marginTop: 2, background: "none", border: "none", cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--rx-ink)", display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6, padding: "8px 0", alignSelf: "center" }}>
        <Icon name="book-open" size={16} color="var(--rx-ink)" stroke={1.7} /> 말씀광장에서 ‘{rx.word}’ 열어보기
      </button>
    </div>
  );

  return (
    <div onDoubleClick={() => setSkipAnim(true)} style={{ minHeight: "100vh", width: "100%", boxSizing: "border-box", background: "radial-gradient(120% 60% at 50% 0%, #FBF7F0 0%, var(--bg-page) 55%, #EDE7DE 100%)", display: "flex", flexDirection: "column", alignItems: "center", padding: pc ? "34px 28px 56px" : "22px 16px 44px", overflowX: "hidden" }}>
      <style>{`@keyframes rxstep{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes rxrise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}`}</style>
      <div style={{ fontFamily: "var(--font-body)", fontSize: 12, letterSpacing: "0.22em", color: m.ink, marginBottom: 18, animation: "rxstep 700ms ease-out" }}>오늘의 말씀 처방전</div>
      {sheet}
      <div style={{ height: 20 }} />
      {actions}
    </div>
  );
}
window.ResultScreen = ResultScreen;
