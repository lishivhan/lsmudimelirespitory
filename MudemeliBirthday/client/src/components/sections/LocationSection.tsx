import { MapPin, Car, Plane, Bus } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import { EVENT_VENUE, GOOGLE_MAPS_URL, GOOGLE_DIRECTIONS_URL } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export default function LocationSection() {
  return (
    <section id="location" className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <PageHeader title="Location & Directions" color="green" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="bg-background p-6 rounded-lg shadow-md mb-6">
              <h3 className="text-xl font-playfair font-semibold mb-4 text-[hsl(var(--venda-blue))]">
                Venue Address
              </h3>
              <p className="text-lg mb-2 flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-[hsl(var(--venda-red))]" /> 
                {EVENT_VENUE}
              </p>
              <p className="text-lg mb-2 flex items-center">
                <span className="h-5 w-5 mr-2 inline-block"></span>
                123 Thohoyandou Street
              </p>
              <p className="text-lg mb-4 flex items-center">
                <span className="h-5 w-5 mr-2 inline-block"></span>
                Limpopo Province, South Africa
              </p>
              
              <Button 
                className="bg-[hsl(var(--venda-blue))] hover:bg-[hsl(var(--venda-blue))/90] text-white rounded-full"
                asChild
              >
                <a 
                  href={GOOGLE_DIRECTIONS_URL} 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <MapPin className="h-4 w-4 mr-2" /> Get Directions
                </a>
              </Button>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-playfair font-semibold mb-4 text-[hsl(var(--venda-blue))]">
                Travel Information
              </h3>
              <div className="mb-3">
                <p className="font-medium flex items-center">
                  <Car className="h-5 w-5 mr-2 text-[hsl(var(--venda-red))]" /> 
                  From Johannesburg:
                </p>
                <p className="ml-7">Approximately 4-hour drive via N1 North.</p>
              </div>
              <div className="mb-3">
                <p className="font-medium flex items-center">
                  <Plane className="h-5 w-5 mr-2 text-[hsl(var(--venda-red))]" /> 
                  Nearest Airport:
                </p>
                <p className="ml-7">Polokwane International Airport (PTG), 2 hours drive.</p>
              </div>
              <div>
                <p className="font-medium flex items-center">
                  <Bus className="h-5 w-5 mr-2 text-[hsl(var(--venda-red))]" /> 
                  Transport Service:
                </p>
                <p className="ml-7">Shuttle service available from major hotels. Contact for arrangements.</p>
              </div>
            </div>
          </div>
          
          <div className="h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            {/* Google Maps Embed */}
            <iframe
              src={GOOGLE_MAPS_URL}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Venda Community Hall Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
