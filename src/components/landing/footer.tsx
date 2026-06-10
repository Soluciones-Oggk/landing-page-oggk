import { Clock3, Mail, MapPin, Phone } from 'lucide-react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa6'
import type { IconType } from 'react-icons'
import type { ReactNode } from 'react'

import { Reveal } from '@/components/landing/reveal'
import { assets, categories, comingSoon, contact, navItems } from '@/data/landing'

export function Footer() {
  return (
    <footer className="bg-[#081e30] px-5 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
        <Reveal>
          <img
            src={assets.logoDark}
            alt="Soluciones OGGK"
            loading="lazy"
            decoding="async"
            className="h-14 w-auto"
          />
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/62">
            Soluciones integrales para industria, construcción y minería desde
            Arequipa, Perú.
          </p>
          <div className="mt-5 flex gap-3">
            <SocialLink href={contact.facebook} label="Facebook" icon={FaFacebookF} />
            <SocialLink href={contact.instagram} label="Instagram" icon={FaInstagram} />
            <SocialLink href={contact.linkedin} label="LinkedIn" icon={FaLinkedinIn} />
          </div>
        </Reveal>

        <FooterGroup title="Enlaces" delay={0.08}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-brand-yellow">
              {item.label}
            </a>
          ))}
          <a href={comingSoon.href} target="_blank" rel="noreferrer" className="transition hover:text-brand-yellow">
            Tienda
          </a>
        </FooterGroup>

        <FooterGroup title="Líneas" delay={0.16}>
          {categories.slice(0, 6).map((category) => (
            <a key={category.title} href="#productos" className="transition hover:text-brand-yellow">
              {category.title}
            </a>
          ))}
        </FooterGroup>

        <Reveal delay={0.24}>
          <h3 className="text-sm font-bold uppercase tracking-normal text-white">Contacto</h3>
          <div className="mt-5 space-y-4 text-sm leading-6 text-white/64">
            <p className="flex gap-3">
              <Phone className="mt-0.5 shrink-0 text-brand-yellow" size={17} />
              <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="transition hover:text-brand-yellow">
                {contact.phone}
              </a>
            </p>
            <p className="flex gap-3">
              <Mail className="mt-0.5 shrink-0 text-brand-yellow" size={17} />
              <a href={`mailto:${contact.email}`} className="transition hover:text-brand-yellow">
                {contact.email}
              </a>
            </p>
            <p className="flex gap-3">
              <MapPin className="mt-0.5 shrink-0 text-brand-yellow" size={17} />
              <span>{contact.address}</span>
            </p>
            <p className="flex gap-3">
              <Clock3 className="mt-0.5 shrink-0 text-brand-yellow" size={17} />
              <span className="w-full">
                Atención comercial previa coordinación
                <span className="mt-2 flex justify-between text-white/58">
                  <span>Lunes a Viernes</span>
                  <span>8:00 a. m. - 6:00 p. m.</span>
                </span>
                <span className="flex justify-between text-white/58">
                  <span>Sábado</span>
                  <span>8:30 a. m. - 12:00 p. m.</span>
                </span>
              </span>
            </p>
          </div>
        </Reveal>
      </div>

      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/42 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Soluciones OGGK S.A.C. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

function FooterGroup({ title, children, delay = 0 }: { title: string; children: ReactNode; delay?: number }) {
  return (
    <Reveal delay={delay}>
      <h3 className="text-sm font-bold uppercase tracking-normal text-white">{title}</h3>
      <div className="mt-5 flex flex-col gap-3 text-sm text-white/62">{children}</div>
    </Reveal>
  )
}

function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string
  label: string
  icon: IconType
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/12 text-white/70 transition hover:-translate-y-0.5 hover:border-brand-yellow hover:text-brand-yellow"
    >
      <Icon size={16} />
    </a>
  )
}
