import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Phone, Mail, MessageCircle, Linkedin, Instagram, Facebook, Menu } from "lucide-react";
import { Button } from "../Components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../Components/ui/sheet";

export default function Layout({ children }) {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="min-h-screen bg-[#000000]">
      <style>{`
        :root {
          --nexis-primary: #000000;
          --nexis-accent: #FF6A00;
          --nexis-dark: #000014;
          --nexis-light: #FEFEFE;
          --nexis-blue: #3150D8;
        }
        
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, #FF6A00 0%, #3150D8 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .glow-effect {
          box-shadow: 0 0 30px rgba(255, 106, 0, 0.4);
        }
      `}</style>

      {/* Header - Mobile First */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#000000]/95 backdrop-blur-lg shadow-lg border-b border-[#3150D8]/20' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 md:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Nexis<span className="text-[#FF6A00]">.</span>
            </h1>

            {/* Desktop Menu */}
            <nav className="hidden lg:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('produtos')}
                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Produtos
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Sobre
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-white/80 hover:text-white transition-colors duration-200 text-sm font-medium"
              >
                Contato
              </button>
            </nav>

            {/* Desktop CTA */}
            <Button 
              onClick={() => scrollToSection('contato')}
              className="hidden lg:flex bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6A00]/50"
            >
              Solicitar Orçamento
            </Button>

            {/* Mobile Menu Button */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon" className="text-white">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#000000] border-[#3150D8]/30 w-[280px] sm:w-[350px]">
                <div className="flex flex-col gap-6 pt-8">
                  <h2 className="text-2xl font-bold text-white mb-4">
                    Nexis<span className="text-[#FF6A00]">.</span>
                  </h2>
                  <nav className="flex flex-col gap-4">
                    <button 
                      onClick={() => scrollToSection('home')}
                      className="text-white/80 hover:text-[#FF6A00] transition-colors text-left py-2 text-lg font-medium"
                    >
                      Home
                    </button>
                    <button 
                      onClick={() => scrollToSection('produtos')}
                      className="text-white/80 hover:text-[#FF6A00] transition-colors text-left py-2 text-lg font-medium"
                    >
                      Produtos
                    </button>
                    <button 
                      onClick={() => scrollToSection('sobre')}
                      className="text-white/80 hover:text-[#FF6A00] transition-colors text-left py-2 text-lg font-medium"
                    >
                      Sobre
                    </button>
                    <button 
                      onClick={() => scrollToSection('contato')}
                      className="text-white/80 hover:text-[#FF6A00] transition-colors text-left py-2 text-lg font-medium"
                    >
                      Contato
                    </button>
                  </nav>
                  <Button 
                    onClick={() => scrollToSection('contato')}
                    className="bg-[#FF6A00] hover:bg-[#FF6A00]/90 text-white font-semibold py-6 rounded-full mt-4"
                  >
                    Solicitar Orçamento
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Content */}
      <main>
        {children}
      </main>

      {/* Footer - Mobile First */}
      <footer className="bg-[#000014] text-white py-12 md:py-16 border-t border-[#3150D8]/20" id="contato">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
            {/* Logo e Slogan */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Nexis<span className="text-[#FF6A00]">.</span>
              </h2>
              <p className="text-white/60 text-sm mb-4 md:mb-6 italic">
                "Automatize o que te atrasa. Foque no que importa"
              </p>
              <p className="text-white/80 text-sm leading-relaxed">
                A tecnologia que conecta sua empresa ao futuro
              </p>
            </div>

            {/* Contatos */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4">Contato</h3>
              <div className="space-y-3">
                <a 
                  href="mailto:contato@nexis.com.br" 
                  className="flex items-center gap-3 text-white/70 hover:text-[#FF6A00] transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">contato@nexis.com.br</span>
                </a>
                <a 
                  href="tel:+5511999999999" 
                  className="flex items-center gap-3 text-white/70 hover:text-[#FF6A00] transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">(11) 99999-9999</span>
                </a>
                <a 
                  href="https://wa.me/5511999999999" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/70 hover:text-[#FF6A00] transition-colors"
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF6A00] flex items-center justify-center transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF6A00] flex items-center justify-center transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF6A00] flex items-center justify-center transition-all duration-300"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 md:pt-8 text-center text-white/50 text-xs md:text-sm">
            <p>&copy; 2024 Nexis. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );

}
