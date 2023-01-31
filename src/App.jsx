import './assets/App.scss'

function App() {
  return (
    <>
      <header>
        <div className="site-title">Sebastian Lesch</div>
        <nav>
          <ol>
            <li><a href="about">About</a></li>
            <li><a href="projects">Projects</a></li>
            <li><a href="blog">Blog</a></li>
          </ol>
        </nav>
      </header>
      <div className="main container">
        <div className="callout">
          <h1>
            <span className="t-code">Coder</span>&nbsp;
            <span className="t-biz">, Entrepreneur ,</span>&nbsp;
            <span className="t-music">Musician</span>
          </h1>
          <p>
            <span className="t-code">I code websites, manage dev ops, build google apps plugins, write scripts and other tools.</span>
            <br />
            <span className="t-biz">I built and help manage a brewery, a restaurant, and a film production company.</span>
            <br />
            <span className="t-music">I have a passion for music and film that drives me to create.</span></p>
        </div>
        <div className="callout">
          <div className='h1'>Hi, I'm Sebastian.</div><p>I'm based in Toronto and I'm always looking for interesting projects to be a part of.</p>
        </div>
      </div>
      <footer>
        &copy; Sebastian Lesch | <a href="mailto:sebastian.lesch@gmail.com">sebastian.lesch@gmail.com</a>
      </footer>
    </>
  )
}

export default App
