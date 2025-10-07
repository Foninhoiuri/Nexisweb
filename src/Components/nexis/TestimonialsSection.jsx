import React from "react";
import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "João Silva",
    company: "TechStart Soluções",
    role: "CEO",
    text: "A Nexis transformou nosso atendimento e economizamos horas por dia. O retorno foi imediato.",
    rating: 5
  },
  {
    name: "Maria Santos",
    company: "E-commerce Plus",
    role: "Diretora de Operações",
    text: "Nosso suporte ficou muito mais eficiente. Recomendo para qualquer empresa que queira crescer!",
    rating: 5
  },
  {
    name: "Carlos Oliveira",
    company: "Consultoria B2B Pro",
    role: "Sócio Fundador",
    text: "A consultoria gratuita nos ajudou a entender onde automatizar. Resultados em poucas semanas.",
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-[#000014]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-base md:text-xl text-white/70 max-w-2xl mx-auto">
            Histórias reais de transformação
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-[#000055] rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[#3150D8]/30 hover:border-[#FA8334]/50 transition-all duration-300 relative"
            >
              <Quote className="absolute top-4 md:top-6 right-4 md:right-6 w-10 h-10 md:w-12 md:h-12 text-[#FA8334]/20" />
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 md:w-5 md:h-5 text-[#FA8334] fill-current" />
                ))}
              </div>

              <p className="text-white/90 text-sm md:text-base leading-relaxed mb-6 relative z-10">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full bg-gradient-to-br from-[#FA8334] to-[#3150D8] flex items-center justify-center text-white font-bold text-base md:text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-white/60 text-xs md:text-sm">{testimonial.role}</p>
                  <p className="text-[#FA8334] text-xs md:text-sm">{testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-6 sm:gap-8 bg-[#000055] rounded-2xl md:rounded-3xl p-6 md:p-8 border border-[#3150D8]/30">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">500+</p>
              <p className="text-white/60 text-xs md:text-sm">Clientes Satisfeitos</p>
            </div>
            <div className="hidden sm:block w-px h-12 md:h-16 bg-white/20"></div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">98%</p>
              <p className="text-white/60 text-xs md:text-sm">Taxa de Satisfação</p>
            </div>
            <div className="hidden sm:block w-px h-12 md:h-16 bg-white/20"></div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white mb-1">R$1M+</p>
              <p className="text-white/60 text-xs md:text-sm">Economizados</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}