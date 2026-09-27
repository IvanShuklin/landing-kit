import { useState } from 'react'
import type { NicheConfig } from '../config'
import { toTelHref } from '../lib/phone'

interface Props {
  brand: NicheConfig['brand']
  nav: NicheConfig['nav']
  phone: string
  cta: string
}

export function Header({ brand, nav, phone, cta }: Props) {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className={`header${open ? ' header--open' : ''}`}>
      <div className="container header__inner">
        <a href="#top" className="logo" onClick={close}>
          <span className="logo__mark">{brand.logoMark}</span>
          <span className="logo__name">{brand.name}</span>
        </a>
        <div className="header__menu">
          <nav className="header__nav">
            {nav.map((link) => (
              <a key={link.href} href={link.href} onClick={close}>
                {link.label}
              </a>
            ))}
          </nav>
          <div className="header__actions">
            <a className="header__phone" href={toTelHref(phone)}>
              {phone}
            </a>
            <a className="btn btn--primary btn--sm" href="#form" onClick={close}>
              {cta}
            </a>
          </div>
        </div>
        <button
          type="button"
          className="header__burger"
          aria-label="Меню"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
