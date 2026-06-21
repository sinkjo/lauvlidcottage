import React, { createContext, useContext, ReactNode } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { en } from '../locales/en';
import { de } from '../locales/de';
import { getLanguageFromPath, getRouteKeyFromPath, ROUTES } from '../routes';

type Lang = 'en' | 'de';
type Translations = typeof en;

interface LanguageContextType {
  language: Lang;
  switchLanguage: (lang: Lang) => void;
  t: Translations;
}

const translations: Record<Lang, Translations> = { en, de };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const language = getLanguageFromPath(location.pathname);
  const t = translations[language];

  const switchLanguage = (lang: Lang) => {
    const routeKey = getRouteKeyFromPath(location.pathname);
    if (routeKey) {
      navigate(ROUTES[routeKey][lang]);
    } else {
      navigate(lang === 'de' ? '/de' : '/');
    }
  };

  return (
    <LanguageContext.Provider value={{ language, switchLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
