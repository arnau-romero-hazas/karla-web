export type VideoItem = { kind: "video"; label: string; slotId: string };
export type PhotoItem = { kind: "photo"; slotId: string };
export type SectorItem = VideoItem | PhotoItem;

export type Pet = { name: string; slotId: string };

export type Sector = {
  id: string;
  bubble: string;
  title: string;
  pre: string;
  post: string;
  tail: "left" | "right";
  showPets: boolean;
  items: SectorItem[];
};

const video = (labels: string[], id: string): VideoItem[] =>
  labels.map((label, i) => ({
    kind: "video",
    label,
    slotId: `slot-${id}-${i}`,
  }));

const photo = (count: number, id: string): PhotoItem[] =>
  Array.from({ length: count }, (_, i) => ({
    kind: "photo",
    slotId: `slot-${id}-${i}`,
  }));

export const pets: Pet[] = [
  { name: "Zoro", slotId: "pet-zoro" },
  { name: "Nami", slotId: "pet-nami" },
  { name: "Maki", slotId: "pet-maki" },
];

export const sectors: Sector[] = [
  {
    id: "belleza",
    bubble: "Belleza",
    title: "Belleza",
    pre: "💄",
    post: "✨",
    tail: "right",
    showPets: false,
    items: video(
      [
        "Talking to camera",
        "Voiceover / Review",
        "Talking to camera / Review",
        "GRWM / Tutorial",
      ],
      "belleza",
    ),
  },
  {
    id: "cabello",
    bubble: "Cabello",
    title: "Cabello",
    pre: "💇‍♀️",
    post: "💖",
    tail: "right",
    showPets: false,
    items: video(
      [
        "Talking to camera",
        "Voiceover / Testimonial",
        "Talking to camera / Problem - Solution",
        "Talking to camera",
        "Talking to camera / Review",
      ],
      "cabello",
    ),
  },
  {
    id: "food",
    bubble: "Food",
    title: "Food",
    pre: "🍒",
    post: "🍕",
    tail: "right",
    showPets: false,
    items: video(
      [
        "Voiceover / Review",
        "Voiceover / Review",
        "Voiceover / Review",
        "Food Event Recap",
      ],
      "food",
    ),
  },
  {
    id: "servicios",
    bubble: "Servicios/Tech",
    title: "Servicios / Tech",
    pre: "⭐",
    post: "🎁",
    tail: "right",
    showPets: false,
    items: video(
      [
        "Talking to camera / Voiceover",
        "Talking to camera / Voiceover",
        "Talking to camera / Green Screen",
        "Talking to camera / Green Screen",
        "Street Interview",
        "Using the product",
        "Screen Recording",
        "Talking to camera",
      ],
      "servicios",
    ),
  },
  {
    id: "hogar",
    bubble: "Hogar/Mascotas",
    title: "Mascotas / Hogar",
    pre: "🐱",
    post: "🌸",
    tail: "left",
    showPets: true,
    items: video(
      [
        "Talking to camera / Using the product",
        "Talking to camera / Green Screen",
        "Talking to camera / Review",
      ],
      "hogar",
    ),
  },
  {
    id: "catalan",
    bubble: "Catalán",
    title: "Català",
    pre: "🎗️",
    post: "✨",
    tail: "right",
    showPets: false,
    items: video(
      [
        "Talking to camera (CAT)",
        "Voiceover / Review (CAT)",
        "Testimonial (CAT)",
      ],
      "catalan",
    ),
  },
  {
    id: "otros",
    bubble: "Otros",
    title: "Otros",
    pre: "💫",
    post: "🎬",
    tail: "left",
    showPets: false,
    items: video(
      ["Skit / Trend", "Voiceover / Review", "Talking to camera", "Event Recap"],
      "otros",
    ),
  },
  {
    id: "fotos",
    bubble: "Fotos",
    title: "Fotos",
    pre: "📸",
    post: "🤍",
    tail: "left",
    showPets: false,
    items: photo(6, "fotos"),
  },
];

export const getSector = (id: string): Sector | undefined =>
  sectors.find((s) => s.id === id);
