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
import logoBosch from '@/assets/logos/normalized/bosch.png'
import logoCaterpillar from '@/assets/logos/normalized/caterpillar.png'
import logoDewalt from '@/assets/logos/normalized/dewalt.png'
import logoHilti from '@/assets/logos/normalized/hilti.png'
import logoHonda from '@/assets/logos/normalized/honda.png'
import logoKrylon from '@/assets/logos/normalized/krylon.png'
import logoMakita from '@/assets/logos/normalized/makita.png'
import logoNorton from '@/assets/logos/normalized/norton.png'
import logoSchneider from '@/assets/logos/normalized/schneider-electric.png'
import logoSiemens from '@/assets/logos/normalized/siemens.png'
import logoSika from '@/assets/logos/normalized/sika.png'
import logoSoudal from '@/assets/logos/normalized/soudal.png'
import logoYamaha from '@/assets/logos/normalized/yamaha-motor.png'

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
  { name: 'Soudal', image: logoSoudal },
  { name: 'Krylon', image: logoKrylon },
  { name: 'DeWalt', image: logoDewalt },
  { name: 'Makita', image: logoMakita },
  { name: 'Sika', image: logoSika },
  { name: 'Hilti', image: logoHilti },
  { name: 'Bosch', image: logoBosch },
  { name: '3M', image: logo3m },
  { name: 'Norton', image: logoNorton },
  { name: 'Caterpillar', image: logoCaterpillar },
  { name: 'Honda', image: logoHonda },
  { name: 'Yamaha Motor', image: logoYamaha },
  { name: 'Schneider Electric', image: logoSchneider },
  { name: 'Siemens', image: logoSiemens },
]

export const metrics = [
  { value: 10, suffix: '+', label: 'años de trayectoria' },
  { value: 14, suffix: '+', label: 'marcas' },
  { value: 8, suffix: '', label: 'categorías' },
  { value: 1, suffix: '', label: 'sede en Arequipa' },
]

export const contact = {
  email: 'o.gutierrez@solucionesoggk.com',
  phone: '999 295 220',
  address: 'Pasaje La Ronda Nro. 107, Cayma, Arequipa - Perú',
  store: 'https://tienda.solucionesoggk.com/',
  website: 'https://www.solucionesoggk.com/',
  facebook: 'https://www.facebook.com/Solucionesoggksac',
  instagram: 'https://www.instagram.com/soluciones_oggk',
  linkedin: 'https://www.linkedin.com/company/solucionesoggk',
}
