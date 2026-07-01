import { useState } from 'react'

import {
  getAnalyticsConsent,
  initAnalytics,
  isAnalyticsConfigured,
  setAnalyticsConsent,
  trackPageView,
} from '@/lib/analytics'

export function AnalyticsConsentBanner() {
  const [consent, setConsent] = useState(() => getAnalyticsConsent())

  if (!isAnalyticsConfigured() || consent !== null) {
    return null
  }

  function handleAccept() {
    setAnalyticsConsent('accepted')
    setConsent('accepted')
    initAnalytics()
    trackPageView()
  }

  function handleReject() {
    setAnalyticsConsent('rejected')
    setConsent('rejected')
  }

  return (
    <aside
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-3xl rounded-lg border border-white/14 bg-[#081e30] p-4 text-white shadow-[0_18px_55px_rgba(8,30,48,0.30)] sm:inset-x-auto sm:right-5 sm:max-w-md"
      aria-label="Consentimiento de analitica"
    >
      <p className="text-sm leading-6 text-white/76">
        Usamos analitica para mejorar la experiencia del sitio.
      </p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={handleReject}
          className="inline-flex min-h-10 items-center justify-center rounded-md border border-white/16 px-4 py-2 text-sm font-semibold text-white/76 transition hover:border-white/32 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        >
          Rechazar
        </button>
        <button
          type="button"
          onClick={handleAccept}
          className="inline-flex min-h-10 items-center justify-center rounded-md bg-brand-yellow px-4 py-2 text-sm font-bold text-carbon transition hover:bg-brand-yellow-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-[#081e30]"
        >
          Aceptar
        </button>
      </div>
    </aside>
  )
}
