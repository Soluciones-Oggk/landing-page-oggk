type QuoteFormData = {
  name: string
  company: string
  phone: string
  email: string
  category: string
  message: string
}

export function buildQuoteMailto(to: string, data: QuoteFormData) {
  const subject = `Solicitud de cotización - ${data.name || 'Landing OGGK'}`
  const body = [
    'Hola Soluciones OGGK,',
    '',
    'Quisiera solicitar una cotización con la siguiente información:',
    '',
    `Nombre: ${data.name}`,
    `Empresa: ${data.company || 'No especificada'}`,
    `Teléfono / WhatsApp: ${data.phone}`,
    `Correo: ${data.email}`,
    `Categoría de interés: ${data.category}`,
    '',
    'Detalle del requerimiento:',
    data.message,
    '',
    'Gracias.',
  ].join('\n')

  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
