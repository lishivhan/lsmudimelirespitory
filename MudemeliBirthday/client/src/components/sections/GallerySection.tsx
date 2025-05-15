import PageHeader from "@/components/layout/PageHeader";

export default function GallerySection() {
  // Array of Venda cultural elements to display instead of images
  const culturalElements = [
    {
      title: "Traditional Dance",
      description: "Tshikona and Domba dances are integral parts of Venda celebrations, expressing joy and cultural pride."
    },
    {
      title: "Language & Stories",
      description: "Tshivenda language carries wisdom through generations with proverbs and traditional storytelling."
    },
    {
      title: "Arts & Crafts",
      description: "Beautiful beadwork, pottery, and wood carvings represent the artistic heritage of Venda culture."
    },
    {
      title: "Music & Rhythm",
      description: "Ngoma drums and mbila (thumb piano) create distinctive sounds that bring people together in celebration."
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <PageHeader title="Celebrating Venda Culture" color="purple" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {culturalElements.map((element, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg h-64 bg-gradient-to-br from-[hsl(var(--venda-blue))/10] to-[hsl(var(--venda-purple))/10] border border-[hsl(var(--venda-purple))/20] p-6 flex flex-col justify-center transition-transform duration-300 hover:scale-105"
            >
              <h3 className="text-xl font-playfair font-semibold text-[hsl(var(--venda-purple))] mb-3">
                {element.title}
              </h3>
              <p className="text-foreground">
                {element.description}
              </p>
              <div className="absolute bottom-0 right-0 w-16 h-16 opacity-20 bg-venda-pattern"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
