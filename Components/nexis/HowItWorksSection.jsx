import React from "react";
import { motion } from "framer-motion";
import { Zap, HeadphonesIcon, TrendingDown, UserCheck, Play } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Automatização Inteligente",
    description: "Processos repetitivos transformados em fluxos eficientes"
  },
  {
    icon: HeadphonesIcon,
    title: "Atendimento Otimizado",
    description: "Respostas rápidas e consistentes 24/7"
  },
  {
    icon: TrendingDown,
    title: "Redução de Custos",
    description: "Menos retrabalho, até 70% de economia"
  },
  {
    icon: UserCheck,
    title: "Agente SDR Ativo",
    description: "Captação inteligente de leads"
  }
];

export default function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-[#000000] to-[#000014]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Como Funciona
          </h2>
          <p className="text-base md:text-xl text-white/70 max-w-2xl mx-auto">
            Transformamos processos complexos em soluções simples e eficientes
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          {/* Content - 60% (3 columns) */}
          <motion.div 
            className="lg:col-span-3 space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Veja como a Nexis transforma processos repetitivos em automações 
                inteligentes e eficientes
              </h3>
              <p className="text-base md:text-lg text-white/80 leading-relaxed">
                Nossos agentes SDR e fluxos automatizados trabalham para otimizar 
                seu tempo e resultados. Cada processo é cuidadosamente analisado 
                e transformado em uma automação que economiza horas de trabalho.
              </p>
            </div>

            {/* Benefits Grid - Mobile: 1 col, Tablet: 2 cols */}
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-[#000014]/80 backdrop-blur-sm rounded-2xl p-6 border border-[#3150D8]/30 hover:border-[#FF6A00]/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#FF6A00] to-[#3150D8] flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">{benefit.title}</h4>
                  <p className="text-sm text-white/70 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Process Steps */}
            <div className="space-y-4 pt-4">
              {[
                { num: "1", title: "Diagnóstico Gratuito", desc: "Entendemos suas necessidades" },
                { num: "2", title: "Implementação Rápida", desc: "Configuração em dias" },
                { num: "3", title: "Resultados Imediatos", desc: "Ganhos nas primeiras semanas" }
              ].map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 flex-shrink-0 rounded-xl bg-[#FF6A00]/20 flex items-center justify-center text-[#FF6A00] font-bold text-lg border border-[#FF6A00]/30">
                    {step.num}
                  </div>
                  <div>
                    <p className="text-white font-semibold text-base md:text-lg">{step.title}</p>
                    <p className="text-white/60 text-sm">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Media - 40% (2 columns) */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden border border-[#3150D8]/30 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-[#3150D8] to-[#FF6A00] rounded-3xl blur-2xl opacity-30"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=900&fit=crop" 
                alt="Dashboard de Automação em Ação"
                className="relative w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors cursor-pointer group">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FF6A00] flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl glow-effect">
                  <Play className="w-8 h-8 md:w-10 md:h-10 text-white fill-current ml-1" />
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 p-6 bg-[#000014]/80 backdrop-blur-sm rounded-2xl border border-[#3150D8]/30"
            >
              <p className="text-white/90 text-sm md:text-base leading-relaxed">
                <span className="font-semibold text-[#FF6A00]">Demonstração ao vivo:</span> Veja 
                como nossos sistemas automatizam atendimento, qualificam leads e geram relatórios 
                inteligentes em tempo real.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}