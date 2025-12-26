import './Footer.css'

const SOURCE_URL = "https://github.com/Xeeynamo/xeeynamo.github.io"

export default function Footer() {
  return (
    <div className="Footer">
      <hr />
      <div className='FooterContent'>
        <div className="Footer-pumpkins">
          <span className="pumpkin">🎃</span>
          <span className="pumpkin">🎃</span>
          <span className="pumpkin">🎃</span>
        </div>
        <div className="Footer-text">
          <div className="Footer-copyright">
            © {new Date().getFullYear()}, Luciano Ciccariello<br />
            <span className="spooky-text">👻 Haunted since 1999 👻</span>
          </div>
          <div className="Footer-source">
            Source code lurking at <a href={SOURCE_URL}>{SOURCE_URL}</a>
          </div>
          <div className="Footer-warning">
            ⚠ This site may contain traces of spookiness ⚠
          </div>
        </div>
        <div className="Footer-ghosts">
          <span className="ghost">👻</span>
          <span className="ghost">👻</span>
        </div>
      </div>
    </div>
  )
}
