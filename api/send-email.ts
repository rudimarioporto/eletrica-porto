import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // 🔒 Bloqueia qualquer coisa que não seja POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, phone, service, date, time } = req.body;

    const response = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'SEUEMAIL@gmail.com', // 👉 troca pelo seu email
      subject: 'Novo agendamento - Site',
      html: `
        <h2>Novo agendamento</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Serviço:</strong> ${service}</p>
        <p><strong>Data:</strong> ${date}</p>
        <p><strong>Horário:</strong> ${time}</p>
      `,
    });

    return res.status(200).json({ success: true, response });

  } catch (error) {
    console.error('ERRO:', error);
    return res.status(500).json({ error: 'Erro ao enviar email' });
  }
}
