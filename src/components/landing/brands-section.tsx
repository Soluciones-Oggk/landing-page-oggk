import { SectionEyebrow } from '@/components/landing/section-eyebrow'
import { brandLogos } from '@/data/landing'

export function BrandsSection() {
  const repeatedLogos = [...brandLogos, ...brandLogos]

  return (
    <section id="marcas" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionEyebrow>Marcas y soluciones</SectionEyebrow>
        <div className="mt-3 grid gap-6 lg:grid-cols-[0.9fr_1fr] lg:items-end">
          <h2 className="max-w-xl text-4xl font-bold leading-tight text-carbon sm:text-5xl">
            Productos seleccionados para aplicaciones exigentes
          </h2>
          <p className="max-w-xl text-base leading-8 text-steel lg:justify-self-end">
            Integramos marcas y líneas técnicas para abastecer mantenimiento,
            instalación, fijación y sellado con respaldo comercial especializado.
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
              <img
                src={brand.image}
                alt={brand.name}
                loading="lazy"
                decoding="async"
                className="max-h-16 max-w-[160px] object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
