import { useState, useEffect } from "react";

const useThemeMode = () => {
  const [mode, setMode] = useState<string>(() => {
    const savedMode = localStorage.getItem("themeMode");
    return savedMode
      ? savedMode
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (event: MediaQueryListEvent) => {
      const newMode = event.matches ? "dark" : "light";
      setMode(newMode);
      localStorage.setItem("themeMode", newMode);
    };

    mediaQuery.addEventListener("change", handleChange);

    // ✅ Only toggle dark class
    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [mode]);

  const toggleMode = () => {
    const newMode = mode === "dark" ? "light" : "dark";
    setMode(newMode);
    localStorage.setItem("themeMode", newMode);
  };

  return { mode, toggleMode };
};

export default useThemeMode;
