import Aura from "@primevue/themes/aura";
import { definePreset } from "@primevue/themes";

const MyPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "#ffffff",
      100: "#ffffff",
      200: "#ffffff",
      300: "#ffffff",
      400: "#ffffff",
      500: "#ffffff",
      600: "#ffffff",
      700: "#ffffff",
      800: "#ffffff",
      900: "#ffffff",
      950: "#ffffff",
    },
}})

export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-mongoose",
    "@primevue/nuxt-module",
    "@nuxt/icon"
  ],
  runtimeConfig: {
    MONGO_URI: process.env.MONGODB_URI,
    MANAGE_TOKEN: process.env.MANAGE_TOKEN,
    AUTH_SECRET: process.env.AUTH_SECRET,
    public: {
      BASE_URL: process.env.BASE_URL
    }
  },
  devServer: {
    https: {
      key: "localhost-key.pem",
      cert: "localhost.pem",
    },
  },
  css: ["@/assets/css/main.css"],
  compatibilityDate: "2024-08-21",
  primevue: {
    options: {
      theme: {
        preset: MyPreset,
        options: {
          cssLayer: {
            name: "primevue",
            order: "tailwind-base, primevue, tailwind-utilities",
          },
        },
      },
    },
  },
});