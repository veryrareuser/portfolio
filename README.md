# Carlos. — Portfolio

Personal portfolio of **Carlos**, an Information Systems undergraduate (S1 Sistem Informasi, Universitas Pelita Harapan) based in Tangerang, Indonesia. A single-page, brutalist site that lists selected projects built with C#, .NET, React, Laravel and TypeScript.

Live site: **https://veryrareuser.github.io/portfolio/**

---

## Stack

| Layer | Choice | Version |
| --- | --- | --- |
| Build tool | Vite | ^8.3.8 |
| UI library | React | ^19.3.1 |
| Language | TypeScript | ^5.9.3 |
| Styling | Tailwind CSS | ^4.3.5 |
| Tailwind plugin | @tailwindcss/vite | ^4.3.5 |
| React plugin | @vitejs/plugin-react | ^6.3.0 |
| Types | @types/react, @types/react-dom | ^19.3.0 |
| Font | Archivo Black / Archivo (Google Fonts) | — |

No router, no animation library, no icon library. Anchors + CSS scroll handle navigation.

---

## Local development

```bash
npm install      # install dependencies (creates package-lock.json)
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # typecheck + production build into dist/
npm run preview  # serve the production build locally
npm run typecheck # tsc --noEmit
```

The dev server proxies nothing — all data is local and static, imported from `src/data/`.

---

## Deployment (GitHub Pages)

The site is published as a **GitHub Pages project site** from `veryrareuser/portfolio`, so it lives at `https://veryrareuser.github.io/portfolio/`. Because of the sub-path, `vite.config.ts` sets:

```ts
base: '/portfolio/'
```

Deployment runs automatically on every push to `main` via `.github/workflows/deploy.yml`:

1. `actions/checkout` checks out the repository
2. `actions/setup-node@v4` installs Node 20 with the npm cache
3. `npm ci` installs dependencies from the committed `package-lock.json`
4. `npm run build` typechecks and builds into `dist/`
5. `actions/upload-pages-artifact@v3` uploads `dist/` as the Pages artifact
6. `actions/deploy-pages@v4` publishes it

Required workflow permissions: `contents: read`, `pages: write`, `id-token: write`.

To enable Pages for the repository:

```bash
gh api --method PUT repos/veryrareuser/portfolio/pages -f build_type=workflow
```

---

## Project structure

```
portfolio/
├─ .github/workflows/deploy.yml   # GitHub Pages deployment
├─ public/favicon.svg
├─ src/
│  ├─ components/
│  │  ├─ Header/                  # wordmark + primary nav
│  │  ├─ Hero/                    # headline + technology chips
│  │  ├─ Services/                # 3-column "what I do" strip
│  │  ├─ About/                   # bio, stat tiles, stack chips
│  │  ├─ Work/                    # 2-column project card grid
│  │  ├─ Contact/                 # black CTA band
│  │  └─ Footer/                  # bottom bar
│  ├─ data/
│  │  ├─ projects.ts              # typed project array (drives the cards)
│  │  └─ site.ts                  # personal info, nav, services, stats, stack
│  ├─ App.tsx                     # landmarks + section order
│  ├─ index.css                   # design tokens + brutalist component classes
│  └─ main.tsx                    # React entry point
├─ index.html
├─ vite.config.ts
└─ tsconfig.json
```

Each component owns a `.tsx` and a co-located `.css` file. Shared data lives in `src/data/`, so adding a project means editing one typed array entry — no component changes required.

---

## Design system — brutalism

All tokens live in `src/index.css` as CSS custom properties, and are re-exported through Tailwind v4's `@theme` so they are usable as utilities (`bg-brut-red`, `text-brut-black`, `border-brut-mono`, …).

```css
--brut-red: #FF0000;
--brut-blue: #0000FF;
--brut-yellow: #FFFF00;
--brut-black: #000000;
--brut-white: #FFFFFF;
--brut-green: #00FF00;
--brut-magenta: #FF00FF;
```

### Named classes

| Class | Purpose |
| --- | --- |
| `.mono` | Courier New stack for nav, eyebrows, chips and body copy |
| `.card` | Flat fill, 4px black border, `8px 8px 0` hard shadow, square corners |
| `.card--yellow` `.card--red` `.card--green` `.card--magenta` `.card--blue` `.card--black` | Flat saturated fills |
| `.grid` | 2-column work grid, collapses to 1 column under 640px |
| `.button` | 4px black border, `4px 4px 0` shadow that collapses on `:active` |
| `.nav a:hover` | Line-through hover |
| `.section-title` | Shared section heading |
| `.skip-link` / `.visually-hidden` | Accessibility helpers |

### Rules that hold everywhere

- `border-radius: 0` and `transition: none` are applied globally — brutalism has no curves and no easing.
- Text is black on yellow, green, magenta and red fills; white text appears only on blue and black fills.
- Focus is always visible: `outline: 4px solid #0000FF` with `4px` offset.
- `prefers-reduced-motion: reduce` disables smooth scrolling and all animation.
- The large index numbers (`01`, `02`, `03`) use `#6E6E6E` on white — **5.09:1**, which passes WCAG AA for large text. A lighter gray such as `#B8B8B8` only reaches ~2.0:1 and would fail.
- The layout is responsive: the 3-column services strip and the 2-column work grid both collapse to a single column under 640px.

---

## License

MIT — do whatever you want with it.
