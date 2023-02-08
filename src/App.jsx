import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import BGBuildings from './components/BGBuildings'
import './assets/scss/App.scss'

// Create a function to check if device is mobile.
const checkIfMobile = () => {
  // If the device is mobile, set the flag to true.
  if (window.innerWidth < 768) return true;
  else return false;
}

function App() {
  const [page, setPage] = useState('about');

  const onClickNav = e => {
    setPage(e.target.getAttribute('value'));
  }

  useEffect(() => {
    // Create a variable flag to check if the device is mobile.
    let isMobile = checkIfMobile();

    // If isMobile, then create an event listener for device orientation.
    if (isMobile) return;

    const handleMouseMove = e => {
      const alleyway = document.querySelector('.alleyway');
      const x = e.clientX;
      const y = e.clientY;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const xPercent = ((x / width) * 40) + 30;
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
