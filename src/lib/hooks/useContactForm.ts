"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useTranslations } from "next-intl"
import { createContactSchema, type ContactFormData } from "@/lib/validations/contact.schema"

type SubmitStatus = "idle" | "loading" | "success" | "error"

export function useContactForm() {
  const [status, setStatus] = useState<SubmitStatus>("idle")
  const t = useTranslations("contact.form.errors")
  const schema = createContactSchema((key) => t(key))

  const form = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", message: "" },
  })

  async function onSubmit(data: ContactFormData) {
    setStatus("loading")
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, _hp: "" }),
      })
      if (!res.ok) throw new Error("Błąd serwera")
      setStatus("success")
      form.reset()
    } catch {
      setStatus("error")
    }
  }

  return { form, status, onSubmit: form.handleSubmit(onSubmit) }
}
