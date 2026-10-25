import React, { useState, useEffect } from 'react';
import CyberSecurity from './components/CyberSecurity.jsx';
import FullStack from './components/FullStack.jsx';
import RAGWidget from './components/RAGWidget.jsx';

export default function App() {
  const [mode, setMode] = useState('cyber');
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) setDarkMode(JSON.parse(saved));
  }, []);

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Navigation */}
      <nav className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        mode === 'cyber'
          ? 'bg-black/80 border-green-500/20'
          : 'bg-white/80 dark:bg-gray-900/80 border-gray-200 dark:border-gray-700'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className={`text-xl font-bold ${
              mode === 'cyber' ? 'text-green-400 font-mono' : 'text-blue-500'
            }`}>
              {mode === 'cyber' ? '> mahelet_yared' : 'Mahelet Yared'}
            </a>

            {/* Mode Toggle */}
            <div className="flex items-center gap-1 bg-gray-100 dark:bg-gray-800 rounded-full p-1">
              <button
                onClick={() => setMode('cyber')}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  mode === 'cyber'
                    ? 'bg-green-500 text-black shadow-lg shadow-green-500/25'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                🛡️ Cyber Security
              </button>
              <button
                onClick={() => setMode('fullstack')}
                className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  mode === 'fullstack'
                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                💻 Full-Stack Dev
              </button>
            </div>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-lg transition-colors text-xl ${
                mode === 'cyber'
                  ? 'hover:bg-green-500/10 text-green-400'
                  : 'hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
              aria-label="Toggle theme"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {mode === 'cyber' ? <CyberSecurity /> : <FullStack />}
      </main>

      {/* RAG Widget */}
      <RAGWidget mode={mode} />
    </div>
  );
}
