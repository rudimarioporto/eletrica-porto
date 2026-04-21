import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Scheduling = () => {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    service: "",
    date: "",
    time: "",
  });

  // ✅ AQUI É O LUGAR CORRETO DO SEU HANDLE
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setLoading(true);

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error('Erro ao enviar');
      }

      const data = await res.json();
      console.log('API:', data);

      setSubmitted(true);

      // proteção contra campos inexistentes
      const date = (form as any).date || '';
      const time = (form as any).time || '';
      const service = (form as any).service || '';

      const msg = encodeURIComponent(
        `Olá, gostaria de confirmar meu agendamento na Elétrica Porto${
          service ? ` para ${service}` : ''
        }${date ? ` no dia ${date}` : ''}${time ? ` às ${time}` : ''}. Meu nome é ${form.name}.`
      );

      window.open(`https://wa.me/5573999933162?text=${msg}`, '_blank');

      setTimeout(() => {
        const params = new URLSearchParams({
          name: form.name || '',
          service: service,
          date: date,
          time: time,
        });

        navigate(`/agradecimento?${params.toString()}`);
      }, 600);

    } catch (err) {
      console.error('Erro ao enviar email:', err);
      alert('Erro ao enviar. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* seu formulário aqui */}
    </form>
  );
};

export default Scheduling;
