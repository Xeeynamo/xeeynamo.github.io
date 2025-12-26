import './Footer.css'

const SOURCE_URL = "https://github.com/Xeeynamo/xeeynamo.github.io"

export default function Footer() {
  return (
    <div className="Footer">
      <hr />
      <div className='FooterContent'>
        <div className="Footer-badges">
          <div className="badge">
            <div className="badge-inner">NETSCAPE NOW!</div>
          </div>
          <div className="badge">
            <div className="badge-inner">HTML 3.2</div>
          </div>
          <div className="badge">
            <div className="badge-inner">JAVASCRIPT</div>
          </div>
          <div className="badge">
            <div className="badge-inner">BEST IN 800x600</div>
          </div>
        </div>
        <div className="Footer-copyright">
          © {new Date().getFullYear()}, Luciano Ciccariello<br />
          <span className="blink-slow">★</span> Proudly hand-coded in the 90s spirit <span className="blink-slow">★</span><br />
          Source code at <a href={SOURCE_URL}>{SOURCE_URL}</a>
        </div>
        <div className="Footer-webring">
          <div className="webring-title">[ Web Ring ]</div>
          <div className="webring-nav">
            <a href="#" className="webring-link">◄ Previous</a>
            <span className="webring-sep">|</span>
            <a href="#" className="webring-link">Random</a>
            <span className="webring-sep">|</span>
            <a href="#" className="webring-link">Next ►</a>
          </div>
        </div>
        <div className="Footer-lastupdate">
          Last updated: {new Date().toLocaleDateString()} - Page hits: {Math.floor(Math.random() * 999999)}
        </div>
      </div>
    </div>
  )
}
