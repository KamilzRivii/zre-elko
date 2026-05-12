import { z } from "zod"

export const contactSchema = z.object({
  name: z.string().min(2, "Imię i nazwisko musi mieć co najmniej 2 znaki."),
  email: z.string().email("Podaj prawidłowy adres e-mail."),
  phone: z
    .string()
    .regex(/^\+?[\d\s\-()]{9,15}$/, "Podaj prawidłowy numer telefonu.")
    .optional()
    .or(z.literal("")),
  message: z.string().min(10, "Wiadomość musi mieć co najmniej 10 znaków."),
})

export type ContactFormData = z.infer<typeof contactSchema>
