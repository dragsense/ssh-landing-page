import { useEffect, useState } from "react";

const THEME_STORAGE_KEY = "theme-preference";

// Get theme from localStorage or use default
function getInitialTheme(defaultTheme: "light" | "dark" = "light"): "light" | "dark" {
  if (typeof window === "undefined") {
    return defaultTheme;
  }

  const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as "light" | "dark" | null;
  
  if (storedTheme === "light" || storedTheme === "dark") {
    return storedTheme;
  }

  return defaultTheme;
}

export function useTheme(defaultTheme: "light" | "dark" = "light") {
  const [theme, setTheme] = useState<"light" | "dark">(() => getInitialTheme(defaultTheme));

  // Apply theme to document and save to localStorage
  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
    
    // Save to localStorage
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      return newTheme;
    });
  };

  return { theme, toggleTheme };
}
