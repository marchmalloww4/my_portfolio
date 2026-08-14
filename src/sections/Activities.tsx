import { useState } from 'react'
import { activities } from '../data/activities'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Lightbox from '../components/Lightbox'
import { assetPath } from '../lib/assetPath'

export default function Activities() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  return (
    <section id="activities" className="section">
      <div className="container">
        <SectionHeading eyebrow="Leadership & Activities" title="Timeline" />
        <ol className="timeline">
          {activities.map((entry) => (
            <li className="timeline__item" key={`${entry.role}-${entry.organization}`}>
              <Reveal>
                <div className="timeline__marker" />
                <div className="timeline__content">
                  <p className="timeline__year">{entry.year}</p>
                  <h3>{entry.role}</h3>
                  <p style={{ fontWeight: 600 }}>{entry.organization}</p>
                  <p className="text-muted">{entry.description}</p>
                  {entry.evidenceImage && (
                    <button className="timeline__evidence" onClick={() => setLightboxSrc(assetPath(entry.evidenceImage!))}>
                      View certificate
                    </button>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
      <Lightbox
        src={lightboxSrc ?? ''}
        alt="Certificate"
        isOpen={lightboxSrc !== null}
        onClose={() => setLightboxSrc(null)}
      />
    </section>
  )
}
