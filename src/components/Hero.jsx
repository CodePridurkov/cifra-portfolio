import { motion } from 'framer-motion'
import './Hero.css'

const TG = 'https://t.me/TsifraOne'

export default function Hero() {
  return (
    <section className="hero">
      <header className="hero__topbar">
        <a href="#top" className="hero__logo">Tsifra</a>
        <nav className="hero__nav">
          <a href="#cases">Cases</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href={TG} target="_blank" rel="noopener noreferrer" className="hero__cta">
            Telegram →
          </a>
        </nav>
      </header>

      <div className="container hero__inner" id="top">
        <motion.span
          className="eyebrow"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Boutique web studio
        </motion.span>

        <motion.h1
          className="hero__title"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          We build websites <br />
          <span className="gradient-text"><i>that sell</i></span>
        </motion.h1>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Landing pages, corporate sites, e-commerce and event invitations.
          Premium visuals, blazing speed, clear analytics.
          From idea to launch — in 1 to 3 days.
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="#cases" className="hero__btn hero__btn--primary">See cases</a>
          <a href={TG} target="_blank" rel="noopener noreferrer" className="hero__btn hero__btn--secondary">
            Talk on Telegram
          </a>
        </motion.div>

        <motion.div
          className="hero__strip"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <span>In-house product <b>tsifraone.ru</b></span>
          <span>·</span>
          <span>Premium site for <b>Art Capital, Dubai</b></span>
          <span>·</span>
          <span>WebGL, 3D, scroll-driven motion</span>
        </motion.div>
      </div>
    </section>
  )
}
