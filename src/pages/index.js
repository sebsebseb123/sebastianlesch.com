import ProjectCallout from '@/components/ProjectCallout'
import Seo from '@/components/Seo'
import { fetchAPI } from "../../lib/api";
import { Typewriter } from 'react-simple-typewriter'

export default function Home({ projects }) {

  return (
    <>
      <Seo />

      <div id="home" className="section-container">
        <div className="hero">
          <h1>Hi, I&apos;m Sebastian Lesch 👋</h1>
          <p>
            A full stack developer.
          </p>
          <br />
          <p>
            I make pretty cool stuff with:
            <br />
            <Typewriter
              words={[
                'HTML',
                'CSS/SASS/SCSS',
                'JavaScript',
                'PHP',
                'SQL',
                'AWS',
                'REST',
                'React.js',
                'Google Apps Script',
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
          <h2>Projects 💻</h2>
          <p>Some things I made:</p>
        </div>
        <div className="projects-container">
          {projects.map((project) => (
            <ProjectCallout project={project} key={project.id} />
          ))}
        </div>
      </div>
      <div id="contact" className="section-container">
        <div className="hero">
          <h2>Contact 📮</h2>
          <p>Get in touch</p>
        </div>
        <div className="contact-container">
          <p><a href="tel:4167273687">416.727.3687</a></p>
          <p><a href="mailto:sebastian.lesch@gmail.com">sebastian.lesch@gmail.com</a></p>
        </div>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const projectsRes = await fetchAPI("/projects", {
    populate: "*",
  });

  return {
    props: {
      projects: projectsRes.data,
    },
    revalidate: 1,
  };
}
