import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp } from '../lib/animations'
import './terms.css'

export default function Terms() {
  return (
    <div className="p-terms">
      <motion.header
        className="page-header"
        initial="hidden"
        animate="show"
        variants={fadeUp}
      >
        <h1>Terms of Service</h1>
        <p>Last updated: January 29, 2026</p>
      </motion.header>

      <div className="legal-content">
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using the services provided by Xopolis Inc ("Company," "we," "our"), including
          our websites (xopol.is, heurisight.com, protobots.ai) and platforms, you agree to be bound by
          these Terms of Service. If you do not agree, please do not use our services.
        </p>

        <p>
          Each platform also has its own specific terms:
        </p>
        <ul>
          <li><a href="https://www.heurisight.com/terms.html">HeuriSight Terms of Service</a></li>
          <li><a href="https://www.heurisight.com/fair-use.html">HeuriSight Fair Use Policy</a></li>
          <li><a href="https://www.protobots.ai/terms">ProtoBots Terms of Service</a></li>
        </ul>

        <h2>2. Description of Services</h2>
        <p>Xopolis Inc provides AI-powered platforms and services, including:</p>
        <ul>
          <li><strong><a href="https://www.heurisight.com">HeuriSight</a>:</strong> AI learning analytics for educational institutions</li>
          <li><strong><a href="https://www.protobots.ai">ProtoBots</a>:</strong> Enterprise AI automation and bot building platform</li>
          <li><strong><Link to="/platforms/xresearch">xResearch</Link>:</strong> Intelligent research agents for R&D services</li>
        </ul>

        <h2>3. User Accounts</h2>
        <p>
          Certain services require account registration. You agree to provide accurate information and
          maintain the security of your account credentials. You are responsible for all activities
          under your account.
        </p>

        <h2>4. Acceptable Use</h2>
        <p>You agree not to:</p>
        <ul>
          <li>Use our services for unlawful purposes</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Interfere with the proper functioning of our services</li>
          <li>Transmit malicious code or harmful content</li>
          <li>Violate intellectual property rights</li>
          <li>Use our AI systems to generate harmful or misleading content</li>
        </ul>

        <h2>5. Intellectual Property</h2>
        <p>
          All content, features, and functionality of our services are owned by Xopolis Inc and are
          protected by intellectual property laws. You may not copy, modify, distribute, or create
          derivative works without our express permission.
        </p>

        <h2>6. User Content</h2>
        <p>
          You retain ownership of content you submit to our platforms. By submitting content, you grant
          us a license to use, process, and display that content as necessary to provide our services.
          We do not use your content to train our AI models without explicit consent.
        </p>

        <h2>7. Privacy</h2>
        <p>
          Your use of our services is subject to our <Link to="/privacy">Privacy Policy</Link>, which
          describes how we collect, use, and protect your information.
        </p>

        <h2>8. Disclaimer of Warranties</h2>
        <p>
          Our services are provided "as is" without warranties of any kind. We do not guarantee that
          our services will be uninterrupted, error-free, or meet your specific requirements.
        </p>

        <h2>9. Limitation of Liability</h2>
        <p>
          To the maximum extent permitted by law, Xopolis Inc shall not be liable for any indirect,
          incidental, special, consequential, or punitive damages arising from your use of our services.
        </p>

        <h2>10. Indemnification</h2>
        <p>
          You agree to indemnify and hold harmless Xopolis Inc from any claims, damages, or expenses
          arising from your violation of these terms or your use of our services.
        </p>

        <h2>11. Termination</h2>
        <p>
          We may suspend or terminate your access to our services at any time for violations of these
          terms or for any other reason. Upon termination, your right to use our services ceases immediately.
        </p>

        <h2>12. Governing Law</h2>
        <p>
          These terms are governed by the laws of the Commonwealth of Virginia, United States, without
          regard to conflict of law principles.
        </p>

        <h2>13. Changes to Terms</h2>
        <p>
          We may modify these terms at any time. Continued use of our services after changes constitutes
          acceptance of the modified terms.
        </p>

        <h2>14. Contact Information</h2>
        <p>
          For questions about these Terms of Service, contact us at:
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
