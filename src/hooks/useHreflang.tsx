import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import { getAlternateRoute } from "@/config/routes";

const SITE_URL = "https://www.lauvlidcottage.com";

export const useHreflang = () => {
  const location = useLocation();
  const routes = getAlternateRoute(location.pathname);
  
  return (
    <Helmet>
      <link rel="alternate" hrefLang="en" href={`${SITE_URL}${routes.en}`} />
      <link rel="alternate" hrefLang="de" href={`${SITE_URL}${routes.de}`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}/`} />
    </Helmet>
  );
};
