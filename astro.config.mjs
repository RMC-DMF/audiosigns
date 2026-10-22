import { defineConfig } from 'astro/config';

// PREVIEW=1 builds flat .html files with .html links, for static hosts
// that don't map /folder/ to /folder/index.html. Netlify doesn't need it.
const preview = process.env.PREVIEW === '1';

export default defineConfig({
  site: 'https://www.audiosigns.co.uk',
  outDir: preview ? './dist-preview' : './dist',
  trailingSlash: preview ? 'never' : 'ignore',
  build: {
    format: preview ? 'file' : 'directory',
    assets: 'assets',
  },
});
