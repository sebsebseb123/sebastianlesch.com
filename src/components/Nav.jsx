import { useState } from 'react'

export default function Nav({ onClickNav, page }) {
  // State for whether the nav menu is open or not.
  const [menuNavOpen, setMenuNavOpen] = useState(false);

  // Define pages.
  const pages = [
    'Home',
    'Projects',
    'Contact',
  ];

  // Click handler for menu nav element.
  const onClickMenuNav = e => {
    // Stop the click so it doesn't add "#" to the URL.
    e.preventDefault();

    // Always toggle the menuNavOpen state.
    setMenuNavOpen(!menuNavOpen);

    // If they clicked on a link, call the onClickNav handler.
    const buttonValue = e.target.getAttribute('value');
    if (buttonValue) {
      onClickNav(e);
    }
  }

  return (
    <div className={"nav-perspective-container" + (menuNavOpen ? ' nav-open' : '')}>
      <div className="nav-container">
        <a href="#" className="menu-nav menu-open" onClick={onClickMenuNav}><hr /><hr /><hr /></a>
        <a href="#" className="menu-nav menu-close" onClick={onClickMenuNav}><hr /><hr /></a>
        <nav>
          <hr className="site-title-underline site-title-underline-0" />
          <svg className="nav-svg" viewBox="0 0 400 60" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="rainbow" x1="0" x2="0" y1="0" y2="100%" gradientUnits="userSpaceOnUse" >
                <stop stopColor="#00d4ff" offset="0%" />
                <stop stopColor="#b739d2" offset="100%" />
              </linearGradient>
              <text id="site-title" textAnchor="middle" x="200" y="47">SebastianLesch.com</text>
            </defs>
            <use href="#site-title" className="site-title glow glow-0" />
            <use href="#site-title" className="site-title glow glow-1" />
            <use href="#site-title" className="site-title glow glow-2" />
            <use href="#site-title" fill="url(#rainbow)" className="site-title" />
          </svg>
          <hr className="site-title-underline site-title-underline-1" />
          {pages.map((pageName, i) => {
            return (
              <a
                href="#"
                key={pageName}
                className={(pageName.toLowerCase() + (pageName.toLowerCase() == page ? ' active ' : ' ') + ('nav-link nav-link-' + i))}
                onClick={onClickMenuNav}
                value={pageName.toLowerCase()}
              >
                {pageName}
                <hr />
              </a>
            )
          })}
        </nav >
      </div >
    </div >
  )
}
