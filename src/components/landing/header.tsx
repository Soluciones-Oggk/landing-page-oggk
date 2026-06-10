import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'

import { CartIcon } from '@/components/animate-ui/icons/cart'
import { AnimatedLinkButton } from '@/components/landing/animated-buttons'
import { assets, comingSoon, navItems } from '@/data/landing'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isStoreHovered, setIsStoreHovered] = useState(false)

  function handleMobileAnchorClick(href: string) {
    setIsMenuOpen(false)

    window.setTimeout(() => {
      const target = document.querySelector<HTMLElement>(href)

      if (!target) {
        return
      }

      window.history.pushState(null, '', href)
      window.scrollTo({
        top: Math.max(target.offsetTop - 84, 0),
        behavior: 'smooth',
      })
    }, 80)
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0c2b45]/90 text-white shadow-[0_10px_30px_rgba(12,43,69,0.25)] backdrop-blur-2xl">
      <div className="h-1 bg-[#081e30]" />
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Ir al inicio">
          <img src={assets.logo} alt="Soluciones OGGK" className="h-11 w-auto sm:h-12" />
          <span className="hidden border-l border-white/20 pl-3 text-xl font-medium tracking-normal text-white sm:inline-flex">
            Soluciones OGGK
          </span>
        </a>

        <nav className="hidden items-center gap-8 text-[15px] font-medium text-white/70 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-2 transition hover:text-white after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:origin-left after:scale-x-0 after:bg-brand-yellow after:transition-transform hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <motion.a
            href={comingSoon.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-white/10 px-4 py-3 text-[15px] font-medium text-white transition hover:bg-white hover:text-[#0c2b45]"
            onHoverStart={() => setIsStoreHovered(true)}
            onHoverEnd={() => setIsStoreHovered(false)}
          >
            <span>Tienda</span>
            <CartIcon size={17} animate={isStoreHovered} className="shrink-0" />
          </motion.a>
          <AnimatedLinkButton
            href={comingSoon.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-brand-yellow px-5 py-3 text-[15px] font-bold text-carbon shadow-[0_8px_22px_rgba(251,192,24,0.24)] transition hover:bg-brand-yellow-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-yellow focus-visible:ring-offset-2"
            icon="arrow"
            iconSize={17}
          >
            Cotizar ahora
          </AnimatedLinkButton>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white lg:hidden"
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isMenuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-white/10 bg-[#0c2b45] shadow-xl lg:hidden"
          >
            <motion.nav
              className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-base font-medium text-white/80"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.045, delayChildren: 0.12 } },
                closed: { transition: { staggerChildren: 0.02, staggerDirection: -1 } },
              }}
            >
              {navItems.map((item) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-2 py-2 transition hover:bg-white/10 hover:text-brand-yellow"
                  onClick={(event) => {
                    event.preventDefault()
                    handleMobileAnchorClick(item.href)
                  }}
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: -4 },
                  }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.div
                variants={{
                  open: { opacity: 1, y: 0 },
                  closed: { opacity: 0, y: -4 },
                }}
                transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              >
                <AnimatedLinkButton
                  href={comingSoon.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand-yellow px-5 py-3.5 text-base font-semibold text-carbon"
                  onClick={() => setIsMenuOpen(false)}
                  icon="arrow"
                  iconSize={16}
                >
                  Solicitar cotización
                </AnimatedLinkButton>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
