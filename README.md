# focusflow

focusflow is a small React app scaffolded with Vite. It helps you manage quick tasks/focus sessions with a lightweight UI and a simple local store.

This repository uses React + Vite and includes a minimal component structure and a small state store (see `src/components/TaskList.jsx` and `src/store/useTaskStore.js`).

## Quick start

Prerequisites:

- Node.js 16+ (recommended)
- npm or yarn

Install dependencies:

```bash
npm install
# or
# yarn
```

Run the dev server (hot reload):

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## What you'll find here

- `index.html` — Vite entry
- `src/main.jsx` — React entry (mounts `<App />`)
- `src/App.jsx` — top-level app component
- `src/components/TaskList.jsx` — task list UI and interactions
- `src/store/useTaskStore.js` — simple task store (likely using Zustand or a custom hook)
- `src/assets/` — images/static assets
- `public/` — static files served as-is

The app is intentionally small and focused. If you need to extend it, add tests, or add persistence (localStorage / backend sync) those are natural next steps.

## Development notes

- The project is configured with Vite; scripts are defined in `package.json` (dev, build, preview, lint, etc.).
- Styling is in `src/index.css` (or alongside components) depending on how you prefer to structure CSS.
- The task store is implemented in `src/store/useTaskStore.js` — check there for how tasks are added/removed and how state is persisted (if applicable).

