// Registro de la media de Karla. Todos los archivos van en /public (la ruta
// empieza por "/", p. ej. "/media/brand/karla-hero.png"). Mientras una entrada
// no exista, la web muestra el placeholder correspondiente.

export type ReelMedia = { poster?: string; href?: string };

// Fotos cutout / decorativas del hero, sectores y contacto.
export const brandImages: {
  megaphone?: string;
  portraitHero?: string;
  portraitSectores?: string;
  portraitContacto?: string;
} = {
  // megaphone: "/media/brand/megafono.png",
  // portraitHero: "/media/brand/karla-hero.png",
  // portraitSectores: "/media/brand/karla-sectores.png",
  // portraitContacto: "/media/brand/karla-contacto.png",
};

// Gatos, por slotId (pet-zoro | pet-nami | pet-maki).
export const petImages: Record<string, string> = {
  // "pet-zoro": "/media/pets/zoro.png",
};

// Reels, por slotId (p. ej. slot-cabello-0). `poster` = miniatura en /public;
// `href` = enlace al reel en TikTok/Instagram (se abre al hacer clic).
export const reelMedia: Record<string, ReelMedia> = {
  // "slot-cabello-0": {
  //   poster: "/media/reels/cabello-0.jpg",
  //   href: "https://www.tiktok.com/@karlamolinatalks/video/...",
  // },
};

// Fotos del sector "Fotos", por slotId (p. ej. slot-fotos-0).
export const photoImages: Record<string, string> = {
  // "slot-fotos-0": "/media/fotos/0.jpg",
};
