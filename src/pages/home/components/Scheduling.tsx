const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  e.stopPropagation();

  setLoading(true);

  try {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log('API:', data);
  } catch (err) {
    console.error('Erro ao enviar email:', err);
  }

  setLoading(false);
  setSubmitted(true);

  const msg = encodeURIComponent(
    `Olá, gostaria de confirmar meu agendamento na Elétrica Porto para ${form.date} às ${form.time}, serviço: ${form.service}. Meu nome é ${form.name}.`
  );

  window.open(`https://wa.me/5573999933162?text=${msg}`, '_blank');

  setTimeout(() => {
    const params = new URLSearchParams({
      name: form.name,
      service: form.service,
      date: form.date,
      time: form.time,
    });
    navigate(`/agradecimento?${params.toString()}`);
  }, 600);
};
