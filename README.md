# thinhduynguyen.com

Personal portfolio and résumé site built with Astro.

## Development

Install dependencies:

```sh
npm install
```

Start the development server in the background:

```sh
npm run astro -- dev --background
```

Manage the background server with:

```sh
npm run astro -- dev status
npm run astro -- dev logs
npm run astro -- dev stop
```

Create a production build:

```sh
npm run build
```

## Structure

- `src/pages/` contains the landing page and HTML résumé.
- `src/components/` contains reusable page components.
- `src/data/` contains profile and résumé content.
- `src/layouts/` contains the shared HTML document layout.
- `src/styles/` contains global design tokens and shared styles.
- `public/resume.pdf` is the downloadable résumé.
