export default function Nav({ onClickNav, page }) {
  const links = [
    {
      name: 'Home',
      points: '20.5 15.5 15.5 20.5 15.5 30.5 20.5 35.5 65.5 35.5 70.5 30.5 80.5 30.5 85.5 25.5 85.5 20.5 80.5 15.5 25.5 15.5 20.5 15.5',
    },
    {
      name: 'Projects',
      points: '20.5 40.5 15.5 45.5 15.5 55.5 20.5 60.5 65.5 60.5 70.5 55.5 80.5 55.5 85.5 50.5 85.5 45.5 80.5 40.5 25.5 40.5 20.5 40.5',
    },
    {
      name: 'Contact',
      points: '20.5 65.5 15.5 70.5 15.5 80.5 20.5 85.5 65.5 85.5 70.5 80.5 80.5 80.5 85.5 75.5 85.5 70.5 80.5 65.5 25.5 65.5 20.5 65.5',
    },
  ];

  return (
    <div className="perspective-container">
      <div className="nav-container">
        <div className="menu-open"></div>
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
          {links.map((l, i) => {
            return (
              <div
                key={l.name}
                className={(l.name.toLowerCase() + (l.name.toLowerCase() == page ? ' active ' : ' ') + ('nav-link nav-link-' + i))}
                onClick={onClickNav}
                value={l.name.toLowerCase()}
              >
                {l.name}
                <hr />
              </div>
            )
          })}
        </nav >
      </div >
    </div >
  )
}
