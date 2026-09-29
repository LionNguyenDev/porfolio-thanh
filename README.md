# NextJS Boilerplate

A Next.js starter template for building web applications quickly, with data fetching, linting, commit conventions and Docker setup already in place.

## Tech stack

- [Next.js 15](https://nextjs.org/) (App Router, Turbopack in development) + React 19
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS 3](https://tailwindcss.com/) with `clsx` + `tailwind-merge` (`cn()` helper)
- [TanStack Query 5](https://tanstack.com/query) + [Axios](https://axios-http.com/) for data fetching
- [SVGR](https://react-svgr.com/) to import SVGs as React components
- [Biome](https://biomejs.dev/) for linting and formatting
- [Husky](https://typicode.github.io/husky/), [lint-staged](https://github.com/lint-staged/lint-staged) and [commitlint](https://commitlint.js.org/) for git hooks
- Docker + Nginx for deployment

## Getting started

### Requirements

- Node.js >= 20
- pnpm 10 (`corepack enable` picks up the version pinned in `package.json`)

> **Windows users:** set line endings to LF before cloning so they match Linux/macOS and the git hooks work:
>
> ```bash
> git config --global core.eol lf
> git config --global core.autocrlf input
> ```

### Installation

```bash
git init            # required for husky to install git hooks
pnpm install
cp .env.example .env
```

### Environment variables

| Variable              | Description                          | Default                 |
| --------------------- | ------------------------------------ | ----------------------- |
| `NEXT_PUBLIC_APP_URL` | Public URL of the app                | `http://localhost:3000` |
| `NEXT_PUBLIC_API_URL` | Base URL of the backend API (Axios)  | `http://localhost:3001` |

Do not include a trailing slash.

### Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. Start editing from `src/app/page.tsx`; the page reloads automatically.

## Scripts

| Command             | Description                              |
| ------------------- | ---------------------------------------- |
| `pnpm dev`          | Start the dev server with Turbopack      |
| `pnpm build`        | Build for production (standalone output) |
| `pnpm start`        | Start the production server              |
| `pnpm lint`         | Lint with Biome                          |
| `pnpm lint:fix`     | Lint and auto-fix                        |
| `pnpm format:check` | Check formatting                         |
| `pnpm format:fix`   | Format all files                         |
| `pnpm type-check`   | Type-check with `tsc --noEmit`           |

## Project structure

```
src/
├── api/          # Axios client and request/response interceptors
├── app/          # App Router: layout, pages, providers, error, robots, sitemap
├── assets/
│   ├── fonts/    # Local Geist fonts (loaded via next/font/local)
│   ├── svg/      # SVG files, registered in icons.tsx
│   └── icons.tsx # Icon components generated from SVGs
├── config/       # App config (env), site metadata, fonts
├── lib/          # Route constants and utilities (cn, ...)
└── types/        # Shared TypeScript types
docker/           # Dockerfile for the app and Nginx reverse proxy
```

### Site metadata

Update the site name, description and OG image in `src/config/site.ts`. The root layout reads SEO metadata from there. Also update `public/site.webmanifest` and the favicons in `public/`.

### SVG icons

SVG files imported from anywhere in `src` become React components:

```tsx
import Logo from '@/assets/svg/github.svg';      // React component
import logoUrl from '@/assets/svg/github.svg?url'; // file URL
```

To add an icon to the shared set, put the file in `src/assets/svg/` and register it in `src/assets/icons.tsx`.

## Git conventions

- **pre-commit:** lint-staged runs `biome lint --write` and `biome format --write` on staged files.
- **commit-msg:** commitlint enforces [Conventional Commits](https://www.conventionalcommits.org/). Allowed types: `feat`, `fix`, `docs`, `chore`, `style`, `refactor`, `ci`, `test`, `revert`, `perf`, `release`.

```bash
git commit -m "feat: add login page"
```

## CI

The GitHub Actions workflow in `.github/workflows/lint.yml` runs lint, type-check and a format check on pull requests to `main` and `dev`.

## Docker

```bash
cp .env.example .env
docker compose up --build
```

This builds the Next.js app (standalone output) and puts an Nginx reverse proxy in front of it at [http://localhost:8080](http://localhost:8080).

## Author

Made by Lưu Nguyễn Danh ([luund206@gmail.com](mailto:luund206@gmail.com))
