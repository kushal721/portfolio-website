import { readFileSync } from 'node:fs'
import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const escape = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

// Fills the page <title>, meta description and site URL from content/portfolio.json,
// so search engines and link previews see them without running JavaScript.
const contentMeta = (): Plugin => ({
  name: 'content-meta',
  transformIndexHtml(html) {
    const { site } = JSON.parse(readFileSync('content/portfolio.json', 'utf8'))
    return html
      .replaceAll('%SITE_TITLE%', escape(site.title))
      .replaceAll('%SITE_DESCRIPTION%', escape(site.description ?? ''))
      .replaceAll('%SITE_URL%', escape((site.url ?? '').replace(/\/$/, '')))
  },
})

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), contentMeta()],
  base: '/',
})
