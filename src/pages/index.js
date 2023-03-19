import Bounce from '../components/Bounce'
import Image from 'next/image'
import { Typewriter } from 'react-simple-typewriter'
import { useEffect } from 'react'
import profileImageLongslice1 from '../../public/images/profile-longslice-1.jpg'
import profileImageLongslice2 from '../../public/images/profile-longslice-2.jpg'
import profileImageAviary1 from '../../public/images/profile-aviary-1.jpg'
import profileImageAviary2 from '../../public/images/profile-aviary-2.jpg'
import profileImageBingo1 from '../../public/images/profile-bingo-1.jpg'
import profileImageBingo3 from '../../public/images/profile-bingo-3.jpg'
import profileImageErp1 from '../../public/images/profile-erp-1.jpg'
import profileImageErp3 from '../../public/images/profile-erp-3.jpg'
import profileImageApp1 from '../../public/images/profile-app-1.jpg'
import profileImageApp2 from '../../public/images/profile-app-2.jpg'

export default function Home() {
  useEffect(() => {
    // Add intersection observer to each img tag.
    const images = document.querySelectorAll('img')
    const config = {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0,
    }

    let observer = new IntersectionObserver((entries, self) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          self.unobserve(entry.target);
        }
      })
    }, config)

    images.forEach((image) => {
      observer.observe(image)
    })
  }, []);

  return (
    <>
      <div id="home" className="section-container">
        <div className="hero">
          <h2>Hi, I'm Sebastian Lesch 👋</h2>
          <p>
            A full stack developer.
          </p>
          <br />
          <p>
            I make pretty cool stuff with:
            <br />
            <Typewriter
              words={[
                'React.js',
                'HTML',
                'PHP',
                'AWS',
                'CSS/SASS/SCSS',
                'SQL',
                'REST',
                'Google Apps Script',
                'JavaScript',
                'Bootstrap',
                'Drupal',
                'Next.js',
                'Git',
              ]}
              loop={0}
              cursor={true}
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={80}
              delaySpeed={2000}
            />
          </p>
        </div>
      </div>
      <div id="projects" className="section-container">
        <div className="hero">
          <h2>Projects</h2>
          <p>Some things I made:</p>
        </div>
        <div className="projects-container">
          <div className="project longslice">
            <div className="project-description">
              <h3>Longslice.com /<span className="smaller">/ Website</span></h3>
              <p className="description">
                Leveraging Drupal CMS and modern web technologies, this project delivers a responsive, retro-styled website complete with an e-commerce store, blog, and interactive event listings.
              </p>
              <p>
                Key tech: <span className="smaller em">Drupal, PHP, E-Commerce, Responsive Design</span>
                <br />
                Visit the site: <a href="https://longslice.com" target="_blank" rel="noreferrer"><Bounce className="smaller em">Longslice.com</Bounce></a>
              </p>
            </div>
            <div className="project-images">
              <Image
                className="desktop"
                src={profileImageLongslice1}
                alt="Longslice.com Desktop"
              />
              <Image
                className="mobile"
                src={profileImageLongslice2}
                alt="Longslice.com Mobile"
              />
            </div>
          </div>
          <div className="project bingo">
            <div className="project-description">
              <h3>Battleship Bingo /<span className="smaller">/ Live Interactive Game</span></h3>
              <p className="description">
                A fun, real-time interactive game built with React.js and AWS. The host controls the board and has access to a custom sound board. Players follow along on their own device or watch the dashboard on the big screen.
              </p>
              <p>
                Key tech: <span className="smaller em">React.js, AWS, HTML/CSS</span>
              </p>
            </div>
            <div className="project-images">
              <Image
                className="desktop"
                src={profileImageBingo1}
                alt="Bingo.Longslice.com Desktop"
              />
              <Image
                className="mobile"
                src={profileImageBingo3}
                alt="Bingo.Longslice.com Admin"
              />
            </div>
          </div>
          <div className="project erp">
            <div className="project-description">
              <h3>Executive Dashboard /<span className="smaller">/ ERP</span></h3>
              <p className="description">
                Custom ERP system which provides a dashboard for executive management to view key metrics and KPIs. Built with Google Apps Script and integrates with REST APIs to pull in data.
              </p>
              <p>
                Key tech: <span className="smaller em">Google Apps Script, REST, Advanced Spreadsheet Formulas</span>
              </p>
            </div>
            <div className="project-images">
              <Image
                className="desktop"
                src={profileImageErp1}
                alt="ErpBrewpub.com Desktop"
              />
              <Image
                className="mobile"
                src={profileImageErp3}
                alt="ErpBrewpub.com Code"
              />
            </div>
          </div>
          <div className="project app">
            <div className="project-description">
              <h3>Sales Tracker /<span className="smaller">/ CRM</span></h3>
              <p className="description">
                Custom CRM system which provides a dashboard for sales teams to view key metrics and KPIs. Built with custom Drupal modules and integrates with REST APIs to pull in external data.
              </p>
              <p>
                Key tech: <span className="smaller em">Drupal, PHP, REST, Responsive Design</span>
              </p>
            </div>
            <div className="project-images">
              <Image
                className="desktop"
                src={profileImageApp1}
                alt="App.Longslice.com Desktop"
              />
              <Image
                className="mobile"
                src={profileImageApp2}
                alt="App.Longslice.com Code"
              />
            </div>
          </div>
          <div className="project aviary">
            <div className="project-description">
              <h3>AviaryBrewpub.com /<span className="smaller">/ Website</span></h3>
              <p className="description">
                Easily editable website for a local brewpub. Built with Drupal CMS and custom modules. Flexible and responsive design allows customers to easily view the menu and upcoming events.
              </p>
              <p>
                Key tech: <span className="smaller em">Drupal, PHP, E-Commerce, Responsive Design</span>
                <br />
                Visit the site: <a href="https://aviarybrewpub.com" target="_blank" rel="noreferrer"><Bounce className="smaller em">AviaryBrewpub.com</Bounce></a>
              </p>
            </div>
            <div className="project-images">
              <Image
                className="desktop"
                src={profileImageAviary1}
                alt="AviaryBrewpub.com Desktop"
              />
              <Image
                className="mobile"
                src={profileImageAviary2}
                alt="AviaryBrewpub.com Mobile"
              />
            </div>
          </div>
        </div>
      </div>
      <div id="contact" className="section-container">
        <div className="hero">
          <h2>Contact 📮</h2>
          <p>Get in touch</p>
        </div>
        <div className="contact-container">
          <p><a href="tel:4167273687"><Bounce>416.727.3687</Bounce></a></p>
          <p><a href="mailto:sebastian.lesch@gmail.com"><Bounce>sebastian.lesch@gmail.com</Bounce></a></p>
        </div>
      </div>
    </>
  )
}
