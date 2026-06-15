import { useState } from 'react';
import { Copy, Download, Check, AlertTriangle, Send } from 'lucide-react';

export default function CaptionBox({ delivery, onUpdateStatus, onShowToast }) {
  const [showAdjustForm, setShowAdjustForm] = useState(false);
  const [feedback, setFeedback] = useState('');

  const handleCopyCaption = () => {
    const fullText = `${delivery.caption}\n\n${delivery.hashtags}`;
    navigator.clipboard.writeText(fullText)
      .then(() => onShowToast('Legenda e Hashtags copiadas!'))
      .catch((err) => console.error('Falha ao copiar:', err));
  };

  const handleApprove = () => {
    onUpdateStatus(delivery.id, 'approved');
    onShowToast('Post Aprovado! Redirecionando...');

    const phone = '5524992758683'; // WhatsApp da Bertel
    const text = encodeURIComponent(
      `Olá! Analisei os materiais do post do dia ${delivery.date} ("${delivery.title}") no painel de aprovação e estão 100% APROVADOS! Pode prosseguir com a postagem.`
    );
    setTimeout(() => {
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    }, 1000);
  };

  const handleSendAdjustments = () => {
    if (!feedback.trim()) {
      alert('Por favor, descreva as alterações solicitadas.');
      return;
    }
    onUpdateStatus(delivery.id, 'adjustments');
    onShowToast('Ajustes Solicitados! Redirecionando...');

    const phone = '5524992758683';
    const text = encodeURIComponent(
      `Olá! Analisei o post do dia ${delivery.date} ("${delivery.title}") e gostaria de solicitar alguns ajustes:\n\n"${feedback}"`
    );

    setFeedback('');
    setShowAdjustForm(false);

    setTimeout(() => {
      window.open(`https://wa.me/${phone}?text=${text}`, '_blank');
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* CARD DA LEGENDA */}
      <div className="glass-panel rounded-2xl p-6 md:p-8 flex flex-col gap-6">
        <div className="flex items-center gap-2 border-b border-white/[0.04] pb-4">
          <span className="text-ouro-bertel font-cinzel text-lg tracking-wider font-semibold">Texto da Publicação</span>
        </div>

        <div className="flex flex-col gap-4">
          <div className="bg-black/30 border border-white/[0.03] rounded-xl p-5 text-sm text-offwhite/90 leading-relaxed max-h-[260px] overflow-y-auto whitespace-pre-wrap font-sans">
            {delivery.caption}
          </div>
          <div className="text-ouro-bertel font-sans text-xs italic tracking-wide leading-relaxed">
            {delivery.hashtags}
          </div>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <button
            onClick={handleCopyCaption}
            className="flex items-center justify-center gap-2 py-3 px-5 rounded-lg text-xs font-bold uppercase tracking-wider bg-transparent border border-ouro-bertel/40 hover:border-ouro-bertel text-ouro-bertel hover:bg-ouro-bertel/5 transition-all duration-300"
          >
            <Copy size={14} />
            Copiar Legenda
          </button>

          <a
            href={delivery.coverUrl}
            download={`capa-${delivery.id}.png`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-5 rounded-lg text-xs font-bold uppercase tracking-wider bg-zinc-900 border border-white/[0.06] hover:border-white/20 text-offwhite hover:bg-zinc-800 transition-all duration-300"
          >
            <Download size={14} />
            Baixar Capa
          </a>

          {delivery.type === 'reels' && (
            <a
              href={delivery.videoUrl}
              download={`video-${delivery.id}.mp4`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-5 rounded-lg text-xs font-bold uppercase tracking-wider bg-zinc-900 border border-white/[0.06] hover:border-white/20 text-offwhite hover:bg-zinc-800 transition-all duration-300"
            >
              <Download size={14} />
              Baixar Vídeo
            </a>
          )}
        </div>
      </div>

      {/* CARD DE APROVAÇÃO */}
      <div className="glass-panel border-ouro-bertel/20 rounded-2xl p-6 md:p-8 flex flex-col gap-5">
        <div>
          <h3 className="text-offwhite font-cinzel text-lg tracking-wider font-semibold border-b border-white/[0.04] pb-4">
            Aprovação de Entrega
          </h3>
          <p className="text-zinc-400 text-xs mt-3 leading-relaxed">
            Analise cuidadosamente os criativos e o texto acima. Escolha "Aprovar Post" para liberar a postagem imediatamente ou "Ajustes" para solicitar modificações.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={handleApprove}
            className="flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-emerald-600 hover:bg-emerald-500 text-white shadow-lg shadow-emerald-900/10 hover:shadow-emerald-950/20 active:scale-98 transition-all duration-300"
          >
            <Check size={18} />
            Aprovar Post
          </button>
          <button
            onClick={() => setShowAdjustForm(!showAdjustForm)}
            className="flex items-center justify-center gap-2 py-4 rounded-xl text-sm font-bold uppercase tracking-wider bg-rose-700 hover:bg-rose-600 text-white shadow-lg shadow-rose-950/10 hover:shadow-rose-950/20 active:scale-98 transition-all duration-300"
          >
            <AlertTriangle size={18} />
            Ajustes
          </button>
        </div>

        {showAdjustForm && (
          <div className="flex flex-col gap-3 mt-2 animate-fadeIn">
            <textarea
              className="w-full h-24 bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-offwhite font-sans focus:outline-none focus:border-ouro-bertel resize-none"
              placeholder="Digite aqui as modificações que você precisa no vídeo, na capa ou no texto..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            ></textarea>
            <button
              onClick={handleSendAdjustments}
              className="flex items-center justify-center gap-2 py-3 px-6 rounded-lg text-xs font-bold uppercase tracking-wider bg-ouro-bertel hover:bg-ouro-bertel/90 text-preto self-end transition-all duration-300"
            >
              <Send size={14} />
              Enviar pelo WhatsApp
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
