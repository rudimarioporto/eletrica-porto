import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-3xl font-bold mb-4">
        Elétrica Porto
      </h1>

      <p className="mb-6 text-gray-600">
        Serviços elétricos com qualidade e segurança.
      </p>

      <button
        onClick={() => navigate("/agendamento")}
        className="bg-blue-500 text-white px-6 py-3 rounded"
      >
        Agendar Atendimento
      </button>
    </div>
  );
};

export default Home;