# xopolis-react

The xopol.is website as a real React app — a faithful port of the static site
(HeuriSight PR #274) with tasteful framer-motion animations and the real
Xopolis lockup.

## Stack
Vite + React 18 + TypeScript + React Router + framer-motion.

## Run
```
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
npm run preview    # serve the production build
```

## Structure
- `src/App.tsx` — router (12 routes), page transitions (AnimatePresence), scroll/hash handling
- `src/components/` — Nav, Footer, Sprite (Xopolis lockup), NodeField (hero SVG), EventStrip, Reveal
- `src/pages/` — one component per page + a scoped `<page>.css`
- `src/lib/animations.ts` — shared framer-motion variants (fadeUp, stagger, pageTransition)
- `public/assets`, `public/data` — images, logos, library.json; `public/_redirects`, `public/netlify.toml`
- `index.html` — loads the shared design system (`brand.css`/`contract.css`/`motion.css`) + fonts

## Notes
- The **home page** uses the redesigned `brand.css` system. Every **other page** is
  self-contained (its own tokens/DM Sans), scoped under a `.p-<page>` wrapper so styles
  never leak across routes.
- Animations honor `prefers-reduced-motion` globally (`<MotionConfig reducedMotion="user">`).
- The research construct-library (`.clib`) renders its static fallback (a link into the
  xResearch library); the JSON-driven interactive version is a follow-up.
- Netlify SPA routing needs a `/* → /index.html 200` rule (see `public/_redirects`).
