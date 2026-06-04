import logoDark from '@/assets/brand/logo-oggk-oscuro.png'
import logo from '@/assets/brand/logo_oggk.png'
import heroImage from '@/assets/images/hero-main.webp'
import quoteCtaImage from '@/assets/images/quote-cta.png'
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
    title: 'Construcción',
    description: 'Materiales y soluciones para obra, remodelación y proyectos técnicos.',
    image: construccionImage,
  },
  {
    title: 'Ferretería',
    description: 'Abastecimiento práctico para mantenimiento, instalación y trabajo diario.',
    image: ferreteriaImage,
  },
  {
    title: 'Pinturas y acabados',
    description: 'Pinturas, lacas, esmaltes y complementos para acabados duraderos.',
    image: pinturasImage,
  },
  {
    title: 'Selladores y adhesivos',
    description: 'Siliconas, espumas PU, polímeros, acrílicos y adhesivos especializados.',
    image: selladoresImage,
  },
  {
    title: 'Herramientas y accesorios',
    description: 'Herramientas, consumibles y accesorios para profesionales y empresas.',
    image: herramientasImage,
  },
  {
    title: 'Productos industriales',
    description: 'Insumos para operación, mantenimiento, metalmecánica e industria.',
    image: industrialesImage,
  },
  {
    title: 'Generadores y energía',
    description: 'Equipos y soluciones de energía para proyectos exigentes.',
    image: generadoresImage,
  },
  {
    title: 'Automotriz',
    description: 'Pinturas, acabados y productos de mantenimiento para uso automotriz.',
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
  { value: 8, label: 'categorías' },
  { value: 1, label: 'sede en Arequipa' },
]

export const contact = {
  email: 'ventas.oficina@solucionesoggk.com',
  address: 'Pasaje La Ronda Nro. 107, Cayma, Arequipa - Perú',
  store: 'https://tienda.solucionesoggk.com/',
  website: 'https://www.solucionesoggk.com/',
  facebook: 'https://www.facebook.com/Solucionesoggksac',
  instagram: 'https://www.instagram.com/soluciones_oggk',
  linkedin: 'https://www.linkedin.com/company/solucionesoggk',
}
