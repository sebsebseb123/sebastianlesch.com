import PageBlog from '@/components/PageBlog'
import { fetchAPI } from "../../../lib/api"

export default function Blog({ blog }) {
  const seo = {
    metaTitle: `${blog.attributes.Title} // ${blog.attributes.Type}`,
    metaDescription: blog.attributes.Description,
  };

  return (
    <PageBlog
      seo={seo}
      blog={blog}
    />
  );
};

export async function getStaticPaths() {
  const blogsRes = await fetchAPI("/blogs", {
    fields: ["slug"],
  });

  return {
    paths: blogsRes.data.map((blog) => ({
      params: {
        slug: blog.attributes.Slug,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const blogsRes = await fetchAPI("/blogs", {
    filters: {
      slug: params.slug,
    },
    populate: {
      Attachments: {
        populate: '*',
      },
      Hero: {
        populate: '*',
      },
      Seo: {
        populate: '*',
      },
    },
  });

  return {
    props: {
      blog: blogsRes.data[0],
    },
    revalidate: 1,
  };
}
