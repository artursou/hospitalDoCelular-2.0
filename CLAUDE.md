# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

All commands must be run from the `hc/` directory.

```bash
npm start          # Dev server at http://localhost:3000
npm run build      # Production build
npm test           # Run tests in watch mode
npm test -- --watchAll=false  # Run tests once (CI mode)
```

## Architecture

This is a static landing page for "Hospital do Celular" — a smartphone repair service. It is a React 19 + TypeScript SPA built with Create React App. There is no routing, no global state management, and no data fetching; all content is hardcoded.

**Styling** is done exclusively with styled-components (`styles.ts` per component). Avoid adding plain CSS files. The primary brand color is `#FC4664`.

**Component structure** follows a folder-per-component pattern:
- `index.tsx` — component logic and JSX
- `styles.ts` — all styled-components for that component
- `types.ts` — TypeScript interfaces (only when the component has props)

New components should follow this same pattern under `src/components/`.

**Public assets** (SVGs, images) go in `hc/public/` and are referenced via root-relative paths (e.g., `/banner.svg`). Never use inline SVG in JSX — always create a `.svg` file in `public/` and reference it with `<img src="/file.svg" />`.
