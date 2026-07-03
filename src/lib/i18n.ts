export type Lang = "es" | "en";

export type Strings = {
  navInicio: string;
  navSectores: string;
  navContacto: string;
  role: string;
  age: string;
  callout1: string;
  callout2: string;
  contactTitle: string;
  fName: string;
  fEmail: string;
  fMsg: string;
  send: string;
  formNote: string;
  formOk: string;
  formError: string;
  notesTitle: string;
  checklist: string[];
  footerL: string;
};

export const translations: Record<Lang, Strings> = {
  es: {
    navInicio: "Inicio",
    navSectores: "Sectores",
    navContacto: "Contacto",
    role: "Creative & UGC Strategist · UGC Creator · Social Media Manager",
    age: "26 años · Barcelona",
    callout1: "Tu marca no necesita más contenido,",
    callout2: "necesita mejor contenido.",
    contactTitle: "Vale, ahora viene lo importante.",
    fName: "Nombre",
    fEmail: "Email",
    fMsg: "Cuéntame sobre tu marca, tu campaña o tu idea.",
    send: "Hablemos",
    formNote: "Te responderé personalmente. Nada de bots.",
    formOk: "¡Gracias! Te responderé personalmente muy pronto.",
    formError: "Algo ha fallado. Prueba de nuevo o escríbeme por email.",
    notesTitle: "si este año quieres:",
    checklist: [
      "posicionamiento real en redes",
      "vídeos que generen ventas",
      "dejar de publicar por publicar",
      "contenido que no parezca publicidad",
      "resultados medibles",
    ],
    footerL: "Términos y ayuda · Política de privacidad",
  },
  en: {
    navInicio: "Home",
    navSectores: "Sectors",
    navContacto: "Contact",
    role: "Creative & UGC Strategist · UGC Creator · Social Media Manager",
    age: "26 years old · Barcelona",
    callout1: "Your brand doesn't need more content —",
    callout2: "it needs better content.",
    contactTitle: "Okay — now the important part.",
    fName: "Name",
    fEmail: "Email",
    fMsg: "Tell me about your brand, your campaign or your idea.",
    send: "Let's talk",
    formNote: "I reply personally. No bots.",
    formOk: "Thanks! I'll get back to you personally very soon.",
    formError: "Something went wrong. Try again or email me directly.",
    notesTitle: "if this year you want:",
    checklist: [
      "real positioning on social",
      "videos that drive sales",
      "stop posting just to post",
      "content that doesn't feel like ads",
      "measurable results",
    ],
    footerL: "Terms & help · Privacy policy",
  },
};
