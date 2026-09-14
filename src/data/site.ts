export const siteConfig = {
  name: 'Bernardo Silva',
  role: 'Engenheiro de Software em formação',
  tagline: 'Construo aplicações web full stack com React, .NET e Next.js.',
  location: 'Brasil',
  avatarUrl: 'https://avatars.githubusercontent.com/u/126777966?v=4',
  githubUrl: 'https://github.com/BernardoSsilva',
  email: 'bernardo.ssilva0808@gmail.com',
  /**
   * Formato internacional sem espaços, símbolos ou "+" (DDI + DDD + número).
   * Troque pelo número real antes de publicar, ex: "5548999999999".
   */
  whatsappNumber: 'SEU_NUMERO_AQUI',
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
