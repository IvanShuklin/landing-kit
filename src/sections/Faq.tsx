import type { NicheConfig } from '../config'
import { Section } from '../components/Section'

interface Props {
  faq: NicheConfig['faq']
}

export function Faq({ faq }: Props) {
  return (
    <Section id="faq" title={faq.title} tone="muted">
      <div className="faq">
        {faq.items.map((item) => (
          <details key={item.question} className="faq__item">
            <summary className="faq__question">{item.question}</summary>
            <p className="faq__answer">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  )
}
