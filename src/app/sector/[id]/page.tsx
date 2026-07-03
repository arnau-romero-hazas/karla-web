import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectorView } from "@/components/sector-view";
import { getSector, sectors } from "@/lib/sectors";

export function generateStaticParams(): { id: string }[] {
  return sectors.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const sector = getSector(id);
  if (sector === undefined) {
    return { title: "Karla Molina" };
  }
  return { title: `${sector.title} · Karla Molina` };
}

export default async function SectorPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const sector = getSector(id);
  if (sector === undefined) {
    notFound();
  }
  return (
    <main>
      <SectorView sector={sector} />
    </main>
  );
}
