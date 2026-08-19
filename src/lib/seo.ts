/** Central SEO config: site-wide defaults + per-route title/description. */

export const SITE = {
  name: 'Xopolis Inc',
  /** Canonical production origin — used for canonical URLs, OG URLs and the sitemap. */
  origin: 'https://xopol.is',
  twitter: '', // e.g. '@xopolis' — set when the handle exists
  defaultTitle: 'Xopolis Inc — Systems that extend what people can judge',
  defaultDescription:
    'Xopolis builds software that captures expert reasoning and makes it inspectable — in classrooms, inside organizations, and in applied research. Three platforms: HeuriSight, ProtoBots and xResearch.',
  ogImage: '/assets/photos/instructor-lecture-hall-1600.jpg',
} as const

export type RouteSeo = {
  title: string
  description: string
  /** Set true for utility pages that should not be indexed. */
  noindex?: boolean
}

/** Path → SEO. Missing paths fall back to the site defaults. */
export const SEO_BY_PATH: Record<string, RouteSeo> = {
  '/': {
    title: SITE.defaultTitle,
    description: SITE.defaultDescription,
  },
  '/about': {
    title: 'About Xopolis — Our mission, method and journey',
    description:
      'Xopolis Inc is an NSF SBIR Phase I awardee building systems that keep judgment with the people who have it. Our mission, method and company history.',
  },
  '/contact': {
    title: 'Contact Xopolis — Start a conversation',
    description:
      'Tell us what your organization is trying to make visible. Reach the Xopolis team at support@xopol.is or send a message.',
  },
  '/contact-success': {
    title: 'Message sent — Xopolis',
    description: 'Thanks for reaching out. The Xopolis team will reply within 1–2 business days.',
    noindex: true,
  },
  '/privacy': {
    title: 'Privacy Policy — Xopolis',
    description: 'How Xopolis Inc collects, uses and protects your information across our platforms.',
  },
  '/terms': {
    title: 'Terms of Service — Xopolis',
    description: 'The terms that govern use of Xopolis Inc websites and services.',
  },
  '/tokosmart': {
    title: 'TokoSmart — Simple bookkeeping for small shops | Xopolis',
    description:
      'TokoSmart is an Android bookkeeping app for small shops: record sales, manage stock, see reports and plan ahead. A product of Xopolis Inc.',
  },
  '/platforms/heurisight': {
    title: 'HeuriSight — See how students reason, not just what they answer | Xopolis',
    description:
      'HeuriSight captures how students reason — course assistants, team studios, case studies with digital twins and spoken assessments — into a model the institution owns.',
  },
  '/platforms/protobots': {
    title: 'ProtoBots — An internal marketplace of AI apps your organization owns | Xopolis',
    description:
      'ProtoBots is a secure, organization-owned marketplace of AI apps and automated workflows built from prebuilt templates, with a workspace dashboard for everything you deploy.',
  },
  '/platforms/xresearch': {
    title: 'xResearch — Instrumented studies on how people and AI reason together | Xopolis',
    description:
      'xResearch publishes working papers and essays on reasoning, assessment validity and expert judgment — each documenting its search and stating what it cannot show.',
  },
  '/research': {
    title: 'Research — Work that holds up under review | Xopolis',
    description:
      'Xopolis is an NSF SBIR Phase I awardee. Our method is evaluated in live university settings and published as a working-paper series a reviewer can check.',
  },
  '/government': {
    title: 'Government Services — Xopolis',
    description:
      'Xopolis works with universities, agencies and workforce boards where the reasoning behind a decision has to be inspectable after the fact. NSF SBIR Phase I awardee.',
  },
}

export function seoForPath(pathname: string): RouteSeo {
  const clean = pathname !== '/' && pathname.endsWith('/') ? pathname.slice(0, -1) : pathname
  return (
    SEO_BY_PATH[clean] ?? {
      title: SITE.defaultTitle,
      description: SITE.defaultDescription,
    }
  )
}
