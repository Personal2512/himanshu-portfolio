# Himanshu Yadav — Frontend Developer Portfolio

A responsive React + Tailwind CSS portfolio built from the supplied resume, portrait and certificates.

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (normally http://localhost:5173).

## Production build

```bash
npm run build
npm run preview
```

## Stack
- React + Vite
- Tailwind CSS
- Framer Motion
- Lucide React icons

## Notes
- The hero portrait, certificates and resume are bundled locally in `/public`.
- Project cards use live-site preview images. JPNSBV uses an image served by the project website; other cards use a live screenshot preview service so the preview stays aligned with the current website. If a remote preview is blocked/offline, the UI automatically shows a branded fallback.
- Update content in `src/data/portfolio.js`.
