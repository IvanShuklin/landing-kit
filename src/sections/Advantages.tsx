import type { NicheConfig } from '../config'
import { Section } from '../components/Section'

interface Props {
  advantages: NicheConfig['advantages']
}

export function Advantages({ advantages }: Props) {
  return (
    <Section id="advantages" title={advantages.title} tone="dark">
      <div className="grid grid--4">
        {advantages.items.map((item) => (
          <article key={item.title} className="feature">
            <span className="feature__icon">{item.icon}</span>
            <h3 className="feature__title">{item.title}</h3>
            <p className="feature__text">{item.description}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
