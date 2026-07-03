import Link from "next/link";
import { MediaSlot } from "@/components/media-slot";
import { PlayIcon } from "@/components/icons";
import { type Sector, type SectorItem, pets } from "@/lib/sectors";
import { petImages, photoImages, reelMedia } from "@/lib/media";

function ChromeBar() {
  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 z-30 flex h-[15px] items-center gap-[3px] bg-wine px-[7px]">
      <span className="h-[5px] w-[5px] rounded-full bg-white/85" />
      <span className="h-[5px] w-[5px] rounded-full bg-white/55" />
      <span className="h-[5px] w-[5px] rounded-full bg-white/55" />
      <span className="flex-1" />
      <span className="h-[5px] w-4 rounded-sm bg-white/50" />
    </div>
  );
}

function ReelCard({ item }: { item: Extract<SectorItem, { kind: "video" }> }) {
  const media = reelMedia[item.slotId];
  const href = media?.href;
  const card = (
    <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl border-[1.6px] border-wine/40 bg-[#d8d1c9] shadow-[0_12px_26px_rgba(92,22,34,.16)]">
      <ChromeBar />
      <MediaSlot
        label="Reel"
        src={media?.poster}
        fit="cover"
        sizes="200px"
        className="absolute inset-0 h-full w-full"
      />
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
        <div className="flex h-[54px] w-[54px] items-center justify-center rounded-full bg-[rgba(30,20,22,.55)]">
          <PlayIcon className="h-[22px] w-5 text-white" />
        </div>
      </div>
    </div>
  );
  return (
    <div className="flex flex-col items-center gap-[11px]">
      {href === undefined ? (
        card
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full transition-transform hover:-translate-y-0.5"
        >
          {card}
        </a>
      )}
      <p className="text-center text-sm leading-[1.35] text-wine">
        {item.label}
      </p>
    </div>
  );
}

function PhotoCard({ item }: { item: Extract<SectorItem, { kind: "photo" }> }) {
  return (
    <div className="flex flex-col items-center gap-[11px]">
      <div className="aspect-[3/4] w-full overflow-hidden rounded-[14px] border-[1.6px] border-wine/40 bg-[#d8d1c9] shadow-[0_12px_26px_rgba(92,22,34,.16)]">
        <MediaSlot
          label="Foto"
          src={photoImages[item.slotId]}
          fit="cover"
          sizes="200px"
          className="relative h-full w-full"
        />
      </div>
    </div>
  );
}

export function SectorView({ sector }: { sector: Sector }) {
  return (
    <section className="relative mx-auto max-w-[1180px] px-6 pt-10 pb-24">
      <Link
        href="/#sec-sectores"
        aria-label="Volver"
        className="absolute top-[34px] right-[26px] z-5 flex h-[52px] w-[52px] items-center justify-center rounded-full bg-wine text-[22px] text-white shadow-[0_8px_20px_rgba(92,22,34,.25)] transition-transform hover:scale-[1.07]"
      >
        🏠
      </Link>

      <div className="mb-2 text-center">
        <h1 className="font-display text-[32px] leading-none font-bold italic text-wine min-[600px]:text-[44px] min-[900px]:text-[64px]">
          <span className="align-middle font-sans text-3xl not-italic">
            {sector.pre}
          </span>{" "}
          {sector.title}{" "}
          <span className="align-middle font-sans text-3xl not-italic">
            {sector.post}
          </span>
        </h1>
      </div>

      <div className="mx-auto mt-11 grid max-w-[1040px] grid-cols-2 gap-x-[14px] gap-y-5 min-[600px]:grid-cols-[repeat(auto-fill,minmax(188px,1fr))] min-[600px]:gap-x-[22px] min-[600px]:gap-y-[30px]">
        {sector.items.map((item) =>
          item.kind === "video" ? (
            <ReelCard key={item.slotId} item={item} />
          ) : (
            <PhotoCard key={item.slotId} item={item} />
          ),
        )}
      </div>

      {sector.showPets === true ? (
        <div className="mt-16 flex flex-wrap items-end justify-center gap-[34px]">
          {pets.map((pet) => (
            <div key={pet.slotId} className="flex flex-col items-center gap-2">
              <span className="font-display text-xl italic text-wine">
                {pet.name}
              </span>
              <MediaSlot
                label={pet.name}
                src={petImages[pet.slotId]}
                fit="cover"
                sizes="110px"
                className="relative h-[110px] w-[110px] rounded-full border-2 border-wine"
              />
            </div>
          ))}
          <span className="self-center font-display text-2xl italic text-wine">
            my babies ♡
          </span>
        </div>
      ) : null}
    </section>
  );
}
