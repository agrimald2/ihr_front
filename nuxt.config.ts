import { defineNuxtConfig } from "nuxt/config"

export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        { src: 'https://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js' },
        { src: 'https://js.openpay.pe/openpay.v1.min.js' },
        { src: 'https://js.openpay.pe/openpay-data.v1.min.js'},
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
})
