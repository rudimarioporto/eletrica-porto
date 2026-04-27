const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { name, service, date, time } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({
  from: "eletricaportovendas@gmail.com",
  to: "eletricaportovendas@gmail.com, rudivanporto@hotmail.com",
  subject: "Novo Agendamento",
  text: `Nome: ${name}, Serviço: ${service}, Data: ${date}, Hora: ${time}`
});

    res.status(200).send("Email enviado!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao enviar email");
  }
});

app.listen(3001, () => {
  console.log("Servidor rodando em http://localhost:3001");
});