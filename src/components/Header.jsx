import './Header.css'
import me from '../data/me'

export default function Header() {
  return (
    <div className='Header'>
      <h1>{me.name}</h1>
      <h2>{me.title}</h2>
      <nav>
        {me.links.map(link => (
          <a key={link.url} href={link.url}>{link.name}</a>
        ))}
      </nav>
      <nav>
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#projects">Projects</a>
      </nav>
    </div>
  );
}
