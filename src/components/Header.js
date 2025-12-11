import './Header.css'
import me from '../data/me'
import { Link } from 'react-router-dom'

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
        <Link to="/who">Who</Link>
        <Link to="/cv">CV</Link>
        <Link to="/projects">Projects</Link>
      </nav>
    </div>
  );
}
