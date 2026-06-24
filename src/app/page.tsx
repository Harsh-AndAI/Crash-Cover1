import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero"; 
import WhyChoose from "@/components/home/WhyChoose";
import HowItWorks from "@/components/home/HowItWorks";
import EligibilitySection from "@/components/home/AccidentJourneySection";
import FleetSection from "@/components/home/FleetSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import CTASection from "@/components/home/CTASection";
import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyChoose />
      <HowItWorks />
      <EligibilitySection />
      <FleetSection />
      <TestimonialsSection />
      <CTASection />
      <ContactForm />
      <Footer />
    </>
  );  
}