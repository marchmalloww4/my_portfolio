import { useState } from 'react'
import { certifications } from '../data/certifications'
import SectionHeading from '../components/SectionHeading'
import Card from '../components/Card'
import Reveal from '../components/Reveal'
import Lightbox from '../components/Lightbox'
import { assetPath } from '../lib/assetPath'

export default function Certifications() {
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  return (
    <section id="certifications" className="section">
      <div className="container">
        <SectionHeading eyebrow="Certifications" title="Credentials" />
        <div className="grid grid--3">
          {certifications.map((cert) => (
            <Reveal key={cert.title}>
              <Card>
                {cert.hasFile && cert.image ? (
                  <button className="certification__thumb" onClick={() => setLightboxSrc(assetPath(cert.image!))}>
                    <img src={assetPath(cert.image)} alt={cert.title} />
                  </button>
                ) : (
                  <p className="placeholder-note">Credential available on request</p>
                )}
                <h3 style={{ marginTop: 'var(--space-3)' }}>{cert.title}</h3>
                <p className="text-muted">{cert.issuer} &middot; {cert.year}</p>
              </Card>
            </Reveal>
          ))}
        </div>
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
