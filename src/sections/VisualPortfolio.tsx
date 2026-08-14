import { useState } from 'react'
import { galleryItems, galleryCategories } from '../data/gallery'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Lightbox from '../components/Lightbox'
import { assetPath } from '../lib/assetPath'

export default function VisualPortfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  const visibleItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section id="visual-portfolio" className="section">
      <div className="container">
        <SectionHeading eyebrow="Visual Portfolio" title="Gallery" />
        <div className="gallery__filters">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              className={cat === activeCategory ? 'chip gallery__filter gallery__filter--active' : 'chip gallery__filter'}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="gallery">
          {visibleItems.map((item) => (
            <Reveal key={item.src}>
              <button className="gallery__item" onClick={() => setLightboxSrc(assetPath(item.src))}>
                <img src={assetPath(item.src)} alt={item.event} />
                <div className="gallery__caption">
                  <span>{item.event}</span>
                  <span className="text-muted">{item.role} &middot; {item.year}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
      <Lightbox
        src={lightboxSrc ?? ''}
        alt="Gallery photo"
        isOpen={lightboxSrc !== null}
        onClose={() => setLightboxSrc(null)}
      />
    </section>
  )
}
