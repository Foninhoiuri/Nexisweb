import React from "react";
import { motion } from "framer-motion";
import { Button } from "../Components/ui/button";
import { MessageCircle, Sparkles } from "lucide-react";

export default function FinalCTA() {
  const openWhatsApp = () => {
    window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre os serviços da Nexis e como posso automatizar minha empresa.', '_blank');
  };

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#FF6A00] via-[#3150D8] to-[#000000] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 md:px-6 md:py-3 rounded-full border border-white/30"
          >
            <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
            <span className="text-white text-xs md:text-sm font-medium">
              Atendimento imediato disponível
            </span>
          </motion.div>

          {/* Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight px-4">
            Pronto para Transformar Sua Empresa?
          </h2>

          {/* Subheadline */}
          <p className="text-base md:text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl mx-auto px-4">
            Fale agora com nosso especialista no WhatsApp e descubra como automatizar 
            seus processos em minutos
          </p>

          {/* WhatsApp Icon Large */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center py-4"
          >
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center border-4 border-white/30 animate-pulse">
              <MessageCircle className="w-12 h-12 md:w-16 md:h-16 text-white" />
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button 
              onClick={openWhatsApp}
              className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-bold px-8 md:px-12 py-6 md:py-8 rounded-full transition-all duration-300 hover:scale-110 text-base md:text-xl shadow-2xl shadow-[#25D366]/50 w-full sm:w-auto glow-effect"
            >
              <MessageCircle className="w-6 h-6 md:w-7 md:h-7 mr-3" />
              Fale com nosso Especialista no WhatsApp
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-8 text-white/90 text-xs md:text-sm"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse"></div>
              <span>Online agora</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <span>⚡</span>
              <span>Resposta imediata</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center gap-2">
              <span>🔒</span>
              <span>100% seguro</span>
            </div>
          </motion.div>

          {/* Additional Info */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-white/70 text-xs md:text-sm max-w-xl mx-auto px-4"
          >
            Nosso time está pronto para entender suas necessidades e apresentar 
            a melhor solução de automação para seu negócio. Sem compromisso.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );

}
