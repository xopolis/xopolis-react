// Post-build prerender: serves dist/, renders each route in headless Chromium,
// and writes the fully-rendered HTML (with per-route <head> from Seo.tsx) to
// dist/<route>/index.html so crawlers + social scrapers get real pages.
//
// Run AFTER `npm run build`:  node prerender.mjs
// (Kept separate from `build` because it needs Chromium, which not every host
//  build image has. Run it locally or in a Chromium-capable CI.)
import http from 'node:http'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import { existsSync, statSync } from 'node:fs'
import path from 'node:path'
import puppeteer from 'puppeteer'

const DIST = path.resolve('dist')
const ROUTES = [
  '/', '/about', '/contact', '/contact-success', '/privacy', '/terms', '/tokosmart',
  '/platforms/heurisight', '/platforms/protobots', '/platforms/xresearch', '/research', '/government',
]
const MIME = {
  '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.ico': 'image/x-icon', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain',
}

const server = http.createServer(async (req, res) => {
  try {
    const p = decodeURIComponent(req.url.split('?')[0])
    let file = path.join(DIST, p)
    if (!existsSync(file) || statSync(file).isDirectory()) {
      if (path.extname(p)) { res.writeHead(404); res.end(); return }
      file = path.join(DIST, 'index.html') // SPA fallback
    }
    res.writeHead(200, { 'Content-Type': MIME[path.extname(file)] || 'application/octet-stream' })
    res.end(await readFile(file))
  } catch (e) { res.writeHead(500); res.end(String(e)) }
})
await new Promise((r) => server.listen(0, r))
const base = `http://127.0.0.1:${server.address().port}`

// Non-fatal: if Chromium can't launch (e.g. a host build image without the
// libs), warn and exit 0 so the SPA build still deploys. Google renders JS, so
// the per-route meta + JSON-LD from Seo.tsx still gives strong SEO either way.
let ok = 0
try {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] })
  for (const route of ROUTES) {
    const page = await browser.newPage()
    try {
      await page.goto(base + route, { waitUntil: 'networkidle0', timeout: 30000 })
      await page.waitForSelector('header.nav', { timeout: 15000 }).catch(() => {})
      await new Promise((r) => setTimeout(r, 350)) // let the Seo effect + a paint settle
      const html = '<!DOCTYPE html>' + (await page.evaluate(() => document.documentElement.outerHTML))
      const outDir = route === '/' ? DIST : path.join(DIST, route)
      await mkdir(outDir, { recursive: true })
      await writeFile(path.join(outDir, 'index.html'), html)
      const title = await page.title()
      const textLen = await page.evaluate(() => document.querySelector('#root')?.innerText?.length || 0)
      console.log(`✓ ${route.padEnd(26)} title="${title.slice(0, 48)}"  root-text=${textLen}`)
      ok++
    } catch (e) {
      console.log(`✗ ${route}  ${String(e).slice(0, 120)}`)
    }
    await page.close()
  }
  await browser.close()
  console.log(`PRERENDER DONE: ${ok}/${ROUTES.length} routes`)
} catch (e) {
  console.warn(`PRERENDER SKIPPED (headless Chromium unavailable): ${String(e).slice(0, 160)}`)
  console.warn('Deploying the SPA build unchanged — per-route meta + JSON-LD still ship.')
} finally {
  server.close()
}
