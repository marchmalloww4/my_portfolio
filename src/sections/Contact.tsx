import { contactLinks } from '../data/site'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container" style={{ textAlign: 'center' }}>
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Let's Connect"
            lede="I am open to internship opportunities, technical projects, collaboration, and opportunities to learn and contribute in AI, machine learning, data analytics, and intelligent systems."
          />
          <a href={`mailto:${contactLinks.email}`} className="btn btn--primary" style={{ marginTop: 'var(--space-4)' }}>
            {contactLinks.email}
          </a>
          <div className="hero__socials" style={{ justifyContent: 'center', marginTop: 'var(--space-6)' }}>
            <a href={contactLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={contactLinks.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={contactLinks.instagram} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
