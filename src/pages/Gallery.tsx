
import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";
import { useHreflang } from "@/hooks/useHreflang";
import exteriorBalcony from "@/assets/exterior-balcony.png";
import exteriorBoat from "@/assets/exterior-boat.jpg";
import exteriorCabin1 from "@/assets/exterior-cabin-1.webp";
import exteriorCabin2 from "@/assets/exterior-cabin-2.webp";
import exteriorCabin4 from "@/assets/exterior-cabin-4.webp";
import exteriorCabin5 from "@/assets/exterior-cabin-5.webp";
import exteriorSunset from "@/assets/exterior-sunset.jpg";
import interiorBedroom1 from "@/assets/interior-bedroom-1.webp";
import interiorBedroom3 from "@/assets/interior-bedroom-3.webp";
import interiorBedroomMaster from "@/assets/interior-bedroom-master.webp";
import interiorKitchen1 from "@/assets/interior-kitchen-1.webp";
import interiorKitchen2 from "@/assets/interior-kitchen-2.webp";
import interiorKitchen3 from "@/assets/interior-kitchen-3.webp";
import interiorLivingRoom2 from "@/assets/interior-living-room-2.webp";
import interiorLivingRoom3 from "@/assets/interior-living-room-3.webp";
import interiorLivingRoom4 from "@/assets/interior-living-room-4.webp";

// Sample gallery images
const galleryImages = [
  {
    id: 1,
    src: exteriorBalcony,
    alt: "Balcony with lake view",
    category: "exterior"
  },
  {
    id: 2,
    src: interiorBedroomMaster,
    alt: "Master bedroom with lake view",
    category: "interior"
  },
  {
    id: 3,
    src: interiorKitchen1,
    alt: "Modern kitchen and dining area",
    category: "interior"
  },
  {
    id: 4,
    src: exteriorCabin1,
    alt: "Cabin exterior view",
    category: "exterior"
  },
  {
    id: 5,
    src: interiorLivingRoom2,
    alt: "Living room with panoramic view",
    category: "interior"
  },
  {
    id: 6,
    src: interiorBedroom1,
    alt: "Cozy bedroom interior",
    category: "interior"
  },
  {
    id: 7,
    src: exteriorCabin2,
    alt: "Cabin with lake view",
    category: "exterior"
  },
  {
    id: 8,
    src: interiorKitchen2,
    alt: "Bright kitchen with view",
    category: "interior"
  },
  {
    id: 9,
    src: interiorBedroom3,
    alt: "Light bedroom with natural wood",
    category: "interior"
  },
  {
    id: 10,
    src: exteriorCabin4,
    alt: "Cabin hillside view",
    category: "exterior"
  },
  {
    id: 11,
    src: interiorKitchen3,
    alt: "Kitchen with fireplace",
    category: "interior"
  },
  {
    id: 12,
    src: interiorLivingRoom3,
    alt: "Comfortable living area",
    category: "interior"
  },
  {
    id: 13,
    src: exteriorCabin5,
    alt: "Cabin lakeside",
    category: "exterior"
  },
  {
    id: 14,
    src: interiorLivingRoom4,
    alt: "Work space with lake view",
    category: "interior"
  },
  {
    id: 15,
    src: exteriorBoat,
    alt: "Boat and dock",
    category: "exterior"
  },
  {
    id: 16,
    src: exteriorSunset,
    alt: "Sunset over the lake",
    category: "exterior"
  },
];

export default function Gallery() {
  const { t } = useLanguage();
  const hreflang = useHreflang();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filteredImages, setFilteredImages] = useState(galleryImages);
  const [activeFilter, setActiveFilter] = useState("all");
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);
  
  // Filter gallery images by category
  const filterGallery = (category: string) => {
    setActiveFilter(category);
    
    if (category === "all") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(galleryImages.filter(img => img.category === category));
    }
  };
  
  // Handle lightbox navigation
  const navigateGallery = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === "prev") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };
  
  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        navigateGallery("prev");
      } else if (e.key === "ArrowRight") {
        navigateGallery("next");
      }
    };
    
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, filteredImages]);
  
  return (
    <div className="min-h-screen flex flex-col">
      {hreflang}
      <Navbar />
      
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="relative py-20 bg-gradient-to-r from-sea-light to-white dark:from-sea-dark dark:to-background overflow-hidden">
          <div className="container relative z-10">
            <div className="max-w-3xl mx-auto text-center animate-fade-in">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                {t.gallery.title}
              </h1>
              <p className="text-muted-foreground text-lg mb-6">
                {t.gallery.subtitle}
              </p>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10">
            <div className="absolute top-10 right-10 w-64 h-64 rounded-full bg-primary/50 blur-3xl" />
            <div className="absolute bottom-10 right-40 w-48 h-48 rounded-full bg-sea-light blur-3xl" />
          </div>
        </section>
        
        {/* Gallery Filters */}
        <section className="py-8">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in">
              {["all", "exterior", "interior"].map((category) => (
                <button
                  key={category}
                  onClick={() => filterGallery(category)}
                  className={cn(
                    "px-6 py-2 rounded-full transition-all",
                    activeFilter === category
                      ? "bg-primary text-white shadow-lg"
                      : "bg-card hover:bg-muted"
                  )}
                >
                  {category === "all" 
                    ? t.gallery.filters.all 
                    : category === "exterior" 
                      ? t.gallery.filters.exterior 
                      : t.gallery.filters.interior}
                </button>
              ))}
            </div>
            
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredImages.map((image, index) => (
                <div 
                  key={image.id} 
                  className="relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer group animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setSelectedImage(image.id)}
                >
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white">{image.alt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Lightbox */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in">
            <button 
              className="absolute top-4 right-4 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
              <span className="sr-only">Close</span>
            </button>
            
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => navigateGallery("prev")}
            >
              <span className="sr-only">Previous</span>
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="max-w-5xl max-h-[80vh] overflow-hidden">
              {filteredImages.find(img => img.id === selectedImage) && (
                <img 
                  src={filteredImages.find(img => img.id === selectedImage)?.src} 
                  alt={filteredImages.find(img => img.id === selectedImage)?.alt}
                  className="max-w-full max-h-[80vh] object-contain"
                />
              )}
            </div>
            
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-4 rounded-full hover:bg-white/10 transition-colors"
              onClick={() => navigateGallery("next")}
            >
              <span className="sr-only">Next</span>
              <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
