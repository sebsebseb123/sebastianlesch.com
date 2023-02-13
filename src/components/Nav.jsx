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
    <>
      <nav>
        <svg viewBox="0 0 100 100">
          <g className={"nav-link-border"} >
            {links.map((l, i) => {
              return (
                <polygon key={l.name + i + '-nav-link-border'} className={l.name.toLowerCase() + (l.name.toLowerCase() == page ? ' active' : '')} points={l.points} />
              )
            })}
          </g>
          <g className="nav-border">
            <polygon points=".5 20.5 20.5 .5 80.5 .5 100.5 20.5 100.5 80.5 80.5 100.5 20.5 100.5 .5 80.5 .5 20.5" />
            <g className="accents">
              <polyline points="25.47 .5 5.5 20.5 5.5 85.5" />
              <polyline points="15.5 95.5 80.5 95.5 100.57 75.43" />
              <line x1="5.5" y1="80.5" x2="20.5" y2="95.5" />
              <line x1="75.35" y1=".5" x2="100.5" y2="25.56" />
              <line x1="20.5" y1="5.5" x2="80.5" y2="5.5" />
              <line x1="95.5" y1="20.5" x2="95.5" y2="80.5" />
            </g>
          </g>
          {links.map((l, i) => {
            return (
              <text key={l.name + i + '-nav-text'} className={l.name.toLowerCase() + (l.name.toLowerCase() == page ? ' active' : '')} onClick={onClickNav} value={l.name.toLowerCase()} textAnchor="start" x="23%" y={(i * 25) + 28}>
                {l.name}
              </text>
            )
          })}
        </svg>
      </nav>
    </>
  )
}
