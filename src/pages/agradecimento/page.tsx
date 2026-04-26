import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';

const WA_NUMBER = '5573999933162';

const ThankYouPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [countdown, setCountdown] = useState(10);

  const name = searchParams.get('name') || '';
  const service = searchParams.get('service') || '';
  const date = searchParams.get('date') || '';
  const time = searchParams.get('time') || '';

  const formatDate = (d: string) => {
    if (!d) return '';
    const [y, m, day] = d.split('-');
    return `${day}/${m}/${y}`;
  };

  // 🔒 Proteção: evita acesso direto sem dados
  useEffect(() => {
    if (!name && !service && !date && !time) {
      navigate('/');
    }
  }, [name, service, date, time, navigate]);

  // ⏳ Countdown automático
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate('/');
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  const waMsg = encodeURIComponent(
    `Olá, gostaria de confirmar meu agendamento na Elétrica Porto para ${formatDate(date)} às ${time}, serviço: ${service}. Meu nome é ${name}.`
  );

  const waLink = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
      style={{ background: 'linear-gradient(135deg, #f0f4f8 0%, #e8eef5 60%, #f5f7fa 100%)' }}
    >
      <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-6">

        <div className="bg-white/90 backdrop-blur-md rounded-2xl border border-white/60 p-8 w-full text-center">

          <h1 className="text-2xl md:text-3xl font-extrabold mb-2" style={{ color: '#0A2540' }}>
            Agendamento Confirmado!
          </h1>

          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            {name ? (
              <>Obrigado, <strong className="text-gray-700">{name}</strong>! Sua solicitação foi recebida com sucesso.</>
            ) : (
              <>Sua solicitação foi recebida com sucesso.</>
            )}{' '}
            Nossa equipe entrará em contato em breve para confirmar.
          </p>

          {(service || date || time) && (
            <div className="rounded-xl p-4 mb-6 text-left flex flex-col gap-3 border bg-blue-50/40">

              {name && <p><strong>Nome:</strong> {name}</p>}
              {service && <p><strong>Serviço:</strong> {service}</p>}
              {date && <p><strong>Data:</strong> {formatDate(date)}</p>}
              {time && <p><strong>Horário:</strong> {time}</p>}

            </div>
          )}

          <a
            href={waLink}
            target="_blank"
            rel="nofollow noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-bold text-sm uppercase tracking-widest text-white hover:opacity-90 mb-3"
            style={{ background: 'linear-gradient(90deg, #0A2540, #1E4E8C, #38B6FF)' }}
          >
            Confirmar Agora no WhatsApp
          </a>

          <Link
            to="/"
            className="flex items-center justify-center w-full py-3 rounded-xl font-semibold text-sm border-2 hover:bg-gray-50"
            style={{ borderColor: '#1E4E8C', color: '#1E4E8C' }}
          >
            Voltar ao Site
          </Link>
        </div>

        <p className="text-xs text-gray-400 text-center">
          Redirecionando em <strong>{countdown}s</strong>
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
