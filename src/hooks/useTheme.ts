import { useEffect, useState } from "react";

export function useTheme(defaultTheme: "light" | "dark" = "light") {
  const [theme, setTheme] = useState<"light" | "dark">(defaultTheme);

  useEffect(() => {
    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}
