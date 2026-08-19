/**
 * EDUCAUSE presence banner — TIME-BOXED. Remove after 2026-10-02.
 * Matches the static site's `.event-strip--top`.
 */
export function EventStrip() {
  return (
    <div className="event-strip event-strip--top" data-removal-after="2026-10-02">
      <div className="wrap">
        <p>
          <img className="event-logo" src="/assets/partners/educause-e.jpg" alt="EDUCAUSE" />
          <span className="event-when">
            <span>EDUCAUSE 2026</span> <span>·</span> <span>Denver</span> <span>·</span>{' '}
            <span>Sept 29-Oct 2</span>
          </span>{' '}
          Xopolis is at Emerging Tech Experience table T4. Workshop: Designing AI-Scoreable
          Assessments: Hands-On Evidence-Gated Scoring.{' '}
          <a href="mailto:support@xopol.is" data-track="contact" data-slot="educause">
            Book a booth meeting
          </a>
          .
        </p>
      </div>
    </div>
  )
}
