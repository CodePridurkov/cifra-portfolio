import { motion } from 'framer-motion'
import { cases } from '../data/cases'
import CasePreview from './CasePreview'
import './Cases.css'

const reveal = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
}

export default function Cases() {
  return (
    <section id="cases" className="cs">
      <header className="cs__top container">
        <span className="eyebrow">— Selected work · 2024–2026</span>
        <h2 className="cs__h2 h2">
          Six projects.
          <br />
          <span className="italic">One studio voice.</span>
        </h2>
        <p className="cs__sub">
          Live products and recent concepts. Each one is hand-coded, fast,
          shipped on time and on brand.
        </p>
      </header>

      <div className="cs__list">
        {cases.map((c, i) => (
          <article
            key={c.slug}
            className={`cs__item ${i % 2 ? 'cs__item--ink' : 'cs__item--paper'}`}
          >
            <div className="container cs__grid">
              <motion.div className="cs__info" {...reveal}>
                <div className="cs__num">{String(i + 1).padStart(2, '0')} / {String(cases.length).padStart(2, '0')}</div>
                <div className="cs__tag">
                  <span className={`cs__dot ${c.live ? 'cs__dot--live' : ''}`} />
                  {c.live ? 'Live' : c.tag}
                </div>
                <h3 className="cs__title h3">{c.title}</h3>
                <p className="cs__desc">{c.description}</p>

                <ul className="cs__metrics">
                  {c.metrics.map((m) => (
                    <li key={m.l}>
                      <span className="cs__metric-v">{m.v}</span>
                      <span className="cs__metric-l">{m.l}</span>
                    </li>
                  ))}
                </ul>

                <div className="cs__chips">
                  {c.stack.map((s) => <span key={s} className="cs__chip">{s}</span>)}
                </div>

                {c.url && (
                  <a href={c.url} target="_blank" rel="noopener noreferrer" className="cs__open">
                    Visit the site
                    <span aria-hidden="true">↗</span>
                  </a>
                )}
              </motion.div>

              <motion.div
                className="cs__visual"
                style={{ background: c.palette }}
                {...reveal}
                transition={{ ...reveal.transition, delay: 0.05 }}
              >
                <CasePreview slug={c.slug} icon={c.icon} />
              </motion.div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
