import { ChevronDown } from 'lucide-react'

import { AnimatedLinkButton } from '@/components/landing/animated-buttons'
import { FlipWords } from '@/components/ui/flip-words'
import { assets } from '@/data/landing'

const heroWords = ['mantener', 'instalar', 'fijar', 'sellar']

export function Hero() {
  return (
    <section id="inicio" className="relative isolate min-h-[92svh] bg-carbon pt-20 text-white">
      <img
        src={assets.heroImage}
        alt="Herramientas y productos para industria, construcción y minería"
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 block bg-[linear-gradient(90deg,rgba(8,30,48,0.94)_0%,rgba(8,30,48,0.86)_100%)] lg:hidden" />
      <div className="absolute inset-0 -z-10 hidden bg-[linear-gradient(90deg,rgba(8,30,48,0.98)_0%,rgba(8,30,48,0.90)_45%,rgba(8,30,48,0.35)_70%,rgba(8,30,48,0.0)_100%)] lg:block" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#0c2b45] to-transparent" />

      <div className="mx-auto flex min-h-[calc(92svh-5rem)] max-w-7xl flex-col justify-center px-5 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-normal text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand-yellow" />
            SOCIO TÉCNICO INDUSTRIAL
          </div>

          <h1 className="text-5xl font-bold leading-[1.03] text-white sm:text-6xl lg:text-7xl">
            <span className="block">
              Soluciones técnicas para{' '}
              <FlipWords
                words={heroWords}
                duration={2300}
                className="px-0 text-brand-yellow dark:text-brand-yellow"
              />
            </span>
            <span className="block">tu operación</span>
            <span className="block">en campo</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
            Abastecemos a empresas, talleres y contratistas con productos de alta
            rotación y soluciones diseñadas para trabajo real en campo.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <AnimatedLinkButton
              href="#productos"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md bg-brand-yellow px-7 py-4 text-base font-bold text-carbon shadow-[0_12px_28px_rgba(251,192,24,0.26)] transition hover:bg-brand-yellow-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-carbon sm:min-w-48"
              icon="arrow"
              iconSize={20}
            >
              Ver productos
            </AnimatedLinkButton>
            <AnimatedLinkButton
              href="#contacto"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-md border border-white/35 bg-white/10 px-7 py-4 text-base font-bold text-white shadow-[0_12px_28px_rgba(0,0,0,0.20)] backdrop-blur transition hover:bg-white hover:text-carbon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-carbon sm:min-w-56"
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
