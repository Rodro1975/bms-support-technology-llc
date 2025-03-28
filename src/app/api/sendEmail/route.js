import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    // Configurar el transporte SMTP usando variables de entorno
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: true, // SSL
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Enviar el correo
    await transporter.sendMail({
      from: `"Contacto" <${process.env.SMTP_USER}>`, // Remitente
      to: process.env.SMTP_USER, // Destinatario
      subject: subject || "Sin asunto",
      text: message || "Sin mensaje",
      html: `<p><strong>De:</strong> ${email}</p><p>${message}</p>`, // Formato HTML opcional
    });

    return NextResponse.json(
      { success: true, message: "Correo enviado exitosamente" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error enviando correo:", error);
    return NextResponse.json(
      { success: false, message: "Error enviando el correo" },
      { status: 500 }
    );
  }
}
