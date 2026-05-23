import { z } from "zod"

export function createContactSchema(t: (key: string) => string) {
  return z.object({
    name: z.string().trim().min(2, t("nameMin")).max(100),
    email: z.string().trim().email(t("emailInvalid")).max(254),
    phone: z
      .string()
      .trim()
      .regex(/^\d{9,15}$/, t("phoneInvalid"))
      .optional()
      .or(z.literal("")),
    message: z.string().trim().min(1, t("messageMin")).max(2000),
  })
}

// Statyczna wersja do walidacji po stronie serwera (API route)
export const contactSchema = createContactSchema((key) => ({
  nameMin: "Imię i nazwisko musi mieć co najmniej 2 znaki.",
  emailInvalid: "Podaj prawidłowy adres e-mail.",
  phoneInvalid: "Podaj prawidłowy numer telefonu.",
  messageMin: "Wiadomość musi mieć co najmniej 10 znaków.",
})[key] ?? key)

export type ContactFormData = z.infer<ReturnType<typeof createContactSchema>>
