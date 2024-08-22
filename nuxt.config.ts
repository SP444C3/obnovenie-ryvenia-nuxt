export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "nuxt-mongoose", "nuxt-primevue"],

  runtimeConfig: {
    MONGO_URI: process.env.MONGODB_URI,
    MANAGE_TOKEN: process.env.MANAGE_TOKEN,
    AUTH_SECRET: process.env.AUTH_SECRET,
  },
  devServer: {
    https: {
      key: 'localhost-key.pem',
      cert: 'localhost.pem'
    }
  },
  css: ["@/assets/css/main.css"],
  compatibilityDate: "2024-08-21",

});