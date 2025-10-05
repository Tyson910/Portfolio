# Agent Guidelines

## Commands
- **Build**: `pnpm run build` (in astro-site/)
- **Dev**: `pnpm run dev` (in astro-site/)
- **Test**: `pnpm test` (in astro-site/) - Uses Vitest
- **Single test**: `pnpm test <filename>` (e.g., `pnpm test ts-helpers.test.ts`)

## Code Style
- **Framework**: Astro 5 with Vue 3 integration, TypeScript strict mode
- **Imports**: Use path aliases (`@components/*`, `@utils/*`, `@assets/*`, `@layouts/*`)
- **Testing**: Vitest with descriptive test names and expect messages
- **Types**: Strict TypeScript, Zod v4 for validation
- **Styling**: Tailwind CSS v4 with DaisyUI components
- **File naming**: kebab-case for components, PascalCase for Vue components
- **Error handling**: Use Zod schemas, return undefined for missing paths
- **Immutability**: Use structuredClone for deep copies, no mutations
- **Code comments**: Minimal, only for complex utility functions