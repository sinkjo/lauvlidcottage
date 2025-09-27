import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/contexts/LanguageContext";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Weijing",
    location: "Rohrbach, Germany",
    avatar: "",
    content: "Perfect stay! The surrounding are peaceful and beautiful, the cabin is bigger than I thought and has everything you need. We enjoyed our stay very much, and this is definitely our favorite cabin during our two week trip around Bergen!",
    rating: 5
  },
  {
    id: 2,
    name: "Caroline",
    location: "Germany",
    avatar: "",
    content: "This cottage is a dream, and the view is simply breathtaking. Across the water lies a heron colony on a small island, and the sun can be enjoyed from early morning until late evening on the terrace. The boat is the ultimate bonus, letting you explore the beautiful, small fjords nearby. Everything was spotless and lovely.",
    rating: 5
  },
  {
    id: 3,
    name: "Lise",
    location: "Bergen, Norway",
    avatar: "",
    content: "This was our second time visiting the lovely cottage. The home has everything you need, it's bright and welcoming, and it offers a beautiful view. Outside the large windows there is rich birdlife for those who enjoy it.",
    rating: 5
  },
  {
    id: 4,
    name: "Christophe",
    location: "Bougival, France",
    avatar: "",
    content: "A lovely cottage on the edge of the fjord – peaceful, comfortable, and with exceptional views. Perfect for a family holiday. I highly recommend this cottage for a complete immersion in Norwegian nature.",
    rating: 5
  },
  {
    id: 5,
    name: "Stefan",
    location: "Schattdorf, Switzerland",
    avatar: "",
    content: "A beautiful, well-equipped house in a peaceful setting. The view over the water is fantastic and truly relaxing. We caught many large fish right from the jetty, so there was no need to use the boat for fishing.",
    rating: 5
  },
  {
    id: 6,
    name: "Karen",
    location: "Hamburg, Germany",
    avatar: "",
    content: "We enjoyed every minute, and can only agree with all the other reviews. The house and the surroundings are even more beautiful than in the photos. The house is beautifully furnished and has everything you need. A special highlight was the boat. It was great fun to explore the surrounding fjords.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const nextTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  const prevTestimonial = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };
  
  useEffect(() => {
    const interval = setInterval(nextTestimonial, 8000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="section bg-muted py-20">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-muted-foreground">
            {t.testimonials.description}
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="relative h-[400px] md:h-[300px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 glass-card p-8 md:p-10 transition-all duration-500",
                  activeIndex === index 
                    ? "opacity-100 translate-x-0 z-10"
                    : index < activeIndex 
                      ? "opacity-0 -translate-x-full z-0" 
                      : "opacity-0 translate-x-full z-0"
                )}
              >
                <div className="flex flex-col gap-6 h-full">
                  <div className="flex flex-col items-center">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className="h-4 w-4 fill-primary text-primary" 
                        />
                      ))}
                    </div>
                    <h4 className="text-lg font-semibold text-center">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground text-center">{testimonial.location}</p>
                  </div>
                  
                  <div className="flex-1 flex items-center">
                    <blockquote className="italic text-muted-foreground">
                      "{testimonial.content}"
                    </blockquote>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-between mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-card hover:bg-muted border border-border transition-colors"
              disabled={isAnimating}
            >
              <ChevronLeft className="h-5 w-5" />
              <span className="sr-only">Previous testimonial</span>
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (isAnimating) return;
                    setIsAnimating(true);
                    setActiveIndex(index);
                    setTimeout(() => setIsAnimating(false), 500);
                  }}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIndex === index 
                      ? "bg-primary w-6" 
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-card hover:bg-muted border border-border transition-colors"
              disabled={isAnimating}
            >
              <ChevronRight className="h-5 w-5" />
              <span className="sr-only">Next testimonial</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
