// Route mapping for English and German pages
export const routes = {
  en: {
    home: "/",
    gallery: "/gallery",
    yourStay: "/your-stay",
    contact: "/contact",
    booking: "/booking",
  },
  de: {
    home: "/de",
    gallery: "/de/galerie",
    yourStay: "/de/ihr-aufenthalt",
    contact: "/de/kontakt",
    booking: "/de/buchung",
  }
} as const;

// Helper to get route by language
export const getRoute = (page: keyof typeof routes.en, lang: 'en' | 'de') => {
  return routes[lang][page];
};

// Helper to get alternate route (switch language)
export const getAlternateRoute = (currentPath: string): { en: string; de: string } => {
  // Find which route this is
  for (const [key, enPath] of Object.entries(routes.en)) {
    if (enPath === currentPath) {
      return {
        en: routes.en[key as keyof typeof routes.en],
        de: routes.de[key as keyof typeof routes.de],
      };
    }
  }
  
  for (const [key, dePath] of Object.entries(routes.de)) {
    if (dePath === currentPath) {
      return {
        en: routes.en[key as keyof typeof routes.en],
        de: routes.de[key as keyof typeof routes.de],
      };
    }
  }
  
  // Default to home pages
  return { en: routes.en.home, de: routes.de.home };
};

// Helper to detect language from path
export const getLanguageFromPath = (path: string): 'en' | 'de' => {
  return path.startsWith('/de') ? 'de' : 'en';
};
