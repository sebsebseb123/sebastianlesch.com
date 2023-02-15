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
        x: 20,
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

  // Create a handler for mouse dragging.
  // This should update the left position of the alleyway based on the mouse dragging amount.
  const handleMouseDown = e => {
    // Define tweakable vars.
    const degreeFreedom = 20;
    const pagePerspectiveDefs = {
      home: {
        x: 20,
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

    // Create an event listener for mouse dragging.
    window.addEventListener('mousemove', handleMouseMove);
  }


  // Create a handler for device dragging.
  const handleTouchMove = e => {
    // Define tweakable vars.
    const degreeFreedom = 20;
    const pagePerspectiveDefs = {
      home: {
        x: 20,
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

    // Adjust left position of the alleyway based on touch position.
    const alleyway = document.querySelector('.alleyway');
    const x = e.touches[0].clientX;
    const y = e.touches[0].clientY;
    const width = window.innerWidth;
    const height = window.innerHeight;
    const xPercent = ((x / width) * degreeFreedom) - (degreeFreedom / 2) + pagePerspectiveDefs[page].x;
    const yPercent = ((y / height) * degreeFreedom) - (degreeFreedom / 2) + pagePerspectiveDefs[page].y;

    alleyway.style.setProperty('perspective-origin', xPercent + '% ' + yPercent + '%');
  }

  // Have a similar event handler for mobile device orientation.
  const handleDeviceOrientation = e => {
    // Define tweakable vars.
    const degreeFreedom = 20;
    const pagePerspectiveDefs = {
      home: {
        x: 30,
        y: 60,
        left: -30,
      },
      projects: {
        x: 70,
        y: 60,
        left: 140,
      },
      contact: {
        x: 50,
        y: 40,
      },
    };

    // Set perspective origin based on device orientation.
    const alleyway = document.querySelector('.alleyway');
    const x = e.beta;
    const y = e.gamma;
    const xPercent = ((x / 360) * degreeFreedom) - (degreeFreedom / 2) + pagePerspectiveDefs[page].x;
    const yPercent = pagePerspectiveDefs[page].y;
    const yLeft = ((y / 360) * degreeFreedom) - (degreeFreedom / 2) + pagePerspectiveDefs[page].left;

    alleyway.style.setProperty('perspective-origin', xPercent + '% ' + yPercent + '%');
    alleyway.style.setProperty('left', yLeft + '%');
  }


  useEffect(() => {
    // If isMobile, then create an event listener for device orientation.
    // if (isMobile) {
    // return;
    // window.removeEventListener('deviceorientation', handleDeviceOrientation);
    // return () => {
    // }
    // }
    // else {
    // }

    // window.removeEventListener('mousemove', handleMouseMove);
    // window.addEventListener('deviceorientation', handleDeviceOrientation);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      // window.removeEventListener('deviceorientation', handleDeviceOrientation);
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
