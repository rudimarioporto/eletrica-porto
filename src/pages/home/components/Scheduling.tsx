import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

const Scheduling = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    service: "",
    date: "",
    time: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (loading) return;

    if (!form.name.trim()) {
      alert("Digite seu nome");
      return;
    }

    setLoading(true);

    try {
      const msg = encodeURIComponent(
        "Ola, gostaria de agendar um atendimento" +
          (form.service ? " para " + form.service : "") +
          (form.date ? " no dia " + form.date : "") +
          (form.time ? " as " + form.time : "") +
          ". Meu nome e " +
          form.name +
          "."
      );

      const url = `https://wa.me/5573999933162?text=${msg}`;

      // ✅ MAIS CONFIÁVEL (evita bloqueio de popup)
      window.location.href = url;

      // redireciona depois (caso o usuário volte)
      setTimeout(() => {
        navigate("/agradecimento");
      }, 2000);

      // limpa formulário
      setForm({
        name: "",
        service: "",
        date: "",
        time: "",
      });

    } catch (error) {
      console.error("Erro ao enviar:", error);
      alert("Erro ao enviar. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="agendamento" className="p-10 bg-white text-center">
      <h2 className="text-2xl font-bold mb-4">
        Agendar Atendimento
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-md mx-auto"
      >
        <input
          name="name"
          type="text"
          placeholder="Seu nome"
          required
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="border p-3 rounded"
        />

        <input
          name="service"
          type="text"
          placeholder="Serviço"
          value={form.service}
          onChange={(e) =>
            setForm({ ...form, service: e.target.value })
          }
          className="border p-3 rounded"
        />

        <input
          name="date"
          type="date"
          value={form.date}
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
          className="border p-3 rounded"
        />

        <input
          name="time"
          type="time"
          value={form.time}
          onChange={(e) =>
            setForm({ ...form, time: e.target.value })
          }
          className="border p-3 rounded"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-500 text-white p-3 rounded"
        >
          {loading ? "Enviando..." : "Enviar Solicitação"}
        </button>
      </form>
    </section>
  );
};

export default Scheduling;