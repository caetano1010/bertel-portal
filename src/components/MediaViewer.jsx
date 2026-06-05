import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Video, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export default function MediaViewer({ delivery }) {
  const [activeTab, setActiveTab] = useState('cover'); // 'cover' | 'content'
  const [slideIndex, setSlideIndex] = useState(0);

  // Reseta estados quando muda de post
  useEffect(() => {
    setActiveTab('cover');
    setSlideIndex(0);
  }, [delivery]);

  const handlePrevSlide = () => {
    setSlideIndex((prev) => (prev > 0 ? prev - 1 : delivery.slides.length - 1));
  };

  const handleNextSlide = () => {
    setSlideIndex((prev) => (prev < delivery.slides.length - 1 ? prev + 1 : 0));
  };

  const isReels = delivery.type === 'reels';

  return (
    <div className="flex flex-col gap-5 w-full">
      {/* Abas de Mídia - Visíveis em Mobile, Ocultas em Desktop */}
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

      {/* Container Principal de Mídia */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {/* Bloco 1: Capa (Sempre visível no Desktop, ativa via aba no Mobile) */}
        <div className={`flex flex-col gap-3 ${activeTab === 'cover' ? 'flex' : 'hidden md:flex'}`}>
          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/[0.06] shadow-card bg-black group">
            <img
              src={delivery.coverUrl}
              alt={`Capa do ${isReels ? 'Reels' : 'Carrossel'}`}
              className="w-full height-full object-cover transition-all duration-500 group-hover:scale-102"
            />
          </div>
          <span className="text-[10px] uppercase tracking-widest text-cinza-concreto text-center">
            {isReels ? 'Capa do Reels (3:4)' : 'Capa do Carrossel (Lâmina 1)'}
          </span>
        </div>

        {/* Bloco 2: Vídeo ou Carrossel (Ativo via aba no Mobile) */}
        <div className={`flex flex-col gap-3 ${activeTab === 'content' ? 'flex' : 'hidden md:flex'}`}>
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
            /* SLIDER DE CARROSSEL 1:1 */
            <div className="relative aspect-square w-full rounded-2xl overflow-hidden border border-white/[0.06] shadow-card bg-black flex flex-col justify-between">
              {/* Slides */}
              <div className="relative w-full h-full overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={slideIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="w-full h-full"
                  >
                    <img
                      src={delivery.slides[slideIndex]}
                      alt={`Lâmina ${slideIndex + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Botões do Carrossel */}
                <button
                  onClick={handlePrevSlide}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-ouro-bertel border border-white/10 hover:border-ouro-bertel text-offwhite hover:text-preto w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  onClick={handleNextSlide}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-ouro-bertel border border-white/10 hover:border-ouro-bertel text-offwhite hover:text-preto w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 z-10"
                >
                  <ChevronRight size={20} />
                </button>

                {/* Dots indicadores */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
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
              </div>
            </div>
          )}
          <span className="text-[10px] uppercase tracking-widest text-cinza-concreto text-center" id="media-label">
            {isReels ? 'Vídeo do Reels (9:16)' : `Lâmina ${slideIndex + 1} de ${delivery.slides.length}`}
          </span>
        </div>
      </div>
    </div>
  );
}
