// /src/context/ThemeProvider.js

import React, { useState } from 'react';
import ThemeContent from './ThemeContext';

export default function ThemeProvider({ children }) {
  const [themeColor, setThemeColor] = useState('dark');

  function toggleTheme() {
    setThemeColor(themeColor === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContent.Provider value={{ color: themeColor, toggleTheme }}>
      <div className={ themeColor }>
        { children }
      </div>
    </ThemeContent.Provider>
  );
}
