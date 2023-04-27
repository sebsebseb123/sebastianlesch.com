import Seo from '@/components/Seo'

export default function Page({ fold, body, seo, className = '' }) {
  return (
    <>
      <Seo seo={seo} />

      <div className={`section-container ${className}`}>
        <div className="fold">
          {fold}
        </div>

        <div className="page-body">
          {body}
        </div>
      </div>
    </>
  )
}