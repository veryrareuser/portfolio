import { aboutBio, stats } from '../../data/site.ts'
import Stack from './Stack.tsx'
import './About.css'

export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-title">
      <h2 className="section-title" id="about-title">
        About
      </h2>

      <div className="about-body">
        <div className="about-bio">
          {aboutBio.map((paragraph) => (
            <p className="mono" key={paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        <ul className="stats" aria-label="Career at a glance">
          {stats.map((stat) => (
            <li className="stat" key={stat.label}>
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label mono">{stat.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <Stack />
    </section>
  )
}
