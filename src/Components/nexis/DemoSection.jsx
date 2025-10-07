import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";

export default function DemoSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#000014] to-[#000055]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#3150D8] to-[#FA8334] rounded-3xl blur-2xl opacity-30"></div>
            <div className="relative rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop" 
                alt="Demonstração de Automação"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 hover:bg-black/30 transition-colors cursor-pointer group">
                <div className="w-20 h-20 rounded-full bg-[#FA8334] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play className="w-10 h-10 text-white fill-current ml-1" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Veja Como a Nexis Transforma Seus Processos
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              Processos repetitivos se tornam automações inteligentes e eficientes. 
              Acompanhe em tempo real como sua empresa evolui com a tecnologia certa.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FA8334]/20 flex items-center justify-center text-[#FA8334] font-bold text-lg">
                  1
                </div>
                <div>
                  <p className="text-white font-semibold">Diagnóstico Gratuito</p>
                  <p className="text-white/60 text-sm">Entendemos suas necessidades específicas</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FA8334]/20 flex items-center justify-center text-[#FA8334] font-bold text-lg">
                  2
                </div>
                <div>
                  <p className="text-white font-semibold">Implementação Rápida</p>
                  <p className="text-white/60 text-sm">Configuração e integração em dias</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#FA8334]/20 flex items-center justify-center text-[#FA8334] font-bold text-lg">
                  3
                </div>
                <div>
                  <p className="text-white font-semibold">Resultados Imediatos</p>
                  <p className="text-white/60 text-sm">Ganhos percebidos nas primeiras semanas</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}