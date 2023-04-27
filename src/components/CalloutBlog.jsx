import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

export default function ProjectCallout({ project }) {
  useEffect(() => {
    const images = document.querySelectorAll('img')
    const config = {
      rootMargin: '0px 0px -10% 0px',
      threshold: 0,
    }

    let observer = new IntersectionObserver((entries, self) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          self.unobserve(entry.target);
        }
      })
    }, config)

    images.forEach((image) => {
      observer.observe(image)
    })
  }, []);

  return (
    <div className="project longslice">
      <div className="project-description">
        <h3>
          <Link href={`/projects/${project.attributes.Slug}`}>
            {project.attributes.Title} /<span className="smaller">/ {project.attributes.Type}</span>
          </Link>
        </h3>
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
      </div>
      <div className="project-images">
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
      </div>
    </div>
  )
}