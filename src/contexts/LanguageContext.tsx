
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { en } from '../locales/en';
import { de } from '../locales/de';
import { getAlternateRoute, getLanguageFromPath } from '@/config/routes';

type Translations = typeof en;

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: Translations;
}

const translations: Record<string, Translations> = {
  en,
  de
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [language, setLanguage] = useState('en');
  const [t, setT] = useState<Translations>(translations.en);

  // Detect language from URL on mount and when path changes
  useEffect(() => {
    const detectedLang = getLanguageFromPath(location.pathname);
    if (detectedLang !== language) {
      setLanguage(detectedLang);
      setT(translations[detectedLang]);
    }
  }, [location.pathname]);

  const changeLanguage = (lang: string) => {
    if (translations[lang]) {
      setLanguage(lang);
      setT(translations[lang]);
      localStorage.setItem('language', lang);
      
      // Navigate to the corresponding route in the new language
      const routes = getAlternateRoute(location.pathname);
      const newPath = lang === 'en' ? routes.en : routes.de;
      navigate(newPath);
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
