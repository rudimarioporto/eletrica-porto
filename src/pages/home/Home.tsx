const Home = () => {
  return (
    <main style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Elétrica Porto</h1>

      <p>Bem-vindo ao nosso site</p>

      <a href="/agendamento">
        <button style={{ marginTop: "20px" }}>
          Agendar Atendimento
        </button>
      </a>
    </main>
  );
};

export default Home;