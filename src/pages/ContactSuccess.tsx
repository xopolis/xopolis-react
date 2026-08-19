import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp } from '../lib/animations'
import './contact-success.css'

export default function ContactSuccess() {
  return (
    <motion.div className="p-contact-success" initial="hidden" animate="show" variants={fadeUp}>
      <header className="page-header">
        <h1>Message Sent</h1>
        <p>Thanks for reaching out — we’ll reply within 1–2 business days.</p>
      </header>

      <section className="section">
        <div className="section-container">
          <div className="card">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <h2>Thank you.</h2>
            <p>If your inquiry is urgent, email <a href="mailto:sales@xopol.is">sales@xopol.is</a>.</p>
            <Link className="btn btn-primary" to="/">Back to Home</Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
