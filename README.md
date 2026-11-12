# Chaitanya Vijay — Portfolio

Personal portfolio built with Astro and deployed to GitHub Pages.

**Live site:** https://chaitanyav7961.github.io/ChaitanyaVijay_Porfolio/

## Editing the website

See **[EDITING_GUIDE.md](EDITING_GUIDE.md)** for step-by-step instructions to change text, fonts, colours, pages, projects, research entries, images, contact links and your CV directly in GitHub. You do not need to install anything locally for routine edits.

## Local development (optional)

```bash
npm install
npm run dev
```

## Deployment

Changes committed to `main` trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`. The workflow builds the Astro site and publishes it to GitHub Pages.

## Main content locations

- Homepage: `src/pages/index.astro`
- About / work experience / skills: `src/pages/about.astro`
- Contact: `src/pages/contact.astro`
- Project descriptions: `src/content/projects/`
- Research and writing: `src/content/research/`
- Shared fonts, colours and layout styles: `src/styles/global.css` and `src/layouts/BaseLayout.astro`
- Downloadable files: `public/files/`
- Images: `public/images/`

Please do not upload confidential employer information, private datasets or documents you do not have permission to publish.
