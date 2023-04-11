import Seo from '@/components/Seo'
import ProjectCallout from '@/components/ProjectCallout'
import { fetchAPI } from "../../lib/api"

export default function Home({ projects }) {
  const seo = {
    metaTitle: 'Projects',
    metaDescription: "A selection of tech projects I've made.",
  };

  return (
    <>
      <Seo seo={seo} />

      <div id="projects" className="section-container">
        <div className="hero">
          <h1>Projects 💻</h1>
          <p>Some things I made:</p>
        </div>
        <div className="projects-container">
          {projects.map((project) => (
            <ProjectCallout project={project} key={project.id} />
          ))}
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
