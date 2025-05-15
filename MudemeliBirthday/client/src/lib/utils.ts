import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format date to a readable format
export function formatDate(date: Date): string {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Format time to a readable format
export function formatTime(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

// Random Bible verses for the app
export function getRandomBibleVerse(): { verse: string; reference: string } {
  const verses = [
    {
      verse: "Gray hair is a crown of glory; it is gained in a righteous life.",
      reference: "Proverbs 16:31",
    },
    {
      verse: "O God, from my youth you have taught me, and I still proclaim your wondrous deeds. So even to old age and gray hairs, O God, do not forsake me, until I proclaim your might to another generation, your power to all those to come.",
      reference: "Psalm 71:17-18",
    },
    {
      verse: "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
      reference: "Jeremiah 29:11",
    },
    {
      verse: "The righteous flourish like the palm tree and grow like a cedar in Lebanon. They are planted in the house of the LORD; they flourish in the courts of our God. They still bear fruit in old age; they are ever full of sap and green.",
      reference: "Psalm 92:12-14",
    },
    {
      verse: "Wisdom belongs to the aged, and understanding to the old.",
      reference: "Job 12:12",
    },
    {
      verse: "Even to your old age I am he, and to gray hairs I will carry you. I have made, and I will bear; I will carry and will save.",
      reference: "Isaiah 46:4",
    },
    {
      verse: "Remember the days of old; consider the years of many generations; ask your father, and he will show you, your elders, and they will tell you.",
      reference: "Deuteronomy 32:7",
    },
  ];

  return verses[Math.floor(Math.random() * verses.length)];
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Validate phone number format (simple validation)
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^\+?[0-9]{10,15}$/;
  return phoneRegex.test(phone.replace(/\s/g, ""));
}
