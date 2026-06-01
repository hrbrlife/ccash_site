# CCA.SH — Hugo Coming-Soon Site

This is the source repo for the CCA.SH coming-soon site.

## Deployed site

The live site is built from the **`public_static`** branch of this repo.
Pushing to `public_static` triggers deployment.

## Development

The Hugo site source is on the `main` branch. To build locally:

```bash
cd /home/user/sailsto_website/hugo-ccash
hugo server -D
```

The built output is copied to `public_static` for deployment.

## Structure

- `layouts/` — Hugo templates (baseof, index, partials)
- `static/css/main.css` — Dark theme, professional fintech design
- `content/` — Page content (currently _index.md not needed; all content in layout)

## About CCA.SH

FinCEN-registered Money Services Business. Montana Series LLC.
Whitelabel Partner Series for MSBs, PSPs, VASPs, and Family Offices.
90-day graduation path to independent MSB status.

See `/home/user/Desktop/CCASH_Legal/` for the full legal filing package.