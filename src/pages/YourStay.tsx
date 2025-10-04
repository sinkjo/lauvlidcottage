import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function YourStay() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Your Stay</h1>
          <div className="max-w-3xl mx-auto space-y-6 text-lg text-muted-foreground">
            <p>
              Our cottage is beautifully situated in Våge, a charming coastal village that offers both tranquility and easy access to the city. With only a short distance to Bergen and Flesland Airport, getting here is simple—yet once you arrive, you'll feel far away from the everyday hustle.
            </p>
            <p>
              Våge and the surrounding islands are a fantastic destination for anyone looking to experience coastal culture, life by the sea, and breathtaking scenery. From the cottage, you are close to hiking trails, great fishing spots, and exciting activities for the whole family. Whether you want to relax and enjoy the fjord views, explore the local area, or take a day trip to Bergen, this is the ideal starting point for the best of both worlds.
            </p>
            <p>
              For tips on what Tysnes offers, check out <a href="https://www.visittysnes.no/en-gb" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Visit Tysnes</a>!
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
