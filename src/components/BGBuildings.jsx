import '../assets/scss/BGBuildings.scss'

export default function BGBuildings({ page }) {
  const num_stores = 12;
  const num_street_lights = 4;

  const onClickProjects = e => {
    if (page != 'projects') {
      return;
    }

    if (e.target.classList.contains('sign11')) {
      console.log('in');
      window.open('https://longslice.com', '_blank');
    }
    else if (e.target.classList.contains('sign10')) {
      console.log('in');
      window.open('https://aviarybrewpub.com', '_blank');
    }
    else if (e.target.classList.contains('sign9')) {
      console.log('in');
      window.open('https://oneredstreamer.com', '_blank');
    }
    else if (e.target.classList.contains('sign8')) {
      console.log('in');
      window.open('https://pbsmusic.org/', '_blank');
    }
  }

  return (
    <>
      <div className="mobile copy about-copy">Hi, I'm Sebastian.<br />I use all kinds of tools to make some pretty neat things.</div>
      <div className="mobile copy projects-copy">I love working on fun projects that require creativity and problem solving.</div>
      <div className="mobile copy contact-copy"><a href="mailto:sebastian.lesch@gmail.com">sebastian.lesch@gmail.com</a></div>



      <div className="nightsky"></div>
      <div className="alleyway" data-numstores={num_stores}>
        <div className="copy about-copy">Hi, I'm Sebastian.<br />I use all kinds of tools to make some pretty neat things.</div>
        <div className="wall left">
          {Array.from(Array(num_stores).keys()).map((i) => {
            return (
              <svg key={'left-store' + (i + 1)} className={'store store' + (i + 1)} viewBox="0 0 100 100" />
            )
          })}
        </div>
        {Array.from(Array(num_stores).keys()).map((i) => {
          return (
            <div key={'left-sign' + (i + 1)} onClick={onClickProjects} className={'sign left sign' + (i + 1)}></div>
          )
        })}
        <div className="copy projects-copy">I love working on fun projects that require creativity and problem solving.</div>
        <div className="wall right">
          {Array.from(Array(num_stores).keys()).map((i) => {
            return (
              <svg key={'right-store' + (i + 1)} className={'store store' + (i + 1)} viewBox="0 0 100 100" />
            )
          })}
        </div>
        {Array.from(Array(num_stores).keys()).map((i) => {
          return (
            <div key={'right-sign' + (i + 1)} className={'sign right sign' + (i + 1)}></div>
          )
        })}
        <div className="wall bottom">
          {Array.from(Array(num_street_lights).keys()).map((i) => {
            return (
              <div key={'light' + (i + 1)} className={"light light" + (i + 1)}></div>
            )
          })}
        </div>
        <div className="copy contact-copy"><a href="mailto:sebastian.lesch@gmail.com">sebastian.lesch@gmail.com</a></div>
        <div className="wall back"></div>
      </div>
    </>
  )
}