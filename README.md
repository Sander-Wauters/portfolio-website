# portfolio-website

## Project setup

- `web/`: Everything for the website.
- `web/src/`: Source code for the website.
- `web/src/features/`: Directories in here contain specific features.
  Each subdirectory should contain the following:
  `api.ts`, `service.ts`, `hooks.ts`, `types.ts` and `components/`.
  These should all be shareable over different pages.
- `web/src/pages/`: Directories in here contain the layout for a specific page.
  The layout of this directory should match the URL of the website.
  Each subdirectory must contain a `index.tsx` file.
  Pages may be nested. If the page is dependent on an ID it is named `[id]`.
- `web/public/locales/`: Translation files. Each language is put in its
  own folder `en/`, `de/`, etc.
- `web/test/`: Tests for the website.
