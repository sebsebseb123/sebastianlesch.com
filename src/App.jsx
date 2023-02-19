import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Alleyway from './components/Alleyway'
import './assets/scss/App.scss'

export default function App() {
  // State for the current page.
  // TODO: This functionally can be replaced by a proper router in the next version.
  const [page, setPage] = useState('home');

  // Click handler for nav buttons to set the page state.
  const onClickNav = e => {
    setPage(e.target.getAttribute('value'));
  }

  // Click handler mousemovement.
  // This should update the perspective origin of the alleyway based on the mouse position.
  const handleMouseMove = e => {
    // Define variables for each page.
    const pagePerspectiveDefs = {
      home: {
        x: 20,
        y: 60,
        degreeFreedom: 20,
      },
      projects: {
        x: 70,
        y: 60,
        degreeFreedom: 20,
      },
      contact: {
        x: 50,
        y: 60,
        degreeFreedom: 5,
      },
    };

    // Calculate the percentage to move X and Y.
    const xPercent =
      ((e.clientX / window.innerWidth) * pagePerspectiveDefs[page].degreeFreedom)
      - (pagePerspectiveDefs[page].degreeFreedom / 2)
      + pagePerspectiveDefs[page].x;

    const yPercent =
      ((e.clientY / window.innerHeight) * pagePerspectiveDefs[page].degreeFreedom)
      - (pagePerspectiveDefs[page].degreeFreedom / 2)
      + pagePerspectiveDefs[page].y;

    // Get the alleyway element and set the perspective origin.
    const alleyway = document.querySelector('.alleyway');
    alleyway.style.setProperty('perspective-origin', xPercent + '% ' + yPercent + '%');
  }

  // Let's add the mousemove event listener each time the page state changes.
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
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
