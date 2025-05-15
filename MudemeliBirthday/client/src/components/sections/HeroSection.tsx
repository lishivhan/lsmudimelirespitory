import { Link } from "wouter";
import BibleVerse from "@/components/common/BibleVerse";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <header className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-r from-[hsl(var(--background))] to-[hsl(var(--card))]">
      {/* Venda Pattern Background */}
      <div className="absolute inset-0 z-0 bg-venda-pattern opacity-10"></div>
      
      <div className="relative z-10 text-center px-4 mt-16">
        <p className="text-[hsl(var(--venda-blue))] font-playfair italic mb-1">
          With gratitude to God
        </p>
        <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-2 text-[hsl(var(--venda-purple))]">
          Mrs. LS Mudimeli
        </h1>
        <div className="w-24 h-1 bg-[hsl(var(--venda-yellow))] mx-auto my-4"></div>
        <h2 className="text-2xl md:text-3xl font-semibold text-[hsl(var(--venda-red))] mb-6">
          80th Birthday Celebration
        </h2>
        <p className="text-xl md:text-2xl mb-8 font-raleway">
          We invite you to join us in celebrating God's faithfulness
        </p>
        
        {/* Bible Verse */}
        <BibleVerse className="max-w-2xl mx-auto mb-8" refreshable />
        
        {/* CTA Button */}
        <Button 
          asChild
          size="lg" 
          className="bg-[hsl(var(--venda-green))] hover:bg-[hsl(var(--venda-green))/90] text-white rounded-full"
        >
          <Link href="#rsvp">
            RSVP Now
          </Link>
        </Button>
      </div>
    </header>
  );
}
