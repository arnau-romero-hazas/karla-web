"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLang } from "@/components/lang-provider";

export function Nav() {
  const { lang, toggleLang, t } = useLang();
  const pathname = usePathname();
  const router = useRouter();

  const goTo = (anchor: string) => {
    if (pathname !== "/") {
      router.push(`/#${anchor}`);
      return;
    }
    document.getElementById(anchor)?.scrollIntoView();
  };

  return (
    <nav
      className="sticky top-0 z-60 flex items-center justify-between bg-white px-[18px] py-3 md:px-[34px] md:py-3.5"
      style={{
        boxShadow:
          "0 1px 0 rgba(92,22,34,.10), 0 6px 20px rgba(92,22,34,.06)",
      }}
    >
      <button
        onClick={() => goTo("sec-inicio")}
        className="hidden font-display text-[22px] font-semibold italic tracking-[.2px] text-wine sm:block"
      >
        Karla Molina
      </button>

      <div className="flex items-center gap-4 sm:gap-[26px]">
        <button
          onClick={() => goTo("sec-inicio")}
          className="text-sm font-bold text-wine-deep underline-offset-[5px] hover:underline"
        >
          {t.navInicio}
        </button>
        <button
          onClick={() => goTo("sec-sectores")}
          className="text-sm font-bold text-wine-deep underline-offset-[5px] hover:underline"
        >
          {t.navSectores}
        </button>
        <button
          onClick={() => goTo("sec-contacto")}
          className="text-sm font-bold text-wine-deep underline-offset-[5px] hover:underline"
        >
          {t.navContacto}
        </button>
        <button
          onClick={toggleLang}
          className="rounded-full bg-wine px-3 py-1.5 text-xs font-bold tracking-[.6px] text-white hover:brightness-110"
        >
          {lang === "es" ? "EN" : "ES"}
        </button>
      </div>
    </nav>
  );
}
