import { motion } from 'framer-motion'
import { fadeUp } from '../lib/animations'
import './privacy.css'

export default function Privacy() {
  return (
    <div className="p-privacy">
      <motion.header
        className="page-header"
        initial="hidden"
        animate="show"
        variants={fadeUp}
      >
        <h1>Privacy Policy</h1>
        <p>Last updated: January 29, 2026</p>
      </motion.header>

      <div className="legal-content">
        <h2>1. Introduction</h2>
        <p>
          Xopolis Inc ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your information when you visit our websites (xopol.is,
          heurisight.com, protobots.ai) or use our services.
        </p>

        <p>
          Each of our platforms also maintains its own detailed privacy policy:
        </p>
        <ul>
          <li><a href="https://www.heurisight.com/privacy.html">HeuriSight Privacy Policy</a> — specific to educational data and FERPA compliance</li>
          <li><a href="https://www.protobots.ai/privacy">ProtoBots Privacy Policy</a> — specific to enterprise AI and SOC 2 compliance</li>
        </ul>

        <h2>2. Information We Collect</h2>

        <h3>Information You Provide</h3>
        <p>We collect information you voluntarily provide, including:</p>
        <ul>
          <li>Contact information (name, email, organization)</li>
          <li>Account registration details</li>
          <li>Communications you send to us</li>
          <li>Survey responses and feedback</li>
        </ul>

        <h3>Automatically Collected Information</h3>
        <p>When you access our services, we may automatically collect:</p>
        <ul>
          <li>Device information (browser type, operating system)</li>
          <li>Log data (IP address, access times, pages viewed)</li>
          <li>Usage patterns and preferences</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <p>We use collected information to:</p>
        <ul>
          <li>Provide and maintain our services</li>
          <li>Respond to your inquiries and requests</li>
          <li>Send administrative communications</li>
          <li>Improve and optimize our platforms</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2>4. Data Sharing and Disclosure</h2>
        <p>
          We do not sell your personal information. We may share information with:
        </p>
        <ul>
          <li>Service providers who assist our operations</li>
          <li>Legal authorities when required by law</li>
          <li>Business partners with your consent</li>
        </ul>

        <h2>5. Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your information, including
          encryption, access controls, and regular security assessments. Our ProtoBots platform maintains
          SOC 2 Type II compliance, and HeuriSight is FERPA compliant.
        </p>

        <h2>6. Your Rights</h2>
        <p>Depending on your location, you may have rights to:</p>
        <ul>
          <li>Access your personal information</li>
          <li>Correct inaccurate data</li>
          <li>Request deletion of your data</li>
          <li>Object to certain processing</li>
          <li>Data portability</li>
        </ul>

        <h2>7. Cookies and Tracking</h2>
        <p>
          We use cookies and similar technologies to enhance your experience. You can control cookie
          preferences through your browser settings.
        </p>

        <h2>8. Children's Privacy</h2>
        <p>
          Our services are not directed to children under 13. We do not knowingly collect information
          from children under 13. If you believe we have collected such information, please contact us.
        </p>

        <h2>9. Changes to This Policy</h2>
        <p>
          We may update this policy periodically. We will notify you of material changes by posting the
          new policy on this page with an updated effective date.
        </p>

        <h2>10. Contact Us</h2>
        <p>
          For questions about this Privacy Policy or our data practices, contact us at:
        </p>
        <p>
          <strong>Xopolis Inc</strong><br />
          Email: <a href="mailto:support@xopol.is">support@xopol.is</a><br />
          Herndon, Virginia, United States
        </p>
      </div>
    </div>
  )
}
