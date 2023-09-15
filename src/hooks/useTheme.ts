import { useState, useEffect } from "react";

export const useTheme = () => {
  const localTheme: boolean =
    localStorage.getItem("app-theme") === "light"
      ? true
      : localStorage.getItem("app-theme") === "dark"
      ? false
      : true;
  const [theme, setTheme] = useState<boolean>(localTheme);

  useEffect(() => {
    document.documentElement.setAttribute("app-theme", theme ? "light" : "dark");
    localStorage.setItem("app-theme", theme ? "light" : "dark");
  }, [theme]);

  return { theme, setTheme };
};
