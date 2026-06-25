import { motion } from 'framer-motion'
import './About.css'

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: 'easeOut' },
}

const stats = [
  { v: '1–3', l: 'days from kickoff to launch' },
  { v: '100%', l: 'hand-coded — no builders' },
  { v: 'A+', l: 'SSL Labs, PageSpeed 95+' },
  { v: '∞', l: 'revisions until you love it' },
]

const principles = [
  {
    t: 'Visuals you remember',
    d: 'WebGL, scroll-driven motion, premium typography. Your site signals «serious business» from the first second.',
  },
  {
    t: 'Speed and SEO from day one',
    d: 'Pre-rendered HTML, lazy-loading, optimised images. Google and Yandex love sites like this.',
  },
  {
    t: 'Security, analytics, backups',
    d: 'CSP, HSTS, fail2ban, daily backups, full monitoring. Our Telegram bot tells you everything in real time.',
  },
]

export default function About() {
  return (
    <section className="about">
      <div className="container">
        <motion.span className="eyebrow" {...reveal}>About</motion.span>
        <motion.h2 className="about__title" {...reveal} transition={{ ...reveal.transition, delay: 0.05 }}>
          A small studio. <br />
          <span className="gradient-text">A big approach to every site.</span>
        </motion.h2>

        <div className="about__stats">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              className="about__stat"
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.05 }}
            >
              <span className="about__stat-v">{s.v}</span>
              <span className="about__stat-l">{s.l}</span>
            </motion.div>
          ))}
        </div>

        <div className="about__grid">
          {principles.map((p, i) => (
            <motion.div
              key={p.t}
              className="about__card"
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.08 }}
            >
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
