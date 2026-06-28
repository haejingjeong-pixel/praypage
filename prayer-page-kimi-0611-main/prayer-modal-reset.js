(function () {
  "use strict";

  var modalWasOpen = false;
  var lastScrollX = 0;
  var lastScrollY = 0;

  var resetSelectors = [
    "html",
    "body",
    "#root",
    "#root > div",
    ".codex-managed-theme-layer",
    "[id$='-theme-layer']",
    ".codex-altar-stage",
    ".prayer-verse"
  ];

  function installResetStyle() {
    if (document.getElementById("codex-prayer-modal-reset-style")) return;

    var style = document.createElement("style");
    style.id = "codex-prayer-modal-reset-style";
    style.textContent = [
      "body.codex-prayer-modal-resetting,",
      "body.codex-prayer-modal-resetting #root,",
      "body.codex-prayer-modal-resetting #root > div {",
      "  transform: none !important;",
      "  scale: 1 !important;",
      "  zoom: 1 !important;",
      "}",
      "body.codex-prayer-modal-resetting .prayer-paper-shrinking,",
      "body.codex-prayer-modal-resetting .prayer-paper-rising,",
      "body.codex-prayer-modal-resetting .prayer-text-fadeout {",
      "  transform: none !important;",
      "  filter: none !important;",
      "  opacity: 1 !important;",
      "}"
    ].join("\n");
    document.head.appendChild(style);
  }

  function blurActiveField() {
    var active = document.activeElement;
    if (!active || !active.tagName) return;

    if (/^(TEXTAREA|INPUT|SELECT)$/.test(active.tagName)) {
      active.blur();
    }
  }

  function clearInlineVisualState(node) {
    if (!node || !node.style) return;

    node.style.removeProperty("zoom");
    node.style.removeProperty("scale");

    if (node === document.documentElement || node === document.body || node.id === "root") {
      node.style.removeProperty("transform");
      node.style.removeProperty("filter");
      node.style.removeProperty("backdrop-filter");
      node.style.removeProperty("-webkit-backdrop-filter");
      return;
    }

    if (node.style.transform && /(scale|matrix|translate3d)/i.test(node.style.transform)) {
      node.style.removeProperty("transform");
    }

    if (node.style.filter && /(blur|scale|brightness)/i.test(node.style.filter)) {
      node.style.removeProperty("filter");
    }

    node.style.removeProperty("backdrop-filter");
    node.style.removeProperty("-webkit-backdrop-filter");
  }

  function clearModalAnimationClasses() {
    document
      .querySelectorAll(".prayer-paper-shrinking, .prayer-paper-rising, .prayer-text-fadeout")
      .forEach(function (node) {
        node.classList.remove("prayer-paper-shrinking", "prayer-paper-rising", "prayer-text-fadeout");
        clearInlineVisualState(node);
      });
  }

  function resetVisualContainers() {
    resetSelectors.forEach(function (selector) {
      document.querySelectorAll(selector).forEach(clearInlineVisualState);
    });
  }

  function resetPrayerModalZoom(reason) {
    if (!document.body) return;

    blurActiveField();
    document.body.classList.remove("codex-prayer-modal-open");
    document.body.classList.add("codex-prayer-modal-resetting");

    clearModalAnimationClasses();
    resetVisualContainers();

    if (typeof window.scrollTo === "function") {
      window.scrollTo(lastScrollX, lastScrollY);
    }

    window.setTimeout(function () {
      if (document.body) {
        document.body.classList.remove("codex-prayer-modal-resetting");
      }
    }, 360);

    if (window.console && typeof window.console.debug === "function") {
      window.console.debug("[codex-modal] reset prayer modal zoom", reason);
    }
  }

  function scheduleReset(reason) {
    [0, 80, 240, 700, 1400, 4300].forEach(function (delay) {
      window.setTimeout(function () {
        resetPrayerModalZoom(reason);
      }, delay);
    });
  }

  function scheduleSubmitReset(reason) {
    [3900, 4100, 4500, 5200].forEach(function (delay) {
      window.setTimeout(function () {
        resetPrayerModalZoom(reason);
      }, delay);
    });
  }

  function isPrayerModalOpen() {
    return !!document.querySelector("textarea[placeholder*='기도문'], .prayer-paper-shrinking, .prayer-paper-rising");
  }

  function syncModalState() {
    var isOpen = isPrayerModalOpen();

    if (isOpen && !modalWasOpen) {
      lastScrollX = window.scrollX || window.pageXOffset || 0;
      lastScrollY = window.scrollY || window.pageYOffset || 0;
      document.body && document.body.classList.add("codex-prayer-modal-open");
    }

    if (modalWasOpen && !isOpen) {
      scheduleReset("modal-removed");
    }

    modalWasOpen = isOpen;
  }

  function getButtonText(target) {
    var button = target && target.closest ? target.closest("button") : null;
    return button ? String(button.textContent || "").replace(/\s+/g, " ").trim() : "";
  }

  function onPointerOrClick(event) {
    var text = getButtonText(event.target);

    if (text === "기도문 작성하기") {
      window.setTimeout(syncModalState, 80);
      return;
    }

    if (modalWasOpen && (text === "기도하기" || text === "기도 중...")) {
      blurActiveField();
      scheduleSubmitReset("prayer-submit");
      return;
    }

    syncModalState();
  }

  function observeRoot() {
    var root = document.getElementById("root") || document.body || document.documentElement;
    if (!root || !window.MutationObserver) return;

    new MutationObserver(syncModalState).observe(root, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ["class", "style"]
    });
  }

  function init() {
    installResetStyle();
    observeRoot();
    syncModalState();

    document.addEventListener("click", onPointerOrClick, true);
    document.addEventListener("pointerdown", onPointerOrClick, true);
    document.addEventListener("touchstart", onPointerOrClick, true);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();
