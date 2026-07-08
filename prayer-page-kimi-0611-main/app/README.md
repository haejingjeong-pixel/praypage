# Prayer Page App

This folder wraps the existing static Prayer Page files in an npm project without changing the deployed root files.

## Commands

- `npm run build`: copy the current root static site into `app/public`
- `npm run dev`: copy files and serve `app/public` locally
- `npm run preview`: serve the already-built `app/public`
- `npm run clean`: clear generated files from `app/public`

The current GitHub Pages deployment still uses the root static files. This app folder is a safer npm project layer around the same files.
