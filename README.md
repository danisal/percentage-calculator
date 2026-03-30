# Percentage Calculator

A simple, fast percentage calculator built with Svelte 5 and SvelteKit. Supports three calculation modes, dark/light theme, and works on mobile.

Inspired by [percentagecalculator.net](https://percentagecalculator.net/).

## Features

- **% of a number** — e.g. what is 20% of 250?
- **What percent?** — e.g. 50 is what percent of 200?
- **% change** — e.g. what is the percentage change from 100 to 150?
- Dark / light theme toggle, synced with system preference
- Responsive, mobile-friendly layout

## Stack

- [Svelte 5](https://svelte.dev) + [SvelteKit](https://kit.svelte.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- TypeScript
- Vitest

## Developing

Install dependencies:

```sh
pnpm install
```

Start the development server:

```sh
pnpm dev
```

## Testing

```sh
pnpm test
```

## Building

```sh
pnpm build
```

Preview the production build:

```sh
pnpm preview
```

## Contributing

Commits must follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>
```

Types: `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `test`, `perf`

