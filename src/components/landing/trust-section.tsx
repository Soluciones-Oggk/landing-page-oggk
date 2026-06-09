import { Award, Boxes, CheckCircle2, Factory, Wrench } from 'lucide-react'

import { SectionEyebrow } from '@/components/landing/section-eyebrow'
import { assets } from '@/data/landing'

const trustPoints = [
  {
    icon: Boxes,
    title: 'Soluciones completas',
    text: 'Acompañamos requerimientos de mantenimiento, instalación, fijación y sellado.',
  },
  {
    icon: Award,
    title: 'Uso real en campo',
    text: 'Seleccionamos productos para operación continua, rendimiento y confiabilidad.',
  },
  {
    icon: Wrench,
    title: 'Asesoría técnica',
    text: 'Atención especializada para empresas, talleres, contratistas y aplicaciones exigentes.',
  },
  {
    icon: Factory,
    title: 'Cobertura multisector',
    text: 'Atendemos minería, industria, talleres, construcción y metalmecánica.',
  },
]

export function TrustSection() {
  return (
    <section id="nosotros" className="bg-surface px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div>
          <SectionEyebrow>Por qué elegirnos</SectionEyebrow>
          <h2 className="mt-3 text-4xl font-bold leading-tight text-carbon sm:text-5xl">
            Tu socio técnico en cada proyecto
          </h2>
          <p className="mt-5 text-base leading-8 text-steel">
            En Soluciones OGGK abastecemos a empresas, talleres y contratistas con
            consumibles industriales y soluciones diseñadas para uso real en campo.
            No vendemos solo productos: entregamos soluciones completas para que tu
            operación siga en marcha.
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
              alt="Atención técnica y abastecimiento industrial"
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
                <p className="text-xl font-bold">Atención especializada</p>
                <p className="text-sm text-white/62">para cada cliente y aplicación</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
