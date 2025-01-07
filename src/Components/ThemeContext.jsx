// ThemeContext.js
import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [count,setCount]=useState(0)

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  const change =() =>
    {
      setCount(count+1)
    }
  

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme,count,change }}>
      {children}
    </ThemeContext.Provider>
  );
};
