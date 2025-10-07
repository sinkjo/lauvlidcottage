import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { routes, getLanguageFromPath, getRouteNameFromPath } from "@/config/routes";

export const useHreflang = () => {
  const location = useLocation();
  const currentLang = getLanguageFromPath(location.pathname);
  const routeName = getRouteNameFromPath(location.pathname, currentLang);

  if (!routeName) return null;

  const enUrl = `${window.location.origin}${routes.en[routeName]}`;
  const deUrl = `${window.location.origin}${routes.de[routeName]}`;

  return (
    <Helmet>
      <link rel="alternate" hrefLang="en" href={enUrl} />
      <link rel="alternate" hrefLang="de" href={deUrl} />
      <link rel="alternate" hrefLang="x-default" href={enUrl} />
    </Helmet>
  );
};
