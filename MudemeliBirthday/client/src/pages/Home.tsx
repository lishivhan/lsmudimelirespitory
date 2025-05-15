import { Helmet } from "react-helmet-async";
import HeroSection from "@/components/sections/HeroSection";
import CountdownSection from "@/components/sections/CountdownSection";
import AboutSection from "@/components/sections/AboutSection";
import EventDetailsSection from "@/components/sections/EventDetailsSection";
import GallerySection from "@/components/sections/GallerySection";
import LocationSection from "@/components/sections/LocationSection";
import RsvpSection from "@/components/sections/RsvpSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Mrs. LS Mudimeli's 80th Birthday Celebration</title>
        <meta
          name="description"
          content="Join us in celebrating Mrs. LS Mudimeli's 80th birthday with traditional Venda cultural elements, delicious food, and joyful celebration."
        />
      </Helmet>
      
      {/* Venda-inspired border */}
      <div className="venda-border w-full h-4"></div>
      
      <Navbar />
      <HeroSection />
      <CountdownSection />
      <AboutSection />
      <EventDetailsSection />
      <GallerySection />
      <LocationSection />
      <RsvpSection />
      <Footer />
    </>
  );
}
