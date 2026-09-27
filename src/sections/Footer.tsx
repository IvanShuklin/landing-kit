import type { NicheConfig } from '../config'
import { toTelHref } from '../lib/phone'

interface Props {
  brand: NicheConfig['brand']
  contacts: NicheConfig['contacts']
  cta: string
}

export function Footer({ brand, contacts, cta }: Props) {
  return (
    <footer id="contacts" className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a href="#top" className="logo">
            <span className="logo__mark">{brand.logoMark}</span>
            <span className="logo__name">{brand.name}</span>
          </a>
          <a href="#form" className="btn btn--primary">
            {cta}
          </a>
        </div>
        <dl className="footer__contacts">
          <div>
            <dt>Телефон</dt>
            <dd>
              <a href={toTelHref(contacts.phone)}>{contacts.phone}</a>
            </dd>
          </div>
          <div>
            <dt>Адрес</dt>
            <dd>{contacts.address}</dd>
          </div>
          <div>
            <dt>Режим работы</dt>
            <dd>{contacts.hours}</dd>
          </div>
          {contacts.email && (
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
              </dd>
            </div>
          )}
        </dl>
      </div>
      <div className="container footer__bottom">
        © {new Date().getFullYear()} {brand.name}
      </div>
    </footer>
  )
}
