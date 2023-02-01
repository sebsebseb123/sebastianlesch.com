import '../assets/scss/About.scss'

export default function About() {
  return (
    <>
      <h2>Hi, I'm Sebastian.<br />I work with some pretty cool tech.</h2>
      <div className="badges">
        <svg className="skill-card css" viewBox="0 0 200 200">
          <line className='accent-line' x1="10" y1="85" x2="190" y2="85" strokeWidth={2} />
          <line className='accent-line' x1="10" y1="110" x2="190" y2="110" strokeWidth={2} />
          <text className='card-title' textAnchor="middle" x="50%" y="62.5%">CSS</text>

          <line x1="0" y1="3" x2="50" y2="3" strokeWidth={6} />
          <line x1="50" y1="6" x2="200" y2="6" strokeWidth={3} />

          <line x1="-3" y1="0" x2="-3" y2="100" strokeWidth={5} />
          <line x1="10" y1="0" x2="10" y2="50" strokeWidth={2} />


          <line x1="190" y1="150" x2="190" y2="200" strokeWidth={2} />
          <line x1="203" y1="100" x2="203" y2="200" strokeWidth={5} />

          <line x1="0" y1="194" x2="150" y2="194" strokeWidth={3} />
          <line x1="150" y1="197" x2="200" y2="197" strokeWidth={6} />
        </svg>

        <svg className="skill-card js" viewBox="0 0 200 200">
          {/* <line className='accent-line' x1="10" y1="85" x2="190" y2="85" strokeWidth={2} />
          <line className='accent-line' x1="10" y1="110" x2="190" y2="110" strokeWidth={2} /> */}
          <rect className='accent-line' x="0" y="0" width="200" height="200" strokeWidth={2} />
          <rect className='accent-line' x="43" y="48" width="110" height="100" strokeWidth={2} />

          <text className='card-title' textAnchor="middle" x="50%" y="62.5%">JS</text>

          <line x1="0" y1="30" x2="100" y2="3" strokeWidth={6} />
          <line x1="100" y1="3" x2="200" y2="3" strokeWidth={6} />

          {/* <line x1="-3" y1="0" x2="-3" y2="100" strokeWidth={5} /> */}
          <line x1="0" y1="40" x2="100" y2="13" strokeWidth={2} />
          <line x1="100" y1="187" x2="200" y2="160" strokeWidth={2} />
          {/* <line x1="203" y1="100" x2="203" y2="200" strokeWidth={5} /> */}

          <line x1="0" y1="197" x2="100" y2="197" strokeWidth={6} />
          <line x1="100" y1="197" x2="200" y2="170" strokeWidth={6} />
        </svg>

        <svg className="skill-card php" viewBox="0 0 200 200">
          {/* <line className='accent-line' x1="10" y1="85" x2="190" y2="85" strokeWidth={2} />
          <line className='accent-line' x1="10" y1="110" x2="190" y2="110" strokeWidth={2} /> */}
          <rect className='accent-box box-1' x="0" y="0" width="200" height="200" strokeWidth={2} />
          <rect className='accent-box box-2' x="10" y="10" width="180" height="180" strokeWidth={2} />
          <rect className='accent-box box-3' x="20" y="20" width="160" height="160" strokeWidth={2} />
          {/* <rect className='accent-box box-4' x="30" y="30" width="140" height="140" strokeWidth={2} /> */}

          <text className='card-title' textAnchor="middle" x="50%" y="62.5%">php</text>

          {/* <line x1="0" y1="30" x2="100" y2="3" strokeWidth={6} />
          <line x1="100" y1="3" x2="200" y2="3" strokeWidth={6} /> */}

          {/* <line x1="-3" y1="0" x2="-3" y2="100" strokeWidth={5} /> */}
          {/* <line x1="0" y1="40" x2="100" y2="13" strokeWidth={2} />
          <line x1="100" y1="187" x2="200" y2="160" strokeWidth={2} /> */}
          {/* <line x1="203" y1="100" x2="203" y2="200" strokeWidth={5} /> */}

          {/* <line x1="0" y1="197" x2="100" y2="197" strokeWidth={6} />
          <line x1="100" y1="197" x2="200" y2="170" strokeWidth={6} /> */}
        </svg>
        <svg className="skill-card aws" viewBox="0 0 200 200">
          {/* <line className='accent-line' x1="10" y1="85" x2="190" y2="85" strokeWidth={2} />
          <line className='accent-line' x1="10" y1="110" x2="190" y2="110" strokeWidth={2} /> */}
          <ellipse className='accent-ellipse' cx="100" cy="100" rx="150" ry="60" strokeWidth={2} />

          <text className='card-title' textAnchor="middle" x="50%" y="62.5%">AWS</text>

          <ellipse cx="0" cy="0" rx="30" ry="30" strokeWidth={2} />
          <ellipse cx="0" cy="200" rx="30" ry="30" strokeWidth={2} />
          <ellipse cx="200" cy="200" rx="30" ry="30" strokeWidth={2} />
          <ellipse cx="200" cy="0" rx="30" ry="30" strokeWidth={2} />

          {/* <line x1="0" y1="30" x2="100" y2="3" strokeWidth={6} />
          <line x1="100" y1="3" x2="200" y2="3" strokeWidth={6} /> */}

          {/* <line x1="-3" y1="0" x2="-3" y2="100" strokeWidth={5} /> */}
          {/* <line x1="0" y1="40" x2="100" y2="13" strokeWidth={2} />
          <line x1="100" y1="187" x2="200" y2="160" strokeWidth={2} /> */}
          {/* <line x1="203" y1="100" x2="203" y2="200" strokeWidth={5} /> */}

          {/* <line x1="0" y1="197" x2="100" y2="197" strokeWidth={6} />
          <line x1="100" y1="197" x2="200" y2="170" strokeWidth={6} /> */}
        </svg>
      </div>
    </>
  )
}