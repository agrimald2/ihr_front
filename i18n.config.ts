import messages from '~/lang/en-US'
export default defineI18nConfig(() => ({
  legacy: false,
  locales: [
    {
      code: 'en',
      file: 'en-US.json',
    },
    {
      code: 'es',
      file: 'es-ES.json',
    },
    {
      code: 'fr',
      file: 'fr-FR.json',
    },
  ],
  messages: {
    en: messages,
  },
  lazy: true,
  defaultLocale: 'en',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
    redirectOn: 'root',
  },
}))
