import { getRequestConfig } from "next-intl/server"
import { routing } from "./routing"

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = ((await requestLocale) ?? routing.defaultLocale) as "pl" | "en" | "de"
  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  }
})
