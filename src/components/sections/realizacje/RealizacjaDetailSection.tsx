import { Link } from "@/i18n/navigation"
import { ArrowLeft } from "lucide-react"
import { colors } from "@/lib/colors"
import type { RealizacjaItem } from "@/types/realizacje"

interface Props {
  realizacja: RealizacjaItem
  item: { id: string; title: string; description: string; category: string; longDescription?: string }
}

export function RealizacjaDetailSection({ realizacja, item }: Props) {
  return (
    <div className="min-h-screen bg-black px-4 pt-28 pb-24">
      <div className="container mx-auto max-w-5xl">

        <Link
          href="/realizacje"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-opacity hover:opacity-70"
          style={{ color: colors.logo }}
        >
          <ArrowLeft className="size-4" />
          Powrót do realizacji
        </Link>

        <div className="flex items-center gap-3 mb-4">
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold"
            style={{ backgroundColor: `${colors.logo}20`, color: colors.logo }}
          >
            {item.category}
          </span>
          <span className="text-sm text-white/40">{realizacja.year}</span>
        </div>

        <h1 className="text-3xl font-bold text-white mb-4 md:text-4xl leading-snug">
          {item.title}
        </h1>
        <div className="h-px w-24 mb-8" style={{ backgroundColor: colors.logo }} />

        {item.longDescription ? (
          <div
            className="text-white/70 text-base leading-relaxed max-w-3xl mb-16 realizacja-content"
            dangerouslySetInnerHTML={{ __html: item.longDescription }}
          />
        ) : (
          <p className="text-white/70 text-base leading-relaxed max-w-3xl mb-16">
            {item.description}
          </p>
        )}

        <p className="text-xs font-semibold uppercase tracking-widest mb-5 text-white/40">
          Galeria zdjęć
        </p>
        {realizacja.photos.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {realizacja.photos.map((src) => (
              <div
                key={src}
                className="relative aspect-[4/3] rounded-xl overflow-hidden border"
                style={{ borderColor: `${colors.logo}20` }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={item.title} className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-xl border flex items-center justify-center"
                style={{ backgroundColor: colors.buttonCta, borderColor: `${colors.logo}20` }}
              >
                <span className="text-xs text-white/20 uppercase tracking-widest">
                  Zdjęcia wkrótce
                </span>
              </div>
            ))}
          </div>
        )}

      </div>
    </div>
  )
}
