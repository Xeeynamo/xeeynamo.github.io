import './Header.css'
import me from '../data/me'
import { Link } from 'react-router-dom'

export default function Header(data) {
  return (
    <div className='Header'>
      <h1>{me.name}</h1>
      <h2>{me.title}</h2>
      <nav key="routes">
        <Link to="/">Who</Link>
        <Link to="/cv">CV</Link>
        <Link to="/projects">Projects</Link>
      </nav>
      <nav key="external">
        {me.links
          .filter(x => !x.isExtraLink || data.showExtraLinks)
          .map((x, i) => (
            <Link key={i} to={x.url}>{x.name}</Link>
          ))}
      </nav>
    </div>
  );
}
