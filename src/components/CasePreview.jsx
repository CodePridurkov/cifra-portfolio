// SVG-превью для каждого кейса. Мини-мокап интерфейса в палитре проекта.
// Это «обложка», которая выглядит как screenshot, но рисуется кодом (всегда чёткая).

const previews = {
  tsifraone: (
    <g>
      <rect x="60" y="40" width="280" height="160" rx="14" fill="#fff" opacity="0.95" />
      <text x="200" y="80" textAnchor="middle" fontSize="14" fill="#7c5cf0" letterSpacing="3">СВАДЬБА</text>
      <text x="200" y="118" textAnchor="middle" fontSize="22" fontFamily="Playfair Display, serif" fontWeight="700" fill="#241b2e">
        Мария &amp; Александр
      </text>
      <text x="200" y="138" textAnchor="middle" fontSize="11" fill="#6a6276">15 августа 2026 · 16:00</text>
      <g>
        <rect x="100" y="150" width="46" height="34" rx="6" fill="#f6f1ec" />
        <rect x="152" y="150" width="46" height="34" rx="6" fill="#f6f1ec" />
        <rect x="204" y="150" width="46" height="34" rx="6" fill="#f6f1ec" />
        <rect x="256" y="150" width="46" height="34" rx="6" fill="#f6f1ec" />
        <text x="123" y="172" textAnchor="middle" fontSize="14" fontWeight="700" fill="#c43ed6">59</text>
        <text x="175" y="172" textAnchor="middle" fontSize="14" fontWeight="700" fill="#c43ed6">23</text>
        <text x="227" y="172" textAnchor="middle" fontSize="14" fontWeight="700" fill="#c43ed6">17</text>
        <text x="279" y="172" textAnchor="middle" fontSize="14" fontWeight="700" fill="#c43ed6">42</text>
      </g>
    </g>
  ),

  artcapitalrealty: (
    <g>
      <rect x="40" y="30" width="320" height="180" rx="14" fill="#fff" opacity="0.96" />
      <rect x="60" y="50" width="120" height="80" rx="8" fill="#1e3a8a" opacity="0.65" />
      <rect x="190" y="50" width="80" height="36" rx="6" fill="#c2913f" opacity="0.75" />
      <rect x="280" y="50" width="60" height="36" rx="6" fill="#1e3a8a" opacity="0.45" />
      <rect x="190" y="94" width="150" height="36" rx="6" fill="#1e3a8a" opacity="0.55" />
      <text x="60" y="156" fontSize="18" fontFamily="Playfair Display, serif" fontWeight="700" fill="#241b2e">Luxury Dubai Properties</text>
      <text x="60" y="174" fontSize="11" fill="#6a6276">From $850 000 · Marina, Palm, Downtown</text>
      <rect x="60" y="188" width="100" height="14" rx="7" fill="url(#gradAcr)" />
      <defs>
        <linearGradient id="gradAcr" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#1e3a8a" />
          <stop offset="1" stopColor="#c2913f" />
        </linearGradient>
      </defs>
    </g>
  ),

  lumora: (
    <g>
      <circle cx="120" cy="100" r="60" fill="#c43ed6" opacity="0.5" />
      <circle cx="200" cy="130" r="80" fill="#7c5cf0" opacity="0.45" />
      <circle cx="280" cy="100" r="50" fill="#fb6f8e" opacity="0.5" />
      <text x="200" y="118" textAnchor="middle" fontSize="32" fontFamily="Playfair Display, serif" fontStyle="italic" fontWeight="700" fill="#fff">
        Lumora
      </text>
      <text x="200" y="142" textAnchor="middle" fontSize="10" letterSpacing="6" fill="#fff" opacity="0.7">DESIGN STUDIO</text>
      <line x1="160" y1="180" x2="240" y2="180" stroke="#fff" strokeOpacity="0.5" strokeWidth="1" />
    </g>
  ),

  laocoon: (
    <g>
      <rect x="60" y="40" width="280" height="160" rx="14" fill="#1f1f1f" />
      <rect x="80" y="60" width="120" height="120" rx="8" fill="url(#gradLao)" />
      <defs>
        <linearGradient id="gradLao" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#c2913f" />
          <stop offset="1" stopColor="#fb6f8e" />
        </linearGradient>
      </defs>
      <text x="220" y="80" fontSize="9" letterSpacing="3" fill="#c2913f">LAOCOÖN · NEW</text>
      <text x="220" y="106" fontSize="16" fontFamily="Playfair Display, serif" fontWeight="700" fill="#fff">Atelier Bag</text>
      <text x="220" y="124" fontSize="11" fill="#888">Hand-crafted leather · Edition of 50</text>
      <text x="220" y="158" fontSize="20" fontFamily="Playfair Display, serif" fontWeight="700" fill="#c2913f">$1 240</text>
      <rect x="220" y="170" width="100" height="22" rx="11" fill="#fff" />
      <text x="270" y="185" textAnchor="middle" fontSize="10" fontWeight="600" fill="#1f1f1f">Add to cart</text>
    </g>
  ),

  loopstack: (
    <g>
      <rect x="40" y="40" width="320" height="160" rx="12" fill="#0a0a0a" />
      <text x="60" y="76" fontSize="22" fontFamily="Playfair Display, serif" fontWeight="700" fill="#fff">Loopstack</text>
      <text x="60" y="96" fontSize="11" fill="#7c5cf0">DIGITAL ENGINEERING</text>
      <text x="60" y="138" fontSize="14" fill="#fff" opacity="0.85">We build digital products</text>
      <text x="60" y="156" fontSize="14" fill="#fff" opacity="0.85">that scale beyond launch.</text>
      <rect x="60" y="170" width="100" height="22" rx="11" fill="#7c5cf0" />
      <text x="110" y="185" textAnchor="middle" fontSize="10" fontWeight="600" fill="#fff">Start a project →</text>
      <circle cx="320" cy="90" r="30" fill="none" stroke="#7c5cf0" strokeWidth="2" opacity="0.5" />
      <circle cx="320" cy="90" r="20" fill="none" stroke="#c43ed6" strokeWidth="2" opacity="0.5" />
      <circle cx="320" cy="90" r="10" fill="#fb6f8e" opacity="0.7" />
    </g>
  ),

  'cifra-brand': (
    <g>
      <circle cx="200" cy="120" r="90" fill="url(#gradBrand)" />
      <defs>
        <linearGradient id="gradBrand" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#7c5cf0" />
          <stop offset="0.55" stopColor="#c43ed6" />
          <stop offset="1" stopColor="#fb6f8e" />
        </linearGradient>
      </defs>
      <text x="200" y="158" textAnchor="middle" fontSize="120" fontFamily="Playfair Display, serif" fontWeight="700" fill="#fff">Ц</text>
    </g>
  ),
}

export default function CasePreview({ slug }) {
  return (
    <svg
      viewBox="0 0 400 240"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      style={{ width: '100%', height: '100%', display: 'block' }}
    >
      {previews[slug] || previews['cifra-brand']}
    </svg>
  )
}
