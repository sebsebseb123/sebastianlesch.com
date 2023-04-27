import Moment from 'react-moment'
import Card from './Card'
import Image from 'next/image'

export default function CardBlog({ blog }) {
  return (
    <Card
      className="blog"
      href={`/blog/${blog.attributes.Slug}`}
      images={
        <Image
          src={blog.attributes.Seo.shareImage.data.attributes.url}
          width={blog.attributes.Seo.shareImage.data.attributes.width / 4}
          height={blog.attributes.Seo.shareImage.data.attributes.height / 4}
          alt={blog.attributes.Seo.shareImage.data.attributes.alternativeText}
        />
      }
      description={
        <>
          <h3>{blog.attributes.Title}</h3>
          <p className='smaller'>{blog.attributes.Seo.metaDescription}</p>
          <Moment format="MMM Do YYYY" className='smaller strong'>{blog.attributes.PublishedOn}</Moment>
        </>
      }
    />
  )
}