import { projects } from '../../data/projects.ts'
import './Work.css'

export default function Work() {
  return (
    <section className="work" id="work" aria-labelledby="work-title">
      <h2 className="section-title" id="work-title">
        Selected Work
      </h2>

      <ul className="grid work-grid">
        {projects.map((project) => (
          <li className={`card card--${project.color} work-card`} key={project.id}>
            <p className="work-category mono">{project.category}</p>

            <h3 className="work-title">{project.title}</h3>

            <p className="work-description mono">{project.description}</p>

            <ul className="work-stack" aria-label={`${project.title} stack`}>
              {project.stack.map((tech) => (
                <li className="work-stack-item mono" key={tech}>
                  {tech}
                </li>
              ))}
            </ul>

            <div className="work-actions">
              <a
                className="button"
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                View project <span aria-hidden="true">→</span>
              </a>

              {project.liveUrl ? (
                <a
                  className="button"
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Live <span aria-hidden="true">→</span>
                </a>
              ) : null}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
