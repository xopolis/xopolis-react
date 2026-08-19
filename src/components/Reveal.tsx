import { motion, type HTMLMotionProps } from 'framer-motion'
import { fadeUp, stagger } from '../lib/animations'

type RevealProps = HTMLMotionProps<'div'> & {
  /** When true this element staggers its <Item> children instead of animating itself. */
  stagger?: boolean
}

/**
 * Scroll-into-view reveal. Fades + rises the first time it enters the viewport.
 * Reduced motion is handled globally by <MotionConfig reducedMotion="user"> in App.
 */
export function Reveal({ stagger: isStagger, children, ...rest }: RevealProps) {
  return (
    <motion.div
      variants={isStagger ? stagger : fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}

/** A staggered child inside a `<Reveal stagger>`. */
export function Item({ children, ...rest }: HTMLMotionProps<'div'>) {
  return (
    <motion.div variants={fadeUp} {...rest}>
      {children}
    </motion.div>
  )
}
