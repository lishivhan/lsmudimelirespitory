import { useState, useEffect } from "react";

type CountdownValues = {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
  isExpired: boolean;
};

export function useCountdown(targetDate: Date): CountdownValues {
  const [countdown, setCountdown] = useState<CountdownValues>({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
    isExpired: false,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        // Target date has passed
        clearInterval(interval);
        setCountdown({
          days: "00",
          hours: "00",
          minutes: "00",
          seconds: "00",
          isExpired: true,
        });
        return;
      }

      // Calculate days, hours, minutes, seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({
        days: days.toString().padStart(2, "0"),
        hours: hours.toString().padStart(2, "0"),
        minutes: minutes.toString().padStart(2, "0"),
        seconds: seconds.toString().padStart(2, "0"),
        isExpired: false,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return countdown;
}
