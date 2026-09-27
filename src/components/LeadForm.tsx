import type { NicheConfig } from '../config'
import { useLeadForm } from '../hooks/useLeadForm'
import { FormFieldInput } from './FormFieldInput'

interface Props {
  niche: string
  form: NicheConfig['form']
}

export function LeadForm({ niche, form }: Props) {
  const { values, errors, status, setValue, handleSubmit, reset } = useLeadForm(niche, form.fields)

  if (status === 'success') {
    return (
      <div className="lead-form lead-form--success">
        <div className="lead-form__success-icon">✓</div>
        <h3 className="lead-form__title">{form.successTitle}</h3>
        <p className="lead-form__subtitle">{form.successText}</p>
        <button type="button" className="btn btn--ghost" onClick={reset}>
          Отправить ещё одну
        </button>
      </div>
    )
  }

  return (
    <form className="lead-form" onSubmit={handleSubmit} noValidate>
      <h3 className="lead-form__title">{form.title}</h3>
      <p className="lead-form__subtitle">{form.subtitle}</p>
      <div className="lead-form__fields">
        {form.fields.map((field) => (
          <FormFieldInput
            key={field.name}
            field={field}
            value={values[field.name]}
            error={errors[field.name]}
            onChange={(value) => setValue(field, value)}
          />
        ))}
      </div>
      {status === 'error' && <p className="lead-form__alert">Не удалось отправить заявку. Попробуйте ещё раз или позвоните нам.</p>}
      <button type="submit" className="btn btn--primary btn--block" disabled={status === 'submitting'}>
        {status === 'submitting' ? 'Отправляем…' : form.submitLabel}
      </button>
      <p className="lead-form__consent">{form.consent}</p>
    </form>
  )
}
