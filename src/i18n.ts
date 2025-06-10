import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

import { resources } from '@/labels'

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    preload: ['en'],
    fallbackLng: 'en',
    debug: true,
    resources: resources,
    defaultNS: 'translation',
  })

export default i18n
