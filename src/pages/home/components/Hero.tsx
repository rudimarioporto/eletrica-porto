const Hero = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image (LOCAL + otimizada) */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/hero.webp')",
        }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, rgba(10,37,64,0.65) 0%, rgba(10,37,64,0.55) 50%, rgba(10,37,64,0.7) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-8 text-center">

        {/* Logo menor */}
        <div className="flex items-center justify-start mb-6 mt-12">
          <img
            src="/images/logo.png"
            alt="Elétrica Porto — Motores e Bombas"
            className="w-auto object-contain"
            style={{
              height: '120px',
              maxWidth: '320px',
            }}
          />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase bg-blue-500/20 border border-blue-400/30 text-blue-400">
          <i className="ri-flashlight-fill" />
          Especialistas em Motores e Bombas
        </div>

        {/* Headline otimizada */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-4">
          Conserto de{' '}
          <span className="text-blue-400">Motores Elétricos</span>
          <br />e{' '}
          <span className="text-blue-400">Bombas d&apos;Água</span>
          <br />em Porto Seguro
        </h1>

        {/* Subheadline mais direta */}
        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Atendimento rápido, diagnóstico preciso e mais de 28 anos de experiência.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#agendamento"
            onClick={(e) => {
              e.preventDefault();
              handleScroll('#agendamento');
            }}
            className="flex items-center justify-center gap-2 text-white font-extrabold px-10 py-4 rounded-full text-base transition-all hover:scale-105 hover:shadow-lg"
            style={{
              background: 'linear-gradient(90deg, #38B6FF 0%, #1E4E8C 60%, #0A2540 100%)',
            }}
          >
            <i className="ri-calendar-check-line text-lg" />
            Solicitar Atendimento Agora
          </a>

          <a
            href="https://wa.me/5573999933162?text=Olá,%20vim%20pelo%20site%20e%20quero%20atendimento%20rápido."
            target="_blank"
            rel="nofollow noreferrer"
            className="flex items-center justify-center gap-2 bg-white text-[#0A2540] font-extrabold px-10 py-4 rounded-full text-base transition-all hover:scale-105"
          >
            <i className="ri-whatsapp-line text-lg text-green-500" />
            Atendimento imediato no WhatsApp
          </a>
        </div>

        {/* Stats */}
        <div className="mt-14 grid grid-cols-3 gap-4 md:gap-8 max-w-xl mx-auto">
          {[
            { icon: 'ri-trophy-line', value: '+28 anos', label: 'de experiência' },
            { icon: 'ri-user-smile-line', value: '+3.000', label: 'clientes atendidos' },
            { icon: 'ri-tools-line', value: '100%', label: 'de satisfação' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <i className={`${stat.icon} text-2xl text-blue-400 mb-1`} />
              <div className="text-white font-bold text-xl md:text-2xl">{stat.value}</div>
              <div className="text-white/60 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll */}
      <button
        onClick={() => handleScroll('#sobre')}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white animate-bounce"
        aria-label="Rolar para baixo"
      >
        <i className="ri-arrow-down-line text-2xl" />
      </button>
    </section>
  );
};

export default Hero;
