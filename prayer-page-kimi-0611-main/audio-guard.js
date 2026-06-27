(function () {
  "use strict";

  var BGM_KEY = "codex-user-bgm-enabled";
  var THEME_SWITCH_MS = 1800;
  var trackedAudios = [];
  var NativeAudio = window.Audio;
  var NativeMediaPlay = window.HTMLMediaElement && window.HTMLMediaElement.prototype.play;
  var activeTheme = "golbang";
  var managedBgm = null;
  var managedAsmr = null;
  var themeTransitionTimer = 0;
  var themeIntentUntil = 0;
  var userGestureEnableUntil = 0;
  var lastCcmGestureAt = 0;
  var ccmGestureHandledUntil = 0;
  var pendingCcmEnable = null;
  var lastThemeSwitchAt = 0;
  var lastThemeSwitchTheme = "";
  var firstGestureBgmStarted = false;

  var THEME_BGM = {
    golbang: "assets/X_golbang_ccm.mp3",
    desert: "assets/ccm_prayer.mp3",
    sinal: "assets/ccm_sinae.mp3",
    mark: "assets/ccm_maga2.mp3",
    summer: "assets/Forest%20Prayer3.mp3",
    jonah: "assets/ccm_yona6.mp3",
    night: "assets/ccm_night5.mp3",
    gethsemane: "assets/sound_gathe.mp3"
  };

  var THEME_BY_BGM_PATH = {
    "/assets/X_golbang_ccm.mp3": "golbang",
    "/assets/ccm_sinae.mp3": "sinal",
    "/assets/ccm_maga2.mp3": "mark",
    "/assets/Forest%20Prayer3.mp3": "summer",
    "/assets/Forest Prayer3.mp3": "summer",
    "/assets/ccm_yona6.mp3": "jonah",
    "/assets/ccm_night5.mp3": "night",
    "/assets/sound_gathe.mp3": "gethsemane"
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

  var THEME_IDS = Object.keys(THEME_BGM);
  var THEME_LABEL_RE = new RegExp(Object.keys(LABEL_TO_THEME).join("|"));
  var BGM_SRC_RE = /\/assets\/(?:X_golbang_ccm|ccm_|Forest%20Prayer3|Forest Prayer3|sound_gathe).*\.mp3(?:\?|$)/;

  function normalizeText(value) {
    return String(value || "").replace(/\s+/g, " ").trim();
  }

  function isEnabled() {
    var value = localStorage.getItem(BGM_KEY);
    return value === "true";
  }

  function setEnabled(value) {
    localStorage.setItem(BGM_KEY, value ? "true" : "false");
  }

  function normalizeSrc(src) {
    if (!src) return "";
    try {
      return new URL(src, window.location.href).pathname;
    } catch (error) {
      return String(src).split("?")[0];
    }
  }

  function getAudioPath(audio) {
    if (!audio) return "";
    return normalizeSrc(audio.currentSrc || audio.src || audio.getAttribute && audio.getAttribute("src") || "");
  }

  function isBgmSrc(src) {
    return BGM_SRC_RE.test(src || "");
  }

  function getThemeByPath(src) {
    var path = normalizeSrc(src);
    return Object.keys(THEME_BGM).find(function (theme) {
      return path === normalizeSrc(THEME_BGM[theme]) || path.endsWith(normalizeSrc(THEME_BGM[theme]));
    }) || THEME_BY_BGM_PATH[path] || "";
  }

  function getThemeFromLayerId(id) {
    id = String(id || "");
    return THEME_IDS.find(function (theme) {
      return id.indexOf(theme) !== -1;
    }) || "";
  }

  function getCurrentThemeFromDom() {
    var body = document.body;
    if (!body) return activeTheme;

    var byDataset = body.dataset && body.dataset.theme;
    if (byDataset && THEME_BGM[byDataset]) return byDataset;

    var byLabel = normalizeText(body.dataset && body.dataset.currentTheme);
    if (byLabel && LABEL_TO_THEME[byLabel]) return LABEL_TO_THEME[byLabel];

    var className = String(body.className || "");
    var byClass = THEME_IDS.find(function (theme) {
      return className.indexOf("codex-theme-" + theme) !== -1;
    });
    if (byClass) return byClass;

    var visibleLayer = Array.from(document.querySelectorAll("[id$='-theme-layer']")).find(function (layer) {
      var style = window.getComputedStyle(layer);
      return style.display !== "none" && Number(style.opacity) > 0.5;
    });

    return visibleLayer ? getThemeFromLayerId(visibleLayer.id) || activeTheme : activeTheme;
  }

  function syncActiveThemeFromDom() {
    var currentTheme = getCurrentThemeFromDom();
    if (currentTheme && THEME_BGM[currentTheme]) {
      activeTheme = currentTheme;
    }
    return activeTheme;
  }

  function isAsmrSrc(src) {
    return /\/assets\/asmr_fire\.mp3(?:\?|$)/.test(src || "");
  }

  function trackAudio(audio) {
    if (trackedAudios.indexOf(audio) === -1) trackedAudios.push(audio);
    return audio;
  }

  if (typeof NativeAudio === "function" && !window.__codexAudioGuardInstalled) {
    window.Audio = function Audio(src) {
      var audio = src === undefined ? new NativeAudio() : new NativeAudio(src);
      return trackAudio(audio);
    };
    window.Audio.prototype = NativeAudio.prototype;
    window.Audio.__codexNativeAudio = NativeAudio;
    window.__codexAudioGuardInstalled = true;
  }

  if (NativeMediaPlay && !window.__codexMediaPlayGuardInstalled) {
    window.HTMLMediaElement.prototype.play = function guardedPlay() {
      var audio = this;
      var src = getAudioPath(audio);
      trackAudio(audio);

      if (isBgmSrc(src) && audio !== managedBgm) {
        var attemptedTheme = getThemeByPath(src) || activeTheme;
        var hasRecentThemeIntent = Date.now() < themeIntentUntil;
        if (attemptedTheme && (!hasRecentThemeIntent || attemptedTheme === activeTheme)) {
          activeTheme = attemptedTheme;
        }
        pauseAndReset(audio);
        if (hasRecentThemeIntent) {
          return Promise.resolve();
        }
        if (isEnabled()) setManagedSource(activeTheme);
        return Promise.resolve();
      }

      if (isAsmrSrc(src)) {
        if (!managedAsmr) {
          managedAsmr = audio;
        } else if (audio !== managedAsmr) {
          pauseAndReset(audio);
          return Promise.resolve();
        }
      }

      if (isBgmSrc(src) && !isEnabled()) {
        pauseAndReset(audio);
        return Promise.resolve();
      }

      return NativeMediaPlay.apply(audio, arguments);
    };
    window.__codexMediaPlayGuardInstalled = true;
  }

  function getManagedBgm() {
    if (!managedBgm) {
      managedBgm = trackAudio(new NativeAudio());
      managedBgm.loop = true;
      managedBgm.preload = "auto";
      managedBgm.dataset.codexManagedBgm = "true";
      managedBgm.volume = 0.4;
      managedBgm.setAttribute("playsinline", "");
      managedBgm.setAttribute("webkit-playsinline", "");
      managedBgm.style.display = "none";
      if (document.body && !managedBgm.parentNode) {
        document.body.appendChild(managedBgm);
      }
    }
    return managedBgm;
  }

  function isThemeBgm(audio) {
    if (!audio || audio === managedBgm) return false;
    return isBgmSrc(getAudioPath(audio));
  }

  function pauseAndReset(audio) {
    if (!audio) return;
    try {
      audio.pause();
    } catch (error) {}
    try {
      audio.currentTime = 0;
    } catch (error) {}
  }

  function stopAllThemeBgm() {
    trackedAudios = trackedAudios.filter(function (audio) {
      return audio && typeof audio.pause === "function";
    });
    trackedAudios.forEach(function (audio) {
      if (isBgmSrc(getAudioPath(audio))) pauseAndReset(audio);
    });
    document.querySelectorAll("audio").forEach(function (audio) {
      if (isBgmSrc(getAudioPath(audio))) pauseAndReset(audio);
    });
    if (managedBgm) pauseAndReset(managedBgm);
  }

  function setManagedSource(theme) {
    var src = THEME_BGM[theme];
    if (!src) return null;
    var audio = getManagedBgm();
    if (document.body && !audio.parentNode) {
      document.body.appendChild(audio);
    }
    if (normalizeSrc(audio.getAttribute("src") || audio.src) !== normalizeSrc(src)) {
      pauseAndReset(audio);
      audio.src = src;
      audio.load();
    }
    return audio;
  }

  function playCurrentTheme() {
    syncActiveThemeFromDom();
    var theme = activeTheme;
    var src = THEME_BGM[theme];
    if (!src || !isEnabled()) {
      stopAllThemeBgm();
      return Promise.resolve();
    }

    stopAllThemeBgm();
    var audio = setManagedSource(theme);
    if (!audio) return Promise.resolve();
    audio.muted = false;
    audio.volume = 0.4;
    audio.loop = true;
    return (NativeMediaPlay ? NativeMediaPlay.call(audio) : audio.play()).catch(function (error) {
      console.warn("[codex-audio] Failed to play current theme BGM", theme, audio.src, error);
    });
  }

  function playCurrentThemeFromGesture(reason) {
    syncActiveThemeFromDom();
    var theme = activeTheme;
    var src = THEME_BGM[theme];
    if (!src) {
      stopAllThemeBgm();
      return Promise.resolve();
    }

    userGestureEnableUntil = Date.now() + 2500;
    stopAllThemeBgm();
    var audio = setManagedSource(theme);
    if (!audio) return Promise.resolve();
    audio.muted = false;
    audio.volume = 0.4;
    audio.loop = true;
    return (NativeMediaPlay ? NativeMediaPlay.call(audio) : audio.play()).then(function () {
      if (window.__codexAudioDebug) {
        console.info("[codex-audio] Mobile gesture BGM play started", reason, theme, audio.src);
      }
    }).catch(function (error) {
      console.warn("[codex-audio] Mobile gesture BGM play failed", reason, theme, audio.src, {
        name: error && error.name,
        message: error && error.message,
        paused: audio.paused,
        readyState: audio.readyState,
        networkState: audio.networkState,
        enabled: localStorage.getItem(BGM_KEY)
      });
    });
  }

  function isCurrentThemeBgmPlaying() {
    var src = THEME_BGM[activeTheme];
    if (!src) return false;
    var expectedSrc = normalizeSrc(src);
    var audios = trackedAudios.slice();
    if (managedBgm && audios.indexOf(managedBgm) === -1) audios.push(managedBgm);
    document.querySelectorAll("audio").forEach(function (audio) {
      if (audios.indexOf(audio) === -1) audios.push(audio);
    });
    return audios.some(function (audio) {
      return audio &&
        !audio.paused &&
        !audio.ended &&
        normalizeSrc(getAudioPath(audio)) === expectedSrc;
    });
  }

  function syncThemeBgm(theme) {
    activeTheme = theme || syncActiveThemeFromDom();
    themeIntentUntil = Date.now() + THEME_SWITCH_MS;
    stopAllThemeBgm();

    if (!THEME_BGM[activeTheme]) return;
    if (isEnabled()) setManagedSource(activeTheme);
  }

  function switchThemeBgm(theme) {
    var nextTheme = theme || syncActiveThemeFromDom();
    var now = Date.now();
    if (nextTheme === lastThemeSwitchTheme && now - lastThemeSwitchAt < 350) return;
    activeTheme = nextTheme;
    lastThemeSwitchTheme = activeTheme;
    lastThemeSwitchAt = now;
    themeIntentUntil = Date.now() + THEME_SWITCH_MS;
    stopAllThemeBgm();

    if (!THEME_BGM[activeTheme]) {
      stopAllThemeBgm();
      return;
    }

    if (!isEnabled()) {
      stopAllThemeBgm();
      return;
    }

    var audio = setManagedSource(activeTheme);
    if (!audio) return;
    if (!audio.paused && normalizeSrc(audio.src) === normalizeSrc(THEME_BGM[activeTheme])) return;
    (NativeMediaPlay ? NativeMediaPlay.call(audio) : audio.play()).catch(function (error) {
      console.warn("[codex-audio] Failed to switch theme BGM", activeTheme, audio.src, error);
    });
  }

  function findThemeFromText(text) {
    var match = normalizeText(text).match(THEME_LABEL_RE);
    return match ? LABEL_TO_THEME[match[0]] : "";
  }

  function findThemeFromButton(button) {
    if (!button) return "";
    var explicit = button.dataset && button.dataset.codexTheme;
    if (explicit && THEME_BGM[explicit]) return explicit;
    return findThemeFromText(button.textContent);
  }

  function findPrayerButtons() {
    return Array.from(document.querySelectorAll("button")).filter(function (button) {
      var text = normalizeText(button.textContent);
      return text === "기도하기" || text === "기도 중...";
    });
  }

  function isCcmButtonOn(button) {
    var className = String(button && button.className || "");
    return className.indexOf("text-[#ffe4a1]") !== -1 ||
      className.indexOf("border-[#c9a96e]/60") !== -1 ||
      className.indexOf("bg-[#8B6914]/40") !== -1;
  }

  function isCcmButton(button) {
    if (!button) return false;
    var text = normalizeText(button.textContent);
    return text === "CCM" || button.title === "CCM" || button.getAttribute("aria-label") === "CCM";
  }

  function setPrayerDisabled(disabled) {
    findPrayerButtons().forEach(function (button) {
      button.disabled = disabled;
      button.toggleAttribute("aria-disabled", disabled);
      if (disabled) {
        button.dataset.codexPrayerDisabled = "true";
        button.style.setProperty("pointer-events", "none", "important");
      } else if (button.dataset.codexPrayerDisabled === "true") {
        button.style.removeProperty("pointer-events");
        delete button.dataset.codexPrayerDisabled;
      }
    });
  }

  function resetPrayerVisualState() {
    document.body.dataset.prayerState = "waiting";
    document.querySelectorAll(".prayer-particle, .prayer-word-particle, .summer-praying-light, .summer-holy-sun, .night-praying-depth, .night-sacred-glow, .night-star-twinkle, .night-shooting-stars").forEach(function (node) {
      node.remove();
    });
  }

  function beginThemeTransitionGuard() {
    window.clearTimeout(themeTransitionTimer);
    setPrayerDisabled(true);
    resetPrayerVisualState();
    themeTransitionTimer = window.setTimeout(function () {
      setPrayerDisabled(false);
    }, THEME_SWITCH_MS);
  }

  document.addEventListener("click", function (event) {
    var button = event.target && event.target.closest ? event.target.closest("button") : null;
    if (!button) return;

    if (document.body.dataset.themeTransitioning === "true" && findPrayerButtons().indexOf(button) !== -1) {
      event.preventDefault();
      event.stopPropagation();
      if (event.stopImmediatePropagation) event.stopImmediatePropagation();
      return;
    }

    var theme = findThemeFromButton(button);
    if (theme && window.__codexUnifiedThemeController) {
      return;
    }
    if (theme) {
      beginThemeTransitionGuard();
      activeTheme = theme;
      themeIntentUntil = Date.now() + THEME_SWITCH_MS;
      switchThemeBgm(theme);
      return;
    }

    if (!isCcmButton(button)) return;

    if (Date.now() - lastCcmGestureAt < 350) {
      return;
    }

    var willEnable = !isCcmButtonOn(button);
    lastCcmGestureAt = Date.now();
    setEnabled(willEnable);
    if (willEnable) {
      syncActiveThemeFromDom();
      playCurrentThemeFromGesture(event.type);
    } else {
      userGestureEnableUntil = 0;
      stopAllThemeBgm();
    }
  }, true);

  document.addEventListener("codex-bgm-theme-change", function (event) {
    var theme = event.detail && event.detail.theme;
    if (!theme || !THEME_BGM[theme]) return;

    activeTheme = theme;
    themeIntentUntil = Date.now() + THEME_SWITCH_MS;
    beginThemeTransitionGuard();
    switchThemeBgm(theme);
  });

  document.addEventListener("play", function (event) {
    if (!event.target || event.target.tagName !== "AUDIO") return;
    trackAudio(event.target);
    if (event.target !== managedBgm && isThemeBgm(event.target)) {
      pauseAndReset(event.target);
      return;
    }
    if (!isEnabled() && isBgmSrc(getAudioPath(event.target))) {
      pauseAndReset(event.target);
      return;
    }
  }, true);

  function startCurrentBgmFromFirstGesture(event) {
    if (firstGestureBgmStarted) return;
    var button = event && event.target && event.target.closest ? event.target.closest("button") : null;
    if (isCcmButton(button)) return;
    syncActiveThemeFromDom();
    firstGestureBgmStarted = true;
    if (isCurrentThemeBgmPlaying()) return;
    setEnabled(true);
    playCurrentThemeFromGesture(event && event.type || "first-gesture");
  }

  window.codexSwitchThemeBgm = switchThemeBgm;
  window.codexSyncThemeBgm = syncThemeBgm;
  window.codexPlayCurrentThemeBgm = playCurrentTheme;

  window.addEventListener("click", startCurrentBgmFromFirstGesture, { once: true });
  window.addEventListener("touchstart", startCurrentBgmFromFirstGesture, { once: true });
})();
