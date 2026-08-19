import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import './tokosmart.css'

export default function Tokosmart() {
  return (
    <div className="p-tokosmart">
      <motion.div initial="hidden" animate="show" variants={fadeUp}>
        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <span className="eyebrow">Bookkeeping for small shops</span>
              <h1>TokoSmart</h1>
              <div className="sub">Simple bookkeeping for your warung.</div>
              <div className="sub-id">Pembukuan sederhana untuk warungmu.</div>
              <p className="lead">
                TokoSmart is an Android app that helps small shop (warung) owners in Indonesia record
                sales, manage stock, track expenses, and see their profit — in Bahasa Indonesia and
                English.
              </p>
              <div className="prodby">
                <svg viewBox="0 0 24 24" fill="none" stroke="#1f7a43" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 7 12 3 4 7v10l8 4 8-4z" />
                  <path d="M4 7l8 4 8-4M12 11v10" />
                </svg>
                A product of Xopolis Inc
              </div>
              <div className="cta">
                <a className="btn btn-p" href="https://tokosmart.protobots.ai/">Open TokoSmart</a>
                <a className="btn btn-s" href="https://tokosmart.protobots.ai/">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="#1f7a43">
                    <path d="M17.6 9.5 15 6.9l1-1.7a.5.5 0 1 0-.9-.5l-1 1.8a7 7 0 0 0-6.2 0l-1-1.8a.5.5 0 1 0-.9.5l1 1.7a6.6 6.6 0 0 0-3.3 5.6h16a6.6 6.6 0 0 0-3.3-5.6zM9 10.3a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4zm6 0a.7.7 0 1 1 0-1.4.7.7 0 0 1 0 1.4z" />
                  </svg>
                  Available on Android
                </a>
              </div>
            </div>
            <div className="phone">
              <img src="/assets/tokosmart/tokosmart-app-screenshot.jpg" alt="TokoSmart app screenshot" />
            </div>
          </div>
        </section>

        <section className="feat">
          <div className="wrap">
            <h2>Everything your shop needs</h2>
            <p className="fsub">Built for first-time smartphone users — clear, fast, and works offline.</p>
            <div className="cards">
              <div className="card">
                <div className="ico">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 3h2l2.4 12.4a2 2 0 0 0 2 1.6h7.7a2 2 0 0 0 2-1.6L21 8H6" />
                    <circle cx="9" cy="20" r="1" />
                    <circle cx="18" cy="20" r="1" />
                  </svg>
                </div>
                <h3>Record sales</h3>
                <p>Log every sale in seconds and watch today's profit add up.</p>
              </div>
              <div className="card">
                <div className="ico">
                  <svg viewBox="0 0 24 24">
                    <path d="M21 8 12 3 3 8l9 5 9-5z" />
                    <path d="M3 8v8l9 5 9-5V8" />
                    <path d="M12 13v8" />
                  </svg>
                </div>
                <h3>Manage stock</h3>
                <p>Add products and get low-stock alerts so you never run out.</p>
              </div>
              <div className="card">
                <div className="ico">
                  <svg viewBox="0 0 24 24">
                    <path d="M4 19V5" />
                    <path d="M4 19h16" />
                    <path d="M8 17v-5M12 17V8M16 17v-7" />
                  </svg>
                </div>
                <h3>See reports</h3>
                <p>Sales, expenses, and profit &amp; loss — download as PDF.</p>
              </div>
              <div className="card">
                <div className="ico">
                  <svg viewBox="0 0 24 24">
                    <path d="M3 17l5-5 4 4 8-8" />
                    <path d="M21 8v5h-5" />
                  </svg>
                </div>
                <h3>Plan ahead</h3>
                <p>Simulate inventory and cash flow for the weeks to come.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="band">
          <div className="wrap">
            <h2>TokoSmart is a product of <span>Xopolis Inc.</span></h2>
            <p>
              Xopolis builds evidence-backed tools that put expert judgment in people's hands —
              including simple, AI-assisted bookkeeping for Indonesia's micro-retailers.
            </p>
            <a className="link" href="https://xopol.is">
              Visit xopol.is
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7M9 7h8v8" />
              </svg>
            </a>
          </div>
        </section>
      </motion.div>
    </div>
  )
}
