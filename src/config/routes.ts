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
    yourStay: "/de/dein-aufenthalt",
    contact: "/de/kontakt",
    booking: "/de/buchung",
  },
} as const;

export type Language = keyof typeof routes;
export type RouteName = keyof typeof routes.en;

export const getRoute = (lang: Language, routeName: RouteName): string => {
  return routes[lang][routeName];
};

// Reverse mapping: from path to language and route name
export const getLanguageFromPath = (path: string): Language => {
  if (path.startsWith('/de')) return 'de';
  return 'en';
};

export const getRouteNameFromPath = (path: string, lang: Language): RouteName | null => {
  const routesForLang = routes[lang];
  for (const [name, route] of Object.entries(routesForLang)) {
    if (route === path) {
      return name as RouteName;
    }
  }
  return null;
};
