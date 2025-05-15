import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import BibleVerse from "@/components/common/BibleVerse";
import Footer from "@/components/layout/Footer";

export default function ConfirmationPage() {
  return (
    <>
      <Helmet>
        <title>Thank You for Your RSVP | Mrs. LS Mudimeli's 80th Birthday</title>
        <meta
          name="description"
          content="Thank you for confirming your attendance to Mrs. LS Mudimeli's 80th birthday celebration."
        />
      </Helmet>
      
      {/* Venda-inspired border */}
      <div className="venda-border w-full h-4"></div>
      
      <main className="min-h-screen flex flex-col">
        <div className="container mx-auto px-4 py-16 flex-1 flex items-center justify-center">
          <div className="max-w-2xl w-full bg-card p-8 rounded-lg shadow-lg text-center">
            <div className="flex justify-center mb-6">
              <CheckCircle className="h-20 w-20 text-[hsl(var(--venda-green))]" />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-playfair font-bold text-[hsl(var(--venda-purple))] mb-4">
              Thank You for Your RSVP!
            </h1>
            
            <p className="text-lg mb-6">
              We have received your RSVP for Mrs. LS Mudimeli's 80th Birthday Celebration.
              We look forward to celebrating this special occasion with you.
            </p>
            
            <p className="text-lg mb-8">
              You will receive a confirmation message shortly. If you opted for updates,
              we will keep you informed about any announcements regarding the celebration.
            </p>
            
            <BibleVerse className="mb-8" refreshable />
            
            <Button
              asChild
              className="bg-[hsl(var(--venda-blue))] hover:bg-[hsl(var(--venda-blue))/90] text-white rounded-full px-8 py-3"
            >
              <Link href="/">
                Return to Home
              </Link>
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
