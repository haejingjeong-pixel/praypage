// 마음약국 — vanilla app (classic script; top-level const/함수는 형제 스크립트와 전역 스코프 공유).
// 규칙: module 금지 · class 금지 · var 금지 · window 할당 금지 · IIFE 금지 · 고차함수(map/forEach) 금지 · async/await만.

const ASSET = "assets-web/";

const MOODS = [
  { key: "anxious", label: "불안해요" },
  { key: "broken",  label: "마음이 무너졌어요" },
  { key: "compare", label: "비교돼요" },
  { key: "waiting", label: "기다리기 힘들어요" },
  { key: "forgive", label: "용서가 안 돼요" },
  { key: "distant", label: "하나님이 멀게 느껴져요" },
  { key: "calling", label: "책임이 버거워요" },
  { key: "thanks",  label: "감사가 사라졌어요" }
];

const state = {
  screen: "intro",
  mood: null,
  moodLabel: "",
  step: 0,
  selections: {},
  prescription: null
};

const appEl = document.getElementById("app");

const escapeText = (t) => {
  const map = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" };
  let out = "";
  for (const ch of String(t == null ? "" : t)) out += map[ch] || ch;
  return out;
};

const leafMarkup = () =>
  '<img class="leaf leaf-tl" src="' + ASSET + 'leaf-tl-soft.png" alt="">' +
  '<img class="leaf leaf-br" src="' + ASSET + 'leaf-br-soft.png" alt="">';

const todayText = () => {
  const d = new Date();
  const mm = ("0" + (d.getMonth() + 1)).slice(-2);
  const dd = ("0" + d.getDate()).slice(-2);
  return d.getFullYear() + "." + mm + "." + dd;
};

// ---------- Intro ----------
const renderIntro = () => {
  appEl.innerHTML =
    leafMarkup() +
    '<section class="screen intro">' +
      '<img class="intro-logo" src="' + ASSET + 'logo-mark.webp" alt="마음약국">' +
      '<p class="intro-line show">괜찮은 척하지 않아도 괜찮아요.<br>지금 마음에 가까운 증상을 하나 골라주세요.</p>' +
      '<p class="intro-sub show">오늘의 마음에 맞는 말씀 한 알을 처방해 드릴게요.</p>' +
      '<button class="btn btn-primary intro-start" id="introStart">말씀 처방받기</button>' +
    '</section>';
  const start = document.getElementById("introStart");
  start.addEventListener("click", goEmotion);
  bgmPlay(1);
};

const goEmotion = () => {
  state.screen = "emotion";
  bgmPlay(2);
  renderEmotion();
};

// ---------- Emotion select ----------
const renderEmotion = () => {
  let cards = "";
  for (const m of MOODS) {
    cards +=
      '<button class="env" data-mood="' + m.key + '" data-label="' + escapeText(m.label) + '">' +
        '<img class="env-img" src="' + ASSET + 'env-' + m.key + '.webp" alt="">' +
        '<span class="env-label">' + escapeText(m.label) + '</span>' +
      '</button>';
  }
  appEl.innerHTML =
    leafMarkup() +
    '<section class="screen emotion fade-in">' +
      '<p class="eyebrow">말씀 처방전</p>' +
      '<h1 class="screen-title">오늘 마음이 어디가 아픈가요?</h1>' +
      '<p class="screen-desc">내 마음에 가까운 증상을 하나 골라주세요.</p>' +
      '<div class="emotion-grid">' + cards + '</div>' +
      '<p class="emotion-foot">마음 카드를 하나 골라주세요.</p>' +
    '</section>';
  const grid = appEl.querySelector(".emotion-grid");
  grid.addEventListener("click", onEmotionClick);
};

const onEmotionClick = (ev) => {
  const btn = ev.target.closest(".env");
  if (!btn) return;
  state.mood = btn.getAttribute("data-mood");
  state.moodLabel = btn.getAttribute("data-label");
  state.step = 0;
  state.selections = {};
  state.prescription = null;
  state.screen = "assess";
  renderAssessment();
};

// ---------- Assessment ----------
const renderAssessment = () => {
  const data = getAssessment(state.mood);
  const groups = data.groups || [];
  const g = groups[state.step] || {};
  const total = groups.length;
  let opts = "";
  const list = g.options || [];
  for (let i = 0; i < list.length; i++) {
    const key = state.step + "-" + i;
    const on = state.selections[key] ? " sel" : "";
    opts +=
      '<button class="opt' + on + '" data-key="' + key + '">' +
        '<span class="tick">✓</span>' +
        '<span>' + escapeText(list[i]) + '</span>' +
      '</button>';
  }
  const answered = hasAnswer(state.step);
  const isLast = state.step === total - 1;
  const nextLabel = isLast ? (data.cta || "문진 완료") : "다음";
  appEl.innerHTML =
    leafMarkup() +
    '<section class="screen assess fade-in">' +
      '<div class="paper">' +
        '<p class="assess-progress">' + (state.step + 1) + " / " + total + '</p>' +
        '<h2 class="assess-q">' + escapeText(g.question) + '</h2>' +
        '<p class="assess-hint">' + escapeText(g.hint) + '</p>' +
        '<div class="opts">' + opts + '</div>' +
        '<div class="assess-nav">' +
          '<button class="btn btn-ghost" id="assessPrev">' + (state.step === 0 ? "그만두기" : "이전") + '</button>' +
          '<button class="btn btn-primary" id="assessNext"' + (answered ? "" : " disabled") + '>' + nextLabel + '</button>' +
        '</div>' +
      '</div>' +
    '</section>';
  appEl.querySelector(".opts").addEventListener("click", onOptionClick);
  document.getElementById("assessPrev").addEventListener("click", onAssessPrev);
  document.getElementById("assessNext").addEventListener("click", onAssessNext);
};

const hasAnswer = (step) => {
  for (const k in state.selections) {
    if (k.indexOf(step + "-") === 0 && state.selections[k]) return true;
  }
  return false;
};

const clearStep = (step) => {
  for (const k in state.selections) {
    if (k.indexOf(step + "-") === 0) state.selections[k] = false;
  }
};

const onOptionClick = (ev) => {
  const btn = ev.target.closest(".opt");
  if (!btn) return;
  const key = btn.getAttribute("data-key");
  clearStep(state.step); // Q별 단일 선택
  state.selections[key] = true;
  renderAssessment();
};

const onAssessPrev = () => {
  if (state.step === 0) { state.screen = "emotion"; renderEmotion(); return; }
  state.step -= 1;
  renderAssessment();
};

const onAssessNext = () => {
  const data = getAssessment(state.mood);
  const total = (data.groups || []).length;
  if (!hasAnswer(state.step)) return;
  if (state.step < total - 1) { state.step += 1; renderAssessment(); return; }
  finishAssessment();
};

const finishAssessment = () => {
  state.prescription = resolvePrescription(state.mood, state.selections, state.prescription);
  state.screen = "result";
  renderResult();
};

// ---------- Prescription card (result + decorate 공용) ----------
const rxCardMarkup = (rx) => {
  const cell = (k, v) =>
    '<div class="rx-cell"><p class="k">' + k + '</p><p class="v">' + escapeText(v || "-") + '</p></div>';
  const sec = (title, body) => body
    ? '<div class="rx-sec"><h4>' + title + '</h4><p>' + escapeText(body) + '</p></div>' : "";
  let verseBlock = "";
  if (rx.verse) {
    verseBlock =
      '<div class="rx-sec rx-verse"><h4>오늘 곁에 있어줄 말씀</h4>' +
        '<p class="verse">' + escapeText(rx.verse) + '</p>' +
        (rx.reference ? '<p class="ref">' + escapeText(rx.reference) + " · 개역한글</p>" : "") +
      '</div>';
  }
  return '<article class="rx" id="rxCard"><div class="rx-inner">' +
    '<header class="rx-head"><p class="rx-brand">마음약국</p><h3 class="rx-title">말씀 처방전</h3></header>' +
    '<div class="rx-grid">' +
      cell("처방일", todayText()) + cell("증상", rx.symptom) +
      cell("마음 강도", rx.intensity) + cell("처방 단어", rx.word) +
    '</div>' +
    sec("마음 소견", rx.opinion) + verseBlock + sec("복용법", rx.dose) +
    sec("주의사항", rx.caution) + sec("작은 실천", rx.practice) +
    '<div class="rx-word"><span class="lab">오늘의 처방 단어</span><p class="w">' + escapeText(rx.word) + '</p></div>' +
  '</div></article>';
};

// ---------- Result ----------
const renderResult = () => {
  const rx = state.prescription;
  if (!rx) { renderPending(); return; }
  appEl.innerHTML =
    leafMarkup() +
    '<section class="screen result fade-in">' +
      '<p class="result-eyebrow">오늘의 말씀 처방전</p>' +
      rxCardMarkup(rx) +
      '<div class="result-actions">' +
        '<button class="btn btn-primary" id="rxDecorate">처방전 꾸미기</button>' +
        '<button class="btn btn-ghost" id="rxAgain">다시 처방받기</button>' +
      '</div>' +
    '</section>';
  document.getElementById("rxAgain").addEventListener("click", goEmotion);
  document.getElementById("rxDecorate").addEventListener("click", onDecorate);
};

const renderPending = () => {
  appEl.innerHTML =
    leafMarkup() +
    '<section class="screen result fade-in"><div class="pending">' +
      '<h3>이 감정의 처방전은 준비 중이에요</h3>' +
      '<p>선택하신 마음의 말씀 처방전을 곧 담아드릴게요.<br>다른 마음으로 먼저 처방받아 보실 수 있어요.</p>' +
      '<button class="btn btn-primary" id="pendBack">다른 마음 고르기</button>' +
    '</div></section>';
  document.getElementById("pendBack").addEventListener("click", goEmotion);
};

// ---------- Sticker decorate ----------
const STICKER_ROOT = "";
const decorateState = { stickers: [], selectedId: 0, seq: 0, pickerOpen: false, drag: null };

const stickerCategories = () => (STICKER_SET && STICKER_SET.categories) || [];
const stickerFiles = (catKey) => (STICKER_SET && STICKER_SET.files && STICKER_SET.files[catKey]) || [];

const onDecorate = () => {
  decorateState.stickers = [];
  decorateState.selectedId = 0;
  decorateState.seq = 0;
  decorateState.pickerOpen = false;
  state.screen = "decorate";
  bgmPlay(3);
  renderDecorate();
};

const renderDecorate = () => {
  const rx = state.prescription;
  let items = "";
  const list = decorateState.stickers;
  for (let i = 0; i < list.length; i++) {
    const s = list[i];
    const on = s.id === decorateState.selectedId ? " sel" : "";
    items +=
      '<div class="stk' + on + '" data-id="' + s.id + '" data-x="' + s.x + '" data-y="' + s.y +
        '" data-scale="' + s.scale + '" data-rot="' + s.rot + '">' +
        '<img class="stk-img" src="' + escapeText(s.src) + '" alt="" draggable="false">' +
        '<span class="stk-h stk-rot" data-role="rot">↻</span>' +
        '<span class="stk-h stk-size" data-role="size">⤢</span>' +
        '<button class="stk-h stk-del" data-role="del">✕</button>' +
      '</div>';
  }
  appEl.innerHTML =
    leafMarkup() +
    '<section class="screen decorate fade-in">' +
      '<p class="result-eyebrow">처방전 꾸미기</p>' +
      '<p class="decorate-hint">응원 스티커를 골라 처방전에 붙여보세요.</p>' +
      '<div class="decorate-stage">' +
        '<div class="rx-canvas" id="rxCanvas">' +
          rxCardMarkup(rx) +
          '<div class="stk-layer" id="stkLayer">' + items + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="decorate-tools">' +
        '<button class="btn btn-primary" id="stkAdd">＋ 응원 스티커 붙이기</button>' +
      '</div>' +
      '<div class="result-actions">' +
        '<button class="btn btn-ghost" id="stkSave">이미지로 저장하기</button>' +
        '<button class="btn btn-primary" id="stkShare">소중한 사람에게 공유하기</button>' +
      '</div>' +
      '<div class="result-actions"><button class="btn btn-ghost" id="stkBack">처방전으로 돌아가기</button></div>' +
      (decorateState.pickerOpen ? stickerPickerMarkup() : "") +
    '</section>';
  positionStickers();
  document.getElementById("stkAdd").addEventListener("click", openPicker);
  document.getElementById("stkSave").addEventListener("click", onSave);
  document.getElementById("stkShare").addEventListener("click", onShare);
  document.getElementById("stkBack").addEventListener("click", renderResult);
  document.getElementById("rxCanvas").addEventListener("pointerdown", onCanvasPointerDown);
  const layer = document.getElementById("stkLayer");
  layer.addEventListener("pointerdown", onStickerPointerDown);
  if (decorateState.pickerOpen) bindPicker();
};

const positionStickers = () => {
  const nodes = appEl.querySelectorAll(".stk");
  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    const x = n.getAttribute("data-x");
    const y = n.getAttribute("data-y");
    const sc = n.getAttribute("data-scale");
    const rot = n.getAttribute("data-rot");
    n.style.left = x + "%";
    n.style.top = y + "%";
    n.style.transform = "translate(-50%,-50%) rotate(" + rot + "deg) scale(" + sc + ")";
  }
};

const findSticker = (id) => {
  for (let i = 0; i < decorateState.stickers.length; i++) {
    if (decorateState.stickers[i].id === Number(id)) return decorateState.stickers[i];
  }
  return null;
};

// ----- Picker modal -----
const openPicker = () => { decorateState.pickerOpen = true; renderDecorate(); };
const closePicker = () => { decorateState.pickerOpen = false; renderDecorate(); };

const stickerPickerMarkup = () => {
  const cats = stickerCategories();
  const active = decorateState.pickerCat || (cats[0] && cats[0].key) || "normal";
  let tabs = "";
  for (let i = 0; i < cats.length; i++) {
    const on = cats[i].key === active ? " on" : "";
    tabs += '<button class="pick-tab' + on + '" data-cat="' + cats[i].key + '">' + escapeText(cats[i].label) + '</button>';
  }
  let grid = "";
  const files = stickerFiles(active);
  for (let i = 0; i < files.length; i++) {
    grid += '<button class="pick-item" data-src="' + escapeText(STICKER_ROOT + files[i]) + '"><img src="' + escapeText(STICKER_ROOT + files[i]) + '" alt="" loading="lazy"></button>';
  }
  return '<div class="pick-overlay" id="pickOverlay">' +
    '<div class="pick-modal" role="dialog" aria-label="스티커 선택">' +
      '<div class="pick-head"><span>스티커 선택</span><button class="pick-close" id="pickClose" aria-label="닫기">✕</button></div>' +
      '<div class="pick-tabs">' + tabs + '</div>' +
      '<div class="pick-grid">' + grid + '</div>' +
    '</div></div>';
};

const bindPicker = () => {
  document.getElementById("pickClose").addEventListener("click", closePicker);
  const overlay = document.getElementById("pickOverlay");
  overlay.addEventListener("pointerdown", onPickerBackdrop);
  const tabs = appEl.querySelectorAll(".pick-tab");
  for (let i = 0; i < tabs.length; i++) tabs[i].addEventListener("click", onPickerTab);
  const items = appEl.querySelectorAll(".pick-item");
  for (let i = 0; i < items.length; i++) items[i].addEventListener("click", onPickerPick);
};

const onPickerBackdrop = (ev) => { if (ev.target.id === "pickOverlay") closePicker(); };
const onPickerTab = (ev) => { decorateState.pickerCat = ev.currentTarget.getAttribute("data-cat"); renderDecorate(); };
const onPickerPick = (ev) => {
  const src = ev.currentTarget.getAttribute("data-src");
  decorateState.seq += 1;
  const id = decorateState.seq;
  decorateState.stickers.push({ id: id, src: src, x: 50, y: 52, scale: 1, rot: 0 });
  decorateState.selectedId = id;
  decorateState.pickerOpen = false;
  renderDecorate();
};

// ----- Select / drag / resize / rotate -----
const onCanvasPointerDown = (ev) => {
  if (ev.target.closest(".stk")) return;
  decorateState.selectedId = 0;
  renderDecorate();
};

const onStickerPointerDown = (ev) => {
  const node = ev.target.closest(".stk");
  if (!node) return;
  ev.stopPropagation();
  const id = Number(node.getAttribute("data-id"));
  const s = findSticker(id);
  if (!s) return;
  decorateState.selectedId = id;
  const role = ev.target.getAttribute("data-role");
  if (role === "del") { removeSticker(id); return; }
  const canvas = document.getElementById("rxCanvas");
  const rect = canvas.getBoundingClientRect();
  decorateState.drag = { id: id, mode: role || "move", rect: rect, startX: ev.clientX, startY: ev.clientY, s0: { x: s.x, y: s.y, scale: s.scale, rot: s.rot } };
  window.addEventListener("pointermove", onStickerPointerMove);
  window.addEventListener("pointerup", onStickerPointerUp);
  if (!role) syncSelection(); else renderDecorate();
};

const clamp = (v, lo, hi) => (v < lo ? lo : (v > hi ? hi : v));

const onStickerPointerMove = (ev) => {
  const d = decorateState.drag;
  if (!d) return;
  const s = findSticker(d.id);
  if (!s) return;
  const w = d.rect.width || 1;
  const h = d.rect.height || 1;
  if (d.mode === "move") {
    s.x = clamp(d.s0.x + ((ev.clientX - d.startX) / w) * 100, 4, 96);
    s.y = clamp(d.s0.y + ((ev.clientY - d.startY) / h) * 100, 4, 96);
  } else if (d.mode === "size") {
    const dist = Math.hypot(ev.clientX - d.startX, ev.clientY - d.startY);
    const dir = (ev.clientX - d.startX) >= 0 ? 1 : -1;
    s.scale = clamp(d.s0.scale + (dir * dist) / 140, 0.4, 3);
  } else if (d.mode === "rot") {
    const cx = d.rect.left + (s.x / 100) * w;
    const cy = d.rect.top + (s.y / 100) * h;
    const ang = Math.atan2(ev.clientY - cy, ev.clientX - cx) * 180 / Math.PI;
    s.rot = Math.round(ang + 90);
  }
  syncSelection();
};

const onStickerPointerUp = () => {
  decorateState.drag = null;
  window.removeEventListener("pointermove", onStickerPointerMove);
  window.removeEventListener("pointerup", onStickerPointerUp);
};

// 드래그 중엔 재렌더 없이 선택 스티커의 transform만 갱신(부드럽게).
const syncSelection = () => {
  const node = appEl.querySelector('.stk[data-id="' + decorateState.selectedId + '"]');
  const s = findSticker(decorateState.selectedId);
  if (!node || !s) return;
  node.style.left = s.x + "%";
  node.style.top = s.y + "%";
  node.style.transform = "translate(-50%,-50%) rotate(" + s.rot + "deg) scale(" + s.scale + ")";
  node.classList.add("sel");
};

const removeSticker = (id) => {
  const next = [];
  for (let i = 0; i < decorateState.stickers.length; i++) {
    if (decorateState.stickers[i].id !== Number(id)) next.push(decorateState.stickers[i]);
  }
  decorateState.stickers = next;
  decorateState.selectedId = 0;
  renderDecorate();
};

// ----- Save / Share (카드만 캡처) -----
const captureCard = async () => {
  decorateState.selectedId = 0;
  renderDecorate();
  const canvas = document.getElementById("rxCanvas");
  const out = await html2canvas(canvas, { backgroundColor: null, scale: 2, useCORS: true });
  return out;
};

const onSave = async () => {
  const canvas = await captureCard();
  const url = canvas.toDataURL("image/png");
  const a = document.createElement("a");
  a.href = url;
  a.download = "마음약국-말씀처방전.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

const onShare = async () => {
  const canvas = await captureCard();
  const url = canvas.toDataURL("image/png");
  if (navigator.share) {
    const res = await fetch(url);
    const blob = await res.blob();
    const file = new File([blob], "마음약국-말씀처방전.png", { type: "image/png" });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({ files: [file], title: "마음약국 말씀 처방전" });
      return;
    }
  }
  const a = document.createElement("a");
  a.href = url;
  a.download = "마음약국-말씀처방전.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

renderIntro();
