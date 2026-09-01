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

  // loading → loadingExit → envelope(봉투에서 종이가 올라오는 장면) → envExit →
  // shareGuide(공유 안내) → shareGuideExit → reveal(종이만 남아 읽는 장면).
  // loading은 3초, envelope는 4초, shareGuide는 문구가 두 줄이라 5초 머무르고, 그 사이 전환은
  // 클릭으로 건너뛸 수 없이 느린 페이드로만 이어진다 — 몰입을 위해 의도적으로 기다리게
  // 하는 구간이라 스킵 인터랙션을 두지 않는다. envelope↔shareGuide는 같은 배경 사진 위에서
  // 텍스트만 바뀌는 것이라 별도 컴포넌트로 분리하지 않고 이 컴포넌트가 한 블록으로 그린다
  // (아래 두 번째 effect에서 phase 전환을 전부 체이닝한다).
  const [phase, setPhase] = React.useState("loading");
  const [msg, setMsg] = React.useState(0);
  const [skipAnim, setSkipAnim] = React.useState(false); // 더블클릭하면 처방전 섹션들만 즉시 표시
  React.useEffect(() => { setSkipAnim(false); }, [mood]);
  React.useEffect(() => {
    setPhase("loading"); setMsg(0);
    const t1 = setTimeout(() => setMsg(1), 1500);
    const t2 = setTimeout(() => setPhase("loadingExit"), 3000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [mood]);
  // 화면 전환 체이닝: 각 phase가 끝나면 다음 phase로. "본 화면"은 loading 3초/envelope 4초/
  // shareGuide 5초, 전환(Exit) 화면은 1.5~1.8초의 느린 페이드아웃.
  React.useEffect(() => {
    let t;
    if (phase === "loadingExit") t = setTimeout(() => setPhase("envelope"), 1500);
    else if (phase === "envelope") t = setTimeout(() => setPhase("envExit"), 4000);
    else if (phase === "envExit") t = setTimeout(() => setPhase("shareGuide"), 1800);
    else if (phase === "shareGuide") t = setTimeout(() => setPhase("shareGuideExit"), 5000);
    else if (phase === "shareGuideExit") t = setTimeout(() => setPhase("reveal"), 1500);
    return () => clearTimeout(t);
  }, [phase]);

  // 말씀 처방전이 등장하는 시점부터 3번 배경음악으로 크로스페이드
  React.useEffect(() => { if (window.__bgm && (phase === "envelope" || phase === "shareGuide" || phase === "reveal")) window.__bgm.play(3); }, [phase]);

  const messages = ["말씀 처방전을 준비하고 있습니다", "당신에게 필요한 말씀을 정리하고 있습니다"];

  // ── 로딩 화면 ── 클릭으로 건너뛸 수 없다(의도적으로 기다리게 하는 구간).
  if (phase === "loading" || phase === "loadingExit") {
    return (
      <div style={{ minHeight: "100vh", width: "100%", boxSizing: "border-box", background: "radial-gradient(120% 70% at 50% 35%, #FBF7F0 0%, var(--bg-page) 62%, #EDE7DE 100%)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 26, padding: 32, opacity: phase === "loadingExit" ? 0 : 1, transition: "opacity 1500ms ease" }}>
        <style>{`@keyframes rxdot2{0%,80%,100%{opacity:.25;transform:translateY(0)}40%{opacity:1;transform:translateY(-4px)}}@keyframes rxpulse{0%,100%{transform:scale(1);opacity:.9}50%{transform:scale(1.06);opacity:1}}@keyframes rxstep{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}`}</style>
        <div style={{ width: 68, height: 68, borderRadius: "50%", background: m.fill, display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 10px 26px rgba(120,92,64,0.18)", animation: "rxpulse 2.4s ease-in-out infinite" }}>
          <Icon name={m.icon} size={30} color={m.ink} stroke={1.5} />
        </div>
        <div key={msg} style={{ fontFamily: "var(--font-title)", fontWeight: 600, fontSize: pc ? 22 : 18, color: "var(--ink-900)", textAlign: "center", animation: "rxstep 800ms ease-out", letterSpacing: "-0.01em" }}>
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

  // ── 봉투 → 공유 안내 (같은 배경 사진을 계속 유지, 텍스트만 크로스페이드) ── 클릭 스킵 없음.
  // envelope/envExit/shareGuide/shareGuideExit 네 phase를 이 블록 하나가 담당한다. 예전엔
  // envelope와 shareGuide가 각자 <img>를 새로 마운트해서, 같은 배경 사진인데도 한 번 꺼졌다
  // 다시 켜지는 것처럼 보였다 — 배경 <img>는 이 네 phase 동안 딱 한 번만 마운트되어 계속
  // 남아있고, 텍스트 두 블록(봉투 문구 / 공유 안내 문구)만 각자 opacity로 크로스페이드한다.
  // 전체 스테이지 자체는 envelope 진입 시 한 번만 페이드인하고 shareGuideExit에서 한 번만
  // 페이드아웃한다 — 그 사이(envelope↔shareGuide 전환)엔 배경이 전혀 움직이지 않는다.
  if (phase === "envelope" || phase === "envExit" || phase === "shareGuide" || phase === "shareGuideExit") {
    const showEnvText = phase === "envelope";
    const showGuideText = phase === "shareGuide";
    const stageOut = phase === "shareGuideExit";
    const shine = { color: "#A97C3F", animation: "shareGuideBlink 3.6s ease-in-out infinite" };
    return (
      <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", background: "#F3E7D6", display: "flex", alignItems: "center", justifyContent: "center", opacity: stageOut ? 0 : 1, transition: "opacity 1500ms ease", animation: "rxfade 1500ms ease-out" }}>
        <style>{`@keyframes rxfade{from{opacity:0}to{opacity:1}}@keyframes rximg{from{opacity:0}to{opacity:1}}@keyframes rxup{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}@keyframes shareGuideBlink{0%,100%{opacity:1}50%{opacity:0.5}}`}</style>
        {/* 완성 이미지 1장(봉투+편지지, 브랜딩 텍스트는 이미지에 포함). 이미지는 딱 한 번 페이드인 →
            봉투 문구가 순차 등장 → (배경 그대로) 봉투 문구 페이드아웃 + 공유 안내 문구 페이드인. */}
        <div style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <img src="assets-web/envelope-scene.png" alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", display: "block", opacity: 0, animation: "rximg 1900ms ease-out both" }} />
          <div style={{ position: "absolute", left: "50%", top: "9%", transform: "translateX(-50%)", width: "86%", maxWidth: 720, textAlign: "center", pointerEvents: "none" }}>
            {/* 라벨 — 배경처럼 이 네 phase 내내 한 번만 마운트되어 고정. envelope/shareGuide가
                똑같이 "말씀 처방전"을 쓰길래 따로 두면 여기도 같이 깜빡였다. */}
            <div style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "clamp(14px,1.35vw,18px)", color: "#9B7B5E", letterSpacing: "0.2em", opacity: 0, animation: "rxup 700ms 100ms cubic-bezier(0.22,1,0.32,1) both" }}>말씀 처방전</div>
            {/* 라벨 아래 콘텐츠 영역 — 봉투 본문(제목/부제/성구)이 실제 높이를 만들고,
                공유 안내 문구는 그 위에 absolute로 겹쳐서 같은 자리에서 크로스페이드한다. */}
            <div style={{ position: "relative" }}>
              <div style={{ opacity: showEnvText ? 1 : 0, transition: "opacity 900ms ease" }}>
                <div style={{ fontFamily: "var(--font-title)", fontWeight: 600, fontSize: "clamp(26px,3.1vw,42px)", color: "#5B4A3C", letterSpacing: "0.02em", marginTop: "0.5em", opacity: 0, animation: "rxup 800ms 350ms cubic-bezier(0.22,1,0.32,1) both" }}>당신을 위한 처방전이 준비되었어요</div>
                <div style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "clamp(14px,1.5vw,20px)", lineHeight: 1.7, color: "#8C7565", marginTop: "0.55em", opacity: 0, animation: "rxup 800ms 600ms cubic-bezier(0.22,1,0.32,1) both" }}>지금 하나님께서 당신의 마음에 맞는 말씀을 꺼내고 있어요.</div>
                <div style={{ marginTop: "1.7em", opacity: 0, animation: "rxup 800ms 850ms cubic-bezier(0.22,1,0.32,1) both" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.7em" }}>
                    <img src="assets-web/leaf-purple.png" alt="" style={{ width: "clamp(26px,2.4vw,36px)", height: "auto", transform: "scaleX(-1)" }} />
                    <span style={{ fontFamily: "'Noto Serif KR', serif", fontWeight: 500, fontSize: "clamp(16px,1.55vw,22px)", letterSpacing: "-0.02em", color: "#5B4A3C" }}>내가 너와 함께 함이라</span>
                    <img src="assets-web/leaf-purple.png" alt="" style={{ width: "clamp(26px,2.4vw,36px)", height: "auto" }} />
                  </div>
                  <div style={{ fontFamily: "var(--font-body)", fontWeight: 400, fontSize: "clamp(13px,1.2vw,17px)", color: "#8C7565", marginTop: "0.5em" }}>이사야 41:10</div>
                </div>
              </div>
              <div style={{ position: "absolute", inset: 0, opacity: showGuideText ? 1 : 0, transition: "opacity 900ms ease" }}>
                <div style={{ fontFamily: "var(--font-title)", fontWeight: 600, fontSize: "clamp(20px,2.6vw,30px)", lineHeight: 1.55, letterSpacing: "-0.01em", color: "#5B4A3C", marginTop: "0.5em", textWrap: "balance" }}>
                  처방전의 <span style={shine}>링크를 공유하면</span><br /><span style={shine}>스티커로 응원의 메시지를</span><br />받을 수 있어요.
                </div>
              </div>
            </div>
          </div>
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

  const hr = <div style={{ borderTop: "1px solid rgba(120,104,78,0.18)" }} />;
  const BORD = "rgba(120,104,78,0.18)";  // 웜 종이 해어라인
  const LBL = "transparent";
  const TL = ({ children }) => (<span style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: pc ? 13 : 12, color: "#5a7099", letterSpacing: "0.04em", paddingRight: 8, whiteSpace: "nowrap" }}>{children}</span>);
  const TV = ({ children, accent }) => (<span style={{ fontFamily: "var(--font-body)", fontSize: pc ? 15 : 13.5, fontWeight: accent ? 700 : 400, color: accent ? RX : "var(--ink-900)" }}>{children}</span>);

  // 처방전 각 구획이 위에서부터 순차적으로 차분히 나타나는 연출 (문진지와 동일 감성)
  let _rt = 260, _gap = 780;
  const Reveal = ({ children }) => {
    const delay = _rt; _rt += _gap; _gap += 420; // 섹션마다 간격을 키워 뒤로 갈수록 더 천천히 등장
    return <div style={{ animation: skipAnim ? "none" : "rxrise 1150ms cubic-bezier(0.22,1,0.32,1) both", animationDelay: skipAnim ? undefined : `${delay}ms` }}>{children}</div>;
  };

  // 타이핑 연출 — 본문 문장이 한 글자씩 순차적으로 나타난다. 앞 문장이 끝난 뒤 다음 문장 시작.
  const CPS = 28;
  let _tt = 0;
  const typeStart = () => 0;
  // 타이핑 제거 — 텍스트는 섹션(Reveal)과 함께 통째로 페이드인.
  const Typewriter = ({ text = "", style }) => <span style={style}>{text}</span>;

  const sheet = (
    <div style={{ position: "relative", width: sheetW, maxWidth: "100%", background: "linear-gradient(174deg,#FDFBF5 0%,#FAF6EC 100%)", border: "1px solid rgba(120,104,78,0.16)", borderRadius: 8, boxShadow: "0 1px 2px rgba(90,74,52,0.06), 0 18px 44px rgba(90,74,52,0.14)", boxSizing: "border-box", animation: "rxstep 950ms ease-out" }}>
      <div style={{ position: "absolute", inset: 10, border: "1px solid rgba(120,104,78,0.14)", borderRadius: 4, pointerEvents: "none" }} />

      <div style={{ position: "relative", padding: `${pc ? 42 : 28}px ${padX}px ${pc ? 34 : 26}px` }}>
        {/* 마스트헤드 — 차분한 문서 헤더 */}
        <Reveal><div style={{ textAlign: "center", marginBottom: pc ? 14 : 11 }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: pc ? 13 : 12, color: "var(--text-muted)", letterSpacing: "0.14em", marginBottom: pc ? 8 : 6 }}>오늘의 말씀 처방전</div>
          <div style={{ fontFamily: "var(--font-title)", fontWeight: 500, fontSize: pc ? 27 : 22, color: "#3f5a86", letterSpacing: "0.12em", paddingLeft: "0.12em" }}>마음약국 처방전</div>
          <div style={{ borderTop: `1px solid ${BORD}`, width: "100%", marginTop: pc ? 16 : 12 }} />
        </div></Reveal>

        {/* 접수 정보 표 */}
        <Reveal><div style={{ margin: `${pc ? 4 : 2}px 0 0` }}>
          {[["처방일", "2026.08.01", "증상", rx.symptom], ["마음 강도", rx.intensity, "처방 단어", rx.word]].map((row, ri) => (
            <div key={ri} style={{ display: "grid", gridTemplateColumns: pc ? "auto 1fr auto 1fr" : "auto 1fr", columnGap: pc ? 14 : 12, rowGap: pc ? 0 : 7, alignItems: "baseline", padding: `${pc ? 11 : 9}px 2px`, borderTop: ri ? `1px solid ${BORD}` : "none" }}>
              <TL>{row[0]}</TL><TV>{row[1]}</TV>
              <TL>{row[2]}</TL><TV accent={ri === 1}>{row[3]}</TV>
            </div>
          ))}
        </div></Reveal>

        {/* 처방 말씀 */}
        <Reveal><div style={{ marginTop: pc ? 26 : 20 }}>
          <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: pc ? 12.5 : 11.5, color: "#5a7099", letterSpacing: "0.14em", textAlign: "center", marginBottom: pc ? 12 : 9 }}>처방 말씀</div>
          <div style={{ position: "relative", padding: `${pc ? 8 : 6}px ${pc ? 30 : 20}px ${pc ? 6 : 4}px`, textAlign: "center" }}>
            <span style={{ position: "absolute", left: 0, top: 2, fontFamily: "var(--font-verse)", fontSize: pc ? 24 : 19, color: "rgba(120,104,78,0.28)", lineHeight: 1 }}>“</span>
            <p style={{ fontFamily: "var(--font-verse)", fontSize: pc ? 20 : 16, lineHeight: 1.75, color: "var(--ink-900)", margin: "0 auto", maxWidth: pc ? 640 : 440, textWrap: "balance" }}>{rx.verse}</p>
            <span style={{ position: "absolute", right: 0, bottom: pc ? 2 : 0, fontFamily: "var(--font-verse)", fontSize: pc ? 24 : 19, color: "rgba(120,104,78,0.28)", lineHeight: 1 }}>”</span>
            <div style={{ fontFamily: "var(--font-body)", fontSize: pc ? 13 : 12, color: "#5a7099", letterSpacing: "0.04em", marginTop: pc ? 14 : 10 }}>{rx.reference}</div>
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
  const paperBtn = (icon, label, onClick, w, accent) => (
    <button onClick={() => { window.__sfx && window.__sfx.play("assets/click_tight.mp3", 1.3); onClick && onClick(); }} style={{ width: pc ? w : "auto", flex: pc ? "0 0 auto" : 1, height: 48, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "0 16px", borderRadius: 14, border: accent ? "1px solid rgba(126,116,190,0.55)" : "1px solid rgba(171,136,96,0.22)", cursor: "pointer", background: accent ? "linear-gradient(160deg,#b3aaea 0%,#8f86c9 60%,#847ac2 100%)" : "#F7EBDD", boxShadow: accent ? "0 3px 10px rgba(120,108,200,0.22), inset 0 2px 6px rgba(255,255,255,0.55), inset 0 -3px 8px rgba(90,78,150,0.28)" : "0 5px 14px rgba(97,68,42,0.09)", color: accent ? "#fff" : "#6A533F", animation: accent ? "rxGlow 2.6s ease-in-out infinite" : undefined }}>
      <Icon name={icon} size={18} color={accent ? "#fff" : "#6A533F"} stroke={1.7} />
      <span style={{ fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", fontWeight: accent ? 600 : 500, fontSize: 16, color: accent ? "#fff" : "#6A533F", letterSpacing: "0.01em" }}>{label}</span>
    </button>
  );
  const actions = (
    <div style={{ width: "100%", maxWidth: "100%", boxSizing: "border-box", display: "flex", gap: 14, justifyContent: "center", animation: "rxstep 1050ms ease-out 260ms both" }}>
      {paperBtn("rotate-cw", "다시하기", onAgain, 158)}
      {paperBtn("share-2", "스티커 붙여 공유하기", onDecorate, 235, true)}
    </div>
  );

  return (
    <div onDoubleClick={() => setSkipAnim(true)} style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", boxSizing: "border-box" }}>
      <div aria-hidden="true" style={{ position: "fixed", inset: 0, backgroundColor: "#F3E8DA", backgroundImage: "url(assets-web/decorate-bg.png)", backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100vh", overflowY: "auto", overflowX: "hidden", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", padding: pc ? "34px 28px 28px" : "22px 16px 24px" }}>
      <style>{`@keyframes rxstep{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes rxrise{from{opacity:0;transform:translateY(14px)}to{opacity:1;transform:translateY(0)}}@keyframes rxGlow{0%,100%{box-shadow:0 3px 10px rgba(120,108,200,0.20),inset 0 2px 6px rgba(255,255,255,0.5),inset 0 -3px 8px rgba(90,78,150,0.26)}50%{box-shadow:0 4px 12px rgba(120,108,200,0.26),inset 0 2px 10px rgba(255,255,255,0.85),inset 0 -3px 8px rgba(90,78,150,0.3)}}`}</style>
      {sheet}
      <div style={{ height: 28, flex: "0 0 auto" }} />
      {actions}
      <p style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "#8a6f4a", opacity: 0.55, textAlign: "center", margin: "14px 0 0", animation: "rxstep 1050ms ease-out 360ms both" }}><span style={{ color: "#E0917E", opacity: 1.4 }}>♥</span> 이 말씀은 당신을 위해 준비되었어요 <span style={{ color: "#E0917E", opacity: 1.4 }}>♥</span></p>
      </div>
    </div>
  );
}
window.ResultScreen = ResultScreen;
