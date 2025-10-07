import React from "react";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section className="py-24 bg-[#000055]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Nexis: Inteligência, Automação e{" "}
              <span className="gradient-text">Eficiência</span>
            </h2>
            <p className="text-xl text-white/80 leading-relaxed">
              Nossa missão é automatizar tarefas empresariais para que pequenas e médias 
              empresas possam focar no crescimento. Utilizamos inteligência artificial de ponta, 
              estando à frente de 99,7% das empresas do Brasil.
            </p>
            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FA8334]/20 flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-[#FA8334]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Nossa Missão</h3>
                  <p className="text-white/70">
                    Democratizar o acesso à automação inteligente para empresas de todos os tamanhos
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#3150D8]/20 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-[#3150D8]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Inovação Constante</h3>
                  <p className="text-white/70">
                    Estamos sempre evoluindo com as últimas tecnologias de IA e automação
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FA8334]/20 flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-[#FA8334]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-1">Foco no Cliente</h3>
                  <p className="text-white/70">
                    Cada solução é pensada para resolver problemas reais do seu negócio
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FA8334] to-[#3150D8] rounded-3xl blur-2xl opacity-30"></div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop" 
              alt="Equipe Nexis"
              className="relative rounded-3xl shadow-2xl w-full h-auto border border-white/10"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}