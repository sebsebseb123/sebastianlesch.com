import Moment from 'react-moment'
import Page from '@/components/Page'
import Image from 'next/image'
import Markdown from '../../lib/markdown'

export default function PageBlog({ blog, seo }) {
  console.log(blog);
  return (
    <Page
      seo={seo}
      className="blog-page"
      fold={
        <div className="callout-container">
          <div className="callout blog appear">
            <div className="callout-description blog-title">
              <div>
                <strong>{blog.attributes.Title} /</strong>
                <span className="smaller">/ <Moment format="MMM Do YYYY" className=''>{blog.attributes.PublishedOn}</Moment></span>
              </div>
            </div>
            <div className="callout-images">
              <Image
                src={blog.attributes.Hero.data.attributes.url}
                width={blog.attributes.Hero.data.attributes.width / 1.5}
                height={blog.attributes.Hero.data.attributes.height / 1.5}
                alt={blog.attributes.Hero.data.attributes.alternativeText}
              />
            </div>
          </div>
        </div>
      }
      body={
        <div className="long-description markdown">
          <Markdown>{blog.attributes.Body}</Markdown>
        </div>
      }
    />
  )
}