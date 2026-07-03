"use client";

import { useLang } from "@/components/lang-provider";
import { site } from "@/lib/site";

export function Footer() {
  const { t } = useLang();

  return (
    <footer className="flex flex-wrap items-center justify-between gap-2.5 bg-wine-deep px-[34px] py-4 text-[13px] text-white/80">
      <span>{t.footerL}</span>
      <span>
        {site.name} · {site.city}
      </span>
    </footer>
  );
}
