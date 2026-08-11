"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { translations, type Language } from "@/lib/i18n";

interface I18nContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggle: () => void;
  t: (typeof translations)["zh"];
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  // Default = "en" (SSR / crawler / first client render), matching the overseas
  // English audience. localStorage / browser language are read after mount.
  const [lang, setLangState] = useState<Language>("en");

  useEffect(() => {
    const stored =
      typeof window !== "undefined"
        ? (localStorage.getItem("lang") as Language | null)
        : null;
    if (stored === "zh" || stored === "en") {
      setLangState(stored);
      document.documentElement.lang = stored === "zh" ? "zh-CN" : "en";
      return;
    }
    // No saved preference → Chinese browsers get zh, everyone else keeps en.
    const browser =
      typeof navigator !== "undefined" ? navigator.language.toLowerCase() : "";
    if (browser.startsWith("zh")) {
      setLangState("zh");
      document.documentElement.lang = "zh-CN";
    }
  }, []);

  const setLang = (next: Language) => {
    setLangState(next);
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", next);
      document.documentElement.lang = next === "zh" ? "zh-CN" : "en";
    }
  };

  const toggle = useCallback(
    () => setLang(lang === "zh" ? "en" : "zh"),
    [lang]
  );

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      setLang,
      toggle,
      t: translations[lang],
    }),
    [lang, toggle]
  );

  return (
    <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}
