import React from "react";
import HeroSection from "../Components/nexis/HeroSection";
import HowItWorksSection from "../Components/nexis/HowItWorksSection";
import PricingSection from "../Components/nexis/PricingSection";
import TestimonialsSection from "../Components/nexis/TestimonialsSection";
import AboutSection from "../Components/nexis/AboutSection";
import FAQSection from "../Components/nexis/FAQSection";
import FinalCTA from "../Components/nexis/FinalCTA";

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
