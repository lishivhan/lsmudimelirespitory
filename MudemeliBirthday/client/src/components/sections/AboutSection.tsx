import BibleVerse from "@/components/common/BibleVerse";

export default function AboutSection() {
  return (
    <section id="about" className="py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            {/* Decorative element instead of portrait */}
            <div className="rounded-lg shadow-lg p-8 md:p-12 bg-gradient-to-br from-[hsl(var(--venda-blue))/10] to-[hsl(var(--venda-purple))/10] border border-[hsl(var(--venda-purple))/20] mx-auto">
              <div className="w-full aspect-square flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl md:text-3xl font-playfair font-bold text-[hsl(var(--venda-purple))] mb-3">80</h3>
                  <p className="text-lg md:text-xl font-medium text-[hsl(var(--venda-red))]">Years of Blessings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[hsl(var(--venda-purple))] mb-6">
              About Our Mother
            </h2>
            <div className="w-20 h-1 bg-[hsl(var(--venda-red))] mb-6"></div>
            <p className="text-lg mb-4">
              Mrs. LS Mudimeli has been a pillar of strength, wisdom, and faith in our family and community for eight decades. 
              Her journey through life has been marked by her unwavering commitment to God, family, and the preservation of our 
              Venda culture and traditions.
            </p>
            <p className="text-lg mb-6">
              As she reaches the blessed age of 80, we gather to celebrate God's faithfulness in her life and the impact she has 
              made on all who have had the privilege of knowing her.
            </p>
            <BibleVerse />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-40 opacity-10 bg-venda-pattern"></div>
    </section>
  );
}
