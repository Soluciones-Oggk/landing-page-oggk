import { useState, type FormEvent } from 'react'
import { AlertCircle } from 'lucide-react'

import { AnimatedSubmitButton } from '@/components/landing/animated-buttons'
import { SectionEyebrow } from '@/components/landing/section-eyebrow'
import { assets, categories, contact } from '@/data/landing'
import { buildQuoteMailto } from '@/lib/mailto'

const categoryOptions = categories.map((category) => category.title)

type QuoteFieldName = 'name' | 'company' | 'phone' | 'email' | 'category' | 'message'

type QuoteFormValues = Record<QuoteFieldName, string>

type QuoteFormErrors = Partial<Record<QuoteFieldName, string>>

const quoteFieldMaxLengths = {
  name: 80,
  company: 100,
  phone: 40,
  email: 120,
  category: 80,
  message: 900,
} satisfies Record<QuoteFieldName, number>

const maxMailtoHrefLength = 1800

export function QuoteSection() {
  const [errors, setErrors] = useState<QuoteFormErrors>({})

  function clearError(field: QuoteFieldName) {
    setErrors((currentErrors) => {
      if (!currentErrors[field]) {
        return currentErrors
      }

      const nextErrors = { ...currentErrors }
      delete nextErrors[field]
      return nextErrors
    })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const values: QuoteFormValues = {
      name: String(formData.get('name') ?? '').trim(),
      company: String(formData.get('company') ?? '').trim(),
      phone: String(formData.get('phone') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      category: String(formData.get('category') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
    }

    const nextErrors: QuoteFormErrors = {}
    let quoteHref: string | undefined

    if (!values.name) {
      nextErrors.name = 'Completa tu nombre para poder atenderte.'
    }

    if (!values.phone) {
      nextErrors.phone = 'Agrega un teléfono o WhatsApp de contacto.'
    }

    if (!values.email) {
      nextErrors.email = 'Ingresa un correo para responder la cotización.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      nextErrors.email = 'Revisa el formato del correo electrónico.'
    }

    if (!values.category) {
      nextErrors.category = 'Selecciona una línea técnica de interés.'
    }

    if (!values.message) {
      nextErrors.message = 'Cuéntanos qué producto o requerimiento necesitas.'
    }

    if (Object.keys(nextErrors).length === 0) {
      quoteHref = buildQuoteMailto(contact.email, values)

      if (quoteHref.length > maxMailtoHrefLength) {
        nextErrors.message = 'Reduce el detalle del requerimiento para abrirlo en tu cliente de correo.'
      }
    }

    setErrors(nextErrors)

    const firstInvalidField = Object.keys(nextErrors)[0] as QuoteFieldName | undefined

    if (firstInvalidField) {
      const field = event.currentTarget.elements.namedItem(firstInvalidField)

      if (field instanceof HTMLElement) {
        field.focus()
      }

      return
    }

    window.location.href = quoteHref ?? buildQuoteMailto(contact.email, values)
  }

  return (
    <section id="contacto" className="bg-surface px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <SectionEyebrow>¿Tienes un requerimiento?</SectionEyebrow>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-carbon sm:text-5xl">
            Cotiza con nosotros y recibe atención técnica
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-steel">
            Cuéntanos tu aplicación, cantidades y fecha estimada. Te ayudaremos a
            identificar productos adecuados para operación continua y trabajo real en campo.
          </p>
          <p className="mt-4 text-sm font-semibold text-brand-blue">
            Atención directa: {contact.phone}
          </p>
          <div className="group mt-8">
            <img
              src={assets.quoteCtaImage}
              alt="Carrito con herramientas y productos industriales"
              loading="lazy"
              decoding="async"
              className="max-h-[420px] w-full object-contain transition duration-700 ease-out group-hover:-translate-y-2 group-hover:scale-[1.025] group-hover:drop-shadow-[0_26px_35px_rgba(11,113,183,0.22)] lg:-ml-8"
            />
          </div>
        </div>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="rounded-lg border border-line bg-white p-5 shadow-[0_22px_60px_rgba(17,19,21,0.12)] sm:p-7"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <Field
              label="Nombre completo"
              name="name"
              error={errors.name}
              maxLength={quoteFieldMaxLengths.name}
              onChange={() => clearError('name')}
            />
            <Field
              label="Empresa"
              name="company"
              maxLength={quoteFieldMaxLengths.company}
              onChange={() => clearError('company')}
            />
            <Field
              label="Teléfono / WhatsApp"
              name="phone"
              type="tel"
              error={errors.phone}
              maxLength={quoteFieldMaxLengths.phone}
              onChange={() => clearError('phone')}
            />
            <Field
              label="Correo electrónico"
              name="email"
              type="email"
              error={errors.email}
              maxLength={quoteFieldMaxLengths.email}
              onChange={() => clearError('email')}
            />
          </div>

          <label className="mt-4 block">
            <span className="text-sm font-semibold text-carbon">Producto o línea técnica de interés</span>
            <select
              name="category"
              defaultValue=""
              aria-invalid={Boolean(errors.category)}
              aria-describedby={errors.category ? 'category-error' : undefined}
              onChange={() => clearError('category')}
              className={`mt-2 h-12 w-full rounded-md border bg-white px-3 text-sm text-carbon outline-none transition focus:ring-4 ${errors.category
                  ? 'border-brand-yellow-shadow ring-4 ring-brand-yellow/20 focus:border-brand-yellow-shadow focus:ring-brand-yellow/25'
                  : 'border-line focus:border-brand-blue focus:ring-brand-blue/15'
                }`}
            >
              <option value="" disabled>
                Selecciona una línea
              </option>
              {categoryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ErrorMessage id="category-error" message={errors.category} />
          </label>

          <label className="mt-4 block">
            <span className="text-sm font-semibold text-carbon">Mensaje / requerimiento</span>
            <textarea
              name="message"
              rows={5}
              maxLength={quoteFieldMaxLengths.message}
              placeholder="Cuéntanos cantidades, aplicación, marca deseada o fecha estimada."
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
              onChange={() => clearError('message')}
              className={`mt-2 w-full resize-none rounded-md border bg-white px-3 py-3 text-sm text-carbon outline-none transition placeholder:text-steel/60 focus:ring-4 ${errors.message
                  ? 'border-brand-yellow-shadow ring-4 ring-brand-yellow/20 focus:border-brand-yellow-shadow focus:ring-brand-yellow/25'
                  : 'border-line focus:border-brand-blue focus:ring-brand-blue/15'
                }`}
            />
            <ErrorMessage id="message-error" message={errors.message} />
          </label>

          <AnimatedSubmitButton
            type="submit"
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-yellow px-6 py-4 text-sm font-bold text-carbon transition hover:bg-brand-yellow-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"
            icon="send"
            iconSize={18}
          >
            Enviar cotización por correo
          </AnimatedSubmitButton>
          <p className="mt-4 text-center text-xs leading-5 text-steel">
            Se abrirá tu cliente de correo con la solicitud prellenada.
          </p>
        </form>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type = 'text',
  error,
  maxLength,
  onChange,
}: {
  label: string
  name: QuoteFieldName
  type?: string
  error?: string
  maxLength?: number
  onChange?: () => void
}) {
  const errorId = `${name}-error`

  return (
    <label className="block">
      <span className="text-sm font-semibold text-carbon">{label}</span>
      <input
        name={name}
        type={type}
        maxLength={maxLength}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        onChange={onChange}
        className={`mt-2 h-12 w-full rounded-md border bg-white px-3 text-sm text-carbon outline-none transition placeholder:text-steel/60 focus:ring-4 ${error
            ? 'border-brand-yellow-shadow ring-4 ring-brand-yellow/20 focus:border-brand-yellow-shadow focus:ring-brand-yellow/25'
            : 'border-line focus:border-brand-blue focus:ring-brand-blue/15'
          }`}
      />
      <ErrorMessage id={errorId} message={error} />
    </label>
  )
}

function ErrorMessage({ id, message }: { id: string; message?: string }) {
  if (!message) {
    return null
  }

  return (
    <p
      id={id}
      className="mt-2 flex items-center gap-2 rounded-md border border-brand-yellow-shadow/35 bg-brand-yellow-soft px-3 py-2 text-xs font-semibold leading-5 text-carbon"
    >
      <AlertCircle className="shrink-0 text-brand-yellow-shadow" size={15} strokeWidth={2.3} />
      <span>{message}</span>
    </p>
  )
}
