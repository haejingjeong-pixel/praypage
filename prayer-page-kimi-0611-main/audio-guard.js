(function () {
  "use strict";

  var BGM_KEY = "codex-user-bgm-enabled";
  var FIRE_AMBIENT_SRC = "assets/asmr_fire.mp3";
  var MEDIA_ARTWORK_SRC = "assets/media-artwork.png?v=blue-media-artwork-20260708";
  var BGM_VOLUME = 0.4;
  var FIRE_AMBIENT_VOLUME = 1.0;
  var GOLBANG_FADE_MS = 1200;
  var GOLBANG_FADE_BEFORE_END_SEC = 1.4;
  var activeTheme = "golbang";
  var bgm = null;
  var fireAmbient = null;
  var audioUnlocked = false;
  var audioUnlocking = false;
  var firstGestureBgmStarted = false;
  var fireAmbientStarted = false;
  var fireAmbientStarting = false;
  var lastCcmClickAt = 0;
  var audioContext = null;
  var golbangPlaylistIndex = -1;
  var golbangTransitioning = false;
  var bgmFadeTimer = 0;

  setEnabled(false);

  var GOLBANG_PLAYLIST = [
    "assets/golbang_piano_heaven_earth.mp3",
    "assets/golbang_piano_believe.mp3",
    "assets/golbang_piano_voyager.mp3"
  ];

  var THEME_BGM = {
    golbang: GOLBANG_PLAYLIST[0],
    desert: "assets/ccm_prayer.mp3",
    sinal: "assets/ccm_sinae.mp3",
    mark: "assets/ccm_maga2.mp3",
    summer: "assets/Forest%20Prayer3.mp3",
    jonah: "assets/ccm_yona6.mp3",
    night: "assets/ccm_night5.mp3",
    gethsemane: "assets/sound_gathe.mp3"
  };

  var LABEL_TO_THEME = {
    "은밀한 골방": "golbang",
    "사막의 제단": "desert",
    "모세의 시내산": "sinal",
    "마가 다락방": "mark",
    "여름 녹음": "summer",
    "요나의 고래뱃속": "jonah",
    "어두운 밤": "night",
    "겟세마네 동산": "gethsemane"
  };

  var THEME_TITLE = {
    golbang: "은밀한 골방",
    desert: "사막의 제단",
    sinal: "모세의 시내산",
    mark: "마가 다락방",
    summer: "여름 녹음",
    jonah: "요나의 고래뱃속",
    night: "어두운 밤",
    gethsemane: "겟세마네 동산"
  };

  function updateMediaSession(state) {
    if (!("mediaSession" in navigator) || typeof window.MediaMetadata !== "function") return;

    var artworkUrl;
    try {
      artworkUrl = new URL(MEDIA_ARTWORK_SRC, window.location.href).href;
    } catch (error) {
      artworkUrl = MEDIA_ARTWORK_SRC;
    }

    try {
      navigator.mediaSession.metadata = new window.MediaMetadata({
        title: THEME_TITLE[activeTheme] || "기도 타임",
        artist: "Prayer Page",
        album: "기도 타임",
        artwork: [
          { src: artworkUrl, sizes: "96x96", type: "image/png" },
          { src: artworkUrl, sizes: "128x128", type: "image/png" },
          { src: artworkUrl, sizes: "192x192", type: "image/png" },
          { src: artworkUrl, sizes: "256x256", type: "image/png" },
          { src: artworkUrl, sizes: "384x384", type: "image/png" },
          { src: artworkUrl, sizes: "512x512", type: "image/png" }
        ]
      });
      if (state && "playbackState" in navigator.mediaSession) {
        navigator.mediaSession.playbackState = state;
      }
    } catch (error) {
      console.warn("[codex-audio] Media Session metadata failed", error);
    }
  }

  function normalizeText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function normalizeSrc(src) {
    if (!src) return "";
    try {
      return new URL(src, window.location.href).pathname;
    } catch (error) {
      return String(src).split("?")[0];
    }
  }

  function isEnabled() {
    return localStorage.getItem(BGM_KEY) === "true";
  }

  function setEnabled(value) {
    localStorage.setItem(BGM_KEY, value ? "true" : "false");
  }

  function clearBgmFade() {
    if (bgmFadeTimer) {
      window.clearInterval(bgmFadeTimer);
      bgmFadeTimer = 0;
    }
  }

  function fadeBgmVolume(audio, targetVolume, duration) {
    clearBgmFade();
    return new Promise(function (resolve) {
      var startVolume = Number(audio.volume) || 0;
      var startedAt = Date.now();
      var safeDuration = Math.max(1, duration || 1);

      bgmFadeTimer = window.setInterval(function () {
        var progress = Math.min(1, (Date.now() - startedAt) / safeDuration);
        audio.volume = startVolume + (targetVolume - startVolume) * progress;
        if (progress >= 1) {
          clearBgmFade();
          audio.volume = targetVolume;
          resolve();
        }
      }, 50);
    });
  }

  function resetGolbangPlaylist() {
    golbangPlaylistIndex = -1;
    golbangTransitioning = false;
    clearBgmFade();
  }

  function ensureGolbangPlaylistIndex() {
    if (golbangPlaylistIndex < 0 || golbangPlaylistIndex >= GOLBANG_PLAYLIST.length) {
      golbangPlaylistIndex = Math.floor(Math.random() * GOLBANG_PLAYLIST.length);
    }
    return golbangPlaylistIndex;
  }

  function getGolbangPlaylistSrc() {
    return GOLBANG_PLAYLIST[ensureGolbangPlaylistIndex()];
  }

  function advanceGolbangPlaylist() {
    ensureGolbangPlaylistIndex();
    golbangPlaylistIndex = (golbangPlaylistIndex + 1) % GOLBANG_PLAYLIST.length;
    return getGolbangPlaylistSrc();
  }

  function setActiveTheme(theme) {
    if (!theme || !THEME_BGM[theme]) return;
    if (theme === "golbang" && activeTheme !== "golbang") {
      resetGolbangPlaylist();
    }
    if (theme !== "golbang" && activeTheme === "golbang") {
      resetGolbangPlaylist();
    }
    activeTheme = theme;
  }

  function getBgm() {
    if (!bgm) {
      bgm = new Audio();
      bgm.loop = true;
      bgm.volume = BGM_VOLUME;
      bgm.preload = "auto";
      bgm.setAttribute("playsinline", "");
      bgm.setAttribute("webkit-playsinline", "");
      bgm.dataset.codexManagedBgm = "true";
      bgm.addEventListener("ended", handleBgmEnded);
      bgm.addEventListener("timeupdate", handleBgmTimeupdate);
    }
    return bgm;
  }

  function getFireAmbient() {
    if (!fireAmbient) {
      fireAmbient = new Audio(FIRE_AMBIENT_SRC);
      fireAmbient.loop = true;
      fireAmbient.volume = FIRE_AMBIENT_VOLUME;
      fireAmbient.preload = "auto";
      fireAmbient.setAttribute("playsinline", "");
      fireAmbient.setAttribute("webkit-playsinline", "");
      fireAmbient.dataset.codexFireAmbient = "true";
      if (document.body) {
        fireAmbient.style.display = "none";
        document.body.appendChild(fireAmbient);
      }
    }
    return fireAmbient;
  }

  function prepareFireAmbient() {
    var audio = getFireAmbient();
    try {
      audio.loop = true;
      audio.muted = false;
      audio.volume = FIRE_AMBIENT_VOLUME;
      audio.load();
    } catch (error) {}
    return audio;
  }

  function unlockAudioContext() {
    var AudioContextCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextCtor) return;

    try {
      if (!audioContext) audioContext = new AudioContextCtor();
      if (audioContext.state === "suspended") audioContext.resume().catch(function (error) {
        console.warn("[codex-audio] AudioContext resume failed", error);
      });
    } catch (error) {
      console.warn("[codex-audio] AudioContext unlock failed", error);
    }
  }

  function removeFirstGestureListeners() {
    window.removeEventListener("pointerdown", startBgmFromFirstGesture, true);
    window.removeEventListener("touchstart", startBgmFromFirstGesture, true);
    window.removeEventListener("pointerup", startBgmFromFirstGesture, true);
    window.removeEventListener("touchend", startBgmFromFirstGesture, true);
    window.removeEventListener("click", startBgmFromFirstGesture, true);
  }

  function startBgmFromFirstGesture(event) {
    if (audioUnlocked || audioUnlocking) return;
    audioUnlocking = true;
    unlockAudioContext();
    audioUnlocked = true;
    audioUnlocking = false;
    removeFirstGestureListeners();

    if (!firstGestureBgmStarted) {
      firstGestureBgmStarted = true;
      setEnabled(true);
      prepareFireAmbient();
      playCurrentTheme("first-gesture");
      syncFireAmbient("first-gesture");
    }
  }

  function getCurrentThemeFromDom() {
    var body = document.body;
    if (!body) return activeTheme;

    var byTheme = body.dataset && body.dataset.theme;
    if (byTheme && THEME_BGM[byTheme]) return byTheme;

    var byLabel = normalizeText(body.dataset && body.dataset.currentTheme);
    if (byLabel && LABEL_TO_THEME[byLabel]) return LABEL_TO_THEME[byLabel];

    var className = String(body.className || "");
    var found = Object.keys(THEME_BGM).find(function (theme) {
      return className.indexOf("codex-theme-" + theme) !== -1;
    });
    return found || activeTheme;
  }

  function syncTheme() {
    var theme = getCurrentThemeFromDom();
    if (theme && THEME_BGM[theme]) setActiveTheme(theme);
    return activeTheme;
  }

  function setBgmSource(theme) {
    var src = theme === "golbang" ? getGolbangPlaylistSrc() : THEME_BGM[theme];
    if (!src) return null;

    var audio = getBgm();
    audio.loop = theme !== "golbang";
    if (normalizeSrc(audio.getAttribute("src") || audio.src) !== normalizeSrc(src)) {
      clearBgmFade();
      audio.pause();
      audio.src = src;
      audio.load();
    }
    return audio;
  }

  function playCurrentTheme(reason) {
    syncTheme();
    updateMediaSession("playing");

    var audio = setBgmSource(activeTheme);
    if (!audio) return Promise.resolve();

    audio.muted = false;
    audio.loop = activeTheme !== "golbang";
    if (activeTheme !== "golbang") {
      clearBgmFade();
      audio.volume = BGM_VOLUME;
    } else if (audio.paused || audio.currentTime < 0.25) {
      audio.volume = 0;
    }

    return audio.play().then(function () {
      if (activeTheme === "golbang" && audio.volume < BGM_VOLUME) {
        return fadeBgmVolume(audio, BGM_VOLUME, GOLBANG_FADE_MS);
      }
    }).catch(function (error) {
      updateMediaSession("paused");
      console.warn("[codex-audio] play failed", reason, activeTheme, audio.src, error);
    });
  }

  function stopBgm() {
    if (!bgm) return;
    try {
      clearBgmFade();
      bgm.pause();
      updateMediaSession("paused");
    } catch (error) {}
  }

  function playNextGolbangTrack(reason, skipFadeOut) {
    if (activeTheme !== "golbang" || !isEnabled() || golbangTransitioning) {
      return Promise.resolve();
    }

    golbangTransitioning = true;
    var audio = getBgm();

    function startNext() {
      var nextSrc = advanceGolbangPlaylist();
      clearBgmFade();
      audio.pause();
      audio.src = nextSrc;
      audio.loop = false;
      audio.volume = 0;
      audio.load();
      updateMediaSession("playing");
      return audio.play().then(function () {
        return fadeBgmVolume(audio, BGM_VOLUME, GOLBANG_FADE_MS);
      }).catch(function (error) {
        updateMediaSession("paused");
        console.warn("[codex-audio] golbang playlist play failed", reason, nextSrc, error);
      }).then(function () {
        golbangTransitioning = false;
      });
    }

    if (skipFadeOut || audio.paused || audio.ended) {
      return startNext();
    }

    return fadeBgmVolume(audio, 0, GOLBANG_FADE_MS).then(startNext);
  }

  function handleBgmEnded() {
    if (activeTheme === "golbang") {
      playNextGolbangTrack("golbang-ended", true);
    }
  }

  function handleBgmTimeupdate() {
    if (activeTheme !== "golbang" || golbangTransitioning || !isEnabled() || !bgm) return;
    if (!Number.isFinite(bgm.duration) || bgm.duration <= 0) return;
    if (bgm.duration - bgm.currentTime <= GOLBANG_FADE_BEFORE_END_SEC) {
      playNextGolbangTrack("golbang-near-end", false);
    }
  }

  function stopFireAmbient() {
    if (!fireAmbient) return;
    try {
      fireAmbient.pause();
      fireAmbient.currentTime = 0;
    } catch (error) {}
    fireAmbientStarted = false;
  }

  function playFireAmbient(reason) {
    if (!audioUnlocked || fireAmbientStarting) {
      return Promise.resolve();
    }

    fireAmbientStarting = true;
    updateMediaSession("playing");
    var audio = prepareFireAmbient();

    var playPromise = audio.play();
    if (!playPromise || typeof playPromise.then !== "function") {
      fireAmbientStarted = true;
      fireAmbientStarting = false;
      removeFireAmbientRetryListeners();
      return Promise.resolve();
    }

    return playPromise.then(function () {
      fireAmbientStarted = true;
      fireAmbientStarting = false;
      removeFireAmbientRetryListeners();
    }).catch(function (error) {
      fireAmbientStarted = false;
      fireAmbientStarting = false;
      updateMediaSession(isEnabled() ? "playing" : "paused");
      addFireAmbientRetryListeners();
      console.warn("[codex-audio] fire ambient play failed", reason, activeTheme, error);
    });
  }

  function syncFireAmbient(reason) {
    if (!audioUnlocked) return;
    playFireAmbient(reason);
  }

  function restoreFireAmbient(reason) {
    if (!audioUnlocked || document.hidden) return;

    unlockAudioContext();

    var audio = getFireAmbient();
    if (document.body && !audio.parentNode) {
      document.body.appendChild(audio);
    }

    audio.loop = true;
    audio.muted = false;
    audio.volume = FIRE_AMBIENT_VOLUME;

    if (!audio.paused && !audio.ended && audio.readyState >= 2 && fireAmbientStarted) {
      var keepAlive = audio.play();
      if (keepAlive && typeof keepAlive.catch === "function") {
        keepAlive.catch(function (error) {
          console.warn("[codex-audio] fire ambient keep-alive failed", reason, error);
        });
      }
      return;
    }

    if (audio.readyState === 0 || audio.networkState === 3) {
      try {
        audio.load();
      } catch (error) {}
    }

    playFireAmbient(reason);
  }

  function restoreFireAmbientFromLifecycle(event) {
    if (event && event.type === "visibilitychange" && document.hidden) return;
    window.setTimeout(function () {
      restoreFireAmbient(event && event.type || "lifecycle");
    }, 80);
  }

  function retryFireAmbientFromGesture(event) {
    if (!audioUnlocked || fireAmbientStarted || fireAmbientStarting) return;
    unlockAudioContext();
    playFireAmbient(event && event.type || "ambient-retry");
  }

  function addFireAmbientRetryListeners() {
    window.addEventListener("pointerdown", retryFireAmbientFromGesture, true);
    window.addEventListener("touchstart", retryFireAmbientFromGesture, true);
    window.addEventListener("click", retryFireAmbientFromGesture, true);
  }

  function removeFireAmbientRetryListeners() {
    window.removeEventListener("pointerdown", retryFireAmbientFromGesture, true);
    window.removeEventListener("touchstart", retryFireAmbientFromGesture, true);
    window.removeEventListener("click", retryFireAmbientFromGesture, true);
  }

  function isCcmButton(button) {
    if (!button) return false;
    var text = normalizeText(button.textContent);
    return text === "CCM" || button.title === "CCM" || button.getAttribute("aria-label") === "CCM";
  }

  function isCcmButtonOn(button) {
    var className = String(button && button.className || "");
    return className.indexOf("text-[#ffe4a1]") !== -1 ||
      className.indexOf("border-[#c9a96e]/60") !== -1 ||
      className.indexOf("bg-[#8B6914]/40") !== -1;
  }

  function findThemeFromButton(button) {
    var text = normalizeText(button && button.textContent);
    var label = Object.keys(LABEL_TO_THEME).find(function (name) {
      return text.indexOf(name) !== -1;
    });
    return label ? LABEL_TO_THEME[label] : "";
  }

  document.addEventListener("click", function (event) {
    var button = event.target && event.target.closest ? event.target.closest("button") : null;
    if (!button) return;

    if (isCcmButton(button)) {
      if (Date.now() - lastCcmClickAt < 250) return;
      lastCcmClickAt = Date.now();

      var willEnable = !isCcmButtonOn(button);
      setEnabled(willEnable);

      if (willEnable) {
        playCurrentTheme("ccm-on");
        syncFireAmbient("ccm-on");
      } else {
        stopBgm();
      }
      return;
    }

    var theme = findThemeFromButton(button);
    if (!theme || !THEME_BGM[theme]) return;

    setActiveTheme(theme);
    updateMediaSession(isEnabled() ? "playing" : "paused");

    if (isEnabled()) {
      window.setTimeout(function () {
        playCurrentTheme("theme-click");
        syncFireAmbient("theme-click");
      }, 100);
    } else {
      syncFireAmbient("theme-click");
    }
  }, true);

  document.addEventListener("codex-bgm-theme-change", function (event) {
    var theme = event.detail && event.detail.theme;
    if (!theme || !THEME_BGM[theme]) return;

    setActiveTheme(theme);
    updateMediaSession(isEnabled() ? "playing" : "paused");

    if (isEnabled()) {
      window.setTimeout(function () {
        playCurrentTheme("theme-event");
        syncFireAmbient("theme-event");
      }, 100);
    } else {
      syncFireAmbient("theme-event");
    }
  });

  document.addEventListener("codex-extra-theme-change", function (event) {
    var theme = event.detail && event.detail.theme;
    if (theme && THEME_BGM[theme]) setActiveTheme(theme);
    updateMediaSession(isEnabled() ? "playing" : "paused");
    syncFireAmbient("extra-theme-event");
  });

  window.codexPlayCurrentThemeBgm = playCurrentTheme;
  window.codexStopBgm = stopBgm;
  window.codexSyncThemeBgm = function (theme) {
    if (theme && THEME_BGM[theme]) {
      setActiveTheme(theme);
    } else {
      syncTheme();
    }
    if (isEnabled()) setBgmSource(activeTheme);
  };
  window.codexSwitchThemeBgm = function (theme) {
    if (theme && THEME_BGM[theme]) {
      setActiveTheme(theme);
    } else {
      syncTheme();
    }
    if (isEnabled()) {
      playCurrentTheme("external-theme-switch");
    } else {
      updateMediaSession("paused");
    }
    syncFireAmbient("external-theme-switch");
  };
  window.codexStopFireAmbient = stopFireAmbient;
  window.codexSyncFireAmbient = syncFireAmbient;

  window.addEventListener("pointerdown", startBgmFromFirstGesture, true);
  window.addEventListener("touchstart", startBgmFromFirstGesture, true);
  window.addEventListener("pointerup", startBgmFromFirstGesture, true);
  window.addEventListener("touchend", startBgmFromFirstGesture, true);
  window.addEventListener("click", startBgmFromFirstGesture, true);
  document.addEventListener("visibilitychange", restoreFireAmbientFromLifecycle);
  window.addEventListener("pageshow", restoreFireAmbientFromLifecycle);
  window.addEventListener("focus", restoreFireAmbientFromLifecycle);
})();
