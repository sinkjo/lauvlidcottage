
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { en } from '../locales/en';
import { de } from '../locales/de';
import { routes, getLanguageFromPath, getRouteNameFromPath, type Language } from '@/config/routes';

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
  const [language, setLanguage] = useState<string>('en');
  const [t, setT] = useState<Translations>(translations.en);

  useEffect(() => {
    // Detect language from URL
    const langFromPath = getLanguageFromPath(location.pathname);
    setLanguage(langFromPath);
    setT(translations[langFromPath]);
    localStorage.setItem('language', langFromPath);
  }, [location.pathname]);

  const changeLanguage = (newLang: string) => {
    if (!translations[newLang]) return;
    
    const currentLang = getLanguageFromPath(location.pathname) as Language;
    const routeName = getRouteNameFromPath(location.pathname, currentLang);
    
    if (routeName && routes[newLang as Language]) {
      const newPath = routes[newLang as Language][routeName];
      navigate(newPath);
    } else {
      // Fallback to home if route not found
      navigate(routes[newLang as Language].home);
    }
    
    setLanguage(newLang);
    setT(translations[newLang]);
    localStorage.setItem('language', newLang);
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
