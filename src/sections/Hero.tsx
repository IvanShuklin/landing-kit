import type { NicheConfig } from '../config'
import { CtaButton } from '../components/CtaButton'

interface Props {
  hero: NicheConfig['hero']
}

export function Hero({ hero }: Props) {
  return (
    <section id="top" className="hero">
      <div className="container hero__inner">
        <div className="hero__content">
          <span className="hero__eyebrow">{hero.eyebrow}</span>
          <h1 className="hero__title">{hero.title}</h1>
          <p className="hero__subtitle">{hero.subtitle}</p>
          <CtaButton size="lg" className="hero__cta">
            {hero.cta}
          </CtaButton>
          <dl className="hero__stats">
            {hero.stats.map((stat) => (
              <div key={stat.label} className="hero__stat">
                <dt>{stat.value}</dt>
                <dd>{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="hero__media">
          <img className="hero__image" src={hero.image.src} alt={hero.image.alt} fetchPriority="high" />
        </div>
      </div>
    </section>
  )
}
