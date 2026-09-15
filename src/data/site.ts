export const siteConfig = {
  name: 'Bernardo Silva',
  role: 'Engenheiro de Software em formação',
  tagline: 'Construo aplicações web full stack com React, .NET e Next.js.',
  location: 'Brasil',
  githubUrl: 'https://github.com/BernardoSsilva',
  email: 'bernardo.ssilva0808@gmail.com',
  /**
   * Formato internacional sem espaços, símbolos ou "+" (DDI + DDD + número).
   * DDI 55 (Brasil) adicionado na frente do número informado (48998529084)
   * para o link do wa.me funcionar corretamente em qualquer dispositivo.
   */
  whatsappNumber: '5548998529084',
  whatsappDefaultMessage:
    'Olá, Bernardo! Vi seu portfólio e gostaria de conversar sobre uma oportunidade.',
}

export function getWhatsappLink(message = siteConfig.whatsappDefaultMessage) {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`
}

export function getMailtoLink(subject = 'Contato via portfólio', body = '') {
  const query = [`subject=${encodeURIComponent(subject)}`]
  if (body) query.push(`body=${encodeURIComponent(body)}`)
  return `mailto:${siteConfig.email}?${query.join('&')}`
}
