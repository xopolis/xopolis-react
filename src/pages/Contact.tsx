import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import './contact.css'

const vp = { once: true, amount: 0.2 } as const

export default function Contact() {
  return (
    <div className="p-contact">
      <motion.header
        className="page-header"
        initial="hidden"
        whileInView="show"
        viewport={vp}
        variants={fadeUp}
      >
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Let's discuss how Xopolis can help your organization.</p>
      </motion.header>

      <section className="section">
        <div className="section-container">
          <motion.div
            className="contact-grid"
            initial="hidden"
            whileInView="show"
            viewport={vp}
            variants={fadeUp}
          >
            <div className="contact-info">
              <h2>Get in Touch</h2>

              <div className="contact-method">
                <h3>Email</h3>
                <p><a href="mailto:sales@xopol.is">sales@xopol.is</a></p>
              </div>

              <div className="contact-method">
                <h3>Headquarters</h3>
                <p>Herndon, Virginia<br />United States</p>
              </div>

              <div className="contact-method">
                <h3>For Platform Support</h3>
                <p>
                  HeuriSight: <a href="https://www.heurisight.com/contact" target="_blank">heurisight.com/contact</a><br />
                  ProtoBots: <a href="mailto:support@protobots.ai">support@protobots.ai</a>
                </p>
              </div>
            </div>

            <div className="contact-form" id="contactFormContainer">
              <h2>Send a Message</h2>
              <form name="contact-request" method="POST" action="/contact-success" data-netlify="true" netlify-honeypot="bot-field" id="contactForm">
                <input type="hidden" name="form-name" value="contact-request" />
                <p style={{ display: 'none' }}>
                  <label>Don't fill this out: <input name="bot-field" /></label>
                </p>

                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" name="name" required />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input type="email" id="email" name="email" required />
                </div>

                <div className="form-group">
                  <label htmlFor="organization">Organization</label>
                  <input type="text" id="organization" name="organization" />
                </div>

                <div className="form-group">
                  <label htmlFor="interest">Area of Interest</label>
                  <select id="interest" name="interest" required>
                    <option value="">Select an option...</option>
                    <option value="heurisight">HeuriSight (Education)</option>
                    <option value="protobots">ProtoBots (Enterprise)</option>
                    <option value="xresearch">xResearch (Research Services)</option>
                    <option value="government">Government Contracting</option>
                    <option value="partnership">Partnership Inquiry</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required placeholder="Tell us about your needs..."></textarea>
                </div>

                <button type="submit" className="form-submit">Send Message</button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
