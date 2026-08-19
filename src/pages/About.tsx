import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/animations'
import './about.css'

const vp = { once: true, amount: 0.2 } as const

export default function About() {
  return (
    <div className="p-about">
      <motion.header
        className="page-header"
        initial="hidden"
        whileInView="show"
        viewport={vp}
        variants={fadeUp}
      >
        <h1>About Xopolis</h1>
        <p>Building AI systems that augment human abilities and create symbiotic relationships between humans and technology.</p>
      </motion.header>

      <section className="section">
        <div className="section-container">
          <motion.div className="content-block" initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
            <h2>Our Mission</h2>
            <p>
              Xopolis Inc was founded with a clear vision: to extend human abilities through artificial intelligence.
              We believe that the most powerful AI systems are those that work alongside humans, not replace them.
            </p>
            <p>
              Our X-AI Intelligent Systems are designed to create symbiotic relationships that enhance efficiency
              and productivity while maintaining human oversight, judgment, and creativity at the center of every decision.
            </p>
          </motion.div>

          <motion.div className="content-block" initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
            <h2>Our Journey</h2>
            <div className="timeline">
              <div className="timeline-item">
                <div className="timeline-year">2017</div>
                <div className="timeline-content">
                  <h4>Company Founded</h4>
                  <p>Xopolis Inc established as a Virginia C-Corporation in Herndon, Virginia.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2019</div>
                <div className="timeline-content">
                  <h4>NSF I-Corps Program</h4>
                  <p>Received seed funding from the National Science Foundation Innovation Corps Program.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2020</div>
                <div className="timeline-content">
                  <h4>NSF SBIR Phase I Award</h4>
                  <p>Awarded SBIR Phase I funding for "World of Work" data mapping initiative.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2023</div>
                <div className="timeline-content">
                  <h4>ProtoBots.ai Launch</h4>
                  <p>Launched ProtoBots.ai, our enterprise AI automation platform.</p>
                </div>
              </div>
              <div className="timeline-item">
                <div className="timeline-year">2025</div>
                <div className="timeline-content">
                  <h4>HeuriSight Beta</h4>
                  <p>HeuriSight enters beta with university pilot programs at Babson College and Cal State Channel Islands.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="section-container">
          <motion.div className="content-block" initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
            <h2>Our Values</h2>
            <motion.div className="values-grid" initial="hidden" whileInView="show" viewport={vp} variants={stagger}>
              <motion.div className="value-card" variants={fadeUp}>
                <h4>Human-AI Symbiosis</h4>
                <p>We build AI that augments human capabilities, not replaces them. Every system we create keeps humans at the center of decision-making.</p>
              </motion.div>
              <motion.div className="value-card" variants={fadeUp}>
                <h4>Evidence-Based Insights</h4>
                <p>Our platforms provide traceable, verifiable outputs. No black boxes — every AI conclusion can be traced back to its source.</p>
              </motion.div>
              <motion.div className="value-card" variants={fadeUp}>
                <h4>Ethical AI Development</h4>
                <p>We are committed to responsible AI development with transparency, replicability, and ethical considerations at every step.</p>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="content-block" initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
            <h2>Company Details</h2>
            <p>
              <strong>Legal Name:</strong> Xopolis Inc<br />
              <strong>Entity Type:</strong> Virginia C-Corporation<br />
              <strong>Founded:</strong> July 6, 2017<br />
              <strong>Headquarters:</strong> Herndon, Virginia<br />
              <strong>UEI:</strong> LBB3NATLFBP5<br />
              <strong>Primary NAICS:</strong> 541720 (Research and Development in Social Sciences and Humanities)
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
