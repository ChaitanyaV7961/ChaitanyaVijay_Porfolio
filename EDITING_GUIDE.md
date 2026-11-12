# Portfolio Website Editing Guide

This guide explains how to maintain the site yourself using GitHub's website. You do **not** need to install Astro, use Terminal, clone the repository or edit files locally for routine updates.

## 1. The easiest way to edit anything

1. Open the [portfolio repository](https://github.com/ChaitanyaV7961/ChaitanyaVijay_Porfolio).
2. Browse to the file you want to change using the paths in this guide.
3. Open the file and click the pencil icon (**Edit this file**).
4. Make your changes in the browser editor. In Markdown files, preserve the YAML block at the top between the `---` lines.
5. Click **Commit changes**.
6. Use a clear message such as `Update About page` or `Add new analytics project`, then commit to the `main` branch.

Every commit to `main` automatically starts a GitHub Actions build and deployment. Watch the [Actions tab](https://github.com/ChaitanyaV7961/ChaitanyaVijay_Porfolio/actions). When the workflow is green, refresh the live site. A browser may briefly show a cached version, so hard-refresh if necessary (Ctrl+Shift+R on Windows/Linux or Cmd+Shift+R on Mac).

**Important:** Make changes only in `ChaitanyaV7961/ChaitanyaVijay_Porfolio`. Your E-commerce project source repository is separate and should remain as it is. The college organisation repository is not part of this website.

## 2. Where everything lives

| What you want to change | File or folder |
| --- | --- |
| Homepage wording and selected projects | `src/pages/index.astro` |
| About text, education, experience, skills, languages | `src/pages/about.astro` |
| Contact page | `src/pages/contact.astro` |
| Add or edit a project | `src/content/projects/` |
| Add or edit research / writing | `src/content/research/` |
| Shared font imports and page header/footer | `src/layouts/BaseLayout.astro` |
| Fonts, colours, typography, spacing, responsive design | `src/styles/global.css` |
| Repository identity and shared links | `src/utils/site.ts` |
| CV, papers, notebooks, downloadable files | `public/files/` |
| Screenshots, diagrams, thumbnails and images | `public/images/` |
| Automatic deployment configuration | `.github/workflows/deploy.yml` |

## 3. Change homepage text

Open `src/pages/index.astro`.

The top section is the `home-hero`. The important text is separated into three elements:

- `<h1 class="display-title hero-name">` — your name.
- `<p class="hero-tagline">` — “I work at the intersection of business, data, AI, and technology.”
- `<p class="lead hero-summary">` — the Master's and work-experience summary below it.

Edit only the words between the opening and closing tags. Keep the class names unless you also intend to change the design. The selected-work cards are drawn from the project collection; the order is controlled by the `featuredOrder` array near the top of the same file.

## 4. Change your About page

Open `src/pages/about.astro`. It contains your background, Fresh Prints, BNP Paribas and Northern Trust experience, education, grouped skills and languages.

You can change headings and paragraph text directly. Keep the surrounding Astro tags such as `<section>`, `<article>` and `<p>` in place. Dates, role labels and impact statements are ordinary text in this file. When changing a metric, make sure the new figure is supported by your records.

## 5. Add a new project

You do not need to create a new page for each project. The project list and individual project detail pages are generated automatically from Markdown files.

1. Open `src/content/projects/`.
2. Choose **Add file → Create new file**.
3. Name the file using a short lowercase slug, for example `customer-retention-analysis.md`.
4. Paste a structure like this:

```md
---
title: "Customer Retention Analysis"
subtitle: "Understanding repeat purchase and churn patterns"
category: "Data Analytics"
tags: ["SQL", "Python", "Power BI"]
status: "completed"
featured: false
summary: "A short description of the business question and what I analysed."
repo: "https://github.com/your-username/your-project"
cover: "images/customer-retention-cover.png"
---

<section id="overview">

## Overview

Explain what I set out to investigate and why it matters.

</section>

<section id="problem">

## Problem

Describe the business or analytical question.

</section>

<section id="approach">

## Approach

Explain the data, method and analysis steps.

</section>

<section id="implementation">

## Implementation

**Tools:** SQL, Python and Power BI.

Explain what I personally built and how.

</section>

<section id="results">

## Results

Add verified findings, charts and metrics. Do not invent results.

</section>

<section id="learnings">

## Learnings

Explain what I learned and what I would improve next.

</section>
```

5. Replace the example content with the real project details, then commit the file to `main`.

### Project fields

- `title`: the title shown on the project card and case-study page.
- `subtitle`: a short descriptive line below the title.
- `category`: for example `Applied AI`, `Data Analytics`, `Finance` or `Operations Research`. This also creates a filter.
- `tags`: tools and concepts shown as small labels.
- `status`: use `completed` or `developing`.
- `featured`: use `true` or `false`. This is metadata; the home page's selected order is currently controlled separately by `featuredOrder` in `src/pages/index.astro`.
- `summary`: the short description on the project card.
- `repo`: optional URL to a public source-code repository or notebook. Add this only when the destination is ready.
- `cover`: optional image path relative to the `public/` folder, for example `images/customer-retention-cover.png`. The current case-study template is ready for the metadata, but project-card cover rendering still needs to be wired into the visual template.

The case-study page uses the six section IDs above for its side navigation. Keep those IDs if you want the navigation to jump to the correct sections. You can add further sections as needed.

### Put a project on the homepage

Open `src/pages/index.astro` and find:

```js
const featuredOrder = ["briefkasten-ninja", "sentinel-1-sar-flood-mapping", "ecommerce-analytics"];
```

Add your project's filename slug (without `.md`) in the position you want. For example:

```js
const featuredOrder = ["customer-retention-analysis", "briefkasten-ninja", "sentinel-1-sar-flood-mapping"];
```

The slug must match the Markdown filename exactly.

## 6. Add research papers or writing

Research entries work similarly to projects.

1. Open `src/content/research/`.
2. Choose **Add file → Create new file**.
3. Name the file, for example `esg-governance-study.md`.
4. Add the following structure:

```md
---
title: "The title of my paper"
category: "Sustainability"
year: "2026"
summary: "A short summary of the research question, approach and main finding."
tags: ["ESG", "Corporate Governance", "Research"]
document: "files/esg-governance-study.pdf"
---

## Research question

What question did I investigate?

## Approach

What literature, data and method did I use?

## Findings

What did I conclude? Include only findings supported by the paper.
```

5. Upload the PDF separately to `public/files/` using the exact filename in the `document` field.
6. Commit the Markdown file and PDF. The research listing and individual research page are generated automatically.

Only include a paper when you are comfortable making the document public and have the rights to share it.

## 7. Upload or replace your CV

The public files folder is `public/files/`.

**To add your CV:**

1. Open `public/files/` in GitHub.
2. Choose **Add file → Upload files**.
3. Upload your PDF named exactly `Chaitanya_V_CV.pdf`.
4. Commit it to `main`.

The file will then be accessible at:

`https://chaitanyav7961.github.io/ChaitanyaVijay_Porfolio/files/Chaitanya_V_CV.pdf`

To replace your CV later, upload the new PDF with the same filename and use GitHub's replace/commit flow. The URL stays the same, so you won't need to change it wherever it is used. Do not upload a CV containing information you do not want public.

For another downloadable file, give it a descriptive filename and upload it to the same folder. Link to it from a page using `withBase("files/your-file.pdf")` in an Astro page.

## 8. Upload images and project screenshots

Use `public/images/` for images. In GitHub, open that folder and choose **Add file → Upload files**.

Good file choices:
- screenshots cropped to the relevant result or dashboard;
- diagrams exported as PNG or SVG;
- compressed JPG or WebP images;
- clear chart images with readable labels.

Use short filenames such as `flood-segmentation-results.webp`. Avoid huge uncompressed files. In an Astro page, reference an uploaded image using the helper:

```astro
<img src={withBase("images/flood-segmentation-results.webp")} alt="Flood segmentation result" />
```

Make sure the page imports `withBase` from `src/utils/site.ts`. This helper automatically includes the repository's GitHub Pages subpath.

## 9. Change your fonts

Open `src/layouts/BaseLayout.astro` and find the Google Fonts stylesheet link in the `<head>`. That is where the font families are loaded.

Open `src/styles/global.css` and look at the variables near the top:

```css
--sans: "DM Sans", sans-serif;
--display: "Space Grotesk", sans-serif;
--mono: "DM Mono", monospace;
```

- `--sans` is the main paragraph and interface font.
- `--display` is used for your name, large headings and project titles.
- `--mono` is used for small labels, dates and technical-style text.

To change a font, first add its Google Fonts import/link in `BaseLayout.astro`, then update the matching variable in `global.css`. Keep the variable names as they are; many components use them. Your name in the header and homepage uses the display font.

## 10. Change colours and visual styling

At the top of `src/styles/global.css`, edit the CSS variables:

```css
--paper: #f5f4f0;       /* page background */
--paper-deep: #eeece6;  /* image and card backgrounds */
--ink: #202a35;         /* main text */
--muted: #66717b;       /* secondary text */
--line: #d8d7d1;        /* borders and dividers */
--blue: #315fd4;        /* primary accent */
--sage: #a7b8a2;        /* muted green accent */
--lavender: #e9e4f2;    /* muted lavender accent */
```

Change the hex values to change the palette consistently across the site. The responsive rules near the bottom of the file control tablet and mobile layouts.

## 11. Add or update contact links

Open `src/utils/site.ts`. The `site` object stores your name, GitHub URL, email, LinkedIn URL and intended CV filename. Replace the empty `email` and `linkedin` values with your preferred public contact details when ready.

The visible contact-page layout is in `src/pages/contact.astro`. Add a new link there if you want to show an email address, LinkedIn profile or CV button. For an Astro page link to the CV, use:

```astro
<a class="button" href={withBase(site.cv)} download>Download CV ↗</a>
```

The CV PDF must exist at `public/files/Chaitanya_V_CV.pdf` for that button to work.

## 12. Add a new page or change the navigation

Pages are files under `src/pages/`. For example, `src/pages/contact.astro` becomes the Contact page. To add a new page, create another `.astro` file in this folder, such as `experience.astro`.

The shared navigation is in `src/layouts/BaseLayout.astro`. Add a new anchor there and point it to `withBase("experience/")`. Add the corresponding active-state condition if you want the new link to highlight on that page.

## 13. Common issues

- **A page or navigation link shows 404:** Check that the file exists in `src/pages/`, or that a Markdown project/research entry exists in the matching content folder. Use `withBase()` for internal links; it inserts the repository subpath and separator correctly.
- **A project does not appear:** Check the Markdown filename, YAML syntax and required fields. Use `status: "completed"` or `status: "developing"`.
- **An image does not load:** Check spelling and case. The uploaded file must be under `public/images/`; reference it with `withBase("images/filename.ext")`.
- **A PDF gives 404:** Check that it was uploaded under `public/files/` and that the filename in the link matches exactly, including capitalisation.
- **A change does not appear immediately:** Check the Actions tab for a green deployment. Then hard-refresh the browser.
- **The build fails:** Open the failed workflow run in Actions. The build log usually identifies the filename and line with a Markdown/YAML/Astro syntax issue. Fix that file and commit again.

## 14. Things you should avoid changing casually

- Do not change `base` in `astro.config.mjs` unless the GitHub repository name or hosting location changes.
- Do not remove `withBase()` from internal links. It ensures links work from a GitHub Pages project site, which lives below the repository name.
- Do not remove the `src/content.config.ts` collection schemas unless you also intend to change the project/research content system.
- Do not commit API keys, passwords, private datasets, employer data or confidential company screenshots.
