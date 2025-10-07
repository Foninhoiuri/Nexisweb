import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../Components/ui/button";
import { Check, Star, MessageSquare } from "lucide-react";
import ChatWidget from "./ChatWidget";

const plans = [
  {
    name: "Basic",
    description: "Ideal para começar a automatizar",
    price: "Consulte",
    benefits: [
      "Automatização de tarefas básicas",
      "Suporte inicial automatizado",
      "Relatórios simples de processos",
      "Integração com 1 sistema"
    ],
    transformations: [
      "Economize até 5h por semana",
      "Redução de 40% em tarefas manuais"
    ],
    highlight: false
  },
  {
    name: "Pro",
    description: "Mais escolhido por empresas em crescimento",
    price: "Consulte",
    benefits: [
      "Automatização avançada de atendimento",
      "Agente SDR sempre disponível",
      "Integração com múltiplos sistemas",
      "Consultoria gratuita para diagnóstico"
    ],
    transformations: [
      "Economize até 20h por semana",
      "Aumento de 70% na eficiência",
      "ROI em até 3 meses"
    ],
    highlight: true
  },
  {
    name: "Premium",
    description: "Solução completa e personalizada",
    price: "Consulte",
    benefits: [
      "Todas as funcionalidades do Pro",
      "Soluções 100% personalizadas",
      "Monitoramento inteligente 24/7",
      "Gestor de conta dedicado"
    ],
    transformations: [
      "Transformação digital completa",
      "Redução de 80% em custos operacionais",
      "Escalabilidade ilimitada"
    ],
    highlight: false
  }
];

export default function PricingSection() {
  const [chatOpen, setChatOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const openChat = (planName) => {
    setSelectedPlan(planName);
    setChatOpen(true);
  };

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-[#000014] to-[#000000]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              Escolha o Plano Ideal
            </h2>
            <p className="text-base md:text-xl text-white/70 max-w-2xl mx-auto">
              Soluções escaláveis com resultados mensuráveis
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative ${
                  plan.highlight 
                    ? 'lg:scale-105 lg:z-10' 
                    : ''
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-[#FF6A00] text-white px-4 py-1 rounded-full text-xs md:text-sm font-semibold flex items-center gap-1 shadow-lg glow-effect">
                      <Star className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                      Mais Popular
                    </div>
                  </div>
                )}

                <div className={`rounded-3xl p-6 md:p-8 h-full flex flex-col transition-all duration-300 hover:scale-105 ${
                  plan.highlight 
                    ? 'bg-gradient-to-br from-[#FF6A00] to-[#3150D8] shadow-2xl glow-effect' 
                    : 'bg-[#000014] border-2 border-[#3150D8]/30 hover:border-[#FF6A00]/50'
                }`}>
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className={`text-xs md:text-sm ${plan.highlight ? 'text-white/90' : 'text-white/60'}`}>
                      {plan.description}
                    </p>
                  </div>

                  <div className="mb-6 md:mb-8">
                    <p className="text-3xl md:text-4xl font-bold text-white mb-1">{plan.price}</p>
                    <p className={`text-xs md:text-sm ${plan.highlight ? 'text-white/80' : 'text-white/60'}`}>
                      Valores sob medida para seu negócio
                    </p>
                  </div>

                  {/* Benefits */}
                  <div className="mb-6">
                    <h4 className={`text-sm font-semibold mb-3 ${plan.highlight ? 'text-white' : 'text-white/90'}`}>
                      Benefícios:
                    </h4>
                    <ul className="space-y-3">
                      {plan.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                            plan.highlight ? 'text-white' : 'text-[#FF6A00]'
                          }`} />
                          <span className={`text-xs md:text-sm ${
                            plan.highlight ? 'text-white' : 'text-white/80'
                          }`}>
                            {benefit}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Transformations */}
                  <div className="mb-6 md:mb-8 flex-grow">
                    <h4 className={`text-sm font-semibold mb-3 ${plan.highlight ? 'text-white' : 'text-white/90'}`}>
                      Transformações:
                    </h4>
                    <div className="space-y-2">
                      {plan.transformations.map((transformation, i) => (
                        <div key={i} className={`text-xs md:text-sm px-3 py-2 rounded-lg ${
                          plan.highlight 
                            ? 'bg-white/20' 
                            : 'bg-[#FF6A00]/10 border border-[#FF6A00]/30'
                        }`}>
                          <span className={plan.highlight ? 'text-white/90' : 'text-white/80'}>
                            ✨ {transformation}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Button 
                    onClick={() => openChat(plan.name)}
                    className={`w-full py-5 md:py-6 rounded-full font-semibold transition-all duration-300 text-sm md:text-base ${
                      plan.highlight 
                        ? 'bg-white text-[#FF6A00] hover:bg-white/90 hover:scale-105' 
                        : 'bg-[#FF6A00] text-white hover:bg-[#FF6A00]/90 hover:shadow-lg hover:shadow-[#FF6A00]/50'
                    }`}
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Escolha o Plano Ideal
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ChatWidget 
        isOpen={chatOpen} 
        onClose={() => setChatOpen(false)} 
        planName={selectedPlan}
      />
    </>
  );

}
