(function () {
  "use strict";

  var savedViewport = null;
  var replayingSubmit = false;
  var restoreTimers = [];

  function isEditable(node) {
    if (!node || !node.matches) return false;
    return node.matches("textarea, input");
  }

  function isPrayerTextInput(node) {
    if (!isEditable(node)) return false;
    var text = String(node.getAttribute("placeholder") || "");
    return text.indexOf("기도문") !== -1 || !!node.closest(".prayer-paper-shrinking, .prayer-paper-rising");
  }

  function readViewportState() {
    var visual = window.visualViewport;
    return {
      scrollX: window.scrollX || window.pageXOffset || 0,
      scrollY: window.scrollY || window.pageYOffset || 0,
      visualTop: visual ? visual.offsetTop : 0,
      visualLeft: visual ? visual.offsetLeft : 0,
      visualHeight: visual ? visual.height : window.innerHeight,
      visualWidth: visual ? visual.width : window.innerWidth
    };
  }

  function saveViewportState() {
    savedViewport = readViewportState();
  }

  function restoreScrollPosition() {
    if (!savedViewport) return;
    window.scrollTo(savedViewport.scrollX, savedViewport.scrollY);
  }

  function scheduleStableRestore(callback) {
    var startedAt = Date.now();
    var stableSince = 0;
    var last = readViewportState();

    function step() {
      var current = readViewportState();
      var changed =
        Math.abs(current.visualTop - last.visualTop) > 1 ||
        Math.abs(current.visualLeft - last.visualLeft) > 1 ||
        Math.abs(current.visualHeight - last.visualHeight) > 1 ||
        Math.abs(current.visualWidth - last.visualWidth) > 1;

      if (changed) {
        stableSince = 0;
        last = current;
      } else if (!stableSince) {
        stableSince = Date.now();
      }

      restoreScrollPosition();

      if ((stableSince && Date.now() - stableSince > 140) || Date.now() - startedAt > 900) {
        restoreScrollPosition();
        callback();
        return;
      }

      window.requestAnimationFrame(step);
    }

    window.requestAnimationFrame(step);
  }

  function clearRestoreTimers() {
    restoreTimers.forEach(function (timer) {
      window.clearTimeout(timer);
    });
    restoreTimers = [];
  }

  function reinforceRestore() {
    clearRestoreTimers();
    [0, 80, 180, 360].forEach(function (delay) {
      restoreTimers.push(window.setTimeout(restoreScrollPosition, delay));
    });
  }

  function buttonText(button) {
    return String(button && button.textContent || "").replace(/\s+/g, " ").trim();
  }

  function isPrayerSubmitButton(button) {
    if (!button || button.disabled || buttonText(button) !== "기도하기") return false;
    var fixedLayer = button.closest(".fixed");
    return !!(fixedLayer && fixedLayer.querySelector("textarea"));
  }

  document.addEventListener("pointerdown", function (event) {
    if (isPrayerTextInput(event.target)) saveViewportState();
  }, true);

  document.addEventListener("touchstart", function (event) {
    if (isPrayerTextInput(event.target)) saveViewportState();
  }, true);

  document.addEventListener("focusin", function (event) {
    if (isPrayerTextInput(event.target) && !savedViewport) saveViewportState();
  }, true);

  document.addEventListener("click", function (event) {
    if (replayingSubmit) return;

    var button = event.target && event.target.closest ? event.target.closest("button") : null;
    if (!isPrayerSubmitButton(button)) return;

    var textarea = button.closest(".fixed").querySelector("textarea");
    if (!textarea || !savedViewport) return;

    event.preventDefault();
    event.stopPropagation();
    if (event.stopImmediatePropagation) event.stopImmediatePropagation();

    textarea.blur();
    scheduleStableRestore(function () {
      reinforceRestore();
      replayingSubmit = true;
      button.click();
      replayingSubmit = false;
      savedViewport = null;
    });
  }, true);
})();
