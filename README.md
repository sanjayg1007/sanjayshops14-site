# Sanjay Gupta — personal website

A single-page site built with Astro. No CMS, no database, no tracking.

## Updating the site (no coding needed)
Everything you read on the site lives in ONE file: `src/data/resume.ts`.

On github.com: open that file → click the pencil icon → change the words between
the "quotes" → click "Commit changes". Cloudflare republishes in about a minute.

Common updates:
- New role: copy a block in section 6 (Experience), paste it at the top, edit it.
- New certification: copy a line in section 8 and edit it.
- Show your phone number: set `showPhone: true` in section 1.
- Add a résumé download: upload your PDF into the `public` folder, then set
  `resumePdf: "Your_File_Name.pdf"` in section 1.

If a commit ever breaks the site, Cloudflare keeps the previous version live and
shows an error in its dashboard. Usually it's a missing comma or quote mark.

## Look and feel
Colours and fonts: `src/styles/global.css` (the `:root` block at the top).

## Hosting (Cloudflare Pages)
Build command: `npm run build` · Output directory: `dist` ·
Environment variable: `NODE_VERSION` = `22`.
After buying a domain, change the `site:` line in `astro.config.mjs`.
