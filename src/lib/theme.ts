import type { NicheConfig } from '../config'

export function applyConfigToDocument(config: NicheConfig): void {
  const root = document.documentElement
  root.style.setProperty('--accent', config.theme.accent)
  root.style.setProperty('--accent-hover', config.theme.accentHover)
  root.style.setProperty('--accent-contrast', config.theme.accentContrast)
  root.style.setProperty('--dark', config.theme.dark)
  root.style.setProperty('--dark-soft', config.theme.darkSoft)

  document.title = config.meta.title
  document.querySelector('meta[name="description"]')?.setAttribute('content', config.meta.description)
}
