import { services } from '../../data/site.ts'
import './Services.css'

export default function Services() {
  return (
    <section className="services" aria-labelledby="services-title">
      <h2 className="visually-hidden" id="services-title">
        What I do
      </h2>

      <ul className="services-strip">
        {services.map((service) => (
          <li className="service" key={service.number}>
            <span className="service-number" aria-hidden="true">
              {service.number}
            </span>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description mono">{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
