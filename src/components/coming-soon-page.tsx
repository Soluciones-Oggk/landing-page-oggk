import { MessageCircle } from 'lucide-react'
import type { MouseEvent } from 'react'

import { assets } from '@/data/landing'
import { analyticsEvents, trackEvent } from '@/lib/analytics'

export function ComingSoonPage() {
  function handleContactClick(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault()
    trackEvent(analyticsEvents.ctaClick, {
      cta_label: 'Contactar ahora',
      cta_href: '#contacto',
      cta_location: 'coming_soon',
    })
    window.location.hash = '#contacto'
  }

  return (
    <section className="flex min-h-svh items-center bg-white px-5 py-12 text-carbon sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <a
          href="#inicio"
          aria-label="Volver al inicio"
          onClick={() => trackEvent(analyticsEvents.ctaClick, {
            cta_label: 'Volver al inicio',
            cta_href: '#inicio',
            cta_location: 'coming_soon',
          })}
        >
          <img src={assets.logoOriginal} alt="Soluciones OGGK" className="h-24 w-auto" />
        </a>

        <h1 className="mt-10 text-4xl font-bold uppercase leading-none tracking-normal text-brand-blue-dark sm:text-5xl lg:text-6xl">
          En construcción
        </h1>

        <img
          src={assets.comingSoonConstructionSign}
          alt="Señal de construcción para funcionalidades en desarrollo"
          className="mt-8 h-auto w-full"
          style={{ maxWidth: 430 }}
          loading="eager"
          decoding="async"
        />

        <p className="mt-8 max-w-md text-sm leading-7 text-steel">
          Estamos desarrollando esta funcionalidad. Mientras tanto, podemos atender tu solicitud
          desde el canal de contacto actual.
        </p>

        <a
          href="#contacto"
          onClick={handleContactClick}
          className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-carbon px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0c2b45] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"
        >
          <MessageCircle size={17} />
          Contactar ahora
        </a>
      </div>
    </section>
  )
}
