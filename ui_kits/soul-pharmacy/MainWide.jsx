// MainWide — 16:9 widescreen main screen matching the reference exactly:
// title block, 2 wood shelves × 4 envelopes (scaled up), footer CTA with leaf accents.
function MainWide({ selected, onSelect }) {
  const { MoodEnvelope, WoodShelf, MOODS, Icon } = window.DesignSystem_d4e5a3;
  const keys = Object.keys(MOODS);
  const rows = [keys.slice(0, 4), keys.slice(4, 8)];

  return (
    <div style={{ width: 1280, height: 720, background: "var(--bg-page)", boxSizing: "border-box", padding: "56px 60px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <div style={{ textAlign: "center", marginBottom: 26 }}>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 13, letterSpacing: "0.2em", color: "var(--text-muted)", marginBottom: 8 }}>
          · 말씀 처방전 ·
        </div>
        <h1 style={{ fontFamily: "var(--font-title)", fontWeight: 500, fontSize: 32, whiteSpace: "nowrap", color: "var(--ink-900)", margin: "0 0 10px" }}>
          오늘 마음이 어디가 아픈가요?
        </h1>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--text-muted)", margin: 0 }}>
          내 마음 카드를 하나 고르면, 그 마음에 맞는 말씀 약봉투가 발급됩니다.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 40, width: 908 }}>
        {rows.map((row, i) => (
          <div key={i}>
            <WoodShelf width={908} />
            <div style={{ display: "flex", gap: 36 }}>
              {row.map((k) => (
                <MoodEnvelope key={k} mood={k} width={200} selected={selected === k} onClick={() => onSelect(k)} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 44 }}>
        <Icon name="sprout" size={16} color="var(--mood-calling-ink)" stroke={1.4} />
        <span style={{ fontFamily: "var(--font-title)", fontWeight: 600, fontSize: 20, color: "var(--ink-900)" }}>마음 카드를 하나 골라주세요</span>
        <Icon name="sprout" size={16} color="var(--mood-calling-ink)" stroke={1.4} style={{ transform: "scaleX(-1)" }} />
      </div>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--text-muted)", margin: "8px 0 0" }}>
        선택하면 카드가 살짝 올라오고, 말씀 처방전이 발급돼요.
      </p>
    </div>
  );
}
window.MainWide = MainWide;
