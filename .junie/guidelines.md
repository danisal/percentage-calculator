# Project Guidelines

> These guidelines mirror the instructions in `CLAUDE.md` at the root of the project. Keep both files in sync when updating project conventions.

## Git Commits

Always use [Conventional Commits](https://www.conventionalcommits.org/) format:

```
<type>(<scope>): <description>
```

**Types:** `feat`, `fix`, `chore`, `docs`, `style`, `refactor`, `test`, `perf`

**Examples:**
- `feat(theme): add dark/light mode toggle`
- `fix(calc): handle division by zero in percentage change`
- `chore(deps): update tailwindcss to v4`
- `style(footer): stack links vertically on mobile`

## Project Configuration

- **Language**: TypeScript
- **Package Manager**: pnpm
- **Framework**: Svelte 5 + SvelteKit
- **Styling**: Tailwind CSS v4
- **Testing**: Vitest
- **Linting/Formatting**: ESLint + Prettier

## Code Conventions

- Use Svelte 5 runes (`$state`, `$derived`, `$effect`, `$props`) — not legacy Svelte 4 APIs
- Use `pnpm` for all package management commands
- Follow existing dark/light theme patterns using Tailwind `dark:` variants
- Dark mode is class-based (`.dark` on `<html>`), driven by `prefers-color-scheme` with a manual toggle
