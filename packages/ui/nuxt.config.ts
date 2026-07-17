// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from "@nuxt/kit";

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  modules: ["@nuxt/ui"],
  devtools: { enabled: true },
  css: [resolve("./app/assets/css/main.css")],
  compatibilityDate: "2025-07-15",
});
