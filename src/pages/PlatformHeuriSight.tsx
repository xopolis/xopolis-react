import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, stagger } from '../lib/animations'
import './platform-heurisight.css'

const vp = { once: true, amount: 0.2 } as const

export default function PlatformHeuriSight() {
  return (
    <div className="p-platform-heurisight">
      {/* HERO */}
      <section className="hero">
        <div className="hero-container">
          <motion.div className="hero-content" variants={stagger} initial="hidden" animate="show">
            <motion.div className="hero-badge" variants={fadeUp}>
              <span className="hero-badge-dot"></span>
              NSF SBIR Funded — FERPA Compliant
            </motion.div>
            <motion.h1 className="hero-title" variants={fadeUp}>Understand how your students think.</motion.h1>
            <motion.p className="hero-subtitle" variants={fadeUp}>
              HeuriSight is the first AI learning analytics platform that reveals HOW students
              approach problems — not just what they know. Every insight is backed by traceable evidence.
            </motion.p>
            <motion.div className="hero-ctas" variants={fadeUp}>
              <a href="https://www.heurisight.com" className="btn btn-primary btn-large" target="_blank">Visit HeuriSight.com</a>
              <Link to="/contact" className="btn btn-outline btn-large">Request Demo</Link>
            </motion.div>
          </motion.div>
          <div className="hero-visual">
            <img src="https://www.heurisight.com/screenshots/cohort-health-dashboard.png" alt="HeuriSight Dashboard" />
          </div>
        </div>
      </section>

      {/* DUAL-ENGINE AI */}
      <section className="section">
        <div className="section-container">
          <motion.div className="section-header" initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
            <div className="section-overline">Dual-Engine AI</div>
            <h2 className="section-title">Knowledge meets wisdom</h2>
            <p className="section-subtitle">
              HeuriSight combines knowledge retrieval with cognitive pattern recognition —
              the first platform to unite both approaches.
            </p>
          </motion.div>

          <motion.div className="engine-grid" initial="hidden" whileInView="show" viewport={vp} variants={stagger}>
            <motion.div className="engine-card rag" variants={fadeUp}>
              <h3>Knowledge Base (RAG)</h3>
              <p className="tagline">What students know</p>
              <ul className="engine-list">
                <li>Stores all course materials</li>
                <li>Intelligent content retrieval</li>
                <li>Answers factual questions</li>
                <li>Multi-format document support</li>
              </ul>
            </motion.div>
            <motion.div className="engine-card hag" variants={fadeUp}>
              <h3>Heuristics Graph (HAG)</h3>
              <p className="tagline">How students think</p>
              <ul className="engine-list">
                <li>Socratic dialogue methodology</li>
                <li>Maps thinking patterns</li>
                <li>Tracks decision-making styles</li>
                <li>Visualizes cognitive growth</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="section section-alt">
        <div className="section-container">
          <motion.div className="section-header" initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
            <div className="section-overline">Key Features</div>
            <h2 className="section-title">Built for higher education</h2>
          </motion.div>

          <motion.div className="features-grid" initial="hidden" whileInView="show" viewport={vp} variants={stagger}>
            <motion.div className="feature-card" variants={fadeUp}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </div>
              <h3>Learning Pattern Insights</h3>
              <p>Visualize how students think through problems using our 10-category cognitive framework.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeUp}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3>Competency Tracking</h3>
              <p>Monitor skill development with mastery levels and evidence-centered verification.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeUp}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <line x1="12" y1="9" x2="12" y2="13" />
                  <line x1="12" y1="17" x2="12.01" y2="17" />
                </svg>
              </div>
              <h3>Early Intervention Alerts</h3>
              <p>Identify at-risk students before they fall behind with proactive engagement analysis.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeUp}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <h3>Traceable Evidence</h3>
              <p>Every competency score links back to specific student quotes. No black boxes.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeUp}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <line x1="3" y1="9" x2="21" y2="9" />
                  <line x1="9" y1="21" x2="9" y2="9" />
                </svg>
              </div>
              <h3>Rubric Management</h3>
              <p>Upload existing rubrics or let AI generate them from your learning outcomes.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeUp}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>Cohort Analytics</h3>
              <p>Track class-wide patterns and identify trends across your entire student population.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* TRUST & COMPLIANCE */}
      <section className="section section-dark">
        <div className="section-container">
          <motion.div className="section-header" initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
            <div className="section-overline">Trust & Compliance</div>
            <h2 className="section-title">Built with rigor, validated by research</h2>
          </motion.div>

          <motion.div className="trust-badges" initial="hidden" whileInView="show" viewport={vp} variants={stagger}>
            <motion.div className="trust-badge" variants={fadeUp}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              FERPA Compliant
            </motion.div>
            <motion.div className="trust-badge" variants={fadeUp}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              NSF SBIR Funded
            </motion.div>
            <motion.div className="trust-badge" variants={fadeUp}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <polyline points="14 2 14 8 20 8" />
              </svg>
              Patent Pending
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <motion.div className="cta-container" initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
          <h2 className="cta-title">Ready to see how your students think?</h2>
          <p className="cta-subtitle">
            Join universities using AI-powered cognitive assessment with verifiable evidence.
          </p>
          <a href="https://www.heurisight.com" className="btn btn-primary btn-large" target="_blank">Visit HeuriSight.com</a>
        </motion.div>
      </section>
    </div>
  )
}
