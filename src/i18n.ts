import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

export const i18nLanguages = [
  // 'ar',
  'da',
  'en',
  'en-GB',
  'en-US',
  'es',
  'fr',
  'fr-FR',
  'ja',
  'ms',
  'nb',
  'sv',
  // 'ug',
  'yue',
  'zh-CN',
  'zh-HK',
  'zh-TW',
];

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: 'locales/{{lng}}/{{ns}}.json',
    },
    fallbackLng: {
      default: ['en'],
    },
    ns: ['main', 'api', 'about', 'model'],
    defaultNS: 'main',
  });

export default i18n;
