import i18n from "i18next";
import {initReactI18next} from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import english from './translations/english.json'
import russian from './translations/russian.json';

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    resources: {
        en: {
            translation: english
        },
        ru: {
            translation: russian
        }
    },
    fallbackLng: "ru",
    lng: "ru",
});

export default i18n;