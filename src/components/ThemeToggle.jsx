"use client";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    setAnimating(true);
    setTimeout(() => setAnimating(false), 300);
    toggle(); // switch between "light" and "space"
  };

  return (
    <button
      type="button"
      className="theme-toggle-btn icon-only"
      onClick={handleClick}
      aria-label="Toggle theme"
    >
      <i
        className={`fa-solid ${
          theme === "space" ? "fa-moon" : "fa-sun"
        } theme-icon ${animating ? "spin" : ""}`}
      ></i>
    </button>
  );
}
