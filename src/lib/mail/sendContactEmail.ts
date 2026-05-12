import type { ContactFormData } from "@/lib/validations/contact.schema"
import { company } from "@/content/company"

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  // TODO: podłącz dostawcę e-mail (np. Resend, Nodemailer, SendGrid)
  // Przykład z Resend:
  //
  // import { Resend } from "resend"
  // const resend = new Resend(process.env.RESEND_API_KEY)
  //
  // await resend.emails.send({
  //   from: "formularz@zre-elko.pl",
  //   to: company.email,
  //   subject: `Nowe zapytanie od ${data.name}`,
  //   text: `
  //     Imię: ${data.name}
  //     E-mail: ${data.email}
  //     Telefon: ${data.phone ?? "—"}
  //
  //     ${data.message}
  //   `,
  // })

  console.log("sendContactEmail →", { to: company.email, data })
}
