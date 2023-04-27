import Page from '@/components/Page'
import CardBlog from '@/components/CardBlog'
import { fetchAPI } from "../../lib/api"

export default function Blog({ blogs }) {
  const seo = {
    metaTitle: 'Blog',
    metaDescription: "Thoughts on tech.",
  };

  return (
    <Page
      seo={seo}
      className="blogs-page"
      fold={
        <div className='hero'>
          <h1>Blog ✍</h1>
          <p>Thoughts on tech:</p>
        </div>
      }
      body={
        <>
          <div className="card-container">
            {blogs.map((blog) => (
              <CardBlog blog={blog} key={blog.id} />
            ))}
          </div>
        </>
      }
    />
  )
}

export async function getStaticProps() {
  const blogsRes = await fetchAPI("/blogs", {
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
    sort: "PublishedOn:desc",
  });

  return {
    props: {
      blogs: blogsRes.data,
    },
    revalidate: 1,
  };
}
