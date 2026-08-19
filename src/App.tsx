import { Suspense, lazy, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion, MotionConfig } from 'framer-motion'
import { Sprite } from './components/Sprite'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import { Seo } from './components/Seo'
import { pageTransition } from './lib/animations'
import Home from './pages/Home'

const About = lazy(() => import('./pages/About'))
const Contact = lazy(() => import('./pages/Contact'))
const ContactSuccess = lazy(() => import('./pages/ContactSuccess'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const Tokosmart = lazy(() => import('./pages/Tokosmart'))
const PlatformHeuriSight = lazy(() => import('./pages/PlatformHeuriSight'))
const PlatformProtobots = lazy(() => import('./pages/PlatformProtobots'))
const PlatformXResearch = lazy(() => import('./pages/PlatformXResearch'))
const Research = lazy(() => import('./pages/Research'))
const Government = lazy(() => import('./pages/Government'))

/** On navigation: jump to top for a new page, or smooth-scroll to a #hash target. */
function useScrollBehaviour() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
}

function AnimatedRoutes() {
  const location = useLocation()
  const reduce = useReducedMotion()
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main id="main" key={location.pathname} {...(reduce ? {} : pageTransition)}>
        <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contact-success" element={<ContactSuccess />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/tokosmart" element={<Tokosmart />} />
            <Route path="/platforms/heurisight" element={<PlatformHeuriSight />} />
            <Route path="/platforms/protobots" element={<PlatformProtobots />} />
            <Route path="/platforms/xresearch" element={<PlatformXResearch />} />
            <Route path="/research" element={<Research />} />
            <Route path="/government" element={<Government />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </motion.main>
    </AnimatePresence>
  )
}

export default function App() {
  useScrollBehaviour()
  return (
    <MotionConfig reducedMotion="user">
      <Seo />
      <Sprite />
      <Nav />
      <AnimatedRoutes />
      <Footer />
    </MotionConfig>
  )
}
