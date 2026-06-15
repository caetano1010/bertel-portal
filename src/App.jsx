import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MediaViewer from './components/MediaViewer';
import CaptionBox from './components/CaptionBox';
import PlanningTab from './components/PlanningTab';
import DesignSystemTab from './components/DesignSystemTab';
import OnboardingGuide from './components/OnboardingGuide';
import initialDeliveries from './data/deliveries.json';

export default function App() {
  const [activeTab, setActiveTab] = useState('approval');
  
  // Carrega status salvo ou usa o do JSON
  const [deliveries, setDeliveries] = useState(() => {
    const saved = localStorage.getItem('bertel_deliveries_status');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return initialDeliveries.map(item => ({
          ...item,
          status: parsed[item.id] || item.status
        }));
      } catch (e) {
        console.error('Erro ao ler status do localStorage:', e);
      }
    }
    return initialDeliveries;
  });

  // Carrega post ativo salvo ou usa o primeiro
  const [activeDeliveryId, setActiveDeliveryId] = useState(() => {
    const savedId = localStorage.getItem('bertel_active_delivery_id');
    if (savedId && initialDeliveries.some(d => d.id === savedId)) {
      return savedId;
    }
    return initialDeliveries[0].id;
  });

  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);

  // Seleciona a entrega ativa
  const activeDelivery = deliveries.find(d => d.id === activeDeliveryId) || deliveries[0];

  // Mostra notificação rápida (Toast)
  const triggerToast = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  // Salva a seleção do post no localStorage
  const handleSelectDelivery = (id) => {
    setActiveDeliveryId(id);
    localStorage.setItem('bertel_active_delivery_id', id);
  };

  // Atualiza o status local de aprovação e persiste no localStorage
  const handleUpdateStatus = (id, newStatus) => {
    setDeliveries(prev => {
      const updated = prev.map(item => {
        if (item.id === id) {
          return { ...item, status: newStatus };
        }
        return item;
      });
      
      const statuses = {};
      updated.forEach(item => {
        statuses[item.id] = item.status;
      });
      localStorage.setItem('bertel_deliveries_status', JSON.stringify(statuses));
      
      return updated;
    });
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'approval':
        return (
          <div className="flex flex-col md:flex-row flex-grow w-full">
            {/* Linha do tempo de posts */}
            <Sidebar 
              deliveries={deliveries} 
              activeDelivery={activeDelivery} 
              onSelectDelivery={handleSelectDelivery} 
            />

            {/* Painel Central do Conteúdo do Post */}
            <div className="flex-grow p-6 lg:p-10 flex flex-col gap-8 overflow-y-auto max-h-[calc(100vh-72px)]">
              {/* Header do Post */}
              <div className="border-l-3 border-ouro-bertel pl-4">
                <h1 className="font-cinzel text-xl md:text-2xl font-bold tracking-wider text-offwhite">
                  {activeDelivery.title}
                </h1>
                <div className="text-zinc-500 text-xs mt-1 uppercase tracking-wider font-semibold">
                  {activeDelivery.date} • Formato: {activeDelivery.type}
                </div>
              </div>

              {/* Guia de Onboarding / Instruções */}
              <OnboardingGuide />

              {/* Grid Principal de Conteúdo */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
                {/* Lado Esquerdo: Capa e Vídeo/Carrossel */}
                <MediaViewer key={activeDelivery.id} delivery={activeDelivery} />

                {/* Lado Direito: Legenda e Ações de Aprovação */}
                <CaptionBox 
                  delivery={activeDelivery} 
                  onUpdateStatus={handleUpdateStatus}
                  onShowToast={triggerToast}
                />
              </div>
            </div>
          </div>
        );
      case 'planning':
        return (
          <div className="flex-grow px-6 md:px-12 w-full">
            <PlanningTab />
          </div>
        );
      case 'design-system':
        return (
          <div className="flex-grow px-6 md:px-12 w-full">
            <DesignSystemTab />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-preto flex flex-col pb-[70px] md:pb-0">
      
      {/* Toast Notification */}
      <div 
        className={`fixed bottom-[90px] md:bottom-8 right-6 bg-gradient-to-r from-ouro-bertel to-ouro-envelhecido text-preto px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider shadow-premium transition-all duration-300 z-[1000] pointer-events-none ${
          showToast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        {toastMessage}
      </div>

      {/* Navegação Topo e Bottom (Mobile) */}
      <Navbar 
        activeTab={activeTab} 
        onTabChange={setActiveTab} 
        status={activeDelivery.status} 
      />

      <main className="flex-grow flex flex-col md:flex-row h-full">
        {renderContent()}
      </main>

      {/* Rodapé unificado (Desktop) */}
      <footer className="hidden md:block bg-zinc-950/80 border-t border-white/[0.04] py-6 px-12 text-center mt-auto">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs text-zinc-500">
          <div className="flex items-center gap-2">
            <img 
              src="./logo_transparent.png" 
              alt="Logo Bertel" 
              className="h-6 w-auto opacity-50"
              onError={(e) => {
                e.target.src = 'logo.png';
                e.target.onerror = () => e.target.style.display = 'none';
              }}
            />
            <span className="font-semibold">© 2026 Bertel Reformas e Construções.</span>
          </div>
          <span className="text-[10px] font-bold uppercase tracking-wider">
            Painel do Cliente v2.0
          </span>
        </div>
      </footer>
    </div>
  );
}
