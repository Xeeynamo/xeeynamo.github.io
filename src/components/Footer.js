import './Footer.css'

const SOURCE_URL = "https://github.com/Xeeynamo/xeeynamo.github.io"

export default function Footer() {
  return (
    <div className="Footer">
      <hr />
      <div className='FooterContent'>
        © {new Date().getFullYear()}, Luciano Ciccariello<br />
        Source code at <a href={SOURCE_URL}>{SOURCE_URL}</a>
      </div>
    </div>
  )
}
