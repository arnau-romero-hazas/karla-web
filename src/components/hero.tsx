"use client";

import { useLang } from "@/components/lang-provider";
import { MediaSlot } from "@/components/media-slot";
import {
  EmailIcon,
  HowArrow,
  InstagramIcon,
  TikTokIcon,
} from "@/components/icons";
import { site } from "@/lib/site";
import { brandImages } from "@/lib/media";

export function Hero() {
  const { t } = useLang();

  return (
    <section
      id="sec-inicio"
      className="relative scroll-mt-[74px] overflow-hidden"
    >
      <div className="mx-auto grid max-w-[1220px] grid-cols-1 items-center gap-3 px-6 pt-[34px] pb-[76px] min-[900px]:min-h-[calc(100svh-61px)] min-[900px]:grid-cols-[250px_1fr_350px]">
        <div className="hidden justify-center min-[900px]:flex">
          <MediaSlot
            label="Megáfono halftone (PNG)"
            dashed
            src={brandImages.megaphone}
            fit="contain"
            sizes="230px"
            className="floaty relative h-[300px] w-[230px] rounded-xl"
          />
        </div>

        <div className="flex flex-col items-center gap-1 text-center">
          <p className="mb-1 font-display text-[17px] font-semibold italic tracking-[.3px] text-wine-deep">
            {t.role}
          </p>
          <div className="my-0.5 text-3xl leading-none">💗</div>
          <h1 className="font-display text-[42px] font-bold leading-[.98] text-wine min-[600px]:text-[52px] min-[900px]:text-[78px]">
            Karla Molina
          </h1>
          <h2 className="mt-0.5 mb-2 font-display text-[31px] font-extrabold leading-none text-wine min-[600px]:text-[38px] min-[900px]:text-[56px]">
            UGC / SMM
          </h2>
          <p className="mt-0.5 text-lg font-semibold text-wine-deep">{t.age}</p>
          <a
            href={`mailto:${site.email}`}
            className="mt-1 mb-4 text-[15px] text-wine hover:underline"
          >
            {site.email}
          </a>

          <div className="w-full max-w-[430px] rounded-[14px] border-[1.5px] border-wine bg-cream px-[26px] py-4 shadow-[0_8px_22px_rgba(92,22,34,.08)]">
            <p className="text-[19px] leading-[1.45] text-wine-deep">
              {t.callout1}{" "}
              <span className="font-bold underline underline-offset-[3px]">
                {t.callout2}
              </span>
            </p>
          </div>

          <div className="mt-[26px] flex items-center gap-3.5">
            <div className="flex items-center gap-2 rounded-full border-[1.6px] border-wine bg-white px-5 py-[9px] shadow-[0_5px_14px_rgba(92,22,34,.10)]">
              <span className="text-xl">🤔</span>
              <span className="text-lg font-extrabold tracking-[.5px] text-wine-deep">
                HOW?
              </span>
              <span className="text-xl">👀</span>
            </div>
            <HowArrow className="text-gold" />
          </div>

          <div className="mt-[22px] flex gap-3.5">
            <a
              href="#sec-contacto"
              aria-label="Contacto"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-wine text-white transition-transform hover:-translate-y-[3px]"
            >
              <EmailIcon className="h-5 w-5" />
            </a>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-wine text-white transition-transform hover:-translate-y-[3px]"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>
            <a
              href={site.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-11 w-11 items-center justify-center rounded-full bg-wine text-white transition-transform hover:-translate-y-[3px]"
            >
              <TikTokIcon className="h-[19px] w-[19px]" />
            </a>
          </div>
        </div>

        <div className="relative flex items-end justify-center min-[900px]:min-h-[520px]">
          <div className="pointer-events-none absolute top-3.5 right-0.5 rotate-[8deg]">
            <svg width="180" height="90" viewBox="0 0 180 90">
              <defs>
                <path id="arcHandle" d="M6 74 Q92 6 176 56" fill="none" />
              </defs>
              <text
                fill="var(--color-wine)"
                fontFamily="var(--font-display)"
                fontStyle="italic"
                fontWeight="600"
                fontSize="21"
              >
                <textPath href="#arcHandle" startOffset="2%">
                  {site.handle}
                </textPath>
              </text>
            </svg>
          </div>
          <MediaSlot
            label="Foto de Karla (cutout PNG)"
            dashed
            src={brandImages.portraitHero}
            fit="contain"
            sizes="340px"
            priority
            className="relative h-[500px] w-[340px] max-w-full rounded-xl max-[600px]:h-[360px] max-[600px]:w-[250px]"
          />
        </div>
      </div>
    </section>
  );
}
