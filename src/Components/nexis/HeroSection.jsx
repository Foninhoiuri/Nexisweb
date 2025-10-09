import React from "react";
import { motion } from "framer-motion";
import { Button } from "../Components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Blur */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#000000]/90 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&h=1080&fit=crop" 
          alt="Automação Empresarial"
          className="w-full h-full object-cover blur-sm"
        />
      </div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#3150D8] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF6A00] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full px-6 py-20 md:py-32">
        <motion.div 
          className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/20"
          >
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#FF6A00]" />
            <span className="text-white/90 text-xs md:text-sm font-medium">
              Tecnologia à frente de 99,7% do Brasil
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Transforme tarefas repetitivas em{" "}
            <span className="gradient-text">processos automáticos</span>{" "}
            e ganhe tempo para focar no que importa
          </motion.h1>

          {/* Subtitle */}
          <motion.p 
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed font-light max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Automatizamos atendimento, suporte e qualquer processo empresarial 
            com inteligência artificial de ponta
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-4"
          >
            <Button 
              onClick={scrollToContact}
              className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white font-semibold px-6 py-6 md:px-10 md:py-7 rounded-full text-base md:text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#FF6A00]/50 hover:scale-105 w-full sm:w-auto"
            >
              Quero Automatizar Minha Empresa Agora
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 pt-8 md:pt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
              <p className="text-white/70 text-xs md:text-sm mt-1">Clientes Atendidos</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">R$1M+</p>
              <p className="text-white/70 text-xs md:text-sm mt-1">Economizados</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/20"></div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">24/7</p>
              <p className="text-white/70 text-xs md:text-sm mt-1">Disponibilidade</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );

}


