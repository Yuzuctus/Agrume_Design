/* ===================================================
   AGRUME - Style Guide Interactivity
   Theme, navigation, tabs, accordion, modals, toasts,
   drag and drop, swatch copy, demos
   =================================================== */

document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const uiTiming = {
    toastExit: prefersReducedMotion ? 0 : 180,
    toastLife: prefersReducedMotion ? 2600 : 3200,
    swatchCopied: prefersReducedMotion ? 900 : 1300,
    progressTick: prefersReducedMotion ? 140 : 220,
    scrollBehavior: prefersReducedMotion ? "auto" : "smooth",
  };

  // Theme persistence with backward compatibility.
  const themeToggle = document.getElementById("themeToggle");
  const storedAgrumeTheme = localStorage.getItem("agrume-theme");
  const legacyZestTheme = localStorage.getItem("zest-theme");
  const savedTheme = storedAgrumeTheme || legacyZestTheme || "dark";
  html.setAttribute("data-theme", savedTheme);
  if (!storedAgrumeTheme) {
    localStorage.setItem("agrume-theme", savedTheme);
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const current = html.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      html.setAttribute("data-theme", next);
      localStorage.setItem("agrume-theme", next);
    });
  }

  // Mobile sidebar.
  const hamburger = document.getElementById("sgHamburger");
  const sidebar = document.getElementById("sgSidebar");
  const overlay = document.getElementById("sgOverlay");

  function closeSidebar() {
    sidebar?.classList.remove("open");
    overlay?.classList.remove("open");
  }

  hamburger?.addEventListener("click", () => {
    sidebar?.classList.toggle("open");
    overlay?.classList.toggle("open");
  });
  overlay?.addEventListener("click", closeSidebar);

  document.querySelectorAll(".sg-nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth <= 900) closeSidebar();
    });
  });

  // Active section in sidebar.
  const sections = document.querySelectorAll(".sg-section[id]");
  const navLinks = document.querySelectorAll('.sg-nav-link[href^="#"]');
  const observerOptions = { rootMargin: "-20% 0px -70% 0px" };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((l) => l.classList.remove("active"));
      const activeLink = document.querySelector(
        `.sg-nav-link[href="#${entry.target.id}"]`,
      );
      activeLink?.classList.add("active");
    });
  }, observerOptions);

  sections.forEach((s) => observer.observe(s));

  // Tabs.
  document.querySelectorAll("[data-tabs]").forEach((tabGroup) => {
    const tabs = tabGroup.querySelectorAll(".tab");
    const panels = tabGroup.querySelectorAll(".tab-panel");

    tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        tabs.forEach((t) => {
          t.classList.remove("active");
          t.setAttribute("aria-selected", "false");
        });
        panels.forEach((p) => {
          p.classList.remove("active");
          p.setAttribute("data-active", "false");
        });

        tab.classList.add("active");
        tab.setAttribute("aria-selected", "true");
        const target = document.getElementById(tab.getAttribute("data-target"));
        if (target) {
          target.classList.add("active");
          target.setAttribute("data-active", "true");
        }
      });
    });
  });

  // Accordion.
  document.querySelectorAll(".accordion-trigger").forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const item = trigger.closest(".accordion-item");
      if (!item) return;
      const accordion = item.closest(".accordion");

      if (accordion && !accordion.classList.contains("accordion-multi")) {
        accordion.querySelectorAll(".accordion-item.open").forEach((other) => {
          if (other !== item) other.classList.remove("open");
        });
      }
      item.classList.toggle("open");
    });
  });

  // Modals.
  document.querySelectorAll("[data-modal-open]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-modal-open");
      const backdrop = document.getElementById(id);
      const modal = backdrop?.querySelector(".modal");
      backdrop?.classList.add("open");
      modal?.classList.add("open");
      document.body.classList.add("modal-open");
    });
  });

  function closeModal(backdrop) {
    const modal = backdrop?.querySelector(".modal");
    backdrop?.classList.remove("open");
    modal?.classList.remove("open");
    document.body.classList.remove("modal-open");
  }

  document
    .querySelectorAll(".modal-close, [data-modal-close]")
    .forEach((btn) => {
      btn.addEventListener("click", () => {
        closeModal(btn.closest(".modal-backdrop"));
      });
    });

  document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
    backdrop.addEventListener("click", (e) => {
      if (e.target === backdrop) closeModal(backdrop);
    });
  });

  // Toasts.
  const toastContainer = document.getElementById("toastContainer");
  let toastCount = 0;
  const toastTypes = ["success", "info", "warning", "error"];
  const toastIcons = { success: "?", info: "i", warning: "!", error: "x" };
  const toastMessages = {
    success: "Operation completed successfully.",
    info: "Useful information is available.",
    warning: "Review this before continuing.",
    error: "Something went wrong. Please try again.",
  };

  function removeToast(toast) {
    if (!toast) return;
    if (prefersReducedMotion) {
      toast.remove();
      return;
    }
    toast.classList.add("toast-exiting");
    setTimeout(() => toast.remove(), uiTiming.toastExit);
  }

  window.showToast = function (type) {
    type = type || toastTypes[toastCount % toastTypes.length];
    toastCount += 1;

    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${toastIcons[type]}</span>
      <div class="toast-content">
        <div class="toast-title">${type.charAt(0).toUpperCase() + type.slice(1)}</div>
        <div class="toast-message">${toastMessages[type]}</div>
      </div>
      <button class="toast-close" aria-label="Close">&times;</button>
    `;
    toastContainer?.appendChild(toast);

    toast.querySelector(".toast-close")?.addEventListener("click", () => {
      removeToast(toast);
    });

    setTimeout(() => {
      if (toast.parentElement) removeToast(toast);
    }, uiTiming.toastLife);
  };

  // Color swatch copy.
  document.querySelectorAll(".color-swatch").forEach((swatch) => {
    swatch.addEventListener("click", () => {
      const value = swatch.getAttribute("data-color");
      if (!value) return;

      navigator.clipboard
        .writeText(value)
        .then(() => {
          swatch.classList.add("copied");
          setTimeout(
            () => swatch.classList.remove("copied"),
            uiTiming.swatchCopied,
          );
          showToast("success");
        })
        .catch(() => {
          const ta = document.createElement("textarea");
          ta.value = value;
          document.body.appendChild(ta);
          ta.select();
          document.execCommand("copy");
          document.body.removeChild(ta);
          swatch.classList.add("copied");
          setTimeout(
            () => swatch.classList.remove("copied"),
            uiTiming.swatchCopied,
          );
        });
    });
  });

  // Progress bar demo.
  const progressBtn = document.getElementById("progressDemoBtn");
  const progressBar = document.getElementById("progressDemoBar");
  if (progressBtn && progressBar) {
    progressBtn.addEventListener("click", () => {
      progressBar.style.width = "0%";
      let width = 0;
      const interval = setInterval(() => {
        width += Math.random() * 14 + 6;
        if (width >= 100) {
          width = 100;
          clearInterval(interval);
        }
        progressBar.style.width = `${width}%`;
      }, uiTiming.progressTick);
    });
  }

  // Stepper demo.
  const stepperItems = document.querySelectorAll("#stepperDemo .step");
  const stepConnectors = document.querySelectorAll("#stepperDemo .step-connector");
  let currentStep = 0;

  window.stepperNext = function () {
    if (currentStep < stepperItems.length - 1) {
      stepperItems[currentStep].classList.remove("active");
      stepperItems[currentStep].classList.add("completed");
      if (stepConnectors[currentStep]) {
        stepConnectors[currentStep].classList.add("completed");
      }
      currentStep += 1;
      stepperItems[currentStep].classList.add("active");
    }
  };

  window.stepperPrev = function () {
    if (currentStep > 0) {
      stepperItems[currentStep].classList.remove("active");
      currentStep -= 1;
      stepperItems[currentStep].classList.remove("completed");
      stepperItems[currentStep].classList.add("active");
      if (stepConnectors[currentStep]) {
        stepConnectors[currentStep].classList.remove("completed");
      }
    }
  };

  window.stepperReset = function () {
    stepperItems.forEach((step) => step.classList.remove("active", "completed"));
    stepConnectors.forEach((connector) => connector.classList.remove("completed"));
    currentStep = 0;
    stepperItems[0]?.classList.add("active");
  };

  // Range sliders.
  document.querySelectorAll(".range-slider-input").forEach((input) => {
    const slider = input.closest(".range-slider");
    const display = slider?.querySelector(".range-slider-value");

    function updateSlider() {
      const min = parseFloat(input.min) || 0;
      const max = parseFloat(input.max) || 100;
      const value = parseFloat(input.value) || 0;
      const percent = ((value - min) / (max - min)) * 100;
      input.style.setProperty("--slider-fill", `${percent}%`);
      if (display) display.textContent = input.value;
    }

    updateSlider();
    input.addEventListener("input", updateSlider);
  });

  // Drag and drop.
  const dragList = document.getElementById("dragDemoList");
  if (dragList) {
    let draggedItem = null;

    dragList.querySelectorAll(".drag-item").forEach((item) => {
      item.setAttribute("draggable", "true");

      item.addEventListener("dragstart", (e) => {
        draggedItem = item;
        item.classList.add("dragging");
        e.dataTransfer.effectAllowed = "move";
      });

      item.addEventListener("dragend", () => {
        item.classList.remove("dragging");
        dragList
          .querySelectorAll(".drag-item")
          .forEach((i) => i.classList.remove("drop-target"));
        draggedItem = null;
      });

      item.addEventListener("dragover", (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
        if (item !== draggedItem) item.classList.add("drop-target");
      });

      item.addEventListener("dragleave", () => {
        item.classList.remove("drop-target");
      });

      item.addEventListener("drop", (e) => {
        e.preventDefault();
        item.classList.remove("drop-target");
        if (draggedItem && draggedItem !== item) {
          const items = [...dragList.children];
          const dragIdx = items.indexOf(draggedItem);
          const dropIdx = items.indexOf(item);
          if (dragIdx < dropIdx) {
            dragList.insertBefore(draggedItem, item.nextSibling);
          } else {
            dragList.insertBefore(draggedItem, item);
          }
        }
      });
    });
  }

  // Back to top.
  const backToTop = document.getElementById("backToTop");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        backToTop.classList.add("visible");
      } else {
        backToTop.classList.remove("visible");
      }
    });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: uiTiming.scrollBehavior });
    });
  }
});
