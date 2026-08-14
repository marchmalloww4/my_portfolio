import { heroCopy, contactLinks } from '../data/site'
import Reveal from '../components/Reveal'
import { assetPath } from '../lib/assetPath'

export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="container hero__inner">
        <Reveal>
          <div className="hero__content">
            <p className="section__eyebrow">Aspiring AI &amp; ML Engineer</p>
            <h1>{heroCopy.name}</h1>
            <p className="hero__tagline">{heroCopy.tagline}</p>
            <p className="hero__intro text-muted">{heroCopy.intro}</p>
            <div className="hero__actions">
              <a href="#projects" className="btn btn--primary">View My Work</a>
              <a href="#contact" className="btn btn--ghost">Contact Me</a>
            </div>
            <div className="hero__socials">
              <a href={`mailto:${contactLinks.email}`} aria-label="Email">Email</a>
              <a href={contactLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a>
              <a href={contactLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a>
              <a href={contactLinks.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a>
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <img src={assetPath(heroCopy.profileImage)} alt={heroCopy.name} className="hero__portrait" />
        </Reveal>
      </div>
    </section>
  )
}
