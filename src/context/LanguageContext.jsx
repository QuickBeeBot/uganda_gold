// src/context/LanguageContext.jsx
import React, { createContext, useState, useEffect } from 'react';
import { translations, languages } from '../constants/translations';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('en');

  // Load saved language on mount
  useEffect(() => {
    const saved = localStorage.getItem('language');
    if (saved && languages.find(l => l.code === saved)) {
      setLang(saved);
    }
  }, []);

  // Save and update direction
  useEffect(() => {
    localStorage.setItem('language', lang);
    const currentLang = languages.find(l => l.code === lang);
    document.documentElement.setAttribute('dir', currentLang?.dir || 'ltr');
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: (key) => translations[lang]?.[key] || key }}>
      {children}
    </LanguageContext.Provider>
  );
};