import { useState } from 'react'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Nav from './components/Nav'
import './assets/scss/App.scss'


function App() {
  const [page, setPage] = useState('about');

  const onClickInit = () => {
    document.getElementById('main').classList.remove('init');
    document.getElementById('start').classList.add('bye');
  }

  const onClickNav = e => {
    setPage(e.target.getAttribute('value'));
  }

  const getPage = page => {
    switch (page) {
      case 'about':
        return <About />
      case 'projects':
        return <Projects />
      case 'contact':
        return <Contact />
    }
  }

  return (
    <>
      <div id='start'>
        <div className='container'>
          <span className='anchor' onClick={onClickInit}>Click here</span>
          &nbsp;to find out more about Sebastian Lesch.
        </div>
      </div>
      <div id="main" className='container init'>
        <div className={"display-area " + page}>
          {getPage(page)}
          {/* <About /> */}
        </div>
        <Nav onClickNav={onClickNav} page={page} />
      </div>
    </>
  )
}

export default App
