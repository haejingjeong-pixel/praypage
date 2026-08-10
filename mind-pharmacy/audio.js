// audio.js — 마음약국 배경음악 (바닐라). 규칙: class/var/window할당/IIFE/new Promise 금지.
// 트랙 1=인트로, 2=감정선택·문진·처방전, 3=꾸미기·저장/공유. 크로스페이드·자연루프·제스처 언락.

const BGM_SRC = {
  1: "assets/bgm-1-web.mp3",
  2: "assets/bgm-2-web.mp3",
  3: "assets/bgm-3-web.mp3"
};
const BGM_TARGET = 0.62;
const BGM_FADE_MS = 3000;

const bgm = { els: {}, fades: {}, current: null, wanted: null, unlocked: false };

const bgmMake = (n) => {
  if (bgm.els[n]) return bgm.els[n];
  const a = new Audio();
  a.src = BGM_SRC[n];
  a.loop = true;
  a.preload = "auto";
  a.volume = 0;
  bgm.els[n] = a;
  return a;
};

const bgmFade = (n, to, ms) => {
  const a = bgmMake(n);
  if (bgm.fades[n]) { window.clearInterval(bgm.fades[n]); bgm.fades[n] = null; }
  const from = a.volume;
  const steps = Math.max(1, Math.round(ms / 50));
  let i = 0;
  bgm.fades[n] = window.setInterval(() => {
    i += 1;
    const v = from + (to - from) * (i / steps);
    a.volume = v < 0 ? 0 : (v > 1 ? 1 : v);
    if (i >= steps) {
      window.clearInterval(bgm.fades[n]);
      bgm.fades[n] = null;
      if (to === 0) { a.pause(); a.currentTime = 0; }
    }
  }, 50);
};

const bgmPlay = (n) => {
  bgm.wanted = n;
  if (!bgm.unlocked) return;
  if (bgm.current === n) return;
  const prev = bgm.current;
  bgm.current = n;
  if (prev && bgm.els[prev]) bgmFade(prev, 0, BGM_FADE_MS);
  const a = bgmMake(n);
  const kick = a.play();
  if (kick && kick.catch) kick.catch(() => {});
  bgmFade(n, BGM_TARGET, BGM_FADE_MS);
};

const bgmUnlock = () => {
  if (bgm.unlocked) return;
  bgm.unlocked = true;
  if (bgm.wanted) { const w = bgm.wanted; bgm.current = null; bgmPlay(w); }
};

window.addEventListener("pointerdown", bgmUnlock, { once: false });
window.addEventListener("keydown", bgmUnlock, { once: false });
