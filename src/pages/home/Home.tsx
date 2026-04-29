import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>

      {/* HERO */}
      <section style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1581090700227-4c4f50b5b3c1')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        padding: "100px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "36px", fontWeight: "700" }}>
          Eletricista em Porto Seguro
        </h1>

        <p style={{ maxWidth: "600px", margin: "20px auto" }}>
          Instalação, manutenção elétrica, conserto de motores e bombas.
          Atendimento rápido e profissional.
        </p>

        <Link to="/agendamento">
          <button style={{
            background: "#38B6FF",
            padding: "15px 25px",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer"
          }}>
            Agendar Atendimento
          </button>
        </Link>
      </section>

      {/* SERVIÇOS */}
      <section style={{ padding: "60px 20px", textAlign: "center" }}>
        <h2 style={{ fontSize: "28px" }}>Nossos Serviços</h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "30px"
        }}>
          <div>⚡ Instalação elétrica</div>
          <div>🔧 Manutenção elétrica</div>
          <div>🚿 Troca de chuveiro</div>
          <div>💡 Curto circuito</div>
          <div>🔌 Tomadas e fiação</div>
          <div>🔩 Bombas d’água</div>
        </div>
      </section>

      {/* SOBRE */}
      <section style={{
        background: "#f5f5f5",
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h2>Sobre a Elétrica Porto</h2>

        <p style={{ maxWidth: "600px", margin: "20px auto" }}>
          Profissional especializado em serviços elétricos em Porto Seguro,
          com atendimento rápido, segurança e qualidade garantida.
        </p>
      </section>

      {/* CTA FINAL */}
      <section style={{
        background: "#0A2540",
        color: "white",
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h2>Precisa de um eletricista agora?</h2>

        <Link to="/agendamento">
          <button style={{
            marginTop: "20px",
            padding: "15px 25px",
            background: "#25D366",
            border: "none",
            borderRadius: "8px",
            color: "#fff",
            fontSize: "16px"
          }}>
            Agendar via WhatsApp
          </button>
        </Link>
      </section>

      {/* WHATSAPP FIXO */}
      <a
        href="https://wa.me/5573999933162"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          background: "#25D366",
          color: "#fff",
          padding: "15px",
          borderRadius: "50%",
          fontSize: "22px",
          textDecoration: "none"
        }}
      >
        💬
      </a>

    </div>
  );
};

export default Home;