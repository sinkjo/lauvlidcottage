# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server at http://localhost:8080
npm run build      # Production build
npm run lint       # ESLint
npm run preview    # Preview production build locally
```

No test suite is configured.

## Architecture

This is a static marketing/booking site for a Norwegian cottage rental (Lauvlid Cottage), built with **React + Vite + TypeScript + Tailwind + shadcn/ui**. It is deployed as a GitHub Pages SPA (CNAME: `public/CNAME`, SPA redirect via `public/404.html`).

**Routing** (`src/App.tsx`): React Router v6 with these pages:
- `/` — Index (landing)
- `/booking` — BookingPage
- `/gallery` — Gallery
- `/your-stay` — YourStay
- `/contact` — Contact
- `/de/ferienhaus-tysnes` — German SEO landing page

**Internationalisation**: `src/contexts/LanguageContext.tsx` provides a `useLanguage()` hook that exposes `{ t, language, setLanguage }`. All user-visible strings must come from the locale files (`src/locales/en.ts`, `src/locales/de.ts`). Language persists to `localStorage`. When adding new text, add keys to **both** locale files.

**UI components**: shadcn/ui components live in `src/components/ui/`. Custom page-level components (Navbar, Footer, HeroSection, BookingForm, etc.) are in `src/components/`. Path alias `@/` maps to `src/`.

**Theme**: `next-themes` for dark/light toggle. Tailwind config is in `tailwind.config.ts`.

**No backend**: The booking form (`src/components/BookingForm.tsx`) is front-end only — it does not submit to any API.
