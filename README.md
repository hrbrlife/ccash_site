# CCASH — Hugo Site

This is the source repo for the CCASH website — a legal infrastructure and technology platform for regulated financial services.

## Deployed site

The live site is built from the **`public_static`** branch of this repo.
Pushing to `public_static` triggers deployment.

## Development

The Hugo site source is on the `main` branch. To build locally:

```bash
hugo server -D
```

The built output is copied to `public_static` for deployment.

## Structure

- `layouts/` — Hugo templates (baseof, index, partials)
- `static/css/main.css` — Dark theme, legal+tech professional design
- `content/` — Page content with frontmatter
- `data/` — Data files for roadmap, categories, and page content

## About CCASH

CCASH provides a complete legal infrastructure and technology platform for regulated financial services. Entity framework, compliance operations, and a full Go + HTMX application platform — everything you need under one roof.

See `/home/user/Desktop/CCASH_Legal/` for the legal documentation framework.
See `/home/user/Desktop/ccash_go_htmx/` for the Go + HTMX application platform.
