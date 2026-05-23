import nodemailer from "nodemailer"
import type { ContactFormData } from "@/lib/validations/contact.schema"
import { company } from "@/content/company"

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  await transporter.sendMail({
    from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
    to: company.email,
    replyTo: data.email,
    subject: `Nowe zapytanie od ${data.name}`,
    text: [
      `Imię i nazwisko: ${data.name}`,
      `E-mail: ${data.email}`,
      `Telefon: ${data.phone || "—"}`,
      "",
      data.message,
    ].join("\n"),
  })
}
