import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

/**
 * Shared top nav. The brand paints the Xopolis lockup (from <Sprite/>) in
 * --navy; the CTA mirrors heurisight.com's verb-object pill.
 * In-page anchors (#platforms/#method/#research) resolve on the home route.
 */
export function Nav() {
  return (
    <header className="nav">
      <nav className="nav-inner" aria-label="Primary">
        <Link className="brand" to="/" aria-label="Xopolis Inc — home">
          <svg viewBox="0 0 935 233" role="img" aria-label="Xopolis">
            <use href="#xopolis-lockup" />
          </svg>
        </Link>
        <div className="nav-links">
          <a href="/#platforms">Platforms</a>
          <a href="/#method">Method</a>
          <a href="/#research">Research</a>
          <a href="https://heurisight.com/">HeuriSight</a>
        </div>
        <div className="nav-cta">
          <motion.a
            className="btn btn-primary"
            href="mailto:support@xopol.is?subject=Starting%20a%20conversation%20with%20Xopolis"
            data-track="contact"
            data-slot="nav"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0, scale: 0.98 }}
          >
            Start a conversation
          </motion.a>
        </div>
      </nav>
    </header>
  )
}
