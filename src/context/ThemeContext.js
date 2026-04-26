import React, { createContext, useState, useContext, useEffect } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [role, setRole] = useState(() => {
    return localStorage.getItem("portfolio-role") || "aiml";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-role", role);
    document.documentElement.setAttribute("data-role", role);
  }, [role]);

  const toggleRole = () => {
    setRole((prev) => (prev === "aiml" ? "ds" : "aiml"));
  };

  return (
    <ThemeContext.Provider value={{ role, setRole, toggleRole }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext;
