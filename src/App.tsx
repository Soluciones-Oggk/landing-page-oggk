import { useEffect, useState } from 'react'

import { AnalyticsConsentBanner } from '@/components/analytics-consent-banner'
import { ComingSoonPage } from '@/components/coming-soon-page'
import { BenefitStrip } from '@/components/landing/benefit-strip'
import { BrandsSection } from '@/components/landing/brands-section'
import { CategoriesSection } from '@/components/landing/categories-section'
import { Footer } from '@/components/landing/footer'
import { Header } from '@/components/landing/header'
import { Hero } from '@/components/landing/hero'
import { MetricsSection } from '@/components/landing/metrics-section'
import { QuoteSection } from '@/components/landing/quote-section'
import { TrustSection } from '@/components/landing/trust-section'
import { analyticsEvents, initAnalytics, trackEvent, trackPageView } from '@/lib/analytics'

const trackedSectionIds = ['inicio', 'productos', 'marcas', 'nosotros', 'contacto'] as const

function getHashTarget(hash: string) {
  if (!hash.startsWith('#') || hash.length <= 1) {
    return null
  }

  try {
    return document.getElementById(decodeURIComponent(hash.slice(1)))
  } catch {
    return null
  }
}

function isHashTargetVisible(target: HTMLElement) {
  const rect = target.getBoundingClientRect()
  return rect.top < window.innerHeight && rect.bottom > 0
}

function scrollHashTargetIntoView(target: HTMLElement) {
  window.scrollTo({
    top: target.getBoundingClientRect().top + window.scrollY,
    behavior: 'smooth',
  })
}

function App() {
  const [currentHash, setCurrentHash] = useState(() => window.location.hash)
  const isComingSoonPage = currentHash === '#proximamente'

  useEffect(() => {
    initAnalytics()
  }, [])

  useEffect(() => {
    trackPageView(`${window.location.pathname}${currentHash}`)
  }, [currentHash])

  useEffect(() => {
    function syncHash() {
      setCurrentHash(window.location.hash)
    }

    window.addEventListener('hashchange', syncHash)
    return () => window.removeEventListener('hashchange', syncHash)
  }, [])

  useEffect(() => {
    if (isComingSoonPage) {
      trackEvent(analyticsEvents.sectionView, {
        section_id: 'proximamente',
        section_label: 'Proximamente',
      })
      return
    }

    const observedSections = trackedSectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter((section): section is HTMLElement => Boolean(section))

    if (observedSections.length === 0) {
      return
    }

    const viewedSections = new Set<string>()
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting || viewedSections.has(entry.target.id)) {
            return
          }

          viewedSections.add(entry.target.id)
          trackEvent(analyticsEvents.sectionView, {
            section_id: entry.target.id,
            section_label: entry.target.id,
          })
          observer.unobserve(entry.target)
        })
      },
      { threshold: 0.35 },
    )

    observedSections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [isComingSoonPage])

  useEffect(() => {
    if (isComingSoonPage) {
      return
    }

    let animationFrameId: number | null = null
    let attempts = 0

    function scrollWhenReady() {
      const target = getHashTarget(currentHash)

      if (target) {
        scrollHashTargetIntoView(target)
      }

      attempts += 1

      if (target && isHashTargetVisible(target)) {
        return
      }

      if (attempts < 10) {
        animationFrameId = window.requestAnimationFrame(scrollWhenReady)
      }
    }

    animationFrameId = window.requestAnimationFrame(scrollWhenReady)

    return () => {
      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId)
      }
    }
  }, [currentHash, isComingSoonPage])

  return (
    <main className="min-h-svh overflow-hidden bg-white text-carbon">
      {isComingSoonPage ? (
        <ComingSoonPage />
      ) : (
        <>
          <Header />
          <Hero />
          <BenefitStrip />
          <CategoriesSection />
          <TrustSection />
          <BrandsSection />
          <MetricsSection />
          <QuoteSection />
          <Footer />
        </>
      )}
      <AnalyticsConsentBanner />
    </main>
  )
}

export default App
