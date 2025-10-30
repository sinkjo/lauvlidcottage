import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cottageExterior from "@/assets/exterior-cabin-1.webp";
import cottageLake from "@/assets/cottage-lake.jpg";
import cottageInterior from "@/assets/interior-living-room-2.webp";
import vageSunset from "@/assets/vage-sunset.webp";

export default function FerienhausTysnes() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Ferienhaus Tysnes - Lauvlid Cottage | Ihr Traumurlaub in Norwegen</title>
        <meta name="description" content="Entdecken Sie das perfekte Ferienhaus Tysnes bei Lauvlid Cottage. Genießen Sie authentische norwegische Atmosphäre, atemberaubende Fjordblicke und absolute Ruhe in der Natur." />
        <link rel="canonical" href="https://www.lauvlidcottage.com/de/ferienhaus-tysnes" />
        <link rel="alternate" hrefLang="de" href="https://www.lauvlidcottage.com/de/ferienhaus-tysnes" />
        <link rel="alternate" hrefLang="x-default" href="https://www.lauvlidcottage.com/" />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img 
            src={cottageExterior} 
            alt="Ferienhaus Tysnes - Lauvlid Cottage Außenansicht"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container h-full flex items-center justify-center text-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Ferienhaus Tysnes - Ihr Rückzugsort am Fjord
              </h1>
              <p className="text-xl text-white/90">
                Erleben Sie unvergessliche Urlaubsmomente in unserem charmanten Ferienhaus auf Tysnes
              </p>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Paragraph 1 */}
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Willkommen bei Lauvlid Cottage, Ihrem idealen <strong>Ferienhaus Tysnes</strong> für einen unvergesslichen Urlaub in Norwegen. Unser liebevoll eingerichtetes Ferienhaus bietet Ihnen die perfekte Kombination aus Komfort, Authentizität und atemberaubender Natur. Gelegen auf der malerischen Insel Tysnes, nur wenige Kilometer von Bergen entfernt, erwartet Sie hier ein Rückzugsort der besonderen Art – umgeben von kristallklaren Fjorden, grünen Hügeln und der unberührten norwegischen Wildnis.
              </p>
              <img 
                src={cottageLake} 
                alt="Fjordblick vom Ferienhaus Tysnes"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Paragraph 2 */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Authentisches Wohngefühl in norwegischer Idylle</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Unser Ferienhaus auf Tysnes verbindet traditionellen norwegischen Charme mit modernem Wohnkomfort. Die großzügigen Räume sind hell und einladend gestaltet, mit handverlesenen Möbeln und regionalen Materialien, die eine warme Atmosphäre schaffen. Große Panoramafenster bieten Ihnen zu jeder Tageszeit spektakuläre Ausblicke auf die umliegende Fjordlandschaft. Hier können Sie morgens beim Kaffee den Sonnenaufgang über dem Wasser beobachten und abends die magischen nordischen Lichtstimmungen genießen. Das Ferienhaus bietet Platz für bis zu acht Personen und ist damit perfekt für Familien oder Gruppen, die gemeinsam die Schönheit Norwegens entdecken möchten.
              </p>
              <img 
                src={cottageInterior} 
                alt="Gemütliches Interieur im Ferienhaus Tysnes"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Paragraph 3 */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Natur pur und Abenteuer vor der Haustür</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Tysnes ist ein wahres Paradies für Naturliebhaber und Aktivurlauber. Direkt von Ihrem Ferienhaus aus können Sie zahlreiche Wanderwege erkunden, die Sie durch malerische Wälder, entlang steiler Klippen und zu versteckten Badebuchten führen. Die Insel ist berühmt für ihre reiche Vogelwelt und die Möglichkeit, Robben und manchmal sogar Wale in den Fjorden zu beobachten. Im Sommer laden die langen, hellen Tage zu ausgedehnten Kajaktouren, Angelausflügen und Radtouren ein. Im Herbst verzaubern die leuchtenden Farben der nordischen Vegetation, während der Winter eine friedliche, schneebedeckte Märchenlandschaft schafft. Ganz gleich, zu welcher Jahreszeit Sie kommen – Tysnes bietet immer neue Facetten der norwegischen Natur.
              </p>
            </div>

            {/* Paragraph 4 */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Kulturelle Schätze und regionale Entdeckungen</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Neben der beeindruckenden Natur bietet Tysnes auch kulturelle Highlights und authentische Einblicke in das norwegische Leben. Besuchen Sie die historische Onarheim-Kirche aus dem 12. Jahrhundert oder schlendern Sie durch kleine Fischerdörfer, wo Sie frischen Fisch direkt vom Kutter kaufen können. Die Insel ist auch bekannt für ihre lebendige Kunstszene – lokale Galerien und Handwerksbetriebe öffnen ihre Türen für interessierte Besucher. In den Sommermonaten finden regelmäßig traditionelle Festivals und Märkte statt, auf denen Sie regionale Spezialitäten probieren und mit den freundlichen Einheimischen ins Gespräch kommen können. Ein Ausflug nach Bergen, der zweitgrößten Stadt Norwegens, ist in nur 45 Minuten möglich und bietet zusätzliche Kultur- und Einkaufserlebnisse.
              </p>
              <img 
                src={vageSunset} 
                alt="Sonnenuntergang über Våge, Tysnes"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Paragraph 5 */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Ihr perfekter Urlaub im Ferienhaus Tysnes</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Lauvlid Cottage ist mehr als nur eine Unterkunft – es ist Ihr Zuhause auf Zeit in einer der schönsten Regionen Norwegens. Wir legen großen Wert darauf, dass Sie sich vom ersten Moment an willkommen und wohl fühlen. Das Ferienhaus ist komplett ausgestattet mit moderner Küche, gemütlichen Schlafzimmern, schnellem WLAN und allem, was Sie für einen entspannten Aufenthalt benötigen. Ob Sie nach Ruhe und Erholung suchen, aktive Abenteuer erleben möchten oder einfach nur die Seele baumeln lassen wollen – unser <strong>Ferienhaus Tysnes</strong> bietet Ihnen den idealen Rahmen. Buchen Sie noch heute und entdecken Sie, warum so viele Gäste immer wieder zu uns zurückkehren. Wir freuen uns darauf, Sie bei Lauvlid Cottage willkommen zu heißen!
              </p>
            </div>

            {/* Call to Action */}
            <div className="text-center pt-8">
              <a 
                href="https://myrent.interhome.com/en/NO1928.603.1/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Jetzt Ihr Ferienhaus auf Tysnes buchen
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
