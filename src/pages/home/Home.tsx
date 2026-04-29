const Home = () => {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "#0f172a",
          color: "#fff",
        }}
      >
        <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
          Elétrica Porto
        </h1>

        <p style={{ fontSize: "18px", marginBottom: "30px" }}>
          Especialistas em motores elétricos e bombas d'água
        </p>

        <button
          onClick={() => (window.location.href = "/agendamento")}
          style={{
            padding: "15px 25px",
            fontSize: "16px",
            background: "#3b82f6",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Agendar Atendimento
        </button>
      </section>

      {/* SERVIÇOS */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Serviços</h2>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>🔧 Manutenção elétrica</li>
          <li>⚡ Instalações residenciais</li>
          <li>💧 Bombas d'água</li>
          <li>🔌 Motores elétricos</li>
        </ul>
      </section>

      {/* WHATSAPP */}
      <section style={{ textAlign: "center", padding: "40px" }}>
        <button
          onClick={() =>
            window.open(
              "https://wa.me/5573999933162",
              "_blank"
            )
          }
          style={{
            padding: "15px 25px",
            background: "#22c55e",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Falar no WhatsApp
        </button>
      </section>
    </main>
  );
};

export default Home;