// import i18n from "i18next";
// import { initReactI18next } from "react-i18next";
// import enTranslation from "../../public/locales/ar/translation.json";
// import arTranslation from "../../public/locales/ar/translation.json";

// i18n.use(initReactI18next).init({
//   resources: {
//     en: { translation: enTranslation },
//     ar: { translation: arTranslation },
//   },
//   lng: "en", // Default language
//   fallbackLng: "en",
//   interpolation: {
//     escapeValue: false,
//   },
// });

// export default i18n;
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../../public/locales/en/translation.json";
import arTranslation from "../../public/locales/ar/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslation },
    ar: { translation: arTranslation },
  },
  lng: "ar", // Default language
  fallbackLng: "en", // Fallback language if translation is missing
  interpolation: {
    escapeValue: false, // No need for escaping, React does it automatically
  },
  react: {
    useSuspense: false, // Disable suspense if you're not using it
  },
});

export default i18n;
