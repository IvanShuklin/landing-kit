import type { NicheConfig } from '../config'
import { Section } from '../components/Section'

interface Props {
  steps: NicheConfig['steps']
  cta: string
}

export function Steps({ steps, cta }: Props) {
  return (
    <Section id="steps" title={steps.title} tone="muted">
      <ol className="steps">
        {steps.items.map((item, index) => (
          <li key={item.title} className="step">
            <span className="step__number">{String(index + 1).padStart(2, '0')}</span>
            <h3 className="step__title">{item.title}</h3>
            <p className="step__text">{item.description}</p>
          </li>
        ))}
      </ol>
      <div className="section__cta">
        <a href="#form" className="btn btn--primary btn--lg">
          {cta}
        </a>
      </div>
    </Section>
  )
}
