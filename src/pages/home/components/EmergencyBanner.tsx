import { useState, useEffect } from 'react';


const EmergencyBanner = () => {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setVisible(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleDismiss = () => {
    setVisible(false);
    setDismissed(true);
  };

  if (dismissed) return null;

  return (
    <div
      className="fixed bottom-24 left-4 z-40 max-w-xs w-full transition-all duration-500"
      style={{
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0A2540 0%, #1E4E8C 60%, #2a6abf 100%)',
          boxShadow: '0 8px 32px rgba(10,37,64,0.35)',
        }}
      >
        {/* Top accent */}
        <div className="h-0.5 w-full" style={{ background: 'linear-gradient(90deg, #38B6FF, #1E4E8C)' }} />

        <div className="p-4">
          {/* Header row */}
          <div className="flex items-start justify-between gap-2 mb-3">
            <div className="flex items-center gap-2.5">
              {/* Pulsing dot */}
              <div className="relative w-8 h-8 flex items-center justify-center flex-shrink-0">
                <span
                  className="absolute inline-flex w-full h-full rounded-full animate-ping opacity-40"
                  style={{ background: '#38B6FF' }}
                />
                <span
                  className="relative w-8 h-8 flex items-center justify-center rounded-full"
                  style={{ background: 'rgba(56,182,255,0.2)' }}
                >
                  <i className="ri-alarm-warning-fill text-sm" style={{ color: '#38B6FF' }}></i>
                </span>
              </div>
              <div>
                <div className="text-white font-extrabold text-sm leading-tight">Atendimento Emergencial</div>
                <div className="text-xs font-semibold" style={{ color: '#38B6FF' }}>Soluções rápidas para evitar prejuízos</div>
              </div>
            </div>
            <button
              onClick={handleDismiss}
              className="w-6 h-6 flex items-center justify-center rounded-full cursor-pointer transition-colors flex-shrink-0 mt-0.5"
              style={{ background: 'rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.6)' }}
              onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
              aria-label="Fechar"
            >
              <i className="ri-close-line text-xs"></i>
            </button>
          </div>

          {/* Message */}
          <p className="text-xs leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.7)' }}>
            Bomba parou? Motor queimou? Evite paradas e prejuízos — fale agora com nossa equipe.
          </p>

          <a
            href="https://wa.me/5573999933162?text=Ol%C3%A1%2C%20preciso%20de%20atendimento%20emergencial."
            target="_blank"
            rel="nofollow noreferrer"
            className="flex items-center justify-center gap-2 text-white font-bold text-xs py-2.5 rounded-full cursor-pointer whitespace-nowrap hover:opacity-90 transition-opacity"
            style={{ background: 'linear-gradient(90deg, #25D366, #128C7E)' }}
          >
            <i className="ri-whatsapp-line text-sm"></i>
            Chamar no WhatsApp
          </a>


        </div>
      </div>
    </div>
  );
};

export default EmergencyBanner;
