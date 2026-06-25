import { motion } from 'framer-motion'
import './Hero.css'

const tickerItems = [
  'Landing pages',
  'Corporate sites',
  'E-commerce',
  'Event invitations',
  'SEO ready',
  'WebGL · 3D · scroll-driven motion',
  'tsifraone.ru',
  'artcapitalrealty.com',
]

const TG = 'https://t.me/TsifraOne'

export default function Hero() {
  return (
    <section className="hero">
      <header className="hero__top">
        <div className="container hero__top-row">
          <a href="#top" className="hero__brand">
            <span className="hero__brand-mark">●</span>
            <span>Tsifra</span>
            <span className="hero__brand-meta">/ studio</span>
          </a>
          <nav className="hero__nav">
            <a href="#cases">Cases</a>
            <a href="#services">Services</a>
            <a href="#about">Studio</a>
            <a href="#contact">Contact</a>
            <a href={TG} target="_blank" rel="noopener noreferrer" className="hero__cta-top">
              Telegram
              <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <div className="container hero__inner" id="top">
        <motion.span
          className="eyebrow hero__eyebrow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Boutique web studio · Worldwide
        </motion.span>

        <motion.h1
          className="hero__h1 h1"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.05 }}
        >
          Websites
          <br />
          <span className="italic gradient-text">that quietly</span>
          <br />
          <span className="italic">do the selling.</span>
        </motion.h1>

        <motion.div
          className="hero__meta"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="hero__meta-block">
            <span className="hero__meta-label">What we do</span>
            <span className="hero__meta-text">
              Landings, corporate sites, e-commerce and event invitations.
              Hand-coded React, premium motion, full SEO.
            </span>
          </div>
          <div className="hero__meta-block">
            <span className="hero__meta-label">Turnaround</span>
            <span className="hero__meta-text">1 to 3 days for a landing. 2 weeks for full corporate. Always.</span>
          </div>
          <div className="hero__meta-block">
            <span className="hero__meta-label">Pricing</span>
            <span className="hero__meta-text">From $200. Fixed quote after a 5-minute chat. No hourly surprises.</span>
          </div>
        </motion.div>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <a href="#cases" className="hero__btn hero__btn--ink">
            See selected work
            <span aria-hidden="true">↓</span>
          </a>
          <a href={TG} target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--ghost">
            Start a project
            <span aria-hidden="true">↗</span>
          </a>
        </motion.div>
      </div>

      <div className="ticker" aria-hidden="true">
        <div className="ticker__row">
          {[0, 1].map((n) => (
            <div className="ticker__group" key={n}>
              {tickerItems.map((item, i) => (
                <span className="ticker__item" key={i}>
                  <span className="ticker__text">{item}</span>
                  <span className="ticker__sep">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
