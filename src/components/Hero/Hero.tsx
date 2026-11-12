import { heroTags } from '../../data/site.ts'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <h1 className="hero-title" id="hero-title">
        I build
        <br />
        software
        <br />
        that works.
      </h1>

      <p className="hero-lede mono">
        Information Systems undergraduate building full-stack products — C#, .NET,
        Laravel, React and TypeScript. Based in Tangerang, Indonesia.
      </p>

      <ul className="hero-tags" aria-label="Technologies I work with">
        {heroTags.map((tag) => (
          <li className="tag mono" key={tag}>
            {tag}
          </li>
        ))}
      </ul>
    </section>
  )
}
