import { useState, type FormEvent } from 'react'
import type { FormField } from '../config/types'
import { buildLead, submitLead } from '../lib/leads'
import { formatPhone, isValidPhone } from '../lib/phone'

export type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

type Values = Record<string, string>
type Errors = Record<string, string>

function initialValues(fields: FormField[]): Values {
  return Object.fromEntries(fields.map((field) => [field.name, '']))
}

function validate(fields: FormField[], values: Values): Errors {
  const errors: Errors = {}
  for (const field of fields) {
    const value = values[field.name]?.trim() ?? ''
    if (field.required && !value) {
      errors[field.name] = 'Заполните поле'
    } else if (field.type === 'tel' && value && !isValidPhone(value)) {
      errors[field.name] = 'Введите номер полностью'
    }
  }
  return errors
}

export function useLeadForm(niche: string, fields: FormField[]) {
  const [values, setValues] = useState<Values>(() => initialValues(fields))
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<FormStatus>('idle')

  const setValue = (field: FormField, raw: string) => {
    const value = field.type === 'tel' ? formatPhone(raw) : raw
    setValues((prev) => ({ ...prev, [field.name]: value }))
    if (errors[field.name]) {
      setErrors((prev) => {
        const next = { ...prev }
        delete next[field.name]
        return next
      })
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validate(fields, values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    try {
      await submitLead(buildLead(niche, values))
      setStatus('success')
      setValues(initialValues(fields))
    } catch {
      setStatus('error')
    }
  }

  const reset = () => setStatus('idle')

  return { values, errors, status, setValue, handleSubmit, reset }
}
