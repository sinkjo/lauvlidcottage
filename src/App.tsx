
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import BookingPage from "./pages/BookingPage";
import Gallery from "./pages/Gallery";
import YourStay from "./pages/YourStay";
import Contact from "./pages/Contact";
import FerienhausTysnes from "./pages/FerienhausTysnes";
import CottageNorway from "./pages/CottageNorway";
import NotFound from "./pages/NotFound";
import { LanguageProvider } from "./contexts/LanguageContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <LanguageProvider>
          <Toaster />
          <Sonner />
          <ScrollToTop />
          <Routes>
            {/* English routes */}
            <Route path="/" element={<Index />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/your-stay" element={<YourStay />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/booking" element={<BookingPage />} />
            {/* German routes */}
            <Route path="/de" element={<Index />} />
            <Route path="/de/galerie" element={<Gallery />} />
            <Route path="/de/ihr-aufenthalt" element={<YourStay />} />
            <Route path="/de/kontakt" element={<Contact />} />
            <Route path="/de/buchen" element={<BookingPage />} />
            {/* Article pages */}
            <Route path="/cottage-norway" element={<CottageNorway />} />
            <Route path="/de/ferienhaus-tysnes" element={<FerienhausTysnes />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </LanguageProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
