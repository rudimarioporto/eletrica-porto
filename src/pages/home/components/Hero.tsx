const Hero = () => {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image — foto real Rudivan */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://i.ibb.co/pk5syY1/Rudivan-jpg.png')",
          backgroundPosition: 'center center',
          filter: 'brightness(1.08) contrast(1.15) saturate(1.1)',
        }}
      />

      {/* Overlay azul escuro #0A2540 com ~50% de transparência */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, rgba(10,37,64,0.62) 0%, rgba(10,37,64,0.48) 50%, rgba(10,37,64,0.65) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8 text-center">

        {/* Logo real da empresa — alinhada à esquerda */}
        <div className="flex items-center justify-start mb-8 mt-16">
          <img
            src="https://public.readdy.ai/ai/img_res/134c6734-485a-4896-accf-bf5582935133.png"
            alt="Elétrica Porto — Motores e Bombas"
            className="w-auto object-contain"
            style={{
              height: '210px',
              maxWidth: '420px',
              filter: 'drop-shadow(0 0 18px rgba(56,182,255,0.45)) drop-shadow(0 4px 24px rgba(10,37,64,0.6))',
              opacity: 1,
            }}
          />
        </div>

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase"
          style={{
            background: 'rgba(56,182,255,0.18)',
            border: '1px solid rgba(56,182,255,0.35)',
            color: '#38B6FF',
          }}
        >
          <i className="ri-flashlight-fill" />
          Especialistas em Motores e Bombas
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Especialistas em{' '}
          <span style={{ color: '#38B6FF' }}>Motores Elétricos</span>
          <br />e{' '}
          <span style={{ color: '#38B6FF' }}>Bombas d&apos;Água</span>
        </h1>

        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Mais de 28 anos oferecendo soluções confiáveis em Porto Seguro e região.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#agendamento"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('#agendamento');
            }}
            className="flex items-center justify-center gap-2 text-white font-extrabold px-10 py-4 rounded-full text-base transition-all hover:scale-105 hover:shadow-lg cursor-pointer whitespace-nowrap"
            style={{
              background: 'linear-gradient(90deg, #38B6FF 0%, #1E4E8C 60%, #0A2540 100%)',
              boxShadow: '0 4px 24px rgba(56,182,255,0.35)',
            }}
          >
            <i className="ri-calendar-check-line text-lg" />
            Agendar Atendimento
          </a>
          <a
            href="https://wa.me/5573999933162?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20El%C3%A9trica%20Porto.%20Gostaria%20de%20falar%20com%20um%20especialista."
            target="_blank"
            rel="nofollow noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-[#0A2540] font-extrabold px-10 py-4 rounded-full text-base transition-all hover:scale-105 cursor-pointer whitespace-nowrap"
            style={{ boxShadow: '0 4px 20px rgba(255,255,255,0.25)' }}
          >
            <i className="ri-whatsapp-line text-lg text-green-500" />
            Falar no WhatsApp
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-4 md:gap-8 max-w-xl mx-auto">
          {[
            { icon: 'ri-trophy-line', value: '+28 anos', label: 'de experiência' },
            { icon: 'ri-user-smile-line', value: '+3.000', label: 'clientes atendidos' },
            { icon: 'ri-tools-line', value: '100%', label: 'de satisfação' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="w-10 h-10 flex items-center justify-center mx-auto mb-1">
                <i className={`${stat.icon} text-2xl`} style={{ color: '#38B6FF' }} />
              </div>
              <div className="text-white font-bold text-xl md:text-2xl">{stat.value}</div>
              <div className="text-white/60 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => handleScroll('#sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white cursor-pointer animate-bounce transition-colors"
        aria-label="Rolar para baixo"
      >
        <i className="ri-arrow-down-line text-2xl" />
      </button>
    </section>
  );
};

export default Hero;
