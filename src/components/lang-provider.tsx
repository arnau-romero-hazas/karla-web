"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { type Lang, type Strings, translations } from "@/lib/i18n";

type LangContextValue = {
  lang: Lang;
  toggleLang: () => void;
  t: Strings;
};

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "karla-lang";

const isLang = (value: string | null): value is Lang =>
  value === "es" || value === "en";

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("es");

  useEffect(() => {
    // Read persisted choice after mount so SSR renders the "es" default and
    // hydration stays consistent before switching to the stored language.
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLang(stored)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLang(stored);
    }
  }, []);

  const toggleLang = () => {
    setLang((prev) => {
      const next: Lang = prev === "es" ? "en" : "es";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  };

  return (
    <LangContext.Provider value={{ lang, toggleLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (ctx === null) {
    throw new Error("useLang must be used within LangProvider");
  }
  return ctx;
}
