// audio-manager.js — 마음약국 배경음악 매니저 (전역 window.__bgm 싱글턴)
// - 화면별 트랙: 1=인트로 안내, 2=감정선택·문진·처방전, 3=저장/공유 확인·완료
// - 크로스페이드(기본 3s), 같은 트랙이면 이어서 재생(재시작 없음), 자연 루프
// - 지연 로딩: 요청된 트랙 + 다음 트랙만 미리 불러옴
// - 자동재생 제한 대응: 첫 사용자 제스처(클릭/터치/키) 이후 재생 시작
(function () {
  if (window.__bgm) return;

  var SRC = {
    1: "assets/bgm-1-web.mp3",
    2: "assets/bgm-2-web.mp3",
    3: "assets/bgm-3-web.mp3",
  };
  var TARGET = 0.62;          // 최대 볼륨
  var FADE_MS = 3000;         // 크로스페이드 시간
  var els = {};               // 트랙별 Audio 요소 캐시
  var fades = {};             // 트랙별 진행중 fade 타이머
  var current = null;         // 현재(또는 목표) 트랙 번호
  var unlocked = false;
  var pending = null;         // 잠금 해제 전 예약된 트랙
  var muted = false;          // BGM ON/OFF — 재생/크로스페이드 로직은 그대로 두고 출력만 음소거

  function make(n) {
    if (els[n]) return els[n];
    var a = new Audio();
    a.src = SRC[n];
    a.loop = true;
    a.preload = "auto";
    a.volume = 0;
    a.muted = muted;
    els[n] = a;
    return a;
  }

  function setMuted(m) {
    muted = !!m;
    Object.keys(els).forEach(function (n) { els[n].muted = muted; });
    console.log("[__bgm.setMuted]", muted, "tracks:", Object.keys(els).map(function (n) { return n + "=" + els[n].muted; }));
  }

  function fadeTo(n, target, ms, onEnd) {
    var a = els[n];
    if (!a) return;
    if (fades[n]) { clearInterval(fades[n]); fades[n] = null; }
    var from = a.volume;
    var start = performance.now();
    if (ms <= 0) { a.volume = target; if (onEnd) onEnd(); return; }
    fades[n] = setInterval(function () {
      var t = Math.min(1, (performance.now() - start) / ms);
      var v = from + (target - from) * t;
      a.volume = v < 0 ? 0 : v > 1 ? 1 : v;
      if (t >= 1) {
        clearInterval(fades[n]); fades[n] = null;
        if (onEnd) onEnd();
      }
    }, 60);
  }

  function startTrack(n, ms) {
    var a = make(n);
    var p = a.play();
    if (p && p.catch) p.catch(function () {}); // 자동재생 거부는 조용히 무시
    fadeTo(n, TARGET, ms);
  }

  function play(n, opts) {
    n = Number(n);
    if (!SRC[n]) return;
    opts = opts || {};
    var ms = opts.ms != null ? opts.ms : FADE_MS;

    if (!unlocked) { pending = n; return; }      // 제스처 대기중
    if (current === n) {                          // 같은 트랙: 이어서 재생만 보장
      var a = els[n];
      if (a && a.paused) { startTrack(n, ms); }
      else if (a) { fadeTo(n, TARGET, ms); }
      current = n;
      return;
    }
    var prev = current;
    current = n;
    startTrack(n, ms);
    if (prev != null && els[prev]) {              // 이전 트랙 페이드아웃 후 일시정지(위치 보존)
      fadeTo(prev, 0, ms, function () { try { els[prev].pause(); } catch (e) {} });
    }
    // 다음에 올 법한 트랙 살짝 미리 로드 (2 다음 3)
    var nxt = n === 1 ? 2 : n === 2 ? 3 : null;
    if (nxt && !els[nxt]) { var pre = make(nxt); pre.load(); }
  }

  function unlock() {
    if (unlocked) return;
    unlocked = true;
    if (pending != null) { var n = pending; pending = null; play(n, { ms: 1200 }); }
  }
  ["pointerdown", "touchstart", "keydown"].forEach(function (ev) {
    window.addEventListener(ev, unlock, { once: false, passive: true });
  });

  window.__bgm = { play: play, unlock: unlock, setMuted: setMuted, get muted() { return muted; }, get current() { return current; } };
})();

// 전역 클릭 효과음 싱글턴 (window.__sfx) — 자가문진 이후 화면들의 "주요 CTA 버튼"이
// 공통으로 쓰는 달칵 사운드. src별로 Audio 요소를 하나씩 캐시해 재사용하므로, 같은
// 버튼을 연속으로 눌러도 재생 중인 소리를 되감아 재시작할 뿐 여러 겹으로 쌓이지 않는다.
// BGM(window.__bgm)과는 별개 채널이라 서로 방해하지 않는다.
(function () {
  if (window.__sfx) return;
  var els = {};
  var muted = false; // 효과음 ON/OFF — 꺼져 있으면 재생 자체를 건너뛴다(기존 재생 로직은 불변)
  function play(src, rate) {
    if (muted) return;
    try {
      var a = els[src];
      if (!a) {
        a = new Audio(src);
        if (rate) {
          a.playbackRate = rate;
          a.preservesPitch = true;
          a.mozPreservesPitch = true;
          a.webkitPreservesPitch = true;
        }
        els[src] = a;
      }
      a.currentTime = 0;
      var p = a.play();
      if (p && p.catch) p.catch(function () {});
    } catch (e) { /* noop */ }
  }
  function setMuted(m) {
    muted = !!m;
    console.log("[__sfx.setMuted]", muted, "cached srcs:", Object.keys(els));
  }
  window.__sfx = { play: play, setMuted: setMuted, get muted() { return muted; } };
})();

// 사운드 설정(BGM/효과음 개별 ON-OFF) — localStorage에 영속시켜 새로고침·화면 전환 후에도
// 유지한다. window.__bgm/__sfx의 기존 재생·크로스페이드·타이밍 로직은 전혀 건드리지 않고,
// 이 모듈이 그 위에서 음소거 상태만 적용/구독시킨다.
(function () {
  if (window.__soundSettings) return;
  var KEY = "soulpharmacy-sound-settings-v1";
  var settings = { bgm: true, sfx: true };
  try {
    var raw = localStorage.getItem(KEY);
    if (raw) {
      var parsed = JSON.parse(raw);
      if (typeof parsed.bgm === "boolean") settings.bgm = parsed.bgm;
      if (typeof parsed.sfx === "boolean") settings.sfx = parsed.sfx;
    }
  } catch (e) { /* localStorage 사용 불가 — 기본값(둘 다 ON) 유지 */ }

  function persist() {
    try { localStorage.setItem(KEY, JSON.stringify(settings)); } catch (e) {}
  }
  function applyToPlayers() {
    console.log("[__soundSettings] applyToPlayers", settings, "hasBgm:", !!window.__bgm, "hasSfx:", !!window.__sfx);
    if (window.__bgm && window.__bgm.setMuted) window.__bgm.setMuted(!settings.bgm);
    if (window.__sfx && window.__sfx.setMuted) window.__sfx.setMuted(!settings.sfx);
  }
  var listeners = [];
  function notify() {
    var snap = { bgm: settings.bgm, sfx: settings.sfx };
    listeners.forEach(function (fn) { try { fn(snap); } catch (e) {} });
  }
  applyToPlayers();

  window.__soundSettings = {
    get: function () { return { bgm: settings.bgm, sfx: settings.sfx }; },
    setBgm: function (on) { settings.bgm = !!on; persist(); applyToPlayers(); notify(); },
    setSfx: function (on) { settings.sfx = !!on; persist(); applyToPlayers(); notify(); },
    subscribe: function (fn) {
      listeners.push(fn);
      return function () { listeners = listeners.filter(function (f) { return f !== fn; }); };
    },
  };
})();
