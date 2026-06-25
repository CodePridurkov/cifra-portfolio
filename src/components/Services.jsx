import { motion } from 'framer-motion'
import './Services.css'

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: 'easeOut' },
}

const services = [
  {
    name: 'Landing page',
    price: 'from $200',
    days: '3–5 days',
    desc: 'A one-pager for your product or campaign. Premium visuals, lead form, analytics, ad-ready.',
    inc: ['Hero, features, social proof, FAQ, form', 'Mobile-first responsive', 'SEO + OG previews', 'Deploy with SSL'],
  },
  {
    name: 'Corporate site',
    price: 'from $450',
    days: '7–14 days',
    desc: 'A multi-page company site: services, cases, team, blog. CMS so you can update it without a developer.',
    inc: ['5–10 pages', 'Headless CMS (Strapi/Sanity)', 'SEO blog', 'Telegram lead notifications'],
    featured: true,
  },
  {
    name: 'E-commerce',
    price: 'from $800',
    days: '14–30 days',
    desc: 'Shop with cart, payments and delivery. CMS, analytics and payment gateway included.',
    inc: ['Catalogue, filters, cart', 'Payments: Stripe / CloudPayments', 'CRM integration', 'Customer account'],
  },
  {
    name: 'Event invitation',
    price: 'from $15',
    days: '1–3 days',
    desc: 'Our own product: wedding, nikah, anniversary, corporate event. Details on tsifraone.ru',
    inc: ['13 event types', 'Timer, map, RSVP to Telegram', 'Custom domain', '«Simple» tier from ~$15'],
    link: 'https://tsifraone.ru',
    linkText: 'tsifraone.ru →',
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <motion.span className="eyebrow" {...reveal}>Services</motion.span>
        <motion.h2 className="services__title" {...reveal} transition={{ ...reveal.transition, delay: 0.05 }}>
          What we <span className="gradient-text"><i>build</i></span>
        </motion.h2>
        <motion.p className="services__sub" {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
          Prices are starting points. We'll quote the exact number after a short chat on Telegram.
        </motion.p>

        <div className="services__grid">
          {services.map((s, i) => (
            <motion.div
              key={s.name}
              className={`svc ${s.featured ? 'svc--featured' : ''}`}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.06 }}
            >
              {s.featured && <span className="svc__featured">Most requested</span>}
              <h3 className="svc__name">{s.name}</h3>
              <div className="svc__price">
                <span className="svc__amount">{s.price}</span>
                <span className="svc__days">· {s.days}</span>
              </div>
              <p className="svc__desc">{s.desc}</p>
              <ul className="svc__inc">
                {s.inc.map((x) => <li key={x}>{x}</li>)}
              </ul>
              {s.link ? (
                <a href={s.link} target="_blank" rel="noopener noreferrer" className="svc__cta">
                  {s.linkText}
                </a>
              ) : (
                <a href="#contact" className="svc__cta">Get a quote</a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
