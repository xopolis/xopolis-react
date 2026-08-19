import type { Variants } from 'framer-motion'

/** Standard "rise + fade" used for section reveals and hero items. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
}

/** Parent that staggers its `fadeUp` children into view. */
export const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}

/** Route/page transition — a soft cross-fade + small slide. */
export const pageTransition = {
  initial: { opacity: 0, y: 14 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.22 } },
}

/** Hover lift shared by cards/pills that opt into motion. */
export const hoverLift = {
  rest: { y: 0 },
  hover: { y: -4, transition: { type: 'spring' as const, stiffness: 320, damping: 22 } },
}
