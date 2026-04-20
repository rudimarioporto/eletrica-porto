const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  setLoading(true);

  try {
    const res = await fetch('/api/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (!res.ok) {
      throw new Error('Erro ao enviar');
    }

    const data = await res.json();
    console.log('API:', data);

    // ✅ só continua se deu certo
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

  } catch (err) {
    console.error('Erro ao enviar email:', err);
    alert('Erro ao enviar. Tente novamente.');
  } finally {
    setLoading(false);
  }
};
