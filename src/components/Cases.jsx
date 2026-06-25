import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cases } from '../data/cases'
import CasePreview from './CasePreview'
import './Cases.css'

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.55, ease: 'easeOut' },
}

export default function Cases() {
  const [active, setActive] = useState(null)

  return (
    <section id="cases" className="cases">
      <div className="container">
        <motion.span className="eyebrow" {...reveal}>Cases</motion.span>
        <motion.h2 className="cases__title" {...reveal} transition={{ ...reveal.transition, delay: 0.05 }}>
          What we've <span className="gradient-text"><i>already shipped</i></span>
        </motion.h2>
        <motion.p className="cases__sub" {...reveal} transition={{ ...reveal.transition, delay: 0.1 }}>
          Live projects — our own product and a premium client in Dubai.
          Concepts — what we're ready to build for your brand next week.
        </motion.p>

        <div className="cases__grid">
          {cases.map((c, i) => (
            <motion.button
              key={c.slug}
              className={`case ${active === c.slug ? 'case--active' : ''}`}
              onClick={() => setActive(active === c.slug ? null : c.slug)}
              {...reveal}
              transition={{ ...reveal.transition, delay: i * 0.06 }}
            >
              <div className="case__preview" style={{ background: c.palette }}>
                <CasePreview slug={c.slug} icon={c.icon} />
                <span className={`case__badge ${c.live ? 'case__badge--live' : ''}`}>
                  {c.live ? '● Live' : c.tag}
                </span>
              </div>
              <div className="case__body">
                <span className="case__tag">{c.tag}</span>
                <h3 className="case__name">{c.title}</h3>
                <p className="case__summary">{c.summary}</p>
                <span className="case__more">
                  {active === c.slug ? 'Collapse −' : 'Read more +'}
                </span>
              </div>
            </motion.button>
          ))}
        </div>

        <AnimatePresence>
          {active && (
            <motion.div
              className="case-details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              {(() => {
                const c = cases.find((x) => x.slug === active)
                return (
                  <div className="case-details__inner">
                    <div className="case-details__head">
                      <div>
                        <span className="eyebrow">{c.tag}</span>
                        <h3 className="case-details__title">{c.title}</h3>
                      </div>
                      <button className="case-details__close" onClick={() => setActive(null)}>
                        ×
                      </button>
                    </div>

                    <p className="case-details__desc">{c.description}</p>

                    <div className="case-details__metrics">
                      {c.metrics.map((m) => (
                        <div key={m.l} className="case-details__metric">
                          <span className="case-details__metric-v">{m.v}</span>
                          <span className="case-details__metric-l">{m.l}</span>
                        </div>
                      ))}
                    </div>

                    <div className="case-details__cols">
                      <div>
                        <h4>Stack</h4>
                        <ul>{c.stack.map((s) => <li key={s}>{s}</li>)}</ul>
                      </div>
                      <div>
                        <h4>What's inside</h4>
                        <ul>{c.tech.map((t) => <li key={t}>{t}</li>)}</ul>
                      </div>
                    </div>

                    {c.url && (
                      <a href={c.url} target="_blank" rel="noopener noreferrer" className="case-details__cta">
                        Open the site →
                      </a>
                    )}
                  </div>
                )
              })()}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
