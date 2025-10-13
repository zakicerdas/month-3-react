import React, { createContext, useContext, useState } from 'react';

// 1. Buat Context
const ThemeContext = createContext(null);

// Komponen yang menyediakan nilai Context
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const contextValue = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// Komponen yang mengkonsumsi nilai Context
function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext); // Menggunakan useContext

  return (
    <button
      onClick={toggleTheme}
      className={`px-4 py-2 rounded-md font-semibold shadow-md transition-colors duration-300 
        ${theme === 'light'
          ? 'bg-gray-200 text-gray-800 hover:bg-gray-300'
          : 'bg-gray-800 text-gray-100 hover:bg-gray-700'}`}
    >
      Ganti Tema ({theme})
    </button>
  );
}

function ThemedParagraph() {
  const { theme } = useContext(ThemeContext);

  return (
    <p
      className={`p-4 rounded-md shadow-sm mt-4 transition-colors duration-300 
        ${theme === 'light'
          ? 'bg-white text-gray-900'
          : 'bg-gray-900 text-yellow-100'}`}
    >
      Ini adalah paragraf dengan tema <span className="font-semibold">{theme}</span>.
    </p>
  );
}

function ThemeToggle() {
  return (
    <ThemeProvider>
      <div
        className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6 transition-colors duration-300 
          bg-gradient-to-br from-indigo-50 via-white to-yellow-50"
      >
        <h2 className="text-2xl font-bold text-indigo-700">Contoh Context API</h2>
        <ThemedButton />
        <ThemedParagraph />
      </div>
    </ThemeProvider>
  );
}

export default ThemeToggle;