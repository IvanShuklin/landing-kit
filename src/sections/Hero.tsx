import type { NicheConfig } from '../config'
import { LeadForm } from '../components/LeadForm'

interface Props {
  niche: string
  hero: NicheConfig['hero']
  form: NicheConfig['form']
}

export function Hero({ niche, hero, form }: Props) {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">{hero.eyebrow}</span>
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <a href="#form" className="btn btn--primary btn--lg hero__cta">
            {hero.cta}
          </a>
          <dl className="hero__stats">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div id="form" className="hero__form">
          <LeadForm niche={niche} form={form} />
        </div>
      </div>
    </section>
  )
}
