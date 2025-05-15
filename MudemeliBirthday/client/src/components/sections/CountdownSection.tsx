import CountdownTimer from "@/components/common/CountdownTimer";
import { EVENT_DATE } from "@/lib/constants";
import PageHeader from "@/components/layout/PageHeader";

export default function CountdownSection() {
  return (
    <section className="py-12 bg-card text-center">
      <div className="container mx-auto px-4">
        <PageHeader 
          title="Celebration Countdown" 
          color="blue" 
          className="mb-8"
        />
        <CountdownTimer targetDate={EVENT_DATE} />
      </div>
    </section>
  );
}
