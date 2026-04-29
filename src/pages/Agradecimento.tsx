const Agradecimento = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 bg-white">
      <h1 className="text-3xl font-bold mb-4">
        Obrigado pelo contato!
      </h1>

      <p className="text-gray-600 mb-6">
        Recebemos sua solicitação. Em breve entraremos em contato.
      </p>

      <a
        href="/"
        className="bg-blue-500 text-white px-6 py-3 rounded"
      >
        Voltar para o site
      </a>
    </div>
  );
};

export default Agradecimento;