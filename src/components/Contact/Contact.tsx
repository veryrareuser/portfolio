import { site } from '../../data/site.ts'
import './Contact.css'

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact-inner">
        <h2 className="contact-title" id="contact-title">
          Got a project?
          <br />
          Let&rsquo;s talk.
        </h2>

        <p className="contact-lede mono">
          Open to internships, freelance work and full-time roles. Send a note and
          I&rsquo;ll get back to you.
        </p>

        <a className="contact-email mono" href={`mailto:${site.email}`}>
          {site.email}
        </a>

        <ul className="contact-links">
          <li>
            <a className="mono" href={site.githubUrl} target="_blank" rel="noreferrer noopener">
              GitHub <span aria-hidden="true">↗</span>
            </a>
          </li>
          <li>
            <a className="mono" href={site.instagramUrl} target="_blank" rel="noreferrer noopener">
              Instagram <span aria-hidden="true">↗</span>
            </a>
          </li>
          <li>
            <a className="mono" href={`mailto:${site.email}`}>
              Email <span aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}
