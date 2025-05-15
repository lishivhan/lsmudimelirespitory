import { Calendar, MapPin, Utensils } from "lucide-react";
import PageHeader from "@/components/layout/PageHeader";
import { EVENT_DATE, EVENT_TIME, EVENT_VENUE } from "@/lib/constants";
import { formatDate } from "@/lib/utils";

export default function EventDetailsSection() {
  return (
    <section id="event-details" className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <PageHeader title="Event Details" color="blue" />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Date & Time */}
          <div className="bg-background p-6 rounded-lg shadow-md text-center">
            <div className="rounded-full bg-[hsl(var(--venda-red))] w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Calendar className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-playfair font-semibold mb-2">Date & Time</h3>
            <p className="text-lg">{formatDate(EVENT_DATE)}</p>
            <p className="text-lg">{EVENT_TIME}</p>
          </div>

          {/* Venue */}
          <div className="bg-background p-6 rounded-lg shadow-md text-center">
            <div className="rounded-full bg-[hsl(var(--venda-green))] w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-playfair font-semibold mb-2">Venue</h3>
            <p className="text-lg">{EVENT_VENUE}</p>
            <p className="text-lg">123 Thohoyandou Street</p>
            <p className="text-lg">Limpopo Province</p>
          </div>

          {/* Celebration */}
          <div className="bg-background p-6 rounded-lg shadow-md text-center">
            <div className="rounded-full bg-[hsl(var(--venda-purple))] w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Utensils className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-playfair font-semibold mb-2">Celebration</h3>
            <p className="text-lg">Traditional Venda Cuisine</p>
            <p className="text-lg">Cultural Performances</p>
            <p className="text-lg">Family Tributes</p>
          </div>
        </div>
      </div>
    </section>
  );
}
