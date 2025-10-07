import React from "react";
import { motion } from "framer-motion";
import { Zap, HeadphonesIcon, TrendingDown, UserCheck } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Automatização de Tarefas Repetitivas",
    description: "Ganhe tempo para focar em decisões estratégicas e no crescimento do negócio"
  },
  {
    icon: HeadphonesIcon,
    title: "Otimização de Atendimento",
    description: "Respostas rápidas e consistentes aos seus clientes, 24 horas por dia"
  },
  {
    icon: TrendingDown,
    title: "Redução de Custos",
    description: "Menos retrabalho, mais eficiência e economia de até 70% em processos"
  },
  {
    icon: UserCheck,
    title: "Agente SDR Disponível",
    description: "Leads e oportunidades captados de forma inteligente e automatizada"
  }
];

export default function BenefitsSection() {
  return (
    <section className="py-24 bg-[#000014]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Problemas que Resolvemos
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Transforme desafios operacionais em vantagens competitivas
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card-hover bg-[#000055] rounded-2xl p-8 border border-[#3150D8]/30"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FA8334] to-[#3150D8] flex items-center justify-center mb-6">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-white/70 leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}