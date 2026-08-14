import { aboutCopy, contactLinks } from '../data/site'
import SectionHeading from '../components/SectionHeading'
import Chip from '../components/Chip'
import Card from '../components/Card'
import Reveal from '../components/Reveal'
import { assetPath } from '../lib/assetPath'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="About" title="About Me" />
        <div className="grid grid--2">
          <Reveal>
            <Card>
              <h3>Introduction</h3>
              <p className="text-muted">{aboutCopy.introduction}</p>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card>
              <h3>My Story</h3>
              <p className="text-muted">{aboutCopy.story}</p>
            </Card>
          </Reveal>
        </div>
        <Reveal delay={0.15}>
          <div style={{ marginTop: 'var(--space-6)' }}>
            <h3 style={{ marginBottom: 'var(--space-3)' }}>What I'm Interested In</h3>
            <div className="chip-row">
              {aboutCopy.interests.map((interest) => (
                <Chip key={interest}>{interest}</Chip>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="about__contact">
            <a href={`mailto:${contactLinks.email}`}>{contactLinks.email}</a>
            <a href={contactLinks.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href={contactLinks.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={contactLinks.instagram} target="_blank" rel="noreferrer">Instagram</a>
            <a href={assetPath(aboutCopy.resumeHref)} download className="btn btn--primary">Download Resume</a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
