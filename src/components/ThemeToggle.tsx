"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "theme-preference";

function applyTheme(theme: Theme) {
  document.documentElement.setAttribute("data-theme", theme);
}

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    applyTheme(theme);
    window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    applyTheme(nextTheme);
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="inline-flex h-10 items-center rounded-full border border-slate-200/90 bg-white px-4 text-xs font-semibold tracking-wide text-slate-700 transition hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d3a8f]/35"
      aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
      aria-pressed={theme === "dark"}
      title={theme === "dark" ? "Modo oscuro activado" : "Modo claro activado"}
    >
      {theme === "dark" ? "Claro" : "Oscuro"}
    </button>
  );
}
