import React from 'react';
import { CheckSquare, Calendar, Palette } from 'lucide-react';

export default function Navbar({ activeTab, onTabChange, status }) {
  
  const getStatusBadge = () => {
    switch (status) {
      case 'approved':
        return (
          <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-500/20">
            Aprovado
          </span>
        );
      case 'adjustments':
        return (
          <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-rose-950/60 text-rose-400 border border-rose-500/30">
            Ajustes solicitados
          </span>
        );
      default:
        return (
          <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-amber-950/40 text-amber-400 border border-amber-500/20">
            Aguardando Avaliação
          </span>
        );
    }
  };

  return (
    <>
      {/* DESKTOP HEADER */}
      <header className="bg-zinc-950/80 backdrop-blur-md border-b border-white/[0.04] py-4 px-6 md:px-12 sticky top-0 z-50 flex justify-between items-center w-full">
        <div className="flex items-center gap-3">
          <img 
            src="./logo_transparent.png" 
            alt="Logo Bertel" 
            className="h-10 w-auto object-contain"
            onError={(e) => {
              e.target.src = 'logo.png';
              e.target.onerror = () => e.target.style.display = 'none';
            }}
          />
          <span className="font-cinzel text-base tracking-widest font-bold text-offwhite">
            BERTEL <span className="text-ouro-bertel">REFORMAS</span>
          </span>
        </div>

        {/* Tabs de navegação desktop */}
        <nav className="hidden md:flex gap-1.5">
          <button
            onClick={() => onTabChange('approval')}
            className={`flex items-center gap-2 py-2 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'approval'
                ? 'bg-ouro-bertel/10 text-ouro-bertel border border-ouro-bertel/30'
                : 'text-zinc-400 hover:text-offwhite border border-transparent'
            }`}
          >
            <CheckSquare size={14} />
            Central de Aprovação
          </button>
          <button
            onClick={() => onTabChange('planning')}
            className={`flex items-center gap-2 py-2 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'planning'
                ? 'bg-ouro-bertel/10 text-ouro-bertel border border-ouro-bertel/30'
                : 'text-zinc-400 hover:text-offwhite border border-transparent'
            }`}
          >
            <Calendar size={14} />
            Planejamento Mensal
          </button>
          <button
            onClick={() => onTabChange('design-system')}
            className={`flex items-center gap-2 py-2 px-4 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
              activeTab === 'design-system'
                ? 'bg-ouro-bertel/10 text-ouro-bertel border border-ouro-bertel/30'
                : 'text-zinc-400 hover:text-offwhite border border-transparent'
            }`}
          >
            <Palette size={14} />
            Design System
          </button>
        </nav>

        {/* Status geral do lote selecionado */}
        <div className="hidden md:block">
          {getStatusBadge()}
        </div>
      </header>

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-zinc-950/95 backdrop-blur-lg border-t border-white/[0.06] py-3 px-4 z-50 flex justify-around items-center">
        <button
          onClick={() => onTabChange('approval')}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${
            activeTab === 'approval' ? 'text-ouro-bertel' : 'text-zinc-500'
          }`}
        >
          <CheckSquare size={18} />
          <span className="text-[9px] font-bold uppercase tracking-wider">Aprovação</span>
        </button>
        <button
          onClick={() => onTabChange('planning')}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${
            activeTab === 'planning' ? 'text-ouro-bertel' : 'text-zinc-500'
          }`}
        >
          <Calendar size={18} />
          <span className="text-[9px] font-bold uppercase tracking-wider">Cronograma</span>
        </button>
        <button
          onClick={() => onTabChange('design-system')}
          className={`flex flex-col items-center gap-1 transition-all duration-300 ${
            activeTab === 'design-system' ? 'text-ouro-bertel' : 'text-zinc-500'
          }`}
        >
          <Palette size={18} />
          <span className="text-[9px] font-bold uppercase tracking-wider">Design</span>
        </button>
      </nav>
    </>
  );
}
