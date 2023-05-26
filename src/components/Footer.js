import './Footer.css'

export default function Footer() {
  const sourcecode = "https://github.com/Xeeynamo/xeeynamo.github.io"
  return (
    <div className="Footer">
      <hr />
      <div className='FooterContent'>
        © {new Date().getFullYear()}, Luciano Ciccariello<br />
        Source code at <a href={sourcecode}>{sourcecode}</a>
      </div>
    </div>
  )
}
