const Agendamento = () => {
  return (
    <section
      id="agendamento"
      className="min-h-screen flex items-center justify-center bg-[#0A2540] px-4 py-20"
    >
      <div className="w-full max-w-2xl bg-white rounded-2xl p-8 shadow-2xl">
        
        <h2 className="text-2xl font-bold text-center mb-6 text-[#0A2540]">
          Agendar Atendimento
        </h2>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Formulário enviado (simulação)");
          }}
          className="flex flex-col gap-4"
        >
          <input
            type="text"
            placeholder="Seu nome"
            required
            className="border p-3 rounded-lg"
          />

          <input
            type="email"
            placeholder="Seu email"
            required
            className="border p-3 rounded-lg"
          />

          <input
            type="tel"
            placeholder="Seu telefone"
            className="border p-3 rounded-lg"
          />

          <textarea
            placeholder="Descreva o serviço"
            required
            className="border p-3 rounded-lg"
          />

          <button
            type="submit"
            onClick={() => alert("clicou")}
            className="bg-[#38B6FF] text-white font-bold py-3 rounded-lg hover:opacity-90"
          >
            Enviar Solicitação
          </button>
        </form>

      </div>
    </section>
  );
};

export default Agendamento;
