import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import cottageExterior from "@/assets/exterior-cabin-1.webp";
import cottageLake from "@/assets/cottage-lake.jpg";
import cottageInterior from "@/assets/interior-living-room-2.webp";
import vageSunset from "@/assets/vage-sunset.webp";

export default function CottageNorway() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Cottage Norway – Lauvlid Cottage</title>
        <meta name="description" content="Discover the perfect cottage in Norway at Lauvlid Cottage on Tysnes. Breathtaking fjord views, private dock, and authentic Norwegian charm await you." />
        <link rel="canonical" href="https://www.lauvlidcottage.com/cottage-norway" />
        <link rel="alternate" hrefLang="en" href="https://www.lauvlidcottage.com/cottage-norway" />
        <link rel="alternate" hrefLang="de" href="https://www.lauvlidcottage.com/de/ferienhaus-tysnes" />
        <link rel="alternate" hrefLang="x-default" href="https://www.lauvlidcottage.com/cottage-norway" />
      </Helmet>

      <Navbar />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
          <img
            src={cottageExterior}
            alt="Lauvlid Cottage exterior view on Tysnes, Norway"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative container h-full flex items-center justify-center text-center">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                Cottage Norway – Your Fjord Retreat on Tysnes
              </h1>
              <p className="text-xl text-white/90">
                Experience unforgettable moments at our charming Norwegian cottage on the island of Tysnes
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
                Welcome to Lauvlid Cottage, your ideal <strong>cottage in Norway</strong> for an unforgettable holiday. Our lovingly furnished cottage offers the perfect combination of comfort, authenticity, and breathtaking nature. Situated on the scenic island of Tysnes, just a short distance from Bergen, this retreat awaits you — surrounded by crystal-clear fjords, rolling green hills, and unspoiled Norwegian wilderness.
              </p>
              <img
                src={cottageLake}
                alt="Fjord view from Lauvlid Cottage on Tysnes"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Paragraph 2 */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Authentic Living in Norwegian Surroundings</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our cottage on Tysnes blends traditional Norwegian charm with modern comfort. The spacious rooms are bright and welcoming, furnished with hand-picked pieces and regional materials that create a warm atmosphere. Large panoramic windows offer spectacular views of the surrounding fjord landscape at any hour of the day. Enjoy your morning coffee watching the sunrise over the water, and in the evening take in the magical Nordic light. The cottage sleeps up to eight guests, making it ideal for families or groups looking to explore the beauty of Norway together.
              </p>
              <img
                src={cottageInterior}
                alt="Cosy interior at Lauvlid Cottage, Norway"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Paragraph 3 */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Nature and Adventure Right Outside Your Door</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Tysnes is a true paradise for nature lovers and active travellers. Directly from the cottage you can explore numerous hiking trails that wind through picturesque forests, along dramatic cliffs, and down to hidden coves. The island is renowned for its rich birdlife and the chance to spot seals — and sometimes even whales — in the fjords. The long summer days invite you to extended kayak trips, fishing excursions, and cycling tours. Autumn brings a blaze of Nordic colour, while winter transforms the island into a peaceful, snow-covered retreat. Whatever time of year you visit, Tysnes always reveals a new side of Norwegian nature.
              </p>
            </div>

            {/* Paragraph 4 */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Cultural Gems and Local Discoveries</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Beyond the stunning landscape, Tysnes also offers cultural highlights and genuine insights into Norwegian life. Visit the historic 12th-century Onarheim Church, or wander through small fishing villages where you can buy fresh catch straight from the boat. The island has a lively arts scene — local galleries and craft workshops welcome curious visitors. During the summer months, traditional festivals and markets are held regularly, where you can sample regional specialities and chat with the friendly locals. A day trip to Bergen, Norway's second-largest city, takes just 45 minutes and adds further culture and shopping to your stay.
              </p>
              <img
                src={vageSunset}
                alt="Sunset over Våge, Tysnes, Norway"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            {/* Paragraph 5 */}
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Your Perfect Norwegian Cottage Holiday</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Lauvlid Cottage is more than just a place to stay — it is your home away from home in one of Norway's most beautiful regions. We take great care to make you feel welcome from the very first moment. The cottage is fully equipped with a modern kitchen, cosy bedrooms, fast Wi-Fi, and everything you need for a relaxing stay. Whether you are seeking peace and rest, active adventures, or simply a chance to recharge in nature — our <strong>cottage in Norway</strong> provides the perfect setting. Book today and discover why so many guests return to Lauvlid Cottage time and again. We look forward to welcoming you!
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
                Book Your Norwegian Cottage Stay
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
