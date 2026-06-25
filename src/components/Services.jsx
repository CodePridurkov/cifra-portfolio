import { motion } from 'framer-motion'
import './Services.css'

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
}

const services = [
  {
    name: 'Landing page',
    price: '$200',
    days: '3–5 days',
    desc: 'A one-pager for a product, campaign or pre-order. Premium visuals, lead form, analytics, ready to run ads.',
    inc: ['Hero · features · social proof', 'FAQ + lead form', 'Mobile-first responsive', 'SEO + OG previews', 'Deploy with SSL'],
  },
  {
    name: 'Corporate site',
    price: '$450',
    days: '7–14 days',
    desc: 'A multi-page company website: services, cases, team, blog. Headless CMS so you can update without a developer.',
    inc: ['5–10 pages', 'Headless CMS (Strapi/Sanity)', 'SEO blog from day one', 'Telegram lead alerts', 'Analytics + heatmaps'],
    featured: true,
  },
  {
    name: 'E-commerce',
    price: '$800',
    days: '14–30 days',
    desc: 'Shop with cart, payments and delivery. CMS for products, payment gateway, customer account, analytics.',
    inc: ['Catalogue · filters · cart', 'Payments (Stripe / CP)', 'CRM integration', 'Customer account', 'Email + Telegram orders'],
  },
  {
    name: 'Event invitation',
    price: '$15',
    days: '1–3 days',
    desc: 'Our in-house product. Wedding, anniversary, nikah, corporate — see the full catalogue on tsifraone.ru.',
    inc: ['13 event types', 'Timer · map · gallery', 'RSVP straight to Telegram', 'Custom domain option', 'From ~$15'],
    link: 'https://tsifraone.ru',
    linkText: 'Open tsifraone.ru',
  },
]

export default function Services() {
  return (
    <section id="services" className="sv">
      <div className="container">
        <motion.span className="eyebrow" {...reveal}>— Services</motion.span>
        <motion.h2 className="sv__h2 h2" {...reveal} transition={{ ...reveal.transition, delay: 0.05 }}>
          Four ways <br />
          <span className="italic">we can help.</span>
        </motion.h2>
        <motion.p className="sv__sub" {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
          Prices are starting points. Final quote is fixed after a 5-minute chat — no hourly surprises.
        </motion.p>

        <div className="sv__grid">
          {services.map((s, i) => (
            <motion.article
              key={s.name}
              className={`sv__card ${s.featured ? 'sv__card--featured' : ''}`}
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.12 + i * 0.06 }}
            >
              <header className="sv__head">
                <div>
                  <h3 className="sv__name">{s.name}</h3>
                  <span className="sv__days">{s.days}</span>
                </div>
                <span className="sv__price">
                  from <b>{s.price}</b>
                </span>
              </header>

              <p className="sv__desc">{s.desc}</p>

              <ul className="sv__inc">
                {s.inc.map((x) => <li key={x}>{x}</li>)}
              </ul>

              {s.link ? (
                <a href={s.link} target="_blank" rel="noopener noreferrer" className="sv__cta">
                  {s.linkText} <span aria-hidden="true">↗</span>
                </a>
              ) : (
                <a href="#contact" className="sv__cta">Get a quote <span aria-hidden="true">→</span></a>
              )}

              {s.featured && <span className="sv__pin">Most requested</span>}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
