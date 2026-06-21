import { Helmet } from "react-helmet";
import { useLanguage } from "@/contexts/LanguageContext";
import { ROUTES, RouteKey } from "@/routes";

const BASE_URL = "https://www.lauvlidcottage.com";

export function HreflangTags({ routeKey }: { routeKey: RouteKey }) {
  const { language } = useLanguage();
  const routes = ROUTES[routeKey];
  const canonical = `${BASE_URL}${language === "de" ? routes.de : routes.en}`;

  return (
    <Helmet>
      <link rel="canonical" href={canonical} />
      <link rel="alternate" hrefLang="en" href={`${BASE_URL}${routes.en}`} />
      <link rel="alternate" hrefLang="de" href={`${BASE_URL}${routes.de}`} />
      <link rel="alternate" hrefLang="x-default" href={`${BASE_URL}${routes.en}`} />
    </Helmet>
  );
}
