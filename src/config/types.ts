export type FieldType = 'text' | 'tel' | 'select' | 'date' | 'textarea'

export interface FormField {
  name: string
  label: string
  type: FieldType
  placeholder?: string
  required?: boolean
  options?: string[]
}

export interface NavLink {
  label: string
  href: string
}

export interface Stat {
  value: string
  label: string
}

export interface ServiceItem {
  icon: string
  title: string
  description: string
  price?: string
}

export interface FeatureItem {
  icon: string
  title: string
  description: string
}

export interface StepItem {
  title: string
  description: string
}

export interface ReviewItem {
  author: string
  meta?: string
  text: string
  rating: number
}

export interface FaqItem {
  question: string
  answer: string
}

export interface Theme {
  accent: string
  accentHover: string
  accentContrast: string
  dark: string
  darkSoft: string
}

export interface NicheConfig {
  id: string
  meta: {
    title: string
    description: string
  }
  theme: Theme
  brand: {
    name: string
    logoMark: string
  }
  contacts: {
    phone: string
    address: string
    hours: string
    email?: string
  }
  nav: NavLink[]
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    cta: string
    stats: Stat[]
  }
  services: {
    title: string
    subtitle: string
    items: ServiceItem[]
  }
  advantages: {
    title: string
    items: FeatureItem[]
  }
  steps: {
    title: string
    items: StepItem[]
  }
  reviews: {
    title: string
    items: ReviewItem[]
  }
  faq: {
    title: string
    items: FaqItem[]
  }
  form: {
    title: string
    subtitle: string
    submitLabel: string
    successTitle: string
    successText: string
    consent: string
    fields: FormField[]
  }
}
