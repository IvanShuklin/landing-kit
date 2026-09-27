import type { FormField } from '../config/types'

interface Props {
  field: FormField
  value: string
  error?: string
  onChange: (value: string) => void
}

function today(): string {
  const now = new Date()
  now.setMinutes(now.getMinutes() - now.getTimezoneOffset())
  return now.toISOString().slice(0, 10)
}

export function FormFieldInput({ field, value, error, onChange }: Props) {
  const id = `field-${field.name}`
  const common = {
    id,
    name: field.name,
    value,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? `${id}-error` : undefined,
    className: 'field__control',
  }

  let control
  switch (field.type) {
    case 'select':
      control = (
        <select {...common} onChange={(e) => onChange(e.target.value)} data-empty={!value}>
          <option value="">Выберите вариант</option>
          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      )
      break
    case 'textarea':
      control = <textarea {...common} rows={3} placeholder={field.placeholder} onChange={(e) => onChange(e.target.value)} />
      break
    case 'date':
      control = <input {...common} type="date" min={today()} onChange={(e) => onChange(e.target.value)} data-empty={!value} />
      break
    case 'tel':
      control = (
        <input
          {...common}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      )
      break
    default:
      control = (
        <input
          {...common}
          type="text"
          autoComplete={field.name === 'name' ? 'given-name' : 'off'}
          placeholder={field.placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
      )
  }

  return (
    <div className={`field${error ? ' field--error' : ''}`}>
      <label className="field__label" htmlFor={id}>
        {field.label}
        {field.required && <span className="field__required">*</span>}
      </label>
      {control}
      {error && (
        <span className="field__error" id={`${id}-error`}>
          {error}
        </span>
      )}
    </div>
  )
}
