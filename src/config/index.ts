import type { NicheConfig } from './types'
import { autoservice } from './niches/autoservice'
import { renovation } from './niches/renovation'

const niches: Record<string, NicheConfig> = {
  autoservice,
  renovation,
}

const requested = import.meta.env.VITE_NICHE ?? 'autoservice'

export const config: NicheConfig = niches[requested] ?? autoservice

export type { NicheConfig } from './types'
