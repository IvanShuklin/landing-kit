import { config } from './config'
import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Services } from './sections/Services'
import { Advantages } from './sections/Advantages'
import { Steps } from './sections/Steps'
import { Reviews } from './sections/Reviews'
import { Faq } from './sections/Faq'
import { Footer } from './sections/Footer'

export function App() {
  return (
    <>
      <Header brand={config.brand} nav={config.nav} phone={config.contacts.phone} cta={config.hero.cta} />
      <main>
        <Hero niche={config.id} hero={config.hero} form={config.form} />
        <Services services={config.services} />
        <Advantages advantages={config.advantages} />
        <Steps steps={config.steps} cta={config.hero.cta} />
        <Reviews reviews={config.reviews} />
        <Faq faq={config.faq} />
      </main>
      <Footer brand={config.brand} contacts={config.contacts} cta={config.hero.cta} />
    </>
  )
}
