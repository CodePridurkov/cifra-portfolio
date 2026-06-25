import { motion } from 'framer-motion'
import './Contact.css'

const TG = 'https://t.me/TsifraOne'
const VK = 'https://vk.ru/tsifraone'
const PHONE_TEL = 'tel:+79933902737'
const PHONE_TXT = '+7 993 390 27 37'

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: 'easeOut' },
}

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div className="contact__inner" {...reveal}>
          <span className="eyebrow">Contact</span>
          <h2 className="contact__title">
            Ready to <span className="gradient-text"><i>talk?</i></span>
          </h2>
          <p className="contact__sub">
            Ping us on Telegram — we reply in 5 minutes.
            Free quote, timeline and a clear recommendation for your case.
          </p>

          <div className="contact__buttons">
            <a href={TG} target="_blank" rel="noopener noreferrer" className="contact__btn contact__btn--primary">
              Message on Telegram
            </a>
            <a href={VK} target="_blank" rel="noopener noreferrer" className="contact__btn contact__btn--secondary">
              VK
            </a>
            <a href={PHONE_TEL} className="contact__btn contact__btn--secondary">
              {PHONE_TXT}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
