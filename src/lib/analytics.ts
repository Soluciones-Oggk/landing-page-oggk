export const analyticsEvents = {
  pageView: 'page_view',
  sectionView: 'section_view',
  ctaClick: 'cta_click',
  storeClick: 'store_click',
  socialClick: 'social_click',
  phoneClick: 'phone_click',
  emailClick: 'email_click',
  quoteFormStart: 'quote_form_start',
  quoteFormSubmitError: 'quote_form_submit_error',
  whatsappQuoteOpen: 'whatsapp_quote_open',
  whatsappQuoteError: 'whatsapp_quote_error',
} as const

export type AnalyticsEventName = (typeof analyticsEvents)[keyof typeof analyticsEvents]
export type AnalyticsEventParams = Record<string, boolean | number | string | string[] | undefined>

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID
let isAnalyticsInitialized = false

function canUseAnalytics() {
  return import.meta.env.PROD && Boolean(measurementId)
}

export function initAnalytics() {
  if (isAnalyticsInitialized || !canUseAnalytics()) {
    return
  }

  window.dataLayer = window.dataLayer ?? []
  window.gtag = window.gtag ?? function gtag(...args: unknown[]) {
    window.dataLayer?.push(args)
  }

  window.gtag('js', new Date())
  window.gtag('config', measurementId, { send_page_view: false })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
  document.head.appendChild(script)

  isAnalyticsInitialized = true
}

export function trackPageView(path = `${window.location.pathname}${window.location.hash}`) {
  trackEvent(analyticsEvents.pageView, {
    page_location: window.location.href,
    page_path: path,
    page_title: document.title,
  })
}

export function trackEvent(eventName: AnalyticsEventName, params: AnalyticsEventParams = {}) {
  if (!canUseAnalytics()) {
    return
  }

  initAnalytics()
  window.gtag?.('event', eventName, params)
}
