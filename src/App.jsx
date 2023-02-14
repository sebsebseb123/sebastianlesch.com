import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Alleyway from './components/Alleyway'
import './assets/scss/App.scss'

// Create a function to check if device is mobile.
const checkIfMobile = () => {
  // If the device is mobile, set the flag to true.
  if (window.innerWidth < 768) return true;
  else return false;
}

function App() {
  const [page, setPage] = useState('home');

  // Create a variable flag to check if the device is mobile.
  const isMobile = checkIfMobile();

  const onClickNav = e => {
    setPage(e.target.getAttribute('value'));
  }

  const handleMouseMove = e => {
    // Define tweakable vars.
    const degreeFreedom = 20;
    const pagePerspectiveDefs = {
      home: {
        x: 30,
        y: 60,
      },
      projects: {
        x: 70,
        y: 60,
      },
      contact: {
        x: 50,
        y: 60,
      },
    };

    // Define boring vars.
    const alleyway = document.querySelector('.alleyway');
    const x = e.clientX;
    const y = e.clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const xPercent = ((x / width) * degreeFreedom) - (degreeFreedom / 2) + pagePerspectiveDefs[page].x;
    const yPercent = ((y / height) * degreeFreedom) - (degreeFreedom / 2) + pagePerspectiveDefs[page].y;

    alleyway.style.setProperty('perspective-origin', xPercent + '% ' + yPercent + '%');
  }

  // Have a similar event handler for mobile device orientation.
  const handleDeviceOrientation = e => {
    // Define tweakable vars.
    const degreeFreedom = 10;
    const pagePerspectiveDefs = {
      home: {
        x: 30,
        y: 60,
      },
      projects: {
        x: 70,
        y: 60,
      },
      contact: {
        x: 50,
        y: 40,
      },
    };

    // Set perspective origin based on device orientation.
    const alleyway = document.querySelector('.alleyway');
    const x = e.beta;
    const xPercent = ((x / 360) * degreeFreedom) - (degreeFreedom / 2) + pagePerspectiveDefs[page].x;
    const yPercent = pagePerspectiveDefs[page].y;

    console.log('page: ' + page);
    console.log('xPercent: ' + xPercent);
    console.log('yPercent: ' + yPercent);

    alleyway.style.setProperty('perspective-origin', xPercent + '% ' + yPercent + '%');
  }


  useEffect(() => {
    // If isMobile, then create an event listener for device orientation.
    if (isMobile) {
      return;
      // window.removeEventListener('deviceorientation', handleDeviceOrientation);
      // window.addEventListener('deviceorientation', handleDeviceOrientation);
      // return () => {
      //   window.removeEventListener('deviceorientation', handleDeviceOrientation);
      // }
    }
    else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.addEventListener('mousemove', handleMouseMove);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    }

  }, [page]);

  return (
    <>
      <div id="main" className={"container " + page}>
        <Alleyway page={page} />
        <Nav onClickNav={onClickNav} page={page} />
      </div>
    </>
  )
}

export default App
