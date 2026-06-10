import { useEffect, useState } from 'react'

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

function App() {
  const [currentHash, setCurrentHash] = useState(() => window.location.hash)
  const isComingSoonPage = currentHash === '#proximamente'

  useEffect(() => {
    function syncHash() {
      setCurrentHash(window.location.hash)
    }

    window.addEventListener('hashchange', syncHash)
    return () => window.removeEventListener('hashchange', syncHash)
  }, [])

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
    </main>
  )
}

export default App
