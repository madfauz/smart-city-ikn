import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationID from "./locales/id/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: translationEN,
    },
    id: {
      translation: translationID,
    },
  },
  lng: "id", // Bahasa default
  fallbackLng: "en", // Jika tidak ada terjemahan dalam bahasa yang dipilih
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
