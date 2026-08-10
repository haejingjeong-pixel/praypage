// LogoMark — 마음약국 로고 (처방전 종이 + 라벤더 올리브 + 마음약국 워드마크 락업).
// 사용자 업로드 이미지. 가로형 락업이라 width 기준으로 크기 지정.
function LogoMark({ width = 200, size, style = {} }) {
  const w = size ? size * 3.3 : width; // size(정사각 관성) 호환: 폭으로 환산
  return (
    <img src="assets-web/logo.webp" alt="마음약국" style={{ display: "block", width: w, height: "auto", margin: "0 auto", ...style }} />
  );
}
window.LogoMark = LogoMark;
