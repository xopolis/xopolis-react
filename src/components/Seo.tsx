import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { SITE, seoForPath } from '../lib/seo'

function upsertMeta(attr: 'name' | 'property', key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function upsertJsonLd(id: string, data: unknown) {
  let el = document.head.querySelector<HTMLScriptElement>(`script#${id}`)
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

/**
 * Per-route <head> manager. Reads the central SEO map for the current path and
 * keeps title, description, canonical, robots, Open Graph, Twitter cards and a
 * WebPage JSON-LD in sync as the SPA navigates. Renders nothing.
 */
export function Seo() {
  const { pathname } = useLocation()
  useEffect(() => {
    const seo = seoForPath(pathname)
    const path = pathname === '/' ? '/' : pathname.replace(/\/$/, '')
    const url = SITE.origin + path
    const image = SITE.origin + SITE.ogImage

    document.title = seo.title
    upsertMeta('name', 'description', seo.description)
    upsertLink('canonical', url)
    upsertMeta('name', 'robots', seo.noindex ? 'noindex,nofollow' : 'index,follow')

    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:site_name', SITE.name)
    upsertMeta('property', 'og:title', seo.title)
    upsertMeta('property', 'og:description', seo.description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:image', image)

    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', seo.title)
    upsertMeta('name', 'twitter:description', seo.description)
    upsertMeta('name', 'twitter:image', image)

    upsertJsonLd('ld-webpage', {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: seo.title,
      description: seo.description,
      url,
      isPartOf: { '@type': 'WebSite', name: SITE.name, url: SITE.origin },
      publisher: { '@type': 'Organization', name: SITE.name, url: SITE.origin },
    })
  }, [pathname])

  return null
}
