import { motion } from 'framer-motion'
import './About.css'

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
}

const stats = [
  { v: '1–3', u: 'days', l: 'from kickoff to launch' },
  { v: '100', u: '%', l: 'hand-coded — no website builders' },
  { v: '95', u: '+', l: 'PageSpeed across every project' },
  { v: '∞', u: '', l: 'revisions until you love it' },
]

const principles = [
  {
    t: 'Visuals that linger',
    d: 'Editorial typography, scroll-driven motion, and details people screenshot. Your site should feel intentional from the first second.',
  },
  {
    t: 'Engineered for speed',
    d: 'Pre-rendered HTML, lazy-loaded media, immutable assets. Crawlers love it, users feel it.',
  },
  {
    t: 'Secure by default',
    d: 'CSP, HSTS, fail2ban, automated backups and live monitoring. We tell you, not the user, when something needs attention.',
  },
]

export default function About() {
  return (
    <section id="about" className="ab">
      <div className="container">
        <motion.span className="eyebrow" {...reveal}>— Studio</motion.span>
        <motion.h2 className="ab__h2 h2" {...reveal} transition={{ ...reveal.transition, delay: 0.05 }}>
          A small team, <br />
          <span className="italic">large standards.</span>
        </motion.h2>

        <div className="ab__stats">
          {stats.map((s, i) => (
            <motion.div
              key={s.l}
              className="ab__stat"
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.08 + i * 0.06 }}
            >
              <span className="ab__stat-num">
                {s.v}<span className="ab__stat-u">{s.u}</span>
              </span>
              <span className="ab__stat-l">{s.l}</span>
            </motion.div>
          ))}
        </div>

        <div className="ab__pr">
          {principles.map((p, i) => (
            <motion.div
              key={p.t}
              className="ab__pr-card"
              {...reveal}
              transition={{ ...reveal.transition, delay: 0.12 + i * 0.07 }}
            >
              <span className="ab__pr-num">0{i + 1}</span>
              <h3 className="ab__pr-t">{p.t}</h3>
              <p className="ab__pr-d">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
