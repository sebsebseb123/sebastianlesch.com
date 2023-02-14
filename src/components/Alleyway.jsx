import { useEffect, useState } from 'react'
import '../assets/scss/Alleyway.scss'

export default function Alleyway({ page }) {
  const [copy, setCopy] = useState();
  const [link, setLink] = useState();
  const [activeSign, setActiveSign] = useState();
  const [transitionState, setTransitionState] = useState('transitioning');

  const num_stores = 12;
  const itxSignTiming = 500;
  const itxPageTiming = 2000;

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
          copy: () => <><span className="glow">Longslice.com</span><br />Drupal based e-commerce, cross platform, SEO, etc...</>,
          key: "longslice",
          link: "https://longslice.com",
        },
        {
          position: '9',
          copy: () => <><span className="glow">AviaryBrewpub.com</span><br />PHP, content management, cross platform, SEO, etc...</>,
          key: "aviary-brewpub",
          link: "https://aviarybrewpub.com",
        },
        {
          position: '8',
          copy: () => <><span className="glow">OneRedStreamer.com</span><br />Static one-page site with vanilla HTML/CSS/JS.</>,
          key: "one-red-streamer",
          link: "https://oneredstreamer.com",
        },
        {
          position: '7',
          copy: () => <><span className="glow">PBSMusic.org</span><br />Static one-page site with vanilla HTML/CSS/JS.</>,
          key: "pbs-music",
          link: "https://pbsmusic.org/",
        },
      ],
    },
    contact: {
      copy: () => {
        return (
          <>
            <span className="glow">Sebastian Lesch</span><br />416.727.3687<br /><a href="mailto:sebastian.lesch@gmail.com">sebastian.lesch@gmail.com</a>
          </>
        )
      },
    },
    signExists: (page, signKey) => {
      // Check to see if there's copy for the sign, based on the sign number being equal to the key.
      if (pageInfo[page].signs.find(sign => sign.key === signKey)) return true;
      else return false;
    },
    getSignCopy: (page, signKey) => {
      // Return back the copy for the sign, based on the sign number being equal to the key.
      return ({
        newCopy: (pageInfo[page].signs.find(sign => sign.key === signKey).copy ?? ''),
        newLink: (pageInfo[page].signs.find(sign => sign.key === signKey).link ?? ''),
      });
    },
    getPageCopy: (page) => {
      return ({
        newCopy: pageInfo[page].copy(),
        newLink: '',
      });
    },
  }

  // Create a click handler for the sign elements. It should populate the .copy-display element with the appropriate copy.
  const onClickSign = e => {
    // If we're on the contact page, do nothing.
    if (page == 'contact') return;

    // Get the sign key.
    const signKey = e.target.getAttribute('data-sign-key');
    // If the sign doesn't exist, return.
    if (!pageInfo.signExists(page, signKey)) return;

    // Start our transition.
    setTransitionState('sign-transition');

    // If we click on the same sign, revert the copy back to the page copy.
    if (activeSign == signKey) {
      // return;
      const { newCopy, newLink } = pageInfo.getPageCopy(page);
      // Wait for the transition to finish, then set the transition state to ready.
      setTimeout(() => {
        setCopy(newCopy ?? '');
        setLink(newLink ?? '');
        setActiveSign('');
        setTransitionState('ready');
      }, itxSignTiming);
    }
    // Otherwise, set the copy to the sign copy.
    else {
      const { newCopy, newLink } = pageInfo.getSignCopy(page, signKey);
      // Wait for the transition to finish, then set the transition state to ready.
      setTimeout(() => {
        setCopy(newCopy ?? '');
        setLink(newLink ?? '');
        setActiveSign(signKey);
        setTransitionState('ready');
      }, itxSignTiming);
    }

  }

  useEffect(() => {
    setTransitionState('page-transition');
    // Wait for the transition to finish, then set the transition state to ready.
    setTimeout(() => {
      setCopy(pageInfo[page].copy ?? '');
      setLink('');
      setActiveSign('');
      setTransitionState('ready');
    }, itxPageTiming);
  }, [page]);

  return (
    <div className='background'>
      <div className={"mobile copy copy-display " + transitionState}>
        {copy}
        {link ? (<a className='project-link' href={link} target="_blank">
          <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21 3L15 3M21 3L12 12M21 3V9" stroke="white" strokeLinecap="round" strokeLinejoin="round" /> <path d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11" stroke="white" strokeLinecap="round" /> </svg>
        </a>) : ''}
      </div>

      <div className={"alleyway " + transitionState} data-numstores={num_stores}>
        <div className="copy copy-display">
          {copy}
          {link ? (<a className='project-link' href={link} target="_blank">
            <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M21 3L15 3M21 3L12 12M21 3V9" stroke="white" strokeLinecap="round" strokeLinejoin="round" /> <path d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11" stroke="white" strokeLinecap="round" /> </svg>
          </a>) : ''}
        </div>
        <div className="wall left">
          {Array.from(Array(num_stores).keys()).map((i) => {
            return (
              <svg key={'left-store' + (i + 1)} className={'store store' + (i + 1)} viewBox="0 0 100 100" />
            );
          })}
        </div>
        {pageInfo.projects.signs.map(sign => {
          return (
            <div key={sign.key} onClick={onClickSign} data-sign-key={sign.key} className={'sign projects sign-pos-' + (sign.position) + ' sign-key-' + (sign.key)}></div>
          )
        })}
        <div className="wall right">
          {Array.from(Array(num_stores).keys()).map((i) => {
            return (
              <svg key={'right-store' + (i + 1)} className={'store store' + (i + 1)} viewBox="0 0 100 100" />
            )
          })}
        </div>
        {pageInfo.home.signs.map(sign => {
          return (
            <div key={sign.key} onClick={onClickSign} data-sign-key={sign.key} className={'sign tech sign-pos-' + (sign.position) + ' sign-key-' + (sign.key)}></div>
          )
        })}
        <div className="wall bottom"></div>
        <div className="wall back"></div>
      </div>
      <div className="nightsky"></div>
    </div>
  )
}