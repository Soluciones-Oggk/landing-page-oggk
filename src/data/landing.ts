import logoDark from '@/assets/brand/logo-oggk-oscuro.png'
import logo from '@/assets/brand/logo-oggk.png'
import heroImage from '@/assets/images/hero-main.webp'
import quoteCtaImage from '@/assets/images/quote-cta.webp'
import trustImage from '@/assets/images/trust-section.webp'
import automotrizImage from '@/assets/images/categories/automotriz.avif'
import construccionImage from '@/assets/images/categories/construccion.webp'
import ferreteriaImage from '@/assets/images/categories/ferreteria.webp'
import generadoresImage from '@/assets/images/categories/generadores-energia.webp'
import herramientasImage from '@/assets/images/categories/herramientas-accesorios.webp'
import pinturasImage from '@/assets/images/categories/pinturas-acabados.webp'
import industrialesImage from '@/assets/images/categories/productos-industriales.webp'
import selladoresImage from '@/assets/images/categories/selladores-adhesivos.webp'
import logo3m from '@/assets/logos/normalized/3m.png'
import logoAbro from '@/assets/logos/normalized/abro.png'
import logoBosch from '@/assets/logos/normalized/bosch.png'
import logoCastrol from '@/assets/logos/normalized/castrol.png'
import logoCpp from '@/assets/logos/normalized/cpp.png'
import logoDariza from '@/assets/logos/normalized/dariza.png'
import logoGyplac from '@/assets/logos/normalized/gyplac.png'
import logoKrylon from '@/assets/logos/normalized/krylon.png'
import logoPavco from '@/assets/logos/normalized/pavco.png'
import logoRustOleum from '@/assets/logos/normalized/rust-oleum.png'
import logoSika from '@/assets/logos/normalized/sika.png'
import logoSoudal from '@/assets/logos/normalized/soudal.png'
import logoStanley from '@/assets/logos/normalized/stanley.png'
import logoTruper from '@/assets/logos/normalized/truper.png'
import logoVainsa from '@/assets/logos/normalized/vainsa.png'
import logoVirutex from '@/assets/logos/normalized/virutex.png'

export const assets = {
  logo,
  logoDark,
  heroImage,
  trustImage,
  quoteCtaImage,
}

export const navItems = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Productos', href: '#productos' },
  { label: 'Marcas', href: '#marcas' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Contacto', href: '#contacto' },
]

export const categories = [
  {
    title: 'Productos de alto consumo',
    description: 'Consumibles esenciales para operación, mantenimiento e instalación en campo.',
    image: ferreteriaImage,
  },
  {
    title: 'Lubricación industrial',
    description: 'Aceites, grasas y lubricantes para maquinaria, flotas y operación continua.',
    image: industrialesImage,
  },
  {
    title: 'Selladores y adhesivos',
    description: 'Espumas PU, siliconas, polímeros y selladores para fijación y sellado.',
    image: selladoresImage,
  },
  {
    title: 'Mantenimiento industrial',
    description: 'Desengrasantes, limpia frenos, limpia contactos y aflojatodo para equipos.',
    image: herramientasImage,
  },
  {
    title: 'Abrasivos industriales',
    description: 'Discos de corte, flap y desbaste para metalmecánica, fabricación y acabado.',
    image: pinturasImage,
  },
  {
    title: 'Fijaciones y anclajes',
    description: 'Anclajes químicos, varillas roscadas, pernos y fijaciones para montaje estructural.',
    image: construccionImage,
  },
  {
    title: 'Sistema hidráulico',
    description: 'Mangueras, acoples y fijadores de roscas para sistemas hidráulicos exigentes.',
    image: generadoresImage,
  },
  {
    title: 'Construcción y montaje',
    description: 'Soluciones para paneles, fijaciones, anclajes y sellado en sistemas livianos.',
    image: automotrizImage,
  },
]

export const brandLogos = [
  { name: 'Soudal', image: logoSoudal, width: 224, height: 98 },
  { name: 'Sika', image: logoSika, width: 110, height: 98 },
  { name: '3M', image: logo3m, width: 165, height: 98 },
  { name: 'Bosch', image: logoBosch, width: 98, height: 98 },
  { name: 'Krylon', image: logoKrylon, width: 197, height: 98 },
  { name: 'Truper', image: logoTruper, width: 174, height: 98 },
  { name: 'Abro', image: logoAbro, width: 236, height: 54 },
  { name: 'Vainsa', image: logoVainsa, width: 236, height: 56 },
  { name: 'Stanley', image: logoStanley, width: 236, height: 70 },
  { name: 'CPP', image: logoCpp, width: 236, height: 89, logoClassName: '!max-h-14 !max-w-[136px]' },
  { name: 'Pavco', image: logoPavco, width: 236, height: 55 },
  { name: 'Dariza', image: logoDariza, width: 116, height: 98 },
  { name: 'Virutex', image: logoVirutex, width: 152, height: 98 },
  { name: 'Rust-Oleum', image: logoRustOleum, width: 236, height: 46 },
  { name: 'Castrol', image: logoCastrol, width: 236, height: 56 },
  { name: 'Gyplac', image: logoGyplac, width: 236, height: 67 },
]

export const metrics = [
  { value: 10, suffix: '+', label: 'años de trayectoria' },
  { value: 16, suffix: '+', label: 'marcas' },
  { value: 8, suffix: '', label: 'categorías' },
  { value: 1, suffix: '', label: 'sede en Arequipa' },
]

export const contact = {
  email: 'o.gutierrez@solucionesoggk.com',
  phone: '999 295 220',
  quoteWhatsapp: '948760412',
  address: 'Pasaje La Ronda Nro. 107, Cayma, Arequipa - Perú',
  store: 'https://tienda.solucionesoggk.com/',
  website: 'https://www.solucionesoggk.com/',
  facebook: 'https://www.facebook.com/Solucionesoggksac',
  instagram: 'https://www.instagram.com/soluciones_oggk',
  linkedin: 'https://www.linkedin.com/company/solucionesoggk',
}
