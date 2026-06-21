export type RouteKey = 'home' | 'gallery' | 'yourStay' | 'contact' | 'booking';

export const ROUTES: Record<RouteKey, { en: string; de: string }> = {
  home:     { en: '/',           de: '/de' },
  gallery:  { en: '/gallery',    de: '/de/galerie' },
  yourStay: { en: '/your-stay',  de: '/de/ihr-aufenthalt' },
  contact:  { en: '/contact',    de: '/de/kontakt' },
  booking:  { en: '/booking',    de: '/de/buchen' },
};

export function getLanguageFromPath(pathname: string): 'en' | 'de' {
  return pathname === '/de' || pathname.startsWith('/de/') ? 'de' : 'en';
}

export function getRouteKeyFromPath(pathname: string): RouteKey | null {
  for (const key of Object.keys(ROUTES) as RouteKey[]) {
    const paths = ROUTES[key];
    if (paths.en === pathname || paths.de === pathname) return key;
  }
  return null;
}
