import Link from 'next/link'
import { useEffect } from 'react'

export default function Card({ className, description, images, href }) {
  // Intersection Observer.
  useEffect(() => {
    const images = document.querySelectorAll('.card')
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
    <div className={`card ${className}`}>
      <Link href={href}>
        <div className="card-images">
          {images}
        </div>
        <div className="card-description">
          {description}
        </div>
      </Link>
    </div>
  )
}