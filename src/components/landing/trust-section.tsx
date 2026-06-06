import { Award, Boxes, CheckCircle2, Factory, Wrench } from 'lucide-react'

import { SectionEyebrow } from '@/components/landing/section-eyebrow'
import { assets } from '@/data/landing'

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

export function TrustSection() {
  return (
    <section id="nosotros" className="bg-surface px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionEyebrow>Por qué elegirnos</SectionEyebrow>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-carbon sm:text-5xl">
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
                  <h3 className="font-semibold text-carbon">{point.title}</h3>
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
              loading="lazy"
              decoding="async"
              className="relative object-cover transition duration-700 ease-out group-hover:scale-[1.035] group-hover:saturate-110"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-blue/10 via-transparent to-brand-yellow/10 opacity-0 transition duration-500 group-hover:opacity-100" />
          </div>
          <div className="absolute -bottom-7 right-4 max-w-xs rounded-lg bg-carbon p-5 text-white shadow-2xl sm:right-8">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-brand-yellow" size={26} />
              <div>
                <p className="text-xl font-bold">Atención personalizada</p>
                <p className="text-sm text-white/62">para empresas y profesionales</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
