// ThemeConsumerComponent.js
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

const ThemeConsumerComponent = () => {
  const { theme, toggleTheme,count,change} = useContext(ThemeContext);

  const themeStyles = {
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    padding: '20px',
    textAlign: 'center',
  };

  return (
    <div style={themeStyles}>
      <p>Current Theme: {theme}</p>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <button onClick={change}>press me</button>
      <div>{count}</div>
    </div>
  );
};

export default ThemeConsumerComponent;
