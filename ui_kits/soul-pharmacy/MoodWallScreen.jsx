// MoodWallScreen — 증상 선택: quiet, serious 마음 접수대. Two wood shelves of
// 4 envelopes each, generous spacing, no cute/rounded motifs.
function MoodWallScreen({ selected, onSelect, onIssue, onBack }) {
  const { MoodEnvelope, WoodShelf, MOODS, Button, StepIndicator, Icon } = window.DesignSystem_d4e5a3;
  const keys = Object.keys(MOODS);
  const rows = [keys.slice(0, 4), keys.slice(4, 8)];

  return (
    <div style={{ padding: "26px 18px 30px", minHeight: "100%", boxSizing: "border-box", display: "flex", flexDirection: "column", background: "var(--bg-page)" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-muted)", display: "flex", alignItems: "center" }}>
          <Icon name="chevron-left" size={20} color="var(--text-muted)" stroke={1.4} />
        </button>
        <StepIndicator total={4} current={2} />
        <span style={{ width: 20 }} />
      </div>

      <div style={{ textAlign: "center", marginBottom: 22 }}>
        <div style={{ fontFamily: "var(--font-body)", fontSize: 12, letterSpacing: "0.16em", color: "var(--text-muted)", marginBottom: 8 }}>
          · 말씀 처방전 ·
        </div>
        <h2 style={{ fontFamily: "var(--font-title)", fontWeight: 600, fontSize: 22, lineHeight: 1.4, color: "var(--ink-900)", margin: "0 0 8px" }}>
          오늘 마음이<br />어디가 아픈가요?
        </h2>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--text-muted)", margin: 0 }}>
          내 마음 카드를 하나 고르면, 그 마음에 맞는<br />말씀 약봉투가 발급됩니다.
        </p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {rows.map((row, i) => (
          <div key={i}>
            <WoodShelf />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: -2, padding: "0 2px" }}>
              {row.map((k) => (
                <MoodEnvelope key={k} mood={k} width={78} selected={selected === k} onClick={() => onSelect(k)} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", margin: "24px 0 18px", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--ink-700)" }}>
        마음 카드를 하나 골라주세요
      </div>

      <Button tone="coral" size="lg" block disabled={!selected} onClick={onIssue}>
        {selected ? "처방전 발급하기" : "마음 카드를 하나 골라주세요"}
      </Button>
    </div>
  );
}
window.MoodWallScreen = MoodWallScreen;
