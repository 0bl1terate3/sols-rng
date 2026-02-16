# Sol's RNG - GitHub Pages Setup

This repo is configured to deploy to GitHub Pages with GitHub Actions.

## Why this uses a build step

Your local project includes very large files (for example `sols rng.zip` and many videos under `cutscenes/`).
GitHub has strict file/repo/pages limits, so the workflow publishes a trimmed `site/` artifact that includes:

- `index.html`
- Core game scripts (`*.js` used by `index.html`)
- `assets/`, `iconz/`, `biome pictures/`
- A small set of always-referenced cutscene audio/video files

## One-time publish steps

1. Initialize git (if not already):

```powershell
git init
git add .
git commit -m "Set up GitHub Pages deployment"
```

2. Create a GitHub repo and push:

```powershell
git branch -M main
gh repo create sols-rng --public --source . --remote origin --push
```

3. In GitHub repo settings:

- Open `Settings -> Pages`
- Under `Build and deployment`, set `Source` to `GitHub Actions`

After the first workflow run completes, your site URL will be:

`https://<your-github-username>.github.io/sols-rng/`

## Redeploy after changes

Push to `main` (or `master`) and the workflow in `.github/workflows/pages.yml` redeploys automatically.

## If you want all cutscene videos online

GitHub Pages is not a good fit for the full cutscene library size. Host large media on object storage/CDN (Cloudflare R2, S3, Backblaze, etc.) and point `cutscenes.js` URLs there.
