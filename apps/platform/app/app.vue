<template>
  <div>
    <!-- Hero -->
    <section class="relative overflow-hidden border-b border-default">
      <div class="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />

      <UContainer class="relative py-24">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="text-5xl font-bold tracking-tight">
            Nuxt Turbo Monorepo
          </h1>

          <div class="mt-8 flex flex-wrap justify-center gap-3">
            <UBadge
              color="primary"
              variant="soft"
              size="lg"
              as="a"
              href="https://tailwindcss.com"
              target="_blank"
              icon="vscode-icons:file-type-tailwind"
            >
              Tailwind CSS
            </UBadge>

            <UBadge
              color="secondary"
              variant="soft"
              size="lg"
              as="a"
              href="https://ui.nuxt.com"
              target="_blank"
              icon="vscode-icons:file-type-nuxt"
            >
              Nuxt UI
            </UBadge>

            <UBadge
              color="success"
              variant="soft"
              size="lg"
              as="a"
              href="https://eslint.org"
              target="_blank"
              icon="vscode-icons:file-type-eslint"
            >
              ESLint
            </UBadge>

            <UBadge
              color="info"
              variant="soft"
              size="lg"
              as="a"
              href="https://www.typescriptlang.org"
              target="_blank"
              icon="vscode-icons:file-type-typescript"
            >
              TypeScript
            </UBadge>

            <UBadge
              color="warning"
              variant="soft"
              size="lg"
              as="a"
              href="https://turbo.build"
              target="_blank"
              icon="vscode-icons:file-type-turbo"
            >
              Turborepo
            </UBadge>
          </div>

          <div class="mt-8 flex justify-center gap-4">
            <UButton
              icon="i-lucide-play"
              size="lg"
              href="#quick-start"
            >
              Get Started
            </UButton>

            <UButton
              color="neutral"
              variant="soft"
              size="lg"
              href="#structure"
            >
              View Structure
            </UButton>
          </div>
        </div>
      </UContainer>
    </section>

    <UContainer class="space-y-16 py-16">
      <UAlert
        color="info"
        variant="soft"
        title="Requirements"
        description="Node.js 20+ and pnpm 9.15.5+"
        icon="i-lucide-info"
      />

      <!-- Quick Start -->
      <section id="quick-start">
        <UBadge
          color="primary"
          variant="soft"
        >
          Quick Start
        </UBadge>

        <h2 class="mt-3 text-3xl font-bold">
          Get running in under a minute
        </h2>

        <UCard class="mt-6">
          <pre class="overflow-x-auto rounded-lg bg-elevated p-4 text-sm leading-6"><code># Install dependencies
pnpm install

# Start dev server
pnpm dev:platform

# Build for production
pnpm build</code></pre>
        </UCard>
      </section>

      <USeparator />

      <!-- Structure -->
      <section id="structure">
        <UBadge
          color="secondary"
          variant="soft"
        >
          Structure
        </UBadge>

        <h2 class="mt-3 text-3xl font-bold">
          What's Inside
        </h2>

        <div class="mt-6 grid gap-6 md:grid-cols-3">
          <UCard>
            <template #header>
              <strong>
                apps/platform
              </strong>
            </template>

            <ul class="space-y-2 text-sm text-muted">
              <li>Nuxt 4 application</li>
              <li>Extends @repo/ui</li>
              <li>Production deployment</li>
            </ul>
          </UCard>

          <UCard>
            <template #header>
              <strong>
                packages/ui
              </strong>
            </template>

            <ul class="space-y-2 text-sm text-muted">
              <li>Nuxt Layer</li>
              <li>Nuxt UI module</li>
              <li>Tailwind theme</li>
              <li>Shared components</li>
            </ul>
          </UCard>

          <UCard>
            <template #header>
              <strong>
                packages/eslint-config
              </strong>
            </template>

            <ul class="space-y-2 text-sm text-muted">
              <li>Flat config</li>
              <li>Nuxt rules</li>
              <li>TypeScript rules</li>
              <li>No Prettier</li>
            </ul>
          </UCard>
        </div>
      </section>

      <USeparator />

      <!-- Scripts -->
      <section>
        <UBadge
          color="success"
          variant="soft"
        >
          Scripts
        </UBadge>

        <h2 class="mt-3 text-3xl font-bold">
          Common Scripts
        </h2>

        <div class="mt-6 grid gap-6 md:grid-cols-2">
          <UCard>
            <template #header>
              <strong>
                Development
              </strong>
            </template>

            <pre class="overflow-x-auto rounded-lg bg-elevated p-4 text-sm leading-6"><code>pnpm dev
pnpm dev:platform
pnpm dev:ui</code></pre>
          </UCard>

          <UCard>
            <template #header>
              <strong>
                Quality
              </strong>
            </template>

            <pre class="overflow-x-auto rounded-lg bg-elevated p-4 text-sm leading-6"><code>pnpm lint
pnpm typecheck
pnpm build</code></pre>
          </UCard>
        </div>
      </section>

      <USeparator />

      <!-- Dependencies -->
      <section>
        <UBadge
          color="warning"
          variant="soft"
        >
          Dependencies
        </UBadge>

        <h2 class="mt-3 text-3xl font-bold">
          Workspace-aware installs
        </h2>

        <UCard class="mt-6">
          <pre class="overflow-x-auto rounded-lg bg-elevated p-4 text-sm leading-6"><code># Platform app
pnpm add zod --filter platform

# UI layer
pnpm add -D vitest --filter @repo/ui

# Root tooling
pnpm add -Dw turbo</code></pre>
        </UCard>
      </section>

      <USeparator />

      <!-- UI Layer -->
      <section>
        <UBadge
          color="primary"
          variant="soft"
        >
          Shared UI Layer
        </UBadge>

        <h2 class="mt-3 text-3xl font-bold">
          Components from @repo/ui
        </h2>

        <p class="mt-2 text-muted">
          Components are auto-imported from the Nuxt layer.
          No manual imports required.
        </p>

        <UCard class="mt-6">
          <div class="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 class="text-xl font-semibold">
                MyButton.vue
              </h3>

              <p class="mt-4 text-sm text-muted">
                Source:
              </p>

              <code class="mt-2 inline-block rounded bg-elevated px-3 py-2 text-sm">
                packages/ui/app/components/MyButton.vue
              </code>

              <p class="mt-4 text-sm text-muted">
                Available automatically in every app
                extending <code>@repo/ui</code>.
              </p>
            </div>

            <div class="flex min-h-40 items-center justify-center rounded-xl border border-dashed border-default">
              <MyButton>
                Layer Button
              </MyButton>
            </div>
          </div>
        </UCard>
      </section>

      <!-- Notes -->
      <section>
        <UCard>
          <template #header>
            <strong>
              Important Notes
            </strong>
          </template>

          <div class="space-y-3 text-sm">
            <p>
              Formatting is enforced by ESLint stylistic rules.
            </p>

            <p>
              Do not install Prettier or eslint-config-prettier.
            </p>

            <p>
              Turbo automatically discovers packages from pnpm-workspace.yaml.
            </p>

            <p>
              Shared components belong in packages/ui/app/components.
            </p>
          </div>
        </UCard>
      </section>
    </UContainer>
  </div>
</template>
