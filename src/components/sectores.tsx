import Link from "next/link";
import { MediaSlot } from "@/components/media-slot";
import { sectors } from "@/lib/sectors";
import { brandImages } from "@/lib/media";

type DockApp = {
  emoji: string;
  label: string;
  href: string;
  background: string;
  fontSize: string;
};

const dock: DockApp[] = [
  {
    emoji: "🧭",
    label: "about me",
    href: "#sec-inicio",
    background: "linear-gradient(160deg,#3aa0ff,#0a6ce0)",
    fontSize: "30px",
  },
  {
    emoji: "📞",
    label: "contacto.mov",
    href: "#sec-contacto",
    background: "linear-gradient(160deg,#5be36a,#2bb33d)",
    fontSize: "28px",
  },
  {
    emoji: "💬",
    label: "reviews.jpg",
    href: "#sec-contacto",
    background: "linear-gradient(160deg,#5be36a,#2bb33d)",
    fontSize: "28px",
  },
  {
    emoji: "🗂️",
    label: "material 1",
    href: "#sec-inicio",
    background: "#fff",
    fontSize: "26px",
  },
];

export function Sectores() {
  return (
    <section
      id="sec-sectores"
      className="mx-auto max-w-[1160px] scroll-mt-[74px] px-6 pt-[34px] pb-[60px]"
    >
      <div className="grid grid-cols-1 items-center gap-[30px] min-[900px]:grid-cols-2 min-[900px]:min-h-[600px]">
        <div className="hidden flex-col items-center justify-end min-[900px]:flex min-[900px]:min-h-[560px]">
          <div className="mb-1.5 -rotate-[4deg]">
            <svg width="330" height="120" viewBox="0 0 330 120">
              <defs>
                <path id="humanArc" d="M14 92 Q165 8 316 78" fill="none" />
              </defs>
              <text
                fill="var(--color-wine)"
                fontFamily="var(--font-display)"
                fontStyle="italic"
                fontWeight="600"
                fontSize="30"
              >
                <textPath href="#humanArc" startOffset="3%">
                  Let&apos;s make brands human!
                </textPath>
              </text>
            </svg>
          </div>
          <MediaSlot
            label="Foto de Karla (cutout PNG)"
            dashed
            src={brandImages.portraitSectores}
            fit="contain"
            sizes="340px"
            className="relative h-[440px] w-[340px] max-w-full rounded-xl"
          />
        </div>

        <div>
          <div className="mx-auto flex max-w-[400px] flex-col gap-[15px]">
            {sectors.map((s) => (
              <div
                key={s.id}
                className={`flex justify-center ${
                  s.tail === "right"
                    ? "min-[600px]:justify-end"
                    : "min-[600px]:justify-start"
                }`}
              >
                <Link
                  href={`/sector/${s.id}`}
                  className={`bubble ${
                    s.tail === "right" ? "bubble-r" : "bubble-l"
                  } w-full rounded-[22px] border-[1.6px] border-wine px-9 py-3.5 text-center text-[19px] font-semibold shadow-[0_4px_12px_rgba(92,22,34,.07)] min-[600px]:w-auto min-[600px]:text-left`}
                >
                  {s.bubble}
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-[46px] flex flex-wrap justify-center gap-[26px]">
            {dock.map((app) => (
              <div
                key={app.label}
                className="flex flex-col items-center gap-[7px]"
              >
                <a
                  href={app.href}
                  className="flex h-[62px] w-[62px] items-center justify-center rounded-2xl shadow-[0_8px_18px_rgba(10,60,120,.2)] transition-transform hover:-translate-y-1"
                  style={{ background: app.background, fontSize: app.fontSize }}
                >
                  {app.emoji}
                </a>
                <span className="text-xs font-semibold text-wine-deep">
                  {app.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
