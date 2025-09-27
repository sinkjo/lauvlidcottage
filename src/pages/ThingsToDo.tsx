import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ThingsToDo() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">Things to Do</h1>
          <p className="text-lg text-center text-muted-foreground">
            Discover the beautiful activities and attractions around Tysnes.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}