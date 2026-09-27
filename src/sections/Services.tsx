import type { NicheConfig } from '../config'
import { Section } from '../components/Section'

interface Props {
  services: NicheConfig['services']
}

export function Services({ services }: Props) {
  return (
    <Section id="services" title={services.title} subtitle={services.subtitle}>
      <div className="grid grid--3">
        {services.items.map((item) => (
          <article key={item.title} className="card service">
            <span className="card__icon">{item.icon}</span>
            <h3 className="card__title">{item.title}</h3>
            <p className="card__text">{item.description}</p>
            {item.price && <span className="service__price">{item.price}</span>}
          </article>
        ))}
      </div>
    </Section>
  )
}
