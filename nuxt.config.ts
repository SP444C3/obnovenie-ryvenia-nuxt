export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "nuxt-mongoose"],
  runtimeConfig: {
    MONGO_URI: process.env.MONGODB_URI,
  }
});
