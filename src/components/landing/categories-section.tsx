import { ArrowRightIcon } from '@/components/animate-ui/icons/arrow-right'
import { Reveal, revealDelay } from '@/components/landing/reveal'
import { SectionEyebrow } from '@/components/landing/section-eyebrow'
import { categories } from '@/data/landing'
import { analyticsEvents, trackEvent } from '@/lib/analytics'

export function CategoriesSection() {
  return (
    <section id="productos" className="bg-white px-5 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <Reveal viewportMargin="0px 0px -20% 0px">
            <SectionEyebrow>Líneas técnicas</SectionEyebrow>
            <h2 className="mt-3 max-w-xl text-4xl font-bold leading-tight text-carbon sm:text-5xl">
              Soluciones para mantener tu operación en marcha
            </h2>
          </Reveal>
          <Reveal className="max-w-xl lg:justify-self-end" delay={0.08}>
            <p className="text-base leading-8 text-steel">
              Cubrimos consumibles industriales, lubricación, mantenimiento, fijación,
              sellado, abrasivos, hidráulica y montaje para aplicaciones exigentes en
              minería, industria, construcción, talleres y metalmecánica.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <Reveal
              key={category.title}
              delay={revealDelay(index, 0.07, 0.42)}
            >
              <article className="group overflow-hidden rounded-lg border border-line bg-white shadow-[0_14px_34px_rgba(17,19,21,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_45px_rgba(17,19,21,0.12)]">
                <div className="aspect-[4/3] overflow-hidden bg-surface">
                  <img
                    src={category.image}
                    alt={category.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-carbon">{category.title}</h3>
                  <p className="mt-2 min-h-[4.5rem] text-sm leading-6 text-steel">
                    {category.description}
                  </p>
                  <a
                    href="#contacto"
                    onClick={() => trackEvent(analyticsEvents.ctaClick, {
                      category: category.title,
                      cta_label: 'Cotizar linea',
                      cta_href: '#contacto',
                      cta_location: 'category_card',
                    })}
                    className="group mt-4 inline-flex items-center gap-2 text-sm font-bold text-brand-blue transition hover:text-brand-blue-dark"
                  >
                    Cotizar línea
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
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
