import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import LanguageSelector from "./LanguageSelector";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { ROUTES } from "@/routes";

const discoverLinks: Record<"en" | "de", { name: string; path: string }[]> = {
  en: [{ name: "Cottage Norway", path: "/cottage-norway" }],
  de: [{ name: "Ferienhaus Tysnes", path: "/de/ferienhaus-tysnes" }],
};

export default function Navbar() {
  const { t, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [discoverOpen, setDiscoverOpen] = useState(false);
  const discoverRef = useRef<HTMLLIElement>(null);
  const lang = language as "en" | "de";

  const navLinks = [
    { name: t.nav.home, path: ROUTES.home[lang] },
    { name: t.nav.gallery, path: ROUTES.gallery[lang] },
    { name: t.nav.yourStay, path: ROUTES.yourStay[lang] },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (discoverRef.current && !discoverRef.current.contains(e.target as Node)) {
        setDiscoverOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-card/80 backdrop-blur-lg py-3 shadow-md transition-all duration-300">
      <nav className="container flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <LanguageSelector />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 items-center">
          {navLinks.map(link => <li key={link.name} className="relative">
              <Link to={link.path} className="font-medium transition-colors hover:text-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:w-0 after:bg-primary after:transition-all hover:after:w-full">
                {link.name}
              </Link>
            </li>)}

          {/* Discover dropdown */}
          <li ref={discoverRef} className="relative">
            <button
              onClick={() => setDiscoverOpen(o => !o)}
              className="flex items-center gap-1 font-medium transition-colors hover:text-primary cursor-pointer"
            >
              Discover
              <ChevronDown className={cn("h-4 w-4 transition-transform duration-200", discoverOpen && "rotate-180")} />
            </button>
            {discoverOpen && (
              <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-52 bg-white dark:bg-card border border-border rounded-xl shadow-lg py-1 z-50">
                {discoverLinks[lang].map(link => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      onClick={() => setDiscoverOpen(false)}
                      className="block px-4 py-2.5 text-sm hover:bg-muted hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>

        <div className="hidden md:flex items-center space-x-2">
          <Button asChild className="btn-primary">
            <a href="https://myrent.interhome.com/en/NO1928.603.1/" target="_blank" rel="noopener noreferrer">{t.nav.bookNow}</a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center space-x-2">
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="rounded-full">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={cn("fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden transition-opacity duration-300", mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none")}>
        <div className={cn("fixed right-0 w-3/4 max-w-sm bg-white dark:bg-card shadow-xl p-6 transition-transform duration-300 ease-in-out", mobileMenuOpen ? "translate-x-0" : "translate-x-full")}>
          <div className="flex flex-col h-full justify-between bg-white dark:bg-card text-foreground">
            <div>
              <div className="flex justify-between mb-8">
                <LanguageSelector />
                <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)} className="rounded-full">
                  <X className="h-6 w-6" />
                </Button>
              </div>
              <ul className="space-y-6">
                {navLinks.map(link => <li key={link.name}>
                    <Link to={link.path} className="text-lg font-medium transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                      {link.name}
                    </Link>
                  </li>)}
                <li>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2">Discover</p>
                  <ul className="space-y-3 pl-2">
                    {discoverLinks[lang].map(link => (
                      <li key={link.path}>
                        <Link to={link.path} className="text-lg font-medium transition-colors hover:text-primary" onClick={() => setMobileMenuOpen(false)}>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>

            <Button asChild className="w-full btn-primary mt-6">
              <a href="https://myrent.interhome.com/en/NO1928.603.1/" target="_blank" rel="noopener noreferrer" onClick={() => setMobileMenuOpen(false)}>
                {t.nav.bookNow}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>;
}
