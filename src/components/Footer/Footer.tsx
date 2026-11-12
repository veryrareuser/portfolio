import { site } from '../../data/site.ts'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copy mono">
        © {new Date().getFullYear()} {site.name} — {site.location}
      </p>

      <p className="footer-copy mono">Built with React, TypeScript &amp; Tailwind CSS</p>
    </footer>
  )
}
