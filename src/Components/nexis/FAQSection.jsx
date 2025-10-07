import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../Components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o onboarding gratuito?",
    answer: "Um especialista da Nexis avalia suas necessidades específicas através de uma consultoria personalizada e mostra o melhor plano de automação para sua empresa. Todo o processo é gratuito e sem compromisso."
  },
  {
    question: "Quais processos podem ser automatizados?",
    answer: "Praticamente qualquer tarefa repetitiva pode ser automatizada: atendimento ao cliente, suporte técnico, qualificação de leads, fluxos internos de aprovação, geração de relatórios e muito mais. Nosso time analisa caso a caso."
  },
  {
    question: "Qual a diferença entre os planos?",
    answer: "O Basic automatiza tarefas simples e é ideal para começar. O Pro traz automação avançada, agente SDR disponível 24/7 e integração com múltiplos sistemas. Já o Premium é completamente personalizado com monitoramento inteligente e insights estratégicos."
  },
  {
    question: "Quanto tempo para ver resultados?",
    answer: "A maioria dos nossos clientes percebe ganhos de eficiência já nas primeiras semanas após a implementação. O tempo exato depende da complexidade dos processos, mas trabalhamos para entregas rápidas e resultados mensuráveis."
  },
  {
    question: "É necessário conhecimento técnico para usar?",
    answer: "Não! Toda a tecnologia complexa fica por nossa conta. Você e sua equipe utilizam interfaces simples e intuitivas. Além disso, oferecemos treinamento completo para garantir que todos saibam aproveitar ao máximo as automações."
  },
  {
    question: "Como funciona o suporte?",
    answer: "Oferecemos suporte contínuo via WhatsApp, e-mail e telefone. Clientes dos planos Pro e Premium têm prioridade no atendimento. Estamos sempre disponíveis para ajustar e melhorar suas automações."
  }
];

export default function FAQSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#000055] to-[#000014]">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-white/70">
            Tire suas dúvidas sobre automação e nossos serviços
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-[#000055] border border-[#3150D8]/30 rounded-2xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left text-white hover:text-[#FA8334] transition-colors py-6 text-lg font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/80 leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );

}
