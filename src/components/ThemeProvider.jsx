// src/components/ThemeProvider.jsx
"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  toggle: () => {},
  setTheme: () => {},
});

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  // On mount, read saved theme and apply it to <body>
  useEffect(() => {
    const saved =
      typeof window !== "undefined" && localStorage.getItem("theme");
    const initial = saved || "light"; // default
    setTheme(initial);
    document.body.dataset.theme = initial;
  }, []);

  // Keep <body> attribute and localStorage in sync
  useEffect(() => {
    document.body.dataset.theme = theme;
    try {
      localStorage.setItem("theme", theme);
    } catch {}
  }, [theme]);

  const toggle = () => setTheme((t) => (t === "space" ? "light" : "space"));

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
