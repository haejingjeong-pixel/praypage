// StickerScreen — 처방전 공유 전 꾸미기: 이모지 스티커를 자유롭게 추가/이동, 스티커에
// 직접 달린 핸들로 크기·회전 조절 (롤링페이퍼 스타일 인라인 편집). 개수 제한 없음.
// PC: 좌우 2단(스티커 사이드 패널 + 넓은 처방전 한 장). 모바일: 상단 패널 + 하단 처방전 세로 구조.
// 스티커 세트는 window.STICKER_SET(stickers-data.js)에서 로드 — 감정별 다이컷 이미지.
const STICKER_SET = (typeof window !== "undefined" && window.STICKER_SET) || { categories: [], files: {} };
const STICKER_CATEGORIES = STICKER_SET.categories;
const STICKER_FILES = STICKER_SET.files;

// 롤링페이퍼 기본 응원 메모 — 여러 사람이 남긴 흔적처럼 모양·색·각도가 제각각.
// 상단 정보표(y 20~34%)·처방 말씀(y 40~58%)을 가리지 않도록 여백/하단 위주 배치.
const NOTE_COLORS = {
  pink: ["#F6D7DA", "#9A5560"], cream: ["#F3E4BE", "#8A6E3A"], lav: ["#E0D6ED", "#6E5A94"],
  blue: ["#CFE0EF", "#3C5876"], olive: ["#DAE0B8", "#5E6A2E"], grid: ["#FBFAF6", "#55493D"], mint: ["#CFE7DA", "#3E7060"],
};
const DEFAULT_NOTES = [
  { t: "언제나 너를\n응원해! ♡", s: "heart", c: "pink", x: -3, y: 3, r: -8 },
  { t: "하나님이\n함께 하세요 ♡", s: "note", c: "cream", x: 86, y: 1, r: 6 },
  { t: "너는 사랑받기\n위해 태어난 사람", s: "note", c: "cream", x: -5, y: 35, r: -6 },
  { t: "넌 할 수 있어!\n화이팅!!", s: "cloud", c: "lav", x: 85, y: 27, r: 5 },
  { t: "조금 더 힘내!\n잘하고 있어 ♡", s: "speech", c: "pink", x: 84, y: 45, r: 4 },
  { t: "기도할게요\n곁에서 응원해요", s: "cloud", c: "blue", x: -6, y: 60, r: -5 },
  { t: "빛나는 하루\n되길!", s: "star", c: "pink", x: 22, y: 62, r: -6 },
  { t: "오늘도 수고했어!\n토닥토닥 :)", s: "note", c: "cream", x: 40, y: 66, r: -3 },
  { t: "하나님 안에서\n모든 순간이\n은혜가 되길 ♡", s: "grid", c: "grid", x: 78, y: 63, r: 6 },
  { t: "포기하지 말고\n끝까지 가보자!", s: "note", c: "lav", x: -4, y: 78, r: -6 },
  { t: "응원해!\n늘 함께할게 ☺", s: "circle", c: "olive", x: 4, y: 91, r: -4 },
  { t: "너는 소중해! ☺", s: "heart", c: "blue", x: 82, y: 88, r: 7 },
];

function StickerScreen({ mood, rx: rxProp, initialStickers, onBack, onNext }) {
  const { Button, Icon, MOODS } = window.DesignSystem_d4e5a3;
  const rx = rxProp || window.RX_DATA[mood] || window.RX_DATA.anxious;
  const moodLabel = ((MOODS && MOODS[mood] && MOODS[mood].label) || rx.symptom || "").replace(/\n/g, " ");
  const RX = "var(--rx-ink)";
  const oneLine = (rx.dose || rx.opinion || "").split(/(?<=[.!?])\s|\n/)[0];
  // 공유카드용: 성구 전문 대신 핵심 2~3줄만. 첫 문장(또는 ~58자)까지.
  const _v = (rx.verse || "").trim();
  const shortVerse = _v.length > 62 ? (_v.slice(0, 58).trim() + "…") : _v;
  const rxDate = new Date().toLocaleDateString("ko-KR", { year: "numeric", month: "2-digit", day: "2-digit" }).replace(/\.$/, "").replace(/\s/g, "");
  // 기본 응원 스티커 — 카드가 비어 보이지 않도록 서로 다른 위치·각도로 미리 배치 (편집 가능)
  const SEED_STICKERS = [];
  const [stickers, setStickers] = React.useState(initialStickers && initialStickers.length ? initialStickers : SEED_STICKERS);
  const [activeId, setActiveId] = React.useState(null);
  const [past, setPast] = React.useState([]);   // undo 스택 — 각 항목은 그 시점 직전의 stickers 스냅샷
  const [future, setFuture] = React.useState([]); // redo 스택
  const [mounted, setMounted] = React.useState(false);
  const [copied, setCopied] = React.useState(false);
  const [flow, setFlow] = React.useState("idle"); // idle | step1 | step2 | step3 | fadeout
  const [finalizing, setFinalizing] = React.useState(false);
  const [confirmType, setConfirmType] = React.useState(null); // null | save | share
  const [flowType, setFlowType] = React.useState("share"); // save | share
  const [showTip, setShowTip] = React.useState(false);
  const [hoverEmoji, setHoverEmoji] = React.useState(null);
  const [showPicker, setShowPicker] = React.useState(false);
  // 현재 감정 카테고리를 기본 노출 (없으면 일반)
  const _defaultCat = (STICKER_FILES && STICKER_FILES[mood]) ? mood : "normal";
  const [pickerCat, setPickerCat] = React.useState(_defaultCat);
  const [hintSeen, setHintSeen] = React.useState(false);
  const [invalidId, setInvalidId] = React.useState(null);
  const [extraH, setExtraH] = React.useState(0); // 사용자가 늘린 하단 꾸미기 공간 (단계)
  const EXTRA_STEP = 150, EXTRA_MAX = 5;
  const boardRef = React.useRef(null);
  const exportRef = React.useRef(null); // 캡처 대상: 처방전 카드 한 장만
  const verseRef = React.useRef(null);  // 성구 본문 텍스트(<p>) — 스티커 배치 금지 영역 측정 기준
  const dragRef = React.useRef(null);

  const [pc, setPc] = React.useState(false);
  const [wide, setWide] = React.useState(false);
  React.useEffect(() => {
    const pick = () => { setPc(window.innerWidth >= 860); setWide(window.innerWidth >= 1180); };
    pick();
    window.addEventListener("resize", pick);
    return () => window.removeEventListener("resize", pick);
  }, []);

  const sheetW = pc ? 720 : 380;   // 처방전 폭 (가로 넓은 롤링페이퍼)
  const panelW = wide ? 400 : (pc ? 300 : sheetW); // 스티커 사이드 패널 폭
  const padX = pc ? 44 : 24;

  const captureCard = async () => {
    if (!window.htmlToImage || !exportRef.current) return null;
    return await window.htmlToImage.toBlob(exportRef.current, {
      pixelRatio: 2.5, cacheBust: true, backgroundColor: "#FCFBF6",
      filter: (node) => !(node instanceof HTMLElement && node.dataset && node.dataset.exportIgnore === "true"),
    });
  };

  const share = async () => {
    try {
      const blob = await captureCard();
      if (blob && navigator.canShare) {
        const file = new File([blob], "마음약국-처방전.png", { type: "image/png" });
        if (navigator.canShare({ files: [file] })) { await navigator.share({ files: [file], title: "마음약국 처방전" }); return; }
      }
      const payload = btoa(unescape(encodeURIComponent(JSON.stringify({ mood, stickers, rx }))));
      const url = window.location.origin + window.location.pathname + window.location.search + "#" + payload;
      if (navigator.clipboard && navigator.clipboard.writeText) await navigator.clipboard.writeText(url);
      window.location.hash = payload;
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch (e) {
      /* 취소/실패해도 완료 연출은 finishCompletion이 담당 */
    }
  };

  const saveImage = async () => {
    try {
      const blob = await captureCard();
      if (blob) {
        const a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "마음약국-처방전.png";
        document.body.appendChild(a); a.click(); a.remove();
        setTimeout(() => URL.revokeObjectURL(a.href), 4000);
        return;
      }
      const payload = btoa(unescape(encodeURIComponent(JSON.stringify({ mood, stickers, rx }))));
      window.location.hash = payload;
    } catch (e) { /* noop */ }
  };

  const flowTimers = React.useRef([]);
  const openConfirm = (type) => {
    if (finalizing) return;
    setActiveId(null);
    setShowPicker(false);
    setFlowType(type);
    setConfirmType(type);
    setFinalizing(true);
  };
  const cancelConfirm = () => {
    setConfirmType(null);
    setFinalizing(false);
  };
  const runExport = () => {
    const type = confirmType;
    setConfirmType(null);
    flowTimers.current.forEach(clearTimeout);
    flowTimers.current = [
      setTimeout(() => { if (type === "save") saveImage(); else share(); setFlow("done"); }, 550),
    ];
  };
  const finishCompletion = () => {
    if (flow !== "done") return;
    setFlow("fadeout");
    setTimeout(() => onNext && onNext(), 700);
  };
  React.useEffect(() => {
    if (flow !== "done") return;
    const t = setTimeout(() => { setFlow("fadeout"); setTimeout(() => onNext && onNext(), 700); }, 6500);
    return () => clearTimeout(t);
  }, [flow]);
  React.useEffect(() => () => flowTimers.current.forEach(clearTimeout), []);

  React.useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  // Undo/Redo — 스티커 추가·삭제·이동·크기·회전은 전부 stickers 스냅샷 단위로 기록
  const recordHistory = (snapshot) => {
    setPast((p) => [...p, snapshot]);
    setFuture([]);
  };
  const addSticker = (src) => {
    const id = Date.now() + Math.random();
    recordHistory(stickers);
    // y는 카드 상단 기준 고정 px로 저장 — 배치 시점의 실제 카드 높이를 기준으로 % 위치를 px로 환산
    const boardH = (boardRef.current && boardRef.current.getBoundingClientRect().height) || 560;
    setStickers((list) => {
      if (!list.length) { setShowTip(true); setTimeout(() => setShowTip(false), 4200); }
      const x = 30 + Math.random() * 40;   // 기본 위치: 중앙 안전 영역
      const grown = list.length;
      const yPct = grown > 6 ? (55 + Math.random() * 30) : (30 + Math.random() * 45);
      const y = (yPct / 100) * boardH;
      const rotate = Math.round((Math.random() - 0.5) * 24);
      const scale = Math.max(0.55, 1 - list.length * 0.03);
      return [...list, { id, src, x, y, scale, rotate }];
    });
    setActiveId(id);
    setShowPicker(false);
  };
  const updateSticker = (id, patch) => {
    setStickers((list) => list.map((s) => (s.id === id ? { ...s, ...patch } : s)));
  };
  const removeSticker = (id) => {
    recordHistory(stickers);
    setStickers((list) => list.filter((s) => s.id !== id));
    if (activeId === id) setActiveId(null);
  };
  const canUndo = past.length > 0;
  const canRedo = future.length > 0;
  const undo = () => {
    if (!past.length) return;
    const prev = past[past.length - 1];
    setFuture((f) => [stickers, ...f]);
    setPast((p) => p.slice(0, -1));
    setStickers(prev);
    setActiveId(null);
  };
  const redo = () => {
    if (!future.length) return;
    const next = future[0];
    setPast((p) => [...p, stickers]);
    setFuture((f) => f.slice(1));
    setStickers(next);
    setActiveId(null);
  };

  // 공간 늘리기/줄이기(extraH)는 스티커의 고정 px 좌표에 영향을 주지 않음 — 카드 자체가
  // 커지거나 작아질 뿐, 스티커는 같은 자리에 그대로 남는다. 다만 공간을 줄여서 카드가
  // 작아졌을 때 이미 새 하단 경계 밖으로 벗어난 스티커만 최소한으로 안쪽에 붙여준다
  // (스티커 군집 전체를 재배치하지 않음).
  React.useEffect(() => {
    const raf = requestAnimationFrame(() => {
      if (!boardRef.current) return;
      const newH = boardRef.current.getBoundingClientRect().height;
      setStickers((list) => {
        let changed = false;
        const next = list.map((s) => {
          const half = (((pc ? 40 : 34) * s.scale) + 16) / 2;
          const maxY = Math.max(half, newH - half);
          if (s.y > maxY) { changed = true; return { ...s, y: maxY }; }
          return s;
        });
        return changed ? next : list;
      });
    });
    return () => cancelAnimationFrame(raf);
  }, [extraH]);

  // 성구 본문 영역(rx.verse)이 바뀌거나 레이아웃 폭(pc)이 바뀌면 성구 텍스트 박스도 달라진다.
  // 이미 놓여있던 스티커 중 새 성구 박스와 겹치는 것만, 겹치지 않는 나머지는 그대로 둔 채
  // 위/아래 중 더 가까운 바깥쪽으로 최소 이동시킨다 (전체 재배치 금지).
  React.useEffect(() => {
    const raf = requestAnimationFrame(() => {
      if (!boardRef.current || !verseRef.current) return;
      const board = boardRef.current.getBoundingClientRect();
      const vr = verseRef.current.getBoundingClientRect();
      const zone = { l: vr.left - board.left - 16, r: vr.right - board.left + 16, t: vr.top - board.top - 13, b: vr.bottom - board.top + 13 };
      setStickers((list) => {
        let changed = false;
        const next = list.map((s) => {
          const half = (((pc ? 40 : 34) * s.scale) + 16) / 2;
          const cx = (s.x / 100) * board.width, cy = s.y;
          const overlap = cx - half < zone.r && cx + half > zone.l && cy - half < zone.b && cy + half > zone.t;
          if (!overlap) return s;
          changed = true;
          const distTop = Math.abs(cy - zone.t), distBottom = Math.abs(cy - zone.b);
          let ny = distTop <= distBottom ? zone.t - half : zone.b + half;
          ny = Math.max(half, Math.min(board.height - half, ny));
          return { ...s, y: ny };
        });
        return changed ? next : list;
      });
    });
    return () => cancelAnimationFrame(raf);
  }, [rx.verse, pc]);

  const startMove = (e, s) => {
    e.stopPropagation();
    setActiveId(s.id);
    const board = boardRef.current.getBoundingClientRect();
    const prot = [].slice.call(boardRef.current.querySelectorAll("[data-protect]")).map((el) => {
      const r = el.getBoundingClientRect();
      return { l: r.left - 16, t: r.top - 13, rt: r.right + 16, b: r.bottom + 13 };
    });
    dragRef.current = { mode: "move", id: s.id, boardRect: board, prot, lastValid: { x: s.x, y: s.y }, invalid: false,
      before: stickers, moved: false,
      mx: ((((pc ? 40 : 34) * s.scale) + 16) / 2 / board.width) * 100,
      myPx: (((pc ? 40 : 34) * s.scale) + 16) / 2 };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endPointer);
  };

  const startResizeRotate = (e, s, mode) => {
    e.stopPropagation();
    e.preventDefault();
    const board = boardRef.current.getBoundingClientRect();
    const cx = board.left + (s.x / 100) * board.width;
    const cy = board.top + s.y;
    dragRef.current = {
      mode, id: s.id, cx, cy,
      startScale: s.scale, startRotate: s.rotate,
      startDist: Math.hypot(e.clientX - cx, e.clientY - cy),
      startAngle: (Math.atan2(e.clientY - cy, e.clientX - cx) * 180) / Math.PI,
      before: stickers, moved: false,
    };
    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerup", endPointer);
  };

  const onPointerMove = (e) => {
    const d = dragRef.current;
    if (!d) return;
    d.moved = true;
    if (d.mode === "move") {
      // x는 카드 너비 대비 %(너비는 공간 늘리기/줄이기에 영향받지 않음), y는 카드 상단 기준 고정 px —
      // 처방전 높이가 바뀌어도(공간 늘리기/줄이기) 이미 놓인 스티커의 화면 위치가 밀리지 않도록 함
      const x = ((e.clientX - d.boardRect.left) / d.boardRect.width) * 100;
      const yPx = e.clientY - d.boardRect.top;
      const nx = Math.max(d.mx, Math.min(100 - d.mx, x)), ny = Math.max(d.myPx, Math.min(d.boardRect.height - d.myPx, yPx));
      const over = d.prot.some((p) => e.clientX > p.l && e.clientX < p.rt && e.clientY > p.t && e.clientY < p.b);
      d.invalid = over;
      if (!over) d.lastValid = { x: nx, y: ny };
      setInvalidId(over ? d.id : null);
      updateSticker(d.id, { x: nx, y: ny });
    } else if (d.mode === "resize") {
      const dist = Math.hypot(e.clientX - d.cx, e.clientY - d.cy);
      const scale = Math.max(0.4, Math.min(3.5, d.startScale * (dist / d.startDist)));
      updateSticker(d.id, { scale });
    } else if (d.mode === "rotate") {
      const angle = (Math.atan2(e.clientY - d.cy, e.clientX - d.cx) * 180) / Math.PI;
      updateSticker(d.id, { rotate: Math.round(d.startRotate + (angle - d.startAngle)) });
    }
  };
  const endPointer = () => {
    const d = dragRef.current;
    if (d && d.mode === "move" && d.invalid && d.lastValid) updateSticker(d.id, d.lastValid);
    if (d && d.moved && d.before) recordHistory(d.before);
    setInvalidId(null);
    dragRef.current = null;
    window.removeEventListener("pointermove", onPointerMove);
    window.removeEventListener("pointerup", endPointer);
  };

  const INK = "#3f5a86";        // 인쇄 잉크 (톤다운 블루)
  const LINE = "rgba(120,104,78,0.22)";  // 종이 구분선 (웜 그레이)
  const PURPLE = "#6B5FCF";            // 메인 액션(저장·스티커 추가)
  // 표 셀 (라벨칸 + 값칸)
  const TLabel = ({ children }) => (
    <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: pc ? 13 : 12, color: "#5a7099", letterSpacing: "0.04em", paddingRight: 8, whiteSpace: "nowrap" }}>{children}</div>
  );
  const TVal = ({ children, accent }) => (
    <div style={{ fontFamily: "var(--font-body)", fontSize: pc ? 14.5 : 13, fontWeight: accent ? 700 : 400, color: accent ? INK : "var(--ink-900)" }}>{children}</div>
  );
  // 섹션 제목 + 밑줄
  const SecTitle = ({ children }) => (
    <div style={{ width: "100%", textAlign: "left" }}>
      <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: pc ? 15 : 13.5, color: INK, marginBottom: 8 }}>{children}</div>
      <div style={{ borderTop: `1.5px solid ${INK}` }} />
    </div>
  );

  // 롤링페이퍼 응원 메모 한 장
  const NoteSticker = ({ note }) => {
    const [bg, tint] = NOTE_COLORS[note.c];
    const scale = pc ? 1 : 0.82;
    const base = {
      position: "absolute", left: note.x + "%", top: note.y + "%",
      transform: `rotate(${note.r}deg) scale(${scale})`, transformOrigin: "center",
      fontFamily: "var(--font-label)", fontSize: 12.5, lineHeight: 1.45, color: tint,
      whiteSpace: "pre-line", textAlign: "center", padding: "12px 14px",
      background: bg, maxWidth: 132, boxShadow: "0 3px 8px rgba(60,60,70,0.12)", zIndex: 2,
    };
    if (note.s === "circle") Object.assign(base, { borderRadius: "50%", width: 92, height: 92, display: "flex", alignItems: "center", justifyContent: "center", padding: 8 });
    else if (note.s === "cloud") Object.assign(base, { borderRadius: "46% 54% 55% 45% / 58% 56% 44% 42%" });
    else if (note.s === "heart") Object.assign(base, { clipPath: 'path("M60 108 C10 74 4 42 24 24 C40 10 56 18 60 30 C64 18 80 10 96 24 C116 42 110 74 60 108 Z")', width: 120, height: 112, display: "flex", alignItems: "center", justifyContent: "center", padding: "18px 20px 34px", boxShadow: "none", filter: "drop-shadow(0 3px 6px rgba(60,60,70,0.14))" });
    else if (note.s === "star") Object.assign(base, { clipPath: "polygon(50% 0%,61% 35%,98% 35%,68% 57%,79% 91%,50% 70%,21% 91%,32% 57%,2% 35%,39% 35%)", width: 118, height: 112, display: "flex", alignItems: "center", justifyContent: "center", padding: "30px 18px 14px", boxShadow: "none", filter: "drop-shadow(0 3px 6px rgba(60,60,70,0.14))" });
    else if (note.s === "speech") Object.assign(base, { borderRadius: 16 });
    else if (note.s === "grid") Object.assign(base, { borderRadius: 3, backgroundImage: "linear-gradient(rgba(60,88,118,0.10) 1px,transparent 1px),linear-gradient(90deg,rgba(60,88,118,0.10) 1px,transparent 1px)", backgroundSize: "9px 9px" });
    else Object.assign(base, { borderRadius: 3 }); // note
    return (
      <div style={base}>
        {(note.s === "note" || note.s === "grid") && (
          <div style={{ position: "absolute", top: -9, left: "50%", transform: "translateX(-50%) rotate(-4deg)", width: 34, height: 15, background: "rgba(150,170,190,0.4)", borderRadius: 2 }} />
        )}
        {note.t}
      </div>
    );
  };

  // ── 처방전 옆 세로 툴바 + 선택 모달 ──
  const catItems = (STICKER_FILES && STICKER_FILES[pickerCat]) || [];
  const openPicker = (e) => { e.stopPropagation(); setShowPicker(true); setHintSeen(true); };
  const ToolBtn = ({ icon, label, onClick, main, size = 38, disabled }) => (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 3, opacity: disabled ? 0.4 : 1, transition: "opacity 160ms ease" }}>
      <button onClick={onClick} disabled={disabled}
        style={{ width: size, height: size, borderRadius: "50%", border: main ? "none" : "1px solid rgba(120,104,78,0.16)", cursor: disabled ? "default" : "pointer", background: main ? "#8f86c9" : "rgba(253,251,246,0.85)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: main ? "0 4px 12px rgba(120,104,78,0.18)" : "0 2px 7px rgba(90,74,52,0.08)" }}>
        <Icon name={icon} size={size >= 44 ? 20 : 17} color={main ? "#fff" : "var(--text-body)"} stroke={1.7} />
      </button>
      <span style={{ fontFamily: "var(--font-body)", fontSize: 10, lineHeight: 1.22, color: "var(--text-muted)", textAlign: "center", maxWidth: size >= 44 ? 58 : 52, wordBreak: "keep-all" }}>{label}</span>
    </div>
  );
  const toolbar = (
    <div style={{ display: "flex", flexDirection: pc ? "column" : "row", alignItems: "center", justifyContent: "center", gap: pc ? 16 : 10, padding: pc ? "18px 14px" : "10px 12px", background: "rgba(255,255,255,0.75)", borderRadius: pc ? 26 : 18, boxShadow: "0 8px 24px rgba(70,58,45,0.12)", backdropFilter: "blur(6px)" }}>
      <ToolBtn icon="plus" label="응원 스티커 붙이기" onClick={openPicker} main />
      <ToolBtn icon="chevrons-down" label="공간 늘리기" onClick={() => setExtraH((h) => Math.min(EXTRA_MAX * EXTRA_STEP, h + EXTRA_STEP))} />
      <ToolBtn icon="chevrons-up" label="공간 줄이기" onClick={() => setExtraH((h) => Math.max(0, h - EXTRA_STEP))} />
      <ToolBtn icon="rotate-ccw" label="되돌리기" onClick={undo} disabled={!canUndo} />
      <ToolBtn icon="rotate-cw" label="되돌리기 취소" onClick={redo} disabled={!canRedo} />
      <ToolBtn icon="help-circle" label="사용 안내" onClick={() => { setShowTip(true); setTimeout(() => setShowTip(false), 4200); }} />
    </div>
  );
  const pickerModal = showPicker && (
    <div onClick={() => setShowPicker(false)} style={{ position: "fixed", inset: 0, zIndex: 70, background: "rgba(54,46,39,0.32)", display: "flex", alignItems: "flex-end", justifyContent: "center", padding: pc ? "0 0 0" : 0 }}>
      <div onClick={(e) => e.stopPropagation()} style={{ width: pc ? "min(760px, 82vw)" : "100%", maxWidth: "100%", maxHeight: pc ? "82vh" : "auto", overflowY: pc ? "auto" : "visible", background: "var(--cream)", borderRadius: pc ? "18px" : "18px 18px 0 0", boxShadow: "0 -6px 30px rgba(54,46,39,0.2)", padding: pc ? 30 : 18, margin: pc ? "auto 0" : 0, boxSizing: "border-box" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
          <span style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: 18, color: "var(--ink-900)" }}>스티커 선택</span>
          <button onClick={() => setShowPicker(false)} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}><Icon name="x" size={20} color="var(--text-muted)" /></button>
        </div>
        <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
          {STICKER_CATEGORIES.map((c) => (
            <button key={c.key} onClick={() => setPickerCat(c.key)}
              style={{ padding: "7px 14px", borderRadius: 999, cursor: "pointer", fontFamily: "var(--font-body)", fontSize: 13, fontWeight: 600, border: "none", background: pickerCat === c.key ? "var(--accent)" : "rgba(120,92,64,0.08)", color: pickerCat === c.key ? "var(--on-accent)" : "var(--text-body)" }}>{c.label}</button>
          ))}
        </div>
        <div style={{ display: "grid", gridTemplateColumns: pc ? "repeat(4, minmax(120px, 1fr))" : "repeat(4, 1fr)", gap: pc ? 14 : 8, maxHeight: pc ? "56vh" : "46vh", overflowY: "auto" }}>
          {catItems.map((src, i) => (
            <button key={src} onClick={() => addSticker(src)}
              style={{ aspectRatio: "1 / 1", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid var(--line-soft)", background: "rgba(255,255,255,0.6)", borderRadius: 14, cursor: "pointer", padding: 6 }}>
              <img src={src} alt="" loading="lazy" draggable={false} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
            </button>
          ))}
        </div>
        <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-muted)", textAlign: "center", margin: "14px 0 0" }}>고른 스티커는 처방전에 붙고, 드래그·회전·크기 조절할 수 있어요.</p>
      </div>
    </div>
  );

  // ── 처방전 (편집 보드) ──
  const board = (
    <div
      ref={boardRef}
      onPointerDown={(e) => { if (!e.target.closest("[data-sticker]")) setActiveId(null); }}
      style={{
        position: "relative", width: sheetW, maxWidth: "100%", boxSizing: "border-box",
        opacity: mounted ? 1 : 0,
        transition: "opacity 950ms ease-out",
      }}
    >
      <div ref={exportRef} style={{ position: "relative", width: sheetW, maxWidth: "100%", background: "linear-gradient(174deg,#FDFBF5 0%,#FAF6EC 100%)", border: "1px solid rgba(120,104,78,0.16)", borderRadius: 8, boxShadow: "0 1px 2px rgba(90,74,52,0.06), 0 18px 44px rgba(90,74,52,0.14)", boxSizing: "border-box" }}>
        <div style={{ position: "absolute", inset: 10, border: "1px solid rgba(120,104,78,0.14)", borderRadius: 4, pointerEvents: "none" }} />
        <div style={{ position: "relative", padding: `${pc ? 42 : 28}px ${pc ? 52 : 24}px ${pc ? 30 : 22}px`, minHeight: pc ? 560 : 560, display: "flex", flexDirection: "column", alignItems: "center" }}>
          {/* 마스트헤드 — 발급 화면과 동일. 성구 본문 텍스트만 스티커 금지, 이 영역은 부착 가능 */}
          <div style={{ width: "100%", textAlign: "center", marginBottom: pc ? 14 : 11 }}>
            <div style={{ fontFamily: "var(--font-body)", fontSize: pc ? 13 : 12, color: "var(--text-muted)", letterSpacing: "0.14em", marginBottom: pc ? 8 : 6 }}>오늘의 말씀 처방전</div>
            <div style={{ fontFamily: "var(--font-title)", fontWeight: 500, fontSize: pc ? 27 : 22, color: "#3f5a86", letterSpacing: "0.12em", paddingLeft: "0.12em" }}>마음약국 처방전</div>
            <div style={{ borderTop: `1px solid ${LINE}`, width: "100%", marginTop: pc ? 16 : 12 }} />
          </div>

          {/* 개인 처방 정보 — 발급 화면과 동일한 테두리 표. 스티커 부착 가능 */}
          <div style={{ width: "100%" }}>
            {[["처방일", rxDate, "증상", rx.symptom || moodLabel], ["마음 강도", rx.intensity || "마음에 오래 머무는 중", "처방 단어", rx.word]].map((row, ri) => (
              <div key={ri} style={{ display: "grid", gridTemplateColumns: pc ? "auto 1fr auto 1fr" : "auto 1fr", columnGap: pc ? 14 : 12, rowGap: pc ? 0 : 7, alignItems: "baseline", padding: `${pc ? 11 : 9}px 2px`, borderTop: ri ? `1px solid ${LINE}` : "none" }}>
                <TLabel>{row[0]}</TLabel><TVal>{row[1]}</TVal>
                <TLabel>{row[2]}</TLabel><TVal accent={ri === 1}>{row[3]}</TVal>
              </div>
            ))}
          </div>

          {/* 처방 말씀 — 발급 화면과 동일. 성구 본문 텍스트(<p>)만 스티커 배치 금지 영역 —
              제목·인용부호·출처는 자유 영역, 금지 범위는 startMove()가 data-protect 요소를
              드래그 시작 시점에 getBoundingClientRect()로 매번 다시 측정해 동적으로 계산 */}
          <div style={{ width: "100%", marginTop: pc ? 30 : 22 }}>
            <div style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: pc ? 12.5 : 11.5, color: "#5a7099", letterSpacing: "0.14em", textAlign: "center", marginBottom: pc ? 12 : 9 }}>처방 말씀</div>
            <div style={{ position: "relative", padding: `${pc ? 8 : 6}px ${pc ? 30 : 20}px ${pc ? 6 : 4}px`, textAlign: "center" }}>
              <p ref={verseRef} data-protect style={{ fontFamily: "var(--font-verse)", fontSize: pc ? 20 : 16, lineHeight: 1.75, color: "var(--ink-900)", margin: "0 auto", maxWidth: pc ? 640 : 440, textWrap: "balance" }}>{rx.verse}</p>
              <div style={{ fontFamily: "var(--font-body)", fontSize: pc ? 13 : 12, color: "#5a7099", letterSpacing: "0.04em", marginTop: pc ? 14 : 10 }}>{rx.reference}</div>
            </div>
          </div>

          {/* 스티커 캔버스 — 처방전 전체에 자유롭게, 텍스트는 보호 */}
          <div data-sticker-zone style={{ position: "relative", width: "100%", flex: "1 1 auto", minHeight: (pc ? 150 : 110) + extraH, display: "flex", alignItems: "center", justifyContent: "center", transition: "min-height 320ms ease-out" }}>
            {!finalizing && stickers.length === 0 && (
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.7, pointerEvents: "none" }}>
                <Icon name="hand-heart" size={pc ? 30 : 26} color="var(--text-faint)" stroke={1.5} />
                <span style={{ fontFamily: "var(--font-label)", fontSize: pc ? 14 : 13, color: "var(--text-muted)" }}>빈 공간에 스티커를 붙여 처방전을 꾸며보세요.</span>
              </div>
            )}
          </div>

          {/* 복용 안내 — 스티커 부착 가능 */}
          <div style={{ width: "100%", borderTop: `1px solid ${LINE}` }} />
          <div style={{ width: "100%", marginTop: pc ? 14 : 11 }}><SecTitle>복용 안내</SecTitle>
          <div style={{ width: "100%", display: "flex", alignItems: "center", gap: 10, padding: `${pc ? 11 : 9}px 2px ${pc ? 16 : 12}px`, textAlign: "left" }}>
            <Icon name="clipboard-list" size={pc ? 19 : 17} color={INK} stroke={1.6} />
            <p style={{ fontFamily: "var(--font-body)", fontSize: pc ? 13.5 : 12.5, lineHeight: 1.55, color: "var(--ink-900)", margin: 0, flex: 1 }}>{oneLine}</p>
          </div></div>

          {/* 저장/공유 버튼은 카드 밖 (board 아래)로 이동 */}
          <p data-export-ignore="true" style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "#8a6f4a", opacity: 0.55, textAlign: "center", margin: `${pc ? 16 : 12}px 0 0` }}>
            마음약국 처방전은 당신의 마음을 위한 맞춤 처방입니다.
          </p>
        </div>

        {/* 스티커 레이어 — exportRef(캡처 대상) 내부에 렌더링해야 저장 이미지에 포함됨 */}
        {stickers.map((s) => {
          const isActive = activeId === s.id;
          const px = (pc ? 40 : 34) * s.scale;
          const boxPad = 8;
          const box = px + boxPad * 2;
          return (
            <div
              key={s.id}
              data-sticker
              onClick={(e) => e.stopPropagation()}
              style={{
                position: "absolute", left: s.x + "%", top: s.y + "px", width: box, height: box, marginLeft: -box / 2, marginTop: -box / 2,
                transform: `rotate(${s.rotate}deg)`, transformOrigin: "center center",
                touchAction: "none", zIndex: activeId === s.id ? 20 : 5,
              }}
            >
              <span
                onPointerDown={(e) => startMove(e, s)}
                style={{
                  position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "grab", userSelect: "none",
                  border: invalidId === s.id ? "2px solid var(--coral-600)" : isActive ? "2px dashed var(--rx-blue-500)" : "none",
                  borderRadius: 12, boxSizing: "border-box",
                }}
              >
                {s.src
                  ? <img src={s.src} alt="" draggable={false} onDragStart={(e) => e.preventDefault()} style={{ width: px, height: px, objectFit: "contain", pointerEvents: "none", userSelect: "none" }} />
                  : <span style={{ fontSize: px, lineHeight: 1 }}>{s.emoji}</span>}
              </span>
              {isActive && (
                <React.Fragment>
                  <span
                    data-export-ignore="true"
                    onClick={(e) => { e.stopPropagation(); removeSticker(s.id); }}
                    style={{ position: "absolute", top: 0, left: 0, transform: "translate(-50%, -50%)", width: 22, height: 22, borderRadius: "50%", background: "var(--coral-600)", color: "#fff", fontSize: 13, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", zIndex: 3 }}
                  >×</span>
                  <span
                    data-export-ignore="true"
                    onPointerDown={(e) => startResizeRotate(e, s, "rotate")}
                    style={{ position: "absolute", top: 0, left: "50%", transform: `translate(-50%, -140%) rotate(${-s.rotate}deg)`, width: 26, height: 26, borderRadius: "50%", background: "var(--rx-blue-500)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "grab", boxShadow: "var(--shadow-sm)", touchAction: "none", zIndex: 3 }}
                  >
                    <Icon name="rotate-cw" size={13} color="#fff" />
                  </span>
                  <span
                    data-export-ignore="true"
                    onPointerDown={(e) => startResizeRotate(e, s, "resize")}
                    style={{ position: "absolute", top: "100%", left: "100%", transform: "translate(-50%, -50%)", width: 22, height: 22, borderRadius: "50%", background: "var(--accent)", cursor: "nwse-resize", boxShadow: "var(--shadow-sm)", touchAction: "none", zIndex: 3 }}
                  />
                </React.Fragment>
              )}
            </div>
          );
        })}
      </div>

      {showTip && (
        <div style={{ position: "absolute", top: 10, left: "50%", transform: "translateX(-50%)", zIndex: 50, background: "rgba(62,71,60,0.92)", color: "#FBFDFF", fontFamily: "var(--font-body)", fontSize: 12.5, lineHeight: 1.5, padding: "10px 14px", borderRadius: 12, boxShadow: "var(--shadow-md)", textAlign: "center", pointerEvents: "none", whiteSpace: "nowrap" }}>
          드래그해서 이동 · 손잡이로 크기와 각도 조절
        </div>
      )}
    </div>
  );

  const actions = (
    <div style={{ width: sheetW, maxWidth: "100%", marginTop: 20, display: "flex", flexDirection: "column", gap: 8 }}>
      <div style={{ display: "flex", gap: 10 }}>
        <Button tone="outline" size="md" block onClick={() => startCompletion("save")} icon={<Icon name="download" size={17} />}>이미지로 저장</Button>
        <Button tone="rx" size="md" block onClick={() => startCompletion("share")} icon={<Icon name={copied ? "check" : "link"} size={17} color="#F7FAFF" />}>{copied ? "링크 복사됨" : "공유 링크 만들기"}</Button>
      </div>
      {copied && (
        <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "var(--text-muted)", textAlign: "center", margin: 0 }}>
          이 링크를 받은 사람도 스티커를 이어 붙일 수 있어요.
        </p>
      )}
    </div>
  );

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden", boxSizing: "border-box" }}>
      <div aria-hidden="true" style={{ position: "fixed", inset: 0, backgroundColor: "#F3E8DA", backgroundImage: "url(assets-web/decorate-bg.png)", backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat", zIndex: 0, pointerEvents: "none" }} />
      <div style={{ position: "relative", zIndex: 1, width: "100%", height: "100vh", overflowY: "auto", overflowX: "hidden", boxSizing: "border-box", display: "flex", flexDirection: "column", alignItems: "center", padding: pc ? "26px 32px 40px" : "20px 16px 32px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: sheetW, maxWidth: "100%", marginBottom: 16 }}>
        <button onClick={onBack} style={{ background: "none", border: "none", cursor: "pointer", padding: 4 }}>
          <Icon name="chevron-left" size={22} color="var(--text-muted)" />
        </button>
        <span style={{ fontFamily: "var(--font-title)", fontWeight: 600, fontSize: pc ? 18 : 16, color: "var(--text-strong)" }}>처방전 꾸미기</span>
        <span style={{ width: 22 }} />
      </div>

      <div style={{ display: "flex", flexDirection: pc ? "row" : "column", alignItems: pc ? "flex-start" : "center", justifyContent: "center", gap: pc ? 22 : 16, maxWidth: "100%" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", maxWidth: "100%" }}>
          {board}
          {!finalizing && flow === "idle" && !confirmType && (
            <div style={{ display: "flex", flexDirection: pc ? "row" : "column-reverse", gap: pc ? 14 : 11, justifyContent: "center", marginTop: pc ? 22 : 18, width: sheetW, maxWidth: "100%", boxSizing: "border-box" }}>
              <button onClick={() => openConfirm("save")} style={{ flex: pc ? 4 : "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, height: 50, padding: "0 20px", borderRadius: 14, border: "1px solid rgba(171,136,96,0.22)", cursor: "pointer", background: "#F7EBDD", boxShadow: "0 5px 14px rgba(97,68,42,0.09)", color: "#6A533F", fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 600, fontSize: 16 }}>
                <Icon name="download" size={18} color="#6A533F" /> 이미지로 저장하기
              </button>
              <button onClick={() => openConfirm("share")} style={{ flex: pc ? 6 : "none", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, height: 50, padding: "0 20px", borderRadius: 14, border: "1px solid rgba(126,116,190,0.55)", cursor: "pointer", background: "linear-gradient(160deg,#b3aaea 0%,#8f86c9 60%,#847ac2 100%)", boxShadow: "0 3px 10px rgba(120,108,200,0.22), inset 0 2px 6px rgba(255,255,255,0.55), inset 0 -3px 8px rgba(90,78,150,0.28)", color: "#fff", fontFamily: "Pretendard, -apple-system, BlinkMacSystemFont, sans-serif", fontWeight: 600, fontSize: 16, animation: "rxGlow 2.6s ease-in-out infinite" }}>
                <style>{`@keyframes rxGlow{0%,100%{box-shadow:0 3px 10px rgba(120,108,200,0.20),inset 0 2px 6px rgba(255,255,255,0.5),inset 0 -3px 8px rgba(90,78,150,0.26)}50%{box-shadow:0 4px 12px rgba(120,108,200,0.26),inset 0 2px 10px rgba(255,255,255,0.85),inset 0 -3px 8px rgba(90,78,150,0.3)}}`}</style>
                <Icon name="share-2" size={18} color="#fff" /> 소중한 사람에게 공유하기
              </button>
            </div>
          )}
          {finalizing && confirmType && flow === "idle" && (
            <div data-export-ignore="true" style={{ width: sheetW, maxWidth: "100%", marginTop: pc ? 32 : 24, textAlign: "center" }}>
              <style>{"@keyframes exRevealUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}"}</style>
              <p style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: pc ? 20 : 17, color: "var(--ink-900)", margin: "0 0 6px", opacity: 0, animation: "exRevealUp 420ms ease-out 120ms both" }}>{confirmType === "save" ? "이대로 저장해도 괜찮을까요?" : "이대로 보내도 괜찮을까요?"}</p>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--text-muted)", margin: "0 0 20px", opacity: 0, animation: "exRevealUp 420ms ease-out 280ms both" }}>{confirmType === "save" ? "저장되는 모습을 확인해보세요. 언제든 돌아가 수정할 수 있어요." : "상대에게 전달될 모습을 확인해보세요. 언제든 돌아가 수정할 수 있어요."}</p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", maxWidth: 420, margin: "0 auto" }}>
                <button onClick={cancelConfirm} style={{ flex: 1, padding: "15px", borderRadius: "var(--radius-lg)", border: "1px solid var(--line-soft)", cursor: "pointer", background: "#fff", color: "var(--text-body)", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, opacity: 0, animation: "exRevealUp 420ms ease-out 440ms both" }}>수정하기</button>
                <button onClick={runExport} style={{ flex: 1.25, padding: "15px", borderRadius: "var(--radius-lg)", border: "none", cursor: "pointer", background: PURPLE, color: "#fff", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 15, boxShadow: "0 8px 20px rgba(107,95,207,0.26)", opacity: 0, animation: "exRevealUp 420ms ease-out 560ms both" }}>{confirmType === "save" ? "이대로 저장하기" : "이대로 보내기"}</button>
              </div>
            </div>
          )}
        </div>
        {pc && !finalizing && <div style={{ position: "sticky", top: 24, alignSelf: "flex-start" }}>{toolbar}</div>}
      </div>
      {!pc && !finalizing && (
        <div style={{ position: "fixed", right: 10, top: "50%", transform: "translateY(-50%)", zIndex: 60, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, padding: "12px 8px", background: "rgba(255,255,255,0.82)", borderRadius: 22, boxShadow: "0 8px 24px rgba(70,58,45,0.16)", backdropFilter: "blur(6px)", maxHeight: "82vh", overflowY: "auto" }}>
          <ToolBtn icon="plus" label="응원 스티커 붙이기" onClick={openPicker} main size={46} />
          <ToolBtn icon="chevrons-down" label="공간 늘리기" onClick={() => setExtraH((h) => Math.min(EXTRA_MAX * EXTRA_STEP, h + EXTRA_STEP))} size={46} />
          <ToolBtn icon="chevrons-up" label="공간 줄이기" onClick={() => setExtraH((h) => Math.max(0, h - EXTRA_STEP))} size={46} />
          <ToolBtn icon="rotate-ccw" label="되돌리기" onClick={undo} disabled={!canUndo} size={46} />
          <ToolBtn icon="rotate-cw" label="되돌리기 취소" onClick={redo} disabled={!canRedo} size={46} />
          <ToolBtn icon="help-circle" label="사용 안내" onClick={() => { setShowTip(true); setTimeout(() => setShowTip(false), 4200); }} size={46} />
        </div>
      )}
      {pickerModal}
      {flow !== "idle" && (
        <div style={{ position: "fixed", inset: 0, zIndex: 99999, display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", padding: 32, backgroundColor: "#F3E8DA", backgroundImage: "url(assets-web/decorate-bg.png)", backgroundSize: "cover", backgroundPosition: "center center", backgroundRepeat: "no-repeat" }}>
          <style>{"@keyframes revealUp{to{opacity:1;transform:translateY(0)}}"}</style>
          <div style={{ maxWidth: 470, width: "100%", opacity: flow === "fadeout" ? 0 : 1, transition: "opacity 500ms ease" }}>
            <img src={flowType === "save" ? "assets-web/icon-save.webp" : "assets-web/icon-share.webp"} alt="" style={{ width: pc ? 104 : 88, height: pc ? 104 : 88, objectFit: "contain", display: "block", margin: "0 auto 16px", opacity: 0, transform: "translateY(12px)", animation: "revealUp 480ms ease-out 0ms forwards" }} />
            <p style={{ fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 14, letterSpacing: "0.02em", color: "#8E86DE", margin: "0 0 14px", opacity: 0, transform: "translateY(12px)", animation: "revealUp 480ms ease-out 150ms forwards" }}>{flowType === "save" ? "저장이 완료되었어요" : "공유가 완료되었어요"}</p>
            <h2 style={{ fontFamily: "var(--font-title)", fontWeight: 700, fontSize: pc ? 32 : 25, lineHeight: 1.35, color: "var(--ink-900)", margin: "0 0 18px", opacity: 0, transform: "translateY(12px)", animation: "revealUp 480ms ease-out 300ms forwards" }}>
              {flowType === "save" ? <React.Fragment>오늘의 마음을<br />조용히 담아두었어요</React.Fragment> : <React.Fragment>응원의 마음을<br />따뜻하게 전했어요</React.Fragment>}
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: pc ? 16 : 14.5, lineHeight: 1.8, color: "var(--text-muted)", margin: "0 0 30px", opacity: 0, transform: "translateY(12px)", animation: "revealUp 480ms ease-out 500ms forwards" }}>
              {flowType === "save"
                ? <React.Fragment>꾸며진 처방전이 내 기기에<br />안전하게 저장되었어요.<br />마음이 필요한 날 다시 만나보세요.</React.Fragment>
                : <React.Fragment>당신이 꾸민 처방전이<br />응원의 마음과 함께 잘 전달되었어요.</React.Fragment>}
            </p>
            <button onClick={finishCompletion} style={{ display: "block", width: "100%", maxWidth: 420, margin: "0 auto", padding: "16px", borderRadius: 999, border: "none", cursor: "pointer", background: "linear-gradient(135deg,#ABA2ED,#8E86DE)", color: "#fff", fontFamily: "var(--font-body)", fontWeight: 700, fontSize: 16, boxShadow: "0 10px 24px rgba(107,95,207,0.28)", opacity: 0, transform: "translateY(12px)", animation: "revealUp 480ms ease-out 750ms forwards" }}>메인으로 돌아가기</button>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--text-faint)", margin: "18px 0 0", opacity: 0, transform: "translateY(12px)", animation: "revealUp 480ms ease-out 900ms forwards" }}>잠시 후 메인으로 돌아갑니다</p>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
window.StickerScreen = StickerScreen;
