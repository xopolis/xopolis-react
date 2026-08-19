import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, stagger } from '../lib/animations'
import './platform-xresearch.css'

const vp = { once: true, amount: 0.2 } as const

export default function PlatformXResearch() {
  return (
    <div className="p-platform-xresearch">
      {/* HERO */}
      <section className="hero">
        <motion.div className="hero-container" variants={stagger} initial="hidden" animate="show">
          <motion.div className="hero-badge" variants={fadeUp}>
            <span className="hero-badge-dot" />
            NSF SBIR Seeded
          </motion.div>
          <motion.h1 className="hero-title" variants={fadeUp}>Intelligent Research Agents</motion.h1>
          <motion.p className="hero-subtitle" variants={fadeUp}>
            AI-powered research assistants (IRAs) tailored to your needs. Automate research tasks
            while maintaining human oversight, ethical standards, and full transparency.
          </motion.p>
          <motion.div className="hero-ctas" variants={fadeUp}>
            <Link to="/contact" className="btn btn-primary btn-large">Inquire About xResearch</Link>
            <Link to="/research" className="btn btn-outline btn-large">View Our Research</Link>
          </motion.div>
        </motion.div>
      </section>

      {/* CAPABILITIES */}
      <section className="section">
        <div className="section-container">
          <motion.div className="section-header" initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
            <div className="section-overline">Capabilities</div>
            <h2 className="section-title">Research automation with human oversight</h2>
            <p className="section-subtitle">
              xResearch provides specialized IRAs designed for complex analytical and research tasks.
            </p>
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
              <h3>Tailored to Your Question</h3>
              <p>Starting with your research question, the IRA is customized for your specific use case and domain.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeUp}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <ellipse cx="12" cy="5" rx="9" ry="3" />
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
                </svg>
              </div>
              <h3>Connected Knowledge Bases</h3>
              <p>Integrated with the data sources you need to structure, analyze, and synthesize information.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeUp}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2v4" />
                  <path d="M12 18v4" />
                  <path d="M4.93 4.93l2.83 2.83" />
                  <path d="M16.24 16.24l2.83 2.83" />
                  <path d="M2 12h4" />
                  <path d="M18 12h4" />
                  <path d="M4.93 19.07l2.83-2.83" />
                  <path d="M16.24 7.76l2.83-2.83" />
                </svg>
              </div>
              <h3>Autonomous Agents</h3>
              <p>Agents that learn from experience and perform iterative, self-reflective research tasks.</p>
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
              <h3>Analytical Capabilities</h3>
              <p>Advanced analysis tools ready for your specific research methodology and reporting needs.</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeUp}>
              <div className="feature-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h3>Replicability Standards</h3>
              <p>Full transparency and documentation for reproducible research outcomes.</p>
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
              <h3>Human Oversight</h3>
              <p>Automates research tasks, not the research itself. Human judgment remains central.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* RESEARCH AREAS */}
      <section className="section section-alt">
        <div className="section-container">
          <motion.div className="section-header" initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
            <div className="section-overline">Research Areas</div>
            <h2 className="section-title">Our ongoing research initiatives</h2>
          </motion.div>

          <motion.div className="research-areas" initial="hidden" whileInView="show" viewport={vp} variants={stagger}>
            <motion.div className="research-card" variants={fadeUp}>
              <h3>World of Work Data</h3>
              <p>Mapping the nature of work with granular data on skills and capabilities across geography, industry, and firms.</p>
              <a href="https://www.sbir.gov/sbirsearch/detail/1585263" target="_blank" rel="noopener noreferrer">View SBIR Award →</a>
            </motion.div>

            <motion.div className="research-card" variants={fadeUp}>
              <h3>Small Business Research</h3>
              <p>Supporting daily efforts across industries with economic impact analysis and business migration studies.</p>
              <Link to="/research">View Publications →</Link>
            </motion.div>

            <motion.div className="research-card" variants={fadeUp}>
              <h3>Entrepreneurial Ecosystems</h3>
              <p>Exploring how businesses start, grow, and support their communities through data-driven analysis.</p>
              <Link to="/research">Learn More →</Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ETHICS */}
      <section className="section section-dark">
        <div className="section-container">
          <motion.div className="section-header" initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
            <div className="section-overline">Ethics</div>
            <h2 className="section-title">Committed to responsible AI research</h2>
            <p className="section-subtitle">
              We view research as an essential and truly human endeavor.
            </p>
          </motion.div>

          <motion.div className="ethics-grid" initial="hidden" whileInView="show" viewport={vp} variants={stagger}>
            <motion.div className="ethics-card" variants={fadeUp}>
              <h3>Case-by-Case Access</h3>
              <p>We provide access to xResearch on a case-by-case basis only, ensuring appropriate use and oversight for each engagement.</p>
            </motion.div>

            <motion.div className="ethics-card" variants={fadeUp}>
              <h3>Transparency Standards</h3>
              <p>We collaborate with clients to ensure the highest standards for replicability and transparency in all research outputs.</p>
            </motion.div>

            <motion.div className="ethics-card" variants={fadeUp}>
              <h3>Risk Mitigation</h3>
              <p>We actively work to mitigate risks associated with the rapid advance of AI in research contexts.</p>
            </motion.div>

            <motion.div className="ethics-card" variants={fadeUp}>
              <h3>Human-Centered Design</h3>
              <p>Our IRAs are designed to augment human researchers, not replace the essential human elements of inquiry.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <motion.div className="cta-container" initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
          <h2 className="cta-title">Interested in xResearch?</h2>
          <p className="cta-subtitle">
            Contact us to discuss how our Intelligent Research Agents can support your R&amp;D needs.
          </p>
          <Link to="/contact" className="btn btn-primary btn-large">Get in Touch</Link>
        </motion.div>
      </section>
    </div>
  )
}
