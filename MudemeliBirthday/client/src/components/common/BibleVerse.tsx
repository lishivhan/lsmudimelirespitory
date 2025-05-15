import { useState, useEffect } from "react";
import { getRandomBibleVerse } from "@/lib/utils";

type BibleVerseProps = {
  className?: string;
  refreshable?: boolean;
};

export default function BibleVerse({ className = "", refreshable = false }: BibleVerseProps) {
  const [verse, setVerse] = useState(getRandomBibleVerse());

  useEffect(() => {
    if (!refreshable) return;
    
    // If refreshable, get a new verse every time the component mounts
    setVerse(getRandomBibleVerse());
  }, [refreshable]);

  return (
    <div className={`bible-verse ${className}`}>
      <p className="italic text-brown font-medium">{`"${verse.verse}"`}</p>
      <p className="text-right text-muted-foreground mt-1">- {verse.reference}</p>
    </div>
  );
}
