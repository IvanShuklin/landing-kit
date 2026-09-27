import type { ReactNode } from 'react'

interface Props {
  id: string
  title: string
  subtitle?: string
  tone?: 'light' | 'muted' | 'dark'
  children: ReactNode
}

export function Section({ id, title, subtitle, tone = 'light', children }: Props) {
  return (
    <section id={id} className={`section section--${tone}`}>
      <div className="container">
        <header className="section__head">
          <h2 className="section__title">{title}</h2>
          {subtitle && <p className="section__subtitle">{subtitle}</p>}
        </header>
        {children}
      </div>
    </section>
  )
}
