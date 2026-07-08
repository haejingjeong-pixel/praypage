(function () {
  "use strict";

  var savedViewport = null;
  var restoreTimers = [];
  var preparingSubmit = false;
  var keyboardFocusActive = false;
  var viewportLockRaf = 0;

  function isEditable(node) {
    if (!node || !node.matches) return false;
    return node.matches("textarea, input");
  }

  function isPrayerTextInput(node) {
    if (!isEditable(node)) return false;
    var text = String(node.getAttribute("placeholder") || "");
    return text.indexOf("기도문") !== -1 || !!node.closest(".fixed");
  }

  function serializeRect(rect) {
    return {
      top: rect.top,
      left: rect.left,
      right: rect.right,
      bottom: rect.bottom,
      width: rect.width,
      height: rect.height
    };
  }

  function describeActiveElement() {
    var active = document.activeElement;
    if (!active) return null;
    return {
      tagName: active.tagName,
      type: active.getAttribute("type") || "",
      id: active.id || "",
      className: typeof active.className === "string" ? active.className : "",
      placeholder: active.getAttribute("placeholder") || ""
    };
  }

  function readViewportState() {
    var visual = window.visualViewport;
    var scrollX = window.scrollX || window.pageXOffset || 0;
    var scrollY = window.scrollY || window.pageYOffset || 0;
    var offsetTop = visual ? visual.offsetTop : 0;
    var offsetLeft = visual ? visual.offsetLeft : 0;
    return {
      scrollX: scrollX,
      scrollY: scrollY,
      visualViewportOffsetTop: offsetTop,
      visualViewportOffsetLeft: offsetLeft,
      visualViewportPageTop: visual && typeof visual.pageTop === "number" ? visual.pageTop : scrollY + offsetTop,
      visualViewportPageLeft: visual && typeof visual.pageLeft === "number" ? visual.pageLeft : scrollX + offsetLeft,
      visualViewportHeight: visual ? visual.height : window.innerHeight,
      visualViewportWidth: visual ? visual.width : window.innerWidth,
      visualViewportScale: visual && typeof visual.scale === "number" ? visual.scale : 1,
      documentRect: serializeRect(document.documentElement.getBoundingClientRect()),
      activeElement: describeActiveElement()
    };
  }

  function logViewport(label, state) {
    if (!window.console || !console.debug) return;
    console.debug("[codex-focus-restore] " + label, state || readViewportState());
  }

  function saveViewportState() {
    savedViewport = readViewportState();
    logViewport("saved", savedViewport);
  }

  function clearRestoreTimers() {
    restoreTimers.forEach(function (timer) {
      window.clearTimeout(timer);
    });
    restoreTimers = [];
  }

  function setKeyboardFocusActive(active) {
    keyboardFocusActive = !!active;
    if (document.body) {
      document.body.classList.toggle("codex-prayer-keyboard-active", keyboardFocusActive);
    }
    if (!keyboardFocusActive) {
      document.documentElement.style.removeProperty("--codex-visual-vh");
      document.documentElement.style.removeProperty("--codex-visual-offset-top");
      document.documentElement.style.removeProperty("--codex-keyboard-height");
    }
  }

  function syncVisualViewportVars() {
    var visual = window.visualViewport;
    if (!visual) return;
    document.documentElement.style.setProperty("--codex-visual-vh", Math.round(visual.height) + "px");
    document.documentElement.style.setProperty("--codex-visual-offset-top", Math.round(visual.offsetTop || 0) + "px");
    document.documentElement.style.setProperty("--codex-keyboard-height", Math.max(0, Math.round(window.innerHeight - visual.height - (visual.offsetTop || 0))) + "px");
  }

  function getRestoreTarget() {
    if (!savedViewport) return null;
    var visual = window.visualViewport;
    var currentPageTop = visual && typeof visual.pageTop === "number"
      ? visual.pageTop
      : (window.scrollY || window.pageYOffset || 0) + (visual ? visual.offsetTop : 0);
    var currentPageLeft = visual && typeof visual.pageLeft === "number"
      ? visual.pageLeft
      : (window.scrollX || window.pageXOffset || 0) + (visual ? visual.offsetLeft : 0);
    var deltaY = currentPageTop - savedViewport.visualViewportPageTop;
    var deltaX = currentPageLeft - savedViewport.visualViewportPageLeft;
    return {
      x: Math.max(0, savedViewport.scrollX + deltaX),
      y: Math.max(0, savedViewport.scrollY + deltaY),
      deltaX: deltaX,
      deltaY: deltaY,
      currentPageTop: currentPageTop,
      currentPageLeft: currentPageLeft
    };
  }

  function restoreScrollPosition() {
    var target = getRestoreTarget();
    if (!target) return;
    logViewport("before-restore", {
      saved: savedViewport,
      target: target,
      current: readViewportState()
    });
    window.scrollTo(target.x, target.y);
    logViewport("after-restore");
  }

  function restoreSavedScrollPosition() {
    if (!savedViewport) return;
    window.scrollTo(savedViewport.scrollX, savedViewport.scrollY);
  }

  function scheduleViewportLock(reason) {
    if (!keyboardFocusActive || !savedViewport) return;
    syncVisualViewportVars();
    if (viewportLockRaf) return;
    viewportLockRaf = window.requestAnimationFrame(function () {
      viewportLockRaf = 0;
      if (!keyboardFocusActive || !savedViewport) return;
      logViewport("viewport-lock-" + reason);
    });
  }

  function waitFrames(count) {
    return new Promise(function (resolve) {
      function step() {
        count -= 1;
        if (count <= 0) {
          resolve();
          return;
        }
        window.requestAnimationFrame(step);
      }
      window.requestAnimationFrame(step);
    });
  }

  function viewportSignature() {
    var state = readViewportState();
    return [
      Math.round(state.visualViewportOffsetTop),
      Math.round(state.visualViewportOffsetLeft),
      Math.round(state.visualViewportHeight),
      Math.round(state.visualViewportWidth),
      Math.round(state.visualViewportScale * 1000)
    ].join(":");
  }

  function waitForViewportSettle() {
    return new Promise(function (resolve) {
      var visual = window.visualViewport;
      var startedAt = Date.now();
      var stableSince = 0;
      var lastSignature = viewportSignature();
      var settledTimer = 0;
      var finished = false;

      function cleanup() {
        if (!visual) return;
        visual.removeEventListener("resize", onChange);
        visual.removeEventListener("scroll", onChange);
      }

      function finish() {
        if (finished) return;
        finished = true;
        cleanup();
        resolve();
      }

      function onChange() {
        stableSince = 0;
        if (settledTimer) window.clearTimeout(settledTimer);
        settledTimer = window.setTimeout(check, 160);
      }

      function check() {
        var currentSignature = viewportSignature();
        if (currentSignature !== lastSignature) {
          lastSignature = currentSignature;
          stableSince = 0;
        } else if (!stableSince) {
          stableSince = Date.now();
        }

        if ((stableSince && Date.now() - stableSince >= 180) || Date.now() - startedAt >= 1500) {
          finish();
          return;
        }

        window.requestAnimationFrame(check);
      }

      if (visual) {
        visual.addEventListener("resize", onChange, { passive: true });
        visual.addEventListener("scroll", onChange, { passive: true });
      }
      window.requestAnimationFrame(check);
    });
  }

  function reinforceRestore() {
    clearRestoreTimers();
    [0, 80, 180, 360, 700, 1100].forEach(function (delay) {
      restoreTimers.push(window.setTimeout(function () {
        restoreSavedScrollPosition();
        restoreScrollPosition();
      }, delay));
    });
  }

  function findPrayerTextarea() {
    var active = document.activeElement;
    if (isPrayerTextInput(active)) return active;
    var candidates = Array.prototype.slice.call(document.querySelectorAll(".fixed textarea, textarea"));
    return candidates.find(isPrayerTextInput) || null;
  }

  async function preparePrayerSubmit(runSubmit) {
    if (preparingSubmit) return;
    preparingSubmit = true;

    var textarea = findPrayerTextarea();
    if (!savedViewport) saveViewportState();
    setKeyboardFocusActive(false);

    logViewport("submit-requested");
    if (textarea && document.activeElement === textarea) textarea.blur();

    await waitFrames(3);
    await waitForViewportSettle();
    await new Promise(function (resolve) {
      window.setTimeout(resolve, 180);
    });

    restoreScrollPosition();
    restoreSavedScrollPosition();
    reinforceRestore();
    logViewport("submit-after-restore");

    preparingSubmit = false;
    runSubmit();
    window.setTimeout(function () {
      savedViewport = null;
    }, 900);
  }

  function blurPrayerTextarea(reason, options) {
    options = options || {};
    var textarea = findPrayerTextarea();
    if (!textarea) return false;
    if (!savedViewport) saveViewportState();
    logViewport("blur-requested-" + reason);
    if (document.activeElement === textarea) textarea.blur();
    setKeyboardFocusActive(false);
    if (options.deferRestore) {
      window.setTimeout(reinforceRestore, 260);
    } else {
      reinforceRestore();
    }
    window.setTimeout(function () {
      waitForViewportSettle().then(function () {
        restoreScrollPosition();
        restoreSavedScrollPosition();
        savedViewport = null;
      });
    }, 160);
    return true;
  }

  function isPrayerModalActionTarget(node) {
    if (!node || !node.closest) return false;
    if (node.matches && isPrayerTextInput(node)) return false;
    var button = node.closest("button");
    if (button) return true;
    var fixed = node.closest(".fixed");
    return !!fixed && !node.closest("textarea");
  }

  function handleViewportChange(event) {
    if (!keyboardFocusActive) return;
    scheduleViewportLock(event && event.type || "viewport");
  }

  document.addEventListener("pointerdown", function (event) {
    if (isPrayerTextInput(event.target)) {
      saveViewportState();
      setKeyboardFocusActive(true);
      syncVisualViewportVars();
      return;
    }
    if (keyboardFocusActive && isPrayerModalActionTarget(event.target)) {
      blurPrayerTextarea("pointerdown", { deferRestore: true });
    }
  }, true);

  document.addEventListener("touchstart", function (event) {
    if (isPrayerTextInput(event.target)) {
      saveViewportState();
      setKeyboardFocusActive(true);
      syncVisualViewportVars();
      return;
    }
    if (keyboardFocusActive && isPrayerModalActionTarget(event.target)) {
      blurPrayerTextarea("touchstart", { deferRestore: true });
    }
  }, true);

  document.addEventListener("focusin", function (event) {
    if (isPrayerTextInput(event.target)) {
      saveViewportState();
      setKeyboardFocusActive(true);
      syncVisualViewportVars();
      scheduleViewportLock("focusin");
    }
  }, true);

  document.addEventListener("focusout", function (event) {
    if (!isPrayerTextInput(event.target)) return;
    window.setTimeout(function () {
      if (isPrayerTextInput(document.activeElement)) return;
      setKeyboardFocusActive(false);
      reinforceRestore();
      window.setTimeout(function () {
        savedViewport = null;
      }, 900);
    }, 80);
  }, true);

  if (window.visualViewport) {
    window.visualViewport.addEventListener("resize", handleViewportChange, { passive: true });
    window.visualViewport.addEventListener("scroll", handleViewportChange, { passive: true });
  }

  window.addEventListener("resize", handleViewportChange, { passive: true });
  window.addEventListener("orientationchange", function () {
    blurPrayerTextarea("orientationchange");
  }, { passive: true });

  window.__codexPreparePrayerSubmit = function (runSubmit) {
    if (typeof runSubmit !== "function") return;
    preparePrayerSubmit(runSubmit).catch(function (error) {
      preparingSubmit = false;
      if (window.console && console.warn) console.warn("[codex-focus-restore] fallback submit", error);
      runSubmit();
    });
  };
  window.__codexBlurPrayerTextarea = blurPrayerTextarea;
})();
