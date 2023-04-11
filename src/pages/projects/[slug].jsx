import ProjectPage from '@/components/ProjectPage'
import Seo from "@/components/Seo"
import { fetchAPI } from "../../../lib/api"

export default function Project({ project }) {
  const seo = {
    metaTitle: `${project.attributes.Title} // ${project.attributes.Type}`,
    metaDescription: project.attributes.Description,
  };

  return (
    <>
      <Seo seo={seo} />

      <div className="section-container">
        <ProjectPage project={project} key={project.id} />
      </div>
    </>
  );
};

export async function getStaticPaths() {
  const projectsRes = await fetchAPI("/projects", {
    fields: ["slug"],
  });

  return {
    paths: projectsRes.data.map((project) => ({
      params: {
        slug: project.attributes.Slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const projectsRes = await fetchAPI("/projects", {
    filters: {
      slug: params.slug,
    },
    populate: "*",
  });

  return {
    props: {
      project: projectsRes.data[0],
    },
    revalidate: 1,
  };
}
