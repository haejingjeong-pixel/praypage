// IntroScreen — 진입 화면: warm apothecary entry.
function IntroScreen({ onStart }) {
  const { Wordmark, Button, Icon } = window.DesignSystem_d4e5a3;
  return (
    <div style={{ padding: "56px 28px 40px", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", minHeight: "100%", boxSizing: "border-box", justifyContent: "center", gap: 4 }}>
      <div style={{ marginBottom: 10 }}>
        <Wordmark name="마음약국" mark="cross" size={22} />
      </div>
      <div style={{ fontFamily: "var(--font-label)", fontSize: 12, letterSpacing: "0.18em", color: "var(--text-muted)", marginBottom: 26 }}>
        오늘의 말씀 처방전
      </div>

      <div style={{ width: 92, height: 92, borderRadius: "50%", background: "var(--coral-50)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 26, boxShadow: "var(--shadow-sm)" }}>
        <Icon name="cross" size={40} color="var(--accent)" stroke={1.4} />
      </div>

      <h1 style={{ fontFamily: "var(--font-title)", fontSize: 28, lineHeight: 1.35, color: "var(--text-strong)", margin: "0 0 14px" }}>
        오늘 마음이<br />어디가 아픈가요?
      </h1>
      <p style={{ fontFamily: "var(--font-body)", fontSize: 15, lineHeight: 1.7, color: "var(--text-muted)", margin: "0 0 34px", maxWidth: 300 }}>
        말로 다 설명하지 않아도 괜찮아요.<br />지금 마음에 가까운 증상을 하나 골라주세요.
      </p>

      <Button tone="coral" size="lg" onClick={onStart} icon={<Icon name="pill" size={19} color="#FFF9F4" />}>
        말씀 처방받기
      </Button>

      <div style={{ marginTop: "auto", paddingTop: 30, fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-faint)" }}>
        오늘 마음이 아프다면, 말씀 한 알 받아가세요.
      </div>
    </div>
  );
}
window.IntroScreen = IntroScreen;
