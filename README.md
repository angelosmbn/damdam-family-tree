# Damdam Family Tree

Interactive family tree for **Resurreccion Nathalie Salinas**, covering:

- **Mother's side:** Malig–Bie and Salinas (Caylao) clans
- **Father's side:** Carlos (Dungo) and Tolentino–Ronquillo clans

Frontend only (React + Vite + Tailwind). No backend required.

## Local development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Deploy on Vercel

1. Push this repo to GitHub (or GitLab/Bitbucket).
2. In [Vercel](https://vercel.com), **Add New Project** and import the repo.
3. Framework preset: **Vite** (auto-detected).
4. Build command: `npm run build`
5. Output directory: `dist`
6. Deploy.

Or use the Vercel CLI:

```bash
npm i -g vercel
vercel
```

## Features

- Overview with both family lines
- Expandable/collapsible tree branches
- Search by name (jumps to the right tree)
- **You** highlighted on Malig–Bie branch 9.4 and Carlos branch 5.1
- Deceased members marked with †
- Scrollable tree canvas with pan on smaller screens

## Project structure

- `src/data/` — family tree data
- `src/components/` — tree UI (cards, branches, search)
- `src/App.tsx` — navigation and layout

To add or correct relatives, edit the files under `src/data/`.
