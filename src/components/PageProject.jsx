import Page from '@/components/Page'
import Image from 'next/image'
import Markdown from '../../lib/markdown'

export default function PageProject({ project, seo }) {
  return (
    <Page
      seo={seo}
      className="project-page"
      fold={
        <div className='hero'>
          <h1>{project.attributes.Title}</h1>
          <p>{project.attributes.Type}</p>
        </div>
      }
      body={
        <>
          <div className="callout-container">
            <div className="callout project appear">
              <div className="callout-images">
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
          </div>
          <div className="long-description markdown">
            <Markdown>{project.attributes.LongDescription}</Markdown>
          </div>
          <hr className='eof' />
          <div className="callout-container split">
            <div className="callout split smaller">
              <div>
                <p className="description">
                  {project.attributes.Description}
                </p>
              </div>
              <div>
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
            </div>
          </div>
        </>
      }
    />
  )
}