import { useCountdown } from "@/hooks/use-countdown";

type CountdownTimerProps = {
  targetDate: Date;
  className?: string;
};

export default function CountdownTimer({ targetDate, className = "" }: CountdownTimerProps) {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(targetDate);

  if (isExpired) {
    return (
      <div className={`text-center ${className}`}>
        <h3 className="text-2xl font-playfair text-[hsl(var(--venda-red))]">
          The celebration has begun!
        </h3>
      </div>
    );
  }

  return (
    <div className={`flex justify-center items-center space-x-6 md:space-x-10 ${className}`}>
      <div className="countdown-item">
        <span className="text-3xl md:text-5xl font-bold text-[hsl(var(--venda-red))]">{days}</span>
        <span className="text-sm uppercase tracking-wide text-foreground">Days</span>
      </div>
      <div className="countdown-item">
        <span className="text-3xl md:text-5xl font-bold text-[hsl(var(--venda-purple))]">{hours}</span>
        <span className="text-sm uppercase tracking-wide text-foreground">Hours</span>
      </div>
      <div className="countdown-item">
        <span className="text-3xl md:text-5xl font-bold text-[hsl(var(--venda-green))]">{minutes}</span>
        <span className="text-sm uppercase tracking-wide text-foreground">Minutes</span>
      </div>
      <div className="countdown-item">
        <span className="text-3xl md:text-5xl font-bold text-[hsl(var(--venda-yellow))]">{seconds}</span>
        <span className="text-sm uppercase tracking-wide text-foreground">Seconds</span>
      </div>
    </div>
  );
}
