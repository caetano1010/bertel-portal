import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Video, ChevronLeft, ChevronRight, Image as ImageIcon, Download } from 'lucide-react';

export default function MediaViewer({ delivery }) {
  const [activeTab, setActiveTab] = useState(delivery.type === 'reels' ? 'cover' : 'content'); // 'cover' | 'content'
  const [slideIndex, setSlideIndex] = useState(0);

  // Reseta estados quando muda de post
  useEffect(() => {
    setActiveTab(delivery.type === 'reels' ? 'cover' : 'content');
    setSlideIndex(0);
  }, [delivery]);

  const handlePrevSlide = () => {
    setSlideIndex((prev) => (prev > 0 ? prev - 1 : delivery.slides.length - 1));
  };

  const handleNextSlide = () => {
    setSlideIndex((prev) => (prev < delivery.slides.length - 1 ? prev + 1 : 0));
  };

  const handleDownloadCurrent = () => {
    const url = delivery.slides[slideIndex];
    const a = document.createElement('a');
    a.href = url;
    a.download = `slide-${slideIndex + 1}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleDownloadAll = () => {
    delivery.slides.forEach((url, idx) => {
      const a = document.createElement('a');
      a.href = url;
      a.download = `slide-${idx + 1}.png`;
      document.body.appendChild(a);
      setTimeout(() => {
        a.click();
        document.body.removeChild(a);
      }, idx * 250);
    });
  };

  const isReels = delivery.type === 'reels';

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Abas de Mídia - Visíveis em Mobile, Ocultas em Desktop (Apenas para Reels) */}
      {isReels && (
        <div className="grid grid-cols-2 gap-2 md:hidden">
          <button
            onClick={() => setActiveTab('cover')}
            className={`flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
              activeTab === 'cover'
                ? 'bg-ouro-bertel/10 border-ouro-bertel text-ouro-bertel'
                : 'bg-grafite-card border-white/[0.06] text-cinza-concreto'
            }`}
          >
            <Eye size={16} />
            Ver Capa
          </button>
          <button
            onClick={() => setActiveTab('content')}
            className={`flex items-center justify-center gap-2 py-3 rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 border ${
              activeTab === 'content'
                ? 'bg-ouro-bertel/10 border-ouro-bertel text-ouro-bertel'
                : 'bg-grafite-card border-white/[0.06] text-cinza-concreto'
            }`}
          >
            {isReels ? <Video size={16} /> : <ImageIcon size={16} />}
            {isReels ? 'Ver Vídeo' : 'Ver Carrossel'}
          </button>
        </div>
      )}

      {/* Container Principal de Mídia */}
      <div className={`grid grid-cols-1 gap-6 w-full ${isReels ? 'md:grid-cols-2' : 'max-w-[480px] mx-auto'}`}>
        {/* Bloco 1: Capa (Sempre visível no Desktop, ativa via aba no Mobile) - Apenas para Reels */}
        {isReels && (
          <div className={`flex flex-col gap-3 ${activeTab === 'cover' ? 'flex' : 'hidden md:flex'}`}>
            <div className={`relative rounded-2xl overflow-hidden border border-white/[0.06] shadow-card bg-black group ${isReels ? 'aspect-[3/4]' : 'aspect-[4/5]'}`}>
              <img
                src={delivery.coverUrl}
                alt={`Capa do ${isReels ? 'Reels' : 'Carrossel'}`}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-102"
              />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-cinza-concreto text-center">
              {isReels ? 'Capa do Reels (3:4)' : 'Capa do Carrossel (Lâmina 1)'}
            </span>
          </div>
        )}

        {/* Bloco 2: Vídeo ou Carrossel (Ativo via aba no Mobile, sempre visível no carrossel) */}
        <div className={`flex flex-col gap-3 ${isReels ? (activeTab === 'content' ? 'flex' : 'hidden md:flex') : 'flex'}`}>
          {isReels ? (
            /* PLAYER DE VÍDEO REELS 9:16 (MOCKUP CELULAR) */
            <div className="relative aspect-[9/16] border-[6px] border-zinc-800 rounded-[32px] overflow-hidden bg-black shadow-card border-ouro-bertel/20">
              {/* Notch de celular */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-3.5 bg-zinc-800 rounded-full z-10"></div>
              <video
                controls
                poster={delivery.coverUrl}
                className="w-full h-full object-cover"
                key={delivery.videoUrl} // Força recarregar ao trocar
              >
                <source src={delivery.videoUrl} type="video/mp4" />
                Seu navegador não suporta vídeos HTML5.
              </video>
            </div>
          ) : (
            /* SLIDER DE CARROSSEL 4:5 */
            <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-white/[0.06] shadow-card bg-black">
              {/* Slides */}
              <div className="absolute inset-0 w-full h-full overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={slideIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full absolute inset-0"
                  >
                    {typeof delivery.slides[slideIndex] === 'string' ? (
                      <img
                        src={delivery.slides[slideIndex]}
                        alt={`Lâmina ${slideIndex + 1}`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      /* RENDER DE LÂMINA HÍBRIDA 4:5 EM HTML/CSS */
                      (() => {
                        const slide = delivery.slides[slideIndex];
                        const parseHighlightText = (text, highlightClass = "text-ouro-bertel font-bold") => {
                          if (!text) return "";
                          const parts = text.split(/(\*\*[^*]+\*\*)/g);
                          return parts.map((part, index) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                              return (
                                <span key={index} className={highlightClass}>
                                  {part.slice(2, -2)}
                                </span>
                              );
                            }
                            return part;
                          });
                        };
                        return (
                          <div className="relative w-full h-full bg-zinc-950 flex flex-col justify-between p-5 md:p-8 select-none overflow-hidden">
                            {/* Fundo da imagem (limpa, sem textos) */}
                            {slide.backgroundUrl && (
                              <img 
                                src={slide.backgroundUrl} 
                                alt={`Fundo Lâmina ${slideIndex + 1}`} 
                                className="absolute inset-0 w-full h-full object-cover opacity-55 z-0"
                              />
                            )}
                            
                            {/* Camada gradiente para aumentar o contraste do texto */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/60 z-10" />

                            {/* Header (Logo + Progresso) */}
                            <div className="relative z-20 flex justify-between items-center w-full" style={{ minHeight: '32px' }}>
                              {/* Logo Centralizada */}
                              <img 
                                src="./logo_transparent.png" 
                                alt="Logo Bertel" 
                                className="absolute left-1/2 -translate-x-1/2 h-[22px] w-auto"
                                style={{ top: '18px' }}
                                onError={(e) => {
                                  e.target.src = 'logo.png';
                                  e.target.onerror = () => e.target.style.display = 'none';
                                }}
                              />

                              {/* Progresso de Dots no Topo Direito */}
                              <div className="flex gap-[3px] absolute right-0" style={{ top: '22px' }}>
                                {delivery.slides.map((_, idx) => (
                                  <div 
                                    key={idx}
                                    className={`h-[3px] rounded-full transition-all duration-300 ${
                                      idx === slideIndex ? 'bg-ouro-bertel w-[10px]' : 'bg-ouro-bertel/25 w-[3px]'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>

                            {/* Corpo / Conteúdo da Lâmina */}
                            <div className="relative z-20 mt-auto flex flex-col items-start text-left w-full max-w-[90%] pb-8 md:pb-12">
                              {/* Accent Bar */}
                              <div className="w-6 h-[2px] bg-gradient-to-r from-ouro-bertel to-ouro-envelhecido mb-3" />
                              
                              {/* Headline */}
                              <h2 className={`text-offwhite leading-tight tracking-wide ${
                                slide.isCover 
                                  ? "font-serif text-2xl md:text-3xl italic font-normal" 
                                  : "font-manrope text-xl md:text-2xl font-bold"
                              }`}>
                                {parseHighlightText(slide.title)}
                              </h2>

                              {/* Descrição */}
                              {slide.description && (
                                <p className="text-zinc-300 text-xs md:text-sm font-normal mt-3 leading-relaxed font-sans max-w-[95%]">
                                  {parseHighlightText(slide.description, "text-ouro-bertel font-semibold")}
                                </p>
                              )}

                              {/* Botão de CTA para o WhatsApp no último slide */}
                              {slide.isCta && (
                                <a 
                                  href={`https://wa.me/5524992758683?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20reforma.`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="mt-4 flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-ouro-bertel to-ouro-envelhecido hover:brightness-110 text-preto text-xs font-bold uppercase tracking-wider rounded-lg transition-all duration-300 shadow-premium"
                                >
                                  Conversar no WhatsApp
                                </a>
                              )}
                            </div>
                          </div>
                        );
                      })()
                    )}
                  </motion.div>
                </AnimatePresence>

                {/* Botões do Carrossel */}
                <button
                  onClick={handlePrevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-ouro-bertel border border-white/10 hover:border-ouro-bertel text-offwhite hover:text-preto w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-30"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-ouro-bertel border border-white/10 hover:border-ouro-bertel text-offwhite hover:text-preto w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-30"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Dots indicadores inferiores - Exibidos apenas se os slides forem strings (legado) */}
                {typeof delivery.slides[0] === 'string' && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-30">
                    {delivery.slides.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSlideIndex(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          idx === slideIndex ? 'bg-ouro-bertel w-5' : 'bg-white/40 w-2'
                        }`}
                      ></button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}
          <span className="text-[10px] uppercase tracking-widest text-cinza-concreto text-center" id="media-label">
            {isReels ? 'Vídeo do Reels (9:16)' : `Lâmina ${slideIndex + 1} de ${delivery.slides.length}`}
          </span>
          {!isReels && delivery.slides && delivery.slides.length > 0 && (
            <div className="flex justify-center gap-3 mt-3 w-full">
              <button
                onClick={handleDownloadCurrent}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-grafite-card hover:bg-ouro-bertel/10 border border-white/[0.06] hover:border-ouro-bertel text-cinza-concreto hover:text-ouro-bertel rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md w-1/2 cursor-pointer"
              >
                <Download size={14} />
                Baixar Lâmina
              </button>
              <button
                onClick={handleDownloadAll}
                className="flex items-center justify-center gap-2 px-4 py-2.5 bg-grafite-card hover:bg-ouro-bertel/10 border border-white/[0.06] hover:border-ouro-bertel text-cinza-concreto hover:text-ouro-bertel rounded-lg text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-md w-1/2 cursor-pointer"
              >
                <Download size={14} />
                Baixar Todas
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
