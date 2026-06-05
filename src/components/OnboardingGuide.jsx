import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function OnboardingGuide() {
  const [isOpen, setIsOpen] = useState(() => {
    // Opens by default on the first session only
    return !localStorage.getItem('bertel_onboarding_dismissed');
  });

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleDismissForever = () => {
    localStorage.setItem('bertel_onboarding_dismissed', 'true');
    setIsOpen(false);
  };

  return (
    <div className="w-full rounded-xl border border-white/[0.04] bg-white/[0.01] backdrop-blur-md transition-all duration-300 hover:border-white/[0.08]">
      <div 
        onClick={handleToggle}
        className="flex items-center justify-between p-4 cursor-pointer select-none"
      >
        <div className="flex items-center gap-3">
          <HelpCircle className="text-ouro-bertel" size={18} />
          <span className="font-manrope text-sm font-bold text-offwhite tracking-wide">
            Como funciona o Painel de Aprovação?
          </span>
        </div>
        <div className="flex items-center gap-3">
          {!isOpen && (
            <span className="text-[10px] uppercase tracking-wider text-ouro-bertel/80 font-bold hidden sm:inline">
              Clique para ver as instruções
            </span>
          )}
          {isOpen ? (
            <ChevronUp size={16} className="text-cinza-concreto" />
          ) : (
            <ChevronDown size={16} className="text-cinza-concreto" />
          )}
        </div>
      </div>

      {isOpen && (
        <div className="p-4 pt-0 border-t border-white/[0.04] text-xs text-zinc-400 font-sans leading-relaxed animate-fadeIn">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-3">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-ouro-bertel/10 border border-ouro-bertel/20 flex items-center justify-center font-bold text-ouro-bertel text-[10px]">
                1
              </div>
              <div>
                <h4 className="font-bold text-offwhite mb-1">Visualizar Arte</h4>
                <p>Navegue pelo carrossel no mockup interativo usando as setas ou assista ao vídeo do Reels.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-ouro-bertel/10 border border-ouro-bertel/20 flex items-center justify-center font-bold text-ouro-bertel text-[10px]">
                2
              </div>
              <div>
                <h4 className="font-bold text-offwhite mb-1">Copiar Legenda</h4>
                <p>Clique em <strong>Copiar</strong> na caixa de legenda para ter o texto e as hashtags prontos na sua área de transferência.</p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-ouro-bertel/10 border border-ouro-bertel/20 flex items-center justify-center font-bold text-ouro-bertel text-[10px]">
                3
              </div>
              <div>
                <h4 className="font-bold text-offwhite mb-1">Dar o Sinal Verde</h4>
                <p>Clique em <strong>Aprovar Post</strong>. O status mudará e você poderá nos enviar o sinal verde direto no WhatsApp.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-4 pt-3 border-t border-white/[0.04] flex justify-end gap-3">
            <button 
              onClick={handleDismissForever}
              className="text-[10px] font-bold text-zinc-500 hover:text-offwhite uppercase tracking-wider transition-all duration-300"
            >
              Não mostrar novamente
            </button>
            <button 
              onClick={handleToggle}
              className="text-[10px] font-bold text-ouro-bertel hover:brightness-110 uppercase tracking-wider transition-all duration-300"
            >
              Fechar Guia
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
