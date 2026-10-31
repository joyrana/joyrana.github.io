# joyrana.in — source

Next.js (static export) + [Microsoft Fluent UI React v9](https://react.fluentui.dev/).
GitHub Pages serves the exported files from the repository root.

- Content: `content/site.ts` (all copy, links, projects, articles, videos)
- Page: `components/Home.tsx` · Snake game: `components/Snake.tsx`

```bash
cd web
npm install
npm run dev      # local preview at http://localhost:3000
npm run deploy   # build + copy the export to the repo root, then commit and open a PR
```
