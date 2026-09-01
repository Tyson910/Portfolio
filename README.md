# Portfolio

This repository contains the original [Astro](https://astro.build/) portfolio and a
hybrid-rendered migration built with [Nuxt](https://nuxt.com/),
[Nuxt UI](https://ui.nuxt.com/), and [Nuxt Content](https://content.nuxt.com/).

## Project Structure

The projects are located in sibling directories:

- `astro-site/` contains the original Astro application.
- `nuxt-app/` contains the Nuxt migration.

## Setup

This project uses `pnpm` as the package manager. Make sure to install the dependencies:

```bash
# Navigate to the project directory
cd nuxt-app

# Install dependencies
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# pnpm
pnpm dev
```

This command will start a local development server and you can view your website at `http://localhost:3000`.

## Production

Build the application for production:

```bash
# pnpm
pnpm build
```

This command builds a Cloudflare Worker. Blog and snippet routes are prerendered into
static assets, while the homepage is rendered by the Worker so its GitHub project data
can refresh without a deployment. Routes still use Nuxt's `noScripts` rule and do not
ship the Nuxt client runtime.

Locally preview production build:

```bash
# pnpm
pnpm preview
```

This command will start a local server to preview the production build.

## Cloudflare Workers

The Nuxt site deploys as a hybrid Cloudflare Worker with prerendered static assets. In
Cloudflare Workers Builds, use these settings:

- Root directory: `/nuxt-app`
- Build command: `pnpm build`
- Deploy command: `pnpm deploy:cf`
- Non-production deploy command: `pnpm deploy:preview:cf`

Configure `NUXT_GITHUB_TOKEN` as a Worker secret. The homepage fetches repositories tagged
with the `portfolio-project` topic on each request. Featured blog and snippet metadata
is embedded at build time, so the Worker does not require D1 or KV. For local previews,
put the token in `nuxt-app/.dev.vars`.

Non-production builds require `preview_urls = true` before their preview links can be
opened.
