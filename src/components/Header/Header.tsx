import { navLinks, site } from '../../data/site.ts'
import './Header.css'

export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label={`${site.name} home`}>
        {site.name}
      </a>

      <nav className="nav" aria-label="Primary">
        <ul>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
