import Page from '@/components/Page'
import CalloutProject from '@/components/CalloutProject'
import { fetchAPI } from "../../lib/api"

export default function Projects({ projects }) {
  const seo = {
    metaTitle: 'Projects',
    metaDescription: "Tech projects I've made.",
  };

  return (
    <Page
      seo={seo}
      className="projects-page"
      fold={
        <div className='hero'>
          <h1>Projects 💻</h1>
          <p>Some things I made:</p>
        </div>
      }
      body={
        <>
          <div className="callout-container">
            {projects.map((project) => (
              <CalloutProject project={project} key={project.id} />
            ))}
          </div>
        </>
      }
    />
  )
}

export async function getStaticProps() {
  const projectsRes = await fetchAPI("/projects", {
    populate: "*",
    sort: "rank:asc",
  });

  return {
    props: {
      projects: projectsRes.data,
    },
    revalidate: 1,
  };
}
