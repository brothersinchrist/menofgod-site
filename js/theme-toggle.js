document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;

  let giscusReady = false;

  const toggleBtn = document.getElementById("themeToggleBtn");
  const themeMenu = document.getElementById("themeMenu");
  const themeLabel = document.getElementById("themeLabel");
  const themeIcon = document.getElementById("themeIcon");

  if (!toggleBtn || !themeMenu) return;

  const options = themeMenu.querySelectorAll("li");
  const systemQuery = window.matchMedia("(prefers-color-scheme: dark)");

  // -------------------------------------------------
  // GISCUS THEME SYNC
  // -------------------------------------------------
  function updateGiscusTheme() {
    const iframe = document.querySelector("iframe.giscus-frame");
    if (!iframe || !giscusReady) return;

    iframe.contentWindow.postMessage(
      {
        giscus: {
          setConfig: {
            theme: window.giscusThemeUrl
          }
        }
      },
      "*"
    );
  }

  // -------------------------------------------------
  // Helpers
  // -------------------------------------------------

  function setLabelAndIcon(theme) {
    if (theme === "light") {
      themeLabel.textContent = "Light";
      themeIcon.src = window.mogIconBase + "sun.svg";
    } else if (theme === "dark") {
      themeLabel.textContent = "Dark";
      themeIcon.src = window.mogIconBase + "moon.svg";
    } else {
      themeLabel.textContent = "System";
      themeIcon.src = window.mogIconBase + "gear.svg";
    }
  }

  function applySystemTheme() {
    const prefersDark = systemQuery.matches;
    const effective = prefersDark ? "dark" : "light";
    root.setAttribute("data-theme", effective);

    // Sync Giscus
    updateGiscusTheme();
  }

  function applyTheme(theme) {
    if (theme === "system") {
      localStorage.setItem("theme", "system");
      applySystemTheme();
      setLabelAndIcon("system");
    } else {
      root.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
      setLabelAndIcon(theme);

      // Sync Giscus
      updateGiscusTheme();
    }
  }

  // -------------------------------------------------
  // Dropdown behavior
  // -------------------------------------------------

  toggleBtn.addEventListener("click", () => {
    themeMenu.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!toggleBtn.contains(e.target) && !themeMenu.contains(e.target)) {
      themeMenu.classList.remove("open");
    }
  });

  // -------------------------------------------------
  // Theme selection
  // -------------------------------------------------

  options.forEach((opt) => {
    opt.addEventListener("click", () => {
      const selected = opt.getAttribute("data-theme");
      applyTheme(selected);
      themeMenu.classList.remove("open");
    });
  });

  // -------------------------------------------------
  // React to OS theme changes
  // -------------------------------------------------

  systemQuery.addEventListener("change", () => {
    const saved = localStorage.getItem("theme");
    if (saved === "system") {
      applySystemTheme();
    }
  });

  // -------------------------------------------------
  // Initial load
  // -------------------------------------------------

  const saved = localStorage.getItem("theme") || "system";
  applyTheme(saved);

  // Ensure Giscus syncs once iframe loads
  window.addEventListener("message", (event) => {
    if (event.origin !== "https://giscus.app") return;
    if (event.data?.giscus?.discussion) {
      giscusReady = true;
      updateGiscusTheme();
    }
  });
});