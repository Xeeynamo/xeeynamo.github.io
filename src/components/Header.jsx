import './Header.css'
import me from '../data/me'

export default function Header() {
  return (
    <header className='Header'>
      <div className="Header-banner">
        <marquee behavior="scroll" scrollamount="8">
          ✨ WELCOME TO {me.name.toUpperCase()}'S CYBERSPACE ✨ BEST VIEWED IN NETSCAPE NAVIGATOR 4.0+ ✨
        </marquee>
      </div>
      <h1 className="Header-title">
        <span className="blink">★</span> {me.name} <span className="blink">★</span>
      </h1>
      <h2 className="Header-subtitle">
        .:*~*:._.:*~*:. {me.title} .:*~*:._.:*~*:.
      </h2>
      <nav className="Header-nav">
        <div className="nav-buttons">
          <a href="#about" className="nav-button">[ About ]</a>
          <a href="#work" className="nav-button">[ Work ]</a>
          <a href="#projects" className="nav-button">[ Projects ]</a>
        </div>
        <div className="nav-links">
          {me.links.map(link => (
            <a key={link.url} href={link.url} className="nav-link">
              &gt;&gt; {link.name}
            </a>
          ))}
        </div>
      </nav>
      <div className="Header-counter">
        <img src="https://stuff.charm.sh/bongo-cat/bongo-cat-transparent.gif" alt="Bongo Cat" style={{height: '40px', imageRendering: 'pixelated'}} />
        <span className="counter-text">You are visitor #{Math.floor(Math.random() * 999999)}</span>
      </div>
    </header>
  );
}
