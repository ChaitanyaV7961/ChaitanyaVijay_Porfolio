# Chaitanya V. — Portfolio

Personal portfolio built with Astro and deployed to GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

## Deployment

The GitHub Actions workflow in `.github/workflows/deploy.yml` builds the site and deploys it to GitHub Pages whenever changes are pushed to `main`.

Once deployment completes, the site will be available at: https://chaitanyav7961.github.io/ChaitanyaVijay_Porfolio/

## Updating content

- Project case studies: `src/content/projects/`
- Research and writing: `src/content/research/`
- About / experience / skills: `src/pages/about.astro`
- Homepage: `src/pages/index.astro`
- Contact links: `src/utils/site.ts` and `src/pages/contact.astro`
- Images and downloadable files: `public/images/` and `public/files/`

Project code, datasets, notebook files, screenshots and papers can be added under `public/files/` and linked from the relevant content pages. Do not add confidential employer data or personal information.
