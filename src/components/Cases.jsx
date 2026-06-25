import { motion } from 'framer-motion'
import { cases } from '../data/cases'
import CasePreview from './CasePreview'
import './Cases.css'

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.2, 0.8, 0.2, 1] },
}

// Bento layout — assigns each case a tile size by index.
// 0 = main hero tile, 1-2 = small accents, 3-4 = medium, 5 = wide banner.
const tiles = ['hero', 'sm', 'sm', 'md', 'md', 'wide']

export default function Cases() {
  return (
    <section id="cases" className="cs">
      <div className="container">
        <header className="cs__top">
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

        <div className="bento">
          {cases.map((c, i) => {
            const size = tiles[i] || 'sm'
            return (
              <motion.article
                key={c.slug}
                className={`tile tile--${size}`}
                style={{ background: c.palette }}
                {...reveal}
                transition={{ ...reveal.transition, delay: 0.05 + i * 0.06 }}
              >
                <div className="tile__visual">
                  <CasePreview slug={c.slug} icon={c.icon} />
                </div>

                <div className="tile__shade" aria-hidden="true" />

                <div className="tile__body">
                  <div className="tile__top">
                    <span className={`tile__tag ${c.live ? 'tile__tag--live' : ''}`}>
                      <span className="tile__dot" />
                      {c.live ? 'Live' : c.tag}
                    </span>
                    <span className="tile__num">0{i + 1}</span>
                  </div>

                  <div className="tile__main">
                    <h3 className="tile__title">{c.title}</h3>
                    {(size === 'hero' || size === 'md') && (
                      <p className="tile__desc">{c.summary}</p>
                    )}
                  </div>

                  {size === 'hero' && (
                    <ul className="tile__metrics">
                      {c.metrics.map((m) => (
                        <li key={m.l}>
                          <span className="tile__metric-v">{m.v}</span>
                          <span className="tile__metric-l">{m.l}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {(size === 'hero' || size === 'md') && (
                    <div className="tile__chips">
                      {c.stack.slice(0, size === 'hero' ? 5 : 3).map((s) => (
                        <span key={s} className="tile__chip">{s}</span>
                      ))}
                    </div>
                  )}

                  {c.url && (size === 'hero' || size === 'md') && (
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tile__cta"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Visit <span aria-hidden="true">↗</span>
                    </a>
                  )}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
