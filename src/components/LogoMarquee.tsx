import { useReducedMotion } from 'framer-motion'

export type Logo = { src: string; alt: string }

/**
 * Seamless scrolling strip of partner logos. Renders two copies of the set so
 * the CSS translateX(-50%) loop is jump-free. With prefers-reduced-motion it
 * renders one static, centered, wrapped row (no animation).
 */
export function LogoMarquee({
  logos,
  speed = 34,
  ariaLabel = 'Partners and affiliations',
}: {
  logos: Logo[]
  speed?: number
  ariaLabel?: string
}) {
  const reduce = useReducedMotion()
  const rendered = reduce ? logos : [...logos, ...logos]
  return (
    <div
      className={`logo-marquee${reduce ? ' is-static' : ''}`}
      role="group"
      aria-label={ariaLabel}
    >
      <div
        className="logo-marquee-track"
        style={reduce ? undefined : { animationDuration: `${speed}s` }}
      >
        {rendered.map((logo, i) => {
          const isClone = i >= logos.length
          return (
            <span className="logo-marquee-item" key={i} aria-hidden={isClone || undefined}>
              <img src={logo.src} alt={isClone ? '' : logo.alt} loading="lazy" />
            </span>
          )
        })}
      </div>
    </div>
  )
}
