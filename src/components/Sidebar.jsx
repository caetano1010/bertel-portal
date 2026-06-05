import React, { useState } from 'react';
import { Calendar, CheckCircle2, Clock, HelpCircle, AlertCircle, ChevronDown } from 'lucide-react';

export default function Sidebar({ deliveries, activeDelivery, onSelectDelivery }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const getStatusBadge = (status) => {
    switch (status) {
      case 'approved':
        return (
          <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-500/20">
            <CheckCircle2 size={10} />
            Aprovado
          </span>
        );
      case 'adjustments':
        return (
          <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-rose-950/40 text-rose-400 border border-rose-500/20">
            <AlertCircle size={10} />
            Ajustes
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-amber-950/40 text-amber-400 border border-amber-500/20">
            <Clock size={10} />
            Pendente
          </span>
        );
    }
  };

  return (
    <>
      {/* SIDEBAR PARA DESKTOP (MD+) */}
      <aside className="hidden md:flex flex-col gap-6 w-[280px] lg:w-[320px] bg-zinc-950/20 border-r border-white/[0.03] p-6 lg:p-8 h-full shrink-0">
        <h3 className="font-cinzel text-xs font-semibold text-ouro-bertel tracking-widest uppercase border-b border-ouro-bertel/20 pb-3 flex items-center gap-2">
          <Calendar size={14} />
          Entregas Agendadas
        </h3>
        
        <ul className="flex flex-col gap-3 overflow-y-auto">
          {deliveries.map((item) => (
            <li
              key={item.id}
              onClick={() => onSelectDelivery(item.id)}
              className={`flex flex-col gap-2 p-4 rounded-xl cursor-pointer border transition-all duration-300 ${
                item.id === activeDelivery.id
                  ? 'bg-ouro-bertel/[0.04] border-ouro-bertel shadow-md shadow-ouro-bertel/5'
                  : 'bg-grafite-card border-white/[0.04] hover:bg-grafite-hover hover:border-white/10 hover:-translate-y-0.5'
              }`}
            >
              <span className="text-[10px] font-bold text-ouro-bertel uppercase tracking-wider">{item.date}</span>
              <span className="text-sm font-semibold text-offwhite leading-tight">{item.title}</span>
              <div className="flex justify-between items-center mt-1">
                {getStatusBadge(item.status)}
                <span className="text-[9px] uppercase tracking-wider text-cinza-concreto font-semibold">{item.type}</span>
              </div>
            </li>
          ))}
        </ul>
      </aside>

      {/* DROPDOWN CUSTOMIZADO PARA MOBILE (MD-) */}
      <div className="md:hidden w-full p-4 bg-zinc-950/40 border-b border-white/[0.04] sticky top-[71px] z-50 backdrop-blur-md">
        <div className="relative w-full">
          {/* Botão do Dropdown */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between py-3 px-4 bg-grafite-card border border-ouro-bertel/30 rounded-xl text-offwhite text-sm font-semibold focus:outline-none transition-all duration-300 active:scale-99"
          >
            <div className="flex flex-col text-left mr-2">
              <span className="text-[9px] text-ouro-bertel font-bold uppercase tracking-wider">{activeDelivery.date}</span>
              <span className="text-xs font-semibold text-offwhite line-clamp-1 mt-0.5">{activeDelivery.title}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              {getStatusBadge(activeDelivery.status)}
              <ChevronDown 
                size={16} 
                className={`text-ouro-bertel transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180' : ''}`} 
              />
            </div>
          </button>

          {/* Lista de Opções */}
          {isOpen && (
            <>
              {/* Overlay invisível para fechar ao clicar fora */}
              <div className="fixed inset-0 z-45" onClick={() => setIsOpen(false)} />
              
              <ul className="absolute left-0 right-0 mt-2 bg-grafite-card border border-white/[0.08] rounded-xl shadow-premium z-50 divide-y divide-white/[0.04] overflow-hidden max-h-[300px] overflow-y-auto">
                {deliveries.map((item) => (
                  <li
                    key={item.id}
                    onClick={() => {
                      onSelectDelivery(item.id);
                      setIsOpen(false);
                    }}
                    className={`flex flex-col gap-2 p-4 cursor-pointer transition-all duration-200 ${
                      item.id === activeDelivery.id
                        ? 'bg-ouro-bertel/[0.04] border-l-3 border-ouro-bertel'
                        : 'hover:bg-white/[0.02]'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="text-[9px] font-bold text-ouro-bertel uppercase tracking-wider">{item.date}</span>
                      {getStatusBadge(item.status)}
                    </div>
                    <span className="text-xs font-semibold text-offwhite leading-tight">{item.title}</span>
                    <span className="text-[9px] uppercase tracking-wider text-cinza-concreto font-semibold self-end">{item.type}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
}
