import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import BGBuildings from './components/BGBuildings'
import './assets/scss/App.scss'


function App() {
  const [page, setPage] = useState('about');

  const onClickNav = e => {
    setPage(e.target.getAttribute('value'));
  }

  // Create a useEffect to add an event listener to the window object for mouse move.
  // The event listener should call a function that updates css property "perspective-origin" of the .alleyway class.
  // The function should take the mouse position and use it to calculate the perspective-origin value.
  useEffect(() => {
    const handleMouseMove = e => {
      const alleyway = document.querySelector('.alleyway');
      const x = e.clientX;
      const y = e.clientY;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const xPercent = ((x / width) * 60) + 20;
      const yPercent = ((y / height) * 40) + 40;
      alleyway.style.setProperty('perspective-origin', xPercent + '% ' + yPercent + '%');
    }
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);


  return (
    <>
      <div id="main" className='container'>
        <div className={"background " + page}>
          <BGBuildings page={page} />
          <Nav onClickNav={onClickNav} page={page} />
        </div>
      </div>
    </>
  )
}

export default App
