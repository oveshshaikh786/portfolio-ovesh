"use client";
import { useTheme } from "./ThemeProvider";
import { useState } from "react";

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const [animating, setAnimating] = useState(false);

  const handleClick = () => {
    setAnimating(true);
    setTimeout(() => setAnimating(false), 300);
    toggle();
  };

  return (
    <button type="button" className="theme-toggle-btn" onClick={handleClick}>
      <i
        className={`${
          theme === "space" ? "fa-moon moon-glow" : "fa-sun sun-glow"
        } fa-solid theme-icon ${animating ? "spin" : ""}`}
      ></i>

      <span className="theme-toggle-text">
        {theme === "space" ? "Space" : "Light"}
      </span>
    </button>
  );
}
