import React from "react";
import HeroSection from "../components/nexis/HeroSection";
import HowItWorksSection from "../components/nexis/HowItWorksSection";
import PricingSection from "../components/nexis/PricingSection";
import TestimonialsSection from "../components/nexis/TestimonialsSection";
import AboutSection from "../components/nexis/AboutSection";
import FAQSection from "../components/nexis/FAQSection";
import FinalCTA from "../components/nexis/FinalCTA";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <div id="home">
        <HeroSection />
      </div>
      
      <HowItWorksSection />
      
      <div id="produtos">
        <PricingSection />
      </div>
      
      <TestimonialsSection />
      
      <div id="sobre">
        <AboutSection />
      </div>
      
      <FAQSection />
      
      <FinalCTA />
    </div>
  );
}