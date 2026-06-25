// Studio cases. live=true — real projects; live=false — concepts / WIP.

export const cases = [
  {
    slug: 'tsifraone',
    title: 'Tsifra — event invitation sites',
    tag: 'In-house product',
    summary:
      'A marketplace of one-page invitation sites for weddings, nikahs, anniversaries and corporate events. RSVP straight to Telegram, builder, SEO-optimised blog.',
    description:
      'Full cycle: design, React/Vite app, server-side proxy for leads, pre-rendered HTML for 23 routes, anti-spam, Telegram admin bot, automated backups and monitoring. One-command deploy.',
    stack: ['React 19', 'Vite', 'Node API', 'nginx', 'Telegram Bot', 'JSON-LD'],
    tech: ['SPA → pre-rendered HTML', 'Honeypot + rate-limit', 'CSP + HSTS', 'Auto-renew SSL'],
    palette: 'linear-gradient(135deg, #7c5cf0, #c43ed6, #fb6f8e)',
    accent: '#c43ed6',
    icon: '💌',
    metrics: [
      { v: '1–3 days', l: 'turnaround' },
      { v: '23', l: 'pre-rendered pages' },
      { v: 'from ₽1,200', l: 'starting price' },
    ],
    url: 'https://tsifraone.ru',
    live: true,
  },
  {
    slug: 'artcapitalrealty',
    title: 'Art Capital — Dubai real estate',
    tag: 'Client work',
    summary:
      'A premium catalogue site for a Dubai real-estate agency. Listings with imagery, brochure downloads, viewing request flow.',
    description:
      'Landing site for Art Capital agency. Expensive visual language, smooth motion, premium-tier focus. CRM integration for incoming leads. Mobile-first, multi-language.',
    stack: ['React', 'Vite', 'Framer Motion', 'VPS hosting'],
    tech: ['Premium typography', 'Lazy gallery loading', 'SEO markup', 'Bilingual (EN/RU)'],
    palette: 'linear-gradient(135deg, #1e3a8a, #c2913f, #fb6f8e)',
    accent: '#c2913f',
    icon: '🏙',
    metrics: [
      { v: 'Dubai', l: 'premium segment' },
      { v: 'EN + RU', l: 'multilingual' },
      { v: 'CRM', l: 'lead integration' },
    ],
    url: 'https://artcapitalrealty.com',
    live: true,
  },
  {
    slug: 'lumora',
    title: 'Lumora Studio — design agency',
    tag: 'Concept',
    summary:
      'A creative studio site with interactive cursor, scroll-driven motion and shimmer effects on a WebGL background.',
    description:
      'Concept build: WebGL hero scene, experimental typography, premium palette. A fit for design studios, production houses and creative agencies that want award-tier visuals.',
    stack: ['React', 'Three.js', 'GSAP', 'Tailwind'],
    tech: ['WebGL shaders', 'Scroll-driven UI', 'Custom cursor', 'Page transitions'],
    palette: 'linear-gradient(135deg, #0a0710, #4c1d95, #c43ed6)',
    accent: '#c43ed6',
    icon: '✨',
    metrics: [
      { v: 'WebGL', l: 'shader effects' },
      { v: '60 fps', l: 'smoothness' },
      { v: 'Award-tier', l: 'visual bar' },
    ],
    live: false,
  },
  {
    slug: 'laocoon',
    title: 'Laocoön — premium e-commerce',
    tag: 'Concept',
    summary:
      'A premium accessories shop with a product configurator, 3D product preview and cinematic scroll.',
    description:
      'Premium e-commerce concept. Custom product cards, 3D preview, smooth cart, CMS and payment integration ready out of the box.',
    stack: ['Next.js', 'Three.js', 'Stripe', 'Sanity CMS'],
    tech: ['3D product viewer', 'Server Components', 'Edge caching', 'A/B testing'],
    palette: 'linear-gradient(135deg, #1f1f1f, #c2913f, #fb6f8e)',
    accent: '#c2913f',
    icon: '🛍',
    metrics: [
      { v: '3D preview', l: 'every product' },
      { v: 'Stripe', l: 'payments' },
      { v: '95+', l: 'PageSpeed' },
    ],
    live: false,
  },
  {
    slug: 'loopstack',
    title: 'Loopstack — IT agency',
    tag: 'Concept',
    summary:
      'A corporate website for an IT agency with team, cases, borderless design and a brief generator.',
    description:
      'Site focused on team and process. Strapi for self-managed content, a brief form that pings the account manager on Telegram, native dark mode.',
    stack: ['Astro', 'TypeScript', 'Strapi', 'Telegram'],
    tech: ['Hybrid SSG/SSR', 'i18n', 'Brief generator', 'Dark theme'],
    palette: 'linear-gradient(135deg, #0a0a0a, #1e3a8a, #7c5cf0)',
    accent: '#7c5cf0',
    icon: '🧱',
    metrics: [
      { v: '5×', l: 'faster than peers' },
      { v: 'Strapi', l: 'headless CMS' },
      { v: '24/7', l: 'monitoring' },
    ],
    live: false,
  },
  {
    slug: 'cifra-brand',
    title: 'Tsifra brand system',
    tag: 'Brand',
    summary:
      'Identity for the studio: monogram, type, palette, social templates, OG images and animated favicon.',
    description:
      'A full brand kit: the «Ц» monogram, violet→magenta→rose gradient, Playfair Display + Inter pairing. Applied across every studio project for a single visual code.',
    stack: ['SVG', 'Figma', 'Brand guide'],
    tech: ['Vector logo', 'Gradient system', 'Type system', 'OG templates'],
    palette: 'linear-gradient(135deg, #7c5cf0, #c43ed6, #fb6f8e)',
    accent: '#c43ed6',
    icon: 'Ц',
    metrics: [
      { v: '1 letter', l: 'monogram' },
      { v: '3', l: 'brand colours' },
      { v: '2 fonts', l: 'serif + sans' },
    ],
    live: false,
  },
]
