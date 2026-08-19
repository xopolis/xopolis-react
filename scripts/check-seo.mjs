// CI guard: asserts every route was prerendered with real content + unique SEO.
// Run after `npm run build`. Exits non-zero if any route regresses.
import { readFileSync, existsSync } from 'node:fs'

const ROUTES = [
  '/', '/about', '/contact', '/contact-success', '/privacy', '/terms', '/tokosmart',
  '/platforms/heurisight', '/platforms/protobots', '/platforms/xresearch', '/research', '/government',
]

let failures = 0
for (const route of ROUTES) {
  const file = route === '/' ? 'dist/index.html' : `dist${route}/index.html`
  if (!existsSync(file)) {
    console.error(`✗ ${route.padEnd(26)} MISSING ${file}`)
    failures++
    continue
  }
  const html = readFileSync(file, 'utf8')
  const title = (html.match(/<title>([^<]*)<\/title>/) || [])[1] || ''
  const hasCanonical = /rel="canonical"/.test(html)
  const hasOg = /property="og:title"/.test(html)
  const hasLd = /application\/ld\+json/.test(html)
  const text = html
    .replace(/<script[\s\S]*?<\/script>/g, '')
    .replace(/<style[\s\S]*?<\/style>/g, '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  // A prerendered page has substantial rendered body text; the bare SPA shell
  // (default title "Xopolis Inc", no per-route content) does not.
  const prerendered = text.length > 500 && title && title !== 'Xopolis Inc'
  const ok = prerendered && hasCanonical && hasOg && hasLd
  console.log(
    `${ok ? '✓' : '✗'} ${route.padEnd(26)} text=${String(text.length).padStart(5)} ` +
      `title="${title.slice(0, 42)}" canon=${hasCanonical} og=${hasOg} ld=${hasLd}`,
  )
  if (!ok) failures++
}

if (failures) {
  console.error(`\nSEO CHECK FAILED: ${failures}/${ROUTES.length} route(s) regressed.`)
  process.exit(1)
}
console.log(`\nSEO CHECK PASSED: ${ROUTES.length}/${ROUTES.length} routes prerendered with per-route meta.`)
