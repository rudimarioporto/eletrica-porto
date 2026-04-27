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
    setLoading(true);

    const msg = encodeURIComponent(
      "Ola, gostaria de agendar um atendimento" +
      (form.service ? " para " + form.service : "") +
      (form.date ? " no dia " + form.date : "") +
      (form.time ? " as " + form.time : "") +
      ". Meu nome e " + form.name + "."
    );

    // abrir WhatsApp
    window.open(`https://wa.me/5573999933162?text=${msg}`, "_blank");

    // criar params corretamente
    const params = new URLSearchParams({
      name: form.name || "",
      service: form.service || "",
      date: form.date || "",
      time: form.time || "",
    });

    // redirecionar depois de 1s
    setTimeout(() => {
      navigate(`/agradecimento?${params.toString()}`);
    }, 1000);

    setLoading(false);
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
          type="text"
          placeholder="Serviço"
          value={form.service}
          onChange={(e) =>
            setForm({ ...form, service: e.target.value })
          }
          className="border p-3 rounded"
        />

        <input
          type="date"
          value={form.date}
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
          className="border p-3 rounded"
        />

        <input
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