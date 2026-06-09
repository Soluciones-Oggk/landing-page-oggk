type QuoteFormData = {
  name: string
  company: string
  phone: string
  email: string
  category: string
  message: string
}

export function buildQuoteWhatsappHref(phone: string, data: QuoteFormData) {
  const normalizedPhone = phone.replace(/\D/g, '')
  const phoneWithCountryCode = normalizedPhone.startsWith('51') ? normalizedPhone : `51${normalizedPhone}`
  const company = data.company ? `*${data.company}*` : 'No especificada'
  const message = [
    '👋 Hola Soluciones OGGK,',
    '',
    'Quisiera *solicitar una cotización* con la siguiente información:',
    '',
    `👤 Nombre: *${data.name}*`,
    `🏢 Empresa: ${company}`,
    `📱 Teléfono / WhatsApp: *${data.phone}*`,
    `✉️ Correo: ${data.email}`,
    `🧰 Línea técnica de interés: *${data.category}*`,
    '',
    '📝 Detalle del requerimiento:',
    data.message,
    '',
    'Gracias.',
  ].join('\n')

  return `https://web.whatsapp.com/send?phone=${phoneWithCountryCode}&text=${encodeURIComponent(message)}`
}
