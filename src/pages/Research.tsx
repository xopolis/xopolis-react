import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/animations'
import './research.css'

const vp = { once: true, amount: 0.2 } as const

export default function Research() {
  return (
    <div className="p-research">
      <motion.header
        className="page-header"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        <motion.h1 variants={fadeUp}>Our Research</motion.h1>
        <motion.p variants={fadeUp}>
          We explore how people and businesses work to uncover opportunities and refine our AI tools.
        </motion.p>
      </motion.header>

      <section className="section">
        <div className="section-container">
          <motion.div
            className="sbir-highlight"
            initial="hidden"
            whileInView="show"
            viewport={vp}
            variants={fadeUp}
          >
            <h3>NSF SBIR Phase I Awardee</h3>
            <p>The National Science Foundation has awarded Xopolis an innovation award to map the World of Work.</p>
            <a href="https://www.sbir.gov/sbirsearch/detail/1585263" target="_blank">View Award Details →</a>
          </motion.div>

          <div className="research-category">
            <motion.div
              className="section-header"
              initial="hidden"
              whileInView="show"
              viewport={vp}
              variants={fadeUp}
            >
              <h2>World of Work Research</h2>
              <p>Our efforts to map the nature of work and create actionable workforce intelligence.</p>
            </motion.div>

            <motion.ul
              className="publication-list"
              initial="hidden"
              whileInView="show"
              viewport={vp}
              variants={stagger}
            >
              <motion.li className="publication-item" variants={fadeUp}>
                <h4>World of Work Data Initiative</h4>
                <p>An unmatched dataset containing granular data on skills and capabilities driving our economy, parsed at geography, industry, and firm levels.</p>
                <a href="https://www.sbir.gov/sbirsearch/detail/1585263" target="_blank">View SBIR Award →</a>
              </motion.li>
              <motion.li className="publication-item" variants={fadeUp}>
                <h4>Global Trade and Logistics LA Regional Dashboard</h4>
                <p>Interactive Power BI dashboard analyzing trade and logistics data for the Los Angeles region.</p>
                <a href="https://app.powerbi.com/view?r=eyJrIjoiM2JmYzQ2MzUtYTQ2Ny00MWMzLWIxNjctNjQ0M2Q5ZWQxNzQ2IiwidCI6IjQ4ZWU5NmUzLWViZjYtNDQ3MS04MWNlLTEzODliYjMyYjM4MCJ9" target="_blank">View Dashboard →</a>
              </motion.li>
            </motion.ul>
          </div>

          <div className="research-category">
            <motion.div
              className="section-header"
              initial="hidden"
              whileInView="show"
              viewport={vp}
              variants={fadeUp}
            >
              <h2>Small Business Research</h2>
              <p>Research supporting daily efforts across industries, disciplines, and needs.</p>
            </motion.div>

            <motion.ul
              className="publication-list"
              initial="hidden"
              whileInView="show"
              viewport={vp}
              variants={stagger}
            >
              <motion.li className="publication-item" variants={fadeUp}>
                <h4>Economic Impact Data Dashboard</h4>
                <p>Comprehensive economic impact analysis for regional decision-making.</p>
                <a href="https://edcollaborative.com/economic-strategy/economic-impact-data/" target="_blank">View Dashboard →</a>
              </motion.li>
              <motion.li className="publication-item" variants={fadeUp}>
                <h4>Trade Manufacturers in the LA Region</h4>
                <p>Analysis of careers in global trade and logistics, produced in partnership with EDC.</p>
                <a href="https://edcollaborative.com/wp-content/uploads/2020/02/EDC-Careers-in-Global-Trade-and-Logistics-final-1.pdf" target="_blank">View Report (PDF) →</a>
              </motion.li>
              <motion.li className="publication-item" variants={fadeUp}>
                <h4>Business Migration Study (EDCVC)</h4>
                <p>Research on business relocation patterns and economic implications.</p>
                <a href="https://edcollaborative.com/wp-content/uploads/2019/10/Business-Migration-Report-2.pdf" target="_blank">View Report (PDF) →</a>
              </motion.li>
              <motion.li className="publication-item" variants={fadeUp}>
                <h4>African American Entrepreneurs: Challenges and Contributions</h4>
                <p>SBA-funded research examining the entrepreneurial landscape for African American business owners.</p>
              </motion.li>
            </motion.ul>
          </div>

          <div className="research-category">
            <motion.div
              className="section-header"
              initial="hidden"
              whileInView="show"
              viewport={vp}
              variants={fadeUp}
            >
              <h2>Entrepreneurial Ecosystems</h2>
              <p>Exploring the nature of how businesses start, grow, and support their communities.</p>
            </motion.div>

            <motion.ul
              className="publication-list"
              initial="hidden"
              whileInView="show"
              viewport={vp}
              variants={stagger}
            >
              <motion.li className="publication-item" variants={fadeUp}>
                <h4>Ventura County's Entrepreneurial Ecosystem</h4>
                <p>Comprehensive analysis of the entrepreneurial landscape in Ventura County, California.</p>
                <a href="https://edcollaborative.com/wp-content/uploads/2019/05/EDC-Xopolis-Report-final.pdf" target="_blank">View Report (PDF) →</a>
              </motion.li>
              <motion.li className="publication-item" variants={fadeUp}>
                <h4>Economic Ecosystems — Oxford Handbook</h4>
                <p>Academic contribution to the understanding of economic ecosystems and their dynamics.</p>
                <a href="http://www.measuringentrepreneurship.com/auerswald-dani_economic-ecosystems_OUP_working_paper.pdf" target="_blank">View Working Paper →</a>
              </motion.li>
              <motion.li className="publication-item" variants={fadeUp}>
                <h4>The Adaptive Lifecycle of Entrepreneurial Ecosystems</h4>
                <p>Published in Small Business Economics, 2017. Research on how entrepreneurial ecosystems evolve and adapt.</p>
                <a href="https://link.springer.com/epdf/10.1007/s11187-017-9869-3" target="_blank">View Article →</a>
              </motion.li>
            </motion.ul>
          </div>
        </div>
      </section>
    </div>
  )
}
