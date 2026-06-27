(function () {
  "use strict";

  var BGM_KEY = "codex-user-bgm-enabled";
  var activeTheme = "golbang";
  var bgm = null;
  var lastCcmClickAt = 0;

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

  function getBgm() {
    if (!bgm) {
      bgm = new Audio();
      bgm.loop = true;
      bgm.volume = 0.4;
      bgm.preload = "auto";
      bgm.setAttribute("playsinline", "");
      bgm.setAttribute("webkit-playsinline", "");
      bgm.dataset.codexManagedBgm = "true";
    }
    return bgm;
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
    if (theme && THEME_BGM[theme]) activeTheme = theme;
    return activeTheme;
  }

  function setBgmSource(theme) {
    var src = THEME_BGM[theme];
    if (!src) return null;

    var audio = getBgm();
    if (normalizeSrc(audio.getAttribute("src") || audio.src) !== normalizeSrc(src)) {
      audio.pause();
      audio.src = src;
      audio.load();
    }
    return audio;
  }

  function playCurrentTheme(reason) {
    syncTheme();

    var audio = setBgmSource(activeTheme);
    if (!audio) return Promise.resolve();

    audio.muted = false;
    audio.volume = 0.4;
    audio.loop = true;

    return audio.play().catch(function (error) {
      console.warn("[codex-audio] play failed", reason, activeTheme, audio.src, error);
    });
  }

  function stopBgm() {
    if (!bgm) return;
    try {
      bgm.pause();
    } catch (error) {}
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
      } else {
        stopBgm();
      }
      return;
    }

    var theme = findThemeFromButton(button);
    if (!theme || !THEME_BGM[theme]) return;

    activeTheme = theme;

    if (isEnabled()) {
      window.setTimeout(function () {
        playCurrentTheme("theme-click");
      }, 100);
    }
  }, true);

  document.addEventListener("codex-bgm-theme-change", function (event) {
    var theme = event.detail && event.detail.theme;
    if (!theme || !THEME_BGM[theme]) return;

    activeTheme = theme;

    if (isEnabled()) {
      window.setTimeout(function () {
        playCurrentTheme("theme-event");
      }, 100);
    }
  });

  window.codexPlayCurrentThemeBgm = playCurrentTheme;
  window.codexStopBgm = stopBgm;
  window.codexSyncThemeBgm = function (theme) {
    if (theme && THEME_BGM[theme]) {
      activeTheme = theme;
    } else {
      syncTheme();
    }
    if (isEnabled()) setBgmSource(activeTheme);
  };
  window.codexSwitchThemeBgm = function (theme) {
    if (theme && THEME_BGM[theme]) {
      activeTheme = theme;
    } else {
      syncTheme();
    }
    if (isEnabled()) {
      playCurrentTheme("external-theme-switch");
    }
  };
})();
