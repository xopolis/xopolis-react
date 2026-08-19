import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/animations'
import './platform-protobots.css'

const vp = { once: true, amount: 0.2 } as const

export default function PlatformProtobots() {
  return (
    <div className="p-platform-protobots">
      <section className="hero">
        <div className="hero-container">
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div className="hero-badge" variants={fadeUp}>
              <span className="hero-badge-dot" />
              SOC 2 Type II Compliant
            </motion.div>
            <motion.h1 className="hero-title" variants={fadeUp}>Fast launch. Fast results.</motion.h1>
            <motion.p className="hero-subtitle" variants={fadeUp}>
              ProtoBots is an enterprise AI automation platform that lets you build custom AI agents,
              deploy turnkey assistants, and unlock real-time insights from your data — no coding required.
            </motion.p>
            <motion.div className="hero-ctas" variants={fadeUp}>
              <a href="https://www.protobots.ai/signup" className="btn btn-primary btn-large" target="_blank">Start Free Trial</a>
              <a href="https://www.protobots.ai" className="btn btn-outline btn-large" target="_blank">Visit ProtoBots.ai</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="section-container">
          <motion.div className="section-header" initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
            <div className="section-overline">Capabilities</div>
            <h2 className="section-title">AI that works the way you do</h2>
            <p className="section-subtitle">
              From document analysis to custom automation, ProtoBots adapts to your workflow.
            </p>
          </motion.div>

          <motion.div className="features-grid" initial="hidden" whileInView="show" viewport={vp} variants={stagger}>
            <motion.div className="feature-card" variants={fadeUp}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </div>
              <h3>AI-Research Assistant</h3>
              <p>Talk to your Excel sheets, PDFs, and CRM systems. Get context-rich, real-time insights from your data.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeUp}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="10" rx="2" />
                  <circle cx="8.5" cy="16" r="1.5" />
                  <circle cx="15.5" cy="16" r="1.5" />
                  <path d="M12 11V7" />
                  <circle cx="12" cy="5" r="2" />
                </svg>
              </div>
              <h3>Bot Builder</h3>
              <p>Create custom AI agents without code. We automatically select the best LLM for your use case.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeUp}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <h3>Turnkey Assistants</h3>
              <p>Pre-built bots ready for immediate deployment: Document Q&amp;A, Meeting Notes, Email Helper, and more.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeUp}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3>Enterprise Security</h3>
              <p>SOC 2 Type II compliant with enterprise-grade data protection. Your data stays private.</p>
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
              <h3>Share &amp; Collaborate</h3>
              <p>Share bots with your team, organization, or the ProtoBots community. Even monetize your creations.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeUp}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              </div>
              <h3>Multi-LLM Selection</h3>
              <p>Automatically match your task to the best model from OpenAI, Anthropic, Google, Microsoft, or Xopolis in-house.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-container">
          <motion.div className="section-header" initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
            <div className="section-overline">How It Works</div>
            <h2 className="section-title">Your AI journey in four steps</h2>
          </motion.div>

          <motion.div className="workflow-grid" initial="hidden" whileInView="show" viewport={vp} variants={stagger}>
            <motion.div className="workflow-step" variants={fadeUp}>
              <div className="workflow-number">1</div>
              <h4>Unlock</h4>
              <p>Analyze existing data and build a complete organizational view</p>
            </motion.div>
            <motion.div className="workflow-step" variants={fadeUp}>
              <div className="workflow-number">2</div>
              <h4>Implement</h4>
              <p>Deploy targeted bots to address operational inefficiencies</p>
            </motion.div>
            <motion.div className="workflow-step" variants={fadeUp}>
              <div className="workflow-number">3</div>
              <h4>Connect</h4>
              <p>Integrate AI assistants across departments</p>
            </motion.div>
            <motion.div className="workflow-step" variants={fadeUp}>
              <div className="workflow-number">4</div>
              <h4>Evolve</h4>
              <p>Continuous learning and regular updates</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="section-container">
          <motion.div className="section-header" initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
            <div className="section-overline">Enterprise Ready</div>
            <h2 className="section-title">Security and compliance built-in</h2>
          </motion.div>

          <motion.div className="trust-badges" initial="hidden" whileInView="show" viewport={vp} variants={stagger}>
            <motion.div className="trust-badge" variants={fadeUp}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              SOC 2 Type II Compliant
            </motion.div>
            <motion.div className="trust-badge" variants={fadeUp}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              Data Privacy Protected
            </motion.div>
            <motion.div className="trust-badge" variants={fadeUp}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Regular Security Audits
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="cta">
        <motion.div className="cta-container" initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
          <h2 className="cta-title">Ready to automate with AI?</h2>
          <p className="cta-subtitle">
            Start with our free turnkey assistants or build your own custom bots.
          </p>
          <a href="https://www.protobots.ai/signup" className="btn btn-primary btn-large" target="_blank">Start Free Trial</a>
        </motion.div>
      </section>
    </div>
  )
}
