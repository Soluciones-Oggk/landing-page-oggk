import { useState, type FormEvent, type ReactNode } from 'react'
import {
  Award,
  AlertCircle,
  Boxes,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Factory,
  Headphones,
  Mail,
  MapPin,
  Menu,
  PackageCheck,
  ShieldCheck,
  Store,
  Truck,
  Wrench,
  X,
} from 'lucide-react'
import { motion } from 'motion/react'
import type { HTMLMotionProps } from 'motion/react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import type { IconType } from 'react-icons'

import { ArrowRightIcon } from '@/components/animate-ui/icons/arrow-right'
import { SendIcon } from '@/components/animate-ui/icons/send'
import { CountingNumber } from '@/components/animate-ui/primitives/texts/counting-number'
import { FlipWords } from '@/components/ui/flip-words'
import { assets, brandLogos, categories, contact, metrics, navItems } from '@/data/landing'
import { buildQuoteMailto } from '@/lib/mailto'

const heroWords = ['construir', 'mantener', 'renovar', 'abastecer']

const benefits = [
  {
    icon: Truck,
    title: 'Abastecimiento ágil',
    description: 'Productos para obra, ferretería, mantenimiento e industria.',
  },
  {
    icon: PackageCheck,
    title: 'Marcas especializadas',
    description: 'Selladores, pinturas, herramientas y soluciones técnicas.',
  },
  {
    icon: ShieldCheck,
    title: 'Compra confiable',
    description: 'Atención responsable desde una empresa peruana constituida.',
  },
  {
    icon: Headphones,
    title: 'Asesoría cercana',
    description: 'Orientación para encontrar el producto adecuado.',
  },
]

const trustPoints = [
  {
    icon: Boxes,
    title: 'Variedad para cada necesidad',
    text: 'Soluciones para construcción, hogar, industria, automotriz y mantenimiento.',
  },
  {
    icon: Award,
    title: 'Experiencia y compromiso',
    text: 'Trabajo constante, disponibilidad y conocimiento aplicado al servicio.',
  },
  {
    icon: Wrench,
    title: 'Atención práctica',
    text: 'Acompañamiento comercial para empresas, contratistas, profesionales y familias.',
  },
  {
    icon: Factory,
    title: 'Enfoque industrial',
    text: 'Productos pensados para proyectos técnicos, obra y operación diaria.',
  },
]

const categoryOptions = categories.map((category) => category.title)

type QuoteFieldName = 'name' | 'company' | 'phone' | 'email' | 'category' | 'message'

type QuoteFormValues = Record<QuoteFieldName, string>

type QuoteFormErrors = Partial<Record<QuoteFieldName, string>>

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <main className="min-h-svh overflow-hidden bg-white text-carbon">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Hero />
      <BenefitStrip />
      <CategoriesSection />
      <TrustSection />
      <BrandsSection />
      <MetricsSection />
      <QuoteSection />
      <Footer />
    </main>
  )
}

function Header({
  isMenuOpen,
  setIsMenuOpen,
}: {
  isMenuOpen: boolean
  setIsMenuOpen: (value: boolean) => void
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/45 bg-white/90 text-carbon shadow-[0_10px_30px_rgba(17,19,21,0.08)] backdrop-blur-2xl">
      <div className="h-1 bg-carbon" />
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Ir al inicio">
          <img src={assets.logo} alt="Soluciones OGGK" className="h-11 w-auto sm:h-12" />
          <span className="hidden border-l border-line pl-3 text-xl font-black tracking-normal text-brand-blue sm:inline-flex">
            Soluciones OGGK
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-[15px] font-bold text-carbon/70 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-2 transition hover:text-brand-blue after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand-yellow after:transition-transform hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={contact.store}
            target="_blank"
            rel="noreferrer"
            className="rounded-md bg-brand-blue-soft px-4 py-3 text-[15px] font-extrabold text-brand-blue transition hover:bg-brand-blue hover:text-white"
          >
            Tienda
          </a>
          <AnimatedLinkButton
            href="#contacto"
            className="inline-flex items-center gap-2 rounded-md bg-brand-yellow px-5 py-3 text-[15px] font-black text-carbon shadow-[0_8px_22px_rgba(241,228,45,0.24)] transition hover:bg-brand-yellow-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"
            icon="arrow"
            iconSize={17}
          >
            Cotizar ahora
          </AnimatedLinkButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-carbon/15 text-carbon lg:hidden"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {isMenuOpen ? (
        <div className="border-t border-line bg-white px-5 py-5 shadow-xl lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-3 text-base font-bold text-carbon/78">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-2 py-2 transition hover:bg-brand-blue-soft hover:text-brand-blue"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <AnimatedLinkButton
              href="#contacto"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-md bg-brand-yellow px-5 py-3.5 text-base font-black text-carbon"
              onClick={() => setIsMenuOpen(false)}
              icon="arrow"
              iconSize={16}
            >
              Solicitar cotización
            </AnimatedLinkButton>
          </nav>
        </div>
      ) : null}
    </header>
  )
}

function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-[92svh] bg-carbon pt-20 text-white">
      <img
        src={assets.heroImage}
        alt="Herramientas y productos para construcción"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(17,19,21,0.95),rgba(17,19,21,0.70)_44%,rgba(17,19,21,0.20))]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-carbon to-transparent" />

      <div className="mx-auto flex min-h-[calc(92svh-5rem)] max-w-7xl flex-col justify-center px-5 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-bold uppercase tracking-normal text-brand-yellow backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand-yellow" />
            PROVEEDOR MAYORISTA DE FERRETERÍA
          </div>

          <h1 className="text-5xl font-black leading-[1.03] text-white sm:text-6xl lg:text-7xl">
            <span className="block">Todo lo que necesitas para</span>
            <span className="block min-h-[1.08em] text-brand-yellow">
              <FlipWords
                words={heroWords}
                duration={2300}
                className="px-0 text-brand-yellow dark:text-brand-yellow"
              />
            </span>
            <span className="block">en un solo lugar</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
            Comercializamos y distribuimos productos industriales, de mantenimiento,
            construcción y acabados para empresas, profesionales y familias.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AnimatedLinkButton
              href="#productos"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-brand-yellow px-7 py-4 text-base font-black text-carbon shadow-[0_12px_28px_rgba(241,228,45,0.26)] transition hover:bg-brand-yellow-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-carbon sm:min-w-48"
              icon="arrow"
              iconSize={20}
            >
              Ver productos
            </AnimatedLinkButton>
            <AnimatedLinkButton
              href="#contacto"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md border border-white/35 bg-white/10 px-7 py-4 text-base font-black text-white shadow-[0_12px_28px_rgba(0,0,0,0.20)] backdrop-blur transition hover:bg-white hover:text-carbon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-carbon sm:min-w-56"
              icon="send"
              iconSize={20}
            >
              Solicitar cotización
            </AnimatedLinkButton>
          </div>
        </div>

        <a
          href="#beneficios"
          className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 rounded-full border border-white/15 p-3 text-white/72 transition hover:text-brand-yellow md:inline-flex"
          aria-label="Ir a beneficios"
        >
          <ChevronDown size={22} />
        </a>
      </div>
    </section>
  )
}

function BenefitStrip() {
  return (
    <section id="beneficios" className="relative z-10 bg-carbon px-5 pb-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-lg border border-white/10 bg-white/10 shadow-2xl md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit) => (
          <article key={benefit.title} className="bg-[#171a1d] p-6">
            <benefit.icon className="mb-5 text-brand-yellow" size={28} strokeWidth={1.8} />
            <h2 className="text-base font-extrabold text-white">{benefit.title}</h2>
            <p className="mt-2 text-sm leading-6 text-white/62">{benefit.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function CategoriesSection() {
  return (
    <section id="productos" className="bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <div>
            <SectionEyebrow>Categorías</SectionEyebrow>
            <h2 className="mt-3 max-w-xl text-4xl font-black leading-tight text-carbon sm:text-5xl">
              Encuentra soluciones para cada necesidad
            </h2>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-8 text-steel">
              Contamos con una variedad de productos orientados a construcción,
              ferretería, mantenimiento, acabados e industria. Explora las líneas
              principales y solicita asesoría para tu proyecto.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <article
              key={category.title}
              className="group overflow-hidden rounded-lg border border-line bg-white shadow-[0_14px_34px_rgba(17,19,21,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(17,19,21,0.12)]"
            >
              <div className="aspect-[4/3] overflow-hidden bg-surface">
                <img
                  src={category.image}
                  alt={category.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-black text-carbon">{category.title}</h3>
                <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-steel">
                  {category.description}
                </p>
                <a
                  href="#contacto"
                  className="group mt-4 inline-flex items-center gap-2 text-sm font-extrabold text-brand-blue transition hover:text-brand-blue-dark"
                >
                  Cotizar categoría
                  <span className="inline-flex w-5 items-center overflow-visible">
                    <ArrowRightIcon
                      size={15}
                      animateOnHover="pointing"
                      className="overflow-visible transition group-hover:translate-x-1"
                    />
                  </span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustSection() {
  return (
    <section id="nosotros" className="bg-surface px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionEyebrow>Por qué elegirnos</SectionEyebrow>
          <h2 className="mt-3 text-4xl font-black leading-tight text-carbon sm:text-5xl">
            Tu aliado confiable en cada proyecto
          </h2>
          <p className="mt-5 text-base leading-8 text-steel">
            Somos una empresa peruana dedicada a la distribución y comercialización
            de productos industriales, de mantenimiento, construcción, ferretería y
            acabados. Trabajamos con disponibilidad, convicción y entrega para
            atender cada requerimiento.
          </p>

          <div className="mt-8 grid gap-4">
            {trustPoints.map((point) => (
              <div key={point.title} className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-yellow text-carbon">
                  <point.icon size={21} strokeWidth={2} />
                </div>
                <div>
                  <h3 className="font-extrabold text-carbon">{point.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-steel">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 top-10 hidden h-24 w-24 border-l-8 border-t-8 border-brand-yellow lg:block" />
          <div className="group relative overflow-hidden rounded-lg shadow-[0_24px_70px_rgba(17,19,21,0.18)]">
            <img
              src={assets.trustImage}
              alt="Atención y abastecimiento ferretero"
              className="relative object-cover transition duration-700 ease-out group-hover:scale-[1.035] group-hover:saturate-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-blue/10 via-transparent to-brand-yellow/10 opacity-0 transition duration-500 group-hover:opacity-100" />
          </div>
          <div className="absolute -bottom-7 right-4 max-w-xs rounded-lg bg-carbon p-5 text-white shadow-2xl sm:right-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-brand-yellow" size={26} />
              <div>
                <p className="text-xl font-black">Atención personalizada</p>
                <p className="text-sm text-white/62">para empresas y profesionales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function BrandsSection() {
  const repeatedLogos = [...brandLogos, ...brandLogos]

  return (
    <section id="marcas" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionEyebrow>Marcas líderes</SectionEyebrow>
        <div className="mt-3 grid gap-6 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <h2 className="max-w-xl text-4xl font-black leading-tight text-carbon sm:text-5xl">
            Trabajamos con marcas para aplicaciones exigentes
          </h2>
          <p className="max-w-xl text-base leading-8 text-steel lg:justify-self-end">
            Selladores, pinturas, abrasivos, herramientas, energía e industria en
            un ecosistema visual pensado para abastecer proyectos reales.
          </p>
        </div>
      </div>

      <div className="relative mt-14 overflow-hidden border-y border-white bg-white py-7">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white to-transparent" />
        <div className="logo-marquee flex w-max items-center gap-12">
          {repeatedLogos.map((brand, index) => (
            <div
              key={`${brand.name}-${index}`}
              className="flex h-20 w-44 shrink-0 items-center justify-center"
            >
              <img src={brand.image} alt={brand.name} className="max-h-16 max-w-[160px] object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MetricsSection() {
  const metricIcons = [Clock3, PackageCheck, Boxes, Store]

  return (
    <section className="bg-[#2b2b2b] px-5 py-9 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => {
          const Icon = metricIcons[index] ?? ShieldCheck

          return (
            <article
              key={metric.label}
              className="relative flex min-h-36 flex-col items-center justify-center px-6 py-8 text-center after:absolute after:right-0 after:top-1/2 after:hidden after:h-20 after:w-px after:-translate-y-1/2 after:bg-white/14 lg:after:block lg:last:after:hidden"
            >
              <Icon className="mb-4 text-brand-yellow" size={27} strokeWidth={2.2} />
              <div className="flex items-baseline justify-center gap-1 text-3xl font-black leading-none text-white sm:text-4xl">
                <CountingNumber number={metric.value} inView className="tabular-nums" />
                {metric.suffix ? <span>{metric.suffix}</span> : null}
              </div>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-white/46">
                {metric.label}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}

function QuoteSection() {
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
      nextErrors.category = 'Selecciona una categoría de interés.'
    }

    if (!values.message) {
      nextErrors.message = 'Cuéntanos qué producto o requerimiento necesitas.'
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

    window.location.href = buildQuoteMailto(contact.email, values)
  }

  return (
    <section id="contacto" className="bg-surface px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <SectionEyebrow>Tienes un proyecto?</SectionEyebrow>
          <h2 className="mt-3 text-4xl font-black leading-tight text-carbon sm:text-5xl">
            Cotiza con nosotros y recibe atención personalizada
          </h2>
          <p className="mt-5 max-w-xl text-base leading-8 text-steel">
            Cuéntanos qué necesitas y te ayudaremos a encontrar productos adecuados
            para tu proyecto, negocio u obra.
          </p>
          <div className="group mt-8">
            <img
              src={assets.quoteCtaImage}
              alt="Carrito con herramientas y productos ferreteros"
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
              onChange={() => clearError('name')}
            />
            <Field label="Empresa" name="company" onChange={() => clearError('company')} />
            <Field
              label="Teléfono / WhatsApp"
              name="phone"
              type="tel"
              error={errors.phone}
              onChange={() => clearError('phone')}
            />
            <Field
              label="Correo electrónico"
              name="email"
              type="email"
              error={errors.email}
              onChange={() => clearError('email')}
            />
          </div>

          <label className="mt-4 block">
            <span className="text-sm font-bold text-carbon">Producto o categoría de interés</span>
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
                Selecciona una categoría
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
            <span className="text-sm font-bold text-carbon">Mensaje / requerimiento</span>
            <textarea
              name="message"
              rows={5}
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
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-yellow px-6 py-4 text-sm font-extrabold text-carbon transition hover:bg-brand-yellow-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"
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
  onChange,
}: {
  label: string
  name: QuoteFieldName
  type?: string
  error?: string
  onChange?: () => void
}) {
  const errorId = `${name}-error`

  return (
    <label className="block">
      <span className="text-sm font-bold text-carbon">{label}</span>
      <input
        name={name}
        type={type}
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
      className="mt-2 flex items-center gap-2 rounded-md border border-brand-yellow-shadow/35 bg-brand-yellow-soft px-3 py-2 text-xs font-bold leading-5 text-carbon"
    >
      <AlertCircle className="shrink-0 text-brand-yellow-shadow" size={15} strokeWidth={2.3} />
      <span>{message}</span>
    </p>
  )
}

function Footer() {
  return (
    <footer className="bg-carbon px-5 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
        <div>
          <img src={assets.logoDark} alt="Soluciones OGGK" className="h-14 w-auto" />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/62">
            Comercialización y distribución de productos para construcción,
            ferretería, mantenimiento, acabados e industria desde Arequipa, Perú.
          </p>
          <div className="mt-5 flex gap-3">
            <SocialLink href={contact.facebook} label="Facebook" icon={FaFacebookF} />
            <SocialLink href={contact.instagram} label="Instagram" icon={FaInstagram} />
            <SocialLink href={contact.linkedin} label="LinkedIn" icon={FaLinkedinIn} />
          </div>
        </div>

        <FooterGroup title="Enlaces">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-brand-yellow">
              {item.label}
            </a>
          ))}
          <a href={contact.store} target="_blank" rel="noreferrer" className="transition hover:text-brand-yellow">
            Tienda
          </a>
        </FooterGroup>

        <FooterGroup title="Categorías">
          {categories.slice(0, 6).map((category) => (
            <a key={category.title} href="#productos" className="transition hover:text-brand-yellow">
              {category.title}
            </a>
          ))}
        </FooterGroup>

        <div>
          <h3 className="text-sm font-black uppercase tracking-normal text-white">Contacto</h3>
          <div className="mt-5 space-y-4 text-sm leading-6 text-white/64">
            <p className="flex gap-3">
              <Mail className="mt-0.5 shrink-0 text-brand-yellow" size={17} />
              <a href={`mailto:${contact.email}`} className="transition hover:text-brand-yellow">
                {contact.email}
              </a>
            </p>
            <p className="flex gap-3">
              <MapPin className="mt-0.5 shrink-0 text-brand-yellow" size={17} />
              <span>{contact.address}</span>
            </p>
            <p className="flex gap-3">
              <Clock3 className="mt-0.5 shrink-0 text-brand-yellow" size={17} />
              <span className="w-full pr-3">
                Atención comercial previa coordinación
                <span className="mt-2 flex justify-between text-white/58">
                  <span>Lunes a Viernes</span>
                  <span>8:00 a. m. - 6:00 p. m.</span>
                </span>
                <span className="flex justify-between text-white/58">
                  <span>Sábado</span>
                  <span>8:30 a. m. - 12:00 p. m.</span>
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Soluciones OGGK S.A.C. Todos los derechos reservados.</p>
        <p>Landing inicial preparada para validación comercial.</p>
      </div>
    </footer>
  )
}

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-normal text-brand-blue">
      <span className="h-2 w-2 rounded-full bg-brand-yellow" />
      {children}
    </p>
  )
}

function FooterGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="text-sm font-black uppercase tracking-normal text-white">{title}</h3>
      <div className="mt-5 flex flex-col gap-3 text-sm text-white/62">{children}</div>
    </div>
  )
}

type AnimatedButtonIcon = 'arrow' | 'send'

function AnimatedIcon({
  icon,
  size,
  isHovered,
}: {
  icon: AnimatedButtonIcon
  size: number
  isHovered: boolean
}) {
  if (icon === 'send') {
    return (
      <SendIcon
        size={size}
        animate={isHovered ? true : false}
        initialOnAnimateEnd
        className="shrink-0"
      />
    )
  }

  return (
    <span className="inline-flex w-[1.55em] shrink-0 items-center justify-center overflow-visible">
      <ArrowRightIcon
        size={size}
        animation="pointing"
        animate={isHovered ? 'pointing' : false}
        className="overflow-visible"
      />
    </span>
  )
}

function AnimatedLinkButton({
  children,
  className,
  icon,
  iconSize = 18,
  ...props
}: HTMLMotionProps<'a'> & {
  children: ReactNode
  className: string
  icon: AnimatedButtonIcon
  iconSize?: number
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 420, damping: 24 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={className}
      {...props}
    >
      <span>{children}</span>
      <AnimatedIcon icon={icon} size={iconSize} isHovered={isHovered} />
    </motion.a>
  )
}

function AnimatedSubmitButton({
  children,
  className,
  icon,
  iconSize = 18,
  ...props
}: HTMLMotionProps<'button'> & {
  children: ReactNode
  className: string
  icon: AnimatedButtonIcon
  iconSize?: number
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 420, damping: 24 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={className}
      {...props}
    >
      <span>{children}</span>
      <AnimatedIcon icon={icon} size={iconSize} isHovered={isHovered} />
    </motion.button>
  )
}

function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string
  label: string
  icon: IconType
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/12 text-white/70 transition hover:-translate-y-0.5 hover:border-brand-yellow hover:text-brand-yellow"
    >
      <Icon size={16} />
    </a>
  )
}

export default App
