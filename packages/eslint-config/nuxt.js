import { createConfigForNuxt } from "@nuxt/eslint-config/flat";
import { base } from "./base.js";

/**
 * Config for Nuxt apps and layers: Vue + Nuxt rules on top of the shared base.
 *
 * `stylistic` replaces Prettier — formatting is enforced as lint rules, so no
 * `eslint-config-prettier` here (it exists to turn these very rules off).
 */
export const nuxt = createConfigForNuxt({
  features: {
    stylistic: {
      quotes: "double",
      semi: true,
    },
  },
})
  .prepend(...base)
  .append({
    name: "local/vue-rules",
    files: ["**/*.vue"],
    rules: {
      "vue/block-order": [
        "error",
        {
          order: ["template", "script", "style"],
        },
      ],
    },
  });

export default nuxt;
