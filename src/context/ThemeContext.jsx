import React, {useContext, useState, useCallback, useMemo } from "react";

const THEME_KEY = 'theme'

const ThemeContext = React.createContext()

export const useTheme = () => useContext(ThemeContext)

const supportedThemes = ['warning', 'dark']

const validateTheme = (theme) => supportedThemes.includes(theme) ? theme : 'warning'


export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    validateTheme(localStorage.getItem(THEME_KEY)) || 'warning'
  )

  const toggleTheme = useCallback(() => {
    const nextTheme = theme === 'warning' ? 'dark' : 'warning'
    setTheme(nextTheme)
    localStorage.setItem(THEME_KEY, nextTheme)
  }, [theme])

  const value = useMemo(() => ({
    theme, toggleTheme
  }), [theme, toggleTheme])


  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContext;