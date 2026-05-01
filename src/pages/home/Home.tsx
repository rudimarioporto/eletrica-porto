import LinksGrid from "../../components/LinksGrid";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      
      {/* NAVBAR */}
      <header
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 40px",
          color: "white",
          zIndex: 10,
        }}
      >
        <div style={{ fontWeight: "bold" }}>Elétrica Porto</div>

        <nav style={{ display: "flex", gap: "20px" }}>
          <a href="#">Início</a>
          <a href="#">Sobre</a>
          <a href="#">Serviços</a>
          <a href="#">Contato</a>
        </nav>

        <Link to="/agendamento">
          <button
            style={{
              background: "#38B6FF",
              border: "none",
              padding: "10px 15px",
              borderRadius: "20px",
              color: "#fff",
              cursor: "pointer",
            }}
          >
            Agendar
          </button>
        </Link>
      </header>

      {/* HERO */}
      <section
        style={{
          height: "100vh",
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581090700227-4c4f50b5b3c1')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          color: "white",
        }}
      >
        {/* overlay escuro */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.6)",
          }}
        />

        <div style={{ position: "relative", zIndex: 2 }}>
          <h1 style={{ fontSize: "40px", fontWeight: "800" }}>
            Especialistas em{" "}
            <span style={{ color: "#38B6FF" }}>
              Motores Elétricos
            </span>{" "}
            <br /> e Bombas d'Água
          </h1>

          <p style={{ marginTop: "20px" }}>
            Mais de 28 anos oferecendo soluções confiáveis em Porto
            Seguro e região.
          </p>

          <div style={{ marginTop: "30px", display: "flex", gap: "20px", justifyContent: "center" }}>
            
            <Link to="/agendamento">
              <button
                style={{
                  background: "#38B6FF",
                  padding: "15px 25px",
                  border: "none",
                  borderRadius: "30px",
                  color: "#fff",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Agendar Atendimento
              </button>
            </Link>

            <a href="https://wa.me/5573999933162" target="_blank">
              <button
                style={{
                  background: "#fff",
                  padding: "15px 25px",
                  border: "none",
                  borderRadius: "30px",
                  color: "#000",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Falar no WhatsApp
              </button>
            </a>

          </div>
        </div>
      </section>

      {/* 🔥 GRID DE LINKS (SEUS ÍCONES VOLTAM AQUI) */}
      <section style={{ padding: "40px 20px", background: "#f5f5f5" }}>
        <LinksGrid />
      </section>

      {/* WHATSAPP FLUTUANTE */}
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
          fontSize: "20px",
          textDecoration: "none",
        }}
      >
        💬
      </a>

    </div>
  );
};

export default Home;
