import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, service } = req.body;

  if (!name || !email || !service) {
    return res.status(400).json({ error: 'Dados incompletos' });
  }

  try {
    // 🔹 Aqui você pode integrar com serviço de email depois
    console.log('📩 Novo agendamento:');
    console.log({ name, email, phone, service });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao enviar' });
  }
}