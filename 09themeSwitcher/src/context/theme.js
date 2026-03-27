import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {}, // this both are methods
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider; // someone use .Provider afterwards but you can use here also

// you can also make this custom hook and use it
export default function useTheme() {
  return useContext(ThemeContext);
}


