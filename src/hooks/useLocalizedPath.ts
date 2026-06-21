import { useLanguage } from "@/contexts/LanguageContext";
import { ROUTES, RouteKey } from "@/routes";

export function useLocalizedPath() {
  const { language } = useLanguage();
  return (routeKey: RouteKey): string => ROUTES[routeKey][language];
}
