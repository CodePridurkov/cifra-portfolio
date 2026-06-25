import { motion } from 'framer-motion'
import './Contact.css'

const TG = 'https://t.me/TsifraOne'
const EMAIL = 'xoroshprosto@proton.me'
const MAILTO = `mailto:${EMAIL}`

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
}

export default function Contact() {
  return (
    <section id="contact" className="ct">
      {/* decorative glow layers behind the glass card */}
      <div className="ct__glow ct__glow--1" aria-hidden="true" />
      <div className="ct__glow ct__glow--2" aria-hidden="true" />
      <div className="ct__glow ct__glow--3" aria-hidden="true" />
      <div className="ct__grid-overlay" aria-hidden="true" />

      <div className="container">
        <div className="ct__glass">
          <motion.span className="eyebrow ct__eyebrow" {...reveal}>— Get in touch</motion.span>

          <motion.h2 className="ct__h2" {...reveal} transition={{ ...reveal.transition, delay: 0.05 }}>
            Let's build <br />
            <span className="italic gradient-text">something quietly great.</span>
          </motion.h2>

          <motion.p className="ct__sub" {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
            We reply on Telegram within five minutes. A free quote, an honest
            timeline, and a clear recommendation — usually all in the first message.
          </motion.p>

          <motion.div className="ct__buttons" {...reveal} transition={{ ...reveal.transition, delay: 0.18 }}>
            <a href={TG} target="_blank" rel="noopener noreferrer" className="ct__btn ct__btn--primary">
              Message on Telegram <span aria-hidden="true">↗</span>
            </a>
            <a href={MAILTO} className="ct__btn ct__btn--ghost">{EMAIL}</a>
          </motion.div>

          <motion.div className="ct__lines" {...reveal} transition={{ ...reveal.transition, delay: 0.25 }}>
            <div>
              <span className="ct__line-l">Telegram</span>
              <a className="ct__line-v" href={TG} target="_blank" rel="noopener noreferrer">@TsifraOne</a>
            </div>
            <div>
              <span className="ct__line-l">Email</span>
              <a className="ct__line-v" href={MAILTO}>{EMAIL}</a>
            </div>
            <div>
              <span className="ct__line-l">Live product</span>
              <a className="ct__line-v" href="https://tsifraone.ru" target="_blank" rel="noopener noreferrer">tsifraone.ru</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
