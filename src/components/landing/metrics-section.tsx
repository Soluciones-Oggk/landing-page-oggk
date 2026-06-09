import { Boxes, Clock3, PackageCheck, ShieldCheck, Store } from 'lucide-react'

import { CountingNumber } from '@/components/animate-ui/primitives/texts/counting-number'
import { Reveal, revealDelay } from '@/components/landing/reveal'
import { metrics } from '@/data/landing'

export function MetricsSection() {
  const metricIcons = [Clock3, PackageCheck, Boxes, Store]

  return (
    <section className="bg-[#0c2b45] px-5 py-9 text-white sm:px-6 lg:px-8">
      <Reveal className="mx-auto grid max-w-7xl overflow-hidden sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, index) => {
          const Icon = metricIcons[index] ?? ShieldCheck

          return (
            <Reveal
              as="article"
              key={metric.label}
              className="relative flex min-h-36 flex-col items-center justify-center px-6 py-8 text-center after:absolute after:right-0 after:top-1/2 after:hidden after:h-20 after:w-px after:-translate-y-1/2 after:bg-white/14 lg:after:block lg:last:after:hidden"
              delay={revealDelay(index, 0.06)}
            >
              <Icon className="mb-4 text-brand-yellow" size={27} strokeWidth={2.2} />
              <div className="flex items-baseline justify-center gap-1 text-3xl font-bold leading-none text-white sm:text-4xl">
                <CountingNumber number={metric.value} inView className="tabular-nums" />
                {metric.suffix ? <span>{metric.suffix}</span> : null}
              </div>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-white/46">
                {metric.label}
              </p>
            </Reveal>
          )
        })}
      </Reveal>
    </section>
  )
}
