# Nuxt Turbo Monorepo

A monorepo for Nuxt applications. All dependencies in one place, building and testing via Turbo and pnpm workspaces.

<img width="1698" height="348" alt="Screenshot 2026-07-17 at 16 39 18" src="https://github.com/user-attachments/assets/623080bd-b427-4a5c-ba57-cba96719c616" />

## Quick Start

```bash
# Install dependencies (Node.js 20+, pnpm 9.15.5+)
pnpm install

# Start dev server on http://localhost:3000
pnpm dev:platform

# Build for production
pnpm build
```

## What's Inside

### `apps/platform`
The deployable Nuxt 4 app. Nearly all configuration is inherited from the ui layer.

### `packages/ui`
A Nuxt layer (not a component library). Contains:
- `@nuxt/ui` module
- Tailwind theme configuration
- Auto-imported shared components
- Everything the app extends via `extends: ["@repo/ui"]`

### `packages/eslint-config`
ESLint flat configs with two presets:
- `/base` — JavaScript + TypeScript + Turbo rules
- `/nuxt` — Base + Vue and Nuxt rules + stylistic formatting

No Prettier here. Formatting is enforced as lint rules.

## Scripts

Run from the repo root:

| Command | What it does |
|---------|-------------|
| `pnpm dev` | Start all dev servers (uncached, persistent) |
| `pnpm dev:platform` | Start only the platform app |
| `pnpm dev:ui` | Start ui layer in isolation for component work |
| `pnpm build` | Build all packages (dependencies build first) |
| `pnpm lint` | Lint all packages |
| `pnpm typecheck` | Typecheck all packages |

**Turbo tips:**
- Build output (.nuxt, .output) is cached
- Pass tool flags with `--`, e.g. `pnpm turbo lint -- --fix`

## Adding Things

### Add a dependency
Always target a specific workspace, not the root:

```bash
# For the platform app
pnpm add zod --filter platform

# For ui layer (scoped packages use full name)
pnpm add -D vitest --filter @repo/ui

# For root-only tooling
pnpm add -Dw turbo
```

Filters use the `name` field from `package.json`, not the directory:
- `apps/platform` → `platform`
- `packages/ui` → `@repo/ui`
- `packages/eslint-config` → `@repo/eslint-config`

### Add a shared component
Just drop a `.vue` file into `packages/ui/app/components/`. It auto-imports everywhere the layer is extended.

```
packages/ui/app/components/MyButton.vue
```

Restart dev server if a new file isn't picked up.

### Add a new app
Create `apps/<name>/` with:

```json
{
  "name": "<name>",
  "private": true,
  "dependencies": {
    "@repo/ui": "workspace:*",
    "@repo/eslint-config": "workspace:*"
  }
}
```

Then:
```ts
// nuxt.config.ts
export default defineNuxtConfig({
  extends: ["@repo/ui"],
})
```

And:
```js
// eslint.config.mjs
import { nuxt } from "@repo/eslint-config"
export default nuxt()
```

Run `pnpm install` from the root. Turbo auto-discovers workspaces.

### Add a shared package
Same structure under `packages/`, scoped as `@repo/<name>`:

```json
{
  "name": "@repo/<name>",
  "private": true,
  "exports": {
    ".": "./dist/index.js"
  },
  "scripts": {
    "build": "..."
  }
}
```

If it needs building before consumers use it, add a build script. Turbo's `dependsOn: ["^build"]` ensures correct order.

## Important Notes

- **Formatting:** Enforced via ESLint rules. No Prettier. Do not add `eslint-config-prettier` — it disables the stylistic rules this setup relies on.
- **Workspace discovery:** pnpm reads `pnpm-workspace.yaml` and auto-detects `apps/*` and `packages/*`. Just add a new directory with a valid `package.json`.
- **Version pinning:** Node.js and pnpm versions are pinned in `package.json` → `packageManager` field. `corepack enable` picks it up automatically.

## Deployment

```bash
# Build
pnpm build

# Run the server
node apps/platform/.output/server/index.mjs

# Or static site
nuxt generate
```
