import { useLanguage } from "@/contexts/LanguageContext";
import { useHreflang } from "@/hooks/useHreflang";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import vageSunset from "@/assets/vage-sunset.webp";

export default function YourStay() {
  const { t } = useLanguage();
  const hreflang = useHreflang();

  return (
    <div className="min-h-screen bg-background">
      {hreflang}
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">{t.yourStay.title}</h1>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              {t.yourStay.intro}
            </p>
            <p>
              {t.yourStay.description}
            </p>
            <p>
              {t.yourStay.visitLink.split('Visit Tysnes')[0]}
              <a href="https://www.visittysnes.no/en-gb" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Visit Tysnes</a>
              {t.yourStay.visitLink.split('Visit Tysnes')[1]}
            </p>
          </div>
          
          <div className="mt-12">
            <img 
              src={vageSunset} 
              alt="Beautiful sunset view over Våge and the surrounding fjords" 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
