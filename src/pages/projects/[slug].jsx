import PageProject from '@/components/PageProject'
import { fetchAPI } from "../../../lib/api"

export default function Project({ project }) {
  const seo = {
    metaTitle: `${project.attributes.Title} // ${project.attributes.Type}`,
    metaDescription: project.attributes.Description,
  };

  return (
    <PageProject
      project={project}
      seo={seo}
    />
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
