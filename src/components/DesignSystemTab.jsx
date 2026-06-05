import React, { useState, useEffect, useRef } from 'react';

export default function DesignSystemTab() {
  const iframeRef = useRef(null);
  const [iframeHeight, setIframeHeight] = useState('800px');

  const handleResize = () => {
    try {
      if (iframeRef.current && iframeRef.current.contentWindow) {
        const doc = iframeRef.current.contentWindow.document;
        if (doc && doc.body) {
          // Injeta estilos customizados para ocultar cabeçalho/rodape duplicados e tornar o layout 100% responsivo no mobile
          if (!doc.getElementById('portal-injected-styles')) {
            const style = doc.createElement('style');
            style.id = 'portal-injected-styles';
            style.innerHTML = `
              /* Oculta header, navegação e rodapé redundantes do HTML original */
              header, nav, footer {
                display: none !important;
              }
              
              /* Remove cantoneiras e reduz opacidade do número d'água no carrossel */
              .fm-corner {
                display: none !important;
              }
              .fm-bignum {
                color: rgba(212, 175, 55, 0.02) !important;
              }
              
              /* Reposiciona a logo para a parte superior centralizada e amplia a leitura */
              .fm-body {
                position: static !important;
              }
              .fm-logo-sm, .fm-logo {
                position: absolute !important;
                top: 18px !important;
                left: 50% !important;
                transform: translateX(-50%) !important;
                height: 22px !important;
                width: auto !important;
                margin: 0 !important;
                z-index: 10 !important;
                bottom: auto !important;
              }
              .fm-slide-num, .fm-dots {
                top: 22px !important;
              }
              
              /* Ajusta margens e remove o scroll lateral do iframe */
              body {
                overflow-x: hidden !important;
                background-color: transparent !important;
                background-image: none !important;
                padding-bottom: 0 !important;
              }
              
              main {
                padding: 24px 8px 40px !important;
                max-width: 100% !important;
              }
              
              /* Tornando os grids originais responsivos para Mobile */
              @media (max-width: 768px) {
                .colors-row {
                  grid-template-columns: repeat(2, 1fr) !important;
                  gap: 12px !important;
                }
                .grads-row {
                  grid-template-columns: 1fr !important;
                  gap: 12px !important;
                }
                .font-trio {
                  grid-template-columns: 1fr !important;
                  gap: 16px !important;
                }
                .type-scale {
                  grid-template-columns: 1fr !important;
                  gap: 20px !important;
                }
                .logo-grid {
                  grid-template-columns: repeat(2, 1fr) !important;
                  gap: 12px !important;
                }
                .lv-horiz {
                  grid-column: span 2 !important;
                  flex-direction: column !important;
                  height: auto !important;
                  padding: 16px !important;
                  gap: 12px !important;
                }
                .lv-horiz .lv-right {
                  text-align: center !important;
                }
                .comp-grid {
                  grid-template-columns: 1fr !important;
                  gap: 20px !important;
                }
                .fmt-intro {
                  grid-template-columns: repeat(3, 1fr) !important;
                  margin-bottom: 32px !important;
                }
                .fmt-stat {
                  padding: 12px 6px !important;
                }
                .fmt-stat-num {
                  font-size: 16px !important;
                }
                
                /* Mockups de Formato responsivos */
                .fp-feed, .fp-reel, .fp-story {
                  grid-template-columns: 1fr !important;
                  gap: 24px !important;
                }
                .fp-carr {
                  grid-template-columns: 1fr !important;
                  gap: 20px !important;
                }
                .fp-carr .fmt-spec {
                  grid-column: span 1 !important;
                }
                
                /* Limita largura do mockup no celular para não quebrar proporção */
                .fmt-frame {
                  max-width: 220px !important;
                  margin: 0 auto !important;
                }
                
                .space-grid {
                  grid-template-columns: 1fr !important;
                  gap: 24px !important;
                }
              }
            `;
            doc.head.appendChild(style);
          }

          // Ajusta a altura de forma dinâmica
          const height = doc.body.scrollHeight;
          setIframeHeight(`${height + 30}px`);
        }
      }
    } catch (e) {
      console.warn("Could not read iframe height due to cross-origin or load status:", e);
    }
  };

  useEffect(() => {
    // Monitora alterações de tamanho (como abas internas de formato no HTML)
    const interval = setInterval(handleResize, 400);
    window.addEventListener('resize', handleResize);
    
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto py-2 md:py-6 animate-fadeIn">
      <div className="w-full rounded-2xl overflow-hidden border border-white/[0.04] bg-zinc-950/45 shadow-premium">
        <iframe 
          ref={iframeRef}
          src="./brand-system/bertel-design-system.html" 
          className="w-full border-none transition-all duration-300 overflow-hidden"
          style={{ height: iframeHeight }}
          title="Design System Bertel"
          onLoad={handleResize}
          scrolling="no"
        />
      </div>
    </div>
  );
}
