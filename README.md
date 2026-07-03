# Karla Molina — Portfolio UGC / SMM

Web personal y de captación de leads para Karla Molina (`@karlamolinatalks`), creadora UGC y Social Media Manager en Barcelona. Bilingüe (ES/EN), con landing (Inicio · Sectores · Contacto) y páginas de sector con el trabajo en vídeo/foto.

Stack: Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4 · Resend (formulario).

## Desarrollo

```bash
npm run dev     # servidor local en http://localhost:3000
npm run build   # build de producción
npm run start   # sirve el build
```

## Variables de entorno

Copia `.env.example` a `.env.local` y rellena:

- `RESEND_API_KEY` — API key de [Resend](https://resend.com/api-keys) para el formulario de contacto.
- `CONTACT_TO` — email de destino de los mensajes (por defecto el de Karla).
- `CONTACT_FROM` — remitente verificado en Resend. Sin dominio propio, usa `Karla Web <onboarding@resend.dev>`.

Sin `RESEND_API_KEY` el formulario responde `not_configured` y no envía.

## Contenido de Karla

Texto y catálogo (en `src/lib/`):

- `sectors.ts` — catálogo de sectores y sus reels/fotos. Añadir trabajo = añadir entradas aquí (data-driven, no hace falta tocar componentes).
- `i18n.ts` — todos los textos ES/EN.
- `site.ts` — email y enlaces de redes.

### Fotos y vídeos (sin buckets)

Todo va en `/public/media/` y se registra en `src/lib/media.ts`. Mientras una entrada no exista, la web muestra el placeholder correspondiente.

- **Fotos** (retratos, gatos, megáfono, sector "Fotos"): suelta el archivo en `/public/media/{brand,pets,fotos}/` y pon su ruta en `media.ts`. Se renderizan optimizadas con `next/image`.
- **Reels**: no se suben los vídeos (pesan mucho). Se sube una **miniatura** ligera a `/public/media/reels/` y se registra `{ poster, href }` en `reelMedia` por `slotId` — la tarjeta mantiene el diseño (chrome + play) y al hacer clic abre el reel en TikTok/Instagram. Si algún reel se quiere self-hostear, se puede cambiar puntualmente.

Los `slotId` salen de `sectors.ts` (p. ej. `slot-cabello-0`, `pet-zoro`). Ver ejemplos comentados en `media.ts`.

## Diseño

El handoff original (prototipo HTML + screenshots) está en `design/` (ignorada por git).
