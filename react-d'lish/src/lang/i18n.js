import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Idiomas
import global_es from "./es/global.json"
import global_en from "./en/global.json"

i18n.use(LanguageDetector).use(initReactI18next).init({
    debug: true,
    fallbackLng: 'es',
    interpolation: {
        escapeValue: false,
    },
    resources: {
        es: { translation: global_es},
        en: { translation: global_en}
    }
});

export default i18n;