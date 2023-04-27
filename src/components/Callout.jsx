import { useEffect } from 'react'

export default function Callout({ className, description, images }) {
  // Intersection Observer.
  useEffect(() => {
    const images = document.querySelectorAll('.callout')
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
    <div className={`callout ${className}`}>
      <div className="callout-images">
        {images}
      </div>
      <div className="callout-description">
        {description}
      </div>
    </div>
  )
}