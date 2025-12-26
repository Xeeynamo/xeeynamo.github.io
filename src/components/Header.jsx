import './Header.css'
import me from '../data/me'

export default function Header() {
  return (
    <header className='Header'>
      <div className="cobweb cobweb-left"></div>
      <div className="cobweb cobweb-right"></div>
      <div className="floating-bats">
        <span className="bat">🦇</span>
        <span className="bat">🦇</span>
        <span className="bat">🦇</span>
      </div>
      <div className="Header-skull">💀</div>
      <h1 className="Header-title">
        <span className="spooky-letter">👻</span> {me.name} <span className="spooky-letter">👻</span>
      </h1>
      <h2 className="Header-subtitle">
        ☠ {me.title} ☠
      </h2>
      <nav className="Header-nav">
        <a href="#about" className="nav-link">🕷 About</a>
        <a href="#work" className="nav-link">🕸 Work</a>
        <a href="#projects" className="nav-link">🎃 Projects</a>
        <span className="nav-separator">⚰</span>
        {me.links.map(link => (
          <a key={link.url} href={link.url} className="nav-link">
            🔮 {link.name}
          </a>
        ))}
      </nav>
      <div className="Header-warning">
        ⚠ Enter if you dare... ⚠
      </div>
    </header>
  );
}
