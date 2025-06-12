import i18n from 'i18next'
import Backend from 'i18next-http-backend'
import { initReactI18next } from 'react-i18next'

import { resources } from '@/labels'

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    preload: ['en'],
    fallbackLng: 'en',
    lng: 'en',
    supportedLngs: ['en', 'pl', 'de'],
    debug: process.env.NODE_ENV === 'development',
    resources: resources,
    defaultNS: 'translation',
    react: {
      useSuspense: true,
    },
  })

export default i18n
