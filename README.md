# Sol's RNG - GitHub Pages Setup

This repo is configured for **GitHub Pages (deploy from `main` branch root)**.

## Current live URL

`https://0bl1terate3.github.io/sols-rng/`

## How deployment works

- GitHub Pages serves files directly from the `main` branch root.
- `.nojekyll` is included so static assets are served without Jekyll processing.
- Large local-only files are excluded via `.gitignore`.

## Update and redeploy

```powershell
git add .
git commit -m "Update game"
git push
```

GitHub Pages will rebuild automatically after push.

## Notes on large media

The full local `cutscenes/` library is large for GitHub hosting workflows. This repo tracks a lightweight cutscene subset so the site stays practical to host.

If you want every cutscene online, move cutscene media to object storage/CDN (R2/S3/Backblaze) and point `cutscenes.js` URLs there.
