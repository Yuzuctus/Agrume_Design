/* ===================================================
   YUZUCTUS - Style Guide Interactivity
   Shared for the guide, demos, and long-form docs.
   =================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const body = document.body;
  const supportsMatchMedia = typeof window.matchMedia === "function";
  const prefersReducedMotionQuery = supportsMatchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)")
    : null;
  const prefersDarkScheme = supportsMatchMedia
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : null;
  const compactShellQuery = supportsMatchMedia
    ? window.matchMedia("(max-width: 1024px)")
    : null;
  const prefersReducedMotion = Boolean(prefersReducedMotionQuery?.matches);
  const themeOrder = ["system", "dark", "light"];
  const uiTiming = {
    toastExit: prefersReducedMotion ? 0 : 180,
    toastLife: prefersReducedMotion ? 3200 : 4600,
    swatchCopied: prefersReducedMotion ? 900 : 1300,
    scrollBehavior: prefersReducedMotion ? "auto" : "smooth",
  };

  const storage = {
    get(key) {
      try {
        return window.localStorage.getItem(key);
      } catch {
        return null;
      }
    },
    set(key, value) {
      try {
        window.localStorage.setItem(key, value);
      } catch {
        /* Local file mode can block storage in some browsers. */
      }
    },
  };

  const liveRegion = document.getElementById("srAnnouncements");
  const toastContainer = document.getElementById("toastContainer");
  const themeToggle = document.getElementById("themeToggle");
  const themeStateNodes = document.querySelectorAll("[data-theme-state]");
  const modeButtons = document.querySelectorAll("[data-product-mode-toggle]");
  const modeLabel = document.getElementById("productModeState");
  const shellPanel = document.querySelector('[data-shell-panel="nav"]');
  const shellToggles = document.querySelectorAll('[data-shell-toggle="nav"]');
  const shellOverlay = document.querySelector("[data-shell-overlay]");
  const shellCloseButtons = document.querySelectorAll("[data-shell-close]");
  const guideSidebarToggles = document.querySelectorAll(
    '[data-shell-toggle="guide-sidebar"]',
  );

  let activeShell = null;
  let activeModal = null;
  let lastFocusedElement = null;
  let lastShellTrigger = null;

  function announce(message) {
    if (!liveRegion || !message) return;
    liveRegion.textContent = "";
    window.setTimeout(() => {
      liveRegion.textContent = message;
    }, 20);
  }

  function attachMediaListener(query, handler) {
    if (!query || typeof handler !== "function") return;
    if (typeof query.addEventListener === "function") {
      query.addEventListener("change", handler);
      return;
    }
    if (typeof query.addListener === "function") {
      query.addListener(handler);
    }
  }

  function isElementVisible(element) {
    if (!(element instanceof HTMLElement)) return false;
    if (element.hasAttribute("hidden")) return false;
    const styles = window.getComputedStyle(element);
    return styles.visibility !== "hidden" && styles.display !== "none";
  }

  function getFocusable(container) {
    return [
      ...container.querySelectorAll(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    ].filter((element) => isElementVisible(element));
  }

  function isCompactShell() {
    return compactShellQuery?.matches ?? window.innerWidth <= 1024;
  }

  function setDocumentScrollLock(locked) {
    const overflowValue = locked ? "hidden" : "";
    html.style.overflow = overflowValue;
    body.style.overflow = overflowValue;
  }

  function normalizeTheme(theme) {
    if (["light", "dark", "system"].includes(theme)) return theme;
    return "system";
  }

  function resolveTheme(theme) {
    if (theme === "light" || theme === "dark") return theme;
    return prefersDarkScheme?.matches ? "dark" : "light";
  }

  function getStoredTheme() {
    const explicit = storage.get("yuzuctus-theme");
    const legacyAgrume = storage.get("agrume-theme");
    const legacyZest = storage.get("zest-theme");
    return normalizeTheme(explicit || legacyAgrume || legacyZest || "system");
  }

  function updateThemeButton(theme, resolved) {
    if (!themeToggle) return;
    const labels = {
      system: `Theme system (${resolved})`,
      dark: "Theme dark",
      light: "Theme light",
    };
    themeToggle.setAttribute("aria-label", labels[theme]);
    themeToggle.setAttribute("title", labels[theme]);
    themeToggle.dataset.themePreference = theme;
    themeStateNodes.forEach((node) => {
      node.textContent = theme === "system" ? `System / ${resolved}` : theme;
    });
  }

  function applyTheme(theme, persist = true) {
    const preference = normalizeTheme(theme);
    const resolved = resolveTheme(preference);
    html.setAttribute("data-theme", preference);
    html.setAttribute("data-theme-resolved", resolved);
    updateThemeButton(preference, resolved);
    if (persist) {
      storage.set("yuzuctus-theme", preference);
    }
  }

  function cycleTheme() {
    const current = normalizeTheme(html.getAttribute("data-theme"));
    const currentIndex = themeOrder.indexOf(current);
    const next = themeOrder[(currentIndex + 1) % themeOrder.length];
    applyTheme(next);
    announce(`Theme ${next}`);
  }

  function applyProductMode(mode) {
    const nextMode = ["social", "tool", "library"].includes(mode)
      ? mode
      : "social";
    html.setAttribute("data-product-mode", nextMode);
    modeButtons.forEach((button) => {
      const active = button.getAttribute("data-product-mode-toggle") === nextMode;
      button.classList.toggle("active", active);
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
    if (modeLabel) modeLabel.textContent = nextMode;
  }

  function normalizeGuideSidebarState(state) {
    return state === "collapsed" ? "collapsed" : "expanded";
  }

  function getStoredGuideSidebar() {
    return normalizeGuideSidebarState(
      storage.get("yuzuctus-guide-sidebar") || "expanded",
    );
  }

  function updateGuideSidebarToggle() {
    const collapsed = body.dataset.guideSidebar === "collapsed";
    const label = collapsed ? "Reouvrir la sidebar" : "Replier la sidebar";
    guideSidebarToggles.forEach((button) => {
      button.setAttribute("aria-pressed", collapsed ? "true" : "false");
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
      const textNode = button.querySelector("[data-guide-toggle-label]");
      if (textNode) textNode.textContent = label;
    });
  }

  function applyGuideSidebar(state, persist = true) {
    if (!guideSidebarToggles.length) return;
    const nextState = normalizeGuideSidebarState(state);
    const resolvedState = isCompactShell() ? "expanded" : nextState;
    body.dataset.guideSidebar = resolvedState;
    updateGuideSidebarToggle();
    if (persist && !isCompactShell()) {
      storage.set("yuzuctus-guide-sidebar", nextState);
    }
  }

  function updateShellAccessibility() {
    const open = body.dataset.shellNav === "open";
    shellToggles.forEach((button) => {
      button.setAttribute("aria-expanded", open ? "true" : "false");
      const label = open ? "Fermer la navigation" : "Ouvrir la navigation";
      button.setAttribute("aria-label", label);
      button.setAttribute("title", label);
    });

    if (!shellPanel) return;
    const compact = isCompactShell();
    shellPanel.setAttribute(
      "aria-hidden",
      compact && !open ? "true" : "false",
    );
    if (compact) {
      shellPanel.setAttribute("role", "dialog");
      shellPanel.setAttribute("aria-modal", "true");
    } else {
      shellPanel.removeAttribute("role");
      shellPanel.removeAttribute("aria-modal");
    }
  }

  function openShellNav(trigger = null) {
    if (!shellPanel || !isCompactShell()) return;
    lastShellTrigger = trigger instanceof HTMLElement ? trigger : null;
    body.dataset.shellNav = "open";
    activeShell = shellPanel;
    setDocumentScrollLock(true);
    updateShellAccessibility();
    const focusable = getFocusable(shellPanel);
    (focusable[0] || shellPanel).focus();
  }

  function closeShellNav({ restoreFocus = true } = {}) {
    if (!shellPanel) return;
    body.dataset.shellNav = "closed";
    activeShell = null;
    setDocumentScrollLock(false);
    updateShellAccessibility();
    if (restoreFocus && lastShellTrigger instanceof HTMLElement) {
      lastShellTrigger.focus();
    }
  }

  function toggleShellNav(trigger = null) {
    if (body.dataset.shellNav === "open") {
      closeShellNav({ restoreFocus: false });
      return;
    }
    openShellNav(trigger);
  }

  function syncShellMode() {
    if (body.dataset.shellNav !== "open") {
      body.dataset.shellNav = "closed";
    }
    if (!isCompactShell()) {
      closeShellNav({ restoreFocus: false });
    } else {
      updateShellAccessibility();
    }
    if (guideSidebarToggles.length) {
      applyGuideSidebar(getStoredGuideSidebar(), false);
    }
  }

  if (!body.dataset.shellNav) {
    body.dataset.shellNav = "closed";
  }
  if (!body.dataset.guideSidebar) {
    body.dataset.guideSidebar = "expanded";
  }

  applyTheme(getStoredTheme(), false);
  applyProductMode(html.getAttribute("data-product-mode") || "social");
  applyGuideSidebar(getStoredGuideSidebar(), false);
  updateShellAccessibility();

  themeToggle?.addEventListener("click", cycleTheme);
  attachMediaListener(prefersDarkScheme, () => {
    if (html.getAttribute("data-theme") === "system") {
      applyTheme("system", false);
    }
  });

  attachMediaListener(compactShellQuery, () => {
    syncShellMode();
  });

  shellToggles.forEach((button) => {
    button.addEventListener("click", () => toggleShellNav(button));
  });

  shellOverlay?.addEventListener("click", () => {
    closeShellNav();
  });

  shellCloseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      closeShellNav();
    });
  });

  shellPanel?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      if (isCompactShell()) closeShellNav({ restoreFocus: false });
    });
  });

  guideSidebarToggles.forEach((button) => {
    button.addEventListener("click", () => {
      if (isCompactShell()) return;
      const nextState =
        body.dataset.guideSidebar === "collapsed" ? "expanded" : "collapsed";
      applyGuideSidebar(nextState);
    });
  });

  modeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.getAttribute("data-product-mode-toggle");
      applyProductMode(mode);
      announce(`Project accent ${mode}`);
    });
  });

  const sections = document.querySelectorAll(".sg-section[id]");
  const navLinks = document.querySelectorAll('.sg-nav-link[href^="#"]');
  if (sections.length && navLinks.length && "IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          navLinks.forEach((link) => link.classList.remove("active"));
          const activeLink = document.querySelector(
            `.sg-nav-link[href="#${entry.target.id}"]`,
          );
          activeLink?.classList.add("active");
        });
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
  }

  function activateTab(tabGroup, tab) {
    const tabs = [...tabGroup.querySelectorAll(".tab")];
    const panels = [...tabGroup.querySelectorAll(".tab-panel")];
    const targetId = tab.getAttribute("data-target");
    tabs.forEach((item) => {
      const active = item === tab;
      item.classList.toggle("active", active);
      item.setAttribute("aria-selected", active ? "true" : "false");
      item.tabIndex = active ? 0 : -1;
    });
    panels.forEach((panel) => {
      const active = panel.id === targetId;
      panel.classList.toggle("active", active);
      panel.hidden = !active;
    });
  }

  document.querySelectorAll("[data-tabs]").forEach((tabGroup) => {
    const tabs = [...tabGroup.querySelectorAll(".tab")];
    const panels = [...tabGroup.querySelectorAll(".tab-panel")];
    const tabList = tabGroup.querySelector(".tabs");
    tabList?.setAttribute("role", "tablist");
    tabs.forEach((tab, index) => {
      tab.setAttribute("role", "tab");
      tab.id = tab.id || `tab-${tabGroup.id || "group"}-${index}`;
      const panel = document.getElementById(tab.getAttribute("data-target"));
      if (panel) {
        panel.setAttribute("role", "tabpanel");
        panel.setAttribute("aria-labelledby", tab.id);
      }
      tab.tabIndex = tab.classList.contains("active") ? 0 : -1;
      tab.addEventListener("click", () => activateTab(tabGroup, tab));
      tab.addEventListener("keydown", (event) => {
        const currentIndex = tabs.indexOf(tab);
        let nextIndex = currentIndex;
        if (event.key === "ArrowRight" || event.key === "ArrowDown") nextIndex += 1;
        if (event.key === "ArrowLeft" || event.key === "ArrowUp") nextIndex -= 1;
        if (event.key === "Home") nextIndex = 0;
        if (event.key === "End") nextIndex = tabs.length - 1;
        if (nextIndex !== currentIndex) {
          event.preventDefault();
          if (nextIndex < 0) nextIndex = tabs.length - 1;
          if (nextIndex >= tabs.length) nextIndex = 0;
          const nextTab = tabs[nextIndex];
          activateTab(tabGroup, nextTab);
          nextTab.focus();
        }
      });
    });
    panels.forEach((panel) => {
      panel.hidden = !panel.classList.contains("active");
    });
  });

  document.querySelectorAll(".accordion").forEach((accordion) => {
    const triggers = accordion.querySelectorAll(".accordion-trigger");
    triggers.forEach((trigger, index) => {
      const item = trigger.closest(".accordion-item");
      const panel = item?.querySelector(".accordion-content");
      if (!item || !panel) return;
      const panelId = panel.id || `accordion-panel-${index}`;
      panel.id = panelId;
      trigger.setAttribute("aria-controls", panelId);
      trigger.setAttribute(
        "aria-expanded",
        item.classList.contains("open") ? "true" : "false",
      );
      panel.hidden = !item.classList.contains("open");

      trigger.addEventListener("click", () => {
        const isOpen = item.classList.contains("open");
        if (!accordion.classList.contains("accordion-multi")) {
          accordion.querySelectorAll(".accordion-item").forEach((otherItem) => {
            otherItem.classList.remove("open");
            const otherTrigger = otherItem.querySelector(".accordion-trigger");
            const otherPanel = otherItem.querySelector(".accordion-content");
            otherTrigger?.setAttribute("aria-expanded", "false");
            if (otherPanel) otherPanel.hidden = true;
          });
        }
        item.classList.toggle("open", !isOpen);
        trigger.setAttribute("aria-expanded", isOpen ? "false" : "true");
        panel.hidden = isOpen;
      });
    });
  });

  function closeModal(backdrop, restoreFocus = true) {
    const modal = backdrop?.querySelector(".modal");
    backdrop?.classList.remove("open");
    modal?.classList.remove("open");
    document.body.classList.remove("modal-open");
    activeModal = null;
    if (restoreFocus && lastFocusedElement instanceof HTMLElement) {
      lastFocusedElement.focus();
    }
  }

  document.querySelectorAll("[data-modal-open]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.getElementById(
        button.getAttribute("data-modal-open"),
      );
      const modal = target?.querySelector(".modal");
      if (!target || !modal) return;
      lastFocusedElement = button;
      target.classList.add("open");
      modal.classList.add("open");
      document.body.classList.add("modal-open");
      activeModal = modal;
      const focusable = getFocusable(modal);
      (focusable[0] || modal).focus();
    });
  });

  document.querySelectorAll(".modal-close, [data-modal-close]").forEach((button) => {
    button.addEventListener("click", () => {
      closeModal(button.closest(".modal-backdrop"));
    });
  });

  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (event) => {
      if (event.target === backdrop) closeModal(backdrop);
    });
  });

  document.addEventListener("keydown", (event) => {
    if (activeModal) {
      if (event.key === "Escape") {
        closeModal(activeModal.closest(".modal-backdrop"));
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = getFocusable(activeModal);
      if (!focusable.length) {
        event.preventDefault();
        activeModal.focus();
        return;
      }
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
      return;
    }

    if (body.dataset.shellNav !== "open" || !activeShell) return;
    if (event.key === "Escape") {
      closeShellNav();
      return;
    }
    if (event.key !== "Tab") return;
    const focusable = getFocusable(activeShell);
    if (!focusable.length) {
      event.preventDefault();
      activeShell.focus();
      return;
    }
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  let toastCount = 0;
  const toastIconMap = { success: "+", info: "i", warning: "!", error: "x" };

  function removeToast(toast) {
    if (!toast) return;
    if (prefersReducedMotion) {
      toast.remove();
      return;
    }
    toast.classList.add("toast-exiting");
    window.setTimeout(() => toast.remove(), uiTiming.toastExit);
  }

  window.showToast = function showToast(input = {}) {
    const toastData = typeof input === "string" ? { type: input } : input;
    const type = toastData.type || "info";
    const title = toastData.title || `${type.charAt(0).toUpperCase()}${type.slice(1)}`;
    const message = toastData.message ||
      {
        success: "Action completed successfully.",
        info: "Useful information is available.",
        warning: "Review this before continuing.",
        error: "Something went wrong.",
      }[type];
    const important = Boolean(
      toastData.important || type === "error" || type === "warning",
    );
    const duration = toastData.duration || uiTiming.toastLife;
    toastCount += 1;

    if (!toastContainer) {
      announce(`${title}. ${message}`);
      return toastCount;
    }

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.setAttribute("role", important ? "alert" : "status");
    toast.setAttribute("aria-live", important ? "assertive" : "polite");
    toast.innerHTML = `
      <span class="toast-icon" aria-hidden="true">${toastIconMap[type] || "i"}</span>
      <div class="toast-content">
        <div class="toast-title">${title}</div>
        <div class="toast-message">${message}</div>
      </div>
      <button class="toast-close" aria-label="Close notification">x</button>
    `;
    toastContainer.appendChild(toast);
    announce(`${title}. ${message}`);

    toast.querySelector(".toast-close")?.addEventListener("click", () => removeToast(toast));

    if (!toastData.persist) {
      window.setTimeout(() => {
        if (toast.parentElement) removeToast(toast);
      }, duration);
    }

    return toastCount;
  };

  document
    .querySelectorAll(".color-swatch-preview[data-preview-token]")
    .forEach((preview) => {
      const token = preview.getAttribute("data-preview-token");
      if (!token) return;
      preview.style.background = `var(${token})`;
    });

  document.querySelectorAll(".color-swatch").forEach((swatch) => {
    swatch.addEventListener("click", async () => {
      const value = swatch.getAttribute("data-color");
      if (!value) return;
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(value);
        } else {
          throw new Error("Clipboard API unavailable");
        }
      } catch {
        const ta = document.createElement("textarea");
        ta.value = value;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }
      swatch.classList.add("copied");
      window.setTimeout(() => swatch.classList.remove("copied"), uiTiming.swatchCopied);
      window.showToast({
        type: "success",
        title: "Token copied",
        message: `${value} copied to clipboard.`,
      });
    });
  });

  document.querySelectorAll("[data-tooltip]").forEach((element, index) => {
    const tooltipId =
      element.getAttribute("aria-describedby") || `tooltip-desc-${index}`;
    if (!document.getElementById(tooltipId)) {
      const description = document.createElement("span");
      description.id = tooltipId;
      description.className = "sr-only";
      description.textContent = element.getAttribute("data-tooltip");
      element.after(description);
    }
    element.setAttribute("aria-describedby", tooltipId);
  });

  const demoToastBtn = document.getElementById("demoToastBtn");
  demoToastBtn?.addEventListener("click", () => {
    window.showToast({
      type: "info",
      title: "Shared pattern",
      message: "Core tokens, one accent, one clear interaction model.",
    });
  });

  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      backToTop.classList.toggle("visible", window.scrollY > 400);
    });
    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: uiTiming.scrollBehavior });
    });
  }
});
