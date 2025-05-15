import { Link } from "wouter";
import { getRandomBibleVerse } from "@/lib/utils";
import { CONTACT_PHONE, CONTACT_EMAIL, CONTACT_WHATSAPP } from "@/lib/constants";

export default function Footer() {
  const verse = getRandomBibleVerse();

  return (
    <footer className="bg-brown-dark text-beige-light pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4 text-[hsl(var(--venda-yellow))]">
              Contact Information
            </h3>
            <p className="mb-2">
              <i className="fas fa-phone mr-2"></i> {CONTACT_PHONE}
            </p>
            <p className="mb-2">
              <i className="fas fa-envelope mr-2"></i> {CONTACT_EMAIL}
            </p>
            <p>
              <i className="fab fa-whatsapp mr-2"></i> {CONTACT_WHATSAPP}
            </p>
          </div>
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4 text-[hsl(var(--venda-yellow))]">
              Bible Verse of Hope
            </h3>
            <p className="italic mb-2">"{verse.verse}"</p>
            <p>- {verse.reference}</p>
          </div>
          <div>
            <h3 className="font-playfair text-xl font-semibold mb-4 text-[hsl(var(--venda-yellow))]">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#event-details" className="hover:text-[hsl(var(--venda-yellow))] transition-colors">
                  Event Details
                </Link>
              </li>
              <li>
                <Link href="/#location" className="hover:text-[hsl(var(--venda-yellow))] transition-colors">
                  Location & Directions
                </Link>
              </li>
              <li>
                <Link href="/#rsvp" className="hover:text-[hsl(var(--venda-yellow))] transition-colors">
                  RSVP
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-beige-dark/30 pt-6 text-center">
          <p>With love and blessings for Mrs. LS Mudimeli's 80th Birthday</p>
          <p className="text-sm mt-2">© {new Date().getFullYear()} Mudimeli Family. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
