import Image from "next/image";
import { ImagePlaceholderIcon } from "@/components/icons";

type MediaSlotProps = {
  label: string;
  className?: string;
  dashed?: boolean;
  src?: string;
  fit?: "cover" | "contain";
  sizes?: string;
  priority?: boolean;
};

export function MediaSlot({
  label,
  className,
  dashed = false,
  src,
  fit = "cover",
  sizes = "400px",
  priority = false,
}: MediaSlotProps) {
  if (src !== undefined) {
    return (
      <div className={`overflow-hidden ${className ?? ""}`}>
        <Image
          src={src}
          alt={label}
          fill
          sizes={sizes}
          priority={priority}
          className={fit === "contain" ? "object-contain" : "object-cover"}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 bg-[#d8d1c9] text-center ${
        dashed === true ? "border-2 border-dashed border-wine/30" : ""
      } ${className ?? ""}`}
    >
      <ImagePlaceholderIcon className="h-7 w-7 text-wine/40" />
      <span className="px-3 text-xs leading-tight text-wine-deep/60">
        {label}
      </span>
    </div>
  );
}
