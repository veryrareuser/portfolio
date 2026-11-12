import { stack } from '../../data/site.ts'

export default function Stack() {
  return (
    <div className="stack" aria-labelledby="stack-title">
      <h3 className="stack-title" id="stack-title">
        Stack
      </h3>

      <ul className="stack-list" aria-label="Technologies I use">
        {stack.map((tech) => (
          <li className="stack-chip mono" key={tech}>
            {tech}
          </li>
        ))}
      </ul>
    </div>
  )
}
