import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* HERO */}
      <section style={{
        background: "#0A2540",
        color: "white",
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "32px", marginBottom: "10px" }}>
          Eletricista em Porto Seguro
        </h1>

        <p style={{ maxWidth: "500px", margin: "0 auto" }}>
          Conserto de motores, bombas d’água, instalações elétricas
          e manutenção com atendimento rápido.
        </p>

        <Link to="/agendamento">
          <button style={{
            marginTop: "20px",
            padding: "12px 20px",
            background: "#38B6FF",
            border: "none",
            color: "#fff",
            fontSize: "16px",
            borderRadius: "6px",
            cursor: "pointer"
          }}>
            Agendar Atendimento
          </button>
        </Link>
      </section>

      {/* SERVIÇOS */}
      <section style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2>Serviços</h2>

        <div style={{
          display: "grid",
          gap: "20px",
          marginTop: "20px"
        }}>
          <div>🔌 Instalação elétrica</div>
          <div>⚡ Manutenção elétrica</div>
          <div>🚿 Troca de chuveiro</div>
          <div>💡 Curto circuito</div>
          <div>🔧 Conserto de bombas</div>
        </div>
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
          textDecoration: "none",
          fontSize: "20px"
        }}
      >
        💬
      </a>

    </main>
  );
};

export default Home;