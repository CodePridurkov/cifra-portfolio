import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          Tsifra
          <p>Boutique web studio</p>
        </div>
        <nav className="footer__nav">
          <a href="https://tsifraone.ru" target="_blank" rel="noopener noreferrer">tsifraone.ru</a>
          <a href="https://t.me/TsifraOne" target="_blank" rel="noopener noreferrer">Telegram</a>
          <a href="https://vk.ru/tsifraone" target="_blank" rel="noopener noreferrer">VK</a>
        </nav>
        <p className="footer__copy">© {new Date().getFullYear()} Tsifra. All rights reserved.</p>
      </div>
    </footer>
  )
}
