import { createContext, useEffect, useState } from "react";
import { LocalStorageService, LS_KEYS } from "../sevices/LocalStorage";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    LocalStorageService.get(LS_KEYS.THEME) || 'light');

  const toggleTheme = () => {
    setTheme(theme => theme === 'light' ? 'dark' : 'light');    
  }

  useEffect(() => {
    LocalStorageService.set(LS_KEYS.THEME, theme);
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeProvider }