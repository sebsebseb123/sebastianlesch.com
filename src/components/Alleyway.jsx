import { useEffect, useState } from 'react'
import '../assets/scss/Alleyway.scss'

export default function Alleyway({ page }) {
  // Create states for the copy and links.
  const [activeSign, setActiveSign] = useState({
    key: '',
    copy: () => { },
    link: '',
  });
  const [transitionState, setTransitionState] = useState('transitioning');

  // Define the number of stores and the timing for the transitions in milliseconds.
  const num_stores = 12;
  const itxSignTiming = 500;
  const itxPageTiming = 2000;

  // Define the copy and links for each page and "store sign".
  const pageInfo = {
    home: {
      copy: () => {
        return (
          <>
            Hi, I'm Sebastian.<br />I use all kinds of tools to make some pretty neat things.
          </>
        )
      },
      signs: [
        {
          position: '10',
          copy: () => <><span className="glow">React JS</span><br />Builds dynamic UI and SPAs.</>,
          key: "react-js",
        },
        {
          position: '9',
          copy: () => <><span className="glow">Javascript</span><br />Adds interactivity and functionality.</>,
          key: "javascript",
        },
        {
          position: '8',
          copy: () => <><span className="glow">HTML/CSS</span><br />Visually appealing websites across devices.</>,
          key: "html-css",
        },
        {
          position: '7',
          copy: () => <><span className="glow">Drupal</span><br />CMS framework for complex web applications.</>,
          key: "drupal",
        },
        {
          position: '6',
          copy: () => <><span className="glow">PHP</span><br />Server-side scripting.<br />A WWW foundation.</>,
          key: "php",
        },
        {
          position: '5',
          copy: () => <><span className="glow">AWS</span><br />Computing, hosting, storage, databases, machine learning, more...</>,
          key: "aws",
        },
      ],
    },
    projects: {
      copy: () => {
        return (
          <>
            I love working on fun projects that require creativity and problem solving.
          </>
        )
      },
      signs: [
        {
          position: '10',
          copy: () => <><span className="glow"><a href="https://longslice.com" target="_blank">Longslice.com</a></span><br />Drupal based e-commerce, cross platform, SEO, more...</>,
          key: "longslice",
          link: "https://longslice.com",
        },
        {
          position: '9',
          copy: () => <><span className="glow"><a href="https://aviarybrewpub.com" target="_blank">AviaryBrewpub.com</a></span><br />PHP, content management, cross platform, SEO, more...</>,
          key: "aviary-brewpub",
          link: "https://aviarybrewpub.com",
        },
        {
          position: '8',
          copy: () => <><span className="glow"><a href="https://oneredstreamer.com" target="_blank">OneRedStreamer.com</a></span><br />Static one-page site with vanilla HTML/CSS/JS.</>,
          key: "one-red-streamer",
          link: "https://oneredstreamer.com",
        },
        {
          position: '7',
          copy: () => <><span className="glow"><a href="https://pbsmusic.org/" target="_blank">PBSMusic.org</a></span><br />Static one-page site with vanilla HTML/CSS/JS.</>,
          key: "pbs-music",
          link: "https://pbsmusic.org/",
        },
      ],
    },
    contact: {
      copy: () => {
        return (
          <>
            <span className="glow">Sebastian Lesch</span><br />M: 416.727.3687<br /><a href="mailto:sebastian.lesch@gmail.com">sebastian.lesch@gmail.com</a>
          </>
        )
      },
    },
    // Helper function to easily get the copy for a sign.
    getSignCopy: (page, signKey) => {
      // Return back the copy for the sign.
      return ({
        newCopy: (pageInfo[page].signs.find(sign => sign.key === signKey).copy ?? ''),
        newLink: (pageInfo[page].signs.find(sign => sign.key === signKey).link ?? ''),
      });
    },
  }

  // Create a click handler for the street sign elements. It should populate the .copy-display element with the appropriate copy.
  const onClickSign = e => {
    // Stop the click so it doesn't add "#" to the URL.
    e.preventDefault();

    // Get the sign key.
    const signKey = e.target.getAttribute('data-sign-key');

    // Start our transition state.
    setTransitionState('sign-transition');

    // If we click on the same sign, revert the copy back to the page copy.
    if (activeSign.key == signKey) {
      // Wait for the transition to finish, then set the active sign info and the transition state to ready.
      setTimeout(() => {
        setActiveSign({
          key: '',
          copy: pageInfo[page].copy ?? '',
          link: '',
        });
        setTransitionState('ready');
      }, itxSignTiming);
    }
    // Otherwise, set the copy to the sign copy.
    else {
      const { newCopy, newLink } = pageInfo.getSignCopy(page, signKey);
      // Wait for the transition to finish, then set the active sign info and the transition state to ready.
      setTimeout(() => {
        setActiveSign({
          key: signKey,
          copy: newCopy ?? '',
          link: newLink ?? '',
        });
        setTransitionState('ready');
      }, itxSignTiming);
    }
  }

  // Set the transition state and change the copy when the page changes.
  useEffect(() => {
    setTransitionState('page-transition');
    // Wait for the transition to finish, then set the transition state to ready.
    setTimeout(() => {
      setActiveSign({
        key: '',
        copy: pageInfo[page].copy ?? '',
        link: '',
      });
      setTransitionState('ready');
    }, itxPageTiming);
  }, [page]);

  return (
    <div className='background'>
      <div className={"mobile copy copy-display " + transitionState}>
        {activeSign.copy()}
        {activeSign.link ? (
          <a className='project-link' href={activeSign.link} target="_blank">
            <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21 3L15 3M21 3L12 12M21 3V9" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11" stroke="white" strokeLinecap="round" />
            </svg>
          </a>
        ) : ''}
      </div>

      <div className={"alleyway " + transitionState} data-numstores={num_stores}>

        <div className="copy copy-display">
          {activeSign.copy()}
          {activeSign.link ? (
            <a className='project-link' href={activeSign.link} target="_blank">
              <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 3L15 3M21 3L12 12M21 3V9" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11" stroke="white" strokeLinecap="round" />
              </svg>
            </a>
          ) : ''}
        </div>

        <div className="wall left"></div>
        <div className="wall right"></div>
        <div className="wall bottom"></div>
        <div className="wall back"></div>

        {pageInfo.projects.signs.map(sign => {
          return (
            <a key={sign.key} onClick={onClickSign} data-sign-key={sign.key} className={'sign projects sign-pos-' + (sign.position) + ' sign-key-' + (sign.key)}></a>
          )
        })}
        {pageInfo.home.signs.map(sign => {
          return (
            <a key={sign.key} onClick={onClickSign} data-sign-key={sign.key} className={'sign tech sign-pos-' + (sign.position) + ' sign-key-' + (sign.key)}></a>
          )
        })}

      </div>

      <div className="nightsky"></div>
    </div>
  )
}