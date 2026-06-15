import planningData from '../data/planning.json';
import { Video, FileText, CheckCircle2, Circle } from 'lucide-react';

export default function PlanningTab() {
  
  const getFormatIcon = (format) => {
    switch (format.toLowerCase()) {
      case 'reels':
        return <Video size={14} className="text-ouro-bertel" />;
      case 'carrossel':
        return <FileText size={14} className="text-ouro-bertel" />;
      default:
        return <FileText size={14} className="text-zinc-500" />;
    }
  };

  const getStatusBadge = (status) => {
    if (status === 'Aprovado' || status === 'approved') {
      return (
        <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-500/20 w-fit">
          <CheckCircle2 size={10} className="text-emerald-400" />
          Aprovado
        </span>
      );
    }
    if (status === 'Pronto para Aprovação') {
      return (
        <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-950/40 text-amber-400 border border-amber-500/20 w-fit">
          <Circle size={8} className="fill-amber-400 stroke-none" />
          Aprovação
        </span>
      );
    }
    return (
      <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-900 text-zinc-400 border border-white/[0.04] w-fit">
        <Circle size={8} className="fill-zinc-500 stroke-none" />
        Planejado
      </span>
    );
  };

  return (
    <div className="flex flex-col gap-8 w-full max-w-7xl mx-auto py-6 md:py-10 animate-fadeIn">
      {/* Intro */}
      <div className="border-l-3 border-ouro-bertel pl-4">
        <h1 className="font-cinzel text-2xl md:text-3xl font-bold tracking-wider text-offwhite">
          Planejamento Mensal
        </h1>
        <p className="text-zinc-400 text-xs md:text-sm mt-1 tracking-wide uppercase font-semibold">
          Cronograma Editorial e Estratégia de Conteúdo • Junho de 2026
        </p>
      </div>

      {/* Grid / Table */}
      <div className="w-full glass-panel rounded-2xl overflow-hidden">
        
        {/* DESKTOP TABLE VIEW */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/[0.05] bg-zinc-950/40 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
                <th className="py-5 px-6">Data</th>
                <th className="py-5 px-6">Formato</th>
                <th className="py-5 px-6">Tema / Conteúdo</th>
                <th className="py-5 px-6">Objetivo Principal</th>
                <th className="py-5 px-6 text-center">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.03]">
              {planningData.map((item, idx) => (
                <tr key={idx} className="hover:bg-white/[0.01] transition-colors duration-200">
                  <td className="py-4 px-6 whitespace-nowrap">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-offwhite">{item.date}</span>
                      <span className="text-[10px] text-zinc-500 font-semibold">{item.day}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 whitespace-nowrap">
                    <div className="flex items-center gap-2 text-xs font-semibold text-zinc-300">
                      {getFormatIcon(item.format)}
                      {item.format}
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-sm font-medium text-offwhite max-w-md">{item.theme}</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className="text-xs text-zinc-400 font-sans">{item.objective}</span>
                  </td>
                  <td className="py-4 px-6 text-center whitespace-nowrap">
                    <div className="flex justify-center">
                      {getStatusBadge(item.status)}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* MOBILE LIST CARD VIEW */}
        <div className="md:hidden flex flex-col divide-y divide-white/[0.04] p-4 gap-4">
          {planningData.map((item, idx) => (
            <div key={idx} className="flex flex-col gap-3 pt-4 first:pt-0">
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-offwhite">{item.date}</span>
                  <span className="text-[10px] text-zinc-500 font-semibold">{item.day}</span>
                </div>
                {getStatusBadge(item.status)}
              </div>

              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ouro-bertel">
                {getFormatIcon(item.format)}
                {item.format}
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Tema</span>
                <p className="text-sm text-offwhite leading-relaxed">{item.theme}</p>
              </div>

              <div className="flex flex-col gap-1">
                <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Objetivo</span>
                <span className="text-xs text-zinc-400">{item.objective}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
