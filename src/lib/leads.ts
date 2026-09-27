export interface LeadPayload {
  niche: string
  contact: {
    name: string
    phone: string
  }
  fields: Record<string, string>
  utm: Record<string, string>
  page: string
  referrer: string
  createdAt: string
}

const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'yclid', 'gclid']
const UTM_STORAGE_KEY = 'lead_utm'

export function captureUtm(): void {
  const params = new URLSearchParams(window.location.search)
  const utm: Record<string, string> = {}
  for (const key of UTM_KEYS) {
    const value = params.get(key)
    if (value) utm[key] = value
  }
  if (Object.keys(utm).length === 0) return
  try {
    sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(utm))
  } catch {
    return
  }
}

function readUtm(): Record<string, string> {
  try {
    return JSON.parse(sessionStorage.getItem(UTM_STORAGE_KEY) ?? '{}')
  } catch {
    return {}
  }
}

export function buildLead(niche: string, values: Record<string, string>): LeadPayload {
  const { name = '', phone = '', ...rest } = values
  return {
    niche,
    contact: { name: name.trim(), phone },
    fields: rest,
    utm: readUtm(),
    page: window.location.href,
    referrer: document.referrer,
    createdAt: new Date().toISOString(),
  }
}

export async function submitLead(lead: LeadPayload): Promise<void> {
  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT

  if (!endpoint) {
    console.info('[lead] VITE_LEAD_ENDPOINT не задан, заявка:', lead)
    await new Promise((resolve) => setTimeout(resolve, 700))
    return
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(lead),
  })

  if (!response.ok) {
    throw new Error(`Lead submit failed: ${response.status}`)
  }
}
