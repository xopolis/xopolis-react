import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp, stagger } from '../lib/animations'
import './government.css'

const vp = { once: true, amount: 0.2 } as const

export default function Government() {
  return (
    <div className="p-government">
      <motion.header
        className="page-header"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={fadeUp}>Government Services</motion.h1>
        <motion.p variants={fadeUp}>
          Xopolis Inc is a registered federal contractor providing AI-powered research and development services.
        </motion.p>
      </motion.header>

      <section className="section">
        <div className="section-container">
          <motion.div
            className="sbir-banner"
            initial="hidden"
            whileInView="show"
            viewport={vp}
            variants={fadeUp}
          >
            <h2>NSF Small Business Innovation Research</h2>
            <p>Phase I Awardee — Award #1585263</p>
            <a href="https://www.sbir.gov/sbirsearch/detail/1585263" target="_blank" rel="noreferrer">
              View Award on SBIR.gov
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            className="credentials-grid"
            initial="hidden"
            whileInView="show"
            viewport={vp}
            variants={stagger}
          >
            <motion.div className="credential-card" variants={fadeUp}>
              <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                </svg>
                Registration Details
              </h3>
              <ul className="credential-list">
                <li>
                  <span className="credential-label">Legal Name</span>
                  <span className="credential-value">Xopolis Inc</span>
                </li>
                <li>
                  <span className="credential-label">Entity Type</span>
                  <span className="credential-value">Virginia C-Corporation</span>
                </li>
                <li>
                  <span className="credential-label">Founded</span>
                  <span className="credential-value">July 6, 2017</span>
                </li>
                <li>
                  <span className="credential-label">Headquarters</span>
                  <span className="credential-value">Herndon, Virginia</span>
                </li>
              </ul>
            </motion.div>

            <motion.div className="credential-card" variants={fadeUp}>
              <h3>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                Compliance &amp; Security
              </h3>
              <ul className="credential-list">
                <li>
                  <span className="credential-label">ProtoBots Platform</span>
                  <span className="credential-value">SOC 2 Type II</span>
                </li>
                <li>
                  <span className="credential-label">HeuriSight Platform</span>
                  <span className="credential-value">FERPA Compliant</span>
                </li>
                <li>
                  <span className="credential-label">xResearch Services</span>
                  <span className="credential-value">Ethical AI Standards</span>
                </li>
                <li>
                  <span className="credential-label">Data Handling</span>
                  <span className="credential-value">Enterprise Grade</span>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          <motion.div
            className="capabilities-section"
            initial="hidden"
            whileInView="show"
            viewport={vp}
            variants={fadeUp}
          >
            <h2>Core Capabilities</h2>
            <motion.div
              className="capabilities-grid"
              initial="hidden"
              whileInView="show"
              viewport={vp}
              variants={stagger}
            >
              <motion.div className="capability-card" variants={fadeUp}>
                <h4>AI-Powered Research</h4>
                <p>Intelligent Research Agents (IRAs) for automated data analysis, literature review, and research synthesis.</p>
              </motion.div>
              <motion.div className="capability-card" variants={fadeUp}>
                <h4>Workforce Analytics</h4>
                <p>World of Work data mapping with granular skills and capabilities analysis across industries.</p>
              </motion.div>
              <motion.div className="capability-card" variants={fadeUp}>
                <h4>Learning Analytics</h4>
                <p>Cognitive assessment and learning pattern analysis for educational institutions.</p>
              </motion.div>
              <motion.div className="capability-card" variants={fadeUp}>
                <h4>Custom AI Development</h4>
                <p>Tailored AI solutions with multi-LLM orchestration and enterprise security.</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="cta">
        <motion.div
          className="cta-container"
          initial="hidden"
          whileInView="show"
          viewport={vp}
          variants={stagger}
        >
          <motion.h2 className="cta-title" variants={fadeUp}>Partner with Xopolis</motion.h2>
          <motion.p className="cta-subtitle" variants={fadeUp}>
            Interested in leveraging our AI capabilities for government projects? Let’s discuss how we can help.
          </motion.p>
          <motion.div variants={fadeUp}>
            <Link to="/contact" className="btn btn-primary btn-large">Contact Us</Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
