// MainScreen — 메인 화면 (PC-first 4×2). 봉투 PNG 에셋 사용, 증상명은 HTML 텍스트로 앞면 위에.
// 클릭 시 전환 연출: 선택한 봉투가 화면 중앙으로 이동+확대(selected-envelope-focus)하고,
// 기존 리스트/제목은 아래로 내려가며 사라진(list-exit) 뒤 onNext로 문진 화면으로 넘어간다.
function MainScreen({ selected, onSelect, onNext }) {
  const ENVELOPES = [
    { key: "anxious", img: "assets-web/env-anxious.webp", label: "불안해요" },
    { key: "broken",  img: "assets-web/env-broken.webp",  label: "마음이\n무너졌어요" },
    { key: "compare", img: "assets-web/env-compare.webp", label: "비교돼요" },
    { key: "waiting", img: "assets-web/env-waiting.webp", label: "기다리기\n힘들어요" },
    { key: "forgive", img: "assets-web/env-forgive.webp", label: "용서가\n안 돼요" },
    { key: "distant", img: "assets-web/env-distant.webp", label: "하나님이\n멀게 느껴져요" },
    { key: "calling", img: "assets-web/env-calling.webp", label: "책임이\n버거워요" },
    { key: "thanks",  img: "assets-web/env-thanks.webp",  label: "감사가\n사라졌어요" },
  ];
  const ENV_W = 168; // 봉투 표시 폭 (원본 271×315 비율 유지)

  const [perRow, setPerRow] = React.useState(
    typeof window !== "undefined" && window.matchMedia("(max-width: 640px)").matches ? 2 : 4
  );
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
    window.__sfx && window.__sfx.play("assets/start_sound_2.mp3"); // 마음 카드 선택 전용 사운드 — 체크/다음 버튼 효과음과는 별개
    const rect = ev.currentTarget.getBoundingClientRect();
    onSelect(e.key);
    setFly({ e, rect });
    setExiting(true);                                   // 리스트/제목 퇴장
    requestAnimationFrame(() => requestAnimationFrame(() => setFlyActive(true))); // 다음 프레임에 중앙 이동
    setTimeout(() => onNext(e.key), 1600);              // 문진 화면으로 전환 (중앙 이동 완료 후)
  };

  const rows = [];
  for (let i = 0; i < ENVELOPES.length; i += perRow) rows.push(ENVELOPES.slice(i, i + perRow));

  const Envelope = ({ e }) => {
    const isSel = selected === e.key;
    const hidden = fly && fly.e.key === e.key; // 나는 복제본이 대신 날아가므로 원본 숨김
    return (
      <button
        onClick={(ev) => handlePick(e, ev)}
        style={{
          position: "relative", width: "100%", maxWidth: ENV_W, border: "none", background: "transparent",
          padding: 0, cursor: "pointer", zIndex: 1,
          transform: isSel ? "translateY(-10px)" : "translateY(0)",
          transition: "transform 380ms cubic-bezier(0.16,1,0.3,1)",
          opacity: hidden ? 0 : 1,
          filter: isSel ? "drop-shadow(0 16px 22px rgba(120,92,64,0.22))" : "drop-shadow(0 7px 12px rgba(120,92,64,0.16))",
        }}
        onMouseEnter={(ev) => { if (!isSel && !locked.current) ev.currentTarget.style.transform = "translateY(-4px)"; }}
        onMouseLeave={(ev) => { if (!isSel) ev.currentTarget.style.transform = "translateY(0)"; }}
      >
        <img src={e.img} alt={e.label.replace("\n", " ")} draggable="false" style={{ width: "100%", height: "auto", display: "block", userSelect: "none" }} />
        <span
          style={{
            position: "absolute", left: 0, right: 0, top: "52%", bottom: "6%",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-title)", fontWeight: 600,
            fontSize: 19, lineHeight: 1.3,
            color: "var(--ink-900)", textAlign: "center", whiteSpace: "pre-line",
            letterSpacing: "-0.01em", pointerEvents: "none",
          }}
        >
          {e.label}
        </span>
      </button>
    );
  };

  // 날아가는 복제본의 중앙 이동 변환 계산
  let flyTransform = "none";
  if (fly && flyActive && typeof window !== "undefined") {
    const cx = window.innerWidth / 2, cy = window.innerHeight / 2;
    const rc = fly.rect;
    const dx = cx - (rc.left + rc.width / 2);
    const dy = cy - (rc.top + rc.height / 2);
    flyTransform = `translate(${dx}px, ${dy}px) scale(1.5)`;
  }

  return (
    <div style={{ position: "relative", minHeight: "100vh", ...(perRow === 4 ? { maxHeight: "100vh", overflow: "hidden" } : {}), boxSizing: "border-box", background: "url('assets-web/leaf-tl-soft.png') top left / min(52vw,460px) auto no-repeat, url('assets-web/leaf-br-soft.png') bottom right / min(52vw,460px) auto no-repeat, #F2EBE6", padding: "clamp(20px,3vh,44px) 32px clamp(24px,3.4vh,56px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: perRow === 4 ? "center" : "flex-start" }}>

      {/* 퇴장 그룹: 제목 + 봉투 리스트 + 안내문 (list-exit 시 아래로 내려가며 fade out) */}
      <div style={{
        width: "100%", display: "flex", flexDirection: "column", alignItems: "center",
        transform: exiting ? "translateY(64px)" : "translateY(0)",
        opacity: exiting ? 0 : 1,
        transition: "transform 900ms cubic-bezier(0.37,0,0.28,1), opacity 850ms ease-out",
      }}>
        {/* 제목 영역 */}
        <div style={{ textAlign: "center", marginBottom: "clamp(16px,2.8vh,40px)", position: "relative", zIndex: 1 }}>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13, letterSpacing: "0.24em", color: "var(--mood-broken-ink)", marginBottom: "clamp(6px,1.3vh,16px)" }}>
            말씀 처방전
          </div>
          <h1 style={{ fontFamily: "var(--font-title)", fontWeight: 600, fontSize: 34, lineHeight: 1.3, color: "var(--ink-900)", margin: "0 0 clamp(7px,1.1vh,14px)", letterSpacing: "-0.01em" }}>
            오늘 마음은 어떤가요?
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.65, color: "var(--text-muted)", margin: 0 }}>
            내 마음 카드를 하나 고르면, 그 마음에 맞는 말씀 약봉투가 발급됩니다.
          </p>
        </div>

        {/* 나무 바 2줄, 각 줄에 봉투 4개 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(14px,2.4vh,30px)", width: "100%", position: "relative", zIndex: 1, maxWidth: perRow === 2 ? ENV_W * 2 + 14 + 100 : ENV_W * 4 + 3 * 16 + 100 }}>
          {rows.map((row, i) => (
            <div key={i} style={{ position: "relative", paddingTop: 22 }}>
              <img src="assets-web/wood-bar.webp" alt="" draggable="false" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "auto", zIndex: 0, userSelect: "none", filter: "drop-shadow(0 10px 12px rgba(120,92,64,0.22))" }} />
              <div style={{ display: "flex", justifyContent: "center", gap: perRow === 2 ? 14 : 16, position: "relative", zIndex: 1 }}>
                {row.map((e) => <Envelope key={e.key} e={e} />)}
              </div>
            </div>
          ))}
        </div>

        {/* 하단 안내문 */}
        <div style={{ textAlign: "center", marginTop: "clamp(18px,3vh,48px)", position: "relative", zIndex: 1 }}>
          <div style={{ fontFamily: "var(--font-title)", fontWeight: 600, fontSize: 19, color: "var(--ink-900)", marginBottom: 8 }}>
            마음 카드를 하나 골라주세요
          </div>
          <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--text-muted)" }}>
            선택하면 카드가 살짝 올라오고, 말씀 처방전이 발급돼요.
          </div>
        </div>
      </div>

      {/* 선택한 봉투 복제본 — 중앙으로 이동 + 확대 (selected-envelope-focus) */}
      {fly && (
        <div style={{
          position: "fixed", zIndex: 999, pointerEvents: "none",
          left: fly.rect.left, top: fly.rect.top, width: fly.rect.width,
          transform: flyTransform, transformOrigin: "center center",
          transition: "transform 1050ms cubic-bezier(0.33,0,0.2,1)",
          filter: "drop-shadow(0 24px 34px rgba(120,92,64,0.28))",
        }}>
          <img src={fly.e.img} alt="" draggable="false" style={{ width: "100%", height: "auto", display: "block" }} />
          <span style={{
            position: "absolute", left: 0, right: 0, top: "52%", bottom: "6%",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "var(--font-title)", fontWeight: 600, fontSize: 19, lineHeight: 1.3,
            color: "var(--ink-900)", textAlign: "center", whiteSpace: "pre-line", letterSpacing: "-0.01em",
          }}>{fly.e.label}</span>
        </div>
      )}
    </div>
  );
}
window.MainScreen = MainScreen;
