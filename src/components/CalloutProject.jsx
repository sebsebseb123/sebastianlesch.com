import { createElement } from 'react'
import Callout from './Callout'
import Image from 'next/image'
import Link from 'next/link'

export default function CalloutProject({ project, header = 'h3' }) {
  return (
    <Callout
      className="project"
      description={
        <>
          {createElement(header, {}, (
            <Link href={`/projects/${project.attributes.Slug}`}>
              {project.attributes.Title} /<span className="smaller">/ {project.attributes.Type}</span>
            </Link>
          ))}
          <p className="description">
            {project.attributes.Description}
          </p>
          <p>
            Key tech: <span className="smaller em">{project.attributes.KeyTech}</span>
            {project.attributes.URL && (
              <>
                <br />
                Visit the site: <a href={project.attributes.URL} target="_blank" rel="noreferrer" className="smaller em">{project.attributes.URL}</a>
              </>
            )}
          </p>
        </>
      }
      images={
        <>
          <Link href={`/projects/${project.attributes.Slug}`}>
            <Image
              className="desktop"
              src={project.attributes.Thumb1.data.attributes.url}
              width={project.attributes.Thumb1.data.attributes.width}
              height={project.attributes.Thumb1.data.attributes.height}
              alt={project.attributes.Thumb1.data.attributes.alternativeText}
            />
            <Image
              className="mobile"
              src={project.attributes.Thumb2.data.attributes.url}
              width={project.attributes.Thumb2.data.attributes.width}
              height={project.attributes.Thumb2.data.attributes.height}
              alt={project.attributes.Thumb2.data.attributes.alternativeText}
            />
          </Link>
        </>
      }
    />
  )
}