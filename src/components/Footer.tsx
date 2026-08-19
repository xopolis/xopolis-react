import { Link } from 'react-router-dom'

/**
 * Shared footer. --indigo-black band, Xopolis mark reversed to white off the
 * same <symbol> as the nav. Federal-registration facts match BRAND_GUIDE.md.
 */
export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <div className="brandmark">
              <svg viewBox="0 0 935 233" role="img" aria-label="Xopolis Inc">
                <use href="#xopolis-lockup" />
              </svg>
            </div>
            <p>Systems that extend what people can judge.</p>
            <p className="contact-line">
              Herndon, Virginia · <a href="mailto:support@xopol.is">support@xopol.is</a>
            </p>
          </div>
          <div>
            <h3>Platforms</h3>
            <ul>
              <li><a href="https://heurisight.com/">HeuriSight</a></li>
              <li><a href="https://www.protobots.ai" rel="noopener">ProtoBots</a></li>
              <li>
                <a href="https://heurisight.com/xresearch/" data-track="xresearch_open" data-slot="footer">
                  xResearch
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Company</h3>
            <ul>
              <li><a href="/#platforms">Platforms</a></li>
              <li><a href="/#method">Method</a></li>
              <li><a href="/#research">Government and research</a></li>
              <li><a href="mailto:support@xopol.is">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3>Trust</h3>
            <ul>
              <li><a href="/#trust">How we handle evidence</a></li>
              <li><Link to="/privacy">Privacy</Link></li>
              <li><Link to="/terms">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="foot-reg">
          <h3>Federal registration</h3>
          <dl>
            <div><dt>Legal name</dt><dd>Xopolis Inc</dd></div>
            <div><dt>Entity</dt><dd>Virginia C-Corporation</dd></div>
            <div><dt>Incorporated</dt><dd>July 6, 2017</dd></div>
            <div><dt>Headquarters</dt><dd>Herndon, Virginia</dd></div>
            <div><dt>UEI</dt><dd>LBB3NATLFBP5</dd></div>
            <div><dt>NAICS</dt><dd>541720</dd></div>
          </dl>
        </div>

        <div className="foot-bottom">
          <span>© 2026 Xopolis Inc. · <Link to="/" aria-label="Xopolis Inc. — xopol.is">xopol.is</Link></span>
          <span>NSF SBIR Phase I awardee</span>
        </div>
      </div>
    </footer>
  )
}
