"use client";

import { useState } from "react";
import { useLang } from "@/components/lang-provider";
import { MediaSlot } from "@/components/media-slot";
import {
  CheckIcon,
  DotsIcon,
  EmailIcon,
  InstagramIcon,
  LinkedInIcon,
  ShareIcon,
  TikTokIcon,
  WebIcon,
} from "@/components/icons";
import { site } from "@/lib/site";
import { brandImages } from "@/lib/media";

type Status = "idle" | "sending" | "ok" | "error";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contacto() {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const canSubmit =
    name.trim() !== "" && emailPattern.test(email) && status !== "sending";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (canSubmit === false) {
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (res.ok === false) {
        setStatus("error");
        return;
      }
      setStatus("ok");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="sec-contacto"
      className="mx-auto max-w-[1080px] scroll-mt-[74px] px-6 pt-[52px] pb-6"
    >
      <div className="grid grid-cols-1 items-start gap-11 min-[900px]:grid-cols-2">
        <div>
          <form
            onSubmit={handleSubmit}
            className="rounded-[14px] border-[1.5px] border-wine bg-cream px-[30px] pt-[30px] pb-[26px] shadow-[0_12px_30px_rgba(92,22,34,.10)]"
          >
            <h2 className="mb-[22px] text-[27px] leading-tight font-bold text-wine">
              {t.contactTitle}
            </h2>

            <label className="mb-1.5 block text-sm font-semibold text-wine-deep">
              {t.fName}
            </label>
            <input
              className="fld mb-[18px]"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label className="mb-1.5 block text-sm font-semibold text-wine-deep">
              {t.fEmail}
            </label>
            <input
              className="fld mb-[18px]"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label className="mb-1.5 block text-sm font-semibold text-wine-deep">
              {t.fMsg}
            </label>
            <textarea
              className="fld mb-[22px] resize-y"
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button
              type="submit"
              disabled={canSubmit === false}
              className="w-full rounded-full bg-pink py-3.5 text-[17px] font-bold text-wine-deep transition hover:brightness-[1.04] active:scale-[.985] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? "…" : t.send}
            </button>

            {status === "ok" ? (
              <p className="mt-3 text-center text-[13px] font-semibold text-wine">
                {t.formOk}
              </p>
            ) : status === "error" ? (
              <p className="mt-3 text-center text-[13px] font-semibold text-wine">
                {t.formError}
              </p>
            ) : (
              <p className="mt-3 text-center text-[11px] text-[#a99a94]">
                {t.formNote}
              </p>
            )}
          </form>

          <div className="mt-[26px] flex gap-3.5">
            <a
              href={`mailto:${site.email}`}
              aria-label="Email"
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-wine text-white transition-transform hover:-translate-y-[3px]"
            >
              <EmailIcon className="h-[21px] w-[21px]" />
            </a>
            <a
              href={site.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-wine text-white transition-transform hover:-translate-y-[3px]"
            >
              <InstagramIcon className="h-[21px] w-[21px]" />
            </a>
            <a
              href={site.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-wine text-white transition-transform hover:-translate-y-[3px]"
            >
              <TikTokIcon className="h-5 w-5" />
            </a>
            <a
              href={site.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-wine text-white transition-transform hover:-translate-y-[3px]"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href={site.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Portfolio"
              className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-wine text-white transition-transform hover:-translate-y-[3px]"
            >
              <WebIcon className="h-[21px] w-[21px]" />
            </a>
          </div>
          <p className="mt-4 text-[15px] text-wine">{site.email}</p>
        </div>

        <div className="relative flex flex-col items-center">
          <MediaSlot
            label="Foto de Karla (cutout PNG)"
            dashed
            src={brandImages.portraitContacto}
            fit="contain"
            sizes="300px"
            className="relative h-[380px] w-[300px] max-w-full rounded-xl"
          />
          <div className="mt-[-10px] w-full max-w-[400px] rounded-[18px] bg-cream px-5 pt-[18px] pb-[22px] shadow-[0_14px_34px_rgba(92,22,34,.12)]">
            <div className="mb-3.5 flex items-center justify-between">
              <span className="text-[15px] font-semibold text-gold">
                ‹ Notes
              </span>
              <div className="flex gap-3 text-gold">
                <ShareIcon className="h-[18px] w-[18px]" />
                <DotsIcon className="h-[18px] w-[18px]" />
              </div>
            </div>
            <p className="mb-3.5 inline-block rounded-[3px] bg-gold/50 px-1.5 py-0.5 text-base font-bold text-ink">
              {t.notesTitle}
            </p>
            <div className="flex flex-col gap-[11px]">
              {t.checklist.map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <span className="flex h-5 w-5 flex-none items-center justify-center rounded-full bg-gold">
                    <CheckIcon className="h-3 w-3 text-white" />
                  </span>
                  <span className="text-[15px] text-ink">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
