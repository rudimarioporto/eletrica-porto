import { Resend } from 'resend';

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { nome, telefone, mensagem } = await request.json();

    // validação simples (evita envio vazio)
    if (!nome || !telefone || !mensagem) {
      return new Response(
        JSON.stringify({ error: 'Preencha todos os campos.' }),
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: 'contato@eletricaporto.com.br',
      to: 'rudivanporto@hotmail.com',
      reply_to: 'rudivanporto@hotmail.com',
      subject: 'Novo contato do site - Elétrica Porto',
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>📩 Novo contato recebido</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Telefone:</strong> ${telefone}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${mensagem}</p>
          <hr/>
          <p style="font-size: 12px; color: #666;">
            Enviado pelo site eletricaporto.com.br
          </p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });

  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Erro ao enviar email' }),
      { status: 500 }
    );
  }
}
