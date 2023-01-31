import {createContext,useState} from  'react';

export const ThemeContext = createContext();


export const ThemeProvider = ({children}) => {

    cont [theme,setTheme] = useState("light");

    const toggleTheme  = () => {
      setTheme(theme === "light" ? "dark" : "light");
    }

  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
};