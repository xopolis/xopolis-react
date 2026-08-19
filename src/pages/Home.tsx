import { motion } from 'framer-motion'
import { fadeUp, stagger } from '../lib/animations'
import { NodeField } from '../components/NodeField'
import { EventStrip } from '../components/EventStrip'
import { LogoMarquee } from '../components/LogoMarquee'
import './home.css'

const vp = { once: true, amount: 0.2 } as const

const PARTNERS = [
  { src: '/assets/partners/nsf-logo.png', alt: 'National Science Foundation' },
  { src: '/assets/partners/babson-logo.png', alt: 'Babson College' },
  { src: '/assets/partners/csuci-logo.png', alt: 'CSU Channel Islands' },
  { src: '/assets/partners/edc-logo.png', alt: 'EDC' },
  { src: '/assets/partners/sbdc-logo.png', alt: "America's SBDC" },
  { src: '/assets/partners/gmu-schar-cmpr-logo.png', alt: 'George Mason University — Schar School, Center for Micro-Economic Policy Research' },
]

export default function Home() {
  return (
    <>
      <EventStrip />

      {/* X1 · HERO — typographic; no lifestyle photography above the fold. */}
      <section className="x-hero">
        <div className="wrap">
          <div className="x-hero-grid">
            <motion.div variants={stagger} initial="hidden" animate="show">
              <motion.p className="eyebrow" variants={fadeUp}>Xopolis Inc.</motion.p>
              <motion.h1 variants={fadeUp}>
                Systems that extend what people can <span className="grad">judge</span>.
              </motion.h1>
              <motion.p className="lead" variants={fadeUp}>
                We build software that captures expert reasoning and makes it inspectable — in
                classrooms, inside organizations, and in applied research. Three platforms, one
                commitment: the judgment stays with the people who have it, and every conclusion
                traces back to its evidence.
              </motion.p>
              <motion.div className="hero-actions" variants={fadeUp}>
                <a
                  className="btn btn-primary btn-lg"
                  href="mailto:support@xopol.is?subject=Starting%20a%20conversation%20with%20Xopolis"
                  data-track="contact"
                  data-slot="hero"
                >
                  Start a conversation
                </a>
                <a
                  className="btn btn-ghost on-dark btn-lg"
                  href="https://heurisight.com/"
                  data-track="platform-visit"
                  data-slot="hero"
                  data-platform="heurisight"
                >
                  See HeuriSight
                </a>
              </motion.div>
              <motion.p className="bridge" style={{ margin: '18px 0 0', textAlign: 'left', maxWidth: '52ch' }} variants={fadeUp}>
                Tell us what your organization needs to see.
              </motion.p>
            </motion.div>

            <div className="x-deco" aria-hidden="true">
              <NodeField />
            </div>
          </div>
          <p className="bridge">Three platforms, built on the same idea.</p>
        </div>
      </section>

      {/* X2 · THREE PLATFORMS */}
      <section id="platforms">
        <div className="wrap">
          <motion.div className="x-head" initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
            <h2>Three platforms. One commitment.</h2>
          </motion.div>

          <motion.div className="grid g3 equal" initial="hidden" whileInView="show" viewport={vp} variants={stagger}>
            <motion.article className="card pcard a-royal" variants={fadeUp}>
              <p className="eyebrow">Higher education</p>
              <p className="pmark">
                <img src="/assets/heurisight/heurisight-mark.svg" alt="" width={96} height={96} loading="lazy" />
              </p>
              <p className="wordmark">Heuri<span className="wm-alt">Sight</span></p>
              <p className="line">See how students reason, not just what they answer.</p>
              <p className="body">
                Course assistants, team studios, case studies with digital twins and spoken
                assessments — each producing evidence of how a student reasoned, all of it
                accumulating into a model the institution owns.
              </p>
              <p className="pfoot">
                <a className="btn-link cardlink" href="https://heurisight.com/" data-track="platform-visit" data-platform="heurisight">
                  See how it works <span className="arr" aria-hidden="true">→</span>
                </a>
              </p>
            </motion.article>

            <motion.article className="card pcard a-navy" variants={fadeUp}>
              <p className="eyebrow">Organizations</p>
              <p className="pmark">
                <img src="/assets/protobots/protobots-mark-navy.png" alt="" width={96} height={96} loading="lazy" />
              </p>
              <p className="wordmark">ProtoBots</p>
              <p className="line">An internal marketplace of AI apps your organization owns.</p>
              <p className="body">
                Secure, private and organization-owned: teams customise prebuilt templates — Note
                Taker, Voice Translation, Pitch Me, Role Play AI, Design Your POC and others — into
                apps and automated workflows built for how they actually work. A workspace dashboard
                shows everything the organization has deployed, each app scoped workspace-wide or
                restricted.
              </p>
              <p className="pfoot">
                <a className="btn-link cardlink" href="https://www.protobots.ai" rel="noopener" data-track="platform-visit" data-platform="protobots">
                  Learn about ProtoBots <span className="arr" aria-hidden="true">→</span>
                </a>
              </p>
            </motion.article>

            <motion.article className="card pcard a-violet" variants={fadeUp}>
              <p className="eyebrow">Applied research</p>
              <p className="pmark">
                <img src="/assets/xresearch/xresearch-mark-navy.svg" alt="" width={96} height={96} loading="lazy" />
              </p>
              <p className="wordmark">xResearch</p>
              <p className="line">Instrumented studies on how people and AI reason together.</p>
              <p className="body">
                We publish working papers and the essays that make them readable, on reasoning,
                assessment validity and expert judgment. Each paper documents its search, states what
                it cannot show, and includes the studies that cut against our own product. NSF SBIR
                Phase I supports the underlying method.
              </p>
              <p className="pfoot">
                <a className="btn-link cardlink" href="https://heurisight.com/xresearch/" data-track="platform-visit" data-platform="xresearch">
                  Read the working papers <span className="arr" aria-hidden="true">→</span>
                </a>
                <a className="btn-link" href="mailto:support@xopol.is?subject=Question%20for%20the%20xResearch%20team" data-track="platform-visit" data-platform="xresearch">
                  Talk to the research team <span className="arr" aria-hidden="true">→</span>
                </a>
              </p>
            </motion.article>
          </motion.div>
          <p className="bridge">The same method underneath all three.</p>
        </div>
      </section>

      {/* X3 · THE METHOD */}
      <section id="method" className="band-tint">
        <div className="wrap">
          <div className="x-split">
            <motion.div className="txt" initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
              <p className="eyebrow">How it works</p>
              <h2>Mapping how work actually gets done.</h2>
              <p className="lead x-body">
                Retrieval-Augmented Generation tells a system what a document says.
                Heuristics-Augmented Generation (HAG) captures how an expert decides: the decision
                point, the cues that guided it, the mistake a novice makes there, and a confidence
                score on the extraction. Those patterns are stored as structured data owned by the
                organization that produced them — portable across models, and inspectable one by one.
              </p>
            </motion.div>
            <motion.div initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
              <div className="ambient">
                <div className="browser">
                  <div className="bar" aria-hidden="true">
                    <i></i><i></i><i></i>
                    <span className="url">model studio · captured heuristics</span>
                  </div>
                  <img
                    src="/assets/VentureStrategy_HAG_full_light_1600.png"
                    alt="A captured expert model: decision points linked to the cues that guide them and the novice errors to avoid, each carrying an extraction confidence score."
                    width={3200}
                    height={2160}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </div>
              <p className="x-figcap"><span className="badge synthetic">● Sample model · synthetic data</span></p>
            </motion.div>
          </div>
          <p className="bridge">Which matters most where the work gets reviewed.</p>
        </div>
      </section>

      {/* X4 · BUILT FOR ORGANIZATIONS THAT GET AUDITED */}
      <section id="trust">
        <div className="wrap">
          <motion.div className="x-band" initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
            <h2>Built for organizations that get audited.</h2>
            <p className="lead">
              Every conclusion our systems produce opens to the evidence underneath it: the source,
              the turn, the confidence. That is a design choice, not a reporting feature. It is what
              lets a reviewer check a claim instead of trusting a summary.
            </p>
            <p className="x-soc full">
              ProtoBots maintains SOC 2 Type 2. HeuriSight is preparing for SOC 2 Type II with Vanta,
              with continuous control monitoring in place. Education records are handled under
              FERPA-aligned practices, self-attested.
            </p>
          </motion.div>

          <motion.div className="grid g3" initial="hidden" whileInView="show" viewport={vp} variants={stagger}>
            <motion.article className="card" variants={fadeUp}>
              <h3>Traceable by default</h3>
              <p>Any output opens to its source.</p>
            </motion.article>
            <motion.article className="card" variants={fadeUp}>
              <h3>Human-adjudicated</h3>
              <p>A person approves or corrects. The record shows which.</p>
            </motion.article>
            <motion.article className="card" variants={fadeUp}>
              <h3>Model-portable</h3>
              <p>The captured reasoning is your data. Swap the model underneath it.</p>
            </motion.article>
          </motion.div>

          <p className="bridge">The research track is where the method gets tested.</p>
        </div>
      </section>

      {/* X5 · GOVERNMENT AND RESEARCH TRACK */}
      <section id="research" className="band-tint">
        <div className="wrap">
          <motion.div className="x-band" initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
            <div>
              <p className="eyebrow">Government · research</p>
              <h2>Work that has to hold up under review.</h2>
            </div>
            <p className="lead">
              Xopolis is an NSF SBIR Phase I awardee. The method behind HeuriSight is being evaluated
              in live university settings alongside our academic partners, and the reasoning behind it
              is published as a working-paper series, so a reviewer can check the work rather than take
              our word for it. We work with universities, agencies and workforce boards where the
              reasoning behind a decision has to be inspectable after the fact.
            </p>
          </motion.div>

          <motion.div className="credstrip x-partners" initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
            <LogoMarquee logos={PARTNERS} ariaLabel="Award, pilot institutions, and program and research partners" />
            <p className="disclaimer">Institutional affiliations are listed for identification purposes and do not imply institutional endorsement.</p>
          </motion.div>

          <motion.div className="x-band x-sub" initial="hidden" whileInView="show" viewport={vp} variants={fadeUp}>
            <h3>What the library measures</h3>
            <p className="x-body">
              Every claim in the working-paper series is anchored to a named construct, and every
              construct names the work that measures it, the primary sources behind it, and anything in
              the library that argues the other way. Pick one to see what the library holds on it, then
              open it there.
            </p>
          </motion.div>

          <div className="clib" id="clib">
            <p className="clib-fallback">
              The constructs, the working papers that measure them and the sources that contest them
              are published in the library itself.{' '}
              <a href="https://heurisight.com/xresearch/">Open the xResearch library</a> to read them.
            </p>
          </div>

          <p className="bridge">If any of this is a problem you have, say so.</p>
        </div>
      </section>

      {/* X7 · CLOSING BAND */}
      <section className="photo-band x-close">
        <img className="bg" src="/assets/photos/professionals-break-1600.jpg" alt="" width={1600} height={900} loading="lazy" decoding="async" />
        <motion.div className="wrap" initial="hidden" whileInView="show" viewport={vp} variants={stagger}>
          <motion.h2 variants={fadeUp}>Tell us what your organization is trying to see.</motion.h2>
          <motion.p className="lead" variants={fadeUp}>
            Whether it is a cohort, a team, or a study, the first conversation is the same: what
            decision are you trying to make visible, and who has to be able to check it?
          </motion.p>
          <motion.div className="hero-actions" variants={fadeUp}>
            <a className="btn btn-primary btn-lg" href="mailto:support@xopol.is?subject=Starting%20a%20conversation%20with%20Xopolis" data-track="contact" data-slot="closing">
              Start a conversation
            </a>
            <a className="btn btn-ghost on-dark btn-lg" href="https://heurisight.com/" data-track="platform-visit" data-slot="closing" data-platform="heurisight">
              See HeuriSight
            </a>
          </motion.div>
        </motion.div>
      </section>
    </>
  )
}
