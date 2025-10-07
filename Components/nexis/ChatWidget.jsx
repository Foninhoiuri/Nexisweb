import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function ChatWidget({ isOpen, onClose, planName }) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (isOpen && !hasInitialized.current) {
      hasInitialized.current = true;
      // Initial message from bot
      setMessages([{
        id: 1,
        text: `Olá! Vejo que você se interessou pelo plano ${planName}. Como posso ajudá-lo a entender melhor essa solução?`,
        sender: "bot",
        timestamp: new Date()
      }]);
    }
    
    if (!isOpen) {
      hasInitialized.current = false;
    }
  }, [isOpen, planName]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    // Simulate webhook call - replace with actual webhook
    setTimeout(() => {
      const botResponse = {
        id: Date.now() + 1,
        text: `Entendi sua dúvida sobre "${inputValue}". Nossa equipe está preparando uma resposta personalizada. Enquanto isso, gostaria de agendar uma demonstração do plano ${planName}?`,
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Chat Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full sm:w-[400px] md:w-[450px] bg-[#000014] border-l border-[#3150D8]/30 z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-[#FF6A00] to-[#3150D8] p-4 md:p-6 flex items-center justify-between">
              <div>
                <h3 className="text-white font-bold text-lg md:text-xl">Chat Nexis</h3>
                <p className="text-white/80 text-xs md:text-sm">Plano {planName}</p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-white hover:bg-white/20"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4 md:p-6">
              <div className="space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                        message.sender === 'user'
                          ? 'bg-[#FF6A00] text-white'
                          : 'bg-[#3150D8]/20 text-white border border-[#3150D8]/30'
                      }`}
                    >
                      <p className="text-sm md:text-base leading-relaxed">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-white/70' : 'text-white/50'
                      }`}>
                        {message.timestamp.toLocaleTimeString('pt-BR', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="bg-[#3150D8]/20 rounded-2xl px-4 py-3 border border-[#3150D8]/30">
                      <Loader2 className="w-5 h-5 text-white animate-spin" />
                    </div>
                  </motion.div>
                )}
              </div>
            </ScrollArea>

            {/* Input */}
            <div className="p-4 md:p-6 border-t border-[#3150D8]/30 bg-[#000000]">
              <div className="flex gap-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite sua mensagem..."
                  className="bg-white/10 border-[#3150D8]/30 text-white placeholder:text-white/50 focus:border-[#FF6A00] h-12"
                  disabled={isLoading}
                />
                <Button
                  onClick={handleSend}
                  disabled={!inputValue.trim() || isLoading}
                  className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 h-12 px-4"
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
              <p className="text-xs text-white/50 mt-2 text-center">
                Resposta em tempo real via webhook
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}